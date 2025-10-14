import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Cloud, Mail, CheckCircle } from 'lucide-react';

export default function MicroSaasServicesPage() {
  const services = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Micro SaaS",
      description: "Intelligent solutions that learn and adapt to your business needs",
      features: ["Machine Learning Integration", "Predictive Analytics", "Automated Decision Making"]
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,
      title: "Security-First Solutions",
      description: "Enterprise-grade security built into every micro SaaS application",
      features: ["End-to-End Encryption", "Multi-Factor Authentication", "Compliance Ready"]
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Rapid Deployment",
      description: "Get your micro SaaS up and running in days, not months",
      features: ["Pre-built Templates", "One-Click Deployment", "Scalable Architecture"]
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Analytics & Insights",
      description: "Comprehensive analytics to drive your business forward",
      features: ["Real-time Dashboards", "Custom Reports", "Performance Metrics"]
    },
    {
      icon: <Cloud className="w-8 h-8 text-blue-400" />,
      title: "Cloud-Native Architecture",
      description: "Built for the cloud from the ground up for maximum scalability",
      features: ["Auto-scaling", "Global CDN", "99.9% Uptime"]
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: "Multi-Tenant Solutions",
      description: "Serve multiple customers with isolated, secure environments",
      features: ["Tenant Isolation", "Custom Branding", "Flexible Pricing"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 100 users",
        "Basic analytics",
        "Email support",
        "Standard templates",
        "1GB storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 1,000 users",
        "Advanced analytics",
        "Priority support",
        "Custom templates",
        "10GB storage",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Custom analytics",
        "24/7 support",
        "White-label solution",
        "Unlimited storage",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Services - Zion Tech Group | Custom SaaS Solutions</title>
        <meta name="description" content="Professional micro SaaS development services. Build scalable, secure, and intelligent software-as-a-service solutions tailored to your business needs." />
        <meta name="keywords" content="micro SaaS, SaaS development, custom software, cloud applications, business automation" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              Micro SaaS Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business ideas into powerful, scalable micro SaaS solutions. 
              We build custom software-as-a-service applications that drive growth and innovation.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Choose Your Plan
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div 
                  key={index} 
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 border ${
                    plan.popular ? 'border-cyan-400' : 'border-white/20'
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-300 ml-1">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-gray-300 mt-2">
                      {plan.description}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Build Your Micro SaaS?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a custom micro SaaS solution 
              that will transform your business and delight your customers.
            </p>
            <Link
              to="/contact"
              className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}