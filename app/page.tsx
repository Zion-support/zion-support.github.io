import React from 'react";"
import Link from 'next/link";"
import Navigation from './components/Navigation";"
import Footer from './components/Footer";"
import SEOHead from './components/SEOHead";"
import SEOOptimizer from './components/SEOOptimizer";"
import { useAnalytics } from './utils/analytics";

export default function HomePage() {
  const { trackPageView } = useAnalytics();
"
  // Track page view on mount"
  React.useEffect(() => {"'"
    trackPageView('/', 'Zion Tech Group - Advanced AI & IT Solutions");
  }, [trackPageView]);

  return ("
    <>"
      <SEOHead"
        title="Zion Tech Group - Advanced AI & IT Solutions"
        description="Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology."
        keywords="AI solutions, cybersecurity, cloud computing, digital transformation, blockchain, IT services, machine learning, artificial intelligence"
        url="https://zion.app"
        structuredData={{"
          "@context": "https://schema.org","
          "@type": "WebSite","
          "name": "Zion Tech Group","
          "description": "Advanced AI & IT Solutions for the Future","
          "url": "https://zion.app","
          "potentialAction": {"
            "@type": "SearchAction","
            "target": "https://zion.app/search?q={search_term_string}","
            "query-input": "required name=search_term_string"
          }
        }}
      />"
      <SEOOptimizer"
        structuredData={{"
          "@context": "https://schema.org","
          "@type": "Organization","
          "name": "Zion Tech Group","
          "description": "Advanced AI & IT Solutions for the Future","
          "url": "https://zion.app","
          "logo": "https://zion.app/logo.png","
          "sameAs": ["
            "https://twitter.com/ziontechgroup","
            "https://linkedin.com/company/ziontechgroup","
            "https://github.com/ziontechgroup"
          ],"
          "contactPoint": {"
            "@type": "ContactPoint","
            "telephone": "+1-555-123-4567","
            "contactType": "customer service"
          }"
        }}"
        canonicalUrl="https://zion.app"
      >"
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">"
        <Navigation />"
        {/* Hero Section */}"
        <div className="relative overflow-hidden">"
          {/* Animated background elements */}"
          <div className="absolute inset-0">"
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>"
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>"
          </div>"
          "
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">"
            <div className="text-center">"
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">"
                Zion Tech Group"
              </h1>"
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">"
                Advanced AI & IT Solutions for the Future"
              </p>"
              <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto animate-slide-up delay-200">
                Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. "
                Transform your business with cutting-edge technology."
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">"
                <Link"
                  href="/about"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:scale-105"
                >
                  Learn More"
                </Link>"
                <Link"
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>"
"
        {/* Services Preview */}"
        <div className="py-24 bg-white/5 backdrop-blur-sm">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">"
                Our <span className="gradient-text">Services</span>"
              </h2>"
              <p className="text-xl text-gray-300">
                Comprehensive technology solutions for modern businesses
              </p>"
            </div>"
            "
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">"
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/30 transition-colors">"
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">"
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />"
                  </svg>"
                </div>"
                <h3 className="text-xl font-semibold text-white mb-3">AI Solutions</h3>"
                <p className="text-gray-300">"
                  Advanced artificial intelligence solutions to automate and optimize your business processes."
                </p>"
                <div className="mt-4">"
                  <Link href="/ai-services" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                    Learn More →
                  </Link>
                </div>"
              </div>"
              "
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">"
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">"
                  <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">"
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />"
                  </svg>"
                </div>"
                <h3 className="text-xl font-semibold text-white mb-3">Cybersecurity</h3>"
                <p className="text-gray-300">"
                  Comprehensive security solutions to protect your digital assets and infrastructure."
                </p>"
                <div className="mt-4">"
                  <Link href="/cybersecurity" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                    Learn More →
                  </Link>
                </div>"
              </div>"
              "
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">"
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500/30 transition-colors">"
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">"
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />"
                  </svg>"
                </div>"
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Computing</h3>"
                <p className="text-gray-300">"
                  Scalable cloud infrastructure and migration services for modern applications."
                </p>"
                <div className="mt-4">"
                  <Link href="/cloud-infrastructure" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>"
"
        {/* Stats Section */}"
        <div className="py-24 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">"
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"
            <div className="text-center mb-16">"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">"
                Trusted by <span className="gradient-text">Leading Companies</span>"
              </h2>"
              <p className="text-xl text-gray-300">
                Delivering results that matter"
              </p>"
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">"
              <div className="animate-fade-in">"
                <div className="text-4xl font-bold text-white mb-2">500+</div>"
                <div className="text-gray-300">Projects Completed</div>"
              </div>"
              <div className="animate-fade-in delay-200">"
                <div className="text-4xl font-bold text-white mb-2">50+</div>"
                <div className="text-gray-300">Expert Team Members</div>"
              </div>"
              <div className="animate-fade-in delay-300">"
                <div className="text-4xl font-bold text-white mb-2">99%</div>"
                <div className="text-gray-300">Client Satisfaction</div>"
              </div>"
              <div className="animate-fade-in delay-400">"
                <div className="text-4xl font-bold text-white mb-2">24/7</div>"
                <div className="text-gray-300">Support Available</div>
              </div>
            </div>
          </div>
        </div>"
"
        {/* CTA Section */}"
        <div className="py-24 bg-white/5 backdrop-blur-sm">"
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">"
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12">"
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">"
                Ready to Transform Your Business?"
              </h2>"
              <p className="text-xl text-gray-300 mb-8">"
                Join hundreds of companies that trust us with their digital transformation journey."
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
                <Link"
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:scale-105"
                >
                  Start Your Journey"
                </Link>"
                <Link"
                  href="/ai-services"
                  className="inline-flex items-center px-8 py-3 border border-green-400 text-base font-medium rounded-md text-green-400 bg-transparent hover:bg-green-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400 transition-all duration-300 hover:scale-105"
                >
                  Explore AI Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        </div>
      </SEOOptimizer>
    </>
  );"
}"
"'"