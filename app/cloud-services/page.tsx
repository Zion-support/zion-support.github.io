import React from "react";
import { ArrowRight, CheckCircle, Star, Shield, Server, Cloud, Database, Code, Network, Smartphone, Monitor, Headphones, Clock, DollarSign, Globe, Lock, Settings, Zap, BarChart3, Users, Award, Target, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEOOptimizer from "../components/SEOOptimizer";

export default function CloudServices() {
  const cloudServices = [
    {
      id: "cloud-migration",
      name: "Cloud Migration Services",
      description: "Seamless migration to AWS, Azure, or Google Cloud Platform with zero downtime and minimal disruption",
      price: "From $2,500/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Multi-cloud strategy planning",
        "Application assessment & migration",
        "Data migration & synchronization",
        "Performance optimization",
        "Security & compliance setup",
        "Cost optimization",
        "24/7 monitoring & support",
        "Disaster recovery planning"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability & flexibility",
        "Enhance security & compliance",
        "Increase system reliability"
      ],
      category: "Migration",
      rating: 4.9,
      reviews: 1247,
      link: "/cloud-migration",
      featured: true
    },
    {
      id: "cloud-security",
      name: "Cloud Security Solutions",
      description: "Comprehensive security services to protect your cloud infrastructure and data from threats",
      price: "From $1,800/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "Identity & access management",
        "Data encryption & protection",
        "Network security & firewalls",
        "Threat detection & monitoring",
        "Compliance management",
        "Security audits & assessments",
        "Incident response planning",
        "Security training & awareness"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Ensure compliance with regulations",
        "Minimize security risks",
        "Reduce security incidents by 85%"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/cloud-security",
      featured: true
    },
    {
      id: "cloud-optimization",
      name: "Cloud Cost Optimization",
      description: "Optimize your cloud spending and improve performance with our cost management solutions",
      price: "From $1,200/month",
      icon: <DollarSign className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Cost analysis & monitoring",
        "Resource optimization",
        "Reserved instance planning",
        "Auto-scaling configuration",
        "Waste identification & elimination",
        "Budget management & alerts",
        "Performance tuning",
        "Cost reporting & analytics"
      ],
      benefits: [
        "Reduce cloud costs by 30-50%",
        "Improve resource utilization",
        "Eliminate waste & inefficiencies",
        "Optimize performance & costs"
      ],
      category: "Optimization",
      rating: 4.7,
      reviews: 634,
      link: "/cloud-optimization",
      featured: false
    },
    {
      id: "cloud-monitoring",
      name: "Cloud Monitoring & Support",
      description: "24/7 monitoring and support services to ensure optimal cloud performance and availability",
      price: "From $800/month",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      features: [
        "24/7 infrastructure monitoring",
        "Performance metrics & alerts",
        "Automated incident response",
        "Health checks & diagnostics",
        "Capacity planning & scaling",
        "Backup & recovery management",
        "Security monitoring",
        "Expert support & maintenance"
      ],
      benefits: [
        "Ensure 99.9% uptime",
        "Proactive issue resolution",
        "Reduce downtime & disruptions",
        "Improve system reliability"
      ],
      category: "Support",
      rating: 4.9,
      reviews: 743,
      link: "/cloud-monitoring",
      featured: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Analyze your current infrastructure and develop a comprehensive cloud migration strategy.",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Design & Architecture",
      description: "Design a secure, scalable cloud architecture tailored to your business requirements.",
      icon: <Settings className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Migration & Deployment",
      description: "Execute the migration with minimal downtime and ensure smooth transition to the cloud.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Optimization & Support",
      description: "Continuously optimize performance and provide ongoing support and monitoring.",
      icon: <Monitor className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CTO",
      content: "Zion Tech Group's cloud migration services were exceptional. They reduced our infrastructure costs by 45% while improving performance.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Solutions",
      role: "CEO",
      content: "The cloud security solutions they implemented have been outstanding. We've had zero security incidents since migration.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "Digital Marketing Agency",
      role: "Operations Director",
      content: "Their cloud optimization services saved us thousands of dollars monthly. Highly recommend their expertise.",
      rating: 5,
      avatar: "ER"
    }
  ];

  return (
    <>
      <SEOOptimizer
        title="Cloud Services - Zion Tech Group | Cloud Migration & Management"
        description="Professional cloud services including migration, security, optimization, and monitoring for AWS, Azure, and Google Cloud Platform."
        keywords="cloud services, cloud migration, cloud security, cloud optimization, AWS, Azure, Google Cloud, cloud monitoring"
        canonical="https://ziontechgroup.com/cloud-services"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Cloud Services
              </span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Transform your business with our comprehensive cloud services. From migration to optimization, 
              we help you leverage the power of cloud computing for maximum efficiency and growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Schedule Demo
                <Cloud className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive cloud solutions designed to accelerate your business growth and digital transformation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {cloudServices.map((service) => (
                <div
                  key={service.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(service.rating)
                                ? "text-yellow-400 fill-current"
                                : "text-gray-400"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-gray-300 text-sm ml-2">
                        {service.rating} ({service.reviews} reviews)
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400">
                      {service.category}
                    </span>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1 transform"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Cloud Migration Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful cloud migration and maximum value for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">{step.step}</div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. See what our clients have to say about our cloud services.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join hundreds of businesses already using our cloud services to drive growth and innovation. 
              Start your cloud transformation journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}