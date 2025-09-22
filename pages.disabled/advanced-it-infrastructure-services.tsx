<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import Head from 'next/head';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Target, as, TargetIcon, Zap, as, ZapIcon, Shield, as, ShieldIcon, Globe, as, GlobeIcon, Search, Code, TestTube, Server, Database, Network, Shield, as, SecurityIcon, Wifi, Building, Cpu, as, CpuIcon,} from 'lucide-react';
import React from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion } from 'framer-motion';
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

import Link from 'next/link';
import { motion } from 'framer-motion';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign;
  Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users;
  Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings;
  Eye, Award, Clock, Heart, Lightbulb, Target as TargetIcon;
  Zap as ZapIcon, Shield as ShieldIcon, Globe as GlobeIcon;
  Search, Code, TestTube, Server, Database, Network, Shield as SecurityIcon;
  Wifi, Building, Cpu as CpuIcon
 } from 'lucide-react';
import Layout from '../components/layout/Layout';
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx

<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx


class ErrorBoundary extends React.Component {}
  constructor(props) {}
    super(props);
    this.state = { hasError: false };
  }
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
<<<<<<< HEAD
<<<<<<< HEAD
    
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
    
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  render() {}
    if (this.state.hasError) {}
      return <div>Something went wrong.</div>;
    }

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
    return this.props.children;
  }
}
import React from 'react';

<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Layout from '../components/layout/Layout';

import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services';
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
  address: '364 E Main St STE 1008 Middletown DE 19709',
'
  website: 'https://ziontechgroup.com'
}
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
const heroStats = [
<<<<<<< HEAD
<<<<<<< HEAD
=======

  { label: 'Infrastructure Projects', value: '150+', icon: <Server className="w-5 h-5" /> },
  { label: 'Enterprise Clients', value: '300+', icon: <Building className="w-5 h-5" /> },
  { label: 'Uptime Guarantee', value: '99.99%', icon: <Award className="w-5 h-5" /> },
  { label: 'Cost Reduction', value: '60%', icon: <TrendingUp className="w-5 h-5" /> }
];

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
const serviceCategories = [
  {
    title: 'Quantum Cloud Computing',
    description: 'Next-generation cloud infrastructure with quantum processing capabilities',
=======
const heroStats = []
const serviceCategories = []
  {'
    title: 'Quantum Cloud Computing','
    description: 'Next-generation cloud infrastructure with quantum processing capabilities','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Quantum Cloud Computing'),
    icon: Cloud,'
    color: 'from-indigo-500 to-purple-600','
    features: ['Quantum ProcessingHybrid ComputingAI Acceleration']
  };
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services';
const contactInfo = null;
    services: advancedITInfrastructureServices2025.filter(
      s => s.category === 'Quantum Cloud Computing'
    )
    icon: Cloud
    color: 'from-indigo-500 to-purple-600'
    features: ['Quantum Processing', 'Hybrid Computing', 'AI Acceleration']
  }
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  {
    title: 'Edge Computing & IoT',
    description: 'Autonomous edge infrastructure with intelligent optimization',
=======
  {'
    title: 'Edge Computing & IoT','
    description: 'Autonomous edge infrastructure with intelligent optimization','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Edge Computing & IoT'),
    icon: Wifi,'
    color: 'from-green-500 to-emerald-600','
    features: ['Edge ProcessingIoT Orchestration5G Optimization']
  };
  {'
    title: 'Cybersecurity','
    description: 'Comprehensive security framework with continuous verification','
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Cybersecurity'),
    icon: SecurityIcon,'
    color: 'from-red-500 to-orange-600','
    features: ['Zero TrustThreat DetectionCompliance Automation']
  };
  {'
    title: 'Data Center Infrastructure','
    description: 'Self-managing data center infrastructure with AI optimization','
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Data Center Infrastructure'),
    icon: Building,'
    color: 'from-blue-500 to-cyan-600','
    features: ['AI ManagementPredictive MaintenanceCost Optimization']
  };
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
  {
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    title: 'Quantum Networking',
    description: 'Next-generation networking with quantum encryption and optimization',
=======
  {'
    title: 'Quantum Networking','
    description: 'Next-generation networking with quantum encryption and optimization','
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Quantum Networking'),
    icon: Network,'
    color: 'from-purple-500 to-pink-600',
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
    features: [
      'Quantum Encryption',
      'Network Optimization',
      'Security Monitoring',
    ],
  },];
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

const heroFeatures = [
  {
    title: 'Quantum Computing'
    description:
      'Revolutionary quantum processing capabilities that provide 1000x performance for specific workloads.'
    icon: Atom
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'
  }
<<<<<<< HEAD
=======
    features: ['Quantum EncryptionNetwork OptimizationSecurity Monitoring']
  }
];
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

const heroFeatures = [
  {
    title: 'Quantum Computing',
    description: 'Revolutionary quantum processing capabilities that provide 1000x performance for specific workloads.',
    icon: Atom,

    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600'
  }

const contactInfo = {;
  mobile: '+1 302 464 0950',;
  email: 'kleber@ziontechgroup && ziontechgroup.com',;
  address: '364 E Main St STE 1008 Middletown DE 19709',;
  website: 'https://ziontechgroup && ziontechgroup.com',;
};
=======
];

