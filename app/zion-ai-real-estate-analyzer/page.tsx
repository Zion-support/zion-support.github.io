import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  TrendingUp, 
  MapPin, 
  Zap, 
  Eye, 
  CheckCircle, 
  Clock, 
  Brain,
  ArrowRight,
  Star,
  Shield,
  Award,
  BarChart3,
  Users,
  DollarSign,
  Target
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAIRealEstateAnalyzerPage = () => {
  const features = [
    {
      title: "Property Valuation",
      description: "AI-powered property valuation with 95% accuracy using market data and predictive analytics",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Market Analysis",
      description: "Comprehensive market trend analysis with neighborhood insights and investment opportunities",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Investment Scoring",
      description: "Intelligent investment scoring based on ROI potential, risk assessment, and market conditions",
      icon: <Target className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Portfolio Management",
      description: "Complete real estate portfolio tracking with performance analytics and optimization recommendations",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Individual",
      price: "$99",
      period: "month",
      description: "Perfect for individual investors",
      features: [
        "Up to 10 properties",
        "Basic valuation",
        "Standard analytics",
        "Email support",
        "Core integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "Most popular for real estate professionals",
      features: [
        "Up to 100 properties",
        "Advanced AI analysis",
        "Market insights",
        "Priority support",
        "Custom reports",
        "API access",
        "Portfolio tracking"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "month",
      description: "For large real estate firms",
      features: [
        "Unlimited properties",
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
      name: "David Martinez",
      company: "Premier Real Estate Group",
      role: "Investment Director",
      content: "Zion AI Real Estate Analyzer has transformed our investment strategy. We've increased our ROI by 40% using their insights.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Metro Property Investments",
      role: "Portfolio Manager",
      content: "The market analysis is incredibly accurate. We can now identify the best investment opportunities before our competitors.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "Urban Development Corp",
      role: "CEO",
      content: "The portfolio management features are game-changing. We can track performance across all our properties in real-time.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Zion AI Real Estate Analyzer - Intelligent Property Investment | Zion Tech Group"
        description="Transform your real estate investments with AI-powered property valuation, market analysis, and portfolio management. Maximize ROI with data-driven insights."
        keywords="AI real estate analyzer, property valuation, real estate investment, market analysis, portfolio management, property intelligence"
        canonical="https://ziontechgroup.com/zion-ai-real-estate-analyzer"
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
              <Home className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">AI-Powered Real Estate Intelligence</span>
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
              Zion AI Real Estate Analyzer
            </FuturisticText>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
              Maximize your real estate investments with intelligent AI analysis. Get accurate property valuations, 
              market insights, and portfolio optimization recommendations.
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
                Advanced Real Estate AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive real estate intelligence powered by artificial intelligence
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
                Investment-Focused Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your real estate investment portfolio size
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
                Trusted by Real Estate Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what real estate professionals say about Zion AI Real Estate Analyzer
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
              Ready to Maximize Your Real Estate Investments?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of real estate professionals already using Zion AI Real Estate Analyzer to boost their returns.
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

export default ZionAIRealEstateAnalyzerPage;