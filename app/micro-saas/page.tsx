import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, 
  Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, 
  TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, 
  Mail, Phone, DollarSign, Clock, Award, CheckCircle, 
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, 
  CreditCard, Building, Factory, Car, Plane, Ship, Train, 
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, 
  Hammer, Paintbrush, Scissors, BookOpen, Calculator, 
  Compass, PieChart, TrendingDown, Activity, Zap as Lightning, 
  Target as Crosshair, Shield as Security, Users as People, 
  Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, 
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location,
  Eye, Search, MessageSquare, PieChart as Chart, 
  Download, Upload, RefreshCw, Play, Pause, Stop,
  Volume2, VolumeX, Mic, MicOff, Headphones, 
  Wifi, WifiOff, Battery, BatteryCharging, 
  Sun, Moon, Sunrise, Sunset, CloudRain, 
  Snowflake, Wind, Thermometer, Droplets,
  Lightbulb, LightbulbOff, Power, PowerOff,
  Wrench as Tool, Hammer as HammerIcon, 
  Paintbrush as Brush, Scissors as ScissorIcon,
  BookOpen as Book, Calculator as Calc,
  Compass as CompassIcon, PieChart as PieChartIcon,
  TrendingDown as TrendingDownIcon, Activity as ActivityIcon,
  Grid3X3, Package, Utensils, Microscope, 
  Atom, Cpu as CpuIcon, Database as DatabaseIcon,
  Network, Layers, Workflow, GitBranch,
  Zap as ZapIcon, Brain as BrainIcon, Eye as EyeIcon,
  Search as SearchIcon, MessageSquare as MessageSquareIcon,
  PieChart as PieChartIcon2, BarChart as BarChartIcon,
  TrendingUp as TrendingUpIcon, Activity as ActivityIcon2,
  Target as TargetIcon, Globe as GlobeIcon,
  Shield as ShieldIcon, Lock as LockIcon,
  Users as UsersIcon, Settings as SettingsIcon,
  Calendar as CalendarIcon, CheckSquare as CheckSquareIcon,
  FileText as FileTextIcon, Mail as MailIcon2,
  Phone as PhoneIcon2, DollarSign as DollarSignIcon,
  Clock as ClockIcon, Award as AwardIcon,
  CheckCircle as CheckCircleIcon, ArrowRight as ArrowRightIcon,
  Bot as BotIcon, Palette as PaletteIcon,
  Camera as CameraIcon, Music as MusicIcon,
  Video as VideoIcon, Gamepad2 as Gamepad2Icon,
  ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon,
  Building as BuildingIcon, Factory as FactoryIcon,
  Car as CarIcon, Plane as PlaneIcon,
  Ship as ShipIcon, Train as TrainIcon,
  Home as HomeIcon, Heart as HeartIcon,
  Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon,
  Briefcase as BriefcaseIcon, Wrench as WrenchIcon,
  Hammer as HammerIcon2, Paintbrush as PaintbrushIcon,
  Scissors as ScissorsIcon, BookOpen as BookOpenIcon,
  Calculator as CalculatorIcon, Compass as CompassIcon2,
  PieChart as PieChartIcon3, TrendingDown as TrendingDownIcon2,
  Activity as ActivityIcon3, Zap as ZapIcon2,
  Target as TargetIcon2, Shield as ShieldIcon2,
  Users as UsersIcon2, Star as StarIcon2,
  CheckCircle as CheckCircleIcon2, ArrowRight as ArrowRightIcon2,
  Phone as PhoneIcon3, Mail as MailIcon3,
  MapPin as LocationIcon
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MicroSaasPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const microSaasProducts = [
    {
      id: 'task-manager-pro',
      name: 'Task Manager Pro',
      icon: CheckSquare,
      description: 'Advanced task management solution with AI-powered productivity features.',
      features: [
        'AI-powered task prioritization',
        'Team collaboration tools',
        'Time tracking and analytics',
        'Custom workflow automation',
        'Mobile and desktop sync',
        'Integration with popular tools',
        'Advanced reporting',
        'Custom branding options'
      ],
      pricing: {
        starter: { 
          price: 29, 
          period: 'month', 
          features: ['Up to 5 users', 'Basic features', 'Email support', 'Standard templates'] 
        },
        professional: { 
          price: 79, 
          period: 'month', 
          features: ['Up to 25 users', 'Advanced features', 'Priority support', 'Custom integrations', 'Analytics'] 
        },
        enterprise: { 
          price: 199, 
          period: 'month', 
          features: ['Unlimited users', 'All features', '24/7 support', 'Custom development', 'White-label'] 
        }
      }
    },
    {
      id: 'expense-tracker',
      name: 'Expense Tracker',
      icon: DollarSign,
      description: 'Smart expense tracking and financial management for businesses and individuals.',
      features: [
        'Receipt scanning and OCR',
        'Automatic categorization',
        'Expense approval workflows',
        'Budget tracking and alerts',
        'Tax preparation tools',
        'Multi-currency support',
        'Advanced reporting',
        'API integration'
      ],
      pricing: {
        starter: { 
          price: 19, 
          period: 'month', 
          features: ['Up to 100 transactions/month', 'Basic features', 'Email support', 'Standard reports'] 
        },
        professional: { 
          price: 49, 
          period: 'month', 
          features: ['Up to 1,000 transactions/month', 'Advanced features', 'Priority support', 'Custom reports', 'Integrations'] 
        },
        enterprise: { 
          price: 129, 
          period: 'month', 
          features: ['Unlimited transactions', 'All features', '24/7 support', 'Custom development', 'White-label'] 
        }
      }
    },
    {
      id: 'smart-analytics',
      name: 'Smart Analytics',
      icon: BarChart,
      description: 'AI-powered analytics platform for data visualization and business intelligence.',
      features: [
        'Drag-and-drop dashboard builder',
        'AI-powered insights',
        'Real-time data processing',
        'Custom data connectors',
        'Advanced visualization tools',
        'Automated reporting',
        'Team collaboration',
        'API and webhook support'
      ],
      pricing: {
        starter: { 
          price: 39, 
          period: 'month', 
          features: ['Up to 5 dashboards', 'Basic features', 'Email support', 'Standard connectors'] 
        },
        professional: { 
          price: 99, 
          period: 'month', 
          features: ['Up to 25 dashboards', 'Advanced features', 'Priority support', 'Custom connectors', 'Advanced analytics'] 
        },
        enterprise: { 
          price: 249, 
          period: 'month', 
          features: ['Unlimited dashboards', 'All features', '24/7 support', 'Custom development', 'White-label'] 
        }
      }
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Rapid Deployment',
      description: 'Get your micro-SaaS up and running in days, not months'
    },
    {
      icon: Shield,
      title: 'Secure & Scalable',
      description: 'Built with enterprise-grade security and scalability in mind'
    },
    {
      icon: Settings,
      title: 'Customizable',
      description: 'Fully customizable to match your brand and requirements'
    },
    {
      icon: Users,
      title: 'Multi-tenant',
      description: 'Support for multiple customers with isolated data and settings'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-400 mx-auto"></div>
          <p className="text-white text-xl mt-4">Loading Micro-SaaS Products...</p>
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
            Micro-SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover our collection of powerful micro-SaaS products designed to solve specific business 
            problems with elegant, user-friendly solutions.
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

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Micro-SaaS Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="p-4 bg-purple-600/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Micro-SaaS Products
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-purple-600/20 rounded-lg">
                    <product.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{product.description}</p>
                
                <div className="space-y-2 mb-6">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-green-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-700 pt-4">
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-white">${product.pricing.professional.price}</span>
                    <span className="text-gray-400">/{product.pricing.professional.period}</span>
                  </div>
                  <Link
                    to={`/contact?product=${product.id}`}
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
            Ready to Launch Your Micro-SaaS?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us help you build and launch your micro-SaaS product with our proven development process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Start Your Project
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

export default MicroSaasPage;