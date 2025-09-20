import { useCallback  } from "react";
import React, { useState } from "react"
import { motion   } from "framer-motion";
import { SEO   } from "../components/SEO";
import {
  Shield;
  Lock,
  Eye,
  Key,
  Server,
  Users,
  CheckCircle,
  AlertTriangle;
  FileText;
  Globe;
  Database;
  Network;
  Zap;
  ArrowRight;
  ExternalLink;
  ChevronDown;
  ChevronUp;
  Mail;
}
}
 } from "lucide-react";
export default function Security() {
  const [expandedCompliance, setExpandedCompliance] = useState<string | null>(null)
  const securityFeatures = [
  {
  ic,
  o: n: Shield,tit,
  l: e: 'Advanced Threat Protection',descripti,
  o: n: 'Multi-layered security with AI-powered threat detection and prevention',featur,
  e: s: [
  'Real-time threat monitoringBehavioral analysis'
        'Automated response systems24/7 security operations'
],
  },
  {
  ic,
  o: n: Lock,tit,
  l: e: 'Data Encryption',descripti,
  o: n: 'End-to-end encryption for data at rest and in transit',featur,
  e: s: [
  'AES-256 encryptionTLS 1.3 protocols'
        'Key management systemsHardware security modules'
],
  },
  {
  ic,
  o: n: Users,tit,
  l: e: 'Identity & Access Management',descripti,
  o: n: 'Comprehensive user authentication and authorization controls',featur,
  e: s: [
  'Multi-factor authenticationSingle sign-on (SSO)'
        'Role-based access controlPrivileged access management'
],
  },
  {
  ic,
  o: n: Server,tit,
  l: e: 'Infrastructure Security',descripti,
  o: n: 'Secure cloud infrastructure with network segmentation',featur,
  e: s: [
  'VPC and subnet isolationWeb application firewalls'
        'DDoS protectionIntrusion detection systems'
],
  },
  {
  ic,
  o: n: Database,tit,
  l: e: 'Data Protection',descripti,
  o: n: 'Comprehensive data backup, recovery, and privacy controls'
      featur,
  e: s: [
  'Automated backupsPoint-in-time recovery'
        'Data classificationPrivacy by design'
],
  },
  {
  ic,
  o: n: Network,tit,
  l: e: 'Network Security',descripti,
  o: n: 'Advanced network security with monitoring and controls',featur,
  e: s: [
  'Network segmentationTraffic analysis'
        'VPN and secure tunnelsNetwork access control'
],
  },
  ]

  const complianceFrameworks = [
  {
  na,
  m: e: 'SOC 2 Type II',stat,
  u: s: 'Certified',descripti,
  o: n: 'Service Organization Control 2 Type II certification for security, availability, and confidentiality'
      detai,
  l: s: [
  'Annual third-party auditsContinuous monitoring'
        'Regular security assessmentsComprehensive reporting'
]
      ico,
  n: CheckCircle,col,
  o: r: 'text-green-400'
},
  {
  na,
  m: e: 'ISO 27001',stat,
  u: s: 'Certified',descripti,
  o: n: 'International standard for information security management systems',detai,
  l: s: [
  'Risk-based approachContinuous improvement'
        'Management commitmentRegular audits and reviews'
]
      ico,
  n: CheckCircle,col,
  o: r: 'text-green-400'
},
  {
  na,
  m: e: 'GDPR',stat,
  u: s: 'Compliant',descripti,
  o: n: 'General Data Protection Regulation compliance for EU data protection',detai,
  l: s: [
  'Data subject rightsPrivacy by design'
        'Data breach notificationRegular compliance audits'
]
      ico,
  n: CheckCircle,col,
  o: r: 'text-green-400'
},
  {
  na,
  m: e: 'HIPAA',stat,
  u: s: 'Compliant',descripti,
  o: n: 'Health Insurance Portability and Accountability Act compliance',detai,
  l: s: [
  'Protected health informationAdministrative safeguards'
        'Physical safeguardsTechnical safeguards'
]
      ico,
  n: CheckCircle,col,
  o: r: 'text-green-400'
},
  {
  na,
  m: e: 'PCI DSS',stat,
  u: s: 'Compliant',descripti,
  o: n: 'Payment Card Industry Data Security Standard compliance',detai,
  l: s: [
  'Cardholder data protectionVulnerability management'
        'Access controlRegular security testing'
]
      ico,
  n: CheckCircle,col,
  o: r: 'text-green-400'
},
  ]
  const securityMetrics = [
  {
  metr,
  i: c: '99.99%',lab,
  e: l: 'Uptime',descripti,
  o: n: 'Guaranteed service availability'
},
  {
  metr,
  i: c: '< 50ms',lab,
  e: l: 'Response Time',descripti,
  o: n: 'Average threat response time'
},
  {
  metr,
  i: c: '0',lab,
  e: l: 'Data Breaches',descripti,
  o: n: 'Successful breaches in 5+ years'
},
  {
  metr,
  i: c: '24/7',lab,
  e: l: 'Monitoring',descripti,
  o: n: 'Continuous security monitoring'
},
  ]
  const bestPractices = [
  {
  tit,
  l: e: 'Regular Security Training',descripti,
  o: n: 'Ongoing security awareness training for all employees',ic,
  o: n: Users;
},
  {
  tit,
  l: e: 'Security Assessments',descripti,
  o: n: 'Regular penetration testing and vulnerability assessments',ic,
  o: n: Shield;
},
  {
  tit,
  l: e: 'Incident Response',descripti,
  o: n: 'Comprehensive incident response and recovery procedures',ic,
  o: n: AlertTriangle;
},
  {
  tit,
  l: e: 'Security Updates',descripti,
  o: n: 'Regular security patches and system updates',ic,
  o: n: Zap;
},
  ]
  const toggleCompliance = (na,
  m: e: string) () => {
  setExpandedCompliance(expandedCompliance === name ? null : name)
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="Security & Compliance - Zion Tech Group"
        description="Learn about Zion Tech Group's comprehensive security measures, compliance certifications, and data protection practices."
      />
      
      {/* Hero Section */},
  }
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center";"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl mb-6">
              <Shield className="w-10 h-10 text-red-400" />
            </div>
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Security & <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">Compliance</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your data security is our top priority. We maintain the highest standards of security;
              and compliance to protect your business and maintain your trust.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Metrics */},
  }
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {securityMetrics.map((metric, index) => (
  <motion.div;
                key={metric.label},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="text-center";"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">
                  <div className="text-4xl font-bold text-white mb-2">{metric.metric}</div>
                  <div className="text-lg font-semibold text-cyan-400 mb-2">{metric.label}</div>
                  <div className="text-gray-300 text-sm">{metric.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Security Features</h2>
            <p className="text-xl text-gray-300">
              Multi-layered security approach to protect your data and systems;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
  <motion.div;
                key={feature.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="group";"
              >
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50,
  hove: r: border-red-400/50 transition-all duration-300 hove,
  r:scale-105 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl mb-6">
                    <feature.icon className="w-8 h-8 text-red-400" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {feature.description},
  }
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.features.map((item, itemIndex) => (
  <li key={itemIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {item},
  }
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Frameworks */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Compliance & Certifications</h2>
            <p className="text-xl text-gray-300">
              We maintain the highest standards of compliance across multiple frameworks;
            </p>
          </motion.div>

          <div className="space-y-6">
            {complianceFrameworks.map((framework, index) => (
  <motion.div;
                key={framework.name},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 overflow-hidden";"
              >
                <div;
                  className="className="p-6 cursor-pointer,
  hove: r:bg-slate-700/30 transition-colors duration-200";"
                  onClick={onClick={() => toggleCompliance(framework.name)},
  },
  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <framework.icon className={`w-6 h-6 ${framework.color} mr-4`} />
                      <div>
                        <h3 className="text-xl font-bold text-white">{framework.name}</h3>
                        <p className="text-gray-300 text-sm">{framework.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full mr-4">
                        {framework.status},
  }
                      </span>
                      {expandedCompliance === framework.name ? (
  <ChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
  <ChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>
                
                {expandedCompliance === framework.name && (
  <motion.div;
                    initial={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                    animate={ opaci,
  t: y: 1, heig,
  h: t: 'auto' },
  }
                    exit={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                    transition={ durati,
  o: n: 0.3 },
  }
                    className="className="px-6 pb-6 border-t border-slate-600/50";"
                  >
                    <div className="pt-4">
                      <h4 className="text-lg font-semibold text-white mb-3">Key,
  Requirement: s:</h4>
                      <ul className="space-y-2">
                        {framework.details.map((detail, detailIndex) => (
  <li key={detailIndex} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {detail},
  }
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Security Best Practices</h2>
            <p className="text-xl text-gray-300">
              We follow industry-leading security practices to ensure your protection;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            {bestPractices.map((practice, index) => (
  <motion.div;
                key={practice.title},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 },
  }
                className="className="flex items-start";"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl mr-4 flex-shrink-0">
                  <practice.icon className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{practice.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {practice.description},
  }
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Resources */},
  }
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Security Resources</h2>
            <p className="text-xl text-gray-300">
              Access our security documentation and resources;
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d: grid-cols-3 gap-8">
            <motion.div;
              initial={ opacit,
  y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.1 },
  }
              className="className="group";"
            >
              <a href="/help/security/whitepaper" className="block">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50,
  hove: r: border-red-400/50 transition-all duration-300,
  hove: r:scale-105 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl mb-6">
                    <FileText className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hov,
  e: r:text-red-400 transition-colors duration-200">
                    Security Whitepaper;
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Detailed overview of our security architecture and practices;
                  </p>
                  <div className="flex items-center text-red-400 group-hov,
  e: r:text-red-300 transition-colors duration-200">
                    <span className="text-sm font-medium">Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hov,
  e: r:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </a>
            </motion.div>

            <motion.div;
              initial={ opacit,
  y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.2 },
  }
              className="className="group";"
            >
              <a href="/help/security/checklist" className="block">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50,
  hove: r: border-red-400/50 transition-all duration-300,
  hove: r:scale-105 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl mb-6">
                    <CheckCircle className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hov,
  e: r:text-red-400 transition-colors duration-200">
                    Security Checklist;
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Essential security measures for your business;
                  </p>
                  <div className="flex items-center text-red-400 group-hov,
  e: r:text-red-300 transition-colors duration-200">
                    <span className="text-sm font-medium">View Checklist</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hov,
  e: r:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </a>
            </motion.div>

            <motion.div;
              initial={ opacit,
  y: 0, y: 20 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ durati,
  o: n: 0.8, del,
  a: y: 0.3 },
  }
              className="className="group";"
            >
              <a href="/help/security/incident-response" className="block">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50,
  hove: r: border-red-400/50 transition-all duration-300,
  hove: r:scale-105 h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hov,
  e: r:text-red-400 transition-colors duration-200">
                    Incident Response;
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Our incident response procedures and protocols;
                  </p>
                  <div className="flex items-center text-red-400 group-hov,
  e: r:text-red-300 transition-colors duration-200">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hove,
  r:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Security Team */},
  }
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Questions About Security?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our security team is available to answer your questions and provide;
              detailed information about our security measures and compliance status.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a;
                href="mail,
  t: o:security@ziontechgroup.com"
                className="className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-400 to-orange-500 text-white font-semibold rounded-lg,
  hove: r:from-red-500,
  hove: r:to-orange-600 transition-all duration-200,
  hove: r:scale-105";"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Security Team;
              </a>
              <a;
                href="/help/security"
                className="className="inline-flex items-center px-8 py-3 border border-red-400 text-red-400 font-semibold rounded-lg,
  hove: r:bg-red-400 hove,
  r:text-white transition-all duration-200";"
              >
                <FileText className="w-5 h-5 mr-2" />
                Security Documentation;
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
