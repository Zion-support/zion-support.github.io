import React from 'react';
import SEOHead from '../components/SEOHead';

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI solutions, IT services, cybersecurity, cloud infrastructure, and digital transformation for modern businesses."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="text-center">
              <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Advanced AI and IT Solutions for the Digital Future
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                Empowering businesses with cutting-edge artificial intelligence, comprehensive IT services, 
                and innovative technology solutions that drive growth and transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="/services" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
                >
                  Explore Our Services
                </a>
                <a 
                  href="/contact" 
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
                >
                  Get Started Today
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Our Core Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition-colors">
                <div className="text-blue-400 text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-4">AI Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Machine learning, natural language processing, computer vision, and predictive analytics.
                </p>
                <a href="/ai-solutions" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition-colors">
                <div className="text-blue-400 text-4xl mb-4">💻</div>
                <h3 className="text-2xl font-bold mb-4">IT Services</h3>
                <p className="text-gray-300 mb-6">
                  Infrastructure management, technical support, system integration, and IT consulting.
                </p>
                <a href="/it-solutions" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition-colors">
                <div className="text-blue-400 text-4xl mb-4">🔒</div>
                <h3 className="text-2xl font-bold mb-4">Cybersecurity</h3>
                <p className="text-gray-300 mb-6">
                  Advanced security solutions to protect your business from evolving cyber threats.
                </p>
                <a href="/cybersecurity" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition-colors">
                <div className="text-blue-400 text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold mb-4">Cloud Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Scalable cloud infrastructure and management for modern businesses.
                </p>
                <a href="/cloud-solutions" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition-colors">
                <div className="text-blue-400 text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Micro SaaS</h3>
                <p className="text-gray-300 mb-6">
                  Custom micro SaaS applications tailored to your specific business requirements.
                </p>
                <a href="/micro-saas-solutions" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Learn More →
                </a>
              </div>
              
              <div className="bg-slate-700 p-8 rounded-lg hover:bg-slate-600 transition-colors">
                <div className="text-blue-400 text-4xl mb-4">📡</div>
                <h3 className="text-2xl font-bold mb-4">5G Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Next-generation 5G technology solutions for enhanced connectivity and performance.
                </p>
                <a href="/5g-solutions" className="text-blue-400 hover:text-blue-300 font-semibold">
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver exceptional results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">10+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
                <p className="text-gray-400">Proven track record in AI and IT solutions</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">500+</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Projects Delivered</h3>
                <p className="text-gray-400">Successful implementations across industries</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">24/7</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Support</h3>
                <p className="text-gray-400">Round-the-clock technical assistance</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">99%</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Client Satisfaction</h3>
                <p className="text-gray-400">Consistently high customer satisfaction rates</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our AI and IT solutions can drive your digital transformation
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
              >
                Get a Free Consultation
              </a>
              <a 
                href="/about" 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition-all duration-300 text-lg"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;