<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { CheckCircle, AlertTriangle, ShieldCheck, Eye, Zap } from 'lucide-react';

<<<<<<< HEAD
const AICybersecurityPage: React.FC = () => {
  const securityServices = [
    {
      title: 'AI-Powered Threat Detection System',
      description: 'Advanced machine learning-based threat detection and response system that identifies and neutralizes cyber threats in real-time.',
      icon: '🛡️',
      price: '$2,499/month',
      features: [
        'Real-time threat monitoring',
        'Behavioral analysis',
        'Automated incident response',
        'Zero-day attack detection',
        'Network traffic analysis',
        'Endpoint protection',
        'Threat intelligence integration',
        '24/7 SOC monitoring'
      ],
      benefits: [
        'Detect threats 10x faster',
        'Reduce false positives by 80%',
        'Prevent 99.5% of attacks',
        'Save $2M+ annually in prevented breaches'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Threat Detection',
      technologies: ['Machine Learning', 'SIEM', 'EDR', 'Python', 'TensorFlow', 'Elasticsearch'],
      compliance: ['SOC 2', 'ISO 27001', 'GDPR', 'HIPAA']
    },
    {
      title: 'AI Security Operations Center (SOC)',
      description: 'Comprehensive AI-driven security operations center providing 24/7 monitoring, incident response, and threat hunting services.',
      icon: '🔍',
      price: '$3,999/month',
      features: [
        '24/7 security monitoring',
=======
const AICybersecurityPage: React.FC = memo(() => {}
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {}
    setIsLoaded(true);
  }, []);

  const features = [
    {}
      icon: Shield,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms that detect and prevent cyber threats in real-time with 99.9% accuracy',
      color: 'text-purple-400'},
    {}
      icon: Brain,
      title: 'Behavioral Analysis',
      description: 'Machine learning models that analyze user behavior to identify anomalies and potential threats',
      color: 'text-blue-400'},
    {}
      icon: Lock,
      title: 'Zero Trust Security',
      description: 'Implement zero trust architecture with continuous verification and least privilege access',
      color: 'text-green-400'},
    {}
      icon: AlertTriangle,
      title: 'Automated Response',
      description: 'Automatically block threats, isolate compromised systems, and alert security teams',
      color: 'text-orange-400'}
  ];

  const pricingPlans = [
    {}
      name: 'Essential',
      price: '$499',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 100 endpoints',
        'Basic threat detection',
        'Email security',
        'Standard support',
        'Basic reporting',
        '1 security analyst'
      ],
      popular: false;
    },
    {
    {}
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500 endpoints',
        'Advanced AI detection',
        'Real-time monitoring',
        'Priority support',
        'Advanced analytics',
        'Automated response',
        '3 security analysts'
      ],
      popular: true;
    },
    {
    {}
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
        'AI-powered threat hunting',
        'Incident response automation',
        'Vulnerability management',
        'Security orchestration',
        'Compliance reporting',
        'Threat intelligence feeds',
        'Dedicated security analysts'
      ],
