import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Users, 
  Smartphone, 
  Globe, 
  Database, 
  Lock,
  ArrowRight,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Zap,
  Code,
  Server,
  Settings
} from 'lucide-react';

export default function ServicesPage() {
  const serviceCategories = [
    {
      title: "Micro SAAS Solutions",
      description: "Affordable, powerful software solutions for small to medium businesses",
      services: [
        {
          name: "AI Content Generator Pro",
          description: "Generate high-quality content for blogs, social media, and marketing materials",
          price: "$29/month",
          features: ["Unlimited content generation", "Multiple content types", "SEO optimization", "Brand voice customization"],
          icon: Brain
        },
        {
          name: "Smart Analytics Dashboard",
          description: "Real-time business analytics with AI-powered insights",
          price: "$49/month",
          features: ["Real-time data visualization", "AI-powered insights", "Custom reports", "Multi-platform integration"],
          icon: BarChart3
        },
        {
          name: "Automated Customer Support",
          description: "AI-powered chatbot for 24/7 customer service",
          price: "$39/month",
          features: ["24/7 availability", "Multi-language support", "CRM integration", "Custom training"],
          icon: Users
        },
        {
          name: "Cloud Security Monitor",
          description: "Advanced threat detection and security monitoring",
          price: "$79/month",
          features: ["Real-time threat detection", "Automated response", "Compliance reporting", "Multi-cloud support"],
          icon: Shield
        },
        {
          name: "Mobile App Builder",
          description: "No-code platform for creating professional mobile apps",
          price: "$59/month",
          features: ["Drag-and-drop interface", "Native performance", "App store deployment", "Analytics integration"],
          icon: Smartphone
        },
        {
          name: "API Management Suite",
          description: "Comprehensive API lifecycle management",
          price: "$69/month",
          features: ["API gateway", "Rate limiting", "Authentication", "Performance monitoring"],
          icon: Globe
        }
      ]
    },
    {
      title: "AI Services & Solutions",
      description: "Advanced artificial intelligence solutions for enterprise applications",
      services: [
        {
          name: "Machine Learning Solutions",
          description: "Custom ML models for predictive analytics and automation",
          price: "Starting at $2,500",
          features: ["Custom model development", "Data preprocessing", "Model training & optimization", "Deployment & monitoring"],
          icon: Brain
        },
        {
          name: "Computer Vision Services",
          description: "Image and video analysis solutions for quality control and automation",
          price: "Starting at $3,000",
          features: ["Object detection", "Facial recognition", "Image classification", "Real-time processing"],
          icon: Code
        },
        {
          name: "Natural Language Processing",
          description: "Text analysis, sentiment analysis, and language understanding",
          price: "Starting at $2,000",
          features: ["Text classification", "Sentiment analysis", "Language translation", "Chatbot development"],
          icon: Settings
        },
        {
          name: "AI Consulting & Strategy",
          description: "Strategic AI implementation planning and digital transformation",
          price: "$200/hour",
          features: ["AI strategy development", "Technology assessment", "Implementation planning", "Team training"],
          icon: Zap
        }
      ]
    },
    {
      title: "IT Services & Solutions",
      description: "Comprehensive IT services for infrastructure modernization and optimization",
      services: [
        {
          name: "Cloud Infrastructure Setup",
          description: "Complete cloud migration and infrastructure setup",
          price: "Starting at $5,000",
          features: ["Cloud architecture design", "Migration planning", "Security configuration", "24/7 monitoring"],
          icon: Cloud
        },
        {
          name: "Cybersecurity Solutions",
          description: "Comprehensive security assessment and implementation",
          price: "Starting at $3,500",
          features: ["Security audit", "Penetration testing", "Firewall configuration", "Incident response"],
          icon: Shield
        },
        {
          name: "DevOps & CI/CD",
          description: "Automated deployment pipelines and infrastructure as code",
          price: "Starting at $4,000",
          features: ["CI/CD pipeline setup", "Infrastructure automation", "Monitoring & alerting", "Performance optimization"],
          icon: Server
        },
        {
          name: "Database Management",
          description: "Database design, optimization, and maintenance",
          price: "Starting at $2,500",
          features: ["Database design", "Performance tuning", "Backup & recovery", "Security hardening"],
          icon: Database
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Comprehensive AI and IT services including micro SAAS solutions, machine learning, cloud computing, and cybersecurity. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI services, IT solutions, micro SAAS, cloud computing, cybersecurity, machine learning, DevOps, database management" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            From micro SAAS solutions to enterprise AI implementations, we provide the technology and expertise you need to succeed.
          </p>
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

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {category.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => {
                const Icon = service.icon;
                return (
                  <div key={serviceIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-200">
                    <div className="flex items-center mb-6">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
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
                      to="/contact"
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block"
                    >
                      Get Quote
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine cutting-edge technology with deep industry expertise to deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Fast Implementation</h3>
              <p className="text-gray-300">Quick deployment and rapid time-to-value for all our solutions.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance with industry standards.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock technical support and maintenance services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom quote tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
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