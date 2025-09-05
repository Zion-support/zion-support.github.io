import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { 
  Target, Brain, Rocket, Shield, Zap, Atom, Cpu, 
  Lock, Cloud, Settings, Eye, Award, Clock, Heart, 
  Lightbulb, Search, Grid, List, TrendingUp, 
  User, ShoppingCart, Bell, HelpCircle, FileText, 
  Video, Headphones, Code, Database, Network, Server, 
  Monitor, Smartphone, Camera, Gamepad2, Palette, 
  Music, Film, BookOpenCheck, Building, MessageCircle, 
  Sparkles, ArrowRight, CheckCircle, Star, Globe, Briefcase, BarChart3
} from 'lucide-react';
import UltraAdvancedFuturisticBackground from '../components/ui/UltraAdvancedFuturisticBackground';
import { expandedMicroSaasServices } from '../data/expanded-micro-saas-services';

const Solutions: NextPage = () => {
  const industrySolutions = [
    {
      id: 'healthcare',
      name: 'Healthcare Solutions',
      description: 'AI-powered healthcare technology solutions',
      features: ['Patient Care Optimization', 'Diagnostic AI', 'Healthcare Analytics', 'Compliance Management'],
      price: '$3,999',
      period: 'month',
      popular: true,
      icon: <Heart className=&quot;w-8 h-8&quot; />
    },
    {
      id: 'financial',
      name: 'Financial Solutions',
      description: 'Advanced financial technology and services',
      features: ['Risk Management', 'Fraud Detection', 'Trading Systems', 'Compliance Automation'],
      price: '$2,999',
      period: 'month',
      popular: false,
      icon: <TrendingUp className=&quot;w-8 h-8&quot; />
    },
    {
      id: 'manufacturing',
      name: 'Manufacturing Solutions',
      description: 'Smart manufacturing and Industry 4.0',
      features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'IoT Integration'],
      price: '$2,799',
      period: 'month',
      popular: false,
      icon: <Settings className=&quot;w-8 h-8&quot; />
    },
    {
      id: 'retail',
      name: 'Retail Solutions',
      description: 'Digital transformation for retail businesses',
      features: ['E-commerce Platforms', 'Customer Analytics', 'Inventory Management', 'Omnichannel Solutions'],
      price: '$2,499',
      period: 'month',
      popular: false,
      icon: <ShoppingCart className=&quot;w-8 h-8&quot; />
    },
    {
      id: 'government',
      name: 'Government Solutions',
      description: 'Technology solutions for public sector',
      features: ['Digital Services', 'Security & Compliance', 'Data Management', 'Citizen Engagement'],
      price: '$3,499',
      period: 'month',
      popular: false,
      icon: <Building className=&quot;w-8 h-8&quot; />
    },
    {
      id: 'education',
      name: 'Education Solutions',
      description: 'Innovative educational technology',
      features: ['Learning Platforms', 'Student Analytics', 'Administrative Systems', 'Virtual Classrooms'],
      price: '$1,999',
      period: 'month',
      popular: false,
      icon: <BookOpenCheck className=&quot;w-8 h-8&quot; />
    }
  ];

  const solutionCapabilities = [
    {
      title: 'Industry Expertise',
      description: 'Deep domain knowledge across sectors',
      icon: <Briefcase className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Custom Development',
      description: 'Tailored solutions for unique needs',
      icon: <Code className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Integration Services',
      description: 'Seamless system integration',
      icon: <Network className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'AI & Automation',
      description: 'Intelligent automation solutions',
      icon: <Brain className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Cloud & Security',
      description: 'Secure cloud infrastructure',
      icon: <Shield className=&quot;w-6 h-6&quot; />
    },
    {
      title: 'Analytics & Insights',
      description: 'Data-driven decision making',
      icon: <BarChart3 className=&quot;w-6 h-6&quot; />
    }
  ];

  const caseStudies = [
    {
      title: &quot;Healthcare Provider Digital Transformation&quot;,
      industry: &quot;Healthcare&quot;,
      description: &quot;Implemented a comprehensive EHR system for a regional hospital network, improving patient care and operational efficiency.&quot;,
      results: [
        &quot;30% reduction in administrative overhead&quot;,
        &quot;Improved patient satisfaction scores&quot;,
        &quot;Enhanced data security and compliance&quot;
      ],
      technologies: [&quot;React&quot;, &quot;Node.js&quot;, &quot;PostgreSQL&quot;, &quot;AWS&quot;]
    },
    {
      title: &quot;E-commerce Platform Modernization&quot;,
      industry: &quot;Retail&quot;,
      description: &quot;Redesigned and modernized an existing e-commerce platform, resulting in significant improvements in user experience and sales.&quot;,
      results: [
        &quot;45% increase in conversion rates&quot;,
        &quot;60% improvement in page load times&quot;,
        &quot;Enhanced mobile user experience&quot;
      ],
      technologies: [&quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;MongoDB&quot;, &quot;Vercel&quot;]
    },
    {
      title: &quot;Manufacturing IoT Integration&quot;,
      industry: &quot;Manufacturing&quot;,
      description: &quot;Implemented IoT sensors and predictive maintenance systems for a manufacturing facility, reducing downtime and improving efficiency.&quot;,
      results: [
        &quot;25% reduction in unplanned downtime&quot;,
        &quot;15% improvement in production efficiency&quot;,
        &quot;Predictive maintenance cost savings&quot;
      ],
      technologies: [&quot;Python&quot;, &quot;TensorFlow&quot;, &quot;AWS IoT&quot;, &quot;React Native&quot;]
    }
  ];

  return (
    <UltraAdvancedFuturisticBackground>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Solutions - Zion Tech Group | Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
          <meta name=&quot;description&quot; content=&quot;Discover Zion Tech Group's comprehensive solutions portfolio including Micro SaaS platforms, AI-powered tools, Business Intelligence, Process Automation, and Cloud platforms.&quot; />
        </Head>

        {/* Hero Section */}
        <section className=&quot;min-h-[60vh] flex items-center justify-center px-4 py-20&quot;>
          <div className=&quot;text-center max-w-4xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent&quot;>
                Industry Solutions
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
                Tailored technology solutions designed for your industry's unique challenges and opportunities
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a 
                  href=&quot;/contact&quot; 
                  className=&quot;px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Get Started
                </Link>
                <a 
                  href=&quot;/contact&quot; 
                  className=&quot;px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-black transition-all duration-300 transform hover:scale-105&quot;
                >
                  Schedule Demo
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Solution Capabilities */}
        <section className=&quot;py-20 px-4 bg-gradient-to-b from-black to-gray-900&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent&quot;>
                Solution Capabilities
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Comprehensive capabilities to deliver industry-specific technology solutions
              </p>
            </motion.div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {solutionCapabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className=&quot;bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-orange-500 transition-all duration-300&quot;
                >
                  <div className=&quot;flex items-center mb-4&quot;>
                    <div className=&quot;p-2 bg-orange-500/20 rounded-lg mr-3&quot;>
                      {capability.icon}
                    </div>
                    <h3 className=&quot;text-xl font-semibold text-white&quot;>{capability.title}</h3>
                  </div>
                  <p className=&quot;text-gray-300&quot;>{capability.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className=&quot;py-20 px-4&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className=&quot;text-center mb-16&quot;
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent&quot;>
                Industry Solutions
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Choose from our comprehensive suite of industry-specific solutions
              </p>
            </motion.div>
            
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {industrySolutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border transition-all duration-300 hover:scale-105 ${
                    solution.popular 
                      ? 'border-orange-500 shadow-lg shadow-orange-500/25' 
                      : 'border-gray-700 hover:border-orange-500'
                  }`}
                >
                  {solution.popular && (
                    <div className=&quot;absolute -top-3 left-1/2 transform -translate-x-1/2&quot;>
                      <span className=&quot;bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold&quot;>
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className=&quot;text-center mb-6&quot;>
                    <div className=&quot;inline-flex p-3 bg-orange-500/20 rounded-full mb-4&quot;>
                      {solution.icon}
                    </div>
                    <h3 className=&quot;text-2xl font-bold text-white mb-2&quot;>{solution.name}</h3>
                    <p className=&quot;text-gray-300 mb-4&quot;>{solution.description}</p>
                    <div className=&quot;text-3xl font-bold text-orange-400 mb-2&quot;>
                      {solution.price}
                      <span className=&quot;text-lg text-gray-400&quot;>/{solution.period}</span>
                    </div>
                  </div>
                  
                  <ul className=&quot;space-y-3 mb-6&quot;>
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center text-gray-300&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-orange-400 mr-3 flex-shrink-0&quot; />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <a 
                    href=&quot;/contact&quot; 
                    className=&quot;w-full block text-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300&quot;
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
            <h1 className=&quot;text-5xl md:text-6xl font-bold text-white mb-6&quot;>
              Industry Solutions
            </h1>
            <p className=&quot;text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8&quot;>
              Tailored technology solutions designed specifically for your industry's unique challenges and opportunities.
            </p>
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300&quot;
              >
                Get Started
                <ArrowRight className=&quot;inline-block ml-2 w-5 h-5&quot; />
              </Link>
              <Link
                href=&quot;/demo&quot;
                className=&quot;border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10&quot;
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

        {/* CTA Section */}
        <section className=&quot;py-20 px-4 bg-gradient-to-b from-gray-900 to-black&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent&quot;>
                Ready for Industry Transformation?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8 max-w-2xl mx-auto&quot;>
                Partner with us to build industry-specific solutions that drive your business forward
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a 
                  href=&quot;/contact&quot; 
                  className=&quot;px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-105&quot;
                >
                  Start Your Transformation
                </Link>
                <a 
                  href=&quot;/contact&quot; 
                  className=&quot;px-8 py-4 border-2 border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-black transition-all duration-300 transform hover:scale-105&quot;
                >
                  Schedule Consultation
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraAdvancedFuturisticBackground>
  );
};

export default Solutions;
