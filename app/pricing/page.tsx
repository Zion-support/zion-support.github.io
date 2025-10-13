import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Zap, 
  Shield, 
  Crown,
  Users,
  Clock,
  DollarSign,
  Award,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

export default function Pricing() {
  const microSaasPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "Up to 5 users",
        "Basic analytics",
        "Email support",
        "Standard security",
        "5GB storage",
        "Basic integrations"
      ],
      color: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 users",
        "Advanced analytics",
        "Priority support",
        "Enhanced security",
        "50GB storage",
        "Advanced integrations",
        "API access",
        "Custom reports"
      ],
      color: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited users",
        "Premium analytics",
        "24/7 support",
        "Enterprise security",
        "Unlimited storage",
        "All integrations",
        "Full API access",
        "Custom development",
        "Dedicated account manager"
      ],
      color: "from-green-500 to-emerald-500",
      popular: false
    }
  ];

  const aiServicePlans = [
    {
      name: "AI Starter",
      price: "$299",
      period: "/month",
      description: "Basic AI solutions for small projects",
      features: [
        "1 AI model",
        "10,000 API calls/month",
        "Basic support",
        "Standard accuracy",
        "Email support"
      ],
      color: "from-orange-500 to-red-500"
    },
    {
      name: "AI Professional",
      price: "$599",
      period: "/month",
      description: "Advanced AI solutions for growing businesses",
      features: [
        "5 AI models",
        "100,000 API calls/month",
        "Priority support",
        "High accuracy",
        "Phone & email support",
        "Custom training",
        "Analytics dashboard"
      ],
      color: "from-purple-500 to-indigo-500",
      popular: true
    },
    {
      name: "AI Enterprise",
      price: "$1,299",
      period: "/month",
      description: "Full-scale AI solutions for enterprises",
      features: [
        "Unlimited AI models",
        "Unlimited API calls",
        "24/7 support",
        "Maximum accuracy",
        "Dedicated support team",
        "Custom development",
        "White-label solutions",
        "SLA guarantee"
      ],
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const itServicePlans = [
    {
      name: "Basic IT Support",
      price: "$199",
      period: "/month",
      description: "Essential IT services for small businesses",
      features: [
        "Remote support",
        "System monitoring",
        "Security updates",
        "Backup management",
        "Email support",
        "Monthly reports"
      ],
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Managed IT Services",
      price: "$499",
      period: "/month",
      description: "Comprehensive IT management",
      features: [
        "24/7 monitoring",
        "Proactive maintenance",
        "Security management",
        "Cloud management",
        "Phone & email support",
        "Weekly reports",
        "Disaster recovery",
        "Compliance support"
      ],
      color: "from-blue-500 to-purple-500",
      popular: true
    },
    {
      name: "Enterprise IT",
      price: "$999",
      period: "/month",
      description: "Full-scale IT solutions for large organizations",
      features: [
        "Dedicated team",
        "Custom solutions",
        "Advanced security",
        "Multi-cloud management",
        "24/7 phone support",
        "Daily reports",
        "Custom SLA",
        "Strategic consulting"
      ],
      color: "from-red-500 to-pink-500"
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709"
  };

  return (
    <>
      <Helmet>
        <title>Pricing - Zion Tech Group | Transparent Pricing for AI, IT & Micro SAAS</title>
        <meta
          name="description"
          content="Transparent pricing for our AI services, IT solutions, and micro SAAS platforms. Choose the perfect plan for your business needs."
        />
        <meta
          name="keywords"
          content="pricing, AI services pricing, IT services cost, micro SAAS pricing, business solutions"
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
              All plans include our 30-day money-back guarantee.
            </p>
            <div className="flex items-center justify-center space-x-4 text-cyan-400">
              <Award className="w-6 h-6" />
              <span className="text-lg font-semibold">30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </section>

        {/* Micro SAAS Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready-to-use software solutions with transparent pricing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {microSaasPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
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
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
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
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Pricing */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced artificial intelligence solutions with flexible pricing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {aiServicePlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
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
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
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
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
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
                IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive IT solutions with transparent monthly pricing.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {itServicePlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
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
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400">{plan.period}</span>
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
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Custom Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We offer custom pricing for enterprise solutions and specialized requirements. 
              Contact us for a personalized quote.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Enterprise Solutions</h3>
                <p className="text-gray-300">Custom pricing for large organizations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4 mx-auto">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Development</h3>
                <p className="text-gray-300">Fast-track custom development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mb-4 mx-auto">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Security First</h3>
                <p className="text-gray-300">Enterprise-grade security solutions</p>
              </div>
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Contact us today for a free consultation and personalized pricing.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                <p className="text-cyan-400 font-semibold">{contactInfo.phone}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4 mx-auto">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                <p className="text-cyan-400 font-semibold">{contactInfo.email}</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mb-4 mx-auto">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-cyan-400 font-semibold text-sm">{contactInfo.address}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}