<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

import React from 'react';


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
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
import Head from 'next / head';
import { motion } from 'framer-motion';
import { 
  Star, TrendingUp, Zap, Brain, Rocket, Shield, 
  DollarSign, Users, Clock, CheckCircle, ArrowRight;
  Phone, Mail, MapPin, ExternalLink
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { emergingTechServicesEnhanced2025  } from '../data/emerging-tech-services';
import { nextGenAIServices } from '../data/next-gen-ai-services';
export default function InnovativeServicesShowcase() {
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
};
  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com',    website: 'https://ziontechgroup.com'
  }
  const containerVariants = {
    hidden: { opacity: 0 }
import {
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react',
import React from 'react';
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import Head from 'next/head';
import { motion } from 'framer-motion';

import {
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======

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
import Head from 'next / head';
import { motion } from 'framer-motion';

import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { emergingTechServicesEnhanced2025  } from '../data/emerging-tech-services';
import { nextGenAIServices } from '../data/next-gen-ai-services';


=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Star
  TrendingUp
  Zap
  Brain
  Rocket
  Shield
  DollarSign
  Users
  Clock
  CheckCircle
  ArrowRight
  Phone
  Mail
  MapPin
  ExternalLink;} from 'lucide-react';import {
  Star, TrendingUp, Zap, Brain, Rocket, Shield

<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  Star,
  TrendingUp,
  Zap,
  Brain,
  Rocket,
  Shield,
  DollarSign,
  Users,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
<<<<<<< HEAD

  MapPin,;
  ExternalLink,;} from 'lucide-react';import {
  Star, TrendingUp, Zap, Brain, Rocket, Shield, ;

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  DollarSign, Users, Clock, CheckCircle, ArrowRight;
=======
<<<<<<< HEAD
  MapPin,
  ExternalLink,} from 'lucide-react';import {
  Star, TrendingUp, Zap, Brain, Rocket, Shield,
  DollarSign, Users, Clock, CheckCircle, ArrowRight;
  Phone, Mail, MapPin, ExternalLink;
import UltraAdvancedFuturisticBackground from '../components / ui / UltraAdvancedFuturisticBackground';
import UltraFuturisticCard from '../components / ui / UltraFuturisticCard';
import { emergingTechServicesEnhanced2025 } from '../data / emerging - tech - services';
import { nextGenAIServices } from '../data / next - gen - ai - services';
export default /**
 * InnovativeServicesShowcase - Function description
 */
function InnovativeServicesShowcase() {
  const contact_info = {
=======
  MapPin,;
  ExternalLink,;} from 'lucide-react';import {
  Star, TrendingUp, Zap, Brain, Rocket, Shield, ;
  DollarSign, Users, Clock, CheckCircle, ArrowRight;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  Phone, Mail, MapPin, ExternalLink
 } from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground',
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import { emergingTechServicesEnhanced2025  } from '../data/emerging-tech-services';
import { nextGenAIServices } from '../data/next-gen-ai-services';
export default function InnovativeServicesShowcase() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  const contactInfo = {

=======
  const contactInfo = {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',    website: 'https://ziontechgroup.com';
<<<<<<< HEAD

  };

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com',    website: 'https://ziontechgroup.com'

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  }
;
  const container_variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1
      transition: {
<<<<<<< HEAD
<<<<<<< HEAD

=======


        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },  };

  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },  };

  };



>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  const featuredServices = [
    {
      title: '🔐 Quantum Internet Security Platform'
      description:
        'ArrowRight-generation quantum-secured internet infrastructure with unbreakable encryption. Protect enterprise networks with quantum-resistant protocols.'
      price: '$8,999/month'
      marketData: '$150B cybersecurity market, 300% annual growth'
      savings: 'Quantum-level protection vs. traditional methods'
      features: [
        'Quantum key distribution (QKD)'
        'Post-quantum cryptography'
        'Quantum-resistant VPN tunnels'
        'Real-time threat detection'
        'Zero-trust architecture'
      ]
      link: 'https://ziontechgroup.com/quantum-internet-security-platform'
<<<<<<< HEAD
      color: 'from-indigo-600 to-purple-700'
    }
    {
      title: '🧬 AI-Powered Quantum Drug Discovery'
      description:
        'Revolutionary platform combining quantum computing and AI to accelerate drug discovery by 100x. Simulates molecular interactions at quantum level.'
      price: '$12,999/month'
      marketData: '$150B AI in healthcare, 400% annual growth'
      competitors: 'Insitro ($100M+ funding), Recursion ($2B+ funding)'
      savings: '100x faster drug discovery vs. traditional methods'
      features: [
        'Quantum molecular simulation'
        'AI-powered drug screening'
        'Protein folding prediction'
        'Drug interaction modeling'
        'Clinical trial optimization'
      ]
      link: 'https://ziontechgroup.com/ai-quantum-drug-discovery'
      color: 'from-emerald-600 to-teal-700'
    }
    {
      title: '💰 Autonomous Quantum Trading System'
      description:
        'AI-powered quantum trading with nanosecond precision. Process market data at quantum speeds for unprecedented accuracy and returns.'
      price: '$15,999/month'
      marketData: '$15T algorithmic trading, 200% annual growth'
      competitors: 'Renaissance Technologies, Two Sigma, Citadel'
      savings: 'Accessible quantum AI for smaller firms'
      features: [
        'Quantum AI trading algorithms'
        'Nanosecond execution'
        'Real-time market analysis'
        'Risk management'
        'Portfolio optimization'
      ]
      link: 'https://ziontechgroup.com/autonomous-quantum-trading-system'
      color: 'from-yellow-600 to-orange-700'
    }
    {
      title: '🧠 Neural Interface Development Platform'
      description:
        'Revolutionary platform for developing neural interfaces that connect human brains directly to computers. Enables next-generation human-AI collaboration.'
      price: '$19,999/month'
      marketData: '$5B neural interface market, 500% annual growth'
      competitors: 'Basic research tools, Traditional medical devices'
      savings: 'First comprehensive neural interface platform'
      features: [
        'Neural signal processing'
        'Brain activity monitoring'
        'AI-powered interpretation'
        'Real-time communication'
        'Safety protocols'
      ]
      link: 'https://ziontechgroup.com/neural-interface-development-platform'
      color: 'from-purple-600 to-indigo-700'
    },  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <div className='min-h-screen'>      color: 'from-indigo-600 to-purple-700'
=======
=======
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
=======
=======
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        stagger_children: 0.1,
        delay_children: 0.2,
      },
    },  }        delay_children: 0.2;
      }
    }
  }
;
  const item_variants = {
    hidden: { opacity: 0, coordinate_y: 30 },
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    visible: {
      opacity: 1,
      coordinate_y: 0,
      transition: {
        duration: 0.6,
<<<<<<< HEAD

        ease: 'ease_out',
      },
    },  }        ease: "ease_out";

=======
        ease: 'ease_out',
      },
    },  }        ease: "ease_out";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      }
    }
  }
;
  const featured_services = [;
    {
      title: '🔐 Quantum Internet Security Platform',
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export default function InnovativeServicesShowcase() {;
  const contactInfo = {;
    mobile: '+1 302 464 0950',;
    email: 'kleber@ziontechgroup && ziontechgroup.com',;
    address: '364 E Main St STE 1008 Middletown DE 19709',;
    website: 'https://ziontechgroup && ziontechgroup.com',    website: 'https://ziontechgroup && ziontechgroup.com';
  };
  const containerVariants = {;
    hidden: { opacity: 0 },;
    visible: {;
      opacity: 1,;
      transition: {;
        staggerChildren: 0 && 0.1,;
        delayChildren: 0 && 0.2,;
      },;
    },  };        delayChildren: 0 && 0.2;
      }
    }
  };
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const itemVariants = {;
    hidden: { opacity: 0, y: 30 },;
    visible: {;
      opacity: 1,;
      y: 0,;
      transition: {;
        duration: 0 && 0.6,;
        ease: 'easeOut',;
      },;
    },  };        ease: "easeOut";
      }
    }
  };
  const featuredServices = [;
    {;
      title: '🔐 Quantum Internet Security Platform',;
      description:;
        'ArrowRight-generation quantum-secured internet infrastructure with unbreakable encryption. Protect enterprise networks with quantum-resistant protocols.',;
      price: '$8,999/month',;
      marketData: '$150B cybersecurity market, 300% annual growth',;
      savings: 'Quantum-level protection vs. traditional methods',;
      features: [;
        'Quantum key distribution (QKD)',;
        'Post-quantum cryptography',;
        'Quantum-resistant VPN tunnels',;
        'Real-time threat detection',;
        'Zero-trust architecture',;
      ],;
      link: 'https://ziontechgroup && ziontechgroup.com/quantum-internet-security-platform',;
      color: 'from-indigo-600 to-purple-700',;
    },;
    {;
      title: '🧬 AI-Powered Quantum Drug Discovery',;
      description:;
        'Revolutionary platform combining quantum computing and AI to accelerate drug discovery by 100x. Simulates molecular interactions at quantum level.',;
      price: '$12,999/month',;
      marketData: '$150B AI in healthcare, 400% annual growth',;
      competitors: 'Insitro ($100M+ funding), Recursion ($2B+ funding)',;
      savings: '100x faster drug discovery vs. traditional methods',;
      features: [;
        'Quantum molecular simulation',;
        'AI-powered drug screening',;
        'Protein folding prediction',;
        'Drug interaction modeling',;
        'Clinical trial optimization',;
      ],;
      link: 'https://ziontechgroup && ziontechgroup.com/ai-quantum-drug-discovery',;
      color: 'from-emerald-600 to-teal-700',;
    },;
    {;
      title: '💰 Autonomous Quantum Trading System',;
      description:;
        'AI-powered quantum trading with nanosecond precision. Process market data at quantum speeds for unprecedented accuracy and returns.',;
      price: '$15,999/month',;
      marketData: '$15T algorithmic trading, 200% annual growth',;
      competitors: 'Renaissance Technologies, Two Sigma, Citadel',;
      savings: 'Accessible quantum AI for smaller firms',;
      features: [;
        'Quantum AI trading algorithms',;
        'Nanosecond execution',;
        'Real-time market analysis',;
        'Risk management',;
        'Portfolio optimization',;
      ],;
      link: 'https://ziontechgroup && ziontechgroup.com/autonomous-quantum-trading-system',;
      color: 'from-yellow-600 to-orange-700',;
    },;
    {;
      title: '🧠 Neural Interface Development Platform',;
      description:;
        'Revolutionary platform for developing neural interfaces that connect human brains directly to computers. Enables next-generation human-AI collaboration.',;
      price: '$19,999/month',;
      marketData: '$5B neural interface market, 500% annual growth',;
      competitors: 'Basic research tools, Traditional medical devices',;
      savings: 'First comprehensive neural interface platform',;
      features: [;
        'Neural signal processing',;
        'Brain activity monitoring',;
        'AI-powered interpretation',;
        'Real-time communication',;
        'Safety protocols',;
      ],;
      link: 'https://ziontechgroup && ziontechgroup.com/neural-interface-development-platform',;
      color: 'from-purple-600 to-indigo-700',;
    },  ];
