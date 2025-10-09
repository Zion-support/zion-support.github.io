import React from 'react';
import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Zap, 
  Brain,
  Target,
  TrendingUp,
  Users,
  Database,
  Smartphone,
  Globe,
  Clock,
  Star,
  Award,
  Phone,
  Mail,
  MapPin,
  Activity,
  FileText,
  Settings
} from 'lucide-react';

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms that detect and respond to cyber threats in real-time, learning from patterns and adapting to new attack vectors.',
      benefits: ['99.9% threat detection accuracy', 'Real-time monitoring', 'Predictive threat analysis', 'Zero false positives']
    },
    {
      icon: Shield,
      title: 'Automated Response',
      description: 'Instant automated responses to security incidents with AI-powered decision making and containment strategies.',
      benefits: ['Sub-second response time', 'Automated incident containment', 'Intelligent threat hunting', 'Self-healing systems']
    },
    {
      icon: Eye,
      title: 'Behavioral Analytics',
      description: 'Monitor user and system behavior patterns to identify anomalies and potential insider threats using advanced AI algorithms.',
      benefits: ['User behavior analysis', 'Anomaly detection', 'Insider threat prevention', 'Risk scoring']
    },
    {
      icon: Lock,
      title: 'Zero Trust Security',
      description: 'Implement zero trust architecture with AI-powered continuous verification and adaptive access controls.',
      benefits: ['Continuous verification', 'Adaptive access controls', 'Micro-segmentation', 'Identity management']
    }
  ];

  const securityServices = [
    {
      title: 'SOC as a Service',
      description: '24/7 Security Operations Center with AI-powered monitoring and response capabilities.',
      price: 'Starting at $2,499/month',
      features: ['24/7 monitoring', 'AI threat detection', 'Incident response', 'Compliance reporting'],
      icon: Activity
    },
    {
      title: 'Vulnerability Assessment',
      description: 'Comprehensive vulnerability scanning and assessment with AI-powered prioritization and remediation guidance.',
      price: 'Starting at $999/month',
      features: ['Automated scanning', 'Risk prioritization', 'Remediation guidance', 'Compliance mapping'],
      icon: Target
    },
    {
      title: 'Penetration Testing',
      description: 'AI-enhanced penetration testing that simulates real-world attacks and identifies security weaknesses.',
      price: 'Starting at $1,499/month',
      features: ['Automated testing', 'Manual verification', 'Detailed reporting', 'Remediation support'],
      icon: Zap
    },
    {
      title: 'Compliance Management',
      description: 'Automated compliance monitoring and reporting for GDPR, HIPAA, SOX, and other regulatory requirements.',
      price: 'Starting at $799/month',
      features: ['Automated compliance checks', 'Real-time reporting', 'Audit preparation', 'Policy management'],
      icon: FileText
    }
  ];

  const threatTypes = [
    { name: 'Ransomware', description: 'AI-powered detection and prevention of ransomware attacks', protection: '99.8%' },
    { name: 'Phishing', description: 'Advanced email security with AI-based threat detection', protection: '99.9%' },
    { name: 'DDoS Attacks', description: 'Intelligent traffic analysis and automated mitigation', protection: '100%' },
    { name: 'Insider Threats', description: 'Behavioral analytics to detect malicious insider activities', protection: '95%' },
    { name: 'Zero-Day Exploits', description: 'AI-based detection of previously unknown vulnerabilities', protection: '90%' },
    { name: 'Advanced Persistent Threats', description: 'Long-term threat hunting and detection capabilities', protection: '98%' }
  ];

  const industries = [
    { name: 'Healthcare', description: 'HIPAA compliance, patient data protection, medical device security' },
    { name: 'Finance', description: 'PCI DSS compliance, fraud detection, transaction security' },
    { name: 'Government', description: 'FISMA compliance, classified data protection, national security' },
    { name: 'E-commerce', description: 'Payment security, customer data protection, fraud prevention' },
    { name: 'Manufacturing', description: 'Industrial control systems, supply chain security, IoT protection' },
    { name: 'Education', description: 'Student data protection, FERPA compliance, network security' }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection Rate', icon: Shield },
    { number: '<1s', label: 'Response Time', icon: Zap },
    { number: '24/7', label: 'Monitoring Coverage', icon: Clock },
    { number: '1000+', label: 'Threats Blocked Daily', icon: Target }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center bg-red-600/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            AI-Powered Cybersecurity
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Cybersecurity
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Protect your business with next-generation AI-powered cybersecurity solutions that detect, prevent, and respond to threats in real-time.
            Stay ahead of cybercriminals with our advanced machine learning security platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-red-600 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all"
            >
              Get Security Assessment
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-red-400 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI cybersecurity platform combines machine learning, behavioral analytics, and automated response to provide comprehensive protection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity services powered by AI and machine learning technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-red-500/50 transition-all">
                <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="text-2xl font-bold text-red-400 mb-4">{service.price}</div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Threat Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered security platform protects against the most sophisticated cyber threats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threatTypes.map((threat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{threat.name}</h3>
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {threat.protection}
                  </span>
                </div>
                <p className="text-gray-300">{threat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized cybersecurity solutions for different industries and compliance requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Security Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your organization's needs. All plans include 24/7 monitoring and support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Essential</h3>
              <div className="text-4xl font-bold text-red-400 mb-6">$799<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic threat detection
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email security
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Firewall management
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic reporting
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all text-center block"
              >
                Get Started
              </a>
            </div>

            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-white mb-6">$2,499<span className="text-lg text-red-200">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  AI threat detection
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  24/7 SOC monitoring
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Incident response
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Compliance reporting
                </li>
                <li className="flex items-center text-white">
                  <CheckCircle className="w-5 h-5 text-green-300 mr-3" />
                  Vulnerability scanning
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-white text-red-600 py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-all text-center block"
              >
                Get Started
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-red-400 mb-6">Custom<span className="text-lg text-gray-300">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Full AI security suite
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated security team
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom integrations
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  On-premise deployment
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  White-glove service
                </li>
              </ul>
              <a
                href="/contact"
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all text-center block"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait for a cyber attack. Protect your business with our advanced AI-powered cybersecurity solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-red-600 text-red-300 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all inline-flex items-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPage;