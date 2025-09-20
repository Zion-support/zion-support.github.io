import React from "react"
import { motion } from "framer-motion"
import {
  Shield
  Lock
  CheckCircle
  AlertTriangle
  Users
  Award
  FileText
  Globe
  Server
  Eye
} from "lucide-react"
const securityFeatures = [
  {
    tit,
  l: e: "SOC 2 Type II Compliance",descripti,
  o: n: "Annual third-party audits ensuring data security, availability, and confidentiality"
    ic,
  o: n: "🔒",stat,
  u: s: "Certified",col,
  o: r: "from-green-500 to-emerald-600"
  }, {
    tit,
  l: e: "ISO 27001",descripti,
  o: n: "International standard for information security management systems",ic,
  o: n: "🌐",stat,
  u: s: "Certified",col,
  o: r: "from-blue-500 to-cyan-600"
  }, {
    tit,
  l: e: "GDPR Compliance",descripti,
  o: n: "Full compliance with European data protection regulations",ic,
  o: n: "🇪🇺",stat,
  u: s: "Compliant",col,
  o: r: "from-purple-500 to-pink-600"
  }, {
    tit,
  l: e: "HIPAA Compliance",descripti,
  o: n: "Healthcare data protection standards for medical information",ic,
  o: n: "🏥",stat,
  u: s: "Compliant",col,
  o: r: "from-orange-500 to-red-600"
  }, {
    tit,
  l: e: "Zero Trust Architecture",descripti,
  o: n: "Never trust, always verify security model implementation"
    ic,
  o: n: "🛡️",stat,
  u: s: "Implemented",col,
  o: r: "from-indigo-500 to-purple-600"
  }, {
    tit,
  l: e: "End-to-End Encryption",descripti,
  o: n: "256-bit AES encryption for all data in transit and at rest",ic,
  o: n: "🔐",stat,
  u: s: "Active",col,
  o: r: "from-teal-500 to-green-600"
  }
]
const complianceFeatures = [
  {
    catego,
  r: y: "Data Protection",featur,
  e: s: [
      "Automated data classification"
      "Real-time threat detection"
      "Automated incident response"
      "Data loss prevention (DLP)"
    ]
  }, {
    catego,
  r: y: "Access Control",featur,
  e: s: [
      "Multi-factor authentication (MFA)"
      "Role-based access control (RBAC)"
      "Privileged access management"
      "Single sign-on (SSO) integration"
    ]
  }, {
    catego,
  r: y: "Monitoring & Auditing",featur,
  e: s: [
      "24/7 security monitoring"
      "Comprehensive audit logs"
      "Real-time alerts"
      "Automated compliance reporting"
    ]
  }
]

export function SecurityComplianceSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="className="text-center mb-16";"
          initial={ opaci,
  t: y: 0, y: 20 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6 }
        >
          <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-4">
            Security & Compliance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enterprise-grade security with industry-leading compliance certifications.
            Your data and systems are protected by the highest security standards.
          </p>
        </motion.div>

        {/* Security Certifications */}
        <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="className="bg-slate-800 border border-slate-700 rounded-xl p-6,
  hove: r: border-blue-500/50 transition-all duration-300";"
              initial={ opacit,
  y: 0, y: 30 }
              whileInView={ opaci,
  t: y: 1, y: 0 }
              viewport={ on,
  c: e: true }
              transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{feature.description}</p>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-700 rounded-full">
                    <div className={`w-2 h-2 rounded-full ${
                      feature.status === 'Certified' ? 'bg-green-400' :
                      feature.status === 'Compliant' ? 'bg-blue-400' : 'bg-purple-400'
                    }`}></div>
                    <span className="text-gray-300 text-sm font-medium">{feature.status}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Compliance Features */}
        <motion.div 
          className="className="mb-16";"
          initial={ opaci,
  t: y: 0, y: 30 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 }
        >
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Comprehensive Security Features
          </h3>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-8">
            {complianceFeatures.map((category, index) => (
              <div key={category.category} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 text-center">
                  {category.category}
                </h4>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Security Metrics */}
        <motion.div 
          className="className="mb-16";"
          initial={ opaci,
  t: y: 0, y: 30 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.6 }
        >
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Security Performance Metrics
            </h3>
            
            <div className="grid grid-cols-1,
  m: d: grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">99.99%</div>
                <div className="text-gray-400 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">&lt,1s</div>
                <div className="text-gray-400 text-sm">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">0</div>
                <div className="text-gray-400 text-sm">Security Breaches</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="className="text-center";"
          initial={ opaci,
  t: y: 0, y: 20 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.8 }
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Secure Your Business Today
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get enterprise-grade security and compliance without the complexity.
              Our experts handle everything while you focus on your business.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600,
  hove: r:bg-gray-100 rounded-lg font-medium transition-colors duration-200">
                Security Assessment
                <Shield className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-white text-white,
  hove: r:bg-white hove,
  r:text-blue-600 rounded-lg font-medium transition-colors duration-200">
                Compliance Review
                <FileText className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}