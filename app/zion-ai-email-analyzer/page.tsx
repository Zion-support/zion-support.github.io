import React from 'react';
import { ArrowRight, CheckCircle, Star, TrendingUp, Target, Phone , Link  } from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
const ZionAIEmailAnalyzerPage: React.FC = () => {
=======
import { Link , Mail, Brain, BarChart3, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Award, Clock, Target  } from "react-router-dom";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
const ZionAIEmailAnalyzerPage = () => {
  const features = [
    {
      title: "AI-Powered Email Analysis",
      description: "Advanced machine learning algorithms analyze email content, sentiment, and patterns to provide actionable insights.",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Real-Time Monitoring",
      description: "Monitor email campaigns, customer communications, and internal emails in real-time with instant notifications.",
      icon: <Clock className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Sentiment Analysis",
      description: "Understand customer emotions and satisfaction levels through advanced sentiment analysis of email communications.",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Security & Compliance",
      description: "Ensure email security and compliance with automated threat detection and regulatory compliance monitoring.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];
  const benefits = [
    "Increase email engagement by 40%",
    "Reduce response time by 60%",
    "Improve customer satisfaction scores",
    "Automated compliance monitoring",
    "Real-time performance analytics",
    "Advanced threat detection"
  ]; origin/cursor/analyze-improve-and-deploy-application-1579
;
  const pricingPlans = [
    {
      name: "Starter",
price: "$99",
      period: "per month",
      description: "Perfect for small businesses",
      features: [
        "Up to 10,000 emails/month",
        "Basic sentiment analysis",
        "Email performance metrics",
        "Standard support"
      ],
      popular: false;
    },
    {
      name: "Professional",
      price: "$299",
      period: "per month",
      description: "Ideal for growing companies",
      features: [
        "Up to 50,000 emails/month",
        "Advanced AI analysis",
        "Real-time monitoring",
        "Priority support",
        "Custom reporting"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "per month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Full AI suite",
        "Custom integrations",
        "Dedicated support",
        "Advanced security",
        "API access"
      ],
      popular: false;
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden" /><EnhancedSEO;
        title="Zion AI Email Analyzer - Advanced Email Intelligence & Analytics | Zion Tech Group"
        description="Transform your email communications with AI-powered analysis, sentiment tracking, and performance optimization. Boost engagement and customer satisfaction with Zion AI Email Analyzer."
        keywords="AI email analyzer, email analytics, sentiment analysis, email marketing, customer insights, email intelligence, automated email monitoring, email performance optimization"
        canonical="https://ziontechgroup.com/zion-ai-email-analyzer"
      />
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" /><div className="absolute inset-0 overflow-hidden" /><div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <ResponsiveContainer className="text-center relative z-10" /><div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6" /><Mail className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Email Intelligence</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Email Analyzer</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Transform your email communications with advanced AI analysis, sentiment tracking, and performance optimization. 
            Boost engagement, improve customer satisfaction, and make data-driven decisions.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" /><FuturisticButton;
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial;
            </FuturisticButton>
            <FuturisticButton;
              href="#features"
              variant="outline"
              size="lg"
              icon={<Target className="w-5 h-5" />}
            >
              Learn More;
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8" /><ResponsiveContainer /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Email Intelligence Features</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Leverage cutting-edge AI technology to analyze, optimize, and improve your email communications ;
              with comprehensive insights and automated recommendations.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              </div><FuturisticCard;
                key={index}
                className="group hover:scale-105 transition-all duration-300"
               /><div;
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  {feature.icon}</div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}</h3>
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}</p>
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion AI Email Analyzer?</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience measurable improvements in your email communications with our advanced AI technology.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              </div><div;
                key={index}
                className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
               /><CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" /><div className="max-w-7xl mx-auto" /><div className="text-center mb-16" /><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Choose Your Plan</h2>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to scale with your business needs.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              </div><div;
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular ;
                    ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105`}
              >
                {plan.popular && (
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2" /><span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular</span>
                    </span>
                  </div>
                )}
                <div className="text-center mb-8" /><h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center" /><span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    </ul><li key={featureIndex} className="flex items-center space-x-3" /><CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton;
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  Get Started</FuturisticButton>
                </FuturisticButton>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30" /><div className="max-w-4xl mx-auto text-center" /><h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Email Communications?</h2>
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join thousands of businesses already using Zion AI Email Analyzer to improve their email performance. 
            Start your free trial today and see the difference AI can make.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center" /><FuturisticButton;
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Free Trial;
            </FuturisticButton>
            <FuturisticButton;
              href="/contact"
              variant="outline"
              size="lg"
              icon={<Mail className="w-5 h-5" />}
            >
              Contact Sales;
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ZionAIEmailAnalyzerPage; origin/cursor/analyze-improve-and-deploy-application-1579
;