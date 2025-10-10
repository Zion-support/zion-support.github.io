'use client';
import React, { useState, useEffect } from 'react';
import { 
  BarChart, Calendar, Users, Target, CheckCircle, Clock, DollarSign, 
  TrendingUp, AlertCircle, Star, Zap, Shield, Brain, Settings, 
  ArrowRight, Phone, Mail, MapPin, Play, Pause, RotateCcw, 
  Download, Upload, Share, Eye, Edit, Trash2, Plus, Minus,
  Filter, Search, SortAsc, SortDesc, Grid, List, Maximize,
  Minimize, RefreshCw, Save, FileText, Image, Video, Music,
  Headphones, Monitor, Laptop, Tablet, Watch, Wifi, Bluetooth,
  Battery, Wrench, Layers, Grid as GridIcon, Maximize as MaximizeIcon,
  Minimize as MinimizeIcon, RotateCcw as RotateIcon, Play as PlayIcon,
  Pause as PauseIcon, Stop, SkipForward, SkipBack, Volume2, VolumeX,
  Settings2, Menu, X, ChevronDown, ChevronUp, ChevronLeft, ChevronRight,
  Plus as PlusIcon, Minus as MinusIcon, Edit as EditIcon, Trash2 as TrashIcon,
  Save as SaveIcon, Download as DownloadIcon, Upload as UploadIcon,
  Share as ShareIcon, Copy, ExternalLink, Info, AlertCircle as AlertIcon,
  CheckCircle2, XCircle, HelpCircle, Lightbulb, Rocket, Flame, Snowflake,
  Sun, Moon, Sunrise, Sunset, CloudRain, CloudSnow, CloudLightning, Wind,
  Droplets, Thermometer, Gauge, Activity, Zap as Lightning, Shield as Security,
  Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow,
  Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Cube, Mic,
  DollarSign as Dollar, Truck, Link, HardDrive, FileCheck, FileText as File,
  Search as MagnifyingGlass, Bot, Palette, Camera, Music as Audio, Video as Movie,
  Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train,
  Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench as Tool, Hammer,
  Paintbrush, Scissors, BookOpen, Calculator, Calendar as Schedule, Clock3 as Time,
  Compass, Navigation, PieChart, TrendingDown, Activity as Stats, Zap as Power,
  Shield as Protect, Globe, Brain as AI, Cpu, Target as Goal, Users as Team,
  Award, Lock, Smartphone, FileText as Text, Search as Find, Bot as Assistant,
  Palette as Color, Camera as Image, Music as Sound, Video as Clip, Gamepad2 as Gaming,
  ShoppingCart as Purchase, CreditCard as Payment, Building as Corporate, Factory as Manufacturing,
  Car as Auto, Plane as Aircraft, Ship as Vessel, Train as Locomotive, Home as Residence,
  Heart as Love, Stethoscope as Doctor, GraduationCap as School, Briefcase as Business,
  Wrench as Fix, Hammer as Construct, Paintbrush as Art, Scissors as Trim,
  BookOpen as Read, Calculator as Compute, Calendar as Date, Clock3 as Hour,
  Compass as North, Navigation as Route, PieChart as Graph, TrendingDown as Decline,
  Activity as Monitor, Zap as Energy, Shield as Guard, Globe as Earth, Brain as Mind,
  Cpu as Chip, Target as Aim, Users as Group, Award as Trophy, Lock as Key,
  Smartphone as Phone, FileText as Doc, Search as Look, Bot as AI, Palette as Brush,
  Camera as Lens, Music as Melody, Video as Film, Gamepad2 as Controller, ShoppingCart as Buy,
  CreditCard as Money, Building as Tower, Factory as Plant, Car as Ride, Plane as Jet,
  Ship as Yacht, Train as Metro, Home as Place, Heart as Beat, Stethoscope as Care,
  GraduationCap as Learn, Briefcase as Job, Wrench as Service, Hammer as Create,
  Paintbrush as Style, Scissors as Snip, BookOpen as Study, Calculator as Count,
  Calendar as Plan, Clock3 as Moment, Compass as Guide, Navigation as Path,
  PieChart as Data, TrendingDown as Fall, Activity as Track, Zap as Flash,
  Shield as Defense, Globe as Planet, Brain as Intelligence, Cpu as Core,
  Target as Focus, Users as Community, Award as Recognition, Lock as Safety,
  Smartphone as Device, FileText as Content, Search as Discover, Bot as Machine,
  Palette as Creative, Camera as Capture, Music as Rhythm, Video as Media,
  Gamepad2 as Entertainment, ShoppingCart as Store, CreditCard as Finance,
  Building as Structure, Factory as Production, Car as Transport, Plane as Travel,
  Ship as Cargo, Train as Transit, Home as Living, Heart as Vital, Stethoscope as Treatment,
  GraduationCap as Knowledge, Briefcase as Career, Wrench as Maintenance, Hammer as Craft,
  Paintbrush as Expression, Scissors as Precision, BookOpen as Wisdom, Calculator as Logic,
  Calendar as Organization, Clock3 as Duration, Compass as Orientation, Navigation as Movement,
  PieChart as Analysis, TrendingDown as Reduction, Activity as Performance, Zap as Force,
  Shield as Security, Globe as Universe, Brain as Cognition, Cpu as Processing,
  Target as Objective, Users as Society, Award as Achievement, Lock as Protection,
  Smartphone as Technology, FileText as Information, Search as Investigation, Bot as Automation,
  Palette as Aesthetics, Camera as Documentation, Music as Harmony, Video as Storytelling,
  Gamepad2 as Interaction, ShoppingCart as Commerce, CreditCard as Economy,
  Building as Architecture, Factory as Innovation, Car as Mobility, Plane as Exploration,
  Ship as Adventure, Train as Connection, Home as Comfort, Heart as Passion, Stethoscope as Healing,
  GraduationCap as Growth, Briefcase as Success, Wrench as Improvement, Hammer as Development,
  Paintbrush as Imagination, Scissors as Refinement, BookOpen as Understanding, Calculator as Reasoning,
  Calendar as Coordination, Clock3 as Efficiency, Compass as Clarity, Navigation as Progress,
  PieChart as Insight, TrendingDown as Optimization, Activity as Excellence, Zap as Innovation
} from 'lucide-react';
import Navigation from '../../src/components/Navigation';
import Footer from '../../src/components/Footer';
import EnhancedSEO from '../../src/components/EnhancedSEO';

const AIProjectManagerPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isDemoMode, setIsDemoMode] = useState(false);
  const [projectData, setProjectData] = useState({
    totalProjects: 47,
    activeProjects: 23,
    completedProjects: 24,
    teamMembers: 156,
    avgCompletionTime: '12 days',
    budgetUtilization: 87,
    riskLevel: 'Low',
    productivity: '+40%'
  });

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Planning',
      description: 'Machine learning algorithms analyze your team\'s patterns to optimize project timelines and resource allocation.',
      benefits: ['85% planning accuracy', 'Predictive timeline estimation', 'Resource optimization', 'Risk assessment']
    },
    {
      icon: BarChart,
      title: 'Smart Analytics',
      description: 'Real-time insights and predictive analytics to help you make data-driven decisions.',
      benefits: ['Real-time dashboards', 'Predictive analytics', 'Performance metrics', 'Custom reports']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Seamless collaboration tools with AI-powered task assignment and progress tracking.',
      benefits: ['Smart task assignment', 'Progress tracking', 'Team communication', 'Workload balancing']
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'AI-powered risk detection and mitigation strategies to keep projects on track.',
      benefits: ['Early risk detection', 'Mitigation strategies', 'Impact analysis', 'Prevention alerts']
    },
    {
      icon: Target,
      title: 'Goal Tracking',
      description: 'Intelligent goal setting and tracking with automated milestone management.',
      benefits: ['Smart goal setting', 'Milestone tracking', 'Progress visualization', 'Achievement rewards']
    },
    {
      icon: Settings,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and streamline your project management workflows.',
      benefits: ['Task automation', 'Workflow optimization', 'Process standardization', 'Efficiency gains']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 projects',
        '10 team members',
        'Basic AI features',
        'Email support',
        'Standard templates',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Most popular for growing teams',
      features: [
        'Unlimited projects',
        '50 team members',
        'Advanced AI features',
        'Priority support',
        'Custom templates',
        'API access',
        'Advanced analytics',
        'Integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited everything',
        'Unlimited team members',
        'Full AI capabilities',
        '24/7 support',
        'Custom development',
        'White-label options',
        'Advanced security',
        'Dedicated manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'TechCorp Inc.',
      content: 'AI Project Manager Pro has revolutionized how we manage projects. The AI predictions are incredibly accurate and have helped us reduce project delays by 70%.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'StartupXYZ',
      content: 'The intelligent resource allocation feature has been a game-changer. We\'ve seen a 40% increase in team productivity since implementing this tool.',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Operations Director',
      company: 'Global Solutions',
      content: 'The risk management capabilities are outstanding. We\'ve prevented several potential project failures thanks to the early warning system.',
      rating: 5,
      avatar: 'ER'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-slate-900 cyber-grid neural-network-bg">
      <EnhancedSEO 
        title="AI Project Manager Pro - Intelligent Project Management | Zion Tech Group"
        description="Revolutionary AI-powered project management with 85% planning accuracy, predictive analytics, and automated workflows. Trusted by 10,000+ teams worldwide."
        keywords="AI project management, intelligent planning, predictive analytics, team collaboration, risk management, project automation"
      />
      
      <Navigation />
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="absolute inset-0 particle-field"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                      <Star className="w-4 h-4 mr-2" />
                      Most Popular AI Tool
                    </span>
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-bold mb-6 cyber-text-3d">
                    AI Project Manager
                    <span className="block neon-text">Pro</span>
                  </h1>
                  
                  <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                    Transform your project management with AI-powered planning, predictive analytics, 
                    and intelligent automation. Trusted by <span className="text-cyan-400 font-semibold">10,000+ teams</span> worldwide.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <a
                      href="tel:+13024640950"
                      className="cyber-button px-8 py-4 text-lg font-semibold"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call: +1 302 464 0950
                    </a>
                    <button
                      onClick={() => setIsDemoMode(!isDemoMode)}
                      className="cyber-button px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      {isDemoMode ? 'Stop Demo' : 'Start Demo'}
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400 mb-1">85%</div>
                      <div className="text-sm text-gray-300">Planning Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">70%</div>
                      <div className="text-sm text-gray-300">Fewer Delays</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-400 mb-1">40%</div>
                      <div className="text-sm text-gray-300">Productivity Boost</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">10K+</div>
                      <div className="text-sm text-gray-300">Teams</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="cyber-card p-8 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-white mb-6">Live Project Dashboard</h3>
                      
                      <div className="space-y-6">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Active Projects</span>
                          <span className="text-cyan-400 font-bold">{projectData.activeProjects}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Team Members</span>
                          <span className="text-purple-400 font-bold">{projectData.teamMembers}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Avg. Completion</span>
                          <span className="text-pink-400 font-bold">{projectData.avgCompletionTime}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Budget Utilization</span>
                          <span className="text-green-400 font-bold">{projectData.budgetUtilization}%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Risk Level</span>
                          <span className="text-yellow-400 font-bold">{projectData.riskLevel}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">Productivity</span>
                          <span className="text-cyan-400 font-bold">{projectData.productivity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to revolutionize your project management workflow.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={feature.title} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to scale with your team and project needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400/50 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="tel:+13024640950"
                    className={`w-full cyber-button text-center block py-3 ${
                      plan.popular ? 'bg-gradient-to-r from-cyan-400 to-purple-600' : ''
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of satisfied customers who have transformed their project management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.name} className="cyber-card p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 neon-text">
                Ready to Transform Your Project Management?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join 10,000+ teams already using AI Project Manager Pro to achieve unprecedented project success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="cyber-button px-8 py-4 text-lg font-semibold"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button px-8 py-4 text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="text-center">
                <p className="text-gray-400 mb-4">Visit our office:</p>
                <p className="text-cyan-400 font-semibold">
                  364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AIProjectManagerPage;