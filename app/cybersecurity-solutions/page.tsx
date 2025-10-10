import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  Users,
  Clock,
  Award,
  Target,
  Sparkles,
  FileText,
  BarChart,
  Download,
  Phone,
  Mail,
  Star,
  Activity,
  BookOpen,
  Smile,
  Settings,
  Smartphone,
  Cpu,
  HardDrive,
  Wifi,
  TrendingUp,
  Monitor,
  Database,
  Zap,
  Key
} from 'lucide-react';

const CybersecuritySolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection and response with 99.9% accuracy in identifying security breaches",
      price: "$299/month"
    },
    {
      icon: Lock,
      title: "Zero Trust Security",
      description: "Implement zero trust architecture with continuous verification and least privilege access",
      price: "$399/month"
    },
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "24/7 security operations center with real-time monitoring and incident response",
      price: "$499/month"
    },
    {
      icon: Database,
      title: "Data Protection",
      description: "Comprehensive data encryption, backup, and recovery solutions for all data types",
      price: "$349/month"
    },
    {
      icon: Users,
      title: "Identity Management",
      description: "Multi-factor authentication, single sign-on, and identity governance solutions",
      price: "$199/month"
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Rapid incident response and forensic analysis with dedicated security experts",
      price: "$599/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$499",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Basic threat detection",
        "Email security",
        "Firewall management",
        "Vulnerability scanning",
        "Security awareness training",
        "Monthly security reports",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$1,299",
      period: "/month",
      description: "Ideal for growing companies and mid-size enterprises",
      features: [
        "Advanced threat detection",
        "Zero trust implementation",
        "24/7 security monitoring",
        "Incident response",
        "Compliance management",
        "Security training program",
        "Priority support",
        "API access",
        "Custom security policies"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations with complex security needs",
      features: [
        "Enterprise threat detection",
        "Full zero trust architecture",
        "Dedicated security team",
        "Advanced incident response",
        "Custom compliance frameworks",
        "Executive security briefings",
        "24/7 dedicated support",
        "Custom integrations",
        "On-premise deployment",
        "Security consulting"
      ],
      popular: false
    }
  ];

  const securityServices = [
    {
      category: "Threat Detection & Response",
      icon: Shield,
      description: "Advanced threat detection and automated response to security incidents",
      services: [
        "AI-powered threat hunting",
        "Behavioral analytics",
        "Automated incident response",
        "Threat intelligence feeds",
        "Malware analysis",
        "Forensic investigation"
      ]
    },
    {
      category: "Network Security",
      icon: Wifi,
      description: "Comprehensive network security solutions to protect your infrastructure",
      services: [
        "Next-generation firewalls",
        "Intrusion detection systems",
        "Network segmentation",
        "VPN and remote access",
        "DDoS protection",
        "Network monitoring"
      ]
    },
    {
      category: "Data Security",
      icon: Database,
      description: "Protect sensitive data with encryption and access controls",
      services: [
        "Data encryption at rest and in transit",
        "Database security",
        "Data loss prevention",
        "Backup and recovery",
        "Data classification",
        "Privacy compliance"
      ]
    },
    {
      category: "Identity & Access Management",
      icon: Users,
      description: "Secure identity management and access control solutions",
      services: [
        "Multi-factor authentication",
        "Single sign-on (SSO)",
        "Identity governance",
        "Privileged access management",
        "Role-based access control",
        "Identity analytics"
      ]
    }
  ];

  const benefits = [
    {
      title: "99.9% Threat Detection",
      description: "Advanced AI algorithms detect and prevent security threats with high accuracy",
      icon: Shield,
      stats: "99.9% accuracy"
    },
    {
      title: "24/7 Protection",
      description: "Round-the-clock security monitoring and incident response",
      icon: Clock,
      stats: "24/7 SOC"
    },
    {
      title: "Compliance Ready",
      description: "Meet regulatory requirements with automated compliance management",
      icon: Award,
      stats: "100% compliance"
    },
    {
      title: "Rapid Response",
      description: "Quick incident response and recovery to minimize business impact",
      icon: Zap,
      stats: "15 min response time"
    }
  ];

  const complianceFrameworks = [
    {
      name: "SOC 2",
      icon: Shield,
      description: "SOC 2 Type II compliance for service organizations"
    },
    {
      name: "ISO 27001",
      icon: Award,
      description: "International standard for information security management"
    },
    {
      name: "GDPR",
      icon: Lock,
      description: "General Data Protection Regulation compliance"
    },
    {
      name: "HIPAA",
      icon: Database,
      description: "Health Insurance Portability and Accountability Act"
    },
    {
      name: "PCI DSS",
      icon: Key,
      description: "Payment Card Industry Data Security Standard"
    },
    {
      name: "NIST",
      icon: Settings,
      description: "National Institute of Standards and Technology framework"
    }
  ];

  const threatTypes = [
    {
      threat: "Ransomware",
      icon: AlertTriangle,
      description: "Protect against ransomware attacks with advanced detection and prevention",
      protection: "99.8%"
    },
    {
      threat: "Phishing",
      icon: Mail,
      description: "AI-powered email security to detect and block phishing attempts",
      protection: "99.9%"
    },
    {
      threat: "DDoS",
      icon: Wifi,
      description: "Distributed denial of service attack mitigation and prevention",
      protection: "100%"
    },
    {
      threat: "Insider Threats",
      icon: Users,
      description: "Behavioral analytics to detect and prevent insider threats",
      protection: "95%"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>Cybersecurity Solutions - Enterprise Security Services | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Comprehensive cybersecurity solutions with 99.9% threat detection, 24/7 monitoring, and compliance management. Starting at $499/month." 
        />
        <meta 
          name="keywords" 
          content="cybersecurity, security services, threat detection, zero trust, security monitoring, compliance, SOC, incident response" 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.1)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.1)_0%,transparent_50%)]" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-300 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise Security Solutions
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Cybersecurity
              <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
                Solutions Pro
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your organization with comprehensive cybersecurity solutions. 
              Advanced threat detection, 24/7 monitoring, and compliance management 
              to keep your business secure and compliant.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-red-400 text-red-300 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                View Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-300">Threat Detection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
                <div className="text-gray-300">Security Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">15min</div>
                <div className="text-gray-300">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-300">Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Security
              <span className="block bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our cybersecurity solutions provide everything you need to protect 
              your organization from evolving threats and maintain compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-red-400 font-bold text-lg">{feature.price}</div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete Security
              <span className="block bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From threat detection to compliance management, we provide comprehensive 
              security services to protect your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{service.category}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.services.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Protection Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Threat
              <span className="block bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
                Protection
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect against the most common and dangerous cyber threats with 
              our advanced security solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {threatTypes.map((threat, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center group hover:border-red-500/50 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <threat.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{threat.threat}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{threat.description}</p>
                <div className="text-2xl font-bold text-green-400">{threat.protection} Protection</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Compliance
              <span className="block bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
                Frameworks
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet regulatory requirements with our comprehensive compliance 
              management solutions for all major frameworks.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="group text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <framework.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-white font-bold mb-2">{framework.name}</h3>
                <p className="text-gray-300 text-sm">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our
              <span className="block bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
                Security Solutions?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join hundreds of organizations who trust our cybersecurity 
              solutions to protect their critical assets and data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="text-2xl font-bold text-green-400">{benefit.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Transparent Security
              <span className="block bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect security plan for your organization. 
              All plans include our core security features with no hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-2xl p-8 ${
                plan.popular 
                  ? 'border-red-500 shadow-lg shadow-red-500/25' 
                  : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-5xl font-bold text-red-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white transform hover:scale-105'
                    : 'border-2 border-red-400 text-red-300 hover:bg-red-400 hover:text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/50 to-orange-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Secure Your Organization
            <span className="block bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait for a security breach. Protect your organization with our 
            comprehensive cybersecurity solutions and expert security team.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Get Security Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-red-400 text-red-300 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Contact Security Expert
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free security assessment • ✓ No long-term contracts • ✓ 30-day money-back guarantee</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecuritySolutionsPage;