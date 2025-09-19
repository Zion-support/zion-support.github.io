import React, { useState, useEffect, useMemo, useCallback, memo } from 'react'
import './App.css'

interface AnimatedCounts {
  projects: number
  clients: number
  years: number
}

interface Feature {
  title: string
  description: string
  icon: string
  color: string
}

const App = memo(() => {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [darkMode, setDarkMode] = useState(false)
  const [animatedCounts, setAnimatedCounts] = useState<AnimatedCounts>({ 
    projects: 0, 
    clients: 0, 
    years: 0 
  })

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Animate counters on component mount
  useEffect(() => {
    const animateCount = useCallback((key: keyof AnimatedCounts, target: number) => {
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
    }, [])

    animateCount('projects', 150)
    animateCount('clients', 500)
    animateCount('years', 10)
  }, [])

  const toggleDarkMode = useCallback(() => {
    setDarkMode(prev => {
      const newDarkMode = !prev
      document.body.classList.toggle('dark-mode', newDarkMode)
      return newDarkMode
    })
  }, [])

  const features: Feature[] = useMemo(() => [
    {
      title: "AI Solutions",
      description: "Advanced artificial intelligence services including machine learning, natural language processing, and computer vision.",
      icon: "🤖",
      color: "#6366f1"
    },
    {
      title: "Blockchain Technology",
      description: "Secure and decentralized solutions for modern businesses with smart contracts and DeFi platforms.",
      icon: "⛓️",
      color: "#10b981"
    },
    {
      title: "IT Services",
      description: "Comprehensive IT infrastructure management, cloud solutions, and digital transformation services.",
      icon: "💻",
      color: "#f59e0b"
    },
    {
      title: "Quantum Computing",
      description: "Next-generation quantum computing solutions for complex problem-solving and optimization.",
      icon: "⚛️",
      color: "#8b5cf6"
    }
  ], [])

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <div className="header-controls">
          <button 
            className="theme-toggle" 
            onClick={toggleDarkMode}
            aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
            type="button"
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
        
        <section className="stats-container" aria-label="Company Statistics">
          <div className="stat-card">
            <div className="stat-number" aria-label={`${animatedCounts.projects} projects completed`}>
              {animatedCounts.projects}+
            </div>
            <div className="stat-label">Projects Completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" aria-label={`${animatedCounts.clients} happy clients`}>
              {animatedCounts.clients}+
            </div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" aria-label={`${animatedCounts.years} years of experience`}>
              {animatedCounts.years}+
            </div>
            <div className="stat-label">Years Experience</div>
          </div>
        </section>

        <section className="features" aria-label="Our Services">
          {features.map((feature, index) => (
            <article 
              key={`${feature.title}-${index}`}
              className="feature-card"
              style={{ '--card-color': feature.color } as React.CSSProperties}
            >
              <div className="feature-icon" aria-hidden="true">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <button 
                className="learn-more-btn"
                aria-label={`Learn more about ${feature.title}`}
                type="button"
              >
                Learn More
              </button>
            </article>
          ))}
        </section>

        <section className="cta-section" aria-label="Call to Action">
          <h2>Ready to Transform Your Business?</h2>
          <p>Get started with our cutting-edge technology solutions today.</p>
          <div className="cta-buttons">
            <button 
              className="btn-primary"
              aria-label="Get started with our services"
              type="button"
            >
              Get Started
            </button>
            <button 
              className="btn-secondary"
              aria-label="Contact us for more information"
              type="button"
            >
              Contact Us
            </button>
          </div>
        </section>
      </header>
    </div>
  )
})

App.displayName = 'App'

export default App