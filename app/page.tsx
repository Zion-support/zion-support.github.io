import React from "react";
import { Link } from "react-router-dom";
import { Brain, Shield, Zap, Globe, ArrowRight, Star, Users, Award, BarChart3, Cloud, Sparkles } from "lucide-react";
import EnhancedSEO from "./components/EnhancedSEO";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="Zion Tech Group - Advanced AI and IT Solutions"
        description="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses."
        keywords="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cybersecurity, cloud solutions, 5G technology"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI and IT Solutions for Modern Businesses
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/services" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Explore Services <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <Brain className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AI Solutions</h3>
              <p className="text-gray-300 mb-4">Advanced artificial intelligence services for business automation and optimization.</p>
              <Link to="/ai-services" className="text-blue-400 hover:text-blue-300 flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-colors">
              <Shield className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">IT Services</h3>
              <p className="text-gray-300 mb-4">Comprehensive IT solutions including cybersecurity, cloud migration, and infrastructure.</p>
              <Link to="/services" className="text-purple-400 hover:text-purple-300 flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-green-500 transition-colors">
              <Zap className="w-12 h-12 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">5G Solutions</h3>
              <p className="text-gray-300 mb-4">Next-generation 5G technology implementation and optimization services.</p>
              <Link to="/5g-solutions" className="text-green-400 hover:text-green-300 flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-pink-500 transition-colors">
              <Cloud className="w-12 h-12 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Micro SAAS</h3>
              <p className="text-gray-300 mb-4">Custom micro software-as-a-service solutions for specific business needs.</p>
              <Link to="/micro-saas" className="text-pink-400 hover:text-pink-300 flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-yellow-500 transition-colors">
              <BarChart3 className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Analytics</h3>
              <p className="text-gray-300 mb-4">Advanced data analytics and business intelligence solutions.</p>
              <Link to="/ai-analytics" className="text-yellow-400 hover:text-yellow-300 flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-red-500 transition-colors">
              <Globe className="w-12 h-12 text-red-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Web Development</h3>
              <p className="text-gray-300 mb-4">Modern web applications and digital transformation solutions.</p>
              <Link to="/web-development" className="text-red-400 hover:text-red-300 flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can help your business grow and succeed.
          </p>
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2"
          >
            <Sparkles className="w-5 h-5" />
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
