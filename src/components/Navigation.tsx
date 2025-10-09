import React, { useState, useEffect } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Globe, Database, Settings, Target, MessageSquare, Eye, Cpu, Lock, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Recycle, Moon, Mic, AlertTriangle, Map, Droplets, Wind, Volume2, Sun, Thermometer, Leaf, Waves, TreePine, Wheat, Fish, Apple, Battery, Atom, Cloud as CloudIcon, Rocket, Satellite, Circle, Dna, Truck, Crown, DoorOpen } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [isITOpen, setIsITOpen] = useState(false);
  const [isSpecializedOpen, setIsSpecializedOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsAIOpen(false);
    setIsITOpen(false);
    setIsSpecializedOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      closeAllMenus();
    }
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    if (isServicesOpen) {
      setIsAIOpen(false);
      setIsITOpen(false);
      setIsSpecializedOpen(false);
    }
  };

  const toggleAI = () => {
    setIsAIOpen(!isAIOpen);
    if (isAIOpen) {
      setIsITOpen(false);
      setIsSpecializedOpen(false);
    }
  };

  const toggleIT = () => {
    setIsITOpen(!isITOpen);
    if (isITOpen) {
      setIsAIOpen(false);
      setIsSpecializedOpen(false);
    }
  };

  const toggleSpecialized = () => {
    setIsSpecializedOpen(!isSpecializedOpen);
    if (isSpecializedOpen) {
      setIsAIOpen(false);
      setIsITOpen(false);
    }
  };

  const microSAASServices = [
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: BarChart },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: MessageSquare },
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart3 },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: Bot },
    { name: 'AI Legal Document Analyzer', href: '/ai-legal-analyzer', icon: FileText },
    { name: 'AI Real Estate Assistant', href: '/ai-real-estate', icon: Home },
    { name: 'AI HR Recruiter Pro', href: '/ai-hr-recruiter', icon: Users },
    { name: 'AI Supply Chain Optimizer', href: '/ai-supply-chain', icon: Globe },
    { name: 'AI Energy Management', href: '/ai-energy-management', icon: Zap },
    { name: 'AI Inventory Tracker Pro', href: '/ai-inventory-tracker', icon: Database },
    { name: 'AI Customer Feedback Analyzer', href: '/ai-feedback-analyzer', icon: MessageSquare },
    { name: 'AI Event Planner Pro', href: '/ai-event-planner', icon: Calendar },
    { name: 'AI Travel Optimizer', href: '/ai-travel-optimizer', icon: Plane },
    { name: 'AI Learning Management', href: '/ai-learning-management', icon: GraduationCap },
    { name: 'AI Restaurant Manager', href: '/ai-restaurant-manager', icon: Home },
    { name: 'AI Insurance Claims', href: '/ai-insurance-claims', icon: Shield },
    { name: 'AI Fleet Management', href: '/ai-fleet-management', icon: Car },
    { name: 'AI Property Management', href: '/ai-property-management', icon: Building },
    { name: 'AI Healthcare Scheduler', href: '/ai-healthcare-scheduler', icon: Stethoscope },
    { name: 'AI Manufacturing Optimizer', href: '/ai-manufacturing-optimizer', icon: Settings },
    { name: 'AI Investment Tracker Pro', href: '/ai-investment-tracker', icon: BarChart },
    { name: 'AI Content Moderation', href: '/ai-content-moderation', icon: Shield },
    { name: 'AI Translation Hub', href: '/ai-translation-hub', icon: Globe },
    { name: 'AI Compliance Monitor', href: '/ai-compliance-monitor', icon: FileText },
    { name: 'AI Weather Intelligence', href: '/ai-weather-intelligence', icon: Globe },
    { name: 'AI Waste Management', href: '/ai-waste-management', icon: Recycle },
    { name: 'AI Security Analytics', href: '/ai-security-analytics', icon: Camera },
    { name: 'AI Personal Finance', href: '/ai-personal-finance', icon: CreditCard },
    { name: 'AI Home Automation', href: '/ai-home-automation', icon: Home },
    { name: 'AI Pet Care Assistant', href: '/ai-pet-care', icon: Heart },
    { name: 'AI Garden Manager', href: '/ai-garden-manager', icon: Globe },
    { name: 'AI Sleep Optimizer', href: '/ai-sleep-optimizer', icon: Moon },
    { name: 'AI Time Tracker Pro', href: '/ai-time-tracker', icon: Clock3 },
    { name: 'AI Habit Builder', href: '/ai-habit-builder', icon: Target },
    { name: 'AI Meditation Guide', href: '/ai-meditation-guide', icon: Heart },
    { name: 'AI Language Learning', href: '/ai-language-learning', icon: MessageSquare },
    { name: 'AI Recipe Generator', href: '/ai-recipe-generator', icon: Home },
    { name: 'AI Workout Planner', href: '/ai-workout-planner', icon: Activity },
    { name: 'AI Study Assistant', href: '/ai-study-assistant', icon: BookOpen },
    { name: 'AI Memory Palace', href: '/ai-memory-palace', icon: Brain },
    { name: 'AI Creative Writing', href: '/ai-creative-writing', icon: FileText },
    { name: 'AI Music Teacher', href: '/ai-music-teacher', icon: Music },
    { name: 'AI Art Generator Pro', href: '/ai-art-generator-pro', icon: Palette },
    { name: 'AI Podcast Producer', href: '/ai-podcast-producer', icon: Mic },
    { name: 'AI Website Builder Pro', href: '/ai-website-builder', icon: Globe },
    { name: 'AI Email Signature', href: '/ai-email-signature', icon: Mail },
    { name: 'AI Password Manager Pro', href: '/ai-password-manager', icon: Lock },
    { name: 'AI Backup Manager', href: '/ai-backup-manager', icon: Database },
    { name: 'AI System Monitor Pro', href: '/ai-system-monitor', icon: BarChart },
    { name: 'AI Code Quality Inspector', href: '/ai-code-quality', icon: Search },
    { name: 'AI API Gateway Manager', href: '/ai-api-gateway', icon: Code },
    { name: 'AI Database Optimizer', href: '/ai-database-optimizer', icon: Database },
    { name: 'AI Cloud Cost Optimizer', href: '/ai-cloud-optimizer', icon: Cloud },
    { name: 'AI Network Security Scanner', href: '/ai-network-security', icon: Shield },
    { name: 'AI Performance Tester', href: '/ai-performance-tester', icon: Zap },
    { name: 'AI Documentation Generator', href: '/ai-documentation', icon: FileText },
    { name: 'AI Bug Tracker Pro', href: '/ai-bug-tracker', icon: Search },
    { name: 'AI UX Analyzer', href: '/ai-ux-analyzer', icon: Eye },
    { name: 'AI Accessibility Checker', href: '/ai-accessibility-checker', icon: Eye },
    { name: 'AI SEO Content Optimizer', href: '/ai-seo-content', icon: Search },
    { name: 'AI Social Media Scheduler', href: '/ai-social-scheduler', icon: MessageSquare },
    { name: 'AI Email Deliverability', href: '/ai-email-deliverability', icon: Mail },
    { name: 'AI Conversion Optimizer', href: '/ai-conversion-optimizer', icon: BarChart },
    { name: 'AI Customer Journey Mapper', href: '/ai-customer-journey', icon: Map },
    { name: 'AI Pricing Optimizer', href: '/ai-pricing-optimizer', icon: Calculator },
    { name: 'AI Inventory Forecasting', href: '/ai-inventory-forecasting', icon: Database },
    { name: 'AI Supply Chain Risk Manager', href: '/ai-supply-chain-risk', icon: AlertTriangle },
    { name: 'AI Quality Control System', href: '/ai-quality-control', icon: CheckCircle },
    { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance', icon: Settings },
    { name: 'AI Energy Efficiency Monitor', href: '/ai-energy-efficiency', icon: Zap },
    { name: 'AI Water Management', href: '/ai-water-management', icon: Droplets },
    { name: 'AI Air Quality Monitor', href: '/ai-air-quality', icon: Wind },
    { name: 'AI Noise Pollution Tracker', href: '/ai-noise-tracker', icon: Volume2 },
    { name: 'AI Carbon Footprint Calculator', href: '/ai-carbon-footprint', icon: Globe },
    { name: 'AI Waste Reduction Optimizer', href: '/ai-waste-reduction', icon: Recycle },
    { name: 'AI Renewable Energy Optimizer', href: '/ai-renewable-energy', icon: Sun },
    { name: 'AI Smart Grid Manager', href: '/ai-smart-grid', icon: Zap },
    { name: 'AI Electric Vehicle Optimizer', href: '/ai-ev-optimizer', icon: Car },
    { name: 'AI Smart City Manager', href: '/ai-smart-city', icon: Building },
    { name: 'AI Traffic Optimizer', href: '/ai-traffic-optimizer', icon: Car },
    { name: 'AI Parking Management', href: '/ai-parking-management', icon: Car },
    { name: 'AI Public Transportation', href: '/ai-public-transit', icon: Bus },
    { name: 'AI Emergency Response', href: '/ai-emergency-response', icon: AlertTriangle },
    { name: 'AI Disaster Recovery Planner', href: '/ai-disaster-recovery', icon: Shield },
    { name: 'AI Climate Change Monitor', href: '/ai-climate-monitor', icon: Thermometer },
    { name: 'AI Biodiversity Tracker', href: '/ai-biodiversity-tracker', icon: Leaf },
    { name: 'AI Ocean Health Monitor', href: '/ai-ocean-monitor', icon: Waves },
    { name: 'AI Forest Management', href: '/ai-forest-management', icon: TreePine },
    { name: 'AI Wildlife Protection', href: '/ai-wildlife-protection', icon: Shield },
    { name: 'AI Agricultural Optimizer', href: '/ai-agricultural-optimizer', icon: Wheat },
    { name: 'AI Livestock Manager', href: '/ai-livestock-manager', icon: Heart },
    { name: 'AI Aquaculture Manager', href: '/ai-aquaculture-manager', icon: Fish },
    { name: 'AI Food Safety Monitor', href: '/ai-food-safety', icon: Apple },
    { name: 'AI Supply Chain Transparency', href: '/ai-supply-transparency', icon: Search },
    { name: 'AI Circular Economy Optimizer', href: '/ai-circular-economy', icon: Recycle },
    { name: 'AI Sustainable Finance Tracker', href: '/ai-sustainable-finance', icon: Leaf },
    { name: 'AI Green Building Optimizer', href: '/ai-green-building', icon: Building },
    { name: 'AI Smart Home Energy Manager', href: '/ai-smart-home-energy', icon: Home },
    { name: 'AI Electric Grid Optimizer', href: '/ai-grid-optimizer', icon: Zap },
    { name: 'AI Microgrid Controller', href: '/ai-microgrid-controller', icon: Battery },
    { name: 'AI Energy Storage Optimizer', href: '/ai-energy-storage', icon: Battery },
    { name: 'AI Hydrogen Production Optimizer', href: '/ai-hydrogen-optimizer', icon: Atom },
    { name: 'AI Carbon Capture Optimizer', href: '/ai-carbon-capture', icon: Cloud },
    { name: 'AI Nuclear Safety Monitor', href: '/ai-nuclear-safety', icon: Shield },
    { name: 'AI Fusion Energy Optimizer', href: '/ai-fusion-optimizer', icon: Sun },
    { name: 'AI Space Mission Optimizer', href: '/ai-space-mission', icon: Rocket },
    { name: 'AI Satellite Management', href: '/ai-satellite-management', icon: Satellite },
    { name: 'AI Space Debris Tracker', href: '/ai-space-debris', icon: Satellite },
    { name: 'AI Mars Mission Planner', href: '/ai-mars-mission', icon: Globe },
    { name: 'AI Lunar Base Manager', href: '/ai-lunar-base', icon: Moon },
    { name: 'AI Asteroid Mining Optimizer', href: '/ai-asteroid-mining', icon: Globe },
    { name: 'AI Space Tourism Optimizer', href: '/ai-space-tourism', icon: Rocket },
    { name: 'AI Space Weather Monitor', href: '/ai-space-weather', icon: Sun },
    { name: 'AI Exoplanet Discoverer', href: '/ai-exoplanet-discovery', icon: Globe },
    { name: 'AI Black Hole Analyzer', href: '/ai-black-hole-analyzer', icon: Circle },
    { name: 'AI Dark Matter Detector', href: '/ai-dark-matter', icon: Circle },
    { name: 'AI Quantum Computer Optimizer', href: '/ai-quantum-optimizer', icon: Atom },
    { name: 'AI Quantum Cryptography Manager', href: '/ai-quantum-crypto', icon: Lock },
    { name: 'AI Quantum Machine Learning', href: '/ai-quantum-ml', icon: Brain },
    { name: 'AI Quantum Simulation Platform', href: '/ai-quantum-simulation', icon: Atom },
    { name: 'AI Quantum Error Correction', href: '/ai-quantum-error-correction', icon: Settings },
    { name: 'AI Quantum Networking', href: '/ai-quantum-networking', icon: Globe },
    { name: 'AI Quantum Sensing', href: '/ai-quantum-sensing', icon: Radio },
    { name: 'AI Quantum Materials', href: '/ai-quantum-materials', icon: Atom },
    { name: 'AI Quantum Biology', href: '/ai-quantum-biology', icon: Dna },
    { name: 'AI Quantum Chemistry', href: '/ai-quantum-chemistry', icon: Atom },
    { name: 'AI Quantum Finance', href: '/ai-quantum-finance', icon: CreditCard },
    { name: 'AI Quantum Logistics', href: '/ai-quantum-logistics', icon: Truck },
    { name: 'AI Quantum Healthcare', href: '/ai-quantum-healthcare', icon: Stethoscope },
    { name: 'AI Quantum Energy', href: '/ai-quantum-energy', icon: Zap },
    { name: 'AI Quantum Manufacturing', href: '/ai-quantum-manufacturing', icon: Settings },
    { name: 'AI Quantum Agriculture', href: '/ai-quantum-agriculture', icon: Wheat },
    { name: 'AI Quantum Transportation', href: '/ai-quantum-transportation', icon: Car },
    { name: 'AI Quantum Communication', href: '/ai-quantum-communication', icon: Radio },
    { name: 'AI Quantum Entertainment', href: '/ai-quantum-entertainment', icon: Gamepad2 },
    { name: 'AI Quantum Education', href: '/ai-quantum-education', icon: GraduationCap },
    { name: 'AI Quantum Research Platform', href: '/ai-quantum-research', icon: Atom },
    { name: 'AI Quantum Innovation Lab', href: '/ai-quantum-innovation', icon: Atom },
    { name: 'AI Quantum Future Predictor', href: '/ai-quantum-future', icon: Sparkles },
    { name: 'AI Quantum Consciousness Explorer', href: '/ai-quantum-consciousness', icon: Brain },
    { name: 'AI Quantum Reality Simulator', href: '/ai-quantum-reality', icon: Globe },
    { name: 'AI Quantum Time Travel', href: '/ai-quantum-time-travel', icon: Clock3 },
    { name: 'AI Quantum Multiverse Explorer', href: '/ai-quantum-multiverse', icon: Globe },
    { name: 'AI Quantum Teleportation', href: '/ai-quantum-teleportation', icon: Rocket },
    { name: 'AI Quantum Wormhole Creator', href: '/ai-quantum-wormhole', icon: Circle },
    { name: 'AI Quantum Dimensional Gateway', href: '/ai-quantum-dimensional', icon: DoorOpen },
    { name: 'AI Quantum Universe Creator', href: '/ai-quantum-universe', icon: Globe },
    { name: 'AI Quantum God Mode', href: '/ai-quantum-god-mode', icon: Crown }
  ];

  const aiServices = [
    { name: 'Machine Learning Solutions', href: '/machine-learning', icon: Brain },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: BarChart3 },
    { name: 'AI Customer Experience', href: '/ai-customer-experience', icon: Users },
    { name: 'AI Cybersecurity Suite', href: '/ai-cybersecurity-suite', icon: Shield },
    { name: 'AI Supply Chain Intelligence', href: '/ai-supply-chain-intelligence', icon: Globe },
    { name: 'AI Healthcare Analytics', href: '/ai-healthcare-analytics', icon: Stethoscope },
    { name: 'AI Financial Risk Management', href: '/ai-financial-risk', icon: CreditCard },
    { name: 'AI Manufacturing Intelligence', href: '/ai-manufacturing-intelligence', icon: Settings },
    { name: 'AI Content Intelligence', href: '/ai-content-intelligence', icon: FileText },
    { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence', icon: Target },
    { name: 'AI Marketing Automation', href: '/ai-marketing-automation', icon: MessageSquare },
    { name: 'AI Data Platform', href: '/ai-data-platform', icon: Database },
    { name: 'AI Voice & Language', href: '/ai-voice-language', icon: MessageSquare },
    { name: 'AI Image & Video Intelligence', href: '/ai-image-video', icon: Eye },
    { name: 'AI IoT Intelligence', href: '/ai-iot-intelligence', icon: Globe },
    { name: 'AI Blockchain Intelligence', href: '/ai-blockchain-intelligence', icon: Lock },
    { name: 'AI Quantum Computing', href: '/ai-quantum-computing', icon: Cpu },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Settings },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Globe },
    { name: 'AI Cloud Intelligence', href: '/ai-cloud-intelligence', icon: Cloud },
    { name: 'AI DevOps Intelligence', href: '/ai-devops-intelligence', icon: Settings },
    { name: 'AI API Intelligence', href: '/ai-api-intelligence', icon: Code },
    { name: 'AI Testing Intelligence', href: '/ai-testing-intelligence', icon: Search },
    { name: 'AI Documentation Intelligence', href: '/ai-documentation-intelligence', icon: FileText },
    { name: 'AI Compliance Intelligence', href: '/ai-compliance-intelligence', icon: Shield },
    { name: 'AI Innovation Platform', href: '/ai-innovation-platform', icon: Sparkles },
    { name: 'AI Sustainability Intelligence', href: '/ai-sustainability-intelligence', icon: Globe },
    { name: 'AI Talent Intelligence', href: '/ai-talent-intelligence', icon: Users },
    { name: 'AI Learning Intelligence', href: '/ai-learning-intelligence', icon: GraduationCap },
    { name: 'AI Research Intelligence', href: '/ai-research-intelligence', icon: Search },
    { name: 'AI Innovation Labs', href: '/ai-innovation-labs', icon: Sparkles },
    { name: 'AI Future Intelligence', href: '/ai-future-intelligence', icon: Sparkles }
  ];

  const itServices = [
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud },
    { name: 'Enterprise Infrastructure', href: '/enterprise-infrastructure', icon: Building },
    { name: 'Advanced Cybersecurity', href: '/advanced-cybersecurity', icon: Shield },
    { name: 'DevOps & CI/CD Excellence', href: '/devops-excellence', icon: Settings },
    { name: 'Database & Data Management', href: '/database-management', icon: Database },
    { name: 'Network Infrastructure & Security', href: '/network-infrastructure', icon: Globe },
    { name: 'IT Support & Helpdesk', href: '/it-support', icon: Users },
    { name: 'Strategic IT Consulting', href: '/strategic-it-consulting', icon: Briefcase },
    { name: 'Cloud Migration & Modernization', href: '/cloud-migration', icon: Cloud },
    { name: 'Compliance & Governance', href: '/compliance', icon: FileText },
    { name: 'Advanced Development Tools', href: '/advanced-development-tools', icon: Code },
    { name: 'Marketing Technology Stack', href: '/marketing-technology', icon: Target },
    { name: 'Enterprise Productivity Solutions', href: '/enterprise-productivity', icon: BarChart },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart3 },
    { name: 'Mobile & Web Development', href: '/mobile-web-development', icon: Smartphone },
    { name: 'API Development & Management', href: '/api-development', icon: Code },
    { name: 'Quality Assurance & Testing', href: '/quality-assurance', icon: Search },
    { name: 'IT Project Management', href: '/it-project-management', icon: BarChart },
    { name: 'IT Training & Education', href: '/it-training', icon: GraduationCap },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Settings },
    { name: 'Disaster Recovery & Business Continuity', href: '/disaster-recovery', icon: Shield },
    { name: 'IT Security Auditing', href: '/it-security-auditing', icon: Shield },
    { name: 'IT Performance Optimization', href: '/it-performance-optimization', icon: Zap },
    { name: 'IT Integration Services', href: '/it-integration', icon: Code },
    { name: 'IT Monitoring & Management', href: '/it-monitoring', icon: Eye },
    { name: 'IT Documentation & Knowledge Management', href: '/it-documentation', icon: FileText },
    { name: 'IT Vendor Management', href: '/it-vendor-management', icon: Briefcase },
    { name: 'IT Change Management', href: '/it-change-management', icon: Settings },
    { name: 'IT Innovation & Research', href: '/it-innovation-research', icon: Sparkles },
    { name: 'IT Cost Optimization', href: '/it-cost-optimization', icon: Calculator },
    { name: 'IT Governance & Risk Management', href: '/it-governance-risk', icon: Shield },
    { name: 'IT Transformation Services', href: '/it-transformation', icon: Settings },
    { name: 'IT Managed Services', href: '/it-managed-services', icon: Settings },
    { name: 'IT Consulting & Advisory', href: '/it-consulting-advisory', icon: Briefcase },
    { name: 'IT Compliance & Security', href: '/it-compliance-security', icon: Shield },
    { name: 'IT Performance & Optimization', href: '/it-performance', icon: Zap },
    { name: 'IT Innovation & Digital Transformation', href: '/it-innovation-digital', icon: Sparkles },
    { name: 'IT Enterprise Solutions', href: '/it-enterprise-solutions', icon: Building },
    { name: 'IT Future-Ready Solutions', href: '/it-future-ready', icon: Sparkles }
  ];

  const specializedServices = [
    { name: 'Quantum Computing Solutions', href: '/quantum-computing', icon: Cpu },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings },
    { name: 'Blockchain & Web3', href: '/blockchain', icon: Lock },
    { name: 'IoT & Edge Computing', href: '/iot-edge', icon: Globe },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'Robotics Solutions', href: '/robotics', icon: Settings },
    { name: 'Enterprise Solutions', href: '/enterprise', icon: Building },
    { name: 'Analytics Tools', href: '/analytics-tools', icon: BarChart3 },
    { name: 'Business Apps', href: '/business-apps', icon: Briefcase },
    { name: 'Expense Tracker Pro', href: '/expense-tracker', icon: Calculator },
    { name: 'Task Manager Pro', href: '/task-manager-pro', icon: CheckCircle },
    { name: 'Smart Analytics', href: '/smart-analytics', icon: TrendingUp },
    { name: 'Space Technology Solutions', href: '/space-technology', icon: Rocket },
    { name: 'Advanced Robotics', href: '/advanced-robotics', icon: Settings },
    { name: 'Quantum AI Solutions', href: '/quantum-ai-solutions', icon: Atom },
    { name: 'Autonomous Vehicle Technology', href: '/autonomous-vehicles', icon: Car },
    { name: 'Smart City Solutions', href: '/smart-city-solutions', icon: Building },
    { name: 'Environmental Technology', href: '/environmental-tech', icon: Leaf },
    { name: 'Healthcare Technology', href: '/healthcare-tech', icon: Stethoscope },
    { name: 'Financial Technology', href: '/fintech-solutions', icon: CreditCard },
    { name: 'Educational Technology', href: '/edtech-solutions', icon: GraduationCap },
    { name: 'Agricultural Technology', href: '/agtech-solutions', icon: Wheat },
    { name: 'Energy Technology', href: '/energy-tech', icon: Zap },
    { name: 'Transportation Technology', href: '/transportation-tech', icon: Car },
    { name: 'Communication Technology', href: '/communication-tech', icon: Radio },
    { name: 'Entertainment Technology', href: '/entertainment-tech', icon: Gamepad2 },
    { name: 'Research & Development', href: '/research-development', icon: Search },
    { name: 'Innovation Labs', href: '/innovation-labs', icon: Sparkles },
    { name: 'Future Technology', href: '/future-technology', icon: Sparkles }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[1200px] bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-xl p-6">
                  <div className="grid grid-cols-4 gap-6">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        Micro SAAS
                      </h3>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {microSAASServices.slice(0, 12).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        AI Services
                      </h3>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {aiServices.slice(0, 12).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Settings className="w-4 h-4 mr-2" />
                        IT Services
                      </h3>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {itServices.slice(0, 12).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3 flex items-center">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Specialized
                      </h3>
                      <div className="space-y-2 max-h-64 overflow-y-auto">
                        {specializedServices.slice(0, 12).map((service) => (
                          <a
                            key={service.name}
                            href={service.href}
                            className="flex items-center space-x-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{service.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="grid grid-cols-4 gap-4">
                      <a
                        href="/services"
                        className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="/micro-saas"
                        className="flex items-center justify-center space-x-2 text-purple-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>Micro SAAS</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="/ai-services"
                        className="flex items-center justify-center space-x-2 text-blue-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>AI Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      <a
                        href="/it-services"
                        className="flex items-center justify-center space-x-2 text-green-400 hover:text-white transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>IT Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </a>
            <a href="/case-studies" className="text-white hover:text-cyan-400 transition-colors">
              Case Studies
            </a>
            <a href="/pricing" className="text-white hover:text-cyan-400 transition-colors">
              Pricing
            </a>
            <a href="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </a>
            
            <div className="flex items-center space-x-4">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">+1 302 464 0950</span>
              </a>
              <a href="/contact"
                className="cyber-button px-4 py-2 text-sm"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-4">
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="mt-4 pl-4 space-y-4">
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">Micro SAAS</h4>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {microSAASServices.slice(0, 6).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">AI Services</h4>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {aiServices.slice(0, 6).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">IT Services</h4>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {itServices.slice(0, 6).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-2">Specialized</h4>
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {specializedServices.slice(0, 6).map((service) => (
                          <a key={service.name}
                            href={service.href}
                            className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <a href="/services"
                        className="block text-cyan-400 hover:text-white transition-colors text-center py-2 px-3 bg-slate-800 rounded"
                        onClick={closeAllMenus}
                      >
                        All Services
                      </a>
                      <a href="/micro-saas"
                        className="block text-purple-400 hover:text-white transition-colors text-center py-2 px-3 bg-slate-800 rounded"
                        onClick={closeAllMenus}
                      >
                        Micro SAAS
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a href="/about" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                About
              </a>
              <a href="/blog" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Blog
              </a>
              <a href="/case-studies" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Case Studies
              </a>
              <a href="/pricing" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Pricing
              </a>
              <a href="/contact" className="block text-white hover:text-cyan-400 transition-colors" onClick={closeAllMenus}>
                Contact
              </a>
              
              <div className="pt-4 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
                <a href="/contact"
                  className="block cyber-button px-4 py-2 text-center"
                  onClick={closeAllMenus}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;