<<<<<<< HEAD
      benefits: [
        'Reduce incident response time by 90%',
        'Improve threat detection accuracy',
        'Ensure compliance automatically',
        'Provide expert security guidance'
      ],
      marketPrice: '$6,000-12,000/month',
      category: 'Managed Security',
      technologies: ['SOAR', 'SIEM', 'AI/ML', 'Python', 'Splunk', 'QRadar'],
      compliance: ['SOC 2 Type II', 'ISO 27001', 'NIST', 'PCI DSS']
    },
    {
      title: 'AI-Powered Vulnerability Assessment',
      description: 'Automated vulnerability scanning and risk assessment using AI to identify, prioritize, and remediate security weaknesses.',
      icon: '🔒',
      price: '$1,299/month',
      features: [
        'Automated vulnerability scanning',
        'Risk prioritization AI',
        'Remediation recommendations',
        'Compliance checking',
        'Asset discovery',
        'Configuration management',
        'Patch management',
        'Security reporting'
      ],
      benefits: [
        'Identify vulnerabilities 5x faster',
        'Reduce risk exposure by 70%',
        'Automate compliance reporting',
        'Lower remediation costs'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Vulnerability Management',
      technologies: ['Nessus', 'OpenVAS', 'AI/ML', 'Python', 'Nmap', 'Custom Scripts'],
      compliance: ['OWASP', 'NIST', 'CIS Controls', 'ISO 27001']
    },
    {
      title: 'AI Identity & Access Management',
      description: 'Intelligent identity and access management solution with behavioral analytics, risk-based authentication, and automated provisioning.',
      icon: '👤',
      price: '$1,899/month',
      features: [
        'Risk-based authentication',
        'Behavioral analytics',
        'Automated provisioning',
        'Privileged access management',
        'Single sign-on (SSO)',
        'Multi-factor authentication',
        'Access governance',
        'Compliance reporting'
      ],
      benefits: [
        'Reduce identity-related breaches by 85%',
        'Improve user experience',
        'Automate access management',
        'Ensure compliance'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Identity Management',
      technologies: ['OAuth 2.0', 'SAML', 'LDAP', 'AI/ML', 'Python', 'Active Directory'],
      compliance: ['SOX', 'GDPR', 'HIPAA', 'SOC 2']
    },
    {
      title: 'AI Data Loss Prevention (DLP)',
      description: 'Advanced data loss prevention system using AI to monitor, detect, and prevent unauthorized data exfiltration and leakage.',
      icon: '📊',
      price: '$1,599/month',
      features: [
        'Content inspection',
        'Data classification',
        'User behavior analysis',
        'Policy enforcement',
        'Incident response',
        'Data discovery',
        'Encryption management',
        'Compliance monitoring'
      ],
      benefits: [
        'Prevent 95% of data breaches',
        'Reduce compliance violations',
        'Protect sensitive data',
        'Automate policy enforcement'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Data Protection',
      technologies: ['NLP', 'Machine Learning', 'Python', 'Elasticsearch', 'DLP APIs', 'Encryption'],
      compliance: ['GDPR', 'CCPA', 'HIPAA', 'SOX']
    },
    {
      title: 'AI Cloud Security Platform',
      description: 'Comprehensive cloud security solution providing visibility, compliance, and protection across multi-cloud environments.',
      icon: '☁️',
      price: '$2,199/month',
      features: [
        'Cloud security posture management',
        'Configuration monitoring',
        'Threat detection',
        'Compliance automation',
        'Data encryption',
        'Access control',
        'Security orchestration',
        'Multi-cloud support'
      ],
      benefits: [
        'Secure cloud environments',
        'Automate compliance',
        'Reduce cloud risks',
        'Optimize security costs'
      ],
      marketPrice: '$3,500-7,000/month',
      category: 'Cloud Security',
      technologies: ['AWS Security', 'Azure Security', 'GCP Security', 'Python', 'Terraform', 'CloudFormation'],
      compliance: ['CIS Benchmarks', 'SOC 2', 'ISO 27001', 'FedRAMP']
    }
  ];

  const securityFeatures = [
    {
      title: 'Real-Time Monitoring',
      description: '24/7 AI-powered monitoring of your entire infrastructure',
      icon: <Eye className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Threat Intelligence',
      description: 'Advanced threat intelligence and behavioral analysis',
      icon: <AlertTriangle className="w-8 h-8 text-red-600" />
    },
    {
      title: 'Automated Response',
      description: 'Instant automated response to security incidents',
      icon: <Zap className="w-8 h-8 text-yellow-600" />
    },
    {
      title: 'Compliance Ready',
      description: 'Built-in compliance with major security standards',
      icon: <ShieldCheck className="w-8 h-8 text-green-600" />
    }
  ];

<<<<<<< HEAD
  const complianceStandards = [
    'SOC 2 Type II', 'ISO 27001', 'NIST Framework', 'GDPR', 'HIPAA', 'PCI DSS', 'SOX', 'FedRAMP'
  ];

=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export default function AiCybersecurityZionTechGroup() {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Cybersecurity Services
=======
  return (
    <React.Fragment>
      <Helmet>
        <title>Ai Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered ai cybersecurity solution for modern businesses." />
        <meta name="keywords" content="AI ai cybersecurity, artificial intelligence, ai cybersecurity, AI solutions, intelligent automation" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Cybersecurity
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100 max-w-3xl mx-auto">
              Protect your business with advanced AI-powered cybersecurity solutions and 24/7 monitoring
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
              <a 
                href="tel:+13024640950"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
              >
                ✉️ Get Security Assessment
              </a>
            </div>
=======
              <button className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Security Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">99.5%</div>
              <div className="text-gray-600">Threat Detection Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-gray-600">Security Monitoring</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
              <div className="text-gray-600">Faster Response Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">$2M+</div>
              <div className="text-gray-600">Average Savings</div>
            </div>
=======
      popular: false;
    }
  ];

  const useCases = [
    {}
      title: 'Threat Prevention',
      description: 'Prevent cyber attacks before they happen with predictive threat analysis',
      icon: Shield;
      result: '99.9% prevention'},
    {}
      title: 'Incident Response',
      description: 'Rapidly detect and respond to security incidents with automated workflows',
      icon: AlertTriangle;
      result: '90% faster'},
    {}
      title: 'Compliance',
      description: 'Maintain compliance with GDPR, HIPAA, SOX, and other regulations',
      icon: Lock;
      result: '100% compliant'},
    {}
      title: 'Cost Reduction',
      description: 'Reduce security costs while improving protection with AI automation',
      icon: Target;
      result: '60% savings'}
  ];

  const benefits = [
    { metric: '99.9%', label: 'Threat Detection', color: 'text-green-400' },
    { metric: '< 1 min', label: 'Response Time', color: 'text-blue-400' },
    { metric: '24/7', label: 'Monitoring', color: 'text-purple-400' },
    { metric: 'Zero', label: 'False Positives', color: 'text-orange-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>AI Cybersecurity Solutions - Advanced Threat Protection | Zion Tech Group</title>
        <meta name="description" content="Protect your business with AI-powered cybersecurity solutions. Advanced threat detection, automated response, and 99.9% accuracy." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security automation, cyber protection, network security, incident response" />
        <meta property="og: title" content="AI Cybersecurity Solutions - Advanced Threat Protection" />
        <meta property="og:description" content="Protect your business with AI-powered cybersecurity solutions and threat detection." />
        <meta property="og:type" content="website" />,
        <meta property="og:url" content="https://ziontechgroup.com/ai-cybersecurity" />,
      </Helmet>,
,
      <div className="container mx-auto px-4 py-16">,
        {/* Hero Section */}
        <section className="text-center mb-16"></section>
          <div className="inline-flex items-center space-x-2 bg-red-600/20 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Shield className="w-4 h-4" />
            <span>AI-Powered Security</span>
          </div>

          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6"></h1>
            AI Cybersecurity Solutions;
          </h1>)
)
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">)
            Protect your business with advanced AI-powered cybersecurity solutions.),
            Detect threats in real-time, automate responses, and maintain compliance with 99.9% accuracy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
            ></a>
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <a;
              href="/contact"
              className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
            ></a>
              Get Security Assessment;
            </a>
          </div>,
        </section>,
