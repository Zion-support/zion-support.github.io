import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, ArrowRight, BarChart3, Shield, Cloud, Users, DollarSign, Settings, CheckCircle, Star, TrendingUp, MessageSquare, Mail, Calendar, FileText, Globe } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSAASPage = () => {
  const featuredSolutions = [
    {
      title: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards and predictive analytics for data-driven decision making.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      price: 'From $299/month',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reporting', 'Data visualization'],
      link: '/zion-analytics-pro',
      featured: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection and automated response for comprehensive security.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      price: 'From $499/month',
      features: ['Threat detection', 'Automated response', 'Security monitoring', 'Compliance reporting'],
      link: '/zion-security-shield',
      featured: true
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with end-to-end encryption and unlimited scalability for all your data needs.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      price: 'From $99/month',
      features: ['End-to-end encryption', 'Unlimited storage', 'Cross-platform sync', 'Advanced security'],
      link: '/zion-cloud-vault',
      featured: true
    },
    {
      title: 'Zion AI Inventory Manager',
      description: 'Smart inventory tracking with AI-powered optimization and automated reorder management for efficient operations.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      price: 'From $199/month',
      features: ['Smart tracking', 'Auto-reorder', 'Analytics', 'Multi-location support'],
      link: '/zion-ai-inventory-manager',
      featured: true
    },
    {
      title: 'Zion HR Assistant Pro',
      description: 'Human resources automation with AI-powered recruitment, employee management, and performance tracking.',
      icon: <Users className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      price: 'From $229/month',
      features: ['Recruitment automation', 'Employee management', 'Performance tracking', 'HR analytics'],
      link: '/zion-hr-assistant-pro',
      featured: true
    },
    {
      title: 'Zion AI Accounting Suite',
      description: 'Automated accounting with AI-powered bookkeeping, financial reporting, and tax preparation assistance.',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      price: 'From $179/month',
      features: ['Automated bookkeeping', 'Financial reporting', 'Tax preparation', 'Expense tracking'],
      link: '/zion-ai-accounting-suite',
      featured: true
    }
  ];

  const allSolutions = [
    { name: 'Zion E-commerce Optimizer', link: '/zion-ecommerce-optimizer', category: 'E-commerce' },
    { name: 'Zion AI Customer Insights', link: '/zion-ai-customer-insights', category: 'Analytics' },
    { name: 'Zion AI Lead Scoring', link: '/zion-ai-lead-scoring', category: 'Sales' },
    { name: 'Zion AI Document Processor', link: '/zion-ai-document-processor', category: 'Productivity' },
    { name: 'Zion AI Social Listener', link: '/zion-ai-social-listener', category: 'Social Media' },
    { name: 'Zion AI Email Optimizer', link: '/zion-ai-email-optimizer', category: 'Marketing' },
    { name: 'Zion AI Meeting Assistant', link: '/zion-ai-meeting-assistant', category: 'Productivity' },
    { name: 'Zion AI Expense Tracker', link: '/zion-ai-expense-tracker', category: 'Finance' },
    { name: 'Zion AI Survey Builder', link: '/zion-ai-survey-builder', category: 'Research' },
    { name: 'Zion AI Chatbot Builder', link: '/zion-ai-chatbot-builder', category: 'Customer Service' },
    { name: 'Zion AI Workflow Automation', link: '/zion-ai-workflow-automation', category: 'Automation' },
    { name: 'Zion AI SEO Optimizer', link: '/zion-ai-seo-optimizer', category: 'Marketing' },
    { name: 'Zion AI Data Warehouse', link: '/zion-ai-data-warehouse', category: 'Data' },
    { name: 'Zion AI Mobile App Builder', link: '/zion-ai-mobile-app-builder', category: 'Development' },
    { name: 'Zion AI API Manager', link: '/zion-ai-api-manager', category: 'Development' },
    { name: 'Zion AI Backup Manager', link: '/zion-ai-backup-manager', category: 'Security' },
    { name: 'Zion AI Testing Automation', link: '/zion-ai-testing-automation', category: 'Development' }
  ];

  const categories = ['All', 'Analytics', 'E-commerce', 'Sales', 'Productivity', 'Social Media', 'Marketing', 'Finance', 'Research', 'Customer Service', 'Automation', 'Data', 'Development', 'Security'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Solutions"
        description="Comprehensive collection of micro SAAS solutions including analytics, security, productivity, and automation tools. Ready-to-deploy software for immediate business impact."
        keywords="micro SAAS, software solutions, business tools, analytics, security, productivity, automation, ready-to-use software"
        canonical="https://ziontechgroup.com/micro-saas"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6">
            <Zap className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-400 text-sm font-medium">Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Ready-to-use software solutions that can transform your business operations immediately. 
            No complex setup, no lengthy implementation - just powerful tools that work out of the box.
          </p>
        </ResponsiveContainer>
      </section>

      {/* Featured Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our most popular ready-to-use solutions designed to solve common business challenges with AI-powered intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSolutions.map((solution, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 relative overflow-hidden"
              >
                {solution.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                <Link to={solution.link} className="block">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-purple-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-purple-400 font-semibold mb-2">{solution.price}</div>
                    <div className="inline-flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* All Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Solution Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Browse our comprehensive collection of micro SAAS solutions organized by category.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allSolutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.link}
                className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="text-gray-300 group-hover:text-purple-400 transition-colors text-sm font-medium mb-1">
                  {solution.name}
                </div>
                <div className="text-xs text-gray-500 group-hover:text-purple-300 transition-colors">
                  {solution.category}
                </div>
              </Link>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our micro SAAS solutions are designed for immediate deployment and maximum impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Instant Deployment</h3>
              <p className="text-gray-300">Get up and running in minutes, not months. No complex setup required.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Easy Integration</h3>
              <p className="text-gray-300">Seamlessly integrate with your existing tools and workflows.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Scalable Solutions</h3>
              <p className="text-gray-300">Grow with your business. Our solutions scale as you scale.</p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">Trusted by thousands of businesses worldwide with proven ROI.</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Choose from our comprehensive collection of micro SAAS solutions and start seeing results today. 
            No lengthy implementations, just powerful tools that work.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Pricing
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;