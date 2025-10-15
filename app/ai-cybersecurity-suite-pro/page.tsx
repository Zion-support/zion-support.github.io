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
  Phone,
  Mail,
  MapPin,
  Award,
  Clock,
  Zap,
  Users,
  BarChart3,
  Target,
  FileText
} from 'lucide-react';

const AiCybersecuritySuiteProPage: React.FC = () => {
  const features = [
    "AI-Powered Threat Detection",
    "Real-time Security Monitoring",
    "Automated Incident Response",
    "Advanced Malware Analysis",
    "Network Traffic Analysis",
    "Vulnerability Assessment",
    "Compliance Management",
    "Security Analytics Dashboard",
    "Multi-Factor Authentication",
    "Data Loss Prevention"
  ];

  const securityModules = [
    {
      name: "Threat Intelligence",
      description: "AI-powered threat detection and analysis with real-time monitoring",
      icon: <Eye className="w-8 h-8" />,
      capabilities: ["Real-time Threat Detection", "Behavioral Analysis", "Threat Hunting", "IOC Management"]
    },
    {
      name: "Endpoint Protection",
      description: "Advanced endpoint security with AI-driven malware detection",
      icon: <Shield className="w-8 h-8" />,
      capabilities: ["Malware Prevention", "Device Control", "Application Whitelisting", "USB Protection"]
    },
    {
      name: "Network Security",
      description: "Comprehensive network protection with AI-powered traffic analysis",
      icon: <Lock className="w-8 h-8" />,
      capabilities: ["Firewall Management", "Intrusion Detection", "DDoS Protection", "VPN Security"]
    },
    {
      name: "Data Protection",
      description: "Advanced data security with encryption and access controls",
      icon: <FileText className="w-8 h-8" />,
      capabilities: ["Data Encryption", "Access Control", "Data Classification", "Backup Security"]
    },
    {
      name: "Compliance & Governance",
      description: "Automated compliance monitoring and regulatory reporting",
      icon: <CheckCircle className="w-8 h-8" />,
      capabilities: ["GDPR Compliance", "SOX Compliance", "HIPAA Compliance", "Audit Reporting"]
    },
    {
      name: "Security Operations",
      description: "Centralized security operations center with AI automation",
      icon: <BarChart3 className="w-8 h-8" />,
      capabilities: ["SIEM Integration", "Incident Response", "Security Analytics", "Threat Intelligence"]
    }
  ];

  const pricingTiers = [
    {
      name: "Essential",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Basic Threat Detection",
        "Endpoint Protection",
        "Email Security",
        "Email Support"
      ]
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for mid-size organizations",
      features: [
        "Advanced AI Features",
        "Network Security",
        "Compliance Tools",
        "Priority Support",
        "Custom Integrations"
      ]
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large enterprises",
      features: [
        "Full Security Suite",
        "Custom AI Models",
        "Dedicated Support",
        "White-label Options",
        "24/7 SOC Services"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      role: "CISO",
      company: "Global Finance Corp",
      content: "AI Cybersecurity Suite Pro reduced our security incidents by 85% and improved our response time by 70%. The AI threat detection is incredibly accurate.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      role: "IT Director",
      company: "Healthcare Solutions Inc",
      content: "The compliance automation features saved us hundreds of hours on audit preparation. We passed our HIPAA audit with flying colors.",
      rating: 5
    },
    {
      name: "David Rodriguez",
      role: "Security Manager",
      company: "TechStart Industries",
      content: "The AI-powered incident response automatically contained threats before they could spread. Our security posture has never been stronger.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Advanced Security Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered cybersecurity platform with threat detection, incident response, and compliance management. Starting at $299/month." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, incident response, compliance management, network security, data protection" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Shield className="w-4 h-4 mr-2" />
                AI-Powered Security Intelligence
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  AI Cybersecurity Suite Pro
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Protect your organization with AI-powered cybersecurity solutions, 
                advanced threat detection, and automated incident response.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Security Audit
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">85%</div>
                  <div className="text-gray-400 text-sm">Threat Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
                  <div className="text-gray-400 text-sm">Faster Response</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">1,500+</div>
                  <div className="text-gray-400 text-sm">Organizations</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                  <div className="text-gray-400 text-sm">Uptime Guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Advanced Security Features
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered security solutions that protect your organization 
                from evolving cyber threats with intelligent automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Modules Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Security Modules
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security modules designed to protect every aspect 
                of your organization with AI-powered intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityModules.map((module, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{module.icon}</div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {module.name}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {module.description}
                  </p>
                  <ul className="space-y-2">
                    {module.capabilities.map((capability, capabilityIndex) => (
                      <li key={capabilityIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Flexible Pricing
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect security plan for your organization. 
                All plans include 24/7 monitoring and support.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                  tier.name === 'Professional' 
                    ? 'border-cyan-400/40 shadow-2xl shadow-cyan-500/10 scale-105' 
                    : 'border-cyan-500/20'
                }`}>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <p className="text-gray-400 mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{tier.price}</span>
                      <span className="text-gray-400 ml-2">{tier.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    tier.name === 'Professional'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {tier.name === 'Professional' ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Client Success Stories
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                    <div className="text-gray-400 text-sm">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Secure Your Organization?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of organizations who trust AI Cybersecurity Suite Pro 
                to protect their critical assets and data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Schedule Security Audit
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiCybersecuritySuiteProPage;