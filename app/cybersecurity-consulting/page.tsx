import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Star,
  ArrowRight,
  Clock,
  Users,
  TrendingUp,
  Database,
  Server,
  Globe,
  BarChart3,
  Settings,
  Zap
} from 'lucide-react';

const CybersecurityConsultingPage: React.FC = () => {
  const features = [
    "Comprehensive security assessment and audit",
    "Penetration testing and vulnerability scanning",
    "Security architecture design and implementation",
    "Incident response planning and execution",
    "Compliance management (GDPR, HIPAA, SOX, PCI-DSS)",
    "Security awareness training and education",
    "Threat intelligence and monitoring",
    "Identity and access management (IAM)",
    "Data protection and encryption strategies",
    "24/7 security monitoring and support"
  ];

  const complianceStandards = [
    { name: "GDPR", icon: <Globe className="w-6 h-6" />, color: "text-blue-600" },
    { name: "HIPAA", icon: <Shield className="w-6 h-6" />, color: "text-green-600" },
    { name: "SOX", icon: <BarChart3 className="w-6 h-6" />, color: "text-red-600" },
    { name: "PCI-DSS", icon: <Lock className="w-6 h-6" />, color: "text-purple-600" },
    { name: "ISO 27001", icon: <CheckCircle className="w-6 h-6" />, color: "text-orange-600" },
    { name: "NIST", icon: <Settings className="w-6 h-6" />, color: "text-cyan-600" }
  ];

  const servicePackages = [
    {
      name: "Security Assessment",
      price: "$2,999",
      description: "Comprehensive security evaluation and recommendations",
      features: [
        "Vulnerability assessment",
        "Security policy review",
        "Risk analysis report",
        "Remediation recommendations",
        "Executive summary",
        "30-day follow-up support"
      ],
      popular: false
    },
    {
      name: "Penetration Testing",
      price: "$4,999",
      description: "Professional penetration testing and security validation",
      features: [
        "External penetration testing",
        "Internal network testing",
        "Web application testing",
        "Social engineering assessment",
        "Detailed technical report",
        "Remediation guidance",
        "60-day follow-up support"
      ],
      popular: true
    },
    {
      name: "Full Security Program",
      price: "$9,999",
      description: "Complete cybersecurity program implementation",
      features: [
        "Comprehensive security assessment",
        "Penetration testing",
        "Security architecture design",
        "Policy development",
        "Staff training",
        "Incident response planning",
        "6-month ongoing support",
        "Quarterly security reviews"
      ],
      popular: false
    }
  ];

  const stats = [
    { number: "500+", label: "Security Assessments", icon: <Shield className="w-6 h-6" /> },
    { number: "99.9%", label: "Threat Detection Rate", icon: <Eye className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Clock className="w-6 h-6" /> },
    { number: "100%", label: "Compliance Success", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise-Grade Security",
      description: "Military-grade security solutions to protect your most sensitive data"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Proactive Threat Detection",
      description: "Advanced threat intelligence and real-time monitoring"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Compliance Assurance",
      description: "Ensure compliance with all major industry standards and regulations"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Certified security professionals with decades of experience"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Security Assessment",
      description: "Comprehensive evaluation of your current security posture and vulnerabilities"
    },
    {
      step: "02",
      title: "Risk Analysis",
      description: "Detailed risk assessment and prioritization of security threats"
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "Custom security strategy tailored to your business needs and compliance requirements"
    },
    {
      step: "04",
      title: "Implementation",
      description: "Deployment of security solutions and implementation of best practices"
    },
    {
      step: "05",
      title: "Ongoing Support",
      description: "Continuous monitoring, updates, and security program management"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Consulting - Zion Tech Group | Expert Security Services</title>
        <meta name="description" content="Expert cybersecurity consulting services. Protect your business with comprehensive security assessments, penetration testing, and compliance management. 24/7 support available." />
        <meta name="keywords" content="cybersecurity consulting, security assessment, penetration testing, compliance management, threat detection, security audit" />
        <meta property="og:title" content="Cybersecurity Consulting - Zion Tech Group" />
        <meta property="og:description" content="Protect your business with expert cybersecurity consulting services." />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-6xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                #1 Cybersecurity Consulting Firm
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Cybersecurity
                </span>
                <br />
                <span className="text-white">Consulting</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Protect your business with expert cybersecurity consulting services. 
                Comprehensive security assessments, penetration testing, compliance management, 
                and 24/7 threat monitoring to keep your data safe.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Free Security Assessment
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Shield className="w-5 h-5 mr-2" />
                  View Case Studies
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-cyan-400">{stat.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Why Choose Our Cybersecurity Services?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Protect your business with our comprehensive cybersecurity consulting services
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive Security Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cybersecurity solutions to protect your business
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Compliance Standards</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We help you achieve compliance with all major industry standards
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/20 group-hover:border-cyan-400/40">
                    <div className={standard.color}>{standard.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{standard.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Security Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology for comprehensive cybersecurity protection
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Service Packages Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Security Service Packages</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security package that fits your business needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {servicePackages.map((package_, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  package_.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-cyan-500/20 hover:border-cyan-400/40'
                } transition-all duration-300 hover:transform hover:scale-105`}>
                  {package_.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{package_.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-cyan-400">{package_.price}</span>
                    </div>
                    <p className="text-gray-300">{package_.description}</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {package_.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    package_.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {package_.popular ? 'Get Started' : 'Contact Sales'}
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Secure Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Get a free security assessment and protect your business from cyber threats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Free Assessment
                </button>
                <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityConsultingPage;