import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Star, 
  Zap, 
  ArrowRight, 
  Phone, 
  Mail,
  Clock,
  Users,
  Shield,
  Brain,
  Cloud,
  Database,
  Code,
  Globe,
  Smartphone,
  Target,
  Rocket,
  BarChart3,
  MessageSquare,
  FileText,
  Settings,
  Lock,
  TrendingUp
} from 'lucide-react';

const PricingPage: React.FC = () => {
  const microSaasPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for small businesses getting started with AI",
      features: [
        "5,000 AI content generations/month",
        "Basic analytics dashboard",
        "Email support",
        "Standard AI models",
        "Basic integrations",
        "1 user account"
      ],
      limitations: [
        "Limited customization",
        "Basic reporting"
      ],
      popular: false,
      icon: Zap
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Unlimited AI content generations",
        "Advanced analytics dashboard",
        "Priority support",
        "Premium AI models",
        "Advanced integrations",
        "Up to 5 user accounts",
        "Custom branding",
        "API access",
        "Advanced reporting",
        "Team collaboration"
      ],
      limitations: [],
      popular: true,
      icon: Star
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations with complex requirements",
      features: [
        "Everything in Professional",
        "Unlimited user accounts",
        "Custom AI model training",
        "Dedicated support manager",
        "White-label solution",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantee",
        "Custom reporting",
        "On-premise deployment option"
      ],
      limitations: [],
      popular: false,
      icon: Target
    }
  ];

  const aiServices = [
    {
      name: "AI Content Generation",
      price: "Starting at $2,500/month",
      description: "Custom AI content generation solution",
      features: [
        "Unlimited content generation",
        "Multiple AI models",
        "SEO optimization",
        "Brand voice training",
        "Content scheduling",
        "Performance analytics"
      ],
      icon: FileText
    },
    {
      name: "Machine Learning Solutions",
      price: "Starting at $5,000/project",
      description: "Custom ML models for your business",
      features: [
        "Custom model development",
        "Data preprocessing",
        "Model training & validation",
        "API integration",
        "Performance monitoring",
        "Ongoing support"
      ],
      icon: Brain
    },
    {
      name: "AI Analytics Dashboard",
      price: "Starting at $3,000/month",
      description: "Real-time AI-powered analytics",
      features: [
        "Real-time data visualization",
        "AI predictions",
        "Custom reports",
        "API integration",
        "Mobile responsive",
        "Automated alerts"
      ],
      icon: BarChart3
    },
    {
      name: "AI Automation",
      price: "Starting at $6,000/project",
      description: "Intelligent process automation",
      features: [
        "Process automation",
        "Workflow optimization",
        "RPA integration",
        "Error handling",
        "Performance monitoring",
        "Custom triggers"
      ],
      icon: Rocket
    }
  ];

  const itServices = [
    {
      name: "Cloud Migration",
      price: "Starting at $10,000/project",
      description: "Seamless cloud migration services",
      features: [
        "Zero-downtime migration",
        "Multi-cloud strategy",
        "Cost optimization",
        "Security implementation",
        "Performance monitoring",
        "24/7 support"
      ],
      icon: Cloud
    },
    {
      name: "Web Development",
      price: "Starting at $3,000/project",
      description: "Modern, responsive web applications",
      features: [
        "Responsive design",
        "SEO optimization",
        "Performance optimization",
        "Security implementation",
        "CMS integration",
        "Analytics integration"
      ],
      icon: Globe
    },
    {
      name: "Mobile App Development",
      price: "Starting at $8,000/project",
      description: "Native and cross-platform mobile apps",
      features: [
        "Native iOS & Android",
        "Cross-platform solutions",
        "Modern UI/UX design",
        "API integration",
        "Push notifications",
        "App store optimization"
      ],
      icon: Smartphone
    },
    {
      name: "Cybersecurity Solutions",
      price: "Starting at $2,500/assessment",
      description: "Comprehensive security solutions",
      features: [
        "Security audits",
        "Vulnerability testing",
        "Penetration testing",
        "Compliance management",
        "Incident response",
        "24/7 monitoring"
      ],
      icon: Shield
    }
  ];

  const addOns = [
    {
      name: "24/7 Premium Support",
      price: "$500/month",
      description: "Round-the-clock technical support",
      icon: Clock
    },
    {
      name: "Custom Integration",
      price: "$1,500/project",
      description: "Custom API integrations and connectors",
      icon: Settings
    },
    {
      name: "Training & Onboarding",
      price: "$1,000/session",
      description: "Team training and system onboarding",
      icon: Users
    },
    {
      name: "Performance Optimization",
      price: "$2,000/project",
      description: "System performance tuning and optimization",
      icon: TrendingUp
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI & IT Solutions Pricing</title>
        <meta name="description" content="Transparent pricing for AI services, IT solutions, and micro SAAS platforms. Starting from $29/month for micro SAAS to custom enterprise solutions." />
        <meta name="keywords" content="AI services pricing, IT solutions cost, micro SAAS pricing, cloud migration cost, web development pricing" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Pricing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Choose the perfect plan for your business needs. From micro SAAS subscriptions to custom enterprise solutions, 
                we offer flexible pricing options to fit every budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a 
                  href="tel:+13024640950" 
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Micro SAAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Plans</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use micro SAAS solutions with instant deployment. No setup fees, no long-term contracts.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {microSaasPlans.map((plan, index) => {
                const Icon = plan.icon;
                return (
                  <div key={index} className={`relative bg-slate-800 rounded-xl p-8 border transition-all duration-300 hover:shadow-lg ${
                    plan.popular 
                      ? 'border-cyan-500 shadow-cyan-500/25 scale-105' 
                      : 'border-slate-700 hover:border-cyan-500/50'
                  }`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                          <Star className="w-4 h-4 mr-2" />
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6">
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-cyan-500/20 rounded-full">
                          <Icon className="w-8 h-8 text-cyan-400" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="mb-6">
                        <span className="text-4xl font-bold text-white">{plan.price}</span>
                        <span className="text-gray-400 ml-2">{plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      to="/contact" 
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700'
                          : 'bg-slate-700 text-white hover:bg-slate-600'
                      }`}
                    >
                      Get Started
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Custom AI solutions tailored to your specific business requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact" 
                      className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 text-center block"
                    >
                      Get Quote
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions with transparent, project-based pricing.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-cyan-500/20 rounded-lg mr-4">
                        <Icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      to="/contact" 
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                    >
                      Get Quote
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                Additional <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Services</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your solution with our additional services and support options.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOns.map((addon, index) => {
                const Icon = addon.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                        <Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-lg font-bold text-white">{addon.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-4 text-sm">{addon.description}</p>
                    <div className="text-xl font-bold text-purple-400">{addon.price}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Common questions about our pricing and services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Do you offer custom pricing for large projects?</h3>
                <p className="text-gray-300">
                  Yes, we offer custom pricing for enterprise projects and large-scale implementations. 
                  Contact us for a personalized quote based on your specific requirements.
                </p>
              </div>

              <div className="bg-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Are there any setup fees?</h3>
                <p className="text-gray-300">
                  Micro SAAS plans have no setup fees. Custom AI and IT services may include setup costs 
                  depending on the complexity of the project.
                </p>
              </div>

              <div className="bg-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Can I change my plan later?</h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your micro SAAS plan at any time. 
                  Changes take effect on your next billing cycle.
                </p>
              </div>

              <div className="bg-slate-700 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">What payment methods do you accept?</h3>
                <p className="text-gray-300">
                  We accept all major credit cards, bank transfers, and for enterprise clients, 
                  we can arrange custom payment terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your project requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center"
              >
                Get Custom Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PricingPage;