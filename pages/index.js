import { useState, useEffect } from 'react'
import SEO from '../components/seo/SEO'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Button from '../components/ui/Button'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsVisible(true)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const services = [
    {
      title: "AI & Machine Learning",
      description: "Advanced AI solutions for business automation and intelligence",
      icon: "🧠",
      href: "/services"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern businesses",
      icon: "☁️",
      href: "/services"
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business",
      icon: "🔒",
      href: "/services"
    },
    {
      title: "DevOps & Automation",
      description: "Streamlined development and deployment processes",
      icon: "⚡",
      href: "/services"
    }
  ]

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ]

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEO
        title="Zion Tech Group — Advanced IT & AI Services"
        description="Leading provider of advanced IT solutions, AI services, and cutting-edge technology solutions for modern businesses."
        keywords="IT services, AI solutions, cloud computing, cybersecurity, DevOps, automation"
        url="https://ziontechgroup.com"
      />

      <Header />

      {/* Hero Section */}
      <main className="pt-20">
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
              <Button href="/services" variant="primary">
                Explore Services
              </Button>
              <Button href="/contact" variant="secondary">
                Get Started
              </Button>
            </div>
          </div>

          {/* Stats Section */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center" role="region" aria-label={`${stat.number} ${stat.label}`}>
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
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105 focus-within:ring-2 focus-within:ring-purple-500 focus-within:ring-opacity-50">
                  <div className="text-4xl mb-4" role="img" aria-label={service.title}>{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Button href={service.href} variant="outline" size="sm">
                    Learn More →
                  </Button>
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
              <Button href="/contact" variant="primary">
                Start Your Project Today
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