<<<<<<< HEAD
=======
    },  ];



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return (

=======
  return (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <UltraAdvancedFuturisticBackground>;
      <div className='min-h-screen'>      color: 'from-indigo-600 to-purple-700';
    };
    {;
      title: '🧬 AI-Powered Quantum Drug Discovery',;
      description: 'Revolutionary platform combining quantum computing and AI to accelerate drug discovery by 100x. Simulates molecular interactions at quantum level.',;
      price: '$12,999/month';
      marketData: '$150B AI in healthcare, 400% annual growth';
      competitors: 'Insitro ($100M+ funding), Recursion ($2B+ funding)';
      savings: '100x faster drug discovery vs. traditional methods',;
      features: ['Quantum molecular simulationAI-powered drug screeningProtein folding predictionDrug interaction modelingClinical trial optimization'],;
      link: 'https://ziontechgroup && ziontechgroup.com/ai-quantum-drug-discovery',;
      color: 'from-emerald-600 to-teal-700';
    };
    {;
      title: '💰 Autonomous Quantum Trading System',;
      description: 'AI-powered quantum trading with nanosecond precision. Process market data at quantum speeds for unprecedented accuracy and returns.',;
      price: '$15,999/month';
      marketData: '$15T algorithmic trading, 200% annual growth';
      competitors: 'Renaissance Technologies, Two Sigma, Citadel';
      savings: 'Accessible quantum AI for smaller firms',;
      features: ['Quantum AI trading algorithmsNanosecond executionReal-time market analysisRisk managementPortfolio optimization'],;
      link: 'https://ziontechgroup && ziontechgroup.com/autonomous-quantum-trading-system',;
      color: 'from-yellow-600 to-orange-700';
    };
    {;
      title: '🧠 Neural Interface Development Platform',;
      description: 'Revolutionary platform for developing neural interfaces that connect human brains directly to computers. Enables next-generation human-AI collaboration.',;
      price: '$19,999/month';
      marketData: '$5B neural interface market, 500% annual growth';
      competitors: 'Basic research tools, Traditional medical devices';
      savings: 'First comprehensive neural interface platform',;
      features: ['Neural signal processingBrain activity monitoringAI-powered interpretationReal-time communicationSafety protocols'],;
      link: 'https://ziontechgroup && ziontechgroup.com/neural-interface-development-platform',;
      color: 'from-purple-600 to-indigo-700';
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      description:;
        'ArrowRight - generation quantum - secured internet infrastructure with unbreakable encryption. Protect enterprise networks with quantum - resistant protocols.',
      price: '$8, 999 / month',
      market_data: '$150B cybersecurity market, 300% annual growth',
      savings: 'Quantum - level protection vs. traditional methods',
      features: [;
        'Quantum key distribution (QKD)',
        'Post - quantum cryptography',
        'Quantum - resistant VPN tunnels',
        'Real - time threat detection',
        'Zero - trust architecture',
      ],
      link: 'https://ziontechgroup.com / quantum - internet - security - platform',
      color: 'from - indigo - 600 to - purple - 700',
    },
    {
      title: '🧬 AI - Powered Quantum Drug Discovery',
      description:;
        'Revolutionary platform combining quantum computing and AI to accelerate drug discovery by 100x. Simulates molecular interactions at quantum level.',
      price: '$12, 999 / month',
      market_data: '$150B AI in healthcare, 400% annual growth',
      competitors: 'Insitro ($100M+ funding), Recursion ($2B+ funding)',
      savings: '100x faster drug discovery vs. traditional methods',
      features: [;
        'Quantum molecular simulation',
        'AI - powered drug screening',
        'Protein folding prediction',
        'Drug interaction modeling',
        'Clinical trial optimization',
      ],
      link: 'https://ziontechgroup.com / ai - quantum - drug - discovery',
      color: 'from - emerald - 600 to - teal - 700',
    },
    {
      title: '💰 Autonomous Quantum Trading System',
      description:;
        'AI - powered quantum trading with nanosecond precision. Process market data at quantum speeds for unprecedented accuracy and returns.',
      price: '$15, 999 / month',
      market_data: '$15T algorithmic trading, 200% annual growth',
      competitors: 'Renaissance Technologies, Two Sigma, Citadel',
      savings: 'Accessible quantum AI for smaller firms',
      features: [;
        'Quantum AI trading algorithms',
        'Nanosecond execution',
        'Real - time market analysis',
        'Risk management',
        'Portfolio optimization',
      ],
      link: 'https://ziontechgroup.com / autonomous - quantum - trading - system',
      color: 'from - yellow - 600 to - orange - 700',
    },
    {
      title: '🧠 Neural Interface Development Platform',
      description:;
        'Revolutionary platform for developing neural interfaces that connect human brains directly to computers. Enables next - generation human - AI collaboration.',
      price: '$19, 999 / month',
      market_data: '$5B neural interface market, 500% annual growth',
      competitors: 'Basic research tools, Traditional medical devices',
      savings: 'First comprehensive neural interface platform',
      features: [;
        'Neural signal processing',
        'Brain activity monitoring',
        'AI - powered interpretation',
        'Real - time communication',
        'Safety protocols',
      ],
      link: 'https://ziontechgroup.com / neural - interface - development - platform',
      color: 'from - purple - 600 to - indigo - 700',
    },  ];
;
  return (
    <UltraAdvancedFuturisticBackground>;
      <div className='min - h-screen'>      color: 'from - indigo - 600 to - purple - 700';
    }
    {
      title: '🧬 AI - Powered Quantum Drug Discovery',
      description: 'Revolutionary platform combining quantum computing and AI to accelerate drug discovery by 100x. Simulates molecular interactions at quantum level.',
      price: '$12, 999 / month';
      market_data: '$150B AI in healthcare, 400% annual growth';
      competitors: 'Insitro ($100M+ funding), Recursion ($2B+ funding)';
      savings: '100x faster drug discovery vs. traditional methods',
      features: ['Quantum molecular simulationAI - powered drug screening_protein folding prediction_drug interaction modeling_clinical trial optimization'],
      link: 'https://ziontechgroup.com / ai - quantum - drug - discovery',
      color: 'from - emerald - 600 to - teal - 700';
    }
    {
      title: '💰 Autonomous Quantum Trading System',
      description: 'AI - powered quantum trading with nanosecond precision. Process market data at quantum speeds for unprecedented accuracy and returns.',
      price: '$15, 999 / month';
      market_data: '$15T algorithmic trading, 200% annual growth';
      competitors: 'Renaissance Technologies, Two Sigma, Citadel';
      savings: 'Accessible quantum AI for smaller firms',
      features: ['Quantum AI trading algorithms_nanosecond execution_real - time market analysis_risk management_portfolio optimization'],
      link: 'https://ziontechgroup.com / autonomous - quantum - trading - system',
      color: 'from - yellow - 600 to - orange - 700';
    }
    {
      title: '🧠 Neural Interface Development Platform',
      description: 'Revolutionary platform for developing neural interfaces that connect human brains directly to computers. Enables next - generation human - AI collaboration.',
      price: '$19, 999 / month';
      market_data: '$5B neural interface market, 500% annual growth';
      competitors: 'Basic research tools, Traditional medical devices';
      savings: 'First comprehensive neural interface platform',
      features: ['Neural signal processing_brain activity monitoringAI - powered interpretation_real - time communication_safety protocols'],
      link: 'https://ziontechgroup.com / neural - interface - development - platform',
      color: 'from - purple - 600 to - indigo - 700';
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
    }
  ];
