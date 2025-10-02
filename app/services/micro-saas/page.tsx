import React from 'react';
import Link from 'next/link';

export default function MicroSaaSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Scalable software-as-a-service applications designed for rapid deployment and growth. 
              Build faster, scale smarter with our micro SaaS platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                href="/case-studies" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Rapid development and deployment of scalable SaaS applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Rapid Development</h3>
              <p className="text-gray-600 mb-4">
                Fast-track your SaaS development with our proven frameworks and pre-built components.
              </p>
              <Link href="/services/ai-automation-platform" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-3">Scalable Architecture</h3>
              <p className="text-gray-600 mb-4">
                Cloud-native architecture designed to handle millions of users and transactions.
              </p>
              <Link href="/services/ai-cloud-infrastructure-2025" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔌</div>
              <h3 className="text-xl font-semibold mb-3">API-First Design</h3>
              <p className="text-gray-600 mb-4">
                RESTful APIs and microservices architecture for seamless integration and scalability.
              </p>
              <Link href="/services/api-management" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-3">Cloud-Native</h3>
              <p className="text-gray-600 mb-4">
                Built for the cloud with auto-scaling, load balancing, and high availability.
              </p>
              <Link href="/services/cloud-migration" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade security with SOC 2, GDPR, and HIPAA compliance built-in.
              </p>
              <Link href="/services/cybersecurity-consulting" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Monitoring</h3>
              <p className="text-gray-600 mb-4">
                Real-time analytics, performance monitoring, and user behavior insights.
              </p>
              <Link href="/services/performance-monitoring" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Modern technologies for building robust SaaS applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚛️</div>
              <div className="font-semibold text-gray-900">React & Next.js</div>
              <div className="text-gray-600">Frontend Framework</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🐍</div>
              <div className="font-semibold text-gray-900">Python & Node.js</div>
              <div className="text-gray-600">Backend Services</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🐳</div>
              <div className="font-semibold text-gray-900">Docker & Kubernetes</div>
              <div className="text-gray-600">Containerization</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">☁️</div>
              <div className="font-semibold text-gray-900">AWS & Azure</div>
              <div className="text-gray-600">Cloud Platform</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our micro SaaS solutions deliver exceptional performance
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50x</div>
              <div className="text-gray-600">Faster Deployment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10M+</div>
              <div className="text-gray-600">Users Supported</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your SaaS Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let us help you build and scale your micro SaaS application with our proven platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Building Today
            </Link>
            <Link 
              href="/case-studies" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}