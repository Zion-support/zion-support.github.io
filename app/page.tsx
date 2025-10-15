import React from 'react';
import SEOHead from '../components/SEOHead';
import { ArrowRight, Zap, Shield, Brain, Cloud, Smartphone, Database, Code, Users, Target, TrendingUp, Globe } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Zion Tech Group - Advanced AI & IT Solutions | Micro SAAS Services"
        description="Leading provider of AI solutions, IT services, and micro SAAS applications. Transform your business with cutting-edge technology and innovative solutions."
        keywords="AI solutions, IT services, micro SAAS, cloud computing, cybersecurity, digital transformation, business automation"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 animated-bg cyber-grid">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 futuristic-text">
            ZION TECH GROUP
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transforming businesses with cutting-edge AI solutions, innovative IT services, 
            and powerful micro SAAS applications that drive growth and efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/services"
              className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center gap-2"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="group glass-morphism text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center gap-2"
            >
              Get Started
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Solutions */}
            <div className="glass-morphism p-8 rounded-xl hover-glow group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">AI Solutions</h3>
                <p className="text-gray-300 mb-6">
                  Advanced artificial intelligence services including machine learning, 
                  natural language processing, and predictive analytics.
                </p>
                <ul className="text-sm text-gray-400 space-y-2 mb-6">
                  <li>• AI-Powered Analytics</li>
                  <li>• Machine Learning Models</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                </ul>
                <a href="/ai-solutions" className="text-purple-400 hover:text-purple-300 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* IT Services */}
            <div className="glass-morphism p-8 rounded-xl hover-glow group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">IT Services</h3>
                <p className="text-gray-300 mb-6">
                  Complete IT infrastructure management, cloud solutions, 
                  and digital transformation services.
                </p>
                <ul className="text-sm text-gray-400 space-y-2 mb-6">
                  <li>• Cloud Infrastructure</li>
                  <li>• Cybersecurity Solutions</li>
                  <li>• System Integration</li>
                  <li>• Technical Support</li>
                </ul>
                <a href="/it-solutions" className="text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Micro SAAS */}
            <div className="glass-morphism p-8 rounded-xl hover-glow group">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Micro SAAS</h3>
                <p className="text-gray-300 mb-6">
                  Specialized software-as-a-service applications designed 
                  to solve specific business challenges efficiently.
                </p>
                <ul className="text-sm text-gray-400 space-y-2 mb-6">
                  <li>• Business Automation Tools</li>
                  <li>• Analytics Dashboards</li>
                  <li>• Customer Management</li>
                  <li>• Workflow Optimization</li>
                </ul>
                <a href="/micro-saas-solutions" className="text-green-400 hover:text-green-300 font-semibold group-hover:translate-x-2 transition-transform inline-flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Micro SAAS Services */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-text">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, focused applications that deliver immediate value to your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AI Analytics Dashboard */}
            <div className="glass-morphism p-6 rounded-xl hover-glow group">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">AI Analytics Pro</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Real-time business intelligence with AI-powered insights
                </p>
                <div className="text-xs text-gray-400 mb-4">
                  Starting at $99/month
                </div>
                <a href="/ai-analytics-dashboard-pro" className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
                  View Details →
                </a>
              </div>
            </div>

            {/* Cybersecurity Monitor */}
            <div className="glass-morphism p-6 rounded-xl hover-glow group">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">CyberGuard Pro</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Advanced threat detection and security monitoring
                </p>
                <div className="text-xs text-gray-400 mb-4">
                  Starting at $149/month
                </div>
                <a href="/ai-cybersecurity-monitor-pro" className="text-red-400 hover:text-red-300 text-sm font-semibold">
                  View Details →
                </a>
              </div>
            </div>

            {/* Content Generator */}
            <div className="glass-morphism p-6 rounded-xl hover-glow group">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Content Studio AI</h3>
                <p className="text-sm text-gray-300 mb-4">
                  AI-powered content creation and management platform
                </p>
                <div className="text-xs text-gray-400 mb-4">
                  Starting at $79/month
                </div>
                <a href="/ai-content-studio" className="text-blue-400 hover:text-blue-300 text-sm font-semibold">
                  View Details →
                </a>
              </div>
            </div>

            {/* Customer Insights */}
            <div className="glass-morphism p-6 rounded-xl hover-glow group">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Customer Insights AI</h3>
                <p className="text-sm text-gray-300 mb-4">
                  Advanced customer analytics and sentiment tracking
                </p>
                <div className="text-xs text-gray-400 mb-4">
                  Starting at $129/month
                </div>
                <a href="/ai-customer-insights" className="text-green-400 hover:text-green-300 text-sm font-semibold">
                  View Details →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 neon-text">
              Why Choose Zion Tech Group?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Proven Results</h3>
              <p className="text-gray-300">
                500+ successful projects delivered with measurable business impact
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Rapid Deployment</h3>
              <p className="text-gray-300">
                Fast implementation with agile methodologies and continuous delivery
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Enterprise Security</h3>
              <p className="text-gray-300">
                Bank-level security with SOC 2 compliance and advanced encryption
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock technical support and monitoring services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 futuristic-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI and IT solutions can drive your success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="group glass-morphism text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
            >
              Call Now: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;