<<<<<<< HEAD
=======

            href='https://ziontechgroup && ziontechgroup.com/innovative-services-showcase'
          />;
        </Head>;


=======
    }
  ];
;
  return (
    <UltraAdvancedFuturisticBackground>;
            href='https://ziontechgroup && ziontechgroup.com/innovative-services-showcase'
          />;
        </Head>;
        {/* Hero Section */}
        <section className='relative py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto text-center'>;
            <motion&& motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
  ];
  return (
    <UltraAdvancedFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>Innovative Services Showcase - Zion Tech Group | Cutting-Edge Technology</title>
          <meta name="description" content="Discover our most innovative and cutting-edge services including quantum internet security, AI drug discovery, quantum trading, and neural interfaces. Contact: +1 302 464 0950" />
          <meta name="keywords" content="innovative services, quantum security, AI drug discovery, quantum trading, neural interfaces, cutting-edge technology" />
          <meta property="og:title" content="Innovative Services Showcase - Zion Tech Group" />
          <meta property="og:description" content="Cutting-edge technology services showcase" />
          <meta property="og:url" content="https://ziontechgroup.com/innovative-services-showcase" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase" />
        </Head>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Innovative
                </span>
                <br />
                <span className="text-white">Services Showcase</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Experience the future of technology with our most revolutionary and cutting-edge services. 
                These are the innovations that will transform industries and reshape the world.
              </p>
              {/* Contact Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-white font-semibold">Phone</div>
                  <div className="text-gray-400">{contactInfo.mobile}</div>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <div className="text-white font-semibold">Email</div>
                  <div className="text-gray-400">{contactInfo.email}</div>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-400">{contactInfo.address}</div>

  const _containerVariants = {_hidden: { opacity: 0}
    visible: {_opacity: 1, _transition: {
        staggerChildren: 0.1, _delayChildren: 0.2}
    }
  },
=======
  };

  const contactInfo = {
    mobile: '+1 302 464 0950'
    email: 'kleber@ziontechgroup.com'
    address: '364 E Main St STE 1008 Middletown DE 19709'
    website: 'https://ziontechgroup.com',    website: 'https://ziontechgroup.com'
  }
  const containerVariants = {
    hidden: { opacity: 0 }
    visible: {
      opacity: 1
      transition: {
        staggerChildren: 0.1
        delayChildren: 0.2
      }
    },  };        delayChildren: 0.2
      }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 30 }
    visible: {
      opacity: 1
      y: 0
      transition: {
        duration: 0.6
        ease: 'easeOut'
      }
    },  };        ease: "easeOut"
      }
    }
  }
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },  };

  };
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
<<<<<<< HEAD
        ease: &quot;easeOut&quot;
      }
    }
  },

  const featuredServices = [
    {
      title: '🔐 Quantum Internet Security Platform',
      description: 'ArrowRight-generation quantum-secured internet infrastructure with unbreakable encryption. Protect enterprise networks with quantum-resistant protocols.',
      price: '$8,999/month',
      marketData: '$150B cybersecurity market, 300% annual growth',
      competitors: 'Traditional cybersecurity solutions',
      savings: 'Quantum-level protection vs. traditional methods',
      features: ['Quantum key distribution (QKD)Post-quantum cryptographyQuantum-resistant VPN tunnelsReal-time threat detectionZero-trust architecture'],
      link: 'https://ziontechgroup.com/quantum-internet-security-platform',
      color: 'from-indigo-600 to-purple-700'
    },
    {
      title: '🧬 AI-Powered Quantum Drug Discovery',
      description: 'Revolutionary platform combining quantum computing and AI to accelerate drug discovery by 100x. Simulates molecular interactions at quantum level.',
      price: '$12,999/month',
      marketData: '$150B AI in healthcare, 400% annual growth',
      competitors: 'Insitro ($100M+ funding), Recursion ($2B+ funding)',
      savings: '100x faster drug discovery vs. traditional methods',
      features: ['Quantum molecular simulationAI-powered drug screeningProtein folding predictionDrug interaction modelingClinical trial optimization'],
      link: 'https://ziontechgroup.com/ai-quantum-drug-discovery',
      color: 'from-emerald-600 to-teal-700'
    },
    {
      title: '💰 Autonomous Quantum Trading System',
      description: 'AI-powered quantum trading with nanosecond precision. Process market data at quantum speeds for unprecedented accuracy and returns.',
      price: '$15,999/month',
      marketData: '$15T algorithmic trading, 200% annual growth',
      competitors: 'Renaissance Technologies, Two Sigma, Citadel',
      savings: 'Accessible quantum AI for smaller firms',
      features: ['Quantum AI trading algorithmsNanosecond executionReal-time market analysisRisk managementPortfolio optimization'],
      link: 'https://ziontechgroup.com/autonomous-quantum-trading-system',
      color: 'from-yellow-600 to-orange-700'
    },
    {
      title: '🧠 Neural Interface Development Platform',
      description: 'Revolutionary platform for developing neural interfaces that connect human brains directly to computers. Enables next-generation human-AI collaboration.',
      price: '$19,999/month',
      marketData: '$5B neural interface market, 500% annual growth',
      competitors: 'Basic research tools, Traditional medical devices',
      savings: 'First comprehensive neural interface platform',
      features: ['Neural signal processingBrain activity monitoringAI-powered interpretationReal-time communicationSafety protocols'],
      link: 'https://ziontechgroup.com/neural-interface-development-platform',
      color: 'from-purple-600 to-indigo-700'
    }
  ],

  return (
    <UltraAdvancedFuturisticBackground>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Innovative Services Showcase - Zion Tech Group | Cutting-Edge Technology</title>
          <meta name=&quot;description&quot; content=&quot;Discover our most innovative and cutting-edge services including quantum internet security, AI drug discovery, quantum trading, and neural interfaces. Contact: +1 302 464 0950&quot; />
          <meta name=&quot;keywords&quot; content=&quot;innovative services, quantum security, AI drug discovery, quantum trading, neural interfaces, cutting-edge technology&quot; />
          <meta property=&quot;og:title&quot; content=&quot;Innovative Services Showcase - Zion Tech Group&quot; />
          <meta property=&quot;og:description&quot; content=&quot;Cutting-edge technology services showcase&quot; />
          <meta property=&quot;og:url&quot; content=&quot;https://ziontechgroup.com/innovative-services-showcase&quot; />
          <meta property=&quot;og:type&quot; content=&quot;website&quot; />
          <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/innovative-services-showcase&quot; />
        </Head>

        {/* Hero Section */}
        <section className=&quot;relative py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: &quot;easeOut&quot; }}
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold text-white mb-6 leading-tight&quot;>
                <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                  Innovative
                </span>
                <br />
                <span className=&quot;text-white&quot;>Services Showcase</span>
              </h1>
              
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed&quot;>
                Experience the future of technology with our most revolutionary and cutting-edge services. 
                These are the innovations that will transform industries and reshape the world.
              </p>

              {/* Contact Info */}
              <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12&quot;>
                <div className=&quot;text-center&quot;>
                  <Phone className=&quot;w-8 h-8 text-cyan-400 mx-auto mb-3&quot; />
                  <div className=&quot;text-white font-semibold&quot;>Phone</div>
                  <div className=&quot;text-gray-400&quot;>{contactInfo.mobile}</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <Mail className=&quot;w-8 h-8 text-purple-400 mx-auto mb-3&quot; />
                  <div className=&quot;text-white font-semibold&quot;>Email</div>
                  <div className=&quot;text-gray-400&quot;>{contactInfo.email}</div>
                </div>
                <div className=&quot;text-center&quot;>
                  <MapPin className=&quot;w-8 h-8 text-pink-400 mx-auto mb-3&quot; />
                  <div className=&quot;text-white font-semibold&quot;>Address</div>
                  <div className=&quot;text-gray-400&quot;>{contactInfo.address}</div>

                </div>
