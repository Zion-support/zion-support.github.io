<<<<<<< HEAD
import Head from 'next/head';
import { motion } from 'framer-motion';

import {
  Brain
  Cpu
  Database
  Zap
  Shield
  Rocket
  ArrowRight
  CheckCircle
  Star
  Users
  Clock
  TrendingUp;
} from 'lucide-react';
import EnhancedNavigation from '../../components/EnhancedNavigation';
import EnhancedFooter from '../../components/EnhancedFooter';
export default function AIMLServicesPage() {
  const services = [

=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import React from 'react';
import Head from 'next / head';

import { motion } from 'framer-motion';

import {

  Brain,
  Cpu,
  Database,
  Zap,
  Shield,
  Rocket,
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
 * AIMLServicesPage - Function description
 */
function AIMLServicesPage() {
  const services = [;
    {
<<<<<<< HEAD
      title: 'Custom AI Solutions'
      description:
        'Tailored AI applications built for your specific business needs'
      features: [
        'Machine Learning Models'
        'Neural Networks'
        'Predictive Analytics'
        'Natural Language Processing'
      ]
      price: 'From $5,000'
      icon: Brain
      color: 'from-purple-500 to-pink-500'
    }
    {
      title: 'AI-Powered Automation'
      description: 'Intelligent automation systems that learn and adapt'
      features: [
        'Process Automation'
        'Workflow Optimization'
        'Smart Decision Making'
        'Continuous Learning'
      ]
      price: 'From $3,500'
      icon: Zap
      color: 'from-blue-500 to-cyan-500'
    }
    {
      title: 'Data Intelligence Platform'
      description: 'Advanced analytics and insights powered by AI'
      features: [
        'Big Data Processing'
        'Real-time Analytics'
        'Business Intelligence'
        'Predictive Insights'
      ]
      price: 'From $7,500'
      icon: Database
      color: 'from-emerald-500 to-teal-500'
    }
    {
      title: 'AI Consulting & Strategy'
      description:
        'Strategic guidance for AI implementation and transformation'
      features: [
        'AI Roadmap Planning'
        'Technology Assessment'
        'Implementation Strategy'
        'ROI Optimization'
      ]
      price: 'From $2,500'
      icon: Rocket
      color: 'from-orange-500 to-red-500'
    }
  ];
  const stats = [
    { number: '500+', label: 'AI Models Deployed', icon: Brain }
    { number: '99.9%', label: 'Accuracy Rate', icon: CheckCircle }
    { number: '24/7', label: 'AI Monitoring', icon: Clock }
    { number: '2500%', label: 'Average ROI', icon: TrendingUp }
  ];

=======


=======
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  Brain,
  Cpu,
  Database,
  Zap,
  Shield,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
<<<<<<< HEAD
import Head from 'next/head',
import { motion } from 'framer-motion',
import {
  Brain, Cpu, Database, Zap, Shield, Rocket,
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp
} from 'lucide-react',
import EnhancedNavigation from '../../components/EnhancedNavigation',
import EnhancedFooter from '../../components/EnhancedFooter',
export default function AIMLServicesPage() {
  const services = [
    {
      title: "Custom AI Solutions",
      description: "Tailored AI applications built for your specific business needs",
      features: ["Machine Learning Models", "Neural Networks", "Predictive Analytics", "Natural Language Processing"],
      price: "From $5,000",
=======
<<<<<<< HEAD
  Clock,
  TrendingUp,
} from 'lucide-react';
import EnhancedNavigation from '../../components / EnhancedNavigation';
import EnhancedFooter from '../../components / EnhancedFooter';
export default /**
 * AIMLServicesPage - Function description
 */
function AIMLServicesPage() {
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
      title: 'Custom AI Solutions',
      description:;
        'Tailored AI applications built for your specific business needs',
      features: [;
        'Machine Learning Models',
        'Neural Networks',
        'Predictive Analytics',
        'Natural Language Processing',
      ],
      price: 'From $5, 000',
      icon: Brain,
<<<<<<< HEAD
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Powered Automation",
      description: "Intelligent automation systems that learn and adapt",
      features: ["Process Automation", "Workflow Optimization", "Smart Decision Making", "Continuous Learning"],
      price: "From $3,500",
      icon: Zap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Data Intelligence Platform",
      description: "Advanced analytics and insights powered by AI",
      features: ["Big Data Processing", "Real-time Analytics", "Business Intelligence", "Predictive Insights"],
      price: "From $7,500",
      icon: Database,
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "AI Consulting & Strategy",
      description: "Strategic guidance for AI implementation and transformation",
      features: ["AI Roadmap Planning", "Technology Assessment", "Implementation Strategy", "ROI Optimization"],
      price: "From $2,500",
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
    },;
  ];

      color: "from-orange-500 to-red-500"
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          >
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
              AI & Machine Learning
            </h1>
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>
              Revolutionary AI solutions that adapt, learn, and evolve with your
              business            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-12'
          >
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>
              From custom neural networks to intelligent automation systems, we
              deliver AI solutions that provide measurable business outcomes and
              competitive advantages.
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI solutions that adapt, learn, and evolve with your business
            </p>
            <button className='px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto'>
              Get AI Consultation
              <ArrowRight className='w-5 h-5' />            </button>
          </motion.div>
        </div>
      </section>
            transition={{ duration: 0 && 0.8 }}
            className='mb-8'>;
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6'>;
              AI & Machine Learning;
            </h1>;
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
              Revolutionary AI solutions that adapt, learn, and evolve with your;
              business            </p>;
          </motion && motion.div>;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
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
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
      color: 'from - purple - 500 to - pink - 500',
    },
    {
      title: 'AI - Powered Automation',
      description: 'Intelligent automation systems that learn and adapt',
      features: [;
        'Process Automation',
        'Workflow Optimization',
        'Smart Decision Making',
        'Continuous Learning',
      ],
      price: 'From $3, 500',
      icon: Zap,
      color: 'from - blue - 500 to - cyan - 500',
    },
    {
      title: 'Data Intelligence Platform',
      description: 'Advanced analytics and insights powered by AI',
      features: [;
        'Big Data Processing',
        'Real - time Analytics',
        'Business Intelligence',
        'Predictive Insights',
      ],
      price: 'From $7, 500',
      icon: Database,
      color: 'from - emerald - 500 to - teal - 500',
    },
    {
      title: 'AI Consulting & Strategy',
      description:;
        'Strategic guidance for AI implementation and transformation',
      features: [;
        'AI Roadmap Planning',
        'Technology Assessment',
        'Implementation Strategy',
        'ROI Optimization',
      ],
      price: 'From $2, 500',
      icon: Rocket,
      color: 'from - orange - 500 to - red - 500',
    },
  ];
;
  const stats = [;
    { number: '500+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.9%', label: 'Accuracy Rate', icon: CheckCircle },
    { number: '24 / 7', label: 'AI Monitoring', icon: Clock },
    { number: '2500%', label: 'Average ROI', icon: TrendingUp },
  ];
;
  return (

        />;
        <link rel='canonical' href='https://ziontechgroup && ziontechgroup.com/services/ai-ml' />      </Head>;
      <EnhancedNavigation />;


      {/* Hero Section */}
      <section className='relative pt-32 pb-20 px-6'>;
        <div className='max-w-7xl mx-auto text-center'>          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


          >
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6'>
              AI & Machine Learning
            </h1>
<<<<<<< HEAD
=======


            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI solutions that adapt, learn, and evolve with your business
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
            </p>
            <button className='px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto'>
              Get AI Consultation
              <ArrowRight className='w-5 h-5' />            </button>
          </motion.div>
        </div>
      </section>
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            transition={{ duration: 0 && 0.8 }}
<<<<<<< HEAD
=======
            className='mb-8'>;
            <h1 className='text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6'>;
              AI & Machine Learning;
            </h1>;
            <p className='text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed'>;
              Revolutionary AI solutions that adapt, learn, and evolve with your;
              business            </p>;
          </motion && motion.div>;
          <motion&& motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8, delay: 0 && 0.2 }}
            className='mb-12'>;
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>;
    <div className='min - h-screen bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950 text - white'>;
      <Head>;
        <title > AI & Machine Learning Services - Zion Tech Group</title>;
        <meta;
          name='description';
          content='Cutting - edge AI and machine learning solutions from Zion Tech Group. Custom AI applications, automation, and intelligent systems that drive business growth.';
        />;
        <meta;
          property='og:title';
          content='AI & Machine Learning Services - Zion Tech Group';
        />;
        <meta;
          property='og:description';
          content='Cutting - edge AI and machine learning solutions that drive business growth and innovation.';
        />;
        <link rel='canonical' href='https://ziontechgroup.com / services / ai - ml' />      </Head>;
      <EnhancedNavigation />;
      {/* Hero Section */}
      <section className='relative pt - 32 pb - 20 px - 6'>;
        <div className='max - w-7xl mx - auto text - center'>          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb - 8';
          >;
            <h1 className='text - 5xl md:text - 7xl font - bold bg - gradient - to - r from - purple - 400 via - pink - 400 to - purple - 400 bg - clip - text text - transparent mb - 6'>;
              AI & Machine Learning;
            </h1>;
            <p className='text - xl md:text - 2xl text - white / 80 max - w-3xl mx - auto leading - relaxed'>;
              Revolutionary AI solutions that adapt, learn, and evolve with your;
              business            </p>;
          </motion.div>;
          <motion.div;
            initial={{ opacity: 0, coordinate_y: 30 }}
            animate={{ opacity: 1, coordinate_y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb - 12';
          >;
            <p className='text - lg text - white / 70 max - w-2xl mx - auto mb - 8'>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              From custom neural networks to intelligent automation systems, we;
              deliver AI solutions that provide measurable business outcomes and;
              competitive advantages.;
            </p>;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
            className="mb-12"
          >
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              From custom neural networks to intelligent automation systems, we deliver AI solutions 
<<<<<<< HEAD
=======
=======
            className='mb-12'
          >
            <p className='text-lg text-white/70 max-w-2xl mx-auto mb-8'>
              From custom neural networks to intelligent automation systems, we
              deliver AI solutions that provide measurable business outcomes and
              competitive advantages.
=======
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Revolutionary AI solutions that adapt, learn, and evolve with your business
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
              From custom neural networks to intelligent automation systems, we deliver AI solutions
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              that provide measurable business outcomes and competitive advantages.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto">
              Get AI Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>


              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-purple-400" />
                </div>
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
            ))}

          </div>;
        </div>;
      </section>;

<<<<<<< HEAD
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
=======

      {/* Services Grid */}
      <section className='py-20 px-6'>;
        <div className='max-w-7xl mx-auto'>          <motion&& motion.div

=======

      {/* Services Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}


          >
            <h2 className='text-4xl font-bold text-white mb-6'>
              Our AI Services
            </h2>
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>
              Comprehensive AI solutions designed to transform your business
              operations and drive innovation
            </p>
          </motion.div>
<<<<<<< HEAD
              <motion.div
=======
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              <motion.div


            className='text-center mb-16'>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Our AI Services;
            </h2>;
            <p className='text-xl text-white/70 max-w-3xl mx-auto'>;
              Comprehensive AI solutions designed to transform your business;
              operations and drive innovation;
            </p>;
          </motion && motion.div>;

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>            {services && services.map((service, index) => (;
              <motion&& motion.div
                key={service && service.title}


<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0 && 0.6, delay: index * 0 && 0.1 }}
                viewport={{ once: true }}


              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-white/80">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
<<<<<<< HEAD
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
                  <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                  <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </motion.div>
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
          >

<<<<<<< HEAD
=======
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization.
=======

            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization.


            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
                Schedule Consultation
              </button>
              <button className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;>

=======
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className='py-20 px-6'>
        <div className='max-w-4xl mx-auto text-center'>          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
=======
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          >
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
<<<<<<< HEAD
            <p className='text-xl text-white/70 mb-8 max-w-2xl mx-auto'>
              Let's discuss how our AI solutions can drive innovation
              efficiency, and growth for your organization.
=======
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization.
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
                View Case Studies
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
              </button>
            </div>
          </motion.div>
        </div>
      </section>
<<<<<<< HEAD
=======
      <EnhancedFooter />
    </div>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


),

}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Our AI Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive AI solutions designed to transform your business operations and drive innovation </p> </motion.div> Get Started </button> </div> </motion.div>) ) 


}</div> </div> </section> <motion.div initial= {
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
            transition={{ duration: 0 && 0.8 }}
            viewport={{ once: true }}>;
            <h2 className='text-4xl font-bold text-white mb-6'>;
              Ready to Transform Your Business with AI?;
            </h2>;
            <p className='text-xl text-white/70 mb-8 max-w-2xl mx-auto'>;
              Let's discuss how our AI solutions can drive innovation,;
              efficiency, and growth for your organization.;
            </p>;
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>;
              <button className='px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105'>;
                Schedule Consultation;
              </button>;
              <button className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>                View Case Studies;
              </button>;
            </div>;
          </motion && motion.div>;
        </div>;
      </section>;

      <EnhancedFooter />;
    </div>;
  ),;

}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Our AI Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive AI solutions designed to transform your business operations and drive innovation </p> </motion && motion.div> Get Started </button> </div> </motion && motion.div>) ) ;
}</div> </div> </section> <motion&& motion.div initial= {
<<<<<<< HEAD
=======
=======
      <EnhancedFooter />
    </div>
<<<<<<< HEAD
<<<<<<< HEAD
)
}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Our AI Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive AI solutions designed to transform your business operations and drive innovation </p> </motion.div> Get Started </button> </div> </motion.div>) )
=======
),

}</div> </div> </section> > <h2 className="text-4xl font-bold text-white mb-6" >Our AI Services</h2> <p className="text-xl text-white/70 max-w-3xl mx-auto" > Comprehensive AI solutions designed to transform your business operations and drive innovation </p> </motion.div> Get Started </button> </div> </motion.div>) ) 
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}</div> </div> </section> <motion.div initial= {
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  {
  opacity: 0, y: 30
}whileInView= {
  {
  opacity: 1, y: 0
}transition= {
  {

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

}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Transform Your Business with AI? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization. </p> Schedule Consultation </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > View Case Studies </button> </div> </motion && motion.div> </div> </section> <EnhancedFooter /> </div>) ;

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  )
}
            <button className='px - 8 py - 4 bg - gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl flex items - center justify - center gap - 2 mx - auto'>;
              Get AI Consultation;
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
                <div className='w - 16 h - 16 bg - gradient - to - br from - purple - 500 / 20 to - pink - 500 / 20 rounded - 2xl flex items - center justify - center mx - auto mb - 4'>;
                  <stat.icon className='w - 8 h - 8 text - purple - 400' />;
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
              Our AI Services;
            </h2>;
            <p className='text - xl text - white / 70 max - w-3xl mx - auto'>;
              Comprehensive AI solutions designed to transform your business;
              operations and drive innovation;
            </p>;
          </motion.div>;
          <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 8'>            {services.map ((service, index) => (
              <motion.div;
                key={service.title}
                initial={{ opacity: 0, coordinate_y: 30 }}
                whileInView={{ opacity: 1, coordinate_y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='bg - gradient - to - br from - slate - 800 / 50 to - slate - 900 / 50 backdrop - blur - xl border border - white / 10 rounded - 2xl p - 8 hover:border - purple - 500 / 30 transition - all duration - 300';
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
                      <CheckCircle className='w - 5 h - 5 text - purple - 400 mr - 3 flex - shrink - 0' />                      {feature}
                    </li>))}
                </ul>;
                <div className='flex items - center justify - between'>;
                  <span className='text - 2xl font - bold text - purple - 400'>;
                    {service.price}
                  </span>;
                  <button className='px - 6 py - 3 bg - gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 rounded - full font - semibold text - white transition - all duration - 300 transform hover:scale - 105'>                    Get Started;
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
              Ready to Transform Your Business with AI?;
            </h2>;
            <p className='text - xl text - white / 70 mb - 8 max - w-2xl mx - auto'>;
              Let's discuss how our AI solutions can drive innovation,
              efficiency, and growth for your organization.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <button className='px - 8 py - 4 bg - gradient - to - r from - purple - 600 to - pink - 600 hover:from - purple - 700 hover:to - pink - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105'>;
                Schedule Consultation;
              </button>;
              <button className='px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10'>                View Case Studies;
<<<<<<< HEAD
=======
=======
  once: true
}> <h2 className="text-4xl font-bold text-white mb-6" > Ready to Transform Your Business with AI? </h2> <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto" > Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization. </p> Schedule Consultation </button> <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10" > View Case Studies </button> </div> </motion.div> </div> </section> <EnhancedFooter /> </div>)
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
              Ready to Transform Your Business with AI?;
            </h2>;
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">;
              Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">;
                Schedule Consultation;
              </button>;
              <button className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">;
                View Case Studies;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
