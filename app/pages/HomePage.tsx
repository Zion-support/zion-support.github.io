import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Smartphone, 
  Globe, 
  Database, 
  Lock,
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function HomePage() {
  const microSaasServices = [
    {
      title: "AI Content Generator Pro",
      description: "Generate high-quality content for blogs, social media, and marketing materials using advanced AI.",
      price: "$29/month",
      features: ["Unlimited content generation", "Multiple content types", "SEO optimization", "Brand voice customization"],
      icon: Brain,
      link: "/ai-content-generator"
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Real-time business analytics with AI-powered insights and automated reporting.",
      price: "$49/month",
      features: ["Real-time data visualization", "AI-powered insights", "Custom reports", "Multi-platform integration"],
      icon: BarChart3,
      link: "/analytics-dashboard"
    },
    {
      title: "Automated Customer Support",
      description: "AI-powered chatbot that handles customer inquiries 24/7 with human-like responses.",
      price: "$39/month",
      features: ["24/7 availability", "Multi-language support", "CRM integration", "Custom training"],
      icon: Users,
      link: "/customer-support-ai"
    },
    {
      title: "Cloud Security Monitor",
      description: "Advanced threat detection and security monitoring for your cloud infrastructure.",
      price: "$79/month",
      features: ["Real-time threat detection", "Automated response", "Compliance reporting", "Multi-cloud support"],
      icon: Shield,
      link: "/cloud-security"
    },
    {
      title: "Mobile App Builder",
      description: "No-code platform to create professional mobile apps for iOS and Android.",
      price: "$59/month",
      features: ["Drag-and-drop interface", "Native performance", "App store deployment", "Analytics integration"],
      icon: Smartphone,
      link: "/mobile-app-builder"
    },
    {
      title: "API Management Suite",
      description: "Comprehensive API lifecycle management with monitoring, security, and analytics.",
      price: "$69/month",
      features: ["API gateway", "Rate limiting", "Authentication", "Performance monitoring"],
      icon: Globe,
      link: "/api-management"
    }
  ];

  const aiServices = [
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics, recommendation systems, and automation.",
      price: "Starting at $2,500",
      features: ["Custom model development", "Data preprocessing", "Model training & optimization", "Deployment & monitoring"]
    },
    {
      title: "Computer Vision Services",
      description: "Image and video analysis solutions for quality control, security, and automation.",
      price: "Starting at $3,000",
      features: ["Object detection", "Facial recognition", "Image classification", "Real-time processing"]
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, and language understanding solutions.",
      price: "Starting at $2,000",
      features: ["Text classification", "Sentiment analysis", "Language translation", "Chatbot development"]
    },
    {
      title: "AI Consulting & Strategy",
      description: "Strategic AI implementation planning and digital transformation consulting.",
      price: "$200/hour",
      features: ["AI strategy development", "Technology assessment", "Implementation planning", "Team training"]
    }
  ];

  const itServices = [
    {
      title: "Cloud Infrastructure Setup",
      description: "Complete cloud migration and infrastructure setup on AWS, Azure, or Google Cloud.",
      price: "Starting at $5,000",
      features: ["Cloud architecture design", "Migration planning", "Security configuration", "24/7 monitoring"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security assessment, implementation, and ongoing monitoring.",
      price: "Starting at $3,500",
      features: ["Security audit", "Penetration testing", "Firewall configuration", "Incident response"]
    },
    {
      title: "DevOps & CI/CD",
      description: "Automated deployment pipelines and infrastructure as code implementation.",
      price: "Starting at $4,000",
      features: ["CI/CD pipeline setup", "Infrastructure automation", "Monitoring & alerting", "Performance optimization"]
    },
    {
      title: "Database Management",
      description: "Database design, optimization, and maintenance for optimal performance.",
      price: "Starting at $2,500",
      features: ["Database design", "Performance tuning", "Backup & recovery", "Security hardening"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Micro SAAS Services</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions, micro SAAS services, and digital transformation for businesses worldwide. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud computing, cybersecurity, machine learning, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform Your Business with Cutting-Edge AI and IT Solutions
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            From micro SAAS services to enterprise AI solutions, we help businesses innovate and grow in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              to="/services" 
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info Banner */}
      <section className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">+1 302 464 0950</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </section>

      {/* Micro SAAS Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Micro SAAS Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful, affordable software solutions designed to streamline your business operations and boost productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-2xl font-bold text-cyan-600">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                  >
                    Learn More
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              AI Services & Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to transform your business processes and gain competitive advantages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-600 p-3 rounded-lg">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="text-xl font-bold text-purple-600">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              IT Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services to modernize your infrastructure, enhance security, and optimize performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 p-3 rounded-lg">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                    <p className="text-xl font-bold text-cyan-400">{service.price}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Implementation</h3>
              <p className="text-gray-600">Quick deployment and rapid time-to-value for all our solutions.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security and compliance with industry standards.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock technical support and maintenance services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get started with our AI and IT solutions today. Contact us for a free consultation and custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Get Free Consultation
            </Link>
            <Link 
              to="/pricing" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}