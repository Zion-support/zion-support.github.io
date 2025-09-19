import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react'
import './App.css'

// Lazy load components for better performance
const ContactForm = lazy(() => import('./components/ContactForm'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Footer = lazy(() => import('./components/Footer'))
const SEO = lazy(() => import('./components/SEO'))

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or default to system preference
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) return JSON.parse(saved)
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [animatedCounts, setAnimatedCounts] = useState({ projects: 0, clients: 0, years: 0 })
  const [isLoading, setIsLoading] = useState(true)

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Persist dark mode preference
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  // Animate counters on component mount
  useEffect(() => {
    const animateCount = (key: keyof typeof animatedCounts, target: number) => {
      const duration = 2000
      const steps = 60
      const increment = target / steps
      let current = 0
      
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }
        setAnimatedCounts(prev => ({ ...prev, [key]: Math.floor(current) }))
      }, duration / steps)
    }

    // Simulate loading time for better UX
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
      animateCount('projects', 150)
      animateCount('clients', 500)
      animateCount('years', 10)
    }, 1000)

    return () => clearTimeout(loadingTimer)
  }, [])

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev)
  }, [])

  const features = useMemo(() => [
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence services including machine learning, natural language processing, and computer vision.",
      icon: "🤖",
      color: "#6366f1",
      link: "/services/ai"
    },
    {
      title: "Blockchain Technology",
      description: "Secure and decentralized solutions for modern businesses with smart contracts and DeFi platforms.",
      icon: "⛓️",
      color: "#10b981",
      link: "/services/blockchain"
    },
    {
      title: "IT Services",
      description: "Comprehensive IT infrastructure management, cloud solutions, and digital transformation services.",
      icon: "💻",
      color: "#f59e0b",
      link: "/services/it"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum computing solutions for complex problem-solving and optimization.",
      icon: "⚛️",
      color: "#8b5cf6",
      link: "/services/quantum"
    },
    {
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions to protect your digital assets and infrastructure.",
      icon: "🛡️",
      color: "#ef4444",
      link: "/services/cybersecurity"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      icon: "☁️",
      color: "#06b6d4",
      link: "/services/cloud"
    }
  ], [])

  if (isLoading) {
    return (
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <div className="loading-screen">
          <div className="loading-spinner"></div>
          <h2>Loading Zion Tech Group...</h2>
        </div>
      </div>
    )
  }

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Suspense fallback={null}>
        <SEO />
      </Suspense>
      <header className="App-header">
        <div className="header-controls">
          <button 
            className="theme-toggle" 
            onClick={toggleDarkMode}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            title={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          <div className="current-time" role="timer" aria-live="polite">
            {currentTime.toLocaleTimeString()}
          </div>
        </div>
        
        <h1 className="main-title">
          <span className="title-highlight">Zion Tech Group</span>
        </h1>
        <p className="subtitle">Welcome to our innovative technology solutions</p>
        
        <div className="stats-container">
          <div className="stat-card">
            <div className="stat-number">{animatedCounts.projects}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{animatedCounts.clients}+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{animatedCounts.years}+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>

        <div className="features">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
              style={{ '--card-color': feature.color } as React.CSSProperties}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <button 
                className="learn-more-btn"
                onClick={() => window.location.href = feature.link}
                aria-label={`Learn more about ${feature.title}`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>

        <Suspense fallback={<div className="loading-placeholder">Loading testimonials...</div>}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<div className="loading-placeholder">Loading contact form...</div>}>
          <ContactForm />
        </Suspense>

        <div className="cta-section">
          <h2>Ready to Transform Your Business?</h2>
          <p>Get started with our cutting-edge technology solutions today.</p>
          <div className="cta-buttons">
            <button 
              className="btn-primary"
              onClick={() => window.location.href = '/contact'}
              aria-label="Get started with our services"
            >
              Get Started
            </button>
            <button 
              className="btn-secondary"
              onClick={() => window.location.href = '/contact'}
              aria-label="Contact us for more information"
            >
              Contact Us
            </button>
          </div>
        </div>
      </header>

      <Suspense fallback={<div className="loading-placeholder">Loading footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App