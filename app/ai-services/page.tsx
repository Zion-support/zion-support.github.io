import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, BarChart3, Shield, Zap, Users, Target, CheckCircle, Star, Clock, DollarSign, Bot, Workflow, Eye, Lock } from "lucide-react";

export default function AiServices() {
  const aiServiceCategories = [
    {
      title: "AI Analytics & Intelligence",
      description: "Transform data into actionable insights with AI-powered analytics",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        { name: "AI Analytics Dashboard", path: "/ai-analytics", price: "Starting at $2,999/month", description: "Real-time analytics with predictive modeling" },
        { name: "AI Business Intelligence", path: "/ai-business-intelligence", price: "Starting at $2,999/month", description: "Advanced BI with AI insights" },
        { name: "AI Data Visualization", path: "/ai-data-visualization", price: "Starting at $1,999/month", description: "Interactive data visualization tools" },
        { name: "AI Customer Insights", path: "/ai-customer-insights", price: "Starting at $1,499/month", description: "Deep customer behavior analysis" }
      ]
    },
    {
      title: "AI Automation & Workflow",
      description: "Automate complex processes with intelligent AI solutions",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        { name: "AI Process Automation", path: "/ai-automation", price: "Starting at $1,999/month", description: "Intelligent workflow automation" },
        { name: "AI Workflow Optimization", path: "/ai-workflow-automation", price: "Starting at $1,499/month", description: "Optimize business processes" },
        { name: "AI DevOps Automation", path: "/ai-devops-automation", price: "Starting at $2,499/month", description: "Automated development operations" },
        { name: "AI Document Processing", path: "/ai-document-processing", price: "Starting at $999/month", description: "Intelligent document handling" }
      ]
    },
    {
      title: "AI Security & Protection",
      description: "Advanced AI-powered cybersecurity and threat protection",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      services: [
        { name: "AI Cybersecurity Suite", path: "/ai-cybersecurity", price: "Starting at $3,999/month", description: "Comprehensive AI security platform" },
        { name: "AI Threat Detection", path: "/ai-cybersecurity-monitor", price: "Starting at $2,499/month", description: "Real-time threat monitoring" },
        { name: "AI Security Analytics", path: "/ai-cybersecurity-suite", price: "Starting at $1,999/month", description: "Advanced security insights" },
        { name: "AI Fraud Detection", path: "/ai-fraud-detection", price: "Starting at $1,499/month", description: "Intelligent fraud prevention" }
      ]
    },
    {
      title: "AI Content & Communication",
      description: "Create and manage content with AI-powered tools",
      icon: <Brain className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        { name: "AI Content Generation", path: "/ai-content-generation", price: "Starting at $1,499/month", description: "Automated content creation" },
        { name: "AI Content Management", path: "/ai-content-management", price: "Starting at $999/month", description: "Intelligent content organization" },
        { name: "AI Customer Support", path: "/ai-customer-support", price: "Starting at $2,499/month", description: "AI-powered customer service" },
        { name: "AI Chatbot Solutions", path: "/ai-chatbot-enterprise", price: "Starting at $1,999/month", description: "Advanced conversational AI" }
      ]
    }
  ];

  const keyFeatures = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Advanced Machine Learning",
      description: "State-of-the-art ML algorithms that learn and adapt to your business needs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Processing",
      description: "Instant AI responses and processing for time-critical business operations"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance standards"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and consultation from AI experts"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your business requirements"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Proven Results",
      description: "Track record of successful AI implementations across various industries"
    }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save 50+ Hours Weekly",
      description: "Automate repetitive tasks and free up your team for strategic work"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Increase Efficiency by 300%",
      description: "Our AI solutions typically increase operational efficiency by 300%"
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "ROI in 3 Months",
      description: "Most clients see positive ROI within the first 3 months of implementation"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services including analytics, automation, cybersecurity, and content generation. Transform your business with cutting-edge artificial intelligence solutions from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI cybersecurity, AI content generation, business intelligence, predictive analytics"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Advanced
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}AI Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. From analytics and automation 
              to cybersecurity and content generation, we deliver AI that drives real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get AI Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </section>

        {/* AI Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to meet every business need and challenge.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {aiServiceCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-300">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <Link
                            to={service.path}
                            className="text-white hover:text-cyan-400 transition-colors font-medium text-lg"
                          >
                            {service.name}
                          </Link>
                          <span className="text-cyan-400 font-semibold text-sm">
                            {service.price}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          {service.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional value through our expertise, innovation, and commitment to your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
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

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Proven Results
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of businesses already using our AI solutions to drive growth and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 text-lg">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today for a free AI consultation and discover how artificial intelligence can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get AI Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
