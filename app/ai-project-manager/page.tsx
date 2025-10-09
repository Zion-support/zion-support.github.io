'use client';
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  Brain, 
  BarChart, 
  Users, 
  Mail, 
  MessageSquare, 
  FileText, 
  Search, 
  Target, 
  TrendingUp, 
  Shield, 
  Clock, 
  Smartphone, 
  Palette, 
  Code, 
  Database, 
  Cloud, 
  Settings, 
  ArrowRight, 
  Phone, 
  Award,
  Globe,
  Lock,
  Sparkles,
  Cpu,
  Eye,
  Bot,
  Calendar,
  PieChart,
  Activity,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location,
  Play,
  Download,
  Share2,
  BookOpen,
  Lightbulb,
  RefreshCw,
  AlertTriangle,
  CheckSquare,
  Timer,
  DollarSign,
  TrendingDown,
  UserPlus,
  FolderOpen,
  MessageCircle,
  Bell,
  Settings as SettingsIcon,
  HelpCircle,
  ExternalLink
} from 'lucide-react';

const AIProjectManagerPage: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Planning',
      description: 'Intelligent project planning with machine learning algorithms that analyze historical data and team performance to create optimal project timelines.',
      benefits: ['40% faster project delivery', '95% accuracy in timeline predictions', 'Automated risk assessment']
    },
    {
      icon: BarChart,
      title: 'Real-Time Analytics',
      description: 'Comprehensive dashboard with real-time project metrics, team productivity insights, and predictive analytics for better decision making.',
      benefits: ['Real-time progress tracking', 'Team performance insights', 'Predictive analytics']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Advanced collaboration tools with AI-powered task assignment, communication optimization, and conflict resolution suggestions.',
      benefits: ['Smart task assignment', 'Communication optimization', 'Conflict resolution']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Proactive risk identification and mitigation with AI algorithms that predict potential issues and suggest preventive measures.',
      benefits: ['Proactive risk identification', 'Automated mitigation strategies', 'Early warning system']
    },
    {
      icon: RefreshCw,
      title: 'Automated Reporting',
      description: 'AI-generated project reports with insights, recommendations, and stakeholder updates delivered automatically.',
      benefits: ['Automated report generation', 'Stakeholder updates', 'Performance insights']
    },
    {
      icon: Settings,
      title: 'Integration Hub',
      description: 'Seamless integration with 50+ popular tools including Slack, Jira, Trello, Asana, and Microsoft Teams.',
      benefits: ['50+ tool integrations', 'Seamless data sync', 'Unified workflow']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams and startups',
      features: [
        'Up to 5 projects',
        'Up to 10 team members',
        'Basic AI planning',
        'Standard analytics',
        'Email support',
        'Mobile app access'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 projects',
        'Up to 50 team members',
        'Advanced AI planning',
        'Real-time analytics',
        'Priority support',
        'Advanced integrations',
        'Custom reporting',
        'API access'
      ],
      popular: true,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited projects',
        'Unlimited team members',
        'Full AI capabilities',
        'Advanced analytics',
        '24/7 phone support',
        'All integrations',
        'Custom dashboards',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'TechCorp Inc.',
      content: 'AI Project Manager Pro has revolutionized how we plan and execute projects. The AI predictions are incredibly accurate, and we\'ve reduced project delivery time by 40%.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The automated reporting feature saves us hours every week. The insights are actionable and help us make better decisions faster.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Solutions',
      content: 'The risk management capabilities are outstanding. We\'ve prevented several potential issues before they became problems.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'ai_project_manager_phone',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
                <p className="text-xs text-cyan-400">AI & IT Solutions</p>
              </div>
            </Link>
            <div className="flex items-center space-x-6">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/micro-saas" className="text-white hover:text-cyan-400 transition-colors">Micro SAAS</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button inline-flex items-center"
              >
                <Phone className="w-4 h-4 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
              <BarChart className="w-8 h-8 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white neon-text cyber-text">
                AI Project Manager Pro
              </h1>
              <p className="text-lg text-cyan-400">Intelligent Project Planning & Management</p>
            </div>
          </div>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Transform your project management with AI-powered planning, real-time analytics, and intelligent automation. 
            Deliver projects 40% faster with 95% accuracy in timeline predictions.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">40%</div>
              <div className="text-white font-medium">Faster Delivery</div>
              <div className="text-gray-400 text-sm">Average improvement</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-white font-medium">Accuracy</div>
              <div className="text-gray-400 text-sm">Timeline predictions</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">2,500+</div>
              <div className="text-white font-medium">Active Users</div>
              <div className="text-gray-400 text-sm">Worldwide</div>
            </div>
            <div className="cyber-card p-6">
              <div className="text-3xl font-bold text-yellow-400 mb-2">4.9/5</div>
              <div className="text-white font-medium">Rating</div>
              <div className="text-gray-400 text-sm">User satisfaction</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="cyber-button text-center">
              <Play className="w-5 h-5 mr-2 inline" />
              Start Free Trial
            </button>
            <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all">
              <Download className="w-5 h-5 mr-2 inline" />
              Download Demo
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Powerful Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                      <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Choose Your Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`quantum-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                }`}>
                  {plan.popular ? 'Start Free Trial' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-16">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Transform Your Project Management?
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Join thousands of project managers who have already revolutionized their workflow with AI Project Manager Pro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                onClick={handlePhoneClick}
                className="cyber-button text-center"
              >
                <Phone className="w-5 h-5 mr-2 inline" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <Mail className="w-5 h-5 mr-2 inline" />
                Email Us
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="cyber-card p-6">
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-gray-300">+1 (302) 464-0950</p>
              <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST</p>
            </div>
            <div className="cyber-card p-6">
              <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">24/7 Support</p>
            </div>
            <div className="cyber-card p-6">
              <Location className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
              <p className="text-gray-300">364 E Main St STE 1008</p>
              <p className="text-gray-400 text-sm">Middletown, DE 19709</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
});

AIProjectManagerPage.displayName = 'AIProjectManagerPage';
export default AIProjectManagerPage;