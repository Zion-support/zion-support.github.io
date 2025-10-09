import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, 
  Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, 
  Settings, Calendar, CheckSquare, FileText, Mail, Phone, MapPin, 
  DollarSign, Clock, Award, Rocket, Eye, MessageSquare, Search, 
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, 
  CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, 
  Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, 
  Paintbrush, Scissors, BookOpen, Calculator, Compass, PieChart, 
  TrendingDown, Activity, Zap as Lightning, Target as Crosshair, 
  Shield as Security, Users as People, Star as StarIcon, 
  CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, 
  Mail as MailIcon, MapPin as Location, ExternalLink, Play, 
  Download, Upload, RefreshCw, Monitor, Smartphone as Mobile, 
  Tablet, Laptop, Server, HardDrive, Wifi, Bluetooth, 
  Battery, Power, Wrench as Tools, Settings as Cog, 
  Bell, User, UserPlus, UserCheck, UserX, Users as Team, 
  UserCog, UserShield, UserCheck as UserVerified, 
  UserPlus as UserAdd, UserX as UserRemove, Team as UsersIcon,
  Package, PenTool, Grid3X3, ChevronRight, ChevronDown
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AIServicesPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const aiServices = [
    // AI Business Intelligence & Analytics
    {
      id: 'ai-business-intelligence',
      name: 'AI Business Intelligence',
      category: 'analytics',
      icon: BarChart,
      description: 'Transform your data into actionable insights with advanced AI-powered analytics and predictive modeling.',
      features: [
        'Real-time data processing and analysis',
        'Predictive analytics and forecasting',
        'Natural language query interface',
        'Automated report generation',
        'Anomaly detection and alerting',
        'Custom dashboard creation',
        'Multi-source data integration',
        'Advanced visualization tools'
      ],
      pricing: {
        starter: { 
          price: 299, 
          period: 'month', 
          features: ['Up to 10 data sources', 'Basic analytics', 'Email support', 'Standard reports'] 
        },
        professional: { 
          price: 799, 
          period: 'month', 
          features: ['Up to 50 data sources', 'Advanced analytics', 'Priority support', 'Custom dashboards', 'API access'] 
        },
        enterprise: { 
          price: 1999, 
          period: 'month', 
          features: ['Unlimited data sources', 'Custom ML models', '24/7 support', 'White-label options', 'Dedicated support'] 
        }
      }
    },
    {
      id: 'ai-document-processor',
      name: 'AI Document Processor',
      category: 'automation',
      icon: FileText,
      description: 'Intelligent document processing and analysis using advanced OCR and NLP technologies.',
      features: [
        'Multi-format document support',
        'Intelligent text extraction',
        'Automated data classification',
        'Smart content analysis',
        'Batch processing capabilities',
        'Custom field extraction',
        'Document comparison tools',
        'Integration with existing systems'
      ],
      pricing: {
        starter: { 
          price: 199, 
          period: 'month', 
          features: ['Up to 1,000 documents/month', 'Basic OCR', 'Email support', 'Standard templates'] 
        },
        professional: { 
          price: 499, 
          period: 'month', 
          features: ['Up to 10,000 documents/month', 'Advanced OCR', 'Priority support', 'Custom templates', 'API access'] 
        },
        enterprise: { 
          price: 1299, 
          period: 'month', 
          features: ['Unlimited documents', 'Custom AI models', '24/7 support', 'White-label options', 'Dedicated support'] 
        }
      }
    },
    {
      id: 'ai-customer-service',
      name: 'AI Customer Experience',
      category: 'customer',
      icon: MessageSquare,
      description: 'Revolutionary AI-powered customer service solutions for enhanced user experience.',
      features: [
        'Intelligent chatbots and virtual assistants',
        'Natural language processing',
        'Sentiment analysis and monitoring',
        'Automated ticket routing',
        'Multi-channel support integration',
        'Real-time response generation',
        'Customer behavior analytics',
        'Personalized interaction history'
      ],
      pricing: {
        starter: { 
          price: 399, 
          period: 'month', 
          features: ['Up to 1,000 interactions/month', 'Basic chatbot', 'Email support', 'Standard integrations'] 
        },
        professional: { 
          price: 899, 
          period: 'month', 
          features: ['Up to 10,000 interactions/month', 'Advanced AI', 'Priority support', 'Custom integrations', 'Analytics dashboard'] 
        },
        enterprise: { 
          price: 2199, 
          period: 'month', 
          features: ['Unlimited interactions', 'Custom AI models', '24/7 support', 'White-label options', 'Dedicated support'] 
        }
      }
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', icon: Grid3X3 },
    { id: 'analytics', name: 'Analytics', icon: BarChart },
    { id: 'automation', name: 'Automation', icon: Zap },
    { id: 'customer', name: 'Customer Service', icon: MessageSquare },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'mobile', name: 'Mobile', icon: Smartphone }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-400 mx-auto"></div>
          <p className="text-white text-xl mt-4">Loading AI Services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI-Powered Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive suite of artificial intelligence services designed to transform your business operations and drive innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
            >
              <Play className="w-5 h-5" /> Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg">
                    <service.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <p className="text-gray-400 text-sm">{service.category}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-green-400" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <button
                      onClick={() => toggleService(service.id)}
                      className="text-purple-400 text-sm hover:text-purple-300 flex items-center gap-1"
                    >
                      {expandedService === service.id ? 'Show Less' : `+${service.features.length - 3} More`}
                      <ChevronDown className={`w-4 h-4 transition-transform ${expandedService === service.id ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {expandedService === service.id && (
                  <div className="space-y-2 mb-6">
                    {service.features.slice(3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                        <Check className="w-4 h-4 text-green-400" />
                        {feature}
                      </div>
                    ))}
                  </div>
                )}

                <div className="border-t border-gray-700 pt-4">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-white">${service.pricing.professional.price}</span>
                    <span className="text-gray-400">/{service.pricing.professional.period}</span>
                  </div>
                  <Link
                    to={`/contact?service=${service.id}`}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    Get Started <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our AI experts help you choose the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Schedule Consultation
            </Link>
            <Link
              to="/pricing"
              className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <DollarSign className="w-5 h-5" /> View Pricing
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AIServicesPage;