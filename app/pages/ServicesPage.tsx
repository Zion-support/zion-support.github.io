import React from "react";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  ArrowRight, 
  CheckCircle,
  Code,
  Database,
  Smartphone,
  Globe,
  Lock,
  BarChart3,
  MessageSquare,
  ShoppingCart,
  GraduationCap,
  Heart,
  DollarSign,
  Search,
  FileText,
  Users,
  Settings
} from "lucide-react";

const ServicesPage: React.FC = () => {
  const mainServices = [
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Comprehensive artificial intelligence solutions including machine learning, natural language processing, and predictive analytics.",
      features: ["Machine Learning Models", "NLP & Text Analysis", "Predictive Analytics", "Computer Vision"],
      href: "/ai-solutions"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Advanced security solutions to protect your digital assets and ensure compliance with industry standards.",
      features: ["Security Audits", "Threat Detection", "Compliance Management", "Incident Response"],
      href: "/cybersecurity"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions that grow with your business and provide reliable, secure data management.",
      features: ["Cloud Migration", "Infrastructure as Code", "Auto-scaling", "Disaster Recovery"],
      href: "/cloud-infrastructure"
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes and improve efficiency.",
      features: ["Process Automation", "Legacy System Modernization", "Workflow Optimization", "Change Management"],
      href: "/digital-transformation"
    }
  ];

  const aiServices = [
    { icon: MessageSquare, title: "AI Chatbots", description: "Intelligent customer support and sales chatbots" },
    { icon: BarChart3, title: "AI Analytics", description: "Advanced data analytics and business intelligence" },
    { icon: Search, title: "AI Search", description: "Intelligent search and recommendation systems" },
    { icon: FileText, title: "AI Content Generation", description: "Automated content creation and management" },
    { icon: Users, title: "AI HR Solutions", description: "Automated recruitment and HR processes" },
    { icon: ShoppingCart, title: "AI E-commerce", description: "Personalized shopping experiences and recommendations" }
  ];

  const industrySolutions = [
    { icon: Heart, title: "Healthcare AI", description: "Medical diagnosis and patient care solutions" },
    { icon: DollarSign, title: "Fintech AI", description: "Financial analysis and fraud detection" },
    { icon: GraduationCap, title: "EdTech AI", description: "Personalized learning and educational platforms" },
    { icon: Settings, title: "Manufacturing AI", description: "Predictive maintenance and quality control" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
              Comprehensive AI and IT solutions designed to transform your business and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our flagship services that form the foundation of digital transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link
                      to={service.href}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Specialized AI services tailored to specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored solutions for different industries and use cases
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industrySolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {solution.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "Understanding your business needs and challenges" },
                { step: "02", title: "Strategy", description: "Developing a customized solution strategy" },
                { step: "03", title: "Implementation", description: "Building and deploying your solution" },
                { step: "04", title: "Optimization", description: "Continuous monitoring and improvement" }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-gray-300">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can transform your business. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
