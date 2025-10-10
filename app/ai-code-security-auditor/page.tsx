import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  Search, 
  AlertTriangle, 
  CheckCircle, 
  Code, 
  Zap, 
  Lock, 
  Eye, 
  FileText, 
  Settings, 
  Users, 
  Clock, 
  Award,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  BarChart3,
  Database,
  Cpu
} from 'lucide-react';

const AICodeSecurityAuditorPro: React.FC = () => {
  const features = [
    {
      icon: Search,
      title: "Real-Time Security Scanning",
      description: "Continuously scan your codebase for vulnerabilities and security issues with AI-powered analysis"
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Detection",
      description: "Identify OWASP Top 10 vulnerabilities, SQL injection, XSS, and other security threats automatically"
    },
    {
      icon: FileText,
      title: "Compliance Reports",
      description: "Generate detailed compliance reports for SOC 2, GDPR, HIPAA, and other regulatory requirements"
    },
    {
      icon: Code,
      title: "Multi-Language Support",
      description: "Support for 25+ programming languages including Python, JavaScript, Java, C++, and more"
    },
    {
      icon: Clock,
      title: "CI/CD Integration",
      description: "Seamlessly integrate with your existing CI/CD pipeline for automated security checks"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share findings with your team, assign tasks, and track remediation progress"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small development teams",
      features: [
        "Up to 5 repositories",
        "Basic vulnerability scanning",
        "Email alerts",
        "Standard compliance reports",
        "Community support",
        "API access"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing development teams",
      features: [
        "Up to 25 repositories",
        "Advanced AI scanning",
        "Real-time alerts",
        "Custom compliance reports",
        "Priority support",
        "Full API access",
        "Team collaboration (10 users)",
        "Custom rules engine"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited repositories",
        "Enterprise AI scanning",
        "Custom alert channels",
        "Advanced compliance reporting",
        "24/7 dedicated support",
        "Full API access",
        "Unlimited team collaboration",
        "Custom rules engine",
        "White-label solution",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const securityChecks = [
    {
      title: "OWASP Top 10",
      description: "Comprehensive scanning for the most critical web application security risks",
      icon: Shield
    },
    {
      title: "Dependency Analysis",
      description: "Scan third-party dependencies for known vulnerabilities and license issues",
      icon: Database
    },
    {
      title: "Code Quality",
      description: "Analyze code quality metrics and identify potential security anti-patterns",
      icon: Code
    },
    {
      title: "Secrets Detection",
      description: "Detect hardcoded secrets, API keys, and sensitive information in your code",
      icon: Lock
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Code Security Auditor Pro - Automated Security Analysis Platform | Zion Tech Group</title>
        <meta name="description" content="Automated code security analysis and vulnerability detection platform. Real-time scanning, compliance reporting, and CI/CD integration. Starting at $149/month." />
        <meta name="keywords" content="code security, vulnerability scanning, security audit, OWASP, compliance, code analysis, security testing" />
        <meta property="og:title" content="AI Code Security Auditor Pro - Automated Security Analysis Platform" />
        <meta property="og:description" content="Automated code security analysis and vulnerability detection platform with real-time scanning and compliance reporting." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-code-security-auditor" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="relative z-10 container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-red-400/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                <span>Security</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                AI Code Security Auditor Pro
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Automated code security analysis and vulnerability detection platform. 
                Protect your applications with real-time scanning and compliance reporting.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-red-400/30">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-white font-medium">Real-Time Scanning</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-orange-400/30">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span className="text-white font-medium">OWASP Top 10</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-yellow-400/30">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <span className="text-white font-medium">25+ Languages</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 flex items-center">
                  Start Free Scan
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="px-8 py-4 border border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-white transition-all duration-300 flex items-center">
                  <Eye className="w-5 h-5 mr-2" />
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive security analysis powered by AI to protect your applications from threats.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-red-400/50 transition-all duration-300 p-6 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Checks Section */}
        <div className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Comprehensive Security Checks
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI-powered engine performs deep security analysis across multiple dimensions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityChecks.map((check, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-gray-700 p-6 text-center hover:border-orange-400/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <check.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {check.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {check.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security plan that fits your team size and requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-slate-800/50 backdrop-blur-sm rounded-2xl border p-8 ${
                    plan.popular 
                      ? 'border-red-400/50 ring-2 ring-red-400/20' 
                      : 'border-gray-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white hover:from-red-700 hover:to-orange-700 transform hover:scale-105'
                        : 'border border-gray-600 text-gray-300 hover:border-red-400 hover:text-red-400'
                    }`}
                  >
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Secure Your Code Today
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Contact us for a free security assessment and discover how AI Code Security Auditor Pro 
                can protect your applications from vulnerabilities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-6 h-6 text-red-400" />
                  <a href="tel:+13024640950" className="text-white hover:text-red-400 transition-colors">
                    +1 (302) 464-0950
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-6 h-6 text-red-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="text-white hover:text-red-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-6 h-6 text-red-400" />
                  <span className="text-white">Middletown, DE 19709</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-orange-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Scan
                </button>
                <button className="px-8 py-4 border border-red-400 text-red-400 font-semibold rounded-xl hover:bg-red-400 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AICodeSecurityAuditorPro;
