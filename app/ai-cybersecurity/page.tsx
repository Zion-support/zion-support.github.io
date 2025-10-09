import React from 'react';
import { ArrowRight, CheckCircle, Star, Shield, Eye, Lock, AlertTriangle } from 'lucide-react';

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "24/7 SOC Monitoring",
      description: "Round-the-clock security operations center with AI-powered threat hunting"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Zero Trust Security",
      description: "Implement zero trust architecture with AI-driven access controls and verification"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Incident Response",
      description: "Automated incident response with AI-guided remediation and recovery procedures"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$2,499",
      period: "per month",
      description: "Basic AI security for small to medium businesses",
      features: [
        "AI threat detection",
        "24/7 monitoring",
        "Basic incident response",
        "Email support",
        "Monthly security reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "per month",
      description: "Advanced security for growing companies",
      features: [
        "Advanced AI threat detection",
        "Dedicated SOC team",
        "Rapid incident response",
        "Priority support",
        "Compliance management",
        "Security training"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "per month",
      description: "Complete security solution for large organizations",
      features: [
        "Custom AI models",
        "Dedicated security team",
        "White-glove service",
        "24/7 phone support",
        "Custom integrations",
        "Executive reporting"
      ],
      popular: false
    }
  ];

  const securityServices = [
    {
      title: "Vulnerability Assessment",
      description: "Comprehensive security scanning and vulnerability management",
      features: ["Automated scanning", "Risk prioritization", "Remediation guidance"]
    },
    {
      title: "Penetration Testing",
      description: "Simulated cyber attacks to identify security weaknesses",
      features: ["External testing", "Internal testing", "Social engineering"]
    },
    {
      title: "Compliance Management",
      description: "Ensure compliance with industry standards and regulations",
      features: ["GDPR compliance", "HIPAA compliance", "SOC 2 compliance"]
    },
    {
      title: "Security Training",
      description: "Educate your team on cybersecurity best practices",
      features: ["Phishing simulation", "Security awareness", "Incident response training"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Cybersecurity
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-400 max-w-3xl mx-auto">
              Protect your business with AI-powered cybersecurity solutions that adapt and learn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a 
                href="/contact"
                className="border-2 border-red-400 text-red-400 px-8 py-3 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-colors"
              >
                Get Security Audit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Security Features
            </h2>
            <p className="text-xl text-gray-300">
              Next-generation cybersecurity powered by artificial intelligence
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-red-400 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-300">
              Complete cybersecurity solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityServices.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Plans
            </h2>
            <p className="text-xl text-gray-300">
              Choose the level of protection that fits your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 relative ${plan.popular ? 'ring-2 ring-red-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-red-400 mb-2">{plan.price}</div>
                  <div className="text-gray-400">{plan.period}</div>
                  <p className="text-gray-300 mt-4">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href="/contact"
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors inline-flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Get Protected
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Wait for a Breach
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Protect your business today with our AI-powered cybersecurity solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center"
            >
              📞 Call (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-red-400 text-red-400 px-8 py-3 rounded-lg font-semibold hover:bg-red-400 hover:text-white transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-400">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICybersecurityPage;