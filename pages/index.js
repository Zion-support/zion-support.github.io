import Link from 'next/link'
import { useState, useEffect } from 'react'
import SEO from '../components/SEO'
import Head from 'next/head'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setIsLoading(false)
      setIsVisible(true)
    }, 300)
    
    // Add intersection observer for better performance
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in')
        }
      })
    }, observerOptions)
    
    // Observe elements after component mounts
    setTimeout(() => {
      const elements = document.querySelectorAll('[data-animate]')
      elements.forEach(el => observer.observe(el))
    }, 500)
    
    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const services = [
    {
      title: "AI & Machine Learning",
      description: "Advanced AI solutions for business automation and intelligence",
      icon: "🧠",
      href: "/services",
      features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics"]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses",
      icon: "☁️",
      href: "/services",
      features: ["Multi-Cloud Strategy", "Auto-scaling", "Cost Optimization"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business",
      icon: "🔒",
      href: "/services",
      features: ["Threat Detection", "Compliance Management", "Security Audits"]
    },
    {
      title: "DevOps & Automation",
      description: "Streamlined development and deployment processes",
      icon: "⚡",
      href: "/services",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring"]
    }
  ]

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CTO",
      content: "Zion Tech Group transformed our infrastructure with their AI solutions. Our efficiency increased by 300%.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      role: "Founder",
      content: "The cloud migration was seamless. We saved 60% on infrastructure costs while improving performance.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Global Finance",
      role: "Security Director",
      content: "Their cybersecurity solutions are top-notch. We've had zero security incidents since implementation.",
      rating: 5
    }
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-400 mx-auto mb-4"></div>
          <p className="text-white text-xl">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Zion Tech Group</h1>
            </div>
            <div className="hidden md:flex space-x-8" role="menubar">
              <Link href="/about" className="text-white hover:text-purple-300 transition-colors focus:ring-2 focus:ring-purple-400 focus:outline-none rounded" role="menuitem">About</Link>
              <Link href="/services" className="text-white hover:text-purple-300 transition-colors focus:ring-2 focus:ring-purple-400 focus:outline-none rounded" role="menuitem">Services</Link>
              <Link href="/contact" className="text-white hover:text-purple-300 transition-colors focus:ring-2 focus:ring-purple-400 focus:outline-none rounded" role="menuitem">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main id="main-content" className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Advanced IT & AI
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge technology, artificial intelligence, and innovative IT solutions designed for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105">
                Explore Services
              </Link>
              <Link href="/contact" className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                Get Started
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Services Section */}
          <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-white text-center mb-12">Our Core Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 group">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  {/* Features list */}
                  <div className="mb-4">
                    <ul className="text-sm text-gray-400 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={service.href} 
                    className="text-purple-400 hover:text-purple-300 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className={`mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-white text-center mb-12">What Our Clients Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-white/20 pt-4">
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-purple-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className={`mt-20 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join hundreds of companies that trust Zion Tech Group for their technology needs. Let's build the future together.
              </p>
              <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105 inline-block">
                Start Your Project Today
              </Link>
            </div>
          </div>
          </div>

          {/* Contact Section */}
          <div className={`mt-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white text-center mb-8">Get In Touch</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-3">📧</span>
                      <span className="text-gray-300">info@ziontechgroup.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-3">📞</span>
                      <span className="text-gray-300">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-purple-400 mr-3">📍</span>
                      <span className="text-gray-300">San Francisco, CA</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Quick Contact</h3>
                  <form className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <textarea
                      placeholder="Your Message"
                      rows="3"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    ></textarea>
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

