import { Link } from "react-router-dom";
import { ArrowRight, Star, CheckCircle, Brain, Shield, Zap, Globe, Users, Award, Clock, DollarSign, TrendingUp, BarChart3, Cloud, Target, Calendar, Eye, MessageSquare, Wand2, Cpu, Bot, Search, Music, FileText, Image, Video, Code, Filter, Layers, Network, Settings, Database, Lock, Sparkles, Play, Download, ExternalLink } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";
import FuturisticNavigation from "../components/FuturisticNavigation";
import FuturisticFooter from "../components/FuturisticFooter";
import FuturisticBackgroundEnhanced from "../components/FuturisticBackgroundEnhanced";

const ServicesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Services - Zion Tech Group",
    "description": "Comprehensive technology services including AI solutions, IT services, micro SAAS, and 5G solutions",
    "url": "https://ziontechgroup.com/services",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "AI Services",
          "description": "Artificial intelligence and machine learning solutions"
        },
        {
          "@type": "Service",
          "name": "IT Services",
          "description": "Information technology infrastructure and support"
        },
        {
          "@type": "Service",
          "name": "Micro SAAS",
          "description": "Ready-to-use software solutions"
        },
        {
          "@type": "Service",
          "name": "5G Solutions",
          "description": "Next-generation connectivity solutions"
        }
      ]
    }
  };

  const serviceCategories = [
    {
      name: "AI Services",
      description: "Transform your business with cutting-edge artificial intelligence solutions",
      icon: <Brain className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-900/20 to-cyan-900/20",
      borderColor: "border-blue-500/30",
      href: "/ai-services",
      services: [
        "AI Consulting Services",
        "Machine Learning Solutions",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "AI-Powered Analytics",
        "AI Content Generation",
        "AI Automation Solutions",
        "AI Security Solutions"
      ],
      stats: {
        clients: "500+",
        projects: "1,200+",
        rating: "4.9",
        uptime: "99.9%"
      }
    },
    {
      name: "IT Services",
      description: "Comprehensive IT infrastructure and support services for modern businesses",
      icon: <Shield className="w-12 h-12" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-900/20 to-emerald-900/20",
      borderColor: "border-green-500/30",
      href: "/it-services",
      services: [
        "Cloud Infrastructure Services",
        "Cybersecurity Solutions",
        "Digital Transformation",
        "Network Infrastructure",
        "Database Management",
        "Web Development Services",
        "Mobile App Development",
        "IT Support & Maintenance"
      ],
      stats: {
        clients: "800+",
        projects: "2,500+",
        rating: "4.8",
        uptime: "99.9%"
      }
    },
    {
      name: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate business deployment",
      icon: <Zap className="w-12 h-12" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-900/20 to-pink-900/20",
      borderColor: "border-purple-500/30",
      href: "/micro-saas",
      services: [
        "Zion Analytics Pro",
        "Zion Security Shield",
        "Zion Cloud Vault",
        "Zion AI CRM Pro",
        "Zion AI Marketing Pro",
        "Zion AI Project Manager",
        "Zion AI Code Assistant",
        "Zion AI Content Studio"
      ],
      stats: {
        clients: "2,000+",
        projects: "60+",
        rating: "4.9",
        uptime: "99.9%"
      }
    },
    {
      name: "5G Solutions",
      description: "Next-generation connectivity and infrastructure for the future",
      icon: <Globe className="w-12 h-12" />,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-900/20 to-red-900/20",
      borderColor: "border-orange-500/30",
      href: "/5g-solutions",
      services: [
        "5G Network Infrastructure",
        "5G IoT Solutions",
        "5G Edge Computing",
        "5G Smart City Solutions",
        "5G Mobile Applications",
        "5G Private Networks",
        "5G Data Analytics",
        "5G Implementation"
      ],
      stats: {
        clients: "150+",
        projects: "300+",
        rating: "4.7",
        uptime: "99.8%"
      }
    }
  ];

  const benefits = [
    {
      title: "Expert Team",
      description: "Certified professionals with years of experience in cutting-edge technologies",
      icon: <Users className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring for your critical systems",
      icon: <Clock className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Scalable Solutions",
      description: "Services that grow with your business and adapt to changing requirements",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cost Effective",
      description: "Competitive pricing with transparent, no-hidden-fees structure",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Security First",
      description: "Enterprise-grade security measures to protect your data and systems",
      icon: <Lock className="w-8 h-8" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Proven Results",
      description: "Track record of successful implementations and satisfied clients",
      icon: <Award className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "Comprehensive analysis of your current systems and business requirements",
      icon: <Search className="w-6 h-6" />
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Custom solution design tailored to your specific needs and objectives",
      icon: <Settings className="w-6 h-6" />
    },
    {
      step: "03",
      title: "Implementation",
      description: "Professional implementation with minimal disruption to your operations",
      icon: <Zap className="w-6 h-6" />
    },
    {
      step: "04",
      title: "Testing & Optimization",
      description: "Thorough testing and performance optimization to ensure optimal results",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: "05",
      title: "Training & Support",
      description: "Comprehensive training for your team and ongoing support services",
      icon: <Users className="w-6 h-6" />
    },
    {
      step: "06",
      title: "Monitoring & Maintenance",
      description: "Continuous monitoring and proactive maintenance to ensure peak performance",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FuturisticBackgroundEnhanced />
      
      <EnhancedSEO
        title="Services - Zion Tech Group | AI, IT, Micro SAAS & 5G Solutions"
        description="Comprehensive technology services including AI solutions, IT services, micro SAAS applications, and 5G solutions. Expert team, 24/7 support."
        keywords="AI services, IT services, micro SAAS, 5G solutions, technology consulting, digital transformation, cloud services, cybersecurity"
        canonical="https://ziontechgroup.com/services"
        structuredData={structuredData}
      />

      <FuturisticNavigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8 backdrop-blur-sm">
            <Sparkles className="w-5 h-5 text-cyan-400 mr-3 animate-pulse" />
            <span className="text-cyan-400 text-sm font-medium">Comprehensive Technology Solutions</span>
            <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Our Services
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed text-center">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
            From AI-powered analytics to enterprise security, we have everything you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-6 h-6" />}
              className="text-lg px-8 py-4"
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-6 h-6" />}
              className="text-lg px-8 py-4"
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Service Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Explore our comprehensive range of technology services designed to meet every business need
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => (
              <FuturisticCard
                key={index}
                className={`group bg-gradient-to-br ${category.bgColor} backdrop-blur-sm rounded-2xl p-8 border ${category.borderColor} hover:border-opacity-60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{category.stats.clients}</div>
                    <div className="text-sm text-gray-400">Clients</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  {category.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Services:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {category.services.slice(0, 4).map((service, i) => (
                      <div key={i} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {service}
                      </div>
                    ))}
                    {category.services.length > 4 && (
                      <div className="text-sm text-cyan-400 font-medium">
                        +{category.services.length - 4} more services
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">{category.stats.rating}</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-white">{category.stats.uptime}</div>
                      <div className="text-xs text-gray-400">Uptime</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(parseFloat(category.stats.rating)) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                    ))}
                  </div>
                </div>
                
                <FuturisticButton
                  href={category.href}
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="w-full justify-center"
                >
                  Explore {category.name}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We deliver exceptional value through our expertise, support, and proven methodologies
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {benefit.description}
                </p>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A proven methodology that ensures successful project delivery and client satisfaction
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
            Join thousands of businesses already using our services to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Sparkles className="w-6 h-6" />}
              className="text-lg px-8 py-4"
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Play className="w-6 h-6" />}
              className="text-lg px-8 py-4"
            >
              Watch Demo
            </FuturisticButton>
            <FuturisticButton
              href="/micro-saas"
              variant="outline"
              size="lg"
              icon={<Download className="w-6 h-6" />}
              className="text-lg px-8 py-4"
            >
              Try Micro SAAS
            </FuturisticButton>
          </div>
        </div>
      </section>

      <FuturisticFooter />
    </div>
  );
};

export default ServicesPage;