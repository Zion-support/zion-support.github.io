'use client';
import React from 'react';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight,;
  Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock,;
  TrendingUp, Star, Settings, Calendar, CheckSquare, FileText,;
  Mail, Phone, DollarSign, Clock, Award, CheckCircle,;
  Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart,;
  CreditCard, Building, Factory, Car, Plane, Ship, Train,;
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench,;
  Hammer, Paintbrush, Scissors, BookOpen, Calculator,;
  Compass, PieChart, TrendingDown, Activity, Zap as Lightning,;
  Target as Crosshair, Shield as Security, Users as People,;
  Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow,;
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location,;
  Eye, Search, MessageSquare, PieChart as Chart,;
  Download, Upload, RefreshCw, Play, Pause, Stop,;
  Volume2, VolumeX, Mic, MicOff, Headphones,;
  Wifi, WifiOff, Battery, BatteryCharging,;
  Sun, Moon, Sunrise, Sunset, CloudRain,;
  Snowflake, Wind, Thermometer, Droplets,;
  Lightbulb, LightbulbOff, Power, PowerOff,;
  Wrench as Tool, Hammer as HammerIcon,;
  Paintbrush as Brush, Scissors as ScissorIcon,;
  BookOpen as Book, Calculator as Calc,;
  Compass as CompassIcon, PieChart as PieChartIcon,;
  TrendingDown as TrendingDownIcon, Activity as ActivityIcon,;
  Grid3X3, Package, Utensils, Microscope,;
  Atom, Cpu as CpuIcon, Database as DatabaseIcon,;
  Network, Layers, Workflow, GitBranch,;
  Zap as ZapIcon, Brain as BrainIcon, Eye as EyeIcon,;
  Search as SearchIcon, MessageSquare as MessageSquareIcon,;
  PieChart as PieChartIcon2, BarChart as BarChartIcon,;
  TrendingUp as TrendingUpIcon, Activity as ActivityIcon2,;
  Target as TargetIcon, Globe as GlobeIcon,;
  Shield as ShieldIcon, Lock as LockIcon,;
  Users as UsersIcon, Settings as SettingsIcon,;
  Calendar as CalendarIcon, CheckSquare as CheckSquareIcon,;
  FileText as FileTextIcon, Mail as MailIcon2,;
  Phone as PhoneIcon2, DollarSign as DollarSignIcon,;
  Clock as ClockIcon, Award as AwardIcon,;
  CheckCircle as CheckCircleIcon, ArrowRight as ArrowRightIcon,;
  Bot as BotIcon, Palette as PaletteIcon,;
  Camera as CameraIcon, Music as MusicIcon,;
  Video as VideoIcon, Gamepad2 as Gamepad2Icon,;
  ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon,;
  Building as BuildingIcon, Factory as FactoryIcon,;
  Car as CarIcon, Plane as PlaneIcon,;
  Ship as ShipIcon, Train as TrainIcon,;
  Home as HomeIcon, Heart as HeartIcon,;
  Stethoscope as StethoscopeIcon, GraduationCap as GraduationCapIcon,;
  Briefcase as BriefcaseIcon, Wrench as WrenchIcon,;
  Hammer as HammerIcon2, Paintbrush as PaintbrushIcon,;
  Scissors as ScissorsIcon, BookOpen as BookOpenIcon,;
  Calculator as CalculatorIcon, Compass as CompassIcon2,;
  PieChart as PieChartIcon3, TrendingDown as TrendingDownIcon2,;
  Activity as ActivityIcon3, Zap as ZapIcon2,;
  Target as TargetIcon2, Shield as ShieldIcon2,;
  Users as UsersIcon2, Star as StarIcon2,;
  CheckCircle as CheckCircleIcon2, ArrowRight as ArrowRightIcon2,;
  Phone as PhoneIcon3, Mail as MailIcon3,;
  MapPin as LocationIcon, Server, HardDrive,;
  Monitor, Printer, Router, Wifi as WifiIcon,;
  Smartphone as SmartphoneIcon, Laptop,;
  Tablet, Headphones as HeadphonesIcon,;
  Keyboard, Mouse, Webcam, Speaker,;
  HardDrive as HardDriveIcon, Server as ServerIcon,;
  Monitor as MonitorIcon, Printer as PrinterIcon,;
  Router as RouterIcon, Wifi as WifiIcon2,;
  Smartphone as SmartphoneIcon2, Laptop as LaptopIcon,;
  Tablet as TabletIcon, Headphones as HeadphonesIcon2,;
  Keyboard as KeyboardIcon, Mouse as MouseIcon,;
  Webcam as WebcamIcon, Speaker as SpeakerIcon}
} from 'lucide-react';
const ITConsultingPage: React.FC = () => {
  const Service Feature = useState('all');
  const Service Feature = useState('');
  const itServices = [;
    // IT Infrastructure Services;
    {
      id: '[^']*',
      name: '[^']*',
      description: '[^']*',
      category: '[^']*',
      icon: Server,
      price: '[^']*',
      features: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Ongoing support and maintenance';
      ],;
      benefits: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Future-proof technology stack';
      ],;
      targetAudience: '[^']*',
      setupTime: '[^']*',
      freeConsultation: '[^']*',
      support: '[^']*',
      certifications: ['Cisco', 'Microsoft', 'VMware', 'AWS', 'Azure'],;
      link: '[^']*',
      caseStudy: 'Manufacturing company reduced IT downtime by 95% with our infrastructure design'}
    },;
    {
      id: '[^']*',
      name: '[^']*',
      description: '[^']*',
      category: '[^']*',
      icon: Cloud,
      price: '[^']*',
      features: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Training and documentation';
      ],;
      benefits: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Access to latest technologies';
      ],;
      targetAudience: '[^']*',
      setupTime: '[^']*',
      freeConsultation: '[^']*',
      support: '[^']*',
      certifications: ['AWS', 'Azure', 'Google Cloud', 'VMware'],;
      link: '[^']*',
      caseStudy: 'Retail chain saved $2M annually by migrating to cloud infrastructure'}
    },;
    {
      id: '[^']*',
      name: '[^']*',
      description: '[^']*',
      category: '[^']*',
      icon: Shield,
      price: '[^']*',
      features: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Incident response planning';
      ],;
      benefits: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Maintain customer trust';
      ],;
      targetAudience: '[^']*',
      setupTime: '[^']*',
      freeConsultation: '[^']*',
      support: '[^']*',
      certifications: ['CISSP', 'CISM', 'CEH', 'CompTIA Security+'],;
      link: '[^']*',
      caseStudy: 'Healthcare provider achieved 100% compliance with HIPAA regulations'}
    },;
    {
      id: '[^']*',
      name: '[^']*',
      description: '[^']*',
      category: '[^']*',
      icon: Network,
      price: '[^']*',
      features: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Performance tuning';
      ],;
      benefits: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Future-proof network design';
      ],;
      targetAudience: '[^']*',
      setupTime: '[^']*',
      freeConsultation: '[^']*',
      support: '[^']*',
      certifications: ['CCNA', 'CCNP', 'JNCIA', 'CompTIA Network+'],;
      link: '[^']*',
      caseStudy: 'Law firm improved network speed by 300% and eliminated connectivity issues'}
    },;
    {
      id: '[^']*',
      name: '[^']*',
      description: '[^']*',
      category: '[^']*',
      icon: Database,
      price: '[^']*',
      features: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Maintenance and updates';
      ],;
      benefits: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Minimize downtime';
      ],;
      targetAudience: '[^']*',
      setupTime: '[^']*',
      freeConsultation: '[^']*',
      support: '[^']*',
      certifications: ['Oracle', 'Microsoft SQL Server', 'MySQL', 'PostgreSQL'],;
      link: '[^']*',
      caseStudy: 'E-commerce platform improved query performance by 400% and reduced costs by 60%'}
    },;
    {
      id: '[^']*',
      name: '[^']*',
      description: '[^']*',
      category: '[^']*',
      icon: Headphones,
      price: '[^']*',
      features: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Help desk services';
      ],;
      benefits: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Focus on core business activities';
      ],;
      targetAudience: '[^']*',
      setupTime: '[^']*',
      freeConsultation: '[^']*',
      support: '[^']*',
      certifications: ['Microsoft', 'CompTIA', 'Cisco', 'VMware'],;
      link: '[^']*',
      caseStudy: 'Marketing agency reduced IT issues by 90% and improved employee productivity'}
    },;
    {
      id: '[^']*',
      name: '[^']*',
      description: '[^']*',
      category: '[^']*',
      icon: Code,
      price: '[^']*',
      features: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'User training and documentation';
      ],;
      benefits: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Scale with business growth';
      ],;
      targetAudience: '[^']*',
      setupTime: '[^']*',
      freeConsultation: '[^']*',
      support: '[^']*',
      technologies: ['React', 'Node.js', 'Python', 'Java', 'C#', 'PHP', 'Mobile'],;
      link: '[^']*',
      caseStudy: 'Logistics company automated 80% of manual processes with custom software'}
    },;
    {
      id: '[^']*',
      name: '[^']*',
      description: '[^']*',
      category: '[^']*',
      icon: Briefcase,
      price: '[^']*',
      features: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Implementation guidance';
      ],;
      benefits: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Improve ROI on technology';
      ],;
      targetAudience: '[^']*',
      setupTime: '[^']*',
      freeConsultation: '[^']*',
      support: '[^']*',
      certifications: ['PMP', 'ITIL', 'COBIT', 'TOGAF'],;
      link: '[^']*',
      caseStudy: 'Manufacturing company achieved 40% cost reduction through strategic IT planning'}
    },;
    {
      id: '[^']*',
      name: '[^']*',
      description: '[^']*',
      category: '[^']*',
      icon: RefreshCw,
      price: '[^']*',
      features: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Regular testing and updates';
      ],;
      benefits: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Comply with regulations';
      ],;
      targetAudience: '[^']*',
      setupTime: '[^']*',
      freeConsultation: '[^']*',
      support: '[^']*',
      certifications: ['CBCP', 'DRII', 'ITIL', 'ISO 22301'],;
      link: '[^']*',
      caseStudy: 'Financial services firm achieved 99.9% uptime with our disaster recovery solution'}
    },;
    {
      id: '[^']*',
      name: '[^']*',
      description: '[^']*',
      category: '[^']*',
      icon: CheckSquare,
      price: '[^']*',
      features: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Remediation planning';
      ],;
      benefits: [;
        '[^']*',
        '[^']*',
        '[^']*',
        '[^']*',
        'Build customer trust';
      ],;
      targetAudience: '[^']*',
      setupTime: '[^']*',
      freeConsultation: '[^']*',
      support: '[^']*',
      standards: ['HIPAA', 'SOX', 'PCI-DSS', 'GDPR', 'ISO 27001', 'NIST'],;
      link: '[^']*',
      caseStudy: 'Healthcare provider achieved 100% HIPAA compliance and passed all audits'}
    }
  ];
  const categories = [;
    { id: 'all', name: 'All IT Services', icon: Grid3X3 },;
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },;
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },;
    { id: 'security', name: 'Cybersecurity', icon: Shield },;
    { id: 'networking', name: 'Networking', icon: Network },;
    { id: 'database', name: 'Database', icon: Database },;
    { id: 'support', name: 'IT Support', icon: Headphones },;
    { id: 'development', name: 'Development', icon: Code },;
    { id: 'consulting', name: 'Consulting', icon: Briefcase },;
    { id: 'recovery', name: 'Disaster Recovery', icon: RefreshCw },;
    { id: 'compliance', name: 'Compliance', icon: CheckSquare }
  ];
  const filteredServices = itServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||;
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch}
  });
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}</div>;
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 cyber-grid"></section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20" aria-hidden="true"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight cyber-text neon-pulse"></h1>;
            Professional <span className="holographic-text">IT Services</span>;
          </h1>;
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-4xl mx-auto neon-glow">;
            Comprehensive IT solutions designed to optimize your technology infrastructure,;
            enhance security, and drive business growth. Expert consulting and implementation.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12"></div>
            <a;
              href="tel:+13024640950";
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400/50";
            >;
              <Phone className="w-5 h-5 inline mr-2" />;
              Call (302) 464-0950;
            </a>;
            <a;
              href="mailto:kleber@ziontechgroup.com";
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50";
            >;
              <Mail className="w-5 h-5 inline mr-2" />;
              Get IT Consultation;
            </a>;
          </div>;
        </div>;
      </section>;
      {/* Search and Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="flex flex-col lg:flex-row gap-6 mb-8"></div>
            {/* Search */}</div>;
            <div className="flex-1"></div>
              <div className="relative"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />;
                <input;
                  type="text";
                  placeholder="Search IT services...";
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20";
                />;
              </div>;
            </div>;
            {/* Category Filter */}
            <div className="lg:w-64"></div>
              <select;
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20";
              >;
                {categories.map((category) => (}
                  <option key={category.id} value={category.id}>;
                    {category.name}
                  </option>;
                ))}
              </select>;
            </div>;
          </div>;
          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-8"></div>
            {categories.map((category) => (</div>;
              <button}
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id;
                    ? 'bg-cyan-500 text-white';
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-cyan-400'}
                }`}
              >;
                {category.name}
              </button>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {filteredServices.map((service) => (</div>}
              <div key={service.id} className="quantum-card p-6 group hover:scale-105 transition-all duration-300 energy-pulse"></div>
                <div className="flex items-start justify-between mb-4"></div>
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors"></div>
                    <service.icon className="w-12 h-12" />;
                  </div>;
                  <div className="text-right"></div>
                    <div className="text-2xl font-bold text-white">{service.price}</div>;
                    <div className="text-sm text-gray-400">starting price</div>;
                  </div>;
                </div>;
                <h3 className="text-xl font-bold text-white mb-3 neon-glow">{service.name}</h3>;
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>;
                <div className="space-y-3 mb-6"></div>
                  <div></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>;
                    <ul className="space-y-1">;
                      {service.features.slice(0, 4).map((feature, idx) => (}
                        <li key={idx} className="flex items-center text-sm text-gray-300">;
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />;
                          <span>{feature}</span>;
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                  <div></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>;
                    <ul className="space-y-1">;
                      {service.benefits.slice(0, 2).map((benefit, idx) => (}
                        <li key={idx} className="flex items-center text-sm text-gray-300">;
                          <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />;
                          <span>{benefit}</span>;
                        </li>;
                      ))}
                    </ul>;
                  </div>;
                </div>;
                <div className="space-y-2 mb-6 text-sm"></div>
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Setup Time:</span>;
                    <span className="text-white">{service.setupTime}</span>;
                  </div>;
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Free Consultation:</span>;
                    <span className="text-green-400">{service.freeConsultation}</span>;
                  </div>;
                  <div className="flex justify-between"></div>
                    <span className="text-gray-400">Target:</span>;
                    <span className="text-white">{service.targetAudience}</span>;
                  </div>;
                </div>;
                {service.caseStudy && (;
                  <div className="mb-4 p-3 bg-green-900/20 border border-green-400/20 rounded-lg"></div>}
                    <p className="text-sm text-green-300 italic">"{service.caseStudy}"</p>;
                  </div>;
                )}
                <div className="space-y-3"></div>
                  <a;
                    href={service.link}
                    target="_blank";
                    rel="noopener noreferrer";
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105";
                  >;
                    Get Free Consultation;
                  </a>;
                  <a;
                    href="tel:+13024640950";
                    className="block w-full border border-cyan-400 text-cyan-400 py-3 px-4 rounded-lg font-semibold text-center hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300";
                  >;
                    <Phone className="w-4 h-4 inline mr-2" />;
                    Call for Quote;
                  </a>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 cyber-scan-effect"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 cyber-text neon-pulse">;
            Ready to Optimize Your IT Infrastructure?;
          </h2>;
          <p className="text-xl text-cyan-400 mb-8 neon-glow">;
            Our certified IT professionals deliver reliable, secure, and scalable solutions.;
            All services include free consultations and ongoing support.;
          </p>;
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a;
              href="tel:+13024640950";
              className="cyber-button px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-cyan-400/50";
            >;
              <Phone className="w-5 h-5" />;
              Call (302) 464-0950;
            </a>;
            <a;
              href="mailto:kleber@ziontechgroup.com";
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center gap-2 neon-glow focus:outline-none focus:ring-4 focus:ring-cyan-400/50";
            >;
              <Mail className="w-5 h-5" />;
              Get Custom IT Strategy;
            </a>;
          </div>;
        </div>;
      </section>;
    </div>;
  )}
export default ITConsultingPage;
