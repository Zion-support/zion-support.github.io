import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Brain } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      price: "$299",
      period: "/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "AI Content Generation (10,000 words/month)",
        "Basic Analytics Dashboard",
        "Email Support",
        "5GB Cloud Storage",
        "Basic Security Features",
        "Mobile App Access"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "$599",
      period: "/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "AI Content Generation (50,000 words/month)",
        "Advanced Analytics & BI",
        "Priority Support (24/7)",
        "50GB Cloud Storage",
        "Advanced Security Suite",
        "API Access",
        "Custom Integrations",
        "Team Collaboration Tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "$1,299",
      period: "/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Unlimited AI Content Generation",
        "Enterprise Analytics & BI",
        "Dedicated Account Manager",
        "Unlimited Cloud Storage",
        "Enterprise Security Suite",
        "Full API Access",
        "Custom Development",
        "White-label Solutions",
        "SLA Guarantee"
      ],
      popular: false
    }
  ];

  const microSaasPricing = [
    { name: "Zion Analytics Pro", price: "$149/month", features: ["Real-time Analytics", "Custom Dashboards", "API Integration"] },
    { name: "Zion Security Shield", price: "$199/month", features: ["Threat Detection", "Automated Response", "Compliance Monitoring"] },
    { name: "Zion Cloud Vault", price: "$99/month", features: ["Secure Storage", "Backup Solutions", "Access Control"] },
    { name: "Zion Content Studio", price: "$179/month", features: ["AI Content Creation", "Brand Templates", "Multi-channel Publishing"] },
    { name: "Zion Data Sync", price: "$129/month", features: ["Real-time Sync", "Data Validation", "Error Handling"] },
    { name: "Zion Lead Magnet", price: "$159/month", features: ["Lead Capture", "Email Automation", "CRM Integration"] }
  ];

  const itServicesPricing = [
    { name: "Cloud Infrastructure", price: "$799/month", features: ["AWS/Azure Setup", "Monitoring", "24/7 Support"] },
    { name: "Cybersecurity Solutions", price: "$599/month", features: ["Security Audit", "Threat Protection", "Compliance"] },
    { name: "Web Development", price: "$2,500/project", features: ["Custom Design", "Responsive Layout", "SEO Optimization"] },
    { name: "Mobile Development", price: "$3,500/project", features: ["iOS & Android", "Native Performance", "App Store Deployment"] },
    { name: "Database Management", price: "$399/month", features: ["Performance Tuning", "Backup & Recovery", "Security"] },
    { name: "Network Infrastructure", price: "$1,200/month", features: ["Network Design", "Security Implementation", "Monitoring"] }
  ];

  return (
    <>
      <Helmet>
        <title>Pricing Plans - Zion Tech Group</title>
        <meta
          name="description"
          content="Transparent pricing for AI services, IT solutions, and micro SAAS products. Choose the perfect plan for your business needs."
        />
        <meta
          name="keywords"
          content="pricing, AI services pricing, IT solutions cost, micro SAAS pricing, business plans"
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
              Choose the perfect plan for your business. No hidden fees, no surprises. 
              Scale up or down anytime with our flexible pricing options.
            </p>
          </div>
        </section>

        {/* Main Pricing Plans */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI & IT Services Plans
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive solutions for businesses of all sizes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                    plan.popular 
                      ? 'border-cyan-400 bg-gradient-to-br from-cyan-500/20 to-purple-500/20' 
                      : 'border-white/20 hover:border-cyan-400/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${plan.color} flex items-center justify-center mx-auto mb-4`}>
                      {plan.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
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
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
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
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300">
                Ready-to-use software solutions for immediate deployment
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microSaasPricing.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full py-2 px-4 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                IT Infrastructure Services
              </h2>
              <p className="text-xl text-gray-300">
                Professional IT solutions with transparent pricing
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServicesPricing.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="w-full py-2 px-4 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-center block"
                  >
                    Get Quote
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us for personalized pricing and custom enterprise solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Contact Sales
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
      </div>
    </>
  );
}
