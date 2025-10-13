import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Zap, Brain, Shield, Cloud, Wifi } from "lucide-react";

export default function Pricing() {
  const aiServices = [
    {
      name: "AI Analytics",
      description: "Advanced data analytics with AI insights",
      price: "$2,999",
      period: "per month",
      features: [
        "Real-time analytics dashboard",
        "Predictive modeling",
        "Custom reports",
        "API access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "AI Automation",
      description: "Intelligent process automation",
      price: "$1,999",
      period: "per month",
      features: [
        "Workflow automation",
        "Process optimization",
        "Custom integrations",
        "Priority support",
        "Unlimited workflows"
      ],
      popular: true
    },
    {
      name: "AI Cybersecurity",
      description: "AI-powered security protection",
      price: "$3,999",
      period: "per month",
      features: [
        "Threat detection",
        "Behavioral analysis",
        "Automated response",
        "24/7 monitoring",
        "Security reports"
      ],
      popular: false
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure",
      description: "Scalable cloud solutions",
      price: "$999",
      period: "per month",
      features: [
        "Cloud setup & migration",
        "24/7 monitoring",
        "Backup & recovery",
        "Security management",
        "Technical support"
      ],
      popular: false
    },
    {
      name: "Web Development",
      description: "Custom web applications",
      price: "$2,499",
      period: "per project",
      features: [
        "Custom design",
        "Responsive development",
        "SEO optimization",
        "Performance tuning",
        "6 months support"
      ],
      popular: true
    },
    {
      name: "Mobile Development",
      description: "Native & cross-platform apps",
      price: "$3,999",
      period: "per project",
      features: [
        "iOS & Android apps",
        "Cross-platform support",
        "App store deployment",
        "Push notifications",
        "12 months support"
      ],
      popular: false
    }
  ];

  const microSaas = [
    {
      name: "Zion Analytics Pro",
      description: "Advanced business analytics",
      price: "$299",
      period: "per month",
      features: [
        "Real-time dashboards",
        "Custom reports",
        "Data visualization",
        "API access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Zion Security Shield",
      description: "Comprehensive security suite",
      price: "$199",
      period: "per month",
      features: [
        "Threat monitoring",
        "Automated scanning",
        "Security alerts",
        "Compliance reports",
        "24/7 support"
      ],
      popular: true
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation",
      price: "$149",
      period: "per month",
      features: [
        "Content generation",
        "SEO optimization",
        "Multi-platform publishing",
        "Analytics tracking",
        "Team collaboration"
      ],
      popular: false
    }
  ];

  const fiveGServices = [
    {
      name: "5G Implementation",
      description: "Complete 5G network setup",
      price: "$9,999",
      period: "per project",
      features: [
        "Network planning",
        "Infrastructure setup",
        "Testing & optimization",
        "Training & support",
        "12 months warranty"
      ],
      popular: false
    },
    {
      name: "5G Edge Computing",
      description: "Edge computing solutions",
      price: "$4,999",
      period: "per month",
      features: [
        "Edge infrastructure",
        "Real-time processing",
        "Low latency optimization",
        "Monitoring & maintenance",
        "Technical support"
      ],
      popular: true
    },
    {
      name: "5G Smart City",
      description: "Smart city solutions",
      price: "$19,999",
      period: "per project",
      features: [
        "IoT integration",
        "Data analytics",
        "Smart infrastructure",
        "Citizen services",
        "24/7 monitoring"
      ],
      popular: false
    }
  ];

  const serviceCategories = [
    {
      title: "AI Services",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: aiServices
    },
    {
      title: "IT Services",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: itServices
    },
    {
      title: "Micro SAAS",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: microSaas
    },
    {
      title: "5G Solutions",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      services: fiveGServices
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent AI, IT & 5G Service Pricing</title>
        <meta
          name="description"
          content="Transparent pricing for AI services, IT solutions, micro SAAS products, and 5G implementation. Choose the plan that fits your business needs and budget."
        />
        <meta
          name="keywords"
          content="pricing, AI services pricing, IT services cost, micro SAAS pricing, 5G implementation cost, business technology pricing"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transparent
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Pricing
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All our services come with transparent pricing, 
              no hidden fees, and flexible payment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Service Categories Pricing */}
        {serviceCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className={`py-16 px-4 sm:px-6 lg:px-8 ${categoryIndex % 2 === 1 ? 'bg-white/5' : ''}`}>
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {category.title} Pricing
                  </h2>
                </div>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the {category.title.toLowerCase()} plan that fits your business needs and budget.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-300 ${
                      service.popular 
                        ? 'border-cyan-400 bg-white/20' 
                        : 'border-white/20 hover:border-white/40'
                    }`}
                  >
                    {service.popular && (
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                        Most Popular
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">{service.price}</span>
                        <span className="text-gray-300 ml-2">{service.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/contact"
                      className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        service.popular
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
        ))}

        {/* Enterprise Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Enterprise Solutions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              For large organizations with complex requirements, we offer custom enterprise solutions 
              with dedicated support, SLA guarantees, and on-premise deployment options.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Custom AI models</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Dedicated support team</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">On-premise deployment</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">SLA guarantees</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Custom integrations</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                    <span className="text-gray-300">Priority support</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center"
                >
                  Contact Enterprise Sales
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free consultation and custom quote tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}