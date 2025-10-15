import React from 'react';
import SEOHead from '../components/SEOHead';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Services - Zion Tech Group"
        description="Explore our comprehensive range of AI and IT services designed to accelerate your business growth."
        keywords="AI services, IT services, cloud solutions, digital transformation, business automation, technology consulting"
        canonicalUrl="https://ziontechgroup.com/services"
      />
      
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background */}
        <div className="cyber-grid absolute inset-0 opacity-20"></div>
        <div className="particles absolute inset-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive AI and IT solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card-cyber hover-lift group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-4">AI Services</h3>
              <p className="text-gray-300">
                Advanced artificial intelligence solutions including machine learning, natural language processing, and computer vision.
              </p>
            </div>
            <div className="card-cyber hover-lift group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">☁️</div>
              <h3 className="text-xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
              <p className="text-gray-300">
                Scalable cloud solutions that provide reliability, security, and performance for your business applications.
              </p>
            </div>
            <div className="card-cyber hover-lift group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔄</div>
              <h3 className="text-xl font-semibold text-white mb-4">Digital Transformation</h3>
              <p className="text-gray-300">
                Complete digital transformation services to modernize your business processes and systems.
              </p>
            </div>
            <div className="card-cyber hover-lift group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💻</div>
              <h3 className="text-xl font-semibold text-white mb-4">IT Services</h3>
              <p className="text-gray-300">
                Comprehensive IT support and management services to keep your technology infrastructure running smoothly.
              </p>
            </div>
            <div className="card-cyber hover-lift group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌐</div>
              <h3 className="text-xl font-semibold text-white mb-4">Web Development</h3>
              <p className="text-gray-300">
                Custom web applications and websites built with modern technologies and best practices.
              </p>
            </div>
            <div className="card-cyber hover-lift group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📱</div>
              <h3 className="text-xl font-semibold text-white mb-4">Mobile Development</h3>
              <p className="text-gray-300">
                Native and cross-platform mobile applications for iOS and Android devices.
              </p>
            </div>
            <div className="card-cyber hover-lift group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
              <h3 className="text-xl font-semibold text-white mb-4">Data Analytics</h3>
              <p className="text-gray-300">
                Advanced data analysis and business intelligence solutions to drive informed decision-making.
              </p>
            </div>
            <div className="card-cyber hover-lift group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📡</div>
              <h3 className="text-xl font-semibold text-white mb-4">5G Solutions</h3>
              <p className="text-gray-300">
                Next-generation 5G network solutions and applications for enhanced connectivity and performance.
              </p>
            </div>
            <div className="card-cyber hover-lift group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-4">Micro SaaS Solutions</h3>
              <p className="text-gray-300">
                Specialized software-as-a-service solutions designed for specific business needs and workflows.
              </p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="glass-dark rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our AI and IT solutions can accelerate your digital transformation. 
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="cyber-button text-lg px-8 py-4">
                  Get Free Consultation
                </a>
                <a href="/pricing" className="cyber-button text-lg px-8 py-4 border-purple-400 text-purple-400 hover:border-purple-300 hover:text-purple-300">
                  View Pricing
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📞 <strong>Phone:</strong> +1 302 464 0950</p>
                <p>✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
                <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>🌐 <strong>Website:</strong> https://ziontechgroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;