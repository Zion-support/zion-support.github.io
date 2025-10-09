'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Target, 
  BarChart3, 
  Zap, 
  CheckCircle,
  Star,
  ArrowRight,
  TrendingUp,
  Eye,
  MousePointer,
  Clock,
  Calendar,
  Filter,
  Search,
  Plus,
  Edit,
  Trash2,
  Settings,
  Bell,
  Globe,
  Smartphone,
  Monitor,
  Lock,
  Shield,
  Award,
  Activity,
  PieChart,
  LineChart,
  MessageSquare,
  AtSign,
  Hash,
  Image,
  Video,
  FileText,
  Download,
  Upload,
  RefreshCw,
  Play,
  Pause,
  Square,
  RotateCcw,
  Copy,
  Share2,
  Heart,
  ThumbsUp,
  AlertCircle,
  Info,
  Check,
  X,
  DollarSign,
  Percent,
  TrendingDown,
  Phone,
  Mail,
  MapPin,
  Building,
  User,
  UserPlus,
  UserCheck,
  UserX,
  CreditCard,
  ShoppingCart,
  Package,
  Truck,
  Headphones,
  HelpCircle,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  Car,
  Plane,
  Ship,
  Train,
  Factory,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen as Book,
  Calculator,
  Compass,
  Navigation,
  Target as Crosshair,
  Shield as Security,
  Users as People,
  Star as StarIcon,
  CheckCircle as CheckIcon,
  ArrowRight as Arrow,
  Phone as PhoneIcon,
  Mail as MailIcon,
  MapPin as Location
} from 'lucide-react';

const AiCrmAdvancedPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [showPricing, setShowPricing] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Lead Scoring",
      description: "Advanced machine learning algorithms automatically score and prioritize leads based on behavior and engagement",
      benefits: ["40% higher conversion rates", "Automated lead qualification", "Predictive analytics"]
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Intelligent Sales Forecasting",
      description: "AI analyzes historical data and current pipeline to provide accurate sales predictions and revenue forecasting",
      benefits: ["95% forecast accuracy", "Real-time predictions", "Risk assessment"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Advanced Analytics & Insights",
      description: "Comprehensive analytics dashboard with AI-driven insights to optimize sales performance and customer relationships",
      benefits: ["Real-time metrics", "Performance optimization", "Custom reporting"]
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: "360° Customer View",
      description: "Complete customer profile with interaction history, preferences, and AI-generated insights for personalized engagement",
      benefits: ["Unified customer data", "Personalized interactions", "Better customer service"]
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Enterprise Security",
      description: "Bank-level security with 256-bit encryption, SOC 2 compliance, and advanced access controls",
      benefits: ["Data encryption", "Role-based access", "Audit trails"]
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-pink-400" />,
      title: "AI Chat Integration",
      description: "Seamlessly integrate AI-powered chatbots and live chat for instant customer support and lead capture",
      benefits: ["24/7 customer support", "Instant lead capture", "Reduced response time"]
    }
  ];

  const crmModules = [
    {
      name: "Lead Management",
      description: "Capture, qualify, and nurture leads with AI-powered automation",
      icon: <Target className="w-6 h-6" />,
      features: ["Lead scoring", "Automated follow-up", "Lead nurturing campaigns"]
    },
    {
      name: "Sales Pipeline",
      description: "Visualize and manage your sales process with intelligent insights",
      icon: <BarChart3 className="w-6 h-6" />,
      features: ["Pipeline visualization", "Deal tracking", "Sales forecasting"]
    },
    {
      name: "Customer Management",
      description: "Comprehensive customer profiles with interaction history and preferences",
      icon: <Users className="w-6 h-6" />,
      features: ["Customer profiles", "Interaction history", "Preference tracking"]
    },
    {
      name: "Marketing Automation",
      description: "Automated marketing campaigns with AI-powered personalization",
      icon: <Zap className="w-6 h-6" />,
      features: ["Email campaigns", "SMS marketing", "Social media integration"]
    },
    {
      name: "Analytics & Reporting",
      description: "Advanced analytics with AI-driven insights and custom reporting",
      icon: <PieChart className="w-6 h-6" />,
      features: ["Performance metrics", "Custom reports", "Predictive analytics"]
    },
    {
      name: "Team Collaboration",
      description: "Collaborate effectively with team members and share information seamlessly",
      icon: <Users className="w-6 h-6" />,
      features: ["Team workspaces", "Task management", "Communication tools"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99.99",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 contacts",
        "Basic AI features",
        "Email integration",
        "Mobile app access",
        "Basic analytics",
        "Email support"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$299.99",
      period: "/month",
      description: "Ideal for growing businesses and sales teams",
      features: [
        "Up to 10,000 contacts",
        "Advanced AI features",
        "Full CRM functionality",
        "Advanced analytics",
        "API access",
        "Priority support",
        "Custom fields",
        "Workflow automation"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$799.99",
      period: "/month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited contacts",
        "Everything in Professional",
        "White-label solution",
        "Custom integrations",
        "Dedicated account manager",
        "Advanced security",
        "Custom training",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Sales Director",
      company: "Tech Solutions Inc.",
      content: "AI CRM Advanced increased our sales conversion rate by 45% and reduced our sales cycle by 30%. The AI lead scoring is incredibly accurate and saves us hours every week.",
      rating: 5,
      improvement: "45% conversion increase"
    },
    {
      name: "Robert Chen",
      role: "CEO",
      company: "Growth Marketing Agency",
      content: "The AI-powered insights help us understand our customers better than ever. We've seen a 60% improvement in customer satisfaction and a 35% increase in repeat business.",
      rating: 5,
      improvement: "60% satisfaction increase"
    },
    {
      name: "Sarah Johnson",
      role: "VP of Sales",
      company: "Enterprise Software Co.",
      content: "The forecasting accuracy is remarkable. We can now predict our quarterly revenue within 5% accuracy, which has transformed our business planning and investor relations.",
      rating: 5,
      improvement: "95% forecast accuracy"
    }
  ];

  const stats = [
    { number: "25,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "2M+", label: "Leads Processed", icon: <Target className="w-6 h-6" /> },
    { number: "45%", label: "Average Conversion Increase", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "4.9/5", label: "User Rating", icon: <Star className="w-6 h-6" /> }
  ];

  const workflowSteps = [
    {
      step: "1",
      title: "Lead Capture & Scoring",
      description: "AI automatically captures leads from multiple sources and scores them based on likelihood to convert",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "2",
      title: "Intelligent Routing",
      description: "AI routes leads to the most appropriate sales rep based on expertise, workload, and success history",
      icon: <Users className="w-8 h-8" />
    },
    {
      step: "3",
      title: "Automated Follow-up",
      description: "AI creates personalized follow-up sequences and sends them at optimal times for maximum engagement",
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      step: "4",
      title: "Deal Management",
      description: "AI tracks deal progress, identifies risks, and suggests next steps to close more deals faster",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI CRM Advanced - Intelligent Customer Relationship Management | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered CRM with lead scoring, sales forecasting, and customer insights. Increase conversions by 45% with intelligent customer relationship management." />
        <meta name="keywords" content="AI CRM, customer relationship management, lead scoring, sales forecasting, CRM software, sales automation" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-crm-advanced" />
      </Helmet>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-cyan-500/10 border border-cyan-500/20 rounded-full px-4 py-2 mb-6">
            <Zap className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Customer Relationship Management</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            AI CRM Advanced
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Intelligent Customer Relationship Management
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your sales process with AI-powered lead scoring, intelligent forecasting, 
            and comprehensive customer insights. Increase conversions by 45% while reducing sales cycle by 30%.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="cyber-button px-8 py-4 text-lg">
              Start Free Trial
            </button>
            <button 
              onClick={() => setShowPricing(true)}
              className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg font-medium"
            >
              View Pricing
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Modules */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Complete CRM Solution
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Everything you need to manage customer relationships and grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {crmModules.map((module, index) => (
            <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mr-4">
                  {module.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{module.name}</h3>
                </div>
              </div>
              <p className="text-gray-300 mb-4 text-sm">
                {module.description}
              </p>
              <ul className="space-y-1">
                {module.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-xs text-cyan-400">
                    <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Powerful AI Features
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our AI-powered platform automates sales processes and provides intelligent insights 
            to maximize your customer relationships and revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {feature.description}
              </p>
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

      {/* How It Works */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Transform your sales process in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {workflowSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their sales process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="cyber-card p-8">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star className="w-5 h-5 text-yellow-400 fill-current" key={i} />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-gray-700 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-cyan-400">{testimonial.role}</div>
                <div className="text-sm text-gray-400">{testimonial.company}</div>
                <div className="text-sm text-green-400 font-medium mt-2">
                  {testimonial.improvement}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      {showPricing && (
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'border-cyan-400 border-2' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.popular 
                    ? 'cyber-button' 
                    : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="cyber-card p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Sales Process?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of users who have already revolutionized their customer relationships 
            with our AI-powered CRM platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="cyber-button px-8 py-4 text-lg">
              Start Your Free Trial
            </button>
            <a 
              href="tel:+13024640950"
              className="px-8 py-4 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 rounded-lg font-medium"
            >
              Call (302) 464-0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiCrmAdvancedPage;