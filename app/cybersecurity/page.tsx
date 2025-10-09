import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Zap, 
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  Mail,
  Clock,
  Users,
  Settings,
  Globe,
  Smartphone,
  Monitor,
  HardDrive,
  Key,
  Search,
  FileText
} from 'lucide-react';

const CybersecurityPage: React.FC = () => {
  const services = [
    {
      icon: Shield,
      title: 'Security Assessment',
      description: 'Comprehensive security audits to identify vulnerabilities and compliance gaps.',
      price: '$2,999/assessment',
      features: ['Penetration testing', 'Vulnerability scanning', 'Compliance audit', 'Risk assessment']
    },
    {
      icon: Lock,
      title: 'Managed Security Services',
      description: '24/7 monitoring and management of your security infrastructure.',
      price: '$1,299/month',
      features: ['24/7 SOC monitoring', 'Threat detection', 'Incident response', 'Security updates']
    },
    {
      icon: Eye,
      title: 'Threat Intelligence',
      description: 'Advanced threat detection and intelligence gathering to stay ahead of attackers.',
      price: '$899/month',
      features: ['Threat hunting', 'IOC monitoring', 'Attack simulation', 'Intelligence reports']
    },
    {
      icon: Key,
      title: 'Identity & Access Management',
      description: 'Secure user authentication and access control across all systems.',
      price: '$599/month',
      features: ['Multi-factor authentication', 'Single sign-on', 'Privileged access', 'User provisioning']
    },
    {
      icon: FileText,
      title: 'Compliance Management',
      description: 'Ensure compliance with GDPR, HIPAA, SOX, and other regulatory requirements.',
      price: '$1,499/month',
      features: ['Compliance monitoring', 'Policy management', 'Audit preparation', 'Documentation']
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: 'Rapid response to security incidents with expert forensic analysis.',
      price: '$299/hour',
      features: ['24/7 response team', 'Forensic analysis', 'Evidence collection', 'Recovery planning']
    }
  ];

  const benefits = [
    'Protect against 99.9% of cyber threats',
    'Reduce security incidents by 80%',
    'Ensure regulatory compliance',
    'Minimize business downtime',
    'Protect sensitive data',
    'Build customer trust'
  ];

  const complianceStandards = [
    {
      title: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data',
      icon: Globe
    },
    {
      title: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      icon: Heart
    },
    {
      title: 'SOX',
      description: 'Sarbanes-Oxley Act compliance for financial reporting',
      icon: DollarSign
    },
    {
      title: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard compliance',
      icon: CreditCard
    },
    {
      title: 'ISO 27001',
      description: 'International standard for information security management',
      icon: Award
    },
    {
      title: 'SOC 2',
      description: 'Service Organization Control 2 compliance for service providers',
      icon: Shield
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$499',
      period: '/month',
      description: 'Basic security for small businesses',
      features: [
        'Firewall management',
        'Antivirus protection',
        'Security monitoring',
        'Monthly reports',
        'Email support',
        'Basic compliance'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Comprehensive security for growing companies',
      features: [
        'Advanced threat protection',
        '24/7 monitoring',
        'Incident response',
        'Compliance management',
        'Priority support',
        'Security training'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'Full-service security for large organizations',
      features: [
        'Custom security solutions',
        'Dedicated security team',
        'Advanced threat hunting',
        'Full compliance suite',
        '24/7 phone support',
        'Custom reporting'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            Cybersecurity Solutions
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Advanced Cybersecurity Protection
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your business from evolving cyber threats with our comprehensive security solutions. 
            From threat detection to compliance management, we provide enterprise-grade security 
            that keeps your data and systems safe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-purple-700 transition-all flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="border-2 border-red-600 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all"
            >
              Get Security Assessment
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
              <div className="text-gray-300">Threat Protection</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">80%</div>
              <div className="text-gray-300">Incident Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
              <div className="text-gray-300">Compliance</div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Cybersecurity Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-red-400 transition-all">
                <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <div className="text-red-400 font-semibold mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Compliance & Standards
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <standard.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{standard.title}</h3>
                <p className="text-gray-300">{standard.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              Why Choose Our Cybersecurity Services?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Security Pricing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all ${
                plan.popular 
                  ? 'border-red-400 scale-105' 
                  : 'border-white/20 hover:border-red-400'
              }`}>
                {plan.popular && (
                  <div className="bg-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                    Most Popular
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-purple-600 text-white hover:from-red-700 hover:to-purple-700'
                      : 'border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't Wait for a Security Breach
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Protect your business today with our comprehensive cybersecurity solutions. 
              Contact us for a free security assessment and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all"
              >
                Free Security Assessment
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CybersecurityPage;