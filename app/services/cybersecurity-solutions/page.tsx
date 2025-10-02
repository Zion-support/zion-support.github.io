import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Target,
  Phone,
  Mail,
  MapPin,
  Zap,
  Rocket,
  Award,
  Building,
  CreditCard,
  Database,
  BarChart3,
  FileText,
  Smartphone,
  Laptop,
  Monitor,
  Settings,
  PieChart,
  Activity,
  Mic,
  Network,
  Cpu,
  HardDrive,
  Wifi,
  Key,
  CheckSquare,
  Globe,
  Users,
  TrendingUp,
  Heart,
  ShoppingCart,
  Brain,
  Code,
  Cloud,
  Server,
  Layers,
  GitBranch,
  Container,
  MessageSquare,
  Search,
  Camera,
  Layers as Stack,
  Bug,
  UserCheck,
  FileShield
} from 'lucide-react';

export default function CybersecuritySolutionsPage() {
  const title = 'Cybersecurity Solutions & Services — Zion Tech Group';
  description: 'Enterprise cybersecurity solutions including penetration testing, security audits, compliance management, threat detection, and incident response. Protect your business with proven security measures.';

  const cybersecurityServices = [
    {
      name: 'Penetration Testing & Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities and strengthen your defenses',
      icon: Bug,
      features: [
        'Web application penetration testing',
        'Network infrastructure security assessment',
        'Social engineering and phishing simulations',
        'Mobile application security testing',
        'Cloud security configuration review',
        'Detailed remediation recommendations'
      ],
      pricing: '$5,000 - $50,000/project',
      delivery: '2-6 weeks',
      category: 'Assessment',
      benefits: 'Identify and fix vulnerabilities before attackers exploit them',
      marketPrice: '$10,000 - $100,000/project',
      link: '/services/cybersecurity-solutions/penetration-testing'
    },
    {
      name: 'Security Operations Center (SOC)',
      description: '24/7 threat monitoring, detection, and response with advanced SIEM and SOAR capabilities',
      icon: Eye,
      features: [
        'Real-time threat monitoring and analysis',
        'Security Information and Event Management (SIEM)',
        'Automated incident response workflows',
        'Threat intelligence integration',
        'Vulnerability management and patching',
        'Compliance reporting and documentation'
      ],
      pricing: '$15,000 - $100,000/month',
      delivery: '4-8 weeks',
      category: 'SOC',
      benefits: 'Detect and respond to threats 24/7, reduce incident response time by 80%',
      marketPrice: '$30,000 - $200,000/month',
      link: '/services/cybersecurity-solutions/soc'
    },
    {
      name: 'Compliance & Risk Management',
      description: 'Achieve and maintain compliance with GDPR, HIPAA, SOX, PCI DSS, and other regulations',
      icon: FileShield,
      features: [
        'Compliance gap analysis and assessment',
        'Policy development and implementation',
        'Risk assessment and management framework',
        'Audit preparation and support',
        'Employee training and awareness programs',
        'Continuous compliance monitoring'
      ],
      pricing: '$10,000 - $75,000/project',
      delivery: '4-12 weeks',
      category: 'Compliance',
      benefits: 'Achieve compliance, avoid fines, improve security posture',
      marketPrice: '$20,000 - $150,000/project',
      link: '/services/cybersecurity-solutions/compliance'
    },
    {
      name: 'Identity & Access Management (IAM)',
      description: 'Secure user authentication, authorization, and access control across all systems',
      icon: UserCheck,
      features: [
        'Multi-factor authentication (MFA) implementation',
        'Single Sign-On (SSO) solutions',
        'Privileged Access Management (PAM)',
        'Role-based access control (RBAC)',
        'Identity governance and lifecycle management',
        'Integration with existing systems and applications'
      ],
      pricing: '$20,000 - $150,000/project',
      delivery: '6-16 weeks',
      category: 'IAM',
      benefits: 'Reduce unauthorized access by 95%, improve user experience',
      marketPrice: '$40,000 - $300,000/project',
      link: '/services/cybersecurity-solutions/iam'
    },
    {
      name: 'Data Protection & Privacy',
      description: 'Comprehensive data protection with encryption, backup, and privacy compliance',
      icon: Lock,
      features: [
        'Data classification and discovery',
        'Encryption at rest and in transit',
        'Data loss prevention (DLP) solutions',
        'Backup and disaster recovery planning',
        'Privacy impact assessments',
        'Data retention and deletion policies'
      ],
      pricing: '$15,000 - $100,000/project',
      delivery: '4-12 weeks',
      category: 'Data Protection',
      benefits: 'Protect sensitive data, ensure privacy compliance, prevent data breaches',
      marketPrice: '$30,000 - $200,000/project',
      link: '/services/cybersecurity-solutions/data-protection'
    },
    {
      name: 'Incident Response & Forensics',
      description: 'Rapid response to security incidents with digital forensics and recovery services',
      icon: AlertTriangle,
      features: [
        '24/7 incident response team',
        'Digital forensics and evidence collection',
        'Malware analysis and reverse engineering',
        'Breach notification and communication',
        'Business continuity planning',
        'Post-incident review and improvements'
      ],
      pricing: '$25,000 - $200,000/incident',
      delivery: 'Immediate response',
      category: 'Incident Response',
      benefits: 'Minimize damage, preserve evidence, restore operations quickly',
      marketPrice: '$50,000 - $500,000/incident',
      link: '/services/cybersecurity-solutions/incident-response'
    }
  ];

  const securityFrameworks = [
    { name: 'ISO 27001', icon: Shield, description: 'Information security management' },
    { name: 'NIST', icon: CheckSquare, description: 'Cybersecurity framework' },
    { name: 'SOC 2', icon: FileText, description: 'Security and availability controls' },
    { name: 'PCI DSS', icon: CreditCard, description: 'Payment card security' },
    { name: 'HIPAA', icon: Heart, description: 'Healthcare data protection' },
    { name: 'GDPR', icon: Globe, description: 'Data privacy regulation' }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="cybersecurity, penetration testing, SOC, compliance, IAM, data protection, incident response, security audit" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/services/cybersecurity-solutions" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://ziontechgroup.com/services/cybersecurity-solutions" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cybersecurity Solutions
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
                Protect your business with enterprise-grade cybersecurity solutions including penetration testing, SOC services, compliance management, and incident response
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="#services" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore Services
                </Link>
                <Link href="/contact" className="border border-white text-white hover:bg-white hover:text-red-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Security Frameworks Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Security Frameworks & Standards
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We help you achieve and maintain compliance with industry-leading security frameworks
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {securityFrameworks.map((framework, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gray-100 rounded-xl p-6 mb-4 group-hover:bg-red-50 transition-colors">
                    <framework.icon className="w-12 h-12 text-red-600 mx-auto mb-2" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{framework.name}</h3>
                  <p className="text-sm text-gray-600">{framework.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cybersecurity Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security solutions to protect your business from evolving cyber threats
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cybersecurityServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-red-100 rounded-lg p-3 mr-4">
                        <service.icon className="w-8 h-8 text-red-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                        <span className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t pt-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Our Pricing:</span>
                        <span className="font-semibold text-green-600">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Market Rate:</span>
                        <span className="text-sm text-gray-600">{service.marketPrice}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Delivery:</span>
                        <span className="text-sm font-medium text-blue-600">{service.delivery}</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Benefits:</strong> {service.benefits}
                      </p>
                    </div>

                    <Link href={service.link} className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Secure Your Business Today
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Don't wait for a breach. Let our cybersecurity experts help you build a robust defense against evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Security Assessment
              </Link>
              <a href="tel:+13024640950" className="border border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 rounded-lg font-semibold transition-colors">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Phone</h3>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300">+1 302 464 0950</a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-2" />
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-blue-400">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}