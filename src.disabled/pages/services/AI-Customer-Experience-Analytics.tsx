import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  Target, 
  Zap, 
  Shield, 
  Globe, 
  Users, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight,
  Play,
  MessageSquare,
  FileText,
  Eye,
  Search,
  Filter,
  Analytics,
  Cpu,
  Database,
  Cloud,
  Lock,
  Award,
  Clock,
  DollarSign,
  Heart,
  Smile,
  Frown,
  Activity,
  PieChart,
  LineChart,
  UserCheck,
  UserX,
  UserPlus
} from 'lucide-react';
import { SEO } from '@/components/SEO';

const AICustomerExperienceAnalytics = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Sentiment Analysis",
      description: "Advanced NLP algorithms analyze customer feedback, reviews, and interactions in real-time"
    },
    {
      icon: BarChart3,
      title: "Predictive Customer Behavior",
      description: "Machine learning models predict customer churn, lifetime value, and purchase patterns"
    },
    {
      icon: Target,
      title: "Customer Journey Mapping",
      description: "Visualize and optimize the complete customer journey across all touchpoints"
    },
    {
      icon: Zap,
      title: "Real-time Experience Monitoring",
      description: "Instant alerts and insights when customer experience metrics drop below thresholds"
    },
    {
      icon: Shield,
      title: "Privacy-First Analytics",
      description: "GDPR-compliant data collection and analysis with customer consent management"
    },
    {
      icon: Globe,
      title: "Multi-Channel Integration",
      description: "Seamless integration with websites, mobile apps, social media, and CRM systems"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$149",
      period: "/month",
      description: "Perfect for small businesses starting their CX journey",
      features: [
        "Up to 10,000 customer interactions/month",
        "Basic sentiment analysis",
        "Standard analytics dashboard",
        "Email support",
        "Basic API access",
        "Customer satisfaction tracking"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing businesses with multiple customer touchpoints",
      features: [
        "Up to 100,000 customer interactions/month",
        "Advanced AI sentiment analysis",
        "Predictive analytics",
        "Custom dashboards",
        "Priority support",
        "Full API access",
        "Customer journey mapping",
        "Real-time alerts"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations with complex customer experience needs",
      features: [
        "Unlimited customer interactions",
        "Custom AI model training",
        "White-label solutions",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "SLA guarantees",
        "Multi-brand support"
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: "Customer Satisfaction Optimization",
      description: "Identify pain points and optimize customer touchpoints to improve satisfaction scores",
      icon: Smile
    },
    {
      title: "Churn Prevention",
      description: "Predict and prevent customer churn with early warning systems and proactive interventions",
      icon: UserX
    },
    {
      title: "Customer Lifetime Value",
      description: "Maximize customer lifetime value through personalized experiences and targeted engagement",
      icon: TrendingUp
    },
    {
      title: "Brand Reputation Management",
      description: "Monitor and manage brand sentiment across all customer interactions and channels",
      icon: Shield
    }
  ];

  const metrics = [
    {
      icon: Heart,
      title: "Customer Satisfaction Score",
      value: "94.2%",
      change: "+12.5%",
      trend: "up"
    },
    {
      icon: Users,
      title: "Customer Retention Rate",
      value: "87.3%",
      change: "+8.1%",
      trend: "up"
    },
    {
      icon: TrendingUp,
      title: "Customer Lifetime Value",
      value: "$2,847",
      change: "+23.4%",
      trend: "up"
    },
    {
      icon: MessageSquare,
      title: "Response Time",
      value: "2.3 min",
      change: "-45.2%",
      trend: "down"
    }
  ];

  return (
    <>
      <SEO 
        title="AI Customer Experience Analytics | Zion Tech Group"
        description="Transform your customer experience with AI-powered analytics. Get real-time insights, predictive analytics, and customer journey optimization."
        keywords="customer experience analytics, AI sentiment analysis, customer journey mapping, predictive analytics, CX optimization"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center space-x-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Brain className="w-4 h-4" />
                <span>AI-Powered Customer Experience</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                AI Customer Experience
                <span className="block bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  Analytics
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Transform your customer experience with cutting-edge AI analytics. Get real-time insights, 
                predictive analytics, and customer journey optimization to drive loyalty and growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <metric.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">{metric.title}</h3>
                  <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                  <div className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {metric.change} from last month
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our platform combines advanced machine learning with intuitive design to give you unprecedented insights into your customer experience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Use Cases
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover how our AI Customer Experience Analytics can transform your business across various industries and use cases.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <useCase.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">{useCase.title}</h3>
                  <p className="text-gray-300 text-lg">{useCase.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your business needs. All plans include our core AI features and analytics.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${
                    plan.popular 
                      ? 'border-purple-500 scale-105' 
                      : 'border-slate-700'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-4">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700'
                      : 'border border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white'
                  }`}>
                    Get Started
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Transform Your Customer Experience?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Join thousands of businesses that are already using AI to optimize their customer experience and drive better results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                <button className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300">
                  Schedule Demo
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICustomerExperienceAnalytics;