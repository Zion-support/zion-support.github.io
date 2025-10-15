import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Star, Users, Award, Clock } from 'lucide-react';

const Hero: React.FC = memo(() => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            #1 AI & IT Solutions Provider
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Transform Your Business
            </span>
            <br />
            <span className="text-white">With AI & IT Solutions</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-5xl mx-auto">
            Leading provider of cutting-edge AI, IT, and 5G solutions. 
            We transform businesses through innovative technology, intelligent automation, 
            and comprehensive digital transformation services. From micro SAAS solutions 
            to enterprise-grade AI platforms, we deliver results that matter.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center text-cyan-400 text-sm font-medium">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
              AI-Powered Solutions
            </div>
            <div className="flex items-center text-purple-400 text-sm font-medium">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              Enterprise Security
            </div>
            <div className="flex items-center text-pink-400 text-sm font-medium">
              <div className="w-2 h-2 bg-pink-400 rounded-full mr-2"></div>
              24/7 Support
            </div>
            <div className="flex items-center text-green-400 text-sm font-medium">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Scalable Infrastructure
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/services" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center group"
            >
              <Zap className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Explore Our Services
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Clock className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Get Free Consultation
            </Link>
            <a 
              href="tel:+13024640950" 
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center group"
            >
              <Users className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Call +1 302 464 0950
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-8 h-8 text-green-400" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">1000+</div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Support Available</div>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-6">Trusted by leading companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-white/60">Microsoft</div>
              <div className="text-2xl font-bold text-white/60">Google</div>
              <div className="text-2xl font-bold text-white/60">Amazon</div>
              <div className="text-2xl font-bold text-white/60">IBM</div>
              <div className="text-2xl font-bold text-white/60">Oracle</div>
              <div className="text-2xl font-bold text-white/60">Salesforce</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';

export default Hero;