=======
        ease: 'easeOut',
      },
    },  };

  };

  const featuredServices = [
    {
      title: '🔐 Quantum Internet Security Platform'
      description:
        'ArrowRight-generation quantum-secured internet infrastructure with unbreakable encryption. Protect enterprise networks with quantum-resistant protocols.'
      price: '$8,999/month'
      marketData: '$150B cybersecurity market, 300% annual growth'
      savings: 'Quantum-level protection vs. traditional methods'
      features: [
        'Quantum key distribution (QKD)'
        'Post-quantum cryptography'
        'Quantum-resistant VPN tunnels'
        'Real-time threat detection'
        'Zero-trust architecture'
      ]
      link: 'https://ziontechgroup.com/quantum-internet-security-platform'
      color: 'from-indigo-600 to-purple-700'
    }
    {
      title: '🧬 AI-Powered Quantum Drug Discovery'
      description:
        'Revolutionary platform combining quantum computing and AI to accelerate drug discovery by 100x. Simulates molecular interactions at quantum level.'
      price: '$12,999/month'
      marketData: '$150B AI in healthcare, 400% annual growth'
      competitors: 'Insitro ($100M+ funding), Recursion ($2B+ funding)'
      savings: '100x faster drug discovery vs. traditional methods'
      features: [
        'Quantum molecular simulation'
        'AI-powered drug screening'
        'Protein folding prediction'
        'Drug interaction modeling'
        'Clinical trial optimization'
      ]
      link: 'https://ziontechgroup.com/ai-quantum-drug-discovery'
      color: 'from-emerald-600 to-teal-700'
    }
    {
      title: '💰 Autonomous Quantum Trading System'
      description:
        'AI-powered quantum trading with nanosecond precision. Process market data at quantum speeds for unprecedented accuracy and returns.'
      price: '$15,999/month'
      marketData: '$15T algorithmic trading, 200% annual growth'
      competitors: 'Renaissance Technologies, Two Sigma, Citadel'
      savings: 'Accessible quantum AI for smaller firms'
      features: [
        'Quantum AI trading algorithms'
        'Nanosecond execution'
        'Real-time market analysis'
        'Risk management'
        'Portfolio optimization'
      ]
      link: 'https://ziontechgroup.com/autonomous-quantum-trading-system'
      color: 'from-yellow-600 to-orange-700'
    }
    {
      title: '🧠 Neural Interface Development Platform'
      description:
        'Revolutionary platform for developing neural interfaces that connect human brains directly to computers. Enables next-generation human-AI collaboration.'
      price: '$19,999/month'
      marketData: '$5B neural interface market, 500% annual growth'
      competitors: 'Basic research tools, Traditional medical devices'
      savings: 'First comprehensive neural interface platform'
      features: [
        'Neural signal processing'
        'Brain activity monitoring'
        'AI-powered interpretation'
        'Real-time communication'
        'Safety protocols'
      ]
      link: 'https://ziontechgroup.com/neural-interface-development-platform'
      color: 'from-purple-600 to-indigo-700'
    },  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <div className='min-h-screen'>      color: 'from-indigo-600 to-purple-700'
    }
    {
      title: '🧬 AI-Powered Quantum Drug Discovery'
      description: 'Revolutionary platform combining quantum computing and AI to accelerate drug discovery by 100x. Simulates molecular interactions at quantum level.'
      price: '$12,999/month';
      marketData: '$150B AI in healthcare, 400% annual growth';
      competitors: 'Insitro ($100M+ funding), Recursion ($2B+ funding)';
      savings: '100x faster drug discovery vs. traditional methods'
      features: ['Quantum molecular simulationAI-powered drug screeningProtein folding predictionDrug interaction modelingClinical trial optimization']
      link: 'https://ziontechgroup.com/ai-quantum-drug-discovery'
      color: 'from-emerald-600 to-teal-700'
    }
    {
      title: '💰 Autonomous Quantum Trading System'
      description: 'AI-powered quantum trading with nanosecond precision. Process market data at quantum speeds for unprecedented accuracy and returns.'
      price: '$15,999/month';
      marketData: '$15T algorithmic trading, 200% annual growth';
      competitors: 'Renaissance Technologies, Two Sigma, Citadel';
      savings: 'Accessible quantum AI for smaller firms'
      features: ['Quantum AI trading algorithmsNanosecond executionReal-time market analysisRisk managementPortfolio optimization']
      link: 'https://ziontechgroup.com/autonomous-quantum-trading-system'
      color: 'from-yellow-600 to-orange-700'
    }
    {
      title: '🧠 Neural Interface Development Platform'
      description: 'Revolutionary platform for developing neural interfaces that connect human brains directly to computers. Enables next-generation human-AI collaboration.'
      price: '$19,999/month';
      marketData: '$5B neural interface market, 500% annual growth';
      competitors: 'Basic research tools, Traditional medical devices';
      savings: 'First comprehensive neural interface platform'
      features: ['Neural signal processingBrain activity monitoringAI-powered interpretationReal-time communicationSafety protocols']
      link: 'https://ziontechgroup.com/neural-interface-development-platform'
      color: 'from-purple-600 to-indigo-700'
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <div className='min-h-screen'>
          <title>
            Innovative Services Showcase - Zion Tech Group | Cutting-Edge
            Technology
          </title>
          <meta
            name='description'
            content='Discover our most innovative and cutting-edge services including quantum internet security, AI drug discovery, quantum trading, and neural interfaces. Contact: +1 302 464 0950'
          />
          <meta
            name='keywords'
            content='innovative services, quantum security, AI drug discovery, quantum trading, neural interfaces, cutting-edge technology'
          />
          <meta
            property='og:title'
            content='Innovative Services Showcase - Zion Tech Group'
          />
          <meta
            property='og:description'
            content='Cutting-edge technology services showcase'
          />
          <meta
            property='og:url'
            content='https://ziontechgroup.com/innovative-services-showcase'
          />
          <meta property='og:type' content='website' />
          <link
            rel='canonical'
            href='https://ziontechgroup.com/innovative-services-showcase'
          />
        </Head>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Hero Section */}
        <section className='relative py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto text-center'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD

  ];


=======
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>
                <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                  Innovative
                </span>
                <br />
                <span className='text-white'>Services Showcase</span>
              </h1>
              <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>
                Experience the future of technology with our most revolutionary
                and cutting-edge services. These are the innovations that will
                transform industries and reshape the world.
              </p>
              {/* Contact Info */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12'>
                <div className='text-center'>
                  <Phone className='w-8 h-8 text-cyan-400 mx-auto mb-3' />
                  <div className='text-white font-semibold'>Phone</div>
                  <div className='text-gray-400'>{contactInfo.mobile}</div>
                </div>
                <div className='text-center'>
                  <Mail className='w-8 h-8 text-purple-400 mx-auto mb-3' />
                  <div className='text-white font-semibold'>Email</div>
                  <div className='text-gray-400'>{contactInfo.email}</div>
                </div>
                <div className='text-center'>
                  <MapPin className='w-8 h-8 text-pink-400 mx-auto mb-3' />
                  <div className='text-white font-semibold'>Address</div>
                  <div className='text-gray-400'>{contactInfo.address}</div>                </div>                <div className="text-center">
                  <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <div className="text-white font-semibold">Address</div>
                  <div className="text-gray-400">{contactInfo.address}</div>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              </div>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD
transition={{ duration: 1, ease: 'easeOut' }}>;
              <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>;
                <span className='bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>;
                  Innovative;
                </span>;
                <br />;
                <span className='text-white'>Services Showcase</span>;
              </h1>;
              <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed'>;
                Experience the future of technology with our most revolutionary;
                and cutting-edge services. These are the innovations that will;
                transform industries and reshape the world.;
              </p>;
              {/* Contact Info */}
              <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12'>;
                <div className='text-center'>;
                  <Phone className='w-8 h-8 text-cyan-400 mx-auto mb-3' />;
                  <div className='text-white font-semibold'>Phone</div>;
                  <div className='text-gray-400'>{contactInfo && contactInfo.mobile}</div>;
                </div>;
                <div className='text-center'>;
                  <Mail className='w-8 h-8 text-purple-400 mx-auto mb-3' />;
                  <div className='text-white font-semibold'>Email</div>;
                  <div className='text-gray-400'>{contactInfo && contactInfo.email}</div>;
                </div>;
                <div className='text-center'>;
                  <MapPin className='w-8 h-8 text-pink-400 mx-auto mb-3' />;
                  <div className='text-white font-semibold'>Address</div>;
                  <div className='text-gray-400'>{contactInfo && contactInfo.address}</div>                </div>                <div className="text-center">;
                  <MapPin className="w-8 h-8 text-pink-400 mx-auto mb-3" />;
                  <div className="text-white font-semibold">Address</div>;
                  <div className="text-gray-400">{contactInfo && contactInfo.address}</div>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Featured Innovative Services */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto'>;
            <motion&& motion.div
              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div
              className="text-center mb-16"
<<<<<<< HEAD
=======
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  return (
    <UltraAdvancedFuturisticBackground>
      <div className='min-h-screen'>
<<<<<<< HEAD

=======


  ];

  return (
    <UltraAdvancedFuturisticBackground>

              initial={{ opacity: 0, y: 30 }}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>;
                  Featured;
                </span>{' '}
<<<<<<< HEAD


=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        {/* Featured Innovative Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
<<<<<<< HEAD
<<<<<<< HEAD
              initial={{ opacity: 0, y: 30 }}
=======
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  ];

  return (
    <UltraAdvancedFuturisticBackground>

              initial={{ opacity: 0, y: 30 }}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Featured
=======
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent'>
                  Featured
                </span>{' '}
                Innovative Services
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Our most revolutionary services that are pushing the boundaries
                of what's possible
              </p>
            </motion.div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>              {featuredServices.map((service, index) => (                  Featured
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </span> Innovative Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our most revolutionary services that are pushing the boundaries of what's possible
              </p>
            </motion.div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredServices.map((service, index) => (
                <motion.div
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                Innovative Services;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Our most revolutionary services that are pushing the boundaries;
                of what's possible;
              </p>;
            </motion && motion.div>;
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>              {featuredServices && featuredServices.map((service, index) => (                  Featured;
                </span> Innovative Services;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Our most revolutionary services that are pushing the boundaries of what's possible;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
              {featuredServices && featuredServices.map((service, index) => (;
                <motion&& motion.div
<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.2 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                  className='bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300'

=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
                >
                  <div className='mb-6'>
                    <h3 className='text-2xl font-bold text-white mb-4'>
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className='min - h-screen'>;
          <title>;
            Innovative Services Showcase - Zion Tech Group | Cutting - Edge;
            Technology;
          </title>;
          <meta;
            name='description';
            content='Discover our most innovative and cutting - edge services including quantum internet security, AI drug discovery, quantum trading, and neural interfaces. Contact: +1 302 464 0950';
          />;
          <meta;
            name='keywords';
            content='innovative services, quantum security, AI drug discovery, quantum trading, neural interfaces, cutting - edge technology';
          />;
          <meta;
            property='og:title';
            content='Innovative Services Showcase - Zion Tech Group';
          />;
          <meta;
            property='og:description';
            content='Cutting - edge technology services showcase';
          />;
          <meta;
            property='og:url';
            content='https://ziontechgroup.com / innovative - services - showcase';
          />;
          <meta property='og:type' content='website' />;
          <link;
            rel='canonical';
            href='https://ziontechgroup.com / innovative - services - showcase';
          />;
        </Head>;
        {/* Hero Section */}
        <section className='relative py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-7xl mx - auto text - center'>;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 50 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 1, ease: 'ease_out' }}
            >;
              <h1 className='text - 5xl md:text - 7xl font - bold text - white mb - 6 leading - tight'>;
                <span className='bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent'>;
                  Innovative;
                </span>;
                <br />;
                <span className='text - white'>Services Showcase</span>;
              </h1>;
              <p className='text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-4xl mx - auto leading - relaxed'>;
                Experience the future of technology with our most revolutionary;
                and cutting - edge services. These are the innovations that will;
                transform industries and reshape the world.;
              </p>;
              {/* Contact Info */}
              <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 max - w-4xl mx - auto mb - 12'>;
                <div className='text - center'>;
                  <Phone className='w - 8 h - 8 text - cyan - 400 mx - auto mb - 3' />;
                  <div className='text - white font - semibold'>Phone</div>;
                  <div className='text - gray - 400'>{contact_info.mobile}</div>;
                </div>;
                <div className='text - center'>;
                  <Mail className='w - 8 h - 8 text - purple - 400 mx - auto mb - 3' />;
                  <div className='text - white font - semibold'>Email</div>;
                  <div className='text - gray - 400'>{contact_info.email}</div>;
                </div>;
                <div className='text - center'>;
                  <MapPin className='w - 8 h - 8 text - pink - 400 mx - auto mb - 3' />;
                  <div className='text - white font - semibold'>Address</div>;
                  <div className='text - gray - 400'>{contact_info.address}</div>                </div>                <div className="text - center">;
                  <MapPin className="w - 8 h - 8 text - pink - 400 mx - auto mb - 3" />;
                  <div className="text - white font - semibold">Address</div>;
                  <div className="text - gray - 400">{contact_info.address}</div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Featured Innovative Services */}
        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-7xl mx - auto'>;
            <motion.div;
              className='text - center mb - 16'              initial={{ opacity: 0, coordinate_y: 30 }}        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              className="text - center mb - 16";
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                <span className='bg - gradient - to - r from - cyan - 400 to - purple - 400 bg - clip - text text - transparent'>;
                  Featured;
                </span>{' '}
                Innovative Services;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                Our most revolutionary services that are pushing the boundaries;
                of what's possible;
              </p>;
            </motion.div>;
            <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 8'>              {featured_services.map ((service, index) => (                  Featured;
                </span> Innovative Services;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
                Our most revolutionary services that are pushing the boundaries of what's possible;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 lg:grid - cols - 2 gap - 8">;
              {featured_services.map ((service, index) => (
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, coordinate_x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, coordinate_x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
<<<<<<< HEAD
                  className='bg - gradient - to - br from - gray - 900 / 80 to - gray - 800 / 80 backdrop - blur - sm border border - cyan - 500 / 20 rounded - 2xl p - 8 hover:border - cyan - 500 / 40 transition - all duration - 300';
                >;
                  <div className='mb - 6'>;
                    <h3 className='text - 2xl font - bold text - white mb - 4'>;
=======
                  className='bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300'

                >
                  <div className='mb-6'>
                    <h3 className='text-2xl font-bold text-white mb-4'>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      {service.title}
                    </h3>;
                    <p className='text - gray - 300 mb - 6 leading - relaxed'>;
                      {service.description}
<<<<<<< HEAD

                    </p>;
                    <div className='bg - gradient - to - r from - cyan - 500 / 10 to - purple - 500 / 10 p - 4 rounded - lg border border - cyan - 500 / 20 mb - 6'>;
                      <div className='text - 2xl font - bold text - cyan - 400 mb - 2'>;

=======
                    </p>;
                    <div className='bg - gradient - to - r from - cyan - 500 / 10 to - purple - 500 / 10 p - 4 rounded - lg border border - cyan - 500 / 20 mb - 6'>;
                      <div className='text - 2xl font - bold text - cyan - 400 mb - 2'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                        {service.price}
                      </div>;
                      <div className='text - sm text - gray - 400'>;
                        {service.market_data}
                      </div>;
                      <div className='text - sm text - green - 400 mt - 1'>;
                        {service.savings}
<<<<<<< HEAD

                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
                >

=======
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
                >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/20 mb-6">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.marketData}</div>
                      <div className="text-sm text-green-400 mt-1">{service.savings}</div>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
<<<<<<< HEAD


=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  className='bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300'>;
                  <div className='mb-6'>;
                    <h3 className='text-2xl font-bold text-white mb-4'>;
                      {service && service.title}
                    </h3>;
                    <p className='text-gray-300 mb-6 leading-relaxed'>;
                      {service && service.description}
                    </p>;
                    <div className='bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/20 mb-6'>;
                      <div className='text-2xl font-bold text-cyan-400 mb-2'>;
                        {service && service.price}
                      </div>;
                      <div className='text-sm text-gray-400'>;
                        {service && service.marketData}
                      </div>;
                      <div className='text-sm text-green-400 mt-1'>;
                        {service && service.savings}
                      </div>;
                    </div>;
                    <div className='mb-6'>;
                      <h4 className='text-lg font-semibold text-white mb-3'>;
                        Key Features:;
                      </h4>;
                      <ul className='space-y-2'>;
                        {service && service.features.map((feature, idx) => (;
                          <li
                            key={idx}
                            className='flex items-center text-gray-300'>;
                            <CheckCircle className='w-5 h-5 text-green-400 mr-3 flex-shrink-0' />                            {feature}                >;
                  <div className="mb-6">;
                    <h3 className="text-2xl font-bold text-white mb-4">{service && service.title}</h3>;
                    <p className="text-gray-300 mb-6 leading-relaxed">{service && service.description}</p>;
                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 rounded-lg border border-cyan-500/20 mb-6">;
                      <div className="text-2xl font-bold text-cyan-400 mb-2">{service && service.price}</div>;
                      <div className="text-sm text-gray-400">{service && service.marketData}</div>;
                      <div className="text-sm text-green-400 mt-1">{service && service.savings}</div>;
                    </div>;
                    <div className="mb-6">;
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>;
                      <ul className="space-y-2">;
                        {service && service.features.map((feature, idx) => (;
                          <li key={idx} className="flex items-center text-gray-300">;
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                            {feature}
                          </li>;
                        ))}

=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                            {feature}
                          </li>;
                        ))}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      </ul>;
                    </div>;
                    <div className='flex flex-col sm:flex-row gap-3'>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      <a
                        href={service && service.link}
                        className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center justify-center space-x-2'>;
                        <span>Learn More</span>;
                        <ExternalLink className='w-5 h-5' />;
                      </a>;
=======
                      </ul>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-3'>
                      <a
                        href={service.link}
                        className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center justify-center space-x-2'
                      >
                        <span>Learn More</span>
                        <ExternalLink className='w-5 h-5' />
                      </a>
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                      <a
                        href='/contact'
                        className='border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>                      <a
                        href={service && service.link}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center justify-center space-x-2">;
                        <span>Learn More</span>;
                        <ExternalLink className="w-5 h-5" />;
                      </a>;
                      <a
                        href="/contact"
                        className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30">;
                        Get Started;
                      </a>;
                    </div>;
                  </div>;
                </motion && motion.div>;
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href={service.link}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/25 inline-flex items-center justify-center space-x-2"
                      >
                        <span>Learn More</span>
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href="/contact"
                        className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-3 px-6 rounded-full text-center transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </motion.div>
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
              ))}
<<<<<<< HEAD
            </div>
          </div>
        </section>

=======

            </div>;
          </div>;
        </section>;


=======
              ))}
<<<<<<< HEAD
</div>;
          </div>;
        </section>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Emerging Tech Services */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto'>;
            <motion&& motion.div
              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div
              className="text-center mb-16"
<<<<<<< HEAD
=======



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
        {/* Emerging Tech Services */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
<<<<<<< HEAD

              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>
                  Emerging
                </span>{' '}
                Tech Services
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Discover the latest technologies that are emerging and
                transforming industries
              </p>
            </motion.div>

=======

              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}

              initial={{ opacity: 0, y: 30 }}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                <span className='bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>;
                  Emerging;
                </span>{' '}





