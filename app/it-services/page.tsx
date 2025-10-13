import { Link } from "react-router-dom";
import { ArrowRight, Star, CheckCircle, Shield, Cloud, Server, Database, Globe, Smartphone, Monitor, Settings, Users, Lock, Zap, Award, Clock, DollarSign, TrendingUp, BarChart3, Brain, Target, Calendar } from "lucide-react";
import EnhancedSEO from "../components/EnhancedSEO";
import FuturisticCard from "../components/FuturisticCard";
import FuturisticButton from "../components/FuturisticButton";
import ResponsiveContainer from "../components/ResponsiveContainer";
import ResponsiveGrid from "../components/ResponsiveGrid";

const ITServicesPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "IT Services - Zion Tech Group",
    "description": "Comprehensive IT services including cloud infrastructure, cybersecurity, digital transformation, and enterprise solutions",
    "url": "https://ziontechgroup.com/it-services",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Cloud Infrastructure Services",
          "description": "Complete cloud migration and management services",
          "provider": {
            "@type": "Organization",
            "name": "Zion Tech Group"
          }
        }
      ]
    }
  };

  const itServices = [
    {
      name: "Cloud Infrastructure Services",
      description: "Complete cloud migration, management, and optimization services. Transform your infrastructure with AWS, Azure, and Google Cloud solutions.",
      price: "From $2,999/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Cloud migration", "Infrastructure optimization", "24/7 monitoring", "Auto-scaling", "Disaster recovery", "Cost optimization"],
      category: "Infrastructure",
      rating: 4.9,
      clients: "500+",
      link: "/cloud-infrastructure-services",
      featured: true,
      popular: true,
      duration: "2-4 weeks"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Enterprise-grade cybersecurity services including threat detection, incident response, and compliance management. Protect your business from evolving threats.",
      price: "From $1,999/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: ["Threat detection", "Incident response", "Compliance management", "Security audits", "Penetration testing", "Security training"],
      category: "Security",
      rating: 4.8,
      clients: "300+",
      link: "/cybersecurity-solutions",
      featured: true,
      popular: true,
      duration: "1-3 weeks"
    },
    {
      name: "Digital Transformation",
      description: "Complete digital transformation services to modernize your business processes, systems, and operations. Drive innovation and efficiency.",
      price: "From $4,999/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Process automation", "System modernization", "Workflow optimization", "Change management", "Training programs", "Performance monitoring"],
      category: "Transformation",
      rating: 4.9,
      clients: "200+",
      link: "/digital-transformation",
      featured: true,
      popular: false,
      duration: "4-8 weeks"
    },
    {
      name: "Network Infrastructure",
      description: "Design, implement, and maintain robust network infrastructure solutions. Ensure reliable connectivity and optimal performance.",
      price: "From $1,499/month",
      icon: <Server className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Network design", "Implementation", "Performance optimization", "Security configuration", "Monitoring setup", "Maintenance"],
      category: "Infrastructure",
      rating: 4.7,
      clients: "400+",
      link: "/network-infrastructure",
      featured: false,
      popular: true,
      duration: "2-3 weeks"
    },
    {
      name: "Database Management",
      description: "Comprehensive database services including design, optimization, migration, and maintenance. Ensure data integrity and performance.",
      price: "From $1,299/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: ["Database design", "Performance tuning", "Migration services", "Backup solutions", "Security hardening", "Monitoring"],
      category: "Data Management",
      rating: 4.8,
      clients: "350+",
      link: "/database-management",
      featured: false,
      popular: true,
      duration: "1-2 weeks"
    },
    {
      name: "Web Development Services",
      description: "Custom web applications and websites built with modern technologies. Responsive, secure, and scalable solutions for all business needs.",
      price: "From $999/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-500",
      features: ["Custom development", "Responsive design", "SEO optimization", "Performance tuning", "Security implementation", "Maintenance"],
      category: "Development",
      rating: 4.9,
      clients: "600+",
      link: "/web-development-services",
      featured: false,
      popular: true,
      duration: "3-6 weeks"
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. User-friendly, performant, and feature-rich mobile solutions.",
      price: "From $1,799/month",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      features: ["Native development", "Cross-platform apps", "UI/UX design", "App store optimization", "Push notifications", "Analytics integration"],
      category: "Development",
      rating: 4.8,
      clients: "250+",
      link: "/mobile-app-development",
      featured: false,
      popular: false,
      duration: "4-8 weeks"
    },
    {
      name: "IT Support & Maintenance",
      description: "Comprehensive IT support and maintenance services. Keep your systems running smoothly with proactive monitoring and support.",
      price: "From $799/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: ["24/7 support", "Proactive monitoring", "System maintenance", "Software updates", "Hardware support", "Remote assistance"],
      category: "Support",
      rating: 4.7,
      clients: "800+",
      link: "/it-support-maintenance",
      featured: false,
      popular: true,
      duration: "Ongoing"
    },
    {
      name: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions. Make data-driven decisions.",
      price: "From $2,499/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: ["Data visualization", "Predictive analytics", "Custom dashboards", "Report automation", "Data integration", "Machine learning"],
      category: "Analytics",
      rating: 4.9,
      clients: "180+",
      link: "/data-analytics-bi",
      featured: true,
      popular: false,
      duration: "3-5 weeks"
    },
    {
      name: "AI Integration Services",
      description: "Integrate artificial intelligence into your existing systems and processes. Leverage AI to automate tasks and gain competitive advantages.",
      price: "From $3,499/month",
      icon: <Brain className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      features: ["AI strategy", "Model integration", "Process automation", "Training programs", "Performance monitoring", "Continuous improvement"],
      category: "AI Services",
      rating: 4.9,
      clients: "120+",
      link: "/ai-integration-services",
      featured: true,
      popular: true,
      duration: "4-6 weeks"
    },
    {
      name: "DevOps & CI/CD",
      description: "Streamline your development and deployment processes with DevOps practices and continuous integration/continuous deployment pipelines.",
      price: "From $1,999/month",
      icon: <Zap className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: ["CI/CD pipelines", "Infrastructure as code", "Automated testing", "Deployment automation", "Monitoring setup", "Team training"],
      category: "DevOps",
      rating: 4.8,
      clients: "220+",
      link: "/devops-cicd",
      featured: false,
      popular: true,
      duration: "2-4 weeks"
    },
    {
      name: "Compliance & Governance",
      description: "Ensure regulatory compliance and implement governance frameworks. Meet industry standards and protect your business from risks.",
      price: "From $1,599/month",
      icon: <Lock className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: ["Compliance assessment", "Policy development", "Risk management", "Audit preparation", "Training programs", "Ongoing monitoring"],
      category: "Compliance",
      rating: 4.7,
      clients: "150+",
      link: "/compliance-governance",
      featured: false,
      popular: false,
      duration: "2-3 weeks"
    }
  ];

  const categories = [
    { name: "All Services", count: itServices.length, active: true },
    { name: "Infrastructure", count: itServices.filter(s => s.category === "Infrastructure").length, active: false },
    { name: "Security", count: itServices.filter(s => s.category === "Security").length, active: false },
    { name: "Transformation", count: itServices.filter(s => s.category === "Transformation").length, active: false },
    { name: "Data Management", count: itServices.filter(s => s.category === "Data Management").length, active: false },
    { name: "Development", count: itServices.filter(s => s.category === "Development").length, active: false },
    { name: "Support", count: itServices.filter(s => s.category === "Support").length, active: false },
    { name: "Analytics", count: itServices.filter(s => s.category === "Analytics").length, active: false },
    { name: "AI Services", count: itServices.filter(s => s.category === "AI Services").length, active: false },
    { name: "DevOps", count: itServices.filter(s => s.category === "DevOps").length, active: false },
    { name: "Compliance", count: itServices.filter(s => s.category === "Compliance").length, active: false }
  ];

  const benefits = [
    {
      title: "Expert Team",
      description: "Certified professionals with years of experience in enterprise IT solutions",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring for your critical systems",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Scalable Solutions",
      description: "IT services that grow with your business and adapt to changing needs",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Cost Optimization",
      description: "Reduce IT costs while improving performance and reliability",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Security First",
      description: "Enterprise-grade security measures to protect your data and systems",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Proven Results",
      description: "Track record of successful implementations and satisfied clients",
      icon: <Award className="w-6 h-6" />
    }
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of your current IT infrastructure and business requirements",
      icon: <Target className="w-6 h-6" />
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
      icon: <Monitor className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="IT Services - Zion Tech Group | Enterprise Technology Solutions"
        description="Comprehensive IT services including cloud infrastructure, cybersecurity, digital transformation, and enterprise solutions. Expert team, 24/7 support."
        keywords="IT services, cloud infrastructure, cybersecurity, digital transformation, enterprise solutions, network infrastructure, database management"
        canonical="https://ziontechgroup.com/it-services"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Shield className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Enterprise-Grade IT Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              IT Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Comprehensive IT services to transform your business infrastructure. 
            From cloud migration to cybersecurity, we provide enterprise-grade solutions with expert support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Shield className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Watch Demo
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver enterprise-grade IT solutions with unmatched expertise and support
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  category.active
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <ResponsiveGrid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <FuturisticCard
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                {service.popular && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-gray-400">({service.clients} clients)</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-bold text-white">{service.price}</span>
                    <span className="text-sm text-gray-400">Duration: {service.duration}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <div className="flex flex-wrap gap-1">
                    {service.features.slice(0, 3).map((feature, i) => (
                      <span key={i} className="text-xs bg-white/10 text-gray-300 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{service.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 inline group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <button className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                    <CheckCircle className="w-4 h-4" />
                  </button>
                </div>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Join hundreds of businesses already using our IT services to drive growth and innovation. 
            Start your digital transformation journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Shield className="w-5 h-5" />}
            >
              Get Started Today
            </FuturisticButton>
            <FuturisticButton
              href="/ai-services"
              variant="outline"
              size="lg"
              icon={<Brain className="w-5 h-5" />}
            >
              View AI Services
            </FuturisticButton>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;