import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { 
  Cloud, Cpu, Database, Zap, Shield, Rocket, 
  ArrowRight, CheckCircle, Star, Users, Clock, TrendingUp
} from 'lucide-react',
import EnhancedNavigation from '../../components/EnhancedNavigation',
import EnhancedFooter from '../../components/EnhancedFooter',
export default function CloudServicesPage() {
  const services = [
    {
      title: &quot;Cloud Migration & Strategy&quot;,
      description: &quot;Seamless cloud migration with strategic planning and execution&quot;,
      features: [&quot;Migration Planning&quot;, &quot;Cost Optimization&quot;, &quot;Performance Tuning&quot;, &quot;Security Implementation&quot;],
      price: &quot;From $10,000&quot;,
      icon: Cloud,
      color: &quot;from-emerald-500 to-teal-500&quot;
    },
    {
      title: &quot;DevOps & CI/CD&quot;,
      description: &quot;Automated development and deployment pipelines&quot;,
      features: [&quot;CI/CD Automation&quot;, &quot;Infrastructure as Code&quot;, &quot;Monitoring & Alerting&quot;, &quot;Performance Optimization&quot;],
      price: &quot;From $6,000&quot;,
      icon: Zap,
      color: &quot;from-blue-500 to-cyan-500&quot;
    },
    {
      title: &quot;Edge Computing Solutions&quot;,
      description: &quot;Distributed computing for improved performance and reliability&quot;,
      features: [&quot;Edge Deployment&quot;, &quot;Load Balancing&quot;, &quot;Global Distribution&quot;, &quot;Low Latency&quot;],
      price: &quot;From $8,000&quot;,
      icon: Cpu,
      color: &quot;from-purple-500 to-pink-500&quot;
    },
    {
      title: &quot;Cloud Security & Compliance&quot;,
      description: &quot;Comprehensive security and compliance for cloud environments&quot;,
      features: [&quot;Identity Management&quot;, &quot;Data Protection&quot;, &quot;Compliance Auditing&quot;, &quot;Threat Prevention&quot;],
      price: &quot;From $12,000&quot;,
      icon: Shield,
      color: &quot;from-red-500 to-orange-500&quot;
    }
  ],

  const stats = [
<<<<<<< HEAD
    { number: "99.99%", label: "Uptime Guarantee", icon: Cloud },
    { number: "50%", label: "Cost Reduction", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Clock },
    { number: "100+", label: "Cloud Projects", icon: CheckCircle }
  ],
=======
    { number: &quot;99.99%&quot;, label: &quot;Uptime Guarantee&quot;, icon: Cloud },
    { number: &quot;50%&quot;, label: &quot;Cost Reduction&quot;, icon: TrendingUp },
    { number: &quot;24/7&quot;, label: &quot;Support Available&quot;, icon: Clock },
    { number: &quot;100+&quot;, label: &quot;Cloud Projects&quot;, icon: CheckCircle }
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white&quot;>
      <Head>
        <title>Cloud Infrastructure Services - Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Scalable cloud infrastructure solutions from Zion Tech Group. Cloud migration, DevOps, edge computing, and security services.&quot; />
        <meta property=&quot;og:title&quot; content=&quot;Cloud Infrastructure Services - Zion Tech Group&quot; />
        <meta property=&quot;og:description&quot; content=&quot;Scalable cloud infrastructure solutions for modern businesses.&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/services/cloud&quot; />
      </Head>

      <EnhancedNavigation />

      {/* Hero Section */}
      <section className=&quot;relative pt-32 pb-20 px-6&quot;>
        <div className=&quot;max-w-7xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className=&quot;mb-8&quot;
          >
            <h1 className=&quot;text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent mb-6&quot;>
              Cloud Infrastructure
            </h1>
            <p className=&quot;text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed&quot;>
              Scalable cloud solutions that drive efficiency and accelerate digital transformation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className=&quot;mb-12&quot;
          >
            <p className=&quot;text-lg text-white/70 max-w-2xl mx-auto mb-8&quot;>
              From cloud migration to DevOps automation, we provide comprehensive cloud infrastructure 
              solutions that scale with your business and optimize costs.
            </p>
            <button className=&quot;px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 mx-auto&quot;>
              Cloud Consultation
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
                className=&quot;text-center&quot;
              >
                <div className=&quot;w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4&quot;>
                  <stat.icon className=&quot;w-8 h-8 text-teal-400&quot; />
                </div>
                <div className=&quot;text-3xl font-bold text-white mb-2&quot;>{stat.number}</div>
                <div className=&quot;text-white/70&quot;>{stat.label}</div>
              </motion.div>
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
            className=&quot;text-center mb-16&quot;
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Cloud Infrastructure Services</h2>
            <p className=&quot;text-xl text-white/70 max-w-3xl mx-auto&quot;>
              Comprehensive cloud solutions designed to modernize your infrastructure and drive innovation
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
                className=&quot;bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300&quot;
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>{service.title}</h3>
                <p className=&quot;text-white/70 mb-6&quot;>{service.description}</p>
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {service.features.map((feature) => (
                    <li key={feature} className=&quot;flex items-center text-white/80&quot;>
                      <CheckCircle className=&quot;w-5 h-5 text-teal-400 mr-3 flex-shrink-0&quot; />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className=&quot;flex items-center justify-between&quot;>
                  <span className=&quot;text-2xl font-bold text-teal-400&quot;>{service.price}</span>
                  <button className=&quot;px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full font-semibold text-white transition-all duration-300 transform hover:scale-105&quot;>
                    Get Started
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=&quot;py-20 px-6&quot;>
        <div className=&quot;max-w-4xl mx-auto text-center&quot;>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
              Ready to Transform Your Infrastructure?
            </h2>
            <p className=&quot;text-xl text-white/70 mb-8 max-w-2xl mx-auto&quot;>
              Let's discuss how our cloud infrastructure solutions can modernize your business and drive digital transformation.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
=======
            <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
              <button className=&quot;px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
                Infrastructure Assessment
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