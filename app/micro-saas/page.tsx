import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Calendar, 
  FileText, 
  BarChart, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Users, 
  Shield, 
  Brain, 
  Cloud, 
  Rocket, 
  Sparkles, 
  Award, 
  Clock, 
  Settings,
  Database,
  Lock,
  Globe,
  Cpu,
  Zap,
  Target,
  Wrench,
  Hammer,
  Wifi,
  HardDrive,
  Monitor,
  Smartphone,
  Laptop,
  Printer,
  Router,
  Key,
  Eye,
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  RefreshCw,
  Download,
  Upload,
  Trash2,
  Edit,
  Copy,
  Save,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench as WrenchIcon,
  Hammer as HammerIcon,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Compass,
  PieChart,
  TrendingDown
} from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: Calendar,
      title: 'AI Smart Calendar',
      description: 'Intelligent calendar management with AI-powered scheduling and optimization',
      features: ['Auto-scheduling', 'Conflict Resolution', 'Smart Reminders', 'Team Coordination'],
      href: '/ai-smart-calendar',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      price: '$29/month'
    },
    {
      icon: FileText,
      title: 'AI Content Writer',
      description: 'AI-powered content creation tool for blogs, social media, and marketing',
      features: ['Multiple Formats', 'SEO Optimization', 'Brand Voice', 'Plagiarism Check'],
      href: '/ai-content-writer',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      price: '$19/month'
    },
    {
      icon: BarChart,
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive analytics dashboard with AI-powered insights and reporting',
      features: ['Real-time Data', 'Custom Reports', 'Predictive Analytics', 'Data Visualization'],
      href: '/ai-analytics-dashboard',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      price: '$39/month'
    },
    {
      icon: MessageSquare,
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot for customer support with natural language processing',
      features: ['24/7 Support', 'Multi-language', 'Escalation Management', 'Analytics'],
      href: '/ai-customer-support-bot',
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/10',
      price: '$49/month'
    },
    {
      icon: Users,
      title: 'AI Project Manager',
      description: 'AI-powered project management tool with intelligent task allocation',
      features: ['Smart Scheduling', 'Resource Optimization', 'Progress Tracking', 'Team Collaboration'],
      href: '/ai-project-manager',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      price: '$59/month'
    },
    {
      icon: CreditCard,
      title: 'AI Financial Advisor',
      description: 'Personal finance management with AI-powered investment recommendations',
      features: ['Portfolio Analysis', 'Risk Assessment', 'Investment Tips', 'Budget Planning'],
      href: '/ai-financial-advisor',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      price: '$79/month'
    },
    {
      icon: Mail,
      title: 'AI Email Marketing',
      description: 'Automated email marketing campaigns with AI optimization',
      features: ['Campaign Automation', 'A/B Testing', 'Personalization', 'Analytics'],
      href: '/ai-email-marketing',
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/10',
      price: '$39/month'
    },
    {
      icon: Bot,
      title: 'AI CRM Assistant',
      description: 'Intelligent CRM system with AI-powered customer insights',
      features: ['Lead Scoring', 'Customer Segmentation', 'Sales Forecasting', 'Automation'],
      href: '/ai-crm-assistant',
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      price: '$69/month'
    }
  ];

  const stats = [
    { number: '50+', label: 'Micro SaaS Products' },
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'StartupXYZ',
      role: 'Founder',
      content: 'The AI Smart Calendar has revolutionized how we manage our team\'s schedule. It saves us hours every week.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'ContentCorp',
      role: 'Marketing Director',
      content: 'AI Content Writer has been a game-changer for our content strategy. The quality and speed are incredible.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'DataDriven Inc',
      role: 'Analytics Manager',
      content: 'The AI Analytics Dashboard provides insights we never knew existed. It\'s like having a data scientist on our team.',
      rating: 5
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast Setup',
      description: 'Get up and running in minutes with our intuitive setup process'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance standards for all our products'
    },
    {
      icon: Globe,
      title: 'Global Availability',
      description: 'Access your tools from anywhere in the world with 99.9% uptime'
    },
    {
      icon: Settings,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing tools and workflows'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Micro SaaS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful micro SaaS solutions for specific business needs. Get the tools you need 
              without the complexity of enterprise software.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Get Free Consultation
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SaaS Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Micro SaaS Products</h2>
            <p className="text-gray-300 text-lg">Powerful tools for specific business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {microSaasProducts.map((product, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 ${product.bgColor} rounded-lg flex items-center justify-center`}>
                    <product.icon className={`w-6 h-6 ${product.color}`} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400">{product.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-300 mb-4">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between">
                  <Link
                    to={product.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                    Try Free
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Micro SaaS?</h2>
            <p className="text-gray-300 text-lg">Built for modern businesses with modern needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Users Say</h2>
            <p className="text-gray-300 text-lg">Success stories from businesses using our micro SaaS tools</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business with Micro SaaS?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Start with a free trial and discover how our micro SaaS tools can improve your business operations. 
            No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 inline-flex items-center justify-center"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center justify-center"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;