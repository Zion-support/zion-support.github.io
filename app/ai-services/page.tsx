import { ArrowRight, Zap, Shield, Globe, Database, Code, Smartphone, Brain, BarChart3, Users, Target, FileText, Bot, TrendingUp, CheckCircle, Star, Clock, DollarSign } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      title: "AI Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics solutions featuring predictive modeling, real-time dashboards, and automated reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/ai-analytics",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Predictive analytics & forecasting",
        "Real-time data visualization",
        "Automated report generation",
        "Custom dashboard builder",
        "Machine learning models"
      ],
      pricing: "From $99/month",
      rating: 4.9,
      clients: "500+"
    },
    {
      title: "AI Process Automation",
      description: "Streamline your business processes with intelligent automation solutions that reduce manual work by up to 80% and increase efficiency.",
      icon: <Zap className="w-8 h-8" />,
      path: "/ai-automation",
      color: "from-purple-500 to-pink-500",
      features: [
        "Workflow automation",
        "Document processing",
        "Email automation",
        "Data entry automation",
        "Custom bot development"
      ],
      pricing: "From $149/month",
      rating: 4.8,
      clients: "300+"
    },
    {
      title: "AI Content Generation Studio",
      description: "Create high-quality content at scale with our AI-powered content generation tools for blogs, social media, marketing materials, and more.",
      icon: <FileText className="w-8 h-8" />,
      path: "/ai-content-generation",
      color: "from-green-500 to-emerald-500",
      features: [
        "Multi-format content creation",
        "Brand voice customization",
        "SEO optimization",
        "Content calendar management",
        "Plagiarism detection"
      ],
      pricing: "From $79/month",
      rating: 4.7,
      clients: "800+"
    },
    {
      title: "AI Customer Service Suite",
      description: "Enhance customer experience with intelligent chatbots, automated support systems, and AI-powered customer insights.",
      icon: <Bot className="w-8 h-8" />,
      path: "/ai-customer-service",
      color: "from-orange-500 to-red-500",
      features: [
        "Intelligent chatbots",
        "Sentiment analysis",
        "Automated ticket routing",
        "Customer journey mapping",
        "24/7 multilingual support"
      ],
      pricing: "From $199/month",
      rating: 4.9,
      clients: "400+"
    },
    {
      title: "AI Marketing Automation",
      description: "Optimize your marketing campaigns with AI-driven insights, automated personalization, and predictive customer targeting.",
      icon: <Target className="w-8 h-8" />,
      path: "/ai-marketing",
      color: "from-indigo-500 to-purple-500",
      features: [
        "Predictive customer targeting",
        "Automated email campaigns",
        "Social media optimization",
        "Ad performance optimization",
        "ROI prediction models"
      ],
      pricing: "From $129/month",
      rating: 4.8,
      clients: "600+"
    },
    {
      title: "AI Project Management",
      description: "Manage projects more efficiently with AI-powered planning, resource optimization, and intelligent risk assessment.",
      icon: <TrendingUp className="w-8 h-8" />,
      path: "/ai-project-management",
      color: "from-teal-500 to-cyan-500",
      features: [
        "Intelligent project planning",
        "Resource optimization",
        "Risk prediction & mitigation",
        "Automated progress tracking",
        "Team performance analytics"
      ],
      pricing: "From $179/month",
      rating: 4.6,
      clients: "250+"
    }
  ];

  const useCases = [
    {
      industry: "E-commerce",
      title: "AI-Powered Personalization",
      description: "Increase conversion rates by 35% with personalized product recommendations and dynamic pricing.",
      icon: <Target className="w-6 h-6" />,
      results: "35% increase in conversions"
    },
    {
      industry: "Healthcare",
      title: "AI Diagnostic Assistant",
      description: "Improve diagnostic accuracy by 40% with AI-powered medical image analysis and symptom assessment.",
      icon: <Brain className="w-6 h-6" />,
      results: "40% improvement in accuracy"
    },
    {
      industry: "Finance",
      title: "AI Fraud Detection",
      description: "Reduce fraudulent transactions by 90% with real-time AI-powered fraud detection and prevention.",
      icon: <Shield className="w-6 h-6" />,
      results: "90% fraud reduction"
    },
    {
      industry: "Manufacturing",
      title: "AI Predictive Maintenance",
      description: "Reduce downtime by 60% with AI-powered equipment monitoring and predictive maintenance scheduling.",
      icon: <Zap className="w-6 h-6" />,
      results: "60% downtime reduction"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "Zion's AI analytics platform transformed our data strategy. We now make decisions 10x faster with real-time insights.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "E-commerce Plus",
      role: "CEO",
      content: "The AI automation tools saved us 40 hours per week. Our team can now focus on strategic initiatives instead of repetitive tasks.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      company: "Healthcare Innovations",
      role: "Director of Operations",
      content: "The AI customer service solution improved our response time by 80% and customer satisfaction by 45%.",
      rating: 5,
      avatar: "EJ"
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive AI services including analytics, automation, content generation, customer service, marketing, and project management solutions. 99.9% uptime SLA."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, automation, analytics, content generation, customer service, marketing AI, business intelligence, predictive analytics"
        />
        <meta property="og:title" content="AI Services - Zion Tech Group | Advanced AI Solutions" />
        <meta property="og:description" content="Transform your business with cutting-edge AI solutions. From analytics to automation, we provide comprehensive AI services that drive growth and innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Brain className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">#1 AI Solutions Provider 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              AI Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}That Transform
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From analytics to automation, we provide comprehensive AI services that drive growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">2,500+</div>
                <div className="text-gray-300 text-sm">AI Solutions Deployed</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime SLA</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-300 text-sm">AI Support</div>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">40%</div>
                <div className="text-gray-300 text-sm">Cost Reduction</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI services designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="flex items-center mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="text-white font-semibold">{service.rating}</span>
                      </div>
                      <div className="text-gray-400 text-sm">{service.clients} clients</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-cyan-400 font-semibold mb-2">{service.pricing}</div>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-cyan-400 text-sm font-medium">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <Link
                    to={service.path}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center block group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Real-World AI Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how our AI solutions are transforming businesses across different industries
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  
                  <div className="text-cyan-400 text-sm font-semibold mb-2">{useCase.industry}</div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="text-green-400 font-semibold text-sm">
                    {useCase.results}
                  </div>
                </div>
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
                See what our clients say about working with Zion Tech Group's AI solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-4 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of businesses already using our AI solutions to drive growth and innovation. 
              Start your AI transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Case Studies
                <Brain className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
