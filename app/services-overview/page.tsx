import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Code, Wifi, Cloud, Target, Users, TrendingUp, Clock, Zap, Shield, Globe, Star, Phone, Mail, CheckCircle, ArrowRight, MapPin } from 'lucide-react';

const ServicesOverviewPage: React.FC = () => {
  const serviceCategories = [
  const features = [
    {
      title: "AI Services",
      icon: <Brain className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      description: "Revolutionary AI-powered solutions for modern businesses",
      services: [
        { name: "AI Analytics Dashboard Pro", price: "$299/month", features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards"] },
        { name: "AI Content Generation Pro", price: "$199/month", features: ["AI Writing", "Content Optimization", "Multi-language Support"] },
        { name: "AI Automation Suite", price: "$399/month", features: ["Workflow Automation", "Process Optimization", "Integration APIs"] },
        { name: "AI Business Intelligence Pro", price: "$249/month", features: ["Advanced Analytics", "Data Visualization", "Custom Reports"] },
        { name: "AI Code Assistant Pro", price: "$199/month", features: ["Code Generation", "Bug Detection", "Performance Optimization"] },
        { name: "AI Chatbot Enterprise", price: "$149/month", features: ["Multi-language Support", "Advanced NLP", "Integration APIs"] },
        { name: "AI Social Media Manager", price: "$149/month", features: ["AI Content Generation", "Multi-platform Support", "Analytics Dashboard"] },
        { name: "AI Project Manager", price: "$99/month", features: ["AI Planning", "Resource Optimization", "Progress Tracking"] },
        { name: "AI Customer Support", price: "$149/month", features: ["24/7 Support", "Multi-language", "Omnichannel"] },
        { name: "AI Email Marketing", price: "$99/month", features: ["AI Content Generation", "Advanced Analytics", "A/B Testing"] }
      ]
    },
    {
      title: "IT Services",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-600",
      description: "Comprehensive IT solutions and infrastructure services",
      services: [
        { name: "Cloud Infrastructure", price: "$499/month", features: ["Auto-scaling", "AI Monitoring", "Cost Optimization"] },
        { name: "API Management", price: "$199/month", features: ["API Gateway", "Rate Limiting", "Analytics"] },
        { name: "Database Solutions", price: "$299/month", features: ["Database Design", "Performance Tuning", "Backup & Recovery"] },
        { name: "Advanced Security Suite", price: "$399/month", features: ["AI Threat Detection", "Automated Response", "Compliance Management"] },
        { name: "Performance Monitoring", price: "$149/month", features: ["Real-time Monitoring", "Alerting", "Performance Optimization"] },
        { name: "DevOps Solutions", price: "$249/month", features: ["CI/CD Pipeline", "Infrastructure as Code", "Automated Deployment"] },
        { name: "Cloud Migration Services", price: "From $2,999", features: ["Zero Downtime", "Cost Optimization", "Multi-cloud Support"] },
        { name: "Cybersecurity Consulting", price: "From $2,999", features: ["Security Assessment", "Penetration Testing", "Compliance Management"] }
      ]
    },
    {
      title: "5G Solutions",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-green-500 to-emerald-600",
      description: "Next-generation 5G technology and IoT solutions",
      services: [
        { name: "5G Implementation", price: "$999/month", features: ["5G Network Setup", "IoT Integration", "Edge Computing"] },
        { name: "5G Network Infrastructure", price: "$1,499/month", features: ["Network Design", "Hardware Installation", "Optimization"] },
        { name: "5G IoT Solutions", price: "$799/month", features: ["IoT Platform", "Device Management", "Data Analytics"] },
        { name: "5G Smart City Solutions", price: "$2,999/month", features: ["Smart Infrastructure", "Traffic Management", "Environmental Monitoring"] },
        { name: "5G Edge Computing", price: "$1,199/month", features: ["Edge Infrastructure", "Low Latency", "Real-time Processing"] },
        { name: "5G Private Networks", price: "$1,799/month", features: ["Private 5G", "Custom Configuration", "Dedicated Support"] }
      ]
    },
    {
      title: "Micro SAAS",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      description: "Specialized micro SAAS solutions for specific business needs",
      services: [
        { name: "AI Accounting Assistant", price: "$79/month", features: ["Automated Bookkeeping", "Tax Preparation", "Financial Reports"] },
        { name: "AI Content Moderation Pro", price: "$199/month", features: ["AI Moderation", "Content Filtering", "Compliance Monitoring"] },
        { name: "AI Climate Solutions Pro", price: "$299/month", features: ["Climate Analytics", "Carbon Tracking", "Sustainability Reports"] },
        { name: "AI Agricultural Intelligence Pro", price: "$399/month", features: ["Crop Monitoring", "Yield Prediction", "Weather Analysis"] },
        { name: "AI 3D Generation", price: "$149/month", features: ["3D Modeling", "Rendering", "Animation"] },
        { name: "AI Blockchain Solutions", price: "$249/month", features: ["Smart Contracts", "DeFi Integration", "NFT Platform"] }
      ]
    }
  ];

const stats = [
    { number: "500+", label: "Projects Completed", icon: <Target className="w-6 h-6" /> },
    { number: "150+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

const whyChooseUs = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cutting-Edge Technology",
      description: "We use the latest AI, cloud, and 5G technologies to deliver innovative solutions"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security measures to protect your data and systems from threats"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "Certified professionals with decades of experience in AI, IT, and 5G technologies"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Reach",
      description: "Serving clients worldwide with 24/7 support and local expertise"
    }
  ];
  return (
    <>
      <Helmet>
        <title>Services Overview - Zion Tech Group | Complete AI, IT & 5G Solutions</title>
        <meta name="description" content="Comprehensive overview of all our AI, IT, and 5G services. From micro SAAS solutions to enterprise-grade platforms. View pricing, features, and capabilities." />
        <meta name="keywords" content="AI services, IT services, 5G solutions, micro SAAS, cloud computing, cybersecurity, business automation, pricing" />
        <meta property="og:title" content="Services Overview - Zion Tech Group" />
        <meta property="og:description" content="Complete overview of our AI, IT, and 5G services with pricing and features." />
        <meta property="og:type" content="website" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          
        <div className="absolute inset-0">
            
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
        <div className="container mx-auto px-4 relative z-10">
            
        <div className="text-center max-w-6xl mx-auto">
              
        <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                Complete Technology Solutions
              </div>
              
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Services
                </span>
                <br />
                <span className="text-white">Overview</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Comprehensive AI, IT, and 5G solutions designed to accelerate your business growth. 
                From micro SAAS platforms to enterprise-grade systems, we have everything you need.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
    href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
                <a
    href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
              {/* Stats */}
              
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      
        <div className="text-cyan-400">{stat.icon}</div>
                    </div>
                    
        <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    
        <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Service Categories */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Our Service Categories
                </span>
              </h2>
              
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Comprehensive technology solutions across AI, IT, 5G, and micro SAAS platforms
              </p>
            </div>
            
        <div className="space-y-16">
              {serviceCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 lg:p-12">
                  
        <div className="flex items-center space-x-4 mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center`}>
                      
        <div className="text-white">{category.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                      
          <p className="text-gray-300 text-lg">{category.description}</p>
                    </div>
                  </div>
                  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 border border-cyan-500/10 rounded-2xl p-6 hover:border-cyan-400/30 transition-all duration-300 hover:transform hover:scale-105">
                        <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                        
        <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                        
        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <button className="w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver solutions that drive real results
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="text-center group">
                  
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    
        <div className="text-white">{item.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  
          <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Contact us today to discuss how our comprehensive technology solutions can accelerate your success.
              </p>
              
        <div className="grid md:grid-cols-3 gap-8 text-center">
                
        <div className="flex flex-col items-center">
                  
        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us</h3>
                  
          <p className="text-gray-300">+1 302 464 0950</p>
                </div>
                
        <div className="flex flex-col items-center">
                  
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us</h3>
                  
          <p className="text-gray-300">kleber@ziontechgroup.com</p>
                </div>
                
        <div className="flex flex-col items-center">
                  
        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Visit Us</h3>
                  
          <p className="text-gray-300">364 E Main St STE 1008, Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default ServicesOverviewPage;