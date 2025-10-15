import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, CheckCircle, Star, Users, Award } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl animate-pulse delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-8">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-blue-300 text-sm font-medium">Trusted by 500+ Companies</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Transform Your
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {' '}Business{' '}
                </span>
                with AI
              </h1>

              {/* Subheading */}
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Leading provider of AI-powered micro SAAS solutions, IT services, and innovative technology solutions. 
                We help businesses transform and scale with cutting-edge technology.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Get Started Today</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">500+</div>
                  <div className="text-gray-400 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-gray-400 text-sm">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">5★</div>
                  <div className="text-gray-400 text-sm">Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-white/60 text-sm">AI Dashboard</div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">AI-Powered Analytics</div>
                    <div className="text-white/70 text-sm">Real-time insights and predictions</div>
                    <div className="mt-3 flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs">Live Data</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white mb-1">87%</div>
                      <div className="text-white/60 text-xs">Efficiency</div>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <div className="text-2xl font-bold text-white mb-1">$2.4M</div>
                      <div className="text-white/60 text-xs">Saved</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white/80 text-sm">Automated Workflows</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white/80 text-sm">Real-time Monitoring</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white/80 text-sm">Predictive Analytics</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white p-4 rounded-lg shadow-lg animate-bounce">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">+127%</div>
                    <div className="text-xs opacity-80">Growth</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 rounded-lg shadow-lg animate-bounce delay-1000">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <div>
                    <div className="font-semibold">A+</div>
                    <div className="text-xs opacity-80">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;