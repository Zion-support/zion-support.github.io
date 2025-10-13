import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Database, Code, Smartphone, Brain, Users, Award, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSaas() {
  const microSaasServices = [
    {
      title: "AI Content Generator Pro",
      description: "Advanced AI-powered content creation for blogs, social media, and marketing materials",
      features: ["Multi-language support", "SEO optimization", "Brand voice customization", "Content scheduling"],
      price: "$29/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/micro-saas/ai-content-writer-pro",
      popular: true
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Real-time business analytics with AI-powered insights and automated reporting",
      features: ["Custom dashboards", "Automated reports", "Predictive analytics", "Multi-platform integration"],
      price: "$49/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/micro-saas/analytics-dashboard"
    },
    {
      title: "AI Email Assistant",
      description: "Intelligent email management with smart replies, scheduling, and follow-up automation",
      features: ["Smart email drafting", "Auto-scheduling", "Follow-up automation", "Email analytics"],
      price: "$19/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/micro-saas/email-assistant"
    },
    {
      title: "Lead Scoring Engine",
      description: "AI-powered lead qualification and scoring to maximize conversion rates",
      features: ["Behavioral analysis", "Lead scoring", "CRM integration", "Conversion tracking"],
      price: "$39/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/micro-saas/lead-scoring"
    },
    {
      title: "Document Processor AI",
      description: "Automated document processing with OCR, data extraction, and intelligent categorization",
      features: ["OCR technology", "Data extraction", "Auto-categorization", "Batch processing"],
      price: "$59/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/micro-saas/document-processor"
    },
    {
      title: "Social Media Manager",
      description: "Comprehensive social media management with AI-powered content and scheduling",
      features: ["Multi-platform posting", "Content suggestions", "Analytics tracking", "Engagement optimization"],
      price: "$35/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      link: "/micro-saas/social-manager"
    },
    {
      title: "Appointment Scheduler Pro",
      description: "Smart scheduling system with automated reminders and calendar integration",
      features: ["Calendar sync", "Auto-reminders", "Time zone handling", "Custom booking forms"],
      price: "$25/month",
      icon: <Clock className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/micro-saas/appointment-scheduler"
    },
    {
      title: "Inventory Management AI",
      description: "Intelligent inventory tracking with predictive restocking and demand forecasting",
      features: ["Real-time tracking", "Predictive analytics", "Auto-reordering", "Multi-location support"],
      price: "$45/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/micro-saas/inventory-management"
    }
  ];

  const benefits = [
    "No setup fees or long-term contracts",
    "Instant deployment and activation",
    "24/7 technical support included",
    "Regular feature updates and improvements",
    "Scalable pricing based on usage",
    "Enterprise-grade security and compliance"
  ];

  const stats = [
    { number: "500+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Award className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> },
    { number: "30-day", label: "Free Trial", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Ready-to-use micro SAAS solutions for immediate deployment. AI-powered tools for content creation, analytics, email management, and business automation."
        />
        <meta
          name="keywords"
          content="micro saas, business software, AI tools, content generation, analytics, email automation, lead scoring, document processing"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready-to-use software solutions for immediate deployment. Transform your business with our AI-powered micro SAAS tools designed for modern enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Growing Businesses
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join hundreds of businesses already using our micro SAAS solutions to drive growth and efficiency.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered micro SAAS tools designed to solve specific business challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-white mb-2">
                      {service.price}
                    </div>
                    <div className="text-gray-400 text-sm">per month</div>
                  </div>
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get enterprise-grade functionality with the simplicity and affordability of micro SAAS.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and experience the power of our micro SAAS solutions. No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
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
