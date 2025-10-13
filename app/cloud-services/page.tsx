import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Server, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Lock,
  BarChart3
} from 'lucide-react';

const CloudServicesPage = () => {
  const services = [
    {
      title: "Cloud Migration & Strategy",
      description: "Seamlessly migrate your infrastructure to the cloud with our proven migration strategies and zero-downtime approach.",
      icon: <Cloud className="w-8 h-8" />,
      features: ["Zero-downtime migration", "Cost optimization", "Security compliance", "Performance monitoring"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud Security & Compliance",
      description: "Advanced security solutions to protect your cloud infrastructure with enterprise-grade security and compliance.",
      icon: <Shield className="w-8 h-8" />,
      features: ["Multi-layer security", "Compliance automation", "Threat detection", "Data encryption"],
      color: "from-red-500 to-orange-500"
    },
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud infrastructure management with automated scaling, monitoring, and optimization.",
      icon: <Server className="w-8 h-8" />,
      features: ["Auto-scaling", "Load balancing", "Resource optimization", "24/7 monitoring"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Cloud Data Analytics",
      description: "Transform your data into actionable insights with our cloud-based analytics and business intelligence solutions.",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Real-time analytics", "Data visualization", "Predictive insights", "Custom dashboards"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud DevOps & Automation",
      description: "Streamline your development and deployment processes with our cloud DevOps solutions and automation tools.",
      icon: <Zap className="w-8 h-8" />,
      features: ["CI/CD pipelines", "Infrastructure as code", "Automated testing", "Deployment automation"],
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Multi-Cloud Solutions",
      description: "Optimize your cloud strategy with our multi-cloud solutions that provide flexibility and avoid vendor lock-in.",
      icon: <Globe className="w-8 h-8" />,
      features: ["Multi-cloud strategy", "Vendor management", "Cost optimization", "Disaster recovery"],
      color: "from-indigo-500 to-blue-500"
    }
  ];

  const benefits = [
    {
      title: "Cost Reduction",
      description: "Reduce infrastructure costs by up to 40% with our optimized cloud solutions",
      icon: <CheckCircle className="w-6 h-6" />,
      stat: "40% cost savings"
    },
    {
      title: "Scalability",
      description: "Scale your infrastructure instantly based on demand",
      icon: <Zap className="w-6 h-6" />,
      stat: "Unlimited scaling"
    },
    {
      title: "Security",
      description: "Enterprise-grade security with 99.9% uptime guarantee",
      icon: <Shield className="w-6 h-6" />,
      stat: "99.9% uptime"
    },
    {
      title: "Expert Support",
      description: "24/7 expert support from our certified cloud engineers",
      icon: <Users className="w-6 h-6" />,
      stat: "24/7 support"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Migration & Management</title>
        <meta
          name="description"
          content="Transform your business with our comprehensive cloud services. From migration to management, we provide secure, scalable, and cost-effective cloud solutions."
        />
        <meta
          name="keywords"
          content="cloud services, cloud migration, cloud security, cloud management, AWS, Azure, Google Cloud, cloud consulting"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Cloud className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Comprehensive Cloud Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Cloud Services
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive cloud services. From migration to management, 
              we provide secure, scalable, and cost-effective cloud solutions tailored to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{benefit.stat}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{benefit.title}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed to accelerate your digital transformation
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Transform Your Cloud Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let our cloud experts help you design, migrate, and manage your cloud infrastructure 
                for maximum performance, security, and cost efficiency.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your Cloud Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CloudServicesPage;
