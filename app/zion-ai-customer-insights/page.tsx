import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Brain, 
  Shield, 
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Globe,
  Smartphone,
  Monitor,
  Eye,
  PieChart,
  Activity,
  AlertCircle,
  Clock,
  Award,
  ShoppingCart
} from 'lucide-react';
import EnhancedSEO from '../../components/EnhancedSEO';
import FuturisticCard from '../../components/FuturisticCard';
import FuturisticButton from '../../components/FuturisticButton';
import ResponsiveContainer from '../../components/ResponsiveContainer';

const ZionAICustomerInsightsPage = () => {
  const features = [
    {
      title: "Predictive Analytics",
      description: "Forecast customer behavior and preferences using advanced machine learning algorithms",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Behavior Analysis",
      description: "Deep insights into customer journey patterns, engagement metrics, and interaction data",
      icon: <Eye className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Personalization Engine",
      description: "AI-powered recommendations and personalized experiences for each customer",
      icon: <Target className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Insights",
      description: "Live dashboards and instant notifications for critical customer events and trends",
      icon: <Activity className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for small businesses starting their customer analytics journey",
      features: [
        "Up to 10,000 customers",
        "Basic analytics dashboard",
        "Email support",
        "Standard reports",
        "30-day data retention"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "per month",
      description: "Ideal for growing businesses with advanced analytics needs",
      features: [
        "Up to 100,000 customers",
        "Advanced analytics dashboard",
        "Priority support",
        "Custom reports",
        "1-year data retention",
        "API access",
        "Predictive modeling"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "per month",
      description: "For large organizations with complex customer data requirements",
      features: [
        "Unlimited customers",
        "Enterprise dashboard",
        "24/7 dedicated support",
        "Custom integrations",
        "Unlimited data retention",
        "Advanced API access",
        "Machine learning models",
        "White-label solution"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "E-commerce Optimization",
      description: "Increase conversion rates with personalized product recommendations and shopping behavior analysis",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Customer Retention",
      description: "Identify at-risk customers and implement targeted retention strategies",
      icon: <Users className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Marketing Campaigns",
      description: "Optimize marketing spend with data-driven audience segmentation and targeting",
      icon: <Target className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Product Development",
      description: "Make informed product decisions based on customer feedback and usage patterns",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const analyticsFeatures = [
    {
      title: "Customer Segmentation",
      description: "Automatically group customers based on behavior, demographics, and preferences",
      icon: <PieChart className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Churn Prediction",
      description: "Identify customers likely to churn with 95% accuracy using machine learning",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Lifetime Value Analysis",
      description: "Calculate and predict customer lifetime value for better business planning",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Engagement Scoring",
      description: "Track and score customer engagement across all touchpoints and channels",
      icon: <Activity className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "E-commerce Platform",
      role: "Head of Analytics",
      content: "Zion AI Customer Insights helped us increase our customer retention by 40% through predictive churn analysis and targeted interventions.",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      company: "SaaS Company",
      role: "VP of Marketing",
      content: "The personalization engine is incredible. We've seen a 60% increase in conversion rates since implementing their recommendations.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "Retail Chain",
      role: "Customer Experience Director",
      content: "Real-time insights have transformed how we understand our customers. The dashboard is intuitive and the data is always accurate.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Customer Insights Pro - Advanced Customer Analytics Platform"
        description="Unlock the power of customer data with Zion AI Customer Insights. Predictive analytics, behavior analysis, and personalization engine for better business decisions."
        keywords="customer insights, predictive analytics, customer behavior, personalization, customer analytics, business intelligence, customer segmentation"
        canonical="https://ziontechgroup.com/zion-ai-customer-insights"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
            <Brain className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-400 text-sm font-medium">AI-Powered Customer Analytics</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400">
              Zion AI Customer Insights Pro
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Transform your customer data into actionable insights with our advanced AI-powered analytics platform. 
            Predict behavior, personalize experiences, and drive growth with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<BarChart3 className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
          {/* Dashboard Preview Placeholder */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="relative bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="aspect-video bg-black/50 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-white text-lg">AI Customer Insights Dashboard</p>
                  <p className="text-gray-400 text-sm">Real-time analytics and predictive insights</p>
                </div>
              </div>
            </div>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Customer Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Unlock the full potential of your customer data with our comprehensive suite of AI-powered analytics tools.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Analytics Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Advanced Analytics Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Go beyond basic reporting with our advanced AI-powered analytics features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Perfect for Every Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Whether you're in e-commerce, SaaS, retail, or any other industry, 
              our customer insights platform adapts to your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${useCase.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your customer analytics needs and budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-blue-500/50 hover:shadow-blue-500/25' 
                    : 'border-white/20 hover:shadow-blue-500/10'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied customers who are making data-driven decisions with our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Unlock Customer Insights?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Start your free trial today and discover the power of AI-driven customer analytics. 
            No credit card required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Demo
              <BarChart3 className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionAICustomerInsightsPage;