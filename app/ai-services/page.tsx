import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BarChart3, Zap, Shield, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const AIServicesPage = () => {
  const mainServices = [
    {
      title: "AI Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with our advanced AI analytics platform. Get real-time dashboards, predictive analytics, and automated reporting.",
      icon: <BarChart3 className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time data visualization",
        "Predictive analytics models",
        "Automated report generation",
        "Custom dashboard creation",
        "Data integration services"
      ],
      link: "/ai-analytics"
    },
    {
      title: "AI Automation Solutions",
      description: "Streamline your business processes with intelligent automation. Reduce manual work, improve efficiency, and scale your operations effortlessly.",
      icon: <Zap className="w-12 h-12" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Workflow automation",
        "Document processing",
        "Email automation",
        "Task scheduling",
        "Process optimization"
      ],
      link: "/ai-automation"
    },
    {
      title: "AI Content Generation",
      description: "Create high-quality content at scale with our AI-powered content generation tools. From blog posts to marketing materials, we've got you covered.",
      icon: <Brain className="w-12 h-12" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Blog post generation",
        "Marketing copy creation",
        "Social media content",
        "Product descriptions",
        "SEO-optimized content"
      ],
      link: "/ai-content-generation"
    },
    {
      title: "AI Customer Service",
      description: "Enhance your customer experience with intelligent chatbots and virtual assistants. Provide 24/7 support and improve customer satisfaction.",
      icon: <Shield className="w-12 h-12" />,
      color: "from-orange-500 to-red-500",
      features: [
        "Intelligent chatbots",
        "Virtual assistants",
        "Customer support automation",
        "Sentiment analysis",
        "Multi-language support"
      ],
      link: "/ai-customer-service"
    }
  ];

  const specializedServices = [
    { name: "AI Marketing", path: "/ai-marketing", icon: <Globe className="w-5 h-5" />, description: "AI-powered marketing campaigns and customer targeting" },
    { name: "AI Healthcare", path: "/ai-healthcare", icon: <Shield className="w-5 h-5" />, description: "Medical AI solutions for diagnosis and treatment" },
    { name: "AI Fraud Detection", path: "/ai-fraud-detection", icon: <Zap className="w-5 h-5" />, description: "Advanced fraud detection and prevention systems" },
    { name: "AI Predictive Analytics", path: "/ai-predictive-analytics", icon: <BarChart3 className="w-5 h-5" />, description: "Predict future trends and behaviors with AI" },
    { name: "AI Project Management", path: "/ai-project-management", icon: <Brain className="w-5 h-5" />, description: "Intelligent project planning and resource optimization" },
    { name: "AI Recommendation Engine", path: "/ai-recommendation-engine", icon: <Star className="w-5 h-5" />, description: "Personalized recommendations for better user experience" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your business needs and identify AI opportunities that can drive real value."
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Our experts design a custom AI solution tailored to your specific requirements and goals."
    },
    {
      step: "03",
      title: "Development & Training",
      description: "We develop and train AI models using your data to ensure optimal performance and accuracy."
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We deploy your AI solution and provide ongoing support to ensure continued success."
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and focus on strategic initiatives",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Better Decision Making",
      description: "Get data-driven insights to make informed business decisions",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs through intelligent automation",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Scalable Solutions",
      description: "AI solutions that grow with your business needs",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="AI Services - Artificial Intelligence Solutions | Zion Tech Group"
        description="Transform your business with our comprehensive AI services including analytics, automation, content generation, and customer service solutions."
        keywords="AI services, artificial intelligence, machine learning, AI automation, AI analytics, AI content generation, AI customer service"
        canonical="https://ziontechgroup.com/ai-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions. 
            From analytics to automation, we help you harness the power of AI to drive growth and innovation.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-20 h-20 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-cyan-400 font-medium group-hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Specialized AI Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored AI solutions for specific industries and use cases
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specializedServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-cyan-400">
                      {service.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our AI Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the transformative power of AI with our expert solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-cyan-400">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-cyan-400">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's discuss your AI needs and explore how our solutions can drive real value for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
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
    </div>
  );
};

export default AIServicesPage;