import React from 'react'
import { Phone, CheckCircle, Star, ArrowRight } from 'lucide-react'
import { CheckCircle, Star, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Zion Tech Group - Advanced AI and IT Solutions',
  description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.'
}

export default function HomePage
HomePage.displayName = "HomePage"() {
  return (
    <div className=&quot;min-h-screen bg-white&quot;></div>
      {/* Header */}
      <header className=&quot;bg-white border-b border-gray-200&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;flex justify-between items-center py-6&quot;></div>
            <div className=&quot;flex items-center&quot;></div>
              <a href=&quot;/&quot; className=&quot;text-2xl font-bold text-gray-900&quot;>
                Zion Tech Group
              </a>
            </div>
            <nav className=&quot;hidden md:flex space-x-8&quot;>
              <a href=&quot;/&quot; className=&quot;text-gray-900 hover:text-blue-600&quot;>
                Home
              </a>
              <a href=&quot;/services&quot; className=&quot;text-gray-900 hover:text-blue-600&quot;>
                Services
              </a>
              <a href=&quot;/blog&quot; className=&quot;text-gray-900 hover:text-blue-600&quot;>
                Blog
              </a>
              <a href=&quot;/contact&quot; className=&quot;text-gray-900 hover:text-blue-600&quot;>
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>
      <main>
        {/* Hero Section */}
        <section className=&quot;bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
            <h1 className=&quot;text-4xl md:text-6xl font-bold mb-6&quot;></h1>
              Transform Your Business with
              <span className=&quot;block text-blue-200&quot;>AI-Powered Solutions</span>
            </h1>
            <p className=&quot;text-xl md:text-2xl mb-8 text-blue-100&quot;>
              Zion Tech Group delivers cutting-edge AI micro SaaS services, cloud automation,
              and enterprise IT solutions that drive growth, efficiency, and innovation.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a href=&quot;/services&quot;
                className=&quot;inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold&quot;
              >
                Explore Our Services
                <a className=&quot;w-5 h-5 ml-2&quot; />
              </a>
              <a href=&quot;tel:+13024640950&quot;
                className=&quot;inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold&quot;
              >
                <Phone className=&quot;w-5 h-5 mr-2&quot; />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className=&quot;py-20 bg-gray-50&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
            <div className=&quot;text-center mb-16&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-gray-900 mb-4&quot;>
                Why Choose Zion Tech Group?
              </h2>
              <p className=&quot;text-xl text-gray-600&quot;>
                We deliver measurable results through innovative AI solutions
              </p>
            </div>
            <div className=&quot;grid md:grid-cols-3 gap-8&quot;></div>
              <div className=&quot;bg-white p-8 rounded-lg shadow-lg&quot;></div>
                <div className=&quot;w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6&quot;></div>
                  <CheckCircle className=&quot;w-6 h-6 text-blue-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-4&quot;>
                  Proven Results
                </h3>
                <p className=&quot;text-gray-600&quot;>
                  Our AI solutions have delivered 300% ROI and 70% cost reduction for enterprise clients.
                </p>
              </div>
              <div className=&quot;bg-white p-8 rounded-lg shadow-lg&quot;></div>
                <div className=&quot;w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6&quot;></div>
                  <Star className=&quot;w-6 h-6 text-green-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-4&quot;>
                  Expert Team
                </h3>
                <p className=&quot;text-gray-600&quot;>
                  Our team of AI experts and engineers brings decades of experience in enterprise transformation.
                </p>
              </div>
              <div className=&quot;bg-white p-8 rounded-lg shadow-lg&quot;></div>
                <div className=&quot;w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6&quot;></div>
                  <a className=&quot;w-6 h-6 text-purple-600&quot; />
                </div>
                <h3 className=&quot;text-xl font-semibold text-gray-900 mb-4&quot;>
                  Fast Implementation
                </h3>
                <p className=&quot;text-gray-600&quot;>
                  Get your AI solutions up and running quickly with our streamlined implementation process.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className=&quot;py-20 bg-blue-600 text-white&quot;></section>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center&quot;></div>
            <h2 className=&quot;text-3xl md:text-4xl font-bold mb-6&quot;>
              Ready to Transform Your Business?
            </h2>
            <p className=&quot;text-xl mb-8 text-blue-100&quot;>
              Let&apos;s discuss how our AI solutions can drive your success.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
              <a href=&quot;/contact&quot;
                className=&quot;inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold&quot;
              >
                Get Started Today
                <a className=&quot;w-5 h-5 ml-2&quot; />
              </a>
              <a href=&quot;/blog&quot;
                className=&quot;inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold&quot;
              >
                View Our Blog
                <ArrowRight className=&quot;w-5 h-5 ml-2&quot; />
              </a>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className=&quot;bg-gray-900 text-white py-12&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;></div>
          <div className=&quot;text-center&quot;></div>
            <h3 className=&quot;text-2xl font-bold mb-4&quot;>Zion Tech Group</h3>
            <p className=&quot;text-gray-400 mb-6&quot;>
              Advanced AI and IT Solutions for Enterprise Transformation
            </p>
            <div className=&quot;flex justify-center space-x-6&quot;></div>
              <a href=&quot;/services&quot; className=&quot;text-gray-400 hover:text-white&quot;>Services</a>
              <a href=&quot;/about&quot; className=&quot;text-gray-400 hover:text-white&quot;>About</a>
              <a href=&quot;/contact&quot; className=&quot;text-gray-400 hover:text-white&quot;>Contact</a>
              <a href=&quot;/privacy&quot; className=&quot;text-gray-400 hover:text-white&quot;>Privacy</a>
            </div>
            <div className=&quot;mt-8 pt-8 border-t border-gray-800&quot;></div>
              <p className=&quot;text-gray-400 text-sm&quot;>
                © 2026 Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
