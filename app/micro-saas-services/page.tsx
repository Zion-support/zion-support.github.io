import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  BarChart3, 
  Mail, 
  Users, 
  CreditCard, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Lock,
  Smartphone,
  Monitor,
  Cloud,
  Database,
  Cpu,
  Target,
  TrendingUp
} from 'lucide-react';

const MicroSAASServicesPage: React.FC = () => {
  const services = [
    {
      id: 'ai-content-generator',
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      icon: <Zap className="w-8 h-8" />,
      price: '$29/mo',
      features: [
        'Unlimited content generation',
        'Multiple content types (blogs, social media, ads)',
        'SEO optimization',
        'Brand voice customization',
        'Multi-language support',
        'Content scheduling'
      ],
      benefits: [
        'Save 80% time on content creation',
        'Increase engagement by 150%',
        'Maintain consistent brand voice',
        'Scale content production instantly'
      ],
      category: 'Content & Marketing',
      rating: 4.9,
      users: '2.5K+',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'ai-analytics-dashboard',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics powered by machine learning.',
      icon: <BarChart3 className="w-8 h-8" />,
      price: '$49/mo',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboards',
        'Automated reporting',
        'Data integration',
        'Mobile app access'
      ],
      benefits: [
        'Make data-driven decisions',
        'Identify trends before competitors',
        'Reduce reporting time by 90%',
        'Increase revenue by 25%'
      ],
      category: 'Analytics & BI',
      rating: 4.8,
      users: '1.8K+',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'ai-email-assistant',
      title: 'AI Email Assistant',
      description: 'Automate email responses, schedule meetings, and manage your inbox with AI intelligence.',
      icon: <Mail className="w-8 h-8" />,
      price: '$19/mo',
      features: [
        'Smart email responses',
        'Meeting scheduling',
        'Email prioritization',
        'Template suggestions',
        'Follow-up automation',
        'Calendar integration'
      ],
      benefits: [
        'Respond to emails 5x faster',
        'Never miss important emails',
        'Schedule meetings automatically',
        'Reduce email stress by 70%'
      ],
      category: 'Productivity',
      rating: 4.7,
      users: '3.2K+',
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'ai-crm-assistant',
      title: 'AI CRM Assistant',
      description: 'Intelligent customer relationship management with automated lead scoring and follow-ups.',
      icon: <Users className="w-8 h-8" />,
      price: '$39/mo',
      features: [
        'Automated lead scoring',
        'Smart follow-up reminders',
        'Customer behavior analysis',
        'Sales pipeline optimization',
        'Integration with popular CRMs',
        'Performance analytics'
      ],
      benefits: [
        'Increase conversion rates by 40%',
        'Automate repetitive tasks',
        'Identify high-value prospects',
        'Improve customer retention'
      ],
      category: 'Sales & CRM',
      rating: 4.8,
      users: '1.5K+',
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'ai-social-media-scheduler',
      title: 'AI Social Media Scheduler',
      description: 'Automate social media posting with AI-optimized content and optimal timing.',
      icon: <Smartphone className="w-8 h-8" />,
      price: '$24/mo',
      features: [
        'Multi-platform posting',
        'AI-optimized timing',
        'Content suggestions',
        'Hashtag optimization',
        'Engagement tracking',
        'Bulk scheduling'
      ],
      benefits: [
        'Increase social engagement by 200%',
        'Save 10+ hours per week',
        'Post at optimal times',
        'Maintain consistent presence'
      ],
      category: 'Social Media',
      rating: 4.6,
      users: '2.1K+',
      color: 'from-pink-500 to-purple-500'
    },
    {
      id: 'ai-expense-tracker',
      title: 'AI Expense Tracker',
      description: 'Smart expense management with automatic categorization and receipt processing.',
      icon: <CreditCard className="w-8 h-8" />,
      price: '$15/mo',
      features: [
        'Automatic categorization',
        'Receipt scanning',
        'Expense reports',
        'Budget tracking',
        'Tax preparation',
        'Multi-currency support'
      ],
      benefits: [
        'Save 5+ hours on expense management',
        'Never lose receipts again',
        'Automate tax preparation',
        'Track spending patterns'
      ],
      category: 'Finance',
      rating: 4.7,
      users: '4.1K+',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'ai-project-manager',
      title: 'AI Project Manager',
      description: 'Intelligent project management with automated task assignment and progress tracking.',
      icon: <Target className="w-8 h-8" />,
      price: '$34/mo',
      features: [
        'Smart task assignment',
        'Progress prediction',
        'Resource optimization',
        'Risk assessment',
        'Team collaboration',
        'Performance metrics'
      ],
      benefits: [
        'Complete projects 30% faster',
        'Reduce project risks',
        'Optimize team productivity',
        'Predict project outcomes'
      ],
      category: 'Project Management',
      rating: 4.8,
      users: '1.9K+',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'ai-customer-support-bot',
      title: 'AI Customer Support Bot',
      description: '24/7 intelligent customer support with natural language processing and escalation.',
      icon: <Brain className="w-8 h-8" />,
      price: '$59/mo',
      features: [
        'Natural language processing',
        'Multi-channel support',
        'Escalation to humans',
        'Knowledge base integration',
        'Sentiment analysis',
        'Performance analytics'
      ],
      benefits: [
        'Provide 24/7 support',
        'Reduce support costs by 60%',
        'Improve customer satisfaction',
        'Handle 80% of queries automatically'
      ],
      category: 'Customer Support',
      rating: 4.9,
      users: '1.2K+',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'ai-inventory-manager',
      title: 'AI Inventory Manager',
      description: 'Smart inventory management with demand forecasting and automated reordering.',
      icon: <Database className="w-8 h-8" />,
      price: '$44/mo',
      features: [
        'Demand forecasting',
        'Automated reordering',
        'Stock optimization',
        'Supplier management',
        'Cost analysis',
        'Multi-location support'
      ],
      benefits: [
        'Reduce inventory costs by 25%',
        'Prevent stockouts',
        'Optimize cash flow',
        'Improve supplier relationships'
      ],
      category: 'Inventory Management',
      rating: 4.7,
      users: '980+',
      color: 'from-amber-500 to-orange-500'
    }
  ];

  const categories = [
    'All Services',
    'Content & Marketing',
    'Analytics & BI',
    'Productivity',
    'Sales & CRM',
    'Social Media',
    'Finance',
    'Project Management',
    'Customer Support',
    'Inventory Management'
  ];

  const stats = [
    { number: '50+', label: 'Micro SAAS Services' },
    { number: '25K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent"></div>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      </div>

      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SAAS services designed to solve real business challenges. AI-powered solutions for content, analytics, productivity, and more." />
        <meta name="keywords" content="micro saas, AI services, business automation, productivity tools, analytics dashboard" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                  Micro SAAS Services
                </span>
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 blur-xl opacity-30 animate-pulse"></div>
            </div>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Discover our innovative micro SAAS services designed to solve real business challenges. 
              <span className="text-cyan-300 font-semibold"> Start with a free trial today!</span>
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="relative">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.number}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 blur-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Choose Your Perfect Solution
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Each service is designed to solve specific business challenges with AI-powered intelligence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 relative overflow-hidden">
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white mb-1">{service.price}</div>
                      <div className="text-sm text-gray-400">per month</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-white/10 text-white px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-300">{service.rating}</span>
                      <span className="text-xs text-gray-400">({service.users})</span>
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Link 
                      to={`/micro-saas-services/${service.id}`}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <button className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/20 transition-colors">
                      Try Free
                    </button>
                  </div>
                </div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] animate-pulse"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-4 relative">
                  <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                    Ready to Transform Your Business?
                  </span>
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Start your free trial today and experience the power of AI-driven micro SAAS solutions. 
                  <span className="text-cyan-200 font-semibold"> No credit card required!</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="group bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </Link>
                  <Link 
                    to="/contact" 
                    className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10">Contact Sales</span>
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;