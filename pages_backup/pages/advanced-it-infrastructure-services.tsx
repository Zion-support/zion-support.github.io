import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Target, as, TargetIcon, Zap, as, ZapIcon, Shield, as, ShieldIcon, Globe, as, GlobeIcon, Search, Code, TestTube, Server, Database, Network, Shield, as, SecurityIcon, Wifi, Building, Cpu, as, CpuIcon,} from 'lucide-react';
import Layout from '../components/layout/Layout';
import React from 'react',
import Head from 'next/head',
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign;
  Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users;
  Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings;
  Eye, Award, Clock, Heart, Lightbulb, Target as TargetIcon;
  Zap as ZapIcon, Shield as ShieldIcon, Globe as GlobeIcon;
  Search, Code, TestTube, Server, Database, Network, Shield as SecurityIcon;
  Wifi, Building, Cpu as CpuIcon
 } from 'lucide-react';
import Layout from '../components/layout/Layout';



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';


import Link from 'next/link',
import { motion } from 'framer-motion',
import {
  CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign,
  Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users,
  Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings,
  Eye, Award, Clock, Heart, Lightbulb, Target as TargetIcon,
  Zap as ZapIcon, Shield as ShieldIcon, Globe as GlobeIcon,
  Search, Code, TestTube, Server, Database, Network, Shield as SecurityIcon,
  Wifi, Building, Cpu as CpuIcon
} from 'lucide-react',
import Layout from '../components/layout/Layout',
import { advancedITInfrastructureServices2025 } from '../data/2025-advanced-it-infrastructure-services',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',

  website: 'https://ziontechgroup.com'
}
const heroStats = [

  { label: 'Infrastructure Projects', value: '150+', icon: <Server className="w-5 h-5" /> },
  { label: 'Enterprise Clients', value: '300+', icon: <Building className="w-5 h-5" /> },
  { label: 'Uptime Guarantee', value: '99.99%', icon: <Award className="w-5 h-5" /> },
  { label: 'Cost Reduction', value: '60%', icon: <TrendingUp className="w-5 h-5" /> }
];

const serviceCategories = [
  {
    title: 'Quantum Cloud Computing',
    description: 'Next-generation cloud infrastructure with quantum processing capabilities',
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Quantum Cloud Computing'),
    icon: Cloud,
    color: 'from-indigo-500 to-purple-600',
    features: ['Quantum ProcessingHybrid ComputingAI Acceleration']
  };
  {
    title: 'Edge Computing & IoT',
    description: 'Autonomous edge infrastructure with intelligent optimization',
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Edge Computing & IoT'),
    icon: Wifi,
    color: 'from-green-500 to-emerald-600',
    features: ['Edge ProcessingIoT Orchestration5G Optimization']
  };
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security framework with continuous verification',
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Cybersecurity'),
    icon: SecurityIcon,
    color: 'from-red-500 to-orange-600',
    features: ['Zero TrustThreat DetectionCompliance Automation']
  };
  {
    title: 'Data Center Infrastructure',
    description: 'Self-managing data center infrastructure with AI optimization',
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Data Center Infrastructure'),
    icon: Building,
    color: 'from-blue-500 to-cyan-600',
    features: ['AI ManagementPredictive MaintenanceCost Optimization']
  };
  {
    title: 'Quantum Networking',
    description: 'Next-generation networking with quantum encryption and optimization',
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Quantum Networking'),
    icon: Network,
    color: 'from-purple-500 to-pink-600',

    features: [
      'Quantum Encryption',
      'Network Optimization',
      'Security Monitoring',
    ],
  },];


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

];

