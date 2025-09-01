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
  Calendar,
  Atom,
  Handshake,
  GraduationCap
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
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <Brain className="w-4 h-4 mr-2" />
                        AI & Machine Learning
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/cloud"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <Cloud className="w-4 h-4 mr-2" />
                        Cloud & DevOps
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/cybersecurity"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <Shield className="w-4 h-4 mr-2" />
                        Cybersecurity
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/infrastructure"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <Server className="w-4 h-4 mr-2" />
                        IT Infrastructure
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Specialized Services */}
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-4 flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Specialized
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li>
                      <Link
                        to="/services/blockchain"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <Lock className="w-4 h-4 mr-2" />
                        Blockchain Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/quantum"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <Atom className="w-4 h-4 mr-2" />
                        Quantum Computing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/iot"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <Smartphone className="w-4 h-4 mr-2" />
                        IoT & Edge Computing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/digital-twin"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Digital Twin
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zion-purple/20">
                <Link
                  to="/services"
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center"
                >
                  View All Services
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Link>
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
              <div className="space-y-4">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <Building className="w-4 h-4 mr-2" />
                    Industry Solutions
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        to="/solutions/enterprise"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <Building className="w-4 h-4 mr-2" />
                        Enterprise
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/solutions/healthcare"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <Heart className="w-4 h-4 mr-2" />
                        Healthcare
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/solutions/financial"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <DollarSign className="w-4 h-4 mr-2" />
                        Financial Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/solutions/manufacturing"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <Cpu className="w-4 h-4 mr-2" />
                        Manufacturing
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-zion-purple/20">
                  <Link
                    to="/solutions"
                    className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center"
                  >
                    View All Solutions
                    <TrendingUp className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
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
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                  >
                    <Info className="w-4 h-4 mr-2" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/team"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Our Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/careers"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                  >
                    <Briefcase className="w-4 h-4 mr-2" />
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/partners"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                  >
                    <Handshake className="w-4 h-4 mr-2" />
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    to="/press"
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                  >
                    <Newspaper className="w-4 h-4 mr-2" />
                    Press & News
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
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Learning
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        to="/blog"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/webinars"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <Video className="w-4 h-4 mr-2" />
                        Webinars
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/training"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <GraduationCap className="w-4 h-4 mr-2" />
                        Training
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/white-papers"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        White Papers
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-zion-cyan font-semibold mb-3 flex items-center">
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Support
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link
                        to="/help"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <HelpCircle className="w-4 h-4 mr-2" />
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/support"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Support
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/faq"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <HelpCircle className="w-4 h-4 mr-2" />
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/docs"
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors flex items-center"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Documentation
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zion-purple/20">
                <Link
                  to="/resources"
                  className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center justify-center"
                >
                  View All Resources
                  <TrendingUp className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact */}
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          cn(
            'flex items-center text-sm font-medium transition-colors hover:text-primary',
            isActive ? 'text-zion-cyan' : 'text-muted-foreground'
          )
        }
      >
        <Mail className="w-4 h-4 mr-1" />
        Contact
      </NavLink>
    </nav>
  );
}
