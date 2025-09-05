import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Zap, Shield, Rocket, Sparkles, Star, TrendingUp, Globe, Cpu, Lock, Cloud } from 'lucide-react';
import Link from 'next/link';

const Enhanced2026ServicesShowcase = () => {
  const featuredServices = [
    {
      id: 'ai-business-intelligence-elite-2026',
      name: 'AI Business Intelligence Elite 2026',
      description: 'Transform your business data into actionable intelligence with our advanced AI-powered analytics platform.',
      price: '$299',
      period: '/month',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      category: 'AI & Analytics',
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'AI-powered Reports']
    },
    {
      id: 'autonomous-ai-agents-platform-2026',
      name: 'Autonomous AI Agents Platform 2026',
      description: 'Build, deploy, and manage autonomous AI agents that can handle complex business tasks without human intervention.',
      price: '$199',
      period: '/month',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      category: 'AI & Automation',
      features: ['Task Automation', 'Process Optimization', '24/7 Operation', 'Scalable Architecture']
    },
    {
      id: 'quantum-cybersecurity-suite-2026',
      name: 'Quantum Cybersecurity Suite 2026',
      description: 'Next-generation cybersecurity platform that uses quantum-resistant algorithms to protect against current and future cyber threats.',
      price: '$599',
      period: '/month',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security',
      features: ['Quantum Encryption', 'Threat Detection', 'Zero Trust', 'Compliance Ready']
    },
    {
      id: 'neuromorphic-computing-platform-2026',
      name: 'Neuromorphic Computing Platform 2026',
      description: 'Brain-inspired computing for next-generation AI with ultra-low power consumption and cognitive capabilities.',
      price: '$1,499',
      period: '/month',
      icon: Cpu,
      color: 'from-green-500 to-emerald-500',
      category: 'Emerging Tech',
      features: ['Brain-like Processing', 'Low Power', 'Real-time Learning', 'Cognitive Computing']
    },
    {
      id: 'dna-computing-platform-2026',
      name: 'DNA Computing Platform 2026',
      description: 'Molecular computing for complex problem solving with exponential speed improvements for specific algorithms.',
      price: '$2,999',
      period: '/month',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      category: 'Emerging Tech',
      features: ['Molecular Processing', 'Exponential Speed', 'Complex Algorithms', 'Research Ready']
    },
    {
      id: 'space-debris-tracking-system',
      name: 'Space Debris Tracking System 2026',
      description: 'Advanced space debris monitoring and collision prediction system using AI and satellite technology.',
      price: '$899',
      period: '/month',
      icon: Rocket,
      color: 'from-yellow-500 to-orange-500',
      category: 'Space Tech',
      features: ['Real-time Tracking', 'Collision Prediction', 'Satellite Safety', 'Space Traffic Management']
    }
  ];

  const categories = [
    { name: 'AI Services', count: '150+', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'Quantum Tech', count: '75+', icon: Sparkles, color: 'from-blue-500 to-cyan-500' },
    { name: 'Emerging Tech', count: '100+', icon: Rocket, color: 'from-green-500 to-emerald-500' },
    { name: 'IT Solutions', count: '200+', icon: Cloud, color: 'from-yellow-500 to-orange-500' }
  ];

  return (
    <section className=&quot;py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden&quot;>
      {/* Background Effects */}
      <div className=&quot;absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-cyan-900/10&quot;></div>
      
      <div className=&quot;max-w-7xl mx-auto relative z-10&quot;>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className=&quot;text-center mb-16&quot;
        >
          <h2 className=&quot;text-4xl md:text-5xl font-bold text-white mb-6&quot;>
            <span className=&quot;bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
              2026 Revolutionary Services
            </span>
          </h2>
          <p className=&quot;text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed&quot;>
            Experience the future with our cutting-edge AI, quantum, and emerging technology services designed to transform your business
          </p>
        </motion.div>

        {/* Category Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className=&quot;grid grid-cols-2 md:grid-cols-4 gap-6 mb-16&quot;
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className=&quot;group text-center&quot;
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300`}>
                <category.icon className=&quot;w-8 h-8 text-white&quot; />
              </div>
              <h3 className=&quot;text-lg font-bold text-white mb-2&quot;>{category.name}</h3>
              <p className=&quot;text-2xl font-bold text-cyan-400&quot;>{category.count}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Services Grid */}
        <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16&quot;>
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className=&quot;group relative&quot;
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
              <div className=&quot;relative bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-all duration-300&quot;>
                {/* Service Header */}
                <div className=&quot;flex items-center space-x-3 mb-4&quot;>
                  <div className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                    <service.icon className=&quot;w-6 h-6 text-white&quot; />
                  </div>
                  <div>
                    <h3 className=&quot;text-lg font-bold text-white&quot;>{service.name}</h3>
                    <p className=&quot;text-gray-400 text-sm&quot;>{service.category}</p>
                  </div>
                </div>

                {/* Description */}
                <p className=&quot;text-gray-300 text-sm mb-4 leading-relaxed&quot;>
                  {service.description}
                </p>

                {/* Features */}
                <div className=&quot;mb-4&quot;>
                  <ul className=&quot;space-y-1&quot;>
                    {service.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className=&quot;flex items-center text-gray-400 text-xs&quot;>
                        <Star className=&quot;w-3 h-3 text-cyan-400 mr-2 flex-shrink-0&quot; />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className=&quot;flex items-center justify-between&quot;>
                  <div>
                    <span className=&quot;text-2xl font-bold text-cyan-400&quot;>{service.price}</span>
                    <span className=&quot;text-gray-400 text-sm&quot;>{service.period}</span>
                  </div>
                  <Link 
                    href={`/${service.id}`}
                    className=&quot;inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transition-transform duration-200&quot;
                  >
                    Learn More <ArrowRight className=&quot;w-4 h-4 ml-1&quot; />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className=&quot;text-center&quot;
        >
          <div className=&quot;bg-gradient-to-r from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-500/20 rounded-2xl p-8&quot;>
            <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>
              Ready to Transform Your Business?
            </h3>
            <p className=&quot;text-gray-300 mb-6 max-w-2xl mx-auto&quot;>
              Join thousands of businesses already leveraging our revolutionary services to achieve unprecedented growth and innovation.
            </p>
            <div className=&quot;flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6&quot;>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href=&quot;/services&quot;
                  className=&quot;inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-200&quot;
                >
                  <Rocket className=&quot;w-5 h-5 mr-2&quot; />
                  View All Services
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <Link
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-500/10 transition-all duration-200&quot;
                >
                  <Shield className=&quot;w-5 h-5 mr-2&quot; />
                  Get Started
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Enhanced2026ServicesShowcase;