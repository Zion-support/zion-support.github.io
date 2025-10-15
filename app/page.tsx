import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Future-Ready Technology</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Expert services in artificial intelligence, cloud infrastructure, micro SAAS, and digital transformation. Contact us at +1 302 464 0950" />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud infrastructure, digital transformation, machine learning, artificial intelligence" />
        <meta name="author" content="Zion Tech Group" />
        <meta property="og:title" content="Zion Tech Group - Advanced AI and IT Solutions" />
        <meta property="og:description" content="Leading provider of AI and IT solutions for modern businesses" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>
      
      <div className="min-h-screen relative overflow-hidden">
        {/* Futuristic Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
          
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
          </div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Neon Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Hero Section */}
            <div className="mb-16">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                ZION TECH GROUP
              </h1>
              <div className="text-2xl md:text-4xl font-light text-white mb-6">
                <span className="inline-block animate-bounce" style={{animationDelay: '0.1s'}}>A</span>
                <span className="inline-block animate-bounce" style={{animationDelay: '0.2s'}}>I</span>
                <span className="inline-block animate-bounce" style={{animationDelay: '0.3s'}}> </span>
                <span className="inline-block animate-bounce" style={{animationDelay: '0.4s'}}>&</span>
                <span className="inline-block animate-bounce" style={{animationDelay: '0.5s'}}> </span>
                <span className="inline-block animate-bounce" style={{animationDelay: '0.6s'}}>I</span>
                <span className="inline-block animate-bounce" style={{animationDelay: '0.7s'}}>T</span>
                <span className="inline-block animate-bounce" style={{animationDelay: '0.8s'}}> </span>
                <span className="inline-block animate-bounce" style={{animationDelay: '0.9s'}}>S</span>
                <span className="inline-block animate-bounce" style={{animationDelay: '1.0s'}}>O</span>
                <span className="inline-block animate-bounce" style={{animationDelay: '1.1s'}}>L</span>
                <span className="inline-block animate-bounce" style={{animationDelay: '1.2s'}}>U</span>
                <span className="inline-block animate-bounce" style={{animationDelay: '1.3s'}}>T</span>
                <span className="inline-block animate-bounce" style={{animationDelay: '1.4s'}}>I</span>
                <span className="inline-block animate-bounce" style={{animationDelay: '1.5s'}}>O</span>
                <span className="inline-block animate-bounce" style={{animationDelay: '1.6s'}}>N</span>
                <span className="inline-block animate-bounce" style={{animationDelay: '1.7s'}}>S</span>
              </div>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
                Transform your business with cutting-edge AI and IT solutions. 
                From micro SAAS platforms to enterprise cloud infrastructure, 
                we deliver future-ready technology that drives growth and innovation.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Link 
                to="/contact" 
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
              >
                <span className="relative z-10">Get Started Today</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              <Link 
                to="/services" 
                className="group relative px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:bg-blue-400 hover:text-white hover:scale-105"
              >
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </Link>
            </div>

            {/* Services Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <div className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4">AI Services</h3>
                <p className="text-gray-300 mb-6">Advanced artificial intelligence solutions including machine learning, natural language processing, and predictive analytics.</p>
                <Link to="/ai-services" className="text-blue-400 hover:text-blue-300 font-semibold group-hover:underline">
                  Learn More →
                </Link>
              </div>
              
              <div className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold text-white mb-4">Micro SAAS</h3>
                <p className="text-gray-300 mb-6">Powerful micro software-as-a-service solutions designed to streamline your business operations and boost productivity.</p>
                <Link to="/micro-saas-solutions" className="text-blue-400 hover:text-blue-300 font-semibold group-hover:underline">
                  Learn More →
                </Link>
              </div>
              
              <div className="group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-2xl font-bold text-white mb-4">IT Solutions</h3>
                <p className="text-gray-300 mb-6">Comprehensive IT services including cloud infrastructure, web development, mobile apps, and data analytics.</p>
                <Link to="/it-services" className="text-blue-400 hover:text-blue-300 font-semibold group-hover:underline">
                  Learn More →
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Transform Your Business?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-blue-400 font-semibold mb-2">📞 Phone</div>
                  <a href="tel:+13024640950" className="text-white hover:text-blue-300 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div>
                  <div className="text-blue-400 font-semibold mb-2">✉️ Email</div>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-blue-300 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div>
                  <div className="text-blue-400 font-semibold mb-2">📍 Address</div>
                  <div className="text-white">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;