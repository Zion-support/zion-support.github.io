import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Eye, 
  AlertTriangle, 
  Lock, 
  BarChart3, 
  Zap, 
  ArrowRight, 
  Sparkles,
  CheckCircle,
  Star,
  Brain,
  Target,
  Globe,
  Smartphone,
  Monitor,
  Headphones,
  Settings,
  Cloud,
  TrendingUp,
  Heart,
  Receipt,
  Package,
  Code,
  Bot,
  Wifi,
  Cpu,
  Network,
  HardDrive,
  Phone,
  Laptop,
  Rocket,
  Mail,
  Database,
  Play,
  Award,
  Clock,
  FileText,
  Calendar,
  Users
} from "lucide-react";

export default function ZionAICybersecurityMonitorPro() {
  const features = [
    "AI-Powered Threat Detection & Analysis",
    "Real-time Network Monitoring & Intrusion Detection",
    "Automated Incident Response & Remediation",
    "Advanced Behavioral Analytics & Anomaly Detection",
    "Multi-vector Attack Prevention & Blocking",
    "Compliance Monitoring & Reporting (SOC2, GDPR, HIPAA)",
    "Vulnerability Assessment & Patch Management",
    "Security Awareness Training & Phishing Simulation",
    "Dark Web Monitoring & Threat Intelligence",
    "Advanced Log Analysis & Forensic Investigation",
    "Zero Trust Architecture Implementation",
    "24/7 Security Operations Center (SOC) Support"
  ];

  const benefits = [
    "99.9% threat detection accuracy",
    "90% reduction in security incidents",
    "50% faster incident response time",
    "Complete compliance automation"
  ];

  const securityModules = [
    {
      name: "Threat Detection",
      description: "AI-powered threat detection and analysis",
      icon: <Eye className="w-8 h-8" />,
      features: [
        "Machine learning threat detection",
        "Behavioral analysis and anomaly detection",
        "Real-time threat intelligence feeds",
        "Automated threat classification"
      ]
    },
    {
      name: "Incident Response",
      description: "Automated incident response and remediation",
      icon: <Zap className="w-8 h-8" />,
      features: [
        "Automated incident triage",
        "Response playbook execution",
        "Threat containment and isolation",
        "Recovery and restoration automation"
      ]
    },
    {
      name: "Compliance Management",
      description: "Automated compliance monitoring and reporting",
      icon: <FileText className="w-8 h-8" />,
      features: [
        "SOC2, GDPR, HIPAA compliance",
        "Automated compliance reporting",
        "Policy violation detection",
        "Audit trail management"
      ]
    },
    {
      name: "Vulnerability Management",
      description: "Comprehensive vulnerability assessment and patching",
      icon: <Shield className="w-8 h-8" />,
      features: [
        "Automated vulnerability scanning",
        "Risk assessment and prioritization",
        "Patch management automation",
        "Security configuration management"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 50 endpoints",
        "Basic threat detection",
        "Email support",
        "Standard reporting",
        "Basic compliance monitoring",
        "1 security admin account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 200 endpoints",
        "Advanced AI threat detection",
        "Priority support",
        "Advanced analytics",
        "Full compliance suite",
        "5 security admin accounts",
        "24/7 monitoring",
        "Incident response automation"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited endpoints",
        "Full AI security suite",
        "Dedicated SOC team",
        "Custom reporting",
        "Unlimited admin accounts",
        "API access",
        "White-label solution",
        "Custom integrations",
        "Dedicated security consultant",
        "Penetration testing included"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      company: "Financial Services Corp",
      role: "CISO",
      content: "Zion AI Cybersecurity Monitor Pro has revolutionized our security posture. We've reduced security incidents by 85% and improved our response time significantly.",
      rating: 5
    },
    {
      name: "Maria Santos",
      company: "Healthcare Network",
      role: "Security Director",
      content: "The AI-powered threat detection is incredibly accurate. We caught several sophisticated attacks that would have gone unnoticed with traditional tools.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "E-commerce Platform",
      role: "CTO",
      content: "The compliance automation features have saved us countless hours and helped us maintain perfect audit scores. Highly recommended for any organization.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Cybersecurity Monitor Pro - Advanced AI Security Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Protect your organization with AI-powered cybersecurity monitoring, threat detection, incident response, and compliance management. Advanced security for modern businesses."
        />
        <meta
          name="keywords"
          content="AI cybersecurity, threat detection, incident response, compliance monitoring, security automation, SOC services, vulnerability management, security analytics"
        />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-cybersecurity-monitor-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                <span className="text-cyan-400 text-sm font-medium">#1 AI Security Platform 2024</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  Zion AI Cybersecurity Monitor Pro
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
                Protect your organization with AI-powered cybersecurity monitoring, threat detection, 
                incident response, and compliance management. Advanced security for the modern digital world.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Watch Demo
                  <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-16">
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-xs md:text-sm">Threat Detection</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">50%</div>
                <div className="text-gray-300 text-xs md:text-sm">Faster Response</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-xs md:text-sm">Monitoring</div>
              </div>
              <div className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-gray-300 text-xs md:text-sm">Compliance</div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Modules Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Comprehensive Security Modules
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete cybersecurity suite with AI-powered protection across all attack vectors and compliance requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {securityModules.map((module, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-6 group-hover:scale-110 transition-transform">
                      {module.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {module.name}
                      </h3>
                      <p className="text-gray-300">{module.description}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced AI-Powered Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to detect, prevent, and respond to cyber threats in real-time.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      <Brain className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {feature}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose Your Security Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed to protect organizations of all sizes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                    plan.popular 
                      ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                      : 'border-white/20 hover:bg-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Security Leaders Worldwide
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what security professionals say about Zion AI Cybersecurity Monitor Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of organizations using Zion AI Cybersecurity Monitor Pro to protect their 
              digital assets and maintain compliance. Start your free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <Play className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}