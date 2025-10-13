import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  TrendingUp, 
  Database, 
  Zap, 
  Shield, 
  CheckCircle,
  Star,
  Users,
  Clock,
  Award,
  Eye,
  MessageSquare,
  Target,
  PieChart,
  FileText,
  Settings,
  Bell,
  Download,
  Play,
  Pause,
  RefreshCw,
  Heart,
  ThumbsUp,
  AlertTriangle,
  BarChart,
  LineChart,
  ScatterChart,
  Activity,
  Layers,
  Palette
} from "lucide-react";

export default function AiDataVisualizationPro() {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Chart Recommendations",
      description: "Intelligent chart type suggestions based on your data patterns, automatically selecting the most effective visualization for your insights.",
      benefits: ["95% accuracy in chart selection", "Automatic optimization", "Pattern recognition"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Interactive Dashboards",
      description: "Create stunning, interactive dashboards with real-time data updates and drill-down capabilities powered by AI insights.",
      benefits: ["Real-time updates", "Interactive exploration", "Drill-down analysis"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Smart Color & Design",
      description: "AI automatically applies optimal color schemes, layouts, and design elements based on data type and audience preferences.",
      benefits: ["Accessibility compliance", "Brand consistency", "Visual optimization"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Predictive Visualizations",
      description: "Generate predictive charts and forecasts with confidence intervals, trend analysis, and scenario modeling.",
      benefits: ["Future trend prediction", "Scenario planning", "Confidence intervals"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Insights Generation",
      description: "AI automatically generates insights, annotations, and explanations for your visualizations, highlighting key findings and patterns.",
      benefits: ["Automatic insights", "Pattern detection", "Natural language explanations"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security & Compliance",
      description: "Bank-level security with role-based access control, data encryption, and compliance with GDPR, HIPAA, and SOC2 standards.",
      benefits: ["Enterprise security", "Role-based access", "Data encryption"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      description: "Perfect for individuals and small teams",
      features: [
        "Up to 10 dashboards",
        "Basic chart types",
        "Standard templates",
        "Email support",
        "Mobile responsive"
      ],
      cta: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited dashboards",
        "Advanced AI features",
        "Custom templates",
        "Priority support",
        "API access",
        "Team collaboration"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "On-premise deployment",
        "Advanced security"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "Data Analyst",
      company: "AnalyticsCorp",
      content: "AI Data Visualization Pro transformed how we present data to stakeholders. The AI insights help us tell compelling data stories that drive action.",
      rating: 5
    },
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "GrowthTech",
      content: "The automated insights generation is incredible. We can now create professional visualizations and reports in minutes instead of hours.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "VP Analytics",
      company: "DataDriven Inc.",
      content: "The predictive visualizations helped us identify market trends 3 months ahead of our competitors. It's like having a crystal ball for data.",
      rating: 5
    }
  ];

  const chartTypes = [
    {
      title: "Interactive Bar Charts",
      description: "Dynamic bar charts with hover effects, filtering, and drill-down capabilities.",
      icon: <BarChart className="w-6 h-6" />
    },
    {
      title: "Time Series Analysis",
      description: "Advanced line charts with trend analysis, seasonality detection, and forecasting.",
      icon: <LineChart className="w-6 h-6" />
    },
    {
      title: "Scatter Plot Analysis",
      description: "Correlation analysis with clustering, regression lines, and outlier detection.",
      icon: <ScatterChart className="w-6 h-6" />
    },
    {
      title: "Heat Maps",
      description: "Intensity maps for geographic data, performance metrics, and correlation matrices.",
      icon: <Activity className="w-6 h-6" />
    },
    {
      title: "Pie & Donut Charts",
      description: "Proportional data visualization with interactive segments and drill-down options.",
      icon: <PieChart className="w-6 h-6" />
    },
    {
      title: "Multi-dimensional Views",
      description: "Complex data relationships with treemaps, sunbursts, and parallel coordinates.",
      icon: <Layers className="w-6 h-6" />
    }
  ];

  const metrics = [
    {
      title: "Design Time",
      improvement: "-80%",
      description: "Faster dashboard creation"
    },
    {
      title: "Insight Discovery",
      improvement: "+300%",
      description: "More insights found automatically"
    },
    {
      title: "User Engagement",
      improvement: "+150%",
      description: "Higher dashboard engagement"
    },
    {
      title: "Decision Speed",
      improvement: "+200%",
      description: "Faster data-driven decisions"
    }
  ];

  const useCases = [
    {
      title: "Business Intelligence",
      description: "Create executive dashboards with KPIs, performance metrics, and strategic insights.",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Marketing Analytics",
      description: "Visualize campaign performance, customer journeys, and conversion funnels.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Financial Reporting",
      description: "Generate financial dashboards with revenue trends, cost analysis, and budget tracking.",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Operations Monitoring",
      description: "Monitor real-time operations with live dashboards and alert systems.",
      icon: <Activity className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <Helmet>
        <title>AI Data Visualization Pro - Advanced Data Visualization & Analytics | Zion Tech Group</title>
        <meta name="description" content="Transform your data into stunning visualizations with AI-powered insights. Create interactive dashboards, predictive charts, and automated insights 80% faster." />
        <meta name="keywords" content="AI data visualization, interactive dashboards, data analytics, business intelligence, predictive analytics, data storytelling" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-data-visualization-pro" />
        
        {/* Open Graph */}
        <meta property="og:title" content="AI Data Visualization Pro - Advanced Data Visualization & Analytics" />
        <meta property="og:description" content="Transform your data into stunning visualizations with AI-powered insights. Create interactive dashboards, predictive charts, and automated insights 80% faster." />
        <meta property="og:url" content="https://ziontechgroup.com/ai-data-visualization-pro" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Data Visualization Pro - Advanced Data Visualization & Analytics" />
        <meta name="twitter:description" content="Transform your data into stunning visualizations with AI-powered insights. Create interactive dashboards, predictive charts, and automated insights 80% faster." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "AI Data Visualization Pro",
            "description": "Advanced data visualization platform with AI-powered insights and interactive dashboards",
            "url": "https://ziontechgroup.com/ai-data-visualization-pro",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web, iOS, Android",
            "offers": {
              "@type": "Offer",
              "price": "29",
              "priceCurrency": "USD",
              "priceValidUntil": "2025-12-31"
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com"
            }
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-6">
            <Eye className="w-5 h-5 mr-2 text-indigo-400" />
            <span className="text-indigo-300 font-medium">AI-Powered Data Visualization</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            AI Data Visualization
            <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Pro
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into stunning visualizations with AI-powered insights. Create interactive dashboards, 
            predictive charts, and automated insights 80% faster than traditional tools.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-indigo-500 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Link>
          </div>
          
          {/* Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-2">{metric.improvement}</div>
                <div className="text-gray-300 mb-1">{metric.title}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leverage cutting-edge AI technology to create compelling data visualizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-indigo-500/50 transition-all duration-300">
                <div className="text-indigo-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {feature.description}
                </p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chart Types Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Comprehensive Chart Library
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose from 50+ chart types, all optimized by AI for your specific data
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {chartTypes.map((chart, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 group-hover:border-indigo-500/50 transition-all duration-300">
                  <div className="text-indigo-400 mb-4 flex justify-center">
                    {chart.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {chart.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {chart.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Perfect for Every Industry
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI data visualization platform adapts to your industry's unique needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 group-hover:border-indigo-500/50 transition-all duration-300">
                  <div className="text-indigo-400 mb-4 flex justify-center">
                    {useCase.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {useCase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your data visualization needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                plan.popular 
                  ? 'border-indigo-500 ring-2 ring-indigo-500/20' 
                  : 'border-slate-700'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600'
                      : 'border border-indigo-500 text-indigo-300 hover:bg-indigo-500/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by Data Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about AI Data Visualization Pro
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Data into Insights?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of professionals already using AI Data Visualization Pro to create compelling data stories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-indigo-500 text-indigo-300 font-semibold rounded-lg hover:bg-indigo-500/10 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5" />
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}