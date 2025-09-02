import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Share2, 
  TrendingUp, 
  Users, 
  BarChart3, 
  Calendar, 
  MessageSquare, 
  Image, 
  Video, 
  Hash, 
  Heart, 
  ArrowRight, 
  Play,
  CheckCircle,
  Star,
  Zap,
  Target,
  Clock,
  DollarSign
} from 'lucide-react';

export default function AISocialMediaManager() {
  return (
    <>
      <Helmet>
        <title>AI Social Media Manager - Zion Tech Group</title>
        <meta name="description" content="Automate your social media presence with AI-powered content creation, scheduling, and analytics. Boost engagement and grow your audience." />
        <meta name="keywords" content="AI social media, social media automation, content creation, social media analytics, AI marketing, social media management" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-pink-500/10 border border-pink-500/20 rounded-full text-pink-400 text-sm font-medium mb-8">
                <Share2 className="w-4 h-4 mr-2" />
                AI-Powered Social Media
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Social Media
                <span className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent"> Manager</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transform your social media strategy with AI that creates, schedules, and optimizes content across all platforms. 
                Increase engagement by 300% while saving 20+ hours per week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-pink-500/30 text-pink-400 font-semibold rounded-lg hover:bg-pink-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete Social Media Automation
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our AI social media manager handles everything from content creation to performance optimization.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: MessageSquare,
                  title: "AI Content Creation",
                  description: "Generate engaging posts, captions, and hashtags tailored to your brand voice and audience.",
                  price: "From $29/month"
                },
                {
                  icon: Calendar,
                  title: "Smart Scheduling",
                  description: "Optimal posting times based on audience activity and engagement patterns.",
                  price: "From $19/month"
                },
                {
                  icon: BarChart3,
                  title: "Analytics & Insights",
                  description: "Comprehensive performance tracking with actionable recommendations.",
                  price: "From $39/month"
                },
                {
                  icon: Users,
                  title: "Audience Growth",
                  description: "AI-powered follower acquisition and engagement optimization strategies.",
                  price: "From $49/month"
                },
                {
                  icon: Image,
                  title: "Visual Content",
                  description: "Auto-generate graphics, memes, and visual content for all platforms.",
                  price: "From $35/month"
                },
                {
                  icon: TrendingUp,
                  title: "Trend Monitoring",
                  description: "Real-time trend detection and viral content opportunity identification.",
                  price: "From $25/month"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300 mb-3">{feature.description}</p>
                  <div className="text-pink-400 font-semibold">{feature.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Choose the plan that fits your social media needs. All plans include 24/7 support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Starter",
                  price: "$49",
                  period: "/month",
                  description: "Perfect for small businesses and influencers",
                  features: [
                    "3 social media accounts",
                    "50 AI-generated posts/month",
                    "Basic analytics",
                    "Email support",
                    "Content scheduling"
                  ],
                  popular: false
                },
                {
                  name: "Professional",
                  price: "$99",
                  period: "/month",
                  description: "Ideal for growing businesses and agencies",
                  features: [
                    "10 social media accounts",
                    "200 AI-generated posts/month",
                    "Advanced analytics",
                    "Priority support",
                    "Visual content creation",
                    "Trend monitoring",
                    "A/B testing"
                  ],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "$199",
                  period: "/month",
                  description: "For large organizations and agencies",
                  features: [
                    "Unlimited social accounts",
                    "Unlimited AI posts",
                    "Custom analytics dashboard",
                    "Dedicated account manager",
                    "White-label options",
                    "API access",
                    "Custom integrations"
                  ],
                  popular: false
                }
              ].map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 ${plan.popular ? 'border-pink-500/50 ring-2 ring-pink-500/20' : 'border-slate-700'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-slate-300 mt-2">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Social Media Manager?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Join thousands of businesses already growing their social presence with AI.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Save 20+ Hours/Week",
                  description: "Automate content creation and scheduling"
                },
                {
                  icon: TrendingUp,
                  title: "300% More Engagement",
                  description: "AI-optimized content drives better results"
                },
                {
                  icon: Target,
                  title: "Precision Targeting",
                  description: "Reach the right audience at the right time"
                },
                {
                  icon: DollarSign,
                  title: "ROI Tracking",
                  description: "Measure and optimize your social media ROI"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-pink-500/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Social Media?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Start your free 14-day trial today. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-pink-500/30 text-pink-400 font-semibold rounded-lg hover:bg-pink-500/10 transition-all duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <p className="text-slate-400 mt-4">
              Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-pink-400 hover:text-pink-300">kleber@ziontechgroup.com</a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}