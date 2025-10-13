import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  BarChart3, 
  Users, 
  Target, 
  Clock, 
  TrendingUp, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Brain,
  Globe,
  Award,
  Sparkles,
  FileText,
  PieChart,
  AlertTriangle,
  CheckSquare
} from 'lucide-react';

const ZionAIProjectManagerProPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Task Prioritization',
      description: 'Intelligent task prioritization based on deadlines, dependencies, and team capacity',
      icon: <Target className="w-6 h-6" />,
      benefits: ['40% faster project completion', 'Automatic deadline optimization', 'Resource conflict detection']
    },
    {
      title: 'Predictive Risk Management',
      description: 'AI identifies potential project risks and suggests mitigation strategies',
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: ['Early risk detection', 'Automated risk scoring', 'Mitigation recommendations']
    },
    {
      title: 'Smart Resource Allocation',
      description: 'AI optimizes team member assignments based on skills, availability, and workload',
      icon: <Users className="w-6 h-6" />,
      benefits: ['Optimal team matching', 'Workload balancing', 'Skill gap analysis']
    },
    {
      title: 'Automated Progress Tracking',
      description: 'Real-time project monitoring with AI-powered insights and alerts',
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ['Real-time dashboards', 'Progress predictions', 'Bottleneck identification']
    },
    {
      title: 'Intelligent Time Estimation',
      description: 'AI-powered time estimation based on historical data and team performance',
      icon: <Clock className="w-6 h-6" />,
      benefits: ['Accurate time predictions', 'Historical data analysis', 'Team performance insights']
    },
    {
      title: 'Automated Reporting',
      description: 'AI generates comprehensive project reports and stakeholder updates',
      icon: <FileText className="w-6 h-6" />,
      benefits: ['Automated status reports', 'Stakeholder communication', 'Performance analytics']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 10 projects',
        'Basic AI features',
        '5 team members',
        'Standard reporting',
        'Email support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing teams',
      features: [
        'Unlimited projects',
        'Advanced AI features',
        'Up to 25 team members',
        'Advanced analytics',
        'Priority support',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        'Custom AI models',
        'White-label options',
        'Advanced security',
        'Dedicated support',
        'Custom workflows',
        'Advanced reporting'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Robert Kim',
      company: 'Tech Innovations',
      role: 'Project Director',
      content: 'Zion AI Project Manager Pro helped us complete projects 35% faster. The AI prioritization is game-changing.',
      rating: 5,
      avatar: 'RK'
    },
    {
      name: 'Maria Santos',
      company: 'Digital Agency',
      role: 'Operations Manager',
      content: 'The predictive risk management saved us from multiple project failures. Incredible AI insights.',
      rating: 5,
      avatar: 'MS'
    },
    {
      name: 'James Wilson',
      company: 'Software Solutions',
      role: 'VP Engineering',
      content: 'Finally, a project management tool that actually helps instead of just tracking. The AI features are revolutionary.',
      rating: 5,
      avatar: 'JW'
    }
  ];

  const stats = [
    { number: '8,000+', label: 'Active Teams', icon: <Users className="w-6 h-6" /> },
    { number: '35%', label: 'Faster Project Completion', icon: <TrendingUp className="w-6 h-6" /> },
    { number: '90%', label: 'Risk Prediction Accuracy', icon: <Target className="w-6 h-6" /> },
    { number: '24/7', label: 'AI-Powered Monitoring', icon: <Brain className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Project Manager Pro - AI-Powered Project Management | Zion Tech Group</title>
        <meta name="description" content="Transform your project management with Zion AI Project Manager Pro. AI-powered task prioritization, predictive risk management, smart resource allocation, and automated reporting. Start your free trial today!" />
        <meta name="keywords" content="AI project management, project management software, task prioritization, risk management, resource allocation, project tracking, team collaboration" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-project-manager-pro" />
      </Helmet>

      <div className="min-h-screen pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/20"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <Calendar className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Zion AI Project
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                {' '}Manager Pro
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              The most intelligent project management platform that uses AI to optimize workflows, 
              predict risks, and ensure project success. 
              Transform your project delivery with cutting-edge artificial intelligence.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="px-8 py-4 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Watch Demo</span>
                <Sparkles className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI-Powered Project Management Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our advanced AI technology automates complex project management processes and provides 
                insights that help you deliver projects on time and within budget.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple Pricing for Every Team Size
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose the plan that fits your team's needs. All plans include our core AI features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-8 relative ${
                    plan.popular 
                      ? 'border-green-500/50 ring-2 ring-green-500/20' 
                      : 'border-white/10'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:shadow-lg hover:shadow-green-500/25'
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Project Teams Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                See what our customers say about Zion AI Project Manager Pro
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-green-500/30 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Project Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of project teams already using Zion AI Project Manager Pro 
                to deliver projects faster and more efficiently. Start your free 14-day trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/demo"
                  className="px-8 py-4 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAIProjectManagerProPage;