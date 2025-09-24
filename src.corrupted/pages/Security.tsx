import React, { useState } from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import { ;
  Shield,;
  Lock, ;
  Eye, ;
  Key, ;
  Server, ;
  Users, ;
  CheckCircle, ;
  AlertTriangle,;
  FileText,;
  Globe,;
  Database,;
  Network,;
  Zap,;
  ArrowRight,;
  ExternalLink,;
  ChevronDown,;
  ChevronUp,;
  Mail;
} from "lucide-react"
export default function Security() {;
  const [expandedCompliance, setExpandedCompliance] = useState<string | null>(null);
  const securityFeatures = [;
    {;
      icon: Shield,title: 'Advanced Threat Protection',description: 'Multi-layered security with AI-powered threat detection and prevention',features: [;
        'Real-time threat monitoringBehavioral analysis'
        'Automated response systems24/7 security operations'
      ];
    },;
    {;
      icon: Lock,title: 'Data Encryption',description: 'End-to-end encryption for data at rest and in transit',features: [;
        'AES-256 encryptionTLS 1.3 protocols'
        'Key management systemsHardware security modules'
      ];
    },;
    {;
      icon: Users,title: 'Identity & Access Management',description: 'Comprehensive user authentication and authorization controls',features: [;
        'Multi-factor authenticationSingle sign-on (SSO)'
        'Role-based access controlPrivileged access management'
      ];
    },;
    {;
      icon: Server,title: 'Infrastructure Security',description: 'Secure cloud infrastructure with network segmentation',features: [;
        'VPC and subnet isolationWeb application firewalls'
        'DDoS protectionIntrusion detection systems'
      ];
    },;
    {;
      icon: Database,title: 'Data Protection',description: 'Comprehensive data backup, recovery, and privacy controls',;
      features: [;
        'Automated backupsPoint-in-time recovery'
        'Data classificationPrivacy by design'
      ];
    },;
    {;
      icon: Network,title: 'Network Security',description: 'Advanced network security with monitoring and controls',features: [;
        'Network segmentationTraffic analysis'
        'VPN and secure tunnelsNetwork access control'
      ];
    };
  ],;

  const complianceFrameworks = [;
    {;
      name: 'SOC 2 Type II',status: 'Certified',description: 'Service Organization Control 2 Type II certification for security, availability, and confidentiality',;
      details: [;
        'Annual third-party auditsContinuous monitoring'
        'Regular security assessmentsComprehensive reporting'
      ],;
      icon: CheckCircle,color: 'text-green-400'
    };
    {;
      name: 'ISO 27001',status: 'Certified',description: 'International standard for information security management systems',details: [;
        'Risk-based approachContinuous improvement'
        'Management commitmentRegular audits and reviews'
      ],;
      icon: CheckCircle,color: 'text-green-400'
    };
    {;
      name: 'GDPR',status: 'Compliant',description: 'General Data Protection Regulation compliance for EU data protection',details: [;
        'Data subject rightsPrivacy by design'
        'Data breach notificationRegular compliance audits'
      ],;
      icon: CheckCircle,color: 'text-green-400'
    };
    {;
      name: 'HIPAA',status: 'Compliant',description: 'Health Insurance Portability and Accountability Act compliance',details: [;
        'Protected health informationAdministrative safeguards'
        'Physical safeguardsTechnical safeguards'
      ],;
      icon: CheckCircle,color: 'text-green-400'
    };
    {;
      name: 'PCI DSS',status: 'Compliant',description: 'Payment Card Industry Data Security Standard compliance',details: [;
        'Cardholder data protectionVulnerability management'
        'Access controlRegular security testing'
      ],;
      icon: CheckCircle,color: 'text-green-400'
    };
  ];
  const securityMetrics = [;
    {;
      metric: '99.99%',label: 'Uptime',description: 'Guaranteed service availability'
    };
    {;
      metric: '< 50ms',label: 'Response Time',description: 'Average threat response time'
    };
    {;
      metric: '0',label: 'Data Breaches',description: 'Successful breaches in 5+ years'
    };
    {;
      metric: '24/7',label: 'Monitoring',description: 'Continuous security monitoring'
    };
  ];
  const bestPractices = [;
    {;
      title: 'Regular Security Training',description: 'Ongoing security awareness training for all employees',icon: Users;
    };
    {;
      title: 'Security Assessments',description: 'Regular penetration testing and vulnerability assessments',icon: Shield;
    };
    {;
      title: 'Incident Response',description: 'Comprehensive incident response and recovery procedures',icon: AlertTriangle;
    };
    {;
      title: 'Security Updates',description: 'Regular security patches and system updates',icon: Zap;
    };
  ];
  const toggleCompliance = (name: string) => {;
    setExpandedCompliance(expandedCompliance === name ? null : name)
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Security & Compliance - Zion Tech Group"
        description="Learn about Zion Tech Group's comprehensive security measures, compliance certifications, and data protection practices."
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10"></[^>]*>
        <div className="container mx-auto px-6 relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl mb-6">;
              <[^>]*/>
            </[^>]*>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Security & <span className="bg-gradient-to-r from-red-400 via-orange-500 to-yellow-600 bg-clip-text text-transparent">Compliance</[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
              Your data security is our top priority. We maintain the highest standards of security ;
              and compliance to protect your business and maintain your trust.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Security Metrics */};
      <section className="py-16">;
        <div className="container mx-auto px-6">;
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {securityMetrics.map((metric, index) => (;
              <motion.div
                key={metric.label};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">;
                  <div className="text-4xl font-bold text-white mb-2">{metric.metric}</[^>]*>
                  <div className="text-lg font-semibold text-cyan-400 mb-2">{metric.label}</[^>]*>
                  <div className="text-gray-300 text-sm">{metric.description}</[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Security Features */};
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Security Features</[^>]*>
            <p className="text-xl text-gray-300">;
              Multi-layered security approach to protect your data and systems;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {securityFeatures.map((feature, index) => (;
              <motion.div
                key={feature.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105 h-full">;
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl mb-6">;
                    <[^>]*/>
                  </[^>]*>
                  ;
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</[^>]*>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">;
                    {feature.description};
                  </[^>]*>
                  ;
                  <ul className="space-y-2">;
                    {feature.features.map((item, itemIndex) => (;
                      <li key={itemIndex} className="flex items-center text-gray-300 text-sm">;
                        <[^>]*/>
                        {item};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Compliance Frameworks */};
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Compliance & Certifications</[^>]*>
            <p className="text-xl text-gray-300">;
              We maintain the highest standards of compliance across multiple frameworks;
            </[^>]*>
          </[^>]*>

          <div className="space-y-6">;
            {complianceFrameworks.map((framework, index) => (;
              <motion.div
                key={framework.name};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div ;
                  className="[^"]*"
                  onClick={() => toggleCompliance(framework.name)};
                >;
                  <div className="flex items-center justify-between">;
                    <div className="flex items-center">;
                      <[^>]*/>
                      <div>;
                        <h3 className="text-xl font-bold text-white">{framework.name}</[^>]*>
                        <p className="text-gray-300 text-sm">{framework.description}</[^>]*>
                      </[^>]*>
                    </[^>]*>
                    <div className="flex items-center">;
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full mr-4">;
                        {framework.status};
                      </[^>]*>
                      {expandedCompliance === framework.name ? (;
                        <[^>]*/>
                      ) : (;
                        <[^>]*/>
                      )};
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
                ;
                {expandedCompliance === framework.name && (;&& (; (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }};
                    animate={{ opacity: 1, height: 'auto' }};
                    exit={{ opacity: 0, height: 0 }};
                    transition={{ duration: 0.3 }};
                    className="[^"]*"
                  >;
                    <div className="pt-4">;
                      <h4 className="text-lg font-semibold text-white mb-3">Key Requirements:</[^>]*>
                      <ul className="space-y-2">;
                        {framework.details.map((detail, detailIndex) => (;
                          <li key={detailIndex} className="flex items-center text-gray-300 text-sm">;
                            <[^>]*/>
                            {detail};
                          </[^>]*>
                        ))};
                      </[^>]*>
                    </[^>]*>
                  </[^>]*>
                )};
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Best Practices */};
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Security Best Practices</[^>]*>
            <p className="text-xl text-gray-300">;
              We follow industry-leading security practices to ensure your protection;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;
            {bestPractices.map((practice, index) => (;
              <motion.div
                key={practice.title};
                initial={{ opacity: 0, y: 20 }};
                whileInView={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.8, delay: index * 0.1 }};
                className="[^"]*"
              >;
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl mr-4 flex-shrink-0">;
                  <[^>]*/>
                </[^>]*>
                <div>;
                  <h3 className="text-lg font-bold text-white mb-2">{practice.title}</[^>]*>
                  <p className="text-gray-300 text-sm leading-relaxed">;
                    {practice.description};
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Security Resources */};
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">;
        <div className="container mx-auto px-6">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <h2 className="text-4xl font-bold text-white mb-4">Security Resources</[^>]*>
            <p className="text-xl text-gray-300">;
              Access our security documentation and resources;
            </[^>]*>
          </[^>]*>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">;
            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.1 }};
              className="[^"]*"
            >;
              <a href="/help/security/whitepaper" className="block">;
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105 h-full">;
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl mb-6">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-200">;
                    Security Whitepaper;
                  </[^>]*>
                  <p className="text-gray-300 text-sm mb-4">;
                    Detailed overview of our security architecture and practices;
                  </[^>]*>
                  <div className="flex items-center text-red-400 group-hover:text-red-300 transition-colors duration-200">;
                    <span className="text-sm font-medium">Read More</[^>]*>
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.2 }};
              className="[^"]*"
            >;
              <a href="/help/security/checklist" className="block">;
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105 h-full">;
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl mb-6">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-200">;
                    Security Checklist;
                  </[^>]*>
                  <p className="text-gray-300 text-sm mb-4">;
                    Essential security measures for your business;
                  </[^>]*>
                  <div className="flex items-center text-red-400 group-hover:text-red-300 transition-colors duration-200">;
                    <span className="text-sm font-medium">View Checklist</[^>]*>
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>

            <motion.div
              initial={{ opacity: 0, y: 20 }};
              whileInView={{ opacity: 1, y: 0 }};
              transition={{ duration: 0.8, delay: 0.3 }};
              className="[^"]*"
            >;
              <a href="/help/security/incident-response" className="block">;
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover:border-red-400/50 transition-all duration-300 hover:scale-105 h-full">;
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl mb-6">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-red-400 transition-colors duration-200">;
                    Incident Response;
                  </[^>]*>
                  <p className="text-gray-300 text-sm mb-4">;
                    Our incident response procedures and protocols;
                  </[^>]*>
                  <div className="flex items-center text-red-400 group-hover:text-red-300 transition-colors duration-200">;
                    <span className="text-sm font-medium">Learn More</[^>]*>
                    <[^>]*/>
                  </[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Contact Security Team */};
      <section className="py-20">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            whileInView={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
          >;
            <h2 className="text-4xl font-bold text-white mb-6">;
              Questions About Security?;
            </[^>]*>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">;
              Our security team is available to answer your questions and provide ;
              detailed information about our security measures and compliance status.;
            </[^>]*>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a;
                href="mailto:security@ziontechgroup.com"
                className="[^"]*"
              >;
                <[^>]*/>
                Contact Security Team;
              </[^>]*>
              <a;
                href="/help/security"
                className="[^"]*"
              >;
                <[^>]*/>
                Security Documentation;
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};
