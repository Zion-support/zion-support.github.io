import React from 'react.ts';
import { SEO  } from '../components/SEO';
import { motion  } from 'framer-motion.ts';
import { Link  } from 'react-router-dom.ts';

const AIServicesShowcase: React.FC = (): JSX.Element => {
  const aiServices = [
    {
      id: 'ai-code-review-security',
      title: 'AI-Powered Code Review & Security Analysis',
      description: 'Advanced AI-driven code analysis platform that detects vulnerabilities, bugs, and security issues with unprecedented accuracy and speed.',
      features['85% vulnerability reduction', '50+ programming languages', 'SAST, DAST, SCA, IAST', 'Git integration'],
      pricing: '$49 - $799/month',
      url: '/services/ai-code-review-security',
      icon: '🔒',
      category: 'Security & Development',
      benefits['Reduce security incidents by 60%', 'Faster code review process', 'Compliance ready']
    },
    {
      id: 'ai-customer-experience-analytics',
      title: 'AI-Powered Customer Experience Analytics Platform',
      description: 'Transform customer insights into actionable intelligence with AI-driven analytics that boost satisfaction by 35% and reduce churn by 25%.',
      features['Real-time sentiment analysis', 'Customer journey tracking', 'Predictive analytics', 'Omnichannel insights'],
      pricing: '$299 - $1,999/month',
      url: '/services/ai-customer-experience-analytics',
      icon: '📊',
      category: 'Analytics & Customer Success',
      benefits['Increase customer satisfaction by 35%', 'Reduce churn by 25%', 'Real-time insights']
    },
    {
      id: 'ai-devops-automation-platform',
      title: 'AI-Powered DevOps Automation Platform',
      description: 'Revolutionize DevOps workflow with AI-powered automation that reduces deployment time by 80% and decreases failures by 90%.',
      features['AI pipeline optimization', 'Intelligent deployment', 'GitOps workflows', 'Multi-cloud orchestration'],
      pricing: '$199 - $1,499/month',
      url: '/services/ai-devops-automation-platform',
      icon: '🚀',
      category: 'DevOps & Infrastructure',
      benefits['Reduce deployment time by 80%', 'Decrease failures by 90%', 'Faster time to market']
    },
    {
      id: 'ai-iot-edge-computing-platform',
      title: 'AI-Powered IoT Edge Computing Platform',
      description: 'Revolutionize IoT with AI-powered edge computing that processes data at the edge with sub-millisecond latency and reduces bandwidth costs by 70%.',
      features['Sub-millisecond processing', 'Edge AI intelligence', 'Distributed computing', 'Hybrid cloud integration'],
      pricing: '$299 - $2,499/month',
      url: '/services/ai-iot-edge-computing-platform',
      icon: '🌐',
      category: 'IoT & Edge Computing',
      benefits['Reduce latency by 90%', 'Lower bandwidth costs by 70%', 'Real-time decision making']
    }
  ];

  const categories = ['All', 'Security & Development', 'Analytics & Customer Success', 'DevOps & Infrastructure', 'IoT & Edge Computing'];

  return (
    <div>
      <SEO
        title="AI-Powered Micro SAAS Services Showcase | Zion Tech Group"
        description="Discover our cutting-edge AI-powered micro SAAS services. From code security to customer analytics, DevOps automation to IoT edge computing. Transform your business with intelligent solutions."
        keywords="AI services, micro SAAS, code security, customer analytics, DevOps automation, IoT edge computing, Zion Tech Group"
        canonical="https://ziontechgroup.com/ai-services-showcase"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered Micro SAAS Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Transform your business with our cutting-edge AI-powered micro SAAS solutions. 
                From code security to customer analytics, we deliver intelligent automation that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/services"
                  className="border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Revolutionary AI-Powered Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Each service is designed to solve real business challenges with measurable outcomes and competitive pricing.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg: grid-cols-2 gap-8">
              {aiServices.map((service, index)  => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="text-4xl">{service.icon}</div>
                    <span className="text-sm bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-blue-300 flex items-center">
                          <span className="text-green-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Business Impact:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-green-300 flex items-center">
                          <span className="text-green-400 mr-2">🚀</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-2xl font-bold text-green-400">{service.pricing}</div>
                    <span className="text-sm text-gray-400">14-day free trial</span>
                  </div>
                  
                  <div className="flex gap-3">
                    <Link
                      to={service.url}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 text-center"
                    >
                      Contact Sales
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge AI technology with industry expertise to deliver solutions that drive real business value.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI-First Approach",
                  description: "All our services leverage the latest AI/ML technology for maximum effectiveness and automation.",
                  icon: "🧠"
                },
                {
                  title: "Proven Results",
                  description: "Measurable outcomes with quantifiable business impact across all our solutions.",
                  icon: "📈"
                },
                {
                  title: "Industry Expertise",
                  description: "Deep understanding of various industries with specialized solutions for specific sectors.",
                  icon: "🏢"
                },
                {
                  title: "Scalable Architecture",
                  description: "Solutions that grow with your business, from startup to enterprise scale.",
                  icon: "⚡"
                },
                {
                  title: "Compliance Ready",
                  description: "Built-in security and compliance features for regulated industries.",
                  icon: "🔒"
                },
                {
                  title: "24/7 Support",
                  description: "Dedicated support team available around the clock for enterprise customers.",
                  icon: "🛟"
                }
              ].map((feature, index)  => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations who trust our AI-powered platforms to drive innovation and growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Contact Information</h3>
                  <div className="space-y-2 text-gray-300">
                    <p>📱 <span className="text-white">+1 302 464 0950</span></p>
                    <p>✉️ <span className="text-white">kleber@ziontechgroup.com</span></p>
                    <p>📍 <span className="text-white">364 E Main St STE 1008, Middletown DE 19709</span></p>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link to="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                      Schedule Demo
                    </Link>
                    <Link to="/contact" className="block w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                      Start Free Trial
                    </Link>
                    <Link to="/contact" className="block w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
                      Get Pricing Quote
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="text-gray-300">
                <p>Visit our website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline">https://ziontechgroup.com</a></p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )};

export default AIServicesShowcase;