>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {emergingTechServicesEnhanced2025
                .slice(0, 6)
                .map((service, index) => (
                  <motion.div
                    key={service.id}
=======
=======
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                <span className='bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>;
                  Emerging;
                </span>{' '}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                Tech Services;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Discover the latest technologies that are emerging and;
                transforming industries;
              </p>;
            </motion && motion.div>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
              {emergingTechServicesEnhanced2025;
                .slice(0, 6);
                .map((service, index) => (;
                  <motion&& motion.div
                    key={service && service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                    viewport={{ once: true }}>;
                    <UltraFuturisticCard
                      variant='quantum-holographic'
                      className='p-6'>;
                      <div className='text-4xl mb-4'>{service && service.icon}</div>;
                      <h3 className='text-xl font-bold text-white mb-3'>;
                        {service && service.name}
                      </h3>;
                      <p className='text-gray-300 text-sm mb-4'>;
                        {service && service.description}
                      </p>;
                      <div className='text-2xl font-bold text-cyan-400 mb-2'>;
                        {service && service.price}
                        <span className='text-sm text-gray-400'>;
                          {service && service.period}
                        </span>;
                      </div>;
                      <div className='text-sm text-gray-400 mb-4'>;
                        {service && service.marketSize} • {service && service.growthRate}
                      </div>;
                      <a
                        href={service && service.link}
                        className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2'>;
                        <span>Learn More</span>;
                        <ArrowRight className='w-4 h-4' />;
                      </a>;
                    </UltraFuturisticCard>;
                  </motion && motion.div>;
                ))}
<<<<<<< HEAD

=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* Emerging Tech Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
<<<<<<< HEAD

=======
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
=======
            </div>
          </div>
        </section>

        {/* Emerging Tech Services */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}

              initial={{ opacity: 0, y: 30 }}

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<<<<<<< HEAD
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Emerging
<<<<<<< HEAD

=======
=======
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent'>
                  Emerging
                </span>{' '}
                Tech Services
              </h2>
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>
                Discover the latest technologies that are emerging and
                transforming industries
              </p>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {emergingTechServicesEnhanced2025
                .slice(0, 6)
                .map((service, index) => (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <UltraFuturisticCard
                      variant='quantum-holographic'
                      className='p-6'
                    >
                      <div className='text-4xl mb-4'>{service.icon}</div>
                      <h3 className='text-xl font-bold text-white mb-3'>
                        {service.name}
                      </h3>
                      <p className='text-gray-300 text-sm mb-4'>
                        {service.description}
                      </p>
                      <div className='text-2xl font-bold text-cyan-400 mb-2'>
                        {service.price}
                        <span className='text-sm text-gray-400'>
                          {service.period}
                        </span>
                      </div>
                      <div className='text-sm text-gray-400 mb-4'>
                        {service.marketSize} • {service.growthRate}
                      </div>
                      <a
                        href={service.link}
                        className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2'
                      >
                        <span>Learn More</span>
                        <ArrowRight className='w-4 h-4' />
                      </a>
                    </UltraFuturisticCard>
                  </motion.div>
                ))}
            </div>
            <motion.div
              className='text-center mt-16'              initial={{ opacity: 0, y: 30 }}                  Emerging
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </span> Tech Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover the latest technologies that are emerging and transforming industries
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {emergingTechServicesEnhanced2025.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
            </div>;
            <motion&& motion.div
              className='text-center mt-16'              initial={{ opacity: 0, y: 30 }}                  Emerging
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                </span> Tech Services;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Discover the latest technologies that are emerging and transforming industries;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
                              {emergingTechServicesEnhanced2025 && emergingTechServicesEnhanced2025.slice(0, 6).map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.8, delay: index * 0 && 0.1 }}
                  viewport={{ once: true }}>;
                  <UltraFuturisticCard variant="quantum-holographic" className="p-6">;
                    <div className="text-4xl mb-4">{service && service.icon}</div>;
                    <h3 className="text-xl font-bold text-white mb-3">{service && service.name}</h3>;
                    <p className="text-gray-300 text-sm mb-4">{service && service.description}</p>;
                    <div className="text-2xl font-bold text-cyan-400 mb-2">;
                      {service && service.price}
                      <span className="text-sm text-gray-400">{service && service.period}</span>;
                    </div>;
                    <div className="text-sm text-gray-400 mb-4">{service && service.marketSize} • {service && service.growthRate}</div>;
                    <a
                      href={service && service.link}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2">;
                      <span>Learn More</span>;
                      <ArrowRight className="w-4 h-4" />;
                    </a>;
                  </UltraFuturisticCard>;
                </motion && motion.div>;
              ))}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            </div>;
            <motion&& motion.div
<<<<<<< HEAD

              className="text-center mt-16"
=======

              className='text-center mt-16'              initial={{ opacity: 0, y: 30 }}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}


              whileInView={{ opacity: 1, y: 0 }}
=======
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
href="/services"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-emerald-500/25 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Emerging Tech</span>
<ArrowRight className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </section>
className='bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-emerald-500/25 inline-flex items-center space-x-2'                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}>;
                <span>View All Emerging Tech</span>;
                <ArrowRight className='w-6 h-6' />              </motion && motion.a>                href="/services";
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-emerald-500/25 inline-flex items-center space-x-2";
                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}
              >;
                <span>View All Emerging Tech</span>;
                <ArrowRight className='w-6 h-6' />                <ArrowRight className="w-6 h-6" />;
              </motion && motion.a>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* ArrowRight-Gen AI Services */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto'>;
            <motion&& motion.div
              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-7xl mx-auto">;
            <motion&& motion.div
              className="text-center mb-16"
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                <span className='bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent'>;
                  ArrowRight-Generation;
                </span>{' '}
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        {/* ArrowRight-Gen AI Services */}
<<<<<<< HEAD
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <motion.div

