import React from 'react',
import Layout from '../components/layout/Layout',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Heart, DollarSign, Factory, ShoppingCart, Building2,
  GraduationCap, Leaf, Shield, ArrowRight, Star, CheckCircle,
  Users, Globe, Cpu, Database, Network, Target
} from 'lucide-react',
const SolutionsPage: React.FC = () => {_const _industrySolutions = [
    {
      category: 'Healthcare & Life Sciences', _solutions: [
        {
          name: 'Healthcare AI Solutions',
          description: 'AI-powered diagnostic tools, patient care optimization, and medical research platforms',
          href: '/healthcare-solutions',
          featured: true,
          icon: <Heart className=&quot;w-6 h-6&quot; />
        },
        {
          name: 'AI Healthcare Diagnostics',
          description: 'Advanced diagnostic systems using machine learning and medical imaging',
          href: '/ai-healthcare-diagnostics',
          icon: <Cpu className=&quot;w-6 h-6&quot; />
        },
        {
          name: 'Biotech AI Research Platform',
          description: 'AI-driven research tools for biotechnology and pharmaceutical development',
          href: '/biotech-ai-research-platform',
          icon: <Database className=&quot;w-6 h-6&quot; />
        }      ]
    },
    {_category: 'Financial Services', _solutions: [
        {
          name: 'Financial Solutions',
          description: 'Comprehensive financial technology solutions for modern enterprises',
          href: '/financial-solutions',
          featured: true,
          icon: <DollarSign className=&quot;w-6 h-6&quot; />
        },
        {
          name: 'AI Financial Intelligence',
          description: 'Intelligent financial analysis and decision-making platforms',
          href: '/ai-financial-intelligence',
          icon: <Globe className=&quot;w-6 h-6&quot; />
        },
        {
          name: 'Quantum Financial Trading',
          description: 'Quantum-powered trading algorithms and financial modeling',
          href: '/quantum-financial-trading',
          icon: <Network className=&quot;w-6 h-6&quot; />
        }      ]
    },
    {_category: 'Manufacturing & Industry', _solutions: [
        {
          name: 'Manufacturing AI Solutions',
          description: 'AI-powered automation and optimization for manufacturing processes',
          href: '/manufacturing-ai-solutions',
          featured: true,
          icon: <Factory className=&quot;w-6 h-6&quot; />
        },
        {
          name: 'Industrial Automation AI',
          description: 'Intelligent automation systems for industrial operations',
          href: '/industrial-automation-ai',
          icon: <Cpu className=&quot;w-6 h-6&quot; />
        },
        {
          name: 'Autonomous Manufacturing',
          description: 'Self-managing manufacturing systems with AI oversight',
          href: '/autonomous-manufacturing',
          icon: <Database className=&quot;w-6 h-6&quot; />
        }      ]
    },
    {_category: 'Retail & E-commerce', _solutions: [
        {
          name: 'Retail Technology Solutions',
          description: 'Advanced technology solutions for modern retail operations',
          href: '/retail-technology-solutions',
          featured: true,
          icon: <ShoppingCart className=&quot;w-6 h-6&quot; />
        },
        {
          name: 'AI Customer Journey Analytics',
          description: 'Comprehensive customer behavior analysis and optimization',
          href: '/ai-customer-journey-analytics',
          icon: <Users className=&quot;w-6 h-6&quot; />
        },
        {
          name: 'AI Content Personalization',
          description: 'Dynamic content adaptation based on customer preferences',
          href: '/ai-content-personalization-engine',
          icon: <Globe className=&quot;w-6 h-6&quot; />
        }      ]
    },
    {_category: 'Government & Public Sector', _solutions: [
        {
          name: 'Government Technology Solutions',
          description: 'Innovative technology solutions for government agencies and public services',
          href: '/government-technology-solutions',
          featured: true,
          icon: <Building2 className=&quot;w-6 h-6&quot; />
        },
        {
          name: 'AI Ethics & Governance Framework',
          description: 'Comprehensive frameworks for responsible AI deployment',
          href: '/ai-ethics-governance-framework',
          icon: <Shield className=&quot;w-6 h-6&quot; />
        },
        {
          name: 'Cybersecurity Solutions',
          description: 'Advanced security solutions for government and enterprise',
          href: '/cybersecurity',
          icon: <Shield className=&quot;w-6 h-6&quot; />
        }      ]
    },
    {_category: 'Education & Training', _solutions: [
        {
          name: 'Education Technology Solutions',
          description: 'Innovative technology solutions for modern education and training',
          href: '/education-technology-solutions',
          featured: true,
          icon: <GraduationCap className=&quot;w-6 h-6&quot; />
        },
        {
          name: 'AI Education Platform',
          description: 'Intelligent learning systems and educational content platforms',
          href: '/ai-education-platform',
          icon: <Cpu className=&quot;w-6 h-6&quot; />
        },
        {
          name: 'Training Solutions',
          description: 'Comprehensive training and development platforms',
          href: '/training',
          icon: <Users className=&quot;w-6 h-6&quot; />
        }      ]
    },
    {_category: 'Sustainability & Energy', _solutions: [
        {
          name: 'Energy & Utilities Solutions',
          description: 'Technology solutions for energy optimization and sustainability',
          href: '/energy-utilities-solutions',
          featured: true,
          icon: <Leaf className=&quot;w-6 h-6&quot; />
        },
        {
          name: 'AI Sustainability Platform',
          description: 'AI-driven sustainability monitoring and optimization',
          href: '/ai-sustainability-platform',
          icon: <Globe className=&quot;w-6 h-6&quot; />
        },
        {
          name: 'Quantum Energy Platform',
          description: 'Quantum computing solutions for energy optimization',
          href: '/quantum-energy-platform',
          icon: <Network className=&quot;w-6 h-6&quot; />
        }      ]
    }
  ],

  return (
    <UltraFuturisticBackground>
      <div className=&quot;min-h-screen&quot;>
        <Head>
          <title>Solutions - Zion Tech Group | Revolutionary AI, Quantum Computing & Emerging Technology Solutions</title>
          <meta name=&quot;description&quot; content=&quot;Discover Zion Tech Group's comprehensive solutions portfolio including Micro SaaS platforms, AI-powered tools, Business Intelligence, Process Automation, and Cloud platforms.&quot; />
        </Head>

        {/* Hero Section */}
        <section className=&quot;relative pt-32 pb-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto text-center&quot;>
            <motion.h1 
              className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6&quot;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}            >
              Revolutionary Solutions
            </motion.h1>
            <motion.p 
              className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12&quot;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}            >
              Transform your business with our cutting-edge technology solutions. From AI-powered tools to quantum computing platforms, _we deliver innovation that drives results.
            </motion.p>
            
            {_/* Stats Grid */}
            <motion.div 
              className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto&quot;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className=&quot;text-center&quot;>
                  <div className=&quot;flex justify-center mb-2 text-cyan-400&quot;>
                    {stat.icon}
                  </div>
                  <div className=&quot;text-3xl font-bold text-white mb-1&quot;>{stat.value}</div>
                  <div className=&quot;text-sm text-gray-400&quot;>{stat.label}</div>                </div>
              ))}
            </motion.div>;
          </div>;
        </section>;
