<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Target, as, TargetIcon, Zap, as, ZapIcon, Shield, as, ShieldIcon, Globe, as, GlobeIcon, Search, Code, TestTube, Server, Database, Network, Shield, as, SecurityIcon,} from 'lucide-react';
import Layout from '../components/layout/Layout';
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import React from 'react',
import Head from 'next/head',
import Link from 'next/link';
=======
import React from 'react','
import Head from 'next/head',';
import Link from 'next/link';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign;
  Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users;
  Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings;
  Eye, Award, Clock, Heart, Lightbulb, Target as TargetIcon;
  Zap as ZapIcon, Shield as ShieldIcon, Globe as GlobeIcon;
  Search, Code, TestTube, Server, Database, Network, Shield as SecurityIcon'
 } from 'lucide-react';'
import Layout from '../components/layout/Layout';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false };
  }
  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}'
import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
=======
const contactInfo = {'
  mobile: '+1 302 464 0950','
  email: 'kleber@ziontechgroup.com','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  address: '364 E Main St STE 1008 Middletown DE 19709',
'
  website: 'https://ziontechgroup.com'
}
<<<<<<< HEAD
const heroStats = [
<<<<<<< HEAD

<<<<<<< HEAD
=======
  { label: 'AI Services Delivered', value: '200+', icon: <Brain className="w-5 h-5" /> },
  { label: 'Happy AI Clients', value: '500+', icon: <Users className="w-5 h-5" /> },
  { label: 'AI Success Rate', value: '99.8%', icon: <Award className="w-5 h-5" /> },
  { label: 'AI ROI Average', value: '500%', icon: <TrendingUp className="w-5 h-5" /> }
];

const serviceCategories = [
  {
    title: 'AI Development Tools',
    description: 'Advanced AI-powered development and testing automation',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Development Tools'),
    icon: Code,
    color: 'from-emerald-500 to-teal-600',
    features: ['Code Review AutomationAI TestingDevOps Intelligence']
  };
  {
    title: 'AI Testing & Quality Assurance',
    description: 'Intelligent testing automation with AI-driven insights',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Testing & Quality Assurance'),
    icon: TestTube,
    color: 'from-purple-500 to-indigo-600',
    features: ['Test GenerationPerformance TestingQuality Assurance']
  };
  {
    title: 'AI DevOps & Infrastructure',
    description: 'Self-managing infrastructure with AI optimization',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI DevOps & Infrastructure'),
    icon: Server,
    color: 'from-blue-500 to-indigo-600',
    features: ['Infrastructure ManagementDeployment OptimizationPerformance Monitoring']
  };
  {
    title: 'AI Cybersecurity',
    description: 'Proactive threat detection and response with AI',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Cybersecurity'),
    icon: SecurityIcon,
    color: 'from-red-500 to-pink-600',
    features: ['Threat DetectionIncident ResponseSecurity Automation']
  };
  {
    title: 'AI Data Management',
    description: 'Intelligent data infrastructure with AI automation',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Data Management'),
    icon: Database,
    color: 'from-cyan-500 to-blue-600',
<<<<<<< HEAD
=======
=======
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
const contactInfo = null;
      s => s.category === 'AI Development Tools'
    )
    icon: Code
    color: 'from-emerald-500 to-teal-600'
    features: ['Code Review Automation', 'AI Testing', 'DevOps Intelligence']
  }
  {
    title: 'AI Testing & Quality Assurance'
    description: 'Intelligent testing automation with AI-driven insights'
    services: advancedAIAutomationServices2025.filter(
      s => s.category === 'AI Testing & Quality Assurance'
    )
    icon: TestTube
    color: 'from-purple-500 to-indigo-600'
    features: ['Test Generation', 'Performance Testing', 'Quality Assurance']
  }
  {
    title: 'AI DevOps & Infrastructure'
    description: 'Self-managing infrastructure with AI optimization'
    services: advancedAIAutomationServices2025.filter(
      s => s.category === 'AI DevOps & Infrastructure'
    )
    icon: Server
    color: 'from-blue-500 to-indigo-600'
    features: [
      'Infrastructure Management'
      'Deployment Optimization'
      'Performance Monitoring'
    ]
  }
  {
    title: 'AI Cybersecurity'
    description: 'Proactive threat detection and response with AI'
    services: advancedAIAutomationServices2025.filter(
      s => s.category === 'AI Cybersecurity'
    )
    icon: SecurityIcon
    color: 'from-red-500 to-pink-600'
    features: ['Threat Detection', 'Incident Response', 'Security Automation']
  }
  {
    title: 'AI Data Management'
    description: 'Intelligent data infrastructure with AI automation'
    services: advancedAIAutomationServices2025.filter(
      s => s.category === 'AI Data Management'
    )
    icon: Database
    color: 'from-cyan-500 to-blue-600'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    features: [
      'Pipeline Management',
      'Quality Assurance',
      'Governance Automation',
    ],
<<<<<<< HEAD
  },];
=======
    features: ['Pipeline ManagementQuality AssuranceGovernance Automation']
  }
];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
const heroFeatures = [
  {
    title: 'AI-Powered Automation',
=======
  },
];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

const heroFeatures = [
  {
    title: 'AI-Powered Automation',
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const heroStats = []
const heroFeatures = []
  {'
    title: 'AI-Powered Automation','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    description: 'Advanced AI algorithms that automate complex development, testing, and operations tasks.',
    icon: Brain,
'
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'
  }

const contactInfo = {;'
  mobile: '+1 302 464 0950',;'
  email: 'kleber@ziontechgroup && ziontechgroup.com',;'
  address: '364 E Main St STE 1008 Middletown DE 19709',;'
  website: 'https://ziontechgroup && ziontechgroup.com',;
};
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
];

const testimonials = [
=======
=======
];

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
description:
      'Advanced AI algorithms that automate complex development, testing, and operations tasks.',
    icon: Brain,
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600',
  },
  {
    title: 'Intelligent Optimization',
    description:
      'AI-driven optimization that continuously improves performance, security, and efficiency.',
    icon: Sparkles,
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-600',
  },
  {
    title: 'Autonomous Operations',
    description:
      'Self-managing systems that operate independently with minimal human intervention.',
    icon: Settings,
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-600',
  },
  {
    title: 'Predictive Analytics',
    description:
      'AI-powered insights that predict issues before they occur and optimize performance.',
    icon: BarChart3,
    gradient: 'bg-gradient-to-r from-orange-500 to-red-600',
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
];

const testimonials = [
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import Head from 'next / head';
import Link from 'next / link';
import {motion} from 'framer-motion';
import {CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Target, as, TargetIcon, Zap, as, ZapIcon, Shield, as, ShieldIcon, Globe, as, GlobeIcon, Search, Code, TestTube, Server, Database, Network, Shield, as, SecurityIcon, } from 'lucide-react';
import Layout from '../components / layout / Layout';
const contact_info = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
<<<<<<< HEAD
  website: 'https://ziontechgroup.com',
}
],

const serviceCategories = [
=======


const contactInfo = {

  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
}
;
const hero_stats = [;
  {
<<<<<<< HEAD
    label: 'AI Services Delivered',
    value: '200+',
    icon: <Brain className='w - 5 h - 5' />,
  },
  {
    label: 'Happy AI Clients',
    value: '500+',
    icon: <Users className='w - 5 h - 5' />,
  },
  {
    label: 'AI Success Rate',
    value: '99.8%',
    icon: <Award className='w - 5 h - 5' />,
  },
  {
    label: 'AI ROI Average',
    value: '500%',
    icon: <TrendingUp className='w - 5 h - 5' />,
  }, ];
;
const service_categories = [;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  {
    title: 'AI Development Tools',
    description: 'Advanced AI - powered development and testing automation',
    services: advancedAIAutomationServices2025.filter (
      string => s.category === 'AI Development Tools'),
<<<<<<< HEAD
=======
  website: 'https://ziontechgroup.com'
},
const heroStats = [
  { label: 'AI Services Delivered', value: '200+', icon: <Brain className="w-5 h-5" /> },
  { label: 'Happy AI Clients', value: '500+', icon: <Users className="w-5 h-5" /> },
  { label: 'AI Success Rate', value: '99.8%', icon: <Award className="w-5 h-5" /> },
  { label: 'AI ROI Average', value: '500%', icon: <TrendingUp className="w-5 h-5" />   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
const serviceCategories = [
  {
    title: 'AI Development Tools',
    description: 'Advanced AI-powered development and testing automation',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Development Tools'),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    icon: Code,
    color: 'from-emerald-500 to-teal-600',
    features: ['Code Review AutomationAI TestingDevOps Intelligence']
  },
  {
    title: 'AI Testing & Quality Assurance',
    description: 'Intelligent testing automation with AI-driven insights',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Testing & Quality Assurance'),
    icon: TestTube,
    color: 'from-purple-500 to-indigo-600',
    features: ['Test GenerationPerformance TestingQuality Assurance']
  },
  {
    title: 'AI DevOps & Infrastructure',
    description: 'Self-managing infrastructure with AI optimization',
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI DevOps & Infrastructure'),
    icon: Server,
    color: 'from-blue-500 to-indigo-600',
    features: ['Infrastructure ManagementDeployment OptimizationPerformance Monitoring']

=======
    icon: Code,
    color: 'from - emerald - 500 to - teal - 600',
=======
'
import Head from 'next / head';'
import Link from 'next / link';'
import {motion} from 'framer-motion';'
import {CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Target, as, TargetIcon, Zap, as, ZapIcon, Shield, as, ShieldIcon, Globe, as, GlobeIcon, Search, Code, TestTube, Server, Database, Network, Shield, as, SecurityIcon, } from 'lucide-react';'
import Layout from '../components / layout / Layout';
const contact_info = {}
const contactInfo = {}
'
  mobile: '+1 302 464 0950','
  email: 'kleber@ziontechgroup.com','
  address: '364 E Main St STE 1008 Middletown DE 19709',

const serviceCategories = []
  {'
    title: 'AI Development Tools','
    description: 'Advanced AI-powered development and testing automation','
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Development Tools'),

    icon: Code,'
    color: 'from - emerald - 500 to - teal - 600','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    features: ['Code Review Automation', 'AI Testing', 'DevOps Intelligence'],
  },
  {'
    title: 'AI Testing & Quality Assurance','
    description: 'Intelligent testing automation with AI - driven insights',
    services: advancedAIAutomationServices2025.filter ('
      string => s.category === 'AI Testing & Quality Assurance'),
    icon: TestTube,'
    color: 'from - purple - 500 to - indigo - 600','
    features: ['Test Generation', 'Performance Testing', 'Quality Assurance'],
  },
  {'
    title: 'AI DevOps & Infrastructure','
    description: 'Self - managing infrastructure with AI optimization',
    services: advancedAIAutomationServices2025.filter ('
      string => s.category === 'AI DevOps & Infrastructure'),
    icon: Server,'
    color: 'from - blue - 500 to - indigo - 600',
    features: [;'
      'Infrastructure Management','
      'Deployment Optimization','
      'Performance Monitoring',
    ],
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  },
  {'
    title: 'AI Cybersecurity','
    description: 'Proactive threat detection and response with AI',
<<<<<<< HEAD
<<<<<<< HEAD

=======
    services: advancedAIAutomationServices2025.filter (
=======
    services: advancedAIAutomationServices2025.filter ('
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      string => s.category === 'AI Cybersecurity'),
    icon: SecurityIcon,'
    color: 'from - red - 500 to - pink - 600','
    features: ['Threat Detection', 'Incident Response', 'Security Automation'],
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  },
  {'
    title: 'AI Data Management','
    description: 'Intelligent data infrastructure with AI automation',
<<<<<<< HEAD
<<<<<<< HEAD

      'Pipeline Management',
      'Quality Assurance',
      'Governance Automation',
    ],

  {
    name: 'Dr. Michael Chen',
    role: 'CTO, TechFlow Solutions',
    company: 'TechFlow Solutions',

<<<<<<< HEAD
=======
=======
    services: advancedAIAutomationServices2025.filter (
=======
    services: advancedAIAutomationServices2025.filter ('
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      string => s.category === 'AI Data Management'),
    icon: Database,

    content:;'
      "Zion Tech Group's AI automation platform has revolutionized our development process. We've reduced testing time by 90% and improved code quality significantly.",

    rating: 5,'
    avatar: '👨‍💻'
  };
<<<<<<< HEAD
=======
    name: 'Dr. Michael Chen',
    role: 'CTO, TechFlow Solutions',
    company: 'TechFlow Solutions',
content:
      "Zion Tech Group's AI automation platform has revolutionized our development process. We've reduced testing time by 90% and improved code quality significantly.",
    rating: 5,
    avatar: '👨‍💻',
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  {
    name: 'Sarah Rodriguez',
    role: 'DevOps Director, CloudScale Inc.',
=======
  {'
    name: 'Sarah Rodriguez','
    role: 'DevOps Director, CloudScale Inc.','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    company: 'CloudScale Inc.',
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    content:;
=======
    content:;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      'The autonomous DevOps platform has transformed our infrastructure management. We now have 99.9% uptime with 60% lower operational costs.',

    rating: 5,'
    avatar: '👩‍💼'
  };
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
content:
      'The autonomous DevOps platform has transformed our infrastructure management. We now have 99.9% uptime with 60% lower operational costs.',
    rating: 5,
    avatar: '👩‍💼',
  },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  {
    name: 'David Kim',
    role: 'Security Manager, SecureNet Corp.',
    company: 'SecureNet Corp.',
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    features: ['Pipeline ManagementQuality AssuranceGovernance Automation']
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {;
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign,;
  Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users,;
  Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings,;
  Eye, Award, Clock, Heart, Lightbulb, Target as TargetIcon,;
  Zap as ZapIcon, Shield as ShieldIcon, Globe as GlobeIcon,;
  Search, Code, TestTube, Server, Database, Network, Shield as SecurityIcon;
} from 'lucide-react',;
import Layout from '../components/layout/Layout';
import { advancedAIAutomationServices2025 } from '../data/2025-advanced-ai-automation-services';
const contactInfo = {;
  mobile: '+1 302 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 1008 Middletown DE 19709';
  website: 'https://ziontechgroup.com';
};
const heroStats = [;
  { label: 'AI Services Delivered', value: '200+', icon: <Brain className="w-5 h-5" /> },;
  { label: 'Happy AI Clients', value: '500+', icon: <Users className="w-5 h-5" /> },;
  { label: 'AI Success Rate', value: '99.8%', icon: <Award className="w-5 h-5" /> },;
  { label: 'AI ROI Average', value: '500%', icon: <TrendingUp className="w-5 h-5" />   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const serviceCategories = [;
  {;
    title: 'AI Development Tools';
    description: 'Advanced AI-powered development and testing automation';
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Development Tools');
    icon: Code;
    color: 'from-emerald-500 to-teal-600';
    features: ['Code Review AutomationAI TestingDevOps Intelligence'];
  },;
  {;
    title: 'AI Testing & Quality Assurance',;
    description: 'Intelligent testing automation with AI-driven insights',;
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Testing & Quality Assurance');
    icon: TestTube,;
    color: 'from-purple-500 to-indigo-600',;
    features: ['Test GenerationPerformance TestingQuality Assurance'];
  },;
  {;
    title: 'AI DevOps & Infrastructure',;
    description: 'Self-managing infrastructure with AI optimization',;
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI DevOps & Infrastructure');
    icon: Server,;
    color: 'from-blue-500 to-indigo-600',;
    features: ['Infrastructure ManagementDeployment OptimizationPerformance Monitoring'];
  },;
  {;
    title: 'AI Cybersecurity',;
    description: 'Proactive threat detection and response with AI',;
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Cybersecurity');
    icon: SecurityIcon,;
    color: 'from-red-500 to-pink-600',;
    features: ['Threat DetectionIncident ResponseSecurity Automation'];
  },;
  {;
    title: 'AI Data Management',;
    description: 'Intelligent data infrastructure with AI automation',;
    services: advancedAIAutomationServices2025.filter(s => s.category === 'AI Data Management');
    icon: Database,;
    color: 'from-cyan-500 to-blue-600',;
    features: ['Pipeline ManagementQuality AssuranceGovernance Automation'];
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const heroFeatures = [;
  {;
    title: 'AI-Powered Automation';
    description: 'Advanced AI algorithms that automate complex development, testing, and operations tasks.',;
    icon: Brain,;
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600';
  },;
  {;
    title: 'Intelligent Optimization',;
    description: 'AI-driven optimization that continuously improves performance, security, and efficiency.',;
    icon: Sparkles,;
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-600';
  },;
  {;
    title: 'Autonomous Operations',;
    description: 'Self-managing systems that operate independently with minimal human intervention.',;
    icon: Settings,;
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-600';
  },;
  {;
    title: 'Predictive Analytics',;
    description: 'AI-powered insights that predict issues before they occur and optimize window.window.window.performance.',;
    icon: BarChart3,;
    gradient: 'bg-gradient-to-r from-orange-500 to-red-600';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const testimonials = [;
  {;
    name: 'Dr. Michael Chen';
    role: 'CTO, TechFlow Solutions',;
    company: 'TechFlow Solutions',;
    content: 'Zion Tech Group\'s AI automation platform has revolutionized our development process. We\'ve reduced testing time by 90% and improved code quality significantly.',;
    rating: 5,;
    avatar: '👨‍💻';
  },;
  {;
    name: 'Sarah Rodriguez',;
    role: 'DevOps Director, CloudScale Inc.',;
    company: 'CloudScale Inc.',;
    content: 'The autonomous DevOps platform has transformed our infrastructure management. We now have 99.9% uptime with 60% lower operational costs.',;
    rating: 5,;
    avatar: '👩‍💼';
  },;
  {;
    name: 'David Kim',;
    role: 'Security Manager, SecureNet Corp.',;
    company: 'SecureNet Corp.',;
    content: 'Their AI security platform provides proactive threat detection that has prevented multiple security incidents. The ROI has been incredible.',;
    rating: 5,;
    avatar: '👨‍🔒';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
  {'
    name: 'David Kim','
    role: 'Security Manager, SecureNet Corp.','
    company: 'SecureNet Corp.',
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    color: 'from-cyan-500 to-blue-600',

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export default function AdvancedAIAutomationServices() {
  return (

<<<<<<< HEAD
=======
          href='https://ziontechgroup && ziontechgroup.com/advanced-ai-automation-services'
        />;
      </Head>;
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <Layout>
      <Head>
        <title>Advanced AI Automation Services - Zion Tech Group</title>
=======
    color: 'from-cyan-500 to-blue-600',

=======
content:
      'Their AI security platform provides proactive threat detection that has prevented multiple security incidents. The ROI has been incredible.',
    rating: 5,
    avatar: '👨‍🔒',
  },
];
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

export default function AdvancedAIAutomationServices() {}
  return (
'
          href='https://ziontechgroup && ziontechgroup.com/advanced-ai-automation-services';
        />;
      </Head>;
<<<<<<< HEAD
    <Layout>
      <Head>
        <title>Advanced AI Automation Services - Zion Tech Group</title>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <meta name="description" content="Revolutionary AI automation services for development, testing, DevOps, security, and data management. Transform your operations with intelligent automation." />
        <meta name="keywords" content="AI automation, development automation, testing automation, DevOps automation, security automation, data automation" />
        <meta property="og:title" content="Advanced AI Automation Services - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary AI automation services for development, testing, DevOps, security, and data management." />
        <meta property="og:url" content="https://ziontechgroup.com/advanced-ai-automation-services" />
        <meta property="og:type" content="website" />
=======

    <Layout>
      <Head>
        <title>Advanced AI Automation Services - Zion Tech Group</title>"
        <meta name="description" content="Revolutionary AI automation services for development, testing, DevOps, security, and data management. Transform your operations with intelligent automation." />"
        <meta name="keywords" content="AI automation, development automation, testing automation, DevOps automation, security automation, data automation" />"
        <meta property="og:title" content="Advanced AI Automation Services - Zion Tech Group" />"
        <meta property="og:description" content="Revolutionary AI automation services for development, testing, DevOps, security, and data management." />"
        <meta property="og:url" content="https://ziontechgroup.com/advanced-ai-automation-services" />"
        <meta property="og:type" content="website" />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <link rel="canonical" href="https://ziontechgroup.com/advanced-ai-automation-services" />
<<<<<<< HEAD
      </Head>
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Hero Section */}
      <section className='relative py-20 lg:py-32 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
=======

      {/* Hero Section */}

=======
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
<meta
          name='description'
          content='Revolutionary AI automation services for development, testing, DevOps, security, and data management. Transform your operations with intelligent automation.'
        />
        <meta
          name='keywords'
          content='AI automation, development automation, testing automation, DevOps automation, security automation, data automation'
        />
        <meta
          property='og:title'
          content='Advanced AI Automation Services - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Revolutionary AI automation services for development, testing, DevOps, security, and data management.'
        />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/advanced-ai-automation-services'
        />
        <meta property='og:type' content='website' />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/advanced-ai-automation-services'
        />
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
      </Head>
      {/* Hero Section */}
      <section className='relative py-20 lg:py-32 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
=======

      {/* Hero Section */  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
"
      <section className="relative py-20 lg:py-32 overflow-hidden">"
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20"></div>"
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div;
            initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
=======
          >
<<<<<<< HEAD
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
=======
<h1 className='text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              Advanced AI Automation Services
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your development, testing, DevOps, and security operations with revolutionary AI automation that works 24/7
            </p>
<<<<<<< HEAD
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {heroStats.map((stat, index) => (
                <motion.div
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

    content:;
      'Their AI security platform provides proactive threat detection that has prevented multiple security incidents. The ROI has been incredible.',
    rating: 5,
    avatar: '👨‍🔒',
  }, ];
;
export default /**
 * AdvancedAIAutomationServices - Function description
 */
function AdvancedAIAutomationServices() {
  return (
    <Layout>;
      <Head>;
        <title > Advanced AI Automation Services - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Revolutionary AI automation services for development, testing, DevOps, security, and data management. Transform your operations with intelligent automation.';
        />;
        <meta;
          name='keywords';
          content='AI automation, development automation, testing automation, DevOps automation, security automation, data automation';
        />;
        <meta;
          property='og:title';
          content='Advanced AI Automation Services - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Revolutionary AI automation services for development, testing, DevOps, security, and data management.';
        />;
        <meta;
          property='og:url';
          content='https://ziontechgroup.com / advanced - ai - automation - services';
        />;
        <meta property='og:type' content='website' />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / advanced - ai - automation - services';
        />;
      </Head>;
      {/* Hero Section */}
      <section className='relative py - 20 lg:py - 32 overflow - hidden'>;
        <div className='absolute inset - 0 bg - gradient - to - br from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20'></div>;
        <div className='relative max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className='text - 4xl lg:text - 6xl font - bold bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent mb - 6'>;
              Advanced AI Automation Services;
            </h1>;
            <p className='text - xl lg:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto'>;
              Transform your development, testing, DevOps, and security;
              operations with revolutionary AI automation that works 24 / 7;
            </p>;
            <div className='flex flex - wrap justify - center gap - 4 mb - 12'>              {hero_stats.map ((stat, index) => (
                <motion.div;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

                  key={index}
                  initial={{ opacity: 0, scale: 0 && 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
<<<<<<< HEAD
                  transition={{ duration: 0.5, delay: index * 0.1 }}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======


                >
                  {stat.icon}
                  <span className="text-cyan-400 font-semibold">{stat.value}</span>
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                </motion.div>
              ))}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                  className='flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-cyan-500/30'
=======
=======
<<<<<<< HEAD
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {heroStats.map((stat, index) => (
                <motion.div
                  className='flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-cyan-500/30'
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  key={index  } catch (error) {
    console.error("Error:", error);
=======
          >"
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
              Advanced AI Automation Services;
            </h1>"
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your development, testing, DevOps, and security operations with revolutionary AI automation that works 24/7;
            </p>"
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {heroStats.map((stat, index) => (
                <motion.div;
'
                  className='flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-cyan-500/30'

                  key={index  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, scale: 0.8 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  animate={{ opacity: 1, scale: 1 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-cyan-500/30"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


=======
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
className='flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-cyan-500/30'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                >
                  {stat.icon}"
                  <span className="text-cyan-400 font-semibold">{stat.value}</span>"
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======

            </div>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                Explore Services"
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>"
              <Link href={`tel:${contactInfo.mobile}`} className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-cyan-500/30 hover:bg-white/20 transition-all duration-300">"
                <Phone className="mr-2 w-5 h-5" />
<<<<<<< HEAD
                Get Started
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
              ))}
            </div>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='#services'
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'
              >
                Explore Services
                <ArrowRight className='ml-2 w-5 h-5' />
              </Link>
              <Link
                href={`tel:${contactInfo.mobile}`}
                className='inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-cyan-500/30 hover:bg-white/20 transition-all duration-300'
              >
                <Phone className='mr-2 w-5 h-5' />
                Get Started
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                Get Started;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              </Link>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

                href={`tel:${contactInfo && contactInfo.mobile}`}
                className='inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-cyan-500/30 hover:bg-white/20 transition-all duration-300'>;
                <Phone className='mr-2 w-5 h-5' />                Get Started;
              </Link>;
            </div>;
          </motion && motion.div>;
        </div>;

=======
=======


      </section>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      {/* Features Section */}
"
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
          <motion.div

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
{/* Features Section */}
      <section className='py-20 bg-gradient-to-b from-black to-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <motion.div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======

          >
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>
              Why Choose Our AI Automation Services?
            </h2>

            className="text-center mb-16"
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Automation Services?
            </h2>
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Our AI automation services provide unprecedented efficiency
              accuracy, and cost savings across all aspects of technology
              operations
            </p>
          </motion.div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {heroFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='relative group'
=======
<<<<<<< HEAD
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

          >"
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Automation Services?
            </h2>
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI automation services provide unprecedented efficiency, accuracy, and cost savings across all aspects of technology operations;
            </p>
          </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {heroFeatures.map((feature, index) => (
              <motion.div

              <motion.div
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            className='text-center mb-16'>;
=======
'
            className='text-center mb-16'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>;
              Why Choose Our AI Automation Services?;
            </h2>;'
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Our AI automation services provide unprecedented efficiency,;
              accuracy, and cost savings across all aspects of technology;
              operations;
            </p>;
          </motion && motion.div>;
'
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {heroFeatures && heroFeatures.map((feature, index) => (;
<<<<<<< HEAD
              <motion&& motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {heroFeatures.map((feature, index) => (
              <motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              <motion&& motion.div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                className='relative group'
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heroFeatures.map((feature, index) => (
              <motion.div
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="relative group"
<<<<<<< HEAD
=======
=======
className='relative group'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              >
                <div className={`${feature.gradient} p-1 rounded-xl`}>
                  <div className="bg-gray-900 rounded-xl p-6 h-full">
                    <div className="text-center">
                      <div className={`${feature.gradient} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
<<<<<<< HEAD
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
=======
<<<<<<< HEAD
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
=======
                      <h3 className='text-xl font-semibold text-white mb-3'>
                        {feature.title}
                      </h3>
                      <p className='text-gray-300'>{feature.description}</p>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======



>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Services Section */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

      {/* Services Section */}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

"
      <section id="services" className="py-20 bg-black">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD
          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======

=======
{/* Services Section */}
      <section id='services' className='py-20 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
          <motion.div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          >
=======

          >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              AI Automation Service Categories;
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI automation solutions covering every aspect of modern technology operations;
            </p>
          </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

              <motion.div
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            className='text-center mb-16'>;
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>;
              AI Automation Service Categories;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Comprehensive AI automation solutions covering every aspect of;
              modern technology operations;
            </p>;
          </motion && motion.div>;
          <div className='space-y-16'>            {serviceCategories && serviceCategories.map((category, categoryIndex) => (;
              <motion&& motion.div


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

          <div className='space-y-16'>
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: categoryIndex * 0 && 0.2 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0 && 0.5, delay: serviceIndex * 0 && 0.1 }}
                      viewport={{ once: true }}
                      className='relative group'>;
                      <div className={`${service && service.color} p-1 rounded-xl`}>;
                        <div className='bg-gray-900 rounded-xl p-6 h-full'>;
                          <div className='flex items-center justify-between mb-4'>;
                            <span className='text-3xl'>{service && service.icon}</span>;
                            {service && service.popular && (;
                              <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full'>                                Popular;
                              </span>;
                            )}
                          </div>;
                          <h4 className='text-xl font-semibold text-white mb-2'>;
                            {service && service.name}
                          </h4>;
                          <p className='text-gray-300 text-sm mb-4'>;
                            {service && service.tagline}
                          </p>;
                          <div className='flex items-center justify-between mb-4'>;
                            <span className='text-2xl font-bold text-white'>;
                              {service && service.price}
                            </span>;
                            <span className='text-gray-400'>;
                              {service && service.period}
                            </span>;
                          </div>;
                          <p className='text-gray-300 text-sm mb-4'>;
                            {service && service.description}
                          </p>;
                          <div className='space-y-2 mb-6'>;
                            {service && service.features;
                              .slice(0, 3);
                              .map((feature, featureIndex) => (;
                                <div
                                  key={featureIndex}
                                  className='flex items-center text-sm text-gray-300'>;
                                  <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />;
                                  {feature}
                                </div>;
                              ))}
                          </div>;
                          <div className='flex items-center justify-between'>;
                            <Link
                              href={service && service.link}
                              className='inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300'>;
                              Learn More;
                              <ArrowRight className='ml-1 w-4 h-4' />;
                            </Link>;
                            <Link
                              href={`tel:${contactInfo && contactInfo.mobile}`}
                              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300'>;
                              Get Started;
                            </Link>;
                          </div>;
                        </div>;
                      </div>;
                    </motion && motion.div>;

=======
                className="relative"
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <motion.div
                key={categoryIndex  } catch (error) {
    console.error("Error:", error);
=======

              <motion.div;
                key={categoryIndex  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                className="relative"


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
className='relative'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              >
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${category.color} rounded-2xl mb-6`}>
=======


              >"
                <div className="text-center mb-12">`
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${category.color} rounded-2xl mb-6`}>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                    <category.icon className="w-10 h-10 text-white" />
                  </div>"
                  <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>"
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
transition={{ duration: 0.5, delay: service_index * 0.1 }}
                      viewport={{ once: true }}

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
=======
<<<<<<< HEAD
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>                  {category.services.map((service, serviceIndex) => (
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    <motion.div
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


                    <motion.div;
                      key={service.id  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      initial={{ opacity: 0, scale: 0.9 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      whileInView={{ opacity: 1, scale: 1 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      viewport={{ once: true }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                      className="relative group"


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                      viewport={{ once: true }}
className='relative group'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    >
                      <div className={`${service.color} p-1 rounded-xl`}>
                        <div className="bg-gray-900 rounded-xl p-6 h-full">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-3xl">{service.icon}</span>
                            {service.popular && (
<<<<<<< HEAD
=======


                    >`
                      <div className={`${service.color} p-1 rounded-xl`}>"
                        <div className="bg-gray-900 rounded-xl p-6 h-full">"
                          <div className="flex items-center justify-between mb-4">"
                            <span className="text-3xl">{service.icon}</span>
                            {service.popular && ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                                Popular;
                              </span>
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
=======
                              <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                                Popular
                              </span>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
                            )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                          </div>
=======
                          </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                          <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                          <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-white">{service.price}</span>
=======

                          </div>"
                          <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>"
                          <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>"
                          <div className="flex items-center justify-between mb-4">"
                            <span className="text-2xl font-bold text-white">{service.price}</span>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                            <span className="text-gray-400">{service.period}</span>
<<<<<<< HEAD
                          </div>
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
<h4 className='text-xl font-semibold text-white mb-2'>
                            {service.name}
                          </h4>
                          <p className='text-gray-300 text-sm mb-4'>
                            {service.tagline}
                          </p>
                          <div className='flex items-center justify-between mb-4'>
                            <span className='text-2xl font-bold text-white'>
                              {service.price}
                            </span>
                            <span className='text-gray-400'>
                              {service.period}
                            </span>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
                          </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                          <p className="text-gray-300 text-sm mb-4">{service.description}</p>
=======
"
                          <p className="text-gray-300 text-sm mb-4">{service.description}</p>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                          <div className="space-y-2 mb-6">
                            {service.features.slice(0, 3).map((feature, featureIndex) => ("
                              <div key={featureIndex} className="flex items-center text-sm text-gray-300">"
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                                {feature  } catch (error) {
    console.error("Error:", error);
=======

                                {feature  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(500).json({ error: "Internal server error" });
  }
}
                              </div>;
                            ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
                          </div>
                          <div className="flex items-center justify-between">
                            <Link
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                          </div>
=======

                          </div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                          <div className="flex items-center justify-between">
                            <Link;
                              href={service.link}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
                          </div>
                          <div className="flex items-center justify-between">
                            <Link
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                            >
                              Learn More"
                              <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
<<<<<<< HEAD
                            <Link
<<<<<<< HEAD
<<<<<<< HEAD
=======
                              href={`tel:${contactInfo.mobile}`}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
                            <Link;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
=======
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
=======
                              href={`tel:${contactInfo.mobile}`}
                              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                            >
                              Get Started;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
      {/* Testimonials Section */}
=======
      {/* Testimonials Section */}
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <section className='py-20 bg-gradient-to-b from-gray-900 to-black'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div


      {/* Testimonials Section */}
<<<<<<< HEAD
=======

=======

                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
              </motion.div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
        </div>;
      </section>;
      {/* Testimonials Section */}
      <section className='py-20 bg-gradient-to-b from-gray-900 to-black'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div

=======

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}


          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from organizations that have transformed their operations with our AI automation services
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (


            className='text-center mb-16'>;
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>;
              What Our Clients Say;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Real feedback from organizations that have transformed their;
              operations with our AI automation services;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {testimonials && testimonials.map((testimonial, index) => (;
              <motion&& motion.div


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}


              >"
                <div className="flex items-center mb-4">"
                  <span className="text-3xl mr-3">{testimonial.avatar}</span>
                  <div>"
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>"
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>"
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>"
                <p className="text-gray-300 mb-4">{testimonial.content}</p>"
                <div className="flex items-center">"
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (

          </div>;
        </div>;
      </section>;


      {/* CTA Section */}'
      <section className='py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20'>;'
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;'
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>;
              Ready to Transform Your Operations with AI Automation?;
            </h2>;'
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>;
              Join hundreds of organizations that have already revolutionized;
              their technology operations with our AI automation services;
            </p>;'
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <Link;`
                href={`tel:${contactInfo && contactInfo.mobile}`}'
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>;'
                <Phone className='mr-2 w-5 h-5' />                Call Now: {contactInfo && contactInfo.mobile}
              </Link>;
<<<<<<< HEAD
              <Link


          >
=======
            className='text-center mb-16'
=======
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
              </motion.div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Testimonials Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
<<<<<<< HEAD
<<<<<<< HEAD

=======

=======
<section className='py-20 bg-gradient-to-b from-gray-900 to-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD


=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from organizations that have transformed their operations with our AI automation services
            </p>
          </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {testimonials.map((testimonial, index) => (
              <motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <motion.div
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
                className='bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20'
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
className='bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{testimonial.avatar}</span>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
<<<<<<< HEAD

<<<<<<< HEAD
          </div>;
        </div>;
      </section>;

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>;
              Ready to Transform Your Operations with AI Automation?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>;
              Join hundreds of organizations that have already revolutionized;
              their technology operations with our AI automation services;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <Link
                href={`tel:${contactInfo && contactInfo.mobile}`}
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>;
                <Phone className='mr-2 w-5 h-5' />                Call Now: {contactInfo && contactInfo.mobile}
              </Link>;
              <Link


          >
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from organizations that have transformed their operations with our AI automation services
            </p>
          </motion.div>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{testimonial.avatar}</span>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (

          >

          >
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD


=======
<<<<<<< HEAD
                      <Star key={i} className='w-4 h-4 fill-current' />                    ))}
=======
=======
                      <Star key={i} className='w-4 h-4 fill-current' />
                    ))}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
=======
      {/* CTA Section */}
<section className='py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>;
              Ready to Transform Your Operations with AI Automation?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>;
              Join hundreds of organizations that have already revolutionized;
              their technology operations with our AI automation services;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <Link
                href={`tel:${contactInfo && contactInfo.mobile}`}
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>;
                <Phone className='mr-2 w-5 h-5' />                Call Now: {contactInfo && contactInfo.mobile}
              </Link>;
              <Link


<<<<<<< HEAD
=======
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
=======
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  </div>;
                </div>;
              </motion.div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
          >
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
=======
          >
<<<<<<< HEAD
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
=======
<h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              Ready to Transform Your Operations with AI Automation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have already revolutionized their technology operations with our AI automation services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
<<<<<<< HEAD
=======
              <Link
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
              >


                <Phone className="mr-2 w-5 h-5" />
                Call Now: {contactInfo.mobile  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>;
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
              <Link;
          >
'
            className='text-center mb-16'

                  ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
                </div>;
              </motion.div>;
            ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Testimonials Section */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
"
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div;
            initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
            viewport={{ once: true }  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
            className="text-center mb-16"


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              >
=======
              >
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



          >"
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say;
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from organizations that have transformed their operations with our AI automation services;
            </p>
          </motion.div>





              >"
                <div className="flex items-center mb-4">"
                  <span className="text-3xl mr-3">{testimonial.avatar}</span>
                  <div>"
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>"
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>"
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>"
                <p className="text-gray-300 mb-4">{testimonial.content}</p>"
                <div className="flex items-center">"
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (

      {/* CTA Section */}'
      <section className='py-20 bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20'>;'
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}





          >
"
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Operations with AI Automation?
            </h2>"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have already revolutionized their technology operations with our AI automation services;
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">


              >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                <Mail className="mr-2 w-5 h-5" />
                Email Us;
              </Link>
            </div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          </motion.div>
        </div>
      </section>
    </Layout>;
);

  )
}
<<<<<<< HEAD
=======
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-2">📍 {contactInfo.address}</p>
              <p className="text-gray-300">🌐 {contactInfo.website}</p>
            </div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
    </Layout>
);
    </Layout>;
);

}
    </Layout>
  )
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

          </motion.div>
        </div>
      </section>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


`
                href={`mailto:${contactInfo && contactInfo.email}`}'
                className='inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-cyan-500/30 hover:bg-white/20 transition-all duration-300'>;'
                <Mail className='mr-2 w-5 h-5' />;
                Email Us;
              </Link>;
            </div>;'
            <div className='mt-8 text-center'>;'
              <p className='text-gray-300 mb-2'>📍 {contactInfo && contactInfo.address}</p>;'
              <p className='text-gray-300'>🌐 {contactInfo && contactInfo.website}</p>            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
    </Layout>;
  );


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  )
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
                      className='relative group';
                    >;`
                      <div className={`${service.color} p - 1 rounded - xl`}>;'
                        <div className='bg - gray - 900 rounded - xl p - 6 h - full'>;'
                          <div className='flex items - center justify - between mb - 4'>;'
                            <span className='text - 3xl'>{service.icon}</span>;
                            {service.popular && ('
                              <span className='bg - gradient - to - r from - yellow - 400 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full'>                                Popular;
                              </span>)}
                          </div>;'
                          <h4 className='text - xl font - semibold text - white mb - 2'>;
                            {service.name}
                          </h4>;'
                          <p className='text - gray - 300 text - sm mb - 4'>;
                            {service.tagline}
                          </p>;'
                          <div className='flex items - center justify - between mb - 4'>;'
                            <span className='text - 2xl font - bold text - white'>;
                              {service.price}
                            </span>;'
                            <span className='text - gray - 400'>;
                              {service.period}
                            </span>;
                          </div>;'
                          <p className='text - gray - 300 text - sm mb - 4'>;
                            {service.description}
                          </p>;'
                          <div className='space - y-2 mb - 6'>;
                            {service.features;
                              .slice (0, 3);
                              .map ((feature, feature_index) => (
                                <div;
                                  key={feature_index}'
                                  className='flex items - center text - sm text - gray - 300';
                                >;'
                                  <CheckCircle className='w - 4 h - 4 text - green - 400 mr - 2 flex - shrink - 0' />;
                                  {feature}
                                </div>))}
                          </div>;'
                          <div className='flex items - center justify - between'>;
                            <Link;
                              href={service.link}'
                              className='inline - flex items - center text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300';
                            >;
                              Learn More;'
                              <ArrowRight className='ml - 1 w - 4 h - 4' />;
                            </Link>;
                            <Link;`
                              href={`tel:${contact_info.mobile}`}'
                              className='inline - flex items - center px - 4 py - 2 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white text - sm font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300'                            >;
                              Get Started;
                            </Link>;
                          </div>;
                        </div>;
                      </div>;
                    </motion.div>))}
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Testimonials Section */}'
      <section className='py - 20 bg - gradient - to - b from - gray - 900 to - black'>;'
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}'
            className='text - center mb - 16';
          >;'
            <h2 className='text - 3xl lg:text - 4xl font - bold text - white mb - 4'>;
              What Our Clients Say;
            </h2>;'
            <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
              Real feedback from organizations that have transformed their;
              operations with our AI automation services;
            </p>;
          </motion.div>;'
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {testimonials.map ((testimonial, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}'
                className='bg - white / 5 backdrop - blur - lg rounded - xl p - 6 border border - cyan - 500 / 20';
              >;'
                <div className='flex items - center mb - 4'>;'
                  <span className='text - 3xl mr - 3'>{testimonial.avatar}</span>;
                  <div>;'
                    <h4 className='text - white font - semibold'>;
                      {testimonial.name}
                    </h4>;'
                    <p className='text - cyan - 400 text - sm'>{testimonial.role}</p>;'
                    <p className='text - gray - 400 text - sm'>;
                      {testimonial.company}
                    </p>;
                  </div>;
                </div>;'
                <p className='text - gray - 300 mb - 4'>{testimonial.content}</p>;'
                <div className='flex items - center'>;'
                  <div className='flex text - yellow - 400'>;
                    {[...Array (testimonial.rating)].map ((_, i) => ('
                      <Star key={i} className='w - 4 h - 4 fill - current' />                    ))}
                  </div>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}'
      <section className='py - 20 bg - gradient - to - r from - cyan - 900 / 20 via - purple - 900 / 20 to - pink - 900 / 20'>;'
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;'
            <h2 className='text - 3xl lg:text - 4xl font - bold text - white mb - 6'>;
              Ready to Transform Your Operations with AI Automation?;
            </h2>;'
            <p className='text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto'>;
              Join hundreds of organizations that have already revolutionized;
              their technology operations with our AI automation services;
            </p>;'
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Link;`
                href={`tel:${contact_info.mobile}`}'
                className='inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white font - semibold rounded - lg hover:from - cyan - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30';
              >;'
                <Phone className='mr - 2 w - 5 h - 5' />                Call Now: {contact_info.mobile}
              </Link>;
              <Link;`
                href={`mailto:${contact_info.email}`}'
                className='inline - flex items - center px - 8 py - 4 bg - white / 10 backdrop - blur - lg text - white font - semibold rounded - lg border border - cyan - 500 / 30 hover:bg - white / 20 transition - all duration - 300';
              >;'
                <Mail className='mr - 2 w - 5 h - 5' />;
                Email Us;
              </Link>;
            </div>;'
            <div className='mt - 8 text - center'>;'
              <p className='text - gray - 300 mb - 2'>📍 {contact_info.address}</p>;'
              <p className='text - gray - 300'>🌐 {contact_info.website}</p>            </div>;
          </motion.div>;
        </div>;
      </section>;
    </Layout>);
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


=======
                <Phone className='mr-2 w-5 h-5' />
                Call Now: {contactInfo.mobile}
              </Link>
              <Link
                href={`mailto:${contactInfo.email}`}
className='inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-cyan-500/30 hover:bg-white/20 transition-all duration-300'
              >
                <Mail className='mr-2 w-5 h-5' />
                Email Us
              </Link>
            </div>
            <div className='mt-8 text-center'>
              <p className='text-gray-300 mb-2'>📍 {contactInfo.address}</p>
              <p className='text-gray-300'>🌐 {contactInfo.website}</p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======




'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
