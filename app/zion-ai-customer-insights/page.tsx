import { Link } from 'react-router-dom';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import { ArrowRight, BarChart3, CheckCircle, Clock, Eye, Star, Target, TrendingUp, Users } from 'lucide-react';
import { Clock } from 'lucide-react';
const ZionAICustomerInsightsPage = () => {
  return;
},
    {
      title: "Real-Time Sentiment Analysis",
      description: "Monitor customer sentiment across all touchpoints with real-time analysis of reviews, social media, and support tickets.",
      icon: <MessageSquare className="w-6 h-6" />,
      stats: "Real-time monitoring"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast customer behavior, churn risk, and lifetime value using advanced machine learning models.",
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "95% accuracy"
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports and dashboards automatically with insights and recommendations.",
      icon: <BarChart3 className="w-6 h-6" />,
      stats: "Auto-generated insights"
    }
  ];

const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "1,000 customer profiles",
        "Basic sentiment analysis",
        "Standard reports",
        "Email support",
        "API access",
        "Data export"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and agencies",
      features: [
        "10,000 customer profiles",
        "Advanced sentiment analysis",
        "Predictive analytics",
        "Custom dashboards",
        "Priority support",
        "Advanced API",
        "Team collaboration",
        "White-label options"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$249",
      period: "/month",
      description: "For large organizations and enterprises",
      features: [
        "Unlimited customer profiles",
        "AI-powered insights",
        "Advanced predictive models",
        "Custom integrations",
        "24/7 support",
        "Dedicated account manager",
        "Custom reporting",
        "On-premise deployment",
        "Advanced security",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

const testimonials = [
    {
      name: "Rachel Thompson",
      company: "E-commerce Platform",
      role: "Customer Success Director",
      content: "Zion AI Customer Insights helped us reduce churn by 35% and increase customer satisfaction by 40%. The predictive analytics are incredibly accurate.",
      rating: 5,
      avatar: "RT"
    },
    {
      name: "Mark Chen",
      company: "SaaS Startup",
      role: "CEO",
      content: "The real-time sentiment analysis gives us instant feedback on our product releases. We can now respond to customer concerns before they become problems.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Sarah Williams",
      company: "Retail Chain",
      role: "Marketing Director",
      content: "The customer segmentation and insights have transformed our marketing campaigns. Our conversion rates have increased by 60% since implementing this tool.",
      rating: 5,
      avatar: "SW"
    }
  ];

const useCases = [
    {
      title: "Customer Retention",
      description: "Identify at-risk customers and implement targeted retention strategies",
      icon: <Target className="w-8 h-8" />,
      examples: ["Churn Prediction", "Retention Campaigns", "Loyalty Programs", "Win-back Strategies"]
    },
    {
      title: "Product Development",
      description: "Understand customer needs and preferences to guide product decisions",
      icon: <Eye className="w-8 h-8" />,
      examples: ["Feature Requests", "User Feedback", "Product Roadmap", "A/B Testing"]
    },
    {
      title: "Marketing Optimization",
      description: "Create targeted campaigns based on customer behavior and preferences",
      icon: <TrendingUp className="w-8 h-8" />,
      examples: ["Segmentation", "Personalization", "Campaign Targeting", "ROI Optimization"]
    },
    {
      title: "Customer Support",
      description: "Improve support quality with proactive insights and sentiment monitoring",
      icon: <MessageSquare className="w-8 h-8" />,
      examples: ["Sentiment Tracking", "Issue Prevention", "Support Optimization", "Quality Monitoring"]
    }
  ];

const insights = [
    {
      title: "Customer Lifetime Value Prediction",
      description: "Predict how much each customer will spend over their lifetime",
      accuracy: "94%",
      impact: "Increase revenue by 25%"
    },
    {
      title: "Churn Risk Scoring",
      description: "Identify customers likely to churn before they leave",
      accuracy: "91%",
      impact: "Reduce churn by 40%"
    },
    {
      title: "Sentiment Trend Analysis",
      description: "Track customer sentiment changes over time",
      accuracy: "89%",
      impact: "Improve satisfaction by 35%"
    },
    {
      title: "Purchase Intent Prediction",
      description: "Predict when customers are ready to make a purchase",
      accuracy: "87%",
      impact: "Increase conversions by 50%"
    }
  ];
  return (
    
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Zion AI Customer Insights - Advanced Customer Analytics & Intelligence | Zion Tech Group"
        description="Unlock deep customer insights with AI-powered analytics. Sentiment analysis, predictive modeling, and automated reporting. Transform your customer understanding today!"
        keywords="AI customer insights, customer analytics, sentiment analysis, predictive analytics, customer intelligence, behavioral analysis, customer data platform"
        canonical="https://ziontechgroup.com/zion-ai-customer-insights"
      />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid-enhanced quantum-dots">
        
        <div className="absolute inset-0 overflow-hidden">
          
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-8 neon-border">
            <Sparkles className="w-5 h-5 text-indigo-400 mr-2 animate-pulse" />
            <span className="text-indigo-400 text-sm font-medium">#1 AI Customer Insights Platform 2024</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight holographic-text">
            Zion AI Customer Insights
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Unlock deep customer insights with AI-powered analytics and predictive modeling. 
            <span className="text-indigo-400 font-semibold"> Understand your customers like never before and drive growth with data-driven decisions.</span>
          </p>
          
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Start Analyzing Customers
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          {/* Stats */}
          
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            
        <div className="text-center group data-stream">
              
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Users className="w-6 h-6 text-indigo-400" />
              </div>
              
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">2M+</div>
              
        <div className="text-gray-300 text-xs md:text-sm">Customer Profiles Analyzed</div>
            </div>
            
        <div className="text-center group data-stream">
              
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              </div>
              
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">95%</div>
              
        <div className="text-gray-300 text-xs md:text-sm">Prediction Accuracy</div>
            </div>
            
        <div className="text-center group data-stream">
              
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Award className="w-6 h-6 text-green-400" />
              </div>
              
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">40%</div>
              
        <div className="text-gray-300 text-xs md:text-sm">Average Churn Reduction</div>
            </div>
            
        <div className="text-center group data-stream">
              
        <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                <Clock className="w-6 h-6 text-orange-400" />
              </div>
              
        <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">Real-time</div>
              
        <div className="text-gray-300 text-xs md:text-sm">Insights & Alerts</div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto">
          
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced AI Customer Intelligence
            </h2>
            
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive customer analytics powered by cutting-edge AI and machine learning algorithms.
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                
        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                  {feature.title}
                </h3>
                
          <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                  {feature.description}
                </p>
                
        <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>
      {/* Insights Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-indigo-800/50 cyber-grid-enhanced">
        
        <div className="max-w-7xl mx-auto">
          
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 holographic-text">
              Powerful AI Insights
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get actionable insights that drive real business results with our advanced AI models.
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                
        <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  <Brain className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {insight.title}
                </h3>
                
          <p className="text-gray-300 mb-6 leading-relaxed">
                  {insight.description}
                </p>
                
        <div className="space-y-3">
                  
        <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Accuracy</span>
                    <span className="text-lg font-bold text-green-400">{insight.accuracy}</span>
                  </div>
                  
        <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Impact</span>
                    <span className="text-sm text-blue-400">{insight.impact}</span>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>
      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-7xl mx-auto">
          
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Customer Strategy
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Use AI-powered insights to drive growth across every aspect of your business.
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                
        <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {useCase.title}
                </h3>
                
          <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                
        <div className="space-y-2">
                  {useCase.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {example}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-indigo-800/50 cyber-grid-enhanced">
        
        <div className="max-w-7xl mx-auto">
          
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Pricing Plans
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your business size and customer data needs.
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard key={index} className={`relative ${plan.popular ? 'ring-2 ring-indigo-500 scale-105' : ''}`}>
                {plan.popular && (
                  
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>Most Popular</span>
                    </span>
                  </div>
                )}
                
        <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  
        <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  
          <p className="text-gray-300 text-sm">{plan.description}</p>
                </div>
                
        <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
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
              Trusted by Industry Leaders
            </h2>
            
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about Zion AI Customer Insights
            </p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} className="group hover:scale-105 transition-all duration-300">
                
        <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
          <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                
        <div className="flex items-center">
                  
        <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
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
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-indigo-900/30">
        
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Unlock Customer Insights?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses using Zion AI Customer Insights to understand their customers better and drive growth. 
            Start your free trial today and discover the power of AI-driven customer intelligence.
          </p>
          
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Eye className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>
          
        <div className="mt-8 text-sm text-gray-400">
            <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ZionAICustomerInsightsPage;