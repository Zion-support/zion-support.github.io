import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  Users, 
  Globe, 
  CheckCircle, 
  Star,
  ArrowRight,
  DollarSign,
  Clock,
  Monitor,
  Award,
  Sparkles,
  Server,
  Database,
  Settings,
  TrendingUp,
  Smartphone,
  Wifi,
  FileText,
  Zap
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CybersecuritySolutionsPage = () => {
  const services = [
    {
      title: "Security Assessment & Audit",
      description: "Comprehensive security assessment of your IT infrastructure to identify vulnerabilities and provide actionable recommendations.",
      icon: <Eye className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: ["Vulnerability scanning", "Penetration testing", "Compliance auditing", "Risk assessment"],
      price: "From $2,000"
    },
    {
      title: "Endpoint Protection",
      description: "Advanced endpoint security solutions to protect all devices in your network from malware, ransomware, and other threats.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Antivirus & anti-malware", "Behavioral analysis", "Threat detection", "Real-time protection"],
      price: "From $15/device/month"
    },
    {
      title: "Network Security",
      description: "Comprehensive network security implementation including firewalls, intrusion detection, and network monitoring.",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Firewall configuration", "Intrusion detection", "Network segmentation", "Traffic monitoring"],
      price: "From $500/month"
    },
    {
      title: "Data Protection & Encryption",
      description: "End-to-end data protection with encryption, backup solutions, and data loss prevention measures.",
      icon: <Lock className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Data encryption", "Backup solutions", "DLP implementation", "Key management"],
      price: "From $1,000/month"
    },
    {
      title: "Security Monitoring & SOC",
      description: "24/7 security monitoring with Security Operations Center (SOC) services and incident response.",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["24/7 monitoring", "Threat hunting", "Incident response", "Security analytics"],
      price: "From $2,500/month"
    },
    {
      title: "Compliance & Governance",
      description: "Help achieve and maintain compliance with industry standards like SOC 2, HIPAA, GDPR, and ISO 27001.",
      icon: <FileText className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: ["Compliance frameworks", "Policy development", "Audit preparation", "Training programs"],
      price: "From $3,000/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential Security",
      price: "$1,500",
      period: "per month",
      description: "Basic security protection for small businesses",
      features: [
        "Endpoint protection (up to 25 devices)",
        "Basic firewall configuration",
        "Email security",
        "Monthly security reports",
        "Email support",
        "Basic backup solution"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Professional Security",
      price: "$3,500",
      period: "per month",
      description: "Comprehensive security for growing businesses",
      features: [
        "Advanced endpoint protection (up to 100 devices)",
        "Next-gen firewall",
        "Network monitoring",
        "Security awareness training",
        "24/7 support",
        "Advanced backup & recovery",
        "Compliance assistance",
        "Incident response"
      ],
      popular: true,
      cta: "Start Now"
    },
    {
      name: "Enterprise Security",
      price: "Custom",
      period: "pricing",
      description: "Complete security solution for large organizations",
      features: [
        "Unlimited device protection",
        "Custom security architecture",
        "Dedicated security team",
        "Advanced threat hunting",
        "Custom compliance solutions",
        "White-glove support",
        "SLA guarantees",
        "Security consulting"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      company: "Financial Services Inc.",
      role: "CISO",
      content: "Zion Tech Group's cybersecurity solutions helped us achieve SOC 2 compliance and significantly improved our security posture. Their expertise is outstanding.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Chen",
      company: "Healthcare Plus",
      role: "IT Director",
      content: "Their 24/7 monitoring caught a potential breach before it could cause damage. The incident response was swift and professional.",
      rating: 5,
      avatar: "LC"
    },
    {
      name: "Robert Kim",
      company: "E-commerce Solutions",
      role: "VP of Technology",
      content: "The security assessment revealed critical vulnerabilities we didn't know existed. Their recommendations saved us from potential disaster.",
      rating: 5,
      avatar: "RK"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Threat Detection Rate", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Eye className="w-6 h-6" /> },
    { number: "15min", label: "Average Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "500+", label: "Protected Organizations", icon: <Users className="w-6 h-6" /> }
  ];

  const complianceFrameworks = [
    {
      name: "SOC 2 Type II",
      description: "Security, availability, and confidentiality controls",
      requirements: ["Access controls", "System monitoring", "Data encryption", "Incident response"],
      icon: <Shield className="w-8 h-8" />
    },
    {
      name: "HIPAA Compliance",
      description: "Healthcare data protection standards",
      requirements: ["PHI protection", "Access controls", "Audit logs", "Risk assessment"],
      icon: <Lock className="w-8 h-8" />
    },
    {
      name: "GDPR Compliance",
      description: "European data protection regulations",
      requirements: ["Data mapping", "Consent management", "Right to erasure", "Privacy by design"],
      icon: <Globe className="w-8 h-8" />
    },
    {
      name: "ISO 27001",
      description: "Information security management system",
      requirements: ["Risk management", "Security policies", "Continuous improvement", "Management review"],
      icon: <Award className="w-8 h-8" />
    }
  ];

  const threatTypes = [
    {
      title: "Ransomware Protection",
      description: "Advanced protection against ransomware attacks with behavioral analysis and backup solutions",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Phishing Prevention",
      description: "Email security and user training to prevent phishing attacks and social engineering",
      icon: <Mail className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Insider Threat Detection",
      description: "Monitor and detect potential insider threats with user behavior analytics",
      icon: <Users className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "DDoS Mitigation",
      description: "Protect against distributed denial-of-service attacks with traffic filtering",
      icon: <Wifi className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Cybersecurity Solutions - Advanced Security Services | Zion Tech Group"
        description="Protect your business with our comprehensive cybersecurity solutions. Security assessment, endpoint protection, network security, data encryption, and compliance services. Expert security consulting."
        keywords="cybersecurity, security solutions, endpoint protection, network security, data protection, compliance, SOC 2, HIPAA, GDPR, security audit, threat detection"
        canonical="https://ziontechgroup.com/cybersecurity-solutions"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">#1 Cybersecurity Provider</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-blue-400">
              Cybersecurity Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Protect your business from evolving cyber threats with our comprehensive security solutions. 
            Advanced protection, 24/7 monitoring, and compliance expertise you can trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Protected
            </FuturisticButton>
            <FuturisticButton
              href="#assessment"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              Free Security Assessment
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              From assessment to protection, we provide end-to-end cybersecurity solutions to keep your business secure.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-400 mb-2">{service.price}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Threat Protection Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Threat Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect against the latest cyber threats with our advanced security technologies and expert monitoring.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {threatTypes.map((threat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${threat.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  {threat.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center">
                  {threat.title}
                </h3>
                <p className="text-gray-300 text-sm text-center">
                  {threat.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Achieve and maintain compliance with industry standards and regulations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {complianceFrameworks.map((framework, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  {framework.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center">
                  {framework.name}
                </h3>
                <p className="text-gray-300 text-sm text-center mb-4">
                  {framework.description}
                </p>
                <ul className="space-y-1">
                  {framework.requirements.map((requirement, reqIndex) => (
                    <li key={reqIndex} className="text-xs text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Security Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect security plan for your organization. Custom solutions available for enterprise clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-red-500/50 shadow-2xl shadow-red-500/10' 
                    : 'border-white/20 hover:border-white/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Security Teams Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations are protecting their assets with our cybersecurity solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section id="assessment" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
              Get a free security assessment and discover how our cybersecurity solutions can 
              protect your business from evolving threats and ensure compliance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Free Assessment
              </FuturisticButton>
              <FuturisticButton
                href="/services"
                variant="outline"
                size="lg"
                icon={<Shield className="w-5 h-5" />}
              >
                View All Services
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default CybersecuritySolutionsPage;