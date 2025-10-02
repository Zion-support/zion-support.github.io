import React from 'react';
import Link from 'next/link';

export default function ITServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              IT Services & Infrastructure
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Comprehensive IT infrastructure, cloud migration, and DevOps services. 
              Transform your technology stack with enterprise-grade solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started Today
              </Link>
              <Link 
                href="/case-studies" 
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-800 transition-colors"
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
              Our IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end IT solutions for modern enterprises
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-semibold mb-3">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">
                Seamless migration to cloud infrastructure with zero downtime and cost optimization.
              </p>
              <Link href="/services/cloud-migration" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-semibold mb-3">DevOps & SRE</h3>
              <p className="text-gray-600 mb-4">
                Automated CI/CD pipelines, infrastructure management, and site reliability engineering.
              </p>
              <Link href="/services/devops-automation" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-3">Infrastructure Management</h3>
              <p className="text-gray-600 mb-4">
                Complete infrastructure management with monitoring, scaling, and optimization.
              </p>
              <Link href="/services/performance-monitoring" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-3">Security & Compliance</h3>
              <p className="text-gray-600 mb-4">
                Enterprise-grade security with threat detection, compliance management, and incident response.
              </p>
              <Link href="/services/cybersecurity-consulting" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🗄️</div>
              <h3 className="text-xl font-semibold mb-3">Database Management</h3>
              <p className="text-gray-600 mb-4">
                Database optimization, backup management, and performance tuning for all major databases.
              </p>
              <Link href="/services/database-optimization" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">Network Security</h3>
              <p className="text-gray-600 mb-4">
                Advanced network security with firewall management and intrusion detection systems.
              </p>
              <Link href="/services/network-security" className="text-blue-600 hover:text-blue-800 font-medium">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technology Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Deep expertise across the entire technology stack
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">☁️</div>
              <div className="font-semibold text-gray-900">Cloud Platforms</div>
              <div className="text-gray-600">AWS, Azure, GCP</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🐳</div>
              <div className="font-semibold text-gray-900">Containers</div>
              <div className="text-gray-600">Docker, Kubernetes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <div className="font-semibold text-gray-900">DevOps Tools</div>
              <div className="text-gray-600">Jenkins, GitLab CI</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🗄️</div>
              <div className="font-semibold text-gray-900">Databases</div>
              <div className="text-gray-600">PostgreSQL, MongoDB</div>
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
              Our IT services deliver measurable business impact
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">60%</div>
              <div className="text-gray-600">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">90%</div>
              <div className="text-gray-600">Faster Deployment</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us help you build a robust, scalable, and secure IT foundation for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Start Your IT Transformation
            </Link>
            <Link 
              href="/case-studies" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}