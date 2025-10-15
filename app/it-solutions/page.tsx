'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  CheckCircle, 
  ArrowRight, 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  Smartphone, 
  Globe, 
  Users, 
  Clock, 
  Star, 
  TrendingUp, 
  Target, 
  Lightbulb, 
  Rocket, 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  BarChart3, 
  Settings, 
  Cpu, 
  Network, 
  FileText, 
  Eye, 
  MessageSquare, 
  Lock, 
  Wifi, 
  Monitor, 
  HardDrive, 
  Layers, 
  Zap, 
  Brain, 
  Building, 
  Package, 
  Download, 
  Upload, 
  RefreshCw, 
  Play, 
  Pause, 
  Stop, 
  Volume2, 
  Camera, 
  Image, 
  Video, 
  Music, 
  Headphones, 
  Mic, 
  MicOff, 
  Bell, 
  BellOff, 
  Heart, 
  ThumbsUp, 
  ThumbsDown, 
  Share, 
  Bookmark, 
  Flag, 
  AlertTriangle, 
  Info, 
  HelpCircle, 
  X, 
  Plus, 
  Minus, 
  Edit, 
  Trash2, 
  Save, 
  Copy, 
  Scissors, 
  Undo, 
  Redo, 
  Maximize, 
  Minimize, 
  RotateCcw, 
  RotateCw, 
  Move, 
  Grid, 
  List, 
  Calendar, 
  Clock as ClockIcon, 
  Timer, 
  Stopwatch, 
  Watch, 
  Calendar as CalendarIcon, 
  Sun, 
  Moon, 
  Cloud as CloudIcon, 
  CloudRain, 
  CloudSnow, 
  CloudLightning, 
  Wind, 
  Droplets, 
  Flame, 
  Snowflake, 
  Zap as ZapIcon, 
  Sparkles, 
  Star as StarIcon, 
  Heart as HeartIcon, 
  Smile, 
  Frown, 
  Meh, 
  Laugh, 
  Angry, 
  Sad, 
  Surprised, 
  Wink, 
  Kiss, 
  Tongue, 
  Wink2, 
  Grimace, 
  Expressionless, 
  Hushed, 
  Flushed, 
  Relieved, 
  Pensive, 
  Confused, 
  Confounded, 
  Persevere, 
  Disappointed, 
  Worried, 
  Angry as AngryIcon, 
  Rage, 
  Cry, 
  Sob, 
  Joy, 
  Astonished, 
  Scream, 
  Necktie, 
  Shirt, 
  Dress, 
  WomansClothes, 
  Bikini, 
  Kimono, 
  LabCoat, 
  SafetyVest, 
  WomansHat, 
  Tophat, 
  MortarBoard, 
  BilledCap, 
  MilitaryHelmet, 
  RescueWorkersHelmet, 
  ConstructionWorkersHelmet, 
  RacingHelmet, 
  MotorcycleHelmet, 
  Bicycle, 
  Scooter, 
  Skateboard, 
  MotorScooter, 
  Bus, 
  OncomingBus, 
  Trolleybus, 
  Minibus, 
  Ambulance, 
  FireEngine, 
  PoliceCar, 
  OncomingPoliceCar, 
  Taxi, 
  OncomingTaxi, 
  Car, 
  OncomingAutomobile, 
  BlueCar, 
  PickupTruck, 
  Truck, 
  ArticulatedLorry, 
  Tractor, 
  RacingCar, 
  Motorcycle, 
  MotorScooter as MotorScooterIcon, 
  ManualWheelchair, 
  MotorizedWheelchair, 
  AutoRickshaw, 
  Bike, 
  KickScooter, 
  Skateboard as SkateboardIcon, 
  RollerSkate, 
  Bus as BusIcon, 
  Trolleybus as TrolleybusIcon, 
  Minibus as MinibusIcon, 
  Ambulance as AmbulanceIcon, 
  FireEngine as FireEngineIcon, 
  PoliceCar as PoliceCarIcon, 
  OncomingPoliceCar as OncomingPoliceCarIcon, 
  Taxi as TaxiIcon, 
  OncomingTaxi as OncomingTaxiIcon, 
  Car as CarIcon, 
  OncomingAutomobile as OncomingAutomobileIcon, 
  BlueCar as BlueCarIcon, 
  PickupTruck as PickupTruckIcon, 
  Truck as TruckIcon, 
  ArticulatedLorry as ArticulatedLorryIcon, 
  Tractor as TractorIcon, 
  RacingCar as RacingCarIcon, 
  Motorcycle as MotorcycleIcon, 
  MotorScooter as MotorScooterIcon2, 
  ManualWheelchair as ManualWheelchairIcon, 
  MotorizedWheelchair as MotorizedWheelchairIcon, 
  AutoRickshaw as AutoRickshawIcon, 
  Bike as BikeIcon, 
  KickScooter as KickScooterIcon, 
  Skateboard as SkateboardIcon2, 
  RollerSkate as RollerSkateIcon
} from 'lucide-react';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure',
      price: 'From $2,500/mo',
      description: 'Comprehensive cloud infrastructure setup and management',
      longDescription: 'Build, deploy, and manage scalable cloud infrastructure with our expert team. We handle everything from migration to optimization.',
      features: [
        'AWS/Azure/GCP Setup & Migration',
        'Container Orchestration (Kubernetes)',
        'Auto-scaling & Load Balancing',
        'Database Management & Optimization',
        'Backup & Disaster Recovery',
        'Security & Compliance',
        'Cost Optimization',
        '24/7 Monitoring & Support',
        'CI/CD Pipeline Setup',
        'Infrastructure as Code'
      ],
      benefits: [
        'Reduce infrastructure costs by 40%',
        'Improve scalability and performance',
        'Enhance security and compliance',
        'Minimize downtime and outages',
        'Focus on core business activities'
      ],
      category: 'Infrastructure',
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      id: 'cybersecurity-solutions',
      name: 'Cybersecurity Solutions',
      price: 'From $1,500/mo',
      description: 'Comprehensive security solutions to protect your digital assets',
      longDescription: 'Protect your business from cyber threats with our comprehensive security solutions including threat detection, prevention, and response.',
      features: [
        'Security Assessment & Auditing',
        'Threat Detection & Response',
        'Firewall & Network Security',
        'Endpoint Protection',
        'Email Security & Phishing Protection',
        'Data Encryption & Backup',
        'Compliance Management (GDPR, HIPAA)',
        'Security Training & Awareness',
        'Incident Response Planning',
        '24/7 Security Monitoring'
      ],
      benefits: [
        'Protect against cyber attacks',
        'Ensure regulatory compliance',
        'Reduce security risks by 90%',
        'Improve incident response time',
        'Maintain business continuity'
      ],
      category: 'Security',
      icon: <Shield className="w-8 h-8 text-red-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/cybersecurity-solutions'
    },
    {
      id: 'web-development',
      name: 'Web Development',
      price: 'From $5,000',
      description: 'Custom web applications and websites',
      longDescription: 'Build modern, responsive, and scalable web applications with our expert development team using the latest technologies.',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Content Management Systems',
        'Progressive Web Apps (PWA)',
        'API Development & Integration',
        'Database Design & Optimization',
        'Responsive Design',
        'SEO Optimization',
        'Performance Optimization',
        'Maintenance & Support'
      ],
      benefits: [
        'Modern, user-friendly interfaces',
        'Improved user experience',
        'Better search engine rankings',
        'Mobile-responsive design',
        'Scalable and maintainable code'
      ],
      category: 'Development',
      icon: <Code className="w-8 h-8 text-green-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/web-development'
    },
    {
      id: 'mobile-app-development',
      name: 'Mobile App Development',
      price: 'From $10,000',
      description: 'Native and cross-platform mobile applications',
      longDescription: 'Create powerful mobile applications for iOS and Android with our experienced development team using native and cross-platform technologies.',
      features: [
        'Native iOS & Android Apps',
        'Cross-platform Development (React Native, Flutter)',
        'UI/UX Design',
        'Backend API Development',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Security & Authentication',
        'Performance Optimization',
        'App Maintenance & Updates'
      ],
      benefits: [
        'Reach mobile users effectively',
        'Improve customer engagement',
        'Increase brand visibility',
        'Generate additional revenue',
        'Competitive advantage'
      ],
      category: 'Development',
      icon: <Smartphone className="w-8 h-8 text-purple-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/mobile-app-development'
    },
    {
      id: 'api-development',
      name: 'API Development',
      price: 'From $3,000',
      description: 'RESTful APIs and microservices architecture',
      longDescription: 'Build robust, scalable APIs and microservices that power your applications and enable seamless integration with third-party services.',
      features: [
        'RESTful API Development',
        'GraphQL APIs',
        'Microservices Architecture',
        'API Gateway Setup',
        'Authentication & Authorization',
        'Rate Limiting & Throttling',
        'API Documentation',
        'Testing & Quality Assurance',
        'Performance Monitoring',
        'API Security & Compliance'
      ],
      benefits: [
        'Enable system integration',
        'Improve scalability',
        'Reduce development time',
        'Enhance security',
        'Facilitate third-party integrations'
      ],
      category: 'Development',
      icon: <Network className="w-8 h-8 text-cyan-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/api-development'
    },
    {
      id: 'database-management',
      name: 'Database Management',
      price: 'From $2,000/mo',
      description: 'Database design, optimization, and management',
      longDescription: 'Optimize your database performance and ensure data integrity with our comprehensive database management services.',
      features: [
        'Database Design & Architecture',
        'Performance Optimization',
        'Data Migration & Integration',
        'Backup & Recovery Solutions',
        'Security & Access Control',
        'Monitoring & Maintenance',
        'Scalability Planning',
        'Data Quality Management',
        'Compliance & Auditing',
        '24/7 Database Support'
      ],
      benefits: [
        'Improve database performance',
        'Ensure data integrity',
        'Reduce downtime',
        'Enhance security',
        'Optimize costs'
      ],
      category: 'Data Management',
      icon: <Database className="w-8 h-8 text-orange-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/database-management'
    },
    {
      id: 'devops-solutions',
      name: 'DevOps Solutions',
      price: 'From $4,000/mo',
      description: 'CI/CD pipelines and infrastructure automation',
      longDescription: 'Streamline your development and deployment processes with our comprehensive DevOps solutions including automation, monitoring, and continuous integration.',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Container Orchestration',
        'Automated Testing',
        'Deployment Automation',
        'Monitoring & Logging',
        'Security Scanning',
        'Performance Optimization',
        'Disaster Recovery',
        'Team Training & Support'
      ],
      benefits: [
        'Faster deployment cycles',
        'Improved code quality',
        'Reduced manual errors',
        'Better collaboration',
        'Increased productivity'
      ],
      category: 'DevOps',
      icon: <Settings className="w-8 h-8 text-yellow-400" />,
      popular: true,
      link: 'https://ziontechgroup.com/devops-solutions'
    },
    {
      id: 'it-consulting',
      name: 'IT Consulting',
      price: 'From $150/hr',
      description: 'Strategic IT planning and technology consulting',
      longDescription: 'Get expert guidance on your IT strategy, technology selection, and digital transformation initiatives with our experienced consultants.',
      features: [
        'IT Strategy & Planning',
        'Technology Assessment',
        'Digital Transformation',
        'Architecture Design',
        'Vendor Selection',
        'Cost Optimization',
        'Risk Assessment',
        'Compliance Review',
        'Training & Knowledge Transfer',
        'Ongoing Advisory Services'
      ],
      benefits: [
        'Strategic IT guidance',
        'Technology optimization',
        'Cost reduction',
        'Risk mitigation',
        'Competitive advantage'
      ],
      category: 'Consulting',
      icon: <Users className="w-8 h-8 text-indigo-400" />,
      popular: false,
      link: 'https://ziontechgroup.com/it-consulting'
    }
  ];

  const categories = ['All', 'Infrastructure', 'Security', 'Development', 'Data Management', 'DevOps', 'Consulting'];

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.9% uptime guarantee and comprehensive data protection.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: '24/7 Support',
      description: 'Round-the-clock expert support to ensure your systems run smoothly at all times.'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business, from startup to enterprise scale.'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      title: 'Certified Experts',
      description: 'Our team consists of certified professionals with years of industry experience.'
    },
    {
      icon: <Rocket className="w-8 h-8 text-cyan-400" />,
      title: 'Fast Deployment',
      description: 'Quick implementation and deployment to get you up and running in no time.'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,
      title: '500+ Happy Clients',
      description: 'Trusted by businesses worldwide for our innovative solutions and exceptional service.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your current IT infrastructure and business requirements.',
      icon: <Target className="w-8 h-8 text-cyan-400" />
    },
    {
      step: '02',
      title: 'Solution Design',
      description: 'Our experts design a customized IT solution that fits your needs.',
      icon: <Lightbulb className="w-8 h-8 text-purple-400" />
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We implement the solution with minimal disruption to your operations.',
      icon: <Settings className="w-8 h-8 text-green-400" />
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing and optimization to ensure peak performance.',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'We launch your solution and provide ongoing support and maintenance.',
      icon: <Rocket className="w-8 h-8 text-orange-400" />
    }
  ];

  const stats = [
    { number: '500+', label: 'IT Projects Completed' },
    { number: '100+', label: 'Enterprise Clients' },
    { number: '99.9%', label: 'System Uptime' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Comprehensive Technology Services | Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive IT solutions including cloud infrastructure, cybersecurity, web development, mobile apps, and more. Expert technology services for your business." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, web development, mobile development, API development, database management, DevOps" />
        <meta property="og:title" content="IT Solutions - Comprehensive Technology Services" />
        <meta property="og:description" content="Discover our comprehensive IT solutions including cloud infrastructure, cybersecurity, web development, mobile apps, and more." />
        <meta property="og:url" content="https://ziontechgroup.com/it-solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/it-solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Solutions
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {' '}That Scale
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Comprehensive technology services including cloud infrastructure, cybersecurity, 
              development, and more. We help businesses leverage technology for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#services"
                className="border-2 border-white/30 hover:border-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center group"
              >
                View Services
                <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value through our expertise, innovation, and commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from our comprehensive suite of IT solutions designed to meet every business need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-slate-700/50 hover:bg-slate-600/50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group relative ${
                service.popular ? 'ring-2 ring-blue-500' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="text-sm text-blue-400 font-medium">{service.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {service.name}
                  </h3>
                  <div className="text-3xl font-bold text-blue-400 mb-3">
                    {service.price}
                  </div>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.slice(0, 5).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 5 && (
                    <li className="text-sm text-blue-400 font-medium">
                      +{service.features.length - 5} more features
                    </li>
                  )}
                </ul>

                <div className="space-y-4">
                  <a
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white text-center py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </a>
                  <Link
                    to="/contact"
                    className="block w-full border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white text-center py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and maximum value.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-sm font-bold text-white">
                    {step.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let our expert team help you choose the right IT solutions for your business needs. 
            Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITSolutionsPage;