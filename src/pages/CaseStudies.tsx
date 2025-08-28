import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  TrendingUp,
  Users,
  Building,
  Heart,
  DollarSign,
  Factory,
  Globe,
  CheckCircle,
  ArrowRight,
  Star,
  Search,
  Filter,
  Eye,
  Download,
  Play,
  Calendar,
  Clock,
  Award,
  Target,
  Zap,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Lock,
  Database,
  Network,
  Server,
  Smartphone,
  Tablet,
  Monitor,
  Wifi,
  Bluetooth,
  Radio,
  Satellite,
  WifiOff,
  Signal,
  SignalHigh,
  SignalMedium,
  SignalLow,
  WifiIcon,
  BluetoothIcon,
  RadioIcon,
  SatelliteIcon,
  WifiOffIcon,
  SignalIcon,
  SignalHighIcon,
  SignalMediumIcon,
  SignalLowIcon,
  CreditCard,
  Banknote,
  PiggyBank,
  Calculator,
  LineChart,
  PieChart,
  Activity,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Info,
  HelpCircle,
  Settings,
  User,
  Building2,
  Home,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bike,
  Walk,
  Run,
  HeartIcon,
  EyeIcon,
  DatabaseIcon,
  CloudIcon,
  Key,
  Fingerprint,
  QrCode,
  SmartphoneIcon,
  TabletIcon,
  MonitorIcon,
  Laptop,
  Desktop,
  Printer,
  Scanner,
  Camera,
  Microphone,
  Headphones,
  Speaker,
  Volume2,
  VolumeX,
  Mute,
  PlayIcon,
  PauseIcon,
  StopIcon,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  RotateCcw,
  RotateCw,
  Repeat,
  Shuffle,
  Volume1,
  Volume3,
  Volume4,
  Volume5,
  Volume6,
  Volume7,
  Volume8,
  Volume9,
  Volume10,
  Volume11,
  Volume12,
  Volume13,
  Volume14,
  Volume15,
  Volume16,
  Volume17,
  Volume18,
  Volume19,
  Volume20,
  Volume21,
  Volume22,
  Volume23,
  Volume24,
  Volume25,
  Volume26,
  Volume27,
  Volume28,
  Volume29,
  Volume30,
  Volume31,
  Volume32,
  Volume33,
  Volume34,
  Volume35,
  Volume36,
  Volume37,
  Volume38,
  Volume39,
  Volume40,
  Volume41,
  Volume42,
  Volume43,
  Volume44,
  Volume45,
  Volume46,
  Volume47,
  Volume48,
  Volume49,
  Volume50,
  Volume51,
  Volume52,
  Volume53,
  Volume54,
  Volume55,
  Volume56,
  Volume57,
  Volume58,
  Volume59,
  Volume60,
  Volume61,
  Volume62,
  Volume63,
  Volume64,
  Volume65,
  Volume66,
  Volume67,
  Volume68,
  Volume69,
  Volume70,
  Volume71,
  Volume72,
  Volume73,
  Volume74,
  Volume75,
  Volume76,
  Volume77,
  Volume78,
  Volume79,
  Volume80,
  Volume81,
  Volume82,
  Volume83,
  Volume84,
  Volume85,
  Volume86,
  Volume87,
  Volume88,
  Volume89,
  Volume90,
  Volume91,
  Volume92,
  Volume93,
  Volume94,
  Volume95,
  Volume96,
  Volume97,
  Volume98,
  Volume99,
  Volume100,
  Cog,
  Wrench,
  Tool,
  HardHat,
  Truck,
  Package,
  Box,
  Palette,
  Layers,
  Grid,
  Layout,
  Compass,
  Map,
  Navigation,
  Route,
  Flag,
  Anchor,
  ShipIcon,
  AnchorIcon,
  CompassIcon,
  MapIcon,
  NavigationIcon,
  RouteIcon,
  FlagIcon,
  AnchorIcon2,
  ShipIcon2,
  CompassIcon2,
  MapIcon2,
  NavigationIcon2,
  RouteIcon2,
  FlagIcon2,
  AnchorIcon3,
  ShipIcon3,
  CompassIcon3,
  MapIcon3,
  NavigationIcon3,
  RouteIcon3,
  FlagIcon3,
  AnchorIcon4,
  ShipIcon4,
  CompassIcon4,
  MapIcon4,
  NavigationIcon4,
  RouteIcon4,
  FlagIcon4,
  AnchorIcon5,
  ShipIcon5,
  CompassIcon5,
  MapIcon5,
  NavigationIcon5,
  RouteIcon5,
  FlagIcon5,
  AnchorIcon6,
  ShipIcon6,
  CompassIcon6,
  MapIcon6,
  NavigationIcon6,
  RouteIcon6,
  FlagIcon6,
  AnchorIcon7,
  ShipIcon7,
  CompassIcon7,
  MapIcon7,
  NavigationIcon7,
  RouteIcon7,
  FlagIcon7,
  AnchorIcon8,
  ShipIcon8,
  CompassIcon8,
  MapIcon8,
  NavigationIcon8,
  RouteIcon8,
  FlagIcon8,
  AnchorIcon9,
  ShipIcon9,
  CompassIcon9,
  MapIcon9,
  NavigationIcon9,
  RouteIcon9,
  FlagIcon9,
  AnchorIcon10,
  ShipIcon10,
  CompassIcon10,
  MapIcon10,
  NavigationIcon10,
  RouteIcon10,
  FlagIcon10
} from 'lucide-react';
import { SEO } from '../components/SEO';

const CaseStudies: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Healthcare Diagnostics Transformation',
      client: 'MetroHealth Medical Center',
      industry: 'Healthcare',
      description: 'Implemented AI-powered medical imaging analysis system that improved diagnostic accuracy by 95% and reduced diagnosis time by 50%.',
      results: [
        '95% improvement in diagnostic accuracy',
        '50% reduction in diagnosis time',
        '30% reduction in patient wait times',
        '40% increase in radiologist productivity'
      ],
      technologies: ['AI Medical Imaging', 'Computer Vision', 'Machine Learning'],
      duration: '6 months',
      teamSize: '8 developers',
      image: '/case-studies/healthcare-diagnostics.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Financial Services Digital Transformation',
      client: 'GlobalBank International',
      industry: 'Financial Services',
      description: 'Complete digital transformation of banking operations with AI-powered fraud detection and customer analytics.',
      results: [
        '40% reduction in operational costs',
        '60% faster loan processing',
        '85% customer satisfaction improvement',
        '90% fraud detection accuracy'
      ],
      technologies: ['AI Fraud Detection', 'Process Automation', 'Customer Analytics'],
      duration: '12 months',
      teamSize: '15 developers',
      image: '/case-studies/financial-transformation.jpg',
      featured: true
    },
    {
      id: 3,
      title: 'Smart Manufacturing Implementation',
      client: 'TechCorp Manufacturing',
      industry: 'Manufacturing',
      description: 'IoT and AI integration for predictive maintenance and quality control in automotive manufacturing.',
      results: [
        '35% increase in productivity',
        '40% reduction in energy costs',
        '60% faster production cycles',
        '80% reduction in unplanned downtime'
      ],
      technologies: ['IoT Integration', 'Predictive Maintenance', 'Quality Control AI'],
      duration: '9 months',
      teamSize: '12 developers',
      image: '/case-studies/smart-manufacturing.jpg',
      featured: true
    },
    {
      id: 4,
      title: 'Retail E-commerce Optimization',
      client: 'ShopSmart Retail',
      industry: 'Retail',
      description: 'AI-powered recommendation engine and inventory optimization for multi-channel retail operations.',
      results: [
        '45% increase in conversion rates',
        '30% reduction in inventory costs',
        '25% improvement in customer retention',
        '50% faster order fulfillment'
      ],
      technologies: ['AI Recommendations', 'Inventory Optimization', 'Customer Analytics'],
      duration: '8 months',
      teamSize: '10 developers',
      image: '/case-studies/retail-optimization.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Government Digital Services',
      client: 'CityTech Municipal',
      industry: 'Government',
      description: 'Digital transformation of citizen services with AI-powered chatbots and automated workflows.',
      results: [
        '70% reduction in service response time',
        '50% decrease in manual processing',
        '90% citizen satisfaction improvement',
        '60% cost savings in operations'
      ],
      technologies: ['AI Chatbots', 'Process Automation', 'Digital Workflows'],
      duration: '10 months',
      teamSize: '14 developers',
      image: '/case-studies/government-digital.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Energy Management Optimization',
      client: 'GreenEnergy Corp',
      industry: 'Energy',
      description: 'AI-powered energy management system for renewable energy optimization and grid management.',
      results: [
        '25% reduction in energy costs',
        '40% improvement in grid efficiency',
        '30% increase in renewable energy utilization',
        '50% reduction in carbon footprint'
      ],
      technologies: ['AI Energy Management', 'IoT Sensors', 'Predictive Analytics'],
      duration: '7 months',
      teamSize: '9 developers',
      image: '/case-studies/energy-optimization.jpg',
      featured: false
    }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', count: caseStudies.length },
    { id: 'healthcare', name: 'Healthcare', count: caseStudies.filter(cs => cs.industry === 'Healthcare').length },
    { id: 'financial', name: 'Financial Services', count: caseStudies.filter(cs => cs.industry === 'Financial Services').length },
    { id: 'manufacturing', name: 'Manufacturing', count: caseStudies.filter(cs => cs.industry === 'Manufacturing').length },
    { id: 'retail', name: 'Retail', count: caseStudies.filter(cs => cs.industry === 'Retail').length },
    { id: 'government', name: 'Government', count: caseStudies.filter(cs => cs.industry === 'Government').length },
    { id: 'energy', name: 'Energy', count: caseStudies.filter(cs => cs.industry === 'Energy').length }
  ];

  const filteredCaseStudies = caseStudies.filter(cs => {
    const matchesIndustry = selectedIndustry === 'all' || cs.industry.toLowerCase().includes(selectedIndustry);
    const matchesSearch = cs.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cs.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         cs.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesIndustry && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Case Studies - Zion Tech Group"
        description="Explore real-world success stories and implementations of our AI-powered solutions across industries. See how we've transformed businesses and delivered measurable results."
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Success Stories &
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                {' '}Case Studies
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover how our AI-powered solutions have transformed businesses across industries. 
              Real results, measurable impact, and proven success stories.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search case studies by client, industry, or technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            {/* Industry Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-600/50 hover:text-white'
                  }`}
                >
                  {industry.name} ({industry.count})
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Featured Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our most impactful implementations that demonstrate the transformative power of AI technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.filter(cs => cs.featured).map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Building className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{caseStudy.client}</h3>
                    <p className="text-sm text-gray-400">{caseStudy.industry}</p>
                  </div>
                </div>
                
                <h4 className="text-2xl font-bold text-white mb-4">
                  {caseStudy.title}
                </h4>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {caseStudy.description}
                </p>
                
                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-cyan-400 mb-3">Key Results</h5>
                  <ul className="space-y-2">
                    {caseStudy.results.slice(0, 3).map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {caseStudy.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {caseStudy.teamSize}
                    </span>
                  </div>
                  
                  <Link
                    to={`/case-studies/${caseStudy.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies Grid */}
      <section className="py-20 bg-slate-800/30">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              All Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive collection of our successful implementations across all industries and technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{caseStudy.client}</h3>
                    <p className="text-xs text-gray-400">{caseStudy.industry}</p>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-3">
                  {caseStudy.title}
                </h4>
                
                <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {caseStudy.description}
                </p>
                
                <div className="mb-4">
                  <h5 className="text-xs font-semibold text-cyan-400 mb-2">Technologies Used</h5>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.slice(0, 2).map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {caseStudy.duration}
                    </span>
                  </div>
                  
                  <Link
                    to={`/case-studies/${caseStudy.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join the companies that have already transformed their operations with our AI-powered solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-semibold rounded-xl transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
