import * as React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Database, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  DollarSign, 
  Clock, 
  Award,
  Users,
  Smartphone,
  Building,
  TrendingUp,
  Target,
  Cloud,
  Server,
  BarChart3,
  Settings,
  Monitor,
  HardDrive,
  AlertTriangle,
  Key,
  FileText,
  Network,
  CreditCard,
  Heart
} from 'lucide-react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};

const cybersecurityServices = [
  {
    id: 1,
    title: 'Zero Trust Security Architecture',
    description: 'Implement comprehensive zero trust security model with continuous verification, least privilege access, and micro-segmentation.',
    icon: Shield,
    category: 'Architecture',
    price: 'Starting at $15,000/month',
    marketPrice: '$30,000-60,000/month',
    setupTime: '8-16 weeks',
    features: [
      'Identity and access management (IAM)',
      'Multi-factor authentication (MFA)',
      'Network micro-segmentation',
      'Continuous monitoring & verification',
      'Privileged access management (PAM)',
      'Device trust verification',
      'Data loss prevention (DLP)',
      'Security orchestration & automation'
    ],
    benefits: [
      'Reduce security breaches by 80%',
      'Improve compliance posture by 90%',
      'Enable secure remote work',
      'Minimize attack surface'
    ],
    targetUsers: 'Enterprises, Government, Healthcare, Finance'
  },
  {
    id: 2,
    title: 'Advanced Threat Detection & Response',
    description: 'AI-powered threat detection, incident response, and security orchestration with 24/7 monitoring and rapid response capabilities.',
    icon: Eye,
    category: 'Threat Detection',
    price: 'Starting at $12,000/month',
    marketPrice: '$25,000-50,000/month',
    setupTime: '6-12 weeks',
    features: [
      'AI-powered threat hunting',
      'Behavioral analytics',
      'Real-time threat intelligence',
      'Automated incident response',
      'Security information & event management (SIEM)',
      'Endpoint detection & response (EDR)',
      'Network traffic analysis',
      'Threat intelligence feeds'
    ],
    benefits: [
      'Detect threats 10x faster',
      'Reduce false positives by 70%',
      'Automate 80% of response actions',
      'Improve mean time to detection'
    ],
    targetUsers: 'Large Enterprises, Critical Infrastructure, Government'
  },
  {
    id: 3,
    title: 'Cloud Security & Compliance',
    description: 'Comprehensive cloud security solutions including CSPM, CWPP, and compliance management for AWS, Azure, and GCP.',
    icon: Cloud,
    category: 'Cloud Security',
    price: 'Starting at $10,000/month',
    marketPrice: '$20,000-40,000/month',
    setupTime: '4-8 weeks',
    features: [
      'Cloud security posture management (CSPM)',
      'Cloud workload protection (CWPP)',
      'Container security',
      'Serverless security',
      'Cloud access security broker (CASB)',
      'Data encryption & key management',
      'Compliance monitoring',
      'Multi-cloud security governance'
    ],
    benefits: [
      'Secure cloud migration',
      'Maintain compliance standards',
      'Reduce cloud security risks by 85%',
      'Optimize cloud security costs'
    ],
    targetUsers: 'Cloud-First Companies, Enterprises, SaaS Providers'
  },
  {
    id: 4,
    title: 'Penetration Testing & Red Team Services',
    description: 'Comprehensive security assessments including penetration testing, red team exercises, and vulnerability management.',
    icon: Target,
    category: 'Testing',
    price: 'Starting at $8,000/month',
    marketPrice: '$15,000-30,000/month',
    setupTime: '2-6 weeks',
    features: [
      'Web application penetration testing',
      'Network penetration testing',
      'Red team exercises',
      'Social engineering assessments',
      'Physical security testing',
      'Mobile application testing',
      'IoT security testing',
      'Compliance testing (PCI, HIPAA, SOX)'
    ],
    benefits: [
      'Identify vulnerabilities before attackers',
      'Improve security posture by 60%',
      'Meet compliance requirements',
      'Reduce security risks'
    ],
    targetUsers: 'All Industries, Compliance-Heavy Organizations'
  },
  {
    id: 5,
    title: 'Security Operations Center (SOC)',
    description: 'Managed security operations center with 24/7 monitoring, incident response, and threat hunting capabilities.',
    icon: Monitor,
    category: 'SOC',
    price: 'Starting at $20,000/month',
    marketPrice: '$40,000-80,000/month',
    setupTime: '4-8 weeks',
    features: [
      '24/7 security monitoring',
      'Incident response & forensics',
      'Threat hunting & analysis',
      'Vulnerability management',
      'Security tool management',
      'Compliance reporting',
      'Threat intelligence integration',
      'Custom security dashboards'
    ],
    benefits: [
      'Round-the-clock protection',
      'Faster incident response',
      'Expert security team',
      'Reduced security costs by 40%'
    ],
    targetUsers: 'Mid to Large Enterprises, Critical Infrastructure'
  },
  {
    id: 6,
    title: 'Data Protection & Privacy',
    description: 'Comprehensive data protection solutions including encryption, privacy compliance, and data governance.',
    icon: Database,
    category: 'Data Protection',
    price: 'Starting at $8,000/month',
    marketPrice: '$15,000-30,000/month',
    setupTime: '4-8 weeks',
    features: [
      'Data encryption at rest and in transit',
      'Data loss prevention (DLP)',
      'Privacy compliance (GDPR, CCPA)',
      'Data classification & tagging',
      'Backup & recovery solutions',
      'Data anonymization & pseudonymization',
      'Privacy impact assessments',
      'Data governance frameworks'
    ],
    benefits: [
      'Protect sensitive data',
      'Ensure regulatory compliance',
      'Reduce data breach risks by 90%',
      'Build customer trust'
    ],
    targetUsers: 'Healthcare, Finance, E-commerce, SaaS Companies'
  },
  {
    id: 7,
    title: 'Identity & Access Management',
    description: 'Comprehensive IAM solutions including single sign-on, multi-factor authentication, and privileged access management.',
    icon: Key,
    category: 'IAM',
    price: 'Starting at $6,000/month',
    marketPrice: '$12,000-25,000/month',
    setupTime: '3-6 weeks',
    features: [
      'Single sign-on (SSO)',
      'Multi-factor authentication (MFA)',
      'Privileged access management (PAM)',
      'Identity governance & administration',
      'Directory services integration',
      'Role-based access control (RBAC)',
      'Identity analytics',
      'Password management'
    ],
    benefits: [
      'Improve user experience',
      'Reduce security risks by 70%',
      'Streamline access management',
      'Ensure compliance'
    ],
    targetUsers: 'All Organizations, Remote Workforces'
  },
  {
    id: 8,
    title: 'Security Awareness Training',
    description: 'Comprehensive security awareness training programs to educate employees and reduce human error risks.',
    icon: Users,
    category: 'Training',
    price: 'Starting at $3,000/month',
    marketPrice: '$6,000-12,000/month',
    setupTime: '1-2 weeks',
    features: [
      'Phishing simulation campaigns',
      'Interactive security training modules',
      'Compliance training programs',
      'Security awareness assessments',
      'Custom training content',
      'Progress tracking & reporting',
      'Gamification elements',
      'Multi-language support'
    ],
    benefits: [
      'Reduce human error by 60%',
      'Improve security culture',
      'Meet compliance requirements',
      'Reduce phishing success rates'
    ],
    targetUsers: 'All Organizations, Compliance-Heavy Industries'
  }
];

const complianceFrameworks = [
  {
    name: "SOC 2",
    description: "Security, availability, and confidentiality controls",
    icon: Shield
  },
  {
    name: "ISO 27001",
    description: "Information security management system",
    icon: FileText
  },
  {
    name: "PCI DSS",
    description: "Payment card industry data security",
    icon: CreditCard
  },
  {
    name: "HIPAA",
    description: "Healthcare data protection",
    icon: Heart
  },
  {
    name: "GDPR",
    description: "General data protection regulation",
    icon: Globe
  },
  {
    name: "NIST",
    description: "Cybersecurity framework",
    icon: Settings
  }
];

const industries = [
  {
    title: "Healthcare",
    description: "HIPAA compliance and medical data protection",
    icon: "🏥",
    threats: ["Ransomware", "Data breaches", "Insider threats", "Medical device attacks"]
  },
  {
    title: "Finance",
    description: "PCI DSS compliance and financial data security",
    icon: "🏦",
    threats: ["Fraud", "Payment card attacks", "Insider trading", "Regulatory violations"]
  },
  {
    title: "Government",
    description: "National security and citizen data protection",
    icon: "🏛️",
    threats: ["Nation-state attacks", "Espionage", "Critical infrastructure", "Data leaks"]
  },
  {
    title: "E-commerce",
    description: "Customer data and payment security",
    icon: "🛒",
    threats: ["Payment fraud", "Account takeovers", "Data breaches", "DDoS attacks"]
  },
  {
    title: "Manufacturing",
    description: "Industrial control systems and IP protection",
    icon: "🏭",
    threats: ["OT attacks", "IP theft", "Supply chain", "Ransomware"]
  },
  {
    title: "Education",
    description: "Student data and research protection",
    icon: "🎓",
    threats: ["Student data breaches", "Research theft", "Ransomware", "Phishing"]
  }
];

export default function CybersecurityAdvancedPage() {
  return (
    <Layout
      title="Advanced Cybersecurity Services - Zion Tech Group | Zero Trust, SOC, Threat Detection"
      description="Comprehensive cybersecurity services including zero trust architecture, threat detection, SOC services, and compliance management. Protect your business with advanced security solutions."
      keywords="cybersecurity services, zero trust, threat detection, SOC, penetration testing, compliance, data protection, IAM"
      canonical="https://ziontechgroup.com/cybersecurity-advanced"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-orange-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Advanced Cybersecurity Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-red-100">
                Protect your business with cutting-edge cybersecurity solutions. From zero trust architecture to advanced threat detection, 
                we deliver comprehensive security services that keep your data and systems safe from evolving threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Get Security Assessment
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors text-lg"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security solutions tailored to your business needs with competitive pricing and proven results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cybersecurityServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{service.setupTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl font-bold text-red-600">{service.price}</span>
                      <span className="text-sm text-gray-500 line-through">{service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-medium">
                      Save up to 50% vs market rate
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <ArrowRight className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <div className="text-sm text-gray-600">
                      <strong>Target Users:</strong> {service.targetUsers}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Link
                      href="/contact"
                      className="flex-1 bg-red-600 text-white px-4 py-2 rounded text-center hover:bg-red-700 transition-colors font-semibold"
                    >
                      Get Quote
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="flex-1 border border-red-600 text-red-600 px-4 py-2 rounded text-center hover:bg-red-50 transition-colors font-semibold"
                    >
                      Learn More
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Frameworks */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance Frameworks
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We help you achieve and maintain compliance with major security and privacy frameworks.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {complianceFrameworks.map((framework, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <framework.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{framework.name}</h3>
                  <p className="text-gray-600">{framework.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Industries We Protect
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our cybersecurity solutions are tailored to meet the unique security needs of various industries.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{industry.title}</h3>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Common Threats:</h4>
                    <ul className="space-y-1">
                      {industry.threats.map((threat, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <AlertTriangle className="w-3 h-3 text-red-500 mr-2 flex-shrink-0" />
                          {threat}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Cybersecurity Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge security technology with deep expertise to deliver solutions that provide real protection.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Award,
                  title: "Security Expertise",
                  description: "Certified security professionals with 10+ years experience"
                },
                {
                  icon: Shield,
                  title: "Proven Track Record",
                  description: "Successfully protected 500+ organizations"
                },
                {
                  icon: DollarSign,
                  title: "Competitive Pricing",
                  description: "50% lower than market rates with transparent pricing"
                },
                {
                  icon: Clock,
                  title: "24/7 Support",
                  description: "Round-the-clock monitoring and incident response"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl mb-8 text-red-100 max-w-3xl mx-auto">
                Don't wait for a security breach. Protect your business with our comprehensive cybersecurity solutions. 
                Get started with a free security assessment and discover how we can help secure your digital assets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/contact"
                  className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
                >
                  Get Free Security Assessment
                </Link>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors text-lg"
                >
                  Call {contactInfo.phone}
                </a>
              </div>
              
              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>{contactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}