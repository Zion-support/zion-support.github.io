import React from 'react';
import Layout from '../components/layout/Layout';
import Link from 'next/link';
import {_Heart, _DollarSign, _Factory, _ShoppingCart, _Building2, _GraduationCap, _Leaf, _Shield, _ArrowRight, _Star, _CheckCircle, _Users, _Globe, _Cpu, _Database, _Network, _Target} from 'lucide-react';

const SolutionsPage: React.FC = () => {_const _industrySolutions = [
    {
      category: 'Healthcare & Life Sciences', _solutions: [
        {
          name: 'Healthcare AI Solutions', _description: 'AI-powered diagnostic tools, _patient care optimization, _and medical research platforms', _href: '/healthcare-solutions', _featured: true, _icon: <Heart className="w-6 h-6" />},
        {_name: 'AI Healthcare Diagnostics', _description: 'Advanced diagnostic systems using machine learning and medical imaging', _href: '/ai-healthcare-diagnostics', _icon: <Cpu className="w-6 h-6" />},
        {_name: 'Biotech AI Research Platform', _description: 'AI-driven research tools for biotechnology and pharmaceutical development', _href: '/biotech-ai-research-platform', _icon: <Database className="w-6 h-6" />}
      ]
    },
    {_category: 'Financial Services', _solutions: [
        {
          name: 'Financial Solutions', _description: 'Comprehensive financial technology solutions for modern enterprises', _href: '/financial-solutions', _featured: true, _icon: <DollarSign className="w-6 h-6" />},
        {_name: 'AI Financial Intelligence', _description: 'Intelligent financial analysis and decision-making platforms', _href: '/ai-financial-intelligence', _icon: <Globe className="w-6 h-6" />},
        {_name: 'Quantum Financial Trading', _description: 'Quantum-powered trading algorithms and financial modeling', _href: '/quantum-financial-trading', _icon: <Network className="w-6 h-6" />}
      ]
    },
    {_category: 'Manufacturing & Industry', _solutions: [
        {
          name: 'Manufacturing AI Solutions', _description: 'AI-powered automation and optimization for manufacturing processes', _href: '/manufacturing-ai-solutions', _featured: true, _icon: <Factory className="w-6 h-6" />},
        {_name: 'Industrial Automation AI', _description: 'Intelligent automation systems for industrial operations', _href: '/industrial-automation-ai', _icon: <Cpu className="w-6 h-6" />},
        {_name: 'Autonomous Manufacturing', _description: 'Self-managing manufacturing systems with AI oversight', _href: '/autonomous-manufacturing', _icon: <Database className="w-6 h-6" />}
      ]
    },
    {_category: 'Retail & E-commerce', _solutions: [
        {
          name: 'Retail Technology Solutions', _description: 'Advanced technology solutions for modern retail operations', _href: '/retail-technology-solutions', _featured: true, _icon: <ShoppingCart className="w-6 h-6" />},
        {_name: 'AI Customer Journey Analytics', _description: 'Comprehensive customer behavior analysis and optimization', _href: '/ai-customer-journey-analytics', _icon: <Users className="w-6 h-6" />},
        {_name: 'AI Content Personalization', _description: 'Dynamic content adaptation based on customer preferences', _href: '/ai-content-personalization-engine', _icon: <Globe className="w-6 h-6" />}
      ]
    },
    {_category: 'Government & Public Sector', _solutions: [
        {
          name: 'Government Technology Solutions', _description: 'Innovative technology solutions for government agencies and public services', _href: '/government-technology-solutions', _featured: true, _icon: <Building2 className="w-6 h-6" />},
        {_name: 'AI Ethics & Governance Framework', _description: 'Comprehensive frameworks for responsible AI deployment', _href: '/ai-ethics-governance-framework', _icon: <Shield className="w-6 h-6" />},
        {_name: 'Cybersecurity Solutions', _description: 'Advanced security solutions for government and enterprise', _href: '/cybersecurity', _icon: <Shield className="w-6 h-6" />}
      ]
    },
    {_category: 'Education & Training', _solutions: [
        {
          name: 'Education Technology Solutions', _description: 'Innovative technology solutions for modern education and training', _href: '/education-technology-solutions', _featured: true, _icon: <GraduationCap className="w-6 h-6" />},
        {_name: 'AI Education Platform', _description: 'Intelligent learning systems and educational content platforms', _href: '/ai-education-platform', _icon: <Cpu className="w-6 h-6" />},
        {_name: 'Training Solutions', _description: 'Comprehensive training and development platforms', _href: '/training', _icon: <Users className="w-6 h-6" />}
      ]
    },
    {_category: 'Sustainability & Energy', _solutions: [
        {
          name: 'Energy & Utilities Solutions', _description: 'Technology solutions for energy optimization and sustainability', _href: '/energy-utilities-solutions', _featured: true, _icon: <Leaf className="w-6 h-6" />},
        {_name: 'AI Sustainability Platform', _description: 'AI-driven sustainability monitoring and optimization', _href: '/ai-sustainability-platform', _icon: <Globe className="w-6 h-6" />},
        {_name: 'Quantum Energy Platform', _description: 'Quantum computing solutions for energy optimization', _href: '/quantum-energy-platform', _icon: <Network className="w-6 h-6" />}
      ]
    }
  ];

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
            >
              Revolutionary Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12"
              initial={_{ opacity: 0, _y: 30}}
              animate={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8, _delay: 0.2}}
            >
              Transform your business with our cutting-edge technology solutions. From AI-powered tools to quantum computing platforms, _we deliver innovation that drives results.
            </motion.p>
            
            {_/* Stats Grid */}
            <motion.div 
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
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {_/* Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={_{ opacity: 0, _y: 30}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.8}}
              viewport={_{ once: true}}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Solution Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to address the most complex business challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {_solutions.map(_(solution, _index) => (_<motion.div
                  key={index}
                  className="group relative bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  initial={_{ opacity: 0, _y: 30}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: index * 0.1}}
                  viewport={_{ once: true}}
                >
                  <div className={_`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {_solution.icon}
                  </div>
                  
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
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={_solution.href}
                    className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group-hover:translate-x-1"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Industry Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Tailored technology solutions designed specifically for your industry's unique challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/demo"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {_/* Solutions Grid */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From healthcare to manufacturing, we deliver specialized solutions that address your industry's unique needs.
            </p>
          </motion.div>

          <div className="space-y-16">
            {_industrySolutions.map(_(category, _categoryIndex) => (_<motion.div
                key={category.category}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.8, _delay: categoryIndex * 0.2}}
                viewport={_{ once: true}}
              >
                <h3 className="text-3xl font-bold text-white mb-8 text-center">
                  {_category.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {_category.solutions.map((solution, _solutionIndex) => (
                    <motion.div
                      key={solution.name}
                      initial={_{ opacity: 0, _y: 30}}
                      whileInView={_{ opacity: 1, _y: 0}}
                      transition={_{ duration: 0.6, _delay: solutionIndex * 0.1}}
                      viewport={_{ once: true}}
                      className={_`bg-gradient-to-br from-gray-900/50 to-gray-800/50 border rounded-2xl p-6 backdrop-blur-sm hover:border-green-500/40 transition-all duration-300 ${
                        solution.featured ? 'border-green-500/30' : 'border-gray-700/50'}`}
                    >
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
                      >
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our industry-specific solutions can drive innovation and growth for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
              >
                Start Your Transformation
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="border border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md hover:bg-white/10"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;