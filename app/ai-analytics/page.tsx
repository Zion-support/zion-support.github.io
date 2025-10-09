'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, BarChart, TrendingUp, Target, Users, Zap, Brain, Shield, Clock, Globe, Database } from 'lucide-react';

const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart className="w-8 h-8 text-cyan-400" />,
      title: "AI-Powered Dashboards",
      description: "Intelligent dashboards that automatically adapt to your data and highlight key insights."
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-400" />,
      title: "Predictive Analytics",
      description: "Machine learning models that predict trends, outcomes, and opportunities in your data."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
      title: "Real-time Monitoring",
      description: "Monitor your business metrics in real-time with instant alerts and notifications."
    },
    {
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      title: "Smart Recommendations",
      description: "AI-generated recommendations for optimizing performance and achieving business goals."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Collaborative Insights",
      description: "Share insights and reports with your team for better decision-making and alignment."
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: "Automated Reporting",
      description: "Generate and schedule automated reports with AI-powered insights and visualizations."
    }
  ];

  const analyticsTypes = [
    {
      title: "Business Intelligence",
      description: "Comprehensive business analytics with AI-powered insights and recommendations.",
      icon: "📊",
      metrics: ["Revenue analysis", "Customer insights", "Operational efficiency", "Market trends"]
    },
    {
      title: "Marketing Analytics",
      description: "Advanced marketing analytics with attribution modeling and campaign optimization.",
      icon: "📈",
      metrics: ["Campaign performance", "Customer acquisition", "ROI analysis", "Conversion tracking"]
    },
    {
      title: "Sales Analytics",
      description: "Sales performance analytics with pipeline forecasting and territory optimization.",
      icon: "💰",
      metrics: ["Sales forecasting", "Pipeline analysis", "Territory performance", "Lead scoring"]
    },
    {
      title: "Customer Analytics",
      description: "Deep customer analytics with segmentation, lifetime value, and churn prediction.",
      icon: "👥",
      metrics: ["Customer segmentation", "Lifetime value", "Churn prediction", "Satisfaction analysis"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "month",
      description: "Perfect for small businesses getting started with AI analytics",
      features: [
        "5 dashboards",
        "Basic AI insights",
        "Email support",
        "Standard integrations",
        "Monthly reports"
      ],
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$399",
      period: "month",
      description: "Ideal for growing businesses with complex analytics needs",
      features: [
        "Unlimited dashboards",
        "Advanced AI insights",
        "Priority support",
        "100+ integrations",
        "Real-time monitoring",
        "Custom metrics"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "month",
      description: "Comprehensive AI analytics for large organizations",
      features: [
        "Everything in Professional",
        "Dedicated support",
        "Custom integrations",
        "White-label options",
        "API access",
        "Advanced security"
      ],
      cta: "Contact Sales"
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Lee",
      title: "Data Director, TechCorp",
      content: "AI Analytics has revolutionized our data insights. The predictive analytics helped us identify opportunities worth $2M in additional revenue.",
      rating: 5
    },
    {
      name: "David Park",
      title: "Marketing Manager, GrowthCo",
      content: "The AI recommendations are incredibly accurate. We've optimized our marketing campaigns and increased ROI by 60% using their insights.",
      rating: 5
    },
    {
      name: "Maria Garcia",
      title: "CEO, StartupXYZ",
      content: "Finally, analytics that actually make sense. The AI automatically highlights what's important and suggests actionable next steps.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI <span className="text-cyan-400">Analytics</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your data into actionable insights with AI-powered analytics. 
              Get intelligent recommendations, predictive insights, and automated reporting that drives business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                href="#demo"
                className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
              <div className="text-gray-300">Faster Insights</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">Real-time</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">AI-Powered</div>
              <div className="text-gray-300">Predictions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Advanced AI Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI analytics platform combines machine learning with advanced data processing 
              to provide insights that traditional analytics tools simply cannot match.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-colors duration-300">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Analytics for Every Business Function
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get specialized AI analytics for different areas of your business 
              with modules designed for specific use cases and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsTypes.map((type, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg text-center hover:bg-slate-800/70 transition-colors duration-300">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h3>
                <p className="text-gray-300 mb-4">{type.description}</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  {type.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex}>• {metric}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Analytics Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with our free trial and scale as your analytics needs grow. 
              All plans include our core AI analytics capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-slate-700/50 p-8 rounded-lg ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="bg-cyan-400 text-slate-900 text-sm font-semibold px-4 py-2 rounded-full text-center mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-300 mb-4">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-gray-300">/{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.cta === "Contact Sales" ? "/contact" : "/contact"}
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                    plan.popular
                      ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
                      : 'bg-slate-600 hover:bg-slate-500 text-white'
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
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses are using AI Analytics to make better decisions 
              and achieve unprecedented growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 p-8 rounded-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Data's Potential?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Stop guessing and start knowing with AI Analytics. 
            Join thousands of businesses already using our platform to make data-driven decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Start Free Trial
            </Link>
            <Link
              href="/contact"
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIAnalyticsPage;