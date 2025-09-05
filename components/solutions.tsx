<<<<<<< HEAD
import React from 'react',
import Layout from '../components/layout/Layout',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  Heart, DollarSign, Factory, ShoppingCart, Building2, 
  GraduationCap, Leaf, Shield, ArrowRight, Star, CheckCircle,
  Users, Globe, Cpu, Database, Network, Target
} from 'lucide-react',
=======
import React from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import {_Heart, _DollarSign, _Factory, _ShoppingCart, _Building2, _GraduationCap, _Leaf, _Shield, _ArrowRight, _Star, _CheckCircle, _Users, _Globe, _Cpu, _Database, _Network, _Target} from 'lucide-react';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const SolutionsPage: React.FC = () => {_const _industrySolutions = [
    {
      category: 'Healthcare & Life Sciences', _solutions: [
        {
<<<<<<< HEAD
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
        }
=======
          name: 'Healthcare AI Solutions', _description: 'AI-powered diagnostic tools, _patient care optimization, _and medical research platforms', _href: '/healthcare-solutions', _featured: true, _icon: <Heart className="w-6 h-6" />},
        {_name: 'AI Healthcare Diagnostics', _description: 'Advanced diagnostic systems using machine learning and medical imaging', _href: '/ai-healthcare-diagnostics', _icon: <Cpu className="w-6 h-6" />},
        {_name: 'Biotech AI Research Platform', _description: 'AI-driven research tools for biotechnology and pharmaceutical development', _href: '/biotech-ai-research-platform', _icon: <Database className="w-6 h-6" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ]
    },
    {_category: 'Financial Services', _solutions: [
        {
<<<<<<< HEAD
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
        }
=======
          name: 'Financial Solutions', _description: 'Comprehensive financial technology solutions for modern enterprises', _href: '/financial-solutions', _featured: true, _icon: <DollarSign className="w-6 h-6" />},
        {_name: 'AI Financial Intelligence', _description: 'Intelligent financial analysis and decision-making platforms', _href: '/ai-financial-intelligence', _icon: <Globe className="w-6 h-6" />},
        {_name: 'Quantum Financial Trading', _description: 'Quantum-powered trading algorithms and financial modeling', _href: '/quantum-financial-trading', _icon: <Network className="w-6 h-6" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ]
    },
    {_category: 'Manufacturing & Industry', _solutions: [
        {
<<<<<<< HEAD
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
        }
=======
          name: 'Manufacturing AI Solutions', _description: 'AI-powered automation and optimization for manufacturing processes', _href: '/manufacturing-ai-solutions', _featured: true, _icon: <Factory className="w-6 h-6" />},
        {_name: 'Industrial Automation AI', _description: 'Intelligent automation systems for industrial operations', _href: '/industrial-automation-ai', _icon: <Cpu className="w-6 h-6" />},
        {_name: 'Autonomous Manufacturing', _description: 'Self-managing manufacturing systems with AI oversight', _href: '/autonomous-manufacturing', _icon: <Database className="w-6 h-6" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ]
    },
    {_category: 'Retail & E-commerce', _solutions: [
        {
<<<<<<< HEAD
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
        }
=======
          name: 'Retail Technology Solutions', _description: 'Advanced technology solutions for modern retail operations', _href: '/retail-technology-solutions', _featured: true, _icon: <ShoppingCart className="w-6 h-6" />},
        {_name: 'AI Customer Journey Analytics', _description: 'Comprehensive customer behavior analysis and optimization', _href: '/ai-customer-journey-analytics', _icon: <Users className="w-6 h-6" />},
        {_name: 'AI Content Personalization', _description: 'Dynamic content adaptation based on customer preferences', _href: '/ai-content-personalization-engine', _icon: <Globe className="w-6 h-6" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ]
    },
    {_category: 'Government & Public Sector', _solutions: [
        {
<<<<<<< HEAD
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
        }
=======
          name: 'Government Technology Solutions', _description: 'Innovative technology solutions for government agencies and public services', _href: '/government-technology-solutions', _featured: true, _icon: <Building2 className="w-6 h-6" />},
        {_name: 'AI Ethics & Governance Framework', _description: 'Comprehensive frameworks for responsible AI deployment', _href: '/ai-ethics-governance-framework', _icon: <Shield className="w-6 h-6" />},
        {_name: 'Cybersecurity Solutions', _description: 'Advanced security solutions for government and enterprise', _href: '/cybersecurity', _icon: <Shield className="w-6 h-6" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ]
    },
    {_category: 'Education & Training', _solutions: [
        {
<<<<<<< HEAD
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
        }
=======
          name: 'Education Technology Solutions', _description: 'Innovative technology solutions for modern education and training', _href: '/education-technology-solutions', _featured: true, _icon: <GraduationCap className="w-6 h-6" />},
        {_name: 'AI Education Platform', _description: 'Intelligent learning systems and educational content platforms', _href: '/ai-education-platform', _icon: <Cpu className="w-6 h-6" />},
        {_name: 'Training Solutions', _description: 'Comprehensive training and development platforms', _href: '/training', _icon: <Users className="w-6 h-6" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ]
    },
    {_category: 'Sustainability & Energy', _solutions: [
        {
<<<<<<< HEAD
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
        }
=======
          name: 'Energy & Utilities Solutions', _description: 'Technology solutions for energy optimization and sustainability', _href: '/energy-utilities-solutions', _featured: true, _icon: <Leaf className="w-6 h-6" />},
        {_name: 'AI Sustainability Platform', _description: 'AI-driven sustainability monitoring and optimization', _href: '/ai-sustainability-platform', _icon: <Globe className="w-6 h-6" />},
        {_name: 'Quantum Energy Platform', _description: 'Quantum computing solutions for energy optimization', _href: '/quantum-energy-platform', _icon: <Network className="w-6 h-6" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      ]
    }
  ],

<<<<<<< HEAD
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
              transition={{ duration: 0.8 }}
=======
  return (_<UltraFuturisticBackground>
      <div className="min-h-screen">
        <Head>
          <title>Solutions - Zion Tech Group | Revolutionary AI, _Quantum Computing & Emerging Technology Solutions</title>
          <meta name="description" content="Discover Zion Tech Group's comprehensive solutions portfolio including Micro SaaS platforms, _AI-powered tools, _Business Intelligence, _Process Automation, _and Cloud platforms." />
        </Head>

        {_/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              Revolutionary Solutions
            </motion.h1>
            <motion.p 
<<<<<<< HEAD
              className=&quot;text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12&quot;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
=======
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              Transform your business with our cutting-edge technology solutions. From AI-powered tools to quantum computing platforms, _we deliver innovation that drives results.
            </motion.p>
            
            {_/* Stats Grid */}
            <motion.div 
<<<<<<< HEAD
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
                  <div className=&quot;text-sm text-gray-400&quot;>{stat.label}</div>
=======
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.4}}
            >
              {_stats.map((stat, _index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2 text-cyan-400">
                    {_stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{_stat.value}</div>
                  <div className="text-sm text-gray-400">{_stat.label}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </div>
              ))}
            </motion.div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Solutions Grid */}
        <section className=&quot;py-20 px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;max-w-7xl mx-auto&quot;>
            <motion.div 
              className=&quot;text-center mb-16&quot;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
=======
        {_/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
                Our Solution Portfolio
              </h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Comprehensive technology solutions designed to address the most complex business challenges
              </p>
            </motion.div>

<<<<<<< HEAD
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  className=&quot;group relative bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105&quot;
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
=======
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_solutions.map(_(solution, _index) => (_<motion.div
                  key={index}
                  className="group relative bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  viewport={_{ once: true}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <div className={_`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {_solution.icon}
                  </div>
                  
<<<<<<< HEAD
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
                        <span className=&quot;text-gray-300&quot;>{feature}</span>
=======
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {_solution.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {_solution.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {_solution.features.map((feature, _featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300">{_feature}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </li>
                    ))}
                  </ul>
                  
                  <a
<<<<<<< HEAD
                    href={solution.href}
                    className=&quot;inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-1&quot;
=======
                    href={_solution.href}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-1"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  >
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

<<<<<<< HEAD
      {/* Solutions Grid */}
      <section className=&quot;py-20 px-4 bg-black&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;
=======
      {_/* Solutions Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
              Industry-Specific Solutions
            </h2>
            <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
              From healthcare to manufacturing, we deliver specialized solutions that address your industry's unique needs.
            </p>
          </motion.div>

<<<<<<< HEAD
          <div className=&quot;space-y-16&quot;>
            {industrySolutions.map((category, categoryIndex) => (
              <motion.div
=======
          <div className="space-y-16">
            {_industrySolutions.map(_(category, _categoryIndex) => (_<motion.div
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                key={category.category}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: categoryIndex * 0.2}}
                viewport={_{ once: true}}
              >
<<<<<<< HEAD
                <h3 className=&quot;text-3xl font-bold text-white mb-8 text-center&quot;>
                  {category.category}
                </h3>
                <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;>
                  {category.solutions.map((solution, solutionIndex) => (
=======
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  {_category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {_category.solutions.map((solution, _solutionIndex) => (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                    <motion.div
                      key={solution.name}
                      initial={_{ opacity: 0, _y: 30}}
                      whileInView={_{ opacity: 1, _y: 0}}
                      transition={_{ duration: 0.6, _delay: solutionIndex * 0.1}}
                      viewport={_{ once: true}}
                      className={_`bg-gradient-to-br from-gray-900/50 to-gray-800/50 border rounded-2xl p-6 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300 ${
                        solution.featured ? 'border-green-500/30' : 'border-gray-700/50'}`}
                    >
<<<<<<< HEAD
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
                        className=&quot;inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-medium&quot;
=======
                      {_solution.featured && (
                        <div className="flex items-center mb-4">
                          <Star className="w-5 h-5 text-yellow-400 mr-2" />
                          <span className="text-yellow-400 text-sm font-semibold">Featured</span>
                        </div>
                      )}
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                        {_solution.icon}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{_solution.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{_solution.description}</p>
                      <Link
                        href={_solution.href}
                        className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      >
                        Learn More <ArrowRight className=&quot;ml-2 w-4 h-4&quot; />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className=&quot;py-20 px-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
=======
      {_/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <motion.div
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
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
              <Link
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