=======
import Head from 'next / head';
import Link from 'next / link';
import {motion} from 'framer-motion';
import {CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Target, as, TargetIcon, Zap, as, ZapIcon, Shield, as, ShieldIcon, Globe, as, GlobeIcon, Search, Code, TestTube, Server, Database, Network, Shield, as, SecurityIcon, Wifi, Building, Cpu, as, CpuIcon, } from 'lucide-react';
import Layout from '../components / layout / Layout';
const contact_info = {
=======

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},
const heroStats = [
  { label: 'Infrastructure Projects', value: '150+', icon: <Server className="w-5 h-5" /> },
  { label: 'Enterprise Clients', value: '300+', icon: <Building className="w-5 h-5" /> },
  { label: 'Uptime Guarantee', value: '99.99%', icon: <Award className="w-5 h-5" /> },
  { label: 'Cost Reduction', value: '60%', icon: <TrendingUp className="w-5 h-5" />   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],
<<<<<<< HEAD

=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const serviceCategories = [
  {
    title: 'Quantum Cloud Computing',
    description: 'Next-generation cloud infrastructure with quantum processing capabilities',
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Quantum Cloud Computing'),
    icon: Cloud,
    color: 'from-indigo-500 to-purple-600',
    features: ['Quantum ProcessingHybrid ComputingAI Acceleration']

=======

const serviceCategories = []
  {'
    title: 'Quantum Cloud Computing','
    description: 'Next-generation cloud infrastructure with quantum processing capabilities','
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Quantum Cloud Computing'),
    icon: Cloud,'
    color: 'from - indigo - 500 to - purple - 600','
    features: ['Quantum Processing', 'Hybrid Computing', 'AI Acceleration'],
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
  },
  {'
    title: 'Edge Computing & IoT','
    description: 'Autonomous edge infrastructure with intelligent optimization',
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx

      'Quantum Encryption',
      'Network Optimization',
      'Security Monitoring',
    ],

  {
    name: 'Dr. Jennifer Martinez',
    role: 'CTO, QuantumTech Industries',
    company: 'QuantumTech Industries',

<<<<<<< HEAD
=======
    content:;
=======
    services: advancedITInfrastructureServices2025.filter ('
      string => s.category === 'Edge Computing & IoT'),
    icon: Wifi,'
    color: 'from - green - 500 to - emerald - 600','
    features: ['Edge Processing', 'IoT Orchestration', '5G Optimization'],
  },
  {'
    title: 'Cybersecurity',
    description:;'
      'Comprehensive security framework with continuous verification',
    services: advancedITInfrastructureServices2025.filter ('
      string => s.category === 'Cybersecurity'),
    icon: SecurityIcon,'
    color: 'from - red - 500 to - orange - 600','
    features: ['Zero Trust', 'Threat Detection', 'Compliance Automation'],
  },
  {'
    title: 'Data Center Infrastructure',
    description:;'
      'Self - managing data center infrastructure with AI optimization',
    services: advancedITInfrastructureServices2025.filter ('
      string => s.category === 'Data Center Infrastructure'),
    icon: Building,'
    color: 'from - blue - 500 to - cyan - 600','
    features: ['AI Management', 'Predictive Maintenance', 'Cost Optimization'],
  },
  {'
    title: 'Quantum Networking',
    description:;'
      'Next - generation networking with quantum encryption and optimization',
    services: advancedITInfrastructureServices2025.filter ('
      string => s.category === 'Quantum Networking'),
    icon: Network,

    content:;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
      "Zion Tech Group's quantum cloud infrastructure has revolutionized our research capabilities. We've achieved computational breakthroughs that were previously impossible.",

    rating: 5,'
    avatar: '👩‍🔬'
  };
  {'
    name: 'Robert Thompson','
    role: 'Infrastructure Director, EdgeNet Solutions','
    company: 'EdgeNet Solutions',

    content:;'
      'The autonomous edge computing network has transformed our IoT operations. We now have real - time processing with 90% lower latency and 70% cost reduction.',

    rating: 5,'
    avatar: '👨‍💼'
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  };
  {
    name: 'Lisa Chang',
    role: 'Security CISO, SecureCorp International',
    company: 'SecureCorp International',
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx

  };
  {'
    name: 'Lisa Chang','
    role: 'Security CISO, SecureCorp International','
    company: 'SecureCorp International',
'
    color: 'from-purple-500 to-pink-600',

=======
    color: 'from-purple-500 to-pink-600',

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    title: 'Quantum Networking'
    description:
      'Next-generation networking with quantum encryption and optimization'
    services: advancedITInfrastructureServices2025.filter(
      s => s.category === 'Quantum Networking'
    )
    icon: Network
    color: 'from-purple-500 to-pink-600'
    features: [
      'Quantum Encryption',
      'Network Optimization',
      'Security Monitoring',
    ],
  },
];

const heroFeatures = [
  {
    title: 'Quantum Computing',
description:
      'Revolutionary quantum processing capabilities that provide 1000x performance for specific workloads.',
    icon: Atom,
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600',
  },
  {
    title: 'AI-Powered Automation',
    description:
      'Intelligent automation that reduces operational costs by up to 70% while improving reliability.',
    icon: Brain,
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-600',
  },
  {
    title: 'Edge Computing',
    description:
      'Distributed edge infrastructure that reduces latency and provides real-time processing capabilities.',
    icon: Wifi,
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-600',
  },
  {
    title: 'Zero Trust Security',
    description:
      'Continuous verification and monitoring that provides comprehensive protection against modern threats.',
    icon: Shield,
    gradient: 'bg-gradient-to-r from-orange-500 to-red-600',
  },
];

const testimonials = [
  {
    name: 'Dr. Jennifer Martinez',
    role: 'CTO, QuantumTech Industries',
    company: 'QuantumTech Industries',
content:
      "Zion Tech Group's quantum cloud infrastructure has revolutionized our research capabilities. We've achieved computational breakthroughs that were previously impossible.",
    rating: 5,
    avatar: '👩‍🔬',
  },
  {
    name: 'Robert Thompson',
    role: 'Infrastructure Director, EdgeNet Solutions',
    company: 'EdgeNet Solutions',
content:
      'The autonomous edge computing network has transformed our IoT operations. We now have real-time processing with 90% lower latency and 70% cost reduction.',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    name: 'Lisa Chang',
    role: 'Security CISO, SecureCorp International',
    company: 'SecureCorp International',
content:
      'Their zero-trust security architecture provides comprehensive protection that has prevented multiple sophisticated cyber attacks. The ROI has been exceptional.',
    rating: 5,
    avatar: '👩‍🔒',
  },
];
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

export default function AdvancedITInfrastructureServices() {}
=======
export default function AdvancedITInfrastructureServices() {

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
  return (
'
          href='https://ziontechgroup && ziontechgroup.com/advanced-it-infrastructure-services';
        />;
      </Head>;

      {/* Hero Section */}

<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    features: ['Quantum EncryptionNetwork OptimizationSecurity Monitoring']
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
  Search, Code, TestTube, Server, Database, Network, Shield as SecurityIcon,;
  Wifi, Building, Cpu as CpuIcon;
} from 'lucide-react',;
import Layout from '../components/layout/Layout';
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services';
const contactInfo = {;
  mobile: '+1 302 464 0950';
  email: 'kleber@ziontechgroup.com';
  address: '364 E Main St STE 1008 Middletown DE 19709';
  website: 'https://ziontechgroup.com';
};
const heroStats = [;
  { label: 'Infrastructure Projects', value: '150+', icon: <Server className="w-5 h-5" /> },;
  { label: 'Enterprise Clients', value: '300+', icon: <Building className="w-5 h-5" /> },;
  { label: 'Uptime Guarantee', value: '99.99%', icon: <Award className="w-5 h-5" /> },;
  { label: 'Cost Reduction', value: '60%', icon: <TrendingUp className="w-5 h-5" />   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const serviceCategories = [;
  {;
    title: 'Quantum Cloud Computing';
    description: 'Next-generation cloud infrastructure with quantum processing capabilities';
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Quantum Cloud Computing');
    icon: Cloud;
    color: 'from-indigo-500 to-purple-600';
    features: ['Quantum ProcessingHybrid ComputingAI Acceleration'];
  },;
  {;
    title: 'Edge Computing & IoT',;
    description: 'Autonomous edge infrastructure with intelligent optimization',;
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Edge Computing & IoT');
    icon: Wifi,;
    color: 'from-green-500 to-emerald-600',;
    features: ['Edge ProcessingIoT Orchestration5G Optimization'];
  },;
  {;
    title: 'Cybersecurity',;
    description: 'Comprehensive security framework with continuous verification',;
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Cybersecurity');
    icon: SecurityIcon,;
    color: 'from-red-500 to-orange-600',;
    features: ['Zero TrustThreat DetectionCompliance Automation'];
  },;
  {;
    title: 'Data Center Infrastructure',;
    description: 'Self-managing data center infrastructure with AI optimization',;
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Data Center Infrastructure');
    icon: Building,;
    color: 'from-blue-500 to-cyan-600',;
    features: ['AI ManagementPredictive MaintenanceCost Optimization'];
  },;
  {;
    title: 'Quantum Networking',;
    description: 'Next-generation networking with quantum encryption and optimization',;
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Quantum Networking');
    icon: Network,;
    color: 'from-purple-500 to-pink-600',;
    features: ['Quantum EncryptionNetwork OptimizationSecurity Monitoring'];
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const heroFeatures = [;
  {;
    title: 'Quantum Computing';
    description: 'Revolutionary quantum processing capabilities that provide 1000x performance for specific workloads.';
    icon: Atom;
    gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600';
  };
  {;
    title: 'AI-Powered Automation',;
    description: 'Intelligent automation that reduces operational costs by up to 70% while improving reliability.',;
    icon: Brain,;
    gradient: 'bg-gradient-to-r from-purple-500 to-pink-600';
  },;
  {;
    title: 'Edge Computing',;
    description: 'Distributed edge infrastructure that reduces latency and provides real-time processing capabilities.',;
    icon: Wifi,;
    gradient: 'bg-gradient-to-r from-green-500 to-emerald-600';
  },;
  {;
    title: 'Zero Trust Security',;
    description: 'Continuous verification and monitoring that provides comprehensive protection against modern threats.',;
    icon: Shield,;
    gradient: 'bg-gradient-to-r from-orange-500 to-red-600';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],;
const testimonials = [;
  {;
    name: 'Dr. Jennifer Martinez';
    role: 'CTO, QuantumTech Industries',;
    company: 'QuantumTech Industries',;
    content: 'Zion Tech Group\'s quantum cloud infrastructure has revolutionized our research capabilities. We\'ve achieved computational breakthroughs that were previously impossible.',;
    rating: 5,;
    avatar: '👩‍🔬';
  },;
  {;
    name: 'Robert Thompson',;
    role: 'Infrastructure Director, EdgeNet Solutions',;
    company: 'EdgeNet Solutions',;
    content: 'The autonomous edge computing network has transformed our IoT operations. We now have real-time processing with 90% lower latency and 70% cost reduction.',;
    rating: 5,;
    avatar: '👨‍💼';
  },;
  {;
    name: 'Lisa Chang',;
    role: 'Security CISO, SecureCorp International',;
    company: 'SecureCorp International',;
    content: 'Their zero-trust security architecture provides comprehensive protection that has prevented multiple sophisticated cyber attacks. The ROI has been exceptional.',;
    rating: 5,;
    avatar: '👩‍🔒';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
],
<<<<<<< HEAD

export default function AdvancedITInfrastructureServices() {

  return (

    <Layout>
      <Head>
        <title>Advanced IT Infrastructure Services - Zion Tech Group</title>
=======
export default function AdvancedITInfrastructureServices() {

  return (
    <Layout>
      <Head>
        <title>Advanced IT Infrastructure Services - Zion Tech Group</title>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
        <meta name="description" content="Revolutionary IT infrastructure services including quantum cloud computing, edge computing, zero-trust security, and autonomous data centers. Transform your infrastructure with cutting-edge technology." />
        <meta name="keywords" content="IT infrastructure, quantum computing, edge computing, cybersecurity, data centers, cloud computing, zero trust security" />
        <meta property="og:title" content="Advanced IT Infrastructure Services - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary IT infrastructure services including quantum cloud computing, edge computing, zero-trust security, and autonomous data centers." />
        <meta property="og:url" content="https://ziontechgroup.com/advanced-it-infrastructure-services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/advanced-it-infrastructure-services" />
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
      </Head>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      {/* Hero Section */}
      <section className='relative py-20 lg:py-32 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/20 to-cyan-900/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
<meta
          name='description'
          content='Revolutionary IT infrastructure services including quantum cloud computing, edge computing, zero-trust security, and autonomous data centers. Transform your infrastructure with cutting-edge technology.'
        />
        <meta
          name='keywords'
          content='IT infrastructure, quantum computing, edge computing, cybersecurity, data centers, cloud computing, zero trust security'
        />
        <meta
          property='og:title'
          content='Advanced IT Infrastructure Services - Zion Tech Group'
        />
        <meta
          property='og:description'
          content='Revolutionary IT infrastructure services including quantum cloud computing, edge computing, zero-trust security, and autonomous data centers.'
        />
        <meta
          property='og:url'
          content='https://ziontechgroup.com/advanced-it-infrastructure-services'
        />
        <meta property='og:type' content='website' />
        <link
          rel='canonical'
          href='https://ziontechgroup.com/advanced-it-infrastructure-services'
        />
origin/cursor/automate-test-improve-and-merge-code-2533
      </Head>
      {/* Hero Section */}
      <section className='relative py-20 lg:py-32 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/20 to-cyan-900/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion.div
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
=======


      {/* Hero Section */  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
"
      <section className="relative py-20 lg:py-32 overflow-hidden">"
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/20 to-cyan-900/20"></div>"
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div;
            initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
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


<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
          >
"
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Advanced IT Infrastructure Services;
            </h1>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          >
<h1 className='text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
              Advanced IT Infrastructure Services
            </h1>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <p className='text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
              Revolutionary infrastructure solutions with quantum computing
              edge computing, and AI-powered automation for the future
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary infrastructure solutions with quantum computing, edge computing, and AI-powered automation for the future
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {heroStats.map((stat, index) => (
                <motion.div
<<<<<<< HEAD
                  key={index}
                  initial={{ opacity: 0, scale: 0 && 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className='flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-blue-500/30'
                  key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, scale: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  animate={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-blue-500/30"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary infrastructure solutions with quantum computing, edge computing, and AI-powered automation for the future
=======

            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary infrastructure solutions with quantum computing, edge computing, and AI-powered automation for the future


            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {heroStats.map((stat, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
                <motion.div


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
            </p>
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
origin/cursor/automate-test-improve-and-merge-code-2533
              {heroStats.map((stat, index) => (
                <motion.div
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            transition={{ duration: 0 && 0.8 }}>;
=======

                <motion.div;
            transition={{ duration: 0 && 0.8 }}>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
            <h1 className='text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6'>;
              Advanced IT Infrastructure Services;
            </h1>;'
            <p className='text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>;
              Revolutionary infrastructure solutions with quantum computing,;
              edge computing, and AI-powered automation for the future;
            </p>;'
            <div className='flex flex-wrap justify-center gap-4 mb-12'>              {heroStats && heroStats.map((stat, index) => (;
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
                <motion&& motion.div


<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    content:;
=======
                <motion&& motion.div;
    content:;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
      'Their zero - trust security architecture provides comprehensive protection that has prevented multiple sophisticated cyber attacks. The ROI has been exceptional.',
    rating: 5,'
    avatar: '👩‍🔒',
  }, ];
;
export default /**;
 * AdvancedITInfrastructureServices - Function description;
 */
function AdvancedITInfrastructureServices() {}
  return (
    <Layout>;
      <Head>;
        <title > Advanced IT Infrastructure Services - Zion Tech Group</title>;
        <meta;'
          name='description';'
          content='Revolutionary IT infrastructure services including quantum cloud computing, edge computing, zero - trust security, and autonomous data centers. Transform your infrastructure with cutting - edge technology.';
        />;
        <meta;'
          name='keywords';'
          content='IT infrastructure, quantum computing, edge computing, cybersecurity, data centers, cloud computing, zero trust security';
        />;
        <meta;'
          property='og:title';'
          content='Advanced IT Infrastructure Services - Zion Tech Group';
        />;
        <meta;'
          property='og:description';'
          content='Revolutionary IT infrastructure services including quantum cloud computing, edge computing, zero - trust security, and autonomous data centers.';
        />;
        <meta;'
          property='og:url';'
          content='https://ziontechgroup.com / advanced - it - infrastructure - services';
        />;'
        <meta property='og:type' content='website' />;
        <link;'
          rel='canonical';'
          href='https://ziontechgroup.com / advanced - it - infrastructure - services';
        />;
      </Head>;
      {/* Hero Section */}'
      <section className='relative py - 20 lg:py - 32 overflow - hidden'>;'
        <div className='absolute inset - 0 bg - gradient - to - br from - indigo - 900 / 20 via - blue - 900 / 20 to - cyan - 900 / 20'></div>;'
        <div className='relative max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
          >;'
            <h1 className='text - 4xl lg:text - 6xl font - bold bg - gradient - to - r from - indigo - 400 via - blue - 400 to - cyan - 400 bg - clip - text text - transparent mb - 6'>;
              Advanced IT Infrastructure Services;
            </h1>;'
            <p className='text - xl lg:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto'>;
              Revolutionary infrastructure solutions with quantum computing,
              edge computing, and AI - powered automation for the future;
            </p>;'
            <div className='flex flex - wrap justify - center gap - 4 mb - 12'>              {hero_stats.map ((stat, index) => (
                <motion.div;
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  key={index}
                  initial={{ opacity: 0, scale: 0 && 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx


=======
                  key={index}
                  initial={{ opacity: 0, scale: 0 && 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
className='flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-blue-500/30'
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
                >
                  {stat.icon  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}"
                  <span className="text-blue-400 font-semibold">{stat.value}</span>"
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                </motion.div>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
              ))}
<<<<<<< HEAD
=======
=======
                  className='flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-blue-500/30'
=======
                  key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, scale: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  animate={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-blue-500/30"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                >
                  {stat.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  <span className="text-blue-400 font-semibold">{stat.value}</span>
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                </motion.div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

=======
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
=======
              ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}


            </div>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
              <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                Explore Services"
                <ArrowRight className="ml-2 w-5 h-5" />
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
              </Link>
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
              <Link href={`tel:${contactInfo.mobile}`} className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
                Get Started
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
<<<<<<< HEAD
              <Link href={`tel:${contactInfo.mobile}`} className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
              <Link
                href={`tel:${contactInfo.mobile}`}
                className='inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300'
              >
                <Phone className='mr-2 w-5 h-5' />
origin/cursor/automate-test-improve-and-merge-code-2533
                Get Started
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
              </Link>"
              <Link href={`tel:${contactInfo.mobile}`} className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300">"
                <Phone className="mr-2 w-5 h-5" />
                Get Started;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
              </Link>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD

<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

                href={`tel:${contactInfo && contactInfo.mobile}`}
                className='inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300'>;
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




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
      {/* Features Section */}
"
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
          <motion.div
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
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
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
            viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="text-center mb-16"
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
          >
=======

          >

            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
          >

            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
<h1 className='text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
              Advanced IT Infrastructure Services
            </h1>
            <p className='text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
              Revolutionary infrastructure solutions with quantum computing
              edge computing, and AI-powered automation for the future
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary infrastructure solutions with quantum computing, edge computing, and AI-powered automation for the future
            </p>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
=======
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {heroStats.map((stat, index) => (
                <motion.div
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary infrastructure solutions with quantum computing, edge computing, and AI-powered automation for the future

            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary infrastructure solutions with quantum computing, edge computing, and AI-powered automation for the future

            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {heroStats.map((stat, index) => (
                <motion.div

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
            <div className='flex flex-wrap justify-center gap-4 mb-12'>
origin/cursor/automate-test-improve-and-merge-code-2533
              {heroStats.map((stat, index) => (
                <motion.div
            transition={{ duration: 0 && 0.8 }}>;
            <h1 className='text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6'>;
              Advanced IT Infrastructure Services;
            </h1>;
            <p className='text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>;
              Revolutionary infrastructure solutions with quantum computing,;
              edge computing, and AI-powered automation for the future;
            </p>;
            <div className='flex flex-wrap justify-center gap-4 mb-12'>              {heroStats && heroStats.map((stat, index) => (;
                <motion&& motion.div


    content:;
      'Their zero - trust security architecture provides comprehensive protection that has prevented multiple sophisticated cyber attacks. The ROI has been exceptional.',
    rating: 5,
    avatar: '👩‍🔒',
  }, ];
;
export default /**
 * AdvancedITInfrastructureServices - Function description
 */
function AdvancedITInfrastructureServices() {
  return (
    <Layout>;
      <Head>;
        <title > Advanced IT Infrastructure Services - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Revolutionary IT infrastructure services including quantum cloud computing, edge computing, zero - trust security, and autonomous data centers. Transform your infrastructure with cutting - edge technology.';
        />;
        <meta;
          name='keywords';
          content='IT infrastructure, quantum computing, edge computing, cybersecurity, data centers, cloud computing, zero trust security';
        />;
        <meta;
          property='og:title';
          content='Advanced IT Infrastructure Services - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Revolutionary IT infrastructure services including quantum cloud computing, edge computing, zero - trust security, and autonomous data centers.';
        />;
        <meta;
          property='og:url';
          content='https://ziontechgroup.com / advanced - it - infrastructure - services';
        />;
        <meta property='og:type' content='website' />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / advanced - it - infrastructure - services';
        />;
      </Head>;
      {/* Hero Section */}
      <section className='relative py - 20 lg:py - 32 overflow - hidden'>;
        <div className='absolute inset - 0 bg - gradient - to - br from - indigo - 900 / 20 via - blue - 900 / 20 to - cyan - 900 / 20'></div>;
        <div className='relative max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h1 className='text - 4xl lg:text - 6xl font - bold bg - gradient - to - r from - indigo - 400 via - blue - 400 to - cyan - 400 bg - clip - text text - transparent mb - 6'>;
              Advanced IT Infrastructure Services;
            </h1>;
            <p className='text - xl lg:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto'>;
              Revolutionary infrastructure solutions with quantum computing,
              edge computing, and AI - powered automation for the future;
            </p>;
            <div className='flex flex - wrap justify - center gap - 4 mb - 12'>              {hero_stats.map ((stat, index) => (
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, scale: 0 && 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                  transition={{ duration: 0.5, delay: index * 0.1 }}
className='flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-blue-500/30'
origin/cursor/automate-test-improve-and-merge-code-2533
                >
                  {stat.icon}
                  <span className="text-blue-400 font-semibold">{stat.value}</span>
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                </motion.div>
              ))}
                  className='flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-blue-500/30'
                  key={index  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  initial={{ opacity: 0, scale: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  animate={{ opacity: 1, scale: 1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  transition={{ duration: 0.5, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-lg px-4 py-2 border border-blue-500/30"
                >
                  {stat.icon  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  <span className="text-blue-400 font-semibold">{stat.value}</span>
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                </motion.div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
=======
              <Link href={`tel:${contactInfo.mobile}`} className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
              <Link
                href={`tel:${contactInfo.mobile}`}
                className='inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300'
              >
                <Phone className='mr-2 w-5 h-5' />
origin/cursor/automate-test-improve-and-merge-code-2533
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

                href={`tel:${contactInfo && contactInfo.mobile}`}
                className='inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300'>;
                <Phone className='mr-2 w-5 h-5' />                Get Started;
              </Link>;
            </div>;
          </motion && motion.div>;
        </div>;

      </section>

      {/* Features Section */}

      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
{/* Features Section */}
      <section className='py-20 bg-gradient-to-b from-black to-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
          <motion.div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
          >
=======

          >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Infrastructure Services?
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our infrastructure services combine cutting-edge technology with intelligent automation to deliver unprecedented performance and reliability;
            </p>
          </motion.div>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD

              <motion.div
=======
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
            className='text-center mb-16'>;
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>;
              Why Choose Our IT Infrastructure Services?;
            </h2>;
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Our infrastructure services combine cutting-edge technology with;
              intelligent automation to deliver unprecedented performance and;
              reliability;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>            {heroFeatures && heroFeatures.map((feature, index) => (;
              <motion&& motion.div
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {heroFeatures.map((feature, index) => (
              <motion.div
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                className='relative group'
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {heroFeatures.map((feature, index) => (
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
                className="relative group"
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
className='relative group'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='relative group'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
className='relative group'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

className='relative group'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
              >
                <div className={`${feature.gradient} p-1 rounded-xl`}>
                  <div className="bg-gray-900 rounded-xl p-6 h-full">
                    <div className="text-center">
                      <div className={`${feature.gradient} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
=======

              >`
                <div className={`${feature.gradient} p-1 rounded-xl`}>"
                  <div className="bg-gray-900 rounded-xl p-6 h-full">"
                    <div className="text-center">`
                      <div className={`${feature.gradient} w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>"
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>"
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
                      <p className="text-gray-300">{feature.description}</p>
=======
<<<<<<< HEAD
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
                      <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                      <h3 className='text-xl font-semibold text-white mb-3'>
                        {feature.title}
                      </h3>
                      <p className='text-gray-300'>{feature.description}</p>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                    </div>
                  </div>
                </div>
              </motion.div>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
            ))  } catch (error) {
    console.error("Error:", error);
=======

            ))  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
        </div>;
      </section>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
=======
        </div>;
      </section>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx

      {/* Services Section */}
"
      <section id="services" className="py-20 bg-black">"
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
          <motion.div

<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
            ))}
          </div>
        </div>
{/* Services Section */}
      <section id='services' className='py-20 bg-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
          <motion.div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx

          >
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>
              IT Infrastructure Service Categories
            </h2>

            className="text-center mb-16"
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
className='text-center mb-16'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
          >
=======

          >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              IT Infrastructure Service Categories;
            </h2>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
              Comprehensive infrastructure solutions covering quantum computing
              edge computing, security, and data centers
            </p>
          </motion.div>
<<<<<<< HEAD
          <div className='space-y-16'>            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className='relative'
=======
<<<<<<< HEAD
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive infrastructure solutions covering quantum computing, edge computing, security, and data centers;
            </p>
          </motion.div>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='space-y-16'>            {serviceCategories.map((category, categoryIndex) => (
              <motion.div

              <motion.div
=======
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive infrastructure solutions covering quantum computing, edge computing, security, and data centers
            </p>
          </motion.div>

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
            className='text-center mb-16'>;
=======
'
            className='text-center mb-16'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-4'>;
              IT Infrastructure Service Categories;
            </h2>;'
            <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
              Comprehensive infrastructure solutions covering quantum computing,;
              edge computing, security, and data centers;
            </p>;
          </motion && motion.div>;
'
          <div className='space-y-16'>            {serviceCategories && serviceCategories.map((category, categoryIndex) => (;
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
              <motion&& motion.div
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx

          <div className='space-y-16'>
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
              <motion&& motion.div;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.8, delay: categoryIndex * 0 && 0.2 }}
                viewport={{ once: true }}
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                className='relative'
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <motion.div
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                key={categoryIndex  } catch (error) {
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
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="relative"
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx


                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0 && 0.5, delay: serviceIndex * 0 && 0.1 }}
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
                      viewport={{ once: true }}
=======


<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
className='relative'
              >
                <div className='text-center mb-12'>
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 ${category.color} rounded-2xl mb-6`}
                  >
                    <category.icon className='w-10 h-10 text-white' />
                  </div>
                  <h3 className='text-3xl font-bold text-white mb-4'>
                    {category.title}
                  </h3>
                  <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
                    {category.description}
                  </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>
                  {category.services.map((service, serviceIndex) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.9 }}
origin/cursor/automate-test-improve-and-merge-code-2533
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0 && 0.5, delay: serviceIndex * 0 && 0.1 }}
                      viewport={{ once: true }}
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                      className='relative group'>;
                      <div className={`${service && service.color} p-1 rounded-xl`}>;
                        <div className='bg-gray-900 rounded-xl p-6 h-full'>;
                          <div className='flex items-center justify-between mb-4'>;
=======
                      viewport={{ once: true }}'
                      className='relative group'>;`
                      <div className={`${service && service.color} p-1 rounded-xl`}>;'
                        <div className='bg-gray-900 rounded-xl p-6 h-full'>;'
                          <div className='flex items-center justify-between mb-4'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
                            <span className='text-3xl'>{service && service.icon}</span>;
                            {service && service.popular && (;'
                              <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full'>                                Popular;
                              </span>;
                            )}
                          </div>;'
                          <h4 className='text-xl font-semibold text-white mb-2'>;
                            {service && service.name}
                          </h4>;'
                          <p className='text-gray-300 text-sm mb-4'>;
                            {service && service.tagline}
                          </p>;'
                          <div className='flex items-center justify-between mb-4'>;'
                            <span className='text-2xl font-bold text-white'>;
                              {service && service.price}
                            </span>;'
                            <span className='text-gray-400'>;
                              {service && service.period}
                            </span>;
                          </div>;'
                          <p className='text-gray-300 text-sm mb-4'>;
                            {service && service.description}
                          </p>;'
                          <div className='space-y-2 mb-6'>;
                            {service && service.features;
                              .slice(0, 3);
                              .map((feature, featureIndex) => (;
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
className='relative group'
                    >
                      <div className={`${service.color} p-1 rounded-xl`}>
                        <div className='bg-gray-900 rounded-xl p-6 h-full'>
                          <div className='flex items-center justify-between mb-4'>
                            <span className='text-3xl'>{service.icon}</span>
                            {service.popular && (
                              <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full'>
                                Popular
                              </span>
                            )}
                          </div>
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
                          </div>
                          <p className='text-gray-300 text-sm mb-4'>
                            {service.description}
                          </p>
                          <div className='space-y-2 mb-6'>
                            {service.features
                              .slice(0, 3)
                              .map((feature, featureIndex) => (
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                                <div
                                  key={featureIndex}
                                  className='flex items-center text-sm text-gray-300'>;
=======
                                <div;
                                  key={featureIndex}'
                                  className='flex items-center text-sm text-gray-300'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
                                  <CheckCircle className='w-4 h-4 text-green-400 mr-2 flex-shrink-0' />;
                                  {feature}
                                </div>;
                              ))}
                          </div>;'
                          <div className='flex items-center justify-between'>;
                            <Link;
                              href={service && service.link}'
                              className='inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300'>;
                              Learn More;'
                              <ArrowRight className='ml-1 w-4 h-4' />;
                            </Link>;
                            <Link;`
                              href={`tel:${contactInfo && contactInfo.mobile}`}'
                              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300'>;
                              Get Started;
                            </Link>;
                          </div>;
                        </div>;
                      </div>;
                    </motion && motion.div>;
"
                className="relative"

<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              >
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${category.color} rounded-2xl mb-6`}>
=======
              >"
                <div className="text-center mb-12">`
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${category.color} rounded-2xl mb-6`}>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
                    <category.icon className="w-10 h-10 text-white" />
                  </div>"
                  <h3 className="text-3xl font-bold text-white mb-4">{category.title}</h3>"
                  <p className="text-xl text-gray-300 max-w-2xl mx-auto">{category.description}</p>
                </div>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8'>                  {category.services.map((service, serviceIndex) => (
                    <motion.div
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx

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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx


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


<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                    >
                      <div className={`${service.color} p-1 rounded-xl`}>
                        <div className="bg-gray-900 rounded-xl p-6 h-full">
                          <div className="flex items-center justify-between mb-4">
=======


                    >`
                      <div className={`${service.color} p-1 rounded-xl`}>"
                        <div className="bg-gray-900 rounded-xl p-6 h-full">"
                          <div className="flex items-center justify-between mb-4">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
                            <span className="text-3xl">{service.icon}</span>
                            {service.popular && ("
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                                Popular;
                              </span>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                            )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
=======
                            )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                            )}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                          </div>
                          <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>
                          <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-2xl font-bold text-white">{service.price}</span>
                            <span className="text-gray-400">{service.period}</span>
                          </div>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                          <p className="text-gray-300 text-sm mb-4">{service.description}</p>
=======

                          </div>"
                          <h4 className="text-xl font-semibold text-white mb-2">{service.name}</h4>"
                          <p className="text-gray-300 text-sm mb-4">{service.tagline}</p>"
                          <div className="flex items-center justify-between mb-4">"
                            <span className="text-2xl font-bold text-white">{service.price}</span>"
                            <span className="text-gray-400">{service.period}</span>
                          </div>
"
                          <p className="text-gray-300 text-sm mb-4">{service.description}</p>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
                          <div className="space-y-2 mb-6">
                            {service.features.slice(0, 3).map((feature, featureIndex) => ("
                              <div key={featureIndex} className="flex items-center text-sm text-gray-300">"
                                <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                                {feature  } catch (error) {
    console.error("Error:", error);
=======

                                {feature  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
                              </div>;
                            ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
                          </div>
                          <div className="flex items-center justify-between">
                            <Link
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                          </div>
=======

                          </div>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
                          <div className="flex items-center justify-between">
                            <Link;
                              href={service.link}
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
                          </div>
                          <div className="flex items-center justify-between">
                            <Link
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
=======

                          </div>
                          <div className="flex items-center justify-between">
                            <Link
                              href={service.link}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                              className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300"
                            >
                              Learn More"
                              <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
                            <Link
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
                              href={`tel:${contactInfo.mobile}`}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
                            <Link;
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300"
=======
=======
                              href={`tel:${contactInfo.mobile}`}
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300"
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300"
                              href={`tel:${contactInfo.mobile}`}
                              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300'
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
                              href={`tel:${contactInfo.mobile}`}
                              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
                              href={`tel:${contactInfo.mobile}`}
                              className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-600 text-white text-sm font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                            >
                              Get Started;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
      {/* Testimonials Section */}
=======
      {/* Testimonials Section */}
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
      {/* Testimonials Section */}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
      <section className='py-20 bg-gradient-to-b from-gray-900 to-black'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>          <motion&& motion.div

      {/* Testimonials Section */}

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
              Real feedback from organizations that have transformed their infrastructure with our advanced services
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
              infrastructure with our advanced services;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {testimonials && testimonials.map((testimonial, index) => (;
              <motion&& motion.div


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
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
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>"
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
      <section className='py-20 bg-gradient-to-r from-indigo-900/20 via-blue-900/20 to-cyan-900/20'>;'
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;'
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>;
              Ready to Transform Your Infrastructure?;
            </h2>;'
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>;
              Join hundreds of organizations that have already revolutionized;
              their IT infrastructure with our advanced services;
            </p>;'
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <Link;`
                href={`tel:${contactInfo && contactInfo.mobile}`}'
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>;'
                <Phone className='mr-2 w-5 h-5' />                Call Now: {contactInfo && contactInfo.mobile}
              </Link>;
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
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

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}

          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from organizations that have transformed their infrastructure with our advanced services
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
              infrastructure with our advanced services;
            </p>;
          </motion && motion.div>;
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {testimonials && testimonials.map((testimonial, index) => (;
              <motion&& motion.div

                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}

              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{testimonial.avatar}</span>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (

          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-indigo-900/20 via-blue-900/20 to-cyan-900/20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>;
              Ready to Transform Your Infrastructure?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>;
              Join hundreds of organizations that have already revolutionized;
              their IT infrastructure with our advanced services;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <Link
                href={`tel:${contactInfo && contactInfo.mobile}`}
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>;
                <Phone className='mr-2 w-5 h-5' />                Call Now: {contactInfo && contactInfo.mobile}
              </Link>;
              <Link

          >
            className='text-center mb-16'
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

<section className='py-20 bg-gradient-to-b from-gray-900 to-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<section className='py-20 bg-gradient-to-b from-gray-900 to-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
      {/* Testimonials Section */}
<section className='py-20 bg-gradient-to-b from-gray-900 to-black'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <motion.div
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
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
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx


className='text-center mb-16'
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
className='text-center mb-16'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from organizations that have transformed their infrastructure with our advanced services
            </p>
          </motion.div>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {testimonials.map((testimonial, index) => (
              <motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {testimonials.map((testimonial, index) => (
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <motion.div
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx

                className='bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20'
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
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20"

<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
=======
<<<<<<< HEAD
<<<<<<< HEAD


=======
                className='bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20'
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
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20"
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
className='bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
className='bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
className='bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
className='bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20'
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{testimonial.avatar}</span>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD

<<<<<<< HEAD
          </div>;
        </div>;
      </section>;

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

                      <Star key={i} className='w-4 h-4 fill-current' />                    ))}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx

      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-indigo-900/20 via-blue-900/20 to-cyan-900/20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                      <Star key={i} className='w-4 h-4 fill-current' />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className='py-20 bg-gradient-to-r from-indigo-900/20 via-blue-900/20 to-cyan-900/20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div
<section className='py-20 bg-gradient-to-r from-indigo-900/20 via-blue-900/20 to-cyan-900/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
origin/cursor/automate-test-improve-and-merge-code-2533
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>;
              Ready to Transform Your Infrastructure?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>;
              Join hundreds of organizations that have already revolutionized;
              their IT infrastructure with our advanced services;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <Link
                href={`tel:${contactInfo && contactInfo.mobile}`}
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>;
                <Phone className='mr-2 w-5 h-5' />                Call Now: {contactInfo && contactInfo.mobile}
              </Link>;
              <Link

            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
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
      <section className="py-20 bg-gradient-to-r from-indigo-900/20 via-blue-900/20 to-cyan-900/20">
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
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">

          >
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from organizations that have transformed their infrastructure with our advanced services
            </p>
          </motion.div>

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{testimonial.avatar}</span>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
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
      <section className='py-20 bg-gradient-to-r from-indigo-900/20 via-blue-900/20 to-cyan-900/20'>;
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
=======
      {/* CTA Section */}
<section className='py-20 bg-gradient-to-r from-indigo-900/20 via-blue-900/20 to-cyan-900/20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <motion.div
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>;
              Ready to Transform Your Infrastructure?;
            </h2>;
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>;
              Join hundreds of organizations that have already revolutionized;
              their IT infrastructure with our advanced services;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <Link
                href={`tel:${contactInfo && contactInfo.mobile}`}
                className='inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>;
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
      <section className="py-20 bg-gradient-to-r from-indigo-900/20 via-blue-900/20 to-cyan-900/20">
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
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
<h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
<h2 className='text-3xl lg:text-4xl font-bold text-white mb-6'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have already revolutionized their IT infrastructure with our advanced services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
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
=======
              <Link
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                href={`tel:${contactInfo.mobile}`}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
              >

<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx

=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                <Phone className="mr-2 w-5 h-5" />
                Call Now: {contactInfo.mobile  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              </Link>;
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
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


<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              >
=======
              >
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



          >"
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              What Our Clients Say;
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real feedback from organizations that have transformed their infrastructure with our advanced services;
            </p>
          </motion.div>





              >"
                <div className="flex items-center mb-4">"
                  <span className="text-3xl mr-3">{testimonial.avatar}</span>
                  <div>"
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>"
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>"
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>"
                <p className="text-gray-300 mb-4">{testimonial.content}</p>"
                <div className="flex items-center">"
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (

      {/* CTA Section */}'
      <section className='py-20 bg-gradient-to-r from-indigo-900/20 via-blue-900/20 to-cyan-900/20'>;'
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion&& motion.div;
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}





          >
"
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>"
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of organizations that have already revolutionized their IT infrastructure with our advanced services;
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center">


              >"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
=======
              <Link;
                href={`mailto:${contactInfo.email}`  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300"

              >
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                <Mail className="mr-2 w-5 h-5" />
                Email Us;
              </Link>
            </div>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
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
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
=======
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
            <div className="mt-8 text-center">
              <p className="text-gray-300 mb-2">📍 {contactInfo.address}</p>
              <p className="text-gray-300">🌐 {contactInfo.website}</p>
            </div>
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
=======
          </motion.div>
        </div>
      </section>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx


`
                href={`mailto:${contactInfo && contactInfo.email}`}'
                className='inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300'>;'
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

  )
}

<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
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
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
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
                              className='inline - flex items - center text - blue - 400 hover:text - blue - 300 transition - colors duration - 300';
                            >;
                              Learn More;'
                              <ArrowRight className='ml - 1 w - 4 h - 4' />;
                            </Link>;
                            <Link;`
                              href={`tel:${contact_info.mobile}`}'
                              className='inline - flex items - center px - 4 py - 2 bg - gradient - to - r from - indigo - 500 to - blue - 600 text - white text - sm font - semibold rounded - lg hover:from - indigo - 600 hover:to - blue - 700 transition - all duration - 300'                            >;
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
              infrastructure with our advanced services;
            </p>;
          </motion.div>;'
          <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>            {testimonials.map ((testimonial, index) => (
              <motion.div;
                key={index}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}'
                className='bg - white / 5 backdrop - blur - lg rounded - xl p - 6 border border - blue - 500 / 20';
              >;'
                <div className='flex items - center mb - 4'>;'
                  <span className='text - 3xl mr - 3'>{testimonial.avatar}</span>;
                  <div>;'
                    <h4 className='text - white font - semibold'>;
                      {testimonial.name}
                    </h4>;'
                    <p className='text - blue - 400 text - sm'>{testimonial.role}</p>;'
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
      <section className='py - 20 bg - gradient - to - r from - indigo - 900 / 20 via - blue - 900 / 20 to - cyan - 900 / 20'>;'
        <div className='max - w-7xl mx - auto px - 4 sm:px - 6 lg:px - 8 text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 20 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;'
            <h2 className='text - 3xl lg:text - 4xl font - bold text - white mb - 6'>;
              Ready to Transform Your Infrastructure?;
            </h2>;'
            <p className='text - xl text - gray - 300 mb - 8 max - w-3xl mx - auto'>;
              Join hundreds of organizations that have already revolutionized;
              their IT infrastructure with our advanced services;
            </p>;'
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <Link;`
                href={`tel:${contact_info.mobile}`}'
                className='inline - flex items - center px - 8 py - 4 bg - gradient - to - r from - indigo - 500 to - blue - 600 text - white font - semibold rounded - lg hover:from - indigo - 600 hover:to - blue - 700 transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30';
              >;'
                <Phone className='mr - 2 w - 5 h - 5' />                Call Now: {contact_info.mobile}
              </Link>;
              <Link;`
                href={`mailto:${contact_info.email}`}'
                className='inline - flex items - center px - 8 py - 4 bg - white / 10 backdrop - blur - lg text - white font - semibold rounded - lg border border - blue - 500 / 30 hover:bg - white / 20 transition - all duration - 300';
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
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx


<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======
              >
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
                <Phone className='mr-2 w-5 h-5' />
                Call Now: {contactInfo.mobile}
              </Link>
              <Link
                href={`mailto:${contactInfo.email}`}
className='inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300'
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
<<<<<<< HEAD:pages_backup/advanced-it-infrastructure-services.tsx
<<<<<<< HEAD
<<<<<<< HEAD:pages/advanced-it-infrastructure-services.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/advanced-it-infrastructure-services.tsx
=======




'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/advanced-it-infrastructure-services.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/advanced-it-infrastructure-services.tsx
