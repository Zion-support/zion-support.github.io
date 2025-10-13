import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Database, 
  Zap, 
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Lightbulb,
  Shield,
  Settings,
  Download,
  Eye,
  PieChart,
  LineChart,
  Activity,
  Globe,
  Users
} from "lucide-react";

const ZionAIDataInsights = () => {
  const features = [
    {
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms automatically discover patterns and insights in your data",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-Time Dashboards",
      description: "Interactive dashboards that update in real-time with key metrics and performance indicators",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Modeling",
      description: "Forecast future trends and outcomes using advanced statistical models and AI predictions",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports and insights automatically with customizable templates",
      icon: <Target className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const dataSources = [
    { name: "Salesforce", icon: "☁️", description: "CRM Data" },
    { name: "Google Analytics", icon: "📊", description: "Web Analytics" },
    { name: "MySQL", icon: "🗄️", description: "Database" },
    { name: "Excel", icon: "📈", description: "Spreadsheets" },
    { name: "API", icon: "🔗", description: "REST APIs" },
    { name: "CSV", icon: "📄", description: "File Upload" },
    { name: "MongoDB", icon: "🍃", description: "NoSQL" },
    { name: "PostgreSQL", icon: "🐘", description: "SQL Database" }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 5 data sources",
        "Basic AI insights",
        "Standard dashboards",
        "Monthly reports",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited data sources",
        "Advanced AI analytics",
        "Custom dashboards",
        "Real-time reporting",
        "Priority support",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "White-label dashboards",
        "24/7 dedicated support",
        "On-premise deployment",
        "Custom integrations"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Robert Chen",
      role: "Data Scientist",
      company: "Analytics Corp",
      content: "Zion AI Data Insights helped us discover hidden patterns in our data that increased our revenue by 35%. The AI recommendations are spot-on.",
      rating: 5
    },
    {
      name: "Maria Rodriguez",
      role: "Marketing Director",
      company: "Growth Marketing Inc.",
      content: "The predictive modeling feature accurately forecasted our campaign performance. We've been able to optimize our marketing spend by 50%.",
      rating: 5
    },
    {
      name: "James Wilson",
      role: "CEO",
      company: "TechStart Solutions",
      content: "Our data-driven decision making has improved dramatically. The automated reports save us 20 hours per week and provide better insights.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Data Insights - Advanced Analytics Platform</title>
        <meta
          name="description"
          content="Revolutionary AI-powered data analytics platform with predictive modeling, real-time dashboards, and automated insights for data-driven decision making."
        />
        <meta
          name="keywords"
          content="AI data analytics, predictive modeling, business intelligence, data visualization, automated insights"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <BarChart3 className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold">AI-Powered Data Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Zion AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {" "}Data Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with AI-powered analytics, predictive modeling, 
            and real-time dashboards. Make data-driven decisions that drive growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">35%</div>
              <div className="text-gray-300">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-gray-300">Faster Insights</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">20h</div>
              <div className="text-gray-300">Time Saved/Week</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced AI Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to unlock the full potential of your data.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect Any Data Source
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Seamlessly integrate with your existing data sources and tools for unified analytics.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {dataSources.map((source, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
              >
                <div className="text-2xl mb-2">{source.icon}</div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">
                  {source.name}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {source.description}
                </div>
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
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your data volume and analytics needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
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

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Data Teams Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about their experience with Zion AI Data Insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of companies already using Zion AI Data Insights to make smarter, data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25"
            >
              Start Your Free Trial
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
  );
};

export default ZionAIDataInsights;