=======
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
<h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  ArrowRight-Generation
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                </span> AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the future of artificial intelligence with our most advanced services
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nextGenAIServices.slice(0, 6).map((service, index) => (
                <motion.div
                  key={service.id}
                AI Services;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Experience the future of artificial intelligence with our most;
                advanced services;
              </p>;
            </motion && motion.div>;
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>              {nextGenAIServices && nextGenAIServices.slice(0, 6).map((service, index) => (                  ArrowRight-Generation;
                </span> AI Services;
              </h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                Experience the future of artificial intelligence with our most advanced services;
              </p>;
            </motion && motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
              {nextGenAIServices && nextGenAIServices.slice(0, 6).map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
<<<<<<< HEAD

            </div>
            <motion.div

              className='text-center mt-16'              initial={{ opacity: 0, y: 30 }}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <motion&& motion.a
                href='/services'
=======

            </div>;

            <motion&& motion.div

              className='text-center mt-16'              initial={{ opacity: 0, y: 30 }}              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <motion&& motion.a
                href='/services'

                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
<<<<<<< HEAD
                  <UltraFuturisticCard
                    variant='quantum-holographic'
                    className='p-6'
                  >
                    <div className='text-4xl mb-4'>{service.icon}</div>
                    <h3 className='text-xl font-bold text-white mb-3'>
                      {service.name}
                    </h3>
                    <p className='text-gray-400 text-sm mb-4'>
                      {service.description}
                    </p>
                    <div className='text-2xl font-bold text-cyan-400 mb-2'>
                      {service.price}
                      <span className='text-sm text-gray-400'>
                        {service.period}
                      </span>
                    </div>
                    <div className='text-sm text-gray-400 mb-4'>
                      {service.marketSize} • {service.growthRate}
                    </div>
                    <a
                      href={service.link}
                      className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2'
                    >
                      <span>Learn More</span>
                      <ArrowRight className='w-4 h-4' />                    </a>                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">{service.marketSize} • {service.growthRate}</div>
                    <a
                      href={service.link}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
            <motion.div

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
=======
=======
            </div>;
            <motion&& motion.div
              className='text-center mt-16'              initial={{ opacity: 0, y: 30 }}              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <motion&& motion.a
                href='/services'
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <UltraFuturisticCard variant="quantum-holographic" className="p-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
<<<<<<< HEAD
                      </div>;
                    </div>;
                    <div className='mb - 6'>;
                      <h4 className='text - lg font - semibold text - white mb - 3'>;
                        Key Features:;
                      </h4>;
                      <ul className='space - y-2'>;
                        {service.features.map ((feature, idx) => (
                          <li;
                            key={idx}
                            className='flex items - center text - gray - 300';
                          >;
                            <CheckCircle className='w - 5 h - 5 text - green - 400 mr - 3 flex - shrink - 0' />                            {feature}                >;
                  <div className="mb - 6">;
                    <h3 className="text - 2xl font - bold text - white mb - 4">{service.title}</h3>;
                    <p className="text - gray - 300 mb - 6 leading - relaxed">{service.description}</p>;
                    <div className="bg - gradient - to - r from - cyan - 500 / 10 to - purple - 500 / 10 p - 4 rounded - lg border border - cyan - 500 / 20 mb - 6">;
                      <div className="text - 2xl font - bold text - cyan - 400 mb - 2">{service.price}</div>;
                      <div className="text - sm text - gray - 400">{service.market_data}</div>;
                      <div className="text - sm text - green - 400 mt - 1">{service.savings}</div>;
                    </div>;
                    <div className="mb - 6">;
                      <h4 className="text - lg font - semibold text - white mb - 3">Key Features:</h4>;
                      <ul className="space - y-2">;
                        {service.features.map ((feature, idx) => (
                          <li key={idx} className="flex items - center text - gray - 300">;
                            <CheckCircle className="w - 5 h - 5 text - green - 400 mr - 3 flex - shrink - 0" />;
                            {feature}
                          </li>))}
                      </ul>;
                    </div>;
                    <div className='flex flex - col sm:flex - row gap - 3'>;
                      <a;
                        href={service.link}
                        className='bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - bold py - 3 px - 6 rounded - full text - center transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 hover:shadow - 2xl hover:shadow - cyan - 500 / 25 inline - flex items - center justify - center space - x-2';
                      >;
                        <span > Learn More</span>;
                        <ExternalLink className='w - 5 h - 5' />;
                      </a>;
                      <a;
                        href='/contact';
                        className='border - 2 border - cyan - 400 text - cyan - 400 hover:bg - cyan - 400 hover:text - black font - bold py - 3 px - 6 rounded - full text - center transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30'                      >                      <a;
                        href={service.link}
                        className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - bold py - 3 px - 6 rounded - full text - center transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 hover:shadow - 2xl hover:shadow - cyan - 500 / 25 inline - flex items - center justify - center space - x-2";
                      >;
                        <span > Learn More</span>;
                        <ExternalLink className="w - 5 h - 5" />;
                      </a>;
                      <a;
                        href="/contact";
                        className="border - 2 border - cyan - 400 text - cyan - 400 hover:bg - cyan - 400 hover:text - black font - bold py - 3 px - 6 rounded - full text - center transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30";
                      >;
                        Get Started;
                      </a>;
                    </div>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Emerging Tech Services */}
        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-7xl mx - auto'>;
            <motion.div;
              className='text - center mb - 16'              initial={{ opacity: 0, coordinate_y: 30 }}        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              className="text - center mb - 16";
              whileInView={{ opacity: 1, coordinate_y: 0 }}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                <span className='bg - gradient - to - r from - emerald - 400 to - teal - 400 bg - clip - text text - transparent'>;
                  Emerging;
=======
                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">{service.marketSize} • {service.growthRate}</div>
                    <a
                      href={service.link}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="text-center mt-16"
              className='text-center mt-16'              initial={{ opacity: 0, y: 30 }}

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href='/services'
                className='bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-emerald-500/25 inline-flex items-center space-x-2'                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Emerging Tech</span>
                <ArrowRight className='w-6 h-6' />              </motion.a>                href="/services"
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-emerald-500/25 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Emerging Tech</span>
                <ArrowRight className='w-6 h-6' />                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </div>
        </section>
        {/* ArrowRight-Gen AI Services */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-7xl mx-auto'>
            <motion.div
              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              className='text-center mb-16'              initial={{ opacity: 0, y: 30 }}

              initial={{ opacity: 0, y: 30 }}

              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>
                <span className='bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent'>
                  ArrowRight-Generation
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                </span>{' '}
                Tech Services;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                Discover the latest technologies that are emerging and;
                transforming industries;
              </p>;
            </motion.div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
              {emergingTechServicesEnhanced2025;
                .slice (0, 6);
                .map ((service, index) => (
                  <motion.div;
                    key={service.id}
                    initial={{ opacity: 0, coordinate_y: 50 }}
                    whileInView={{ opacity: 1, coordinate_y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >;
                    <UltraFuturisticCard;
                      variant='quantum - holographic';
                      className='p - 6';
                    >;
                      <div className='text - 4xl mb - 4'>{service.icon}</div>;
                      <h3 className='text - xl font - bold text - white mb - 3'>;
                        {service.name}
                      </h3>;
                      <p className='text - gray - 300 text - sm mb - 4'>;
                        {service.description}
                      </p>;
                      <div className='text - 2xl font - bold text - cyan - 400 mb - 2'>;
                        {service.price}
                        <span className='text - sm text - gray - 400'>;
                          {service.period}
                        </span>;
                      </div>;
                      <div className='text - sm text - gray - 400 mb - 4'>;
                        {service.market_size} • {service.growth_rate}
                      </div>;
                      <a;
                        href={service.link}
                        className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 4 py - 2 rounded - lg text - sm font - semibold hover:from - cyan - 400 hover:to - blue - 500 transition - all duration - 300 inline - flex items - center space - x-2';
                      >;
                        <span > Learn More</span>;
                        <ArrowRight className='w - 4 h - 4' />;
                      </a>;
                    </UltraFuturisticCard>;
                  </motion.div>))}
            </div>;
            <motion.div;
              className='text - center mt - 16'              initial={{ opacity: 0, coordinate_y: 30 }}                  Emerging;
                </span> Tech Services;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
                Discover the latest technologies that are emerging and transforming industries;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
                              {emergingTechServicesEnhanced2025.slice (0, 6).map ((service, index) => (
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 50 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <UltraFuturisticCard variant="quantum - holographic" className="p - 6">;
                    <div className="text - 4xl mb - 4">{service.icon}</div>;
                    <h3 className="text - xl font - bold text - white mb - 3">{service.name}</h3>;
                    <p className="text - gray - 300 text - sm mb - 4">{service.description}</p>;
                    <div className="text - 2xl font - bold text - cyan - 400 mb - 2">;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                      {service.price}
                      <span className="text - sm text - gray - 400">{service.period}</span>;
                    </div>;
                    <div className="text - sm text - gray - 400 mb - 4">{service.market_size} • {service.growth_rate}</div>;
                    <a;
                      href={service.link}
<<<<<<< HEAD
                      className="bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 4 py - 2 rounded - lg text - sm font - semibold hover:from - cyan - 400 hover:to - blue - 500 transition - all duration - 300 inline - flex items - center space - x-2";
                    >;
                      <span > Learn More</span>;
                      <ArrowRight className="w - 4 h - 4" />;
                    </a>;
                  </UltraFuturisticCard>;
                </motion.div>))}
            </div>;
            <motion.div;
              className="text - center mt - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
<<<<<<< HEAD

                <ArrowRight className="w-6 h-6" />

=======
                <ArrowRight className="w-6 h-6" />
=======
                      className='bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2'
                    >
                      <span>Learn More</span>
                      <ArrowRight className='w-4 h-4' />                    </a>                      {service.price}
                      <span className="text-sm text-gray-400">{service.period}</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-4">{service.marketSize} • {service.growthRate}</div>
                    <a
                      href={service.link}
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 inline-flex items-center space-x-2"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </UltraFuturisticCard>
                </motion.div>
              ))}
            </div>
            <motion.div
              className='text-center mt-16'              initial={{ opacity: 0, y: 30 }}              className="text-center mt-16"
              className='text-center mt-16'              initial={{ opacity: 0, y: 30 }}

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.a
                href='/services'
                className='bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-pink-500/25 inline-flex items-center space-x-2'                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Discover All AI Services</span>
                <ArrowRight className='w-6 h-6' />              </motion.a>                href="/services"
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-pink-500/25 inline-flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Discover All AI Services</span>
                <ArrowRight className='w-6 h-6' />                <ArrowRight className="w-6 h-6" />
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </motion.a>
            </motion.div>
          </div>
        </section>
<<<<<<< HEAD


                className='bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-pink-500/25 inline-flex items-center space-x-2'                whileHover={{ scale: 1 && 1.05 }}
=======
<<<<<<< HEAD
className='bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-pink-500/25 inline-flex items-center space-x-2'                whileHover={{ scale: 1 && 1.05 }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                whileTap={{ scale: 0 && 0.95 }}>;
                <span>Discover All AI Services</span>;
                <ArrowRight className='w-6 h-6' />              </motion && motion.a>                href="/services";
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30 hover:shadow-2xl hover:shadow-pink-500/25 inline-flex items-center space-x-2";
                whileHover={{ scale: 1 && 1.05 }}
                whileTap={{ scale: 0 && 0.95 }}
              >;
                <span>Discover All AI Services</span>;
                <ArrowRight className='w-6 h-6' />                <ArrowRight className="w-6 h-6" />;
              </motion && motion.a>;
            </motion && motion.div>;
          </div>;
        </section>;
        {/* Call to Action */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-4xl mx-auto text-center'>            <motion && motion.div        <section className="py-20 px-4 sm:px-6 lg:px-8">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion&& motion.div
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
        {/* Call to Action */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-4xl mx-auto text-center'>            <motion.div        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}

=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                Ready to Experience the Future?;
              </h2>;
              <p className='text-xl text-gray-300 mb-8'>;
                Join the revolution and transform your business with our;
                cutting-edge services;
              </p>;
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                <a
                  href='/contact'
                  className='bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30'>;
                  Get Started Today;
                </a>;
                <a
                  href='/services'
<<<<<<< HEAD

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future?

=======
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience the Future?
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join the revolution and transform your business with our cutting-edge services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  className='border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300'>                Ready to Experience the Future?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
                Join the revolution and transform your business with our cutting-edge services;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <a
                  href="/contact"
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-xl hover:shadow-cyan-500/30"
                >
                  Get Started Today
                </a>
                <a
<<<<<<< HEAD
                  href='/services'
                  className='border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300'                  href="/services"
=======
<<<<<<< HEAD
href="/services"
=======
                  href='/services'
                  className='border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300'                  href="/services"
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
                >
                  Explore All Services
                </a>
              </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
<div className="mt-12 text-center">
                <p className="text-gray-400 mb-4">Contact us directly:</p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">{contactInfo.mobile}</span>
                  </div>
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
              <div className='mt-12 text-center'>
                <p className='text-gray-400 mb-4'>Contact us directly:</p>
                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
                  <div className='flex items-center space-x-2'>
                    <Phone className='w-5 h-5 text-cyan-400' />
                    <span className='text-white'>{contactInfo.mobile}</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Mail className='w-5 h-5 text-purple-400' />
                    <span className='text-white'>{contactInfo.email}</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <MapPin className='w-5 h-5 text-pink-400' />
                    <span className='text-white'>{contactInfo.address}</span>                  </div>                  </div>
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
                  <div className="flex items-center space-x-2">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span className="text-white">{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-pink-400" />
                    <span className="text-white">{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
<<<<<<< HEAD
<<<<<<< HEAD

}

}

  );
}

=======


=======
=======
<<<<<<< HEAD
className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300">;
                  Explore All Services;
                </a>;
              </div>;
              <div className='mt-12 text-center'>;
                <p className='text-gray-400 mb-4'>Contact us directly:</p>;
                <div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>;
                  <div className='flex items-center space-x-2'>;
                    <Phone className='w-5 h-5 text-cyan-400' />;
                    <span className='text-white'>{contactInfo && contactInfo.mobile}</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <Mail className='w-5 h-5 text-purple-400' />;
                    <span className='text-white'>{contactInfo && contactInfo.email}</span>;
                  </div>;
                  <div className='flex items-center space-x-2'>;
                    <MapPin className='w-5 h-5 text-pink-400' />;
                    <span className='text-white'>{contactInfo && contactInfo.address}</span>                  </div>                  </div>;
                  <div className="flex items-center space-x-2">;
                    <Mail className="w-5 h-5 text-purple-400" />;
                    <span className="text-white">{contactInfo && contactInfo.email}</span>;
                  </div>;
                  <div className="flex items-center space-x-2">;
                    <MapPin className="w-5 h-5 text-pink-400" />;
                    <span className="text-white">{contactInfo && contactInfo.address}</span>;
                  </div>;
                </div>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>;
  );
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  );
}
            >;
              <motion.a;
                href='/services';
                className='bg - gradient - to - r from - emerald - 500 to - teal - 600 hover:from - emerald - 400 hover:to - teal - 500 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 hover:shadow - 2xl hover:shadow - emerald - 500 / 25 inline - flex items - center space - x-2'                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
              >;
                <span > View All Emerging Tech</span>;
                <ArrowRight className='w - 6 h - 6' />              </motion.a>                href="/services";
                className="bg - gradient - to - r from - emerald - 500 to - teal - 600 hover:from - emerald - 400 hover:to - teal - 500 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 hover:shadow - 2xl hover:shadow - emerald - 500 / 25 inline - flex items - center space - x-2";
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
              >;
                <span > View All Emerging Tech</span>;
                <ArrowRight className='w - 6 h - 6' />                <ArrowRight className="w - 6 h - 6" />;
              </motion.a>;
            </motion.div>;
          </div>;
        </section>;
        {/* ArrowRight - Gen AI Services */}
        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-7xl mx - auto'>;
            <motion.div;
              className='text - center mb - 16'              initial={{ opacity: 0, coordinate_y: 30 }}        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-7xl mx - auto">;
            <motion.div;
              className="text - center mb - 16";
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                <span className='bg - gradient - to - r from - pink - 400 to - rose - 400 bg - clip - text text - transparent'>;
                  ArrowRight - Generation;
                </span>{' '}
                AI Services;
              </h2>;
              <p className='text - xl text - gray - 300 max - w-3xl mx - auto'>;
                Experience the future of artificial intelligence with our most;
                advanced services;
              </p>;
            </motion.div>;
            <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>              {nextGenAIServices.slice (0, 6).map ((service, index) => (                  ArrowRight - Generation;
                </span> AI Services;
              </h2>;
              <p className="text - xl text - gray - 300 max - w-3xl mx - auto">;
                Experience the future of artificial intelligence with our most advanced services;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {nextGenAIServices.slice (0, 6).map ((service, index) => (
                <motion.div;
                  key={service.id}
                  initial={{ opacity: 0, coordinate_y: 50 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >;
                  <UltraFuturisticCard;
                    variant='quantum - holographic';
                    className='p - 6';
                  >;
                    <div className='text - 4xl mb - 4'>{service.icon}</div>;
                    <h3 className='text - xl font - bold text - white mb - 3'>;
                      {service.name}
                    </h3>;
                    <p className='text - gray - 400 text - sm mb - 4'>;
                      {service.description}
                    </p>;
                    <div className='text - 2xl font - bold text - cyan - 400 mb - 2'>;
                      {service.price}
                      <span className='text - sm text - gray - 400'>;
                        {service.period}
                      </span>;
                    </div>;
                    <div className='text - sm text - gray - 400 mb - 4'>;
                      {service.market_size} • {service.growth_rate}
                    </div>;
                    <a;
                      href={service.link}
                      className='bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 4 py - 2 rounded - lg text - sm font - semibold hover:from - cyan - 400 hover:to - blue - 500 transition - all duration - 300 inline - flex items - center space - x-2';
                    >;
                      <span > Learn More</span>;
                      <ArrowRight className='w - 4 h - 4' />                    </a>                      {service.price}
                      <span className="text - sm text - gray - 400">{service.period}</span>;
                    </div>;
                    <div className="text - sm text - gray - 400 mb - 4">{service.market_size} • {service.growth_rate}</div>;
                    <a;
                      href={service.link}
                      className="bg - gradient - to - r from - cyan - 500 to - blue - 600 text - white px - 4 py - 2 rounded - lg text - sm font - semibold hover:from - cyan - 400 hover:to - blue - 500 transition - all duration - 300 inline - flex items - center space - x-2";
                    >;
                      <span > Learn More</span>;
                      <ArrowRight className="w - 4 h - 4" />;
                    </a>;
                  </UltraFuturisticCard>;
                </motion.div>))}
            </div>;
            <motion.div;
              className='text - center mt - 16'              initial={{ opacity: 0, coordinate_y: 30 }}              className="text - center mt - 16";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <motion.a;
                href='/services';
                className='bg - gradient - to - r from - pink - 500 to - rose - 600 hover:from - pink - 400 hover:to - rose - 500 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 hover:shadow - 2xl hover:shadow - pink - 500 / 25 inline - flex items - center space - x-2'                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
              >;
                <span > Discover All AI Services</span>;
                <ArrowRight className='w - 6 h - 6' />              </motion.a>                href="/services";
                className="bg - gradient - to - r from - pink - 500 to - rose - 600 hover:from - pink - 400 hover:to - rose - 500 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30 hover:shadow - 2xl hover:shadow - pink - 500 / 25 inline - flex items - center space - x-2";
                while_hover={{ scale: 1.05 }}
                while_tap={{ scale: 0.95 }}
              >;
                <span > Discover All AI Services</span>;
                <ArrowRight className='w - 6 h - 6' />                <ArrowRight className="w - 6 h - 6" />;
              </motion.a>;
            </motion.div>;
          </div>;
        </section>;
        {/* Call to Action */}
        <section className='py - 20 px - 4 sm:px - 6 lg:px - 8'>;
          <div className='max - w-4xl mx - auto text - center'>            <motion.div        <section className="py - 20 px - 4 sm:px - 6 lg:px - 8">;
          <div className="max - w-4xl mx - auto text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >;
              <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
                Ready to Experience the Future?;
              </h2>;
              <p className='text - xl text - gray - 300 mb - 8'>;
                Join the revolution and transform your business with our;
                cutting - edge services;
              </p>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
                <a;
                  href='/contact';
                  className='bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30'                >;
                  Get Started Today;
                </a>;
                <a;
                  href='/services';
                  className='border - 2 border - cyan - 400 text - cyan - 400 hover:bg - cyan - 400 hover:text - black font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300'                >                Ready to Experience the Future?;
              </h2>;
              <p className="text - xl text - gray - 300 mb - 8">;
                Join the revolution and transform your business with our cutting - edge services;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <a;
                  href="/contact";
                  className="bg - gradient - to - r from - cyan - 500 to - blue - 600 hover:from - cyan - 400 hover:to - blue - 500 text - white font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300 transform hover:shadow - xl hover:shadow - cyan - 500 / 30";
                >;
                  Get Started Today;
                </a>;
                <a;
                  href='/services';
                  className='border - 2 border - cyan - 400 text - cyan - 400 hover:bg - cyan - 400 hover:text - black font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300'                  href="/services";
                  className="border - 2 border - cyan - 400 text - cyan - 400 hover:bg - cyan - 400 hover:text - black font - bold py - 4 px - 8 rounded - full text - lg transition - all duration - 300";
                >;
                  Explore All Services;
                </a>;
              </div>;
              <div className='mt - 12 text - center'>;
                <p className='text - gray - 400 mb - 4'>Contact us directly:</p>;
                <div className='flex flex - col sm:flex - row gap - 6 justify - center items - center'>;
                  <div className='flex items - center space - x-2'>;
                    <Phone className='w - 5 h - 5 text - cyan - 400' />;
                    <span className='text - white'>{contact_info.mobile}</span>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <Mail className='w - 5 h - 5 text - purple - 400' />;
                    <span className='text - white'>{contact_info.email}</span>;
                  </div>;
                  <div className='flex items - center space - x-2'>;
                    <MapPin className='w - 5 h - 5 text - pink - 400' />;
                    <span className='text - white'>{contact_info.address}</span>                  </div>                  </div>;
                  <div className="flex items - center space - x-2">;
                    <Mail className="w - 5 h - 5 text - purple - 400" />;
                    <span className="text - white">{contact_info.email}</span>;
                  </div>;
                  <div className="flex items - center space - x-2">;
                    <MapPin className="w - 5 h - 5 text - pink - 400" />;
                    <span className="text - white">{contact_info.address}</span>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </UltraAdvancedFuturisticBackground>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
);
  );
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
