import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Home,
  Briefcase,
  Users,
  Settings,
  BarChart3,
  FileText,
  MessageSquare,
  HelpCircle,
  Code,
  Smartphone,
  Globe,
  Building,
  Mail,
  Phone,
  MapPin,
  Brain,
  Cpu,
  Shield,
  Rocket,
  Zap,
  Database,
  Network,
  Cloud,
  Lock,
  Target,
  Award,
  Star,
  TrendingUp,
  Lightbulb,
  Palette,
  Layers,
  Command,
  Terminal,
  Server,
  Chip,
  Wifi,
  Smartphone as Mobile,
  Monitor,
  Laptop,
  Tablet,
  Watch,
  Headphones,
  Camera,
  Printer,
  Scanner,
  Router,
  Switch,
  Hub,
  Modem,
  Antenna,
  Satellite,
  Radar,
  Telescope,
  Microscope,
  Beaker,
  Flask,
  TestTube,
  Atom,
  Dna,
  Virus,
  Syringe,
  Stethoscope,
  Heart,
  Brain as BrainIcon,
  Eye,
  Ear,
  Nose,
  Mouth,
  Hand,
  Foot,
  Bone,
  Muscle,
  Nerve,
  Cell,
  Molecule,
  Particle,
  Wave,
  Pulse,
  Signal,
  Frequency,
  Amplitude,
  Phase,
  Wavelength,
  Velocity,
  Acceleration,
  Force,
  Energy,
  Power,
  Voltage,
  Current,
  Resistance,
  Capacitance,
  Inductance,
  Impedance,
  Admittance,
  Conductance,
  Susceptance,
  Reactance,
  Resonance,
  Bandwidth,
  Gain,
  Loss,
  Noise,
  Distortion,
  Interference,
  Crosstalk,
  Echo,
  Reverb,
  Delay,
  Phase,
  Amplitude,
  Frequency,
  Modulation,
  Demodulation,
  Encoding,
  Decoding,
  Compression,
  Decompression,
  Encryption,
  Decryption,
  Hashing,
  Signing,
  Verification,
  Authentication,
  Authorization,
  Validation,
  Sanitization,
  Normalization,
  Standardization,
  Calibration,
  Calibration as CalibrationIcon,
  Synchronization,
  Coordination,
  Orchestration,
  Choreography,
  Composition,
  Aggregation,
  Integration,
  Interoperability,
  Compatibility,
  Portability,
  Scalability,
  Reliability,
  Availability,
  Durability,
  Maintainability,
  Testability,
  Usability,
  Accessibility,
  Security,
  Privacy,
  Compliance,
  Governance,
  Risk,
  Audit,
  Monitoring,
  Logging,
  Alerting,
  Reporting,
  Analytics,
  Metrics,
  KPIs,
  Dashboards,
  Visualization,
  Chart,
  Graph,
  Table,
  Form,
  Input,
  Output,
  Button,
  Link as LinkIcon,
  Image,
  Video,
  Audio,
  Document,
  Folder,
  File,
  Archive,
  Backup,
  Restore,
  Sync,
  Share,
  Export,
  Import,
  Download,
  Upload,
  Copy,
  Paste,
  Cut,
  Delete,
  Undo,
  Redo,
  Save,
  Load,
  Open,
  Close,
  Minimize,
  Maximize,
  Restore as RestoreIcon,
  Move,
  Resize,
  Rotate,
  Scale,
  Transform,
  Animate,
  Transition,
  Effect,
  Filter,
  Blend,
  Mask,
  Clip,
  Crop,
  Resize as ResizeIcon,
  Rotate as RotateIcon,
  Scale as ScaleIcon,
  Transform as TransformIcon,
  Animate as AnimateIcon,
  Transition as TransitionIcon,
  Effect as EffectIcon,
  Filter as FilterIcon,
  Blend as BlendIcon,
  Mask as MaskIcon,
  Clip as ClipIcon,
  Crop as CropIcon,
  Clock,
  Handshake,
  Leaf,
  HardDrive,
  RefreshCw
} from 'lucide-react';

