import Head from 'next/head'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Users, 
  Target, 
  Award, 
  Globe,
  Rocket,
  Cpu,
  Database,
  Lock
} from 'lucide-react'

export default function About() {
  const title = 'About Zion Tech Group — AI, Cloud, and Cybersecurity Solutions'
  const description = 'Learn about Zion Tech Group, our mission to revolutionize technology solutions, and our expertise in AI, cloud computing, and cybersecurity.'
  
  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology solutions.'
    },
    {
      icon: Shield,
      title: 'Security by Design',
      description: 'Every solution we build incorporates enterprise-grade security from the ground up.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native',
      description: 'We leverage the power of cloud computing to deliver scalable, reliable solutions.'
    },
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Artificial intelligence is at the core of our autonomous systems and intelligent workflows.'
    }
  ]

  const expertise = [
    {
      icon: Rocket,
      title: 'AI Autonomous Systems',
      description: 'Multi-agent workflows, RAG systems, and intelligent automation platforms.'
    },
    {
      icon: Cpu,
      title: 'Cloud Infrastructure',
      description: 'Serverless platforms, Kubernetes orchestration, and DevOps automation.'
    },
    {
      icon: Database,
      title: 'Data Engineering',
      description: 'Data pipelines, ML ops, and real-time analytics solutions.'
    },
    {
      icon: Lock,
      title: 'Cybersecurity',
      description: 'Zero-trust architecture, compliance frameworks, and threat intelligence.'
    }
  ]

  const stats = [
    { number: '50+', label: 'Enterprise Clients' },
    { number: '100+', label: 'AI Systems Deployed' },
    { number: '99.9%', label: 'Uptime SLA' },
    { number: '24/7', label: 'Support Coverage' }
  ]

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href="https://ziontechgroup.com/about/" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about/" />
      </Head>
      
      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-dark text-white py-20">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-zion-cyan rounded-full"></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Revolutionizing Technology
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Through Innovation
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8"
            >
              We build autonomous AI systems, cloud-native platforms, and secure infrastructure 
              that scale your business and drive measurable outcomes.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="/contact" 
                className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 font-semibold"
              >
                Get Started
              </a>
              <a 
                href="/services" 
                className="px-8 py-3 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold"
              >
                Explore Services
              </a>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At Zion Tech Group, we're on a mission to democratize cutting-edge technology 
                  and make AI, cloud computing, and cybersecurity accessible to businesses of all sizes.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  We believe that every organization deserves access to enterprise-grade technology 
                  solutions that can transform their operations, enhance security, and drive growth.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Outcome-Driven</h3>
                    <p className="text-gray-600">We measure success by your business results</p>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-zion-blue to-zion-purple rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Why Choose Zion Tech Group?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <span>Real, battle-tested implementations</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <span>Transparent pricing and fast onboarding</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <span>Enterprise-grade security and compliance</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">✓</span>
                      </div>
                      <span>ROI-focused delivery and measurable outcomes</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and shape how we deliver value to our clients.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Areas of Expertise</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We specialize in cutting-edge technologies that drive business transformation and innovation.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {expertise.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-600 text-lg">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-purple-dark text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-zion-slate-light mb-8"
            >
              Let's discuss how our AI, cloud, and cybersecurity solutions can drive your success.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a 
                href="/contact" 
                className="px-8 py-3 bg-white text-zion-blue-dark rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold"
              >
                Get Started Today
              </a>
              <a 
                href="/services" 
                className="px-8 py-3 border-2 border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300 font-semibold"
              >
                Explore Our Services
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  )
}