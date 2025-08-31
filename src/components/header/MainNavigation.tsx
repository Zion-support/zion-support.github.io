import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";
import { 
  ChevronDown, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  HardDrive, 
  TrendingUp, 
  Building2, 
  FileText, 
  HelpCircle, 
  BarChart3,
  Server,
  Cloud,
  Lock,
  BarChart,
  Cpu,
  Workflow,
  Database,
  Globe,
  Target,
  Rocket,
  Lightbulb,
  Code,
  Monitor,
  Smartphone,
  Network,
  Wifi,
  Activity,
  Eye,
  Search,
  Settings,
  Palette,
  Zap as ZapIcon,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Star,
  Users2,
  Cog,
  Palette as PaletteIcon,
  Menu,
  X,
  ArrowRight,
  Video,
  GraduationCap,
  Handshake,
  ShoppingCart,
  ChevronRight,
  Calendar,
  Award,
  BookOpen,
  Layers,
  Factory,
  HeartHandshake,
  Briefcase,
  PenTool,
  Layout,
  Truck,
  Heart,
  Scale,
  Home,
  AlertTriangle
} from 'lucide-react';

interface MainNavigationProps {
  className?: string;
}

export function MainNavigation({ className }: MainNavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={cn("hidden lg:flex items-center space-x-8", className)}>
        <NavLink 
          to="/" 
          className={({ isActive }) => 
            cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive ? "text-primary" : "text-muted-foreground"
            )
          }
        >
          Home
        </NavLink>

        {/* Services Dropdown */}
        <div className="relative">
          <button
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          >
            <Zap className="w-4 h-4" />
            <span>Services</span>
            <ChevronDown className="w-3 h-3" />
          </button>
          {isServicesOpen && (
            <div
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="absolute top-full left-0 mt-2 w-[1000px] bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
            >
              <div className="p-6">
                <div className="grid grid-cols-4 gap-8">
                  {/* AI & Automation Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-cyan/20 rounded-lg">
                        <Brain className="w-5 h-5 text-zion-cyan"/>
                      </div>
                      <h4 className="text-zion-cyan font-bold text-lg">AI & Automation</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/services/ai-autonomous-business-manager" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Brain className="w-3 h-3 mr-2" />
                          AI Autonomous Business Manager
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-business-intelligence" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <TrendingUp className="w-3 h-3 mr-2" />
                          AI Business Intelligence
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-enterprise-resource-planning" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Database className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Enterprise Resource Planning</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-workflow-orchestrator" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center group">
                          <Workflow className="w-4 h-4 mr-3 group-hover:scale-110 transition-transform" />
                          <span>AI Workflow Orchestrator</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-content-marketing-studio" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <PenTool className="w-3 h-3 mr-2" />
                          AI Content Marketing Studio
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-customer-experience-analytics-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Users className="w-3 h-3 mr-2" />
                          AI Customer Experience Analytics
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Cloud & Infrastructure Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-cyan/20 rounded-lg">
                        <Server className="w-5 h-5 text-zion-cyan"/>
                      </div>
                      <h4 className="text-zion-cyan font-bold text-lg">Cloud & Infrastructure</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/services/cloud-migration" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Cloud className="w-3 h-3 mr-2" />
                          Cloud Migration
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/devops-automation" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Code className="w-3 h-3 mr-2" />
                          DevOps Automation
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-devops-automation-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Cog className="w-3 h-3 mr-2" />
                          AI DevOps Automation
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/container-orchestration" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Layers className="w-3 h-3 mr-2" />
                          Container Orchestration
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Cybersecurity Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-cyan/20 rounded-lg">
                        <Shield className="w-5 h-5 text-zion-cyan"/>
                      </div>
                      <h4 className="text-zion-cyan font-bold text-lg">Cybersecurity</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/services/cybersecurity-audit" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Lock className="w-3 h-3 mr-2" />
                          Cybersecurity Audit
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/incident-response" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <AlertTriangle className="w-3 h-3 mr-2" />
                          Incident Response
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/penetration-testing" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Target className="w-3 h-3 mr-2" />
                          Penetration Testing
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Emerging Tech Column */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-cyan/20 rounded-lg">
                        <Rocket className="w-5 h-5 text-zion-cyan"/>
                      </div>
                      <h4 className="text-zion-cyan font-bold text-lg">Emerging Tech</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/services/quantum-computing" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Atom className="w-3 h-3 mr-2" />
                          Quantum Computing
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/blockchain-solutions" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Coins className="w-3 h-3 mr-2" />
                          Blockchain Solutions
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/ai-ecommerce-optimization-platform" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <ShoppingCart className="w-3 h-3 mr-2" />
                          AI E-commerce Optimization
                        </Link>
                      </li>
                      <li>
                        <Link to="/services/iot-platforms" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Wifi className="w-3 h-3 mr-2" />
                          IoT Platforms
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* View All Services Button */}
                <div className="mt-6 pt-6 border-t border-zion-purple/20 text-center">
                  <Link 
                    to="/services" 
                    className="inline-flex items-center px-6 py-3 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                  >
                    View All Services
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Solutions Dropdown */}
        <div className="relative">
          <button
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={() => setIsSolutionsOpen(false)}
            className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          >
            <Target className="w-4 h-4" />
            <span>Solutions</span>
            <ChevronDown className="w-3 h-3" />
          </button>
          {isSolutionsOpen && (
            <div
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
              className="absolute top-full left-0 mt-2 w-[600px] bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
            >
              <div className="p-6">
                <div className="grid grid-cols-2 gap-8">
                  {/* Enterprise Solutions */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-cyan/20 rounded-lg">
                        <Building2 className="w-5 h-5 text-zion-cyan"/>
                      </div>
                      <h4 className="text-zion-cyan font-bold text-lg">Enterprise</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/solutions/enterprise" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Building2 className="w-3 h-3 mr-2" />
                          Enterprise Solutions
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/healthcare" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Heart className="w-3 h-3 mr-2" />
                          Healthcare
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/financial" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <DollarSign className="w-3 h-3 mr-2" />
                          Financial Services
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/retail" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <ShoppingCart className="w-3 h-3 mr-2" />
                          Retail & E-commerce
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Industry Solutions */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-cyan/20 rounded-lg">
                        <Factory className="w-5 h-5 text-zion-cyan"/>
                      </div>
                      <h4 className="text-zion-cyan font-bold text-lg">Industries</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/solutions/manufacturing" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Factory className="w-3 h-3 mr-2" />
                          Manufacturing
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/logistics" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Truck className="w-3 h-3 mr-2" />
                          Logistics & Supply Chain
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/education" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <GraduationCap className="w-3 h-3 mr-2" />
                          Education
                        </Link>
                      </li>
                      <li>
                        <Link to="/solutions/legal" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Scale className="w-3 h-3 mr-2" />
                          Legal Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* View All Solutions Button */}
                <div className="mt-6 pt-6 border-t border-zion-purple/20 text-center">
                  <Link 
                    to="/solutions" 
                    className="inline-flex items-center px-6 py-3 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                  >
                    View All Solutions
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Company Dropdown */}
        <div className="relative">
          <button
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
            className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          >
            <Building2 className="w-4 h-4" />
            <span>Company</span>
            <ChevronDown className="w-3 h-3" />
          </button>
          {isCompanyOpen && (
            <div
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
              className="absolute top-full left-0 mt-2 w-[400px] bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
            >
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                    <div className="p-2 bg-zion-cyan/20 rounded-lg">
                      <Building2 className="w-5 h-5 text-zion-cyan"/>
                    </div>
                    <h4 className="text-zion-cyan font-bold text-lg">About Zion Tech Group</h4>
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Users className="w-3 h-3 mr-2" />
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/leadership" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Award className="w-3 h-3 mr-2" />
                        Leadership Team
                      </Link>
                    </li>
                    <li>
                      <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Briefcase className="w-3 h-3 mr-2" />
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link to="/partners" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Handshake className="w-3 h-3 mr-2" />
                        Partners
                      </Link>
                    </li>
                    <li>
                      <Link to="/news" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <FileText className="w-3 h-3 mr-2" />
                        News & Press
                      </Link>
                    </li>
                    <li>
                      <Link to="/events" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                        <Calendar className="w-3 h-3 mr-2" />
                        Events
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Resources Dropdown */}
        <div className="relative">
          <button
            onMouseEnter={() => setIsResourcesOpen(true)}
            onMouseLeave={() => setIsResourcesOpen(false)}
            className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
          >
            <BookOpen className="w-4 h-4" />
            <span>Resources</span>
            <ChevronDown className="w-3 h-3" />
          </button>
          {isResourcesOpen && (
            <div
              onMouseEnter={() => setIsResourcesOpen(true)}
              onMouseLeave={() => setIsResourcesOpen(false)}
              className="absolute top-full left-0 mt-2 w-[500px] bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
            >
              <div className="p-6">
                <div className="grid grid-cols-2 gap-8">
                  {/* Learning Resources */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-cyan/20 rounded-lg">
                        <GraduationCap className="w-5 h-5 text-zion-cyan"/>
                      </div>
                      <h4 className="text-zion-cyan font-bold text-lg">Learning</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/blog" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <PenTool className="w-3 h-3 mr-2" />
                          Blog
                        </Link>
                      </li>
                      <li>
                        <Link to="/case-studies" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <FileText className="w-3 h-3 mr-2" />
                          Case Studies
                        </Link>
                      </li>
                      <li>
                        <Link to="/white-papers" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <BookOpen className="w-3 h-3 mr-2" />
                          White Papers
                        </Link>
                      </li>
                      <li>
                        <Link to="/webinars" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Video className="w-3 h-3 mr-2" />
                          Webinars
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* Support & Tools */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 pb-3 border-b border-zion-purple/20">
                      <div className="p-2 bg-zion-cyan/20 rounded-lg">
                        <HelpCircle className="w-5 h-5 text-zion-cyan"/>
                      </div>
                      <h4 className="text-zion-cyan font-bold text-lg">Support</h4>
                    </div>
                    <ul className="space-y-3">
                      <li>
                        <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <HelpCircle className="w-3 h-3 mr-2" />
                          Help Center
                        </Link>
                      </li>
                      <li>
                        <Link to="/docs" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <Monitor className="w-3 h-3 mr-2" />
                          Documentation
                        </Link>
                      </li>
                      <li>
                        <Link to="/training" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <GraduationCap className="w-3 h-3 mr-2" />
                          Training
                        </Link>
                      </li>
                      <li>
                        <Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center">
                          <MessageCircle className="w-3 h-3 mr-2" />
                          Support
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* View All Resources Button */}
                <div className="mt-6 pt-6 border-t border-zion-purple/20 text-center">
                  <Link 
                    to="/resources" 
                    className="inline-flex items-center px-6 py-3 bg-zion-cyan text-zion-blue-dark font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
                  >
                    View All Resources
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Contact Link */}
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            cn(
              "text-sm font-medium transition-colors hover:text-primary",
              isActive ? "text-primary" : "text-muted-foreground"
            )
          }
        >
          Contact
        </NavLink>

        {/* Get Started CTA */}
        <Link
          to="/get-started"
          className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-medium rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
        >
          Get Started
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden inline-flex items-center justify-center p-2 text-zion-slate-light hover:text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-zion-blue-dark border-t border-zion-purple/30 shadow-2xl z-50">
          <div className="p-6 space-y-6">
            {/* Mobile Navigation Links */}
            <div className="space-y-4">
              <Link to="/" className="block text-lg font-medium text-white hover:text-zion-cyan transition-colors">
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="text-lg font-medium text-zion-cyan">Services</div>
                <div className="pl-4 space-y-2">
                  <Link to="/services/ai-autonomous-business-manager" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Autonomous Business Manager
                  </Link>
                  <Link to="/services/ai-business-intelligence" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Business Intelligence
                  </Link>
                  <Link to="/services/ai-content-marketing-studio" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Content Marketing Studio
                  </Link>
                  <Link to="/services/ai-customer-experience-analytics-platform" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI Customer Experience Analytics
                  </Link>
                  <Link to="/services/ai-devops-automation-platform" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI DevOps Automation
                  </Link>
                  <Link to="/services/ai-ecommerce-optimization-platform" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    AI E-commerce Optimization
                  </Link>
                  <Link to="/services" className="block text-zion-cyan font-medium">
                    View All Services →
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-lg font-medium text-zion-cyan">Solutions</div>
                <div className="pl-4 space-y-2">
                  <Link to="/solutions/enterprise" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Enterprise
                  </Link>
                  <Link to="/solutions/healthcare" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Healthcare
                  </Link>
                  <Link to="/solutions/financial" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Financial Services
                  </Link>
                  <Link to="/solutions" className="block text-zion-cyan font-medium">
                    View All Solutions →
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-lg font-medium text-zion-cyan">Company</div>
                <div className="pl-4 space-y-2">
                  <Link to="/about" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    About Us
                  </Link>
                  <Link to="/careers" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Careers
                  </Link>
                  <Link to="/partners" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Partners
                  </Link>
                  <Link to="/news" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    News
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-lg font-medium text-zion-cyan">Resources</div>
                <div className="pl-4 space-y-2">
                  <Link to="/blog" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Blog
                  </Link>
                  <Link to="/case-studies" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Case Studies
                  </Link>
                  <Link to="/help" className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Help Center
                  </Link>
                  <Link to="/resources" className="block text-zion-cyan font-medium">
                    View All Resources →
                  </Link>
                </div>
              </div>

              <Link to="/contact" className="block text-lg font-medium text-white hover:text-zion-cyan transition-colors">
                Contact
              </Link>
            </div>

            {/* Mobile CTA */}
            <div className="pt-6 border-t border-zion-purple/30">
              <Link
                to="/get-started"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Contact Info */}
            <div className="pt-6 border-t border-zion-purple/30 space-y-3">
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Phone className="w-4 h-4" />
                <span>+1 (302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-zion-slate-light">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown, DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
