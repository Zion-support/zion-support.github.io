import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [darkMode, setDarkMode] = useState(false)
  const [animatedCounts, setAnimatedCounts] = useState({ projects: 0, clients: 0, years: 0 })
  const [showContactForm, setShowContactForm] = useState(false)
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' })
  const [isLoading, setIsLoading] = useState(false)

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

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

    animateCount('projects', 150)
    animateCount('clients', 500)
    animateCount('years', 10)
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.body.classList.toggle('dark-mode')
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Thank you for your message! We will get back to you soon.')
    setContactForm({ name: '', email: '', message: '' })
    setShowContactForm(false)
    setIsLoading(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setContactForm(prev => ({ ...prev, [name]: value }))
  }

  const features = [
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
  ]

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <header className="App-header">
        <div className="header-controls">
          <button className="theme-toggle" onClick={toggleDarkMode}>
            {darkMode ? '☀️' : '🌙'}
          </button>
          <div className="current-time">
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
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <h2>Ready to Transform Your Business?</h2>
          <p>Get started with our cutting-edge technology solutions today.</p>
          <div className="cta-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary" onClick={() => setShowContactForm(true)}>Contact Us</button>
          </div>
        </div>

        {showContactForm && (
          <div className="contact-modal">
            <div className="contact-form-container">
              <div className="contact-form-header">
                <h3>Contact Us</h3>
                <button className="close-btn" onClick={() => setShowContactForm(false)}>×</button>
              </div>
              <form onSubmit={handleContactSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                  />
                </div>
                <button type="submit" className="btn-submit" disabled={isLoading}>
                  {isLoading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}

export default App