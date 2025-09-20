import React, { useState, useEffect, useCallback, useMemo, Suspense, lazy } from 'react';
import './App.css';
<<<<<<< HEAD
<<<<<<< HEAD
import './styles/accessibility.css';
import PerformanceMonitor from './components/PerformanceMonitor';
import LazyImage from './components/LazyImage';
import ErrorBoundary from './components/ErrorBoundary';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import { useTheme } from './context/ThemeContext';
import SEOOptimizer from './utils/seoOptimizer';
=======
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
<<<<<<< HEAD
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { PerformanceMonitor } from "./components/PerformanceMonitor";
=======
import { ToasterProvider } from "./components/Toaster";
import { Sonner } from "./components/Sonner";
import { Sidebar } from "./components/Sidebar";
>>>>>>> origin/zion-enhancements-v5

const Home = React.lazy(() => import('./pages/Home'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const Categories = React.lazy(() => import('./pages/Categories'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const AboutPage = React.lazy(() => import('./pages/About'));
const CareersPage = React.lazy(() => import('./pages/Careers'));
const SitemapPage = React.lazy(() => import('./pages/Sitemap'));
const PrivacyPage = React.lazy(() => import('./pages/Privacy'));
const TermsPage = React.lazy(() => import('./pages/Terms'));
const PricingPage = React.lazy(() => import('./pages/Pricing'));
>>>>>>> origin/zion-enhancements-v6

// Lazy load heavy components for better performance
const VirtualList = lazy(() => import('./components/VirtualList'));
const MemoizedComponent = lazy(() => import('./components/MemoizedComponent'));
const LoadingSpinner = lazy(() => import('./components/LoadingSpinner'));
const SkeletonLoader = lazy(() => import('./components/SkeletonLoader'));

// Service data with more details
const services = [
  {
    id: 1,
    icon: '🤖',
    title: 'AI & Autonomous Systems',
    description: 'Advanced AI platforms and intelligent automation solutions.',
    features: ['Machine Learning', 'Neural Networks', 'Computer Vision', 'NLP'],
    pricing: 'From $5,000/month',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop'
  },
  {
    id: 2,
    icon: '⚛️',
    title: 'Quantum Computing',
    description: 'Next-generation quantum computing solutions for complex problems.',
    features: ['Quantum Algorithms', 'Quantum Simulation', 'Quantum Optimization', 'Quantum ML'],
    pricing: 'From $10,000/month',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop'
  },
  {
    id: 3,
    icon: '🚀',
    title: 'Space Technology',
    description: 'Satellite systems and advanced aerospace solutions.',
    features: ['Satellite Design', 'Launch Services', 'Space Analytics', 'Orbital Mechanics'],
    pricing: 'From $50,000/month',
    image: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop'
  },
  {
    id: 4,
    icon: '🏢',
    title: 'Enterprise IT',
    description: 'Infrastructure management and digital transformation services.',
    features: ['Cloud Migration', 'DevOps', 'Security', 'Monitoring'],
    pricing: 'From $2,000/month',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop'
  }
];

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechCorp',
    content: 'Zion Tech Group transformed our AI capabilities. Their solutions are cutting-edge and reliable.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CEO',
    company: 'QuantumLabs',
    content: 'The quantum computing solutions provided by Zion have revolutionized our research capabilities.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'VP Engineering',
    company: 'SpaceX',
    content: 'Outstanding space technology solutions. Zion delivered exactly what we needed for our satellite program.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
  }
];

// Stats data
const stats = [
  { label: 'Projects Completed', value: '500+', color: 'var(--primary-color)' },
  { label: 'Happy Clients', value: '200+', color: 'var(--secondary-color)' },
  { label: 'Years Experience', value: '10+', color: 'var(--accent-color)' },
  { label: 'Team Members', value: '50+', color: 'var(--purple-color)' }
];

function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Performance monitoring and loading state
  useEffect(() => {
    // Add performance monitoring
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (process.env.NODE_ENV === 'development') {
          // Performance monitoring in development
          // eslint-disable-next-line no-console
          console.log('Performance entry:', entry);
        }
      });
    });
    observer.observe({ entryTypes: ['measure', 'navigation'] });
    
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  // Theme toggle is now handled by the context

  // Testimonial carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Form validation
  const validateForm = useCallback(() => {
    const errors: Record<string, string> = {};
    
    if (!contactData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!contactData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!contactData.message.trim()) {
      errors.message = 'Message is required';
    } else if (contactData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }, [contactData]);

  // Contact form handlers
  const handleContactSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      if (process.env.NODE_ENV === 'development') {
        // Log contact form submission in development
        // eslint-disable-next-line no-console
        console.log('Contact form submitted:', contactData);
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real app, you would send this to your backend
      alert('Thank you for your message! We will get back to you soon.');
      setContactData({ name: '', email: '', company: '', message: '' });
      setShowContactForm(false);
      setFormErrors({});
    } catch (error) {
      alert('Sorry, there was an error sending your message. Please try again.');
      // eslint-disable-next-line no-console
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  }, [contactData, validateForm]);

  const handleContactChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactData(prev => ({ ...prev, [name]: value }));
  }, []);

  // Memoized components for performance
  const ServiceCard = useMemo(() => 
    React.memo(({ service }: { service: typeof services[0] }) => (
      <div className="service-card interactive-card">
        <LazyImage
          src={service.image}
          alt={service.title}
          className="service-image"
        />
        <div className="service-icon">{service.icon}</div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        <ul className="service-features">
          {service.features.map((feature, index) => (
            <li key={index} className="feature-item">✓ {feature}</li>
          ))}
        </ul>
        <div className="service-pricing">
          <span className="price">{service.pricing}</span>
        </div>
        <button className="service-btn">Learn More</button>
      </div>
    )), []
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
<<<<<<< HEAD
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
    <ErrorBoundary>
<<<<<<< HEAD
      <AccessibilityEnhancer>
        <SEOOptimizer
          title="Zion Tech Group - Revolutionary AI & Technology Solutions"
          description="Leading provider of AI, quantum computing, space technology, and enterprise IT solutions. Transform your business with cutting-edge technology."
          keywords="AI, artificial intelligence, quantum computing, space technology, enterprise IT, machine learning, automation, Zion Tech Group"
          url="https://zion.app"
          type="website"
        />
        <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
        <PerformanceMonitor />
        
        {/* Loading Screen */}
        {isLoading && (
          <div className="loading-screen" role="status" aria-label="Loading application">
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
            <p className="loading-text">Loading Zion Tech Group...</p>
          </div>
        )}
      
      <main id="main-content" className={isLoading ? 'loading' : ''}>
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
        <section className="services" id="services" aria-labelledby="services-heading">
          <h2 id="services-heading">Our Services</h2>
          <p className="services-description">
            Discover our comprehensive range of cutting-edge technology solutions designed to transform your business.
          </p>
          <div className="services-grid" role="list" aria-label="Our services">
            {services.map((service) => (
              <div key={service.id} role="listitem">
                <ServiceCard service={service} />
              </div>
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
          <section className="contact-form-section" id="contact" aria-labelledby="contact-heading">
            <div className="contact-form-container">
              <h2 id="contact-heading">Get In Touch</h2>
              <p>Ready to transform your business? Let's discuss your project.</p>
              <form className="contact-form" onSubmit={handleContactSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactData.name}
                      onChange={handleContactChange}
                      className={formErrors.name ? 'error' : ''}
                      aria-invalid={!!formErrors.name}
                      aria-describedby={formErrors.name ? 'name-error' : undefined}
                      required
                    />
                    {formErrors.name && (
                      <span id="name-error" className="error-message" role="alert">
                        {formErrors.name}
                      </span>
                    )}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactData.email}
                      onChange={handleContactChange}
                      className={formErrors.email ? 'error' : ''}
                      aria-invalid={!!formErrors.email}
                      aria-describedby={formErrors.email ? 'email-error' : undefined}
                      required
                    />
                    {formErrors.email && (
                      <span id="email-error" className="error-message" role="alert">
                        {formErrors.email}
                      </span>
                    )}
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
                    className={formErrors.message ? 'error' : ''}
                    aria-invalid={!!formErrors.message}
                    aria-describedby={formErrors.message ? 'message-error' : undefined}
                    required
                  />
                  {formErrors.message && (
                    <span id="message-error" className="error-message" role="alert">
                      {formErrors.message}
                    </span>
                  )}
                </div>
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                  aria-describedby="submit-status"
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-small"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
                <div id="submit-status" className="sr-only" aria-live="polite">
                  {isSubmitting ? 'Sending your message...' : 'Ready to send message'}
                </div>
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
      </main>
        </div>
      </AccessibilityEnhancer>
=======
      <WhitelabelProvider>
        <ThemeProvider>
          <Router>
            <Sidebar />
            <div className="ml-64">
              <Suspense fallback={<EnhancedSuspenseFallback />}>
                <Routes>
                  {baseRoutes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                  ))}
                </Routes>
              </Suspense>
            </div>
            <ToasterProvider>
              <Sonner />
            </ToasterProvider>
          </Router>
        </ThemeProvider>
      </WhitelabelProvider>
>>>>>>> origin/zion-enhancements-v5
    </ErrorBoundary>
=======
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { PageLoader } from "./components/ui/loading-spinner";
import { FloatingCTA } from "./components/FloatingCTA";
import { Footer } from "./components/Footer";

// Lazy load only the working pages
const Home = React.lazy(() => import('./pages/Home'));

function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <div className="App">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add more routes as components are fixed */}
=======

>>>>>>> origin/zion-enhancements-v6
          </Routes>
        </Suspense>
        
        <FloatingCTA />
        <Footer />
        
        <Toaster />
        <SonnerToaster />
<<<<<<< HEAD
      </div>
    </ThemeProvider>
>>>>>>> origin/ziontechgroup-improvements
=======
      </ThemeProvider>
    </WhitelabelProvider>
>>>>>>> origin/zion-enhancements-v6
  );
}

export default App;