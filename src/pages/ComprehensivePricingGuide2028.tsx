import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain, Cloud, Shield, Zap, Users, Rocket, TrendingUp, CheckCircle,
  ArrowRight, Star, Award, Globe, Database, Lock, Cpu, Network,
  Smartphone, BarChart3, Code, Server, Chip, Wifi, ShieldCheck,
  Bot, GitFork, Eye, Sparkles, Phone, Mail, MapPin, MessageSquare,
  FileText, Search, Clock, DollarSign, Target, Lightbulb, Atom,
  Satellite, Leaf, Gamepad2, Coins, Activity, Palette, Settings,
  Workflow, Layers, BarChart, PieChart, LineChart, AreaChart,
  Calendar, Clock3, Timer, Stopwatch, Watch, Monitor, Smartphone2,
  Tablet, Laptop, Desktop, Server2, Database2, HardDrive, Cloud2,
  Wifi2, Bluetooth, Radio, Satellite2, Antenna, Router, Switch,
  Hub, Bridge, Gateway, Firewall, Key, Lock2, Unlock, Eye2,
  EyeOff, Shield2, UserCheck, UserX, Users2, UserPlus, UserMinus,
  Building, Factory, Warehouse, Store, Office, Home, Car, Truck,
  Plane, Ship, Train, Bus, Bike, Motorcycle, Scooter, Skateboard,
  RollerSkate, Snowboard, Surfboard, Tent, Camping, Hiking, Climbing,
  Swimming, Running, Walking, Cycling, Yoga, Meditation, Fitness,
  Heart, Brain2, Eye3, Ear, Nose, Mouth, Hand, Foot, Arm, Leg,
  Head, Neck, Shoulder, Chest, Stomach, Back, Hip, Knee, Ankle,
  Wrist, Elbow, Finger, Toe, Hair, Beard, Mustache, Glasses,
  Hat, Shirt, Pants, Dress, Skirt, Shoes, Boots, Sandals, Socks,
  Underwear, Bra, Panties, Swimsuit, Towel, Blanket, Pillow, Bed,
  Chair, Table, Desk, Shelf, Cabinet, Drawer, Box, Bag, Wallet,
  Purse, Backpack, Suitcase, Briefcase, Folder, File, Document,
  Paper, Pen, Pencil, Marker, Highlighter, Eraser, Ruler, Compass,
  Calculator, Phone2, Camera, Video, Microphone, Speaker, Headphones,
  Keyboard, Mouse, Gamepad, Controller, Remote, Battery, Plug,
  Socket, Switch2, Button, Knob, Dial, Slider, Toggle, Checkbox,
  Radio2, Select, Input, Textarea, Form, Submit, Reset, Save,
  Load, Import, Export, Upload, Download, Share, Link2, Copy,
  Cut, Paste, Delete, Edit, Create, Add, Remove, Hide, Show,
  Expand, Collapse, Minimize, Maximize, Close, Open, Start, Stop,
  Pause, Play, Forward, Rewind, Skip, Previous, Next, First, Last,
  Top, Bottom, Left, Right, Up, Down, In, Out, On, Off, Yes, No,
  True, False, Null, Undefined, Error, Warning, Info, Success,
  Question, Help, Support, Contact, About, Home2, Settings2,
  Profile, Account, Login, Logout, Register, Signup, Signin,
  Password, Username, Email, Phone3, Address, Location, Map,
  Navigation, Route, Direction, Distance, Time, Date, Calendar2,
  Schedule, Appointment, Meeting, Event, Conference, Workshop,
  Seminar, Training, Course, Lesson, Class, School, University,
  College, Institute, Academy, Center, Foundation, Organization,
  Company, Corporation, Business, Enterprise, Startup, Venture,
  Project, Initiative, Campaign, Program, Service, Product, Solution,
  Platform, System, Application, Software, Hardware, Firmware,
  Network2, Internet, Web, Online, Digital, Virtual, Remote,
  Cloud3, AI2, ML, Data, Analytics, Intelligence, Smart, Automated,
  Autonomous, Intelligent, Advanced, Modern, Innovative, Creative,
  Unique, Special, Premium, Professional, Expert, Specialist,
  Consultant, Advisor, Coach, Mentor, Trainer, Teacher, Instructor,
  Guide, Leader, Manager, Director, Executive, Officer, President,
  CEO, CFO, CTO, COO, VP, Manager, Supervisor, Coordinator,
  Assistant, Intern, Student, Learner, Researcher, Scientist,
  Engineer, Developer, Designer, Architect, Analyst, Planner,
  Strategist, Consultant, Advisor, Counselor, Therapist, Doctor,
  Nurse, Physician, Surgeon, Dentist, Optometrist, Psychologist,
  Psychiatrist, Therapist, Counselor, Social Worker, Lawyer,
  Attorney, Judge, Prosecutor, Defender, Police, Officer, Firefighter,
  Paramedic, EMT, Ambulance, Hospital, Clinic, Office2, Store2,
  Restaurant, Cafe, Bar, Hotel, Motel, Resort, Spa, Gym, Pool,
  Park, Garden, Forest, Mountain, Beach, Ocean, Lake, River,
  Stream, Creek, Pond, Swamp, Desert, Jungle, Savannah, Tundra,
  Arctic, Antarctic, Space, Planet, Star, Sun, Moon, Earth,
  Mars, Venus, Jupiter, Saturn, Uranus, Neptune, Mercury, Pluto,
  Galaxy, Universe, Cosmos, Solar System, Milky Way, Andromeda,
  Nebula, Black Hole, Wormhole, Time Travel, Teleportation,
  Invisibility, Superpowers, Magic, Fantasy, Science Fiction,
  Horror, Thriller, Mystery, Romance, Comedy, Drama, Action,
  Adventure, Western, War, Historical, Documentary, News, Sports,
  Music, Art, Literature, Poetry, Philosophy, Religion, Politics,
  Economics, Sociology, Psychology, Anthropology, Archaeology,
  History, Geography, Geology, Biology, Chemistry, Physics,
  Mathematics, Statistics, Computer Science, Information Technology,
  Engineering, Medicine, Law, Business, Economics, Finance, Marketing,
  Sales, Human Resources, Operations, Supply Chain, Logistics,
  Manufacturing, Construction, Agriculture, Mining, Energy, Utilities,
  Transportation, Communication, Media, Entertainment, Education,
  Healthcare, Government, Military, Police, Fire, Emergency, Security,
  Insurance, Banking, Investment, Real Estate, Tourism, Hospitality,
  Retail, Wholesale, Import, Export, Trade, Commerce, Industry,
  Service2, Manufacturing2, Construction2, Agriculture2, Mining2,
  Energy2, Utilities2, Transportation2, Communication2, Media2,
  Entertainment2, Education2, Healthcare2, Government2, Military2,
  Police2, Fire2, Emergency2, Security2, Insurance2, Banking2,
  Investment2, RealEstate2, Tourism2, Hospitality2, Retail2,
  Wholesale2, Import2, Export2, Trade2, Commerce2, Industry2
} from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  href: string;
}

interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  color: string;
  services: {
    name: string;
    description: string;
    pricing: PricingTier[];
    marketComparison: string;
    roi: string;
    implementationTime: string;
    technologies: string[];
    useCases: string[];
    benefits: string[];
  }[];
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'ai-automation',
    name: 'AI & Automation Services',
    description: 'Cutting-edge artificial intelligence and automation solutions for modern businesses',
    icon: Brain,
    color: 'from-blue-500 to-purple-600',
    services: [
      {
        name: 'AI Autonomous Business Manager',
        description: 'Fully autonomous business operations platform with AI-driven decision making',
        pricing: [
          {
            name: 'Starter',
            price: '$2,999',
            period: '/month',
            description: 'For small businesses starting their AI journey',
            features: [
              'Basic autonomous operations',
              'Core business intelligence',
              'Standard reporting',
              'Email support',
              'Basic integrations'
            ],
            cta: 'Get Started',
            href: '/contact'
          },
          {
            name: 'Professional',
            price: '$5,999',
            period: '/month',
            description: 'For growing businesses with advanced needs',
            features: [
              'Full autonomous operations',
              'Advanced AI analytics',
              'Custom workflows',
              'Priority support',
              'Advanced integrations',
              'Custom training'
            ],
            popular: true,
            cta: 'Start Free Trial',
            href: '/contact'
          },
          {
            name: 'Enterprise',
            price: '$9,999',
            period: '/month',
            description: 'For large enterprises with complex requirements',
            features: [
              'Complete business automation',
              'Custom AI models',
              'Dedicated support team',
              'White-label options',
              'API access',
              'Custom development'
            ],
            cta: 'Contact Sales',
            href: '/contact'
          }
        ],
        marketComparison: 'Market average: $8,000 - $25,000/month. Our pricing is 25-40% below market rates.',
        roi: 'Expected ROI: 300-500% within 12 months',
        implementationTime: 'Implementation: 2-4 weeks',
        technologies: ['GPT-4, Claude, Gemini', 'Machine Learning', 'RPA', 'API Integration', 'Cloud Computing'],
        useCases: ['Small to medium businesses', 'E-commerce operations', 'Service-based companies', 'Startups & scale-ups'],
        benefits: ['Reduce operational costs by 40-60%', 'Increase efficiency by 300%', '24/7 autonomous operation', 'Real-time insights & alerts']
      },
      {
        name: 'AI Content Marketing Suite',
        description: 'AI-powered content creation and marketing automation platform',
        pricing: [
          {
            name: 'Basic',
            price: '$299',
            period: '/month',
            description: 'For individual content creators and small teams',
            features: [
              'AI content generation (50 articles/month)',
              'Basic SEO optimization',
              'Content calendar',
              'Email support',
              'Standard templates'
            ],
            cta: 'Start Free Trial',
            href: '/contact'
          },
          {
            name: 'Professional',
            price: '$799',
            period: '/month',
            description: 'For marketing teams and growing businesses',
            features: [
              'AI content generation (200 articles/month)',
              'Advanced SEO tools',
              'Social media automation',
              'Performance analytics',
              'Priority support',
              'Custom templates'
            ],
            popular: true,
            cta: 'Start Free Trial',
            href: '/contact'
          },
          {
            name: 'Enterprise',
            price: '$1,999',
            period: '/month',
            description: 'For large organizations with extensive content needs',
            features: [
              'Unlimited AI content generation',
              'Advanced AI models',
              'Custom AI training',
              'Dedicated account manager',
              'White-label options',
              'API access'
            ],
            cta: 'Contact Sales',
            href: '/contact'
          }
        ],
        marketComparison: 'Market average: $500 - $3,000/month. Our pricing is 20-35% below market rates.',
        roi: 'Expected ROI: 200-400% within 6 months',
        implementationTime: 'Implementation: 1-2 weeks',
        technologies: ['GPT-4', 'Claude', 'Natural Language Processing', 'SEO Tools', 'Analytics'],
        useCases: ['Marketing agencies', 'E-commerce businesses', 'SaaS companies', 'Content creators', 'Small businesses'],
        benefits: ['10x faster content creation', 'Improve SEO rankings', 'Increase engagement rates', 'Consistent brand messaging']
      }
    ]
  },
  {
    id: 'quantum-computing',
    name: 'Quantum Computing Solutions',
    description: 'Revolutionary quantum computing platforms for research and enterprise applications',
    icon: Atom,
    color: 'from-purple-500 to-pink-600',
    services: [
      {
        name: 'AI-Quantum Hybrid Platform',
        description: 'Combines classical AI with quantum computing for unprecedented computational power',
        pricing: [
          {
            name: 'Research',
            price: '$15,000',
            period: '/month',
            description: 'For academic and research institutions',
            features: [
              'Quantum-classical hybrid algorithms',
              'Basic quantum simulation',
              'Research support',
              'Academic pricing',
              'Community access'
            ],
            cta: 'Apply for Research Access',
            href: '/contact'
          },
          {
            name: 'Professional',
            price: '$35,000',
            period: '/month',
            description: 'For businesses and research organizations',
            features: [
              'Advanced quantum algorithms',
              'Real-time quantum simulation',
              'Custom algorithm development',
              'Priority support',
              'Training & consultation',
              'API access'
            ],
            popular: true,
            cta: 'Start Free Trial',
            href: '/contact'
          },
          {
            name: 'Enterprise',
            price: '$50,000',
            period: '/month',
            description: 'For large enterprises with complex quantum needs',
            features: [
              'Custom quantum solutions',
              'Dedicated quantum team',
              'White-label options',
              'Custom development',
              '24/7 support',
              'On-premise options'
            ],
            cta: 'Contact Sales',
            href: '/contact'
          }
        ],
        marketComparison: 'Market average: $50,000 - $200,000/month. Our pricing is 30-50% below market rates.',
        roi: 'Expected ROI: 500-1000% for research applications',
        implementationTime: 'Implementation: 4-8 weeks',
        technologies: ['IBM Qiskit', 'Google Cirq', 'Microsoft Q#', 'Quantum Algorithms', 'Hybrid ML'],
        useCases: ['Research institutions', 'Financial services', 'Pharmaceutical companies', 'Government agencies', 'Technology companies'],
        benefits: ['1000x faster computation for complex problems', 'Unbreakable quantum encryption', 'Revolutionary optimization capabilities', 'Future-proof technology investment']
      }
    ]
  },
  {
    id: 'cloud-infrastructure',
    name: 'Cloud & Infrastructure Services',
    description: 'Comprehensive cloud solutions and infrastructure management services',
    icon: Cloud,
    color: 'from-cyan-500 to-blue-600',
    services: [
      {
        name: 'Cloud FinOps Optimization Platform',
        description: 'Intelligent cloud cost optimization across multiple providers',
        pricing: [
          {
            name: 'Basic',
            price: '$1,500',
            period: '/month',
            description: 'For small cloud deployments',
            features: [
              'Single cloud optimization',
              'Basic cost tracking',
              'Monthly reports',
              'Email support',
              'Standard integrations'
            ],
            cta: 'Start Free Trial',
            href: '/contact'
          },
          {
            name: 'Professional',
            price: '$3,500',
            period: '/month',
            description: 'For multi-cloud environments',
            features: [
              'Multi-cloud optimization',
              'Advanced cost analytics',
              'Automated optimization',
              'Priority support',
              'Custom alerts',
              'API access'
            ],
            popular: true,
            cta: 'Start Free Trial',
            href: '/contact'
          },
          {
            name: 'Enterprise',
            price: '$5,000',
            period: '/month',
            description: 'For large enterprise cloud operations',
            features: [
              'Enterprise optimization',
              'Custom cost models',
              'Dedicated support team',
              'White-label options',
              'Custom integrations',
              'On-premise deployment'
            ],
            cta: 'Contact Sales',
            href: '/contact'
          }
        ],
        marketComparison: 'Market average: $3,000 - $10,000/month. Our pricing is 25-40% below market rates.',
        roi: 'Expected ROI: 200-400% through cost savings',
        implementationTime: 'Implementation: 2-3 weeks',
        technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'CloudWatch'],
        useCases: ['Enterprise companies', 'Startups & scale-ups', 'E-commerce businesses', 'SaaS companies', 'Digital agencies'],
        benefits: ['Reduce cloud costs by 30-50%', 'Improve resource utilization', 'Automated cost optimization', 'Real-time cost monitoring']
      }
    ]
  },
  {
    id: 'cybersecurity',
    name: 'Cybersecurity Solutions',
    description: 'Advanced security solutions for modern digital threats',
    icon: Shield,
    color: 'from-red-500 to-pink-600',
    services: [
      {
        name: 'Zero Trust Network Access Platform',
        description: 'Modern security architecture without traditional VPN limitations',
        pricing: [
          {
            name: 'Starter',
            price: '$2,000',
            period: '/month',
            description: 'For small organizations',
            features: [
              'Up to 100 users',
              'Basic authentication',
              'Standard security policies',
              'Email support',
              'Basic reporting'
            ],
            cta: 'Start Free Trial',
            href: '/contact'
          },
          {
            name: 'Professional',
            price: '$5,000',
            period: '/month',
            description: 'For growing organizations',
            features: [
              'Up to 500 users',
              'Advanced authentication',
              'Custom security policies',
              'Priority support',
              'Advanced analytics',
              'API access'
            ],
            popular: true,
            cta: 'Start Free Trial',
            href: '/contact'
          },
          {
            name: 'Enterprise',
            price: '$8,000',
            period: '/month',
            description: 'For large enterprises',
            features: [
              'Unlimited users',
              'Custom authentication',
              'Advanced threat detection',
              'Dedicated support team',
              'Custom integrations',
              'On-premise options'
            ],
            cta: 'Contact Sales',
            href: '/contact'
          }
        ],
        marketComparison: 'Market average: $5,000 - $15,000/month. Our pricing is 20-35% below market rates.',
        roi: 'Expected ROI: 150-300% through security improvements',
        implementationTime: 'Implementation: 3-4 weeks',
        technologies: ['OAuth 2.0', 'SAML', 'JWT', 'Zero Trust Architecture', 'Identity Providers'],
        useCases: ['Remote workforces', 'Healthcare organizations', 'Financial institutions', 'Government agencies', 'Educational institutions'],
        benefits: ['Eliminate VPN vulnerabilities', 'Improve security posture', 'Simplify access management', 'Compliance with regulations']
      }
    ]
  },
  {
    id: 'emerging-tech',
    name: 'Emerging Technology Solutions',
    description: 'Cutting-edge technologies for future-ready businesses',
    icon: Rocket,
    color: 'from-green-500 to-emerald-600',
    services: [
      {
        name: 'Digital Twin Platform',
        description: 'Advanced digital twin technology for asset optimization and simulation',
        pricing: [
          {
            name: 'Basic',
            price: '$5,000',
            period: '/month',
            description: 'For small-scale implementations',
            features: [
              'Basic 3D modeling',
              'Standard data integration',
              'Basic analytics',
              'Email support',
              'Standard templates'
            ],
            cta: 'Start Free Trial',
            href: '/contact'
          },
          {
            name: 'Professional',
            price: '$15,000',
            period: '/month',
            description: 'For medium-scale deployments',
            features: [
              'Advanced 3D modeling',
              'Real-time data integration',
              'Advanced analytics',
              'Priority support',
              'Custom development',
              'API access'
            ],
            popular: true,
            cta: 'Start Free Trial',
            href: '/contact'
          },
          {
            name: 'Enterprise',
            price: '$25,000',
            period: '/month',
            description: 'For large-scale enterprise deployments',
            features: [
              'Custom 3D modeling',
              'Advanced data integration',
              'Custom analytics',
              'Dedicated support team',
              'White-label options',
              'On-premise deployment'
            ],
            cta: 'Contact Sales',
            href: '/contact'
          }
        ],
        marketComparison: 'Market average: $15,000 - $50,000/month. Our pricing is 30-45% below market rates.',
        roi: 'Expected ROI: 200-400% through operational improvements',
        implementationTime: 'Implementation: 6-12 weeks',
        technologies: ['IoT', '3D Modeling', 'Real-time Analytics', 'Machine Learning', 'Cloud Computing'],
        useCases: ['Manufacturing companies', 'Energy utilities', 'Healthcare facilities', 'Smart buildings', 'Transportation systems'],
        benefits: ['Reduce maintenance costs by 40%', 'Improve operational efficiency', 'Predict equipment failures', 'Optimize asset performance']
      }
    ]
  }
];

