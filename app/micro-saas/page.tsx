import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Cloud, 
  Users, 
  Settings, 
  TrendingUp, 
  Star, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Phone,
  Mail,
  MapPin,
  DollarSign,
  Award
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const MicroSaasPage = () => {
  const microSaasSolutions = [
    {
      title: 'Zion Analytics Pro',
      description: 'AI-powered business intelligence platform with real-time dashboards, predictive analytics, and comprehensive reporting for data-driven decisions.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reporting', 'Data visualization'],
      price: 'From $299/month',
      link: '/zion-analytics-pro',
      featured: true
    },
    {
      title: 'Zion Security Shield',
      description: 'Advanced cybersecurity protection with AI-powered threat detection, automated response, and comprehensive security monitoring.',
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      features: ['Threat detection', 'Automated response', 'Security monitoring', 'Compliance reporting'],
      price: 'From $499/month',
      link: '/zion-security-shield',
      featured: true
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud storage solution with end-to-end encryption, unlimited scalability, and advanced backup management.',
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      features: ['End-to-end encryption', 'Unlimited storage', 'Backup management', 'File sharing'],
      price: 'From $99/month',
      link: '/zion-cloud-vault',
      featured: true
    },
    {
      title: 'Zion AI Inventory Manager',
      description: 'Smart inventory tracking with AI-powered demand forecasting, automated reordering, and real-time stock monitoring.',
      icon: <BarChart3 className="w-8 h-8" />,
      color: 'from-green-500 to-emerald-500',
      features: ['Demand forecasting', 'Automated reordering', 'Stock monitoring', 'Inventory optimization'],
      price: 'From $199/month',
      link: '/zion-ai-inventory-manager'
    },
    {
      title: 'Zion HR Assistant Pro',
      description: 'Human resources automation with AI-powered recruitment, employee management, and performance tracking.',
      icon: <Users className="w-8 h-8" />,
      color: 'from-orange-500 to-red-500',
      features: ['Recruitment automation', 'Employee management', 'Performance tracking', 'HR analytics'],
      price: 'From $249/month',
      link: '/zion-hr-assistant-pro'
    },
    {
      title: 'Zion AI Accounting Suite',
      description: 'Automated accounting with AI-powered bookkeeping, financial reporting, and tax preparation assistance.',
      icon: <DollarSign className="w-8 h-8" />,
      color: 'from-yellow-500 to-orange-500',
      features: ['Automated bookkeeping', 'Financial reporting', 'Tax preparation', 'Expense tracking'],
      price: 'From $179/month',
      link: '/zion-ai-accounting-suite'
    },
    {
      title: 'Zion E-commerce Optimizer',
      description: 'E-commerce optimization with AI-powered product recommendations, pricing optimization, and conversion tracking.',
      icon: <TrendingUp className="w-8 h-8" />,
      color: 'from-indigo-500 to-purple-500',
      features: ['Product recommendations', 'Pricing optimization', 'Conversion tracking', 'Sales analytics'],
      price: 'From $149/month',
      link: '/zion-ecommerce-optimizer'
    },
    {
      title: 'Zion AI Customer Insights',
      description: 'Customer analytics with AI-powered insights, behavior analysis, and personalized marketing recommendations.',
      icon: <Users className="w-8 h-8" />,
      color: 'from-cyan-500 to-blue-500',
      features: ['Customer insights', 'Behavior analysis', 'Personalization', 'Marketing recommendations'],
      price: 'From $199/month',
      link: '/zion-ai-customer-insights'
    }
  ];

  const additionalSolutions = [
    { name: 'Zion AI Lead Scoring', link: '/zion-ai-lead-scoring' },
    { name: 'Zion AI Document Processor', link: '/zion-ai-document-processor' },
    { name: 'Zion AI Social Listener', link: '/zion-ai-social-listener' },
    { name: 'Zion AI Email Optimizer', link: '/zion-ai-email-optimizer' },
    { name: 'Zion AI Meeting Assistant', link: '/zion-ai-meeting-assistant' },
    { name: 'Zion AI Expense Tracker', link: '/zion-ai-expense-tracker' },
    { name: 'Zion AI Survey Builder', link: '/zion-ai-survey-builder' },
    { name: 'Zion AI Chatbot Builder', link: '/zion-ai-chatbot-builder' },
    { name: 'Zion AI Workflow Automation', link: '/zion-ai-workflow-automation' },
    { name: 'Zion AI SEO Optimizer', link: '/zion-ai-seo-optimizer' },
    { name: 'Zion AI Data Warehouse', link: '/zion-ai-data-warehouse' },
    { name: 'Zion AI Mobile App Builder', link: '/zion-ai-mobile-app-builder' }
  ];

  const stats = [
    { number: '60+', label: 'Micro SAAS Solutions', icon: <Zap className="w-6 h-6" /> },
    { number: '10,000+', label: 'Active Users', icon: <Users className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <Award className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software Solutions"
        description="Ready-to-use micro SAAS solutions for immediate deployment. From analytics to automation, our micro SAAS platform offers comprehensive business tools."
        keywords="micro SAAS, software as a service, business tools, analytics, automation, cloud solutions, ready-to-use software"
        canonical="https://ziontechgroup.com/micro-saas"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Ready-to-Use Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Micro SAAS Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Ready-to-use software solutions that can transform your business operations immediately. 
            From analytics to automation, our micro SAAS platform offers comprehensive business tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Target className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Featured Micro SAAS Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready-to-use software solutions that can transform your business operations immediately. 
              From analytics to automation, our micro SAAS platform offers comprehensive business tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasSolutions.map((solution, index) => (
              <FuturisticCard
                key={index}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                  solution.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {solution.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                <Link to={solution.link} className="block">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {solution.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                    {solution.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                      {solution.price}
                    </span>
                  </div>
                </Link>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Additional Micro SAAS Solutions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Complete Micro SAAS Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of micro SAAS solutions designed to meet every business need.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalSolutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.link}
                className="group bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 text-center"
              >
                <div className="text-gray-300 group-hover:text-cyan-400 transition-colors text-sm font-medium">
                  {solution.name}
                </div>
                <ArrowRight className="w-4 h-4 mx-auto mt-2 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business with Micro SAAS?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using our micro SAAS solutions to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;