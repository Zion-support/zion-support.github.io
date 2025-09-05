import React from 'react',
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
      title: &quot;Custom AI Solutions&quot;,
      description: &quot;Tailored AI applications built for your specific business needs&quot;,
      features: [&quot;Machine Learning Models&quot;, &quot;Neural Networks&quot;, &quot;Predictive Analytics&quot;, &quot;Natural Language Processing&quot;],
      price: &quot;From $5,000&quot;,
      icon: Brain,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      title: &quot;AI-Powered Automation&quot;,
      description: &quot;Intelligent automation systems that learn and adapt&quot;,
      features: [&quot;Process Automation&quot;, &quot;Workflow Optimization&quot;, &quot;Smart Decision Making&quot;, &quot;Continuous Learning&quot;],
      price: &quot;From $3,500&quot;,
      icon: Zap,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      title: &quot;Data Intelligence Platform&quot;,
      description: &quot;Advanced analytics and insights powered by AI&quot;,
      features: [&quot;Big Data Processing&quot;, &quot;Real-time Analytics&quot;, &quot;Business Intelligence&quot;, &quot;Predictive Insights&quot;],
      price: &quot;From $7,500&quot;,
      icon: Database,
      color: &quot;from-emerald-500 to-teal-500&quot;
    },
    {
      title: &quot;AI Consulting & Strategy&quot;,
      description: &quot;Strategic guidance for AI implementation and transformation&quot;,
      features: [&quot;AI Roadmap Planning&quot;, &quot;Technology Assessment&quot;, &quot;Implementation Strategy&quot;, &quot;ROI Optimization&quot;],
      price: &quot;From $2,500&quot;,
      icon: Rocket,
      color: &quot;from-orange-500 to-red-500&quot;
    }
  ],

  const stats = [
    { number: "500+", label: "AI Models Deployed", icon: Brain },
    { number: "99.9%", label: "Accuracy Rate", icon: CheckCircle },
    { number: "24/7", label: "AI Monitoring", icon: Clock },
    { number: "2500%", label: "Average ROI", icon: TrendingUp }
  ],  ];

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>AI & Machine Learning Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Cutting-edge AI and machine learning solutions from Zion Tech Group. Custom AI applications, automation, and intelligent systems that drive business growth.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;AI & Machine Learning Services - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Cutting-edge AI and machine learning solutions that drive business growth and innovation.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services/ai-ml&quot; />      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;mb-8&quot;          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6&quot;>
              AI & Machine Learning
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed&quot;>
              Revolutionary AI solutions that adapt, learn, and evolve with your business            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;mb-12&quot;
          >
            <p className=&quot;text-lg text-white/70 max-w-2xl mx-auto mb-8&quot;>
              From custom neural networks to intelligent automation systems, we deliver AI solutions               that provide measurable business outcomes and competitive advantages.
            </p>
            <button className=&quot;px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto&quot;>
              Get AI Consultation
              <ArrowRight className=&quot;w-5 h-5&quot; />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=&quot;py-16 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8&quot;>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;text-center&quot;              >
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                  <stat.icon className=&quot;w-8 h-8 text-purple-400&quot; />
                </div>
                <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.number}</div>
                <div className=&quot;text-white/70&quot;>{stat.label}</div>              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=&quot;text-center mb-16&quot;          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Our AI Services</h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Comprehensive AI solutions designed to transform your business operations and drive innovation
            </p>
          </motion.div>

          <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300&quot;
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{service.description}</p>
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {service.features.map((feature) => (
                    <li key={feature} className=&quot;flex items-center text-white/80&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-purple-400 mr-3 flex-shrink-0&quot; />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className=&quot;flex items-center justify-between&quot;>
                  <span className=&quot;text-2xl font-bold text-purple-400&quot;>{service.price}</span>
                  <button className=&quot;px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105&quot;>                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Business with AI?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">                Schedule Consultation
              </button>
              <button className=&quot;px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10&quot;>
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <EnhancedFooter />
    </div>
  )
}