import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense, useRef } from 'react'
import './App.css'

// Lazy load components for better performance
const ContactForm = lazy(() => import('./components/ContactForm'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Footer = lazy(() => import('./components/Footer'))
const SEO = lazy(() => import('./components/SEO'))
const PerformanceMonitor = lazy(() => import('./components/PerformanceMonitor'))

// Performance monitoring
const performanceObserver = typeof window !== 'undefined' && 'PerformanceObserver' in window 
  ? new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'measure') {
          // Performance measurement logged
        }
      })
    })
  : null

if (performanceObserver) {
  performanceObserver.observe({ entryTypes: ['measure'] })
}

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
  const [isVisible, setIsVisible] = useState(false)
  const [, setScrollY] = useState(0)
  const appRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

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

  // Scroll tracking for animations
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Animate counters on component mount with performance optimization
  useEffect(() => {
    if (!isVisible) return

    const animateCount = (key: keyof typeof animatedCounts, target: number) => {
      const duration = 2000
      const startTime = performance.now()
      
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3)
        const current = Math.floor(target * easeOutCubic)
        
        setAnimatedCounts(prev => ({ ...prev, [key]: current }))
        
        if (progress < 1) {
          window.requestAnimationFrame(animate)
        }
      }
      
      window.requestAnimationFrame(animate)
    }

    // Simulate loading time for better UX
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
      if (isVisible) {
        animateCount('projects', 150)
        animateCount('clients', 500)
        animateCount('years', 10)
      }
    }, 1000)

    return () => clearTimeout(loadingTimer)
  }, [isVisible])

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => !prev)
  }, [])

  // Keyboard navigation support
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      // Close any open modals or reset focus
      document.activeElement?.blur()
    }
  }, [])

  // Enhanced feature click handler with analytics
  const handleFeatureClick = useCallback((feature: typeof features[0]) => {
    // Performance tracking
    if (performanceObserver) {
      performance.mark(`feature-click-${feature.title}`)
    }
    
    // Analytics tracking (placeholder for real analytics)
    // Feature click tracked: ${feature.title}
    
    // Navigate to feature page
    window.location.href = feature.link
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
    <div 
      ref={appRef}
      className={`App ${darkMode ? 'dark-mode' : ''}`}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
      role="main"
      aria-label="Zion Tech Group - Technology Solutions"
    >
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
            tabIndex={0}
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
        
        <div 
          ref={statsRef}
          className="stats-container"
          role="region"
          aria-label="Company Statistics"
        >
          <div className="stat-card" role="img" aria-label={`${animatedCounts.projects} projects completed`}>
            <div className="stat-number" aria-live="polite">{animatedCounts.projects}+</div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card" role="img" aria-label={`${animatedCounts.clients} happy clients`}>
            <div className="stat-number" aria-live="polite">{animatedCounts.clients}+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card" role="img" aria-label={`${animatedCounts.years} years of experience`}>
            <div className="stat-number" aria-live="polite">{animatedCounts.years}+</div>
            <div className="stat-label">Years Experience</div>
          </div>
        </div>

        <div 
          className="features"
          role="region"
          aria-label="Our Services"
        >
          {features.map((feature, index) => (
            <article 
              key={index}
              className="feature-card"
              style={{ '--card-color': feature.color } as React.CSSProperties}
              role="article"
              aria-labelledby={`feature-title-${index}`}
            >
              <div className="feature-icon" role="img" aria-label={`${feature.title} icon`}>
                {feature.icon}
              </div>
              <h3 id={`feature-title-${index}`}>{feature.title}</h3>
              <p>{feature.description}</p>
              <button 
                className="learn-more-btn"
                onClick={() => handleFeatureClick(feature)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    handleFeatureClick(feature)
                  }
                }}
                aria-label={`Learn more about ${feature.title}`}
                tabIndex={0}
              >
                Learn More
              </button>
            </article>
          ))}
        </div>

        <Suspense fallback={<div className="loading-placeholder">Loading testimonials...</div>}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<div className="loading-placeholder">Loading contact form...</div>}>
          <ContactForm />
        </Suspense>

        <section 
          className="cta-section"
          role="region"
          aria-labelledby="cta-heading"
        >
          <h2 id="cta-heading">Ready to Transform Your Business?</h2>
          <p>Get started with our cutting-edge technology solutions today.</p>
          <div className="cta-buttons">
            <button 
              className="btn-primary"
              onClick={() => window.location.href = '/contact'}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  window.location.href = '/contact'
                }
              }}
              aria-label="Get started with our services"
              tabIndex={0}
            >
              Get Started
            </button>
            <button 
              className="btn-secondary"
              onClick={() => window.location.href = '/contact'}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  window.location.href = '/contact'
                }
              }}
              aria-label="Contact us for more information"
              tabIndex={0}
            >
              Contact Us
            </button>
          </div>
        </section>
      </header>

      <Suspense fallback={<div className="loading-placeholder">Loading footer...</div>}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <PerformanceMonitor />
      </Suspense>
    </div>
  )
}

export default App