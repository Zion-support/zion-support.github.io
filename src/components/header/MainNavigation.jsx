import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  ChevronDown,
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Home,
  Building,
  Target,
  FileText,
  TestTube,
  Video,
  Newspaper,
  Mail,
  Globe,
  Cloud,
  Cpu,
  Lock,
  Database,
  Network,
  Palette,
  Server,
  Smartphone,
  BarChart3,
  Rocket,
  Award,
  Briefcase,
  Info,
  Phone,
  MapPin,
  Star,
  Heart,
  Settings,
  HelpCircle,
  BookOpen,
  MessageCircle,
  ShoppingCart,
  DollarSign,
  Calendar
} from 'lucide-react';

export function MainNavigation({ className }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  return (
    <nav className={cn('hidden md:flex items-center space-x-6', className)}>
      {/* Home */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(
            'flex items-center text-sm font-medium transition-colors hover:text-primary',
            isActive ? 'text-zion-cyan' : 'text-muted-foreground'
          )
        }
      >
        <Home className="w-4 h-4 mr-1" />
        Home
      </NavLink>

      {/* Services Dropdown */}
      <div className="relative group">
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
            className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Core Services */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                    <Zap className="w-4 h-4 mr-2" />
                    Core Services
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        to="/services/ai"
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Brain className="w-4 h-4 mr-2" />
                        AI & Machine Learning
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/cloud"
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Cloud className="w-4 h-4 mr-2" />
                        Cloud & DevOps
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/cybersecurity"
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Shield className="w-4 h-4 mr-2" />
                        Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/infrastructure"
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Server className="w-4 h-4 mr-2" />
                        Infrastructure
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Specialized Services */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                    <Rocket className="w-4 h-4 mr-2" />
                    Specialized
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        to="/services/consulting"
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Briefcase className="w-4 h-4 mr-2" />
                        Consulting
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/transformation"
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Digital Transformation
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/analytics"
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <BarChart3 className="w-4 h-4 mr-2" />
                        Analytics & BI
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/mobile"
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Smartphone className="w-4 h-4 mr-2" />
                        Mobile Development
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Solutions Dropdown */}
      <div className="relative group">
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
            className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-6">
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/solutions/enterprise"
                    className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Building className="w-4 h-4 mr-2" />
                    Enterprise Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/startup"
                    className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Rocket className="w-4 h-4 mr-2" />
                    Startup Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/healthcare"
                    className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Healthcare Tech
                  </Link>
                </li>
                <li>
                  <Link
                    to="/solutions/financial"
                    className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <DollarSign className="w-4 h-4 mr-2" />
                    Financial Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Company Dropdown */}
      <div className="relative group">
        <button
          onMouseEnter={() => setIsCompanyOpen(true)}
          onMouseLeave={() => setIsCompanyOpen(false)}
          className="flex items-center space-x-1 text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
        >
          <Building className="w-4 h-4" />
          <span>Company</span>
          <ChevronDown className="w-3 h-3" />
        </button>
        {isCompanyOpen && (
          <div
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
            className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-6">
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    to="/about"
                    className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Info className="w-4 h-4 mr-2" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Briefcase className="w-4 h-4 mr-2" />
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Resources Dropdown */}
      <div className="relative group">
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
            className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 z-50"
          >
            <div className="p-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                    <FileText className="w-4 h-4 mr-2" />
                    Content
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        to="/blog"
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Newspaper className="w-4 h-4 mr-2" />
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/case-studies"
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/research-development"
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <TestTube className="w-4 h-4 mr-2" />
                        Research
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                    <Video className="w-4 h-4 mr-2" />
                    Events
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        to="/events"
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Calendar className="w-4 h-4 mr-2" />
                        Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/webinars"
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <Video className="w-4 h-4 mr-2" />
                        Webinars
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/training"
                        className="flex items-center text-zion-slate-light hover:text-zion-cyan transition-colors"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Training
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Direct Links */}
      <NavLink
        to="/pricing"
        className={({ isActive }) =>
          cn(
            'text-sm font-medium transition-colors hover:text-primary',
            isActive ? 'text-zion-cyan' : 'text-muted-foreground'
          )
        }
      >
        Pricing
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          cn(
            'text-sm font-medium transition-colors hover:text-primary',
            isActive ? 'text-zion-cyan' : 'text-muted-foreground'
          )
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}