;
        {/* Solutions Grid */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div 
              className=&quot;text-center mb-16&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Our Solution Portfolio
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Comprehensive technology solutions designed to address the most complex business challenges
              </p>
            </motion.div>

            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className=&quot;group relative bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105&quot;
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}                >
                  <div className={_`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {_solution.icon}
                  </div>
                  
                  <h3 className=&quot;text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300&quot;>
                    {solution.title}
                  </h3>
                  
                  <p className=&quot;text-gray-300 mb-6 leading-relaxed&quot;>
                    {solution.description}
                  </p>
                  
                  <ul className=&quot;space-y-3 mb-8&quot;>
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-center space-x-3&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-cyan-400 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300&quot;>{feature}</span>                      </li>
                    ))}
                  </ul>;
                  ;
                  <a;
                    href={solution.href}
                    className=&quot;inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-1&quot;                  >
                    <span>Learn More</span>
                    <ArrowRight className=&quot;w-4 h-4&quot; />
                  </a>
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
              </a>
              <Link
                href=&quot;/demo&quot;
                className=&quot;border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10&quot;
              >
                Request Demo
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className=&quot;py-20 px-4 bg-black&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Industry-Specific Solutions
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              From healthcare to manufacturing, we deliver specialized solutions that address your industry's unique needs.
            </p>
          </motion.div>

          <div className=&quot;space-y-16&quot;>
            {industrySolutions.map((category, categoryIndex) => (
              <motion.div                key={category.category}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: categoryIndex * 0.2}}
                viewport={_{ once: true}}
              >
                <h3 className=&quot;text-3xl font-bold text-white mb-8 text-center&quot;>
                  {category.category}
                </h3>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                  {category.solutions.map((solution, solutionIndex) => (                    <motion.div
                      key={solution.name}
                      initial={_{ opacity: 0, _y: 30}}
                      whileInView={_{ opacity: 1, _y: 0}}
                      transition={_{ duration: 0.6, _delay: solutionIndex * 0.1}}
                      viewport={_{ once: true}}
                      className={_`bg-gradient-to-br from-gray-900/50 to-gray-800/50 border rounded-2xl p-6 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300 ${
                        solution.featured ? 'border-green-500/30' : 'border-gray-700/50'}`}
                    >
                      {solution.featured && (
                        <div className=&quot;flex items-center mb-4&quot;>
                          <Star className=&quot;w-5 h-5 text-yellow-400 mr-2&quot; />
                          <span className=&quot;text-yellow-400 text-sm font-semibold&quot;>Featured</span>
                        </div>
                      )}
                      <div className=&quot;w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4&quot;>
                        {solution.icon}
                      </div>
                      <h4 className=&quot;text-xl font-bold text-white mb-3&quot;>{solution.name}</h4>
                      <p className=&quot;text-gray-300 mb-4 text-sm&quot;>{solution.description}</p>
                      <Link
                        href={solution.href}
                        className=&quot;inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-medium&quot;                      >
                        Learn More <ArrowRight className=&quot;ml-2 w-4 h-4&quot; />
                      </a>
                    </motion.div>
                  ))}
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
;
      {/* CTA Section */}
      <section className=&quot;py-20 px-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Industry?
            </h2>
            <p className=&quot;text-xl text-gray-300 mb-8&quot;>
              Let's discuss how our industry-specific solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">              <Link
                href=&quot;/contact&quot;
                className=&quot;bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300&quot;
              >
                Start Your Transformation
                <ArrowRight className=&quot;inline-block ml-2 w-5 h-5&quot; />
              </a>
              <Link
                href=&quot;/services&quot;
                className=&quot;border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10&quot;
              >
                View All Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  )
},

export default Solutions,