

}</div>) : (<ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />)
}</button> <AnimatePresence> > <CloseIcon className="w-5 h-5" /> </button> </div> </div> </a>) )
}</div> </div> </span> </div> <ChevronRight className= {
}/> </button> <AnimatePresence> > {
  item.children?.map ( (child) => (<Link key= {
}</AnimatePresence> </div>) )
}</div> </div> <span>Quick Links</span> </h3> <div className="space-y-2" > <Link > <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200" > Contact Us </div> <div className="text-xs text-gray-500" >Get in touch with our team</div> </a> <Link > <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200" > View Pricing </div> <div className="text-xs text-gray-500" >Explore our pricing plans</div> </a> <Link > <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200" > About Us </div> <div className="text-xs text-gray-500" >Learn about Zion Tech Group</div> </a> </div> </div> <div className="text-center p-3 bg-gray-800/50 rounded-lg" > <div className="text-lg font-bold text-blue-400" >1000+</div> <div className="text-xs text-gray-400" >Clients</div> </div> <div className="text-center p-3 bg-gray-800/50 rounded-lg" > <div className="text-lg font-bold text-purple-400" >24/7</div> <div className="text-xs text-gray-400" >Support</div> </div> <div className="text-center p-3 bg-gray-800/50 rounded-lg" > <div className="text-lg font-bold text-green-400" >99.9%</div> <div className="text-xs text-gray-400" >Uptime</div> </div> </div> </div> <Link href="/contact" className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25" > <span>Get Started Today</span> <ArrowRight className="w-4 h-4 ml-2 inline" /> </a> </div> </div> </motion.aside>)
};export default EnhancedSidebar2025;
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Menu, Home, Zap, Brain, Atom, Shield, Rocket, Globe, 
  Phone, Mail, MapPin, ChevronRight, ChevronDown, 
  Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, 
  Award, Clock, Heart, Lightbulb, Users, FileText, 
  HelpCircle, BookOpen, Target, TrendingUp, Star, DollarSign, CheckCircle
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
  featured?: boolean;
  category?: string;
}
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};
    icon: <Home className="w-5 h-5" />,

    icon: <Globe className="w-5 h-5" />

  componentDidCatch(error, errorInfo) {
}</div>) : (<ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />) ;
}</button> <AnimatePresence> > <CloseIcon className="w-5 h-5" /> </button> </div> </div> </a>) ) ;
}</div> </div> </span> </div> <ChevronRightclassName= {
}/> </button> <AnimatePresence> > {;
  item && item.children?.map ( (child) => (<Linkkey= {
}</AnimatePresence> </div>) ) ;
}</div> </div> <span>Quick Links</span> </h3> <div className="space-y-2" > <Link > <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200" > Contact Us </div> <div className="text-xs text-gray-500" >Get in touch with our team</div> </a> <Link > <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200" > View Pricing </div> <div className="text-xs text-gray-500" >Explore our pricing plans</div> </a> <Link > <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200" > About Us </div> <div className="text-xs text-gray-500" >Learn about Zion Tech Group</div> </a> </div> </div> <div className="text-center p-3 bg-gray-800/50 rounded-lg" > <div className="text-lg font-bold text-blue-400" >1000+</div> <div className="text-xs text-gray-400" >Clients</div> </div> <div className="text-center p-3 bg-gray-800/50 rounded-lg" > <div className="text-lg font-bold text-purple-400" >24/7</div> <div className="text-xs text-gray-400" >Support</div> </div> <div className="text-center p-3 bg-gray-800/50 rounded-lg" > <div className="text-lg font-bold text-green-400" >99 && 99.9%</div> <div className="text-xs text-gray-400" >Uptime</div> </div> </div> </div> <Link href="/contact" className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25" > <span>Get Started Today</span> <ArrowRight className="w-4 h-4 ml-2 inline" /> </a> </div> </div> </motion && motion.aside>) ;
};export default EnhancedSidebar2025;
    icon: <Globe className="w-5 h-5" />,;


    icon: <Brain className="w-5 h-5" />,;
    icon: <Atom className="w-5 h-5" />,;
    icon: <Shield className="w-5 h-5" />,;
    icon: <Rocket className="w-5 h-5" />,;
    icon: <Palette className="w-5 h-5" />,;
    icon: <BookOpen className="w-5 h-5" />,;
    icon: <Truck className="w-5 h-5" />,;
    icon: <DollarSign className="w-5 h-5" />,;
    icon: <BookOpen className="w-5 h-5" />,;
    icon: <Settings className="w-5 h-5" />,;
}</div>) : (<ChevronRight className="w - 4 h - 4 text - gray - 500 group - hover:text - cyan - 400 transition - colors duration - 200" />);
}</button> <AnimatePresence> > <CloseIcon className="w - 5 h - 5" /> </button> </div> </div> </a>) );
}</div> </div> </span> </div> <ChevronRight className= {
}/> </button> <AnimatePresence> > {
  item.children?.map ( (child) => (<Link key= {
}</AnimatePresence> </div>) );
}</div> </div> <span > Quick Links</span> </h3> <div className="space - y-2" > <Link > <div className="font - medium text - gray - 300 group - hover:text - white transition - colors duration - 200" > Contact Us </div> <div className="text - xs text - gray - 500" >Get in touch with our team</div> </a> <Link > <div className="font - medium text - gray - 300 group - hover:text - white transition - colors duration - 200" > View Pricing </div> <div className="text - xs text - gray - 500" >Explore our pricing plans</div> </a> <Link > <div className="font - medium text - gray - 300 group - hover:text - white transition - colors duration - 200" > About Us </div> <div className="text - xs text - gray - 500" >Learn about Zion Tech Group</div> </a> </div> </div> <div className="text - center p - 3 bg - gray - 800 / 50 rounded - lg" > <div className="text - lg font - bold text - blue - 400" >1000+</div> <div className="text - xs text - gray - 400" >Clients</div> </div> <div className="text - center p - 3 bg - gray - 800 / 50 rounded - lg" > <div className="text - lg font - bold text - purple - 400" >24 / 7</div> <div className="text - xs text - gray - 400" >Support</div> </div> <div className="text - center p - 3 bg - gray - 800 / 50 rounded - lg" > <div className="text - lg font - bold text - green - 400" >99.9%</div> <div className="text - xs text - gray - 400" >Uptime</div> </div> </div> </div> <Link href="/contact" className="block w - full text - center px - 4 py - 3 bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 600 hover:to - blue - 700 text - white font - medium rounded - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - lg hover:shadow - cyan - 500 / 25" > <span > Get Started Today</span> <ArrowRight className="w - 4 h - 4 ml - 2 inline" /> </a> </div> </div> </motion.aside>);
}export default EnhancedSidebar2025;
    icon: <Globe className="w - 5 h - 5" />,
    icon: <Brain className="w - 5 h - 5" />,
    icon: <Atom className="w - 5 h - 5" />,
    icon: <Shield className="w - 5 h - 5" />,
    icon: <Rocket className="w - 5 h - 5" />,
    icon: <Palette className="w - 5 h - 5" />,
    icon: <BookOpen className="w - 5 h - 5" />,
    icon: <Truck className="w - 5 h - 5" />,
    icon: <DollarSign className="w - 5 h - 5" />,
    icon: <BookOpen className="w - 5 h - 5" />,
    icon: <Settings className="w - 5 h - 5" />,




  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> }
  { name: 'API Reference', href: '/api-documentation', icon: <Settings className="w-4 h-4" /> }
  { name: 'Case Studies', href: '/case-studies', icon: <BookOpen className="w-4 h-4" /> }
  { name: 'Blog & News', href: '/blog', icon: <FileText className="w-4 h-4" /> }
  { name: 'Training & Certification', href: '/training', icon: <Award className="w-4 h-4" /> }
  { name: 'Community Forum', href: '/community', icon: <Users className="w-4 h-4" /> }




  { name: 'Documentation', href: '/docs', icon: <FileText className="w - 4 h - 4" /> },
  { name: 'API Reference', href: '/api - documentation', icon: <Settings className="w - 4 h - 4" /> },
  { name: 'Case Studies', href: '/case - studies', icon: <BookOpen className="w - 4 h - 4" /> },
  { name: 'Blog & News', href: '/blog', icon: <FileText className="w - 4 h - 4" /> },
  { name: 'Training & Certification', href: '/training', icon: <Award className="w - 4 h - 4" /> },
  { name: 'Community Forum', href: '/community', icon: <Users className="w - 4 h - 4" /> }


  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },;
  { name: 'API Reference', href: '/api-documentation', icon: <Settings className="w-4 h-4" /> },;
  { name: 'Case Studies', href: '/case-studies', icon: <BookOpen className="w-4 h-4" /> },;
  { name: 'Blog & News', href: '/blog', icon: <FileText className="w-4 h-4" /> },;
  { name: 'Training & Certification', href: '/training', icon: <Award className="w-4 h-4" /> },;
  { name: 'Community Forum', href: '/community', icon: <Users className="w-4 h-4" /> }


              <Zap className="w-6 h-6 text-white" />;
            <Phone className="w-3 h-3 text-cyan-400" />;
            <Mail className="w-3 h-3 text-cyan-400" />;
            <Globe className="w-3 h-3 text-cyan-400" />;


                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />;
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />;

                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />




            <AnimatePresence>
              <Zap className="w - 6 h - 6 text - white" />;
            <Phone className="w - 3 h - 3 text - cyan - 400" />;
            <Mail className="w - 3 h - 3 text - cyan - 400" />;
            <Globe className="w - 3 h - 3 text - cyan - 400" />;
                <ChevronDown className="w - 4 h - 4 text - gray - 500 group - hover:text - cyan - 400 transition - colors duration - 200" />) : (
                <ChevronRight className="w - 4 h - 4 text - gray - 500 group - hover:text - cyan - 400 transition - colors duration - 200" />)}
            <AnimatePresence>;



    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    isNew: true,
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Hybrid AI-Quantum computing platform' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' }
    ]
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    isHot: true,
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot', description: 'Quantum-secured IoT' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum trading algorithms' }
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    color: 'text-blue-400',
    items: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', badge: 'New' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', badge: 'New' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', badge: 'New' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', badge: 'New' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', badge: 'New' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
      { name: 'Quantum Networking', href: '/quantum-networking' },
      { name: 'Quantum Data Center', href: '/quantum-data-center' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Our comprehensive technology solutions',
    badge: 'Featured',
      { name: 'All Services', href: '/services', icon: <Rocket className="w-4 h-4" />, featured: true },
      { name: 'AI & Machine Learning', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
      { name: 'Quantum Technology', href: '/quantum-services', icon: <Atom className="w-4 h-4" /> },
      { name: 'Cybersecurity', href: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
      { name: 'Cloud & Infrastructure', href: '/it-services', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Business Intelligence', href: '/data-analytics', icon: <BarChart className="w-4 h-4" /> },
      { name: 'DevOps & Automation', href: '/devops-automation', icon: <Code className="w-4 h-4" /> },
      { name: 'Space Technology', href: '/space-tech', icon: <RocketIcon className="w-4 h-4" /> }
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: <Building className="w-4 h-4" /> },
      { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: <Heart className="w-4 h-4" /> },
      { name: 'Financial Solutions', href: '/solutions/financial', icon: <DollarSign className="w-4 h-4" /> },
      { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: <Cog className="w-4 h-4" /> },
      { name: 'Retail Solutions', href: '/retail-technology-solutions', icon: <Target className="w-4 h-4" /> },
      { name: 'Government Solutions', href: '/government-technology-solutions', icon: <Shield className="w-4 h-4" /> }
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
      { name: 'About Us', href: '/about', icon: <Info className="w-4 h-4" /> },
      { name: 'Our Mission', href: '/mission', icon: <Target className="w-4 h-4" /> },
      { name: 'Leadership Team', href: '/leadership', icon: <Users className="w-4 h-4" /> },
      { name: 'Company Culture', href: '/culture', icon: <Heart className="w-4 h-4" /> },
      { name: 'Our Values', href: '/values', icon: <Star className="w-4 h-4" /> },
      { name: 'Careers', href: '/careers', icon: <Briefcase className="w-4 h-4" /> },
      { name: 'News & Press', href: '/press', icon: <FileText className="w-4 h-4" /> }
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge and resources',
      { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
      { name: 'Blog & Articles', href: '/blog', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Case Studies', href: '/case-studies', icon: <BarChart className="w-4 h-4" /> },
      { name: 'White Papers', href: '/white-papers', icon: <FileText className="w-4 h-4" /> },
      { name: 'Webinars', href: '/webinars', icon: <Calendar className="w-4 h-4" /> },
      { name: 'Events', href: '/events-webinars', icon: <Calendar className="w-4 h-4" /> },
      { name: 'Training', href: '/training', icon: <Lightbulb className="w-4 h-4" /> }
    name: 'Support',
    href: '/support',
    icon: <MessageCircle className="w-5 h-5" />,
    description: 'Get help and support',
      { name: 'Help Center', href: '/help', description: 'Self-service support' },
      { name: 'Contact Support', href: '/contact', description: 'Get in touch' },
      { name: 'Live Chat', href: '/live-chat', description: 'Real-time assistance' },
      { name: 'Training Programs', href: '/training', description: 'Skill development' },
      { name: 'Community Forum', href: '/community', description: 'User community' },
      { name: 'Status Page', href: '/status', description: 'Service status' }
  }
];

const resources = [
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
  { name: 'API Reference', href: '/api-documentation', icon: <Settings className="w-4 h-4" /> },
  { name: 'Case Studies', href: '/case-studies', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Blog & News', href: '/blog', icon: <FileText className="w-4 h-4" /> },
  { name: 'Training & Certification', href: '/training', icon: <Award className="w-4 h-4" /> },
  { name: 'Community Forum', href: '/community', icon: <Users className="w-4 h-4" /> }
              <Zap className="w-6 h-6 text-white" />
            <Phone className="w-3 h-3 text-cyan-400" />
            <Mail className="w-3 h-3 text-cyan-400" />
            <Globe className="w-3 h-3 text-cyan-400" />
                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />

            <AnimatePresence>



            <AnimatePresence>;
                  <CloseIcon className="w-5 h-5" />;


                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />;



                        <Link
                        </Link>;

                        <Link
                        </Link>




                <Mail className="w-5 h-5 text-cyan-400" />
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <Mail className="w-5 h-5 text-cyan-400" />;
                  <Phone className="w-4 h-4 text-cyan-400" />;
                  <Mail className="w-4 h-4 text-cyan-400" />;
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />;
                <TrendingUp className="w-5 h-5 text-cyan-400" />;






                <Star className="w-5 h-5 text-cyan-400" />;
                  <Link
                  </Link>;






                <Rocket className="w-5 h-5 text-cyan-400" />;

                  <CloseIcon className="w - 5 h - 5" />;
                <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - gray - 400" />;
                        <Link;
                        </Link>

                <Mail className="w-5 h-5 text-cyan-400" />
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                <TrendingUp className="w-5 h-5 text-cyan-400" />

                <Star className="w-5 h-5 text-cyan-400" />
                  <Link
                  </Link>

                <Rocket className="w-5 h-5 text-cyan-400" />



                <Zap className="w-5 h-5 text-cyan-400" />;
                <Link
                </Link>;
                <Link
                </Link>;
                <Link

                </Link>;


          <Link

                      <ChevronRight;
                      <ChevronRight 
                    
                    <AnimatePresence>



import React, { useState, useEffect              } from 'react.ts;
import Link from 'next/link.ts;
import { motion, AnimatePresence               } from 'framer-motion.ts;
import { X, Menu, Home, Zap, Brain, Atom, Shield, Rocket, Globe, Phone, Mail, MapPin, ChevronRight, ChevronDown,'  Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Users, FileText, HelpCircle, BookOpen, Target, TrendingUp, Star;
import { X, Menu, Home, Zap, Brain, Atom, Shield, Rocket, Globe, Phone, Mail, MapPin, ChevronRight, ChevronDown, '  Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Users, FileText, HelpCircle, BookOpen, Target, TrendingUp, Star;






























export: default function EnhancedSidebar2025(): any (...args[]: any):  {;
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
export: default function EnhancedSidebar2025 (...args[]: any):  {


export default function EnhancedSidebar2025 (...args[]: any):  {
export default function EnhancedSidebar2025 (...args[]: any):  {
export default /**
export default /**





      <AnimatePresence>;
      <AnimatePresence>;
      <AnimatePresence>;
      <AnimatePresence>;


      </AnimatePresence>;

            <button className="lg: " hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200""              <X className="w-5" h-5 text-gray-400       />"            </button>"          </div>,;

          <div className="space-y-3">"            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30>              <Phone className="w-4 h-4 text-cyan-400" />              <span className="text-sm" text-gray-300">{contactInfo && contactInfo.mobile}</span>"            </div>            <div className="flex" items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">"              <Mail className="w-4" h-4 text-cyan-400 />"              <span className="text-sm text-gray-300>{contactInfo && contactInfo.email}</span>            </div>"          </div>";
        <div className="sticky" top - 0 bg - black / 80 backdrop - blur - xl border - b border - gray - 800 / 50 p - 6>"          <div className="flex items - center justify - between mb - 6>            <div className="flex items - center gap - 3">              <div class_name = relative">"                <div className="w - 12" h - 12 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl flex items - center justify - center>"                  <Zap className="w - 6 h - 6 text - white       />                </div>"                <div className="absolute -inset - 1 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl blur opacity - 20></div>              </div>"              <div>;
            <button className="lg: " hidden p - 2 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 200""              <X className="w - 5" h - 5 text - gray - 400       />"            </button>"          </div>,
          <div className="space - y-3">"            <div className="flex items - center gap - 3 p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30>              <Phone className="w - 4 h - 4 text - cyan - 400" />              <span className="text - sm" text - gray - 300">{contact_info.mobile}</span>"            </div>            <div className="flex" items - center gap - 3 p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30">"              <Mail className="w - 4" h - 4 text - cyan - 400 />"              <span className="text - sm text - gray - 300>{contact_info.email}</span>            </div>"          </div>";


        <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-gray-800/50 p-6>          <div className="flex items-center justify-between mb-6">"            <div className="flex items-center gap-3>              <div className="relative">"                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center>                  <Zap className="w-6 h-6 text-white" />"                </div>"                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20></div>              </div>"              <div>;
              className="lg:hidden p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"              <X className="w-5 h-5 text-gray-400 />            </button>"          </div>;
          <div className="space-y-3>            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30">"              <Phone className="w-4 h-4 text-cyan-400 />              <span className="text-sm text-gray-300">{contactInfo && contactInfo.mobile}</span>"            </div>"            <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg border border-gray-700/30>              <Mail className="w-4 h-4 text-cyan-400" />"              <span className="text-sm text-gray-300>{contactInfo && contactInfo.email}</span>            </div>"          </div>;

        <div className="p-6" space-y-6>"          {/* comment */}"          <Link href=/"            onClick={onClose}"            className="flex" items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover: from-cyan-500/30 hover:to-purple-600/30 rounded-lg border border-cyan-500/30 transition-all duration-300 group""            <Home className="w-5" h-5 text-cyan-400       />"            <span className="text-white font-semibold>Home</span>          </Link>",;
        <div className="p-6" space-y-6>"          {/* comment */}"          <Link href=/"            onClick={onClose}"            className="flex" items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover: from-cyan-500/30 hover:to-purple-600/30 rounded-lg border border-cyan-500/30 transition-all duration-300 group""            <Home className="w-5" h-5 text-cyan-400       />"            <span className="text-white font-semibold>Home</span>          </Link>",;

        <div className="p-6 space-y-6>          {/* Home Link */}"          <Link
            href="/""            onClick={onClose}"            className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover:from-cyan-500/30 hover:to-purple-600/30 rounded-lg border border-cyan-500/30 transition-all duration-300 group"            <Home className="w-5 h-5 text-cyan-400 />            <span className="text-white font-semibold">Home</span>"          </Link>";
            href="/""            onClick={onClose}"            className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 hover:from-cyan-500/30 hover:to-purple-600/30 rounded-lg border border-cyan-500/30 transition-all duration-300 group"            <Home className="w-5 h-5 text-cyan-400 />            <span className="text-white font-semibold">Home</span>"          </Link>";
                className="w-full flex items-center justify-between p-3 bg-gray-800/30 hover: bg-gray-800/50 rounded-lg border border-gray-700/30 transition-all duration-300 group"                <div className="flex items-center gap-3>                  <div className={`w-8 h-8 bg-gradient-to-r ${section && section.color} rounded-lg flex items-center justify-center`}>"                    <section && section.icon className="w-4 h-4 text-white />                  </div>"                  <span className="text-white font-semibold>{section && section.title}</span>                </div>"                <ChevronDownclassName={w-4 h-4 text-gray-400 transition-transform duration-300 ${`
'                  }`}'                />              </button><AnimatePresence>;

const EnhancedSidebar2025: React.FC<EnhancedSidebar2025Props> = ({ isOpen, onClose }) => {;

        <div className="sticky top - 0 bg - black / 80 backdrop - blur - xl border - b border - gray - 800 / 50 p - 6>          <div className="flex items - center justify - between mb - 6">"            <div className="flex items - center gap - 3>              <div className="relative">"                <div className="w - 12 h - 12 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl flex items - center justify - center>                  <Zap className="w - 6 h - 6 text - white" />"                </div>"                <div className="absolute -inset - 1 bg - gradient - to - r from - cyan - 500 to - purple - 600 rounded - xl blur opacity - 20></div>              </div>"              <div>;
              className="lg:hidden p - 2 hover:bg - gray - 800 / 50 rounded - lg transition - colors duration - 200"              <X className="w - 5 h - 5 text - gray - 400 />            </button>"          </div>;
          <div className="space - y-3>            <div className="flex items - center gap - 3 p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30">"              <Phone className="w - 4 h - 4 text - cyan - 400 />              <span className="text - sm text - gray - 300">{contact_info.mobile}</span>"            </div>"            <div className="flex items - center gap - 3 p - 3 bg - gray - 800 / 30 rounded - lg border border - gray - 700 / 30>              <Mail className="w - 4 h - 4 text - cyan - 400" />"              <span className="text - sm text - gray - 300>{contact_info.email}</span>            </div>"          </div>;
        <div className="p - 6" space - y-6>"          {/* comment */}"          <Link href=/"            on_click={on_close}"            className="flex" items - center gap - 3 p - 3 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 hover: from - cyan - 500 / 30 hover:to - purple - 600 / 30 rounded - lg border border - cyan - 500 / 30 transition - all duration - 300 group""            <Home className="w - 5" h - 5 text - cyan - 400       />"            <span className="text - white font - semibold > Home</span>          </Link>",
        <div className="p - 6" space - y-6>"          {/* comment */}"          <Link href=/"            on_click={on_close}"            className="flex" items - center gap - 3 p - 3 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 hover: from - cyan - 500 / 30 hover:to - purple - 600 / 30 rounded - lg border border - cyan - 500 / 30 transition - all duration - 300 group""            <Home className="w - 5" h - 5 text - cyan - 400       />"            <span className="text - white font - semibold > Home</span>          </Link>",
        <div className="p - 6 space - y-6>          {/* Home Link */}"          <Link;
            href="/""            on_click={on_close}"            className="flex items - center gap - 3 p - 3 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 hover:from - cyan - 500 / 30 hover:to - purple - 600 / 30 rounded - lg border border - cyan - 500 / 30 transition - all duration - 300 group"            <Home className="w - 5 h - 5 text - cyan - 400 />            <span className="text - white font - semibold">Home</span>"          </Link>";
            href="/""            on_click={on_close}"            className="flex items - center gap - 3 p - 3 bg - gradient - to - r from - cyan - 500 / 20 to - purple - 600 / 20 hover:from - cyan - 500 / 30 hover:to - purple - 600 / 30 rounded - lg border border - cyan - 500 / 30 transition - all duration - 300 group"            <Home className="w - 5 h - 5 text - cyan - 400 />            <span className="text - white font - semibold">Home</span>"          </Link>";
                className="w - full flex items - center justify - between p - 3 bg - gray - 800 / 30 hover: bg - gray - 800 / 50 rounded - lg border border - gray - 700 / 30 transition - all duration - 300 group"                <div className="flex items - center gap - 3>                  <div className={`w - 8 h - 8 bg - gradient - to - r ${section.color} rounded - lg flex items - center justify - center`}>"                    <section.icon className="w - 4 h - 4 text - white />                  </div>"                  <span className="text - white font - semibold>{section.title}</span>                </div>"                <ChevronDown                  className={w - 4 h - 4 text - gray - 400 transition - transform duration - 300 ${`;
'                  }`}'                />              </button><AnimatePresence>;



                  <Zap: className = "w-6" h-6 text-white />",";
                  <Zap: class_name = "w - 6" h - 6 text - white />", ";



                  <Zap className="w - 6" h - 6 text - white       />;






                <Zap className="w - 5 h - 5 text - white       />";
              <X className="w - 5 h - 5 text - gray - 400"  />;
              <X className="w - 5 h - 5 text - gray - 400"  />";
              <X className="w - 6 h - 6"  />;


                      <ChevronDown className="w-5 h-5 text-gray-500"  />;
                      <ChevronRight className="w-5" h-5 text-gray-500"  />;


                      <ChevronDown className="w-4 h-4       />;
                      <ChevronRight className="w-4" h-4"  />;
                      <ChevronDown className="w - 5 h - 5 text - gray - 500"  />) : (";
                      <ChevronRight className="w - 5" h - 5 text - gray - 500"  />;
                      <ChevronDown className="w - 4 h - 4       />) : (";
                      <ChevronRight className="w - 4" h - 4"  />;


              <Phone className="w-4 h-4 text-cyan-400       />";
              <Mail className="w-4" h-4 text-cyan-400"  />";
          <Link href=/"";";
            <Home: class_name = "w - 5 h - 5 text - cyan - 400 />, ";
              <Phone className="w - 4 h - 4 text - cyan - 400       />";
              <Mail className="w - 4" h - 4 text - cyan - 400"  />";

          <Link href="/";
            <Home className="w - 5 h - 5 text - cyan - 400       />";

          </Link>;

              <Search className="absolute left - 3 top - 1/2 transform -translate - y-1 / 2 w - 4 h - 4 text - gray - 400" />;


                <ChevronDown className="{"w - 4" h - 4 text - gray - 400 transition - transform duration - 300 ${">;

                            <ChevronRight;


                            <ChevronRight





                                  <Link: key="{subIndex}

className="flex items-center gap-2 p-2 hover: bg-gray-800/20 rounded-lg transition-all duration-300 group"                                    <div className="w-1 && 1.5 h-1 && 1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>                                    <span className="text-gray-400" group-hover:text-cyan-300 transition-colors duration-200 text-xs">"                                      {subItem && subItem.name}                                    </span></Link>";




                                  <Link: key="{sub_index}
className="flex items - center gap - 2 p - 2 hover: bg - gray - 800 / 20 rounded - lg transition - all duration - 300 group"                                    <div className="w - 1.5 h - 1.5 bg - cyan - 400 rounded - full group - hover:scale - 150 transition - transform duration - 200"></div>                                    <span className="text - gray - 400" group - hover:text - cyan - 300 transition - colors duration - 200 text - xs">"                                      {sub_item.name}                                    </span></Link>";
                            <ChevronRight class_name = "{`w - 4" h - 4 text - gray - 500 transition - transform duration - 300 ${




                            <ChevronRightclassName = "{`w-4" h-4 text-gray-500 transition-transform duration-300 ${



                                  <Link: key="{subIndex}""
className="flex items-center gap-2 p-2 hover: bg-gray-800/20 rounded-lg transition-all duration-300 group"                                    <div className="w-1 && 1.5 h-1 && 1.5 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>                                    <span className="text-gray-400" group-hover:text-cyan-300 transition-colors duration-200 text-xs">"                                      {subItem && subItem.name}                                    </span></Link>";


                                  <Link: key="{sub_index}"";
className="flex items - center gap - 2 p - 2 hover: bg - gray - 800 / 20 rounded - lg transition - all duration - 300 group"                                    <div className="w - 1.5 h - 1.5 bg - cyan - 400 rounded - full group - hover:scale - 150 transition - transform duration - 200"></div>                                    <span className="text - gray - 400" group - hover:text - cyan - 300 transition - colors duration - 200 text - xs">"                                      {sub_item.name}                                    </span></Link>";








                <Globe className="w-5 h-5       />;


                <Mail className="w-5 h-5"  />";
                <Globe className="w - 5 h - 5       />;
                <Mail className="w - 5 h - 5"  />";






                            <ChevronRightclassName="{"w-4" h-4 text-gray-500 transition-transform duration-300 ${



                          <AnimatePresence>;
                            <ChevronRight className="{"w - 4" h - 4 text - gray - 500 transition - transform duration - 300 ${
                          <AnimatePresence>;






                          </AnimatePresence>;



              </AnimatePresence>;
className="space - y-1 ml - 6"                                {item.sub_items.map ((sub_item, sub_index) => (<Link;
className="flex items - center gap - 2 p - 2 hover: bg - gray - 800 / 20 rounded - lg transition - all duration - 300 group"                                    <div className="w - 1.5 h - 1.5 bg - cyan - 400 rounded - full group - hover:scale - 150 transition - transform duration - 200></div>                                    <span className="text - gray - 400 group - hover:text - cyan - 300 transition - colors duration - 200 text - xs">"                                      {sub_item.name}"                                    </span></Link>))}
                          </AnimatePresence>)}
              </AnimatePresence>;

              <Link;
                <ChevronRight className="w - 4 h - 4 />              </Link>"            </div>;
                <ChevronRight className="w - 4 h - 4 />              </Link>"            </div>;

              <Link href=/contact"">;
                <ChevronRight className="w - 4" h - 4"  />;
              </Link>;
export default EnhancedSidebar2025, "),          <div className="pt - 6" border - t border - gray - 800 / 50>";


                <ChevronRight className="w-4 h-4" />,";
                <ChevronRight className="w - 4 h - 4" />, ";
                <ChevronRight className="w - 4 h - 4 / />;
              <Link href=/contact"">;
                <ChevronRight className="w - 4" h - 4" />;
              </Link>;

export default EnhancedSidebar2025, "), ,,

