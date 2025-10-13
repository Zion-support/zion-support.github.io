import { ArrowRight, Search, TrendingUp, Target, BarChart3, CheckCircle, Star, Brain, Zap, Globe, FileText, Eye } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ZionAISEOOptimizer() {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Keyword Research",
      description: "Advanced keyword discovery with search volume, competition, and trend analysis"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Content Optimization",
      description: "AI-powered content suggestions to improve SEO rankings and user engagement"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Ranking Analytics",
      description: "Track your keyword positions and monitor competitor performance in real-time"
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Technical SEO Audit",
      description: "Comprehensive site analysis with actionable recommendations for improvement"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Content Planning",
      description: "AI-generated content calendars and topic suggestions based on trending keywords"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Competitor Analysis",
      description: "Monitor competitor strategies and identify opportunities to outperform them"
    }
  ];

  const capabilities = [
    "AI-powered keyword research and analysis",
    "Real-time ranking tracking for unlimited keywords",
    "Technical SEO audit and recommendations",
    "Content optimization suggestions",
    "Competitor analysis and monitoring",
    "Local SEO optimization tools",
    "Schema markup generator",
    "Meta tag optimization",
    "Site speed analysis and optimization",
    "Mobile-first indexing optimization",
    "Core Web Vitals monitoring",
    "Backlink analysis and tracking",
    "Content gap analysis",
    "SERP feature optimization",
    "Multi-language SEO support",
    "Custom reporting and analytics"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small websites",
      features: [
        "Up to 100 keywords",
        "Basic SEO audit",
        "Content optimization",
        "Email support",
        "1 website",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Most popular for growing businesses",
      features: [
        "Up to 500 keywords",
        "Advanced AI features",
        "Competitor analysis",
        "Priority support",
        "5 websites",
        "Weekly reports",
        "API access",
        "Custom dashboards"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited keywords",
        "All AI features",
        "White-label reports",
        "24/7 dedicated support",
        "Unlimited websites",
        "Real-time monitoring",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "David Park",
      company: "E-commerce Solutions",
      role: "Marketing Director",
      content: "Zion AI SEO Optimizer helped us increase our organic traffic by 150% in just 6 months. The AI keyword suggestions are incredibly accurate and actionable.",
      rating: 5
    },
    {
      name: "Lisa Thompson",
      company: "Digital Agency",
      role: "SEO Manager",
      content: "The competitor analysis feature is a game-changer. We can now see exactly what our competitors are doing and how to outperform them.",
      rating: 5
    },
    {
      name: "James Wilson",
      company: "SaaS Platform",
      role: "Growth Manager",
      content: "The technical SEO audit caught issues we didn't even know existed. Our Core Web Vitals improved dramatically after implementing their recommendations.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI SEO Optimizer - Advanced SEO Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Boost your search rankings with Zion AI SEO Optimizer. AI-powered keyword research, content optimization, technical SEO audits, and competitor analysis."
        />
        <meta
          name="keywords"
          content="AI SEO tools, keyword research, SEO optimization, technical SEO, competitor analysis, search rankings, content optimization"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 mb-6">
              <TrendingUp className="w-4 h-4 text-emerald-400 mr-2" />
              <span className="text-emerald-400 text-sm font-medium">AI-Powered SEO Intelligence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
                Zion AI SEO Optimizer
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Dominate search rankings with AI-powered SEO tools. Advanced keyword research, 
              content optimization, and competitor analysis to boost your organic traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center group"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-2">150%</div>
                <div className="text-gray-300">Average Traffic Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">10,000+</div>
                <div className="text-gray-300">Websites Optimized</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Keyword Accuracy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Advanced SEO Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to dominate search rankings and drive organic traffic.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass-card-enhanced rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform pulse-glow-enhanced">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Complete SEO Toolkit
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                All the tools you need to optimize your website for search engines.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {capabilities.map((capability, index) => (
                <div
                  key={index}
                  className="flex items-center glass-enhanced rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible SEO Plans
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your SEO needs. All plans include 14-day free trial.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative glass-card-enhanced rounded-xl p-8 border transition-all duration-500 hover:scale-105 ${
                    plan.popular
                      ? 'border-emerald-400 bg-gradient-to-br from-emerald-500/10 to-green-500/10'
                      : 'border-white/20 hover:border-emerald-400'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700'
                        : 'border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by SEO Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what SEO experts say about Zion AI SEO Optimizer
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-card-enhanced rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Dominate Search Rankings?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of websites using Zion AI SEO Optimizer to boost their organic traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-emerald-400 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-400 hover:text-slate-900 transition-all duration-300"
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