import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  Brain, 
  Mail, 
  Users, 
  Database, 
  Code, 
  Smartphone, 
  Globe, 
  Star, 
  CheckCircle, 
  Clock, 
  DollarSign,
  TrendingUp,
  Lock,
  Sparkles,
  Target,
  Rocket,
  Award,
  Headphones,
  Settings,
  FileText,
  Image,
  Video,
  Music,
  Calendar,
  MessageSquare,
  Search,
  Filter,
  Download,
  Upload,
  Share2,
  Eye,
  Edit3,
  Trash2,
  Plus,
  Minus,
  RefreshCw,
  Play,
  Pause,
  Stop,
  Volume2,
  VolumeX,
  Wifi,
  Battery,
  Cpu,
  HardDrive,
  Monitor,
  Mouse,
  Keyboard,
  Camera,
  Mic,
  MicOff,
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  PhoneOff,
  PhoneForwarded,
  PhoneIncoming,
  PhoneOutgoing,
  PhoneMissed,
  PhoneOff,
  PhoneForwarded
} from "lucide-react";

export default function MicroSaas() {
  const microSaasServices = [
    {
      id: "zion-analytics-pro",
      name: "Zion Analytics Pro",
      description: "AI-powered business intelligence and analytics platform with real-time dashboards, predictive insights, and automated reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      price: "$29/month",
      features: [
        "Real-time dashboards",
        "Predictive analytics",
        "Automated reporting",
        "Custom data visualization",
        "API integrations",
        "Mobile app included"
      ],
      benefits: [
        "40% faster decision making",
        "Reduce reporting time by 80%",
        "Identify trends before competitors",
        "Customizable for any industry"
      ],
      category: "Analytics",
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro",
      popular: true
    },
    {
      id: "zion-security-shield",
      name: "Zion Security Shield",
      description: "Advanced cybersecurity protection with AI threat detection, automated incident response, and compliance monitoring.",
      icon: <Shield className="w-8 h-8" />,
      price: "$49/month",
      features: [
        "AI threat detection",
        "Automated incident response",
        "Compliance monitoring",
        "Real-time alerts",
        "Security audit reports",
        "24/7 monitoring"
      ],
      benefits: [
        "99.9% threat detection accuracy",
        "Reduce security incidents by 95%",
        "Automated compliance reporting",
        "Peace of mind with 24/7 protection"
      ],
      category: "Security",
      color: "from-red-500 to-pink-500",
      link: "/zion-security-shield",
      popular: true
    },
    {
      id: "zion-cloud-vault",
      name: "Zion Cloud Vault",
      description: "Secure cloud storage solution with end-to-end encryption, automated backups, and advanced file management.",
      icon: <Cloud className="w-8 h-8" />,
      price: "$9/month",
      features: [
        "End-to-end encryption",
        "Automated backups",
        "File versioning",
        "Collaborative sharing",
        "Mobile sync",
        "Unlimited storage"
      ],
      benefits: [
        "Military-grade security",
        "Never lose important files",
        "Access from anywhere",
        "Collaborate seamlessly"
      ],
      category: "Storage",
      color: "from-green-500 to-emerald-500",
      link: "/zion-cloud-vault"
    },
    {
      id: "zion-ai-assistant",
      name: "Zion AI Assistant",
      description: "Intelligent virtual assistant for customer service, sales support, and business automation with natural language processing.",
      icon: <Brain className="w-8 h-8" />,
      price: "$39/month",
      features: [
        "Natural language processing",
        "Multi-channel support",
        "Custom training",
        "Analytics dashboard",
        "API integration",
        "24/7 availability"
      ],
      benefits: [
        "Reduce support costs by 60%",
        "Improve customer satisfaction",
        "Handle multiple languages",
        "Learn and improve over time"
      ],
      category: "AI",
      color: "from-purple-500 to-violet-500",
      link: "/zion-ai-assistant",
      popular: true
    },
    {
      id: "zion-email-pro",
      name: "Zion Email Pro",
      description: "Advanced email marketing platform with AI-powered personalization, automation, and detailed analytics.",
      icon: <Mail className="w-8 h-8" />,
      price: "$19/month",
      features: [
        "AI-powered personalization",
        "Email automation",
        "A/B testing",
        "Advanced analytics",
        "Template library",
        "Deliverability optimization"
      ],
      benefits: [
        "Increase open rates by 45%",
        "Automate email campaigns",
        "Personalize at scale",
        "Track every interaction"
      ],
      category: "Marketing",
      color: "from-orange-500 to-yellow-500",
      link: "/zion-email-pro"
    },
    {
      id: "zion-project-manager",
      name: "Zion Project Manager",
      description: "Comprehensive project management tool with AI-powered insights, team collaboration, and resource optimization.",
      icon: <Target className="w-8 h-8" />,
      price: "$24/month",
      features: [
        "AI-powered insights",
        "Team collaboration",
        "Resource optimization",
        "Time tracking",
        "Budget management",
        "Progress monitoring"
      ],
      benefits: [
        "Complete projects 30% faster",
        "Improve team productivity",
        "Stay within budget",
        "Real-time project visibility"
      ],
      category: "Productivity",
      color: "from-indigo-500 to-blue-500",
      link: "/zion-project-manager"
    },
    {
      id: "zion-crm-plus",
      name: "Zion CRM Plus",
      description: "Customer relationship management with AI-powered lead scoring, automated follow-ups, and sales forecasting.",
      icon: <Users className="w-8 h-8" />,
      price: "$34/month",
      features: [
        "AI lead scoring",
        "Automated follow-ups",
        "Sales forecasting",
        "Pipeline management",
        "Contact management",
        "Integration ecosystem"
      ],
      benefits: [
        "Increase sales by 35%",
        "Never miss a lead",
        "Predict sales outcomes",
        "Streamline sales process"
      ],
      category: "CRM",
      color: "from-teal-500 to-cyan-500",
      link: "/zion-crm-plus"
    },
    {
      id: "zion-content-studio",
      name: "Zion Content Studio",
      description: "AI-powered content creation platform for blogs, social media, videos, and marketing materials.",
      icon: <FileText className="w-8 h-8" />,
      price: "$29/month",
      features: [
        "AI content generation",
        "Multi-format support",
        "Brand voice training",
        "SEO optimization",
        "Content calendar",
        "Collaboration tools"
      ],
      benefits: [
        "Create content 10x faster",
        "Maintain brand consistency",
        "Optimize for SEO",
        "Scale content production"
      ],
      category: "Content",
      color: "from-pink-500 to-rose-500",
      link: "/zion-content-studio"
    },
    {
      id: "zion-finance-tracker",
      name: "Zion Finance Tracker",
      description: "Personal and business finance management with AI-powered insights, budgeting, and investment tracking.",
      icon: <DollarSign className="w-8 h-8" />,
      price: "$14/month",
      features: [
        "AI financial insights",
        "Automated budgeting",
        "Investment tracking",
        "Expense categorization",
        "Financial forecasting",
        "Tax preparation"
      ],
      benefits: [
        "Save 20% more money",
        "Automate financial tasks",
        "Make informed decisions",
        "Simplify tax preparation"
      ],
      category: "Finance",
      color: "from-green-500 to-lime-500",
      link: "/zion-finance-tracker"
    },
    {
      id: "zion-social-scheduler",
      name: "Zion Social Scheduler",
      description: "Social media management platform with AI-powered content optimization, scheduling, and performance analytics.",
      icon: <Share2 className="w-8 h-8" />,
      price: "$19/month",
      features: [
        "AI content optimization",
        "Multi-platform posting",
        "Optimal timing analysis",
        "Performance analytics",
        "Hashtag research",
        "Engagement tracking"
      ],
      benefits: [
        "Increase engagement by 50%",
        "Save 5 hours per week",
        "Post at optimal times",
        "Track performance metrics"
      ],
      category: "Social Media",
      color: "from-violet-500 to-purple-500",
      link: "/zion-social-scheduler"
    },
    {
      id: "zion-inventory-manager",
      name: "Zion Inventory Manager",
      description: "Smart inventory management with AI-powered demand forecasting, automated reordering, and real-time tracking.",
      icon: <Database className="w-8 h-8" />,
      price: "$39/month",
      features: [
        "AI demand forecasting",
        "Automated reordering",
        "Real-time tracking",
        "Multi-location support",
        "Barcode scanning",
        "Integration APIs"
      ],
      benefits: [
        "Reduce stockouts by 80%",
        "Optimize inventory levels",
        "Automate reordering",
        "Real-time visibility"
      ],
      category: "Inventory",
      color: "from-amber-500 to-orange-500",
      link: "/zion-inventory-manager"
    },
    {
      id: "zion-hr-suite",
      name: "Zion HR Suite",
      description: "Human resources management with AI-powered recruitment, employee analytics, and performance tracking.",
      icon: <Users className="w-8 h-8" />,
      price: "$44/month",
      features: [
        "AI recruitment matching",
        "Employee analytics",
        "Performance tracking",
        "Time and attendance",
        "Payroll integration",
        "Compliance management"
      ],
      benefits: [
        "Hire better candidates",
        "Improve employee retention",
        "Streamline HR processes",
        "Ensure compliance"
      ],
      category: "HR",
      color: "from-sky-500 to-blue-500",
      link: "/zion-hr-suite"
    }
  ];

  const categories = [
    "All",
    "Analytics",
    "Security",
    "Storage",
    "AI",
    "Marketing",
    "Productivity",
    "CRM",
    "Content",
    "Finance",
    "Social Media",
    "Inventory",
    "HR"
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Solutions", icon: <Zap className="w-6 h-6" /> },
    { number: "10,000+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Powerful Business Tools</title>
        <meta
          name="description"
          content="Discover our comprehensive collection of micro SAAS solutions designed to streamline your business operations. From AI-powered analytics to cybersecurity, find the perfect tools for your needs."
        />
        <meta
          name="keywords"
          content="micro saas, business software, AI tools, analytics, cybersecurity, productivity, CRM, project management"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SAAS
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, ready-to-use software solutions that transform your business operations. 
                From AI-powered analytics to cybersecurity, find the perfect tools for your needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>No setup required</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>Instant deployment</span>
                </div>
                <div className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Micro SAAS Solutions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive collection of business tools designed to streamline operations and boost productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service) => (
                <div
                  key={service.id}
                  className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                      {service.icon}
                    </div>
                    <span className="text-sm text-gray-400 bg-gray-700 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>

                  <div className="mb-4">
                    <div className="text-2xl font-bold text-white mb-1">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <TrendingUp className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-lg text-center font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link
                      to="/contact"
                      className="px-4 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our micro SAAS solutions today and see the difference AI-powered tools can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Demo
                <Play className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="py-12 bg-black/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Need Help Choosing?</h3>
            <p className="text-gray-300 mb-6">
              Our experts are here to help you find the perfect micro SAAS solutions for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-gray-300">
              <div className="flex items-center justify-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center justify-center">
                <Globe className="w-4 h-4 mr-2" />
                <span>https://ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}