interface MainSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MainSidebar({ isOpen, onClose }: MainSidebarProps) {
  const location = useLocation();

  const navigationItems = [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Building },
        { name: 'Services', href: '/services', icon: Briefcase },
        { name: 'Contact', href: '/contact', icon: Mail },
        { name: 'Blog', href: '/blog', icon: FileText },
      ]
    },
    {
      title: 'AI & Innovation Services',
      items: [
        { name: 'AI & Automation', href: '/services/ai-automation', icon: Brain },
        { name: 'AI & Healthcare', href: '/services/ai-healthcare', icon: BrainIcon },
        { name: 'AI & Content', href: '/services/ai-content', icon: FileText },
        { name: 'AI & HR', href: '/services/ai-hr', icon: Users },
        { name: 'Machine Learning', href: '/services/machine-learning', icon: Cpu },
        { name: 'Natural Language Processing', href: '/services/nlp', icon: MessageSquare },
      ]
    },
    {
      title: 'Quantum & Advanced Computing',
      items: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
        { name: 'Edge Computing', href: '/services/edge-computing', icon: Server },
        { name: 'High Performance Computing', href: '/services/hpc', icon: Chip },
        { name: 'Distributed Systems', href: '/services/distributed-systems', icon: Network },
        { name: 'Parallel Processing', href: '/services/parallel-processing', icon: Layers },
      ]
    },
    {
      title: 'Blockchain & Security',
      items: [
        { name: 'Blockchain Solutions', href: '/services/blockchain', icon: LinkIcon },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Zero Trust Security', href: '/services/zero-trust', icon: Lock },
        { name: 'Penetration Testing', href: '/services/penetration-testing', icon: Target },
        { name: 'Security Audits', href: '/services/security-audits', icon: FileText },
        { name: 'Compliance Management', href: '/services/compliance', icon: Award },
      ]
    },
    {
      title: 'Emerging Technologies',
      items: [
        { name: 'Metaverse Solutions', href: '/services/metaverse', icon: Globe },
        { name: 'IoT Platforms', href: '/services/iot', icon: Wifi },
        { name: 'AR/VR Applications', href: '/services/ar-vr', icon: Eye },
        { name: '5G & Connectivity', href: '/services/5g', icon: Antenna },
        { name: 'Green Technology', href: '/services/green-tech', icon: Leaf },
        { name: 'Space Technology', href: '/services/space-tech', icon: Satellite },
      ]
    },
    {
      title: 'Enterprise Solutions',
      items: [
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Rocket },
        { name: 'Cloud Infrastructure', href: '/services/cloud', icon: Cloud },
        { name: 'DevOps & CI/CD', href: '/services/devops', icon: Code },
        { name: 'Data Analytics & BI', href: '/services/data-analytics', icon: BarChart3 },
        { name: 'System Integration', href: '/services/system-integration', icon: Database },
        { name: 'Legacy Modernization', href: '/services/legacy-modernization', icon: RefreshCw },
      ]
    },
    {
      title: 'Hardware & Equipment',
      items: [
        { name: 'Computers & Laptops', href: '/equipment/computers', icon: Laptop },
        { name: 'Mobile Devices', href: '/equipment/mobile', icon: Smartphone },
        { name: 'Networking Equipment', href: '/equipment/networking', icon: Router },
        { name: 'Security Hardware', href: '/equipment/security', icon: Shield },
        { name: 'Storage Solutions', href: '/equipment/storage', icon: HardDrive },
        { name: 'Peripherals', href: '/equipment/peripherals', icon: Printer },
      ]
    },
    {
      title: 'Talent & Community',
      items: [
        { name: 'Find Talent', href: '/talent', icon: Users },
        { name: 'AI Hiring Platform', href: '/zion-hire-ai', icon: Brain },
        { name: 'Community Forum', href: '/community', icon: MessageSquare },
        { name: 'Partnerships', href: '/partners', icon: Handshake },
        { name: 'Training Programs', href: '/training', icon: GraduationCap },
        { name: 'Certifications', href: '/certifications', icon: Award },
      ]
    },
    {
      title: 'Resources & Support',
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Developer Portal', href: '/developers', icon: Code },
        { name: 'API Documentation', href: '/api-docs', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Video Tutorials', href: '/tutorials', icon: Video },
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      text: '+1 302 464 0950',
      href: 'tel:+13024640950',
      description: 'Call us anytime'
    },
    {
      icon: Mail,
      text: 'kleber@ziontechgroup.com',
      href: 'mailto:kleber@ziontechgroup.com',
      description: 'Email us for support'
    },
    {
      icon: MapPin,
      text: '364 E Main St STE 1008 Middletown DE 19709',
      href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
      description: 'Headquarters location'
    },
  ];

  const quickStats = [
    { value: '500+', label: 'Projects Delivered', icon: Award },
    { value: '15+', label: 'Years Experience', icon: Star },
    { value: '99.9%', label: 'Client Satisfaction', icon: TrendingUp },
    { value: '24/7', label: 'Support Available', icon: Clock },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={cn(
        "fixed left-0 top-0 z-50 h-full w-80 bg-gradient-to-b from-zion-slate-dark via-zion-slate to-zion-slate-light border-r border-white/20 transform transition-all duration-300 ease-in-out lg:translate-x-0 shadow-2xl",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/20 bg-white/5">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-white">Z</span>
              </div>
              <div>
                <span className="text-xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  ZION TECH
                </span>
                <p className="text-xs text-gray-400">Innovation Group</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Quick Stats */}
          <div className="p-4 bg-white/5 border-b border-white/20">
            <div className="grid grid-cols-2 gap-3">
              {quickStats.map((stat, index) => (
                <div key={stat.label} className="text-center p-3 glass rounded-lg border border-white/20">
                  <div className="text-lg font-bold text-zion-cyan">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-6">
            {navigationItems.map((section) => (
              <div key={section.title}>
                <h3 className="text-zion-cyan text-xs font-semibold uppercase tracking-wider mb-3 flex items-center gap-2">
                  <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                  {section.title}
                </h3>
                <ul className="space-y-1">
                  {section.items.map((item) => {
                    const IconComponent = item.icon;
                    const isActive = location.pathname === item.href;

                    return (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          onClick={onClose}
                          className={cn(
                            "flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 group",
                            isActive
                              ? "bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 text-zion-cyan border border-zion-cyan/30 shadow-lg shadow-zion-cyan/10"
                              : "text-gray-300 hover:text-white hover:bg-white/10 hover:border-white/20 border border-transparent"
                          )}
                        >
                          <IconComponent className={cn(
                            "w-4 h-4 mr-3 transition-colors duration-200",
                            isActive ? "text-zion-cyan" : "text-gray-400 group-hover:text-zion-cyan"
                          )} />
                          {item.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="p-4 border-t border-white/20 bg-white/5">
            <h3 className="text-zion-cyan text-xs font-semibold uppercase tracking-wider mb-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
              Contact Information
            </h3>
            <div className="space-y-3">
              {contactInfo.map((contact) => {
                const IconComponent = contact.icon;
                return (
                  <a
                    key={contact.text}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-start gap-3 p-3 glass rounded-lg border border-white/20 hover:border-zion-cyan/30 hover:bg-white/10 transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white group-hover:text-zion-cyan transition-colors duration-200">
                        {contact.text}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {contact.description}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Website Link */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <a
                href="https://ziontechgroup.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-200 transform hover:scale-105"
              >
                <Globe className="w-4 h-4" />
                Visit Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}