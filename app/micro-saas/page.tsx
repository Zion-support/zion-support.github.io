import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Zap, 
  Shield, 
  BarChart3, 
  Users, 
  Mail, 
  Calendar, 
  FileText, 
  CreditCard,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail as MailIcon,
  MapPin,
  Clock,
  Award,
  TrendingUp,
  Globe,
  Database,
  Lock,
  Smartphone,
  Monitor,
  Cloud,
  Cpu,
  Brain,
  Target,
  Rocket,
  DollarSign,
  PieChart,
  Settings,
  Headphones,
  MessageSquare,
  Download,
  Upload,
  RefreshCw,
  Eye,
  Search,
  Filter,
  Plus,
  Minus,
  X,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const microSAASServices = [
    {
      id: 'ai-content-generator',
      name: 'AI Content Generator Pro',
      category: 'ai-tools',
      description: 'Advanced AI-powered content creation tool for blogs, social media, and marketing materials.',
      features: [
        'GPT-4 powered content generation',
        '50+ content templates',
        'Multi-language support',
        'SEO optimization',
        'Brand voice customization',
        'Plagiarism detection',
        'Content scheduling',
        'Analytics dashboard'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['10,000 words/month', '5 templates', 'Basic analytics'] },
        pro: { price: 79, period: 'month', features: ['50,000 words/month', 'All templates', 'Advanced analytics', 'API access'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited words', 'Custom templates', 'White-label', 'Priority support'] }
      },
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      rating: 4.9,
      users: '12,500+'
    },
    {
      id: 'smart-analytics',
      name: 'Smart Analytics Dashboard',
      category: 'analytics',
      description: 'Real-time business intelligence and analytics platform with AI-powered insights.',
      features: [
        'Real-time data visualization',
        'AI-powered insights',
        'Custom dashboards',
        'Automated reporting',
        'Data integration',
        'Predictive analytics',
        'Mobile app',
        'Team collaboration'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['5 data sources', 'Basic dashboards', 'Email reports'] },
        pro: { price: 99, period: 'month', features: ['Unlimited sources', 'Advanced dashboards', 'AI insights', 'API access'] },
        enterprise: { price: 299, period: 'month', features: ['Custom integrations', 'White-label', 'Dedicated support', 'On-premise option'] }
      },
      icon: BarChart3,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      rating: 4.8,
      users: '8,900+'
    },
    {
      id: 'email-automation',
      name: 'Email Automation Suite',
      category: 'marketing',
      description: 'Complete email marketing automation platform with AI-driven personalization.',
      features: [
        'Drag-and-drop email builder',
        'AI personalization',
        'Behavioral triggers',
        'A/B testing',
        'List segmentation',
        'Deliverability optimization',
        'Advanced analytics',
        'CRM integration'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['1,000 contacts', '5,000 emails/month', 'Basic templates'] },
        pro: { price: 49, period: 'month', features: ['10,000 contacts', '50,000 emails/month', 'Advanced features', 'AI personalization'] },
        enterprise: { price: 149, period: 'month', features: ['Unlimited contacts', 'Unlimited emails', 'White-label', 'Dedicated IP'] }
      },
      icon: Mail,
      color: 'from-green-500 to-emerald-500',
      popular: true,
      rating: 4.7,
      users: '15,200+'
    },
    {
      id: 'task-automation',
      name: 'Task Automation Hub',
      category: 'productivity',
      description: 'Intelligent task automation platform that connects 500+ apps and services.',
      features: [
        '500+ app integrations',
        'Visual workflow builder',
        'AI-powered suggestions',
        'Conditional logic',
        'Scheduled automations',
        'Error handling',
        'Team collaboration',
        'Advanced logging'
      ],
      pricing: {
        starter: { price: 25, period: 'month', features: ['100 automations/month', '10 integrations', 'Basic support'] },
        pro: { price: 59, period: 'month', features: ['1,000 automations/month', '50 integrations', 'AI suggestions', 'Priority support'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited automations', 'All integrations', 'Custom integrations', 'Dedicated support'] }
      },
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      popular: false,
      rating: 4.6,
      users: '6,800+'
    },
    {
      id: 'social-media-manager',
      name: 'Social Media Manager Pro',
      category: 'marketing',
      description: 'AI-powered social media management platform with content scheduling and analytics.',
      features: [
        'Multi-platform posting',
        'AI content suggestions',
        'Optimal timing analysis',
        'Hashtag research',
        'Engagement tracking',
        'Competitor analysis',
        'Content calendar',
        'Team collaboration'
      ],
      pricing: {
        starter: { price: 35, period: 'month', features: ['3 social accounts', '30 posts/month', 'Basic analytics'] },
        pro: { price: 79, period: 'month', features: ['10 social accounts', 'Unlimited posts', 'Advanced analytics', 'AI suggestions'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited accounts', 'White-label', 'Custom reporting', 'Dedicated manager'] }
      },
      icon: Globe,
      color: 'from-pink-500 to-rose-500',
      popular: true,
      rating: 4.8,
      users: '11,300+'
    },
    {
      id: 'crm-suite',
      name: 'Smart CRM Suite',
      category: 'crm',
      description: 'AI-enhanced customer relationship management with predictive analytics.',
      features: [
        'Contact management',
        'Deal tracking',
        'AI lead scoring',
        'Email integration',
        'Task automation',
        'Pipeline analytics',
        'Mobile app',
        'Custom fields'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['1,000 contacts', 'Basic features', 'Email support'] },
        pro: { price: 69, period: 'month', features: ['10,000 contacts', 'Advanced features', 'AI insights', 'Phone support'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited contacts', 'Custom features', 'White-label', 'Dedicated support'] }
      },
      icon: Users,
      color: 'from-indigo-500 to-purple-500',
      popular: false,
      rating: 4.7,
      users: '9,100+'
    },
    {
      id: 'project-management',
      name: 'Project Management AI',
      category: 'productivity',
      description: 'Intelligent project management platform with AI-powered resource optimization.',
      features: [
        'Gantt charts',
        'Resource planning',
        'AI task prioritization',
        'Time tracking',
        'Team collaboration',
        'Risk assessment',
        'Progress analytics',
        'Integration hub'
      ],
      pricing: {
        starter: { price: 39, period: 'month', features: ['5 projects', '10 team members', 'Basic features'] },
        pro: { price: 89, period: 'month', features: ['Unlimited projects', '50 team members', 'AI features', 'Advanced analytics'] },
        enterprise: { price: 249, period: 'month', features: ['Unlimited everything', 'Custom workflows', 'White-label', 'Dedicated support'] }
      },
      icon: Target,
      color: 'from-teal-500 to-blue-500',
      popular: true,
      rating: 4.9,
      users: '13,700+'
    },
    {
      id: 'inventory-manager',
      name: 'Smart Inventory Manager',
      category: 'ecommerce',
      description: 'AI-powered inventory management with demand forecasting and automated reordering.',
      features: [
        'Real-time inventory tracking',
        'AI demand forecasting',
        'Automated reordering',
        'Multi-location support',
        'Barcode scanning',
        'Supplier management',
        'Cost optimization',
        'Analytics dashboard'
      ],
      pricing: {
        starter: { price: 45, period: 'month', features: ['1,000 SKUs', '1 location', 'Basic forecasting'] },
        pro: { price: 99, period: 'month', features: ['10,000 SKUs', '5 locations', 'Advanced AI', 'API access'] },
        enterprise: { price: 299, period: 'month', features: ['Unlimited SKUs', 'Unlimited locations', 'Custom features', 'Dedicated support'] }
      },
      icon: Database,
      color: 'from-amber-500 to-orange-500',
      popular: false,
      rating: 4.6,
      users: '5,400+'
    },
    {
      id: 'security-monitor',
      name: 'Security Monitor Pro',
      category: 'security',
      description: 'Advanced security monitoring and threat detection for small to medium businesses.',
      features: [
        'Real-time threat detection',
        'Vulnerability scanning',
        'Compliance monitoring',
        'Incident response',
        'Security analytics',
        'Automated patching',
        '24/7 monitoring',
        'Custom alerts'
      ],
      pricing: {
        starter: { price: 59, period: 'month', features: ['5 devices', 'Basic monitoring', 'Email alerts'] },
        pro: { price: 129, period: 'month', features: ['25 devices', 'Advanced monitoring', 'SMS alerts', 'Priority support'] },
        enterprise: { price: 399, period: 'month', features: ['Unlimited devices', 'Custom monitoring', 'Dedicated team', 'On-site support'] }
      },
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      popular: true,
      rating: 4.8,
      users: '7,200+'
    },
    {
      id: 'document-ai',
      name: 'Document AI Processor',
      category: 'ai-tools',
      description: 'AI-powered document processing and analysis platform for business automation.',
      features: [
        'OCR text extraction',
        'Document classification',
        'Data extraction',
        'Contract analysis',
        'Compliance checking',
        'Workflow automation',
        'API integration',
        'Custom models'
      ],
      pricing: {
        starter: { price: 49, period: 'month', features: ['1,000 pages/month', 'Basic extraction', 'Email support'] },
        pro: { price: 119, period: 'month', features: ['10,000 pages/month', 'Advanced AI', 'API access', 'Priority support'] },
        enterprise: { price: 399, period: 'month', features: ['Unlimited pages', 'Custom models', 'White-label', 'Dedicated support'] }
      },
      icon: FileText,
      color: 'from-violet-500 to-purple-500',
      popular: false,
      rating: 4.7,
      users: '4,600+'
    },
    {
      id: 'financial-tracker',
      name: 'Financial Tracker AI',
      category: 'finance',
      description: 'Intelligent financial tracking and budgeting platform with AI-powered insights.',
      features: [
        'Expense categorization',
        'Budget planning',
        'AI spending insights',
        'Investment tracking',
        'Tax preparation',
        'Financial forecasting',
        'Goal setting',
        'Report generation'
      ],
      pricing: {
        starter: { price: 19, period: 'month', features: ['Basic tracking', '5 bank accounts', 'Monthly reports'] },
        pro: { price: 49, period: 'month', features: ['Advanced features', 'Unlimited accounts', 'AI insights', 'Tax tools'] },
        enterprise: { price: 149, period: 'month', features: ['Custom features', 'White-label', 'Dedicated support', 'API access'] }
      },
      icon: DollarSign,
      color: 'from-green-500 to-teal-500',
      popular: true,
      rating: 4.9,
      users: '18,500+'
    },
    {
      id: 'customer-support',
      name: 'AI Customer Support',
      category: 'support',
      description: 'Intelligent customer support platform with AI chatbots and ticket management.',
      features: [
        'AI chatbot',
        'Ticket management',
        'Knowledge base',
        'Live chat',
        'Customer analytics',
        'Multi-channel support',
        'Automated responses',
        'Team collaboration'
      ],
      pricing: {
        starter: { price: 29, period: 'month', features: ['100 tickets/month', 'Basic chatbot', 'Email support'] },
        pro: { price: 79, period: 'month', features: ['1,000 tickets/month', 'Advanced AI', 'Live chat', 'Priority support'] },
        enterprise: { price: 199, period: 'month', features: ['Unlimited tickets', 'Custom AI', 'White-label', 'Dedicated support'] }
      },
      icon: Headphones,
      color: 'from-cyan-500 to-blue-500',
      popular: false,
      rating: 4.6,
      users: '6,300+'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Globe },
    { id: 'ai-tools', name: 'AI Tools', icon: Brain },
    { id: 'analytics', name: 'Analytics', icon: BarChart3 },
    { id: 'marketing', name: 'Marketing', icon: Target },
    { id: 'productivity', name: 'Productivity', icon: Zap },
    { id: 'crm', name: 'CRM', icon: Users },
    { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'finance', name: 'Finance', icon: DollarSign },
    { id: 'support', name: 'Support', icon: Headphones }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? microSAASServices 
    : microSAASServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-advanced">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Powerful, Affordable, AI-Enhanced Tools
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Discover our comprehensive suite of micro SAAS solutions designed to streamline your business operations. 
            From AI-powered content generation to advanced analytics, we provide the tools you need to succeed.
          </p>
          
          {/* Contact CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="cyber-button neon-glow"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email Us
            </a>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white neon-glow'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-5 h-5 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </section>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`cyber-card hologram-effect relative overflow-hidden ${
                  service.popular ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-gray-300 text-sm">{service.rating} ({service.users} users)</span>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 text-sm font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Pricing:</h4>
                  <div className="space-y-2">
                    {Object.entries(service.pricing).map(([plan, details]) => (
                      <div key={plan} className="flex justify-between items-center text-sm">
                        <span className="text-gray-300 capitalize">{plan}:</span>
                        <span className="text-white font-semibold">
                          ${details.price}/{details.period}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <a
                    href={`/contact?service=${service.id}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium text-center block hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                  >
                    Get Started
                  </a>
                  <a
                    href={`/contact?service=${service.id}&demo=true`}
                    className="w-full border border-cyan-400 text-cyan-400 py-2 px-4 rounded-lg font-medium text-center block hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            );
          })}
        </section>

        {/* Why Choose Our Micro SAAS Solutions */}
        <section className="bg-gradient-to-r from-slate-800 to-purple-900 py-16 rounded-2xl cyber-card mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
              Why Choose Our Micro SAAS Solutions?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We provide enterprise-grade micro SAAS solutions at startup-friendly prices with unmatched support and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
              <p className="text-gray-300 text-sm">Get up and running in minutes, not months. Our solutions are designed for instant deployment.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI-Powered</h3>
              <p className="text-gray-300 text-sm">Every solution is enhanced with cutting-edge AI to maximize efficiency and results.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">Bank-level security and compliance built into every solution from day one.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Round-the-clock support from our expert team to ensure your success.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 py-16 rounded-2xl cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have already transformed their operations with our micro SAAS solutions. 
            Get started today with a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="tel:+13024640950"
              className="cyber-button neon-glow"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              ✉️ Email: kleber@ziontechgroup.com
            </a>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>✓ Free initial consultation</p>
            <p>✓ Custom solution design</p>
            <p>✓ 30-day money-back guarantee</p>
            <p>✓ 24/7 support available</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MicroSAASPage;