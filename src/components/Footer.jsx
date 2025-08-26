import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Github, 
  Heart, 
  ArrowUp,
  Zap,
  Brain,
  Shield,
  Cloud,
  Cpu,
  Lock,
  Code,
  Rocket,
  Users,
  Sparkles,
  Target,
  BookOpen,
  Globe,
  Building,
  Heart as HeartIcon,
  Leaf,
  Wind,
  Sun,
  Battery,
  Atom,
  Dna,
  Microscope,
  Telescope,
  Vr,
  Brain as BrainIcon,
  Flask,
  Rocket as RocketIcon,
  Zap as ZapIcon,
  ChevronRight,
  ExternalLink,
  Clock,
  MessageCircle,
  CheckCircle,
  Star,
  Award,
  TrendingUp,
  Lightbulb,
  Settings,
  HelpCircle,
  FileText,
  Play,
  Calendar,
  Users as UsersIcon,
  Briefcase,
  GraduationCap,
  Shield as ShieldIcon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Satellite,
  Car,
  Robot,
  Gamepad2
} from 'lucide-react';
import { FooterNewsletter } from './FooterNewsletter';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceCategories = [
    {
      title: 'AI & Analytics',
      icon: Brain,
      color: 'from-zion-cyan to-zion-purple',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-analytics' },
        { name: 'Machine Learning', href: '/services/machine-learning' },
        { name: 'Predictive Analytics', href: '/services/predictive-analytics' },
        { name: 'Computer Vision', href: '/services/computer-vision' },
        { name: 'Natural Language Processing', href: '/services/nlp' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      color: 'from-zion-purple to-zion-red',
      services: [
        { name: 'Threat Detection', href: '/services/threat-detection' },
        { name: 'Incident Response', href: '/services/incident-response' },
        { name: 'Compliance Management', href: '/services/compliance' },
        { name: 'Security Training', href: '/services/security-training' },
        { name: 'Penetration Testing', href: '/services/penetration-testing' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-zion-blue to-zion-cyan',
      services: [
        { name: 'Cloud Migration', href: '/services/cloud-migration' },
        { name: 'DevOps Automation', href: '/services/devops' },
        { name: 'Container Orchestration', href: '/services/containers' },
        { name: 'Infrastructure as Code', href: '/services/infrastructure' },
        { name: '24/7 Monitoring', href: '/services/monitoring' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Sparkles,
      color: 'from-zion-orange to-zion-yellow',
      services: [
        { name: 'Quantum Computing', href: '/services/quantum-computing' },
        { name: 'Blockchain Solutions', href: '/services/blockchain' },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Metaverse & VR', href: '/services/metaverse-vr' }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: 'Enterprise',
      icon: Building,
      color: 'from-zion-blue to-zion-cyan',
      solutions: [
        { name: 'Digital Transformation', href: '/solutions/digital-transformation' },
        { name: 'Legacy Modernization', href: '/solutions/legacy-modernization' },
        { name: 'Enterprise Security', href: '/solutions/enterprise-security' },
        { name: 'Data Analytics', href: '/solutions/data-analytics' },
        { name: 'Cloud Strategy', href: '/solutions/cloud-strategy' }
      ]
    },
    {
      title: 'Startups',
      icon: Rocket,
      color: 'from-zion-purple to-zion-cyan',
      solutions: [
        { name: 'MVP Development', href: '/solutions/mvp-development' },
        { name: 'Tech Stack Selection', href: '/solutions/tech-stack' },
        { name: 'Scalable Architecture', href: '/solutions/scalable-architecture' },
        { name: 'Growth Hacking', href: '/solutions/growth-hacking' },
        { name: 'Funding Support', href: '/solutions/funding-support' }
      ]
    },
    {
      title: 'Healthcare',
      icon: HeartIcon,
      color: 'from-zion-green to-zion-blue',
      solutions: [
        { name: 'Telemedicine Platforms', href: '/solutions/telemedicine' },
        { name: 'Health Data Analytics', href: '/solutions/health-analytics' },
        { name: 'Patient Management', href: '/solutions/patient-management' },
        { name: 'Medical AI', href: '/solutions/medical-ai' },
        { name: 'Compliance Solutions', href: '/solutions/healthcare-compliance' }
      ]
    },
    {
      title: 'Manufacturing',
      icon: CpuIcon,
      color: 'from-zion-blue to-zion-purple',
      solutions: [
        { name: 'Smart Manufacturing', href: '/solutions/smart-manufacturing' },
        { name: 'Predictive Maintenance', href: '/solutions/predictive-maintenance' },
        { name: 'Quality Control', href: '/solutions/quality-control' },
        { name: 'Supply Chain Optimization', href: '/solutions/supply-chain' },
        { name: 'Industry 4.0', href: '/solutions/industry-4-0' }
      ]
    }
  ];

  const resourceCategories = [
    {
      title: 'Documentation',
      icon: FileText,
      color: 'from-zion-cyan to-zion-blue',
      resources: [
        { name: 'API Reference', href: '/resources/api' },
        { name: 'Integration Guides', href: '/resources/integration' },
        { name: 'Best Practices', href: '/resources/best-practices' },
        { name: 'Troubleshooting', href: '/resources/troubleshooting' },
        { name: 'Release Notes', href: '/resources/releases' }
      ]
    },
    {
      title: 'Learning',
      icon: GraduationCap,
      color: 'from-zion-green to-zion-cyan',
      resources: [
        { name: 'Video Tutorials', href: '/resources/tutorials' },
        { name: 'Webinars', href: '/resources/webinars' },
        { name: 'Training Programs', href: '/resources/training' },
        { name: 'Certification', href: '/resources/certification' },
        { name: 'Knowledge Base', href: '/resources/knowledge-base' }
      ]
    },
    {
      title: 'Community',
      icon: UsersIcon,
      color: 'from-zion-purple to-zion-pink',
      resources: [
        { name: 'Developer Forum', href: '/resources/forum' },
        { name: 'User Groups', href: '/resources/user-groups' },
        { name: 'Events & Meetups', href: '/resources/events' },
        { name: 'Success Stories', href: '/resources/success-stories' },
        { name: 'Partner Network', href: '/resources/partners' }
      ]
    }
  ];

  return (
    <footer className="bg-zion-slate-dark text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 border border-zion-purple-light rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 xl:col-span-2">
              <motion.div 
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                      Zion Tech Group
                    </h3>
                    <p className="text-sm text-zion-slate-light">Innovating Tomorrow</p>
                  </div>
                </div>
                
                <p className="text-zion-slate-light mb-6 leading-relaxed">
                  The world's leading technology company dedicated to high-tech innovation, artificial intelligence, and cutting-edge solutions. 
                  We connect talented professionals with innovative companies to shape the future.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <motion.div 
                    className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="w-4 h-4 text-zion-cyan"/>
                    <a href="tel:+13024640950" className="text-sm hover:text-zion-cyan transition-colors">
                      +1 302 464 0950
                    </a>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="w-4 h-4 text-zion-cyan"/>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-sm hover:text-zion-cyan transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </motion.div>
                  <motion.div 
                    className="flex items-center gap-3 text-zion-slate-light hover:text-zion-cyan transition-colors cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="w-4 h-4 text-zion-cyan"/>
                    <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                  </motion.div>
                </div>

                {/* Social Media */}
                <div className="flex space-x-4">
                  {[
                    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/company/zion-tech-group', label: 'LinkedIn' },
                    { icon: Facebook, href: 'https://www.facebook.com/ziontechgroup', label: 'Facebook' },
                    { icon: Instagram, href: 'https://www.instagram.com/ziontechgroup', label: 'Instagram' },
                    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' }
                  ].map((social) => (
                    <motion.a 
                      key={social.label}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors p-2 hover:bg-zion-cyan/10 rounded-full" 
                      aria-label={social.label} 
                      title={social.label} 
                      whileHover={{ scale: 1.1, rotate: 5 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="h-5 w-5" aria-label={social.label}/>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div className="xl:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-zion-cyan" />
                  Services
                </h4>
                <ul className="space-y-2">
                  {serviceCategories.map((category) => (
                    <li key={category.title}>
                      <Link 
                        to={category.services[0].href}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        {category.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link 
                      to="/services"
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center gap-2 group"
                    >
                      View All Services
                      <ArrowUp className="w-3 h-3 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Solutions */}
            <div className="xl:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-zion-purple" />
                  Solutions
                </h4>
                <ul className="space-y-2">
                  {solutionCategories.map((category) => (
                    <li key={category.title}>
                      <Link 
                        to={category.solutions[0].href}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        {category.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link 
                      to="/solutions"
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center gap-2 group"
                    >
                      View All Solutions
                      <ArrowUp className="w-3 h-3 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Resources */}
            <div className="xl:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-zion-green" />
                  Resources
                </h4>
                <ul className="space-y-2">
                  {resourceCategories.map((category) => (
                    <li key={category.title}>
                      <Link 
                        to={category.resources[0].href}
                        className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group"
                      >
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        {category.title}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link 
                      to="/resources"
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center gap-2 group"
                    >
                      View All Resources
                      <ArrowUp className="w-3 h-3 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Company */}
            <div className="xl:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Building className="w-5 h-5 text-zion-orange" />
                  Company
                </h4>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      to="/about"
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/leadership"
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      Leadership
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/careers"
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/news"
                      className="text-zion-slate-light hover:text-zion-cyan transition-colors text-sm flex items-center gap-2 group"
                    >
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      News & Updates
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact"
                      className="text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium flex items-center gap-2 group"
                    >
                      Contact Us
                      <ArrowUp className="w-3 h-3 rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-16 pt-8 border-t border-zion-cyan/20">
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zion-cyan/20 bg-zion-slate-dark/50">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-6 text-sm text-zion-slate-light">
                <span>&copy; 2027 Zion Tech Group. All rights reserved.</span>
                <div className="flex items-center space-x-4">
                  <Link to="/privacy" className="hover:text-zion-cyan transition-colors">Privacy Policy</Link>
                  <Link to="/terms" className="hover:text-zion-cyan transition-colors">Terms of Service</Link>
                  <Link to="/cookies" className="hover:text-zion-cyan transition-colors">Cookie Policy</Link>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <motion.button
                  onClick={scrollToTop}
                  className="p-2 bg-zion-cyan/10 text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
