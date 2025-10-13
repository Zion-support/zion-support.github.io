import React from 'react';
import { }
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Brain,
  Zap,
  Globe,
  Users,
  BarChart3,
  Clock,
  Award,
  Star,
  Activity,
  Database,
  Network,
  FileText,
  Settings
} from 'lucide-react';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
const ZionAiCybersecuritySuitePro = () => {}
    {}
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent sophisticated cyber threats in real-time",
      icon: <Brain className="w-6 h-6" />,
      stats: "99.9% accuracy"
    },
    {}
      title: "Zero-Trust Architecture",
      description: "Implement comprehensive zero-trust security model with continuous verification and monitoring",
      icon: <Lock className="w-6 h-6" />,
      stats: "100% coverage"
    },
    {}
      title: "Automated Incident Response",
      description: "AI-driven incident response that automatically contains and remediates security breaches",
      icon: <Zap className="w-6 h-6" />,
      stats: "2-minute response"
    },
    {}
      title: "Compliance Automation",
      description: "Automated compliance monitoring and reporting for GDPR, HIPAA, SOX, and other regulations",
      icon: <FileText className="w-6 h-6" />,
      stats: "50+ frameworks"
    }
  ];
    {}
      name: "Robert Chen",
      company: "Financial Services Corp",
      role: "CISO",
      content: "Zion AI Cybersecurity Suite Pro has transformed our security posture. We've reduced security incidents by 90% and achieved full compliance with all major frameworks.",
      rating: 5,
      avatar: "RC"
    },
    {}
      name: "Maria Rodriguez",
      company: "Healthcare Systems Inc",
      role: "Security Director",
      content: "The AI-powered threat detection is incredibly sophisticated. It caught several advanced persistent threats that other solutions missed completely.",
      rating: 5,
      avatar: "MR"
    },
    {}
      name: "James Wilson",
      company: "TechStart Solutions",
      role: "CTO",
      content: "This platform gives us enterprise-grade security at a fraction of the cost of traditional solutions. The automated compliance reporting alone saves us weeks of work.",
      rating: 5,
      avatar: "JW"
    }
  ];
    { number: "10,000+", label: "Organizations Protected", icon: <Shield className="w-6 h-6" /> },
    { number: "99.9%", label: "Threat Detection Accuracy", icon: <Award className="w-6 h-6" /> },
    { number: "2min", label: "Average Response Time", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Compliance Frameworks", icon: <FileText className="w-6 h-6" /> }
  ];
  return ()
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>Zion AI Cybersecurity Suite Pro - Advanced AI-Powered Security Platform | Zion Tech Group</title>
        <meta name="description" content="Protect your organization with Zion AI Cybersecurity Suite Pro. AI-powered threat detection, zero-trust architecture, and automated compliance. Enterprise-grade security made simple." />
        <meta name="keywords" content="cybersecurity, AI security, threat detection, zero trust, compliance, SOC, endpoint protection, network security, data protection" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-cybersecurity-suite-pro" />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">AI-Powered Cybersecurity</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              Zion AI Cybersecurity Suite Pro
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade cybersecurity powered by artificial intelligence. Protect your organization with 
            advanced threat detection, zero-trust architecture, and automated compliance management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Shield className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">)
            {stats.map((stat, index) => (}
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>)
            ))}
          </div>
        </ResponsiveContainer>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced AI Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered security platform provides comprehensive protection against the most sophisticated cyber threats
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (}
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>)
            ))}
          </div>
        </ResponsiveContainer>
      </section>
      {/* Security Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Modules
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete cybersecurity coverage across all attack vectors and compliance requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityModules.map((module, index) => (}
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-red-400 transition-colors">
                  {module.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {module.description}
                </p>
                <div className="space-y-2">)
                  {module.capabilities.map((capability, idx) => (}
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {capability}
                    </div>)
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Enterprise Security Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that matches your organization's needs and compliance requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (}
              <FuturisticCard
                key={index}
                className={`relative group hover:scale-105 transition-all duration-300 ${}
                  plan.popular ? 'ring-2 ring-red-500 scale-105' : ''
                }`}
              >
                {plan.popular && ()}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>)
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (}
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>)
                  ))}
                </ul>
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "#signup"}
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations are using Zion AI Cybersecurity Suite Pro to protect their critical assets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (}
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">)
                  {[...Array(testimonial.rating)].map((_, i) => (}
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Organization Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't wait for a breach to happen. Protect your organization with AI-powered cybersecurity that adapts to evolving threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="#signup"
                variant="primary"
                size="lg"
                icon={<Shield className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/contact"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Sales
              </FuturisticButton>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>30-day free trial • No credit card required • Cancel anytime</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};
export default ZionAiCybersecuritySuitePro;