import { ArrowRight, CheckCircle, Star, Zap, Shield, Cloud, Globe, Database } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Pricing() {
  const aiServices = [
    {
      name: "AI Analytics Dashboard Pro",
      price: "$2,500",
      period: "per month",
      features: ["Real-time data processing", "Predictive analytics", "Custom dashboards", "API integration"]
    },
    {
      name: "AI Content Generation Suite",
      price: "$1,800",
      period: "per month",
      features: ["Multi-language support", "SEO optimization", "Brand voice training", "Content scheduling"]
    },
    {
      name: "AI Customer Support Bot",
      price: "$1,200",
      period: "per month",
      features: ["Multi-channel support", "Sentiment analysis", "Escalation management", "Analytics dashboard"]
    },
    {
      name: "AI Cybersecurity Monitor",
      price: "$3,500",
      period: "per month",
      features: ["Real-time monitoring", "Threat intelligence", "Automated response", "Compliance reporting"]
    }
  ];

  const microSaasPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 3 micro SAAS tools",
        "Basic support",
        "Standard integrations",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10 micro SAAS tools",
        "Priority support",
        "Advanced integrations",
        "Custom configurations",
        "Real-time monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited micro SAAS tools",
        "24/7 dedicated support",
        "Custom integrations",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const fiveGServices = [
    {
      name: "5G Network Infrastructure",
      price: "$50,000",
      period: "one-time",
      features: ["Network planning", "Site surveys", "Equipment installation", "Performance optimization"]
    },
    {
      name: "5G Data Analytics",
      price: "$15,000",
      period: "per month",
      features: ["Real-time monitoring", "Predictive analytics", "Performance insights", "Custom dashboards"]
    },
    {
      name: "5G Edge Computing",
      price: "$25,000",
      period: "one-time",
      features: ["Edge servers", "IoT integration", "Low latency processing", "Distributed computing"]
    },
    {
      name: "5G Smart City Solutions",
      price: "$100,000",
      period: "one-time",
      features: ["Smart traffic", "IoT sensors", "Energy management", "Public safety"]
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure",
      price: "$5,000",
      period: "per month",
      features: ["Cloud migration", "Infrastructure setup", "Monitoring", "24/7 support"]
    },
    {
      name: "Cybersecurity Solutions",
      price: "$8,000",
      period: "per month",
      features: ["Security assessment", "Threat monitoring", "Incident response", "Compliance"]
    },
    {
      name: "Web Development",
      price: "$15,000",
      period: "per project",
      features: ["Custom development", "Responsive design", "SEO optimization", "Maintenance"]
    },
    {
      name: "Mobile Development",
      price: "$25,000",
      period: "per project",
      features: ["iOS & Android apps", "Cross-platform", "App store deployment", "Updates"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for All Services</title>
        <meta
          name="description"
          content="Transparent pricing for AI services, IT solutions, micro SAAS, and 5G implementations. Starting from $49/month for micro SAAS to $100,000 for enterprise solutions."
        />
        <meta
          name="keywords"
          content="pricing, AI services pricing, IT services pricing, micro SAAS pricing, 5G solutions pricing, transparent pricing"
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
              Clear, competitive pricing for all our services. No hidden fees, no surprises. 
              Choose the perfect plan for your business needs and budget.
            </p>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Services Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI solutions with transparent monthly pricing and no setup fees.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-300 ml-2">{service.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro SAAS Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions with flexible monthly plans.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSaasPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular 
                      ? 'border-cyan-400 ring-2 ring-cyan-400/50' 
                      : 'border-white/20'
                  } hover:bg-white/20 transition-all duration-300 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
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

        {/* 5G Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                5G Solutions Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Next-generation connectivity solutions with project-based and monthly pricing options.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {fiveGServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-300 ml-2">{service.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT Services Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions with flexible pricing models for every business size.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-300 ml-2">{service.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-gray-300 flex items-center">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block"
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Custom Pricing?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team for custom pricing based on your specific requirements and business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Custom Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call: +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