,
        {/* Benefits */}
        <section className="mb-16"></section>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {benefits.map((benefit, index) => (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            {benefits.map((benefit, index) => (}
              <div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-red-500/20"></div>
                <div className={`text-3xl font-bold ${benefit.color} mb-2`}>{benefit.metric}</div>
                <div className="text-white font-semibold mb-2">{benefit.label}</div>
                <div className="text-gray-400 text-sm">Industry-leading security performance</div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{benefits.map((benefit, index) => (</section>
              </div><div key={index} className="bg-slate-800/50 p-6 rounded-lg border border-red-500/20"></div>
                <div className={`text-3xl font-bold ${benefit.color} mb-2`}>{benefit.metric}</div><div className="text-white font-semibold mb-2">{benefit.label}</div><div className="text-gray-400 text-sm">Industry-leading security performance</div>
              </div>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Security Solutions
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered cybersecurity services for complete protection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-red-600">{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                    {service.category}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <p key={benefitIndex} className="text-sm text-green-600">✓ {benefit}</p>
                  ))}
                </div>
                
                <a 
                  href="/contact"
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center"
                >
                  Get Protected
=======
        {/* Features */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
            {features.map((feature, index) => (}
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Security Features</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover: border-red-500/50 transition-all duration-300">,
                <div className="flex items-start space-x-4">,
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Advanced Security Features</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</section>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3><p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            {useCases.map((useCase, index) => (}
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <useCase.icon className="w-8 h-8 text-red-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}<h3 className="text-lg font-semibold text-white mb-2">{useCase.title}<p className="text-gray-400 text-sm">{useCase.description}</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Solutions</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover: border-red-500/50 transition-all duration-300">,
                <div className="flex items-center justify-between mb-4">,
                  <useCase.icon className="w-8 h-8 text-red-400" />,
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Solutions</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) => (</section>
              </div><div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-red-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <useCase.icon className="w-8 h-8 text-red-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div><h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3><p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Investment Plans</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => (</section><div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-red-500 ring-2 ring-red-500/20' : 'border-gray-700'} hover:border-red-500/50 transition-all duration-300`}>{plan.popular && (</div>
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Security Investment Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {pricingPlans.map((plan, index) => (}
              <div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-red-500 ring-2 ring-red-500/20' : 'border-gray-700'} hover:border-red-500/50 transition-all duration-300`}></div>
                {plan.popular && (}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold"></div>
                      Most Popular;
                    </div>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-400 mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8"></ul>
                  {plan.features.map((feature, featureIndex) => (}
                    <li key={featureIndex} className="flex items-center space-x-3"></li>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a;
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${}
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700'
                      : 'border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                  }`}
                ></a>
                  Get Protected;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                </a>
              </div>
            ))}
=======
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div></div></div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-pink-500 to-blue-600 hover:from-pink-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
            </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======
        <section className="text-center bg-gradient-to-r from-red-600/20 to-orange-600/20 p-12 rounded-lg border border-red-500/30"></section>
          <h2 className="text-3xl font-bold text-white mb-4">Don't Wait for a Breach</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join 1,000+ organizations already protected by our AI Cybersecurity solutions.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></section>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
            ></a>
              <Phone className="w-5 h-5 mr-2" />
              Call: (302) 464-0950;
            </a>
            <a;
              href="mailto:kleber@ziontechgroup.com"
        className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
      ></a>
              <Mail className="w-5 h-5 mr-2" />
              Email Us;
            </a>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Security Solutions?
            </h2>
            <p className="text-xl text-gray-600">
              Advanced AI technology and expert security professionals
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-600">
              We help you meet and maintain compliance with major security standards
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {complianceStandards.map((standard, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md">
                <div className="font-semibold text-gray-900">{standard}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Secure Your Business Today
          </h2>
          <p className="text-xl mb-8 text-red-100">
            Get a free security assessment and protect your business from cyber threats
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-red-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
=======
    <div>
      <Head>
        <title>Ai Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Ai Cybersecurity
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            ai-cybersecurity services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
=======
    </React.Fragment>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
  );
<<<<<<< HEAD
};

export default AICybersecurityPage;
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314
=======

const AiCybersecurityPage: React.FC = () => {return (
    <>
      <title>AiCybersecurity - Zion Tech Group</title>

      <  />
  );}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AicybersecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Cybersecurity - Zion Tech Group</title>
        <meta name="description" content="Professional ai cybersecurity services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Cybersecurity</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai cybersecurity services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
