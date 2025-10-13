import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Brain, Zap, Shield, CheckCircle, Star, TrendingUp, Users, Clock, Target } from "lucide-react";

export default function AIAnalyticsDashboardPro() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description: "Advanced machine learning algorithms analyze your data to provide actionable insights and predictions"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Dashboards",
      description: "Interactive dashboards that update in real-time with customizable widgets and visualizations"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Predictive Analytics",
      description: "Forecast trends and patterns to make data-driven decisions with confidence"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance with industry standards"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Share insights and reports with your team through role-based access controls"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Automated Reports",
      description: "Schedule and automate report generation to keep stakeholders informed"
    }
  ];

  const benefits = [
    "Increase revenue by up to 25% through data-driven decisions",
    "Reduce analysis time by 80% with automated insights",
    "Improve forecasting accuracy by 60%",
    "Save 15+ hours per week on manual reporting",
    "Identify new opportunities 3x faster",
    "Reduce operational costs by 20%"
  ];

  const pricing = {
    monthly: "$299",
    yearly: "$2,990",
    savings: "17%"
  };

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Inc.",
      role: "CEO",
      content: "AI Analytics Dashboard Pro transformed how we analyze our business data. The insights are incredibly accurate and actionable.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "DataFlow Solutions",
      role: "Data Director",
      content: "The predictive analytics feature helped us identify market trends 6 months ahead of our competitors.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Growth Ventures",
      role: "CFO",
      content: "We've seen a 30% improvement in our forecasting accuracy since implementing this solution.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Analytics Dashboard Pro - Zion Tech Group | Advanced Business Intelligence</title>
        <meta
          name="description"
          content="Transform your business data into actionable insights with AI Analytics Dashboard Pro. Real-time dashboards, predictive analytics, and AI-powered recommendations. Starting at $299/month."
        />
        <meta
          name="keywords"
          content="AI analytics dashboard, business intelligence, predictive analytics, data visualization, real-time dashboards, AI insights"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Brain className="w-6 h-6 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold">AI Analytics Dashboard Pro</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Transform Data Into
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    {" "}Actionable Insights
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Harness the power of AI to analyze your business data, predict trends, and make smarter decisions. 
                  Our advanced analytics platform provides real-time insights that drive growth and efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
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
                    <span>No credit card required</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white mb-2">$299</div>
                    <div className="text-gray-300">per month</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Real-time Analytics</span>
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
                      <span className="text-gray-300">Custom Dashboards</span>
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
                Powerful Features for Modern Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to turn your data into competitive advantages and growth opportunities.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Proven Results for Your Business
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Join thousands of businesses that have transformed their operations with AI Analytics Dashboard Pro.
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
                  <div className="text-4xl font-bold text-cyan-400 mb-2">25%</div>
                  <div className="text-gray-300">Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">80%</div>
                  <div className="text-gray-300">Time Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
                  <div className="text-gray-300">Better Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">3x</div>
                  <div className="text-gray-300">Faster Insights</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300">
                Don't just take our word for it - hear from businesses that have transformed with our solution.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
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
                  <span className="text-gray-300">Real-time Data Sync</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">AI-Powered Insights</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Custom Integrations</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">24/7 Support</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </div>
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
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
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses using AI Analytics Dashboard Pro to make smarter decisions and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
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