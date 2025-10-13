import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  Users,
  DollarSign,
  Smartphone,
  Monitor,
  Target,
  Award,
  Sparkles,
  Lock,
  Eye,
  Zap,
  Globe,
  BarChart3,
  Settings,
  Activity,
  TrendingUp,
  FileText
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import StructuredData from '../components/StructuredData';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const CybersecurityAudit = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cybersecurity Audit Services",
    "description": "Comprehensive cybersecurity audits including vulnerability assessments, penetration testing, and compliance reviews",
    "url": "https://ziontechgroup.com/cybersecurity-audit",
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "2999",
      "priceCurrency": "USD",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "price": "2999",
        "priceCurrency": "USD",
        "billingIncrement": "P1M"
      }
    }
  };

  const auditServices = [
    {
      title: "Vulnerability Assessment",
      description: "Comprehensive scanning and analysis of your IT infrastructure for security vulnerabilities",
      icon: <Eye className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Network vulnerability scanning",
        "Web application testing",
        "Database security review",
        "Configuration analysis"
      ],
      price: "From $1,999",
      duration: "1-2 weeks"
    },
    {
      title: "Penetration Testing",
      description: "Simulated cyber attacks to identify real-world security weaknesses and test defenses",
      icon: <Zap className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "External penetration testing",
        "Internal network testing",
        "Social engineering tests",
        "Physical security assessment"
      ],
      price: "From $2,999",
      duration: "2-3 weeks"
    },
    {
      title: "Compliance Audit",
      description: "Ensure your organization meets industry standards and regulatory requirements",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "SOC 2 Type II compliance",
        "HIPAA compliance review",
        "GDPR compliance audit",
        "PCI DSS assessment"
      ],
      price: "From $3,999",
      duration: "3-4 weeks"
    },
    {
      title: "Security Architecture Review",
      description: "Evaluate your overall security architecture and provide improvement recommendations",
      icon: <Settings className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Security framework assessment",
        "Policy and procedure review",
        "Access control evaluation",
        "Incident response planning"
      ],
      price: "From $2,499",
      duration: "2-3 weeks"
    },
    {
      title: "Cloud Security Audit",
      description: "Comprehensive security assessment of your cloud infrastructure and configurations",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "AWS security assessment",
        "Azure security review",
        "Google Cloud audit",
        "Multi-cloud security analysis"
      ],
      price: "From $2,799",
      duration: "2-3 weeks"
    },
    {
      title: "Mobile Security Audit",
      description: "Security assessment of mobile applications and BYOD policies",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Mobile app security testing",
        "iOS/Android vulnerability scan",
        "BYOD policy review",
        "Mobile device management audit"
      ],
      price: "From $1,799",
      duration: "1-2 weeks"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic Audit",
      price: "$2,999",
      period: "one-time",
      description: "Essential security assessment",
      features: [
        "Vulnerability assessment",
        "Basic penetration testing",
        "Security report",
        "Email support",
        "30-day follow-up",
        "Basic recommendations"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Comprehensive Audit",
      price: "$4,999",
      period: "one-time",
      description: "Most popular for medium businesses",
      features: [
        "Full vulnerability assessment",
        "Advanced penetration testing",
        "Compliance review",
        "Priority support",
        "90-day follow-up",
        "Detailed remediation plan",
        "Executive presentation",
        "Implementation support"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "Enterprise Audit",
      price: "$9,999",
      period: "one-time",
      description: "Complete security evaluation",
      features: [
        "Full security audit suite",
        "Custom testing scenarios",
        "24/7 phone support",
        "6-month follow-up",
        "Dedicated security team",
        "Custom compliance framework",
        "White-label reporting",
        "Ongoing consultation"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      company: "Financial Services Inc.",
      role: "CISO",
      content: "Zion Tech Group's cybersecurity audit helped us identify critical vulnerabilities we didn't know existed. Their team is thorough and professional, and the remediation plan was excellent.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Lisa Thompson",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The HIPAA compliance audit was comprehensive and helped us achieve full compliance. Their expertise in healthcare security regulations is outstanding.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "David Martinez",
      company: "E-commerce Platform",
      role: "CTO",
      content: "The penetration testing revealed several critical issues that could have led to data breaches. Their detailed report and remediation guidance were invaluable.",
      rating: 5,
      avatar: "DM"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Vulnerability Detection", icon: <Target className="w-6 h-6" /> },
    { number: "48h", label: "Average Response Time", icon: <Clock className="w-6 h-6" /> },
    { number: "500+", label: "Audits Completed", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> }
  ];

  const complianceFrameworks = [
    { name: "SOC 2 Type II", logo: "S2", description: "Security compliance" },
    { name: "HIPAA", logo: "H", description: "Healthcare compliance" },
    { name: "GDPR", logo: "G", description: "Data protection" },
    { name: "PCI DSS", logo: "P", description: "Payment security" },
    { name: "ISO 27001", logo: "I", description: "Information security" },
    { name: "NIST", logo: "N", description: "Cybersecurity framework" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Cybersecurity Audit Services - Vulnerability Assessment & Penetration Testing | Zion Tech Group"
        description="Comprehensive cybersecurity audits including vulnerability assessments, penetration testing, and compliance reviews. Protect your business with 99.9% vulnerability detection."
        keywords="cybersecurity audit, vulnerability assessment, penetration testing, security compliance, SOC 2, HIPAA, GDPR, PCI DSS"
        canonical="https://ziontechgroup.com/cybersecurity-audit"
        structuredData={structuredData}
      />
      
      <StructuredData type="Service" data={structuredData} />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Enterprise Security Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Cybersecurity Audit Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Protect your business with comprehensive cybersecurity audits. Identify vulnerabilities, 
            ensure compliance, and strengthen your security posture with our expert assessment services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Get Security Assessment
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View Sample Report
            </FuturisticButton>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Audit Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Audit Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive cybersecurity assessment services tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {auditServices.map((service, index) => (
              <FuturisticCard key={index} className="group">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
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
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-cyan-400">{service.price}</div>
                  <div className="text-sm text-gray-400">Duration: {service.duration}</div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Compliance Frameworks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Compliance Frameworks
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help you achieve compliance with major industry standards and regulations
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div
                key={index}
                className="text-center group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold text-lg mx-auto mb-3 group-hover:scale-110 transition-transform">
                  {framework.logo}
                </div>
                <h3 className="text-white font-semibold mb-2">{framework.name}</h3>
                <p className="text-gray-300 text-sm">{framework.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Audit Service Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the audit package that fits your security needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our cybersecurity audit services
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
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't wait for a security breach. Get a comprehensive cybersecurity audit today and protect your business from threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Get Security Assessment
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={<Monitor className="w-5 h-5" />}
              >
                View Sample Report
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default CybersecurityAudit;