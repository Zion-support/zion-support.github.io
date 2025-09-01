import {
  Shield,
  CheckCircle,
  Award,
  FileText,
  Users,
  Globe,
  Lock,
  Eye,
  Database,
  Clock,
  AlertTriangle,
  Info,
  Phone,
  Mail,
  MapPin,
  Star,
  Zap,
  Brain,
  Cloud,
  Rocket,
  Heart,
  Cpu,
  Network,
  Server,
  Key,
  Fingerprint,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  ShieldCheck,
  Gauge,
  TrendingUp,
  BarChart3
} from 'lucide-react';

export default function Compliance() {
  
  
  
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-blue-400/30 mb-6">
              <Shield className="w-5 h-5 text-blue-400 mr-2"  />
              <span className="text-blue-300 font-medium">Compliance & Security</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-green-600 bg-clip-text text-transparent">
                Compliance
              </span>
              <br />
              <span className="text-white">Framework</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We maintain the highest standards of compliance and security across all 
              our services, ensuring your data and operations are protected by industry-leading 
              frameworks and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform adheres to internationally recognized compliance standards 
              to ensure the highest level of security and data protection.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${framework.color} rounded-lg flex items-center justify-center mr-4`}>
                    <framework.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-semibold text-white">{framework.name}</h3>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                        {framework.status}
                      </span>
                    </div>
                    <p className="text-gray-400 mt-1">{framework.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Details</h4>
                    <p className="text-gray-300 text-sm">{framework.details}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Scope</h4>
                    <p className="text-gray-300 text-sm">{framework.scope}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Last Audit</h4>
                      <p className="text-white text-sm">{framework.lastAudit}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-1">Next Audit</h4>
                      <p className="text-white text-sm">{framework.nextAudit}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Benefits</h4>
                    <ul className="space-y-2">
                      {framework.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0"  />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Metrics */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Compliance Metrics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time metrics and performance indicators that demonstrate our 
              commitment to maintaining the highest compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <metric.icon className="w-6 h-6 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.metric}</div>
                <h3 className="text-lg font-semibold text-white mb-1">{metric.label}</h3>
                <p className="text-gray-400 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Measures */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Security Measures
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security measures and controls that protect your data 
              and ensure compliance with regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityMeasures.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-lg flex items-center justify-center mr-4">
                    <category.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                </div>

                <ul className="space-y-3">
                  {category.measures.map((measure, measureIndex) => (
                    <li key={measureIndex} className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0"  />
                      <span className="text-gray-300 text-sm">{measure}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Compliance Support
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Need assistance with compliance requirements or have questions about 
              our security measures? Our compliance team is here to help.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactInfo.map((contact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:border-blue-400/30 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">{contact.title}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-400 mr-3"  />
                      <span className="text-gray-300">{contact.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-400 mr-3"  />
                      <span className="text-gray-300">{contact.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-blue-400 mr-3"  />
                      <span className="text-gray-300">Response time: {contact.responseTime}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )}
