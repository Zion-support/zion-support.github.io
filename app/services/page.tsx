import React from "react";
import { Helmet } from "react-helmet-async";
import { Zap, Shield, Globe, Brain, Cloud, Database, Smartphone, Lock, ArrowRight, CheckCircle, Settings, Users, Star, Clock } from "lucide-react";

// Service categories
const serviceCategories = [
  { 
    icon: <Brain className="w-8 h-8" />, 
    title: "AI & Machine Learning", 
    description: "Advanced artificial intelligence solutions including deep learning, natural language processing, computer vision, and predictive analytics for business transformation.", 
    services: [ 
      "Machine Learning Model Development", 
      "Natural Language Processing", 
      "Computer Vision Solutions", 
      "Predictive Analytics", 
      "AI Chatbots & Virtual Assistants", 
      "Recommendation Systems",
      "Deep Learning Implementation",
      "AI Strategy Consulting"
    ], 
    color: "from-blue-600 to-cyan-600",
    pricing: "Starting at $299/month",
    features: ["Custom AI Models", "Real-time Processing", "API Integration", "Scalable Infrastructure"]
  },
  { 
    icon: <Globe className="w-8 h-8" />,
    title: "5G Technology",
    description: "Next-generation 5G implementation, optimization, and IoT solutions for ultra-fast connectivity and smart infrastructure deployment.",
    services: [
      "5G Network Implementation",
      "IoT Solutions & Integration",
      "Edge Computing",
      "Smart City Solutions",
      "5G Performance Optimization",
      "Private 5G Networks",
      "5G Security Solutions",
      "Network Slicing"
    ],
    color: "from-purple-600 to-pink-600",
    pricing: "Starting at $499/month",
    features: ["Ultra-low Latency", "High Bandwidth", "Massive IoT Support", "Network Slicing"]
  },
  { 
    icon: <Shield className="w-8 h-8" />,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your business from cyber threats and ensure data integrity and compliance with industry standards.",
    services: [
      "Security Assessment & Auditing",
      "Threat Detection & Response",
      "Data Encryption & Protection",
      "Compliance Management",
      "Security Training & Awareness",
      "Incident Response Planning",
      "Penetration Testing",
      "Security Architecture Design"
    ],
    color: "from-green-600 to-emerald-600",
    pricing: "Starting at $399/month",
    features: ["24/7 Monitoring", "Threat Intelligence", "Compliance Support", "Incident Response"]
  },
  { 
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services to optimize your business operations, reduce costs, and improve performance.",
    services: [
      "Cloud Migration & Strategy",
      "Multi-Cloud Management",
      "Serverless Architecture",
      "Cloud Security & Compliance",
      "Cost Optimization",
      "Disaster Recovery Solutions",
      "Container Orchestration",
      "Cloud-Native Development"
    ],
    color: "from-orange-600 to-red-600",
    pricing: "Starting at $199/month",
    features: ["Auto-scaling", "High Availability", "Cost Optimization", "Multi-cloud Support"]
  },
  { 
    icon: <Database className="w-8 h-8" />,
    title: "Data Analytics",
    description: "Transform your data into actionable insights with advanced analytics, business intelligence, and data visualization solutions for informed decision-making.",
    services: [
      "Business Intelligence Dashboards",
      "Data Warehousing",
      "Real-time Analytics",
      "Data Visualization",
      "Statistical Analysis",
      "Data Quality Management",
      "Big Data Processing",
      "Data Lake Implementation"
    ],
    color: "from-indigo-600 to-purple-600",
    pricing: "Starting at $249/month",
    features: ["Real-time Processing", "Advanced Visualizations", "Machine Learning Integration", "Scalable Architecture"]
  },
  { 
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices with modern development practices.",
    services: [
      "iOS & Android App Development",
      "Cross-Platform Solutions",
      "Mobile UI/UX Design",
      "App Store Optimization",
      "Mobile Security",
      "Progressive Web Apps",
      "Mobile Backend Development",
      "App Performance Optimization"
    ],
    color: "from-teal-600 to-cyan-600",
    pricing: "Starting at $149/month",
    features: ["Native Performance", "Cross-platform", "Modern UI/UX", "App Store Optimization"]
  },
  { 
    icon: <Settings className="w-8 h-8" />,
    title: "DevOps & Automation",
    description: "Streamline your development and deployment processes with DevOps practices, CI/CD pipelines, and infrastructure automation.",
    services: [
      "CI/CD Pipeline Setup",
      "Infrastructure as Code",
      "Container Orchestration",
      "Monitoring & Logging",
      "Automated Testing",
      "Deployment Automation",
      "Configuration Management",
      "Performance Optimization"
    ],
    color: "from-yellow-600 to-orange-600",
    pricing: "Starting at $179/month",
    features: ["Automated Deployments", "Infrastructure as Code", "Continuous Monitoring", "Scalable Architecture"]
  },
  { 
    icon: <Users className="w-8 h-8" />,
    title: "IT Consulting",
    description: "Strategic IT consulting services to help you make informed technology decisions and optimize your IT infrastructure for maximum efficiency.",
    services: [
      "Technology Strategy",
      "IT Infrastructure Planning",
      "Digital Transformation",
      "Technology Assessment",
      "Vendor Management",
      "IT Governance",
      "Change Management",
      "Technology Roadmapping"
    ],
    color: "from-pink-600 to-rose-600",
    pricing: "Starting at $199/hour",
    features: ["Strategic Planning", "Technology Assessment", "Vendor Management", "Change Management"]
  }
];
// Process steps
const processSteps = [
  { step: "01",
    title: "Discovery & Analysis",
    description: "We begin by understanding your business goals, challenges, and requirements through comprehensive analysis and stakeholder interviews." },
  { step: "02",
    title: "Strategy & Planning",
    description: "Our team develops a customized strategy and detailed implementation plan tailored to your specific needs and objectives." },
  { step: "03",
    title: "Development & Implementation",
    description: "We execute the solution using cutting-edge technologies and best practices, ensuring quality and performance at every step." },
  { step: "04",
    title: "Testing & Optimization",
    description: "Rigorous testing and optimization ensure your solution meets all requirements and performs at peak efficiency." },
  { step: "05",
    title: "Deployment & Support",
    description: "We handle the deployment process and provide ongoing support to ensure your solution continues to deliver value." }
];
const ServicesPage: React.FC = () => { return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including machine learning, 5G technology, cybersecurity, cloud solutions, data analytics, and mobile development." />
        <meta name="keywords" content="AI services, 5G technology, cybersecurity, cloud solutions, data analytics, mobile development, IT consulting, machine learning" />
        <meta property="og:title" content="Our Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI and IT services for modern businesses." />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive AI and IT solutions designed to accelerate your business growth, 
                enhance efficiency, and drive innovation across all industries.
              </p>
            </div>
          </div>
        </section>
        { /* Service Categories */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Service Categories</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer a wide range of cutting-edge technology services to meet your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              { serviceCategories.map((category, index) => (
                <div key={index } className="cyber-card hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <div className={ `w-16 h-16 bg-gradient-to-r ${category.color } rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        { category.icon }
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-cyan-400 font-bold text-lg">{category.pricing}</div>
                      <div className="text-gray-400 text-sm">Starting Price</div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 holographic-text">{ category.title }</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm">{ category.description }</p>
                  
                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      { category.features.map((feature, featureIndex) => (
                        <div key={featureIndex } className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span className="text-xs text-gray-300">{ feature }</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Services List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Services Include:</h4>
                    <div className="space-y-1">
                      { category.services.slice(0, 4).map((service, serviceIndex) => (
                        <div key={serviceIndex } className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-cyan-400 flex-shrink-0" />
                          <span className="text-xs text-gray-300">{ service }</span>
                        </div>
                      ))}
                      {category.services.length > 4 && (
                        <div className="text-cyan-400 text-xs font-medium">
                          +{category.services.length - 4} more services
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button className="w-full cyber-button text-center py-3 px-6 text-sm font-semibold flex items-center justify-center group">
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* Process Section */ }
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery and maximum value
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                { processSteps.map((step, index) => (
                  <div key={index } className="flex items-start space-x-6 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        { step.step }
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-3">{ step.title }</h3>
                      <p className="text-gray-300 leading-relaxed">{ step.description }</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        { /* Why Choose Our Services */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Lock className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security measures to protect your data and systems from threats.</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Rapid Deployment</h3>
                <p className="text-gray-300">Fast implementation with minimal disruption to your business operations.</p>
              </div>
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support to ensure your systems run smoothly at all times.</p>
              </div>
            </div>
          </div>
        </section>
        { /* CTA Section */ }
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our AI and IT solutions can accelerate your success and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Get Started Today
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ServicesPage;