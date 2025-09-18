import React from 'react';
import Layout from '../components/Layout';
import Layout from '../components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { 
  Brain,
  Shield,
  Users,
  Zap,
  Target,
  Award,
  ChevronRight,
  CheckCircle,
  Star,
  Globe,
  Code,
  Database,
  Cloud,
  Smartphone,
  BarChart3,
  Heart,
  Lightbulb,
  Rocket,
  Lock,
  TrendingUp;
} from 'lucide-react';









import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Users, Target, Globe, Heart, CheckCircle } from 'lucide-react';


const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible through cutting-edge technology and creative problem-solving.",
      color: "from-purple-500 to-pink-500"


    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building secure, reliable solutions that our clients can depend on for their most critical operations.",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: Users,

      title: "Client-Centric",
      description: "Every solution we create is designed with our clients' success and satisfaction as the top priority.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Agile & Fast",
      description: "We deliver results quickly without compromising quality, adapting to changing requirements seamlessly.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Attention to detail in every aspect of our work, ensuring flawless execution and optimal performance.",
      color: "from-green-500 to-emerald-500"
      title: "Human-Centric",
      description: "Technology should serve humanity, enhancing human capabilities and improving quality of life.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that address global challenges and benefit communities worldwide.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Rocket,
      title: "Excellence",
      description: "Maintaining the highest standards of quality and performance in everything we deliver.",
      color: "from-indigo-500 to-purple-500"

    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical principles in all our business relationships.",
      color: "from-pink-500 to-rose-500"

    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" }
    };
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building secure, reliable solutions that our clients can depend on for their most critical operations.";
      color: "from-red-500 to-orange-500"
    };
    {
      icon: Users,
      title: "Human-Centric",
      description: "Technology should serve humanity, enhancing human capabilities and improving quality of life.";
      color: "from-blue-500 to-cyan-500"
    };
    {
      icon: Globe,
      title: "Global Impact",
      description: "Creating solutions that address global challenges and benefit communities worldwide.",
      color: "from-green-500 to-emerald-500"
    };
    {
      icon: Rocket,
      title: "Excellence",
      description: "Maintaining the highest standards of quality and performance in everything we deliver.",
      color: "from-indigo-500 to-purple-500"
    };
    {
      icon: Heart,
      title: "Integrity",
      description: "Operating with transparency, honesty, and ethical principles in all our business relationships.";
      color: "from-pink-500 to-rose-500"
  Brain, Shield, Rocket, Cpu, Database, Atom, Target, Star, 
  Sparkles, Zap, Users, Award, Clock, CheckCircle, Globe, Code, Server;
  TrendingUp, BarChart3, Cloud, Network, Lightbulb, Flame, Zap as ZapIcon;
  ArrowRight, ChevronRight, MapPin, Mail, Phone, Globe as GlobeIcon
} from 'lucide-react';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ];

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle, color: 'from-blue-500 to-cyan-500' },
    { number: '50+', label: 'Enterprise Clients', icon: Users, color: 'from-purple-500 to-pink-500' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield, color: 'from-green-500 to-emerald-500' },

    { number: '24/7', label: 'Support Available', icon: Clock, color: 'from-orange-500 to-red-500' }
  ];

    { number: '24/7', label: 'Support Available', icon: Clock, color: 'from-orange-500 to-red-500'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',

      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creating breakthrough solutions.';
      color: 'from-purple-500 to-pink-500'
    };
      description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creating breakthrough solutions.',
      color: 'from-purple-500 to-pink-500'
    },

    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Security is at the core of everything we do. We build solutions that protect your business and data with quantum-resistant technology.',
      color: 'from-red-500 to-orange-500'

    };
    },

    {
      icon: Rocket,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering solutions that exceed expectations and drive measurable business value.',

    color: 'from-indigo-500 to-purple-500'
    };
      color: 'from-indigo-500 to-purple-500'
    },

    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We partner with you to understand your needs and deliver solutions that transform your business.',
      color: 'from-emerald-500 to-teal-500'

    }
  ];

      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],

  const technologies = [
    { name: 'Artificial Intelligence', icon: Brain, description: 'Advanced AI and machine learning solutions', color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum Computing', icon: Atom, description: 'Quantum-powered computing and cryptography', color: 'from-blue-500 to-cyan-500' },
    { name: 'Cybersecurity', icon: Shield, description: 'Quantum-resistant security solutions', color: 'from-red-500 to-orange-500' },
    { name: 'Edge Computing', icon: Network, description: 'Intelligent edge orchestration platforms', color: 'from-yellow-500 to-orange-500' },
    { name: 'Space Technology', icon: Rocket, description: 'AI-powered space exploration solutions', color: 'from-indigo-500 to-purple-500' },

    { name: 'Biotechnology', icon: ZapIcon, description: 'Neural interfaces and biomedical innovations', color: 'from-pink-500 to-rose-500' }
  ];

  const team = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "/team/john.jpg",
      bio: "Visionary leader with 15+ years in tech"
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "/team/sarah.jpg", 
      bio: "Technical expert specializing in cloud architecture"
    },
    {
      name: "Mike Chen",
      role: "Lead Developer",
      image: "/team/mike.jpg",
      bio: "Full-stack developer passionate about innovation"
    }
  ];
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/main
origin/automation-improvements-final



    { name: 'Biotechnology', icon: ZapIcon, description: 'Neural interfaces and biomedical innovations', color: 'from-pink-500 to-rose-500'   } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const team = [
    {
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader driving innovation in AI and quantum technologies',
      image: '/api/placeholder/150/150',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'AI Team',
      role: 'AI Research & Development',
      description: 'Expert engineers and researchers pushing the boundaries of artificial intelligence',
      image: '/api/placeholder/150/150',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Quantum Team',
      role: 'Quantum Computing',
      description: 'Specialists in quantum algorithms and quantum-resistant cryptography',
      image: '/api/placeholder/150/150',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Security Team',
      role: 'Cybersecurity',
      description: 'Experts in threat detection and zero-trust security architectures',
      image: '/api/placeholder/150/150',
      color: 'from-red-500 to-orange-500'
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize technology through AI and quantum computing.'
    },
    {
      year: '2021',
      title: 'First AI Solutions',
      description: 'Launched our first AI-powered business intelligence and automation solutions.'
    },
    {
      year: '2022',
      title: 'Quantum Breakthrough',
      description: 'Developed quantum-resistant cybersecurity solutions and quantum neural networks.'
    },
    {
      year: '2023',
      title: 'Space Technology',
      description: 'Expanded into space technology with AI-powered satellite management systems.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Reached 50+ enterprise clients and expanded our service portfolio to 100+ solutions.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to push boundaries with autonomous AI systems and consciousness technology.'
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ],
import React from 'react',
import Head from 'next/head',
import Button from '../components/ui/Button',
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>about | Zion Tech Group</title>
        <meta name="description" content="about - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">about</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default about;
