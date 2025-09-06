<<<<<<< HEAD
import Head from 'next/head';
import { Service } from '../types';
export default function Services() {
  const services: Service[] = [
    {
      id: 'ai-automation',
      title: 'AI Automation Platform',
      description: 'Intelligent automation solutions that streamline business processes and reduce manual work.',
      category: 'AI Services',
      features: ['Process Automation', 'Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Computer Vision', 'Robotic Process Automation'],
      pricing: {
        basic: 999,
        pro: 2999,
        enterprise: 9999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },
    {
      id: 'cloud-optimization',
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions designed to optimize performance and reduce costs.',
      category: 'IT Solutions',
      features: ['AWS/Azure/GCP', 'Container Orchestration', 'Auto-scaling', 'Cost Optimization', 'Disaster Recovery', 'Security Hardening'],
      pricing: {
        basic: 1999,
        pro: 4999,
        enterprise: 14999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Development',
      description: 'Focused software solutions that address specific business needs with minimal complexity.',
      category: 'Micro SaaS',
      features: ['Rapid Development', 'User-friendly Design', 'API Integration', 'Scalable Architecture', 'Multi-tenant Support', 'Analytics Dashboard'],
      pricing: {
        basic: 2999,
        pro: 7999,
        enterprise: 19999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      category: 'Security',
      features: ['Threat Detection', 'Vulnerability Assessment', 'Penetration Testing', 'Security Audits', 'Compliance Management', 'Incident Response'],
      pricing: {
        basic: 1499,
        pro: 3999,
        enterprise: 9999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & BI',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence.',
      category: 'Analytics',
      features: ['Data Visualization', 'Predictive Modeling', 'Real-time Dashboards', 'ETL Processes', 'Machine Learning', 'Custom Reports'],
      pricing: {
        basic: 2499,
        pro: 5999,
        enterprise: 12999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    },
    {
      id: 'blockchain',
      title: 'Blockchain Solutions',
      description: 'Cutting-edge blockchain technology for secure, transparent, and decentralized applications.',
      category: 'Blockchain',
      features: ['Smart Contracts', 'DeFi Protocols', 'NFT Marketplaces', 'Token Development', 'DApp Development', 'Blockchain Consulting'],
      pricing: {
        basic: 4999,
        pro: 12999,
        enterprise: 29999
        } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  ];
  const categories = ['All', 'AI Services', 'IT Solutions', 'Micro SaaS', 'Security', 'Analytics', 'Blockchain'];
  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI automation, cloud infrastructure, micro SaaS development, cybersecurity, and blockchain solutions." />
        <meta name="keywords" content="AI services, cloud computing, micro SaaS, cybersecurity, data analytics, blockchain, software development" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>
      <div className="min-h-screen bg-slate-950 text-white">
        {/* Hero Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-slate-900/20"></div>
          <div className="relative container mx-auto px-4 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                From AI automation to blockchain development, we provide end-to-end technology services
                that transform businesses and drive innovation.
              </p>
            </div>
          </div>
        </section>
        {/* Services Grid */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">
                      {service.category  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </span>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wide">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                          {feature  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                        </li>
                      ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                    </ul>
                  </div>
                  {service.pricing && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-green-400 mb-3 uppercase tracking-wide">Pricing</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Basic:</span>
                          <span className="text-white">${service.pricing.basic.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Pro:</span>
                          <span className="text-white">${service.pricing.pro.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-300">Enterprise:</span>
                          <span className="text-white">${service.pricing.enterprise.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
          </div>
        </section>
        {/* CTA Section */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-blue-400 hover:bg-blue-400 hover:text-slate-950 rounded-lg font-semibold transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Brain, Code, Cloud, Shield, Database, Building2, Rocket, Factory, Network, Users, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ErrorBoundary } from '../components/ErrorBoundary';

interface Service {
  title: string;
  description: string;
  features: string[];
  pricing: string;
  icon: React.ComponentType<any>;
}

interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  site: string;
}

const services: Service[] = [
  {
    title: 'AI Services',
    description: '80+ cutting-edge AI solutions including machine learning, computer vision, natural language processing, quantum AI, and advanced analytics',
    features: [
      'Machine Learning Model Development',
      'Computer Vision Solutions',
      'Natural Language Processing',
      'AI-Powered Automation',
      'Predictive Analytics',
      'Quantum AI Integration'
    ],
    pricing: 'Starting from $5k/month',
    icon: Brain
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT solutions including cloud migration, cybersecurity, DevOps, infrastructure management, and digital transformation',
    features: [
      'Cloud Migration & Management',
      'Cybersecurity Solutions',
      'DevOps & CI/CD',
      'Infrastructure as Code',
      'System Administration',
      'Network Security'
    ],
    pricing: 'Starting from $3k/month',
    icon: Code
  },
  {
    title: 'Micro SaaS Development',
    description: 'Custom micro SaaS applications tailored to your business needs with rapid deployment and scalable architecture',
    features: [
      'Custom SaaS Development',
      'API Integration',
      'User Management Systems',
      'Payment Processing',
      'Analytics Dashboard',
      'Multi-tenant Architecture'
    ],
    pricing: 'Starting from $10k project',
    icon: Cloud
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your business from threats with 24/7 monitoring and incident response',
    features: [
      'Security Assessment',
      'Penetration Testing',
      'Incident Response',
      'Security Training',
      'Compliance Management',
      'Threat Monitoring'
    ],
    pricing: 'Starting from $2k/month',
    icon: Shield
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure solutions optimized for performance, security, and cost-effectiveness',
    features: [
      'Cloud Architecture Design',
      'Migration Services',
      'Cost Optimization',
      'Security Implementation',
      'Monitoring & Alerting',
      'Disaster Recovery'
    ],
    pricing: 'Starting from $1.5k/month',
    icon: Database
  },
  {
    title: 'Enterprise Solutions',
    description: 'Large-scale business solutions designed to streamline operations and drive growth across your organization',
    features: [
      'Enterprise Architecture',
      'System Integration',
      'Process Automation',
      'Data Management',
      'Workflow Optimization',
      'Change Management'
    ],
    pricing: 'Starting from $15k/month',
    icon: Building2
  }
];

const benefits = [
  {
    title: 'Expert Team',
    description: '50+ certified professionals with years of experience',
    icon: Users
  },
  {
    title: 'Proven Results',
    description: '500+ successful projects delivered on time',
    icon: Award
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support and maintenance',
    icon: CheckCircle
  },
  {
    title: 'Scalable Solutions',
    description: 'Solutions that grow with your business needs',
    icon: Rocket
  }
];

const contact: ContactInfo = {
  phone: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  site: 'https://ziontechgroup.com'
};

export default function Services() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Explore our comprehensive range of AI services, IT solutions, and micro SaaS development. 350+ innovative services to transform your business."
        />
        <meta
          name="keywords"
          content="AI services, IT solutions, micro SaaS, cloud computing, automation, machine learning, DevOps, cybersecurity"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${contact.site}/services`} />
      </Head>

      <ErrorBoundary>
        <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
          {/* Hero Section */}
          <section className="py-20 px-4 text-center" role="banner">
            <div className="max-w-4xl mx-auto">
              <h1
                className={`text-5xl md:text-6xl font-extrabold tracking-tight mb-6 transition-all duration-1000 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                Our Services
              </h1>
              <p
                className={`text-xl md:text-2xl text-slate-300 mb-8 transition-all duration-1000 delay-200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                350+ Innovative Solutions for Modern Businesses
              </p>
              <p
                className={`text-lg text-slate-400 mb-12 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                From cutting-edge AI services to comprehensive IT solutions and
                specialized micro SaaS products, we provide everything your
                business needs to thrive in the digital age.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-16 px-4" role="main">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  What We Offer
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From micro SaaS development to enterprise IT solutions, we provide comprehensive technology services.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border border-gray-200"
                  >
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-blue-100 rounded-lg mr-4">
                        <service.icon className="h-8 w-8 text-blue-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="text-blue-600 font-semibold mb-4">
                      {service.pricing}
                    </div>
                    <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Us?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We deliver exceptional results through our proven expertise and commitment to excellence.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-6"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-4 bg-slate-900/40">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-slate-300 mb-8">
                Contact our experts today to discuss your project requirements
                and discover how our innovative solutions can transform your
                business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  Get a Quote
                </Link>
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                  className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Call {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="px-8 py-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg font-semibold transition-colors"
                >
                  Email Us
                </a>
              </div>
            </div>
          </section>
        </main>
      </ErrorBoundary>
    </>
  );
>>>>>>> main
}