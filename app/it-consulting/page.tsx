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

const ITConsultingPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const consultingServices = [
    {
      id: 'it-strategy',
      name: 'IT Strategy & Planning',
      icon: Target,
      description: 'Comprehensive IT strategy development and technology roadmap planning for your business.',
      features: [
        'Technology assessment and analysis',
        'Digital transformation planning',
        'IT infrastructure optimization',
        'Cloud migration strategy',
        'Security framework development',
        'Cost optimization analysis',
        'Vendor evaluation and selection',
        'Implementation roadmap creation'
      ],
      pricing: {
        starter: { 
          price: 299, 
          period: 'month', 
          features: ['Basic assessment', 'Strategy document', 'Email support', '30-day review'] 
        },
        professional: { 
          price: 799, 
          period: 'month', 
          features: ['Comprehensive analysis', 'Detailed roadmap', 'Priority support', 'Quarterly reviews', 'Implementation guidance'] 
        },
        enterprise: { 
          price: 1999, 
          period: 'month', 
          features: ['Full transformation', 'Dedicated consultant', '24/7 support', 'Custom solutions', 'Ongoing optimization'] 
        }
      }
    },
    {
      id: 'cloud-consulting',
      name: 'Cloud Consulting & Migration',
      icon: Cloud,
      description: 'Expert guidance on cloud adoption, migration, and optimization strategies.',
      features: [
        'Cloud readiness assessment',
        'Migration planning and execution',
        'Multi-cloud strategy development',
        'Cost optimization and monitoring',
        'Security and compliance setup',
        'Performance optimization',
        'Disaster recovery planning',
        'Training and support'
      ],
      pricing: {
        starter: { 
          price: 399, 
          period: 'month', 
          features: ['Basic migration', 'Email support', 'Standard monitoring', 'Documentation'] 
        },
        professional: { 
          price: 999, 
          period: 'month', 
          features: ['Advanced migration', 'Priority support', 'Custom monitoring', 'Training sessions', 'Optimization'] 
        },
        enterprise: { 
          price: 2499, 
          period: 'month', 
          features: ['Full cloud transformation', 'Dedicated team', '24/7 support', 'Custom solutions', 'Ongoing management'] 
        }
      }
    },
    {
      id: 'security-consulting',
      name: 'Cybersecurity Consulting',
      icon: Shield,
      description: 'Comprehensive cybersecurity assessment, planning, and implementation services.',
      features: [
        'Security risk assessment',
        'Compliance framework implementation',
        'Security policy development',
        'Incident response planning',
        'Security awareness training',
        'Penetration testing',
        'Vulnerability management',
        'Ongoing security monitoring'
      ],
      pricing: {
        starter: { 
          price: 499, 
          period: 'month', 
          features: ['Basic assessment', 'Policy development', 'Email support', 'Monthly reports'] 
        },
        professional: { 
          price: 1299, 
          period: 'month', 
          features: ['Comprehensive assessment', 'Implementation support', 'Priority support', 'Training sessions', 'Monitoring'] 
        },
        enterprise: { 
          price: 2999, 
          period: 'month', 
          features: ['Full security program', 'Dedicated security team', '24/7 monitoring', 'Custom solutions', 'Compliance management'] 
        }
      }
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Expert Guidance',
      description: 'Access to experienced IT consultants with deep industry knowledge'
    },
    {
      icon: Clock,
      title: 'Time Savings',
      description: 'Accelerate your IT initiatives with proven methodologies and best practices'
    },
    {
      icon: Shield,
      title: 'Risk Mitigation',
      description: 'Minimize risks through careful planning and expert implementation'
    },
    {
      icon: TrendingUp,
      title: 'ROI Optimization',
      description: 'Maximize return on investment with strategic technology decisions'
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-400 mx-auto"></div>
          <p className="text-white text-xl mt-4">Loading IT Consulting Services...</p>
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
            IT Consulting Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with expert IT consulting services. We provide strategic guidance, 
            technology planning, and implementation support to help you achieve your digital goals.
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
            Why Choose Our IT Consulting?
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

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Consulting Services
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {consultingServices.map((service) => (
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
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                      <Check className="w-4 h-4 text-green-400" />
                      {feature}
                    </div>
                  ))}
                </div>

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
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert consultants help you build a robust, scalable, and secure IT environment.
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

export default ITConsultingPage;