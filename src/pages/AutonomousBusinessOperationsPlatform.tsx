import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, TrendingUp, Users, Shield, Zap, Globe, ArrowRight, BarChart3, Cpu, Network } from 'lucide-react';

export default function AutonomousBusinessOperationsPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue to-zion-purple">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Autonomous Business
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple-light bg-clip-text text-transparent">
                Operations Platform
              </span>
            </h1>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
              Transform your business operations with AI-powered automation that works 24/7. 
              Streamline processes, reduce costs, and increase efficiency with our intelligent platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/30 flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Intelligent Automation Features
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Harness the power of AI to automate complex business processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Automation</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Intelligent bots that learn from your business processes and continuously optimize operations.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Performance Analytics</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Real-time insights and predictive analytics to optimize business performance and decision-making.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-lg flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Team Collaboration</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Seamless integration with your team workflows and enhanced collaboration tools.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Security</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Bank-grade security with role-based access control and comprehensive audit trails.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-blue rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Lightning Fast</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Process thousands of operations per second with our optimized AI algorithms.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Scalability</h3>
              <p className="text-zion-slate-light leading-relaxed">
                Scale your operations globally with our distributed cloud infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Business Process Automation
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Automate critical business processes across all departments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Finance & Accounting</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Automate invoice processing, expense management, and financial reporting with AI-powered accuracy.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Automated invoice processing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Expense categorization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Financial reporting automation
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Human Resources</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Streamline recruitment, onboarding, and employee management with intelligent automation.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Resume screening and matching
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Onboarding workflow automation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Performance review scheduling
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Customer Service</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Enhance customer experience with AI-powered support and automated issue resolution.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Intelligent ticket routing
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Automated response generation
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Customer sentiment analysis
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Supply Chain Management</h3>
                <p className="text-zion-slate-light leading-relaxed mb-4">
                  Optimize inventory, predict demand, and streamline logistics with predictive AI.
                </p>
                <ul className="space-y-2 text-zion-slate-light">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Demand forecasting
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Inventory optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                    Route optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="py-20 px-4 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced Technology Stack
            </h2>
            <p className="text-xl text-zion-slate-light max-w-2xl mx-auto">
              Built with cutting-edge technologies for maximum performance and reliability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <Cpu className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Machine Learning</h3>
              <p className="text-zion-slate-light text-sm">
                Advanced ML algorithms for pattern recognition and predictive analytics
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cloud Native</h3>
              <p className="text-zion-slate-light text-sm">
                Built on scalable cloud infrastructure for global deployment
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-blue to-zion-cyan rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Real-time Analytics</h3>
              <p className="text-zion-slate-light text-sm">
                Live dashboards and instant insights for decision-making
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-zion-slate-light text-sm">
                SOC2 compliant with advanced encryption and access controls
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
            Join thousands of businesses that have transformed their operations with our AI platform. 
            Start your automation journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/30 flex items-center justify-center gap-2"
            >
              Schedule a Demo
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}