export default function ComprehensivePricingGuide2028() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = selectedCategory === 'all' 
    ? serviceCategories 
    : serviceCategories.filter(cat => cat.id === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Comprehensive Pricing Guide 2028
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transparent pricing for our cutting-edge AI, quantum computing, and technology services. 
              Get enterprise-grade solutions at competitive rates with guaranteed ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call: +1 302 464 0950
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search services and pricing..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div className="lg:w-80">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all" className="bg-slate-800 text-white">All Categories</option>
                  {serviceCategories.map((category) => (
                    <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services and Pricing */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-20"
          >
            {filteredCategories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                {/* Category Header */}
                <div className="text-center mb-16">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${category.color} rounded-2xl mb-6`}>
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.name}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Services in Category */}
                <div className="space-y-16">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                      {/* Service Header */}
                      <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                          {service.name}
                        </h3>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                          {service.description}
                        </p>
                      </div>

                      {/* Pricing Tiers */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {service.pricing.map((tier, tierIndex) => (
                          <div
                            key={tierIndex}
                            className={`relative bg-white/5 backdrop-blur-md rounded-xl p-6 border transition-all duration-300 hover:transform hover:scale-105 ${
                              tier.popular 
                                ? 'border-blue-500/50 bg-blue-500/10' 
                                : 'border-white/20 hover:border-blue-500/30'
                            }`}
                          >
                            {/* Popular Badge */}
                            {tier.popular && (
                              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                <span className="px-4 py-1 bg-blue-500 text-white text-sm font-semibold rounded-full">
                                  Most Popular
                                </span>
                              </div>
                            )}

                            {/* Tier Header */}
                            <div className="text-center mb-6">
                              <h4 className="text-xl font-bold text-white mb-2">{tier.name}</h4>
                              <div className="mb-2">
                                <span className="text-3xl font-bold text-blue-400">{tier.price}</span>
                                <span className="text-gray-400">{tier.period}</span>
                              </div>
                              <p className="text-sm text-gray-300">{tier.description}</p>
                            </div>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                              {tier.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center text-gray-300">
                                  <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                                  <span className="text-sm">{feature}</span>
                                </li>
                              ))}
                            </ul>

                            {/* CTA Button */}
                            <Link
                              to={tier.href}
                              className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                                tier.popular
                                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                                  : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
                              }`}
                            >
                              {tier.cta}
                            </Link>
                          </div>
                        ))}
                      </div>

                      {/* Service Details */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Market Comparison</h4>
                            <p className="text-gray-300 text-sm">{service.marketComparison}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Expected ROI</h4>
                            <p className="text-gray-300 text-sm">{service.roi}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Implementation Time</h4>
                            <p className="text-gray-300 text-sm">{service.implementationTime}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {service.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-white/10 text-blue-300 text-sm rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Use Cases</h4>
                            <ul className="space-y-2">
                              {service.useCases.map((useCase, useCaseIndex) => (
                                <li key={useCaseIndex} className="flex items-center text-gray-300 text-sm">
                                  <Target className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                                  {useCase}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-3">Key Benefits</h4>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-center text-gray-300 text-sm">
                                  <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our team of experts can create a tailored solution that fits your specific needs and budget.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <a
                  href="tel:+13024640950"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-gray-300 text-sm text-center">
                  364 E Main St STE 1008<br />
                  Middletown DE 19709
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Visit Our Website
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
