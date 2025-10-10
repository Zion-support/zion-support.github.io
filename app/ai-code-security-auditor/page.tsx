import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Bug, 
  Lock, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight,
  Brain,
  Code,
  FileText,
  Users,
  Clock,
  Award,
  TrendingUp,
  Target,
  Sparkles,
  Zap,
  Database,
  Eye,
  Settings,
  Download
} from 'lucide-react';

const AICodeSecurityAuditorPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Vulnerability Detection",
      description: "Advanced machine learning algorithms identify security flaws with 99.7% accuracy",
      price: "$49/month"
    },
    {
      icon: Shield,
      title: "Real-Time Security Scanning",
      description: "Continuous monitoring and instant alerts for new security threats",
      price: "$39/month"
    },
    {
      icon: Code,
      title: "Multi-Language Support",
      description: "Supports 25+ programming languages including Python, JavaScript, Java, C++",
      price: "$29/month"
    },
    {
      icon: Database,
      title: "Compliance Checking",
      description: "Automated compliance verification for GDPR, HIPAA, SOC2, and PCI DSS",
      price: "$59/month"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share security reports and collaborate on fixes with your development team",
      price: "$79/month"
    },
    {
      icon: Clock,
      title: "CI/CD Integration",
      description: "Seamless integration with GitHub, GitLab, Jenkins, and other CI/CD pipelines",
      price: "$39/month"
    }
  ];

  const pricingPlans = [
    {
      name: "Developer",
      price: "$29",
      period: "/month",
      description: "Perfect for individual developers and small projects",
      features: [
        "Up to 5 repositories",
        "Basic vulnerability scanning",
        "Email notifications",
        "Standard support",
        "Basic compliance checks",
        "PDF reports"
      ],
      popular: false
    },
    {
      name: "Team",
      price: "$99",
      period: "/month",
      description: "Ideal for development teams and growing companies",
      features: [
        "Up to 25 repositories",
        "Advanced AI scanning",
        "Real-time notifications",
        "Priority support",
        "Full compliance suite",
        "Team collaboration tools",
        "API access",
        "Custom security rules"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "/month",
      description: "For large organizations with complex security needs",
      features: [
        "Unlimited repositories",
        "Premium AI scanning",
        "24/7 monitoring",
        "Dedicated support",
        "Custom compliance frameworks",
        "Advanced analytics",
        "White-label solution",
        "On-premise deployment",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const securityChecks = [
    {
      category: "OWASP Top 10",
      icon: Shield,
      description: "Comprehensive checks for the most critical web application security risks",
      items: [
        "Injection vulnerabilities",
        "Broken authentication",
        "Sensitive data exposure",
        "XML external entities",
        "Broken access control"
      ]
    },
    {
      category: "Code Quality",
      icon: Code,
      description: "Identify code smells, anti-patterns, and maintainability issues",
      items: [
        "Code duplication detection",
        "Complexity analysis",
        "Dead code identification",
        "Performance bottlenecks",
        "Memory leak detection"
      ]
    },
    {
      category: "Dependency Security",
      icon: Database,
      description: "Scan third-party libraries and dependencies for known vulnerabilities",
      items: [
        "Vulnerability database matching",
        "License compliance checking",
        "Outdated dependency detection",
        "Supply chain security",
        "Automated updates"
      ]
    },
    {
      category: "Infrastructure Security",
      icon: Settings,
      description: "Analyze infrastructure as code and deployment configurations",
      items: [
        "Docker security scanning",
        "Kubernetes configuration checks",
        "Cloud security best practices",
        "Network security analysis",
        "Secrets management"
      ]
    }
  ];

  const benefits = [
    {
      title: "Reduce Security Risks",
      description: "Identify and fix vulnerabilities before they become security incidents",
      icon: Shield,
      stats: "90% reduction in security incidents"
    },
    {
      title: "Save Development Time",
      description: "Automated scanning saves hours of manual code review",
      icon: Clock,
      stats: "75% faster security reviews"
    },
    {
      title: "Ensure Compliance",
      description: "Meet regulatory requirements with automated compliance checking",
      icon: Award,
      stats: "100% compliance coverage"
    },
    {
      title: "Improve Code Quality",
      description: "Catch code quality issues early in the development process",
      icon: Code,
      stats: "60% fewer bugs in production"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Helmet>
        <title>AI Code Security Auditor - Automated Security Scanning | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Secure your code with AI-powered security auditing. Automated vulnerability detection, compliance checking, and real-time monitoring. Starting at $29/month." 
        />
        <meta 
          name="keywords" 
          content="AI code security, vulnerability scanning, security auditing, code analysis, OWASP, compliance, cybersecurity, devsecops" 
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
              AI-Powered Security
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              AI Code Security
              <span className="block bg-gradient-to-r from-red-400 via-orange-400 to-cyan-400 bg-clip-text text-transparent">
                Auditor Pro
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Protect your codebase with AI-powered security auditing. Detect vulnerabilities, 
              ensure compliance, and maintain code quality with automated scanning and 
              real-time monitoring.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Start Free Scan
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group border-2 border-red-400 text-red-300 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center">
                <Download className="w-5 h-5 mr-2" />
                Download Report
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400 mb-2">99.7%</div>
                <div className="text-gray-300">Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
                <div className="text-gray-300">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">90%</div>
                <div className="text-gray-300">Risk Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">5k+</div>
                <div className="text-gray-300">Projects Secured</div>
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
              Our AI Code Security Auditor provides everything you need to secure your 
              codebase and maintain compliance with industry standards.
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

      {/* Security Checks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Comprehensive Security
              <span className="block bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
                Checks
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI auditor performs deep security analysis across multiple categories 
              to ensure your code meets the highest security standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityChecks.map((check, index) => (
              <div key={index} className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <check.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{check.category}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{check.description}</p>
                    
                    <ul className="space-y-2">
                      {check.items.map((item, itemIndex) => (
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

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our
              <span className="block bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
                Security Auditor?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of developers and organizations who trust our AI-powered 
              security auditing to protect their code and maintain compliance.
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
              Simple, Transparent
              <span className="block bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the perfect plan for your security needs. 
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
            Secure Your Code
            <span className="block bg-gradient-to-r from-red-400 to-cyan-400 bg-clip-text text-transparent">
              Today
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Don't wait for a security breach. Start protecting your codebase with 
            our AI-powered security auditor and ensure your applications are secure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Start Free Scan
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group border-2 border-red-400 text-red-300 hover:bg-red-400 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center">
              <Settings className="w-5 h-5 mr-2" />
              Contact Sales
            </button>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICodeSecurityAuditorPage;