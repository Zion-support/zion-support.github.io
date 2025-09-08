import { motion } from 'framer-motion';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { Cloud, Shield, Zap, CheckCircle, ArrowRight, BarChart3, Users, Settings, Database, Globe, Lock, Smartphone, Brain } from 'lucide-react';
import React from 'react';import Link from 'next/link';';
import { motion } from 'framer-motion';
import { Cloud, 
  Shield, 
  Zap, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Users,
  Settings,
  Database,
  Globe,
  Lock,

  Brain;

} from 'lucide-react';

      'Risk assessment'';
    ];
  },
  {}
    title: 'Design & Architecture,',
    description: 'Cloud-native architecture design and security framework implementation.,',
    icon: Settings,
    steps: [;
      'Cloud architecture design,',
      'Security framework',',
      'Scalability planning',',
      'Cost optimization'';
    ];
  },
  {}
    ];
  },
  {}
    title: 'Optimization,',
    description: 'Continuous monitoring and optimization for peak performance.,',
    icon: Zap,
    steps: [;
      'Performance monitoring,',
      'Cost optimization',',
      'Security updates',',
      'Continuous improvement'';
    ];
  }
;];
const services = [;
  {}
    ];
  },
  {}
    title: 'Azure Migration,',
    description: 'Microsoft Azure cloud migration with enterprise-grade security and compliance.,',
    icon: Shield,
    features: [;
      'Azure Virtual Machines,',
      'Azure SQL Database',',
      'Azure Storage migration',',
      'Azure Functions deployment'';
    ];
    ];
  }];
  },
  {}
    ];
  },
  {}
    title: 'Multi-Cloud Strategy,',
    description: 'Hybrid and multi-cloud solutions for maximum flexibility and redundancy.,',
    icon: Globe,
    features: [;
      'Cross-cloud integration,',
      'Disaster recovery',',
      'Load balancing',',
      'Cost optimization'';
    ];
  }
;];
const benefits = [;
  {}
;];
export default function CloudMigrationPage() {
  return (;
    <Layout );
      title="Cloud Migration Solutions - Zion Tech Group"";
      description="Seamlessly migrate your infrastructure to AWS, Azure, or Google Cloud with our comprehensive cloud migration services.""
      keywords="cloud migration, AWS migration, Azure migration, Google Cloud, cloud services, infrastructure migration""
    >;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white py-20 overflow-hidden">"
          <div className="absolute inset-0">";
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>";
            <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>";
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>";
          </div>;
          <div className="container mx-auto px-4 relative z-10">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

                <h1 className="text-5xl md:text-6xl font-bold">";
                  Cloud;
                  <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">";
                    Migration Solutions;
                  </span>;
                </h1>;
              </div>;"
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">";

                Seamlessly migrate your infrastructure to the cloud with our comprehensive migration services. 
                Reduce costs, improve performance, and enhance security with AWS, Azure, or Google Cloud.,
              </p>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Process Section */}
        <section className="py-20 bg-white">"


          <div className="container mx-auto px-4">";
            <motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

              className="text-center mb-16""
            >;"
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">";
                Our Cloud Migration Process;
              </h2>;

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                A proven methodology that ensures successful cloud migration;
                with minimal downtime and maximum security.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {phases.map((phase, index) => (,
                <motion.div}),
                  key={phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
                Choose from leading cloud providers or implement a multi-cloud strategy;
                for maximum flexibility and redundancy.;
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">";

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">";
                Our cloud migration services deliver measurable improvements in cost, 
                performance, and security.,
              </p>;
            </motion.div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">";
              {benefits.map((benefit, index) => (,
                <motion.div}),
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}

