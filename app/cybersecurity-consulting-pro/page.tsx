import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Database, 
  Zap, 
  Shield, 
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Eye,
  MessageSquare,
  Target,
  PieChart,
  FileText,
  Settings,
  Bell,
  Download,
  Play,
  Pause,
  RefreshCw,
  Heart,
  ThumbsUp,
  AlertTriangle,
  Lock,
  Globe,
  Monitor,
  Cpu,
  Bot,
  GitBranch,
  Search,
  AlertCircle,
  Key,
  Fingerprint
} from "lucide-react";

export default function CybersecurityConsultingPro() {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Comprehensive Security Assessment",
      description: "Complete security audit of your infrastructure, applications, and processes to identify vulnerabilities and security gaps.",
      benefits: ["360° security visibility", "Vulnerability detection", "Risk prioritization"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Threat Detection",
      description: "Advanced AI algorithms continuously monitor your systems for threats, anomalies, and suspicious activities in real-time.",
      benefits: ["Real-time threat detection", "AI-powered analysis", "Predictive security"]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with identity verification, least privilege access, and continuous monitoring.",
      benefits: ["Enhanced security posture", "Identity-based access", "Continuous verification"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Penetration Testing",
      description: "Simulated cyber attacks to test your security defenses and identify potential entry points for real attackers.",
      benefits: ["Real-world testing", "Vulnerability validation", "Security hardening"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Security Policy Development",
      description: "Create comprehensive security policies, procedures, and incident response plans tailored to your organization.",
      benefits: ["Custom security policies", "Compliance alignment", "Incident response"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Compliance & Governance",
      description: "Ensure compliance with GDPR, HIPAA, SOX, PCI-DSS, and other industry regulations with automated monitoring.",
      benefits: ["Multi-compliance support", "Automated monitoring", "Audit readiness"]
    }
  ];

  const pricingPlans = [
    {
      name: "Security Assessment",
      price: "$10,000",
      period: "one-time",
      description: "Comprehensive security evaluation",
      features: [
        "Security audit",
        "Vulnerability assessment",
        "Risk analysis",
        "Recommendations report",
        "30 days support"
      ],
      cta: "Get Assessment",
      popular: false
    },
    {
      name: "Security Implementation",
      price: "$50,000",
      period: "per project",
      description: "Complete security implementation",
      features: [
        "Everything in Assessment",
        "Security implementation",
        "Policy development",
        "Team training",
        "90 days support"
      ],
      cta: "Start Implementation",
      popular: true
    },
    {
      name: "Ongoing Security",
      price: "$15,000",
      period: "per month",
      description: "Continuous security monitoring",
      features: [
        "24/7 monitoring",
        "Threat detection",
        "Incident response",
        "Security updates",
        "Dedicated team"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CISO",
      company: "Financial Services Inc.",
      content: "Cybersecurity Consulting Pro helped us achieve SOC2 compliance and implement zero trust architecture. Our security posture has never been stronger.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "IT Director",
      company: "Healthcare Solutions",
      content: "The AI-powered threat detection caught several advanced persistent threats that our previous security tools missed. Incredible technology.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "VP Security",
      company: "TechCorp",
      content: "Their penetration testing revealed critical vulnerabilities we didn't know existed. The remediation plan was comprehensive and effective.",
      rating: 5
    }
  ];

  const securityServices = [
    {
      title: "Security Architecture",
      description: "Design and implement robust security architectures that protect your entire infrastructure.",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Incident Response",
      description: "Rapid response to security incidents with 24/7 monitoring and immediate threat containment.",
      icon: <AlertCircle className="w-6 h-6" />
    },
    {
      title: "Identity Management",
      description: "Implement comprehensive identity and access management solutions for secure user authentication.",
      icon: <Key className="w-6 h-6" />
    },
    {
      title: "Data Protection",
      description: "Encrypt and protect sensitive data with advanced encryption and data loss prevention.",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Network Security",
      description: "Secure your network infrastructure with firewalls, intrusion detection, and network monitoring.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      title: "Security Training",
      description: "Educate your team on cybersecurity best practices and threat awareness.",
      icon: <Users className="w-6 h-6" />
    }
  ];

  const metrics = [
    {
      title: "Threat Detection",
      improvement: "99.9%",
      description: "Accuracy in threat detection"
    },
    {
      title: "Response Time",
      improvement: "< 5 min",
      description: "Average incident response time"
    },
    {
      title: "Compliance Rate",
      improvement: "100%",
      description: "Compliance achievement rate"
    },
    {
      title: "Security Incidents",
      improvement: "-85%",
      description: "Reduction in security incidents"
    }
  ];

  const complianceFrameworks = [
    {
      name: "SOC 2",
      description: "Service Organization Control 2 compliance for data security and availability",
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "GDPR",
      description: "General Data Protection Regulation compliance for data privacy",
      icon: <Lock className="w-6 h-6" />
    },
    {
      name: "HIPAA",
      description: "Health Insurance Portability and Accountability Act compliance",
      icon: <Heart className="w-6 h-6" />
    },
    {
      name: "PCI DSS",
      description: "Payment Card Industry Data Security Standard compliance",
      icon: <CreditCard className="w-6 h-6" />
    },
    {
      name: "ISO 27001",
      description: "International standard for information security management",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: "NIST",
      description: "National Institute of Standards and Technology cybersecurity framework",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>Cybersecurity Consulting Pro - Advanced Security Solutions | Zion Tech Group</title>
        <meta name="description" content="Protect your business with our comprehensive cybersecurity consulting services. 99.9% threat detection, SOC2 compliance, and zero trust architecture implementation." />
        <meta name="keywords" content="cybersecurity consulting, security assessment, penetration testing, compliance, SOC2, GDPR, zero trust, threat detection" />
        <link rel="canonical" href="https://ziontechgroup.com/cybersecurity-consulting-pro" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cybersecurity Consulting Pro - Advanced Security Solutions" />
        <meta property="og:description" content="Protect your business with our comprehensive cybersecurity consulting services. 99.9% threat detection, SOC2 compliance, and zero trust architecture." />
        <meta property="og:url" content="https://ziontechgroup.com/cybersecurity-consulting-pro" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cybersecurity Consulting Pro - Advanced Security Solutions" />
        <meta name="twitter:description" content="Protect your business with our comprehensive cybersecurity consulting services. 99.9% threat detection, SOC2 compliance, and zero trust architecture." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Cybersecurity Consulting Pro",
            "description": "Comprehensive cybersecurity consulting services with AI-powered threat detection",
            "url": "https://ziontechgroup.com/cybersecurity-consulting-pro",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            },
            "offers": {
              "@type": "Offer",
              "price": "10000",
              "priceCurrency": "USD"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-6">
            <Shield className="w-5 h-5 mr-2 text-red-400" />
            <span className="text-red-300 font-medium">Advanced Cybersecurity Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Cybersecurity Consulting
            <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Protect your business with our comprehensive cybersecurity consulting services. 99.9% threat detection, 
            SOC2 compliance, and zero trust architecture implementation with expert security professionals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Security Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-red-500 text-red-300 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Link>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">{metric.improvement}</div>
                <div className="text-gray-300 mb-1">{metric.title}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end cybersecurity solutions with AI-powered threat detection and expert consulting
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-red-500/50 transition-all duration-300">
                <div className="text-red-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Complete Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive security services to protect every aspect of your business
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 group-hover:border-red-500/50 transition-all duration-300">
                  <div className="text-red-400 mb-4 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ensure compliance with industry standards and regulations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complianceFrameworks.map((framework, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <div className="text-red-400 mb-4 flex justify-center">
                  {framework.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {framework.name}
                </h3>
                <p className="text-gray-300 text-center">
                  {framework.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security package that fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                plan.popular 
                  ? 'border-red-500 ring-2 ring-red-500/20' 
                  : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white hover:from-red-600 hover:to-orange-600'
                      : 'border border-red-500 text-red-300 hover:bg-red-500/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Cybersecurity Consulting Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies already using Cybersecurity Consulting Pro to protect their digital assets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Security Assessment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-red-500 text-red-300 font-semibold rounded-lg hover:bg-red-500/10 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}