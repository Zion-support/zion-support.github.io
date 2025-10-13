import { ArrowRight, Brain, Zap, Shield, Globe, CheckCircle, Star, BarChart3, Users, Code, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      name: "AI Content Generation",
      price: "$299/month",
      path: "/ai-content-generation",
      icon: <MessageSquare className="w-6 h-6" />,
      description: "Generate high-quality content at scale with AI-powered writing tools",
      features: ["Blog posts", "Social media content", "Product descriptions", "Email campaigns"]
    },
    {
      name: "AI Cybersecurity Suite",
      price: "$499/month",
      path: "/ai-cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      description: "Advanced AI-powered security solutions for threat detection and prevention",
      features: ["Threat detection", "Behavioral analysis", "Automated response", "Compliance monitoring"]
    },
    {
      name: "AI Business Intelligence",
      price: "$399/month",
      path: "/ai-business-intelligence",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Transform data into actionable insights with AI-driven analytics",
      features: ["Predictive analytics", "Custom dashboards", "Real-time insights", "Automated reporting"]
    },
    {
      name: "AI Customer Support Bot",
      price: "$199/month",
      path: "/ai-customer-support-bot",
      icon: <Users className="w-6 h-6" />,
      description: "Intelligent chatbots that provide 24/7 customer support",
      features: ["Natural language processing", "Multi-language support", "Integration APIs", "Analytics dashboard"]
    },
    {
      name: "AI Data Analytics",
      price: "$349/month",
      path: "/ai-data-analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      description: "Advanced data analysis and visualization powered by machine learning",
      features: ["Data visualization", "Pattern recognition", "Predictive modeling", "Custom algorithms"]
    },
    {
      name: "AI Code Assistant Pro",
      price: "$249/month",
      path: "/ai-code-assistant-pro",
      icon: <Code className="w-6 h-6" />,
      description: "AI-powered coding assistant for faster and more efficient development",
      features: ["Code generation", "Bug detection", "Code review", "Documentation generation"]
    }
  ];

  const aiCapabilities = [
    {
      title: "Machine Learning & Deep Learning",
      description: "Advanced ML algorithms for pattern recognition, prediction, and automation",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Natural Language Processing",
      description: "AI-powered text analysis, sentiment analysis, and language understanding",
      icon: <MessageSquare className="w-8 h-8" />
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis, object detection, and visual recognition",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Predictive Analytics",
      description: "Forecast trends, behaviors, and outcomes using historical data",
      icon: <BarChart3 className="w-8 h-8" />
    }
  ];

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Increase productivity by 60%",
    "Improve accuracy by 95%",
    "24/7 automated operations",
    "Scalable AI solutions",
    "Custom model development"
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Advanced Artificial Intelligence Solutions</title>
        <meta
          name="description"
          content="Transform your business with cutting-edge AI services. Machine learning, natural language processing, computer vision, and predictive analytics solutions."
        />
        <meta
          name="keywords"
          content="AI services, machine learning, artificial intelligence, NLP, computer vision, predictive analytics, AI consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mr-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {" "}Services
                </span>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence solutions. 
              From machine learning to natural language processing, we deliver AI that drives real results.
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
                View AI Demo
              </Link>
            </div>
          </div>
        </section>

        {/* AI Capabilities */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Capabilities
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive artificial intelligence solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiCapabilities.map((capability, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{capability.title}</h3>
                  <p className="text-gray-300">{capability.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300">
                Choose from our comprehensive suite of AI-powered solutions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mr-3">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-cyan-400 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.path}
                    className="w-full py-2 px-4 bg-cyan-600 text-white rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-center block group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-600"
                  >
                    Learn More
                  </Link>
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
                Why Choose Our AI Services?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">{benefit}</h3>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">AI Performance Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Model Accuracy</span>
                    <span className="text-cyan-400 font-semibold">95%+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Processing Speed</span>
                    <span className="text-cyan-400 font-semibold">10x faster</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Cost Reduction</span>
                    <span className="text-cyan-400 font-semibold">40% average</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Implementation Time</span>
                    <span className="text-cyan-400 font-semibold">2-4 weeks</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">ROI Timeline</span>
                    <span className="text-cyan-400 font-semibold">3-6 months</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you identify opportunities and implement solutions that drive real business value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free AI Assessment
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
