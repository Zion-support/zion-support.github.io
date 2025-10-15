import React from 'react';
import SEOHead from '../components/SEOHead';

const ComprehensiveITServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Comprehensive IT Services - Zion Tech Group"
        description="Complete IT solutions including cybersecurity, cloud infrastructure, DevOps automation, blockchain development, and IoT solutions. Expert IT consulting and support."
        keywords="IT services, cybersecurity, cloud infrastructure, DevOps, blockchain development, IoT solutions, IT consulting, managed IT services"
        canonicalUrl="https://ziontechgroup.com/comprehensive-it-services"
      />
      
      <div className="min-h-screen futuristic-bg particles">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-100 text-cyan-800 text-sm font-medium mb-6">
                💻 Complete IT Solutions
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Comprehensive
                <span className="block neon-text">IT Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Complete IT solutions for modern businesses. From cybersecurity to cloud infrastructure, we provide end-to-end technology services to keep your business secure, efficient, and competitive.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#pricing" className="cyber-button text-center">
                  Get Started
                </a>
                <a href="#contact" className="cyber-button text-center" style={{borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)'}}>
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text-purple">Our IT Services</h2>
              <p className="text-xl text-gray-300">Comprehensive technology solutions for every business need</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Cybersecurity */}
              <div className="glass-card p-8 hover-lift hover-glow floating">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-semibold text-white mb-4 neon-text">Advanced Cybersecurity</h3>
                <p className="text-gray-300 mb-6">
                  Comprehensive security solutions including threat detection, penetration testing, compliance management, and 24/7 monitoring.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> Threat Detection & Response
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> Penetration Testing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> Compliance Management
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> 24/7 Security Monitoring
                  </li>
                </ul>
                <div className="text-2xl font-bold text-cyan-400 mb-2">$2,000 - $25,000/month</div>
                <a href="/contact" className="cyber-button text-center w-full">
                  Get Quote
                </a>
              </div>

              {/* Cloud Infrastructure */}
              <div className="glass-card p-8 hover-lift hover-glow floating-delayed">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-semibold text-white mb-4 neon-text-purple">Cloud Infrastructure</h3>
                <p className="text-gray-300 mb-6">
                  Scalable cloud solutions with auto-scaling, disaster recovery, and cost optimization for maximum performance and reliability.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Cloud Migration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Auto-scaling
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Disaster Recovery
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Cost Optimization
                  </li>
                </ul>
                <div className="text-2xl font-bold text-purple-400 mb-2">$1,000 - $20,000/month</div>
                <a href="/contact" className="cyber-button text-center w-full" style={{borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)'}}>
                  Get Quote
                </a>
              </div>

              {/* DevOps Automation */}
              <div className="glass-card p-8 hover-lift hover-glow floating-slow">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="text-2xl font-semibold text-white mb-4 neon-text-pink">DevOps Automation</h3>
                <p className="text-gray-300 mb-6">
                  Complete DevOps solutions with CI/CD pipelines, infrastructure as code, and automated deployment processes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-pink-400 mr-2">✓</span> CI/CD Pipeline Setup
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-pink-400 mr-2">✓</span> Infrastructure as Code
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-pink-400 mr-2">✓</span> Container Orchestration
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-pink-400 mr-2">✓</span> Monitoring & Alerting
                  </li>
                </ul>
                <div className="text-2xl font-bold text-pink-400 mb-2">$5,000 - $100,000</div>
                <a href="/contact" className="cyber-button text-center w-full" style={{borderColor: 'var(--neon-pink)', color: 'var(--neon-pink)'}}>
                  Get Quote
                </a>
              </div>

              {/* Blockchain Development */}
              <div className="glass-card p-8 hover-lift hover-glow floating">
                <div className="text-4xl mb-4">⛓️</div>
                <h3 className="text-2xl font-semibold text-white mb-4 neon-text-green">Blockchain Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Secure blockchain applications including smart contracts, DApps, DeFi solutions, and cryptocurrency integration.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> Smart Contract Development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> DApp Development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> DeFi Solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-green-400 mr-2">✓</span> Security Audits
                  </li>
                </ul>
                <div className="text-2xl font-bold text-green-400 mb-2">$10,000 - $200,000</div>
                <a href="/contact" className="cyber-button text-center w-full" style={{borderColor: 'var(--neon-green)', color: 'var(--neon-green)'}}>
                  Get Quote
                </a>
              </div>

              {/* IoT Solutions */}
              <div className="glass-card p-8 hover-lift hover-glow floating-delayed">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-2xl font-semibold text-white mb-4 neon-text">IoT Development</h3>
                <p className="text-gray-300 mb-6">
                  End-to-end IoT solutions including device development, connectivity, data processing, and analytics platforms.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> Device Development
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> Connectivity Solutions
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> Data Processing
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-2">✓</span> Analytics Dashboard
                  </li>
                </ul>
                <div className="text-2xl font-bold text-cyan-400 mb-2">$15,000 - $300,000</div>
                <a href="/contact" className="cyber-button text-center w-full">
                  Get Quote
                </a>
              </div>

              {/* Data Analytics */}
              <div className="glass-card p-8 hover-lift hover-glow floating-slow">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-2xl font-semibold text-white mb-4 neon-text-purple">Business Intelligence</h3>
                <p className="text-gray-300 mb-6">
                  Advanced data analytics and business intelligence solutions with real-time insights and predictive analytics.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Data Visualization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Predictive Analytics
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Real-time Dashboards
                  </li>
                  <li className="flex items-center text-gray-300">
                    <span className="text-purple-400 mr-2">✓</span> Custom Reporting
                  </li>
                </ul>
                <div className="text-2xl font-bold text-purple-400 mb-2">$1,500 - $20,000/month</div>
                <a href="/contact" className="cyber-button text-center w-full" style={{borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)'}}>
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="py-20 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text-green">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300">We deliver exceptional IT solutions with unmatched expertise</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with years of experience in cutting-edge technologies</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold text-white mb-2">Fast Delivery</h3>
                <p className="text-gray-300">Rapid deployment and implementation with minimal downtime</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🔧</div>
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock technical support and monitoring services</p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💰</div>
                <h3 className="text-xl font-semibold text-white mb-2">Cost Effective</h3>
                <p className="text-gray-300">Competitive pricing with transparent billing and no hidden costs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div id="contact" className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and discover how our comprehensive IT services can accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-colors font-semibold">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-cyan-100">
              <p>Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComprehensiveITServicesPage;