import { ArrowRight, Brain, BarChart3, Shield, TrendingUp, Users, Code, CheckCircle, Zap, Globe, Database, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function AiServices() {
  const aiServices = [
    {
      name: "AI Analytics Dashboard Pro",
      description: "Advanced AI-powered analytics with real-time insights and predictive modeling for data-driven decision making",
      price: "Starting at $2,999/month",
      features: [
        "Real-time data processing and visualization",
        "Machine learning predictive models",
        "Custom dashboard creation",
        "API integration capabilities",
        "Automated report generation",
        "Multi-source data connectivity"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-analytics-dashboard-pro"
    },
    {
      name: "AI Content Generation Pro",
      description: "Automated content creation using advanced AI models for marketing, communications, and documentation",
      price: "Starting at $1,499/month",
      features: [
        "Multi-language content generation",
        "Brand voice training and customization",
        "SEO-optimized content creation",
        "Content scheduling and automation",
        "Quality assurance and editing",
        "Template library and customization"
      ],
      icon: <Brain className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/ai-content-generation-pro"
    },
    {
      name: "AI Cybersecurity Suite Pro",
      description: "Comprehensive AI-driven security monitoring, threat detection, and automated response systems",
      price: "Starting at $3,999/month",
      features: [
        "Real-time threat detection and analysis",
        "Automated incident response",
        "Compliance monitoring and reporting",
        "24/7 security surveillance",
        "Behavioral analysis and anomaly detection",
        "Integration with existing security tools"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/ai-cybersecurity-suite-pro"
    },
    {
      name: "AI Business Intelligence Pro",
      description: "Advanced business intelligence with AI-powered insights, recommendations, and strategic analysis",
      price: "Starting at $2,499/month",
      features: [
        "Advanced data visualization and reporting",
        "Trend analysis and forecasting",
        "Custom KPI tracking and alerts",
        "Integration with business systems",
        "Automated insights generation",
        "Executive dashboard and summaries"
      ],
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/ai-business-intelligence-pro"
    },
    {
      name: "AI Customer Support",
      description: "Intelligent customer support solutions with chatbots, automated responses, and sentiment analysis",
      price: "Starting at $1,999/month",
      features: [
        "Intelligent chatbot implementation",
        "Multi-channel support integration",
        "Sentiment analysis and monitoring",
        "Automated ticket routing and resolution",
        "Customer journey optimization",
        "Performance analytics and reporting"
      ],
      icon: <Users className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/ai-customer-support"
    },
    {
      name: "AI Code Assistant Pro",
      description: "AI-powered code generation, review, and optimization for development teams",
      price: "Starting at $1,799/month",
      features: [
        "Automated code generation and completion",
        "Code review and quality analysis",
        "Bug detection and fixing suggestions",
        "Documentation generation",
        "Performance optimization recommendations",
        "Integration with popular IDEs"
      ],
      icon: <Code className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      link: "/ai-code-assistant-pro"
    }
  ];

  const useCases = [
    {
      title: "Healthcare & Life Sciences",
      description: "AI-powered diagnostics, drug discovery, and patient care optimization",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Financial Services",
      description: "Fraud detection, risk assessment, and algorithmic trading",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Retail & E-commerce",
      description: "Personalized recommendations, inventory management, and customer analytics",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Education",
      description: "Personalized learning, automated grading, and educational content generation",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Government",
      description: "Public service optimization, data analysis, and citizen engagement",
      icon: <Globe className="w-6 h-6" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions for Business</title>
        <meta
          name="description"
          content="Comprehensive AI services including analytics, content generation, cybersecurity, and business intelligence. Transform your business with cutting-edge artificial intelligence solutions."
        />
        <meta
          name="keywords"
          content="AI services, artificial intelligence, machine learning, AI analytics, AI content generation, AI cybersecurity, business intelligence, AI consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}That Transform
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to revolutionize your business operations. 
              Our comprehensive AI services deliver real-world results through cutting-edge technology and expert implementation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI solutions designed to address every aspect of your business needs, 
                from analytics to automation and everything in between.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-2xl font-bold text-cyan-400 mb-2">
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-400">
                      Contact for custom enterprise pricing
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI solutions are successfully implemented across various industries, 
                delivering measurable results and competitive advantages.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4">
                    {useCase.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300">
                    {useCase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our AI experts to discuss your specific needs and discover how our solutions can drive your success.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400 font-mono">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400 font-mono">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
                <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule AI Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
