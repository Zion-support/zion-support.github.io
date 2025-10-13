import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  BarChart3, 
  Target, 
  Zap, 
  Eye, 
  CheckCircle, 
  Clock, 
  Brain,
  ArrowRight,
  Star,
  Shield,
  Users,
  Award,
  DollarSign,
  Calendar,
  PieChart
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAISalesForecasterPage = () => {
  const features = [
    {
      title: "Predictive Analytics",
      description: "AI-powered sales forecasting with 95% accuracy using machine learning algorithms",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Real-time Insights",
      description: "Live sales data analysis with instant trend identification and opportunity detection",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Multi-Channel Analysis",
      description: "Comprehensive analysis across all sales channels, territories, and customer segments",
      icon: <PieChart className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automated Reporting",
      description: "Generate detailed sales reports and forecasts automatically with customizable templates",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "month",
      description: "Perfect for small sales teams",
      features: [
        "Up to 5 users",
        "Basic forecasting",
        "Monthly reports",
        "Email support",
        "Standard integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 25 users",
        "Advanced AI forecasting",
        "Real-time dashboards",
        "Priority support",
        "Custom integrations",
        "API access",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,299",
      period: "month",
      description: "For large sales organizations",
      features: [
        "Unlimited users",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label solution",
        "Custom development",
        "SLA guarantee",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Tech Solutions Corp",
      role: "VP of Sales",
      content: "Zion AI Sales Forecaster increased our forecast accuracy by 40%. We can now predict quarterly results with confidence.",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      company: "Global Enterprises",
      role: "Sales Director",
      content: "The AI insights have transformed how we approach sales planning. Our revenue has grown 25% since implementation.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "Retail Solutions Inc",
      role: "CFO",
      content: "Finally, a forecasting tool that actually works. The predictions are incredibly accurate and actionable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Sales Forecaster - Predictive Sales Analytics | Zion Tech Group"
        description="Transform your sales forecasting with AI-powered predictive analytics. Achieve 95% accuracy in sales predictions and boost revenue growth."
        keywords="AI sales forecasting, predictive analytics, sales intelligence, revenue forecasting, business intelligence, sales automation"
        canonical="https://ziontechgroup.com/zion-ai-sales-forecaster"
      />
      
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <ResponsiveContainer className="text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
              <TrendingUp className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">AI-Powered Sales Intelligence</span>
            </div>
            
            <FuturisticText
              variant="display"
              size="6xl"
              gradient={true}
              animated={true}
              glow={true}
              neon={true}
              className="mb-6 leading-tight"
            >
              Zion AI Sales Forecaster
            </FuturisticText>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
              Predict sales performance with 95% accuracy using advanced AI algorithms. Transform your sales 
              strategy with intelligent forecasting and real-time insights.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={Zap}
                iconPosition="left"
                glowColor="green"
                neon={true}
                animated={true}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={Eye}
                iconPosition="left"
                glowColor="blue"
                neon={true}
                animated={true}
              >
                Watch Demo
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced Sales Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Powerful AI-driven features to revolutionize your sales forecasting and planning
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <FuturisticCard
                  key={index}
                  glowColor={index % 2 === 0 ? 'green' : 'blue'}
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className="cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your sales team size and forecasting needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard
                  key={index}
                  glowColor={plan.popular ? 'green' : 'blue'}
                  hoverEffect={true}
                  animated={true}
                  neon={true}
                  className={`relative ${plan.popular ? 'ring-2 ring-green-500' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">/{plan.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <FuturisticButton
                    href="/contact"
                    variant={plan.popular ? "primary" : "outline"}
                    size="lg"
                    className="w-full"
                    glowColor={plan.popular ? "green" : "blue"}
                    neon={true}
                    animated={true}
                  >
                    Get Started
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Sales Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what sales professionals say about Zion AI Sales Forecaster
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden"
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Predict Your Sales Success?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of sales teams already using Zion AI Sales Forecaster to boost their performance.
              Start your free trial today!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
                glowColor="green"
                neon={true}
                animated={true}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                size="lg"
                icon={Eye}
                iconPosition="right"
                glowColor="blue"
                neon={true}
                animated={true}
              >
                Schedule Demo
              </FuturisticButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ZionAISalesForecasterPage;