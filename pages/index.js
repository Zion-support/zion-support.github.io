import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import TypewriterText from '../components/ui/TypewriterText'
import ScrollToTop from '../components/ui/ScrollToTop'
import MobileMenu from '../components/ui/MobileMenu'

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Zion Tech Group — Advanced IT & AI Services</title>
        <meta name="description" content="Leading provider of advanced IT solutions, AI services, and cutting-edge technology solutions for modern businesses." />
        <meta name="keywords" content="IT services, AI solutions, cloud computing, cybersecurity, DevOps, automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Zion Tech Group</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="text-white hover:text-purple-300 transition-colors">About</Link>
              <Link href="/services" className="text-white hover:text-purple-300 transition-colors">Services</Link>
              <Link href="/blog" className="text-white hover:text-purple-300 transition-colors">Blog</Link>
              <Link href="/contact" className="text-white hover:text-purple-300 transition-colors">Contact</Link>
            </div>
            <MobileMenu 
              links={[
                { href: '/about', label: 'About' },
                { href: '/services', label: 'Services' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' }
              ]} 
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <TypewriterText 
                texts={[
                  "Advanced IT & AI Solutions",
                  "Cloud Infrastructure Services", 
                  "Cybersecurity Solutions",
                  "DevOps & Automation",
                  "Data Analytics & Insights",
                  "Technology Consulting"
                ]}
                speed={100}
                deleteSpeed={50}
                pauseTime={2000}
                className="block"
              />
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mt-2">
                for Modern Businesses
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
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <Link href={service.href} className="text-purple-400 hover:text-purple-300 font-semibold">
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
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300 mb-4">
                  "Zion Tech Group transformed our infrastructure and helped us scale our AI capabilities. Their expertise is unmatched."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    JD
                  </div>
                  <div>
                    <div className="text-white font-semibold">John Davis</div>
                    <div className="text-gray-400 text-sm">CTO, TechCorp</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300 mb-4">
                  "The cloud migration was seamless and our security posture improved dramatically. Highly recommended!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    SM
                  </div>
                  <div>
                    <div className="text-white font-semibold">Sarah Miller</div>
                    <div className="text-gray-400 text-sm">VP Engineering, InnovateLab</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <div className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-300 mb-4">
                  "Their AI solutions automated our processes and increased efficiency by 300%. Game-changing results!"
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    RW
                  </div>
                  <div>
                    <div className="text-white font-semibold">Robert Wilson</div>
                    <div className="text-gray-400 text-sm">CEO, FutureTech</div>
                  </div>
                </div>
              </div>
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
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
            <div className="mt-4 flex justify-center space-x-6">
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}