const testimonials = [
import Head from 'next / head';
import Link from 'next / link';
import {motion} from 'framer-motion';
import {CheckCircle, ArrowRight, Star, TrendingUp, Phone, Zap, DollarSign, Shield, Mail, MapPin, Rocket, Brain, Sparkles, Atom, Dna, Users, Globe, Cpu, Target, Microscope, Lock, Cloud, BarChart3, Settings, Eye, Award, Clock, Heart, Lightbulb, Target, as, TargetIcon, Zap, as, ZapIcon, Shield, as, ShieldIcon, Globe, as, GlobeIcon, Search, Code, TestTube, Server, Database, Network, Shield, as, SecurityIcon, Wifi, Building, Cpu, as, CpuIcon, } from 'lucide-react';
import Layout from '../components / layout / Layout';
const contact_info = {


const contactInfo = {

  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com',
}
;
const hero_stats = [;
  {
    label: 'Infrastructure Projects',
    value: '150+',
    icon: <Server className='w - 5 h - 5' />,
  },
  {
    label: 'Enterprise Clients',
    value: '300+',
    icon: <Building className='w - 5 h - 5' />,
  },
  {
    label: 'Uptime Guarantee',
    value: '99.99%',
    icon: <Award className='w - 5 h - 5' />,
  },
  {
    label: 'Cost Reduction',
    value: '60%',
    icon: <TrendingUp className='w - 5 h - 5' />,
  }, ];
;
const service_categories = [;
  {
    title: 'Quantum Cloud Computing',
    description:;
      'Next - generation cloud infrastructure with quantum processing capabilities',
    services: advancedITInfrastructureServices2025.filter (
      string => s.category === 'Quantum Cloud Computing'),
    icon: Cloud,
    color: 'from - indigo - 500 to - purple - 600',
    features: ['Quantum Processing', 'Hybrid Computing', 'AI Acceleration'],
  },
  {
    title: 'Edge Computing & IoT',
    description: 'Autonomous edge infrastructure with intelligent optimization',
    services: advancedITInfrastructureServices2025.filter (
      string => s.category === 'Edge Computing & IoT'),
    icon: Wifi,
    color: 'from - green - 500 to - emerald - 600',
    features: ['Edge Processing', 'IoT Orchestration', '5G Optimization'],
  },
  {
    title: 'Cybersecurity',
    description:;
      'Comprehensive security framework with continuous verification',
    services: advancedITInfrastructureServices2025.filter (
      string => s.category === 'Cybersecurity'),
    icon: SecurityIcon,
    color: 'from - red - 500 to - orange - 600',
    features: ['Zero Trust', 'Threat Detection', 'Compliance Automation'],
  },
  {
    title: 'Data Center Infrastructure',
    description:;
      'Self - managing data center infrastructure with AI optimization',
    services: advancedITInfrastructureServices2025.filter (
      string => s.category === 'Data Center Infrastructure'),
    icon: Building,
    color: 'from - blue - 500 to - cyan - 600',
    features: ['AI Management', 'Predictive Maintenance', 'Cost Optimization'],
  },
  {
    title: 'Quantum Networking',
    description:;
      'Next - generation networking with quantum encryption and optimization',
    services: advancedITInfrastructureServices2025.filter (
      string => s.category === 'Quantum Networking'),
    icon: Network,

    content:;
      "Zion Tech Group's quantum cloud infrastructure has revolutionized our research capabilities. We've achieved computational breakthroughs that were previously impossible.",

    rating: 5,
    avatar: '👩‍🔬'
  };
  {
    name: 'Robert Thompson',
    role: 'Infrastructure Director, EdgeNet Solutions',
    company: 'EdgeNet Solutions',

    content:;
      'The autonomous edge computing network has transformed our IoT operations. We now have real - time processing with 90% lower latency and 70% cost reduction.',

    rating: 5,
    avatar: '👨‍💼'
  };
  {
    name: 'Lisa Chang',
    role: 'Security CISO, SecureCorp International',
    company: 'SecureCorp International',

    color: 'from-purple-500 to-pink-600',


export default function AdvancedITInfrastructureServices() {

  return (

          href='https://ziontechgroup && ziontechgroup.com/advanced-it-infrastructure-services'
        />;
      </Head>;

      {/* Hero Section */}

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




export default function AdvancedITInfrastructureServices() {
  return (
    <Layout>
      <Head>
        <title>Advanced IT Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Revolutionary IT infrastructure services including quantum cloud computing, edge computing, zero-trust security, and autonomous data centers. Transform your infrastructure with cutting-edge technology." />
        <meta name="keywords" content="IT infrastructure, quantum computing, edge computing, cybersecurity, data centers, cloud computing, zero trust security" />
        <meta property="og:title" content="Advanced IT Infrastructure Services - Zion Tech Group" />
        <meta property="og:description" content="Revolutionary IT infrastructure services including quantum cloud computing, edge computing, zero-trust security, and autonomous data centers." />
        <meta property="og:url" content="https://ziontechgroup.com/advanced-it-infrastructure-services" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/advanced-it-infrastructure-services" />
      </Head>

      {/* Hero Section */}
      <section className='relative py-20 lg:py-32 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/20 to-cyan-900/20'></div>
        <div className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}

const serviceCategories = [
  {
    title: 'Quantum Cloud Computing',
    description: 'Next-generation cloud infrastructure with quantum processing capabilities',
    services: advancedITInfrastructureServices2025.filter(s => s.category === 'Quantum Cloud Computing'),

    icon: Cloud,
    color: 'from - indigo - 500 to - purple - 600',
    features: ['Quantum Processing', 'Hybrid Computing', 'AI Acceleration'],
  },
  {
    title: 'Edge Computing & IoT',
    description: 'Autonomous edge infrastructure with intelligent optimization',
    services: advancedITInfrastructureServices2025.filter (
      string => s.category === 'Edge Computing & IoT'),
    icon: Wifi,
    color: 'from - green - 500 to - emerald - 600',
    features: ['Edge Processing', 'IoT Orchestration', '5G Optimization'],
  },
  {
    title: 'Cybersecurity',
    description:;
      'Comprehensive security framework with continuous verification',
    services: advancedITInfrastructureServices2025.filter (
      string => s.category === 'Cybersecurity'),
    icon: SecurityIcon,
    color: 'from - red - 500 to - orange - 600',
    features: ['Zero Trust', 'Threat Detection', 'Compliance Automation'],
  },
  {
    title: 'Data Center Infrastructure',
    description:;
      'Self - managing data center infrastructure with AI optimization',
    services: advancedITInfrastructureServices2025.filter (
      string => s.category === 'Data Center Infrastructure'),
    icon: Building,
    color: 'from - blue - 500 to - cyan - 600',
    features: ['AI Management', 'Predictive Maintenance', 'Cost Optimization'],
  },
  {
    title: 'Quantum Networking',
    description:;
      'Next - generation networking with quantum encryption and optimization',
    services: advancedITInfrastructureServices2025.filter (
      string => s.category === 'Quantum Networking'),
    icon: Network,

    content:;
      "Zion Tech Group's quantum cloud infrastructure has revolutionized our research capabilities. We've achieved computational breakthroughs that were previously impossible.",

    rating: 5,
    avatar: '👩‍🔬'
  };
  {
    name: 'Robert Thompson',
    role: 'Infrastructure Director, EdgeNet Solutions',
    company: 'EdgeNet Solutions',

    content:;
      'The autonomous edge computing network has transformed our IoT operations. We now have real - time processing with 90% lower latency and 70% cost reduction.',

    rating: 5,
    avatar: '👨‍💼'
  };
  {
    name: 'Lisa Chang',
    role: 'Security CISO, SecureCorp International',
    company: 'SecureCorp International',

    color: 'from-purple-500 to-pink-600',


export default function AdvancedITInfrastructureServices() {

  return (

          href='https://ziontechgroup && ziontechgroup.com/advanced-it-infrastructure-services'
        />;
      </Head>;

      {/* Hero Section */}




      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-blue-900/20 to-cyan-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div

            initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}










          >

            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              Advanced IT Infrastructure Services
            </h1>

            <p className='text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
              Revolutionary infrastructure solutions with quantum computing
              edge computing, and AI-powered automation for the future
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionary infrastructure solutions with quantum computing, edge computing, and AI-powered automation for the future

            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
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









                >
                  {stat.icon}
                  <span className="text-blue-400 font-semibold">{stat.value}</span>
                  <span className="text-gray-300 text-sm">{stat.label}</span>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#services" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-600 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">
                Explore Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link href={`tel:${contactInfo.mobile}`} className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white font-semibold rounded-lg border border-blue-500/30 hover:bg-white/20 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default advanced-it-infrastructure-services;
