import React from 'react';
import { Cloud, Shield, Code, Database, Smartphone, BarChart3, Zap, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Services - Zion Tech Group"
        description="Comprehensive IT services including cloud infrastructure, cybersecurity, web development, and digital transformation solutions."
        keywords="IT services, cloud infrastructure, cybersecurity, web development, digital transformation"
        canonical="/services"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <Cloud className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Cloud Infrastructure</h3>
            <p className="text-gray-300 mb-4">Scalable and secure cloud solutions for modern businesses with 99.9% uptime guarantee.</p>
            <div className="text-cyan-400 font-semibold mb-2">From $299/month</div>
            <a href="/cloud-infrastructure" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Cybersecurity Solutions</h3>
            <p className="text-gray-300 mb-4">Advanced security measures with AI-powered threat detection and 24/7 monitoring.</p>
            <div className="text-cyan-400 font-semibold mb-2">From $499/month</div>
            <a href="/cybersecurity-solutions" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Web Development</h3>
            <p className="text-gray-300 mb-4">Custom web applications, e-commerce platforms, and modern responsive websites.</p>
            <div className="text-cyan-400 font-semibold mb-2">From $199/month</div>
            <a href="/web-development" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10">
            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Database Management</h3>
            <p className="text-gray-300 mb-4">Advanced database design, optimization, and maintenance with AI-powered insights.</p>
            <div className="text-cyan-400 font-semibold mb-2">From $149/month</div>
            <a href="/database-management" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-4">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Mobile Development</h3>
            <p className="text-gray-300 mb-4">Native and cross-platform mobile apps with AI integration and real-time analytics.</p>
            <div className="text-cyan-400 font-semibold mb-2">From $249/month</div>
            <a href="/mobile-development" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/10">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Data Analytics</h3>
            <p className="text-gray-300 mb-4">AI-powered data analysis, business intelligence, and predictive analytics solutions.</p>
            <div className="text-cyan-400 font-semibold mb-2">From $179/month</div>
            <a href="/data-analytics" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-teal-500/10">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">AI Integration</h3>
            <p className="text-gray-300 mb-4">Custom AI solutions, machine learning models, and intelligent automation systems.</p>
            <div className="text-cyan-400 font-semibold mb-2">From $399/month</div>
            <a href="/ai-integration" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">5G Solutions</h3>
            <p className="text-gray-300 mb-4">Next-generation connectivity, IoT implementation, and edge computing solutions.</p>
            <div className="text-cyan-400 font-semibold mb-2">From $599/month</div>
            <a href="/5g-solutions" className="text-cyan-400 hover:text-cyan-300 transition-colors">Learn More →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;