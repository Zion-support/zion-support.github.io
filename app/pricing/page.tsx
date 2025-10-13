import { ArrowRight, Check, Star, Zap, Shield, Globe, Brain } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Micro SAAS Starter",
      description: "Perfect for small businesses and startups",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      price: "$99",
      period: "/month",
      features: [
        "Up to 5 users",
        "Basic analytics dashboard",
        "Email support",
        "Standard security",
        "1GB storage",
        "Basic integrations"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "AI Solutions Pro",
      description: "Advanced AI capabilities for growing businesses",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "$299",
      period: "/month",
      features: [
        "Up to 25 users",
        "Advanced AI analytics",
        "Priority support",
        "Enhanced security",
        "10GB storage",
        "Custom integrations",
        "Real-time monitoring",
        "API access"
      ],
      popular: true,
      cta: "Get Started"
    },
    {
      name: "IT Services Enterprise",
      description: "Comprehensive IT solutions for large organizations",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "$999",
      period: "/month",
      features: [
        "Unlimited users",
        "Full AI suite",
        "24/7 dedicated support",
        "Enterprise security",
        "Unlimited storage",
        "Custom development",
        "Advanced monitoring",
        "White-label options",
        "SLA guarantee"
      ],
      popular: false,
      cta: "Contact Sales"
    },
    {
      name: "5G Solutions Premium",
      description: "Next-generation connectivity and infrastructure",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      price: "$1,599",
      period: "/month",
      features: [
        "Unlimited users",
        "5G network optimization",
        "Edge computing capabilities",
        "IoT device management",
        "Real-time data processing",
        "Custom 5G solutions",
        "Dedicated infrastructure",
        "Compliance management",
        "Performance guarantees"
      ],
      popular: false,
      cta: "Schedule Demo"
    }
  ];

  const addOnServices = [
    {
      name: "Custom Development",
      description: "Tailored software solutions for your specific needs",
      price: "$150/hour",
      features: ["Custom features", "API development", "Database design", "UI/UX design"]
    },
    {
      name: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure",
      price: "$2,500/project",
      features: ["Data migration", "Security setup", "Performance optimization", "Training"]
    },
    {
      name: "Cybersecurity Audit",
      description: "Comprehensive security assessment and recommendations",
      price: "$5,000/audit",
      features: ["Vulnerability assessment", "Compliance check", "Security recommendations", "Implementation support"]
    },
    {
      name: "24/7 Monitoring",
      description: "Round-the-clock system monitoring and support",
      price: "$199/month",
      features: ["Real-time alerts", "Performance monitoring", "Incident response", "Monthly reports"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI & IT Solutions</title>
        <meta
          name="description"
          content="Transparent pricing for AI solutions, IT services, micro SAAS, and 5G solutions. Choose the perfect plan for your business needs. Contact us at +1 302 464 0950"
        />
        <meta
          name="keywords"
          content="pricing, AI solutions pricing, IT services cost, micro SAAS pricing, 5G solutions cost, business technology pricing"
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
              Choose the perfect plan for your business needs. All plans include our core features with no hidden fees.
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
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to scale with your business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 transition-all duration-300 hover:bg-white/20 ${
                    plan.popular 
                      ? 'border-cyan-400 scale-105' 
                      : 'border-white/20'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-300 ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <Check className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Additional Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Enhance your solution with our professional add-on services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {addOnServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">
                    {service.price}
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <Check className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-300">
                Get answers to common questions about our pricing and services.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Can I change my plan at any time?
                </h3>
                <p className="text-gray-300">
                  Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Do you offer custom pricing for enterprise clients?
                </h3>
                <p className="text-gray-300">
                  Absolutely! We offer custom pricing and solutions for enterprise clients with specific requirements. Contact our sales team for a personalized quote.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-300">
                  We accept all major credit cards, bank transfers, and can arrange custom payment terms for enterprise clients. All payments are processed securely.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Is there a free trial available?
                </h3>
                <p className="text-gray-300">
                  Yes! We offer a 14-day free trial for all our plans. No credit card required to start. Experience our full features before committing.
                </p>
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
              Contact us today to discuss your requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Contact Us Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
