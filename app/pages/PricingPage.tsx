import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Zap, 
  Shield, 
  Users, 
  Clock,
  Phone,
  Mail
} from 'lucide-react';

export default function PricingPage() {
  const microSaasPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses and startups",
      features: [
        "AI Content Generator (1,000 words/month)",
        "Basic Analytics Dashboard",
        "Email Support",
        "5 User Accounts",
        "Basic Templates",
        "Standard Performance"
      ],
      limitations: [
        "Limited to 1,000 AI-generated words per month",
        "Basic analytics only",
        "Email support only"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "AI Content Generator (10,000 words/month)",
        "Advanced Analytics Dashboard",
        "Priority Email Support",
        "25 User Accounts",
        "Premium Templates",
        "High Performance",
        "API Access",
        "Custom Branding"
      ],
      limitations: [
        "Limited to 10,000 AI-generated words per month",
        "No phone support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations with advanced needs",
      features: [
        "Unlimited AI Content Generation",
        "Advanced Analytics & BI",
        "24/7 Phone & Email Support",
        "Unlimited User Accounts",
        "Custom Templates",
        "Maximum Performance",
        "Full API Access",
        "White-label Solution",
        "Dedicated Account Manager",
        "Custom Integrations"
      ],
      limitations: [],
      popular: false
    }
  ];

  const itServicePackages = [
    {
      name: "Basic IT Support",
      price: "$200",
      period: "per month",
      description: "Essential IT support for small businesses",
      features: [
        "24/7 Remote Support",
        "System Monitoring",
        "Software Updates",
        "Basic Security",
        "Email Support",
        "Monthly Reports"
      ],
      limitations: [
        "Limited to 5 devices",
        "No on-site support"
      ]
    },
    {
      name: "Professional IT",
      price: "$500",
      period: "per month",
      description: "Comprehensive IT services for medium businesses",
      features: [
        "24/7 Remote & Phone Support",
        "Advanced System Monitoring",
        "Automated Updates",
        "Advanced Security",
        "Priority Support",
        "Weekly Reports",
        "On-site Support (2 visits/month)",
        "Backup Management"
      ],
      limitations: [
        "Limited to 25 devices"
      ]
    },
    {
      name: "Enterprise IT",
      price: "$1,200",
      period: "per month",
      description: "Full-service IT management for large organizations",
      features: [
        "24/7 Dedicated Support",
        "Comprehensive Monitoring",
        "Proactive Maintenance",
        "Enterprise Security",
        "Dedicated Account Manager",
        "Daily Reports",
        "Unlimited On-site Support",
        "Disaster Recovery",
        "Compliance Management",
        "Custom Solutions"
      ],
      limitations: []
    }
  ];

  const aiServicePackages = [
    {
      name: "AI Starter",
      price: "$2,500",
      period: "one-time",
      description: "Basic AI implementation for small projects",
      features: [
        "Custom AI Model Development",
        "Data Preprocessing",
        "Basic Training",
        "API Integration",
        "30-day Support",
        "Documentation"
      ],
      limitations: [
        "Limited to 1 model",
        "Basic support only"
      ]
    },
    {
      name: "AI Professional",
      price: "$7,500",
      period: "one-time",
      description: "Advanced AI solutions for growing businesses",
      features: [
        "Multiple AI Models",
        "Advanced Data Processing",
        "Model Optimization",
        "Full API Suite",
        "90-day Support",
        "Training & Documentation",
        "Performance Monitoring",
        "Custom Integrations"
      ],
      limitations: [
        "Limited to 5 models"
      ]
    },
    {
      name: "AI Enterprise",
      price: "$15,000",
      period: "one-time",
      description: "Comprehensive AI platform for large organizations",
      features: [
        "Unlimited AI Models",
        "Advanced Data Pipeline",
        "Continuous Learning",
        "Enterprise API",
        "1-year Support",
        "Comprehensive Training",
        "Real-time Monitoring",
        "Custom Development",
        "Dedicated AI Team",
        "Ongoing Optimization"
      ],
      limitations: []
    }
  ];

  const addOnServices = [
    {
      name: "Cloud Migration",
      price: "$2,500 - $10,000",
      description: "Complete cloud infrastructure setup and migration"
    },
    {
      name: "Cybersecurity Audit",
      price: "$1,500 - $5,000",
      description: "Comprehensive security assessment and implementation"
    },
    {
      name: "Data Backup Solutions",
      price: "$500 - $2,000/month",
      description: "Automated backup and disaster recovery systems"
    },
    {
      name: "Custom Development",
      price: "$150/hour",
      description: "Custom software and application development"
    },
    {
      name: "Training & Consulting",
      price: "$200/hour",
      description: "Staff training and technology consulting"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group</title>
        <meta name="description" content="Transparent pricing for AI and IT services. Choose from our flexible plans for micro SAAS, IT services, and AI solutions." />
        <meta name="keywords" content="pricing, AI services pricing, IT services cost, micro SAAS pricing, cloud solutions" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Micro SAAS Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Micro SAAS Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Affordable monthly plans for powerful business tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {microSaasPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 ${plan.popular ? 'border-cyan-500 relative' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {plan.limitations.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Limitations:</h4>
                    <ul className="space-y-1">
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="text-sm text-gray-400">
                          • {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <Link 
                  to="/contact" 
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700' 
                      : 'bg-slate-900 text-white hover:bg-slate-800'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">IT Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Monthly IT support packages for businesses of all sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {itServicePackages.map((plan, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-cyan-600">{plan.price}</span>
                    <span className="text-gray-500 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {plan.limitations.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">Limitations:</h4>
                    <ul className="space-y-1">
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="text-sm text-gray-400">
                          • {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <Link 
                  to="/contact" 
                  className="w-full bg-slate-900 text-white py-3 rounded-lg font-semibold hover:bg-slate-800 transition-all duration-300 text-center block"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Pricing */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">AI Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              One-time implementation costs for custom AI solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiServicePackages.map((plan, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {plan.limitations.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Limitations:</h4>
                    <ul className="space-y-1">
                      {plan.limitations.map((limitation, limitationIndex) => (
                        <li key={limitationIndex} className="text-sm text-gray-400">
                          • {limitation}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <Link 
                  to="/contact" 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                >
                  Get Quote
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Additional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom services and add-ons to enhance your solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="text-2xl font-bold text-cyan-600">{service.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We offer custom pricing for unique requirements. Contact us for a personalized quote.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="flex items-center justify-center">
              <Phone className="w-6 h-6 mr-3" />
              <a href="tel:+13024640950" className="text-lg font-semibold hover:text-cyan-200 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center justify-center">
              <Mail className="w-6 h-6 mr-3" />
              <a href="mailto:kleber@ziontechgroup.com" className="text-lg font-semibold hover:text-cyan-200 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="flex items-center justify-center">
              <Users className="w-6 h-6 mr-3" />
              <span className="text-lg font-semibold">24/7 Support</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              Get Custom Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}