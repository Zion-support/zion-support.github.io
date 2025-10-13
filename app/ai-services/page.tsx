import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Cpu, 
  Brain, 
  Zap, 
  BarChart3, 
  Shield, 
  ArrowRight,
  CheckCircle,
  Star,
  Sparkles
} from "lucide-react";

const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      name: "AI Analytics",
      description: "Transform your data into actionable insights with our advanced AI analytics platform",
      icon: BarChart3,
      href: "/ai-analytics",
      features: ["Predictive analytics", "Real-time insights", "Custom dashboards"],
      price: "From $99/month"
    },
    {
      name: "AI Automation",
      description: "Streamline your business processes with intelligent automation solutions",
      icon: Zap,
      href: "/ai-automation",
      features: ["Workflow automation", "Smart scheduling", "Process optimization"],
      price: "From $149/month"
    },
    {
      name: "AI Business Intelligence",
      description: "Make data-driven decisions with our comprehensive BI platform powered by AI",
      icon: Brain,
      href: "/ai-business-intelligence",
      features: ["Advanced reporting", "Data visualization", "Trend analysis"],
      price: "From $199/month"
    },
    {
      name: "AI Content Generation",
      description: "Create engaging content at scale with our AI-powered content generation tools",
      icon: Sparkles,
      href: "/ai-content-generation",
      features: ["Content writing", "SEO optimization", "Multi-language support"],
      price: "From $79/month"
    },
    {
      name: "AI Customer Service",
      description: "Enhance customer experience with intelligent chatbots and support automation",
      icon: Shield,
      href: "/ai-customer-service",
      features: ["24/7 chatbots", "Sentiment analysis", "Ticket routing"],
      price: "From $129/month"
    },
    {
      name: "AI Data Analytics",
      description: "Unlock the power of your data with advanced AI-driven analytics and insights",
      icon: Cpu,
      href: "/ai-data-analytics",
      features: ["Machine learning", "Pattern recognition", "Predictive modeling"],
      price: "From $179/month"
    }
  ];

  const benefits = [
    "Increase efficiency by up to 300%",
    "Reduce operational costs by 40%",
    "Improve decision-making accuracy",
    "24/7 automated operations",
    "Scalable AI solutions",
    "Expert AI consulting included"
  ];

  return (
    <>
      <Helmet>
        <title>AI Services | Zion Tech Group - Advanced Artificial Intelligence Solutions</title>
        <meta 
          name="description" 
          content="Transform your business with our comprehensive AI services including analytics, automation, business intelligence, and content generation solutions." 
        />
        <meta 
          name="keywords" 
          content="AI services, artificial intelligence, machine learning, business automation, AI analytics, AI consulting, intelligent solutions" 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-cyan-500/10 rounded-2xl">
                <Brain className="w-16 h-16 text-cyan-400" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Services
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                & Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business. 
              Our comprehensive AI services help you automate, optimize, and scale your operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors duration-200"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our AI Services
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our comprehensive range of AI services designed to solve specific business challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div
                  key={service.name}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-200">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                      <p className="text-cyan-400 font-medium">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Services?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Experience the transformative power of AI with our proven solutions and expert support
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <Star className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0 mt-1" />
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our AI experts help you identify the best opportunities for automation and optimization
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Get AI Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIServicesPage;
