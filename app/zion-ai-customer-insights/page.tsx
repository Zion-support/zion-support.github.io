<<<<<<< HEAD
<<<<<<< HEAD

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Brain } from "lucide-react";
const ZionAICustomerInsightsPage = () => {

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "per month",
      features: ["Up to 1,000 customers", "Basic analytics", "Email support", "Standard reports"],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      features: ["Up to 10,000 customers", "Advanced analytics", "Priority support", "Custom reports"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "per month",
      features: ["Unlimited customers", "AI-powered insights", "24/7 support", "White-label solution"],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion AI Customer Insights - Understand Your Customers Better</title>
        <meta name="description" content="Gain deep insights into your customers with our AI-powered analytics platform. Understand behavior, predict trends, and boost engagement." />
        <meta name="keywords" content="customer insights, AI analytics, customer behavior, predictive analytics, customer segmentation" />
=======
import { 
  Brain, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Target, 
  MessageSquare, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Heart,
  ShoppingCart,
  Clock,
  Award,
  Shield,
  Globe,
  Zap,
  PieChart,
  Activity
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAiCustomerInsights = () => {
  const features = [
    {
      title: "Real-Time Sentiment Analysis",
      description: "Analyze customer emotions and sentiment across all touchpoints in real-time using advanced NLP",
      icon: <Brain className="w-6 h-6" />,
      stats: "99.2% accuracy"
    },
    {
      title: "Predictive Customer Behavior",
      description: "Predict customer actions, churn risk, and lifetime value using machine learning algorithms",
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "85% prediction accuracy"
    },
    {
      title: "Automated Insights Generation",
      description: "Get actionable insights and recommendations automatically generated from your customer data",
      icon: <Zap className="w-6 h-6" />,
      stats: "50+ insights daily"
    },
    {
      title: "Multi-Channel Integration",
      description: "Connect with 100+ platforms including social media, email, chat, and CRM systems",
      icon: <Globe className="w-6 h-6" />,
      stats: "100+ integrations"
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses getting started with customer insights",
      features: [
        "Up to 10,000 customer profiles",
        "Basic sentiment analysis",
        "5 data source integrations",
        "Standard reporting",
        "Email support",
        "30-day data retention"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 100,000 customer profiles",
        "Advanced sentiment analysis",
        "20 data source integrations",
        "Predictive analytics",
        "Priority support",
        "90-day data retention",
        "Custom dashboards",
        "API access"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "/month",
      description: "For large organizations with complex customer data requirements",
      features: [
        "Unlimited customer profiles",
        "AI-powered insights",
        "Unlimited integrations",
        "Advanced predictive models",
        "24/7 phone support",
        "Unlimited data retention",
        "White-label solution",
        "Custom AI models",
        "Dedicated account manager"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const useCases = [
    {
      title: "Customer Experience Optimization",
      description: "Identify pain points and opportunities to improve customer satisfaction across all touchpoints",
      icon: <Heart className="w-8 h-8" />,
      metrics: ["25% increase in CSAT", "40% reduction in complaints", "60% faster issue resolution"]
    },
    {
      title: "Churn Prevention",
      description: "Predict and prevent customer churn with early warning signals and automated retention campaigns",
      icon: <Target className="w-8 h-8" />,
      metrics: ["30% reduction in churn", "45% improvement in retention", "50% increase in LTV"]
    },
    {
      title: "Personalized Marketing",
      description: "Create highly targeted campaigns based on deep customer insights and behavioral patterns",
      icon: <MessageSquare className="w-8 h-8" />,
      metrics: ["3x higher engagement", "2x conversion rates", "35% increase in ROI"]
      name: "Jennifer Martinez",
      company: "RetailMax",
      role: "VP of Customer Experience",
      content: "Zion AI Customer Insights helped us understand our customers like never before. We've increased customer satisfaction by 40% and reduced churn by 30%.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Kim",
      company: "TechStart Inc.",
      role: "Head of Growth",
      content: "The predictive analytics are incredibly accurate. We can now anticipate customer needs and proactively address issues before they become problems.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      company: "E-commerce Solutions",
      role: "Marketing Director",
      content: "This platform transformed our marketing strategy. We're now delivering personalized experiences that our customers love, resulting in 3x higher engagement.",
      rating: 5,
      avatar: "LT"
    }
  ];

  const metrics = [
    { number: "500+", label: "Companies Using Our Platform", icon: <Users className="w-6 h-6" /> },
    { number: "50M+", label: "Customer Profiles Analyzed", icon: <BarChart3 className="w-6 h-6" /> },
    { number: "99.2%", label: "Sentiment Analysis Accuracy", icon: <Award className="w-6 h-6" /> },
    { number: "30%", label: "Average Churn Reduction", icon: <TrendingUp className="w-6 h-6" /> }
        <title>Zion AI Customer Insights - AI-Powered Customer Analytics Platform | Zion Tech Group</title>
        <meta name="description" content="Transform customer data into actionable insights with Zion AI Customer Insights. Predictive analytics, sentiment analysis, and automated recommendations. Start your free trial!" />
        <meta name="keywords" content="customer insights, AI analytics, sentiment analysis, predictive analytics, customer behavior, churn prediction, customer experience" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-customer-insights" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Brain className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI Customer Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Customer Insights
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Understand your customers like never before with our AI-powered analytics platform. 
            Gain deep insights, predict behavior, and boost engagement.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
<<<<<<< HEAD
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
=======
            ))}
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful AI Analytics
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our advanced AI technology analyzes customer data across all touchpoints to deliver insights that drive business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Drive Business Growth
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Use AI-powered insights to optimize customer experience, prevent churn, and increase revenue
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center text-sm text-green-400">
                      <TrendingUp className="w-4 h-4 mr-2 flex-shrink-0" />
                      {metric}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Start with a free trial and scale as your business grows
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                    : 'border-white/20'
                } relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {plan.price}
                    <span className="text-lg text-gray-300 font-normal">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
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
<<<<<<< HEAD
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Understand Your Customers Better?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start gaining deep insights into your customer behavior and boost your 
              engagement with our AI-powered analytics platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Analyzing
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAICustomerInsightsPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
=======
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how companies are using Zion AI Customer Insights to drive growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-blue-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Customer Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join hundreds of companies using AI-powered insights to understand their customers better and drive business growth.
                href="#signup"
                variant="primary"
                size="lg"
                icon={<Brain className="w-5 h-5" />}
                href="/contact"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Sales
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>14-day free trial • No credit card required • Cancel anytime</p>
export default ZionAiCustomerInsights;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1091
