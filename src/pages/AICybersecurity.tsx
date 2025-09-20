import React from "react"
import { SEO } from "../components/SEO"
import { motion } from "framer-motion"
import { 
  Shield,
  Brain, 
  Zap, 
  CheckCircle,
  Star,
  TrendingUp,
  Award,
  Globe,
  Lock,
  Database,
  Cpu,
  Network,
  BarChart3,
  FileText,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  Video,
  Eye,
  AlertTriangle,
  Target,
  Users,
  ArrowRight,
  Key,
  Fingerprint,
  EyeOff,
  Server,
  Globe2,
  ShieldCheck
} from "lucide-react"
export default function AICybersecurity() {
  const features = [
    {
      icon: Brain,title: 'AI Threat Detection',description: 'Advanced machine learning algorithms for real-time threat identification and analysis',color: 'from-blue-500 to-cyan-500'
    }
    {
      icon: Shield,title: 'Zero-Day Protection',description: 'Proactive defense against unknown vulnerabilities and emerging threats',color: 'from-green-500 to-emerald-500'
    }
    {
      icon: Zap,title: 'Real-Time Response',description: 'Instant automated threat response and incident containment',color: 'from-yellow-500 to-orange-500'
    }
    {
      icon: Lock,title: 'Advanced Encryption',description: 'Quantum-resistant encryption and secure communication protocols',color: 'from-purple-500 to-indigo-500'
    }
    {
      icon: Network,title: 'Network Security',description: 'Comprehensive network monitoring and intrusion prevention',color: 'from-red-500 to-pink-500'
    }
    {
      icon: Database,title: 'Data Protection',description: 'End-to-end data security with AI-powered access controls',color: 'from-indigo-500 to-blue-500'
    }
  ]
  const benefits = [
    'Detect threats 10x faster than traditional methodsReduce false positives by 85%',
    'Prevent 99.9% of cyber attacks24/7 automated security monitoring',
    'Compliance with industry standardsScalable security for any organization'
  ],

  const useCases = [
    {
      title: 'Enterprise Security',description: 'Comprehensive cybersecurity for large organizations and corporations',icon: Building
    }
    {
      title: 'Cloud Security',description: 'Protect cloud infrastructure and applications from cyber threats',icon: Cloud
    }
    {
      title: 'IoT Security',description: 'Secure connected devices and Internet of Things networks',icon: Cpu
    }
    {
      title: 'Financial Security',description: 'Protect financial systems and prevent fraud with AI',icon: DollarSign
    }
  ]
  const securityLayers = [
    {
      name: 'Perimeter Security',description: 'Advanced firewall and network protection systems',features: ['DDoS protectionIntrusion detection', 'Traffic analysis']
    },
    {
      name: 'Endpoint Security',description: 'Device-level protection for all connected endpoints',features: ['Malware detectionBehavioral analysis', 'Threat isolation']
    },
    {
      name: 'Application Security',description: 'Secure software development and runtime protection',features: ['Code analysisVulnerability scanning', 'Runtime monitoring']
    },
    {
      name: 'Data Security',description: 'Protection for sensitive data and information',features: ['EncryptionAccess controls', 'Data loss prevention']
    }
  ],

  return (
    <>
      <SEO 
        title="AI Cybersecurity - Zion Tech Group"
        description="Revolutionary AI-powered cybersecurity platform with advanced threat detection, real-time response, and zero-day protection. Secure your digital assets with cutting-edge AI technology."
        keywords="AI cybersecurity, threat detection, cybersecurity platform, AI security, cyber defense, threat prevention, network security"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-full text-green-400 text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Cybersecurity Innovation
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                AI-Powered
                <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Cybersecurity
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Protect your digital assets with our revolutionary AI cybersecurity platform. 
                Advanced threat detection, real-time response, and zero-day protection 
                that keeps you one step ahead of cybercriminals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                >
                  Get Protected
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
                >
                  Security Assessment
                </motion.button>
              </div>
            </motion.div>
          </div>
          
          {/* Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Revolutionary Cybersecurity Features
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI platform combines cutting-edge technology with cybersecurity expertise 
                to deliver unprecedented protection and threat intelligence.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 hover:bg-slate-800/70"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Transform Your Security Posture
                </h2>
                
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Our AI cybersecurity platform delivers measurable improvements in threat 
                  detection, response time, and overall security effectiveness while 
                  reducing operational overhead and false positives.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl p-8 border border-green-500/30">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Security Metrics
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-green-400 mb-2">10x</div>
                        <div className="text-sm text-gray-400">Faster Detection</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-emerald-400 mb-2">85%</div>
                        <div className="text-sm text-gray-400">Fewer False Positives</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                        <div className="text-sm text-gray-400">Attack Prevention</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                        <div className="text-sm text-gray-400">Monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security Layers Section */}
        <section className="py-20">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Multi-Layer Security Architecture
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our defense-in-depth approach provides comprehensive protection across 
                all layers of your digital infrastructure.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityLayers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                    {layer.name}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {layer.description}
                  </p>
                  
                  <div className="space-y-2">
                    {layer.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Cybersecurity Use Cases
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Our AI platform adapts to various security needs and industries
                providing tailored protection for different environments.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <useCase.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                        {useCase.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10">
          <div className="container-responsive">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Digital Assets?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join leading organizations that are already using our AI cybersecurity 
                platform to protect their critical infrastructure and data.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-green-500/25"
                >
                  Get Protected Today
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover: border-gray-500 hover:bg-gray-800/50 transition-all duration-300"
                >
                  Security Assessment
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}