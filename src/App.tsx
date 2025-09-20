import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// Sidebar is optional in this build; component may be disabled
// import Sidebar from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { SidebarProvider } from './context/SidebarContext';

// Core pages - minimal set for working build
const Home = lazy(() => import('./pages/Home'));
const ServicesPage = lazy(() => import('./pages/Services'));
const ContactPage = lazy(() => import('./pages/Contact'));
const AboutPage = lazy(() => import('./pages/About'));


  // Theme toggle is now handled by the context

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <EnhancedErrorBoundary>
      <ThemeProvider>
        <WhitelabelProvider>
          <Router>
            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
              <Header />
              
              <main className="flex-1">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    {/* Core Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    
                    
                    {/* 404 Route */}
                    <Route path="*" element={<div className="min-h-screen flex items-center justify-center text-white">Page not found</div>} />
                  </Routes>
                </Suspense>
              </main>
              
              <Footer />
              <SonnerToaster />
            </div>
            
            {/* Sidebar (disabled) */}
            {/* <Sidebar /> */}
          </Router>
        </WhitelabelProvider>
      </ThemeProvider>
    </EnhancedErrorBoundary>
  );

  const TestimonialCard = useMemo(() => 
    React.memo(({ testimonial }: { testimonial: typeof testimonials[0] }) => (
      <div className="testimonial-card">
        <div className="quote-mark">"</div>
        <div className="testimonial-content">
          <p>{testimonial.content}</p>
          <div className="testimonial-rating">
            {[...Array(testimonial.rating)].map((_, i) => (
              <span key={i} className="star filled">★</span>
            ))}
          </div>
        </div>
        <div className="testimonial-author">
          <div className="author-avatar">
            <LazyImage
              src={testimonial.avatar}
              alt={testimonial.name}
              className="avatar-placeholder"
            />
          </div>
          <div className="author-info">
            <h4 className="author-name">{testimonial.name}</h4>
            <p className="author-role">{testimonial.role}</p>
            <p className="author-company">{testimonial.company}</p>
          </div>
        </div>
      </div>
    )), []
  );

  return (
    <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
      <PerformanceMonitor />
      
      <header className="App-header">
        <div className="header-controls">
          <div className="current-time">
            {new Date().toLocaleTimeString()}
          </div>
          <button 
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
        
        <h1 className="main-title">Zion Tech Group</h1>
        <p className="subtitle">Revolutionary AI & Technology Solutions</p>
        
        <div className="hero-section">
          <h2>Transform Your Business with Cutting-Edge Technology</h2>
          <p>Leading provider of AI, quantum computing, space technology, and enterprise IT solutions.</p>
          <div className="cta-buttons">
            <button 
              className="btn-primary"
              onClick={() => setShowContactForm(true)}
            >
              Get Started
            </button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div 
                className="stat-number"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </header>
      
      <main>
        {/* Services Section */}
        <section className="services">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="testimonials-container">
            <h2>What Our Clients Say</h2>
            <p>Don't just take our word for it - hear from our satisfied customers</p>
            <div className="testimonials-carousel">
              <TestimonialCard testimonial={testimonials[currentTestimonial]} />
              <div className="carousel-controls">
                <button 
                  className="carousel-btn"
                  onClick={() => setCurrentTestimonial(prev => 
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )}
                >
                  ‹
                </button>
                <button 
                  className="carousel-btn"
                  onClick={() => setCurrentTestimonial(prev => 
                    (prev + 1) % testimonials.length
                  )}
                >
                  ›
                </button>
              </div>
              <div className="carousel-indicators">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentTestimonial ? 'active' : ''}`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        {showContactForm && (
          <section className="contact-form-section">
            <div className="contact-form-container">
              <h2>Get In Touch</h2>
              <p>Ready to transform your business? Let's discuss your project.</p>
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactData.name}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactData.email}
                      onChange={handleContactChange}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="company">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={contactData.company}
                    onChange={handleContactChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactData.message}
                    onChange={handleContactChange}
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Ready to Get Started?</h2>
          <p>Join hundreds of companies already using our cutting-edge technology solutions.</p>
          <div className="cta-buttons">
            <button 
              className="btn-primary"
              onClick={() => setShowContactForm(true)}
            >
              Start Your Project
            </button>
            <button className="btn-secondary">View Case Studies</button>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Zion Tech Group</h3>
              <p>Leading the future of technology with innovative AI, quantum computing, and space solutions.</p>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <span className="social-icon">💼</span>
                </a>
                <a href="#" className="social-link" aria-label="Twitter">
                  <span className="social-icon">🐦</span>
                </a>
                <a href="#" className="social-link" aria-label="GitHub">
                  <span className="social-icon">🐙</span>
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li><a href="#">AI & Machine Learning</a></li>
                <li><a href="#">Quantum Computing</a></li>
                <li><a href="#">Space Technology</a></li>
                <li><a href="#">Enterprise IT</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">News</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Policy</a></li>
                <li><a href="#">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
              <div className="footer-bottom-links">
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
                <a href="#">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
