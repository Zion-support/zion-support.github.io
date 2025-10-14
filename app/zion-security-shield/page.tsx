import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionSecurityShield() {
  const features = [
    {
      title: "Real-time Threat Detection",
      description: "Advanced AI-powered monitoring that detects and responds to security threats in real-time across your entire infrastructure.",
      icon: <Eye className="w-6 h-6" />,
      benefits: ["24/7 Monitoring", "Instant Alerts", "Threat Intelligence", "Automated Response"]
    },
    {
      title: "Vulnerability Assessment",
      description: "Comprehensive security scanning to identify vulnerabilities in your systems, applications, and network infrastructure.",
      icon: <AlertTriangle className="w-6 h-6" />,
      benefits: ["Automated Scanning", "Risk Prioritization", "Remediation Guidance", "Compliance Reports"]
    },
    {
      title: "Endpoint Protection",
      description: "Advanced endpoint security that protects all your devices from malware, ransomware, and other cyber threats.",
      icon: <Lock className="w-6 h-6" />,
      benefits: ["Malware Protection", "Ransomware Defense", "Device Management", "Policy Enforcement"]
    },
    {
      title: "Compliance Management",
      description: "Automated compliance monitoring and reporting for GDPR, HIPAA, SOC 2, and other regulatory requirements.",
      icon: <CheckCircle className="w-6 h-6" />,
      benefits: ["Regulatory Compliance", "Automated Reports", "Audit Trails", "Policy Templates"]
    }
  ];

  const securityServices = [
    {
      title: "Security Monitoring",
      description: "24/7 monitoring of your network, systems, and applications for potential security threats.",
      price: "Starting at $99/month"
    },
    {
      title: "Vulnerability Scanning",
      description: "Regular security assessments to identify and prioritize vulnerabilities in your infrastructure.",
      price: "Starting at $149/month"
    },
    {
      title: "Incident Response",
      description: "Rapid response and containment services when security incidents occur.",
      price: "Starting at $199/month"
    },
    {
      title: "Security Training",
      description: "Employee security awareness training and phishing simulation programs.",
      price: "Starting at $79/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$149",
      period: "/month",
      description: "Basic security monitoring for small businesses",
      features: [
        "Real-time threat detection",
        "Basic vulnerability scanning",
        "Email support",
        "Monthly security reports",
        "Up to 10 endpoints"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Advanced security for growing businesses",
      features: [
        "Advanced threat detection",
        "Comprehensive vulnerability scanning",
        "24/7 monitoring",
        "Priority support",
        "Up to 50 endpoints",
        "Compliance reporting",
        "Incident response"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "Complete security solution for large organizations",
      features: [
        "AI-powered threat detection",
        "Continuous vulnerability scanning",
        "Dedicated security team",
        "24/7 phone support",
        "Unlimited endpoints",
        "Custom compliance reports",
        "Advanced incident response",
        "Security training included"
      ],
      popular: false
    }
  ];

  const complianceStandards = [
    { name: "GDPR", description: "General Data Protection Regulation" },
    { name: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
    { name: "SOC 2", description: "Service Organization Control 2" },
    { name: "PCI DSS", description: "Payment Card Industry Data Security Standard" },
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "NIST", description: "National Institute of Standards and Technology" }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Security Shield - AI-Powered Cybersecurity | Zion Tech Group</title>
        <meta
          name="description"
          content="Zion Security Shield - Advanced AI-powered cybersecurity monitoring and threat detection for small to medium businesses. Protect your digital assets with 24/7 security monitoring and automated incident response." />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, security monitoring, vulnerability assessment, endpoint protection, compliance management, AI security" />
      </Helmet>

      <div>{/* Animated Background */}</div>
    </>
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full px-4 py-2 border border-red-500/30">
                <Shield className="w-4 h-4 text-red-400" />
                <span className="text-red-300 text-sm font-semibold">Micro SAAS Solution</span>
            
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Zion Security
                <span>
                  {" "}Shield
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 rounded-lg blur opacity-30 animate-pulse"></h1>
            </div>
            
            <p>Advanced AI-powered cybersecurity monitoring and threat detection designed for small to medium businesses. 
              Protect your digital assets with 24/7 security monitoring and automated incident response.</p>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                View Demo
              </div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">99.9%</div>
                <div className="text-gray-300">Threat Detection Rate</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">&lt;1min</div>
                <div className="text-gray-300">Response Time</div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-gray-300">Monitoring</div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Advanced Security Features
                </h2>
              <p>Comprehensive cybersecurity protection powered by AI and machine learning to keep your business safe.</p>
              </div>
            
            <div>{features.map((feature, index) => (</div>
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div>{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p>{feature.description}</p>
                    </p>
                    <div>{feature.benefits.map((benefit, idx) => (</div>
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                      ))}
                    </div>
              ))}
            </div>
        </section>

        {/* Security Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  Security Services
                </h2>
              <p>Comprehensive security services to protect your business from evolving cyber threats.</p>
              </div>
            
            <div>{securityServices.map((service, index) => (</div>
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="text-red-400 font-bold">{service.price}</div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-400">
                  Security Plans
                </h2>
              <p>Choose the security plan that fits your business needs. All plans include a 14-day free trial.</p>
              </div>
            
            <div>{pricingPlans.map((plan, index) => (</div>
                <div>{plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div>Most Popular</div>
                      </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span>{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    <p className="text-gray-300 mt-2">{plan.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 shadow-lg hover:shadow-red-500/25'
                        : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.popular ? 'Start Free Trial' : 'Get Started'}
                  </div>
              ))}
            </div>
        </section>

        {/* Compliance Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Compliance Standards
                </h2>
              <p>Meet regulatory requirements with automated compliance monitoring and reporting.</p>
              </div>
            
            <div>{complianceStandards.map((standard, index) => (</div>
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group"
                >
                  <div className="text-2xl mb-2">🛡️</div>
                  <div>{standard.name}</div>
                  </div>
                  <div>{standard.description}</div>
                  </div>
              ))}
            </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p>Don&apos;t wait for a security breach. Protect your business with Zion Security Shield today. 
                Start your free trial or contact us for a security assessment.</p>
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-red-400">kleber@ziontechgroup.com</p>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-red-400">+1 302 464 0950</p>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-red-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-red-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Security Assessment
                </div>
    </>
  );
}