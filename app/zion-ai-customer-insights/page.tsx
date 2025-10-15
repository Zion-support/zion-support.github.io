import React from "react";
import { Helmet } from "react-helmet-async";

export default function ZionAiCustomerInsights() {
  return;
}
  return;
}
  // TODO: Implement
}
  const features = [;
    "AI-powered customer behavior analysis",";
    "Real-time sentiment analysis across all channels",";
    "Predictive customer lifetime value modeling",";
    "Automated customer segmentation",";
    "Churn prediction and prevention alerts",";
    "Customer journey mapping and optimization",";
    "Multi-channel data integration (email, social, web, phone)",";
    "Advanced analytics dashboard with custom reports",";
    "Automated insight generation and recommendations",";
    "ROI tracking and performance metrics",";
    "Custom AI model training for your business",";
    "API integration with 100+ platforms"
  ];

  const benefits = [
    "Increase customer retention by 35%",";
    "Boost revenue per customer by 40%",";
    "Reduce churn rate by 50%",";
    "Improve customer satisfaction scores"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      description: "Perfect for small businesses getting started with customer insights",
      features: [
        "Up to 10,000 customer profiles",";
        "Basic sentiment analysis",";
        "Standard segmentation",";
        "Monthly reports",";
        "Email support",";
        "Basic dashboard",";
        "5 data source integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "/month",
      description: "Ideal for growing businesses and marketing teams",
      features: [
        "Up to 100,000 customer profiles",";
        "Advanced sentiment analysis",";
        "Predictive analytics",";
        "Real-time insights",";
        "Priority support",";
        "Advanced dashboard",";
        "20 data source integrations",";
        "Custom AI model training",";
        "API access",";
        "Team collaboration (10 users)"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations with complex customer data needs",
      features: [
        "Unlimited customer profiles",";
        "AI-powered insights engine",";
        "Advanced predictive modeling",";
        "Real-time alerts and notifications",";
        "24/7 dedicated support",";
        "Custom dashboard development",";
        "Unlimited data integrations",";
        "Custom AI model development",";
        "Advanced API access",";
        "Unlimited team members",";
        "White-label solution",";
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "E-commerce Solutions",
      role: "VP of Marketing",
      content: "Zion AI Customer Insights transformed our understanding of customer behavior. We've increased retention by 40% and our revenue per customer has grown by 35%.",
      rating: 5,
      avatar: "JM"
    },
    {
      name: "David Kim",
      company: "SaaS Platform",
      role: "Head of Customer Success",
      content: "The predictive analytics are incredibly accurate. We can now identify at-risk customers before they churn and take proactive action to retain them.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Thompson",
      company: "Retail Chain",
      role: "Customer Experience Director",
      content: "The AI insights help us personalize every customer interaction. Our satisfaction scores have improved dramatically and customer lifetime value is up 45%.",
      rating: 5,
      avatar: "LT"
    }
  ];

  const insights = [
    {
      title: "Behavioral Analysis",
      description: "Understand customer actions, preferences, and patterns across all touchpoints",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Sentiment Tracking",
      description: "Monitor customer emotions and satisfaction in real-time across all channels",
      icon: <Heart className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Analytics",
      description: "Forecast customer behavior, churn risk, and lifetime value with AI",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Journey Optimization",
      description: "Map and optimize customer journeys for maximum engagement and conversion",
      icon: <Map className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

const ZionAiCustomerInsightsPage: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="zion-ai-customer-insights - Zion Tech Group"
        description="Zion Tech Group zion-ai-customer-insights service page"
      /></></SEOHead>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10"></div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6"></div>
              <Brain className="w-4 h-4 text-cyan-400 mr-2" /></Brain>
              <span className="text-cyan-400 text-sm font-medium">AI-Powered Customer Intelligence</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              Zion AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse"></span>
                {" "}Customer Insights
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"></p>
              Transform customer data into actionable insights with AI. Understand behavior patterns, 
              predict churn, and optimize customer lifetime value with advanced analytics.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16"></div>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              ></Link>
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></ArrowRight>
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              ></Link>
                View Demo
                <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" /></Monitor>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"></div>
              <div className="text-center group"></div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                  <Users className="w-8 h-8 text-cyan-400" /></Users>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">500K+</div>
                <div className="text-gray-300 text-sm">Customers Analyzed</div>
              </div>
              <div className="text-center group"></div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                  <TrendingUp className="w-8 h-8 text-cyan-400" /></TrendingUp>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">35%</div>
                <div className="text-gray-300 text-sm">Retention Increase</div>
              </div>
              <div className="text-center group"></div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                  <Target className="w-8 h-8 text-cyan-400" /></Target>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-gray-300 text-sm">Prediction Accuracy</div>
              </div>
              <div className="text-center group"></div>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                  <Award className="w-8 h-8 text-cyan-400" /></Award>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-gray-300 text-sm">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"></h2>
                Advanced Customer Intelligence Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"></p>
                Harness the power of AI to understand your customers like never before. 
                From behavioral analysis to predictive insights, we provide everything you need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                ></div>
                  <div className="flex items-center mb-4"></div>
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                    <span className="text-white font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights Types */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Comprehensive Customer Intelligence
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Get a 360-degree view of your customers with our advanced AI-powered analytics.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                ></div>
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${insight.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  ></div>
                    {insight.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors"></h3>
                    {insight.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed"></p>
                    {insight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Start with our free trial and scale as your business grows. All plans include core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400' : ''
                  }`}
                ></div>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold"></span>
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8"></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300"></li>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  ></Link>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" /></ArrowRight>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                See how businesses are using our AI customer insights to drive growth and retention.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                ></div>
                  <div className="flex items-center mb-4"></div>
                    {[...Array(testimonial.rating)].map(( i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" /></Star>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center"></div>
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3"></div>
                      {testimonial.avatar}
                    </div>
                    <div></div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"></h2>
              Ready to Unlock Customer Insights?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed"></p>
              Start your free trial today and discover the power of AI-driven customer intelligence. 
              No credit card required. Cancel anytime.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
              <div className="text-center"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3"></div>
                  <MessageSquare className="w-6 h-6 text-white" /></MessageSquare>
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3"></div>
                  <Phone className="w-6 h-6 text-white" /></Phone>
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3"></div>
                  <Globe className="w-6 h-6 text-white" /></Globe>
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              ></Link>
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></ArrowRight>
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              ></Link>
                View Demo
                <Monitor className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" /></Monitor>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAiCustomerInsightsPage;
