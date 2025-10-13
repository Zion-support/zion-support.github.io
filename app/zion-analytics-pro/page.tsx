import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { BarChart3, Brain, Zap, Shield, TrendingUp, Users, DollarSign, CheckCircle, ArrowRight, Star, Clock, Globe, Database, Target, PieChart } from "lucide-react";

const ZionAnalyticsProPage = () => {
  const features = [
    {
      title: "Real-time Analytics",
      description: "Monitor your business performance with live data updates and instant insights",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "AI-Powered Insights",
      description: "Get intelligent recommendations and predictions powered by advanced machine learning",
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Custom Dashboards",
      description: "Create personalized dashboards tailored to your specific business needs",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Automated Reports",
      description: "Generate comprehensive reports automatically with scheduled delivery",
      icon: <Zap className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const integrations = [
    "Google Analytics",
    "Facebook Ads",
    "Instagram Insights",
    "Twitter Analytics",
    "LinkedIn Analytics",
    "YouTube Analytics",
    "Shopify",
    "WooCommerce",
    "Salesforce",
    "HubSpot",
    "Mailchimp",
    "Stripe"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 3 data sources",
        "Basic analytics",
        "Standard dashboards",
        "Email support",
        "Monthly reports",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 10 data sources",
        "Advanced analytics",
        "Custom dashboards",
        "Priority support",
        "Real-time reports",
        "5 user accounts",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited data sources",
        "Premium analytics",
        "White-label dashboards",
        "24/7 dedicated support",
        "Custom integrations",
        "Unlimited users",
        "Advanced security"
      ],
      popular: false
    }
  ];

  const stats = [
    { label: "Data Sources", value: "50+", icon: <Database className="w-6 h-6" /> },
    { label: "Processing Speed", value: "5x Faster", icon: <Zap className="w-6 h-6" /> },
    { label: "Accuracy Rate", value: "99.9%", icon: <CheckCircle className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Futuristic Background */}
      <div className="absolute inset-0 quantum-field"></div>
      <div className="absolute inset-0 holographic-grid"></div>
      <div className="absolute inset-0 plasma-effect"></div>
      
      <div className="relative z-10">
        <Helmet>
          <title>Zion Analytics Pro - Advanced Business Intelligence Platform</title>
          <meta
            name="description"
            content="Zion Analytics Pro - The ultimate business intelligence platform with real-time analytics, AI-powered insights, and automated reporting. Transform your data into actionable business intelligence."
          />
          <meta
            name="keywords"
            content="business intelligence, analytics platform, data visualization, real-time analytics, AI insights, automated reporting, Zion Analytics Pro"
          />
        </Helmet>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-6 border border-cyan-500/30">
                📊 Advanced Business Intelligence Platform
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Zion Analytics
              <span className="block text-cyberpunk neon-advanced mt-2">
                Pro
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              The ultimate business intelligence platform that transforms your data into actionable insights. 
              Get real-time analytics, AI-powered recommendations, and automated reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="btn-quantum text-lg px-12 py-4"
              >
                Start Free Trial
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              <Link
                to="/demo"
                className="holographic-card text-cyan-400 px-12 py-4 text-lg font-semibold hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                Watch Demo
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="holographic-card p-6 text-center">
                  <div className="text-cyan-400 mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Powerful <span className="text-cyberpunk neon-advanced">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to turn your data into actionable business intelligence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="holographic-card hover-quantum p-8 text-center group"
                >
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto neon-glow group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Seamless <span className="text-cyberpunk neon-advanced">Integrations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Connect with your favorite tools and platforms
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="holographic-card hover-quantum p-4 text-center group"
                >
                  <div className="text-cyan-400 mb-2">
                    <Globe className="w-6 h-6 mx-auto" />
                  </div>
                  <div className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {integration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Simple <span className="text-cyberpunk neon-advanced">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Choose the perfect plan for your business needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`holographic-card hover-quantum p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'btn-quantum'
                        : 'holographic-card text-cyan-400 hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="holographic-card p-12 relative overflow-hidden">
              <div className="absolute inset-0 data-stream"></div>
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                  Ready to <span className="text-cyberpunk neon-advanced">Transform</span> Your Analytics?
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of businesses using Zion Analytics Pro to make better decisions with data.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link
                    to="/contact"
                    className="btn-quantum text-lg px-12 py-4"
                  >
                    Start Free Trial
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Link>
                  <Link
                    to="/demo"
                    className="holographic-card text-cyan-400 px-12 py-4 text-lg font-semibold hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    Schedule Demo
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ZionAnalyticsProPage;