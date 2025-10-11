'use client';
import React, { useCallback, useState, useEffect, Suspense, lazy, memo } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Zap, 
  Shield, 
  Brain, 
  Globe, 
  Star,
  TrendingUp,
  Users,
  BarChart3,
  Code,
  Cloud,
  Smartphone,
  Database,
  Target,
  Rocket,
  Lightbulb,
  Settings,
  Monitor,
  Wifi,
  FileText,
  PieChart,
  MessageSquare,
  Calendar,
  Camera,
  Music,
  Video,
  ShoppingCart,
  CreditCard,
  Truck,
  Home,
  Car,
  Plane,
  Heart,
  BookOpen,
  Gamepad2,
  Headphones,
  Mic,
  Image,
  Download,
  Upload,
  Share2,
  Link,
  Copy,
  Edit,
  Trash2,
  Save,
  Search,
  Filter,
  Sort,
  RefreshCw,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  Menu,
  MoreHorizontal,
  MoreVertical,
  Grid,
  List,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  Shield as ShieldIcon,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info as InfoIcon,
  HelpCircle as HelpIcon,
  ExternalLink as ExternalLinkIcon,
  ChevronRight as ChevronRightIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ChevronLeft as ChevronLeftIcon,
  Menu as MenuIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon,
  Grid as GridIcon,
  List as ListIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  Lock as LockIcon2,
  Unlock as UnlockIcon,
  Key as KeyIcon,
  Fingerprint as FingerprintIcon,
  Shield as ShieldIcon2,
  AlertTriangle as AlertTriangleIcon,
  CheckCircle2 as CheckCircle2Icon,
  XCircle as XCircleIcon,
  Server,
  HardDrive,
  Cpu,
  Network,
  Layers,
  Activity,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Atom,
  Microscope,
  FlaskConical,
  Dna,
  Stethoscope,
  Pill,
  Syringe,
  Heart as HeartIcon,
  Activity as ActivityIcon,
  Pulse,
  Thermometer,
  Droplets,
  Wind,
  Sun,
  Moon,
  CloudRain,
  Snowflake,
  Tornado,
  Hurricane,
  Earthquake,
  Volcano,
  Mountain,
  TreePine,
  Leaf,
  Flower,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  PawPrint,
  Footprints,
  Tree,
  Sprout,
  Wheat,
  Apple,
  Carrot,
  Corn,
  Grape,
  Cherry,
  Strawberry,
  Banana,
  Orange,
  Lemon,
  Peach,
  Pear,
  Pineapple,
  Watermelon,
  Coconut,
  Avocado,
  Tomato,
  Potato,
  Onion,
  Garlic,
  Ginger,
  Pepper,
  Salt,
  Sugar,
  Coffee,
  Tea,
  Milk,
  Egg,
  Bread,
  Cheese,
  Meat,
  Fish as FishIcon,
  Shrimp,
  Lobster,
  Crab,
  Octopus,
  Squid,
  Snail,
  Butterfly,
  Bee,
  Ant,
  Spider,
  Scorpion,
  Snake,
  Lizard,
  Turtle,
  Frog,
  Tadpole,
  Salamander,
  Newt,
  Axolotl,
  Platypus,
  Kangaroo,
  Koala,
  Panda,
  Bear,
  Lion,
  Tiger,
  Leopard,
  Cheetah,
  Wolf,
  Fox,
  Raccoon,
  Skunk,
  Opossum,
  Squirrel,
  Chipmunk,
  Hamster,
  GuineaPig,
  Rabbit,
  Hare,
  Deer,
  Moose,
  Elk,
  Bison,
  Buffalo,
  Cow,
  Bull,
  Ox,
  Horse,
  Donkey,
  Mule,
  Zebra,
  Giraffe,
  Elephant,
  Rhinoceros,
  Hippopotamus,
  Pig,
  Sheep,
  Goat,
  Llama,
  Alpaca,
  Camel,
  Dromedary,
  Bactrian,
  Yak,
  Reindeer,
  Caribou,
  Elk as ElkIcon,
  Antelope,
  Gazelle,
  Impala,
  Springbok,
  Wildebeest,
  Gnu,
  Hartebeest,
  Topi,
  Waterbuck,
  Kudu,
  Eland,
  Oryx,
  Addax,
  Scimitar,
  Sable,
  Roan,
  Sitatunga,
  Lechwe,
  Puku,
  Redunca,
  Kob,
  Reedbuck,
  Duiker,
  Steenbok,
  Grysbok,
  Sharpe,
  Klipspringer,
  Oribi,
  Suni,
  Dik,
  DikDik,
  Madoqua,
  Neotragus,
  Oreotragus,
  Raphicerus,
  Sylvicapra,
  Cephalophus,
  Philantomba,
  Tragelaphus,
  Ammelaphus,
  Strepsiceros,
  Taurotragus,
  Tragelaphus as TragelaphusIcon,
  Boselaphus,
  Tetracerus,
  Antilope,
  Gazella,
  Eudorcas,
  Nanger,
  Litocranius,
  Ammodorcas,
  Procapra,
  Saiga,
  Pantholops,
  Capra,
  Ovis,
  Pseudois,
  Budorcas,
  Ovibos,
  Capricornis,
  Nemorhaedus,
  Rupicapra,
  Oreamnos,
  Hemitragus,
  Arabitragus,
  Ammotragus,
  Pseudois as PseudoisIcon,
  Ovis as OvisIcon,
  Capra as CapraIcon,
  Budorcas as BudorcasIcon,
  Ovibos as OvibosIcon,
  Capricornis as CapricornisIcon,
  Nemorhaedus as NemorhaedusIcon,
  Rupicapra as RupicapraIcon,
  Oreamnos as OreamnosIcon,
  Hemitragus as HemitragusIcon,
  Arabitragus as ArabitragusIcon,
  Ammotragus as AmmotragusIcon,
  Pseudois as PseudoisIcon2,
  Ovis as OvisIcon2,
  Capra as CapraIcon2,
  Budorcas as BudorcasIcon2,
  Ovibos as OvibosIcon2,
  Capricornis as CapricornisIcon2,
  Nemorhaedus as NemorhaedusIcon2,
  Rupicapra as RupicapraIcon2,
  Oreamnos as OreamnosIcon2,
  Hemitragus as HemitragusIcon2,
  Arabitragus as ArabitragusIcon2,
  Ammotragus as AmmotragusIcon2
} from 'lucide-react';

