import { ArrowRight, BarChart3, Shield, Cloud, FileText, Users, Zap, CheckCircle, Star, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      title: "Zion Analytics Pro",
      description: "Advanced business analytics and reporting dashboard",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Real-time dashboards", "Custom reports", "Data visualization", "API integration"],
      pricing: "$99/month",
      path: "/zion-analytics-pro",
      rating: 4.9,
      users: "2,500+"
    },
    {
      title: "Zion Security Shield",
      description: "Comprehensive cybersecurity monitoring and threat detection",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: ["Threat monitoring", "Automated alerts", "Compliance reports", "24/7 monitoring"],
      pricing: "$149/month",
      path: "/zion-security-shield",
      rating: 4.8,
      users: "1,800+"
    },
    {
      title: "Zion Cloud Vault",
      description: "Secure cloud storage and file management solution",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Secure storage", "File sharing", "Version control", "Team collaboration"],
      pricing: "$79/month",
      path: "/zion-cloud-vault",
      rating: 4.7,
      users: "3,200+"
    },
    {
      title: "Zion Content Studio",
      description: "AI-powered content creation and management platform",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["AI content generation", "SEO optimization", "Multi-platform posting", "Analytics"],
      pricing: "$129/month",
      path: "/zion-content-studio",
      rating: 4.9,
      users: "4,100+"
    },
    {
      title: "Zion Data Sync",
      description: "Automated data synchronization across platforms",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: ["Real-time sync", "Data transformation", "Error handling", "Custom mappings"],
      pricing: "$199/month",
      path: "/zion-data-sync",
      rating: 4.6,
      users: "1,500+"
    },
    {
      title: "Zion Lead Magnet",
      description: "Lead generation and email marketing automation",
      icon: <Users className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: ["Lead capture", "Email campaigns", "CRM integration", "Analytics"],
      pricing: "$89/month",
      path: "/zion-lead-magnet",
      rating: 4.8,
      users: "2,800+"
    },
    {
      title: "Zion Project Master",
      description: "Project management and team collaboration tool",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: ["Task management", "Team collaboration", "Time tracking", "Progress reports"],
      pricing: "$119/month",
      path: "/zion-project-master",
      rating: 4.7,
      users: "2,200+"
    },
    {
      title: "Zion Email Automation",
      description: "Intelligent email marketing and automation platform",
      icon: <FileText className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: ["Email templates", "Automation workflows", "A/B testing", "Performance analytics"],
      pricing: "$109/month",
      path: "/zion-email-automation",
      rating: 4.8,
      users: "3,500+"
    }
  ];

  const benefits = [
    "Ready-to-use solutions",
    "No setup or installation required",
    "Scalable pricing plans",
    "24/7 customer support",
    "Regular updates and improvements",
    "API access for integrations"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 users",
        "Basic features",
        "Email support",
        "5GB storage"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 25 users",
        "Advanced features",
        "Priority support",
        "50GB storage",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "All features",
        "Dedicated support",
        "Unlimited storage",
        "Custom integrations",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Ready-to-Use Software</title>
        <meta
          name="description"
          content="Discover our comprehensive micro SAAS solutions including analytics, security, content management, and automation tools. Starting at $49/month."
        />
        <meta
          name="keywords"
          content="micro saas, software as a service, business tools, analytics, security, content management, automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}SAAS Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready-to-use software solutions that solve real business problems. 
              No setup required, just sign up and start using powerful tools designed 
              to accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful, ready-to-use software solutions that solve real business problems.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{service.rating}</span>
                    </div>
                    <div className="text-sm text-gray-300">
                      {service.users} users
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="text-cyan-400 font-semibold text-lg">{service.pricing}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of ready-to-use software solutions.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                    plan.popular ? 'border-cyan-400 bg-white/20' : 'border-white/20'
                  } relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-lg text-gray-300">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">15,000+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">14</div>
                <div className="text-gray-300">Day Free Trial</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our micro SAAS solutions to drive growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
