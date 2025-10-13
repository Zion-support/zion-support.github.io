import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Brain, Zap, Shield, CheckCircle, Star, TrendingUp, Users, Clock, Target, Database } from "lucide-react";

export default function ZionAnalyticsPro() {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Advanced Analytics",
      description: "Comprehensive analytics suite with real-time data processing and visualization"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms that automatically identify patterns and trends in your data"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Multi-Source Integration",
      description: "Connect and analyze data from 100+ sources including CRM, ERP, and marketing platforms"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Modeling",
      description: "Forecast future trends and outcomes with advanced statistical models and AI"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and end-to-end encryption"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Share insights and reports with role-based access controls and real-time collaboration"
    }
  ];

  const benefits = [
    "Increase data-driven decision making by 85%",
    "Reduce time spent on manual reporting by 90%",
    "Improve forecast accuracy by 70%",
    "Identify new revenue opportunities 4x faster",
    "Reduce operational costs by 30%",
    "Enhance team productivity by 50%"
  ];

  const pricing = {
    monthly: "$199",
    yearly: "$1,990",
    savings: "17%"
  };

  const integrations = [
    "Salesforce", "HubSpot", "Google Analytics", "Facebook Ads", "LinkedIn Ads",
    "Shopify", "WooCommerce", "Stripe", "PayPal", "QuickBooks", "Xero",
    "Mailchimp", "Zapier", "Slack", "Microsoft Teams", "Google Workspace"
  ];

  return (
    <>
      <Helmet>
        <title>Zion Analytics Pro - Advanced Business Intelligence Platform</title>
        <meta
          name="description"
          content="Transform your business data into actionable insights with Zion Analytics Pro. AI-powered analytics, real-time dashboards, and predictive modeling. Starting at $199/month."
        />
        <meta
          name="keywords"
          content="business analytics, data visualization, AI insights, predictive analytics, business intelligence, data dashboard"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-400" />
                  <span className="text-purple-400 font-semibold">Zion Analytics Pro</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  The Ultimate
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                    {" "}Analytics Platform
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Unlock the full potential of your business data with our comprehensive analytics platform. 
                  Get AI-powered insights, predictive modeling, and real-time dashboards that drive growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Watch Demo
                  </Link>
                </div>
                <div className="mt-6 flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>14-day free trial</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>100+ integrations</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white mb-2">$199</div>
                    <div className="text-gray-300">per month</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Unlimited Dashboards</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">AI-Powered Insights</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">100+ Integrations</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Predictive Analytics</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">API Access</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Everything You Need for Data Success
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive platform provides all the tools you need to transform raw data into actionable business insights.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Connect Everything
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Integrate with 100+ popular business tools and platforms to centralize all your data in one place.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-gray-300 font-medium text-sm">{integration}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Proven Results for Your Business
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of businesses that have transformed their operations with Zion Analytics Pro.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">85%</div>
                  <div className="text-gray-300">Better Decisions</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
                  <div className="text-gray-300">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">70%</div>
                  <div className="text-gray-300">Better Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-400 mb-2">4x</div>
                  <div className="text-gray-300">Faster Insights</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the plan that works best for your business. All plans include our core features.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-md mx-auto">
              <div className="text-center mb-8">
                <div className="text-5xl font-bold text-white mb-2">{pricing.monthly}</div>
                <div className="text-gray-300">per month</div>
                <div className="text-sm text-green-400 mt-2">
                  Save {pricing.savings} with annual billing ({pricing.yearly}/year)
                </div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Unlimited Dashboards</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">100+ Integrations</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AI-Powered Insights</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Predictive Analytics</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">24/7 Support</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </div>
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 text-center"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Unlock Your Data's Potential?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using Zion Analytics Pro to make smarter decisions and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}