const HomePage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
      color: 'from-cyan-400 to-blue-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions for modern businesses with 99.9% uptime guarantee',
      color: 'from-purple-400 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions to protect your digital assets',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with cutting-edge technologies',
      color: 'from-orange-400 to-red-500'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform data into actionable insights with our advanced analytics platform',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      color: 'from-indigo-400 to-purple-500'
    }
  ];

  const services = [
    {
      title: 'Micro SAAS Services',
      description: 'Affordable micro SAAS solutions for small to medium businesses',
      icon: Rocket,
      link: '/micro-saas-services',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Advanced AI Services',
      description: 'Cutting-edge AI solutions including quantum computing and neural interfaces',
      icon: Atom,
      link: '/ai-services-advanced',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions from cloud migration to 24/7 support',
      icon: Server,
      link: '/it-services-comprehensive',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' },
    { number: '50+', label: 'Expert Team Members' }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of enterprise AI solutions, quantum computing, autonomous systems, and digital transformation services. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, quantum computing, digital transformation, enterprise software, automation, machine learning" />
      </Helmet>
      
      <PerformanceOptimizer>
        <SEOOptimizer>
          {/* Hero Section */}
          <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
              <div className="text-center">
                <h1 className={`text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Welcome to <span className="holographic">Zion Tech Group</span>
                </h1>
                <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  Leading provider of AI and IT solutions for modern businesses. 
                  Transform your operations with cutting-edge technology and innovative solutions.
                </p>
                <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <a
                    href="/contact"
                    className="cyber-button bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                  <a
                    href="/services"
                    className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
                  >
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Why Choose <span className="neon-glow neon-cyan">Zion Tech Group</span>?
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We deliver cutting-edge technology solutions that drive innovation and growth for your business.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="glass-card p-6 group hover:scale-105 transition-all duration-300">
                    <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                      <feature.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our <span className="holographic">Services</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive technology solutions designed to meet your business needs.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="holographic-card p-8 group">
                    <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg mb-6`}>
                      <service.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    <a
                      href={service.link}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2" size={16} />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="holographic-card p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Get started with our cutting-edge technology solutions today. 
                  Contact our experts for a personalized consultation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="cyber-button bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    <Phone className="mr-2" size={20} />
                    Call Now: +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="mr-2" size={20} />
                    Email Us
                  </a>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
                  <p>Visit us at: <a href="https://ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">https://ziontechgroup.com</a></p>
                </div>
              </div>
            </div>
          </section>
        </SEOOptimizer>
      </PerformanceOptimizer>
    </div>
  );
};

export default HomePage;
