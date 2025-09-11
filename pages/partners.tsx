<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';

import {
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from 'react';
import Head from 'next / head';

import { motion } from 'framer-motion';

import {

  Handshake,
  Globe,
  Rocket,
  Brain,
  Atom,
  Shield,
  ArrowRight,
  ExternalLink,
  Star,
  Users,
  Clock,
  TrendingUp,

<<<<<<< HEAD
<<<<<<< HEAD
  Handshake
  Globe
  Rocket
  Brain
  Atom
  Shield
  ArrowRight
  ExternalLink
  Star
  Users
  Clock
  TrendingUp;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
export default function PartnersPage() {
  const partners = [
    {
<<<<<<< HEAD
=======
} from 'lucide-react';
import EnhancedNavigation from '../components / EnhancedNavigation';
import EnhancedFooter from '../components / EnhancedFooter';
export default /**
 * PartnersPage - Function description
 */
function PartnersPage() {
  const partners = [;
    {
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      name: 'Microsoft Azure'
      category: 'Cloud Infrastructure'
      description:
        'Strategic partnership for enterprise cloud solutions and AI services'
      logo: '/api/placeholder/200/100'
      website: 'https://azure.microsoft.com'
      partnership: 'Technology Alliance'
      benefits: [
        'Joint go-to-market'
        'Technical integration'
        'Co-selling opportunities'
      ]
      icon: Globe
      color: 'from-blue-500 to-cyan-500'
    }
    {
      name: 'NVIDIA'
      category: 'AI & Computing'
      description:
        'Collaboration on GPU-accelerated AI and quantum computing solutions'
      logo: '/api/placeholder/200/100'
      website: 'https://nvidia.com'
      partnership: 'Technology Partner'
      benefits: ['Hardware optimization', 'Joint R&D', 'Market expansion']
      icon: Brain
      color: 'from-green-500 to-emerald-500'
    }
    {
      name: 'IBM Quantum'
      category: 'Quantum Computing'
      description:
        'Partnership for quantum computing research and enterprise solutions'
      logo: '/api/placeholder/200/100'
      website: 'https://quantum-computing.ibm.com'
      partnership: 'Research Partner'
      benefits: ['Quantum access', 'Joint research', 'Enterprise deployment']
      icon: Atom
      color: 'from-purple-500 to-pink-500'
    }
    {
      name: 'Cisco'
      category: 'Cybersecurity'
      description:
        'Strategic alliance for network security and threat detection solutions'
      logo: '/api/placeholder/200/100'
      website: 'https://cisco.com'
      partnership: 'Security Alliance'
      benefits: ['Network integration', 'Security solutions', 'Global reach']
      icon: Shield
      color: 'from-red-500 to-orange-500'
    }
    {
      name: 'AWS'
      category: 'Cloud Services'
      description:
        'Partnership for scalable cloud infrastructure and AI services'
      logo: '/api/placeholder/200/100'
      website: 'https://aws.amazon.com'
      partnership: 'Technology Partner'
      benefits: ['Cloud infrastructure', 'AI services', 'Global expansion']
      icon: Rocket
      color: 'from-yellow-500 to-orange-500'
    }
    {
      name: 'Intel'
      category: 'Hardware & AI'
      description:
        'Collaboration on AI-optimized hardware and edge computing solutions'
      logo: '/api/placeholder/200/100'
      website: 'https://intel.com'
      partnership: 'Technology Partner'
      benefits: [
        'Hardware optimization'
        'Edge computing'
        'Performance tuning'
      ]
      icon: Brain
      color: 'from-indigo-500 to-purple-500'
    },  ];
  const partnershipTypes = [
    {
      title: 'Technology Alliance'
      description: 'Deep technical integration and joint product development'
      benefits: ['Shared technology roadmap', 'Joint R&D', 'Co-innovation']
      icon: Handshake
      color: 'from-blue-500 to-cyan-500'
    }
    {
      title: 'Go-to-Market'
      description: 'Joint sales and marketing initiatives for mutual growth'
      benefits: [
        'Co-selling opportunities'
        'Joint marketing'
        'Revenue sharing'
      ]
      icon: Rocket
      color: 'from-purple-500 to-pink-500'
    }
    {
      title: 'Research Partnership'
      description: 'Collaborative research in emerging technologies'
      benefits: ['Joint publications', 'Shared IP', 'Academic collaboration']
      icon: Brain
      color: 'from-emerald-500 to-teal-500'
    }
    {
      title: 'Channel Partnership'
      description:
        'Distribution and reseller partnerships for market expansion'
      benefits: [
        'Channel enablement'
        'Training programs'
        'Support collaboration'
      ]
      icon: Users
      color: 'from-orange-500 to-red-500'
    }
  ];
  const stats = [
    { number: '50+', label: 'Strategic Partners', icon: Handshake }
    { number: '100+', label: 'Joint Projects', icon: Rocket }
    { number: '25+', label: 'Countries', icon: Globe }
    { number: '300%', label: 'Growth Rate', icon: TrendingUp }
  ];

=======
<<<<<<< HEAD


=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  Handshake,
  Globe,
  Rocket,
  Brain,
  Atom,
  Shield,
  ArrowRight,
  ExternalLink,
  Star,
  Users,
<<<<<<< HEAD
=======
<<<<<<< HEAD
  Clock,
  TrendingUp,
} from 'lucide-react';
import EnhancedNavigation from '../components / EnhancedNavigation';
import EnhancedFooter from '../components / EnhancedFooter';
export default /**
 * PartnersPage - Function description
 */
function PartnersPage() {
  const partners = [;
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      name: 'Microsoft Azure',
      category: 'Cloud Infrastructure',
      description:;
        'Strategic partnership for enterprise cloud solutions and AI services',
      logo: '/api / placeholder / 200 / 100',
      website: 'https://azure.microsoft.com',
      partnership: 'Technology Alliance',
      benefits: [;
        'Joint go - to - market',
        'Technical integration',
        'Co - selling opportunities',
      ],
      icon: Globe,
<<<<<<< HEAD
      color: 'from - blue - 500 to - cyan - 500',
=======
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "NVIDIA",
      category: "AI & Computing",
      description: "Collaboration on GPU-accelerated AI and quantum computing solutions",
      logo: "/api/placeholder/200/100",
      website: "https://nvidia.com",
      partnership: "Technology Partner",
      benefits: ["Hardware optimization", "Joint R&D", "Market expansion"],
      icon: Brain,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "IBM Quantum",
      category: "Quantum Computing",
      description: "Partnership for quantum computing research and enterprise solutions",
      logo: "/api/placeholder/200/100",
      website: "https://quantum-computing.ibm.com",
      partnership: "Research Partner",
      benefits: ["Quantum access", "Joint research", "Enterprise deployment"],
      icon: Atom,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Cisco",
      category: "Cybersecurity",
      description: "Strategic alliance for network security and threat detection solutions",
      logo: "/api/placeholder/200/100",
      website: "https://cisco.com",
      partnership: "Security Alliance",
      benefits: ["Network integration", "Security solutions", "Global reach"],
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "AWS",
      category: "Cloud Services",
      description: "Partnership for scalable cloud infrastructure and AI services",
      logo: "/api/placeholder/200/100",
      website: "https://aws.amazon.com",
      partnership: "Technology Partner",
      benefits: ["Cloud infrastructure", "AI services", "Global expansion"],
      icon: Rocket,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Intel",
      category: "Hardware & AI",
      description: "Collaboration on AI-optimized hardware and edge computing solutions",
      logo: "/api/placeholder/200/100",
      website: "https://intel.com",
      partnership: "Technology Partner",
      benefits: ["Hardware optimization", "Edge computing", "Performance tuning"],
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',;
    },  ];

      color: "from-indigo-500 to-purple-500"
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const partnershipTypes = [
    {
      title: "Technology Alliance",
      description: "Deep technical integration and joint product development",
      benefits: ["Shared technology roadmap", "Joint R&D", "Co-innovation"],
      icon: Handshake,
      color: "from-blue-500 to-cyan-500"
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    },
    {
      name: 'NVIDIA',
      category: 'AI & Computing',
      description:;
        'Collaboration on GPU - accelerated AI and quantum computing solutions',
      logo: '/api / placeholder / 200 / 100',
      website: 'https://nvidia.com',
      partnership: 'Technology Partner',
      benefits: ['Hardware optimization', 'Joint R & D', 'Market expansion'],
      icon: Brain,
      color: 'from - green - 500 to - emerald - 500',
    },
    {
      name: 'IBM Quantum',
      category: 'Quantum Computing',
      description:;
        'Partnership for quantum computing research and enterprise solutions',
      logo: '/api / placeholder / 200 / 100',
      website: 'https://quantum - computing.ibm.com',
      partnership: 'Research Partner',
      benefits: ['Quantum access', 'Joint research', 'Enterprise deployment'],
      icon: Atom,
      color: 'from - purple - 500 to - pink - 500',
    },
    {
      name: 'Cisco',
      category: 'Cybersecurity',
      description:;
        'Strategic alliance for network security and threat detection solutions',
      logo: '/api / placeholder / 200 / 100',
      website: 'https://cisco.com',
      partnership: 'Security Alliance',
      benefits: ['Network integration', 'Security solutions', 'Global reach'],
      icon: Shield,
      color: 'from - red - 500 to - orange - 500',
    },
    {
      name: 'AWS',
      category: 'Cloud Services',
      description:;
        'Partnership for scalable cloud infrastructure and AI services',
      logo: '/api / placeholder / 200 / 100',
      website: 'https://aws.amazon.com',
      partnership: 'Technology Partner',
      benefits: ['Cloud infrastructure', 'AI services', 'Global expansion'],
      icon: Rocket,
      color: 'from - yellow - 500 to - orange - 500',
    },
    {
      name: 'Intel',
      category: 'Hardware & AI',
      description:;
        'Collaboration on AI - optimized hardware and edge computing solutions',
      logo: '/api / placeholder / 200 / 100',
      website: 'https://intel.com',
      partnership: 'Technology Partner',
      benefits: [;
        'Hardware optimization',
        'Edge computing',
        'Performance tuning',
      ],
      icon: Brain,
      color: 'from - indigo - 500 to - purple - 500',
    },  ];
;
  const partnership_types = [;
    {
      title: 'Technology Alliance',
      description: 'Deep technical integration and joint product development',
      benefits: ['Shared technology roadmap', 'Joint R & D', 'Co - innovation'],
      icon: Handshake,
      color: 'from - blue - 500 to - cyan - 500',
    },
    {
      title: 'Go - to - Market',
      description: 'Joint sales and marketing initiatives for mutual growth',
      benefits: [;
        'Co - selling opportunities',
        'Joint marketing',
        'Revenue sharing',
      ],
      icon: Rocket,
      color: 'from - purple - 500 to - pink - 500',
    },
    {
      title: 'Research Partnership',
      description: 'Collaborative research in emerging technologies',
      benefits: ['Joint publications', 'Shared IP', 'Academic collaboration'],
      icon: Brain,
      color: 'from - emerald - 500 to - teal - 500',
    },
    {
      title: 'Channel Partnership',
      description:;
        'Distribution and reseller partnerships for market expansion',
      benefits: [;
        'Channel enablement',
        'Training programs',
        'Support collaboration',
      ],
      icon: Users,
<<<<<<< HEAD
      color: 'from - orange - 500 to - red - 500',
    },
  ];
;
  const stats = [;
    { number: '50+', label: 'Strategic Partners', icon: Handshake },
    { number: '100+', label: 'Joint Projects', icon: Rocket },
    { number: '25+', label: 'Countries', icon: Globe },
    { number: '300%', label: 'Growth Rate', icon: TrendingUp },
  ];
;
  return (
<<<<<<< HEAD
        />;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/partners' />      </Head>;
      <EnhancedNavigation />;
=======

        />;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/partners' />      </Head>;
      <EnhancedNavigation />;


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Hero Section */}
      <section className='relative pt-32 pb-20 px-6'>;
        <div className='max-w-7xl mx-auto text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
<<<<<<< HEAD
import { 
  Handshake, Globe, Rocket, Brain, Atom, Shield, 
  ArrowRight, ExternalLink, Star, Users, Clock, TrendingUp
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
  Clock,;
  TrendingUp,;
} from 'lucide-react';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import {
  Handshake, Globe, Rocket, Brain, Atom, Shield,
  ArrowRight, ExternalLink, Star, Users, Clock, TrendingUp
} from 'lucide-react',
import EnhancedNavigation from '../components/EnhancedNavigation',
import EnhancedFooter from '../components/EnhancedFooter',
export default function PartnersPage() {
  const partners = [
    {
      name: "Microsoft Azure",
      category: "Cloud Infrastructure",
      description: "Strategic partnership for enterprise cloud solutions and AI services",
      logo: "/api/placeholder/200/100",
      website: "https://azure.microsoft.com",
      partnership: "Technology Alliance",
      benefits: ["Joint go-to-market", "Technical integration", "Co-selling opportunities"],
      icon: Globe,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "NVIDIA",
      category: "AI & Computing",
      description: "Collaboration on GPU-accelerated AI and quantum computing solutions",
      logo: "/api/placeholder/200/100",
      website: "https://nvidia.com",
      partnership: "Technology Partner",
      benefits: ["Hardware optimization", "Joint R&D", "Market expansion"],
      icon: Brain,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "IBM Quantum",
      category: "Quantum Computing",
      description: "Partnership for quantum computing research and enterprise solutions",
      logo: "/api/placeholder/200/100",
      website: "https://quantum-computing.ibm.com",
      partnership: "Research Partner",
      benefits: ["Quantum access", "Joint research", "Enterprise deployment"],
      icon: Atom,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Cisco",
      category: "Cybersecurity",
      description: "Strategic alliance for network security and threat detection solutions",
      logo: "/api/placeholder/200/100",
      website: "https://cisco.com",
      partnership: "Security Alliance",
      benefits: ["Network integration", "Security solutions", "Global reach"],
      icon: Shield,
      color: "from-red-500 to-orange-500"
    },
    {
      name: "AWS",
      category: "Cloud Services",
      description: "Partnership for scalable cloud infrastructure and AI services",
      logo: "/api/placeholder/200/100",
      website: "https://aws.amazon.com",
      partnership: "Technology Partner",
      benefits: ["Cloud infrastructure", "AI services", "Global expansion"],
      icon: Rocket,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Intel",
      category: "Hardware & AI",
      description: "Collaboration on AI-optimized hardware and edge computing solutions",
      logo: "/api/placeholder/200/100",
      website: "https://intel.com",
      partnership: "Technology Partner",
      benefits: ["Hardware optimization", "Edge computing", "Performance tuning"],
      icon: Brain,
      color: 'from-indigo-500 to-purple-500',;
    },  ];

      color: "from-indigo-500 to-purple-500"
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const partnershipTypes = [
    {
      title: "Technology Alliance",
      description: "Deep technical integration and joint product development",
      benefits: ["Shared technology roadmap", "Joint R&D", "Co-innovation"],
      icon: Handshake,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Go-to-Market",
      description: "Joint sales and marketing initiatives for mutual growth",
      benefits: ["Co-selling opportunities", "Joint marketing", "Revenue sharing"],
      icon: Rocket,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Research Partnership",
      description: "Collaborative research in emerging technologies",
      benefits: ["Joint publications", "Shared IP", "Academic collaboration"],
      icon: Brain,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Channel Partnership",
      description: "Distribution and reseller partnerships for market expansion",
      benefits: ["Channel enablement", "Training programs", "Support collaboration"],
      icon: Users,
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      color: "from-orange-500 to-red-500"
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const stats = [
    { number: "50+", label: "Strategic Partners", icon: Handshake },
    { number: "100+", label: "Joint Projects", icon: Rocket },
    { number: "25+", label: "Countries", icon: Globe },
    { number: "300%", label: "Growth Rate", icon: TrendingUp   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>Partners - Zion Tech Group</title>
        <meta
          name='description'
          content='Strategic partnerships and collaboration opportunities with Zion Tech Group. Join our ecosystem of technology leaders and innovators.'
        />
        <meta property='og:title' content='Partners - Zion Tech Group' />
        <meta
          property='og:description'
          content='Strategic partnerships and collaboration opportunities.'
        />
        <link rel='canonical' href='https://ziontechgroup.com/partners' />      </Head>
      <EnhancedNavigation />
      {/* Hero Section */}
<<<<<<< HEAD
      <section className='relative pt-32 pb-20 px-6'>
        <div className='max-w-7xl mx-auto text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8'
        <meta name="description" content="Strategic partnerships and collaboration opportunities with Zion Tech Group. Join our ecosystem of technology leaders and innovators." />
        <meta property="og:title" content="Partners - Zion Tech Group" />
        <meta property="og:description" content="Strategic partnerships and collaboration opportunities." />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Head>
      <EnhancedNavigation />
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


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <section className='relative pt-32 pb-20 px-6'>;
        <div className='max-w-7xl mx-auto text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">
              Strategic Partners
            </h1>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Building the future of technology through strategic partnerships and collaboration


            </p>
            <button className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto'>
              Become a Partner
              <ArrowRight className='w-5 h-5' />            </button>
          </motion.div>
        </div>
      </section>
            transition={{ duration: 0 && 0.8 }}
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
              Building the future of technology through strategic partnerships
              and collaboration            </p>
          </motion.div>
          <motion.div
<<<<<<< HEAD
=======
            className='mb-8'>;
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6'>;
              Strategic Partners;
            </h1>;
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
              Building the future of technology through strategic partnerships;
              and collaboration            </p>;
          </motion && motion.div>;
          <motion&& motion.div
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
<<<<<<< HEAD
=======
            className='mb - 12';
          >;
            <p className='text - lg text - white / 70 max - w-2xl mx - auto mb - 8'>;
              Join our ecosystem of technology leaders, innovators, and industry;
              experts to create transformative solutions that shape the future;
              of computing.;
            </p>;

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Join our ecosystem of technology leaders, innovators, and industry experts 
=======
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='mb-12'
          >
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>
              Join our ecosystem of technology leaders, innovators, and industry
              experts to create transformative solutions that shape the future
              of computing.
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Building the future of technology through strategic partnerships and collaboration
<<<<<<< HEAD
            </p>
          </motion.div>
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
            transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Join our ecosystem of technology leaders, innovators, and industry experts
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            </p>
            <button className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto'>
              Become a Partner
              <ArrowRight className='w-5 h-5' />            </button>
          </motion.div>
        </div>
      </section>
=======
            transition={{ duration: 0 && 0.8 }}
            className='mb-8'>;
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6'>;
              Strategic Partners;
            </h1>;
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
              Building the future of technology through strategic partnerships;
              and collaboration            </p>;
          </motion && motion.div>;

          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
            className='mb-12'>;
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>;
=======
    <div className='min - h-screen bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950 text - white'>;
      <Head>;
        <title > Partners - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Strategic partnerships and collaboration opportunities with Zion Tech Group. Join our ecosystem of technology leaders and innovators.';
        />;
        <meta property='og:title' content='Partners - Zion Tech Group' />;
        <meta;
          property='og:description';
          content='Strategic partnerships and collaboration opportunities.';
        />;
        <link rel='canonical' href='https://ziontechgroup.com / partners' />      </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */}
      <section className='relative pt - 32 pb - 20 px - 6'>;
        <div className='max - w-7xl mx - auto text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb - 8';
          >;
            <h1 className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - white via - blue - 100 to - cyan - 100 bg - clip - text text - transparent mb - 6'>;
              Strategic Partners;
            </h1>;
            <p className='text - xl md:text - 2xl text - white / 80 max - w-3xl mx - auto leading - relaxed'>;
              Building the future of technology through strategic partnerships;
              and collaboration            </p>;
          </motion.div>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb - 12';
          >;
            <p className='text - lg text - white / 70 max - w-2xl mx - auto mb - 8'>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
              Join our ecosystem of technology leaders, innovators, and industry;
              experts to create transformative solutions that shape the future;
              of computing.;
            </p>;

=======
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Join our ecosystem of technology leaders, innovators, and industry experts 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              to create transformative solutions that shape the future of computing.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Become a Partner
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Stats Section */}
      <section className='py-16 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
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
  Handshake, Globe, Rocket, Brain, Atom, Shield,;
  ArrowRight, ExternalLink, Star, Users, Clock, TrendingUp;
} from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
export default function PartnersPage(req, res) {
  try {
  const partners = [;
    {;
      name: "Microsoft Azure";
      category: "Cloud Infrastructure";
      description: "Strategic partnership for enterprise cloud solutions and AI services";
      logo: "/api/placeholder/200/100";
      website: "https://azure.microsoft.com",;
      partnership: "Technology Alliance",;
      benefits: ["Joint go-to-market", "Technical integration", "Co-selling opportunities"],;
      icon: Globe,;
      color: "from-blue-500 to-cyan-500";
    },;
    {;
      name: "NVIDIA",;
      category: "AI & Computing",;
      description: "Collaboration on GPU-accelerated AI and quantum computing solutions",;
      logo: "/api/placeholder/200/100",;
      website: "https://nvidia.com",;
      partnership: "Technology Partner",;
      benefits: ["Hardware optimization", "Joint R&D", "Market expansion"],;
      icon: Brain,;
      color: "from-green-500 to-emerald-500";
    },;
    {;
      name: "IBM Quantum",;
      category: "Quantum Computing",;
      description: "Partnership for quantum computing research and enterprise solutions",;
      logo: "/api/placeholder/200/100",;
      website: "https://quantum-computing.ibm.com",;
      partnership: "Research Partner",;
      benefits: ["Quantum access", "Joint research", "Enterprise deployment"],;
      icon: Atom,;
      color: "from-purple-500 to-pink-500";
    },;
    {;
      name: "Cisco",;
      category: "Cybersecurity",;
      description: "Strategic alliance for network security and threat detection solutions",;
      logo: "/api/placeholder/200/100",;
      website: "https://cisco.com",;
      partnership: "Security Alliance",;
      benefits: ["Network integration", "Security solutions", "Global reach"],;
      icon: Shield,;
      color: "from-red-500 to-orange-500";
    },;
    {;
      name: "AWS",;
      category: "Cloud Services",;
      description: "Partnership for scalable cloud infrastructure and AI services",;
      logo: "/api/placeholder/200/100",;
      website: "https://aws.amazon.com",;
      partnership: "Technology Partner",;
      benefits: ["Cloud infrastructure", "AI services", "Global expansion"],;
      icon: Rocket,;
      color: "from-yellow-500 to-orange-500";
    },;
    {;
      name: "Intel",;
      category: "Hardware & AI",;
      description: "Collaboration on AI-optimized hardware and edge computing solutions",;
      logo: "/api/placeholder/200/100",;
      website: "https://intel.com",;
      partnership: "Technology Partner",;
      benefits: ["Hardware optimization", "Edge computing", "Performance tuning"],;
      icon: Brain,;
      color: "from-indigo-500 to-purple-500";
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const partnershipTypes = [;
    {;
      title: "Technology Alliance";
      description: "Deep technical integration and joint product development";
      benefits: ["Shared technology roadmap", "Joint R&D", "Co-innovation"],;
      icon: Handshake,;
      color: "from-blue-500 to-cyan-500";
    },;
    {;
      title: "Go-to-Market",;
      description: "Joint sales and marketing initiatives for mutual growth",;
      benefits: ["Co-selling opportunities", "Joint marketing", "Revenue sharing"],;
      icon: Rocket,;
      color: "from-purple-500 to-pink-500";
    },;
    {;
      title: "Research Partnership",;
      description: "Collaborative research in emerging technologies",;
      benefits: ["Joint publications", "Shared IP", "Academic collaboration"],;
      icon: Brain,;
      color: "from-emerald-500 to-teal-500";
    },;
    {;
      title: "Channel Partnership",;
      description: "Distribution and reseller partnerships for market expansion",;
      benefits: ["Channel enablement", "Training programs", "Support collaboration"],;
      icon: Users,;
      color: "from-orange-500 to-red-500";
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],;
  const stats = [;
    { number: "50+", label: "Strategic Partners", icon: Handshake },;
    { number: "100+", label: "Joint Projects", icon: Rocket },;
    { number: "25+", label: "Countries", icon: Globe };
    { number: "300%", label: "Growth Rate", icon: TrendingUp   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ];
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;
      <Head>;
        <title>Partners - Zion Tech Group</title>;
        <meta name="description" content="Strategic partnerships and collaboration opportunities with Zion Tech Group. Join our ecosystem of technology leaders and innovators." />;
        <meta property="og:title" content="Partners - Zion Tech Group" />;
        <meta property="og:description" content="Strategic partnerships and collaboration opportunities." />;
        <link rel="canonical" href="https://ziontechgroup.com/partners" />;
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
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">;
              Strategic Partners;
            </h1>;
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">;
              Building the future of technology through strategic partnerships and collaboration;
            </p>;
          </motion.div>;
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
            transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            className="mb-12";
          >;
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">;
              Join our ecosystem of technology leaders, innovators, and industry experts;
              to create transformative solutions that shape the future of computing.;
            </p>;
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">;
              Become a Partner;
              <ArrowRight className="w-5 h-5" />;
            </button>;
          </motion.div>;
        </div>;
      </section>;
      {/* Stats Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-16 px-6">;
        <div className="max-w-7xl mx-auto">;
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">;
            {stats.map((stat, index) => (;
              <motion.div;
                key={stat.label  } catch (error) {
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
                className="text-center"
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}

          </div>;
        </div>;
      </section>;


      {/* Partnership Types */}
      <section className='py-20 px-6'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className='text-3xl font-bold text-white mb-2'>
                  {stat.number}
                </div>
                <div className='text-white/70'>{stat.label}</div>              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Partnership Types */}
      <section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>          <motion.div
<<<<<<< HEAD
=======
=======
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
            ))}

          </div>;
        </div>;
      </section>;


      {/* Partnership Types */}
      <section className='py-20 px-6'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div

=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Partnership Types */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
            className='text-center mb-16'
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Partnership Types */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
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
            className="text-center mb-16"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-4xl font-bold text-white mb-6">Partnership Types</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We offer various partnership models to meet your business objectives and growth goals
            </p>
          </motion.div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
<<<<<<< HEAD
              <motion.div


          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
=======
=======
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300'
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              <motion.div


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Partnership Types;
            </h2>;
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>;
              We offer various partnership models to meet your business;
              objectives and growth goals;
            </p>;
          </motion && motion.div>;
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {partnershipTypes && partnershipTypes.map((type, index) => (;
              <motion&& motion.div
                key={type && type.title}
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {partnershipTypes && partnershipTypes.map((type, index) => (;
              <motion&& motion.div
                key={type && type.title}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
                className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300'
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.title  } catch (error) {
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
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${type.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <type.icon className="w-8 h-8 text-white" />
                </div>
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <h3 className='text-2xl font-bold text-white mb-4'>
                  {type.title}
                </h3>
                <p className='text-white/70 mb-6'>{type.description}</p>
                <ul className='space-y-2'>
                  {type.benefits.map(benefit => (
                    <li
                      key={benefit}
                      className='flex items-center text-white/80'
                    >
                      <div className='w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3' />                      {benefit}
                    </li>
<<<<<<< HEAD
=======

=======
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Current Partners */}
      <section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='text-center mb-16'
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-white/70 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-white/80">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                      {benefit}
                    </li>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  ))}
                </ul>;
              </motion && motion.div>;
            ))}

<<<<<<< HEAD
<<<<<<< HEAD
          </div>
        </div>
      </section>
      {/* Current Partners */}
      <section className='py-20 px-6'>
        <div className='max-w-7xl mx-auto'>          <motion.div
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>;
        </div>;
      </section>;


      {/* Current Partners */}
      <section className='py-20 px-6'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div

=======

      {/* Current Partners */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
            className='text-center mb-16'
                <h3 className="text-2xl font-bold text-white mb-4">{type.title}</h3>
                <p className="text-white/70 mb-6">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center text-white/80">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3" />
                      {benefit  } catch (error) {
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
                </ul>;
              </motion.div>;
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </div>;
        </div>;
      </section>;
      {/* Current Partners */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
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
            className="text-center mb-16"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Partners</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Leading technology companies and organizations that trust us to deliver innovative solutions
            </p>
          </motion.div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
<<<<<<< HEAD
              <motion.div


          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
=======
=======
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300'
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
              <motion.div


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold text-white mb-6'>Our Partners</h2>;
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>;
              Leading technology companies and organizations that trust us to;
              deliver innovative solutions;
            </p>;
          </motion && motion.div>;
<<<<<<< HEAD
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {partners && partners.map((partner, index) => (;
              <motion&& motion.div
                key={partner && partner.name}
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>            {partners && partners.map((partner, index) => (;
              <motion&& motion.div
                key={partner && partner.name}


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}
<<<<<<< HEAD
<<<<<<< HEAD
            <button className='px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center justify - center gap - 2 mx - auto'>;
              Become a Partner;
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
                className='bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300'
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name  } catch (error) {
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
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${partner.color} rounded-xl flex items-center justify-center`}>
                      <partner.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/60 bg-white/5 px-2 py-1 rounded-full">
<<<<<<< HEAD
<<<<<<< HEAD


                  <h3 className="text-xl font-bold text-white mb-3">{partner.name}</h3>
<h3 className="text-xl font-bold text-white mb-3">{partner.name}</h3>
=======
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                        {partner.category}
                      </span>
                      <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                        {partner.partnership}
                      </span>
                    </div>
                  </div>
<<<<<<< HEAD



                  <h3 className="text-xl font-bold text-white mb-3">{partner.name}</h3>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  <p className="text-white/70 text-sm mb-4">{partner.description}</p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Benefits</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit) => (
                        <li key={benefit} className="text-xs text-white/80 flex items-center">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2" />
                          {benefit}
                        </li>
                      ))}
<<<<<<< HEAD
                    </ul>;
                  </div>;
                  <div className='flex items-center justify-between'>;
                  <div className="flex items-center justify-between">

=======


                    </ul>;
                  </div>;
                  <div className='flex items-center justify-between'>;


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
                  <div className="flex items-center justify-between">

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    <a
                      href={partner && partner.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1'>;
                      Visit Website;
                      <ExternalLink className='w-3 h-3' />;
                    </a>;
                    <button className='px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105'>                      Learn More;
                    </button>;
                  </div>;
                </div>;
              </motion && motion.div>;
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={partner.website}
                        {partner.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </span>
                      <span className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                        {partner.partnership  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                      </span>
                    </div>
                  </div>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <h3 className='text-xl font-bold text-white mb-3'>
                    {partner.name}
                  </h3>
                  <p className='text-white/70 text-sm mb-4'>
                    {partner.description}
                  </p>
                  <div className='mb-4'>
                    <h4 className='text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider'>
                      Benefits
                    </h4>
                    <ul className='space-y-1'>
                      {partner.benefits.map(benefit => (
                        <li
                          key={benefit}
                          className='text-xs text-white/80 flex items-center'
                        >
                          <div className='w-1 h-1 bg-cyan-400 rounded-full mr-2' />                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className='flex items-center justify-between'>
                  <h3 className="text-xl font-bold text-white mb-3">{partner.name}</h3>
                  <p className="text-white/70 text-sm mb-4">{partner.description}</p>
<<<<<<< HEAD
=======
                  
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white/60 mb-2 uppercase tracking-wider">Benefits</h4>
                    <ul className="space-y-1">
                      {partner.benefits.map((benefit) => (
                        <li key={benefit} className="text-xs text-white/80 flex items-center">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2" />
                          {benefit  } catch (error) {
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
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
<<<<<<< HEAD
                    <a
                      href={partner.website  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                    <a
                      href={partner && partner.website}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1'>;
                      Visit Website;
                      <ExternalLink className='w-3 h-3' />;
                    </a>;
                    <button className='px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105'>                      Learn More;
                    </button>;
                  </div>;
                </div>;
              </motion && motion.div>;

=======
                  
                  <div className="flex items-center justify-between">
                    <a
                      href={partner.website}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 flex items-center gap-1"
                    >
                      Visit Website
                      <ExternalLink className="w-3 h-3" />
<<<<<<< HEAD
<<<<<<< HEAD
                    </Link>
=======
<<<<<<< HEAD
                    </a>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    </a>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
              </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            ))}


            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

          </div>;
<<<<<<< HEAD
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
=======
            ))}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          </div>
        </div>
      </section>
      {/* Become a Partner CTA */}
      <section className='py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
          </div>;
        </div>;
      </section>;
      {/* Become a Partner CTA */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
=======
        </div>;
      </section>;
      {/* Become a Partner CTA */}
      <section className='py-20 px-6'>;
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div
=======

          </div>;
        </div>;
      </section>;

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      {/* Become a Partner CTA */}
      <section className='py-20 px-6'>;
        <div className='max-w-4xl mx-auto text-center'>          <motion&& motion.div
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      {/* Become a Partner CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
          >
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          >

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join our ecosystem of technology leaders and create innovative solutions that drive business transformation and growth.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Partnership Inquiry
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Download Partnership Guide
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </button>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <EnhancedFooter />
    </div>

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <EnhancedFooter />
    </div>

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

),
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Partnership Types</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > We offer various partnership models to meet your business objectives and growth goals </p> </motion.div> </li>) ) 
}</ul> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Our Partners</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Leading technology companies and organizations that trust us to deliver innovative solutions </p> </motion.div> </span> </div> </div> </li>) ) 
}</ul> </div> <div className="flex items-center justify-between" > <a > Visit Website <ExternalLink className="w-3 h-3" /> </Link> <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105" > Learn More </button> </div> </div> </motion.div>) ) 


}</div> </div> </section> <motion.div initial= {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Ready to Partner with Us?;
            </h2>;
            <p className='text-xl text-white/70 mb-8 max-w-2xl mx-auto'>;
              Join our ecosystem of technology leaders and create innovative;
              solutions that drive business transformation and growth.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <button className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105'>;
                Partnership Inquiry;
              </button>;
              <button className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>                Download Partnership Guide;
              </button>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <EnhancedFooter />;
    </div>;
  ),;
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Partnership Types</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > We offer various partnership models to meet your business objectives and growth goals </p> </motion && motion.div> </li>) ) ;
}</ul> </motion && motion.div>) ) ;
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Our Partners</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Leading technology companies and organizations that trust us to deliver innovative solutions </p> </motion && motion.div> </span> </div> </div> </li>) ) ;
}</ul> </div> <div className="flex items-center justify-between" > <a > Visit Website <ExternalLink className="w-3 h-3" /> </Link> <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105" > Learn More </button> </div> </div> </motion && motion.div>) ) ;
}</div> </div> </section> <motion&& motion.div initial= {
<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <EnhancedFooter />
    </div>
)
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Partnership Types</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > We offer various partnership models to meet your business objectives and growth goals </p> </motion.div> </li>) )
}</ul> </motion.div>) )
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Our Partners</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Leading technology companies and organizations that trust us to deliver innovative solutions </p> </motion.div> </span> </div> </div> </li>) )
}</ul> </div> <div className="flex items-center justify-between" > <a > Visit Website <ExternalLink className="w-3 h-3" /> </Link> <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105" > Learn More </button> </div> </div> </motion.div>) )
),
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Partnership Types</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > We offer various partnership models to meet your business objectives and growth goals </p> </motion.div> </li>) ) 
}</ul> </motion.div>) ) 
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Our Partners</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Leading technology companies and organizations that trust us to deliver innovative solutions </p> </motion.div> </span> </div> </div> </li>) ) 
}</ul> </div> <div className="flex items-center justify-between" > <a > Visit Website <ExternalLink className="w-3 h-3" /> </Link> <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-lg font-semibold text-white text-sm transition-all duration-300 transform hover:scale-105" > Learn More </button> </div> </div> </motion.div>) ) 
}</div> </div> </section> <motion.div initial= {
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  duration: 0 && 0.8 
}viewport= {
  {
  once: true 

}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Partner with Us? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Join our ecosystem of technology leaders and create innovative solutions that drive business transformation and growth. </p> Partnership Inquiry </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Download Partnership Guide </button> </div> </motion && motion.div> </div> </section> <EnhancedFooter /> </div>) ;

<<<<<<< HEAD
  once: true 
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Partner with Us? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Join our ecosystem of technology leaders and create innovative solutions that drive business transformation and growth. </p> Partnership Inquiry </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Download Partnership Guide </button> </div> </motion && motion.div> </div> </section> <EnhancedFooter /> </div>) ;
  )
}
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  </p>;
                  <div className='mb - 4'>;
                    <h4 className='text - sm font - semibold text - white / 60 mb - 2 uppercase tracking - wider'>;
                      Benefits;
                    </h4>;
                    <ul className='space - y-1'>;
                      {partner.benefits.map (benefit => (
                        <li;
                          key={benefit}
                          className='text - xs text - white / 80 flex items - center';
                        >;
                          <div className='w - 1 h - 1 bg - cyan - 400 rounded - full mr - 2' />                          {benefit}
                        </li>))}
                    </ul>;
                  </div>;
                  <div className='flex items - center justify - between'>;
                    <a;
                      href={partner.website}
                      target='_blank';
                      rel='noopener noreferrer';
                      className='text - sm text - cyan - 400 hover:text - cyan - 300 transition - colors duration - 300 flex items - center gap - 1';
                    >;
                      Visit Website;
                      <ExternalLink className='w - 3 h - 3' />;
                    </a>;
                    <button className='px - 4 py - 2 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - lg font - semibold text - white text - sm transition - all duration - 300 transform hover:scale - 105'>                      Learn More;
                    </button>;
                  </div>;
                </div>;
              </motion.div>))}
          </div>;
        </div>;
      </section>;
      {/* Become a Partner CTA */}
      <section className='py - 20 px - 6'>;
        <div className='max - w-4xl mx - auto text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            whileInView={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
=======

  duration: 0 && 0.8 

}viewport= {
  {
  once: true
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Partner with Us? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Join our ecosystem of technology leaders and create innovative solutions that drive business transformation and growth. </p> Partnership Inquiry </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Download Partnership Guide </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>)
  )
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          >;
            <h2 className='text - 4xl font - bold text - white mb - 6'>;
              Ready to Partner with Us?;
            </h2>;
            <p className='text - xl text - white / 70 mb - 8 max - w-2xl mx - auto'>;
              Join our ecosystem of technology leaders and create innovative;
              solutions that drive business transformation and growth.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <button className='px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105'>;
                Partnership Inquiry;
              </button>;
              <button className='px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10'>                Download Partnership Guide;
<<<<<<< HEAD
  once: true
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Partner with Us? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Join our ecosystem of technology leaders and create innovative solutions that drive business transformation and growth. </p> Partnership Inquiry </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > Download Partnership Guide </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>)
  )
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Ready to Partner with Us?;
            </h2>;
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">;
              Join our ecosystem of technology leaders and create innovative solutions that drive business transformation and growth.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">;
                Partnership Inquiry;
              </button>;
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">;
                Download Partnership Guide;
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </div>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;


<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
