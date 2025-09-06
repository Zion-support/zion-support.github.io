<<<<<<< HEAD
import React from 'react',
import React from 'react';
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import Head from 'next/head';
import { motion } from 'framer-motion';

import {
  Shield
  Lock
  Eye
  Zap
  Cpu
  Database
  ArrowRight
  CheckCircle
  Star
  Users
  Clock
  TrendingUp;
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';
export default function CybersecurityServicesPage() {
  const services = [
<<<<<<< HEAD
=======

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import React from 'react';
import Head from 'next / head';

import { motion } from 'framer-motion';

import {

  Shield,
  Lock,
  Eye,
  Zap,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Clock,
  TrendingUp,

} from 'lucide-react';
import EnhancedNavigation from '../../components / EnhancedNavigation';
import EnhancedFooter from '../../components / EnhancedFooter';
export default /**
 * CybersecurityServicesPage - Function description
 */
function CybersecurityServicesPage() {
  const services = [;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    {
<<<<<<< HEAD
      title: 'Advanced Threat Detection'
      description: 'AI-powered threat detection and response systems'
      features: [
        'Real-time Monitoring'
        'Behavioral Analysis'
        'Automated Response'
        '24/7 Protection'
      ]
      price: 'From $8,000'
      icon: Eye
      color: 'from-red-500 to-orange-500'
    }
    {
      title: 'Quantum-Resistant Encryption'
      description: 'Future-proof security with quantum-resistant cryptography'
      features: [
        'Post-Quantum Algorithms'
        'Key Management'
        'Compliance Ready'
        'Future-Proof'
      ]
      price: 'From $12,000'
      icon: Lock
      color: 'from-purple-500 to-pink-500'
    }
    {
      title: 'Security Auditing & Compliance'
      description:
        'Comprehensive security assessments and compliance solutions'
      features: [
        'Penetration Testing'
        'Vulnerability Assessment'
        'SOC2 Compliance'
        'GDPR Ready'
      ]
      price: 'From $5,000'
      icon: Shield
      color: 'from-blue-500 to-cyan-500'
    }
    {
      title: 'Zero Trust Architecture'
      description: 'Modern security framework for distributed environments'
      features: [
        'Identity Verification'
        'Access Control'
        'Network Segmentation'
        'Continuous Monitoring'
      ]
      price: 'From $15,000'
      icon: Zap
      color: 'from-emerald-500 to-teal-500'
    }
  ];
  const stats = [
    { number: '99.99%', label: 'Threat Detection Rate', icon: Shield }
    { number: '24/7', label: 'Security Monitoring', icon: Eye }
    { number: '0', label: 'Security Breaches', icon: Lock }
    { number: '500+', label: 'Protected Systems', icon: CheckCircle }
  ];

<<<<<<< HEAD
=======
=======


=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  Shield,
  Lock,
  Eye,
  Zap,
  Cpu,
  Database,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
<<<<<<< HEAD
import Head from 'next/head',
import { motion } from 'framer-motion',
import {
  Shield, Lock, Eye, Zap, Cpu, Database,
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp
} from 'lucide-react',
import EnhancedNavigation from '../../components/EnhancedNavigation',
import EnhancedFooter from '../../components/EnhancedFooter',
export default function CybersecurityServicesPage() {
  const services = [
    {
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection and response systems",
      features: ["Real-time Monitoring", "Behavioral Analysis", "Automated Response", "24/7 Protection"],
      price: "From $8,000",
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  Clock,
  TrendingUp,
} from 'lucide-react';
import EnhancedNavigation from '../../components / EnhancedNavigation';
import EnhancedFooter from '../../components / EnhancedFooter';
export default /**
 * CybersecurityServicesPage - Function description
 */
function CybersecurityServicesPage() {
  const services = [;
    {
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
import Head from 'next/head';
import { motion } from 'framer-motion';

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      title: 'Advanced Threat Detection',
      description: 'AI - powered threat detection and response systems',
      features: [;
        'Real - time Monitoring',
        'Behavioral Analysis',
        'Automated Response',
        '24 / 7 Protection',
      ],
      price: 'From $8, 000',
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      icon: Eye,
<<<<<<< HEAD
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Quantum-Resistant Encryption",
      description: "Future-proof security with quantum-resistant cryptography",
      features: ["Post-Quantum Algorithms", "Key Management", "Compliance Ready", "Future-Proof"],
      price: "From $12,000",
      icon: Lock,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Security Auditing & Compliance",
      description: "Comprehensive security assessments and compliance solutions",
      features: ["Penetration Testing", "Vulnerability Assessment", "SOC2 Compliance", "GDPR Ready"],
      price: "From $5,000",
      icon: Shield,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Zero Trust Architecture",
      description: "Modern security framework for distributed environments",
      features: ["Identity Verification", "Access Control", "Network Segmentation", "Continuous Monitoring"],
      price: "From $15,000",
      icon: Zap,
      color: 'from-emerald-500 to-teal-500',
    },;
  ];

      color: "from-emerald-500 to-teal-500"
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
  ],
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  const stats = [
    { number: "99.99%", label: "Threat Detection Rate", icon: Shield },
    { number: "24/7", label: "Security Monitoring", icon: Eye },
    { number: "0", label: "Security Breaches", icon: Lock },

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Cybersecurity Services - Zion Tech Group</title>

        <meta name="description" content="Advanced cybersecurity solutions from Zion Tech Group. AI-powered threat detection, quantum-resistant encryption, and comprehensive security services." />
        <meta property="og:title" content="Cybersecurity Services - Zion Tech Group" />
        <meta property="og:description" content="Advanced cybersecurity solutions for comprehensive protection." />
        <link rel="canonical" href="https://ziontechgroup.com/services/cybersecurity" />
      </Head>
      <EnhancedNavigation />
=======
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }  } catch (error) {
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
            className="mb-8"
=======
=======
      color: 'from - red - 500 to - orange - 500',
    },
    {
      title: 'Quantum - Resistant Encryption',
      description: 'Future - proof security with quantum - resistant cryptography',
      features: [;
        'Post - Quantum Algorithms',
        'Key Management',
        'Compliance Ready',
        'Future - Proof',
      ],
      price: 'From $12, 000',
      icon: Lock,
      color: 'from - purple - 500 to - pink - 500',
    },
    {
      title: 'Security Auditing & Compliance',
      description:;
        'Comprehensive security assessments and compliance solutions',
      features: [;
        'Penetration Testing',
        'Vulnerability Assessment',
        'SOC2 Compliance',
        'GDPR Ready',
      ],
      price: 'From $5, 000',
      icon: Shield,
      color: 'from - blue - 500 to - cyan - 500',
    },
    {
      title: 'Zero Trust Architecture',
      description: 'Modern security framework for distributed environments',
      features: [;
        'Identity Verification',
        'Access Control',
        'Network Segmentation',
        'Continuous Monitoring',
      ],
      price: 'From $15, 000',
      icon: Zap,
      color: 'from - emerald - 500 to - teal - 500',
    },
  ];
;
  const stats = [;
    { number: '99.99%', label: 'Threat Detection Rate', icon: Shield },
    { number: '24 / 7', label: 'Security Monitoring', icon: Eye },
    { number: '0', label: 'Security Breaches', icon: Lock },
    { number: '500+', label: 'Protected Systems', icon: CheckCircle },
  ];
;
  return (

          href='https://ziontechgroup && ziontechgroup.com/services/cybersecurity'
        />      </Head>;
      <EnhancedNavigation />;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 px-6'>;
        <div className='max-w-7xl mx-auto text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
              Cybersecurity
            </h1>
<<<<<<< HEAD
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
              Advanced security solutions that protect your digital assets and
              ensure business continuity            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-12'
          >
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>
              From AI-powered threat detection to quantum-resistant encryption
              From AI-powered threat detection to quantum-resistant encryption,
=======


              From AI-powered threat detection to quantum-resistant encryption,

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              we provide comprehensive cybersecurity solutions that keep your
              business secure and compliant.
<<<<<<< HEAD
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Advanced security solutions that protect your digital assets and ensure business continuity
=======
=======
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Advanced security solutions that protect your digital assets and ensure business continuity



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            </p>
            <button className='px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto'>
              Secure Your Business
              <ArrowRight className='w-5 h-5' />            </button>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
=======
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            transition={{ duration: 0 && 0.8 }}
            className='mb-8'>;
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6'>;
              Cybersecurity;
            </h1>;
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
              Advanced security solutions that protect your digital assets and;
              ensure business continuity            </p>;
          </motion && motion.div>;

          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
            className='mb-12'>;
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>;
              From AI-powered threat detection to quantum-resistant encryption,;
              we provide comprehensive cybersecurity solutions that keep your;
              business secure and compliant.;
            </p>;
            <button className='px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto'>;
              Secure Your Business;
              <ArrowRight className='w-5 h-5' />            </button>;
          </motion && motion.div>;
        </div>;
      </section>;

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      {/* Stats Section */}
      <section className='py-16 px-6'>;
        <div className='max-w-7xl mx-auto'>;
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>            {stats && stats.map((stat, index) => (;
              <motion&& motion.div
                key={stat && stat.label}

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From AI-powered threat detection to quantum-resistant encryption, we provide 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
            className='mb-12'
          >
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>
<<<<<<< HEAD
              From AI-powered threat detection to quantum-resistant encryption
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              we provide comprehensive cybersecurity solutions that keep your
              business secure and compliant.

            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Secure Your Business
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
      {/* Stats Section */}
      <section className='py-16 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center'
      {/* Stats Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div;
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import {;
  Shield, Lock, Eye, Zap, Cpu, Database,;
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp;
} from 'lucide-react',;
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';
export default function CybersecurityServicesPage(req, res) {
  try {
  const services = [;
    {;
      title: "Advanced Threat Detection";
      description: "AI-powered threat detection and response systems";
      features: ["Real-time Monitoring", "Behavioral Analysis", "Automated Response", "24/7 Protection"],;
      price: "From $8,000",;
      icon: Eye,;
      color: "from-red-500 to-orange-500";
    },;
    {;
      title: "Quantum-Resistant Encryption",;
      description: "Future-proof security with quantum-resistant cryptography",;
      features: ["Post-Quantum Algorithms", "Key Management", "Compliance Ready", "Future-Proof"],;
      price: "From $12,000",;
      icon: Lock,;
      color: "from-purple-500 to-pink-500";
    },;
    {;
      title: "Security Auditing & Compliance",;
      description: "Comprehensive security assessments and compliance solutions",;
      features: ["Penetration Testing", "Vulnerability Assessment", "SOC2 Compliance", "GDPR Ready"],;
      price: "From $5,000",;
      icon: Shield,;
      color: "from-blue-500 to-cyan-500";
    },;
    {;
      title: "Zero Trust Architecture",;
      description: "Modern security framework for distributed environments",;
      features: ["Identity Verification", "Access Control", "Network Segmentation", "Continuous Monitoring"],;
      price: "From $15,000",;
      icon: Zap,;
      color: "from-emerald-500 to-teal-500";
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const stats = [;
    { number: "99.99%", label: "Threat Detection Rate", icon: Shield },;
    { number: "24/7", label: "Security Monitoring", icon: Eye },;
    { number: "0", label: "Security Breaches", icon: Lock };
    { number: "500+", label: "Protected Systems", icon: CheckCircle   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ];
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;
      <Head>;
        <title>Cybersecurity Services - Zion Tech Group</title>;
        <meta name="description" content="Advanced cybersecurity solutions from Zion Tech Group. AI-powered threat detection, quantum-resistant encryption, and comprehensive security services." />;
        <meta property="og:title" content="Cybersecurity Services - Zion Tech Group" />;
        <meta property="og:description" content="Advanced cybersecurity solutions for comprehensive protection." />;
        <link rel="canonical" href="https://ziontechgroup.com/services/cybersecurity" />;
      </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="relative pt-32 pb-20 px-6">;
        <div className="max-w-7xl mx-auto text-center">;
          <motion.div;
            initial={{ opacity: 0, y: 30 }  } catch (error) {
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
            className="mb-8";
          >;
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-red-400 bg-clip-text text-transparent mb-6">;
              Cybersecurity;
            </h1>;
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">;
              Advanced security solutions that protect your digital assets and ensure business continuity;
            </p>;
          </motion.div>;
          <motion.div;
=======
<<<<<<< HEAD
              From AI-powered threat detection to quantum-resistant encryption
=======
              From AI-powered threat detection to quantum-resistant encryption,
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              we provide comprehensive cybersecurity solutions that keep your
              business secure and compliant.
=======
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Advanced security solutions that protect your digital assets and ensure business continuity
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
            </p>
          </motion.div>
          <motion.div
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From AI-powered threat detection to quantum-resistant encryption, we provide
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
              comprehensive cybersecurity solutions that keep your business secure and compliant.
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Secure Your Business
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

              comprehensive cybersecurity solutions that keep your business secure and compliant.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Secure Your Business
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              >
                <div className="w-16 h-16 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-orange-400" />
                </div>
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}

          </div>;
        </div>;
      </section>;


      {/* Services Grid */}
      <section className='py-20 px-6'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div

<<<<<<< HEAD
=======
=======

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >
            <h2 className="text-4xl font-bold text-white mb-6">Cybersecurity Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your business from evolving threats
            </p>
          </motion.div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
              <motion.div
                key={service.title  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                initial={{ opacity: 0, y: 30 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                viewport={{ once: true }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300"
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              <motion.div


            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Cybersecurity Services;
            </h2>;
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>;
              Comprehensive security solutions designed to protect your business;
              from evolving threats;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {services && services.map((service, index) => (;
              <motion&& motion.div
                key={service && service.title}


<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}

=======

<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
                </ul>
                <div className="flex items-center justify-between">

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
                </ul>
                <div className="flex items-center justify-between">
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                      {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </li>;
                  ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                </ul>
                <div className="flex items-center justify-between">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                  <span className="text-2xl font-bold text-orange-400">{service.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </motion.div>
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      {/* CTA Section */}
      <section className='py-20 px-6'>;
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
<<<<<<< HEAD
=======
        </div>;
      </section>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      {/* CTA Section */}
      <section className='py-20 px-6'>;
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div

            initial={{ opacity: 0, y: 30 }  } catch (error) {
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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          >

            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cybersecurity solutions can protect your digital assets and ensure business continuity.
            </p>
<<<<<<< HEAD
=======
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
<<<<<<< HEAD

=======
<<<<<<< HEAD
Security Assessment
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Security Assessment
              </button>
              <button className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;>

=======
                Security Assessment
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
                Learn More

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              </button>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
}</div> </div> </section> <motion.div initial= {
=======
<<<<<<< HEAD
=======
      <EnhancedFooter />
    </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


),

}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Cybersecurity Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive security solutions designed to protect your business from evolving threats </p> </motion.div> Get Started </button> </div> </motion.div>) ) 


}</div> </div> </section> <motion.div initial= {
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Ready to Secure Your Business?;
            </h2>;
            <p className='text-xl text-white/70 mb-8 max-w-2xl mx-auto'>;
              Let's discuss how our cybersecurity solutions can protect your;
              digital assets and ensure business continuity.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <button className='px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105'>;
                Security Assessment;
              </button>;
              <button className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>                Learn More;
              </button>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;

      <EnhancedFooter />;
    </div>;
  ),;

}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Cybersecurity Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive security solutions designed to protect your business from evolving threats </p> </motion && motion.div> Get Started </button> </div> </motion && motion.div>) ) ;
}</div> </div> </section> <motion&& motion.div initial= {
<<<<<<< HEAD
=======
=======
      <EnhancedFooter />
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
)
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Cybersecurity Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive security solutions designed to protect your business from evolving threats </p> </motion.div> Get Started </button> </div> </motion.div>) )
=======
),

}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Cybersecurity Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive security solutions designed to protect your business from evolving threats </p> </motion.div> Get Started </button> </div> </motion.div>) ) 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}</div> </div> </section> <motion.div initial= {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {

<<<<<<< HEAD
  duration: 0 && 0.8 

}viewport= {
  {
  once: true
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Secure Your Business? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how our cybersecurity solutions can protect your digital assets and ensure business continuity. </p> Security Assessment </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Learn More </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>)

}
}
}
=======
<<<<<<< HEAD
}
}
}
=======
  duration: 0 && 0.8 
}viewport= {
  {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  once: true 

}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Secure Your Business? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how our cybersecurity solutions can protect your digital assets and ensure business continuity. </p> Security Assessment </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Learn More </button> </div> </motion && motion.div> </div> </section> <EnhancedFooter /> </div>) ;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  )
}
    <div className='min - h-screen bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950 text - white'>;
      <Head>;
        <title > Cybersecurity Services - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Advanced cybersecurity solutions from Zion Tech Group. AI - powered threat detection, quantum - resistant encryption, and comprehensive security services.';
        />;
        <meta;
          property='og:title';
          content='Cybersecurity Services - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Advanced cybersecurity solutions for comprehensive protection.';
        />;
        <link;
          rel='canonical';
          href='https://ziontechgroup.com / services / cybersecurity';
        />      </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */}
      <section className='relative pt - 32 pb - 20 px - 6'>;
        <div className='max - w-7xl mx - auto text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb - 8';
          >;
            <h1 className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - red - 400 via - orange - 400 to - red - 400 bg - clip - text text - transparent mb - 6'>;
              Cybersecurity;
            </h1>;
            <p className='text - xl md:text - 2xl text - white / 80 max - w-3xl mx - auto leading - relaxed'>;
              Advanced security solutions that protect your digital assets and;
              ensure business continuity            </p>;
          </motion.div>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb - 12';
          >;
            <p className='text - lg text - white / 70 max - w-2xl mx - auto mb - 8'>;
              From AI - powered threat detection to quantum - resistant encryption,
              we provide comprehensive cybersecurity solutions that keep your;
              business secure and compliant.;
            </p>;
            <button className='px - 8 py - 4 bg - gradient - to - r from - red - 600 to - orange - 600 hover:from - red - 700 hover:to - orange - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center justify - center gap - 2 mx - auto'>;
              Secure Your Business;
              <ArrowRight className='w - 5 h - 5' />            </button>;
          </motion.div>;
        </div>;
      </section>;
      {/* Stats Section */}
      <section className='py - 16 px - 6'>;
        <div className='max - w-7xl mx - auto'>;
          <div className='grid grid - cols - 2 md:grid - cols - 4 gap - 8'>            {stats.map ((stat, index) => (
              <motion.div;
                key={stat.label}
                initial={{ opacity: 0, coordinate_y: 20 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text - center';
              >;
                <div className='w - 16 h - 16 bg - gradient - to - br from - red - 500 / 20 to - orange - 500 / 20 rounded - 2xl flex items - center justify - center mx - auto mb - 4'>;
                  <stat.icon className='w - 8 h - 8 text - orange - 400' />;
                </div>;
                <div className='text - 3xl font - bold text - white mb - 2'>;
                  {stat.number}
                </div>;
                <div className='text - white / 70'>{stat.label}</div>              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className='py - 20 px - 6'>;
        <div className='max - w-7xl mx - auto'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text - center mb - 16';
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              Cybersecurity Services;
            </h2>;
            <p className='text - xl text - white / 70 max - w-3xl mx - auto'>;
              Comprehensive security solutions designed to protect your business;
              from evolving threats;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>            {services.map ((service, index) => (
              <motion.div;
                key={service.title}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg - gradient - to - br from - slate - 800 / 50 to - slate - 900 / 50 backdrop - blur - xl border border - white / 10 rounded - 2xl p - 8 hover:border - red - 500 / 30 transition - all duration - 300';
              >;
                <div;
                  className={`w - 16 h - 16 bg - gradient - to - br ${service.color} rounded - 2xl flex items - center justify - center mb - 6`}
                >;
                  <service.icon className='w - 8 h - 8 text - white' />;
                </div>;
                <h3 className='text - 2xl font - bold text - white mb - 4'>;
                  {service.title}
                </h3>;
                <p className='text - white / 70 mb - 6'>{service.description}</p>;
                <ul className='space - y-3 mb - 6'>;
                  {service.features.map (feature => (
                    <li;
                      key={feature}
                      className='flex items - center text - white / 80';
                    >;
                      <CheckCircle className='w - 5 h - 5 text - orange - 400 mr - 3 flex - shrink - 0' />                      {feature}
                    </li>))}
                </ul>;
                <div className='flex items - center justify - between'>;
                  <span className='text - 2xl font - bold text - orange - 400'>;
                    {service.price}
                  </span>;
                  <button className='px - 6 py - 3 bg - gradient - to - r from - red - 600 to - orange - 600 hover:from - red - 700 hover:to - orange - 700 rounded - full font - semibold text - white transition - all duration - 300 transform hover:scale - 105'>                    Get Started;
                  </button>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className='py - 20 px - 6'>;
        <div className='max - w-4xl mx - auto text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              Ready to Secure Your Business?;
            </h2>;
            <p className='text - xl text - white / 70 mb - 8 max - w-2xl mx - auto'>;
              Let's discuss how our cybersecurity solutions can protect your;
              digital assets and ensure business continuity.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <button className='px - 8 py - 4 bg - gradient - to - r from - red - 600 to - orange - 600 hover:from - red - 700 hover:to - orange - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105'>;
                Security Assessment;
              </button>;
              <button className='px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10'>                Learn More;
<<<<<<< HEAD
=======
=======
  once: true
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Secure Your Business? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how our cybersecurity solutions can protect your digital assets and ensure business continuity. </p> Security Assessment </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Learn More </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>)
<<<<<<< HEAD
=======

}
}
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
  )
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Secure Your Business?;
            </h2>;
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">;
              Let's discuss how our cybersecurity solutions can protect your digital assets and ensure business continuity.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">;
                Security Assessment;
              </button>;
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">;
                Learn More;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
