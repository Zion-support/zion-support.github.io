import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Globe,
  TrendingUp,
  Users,
  Award,
  Clock
} from 'lucide-react';

export const FeatureCTAs = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description: "Revolutionary AI services that transform your business operations",
      link: "/new-services#ai-solutions",
      color: "from-purple-500 to-pink-500",
      stats: "40-60% cost reduction"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Services",
      description: "Advanced threat detection and zero-trust security architecture",
      link: "/new-services#cybersecurity",
      color: "from-red-500 to-orange-500",
      stats: "90% threat reduction"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automated deployment pipelines",
      link: "/new-services#cloud-devops",
      color: "from-blue-500 to-cyan-500",
      stats: "10x faster deployment"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Support",
      description: "24/7 technical support with worldwide coverage",
      link: "/contact",
      color: "from-green-500 to-emerald-500",
      stats: "24/7 availability"
    }
  ];

  const ctaCards = [
    {
      title: "Get Started Today",
      subtitle: "Transform your business with our cutting-edge solutions",
      buttonText: "Request Consultation",
      buttonLink: "/contact",
      icon: <Zap className="w-6 h-6" />,
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      title: "Join Our Community",
      subtitle: "Connect with 10,000+ tech professionals worldwide",
      buttonText: "Join Now",
      buttonLink: "/community",
      icon: <Users className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "View Our Portfolio",
      subtitle: "See how we've helped businesses achieve success",
      buttonText: "View Cases",
      buttonLink: "/portfolio",
      icon: <Award className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Why Choose Zion Tech Group?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver cutting-edge technology solutions that drive real business results. 
            Join thousands of satisfied clients who trust us with their digital transformation.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Link
                to={feature.link}
                className="block p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-transparent group-hover:-translate-y-2"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {feature.stats}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl p-8 mb-16 border border-gray-100"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-cyan-600">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">10K+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">99.9%</div>
              <div className="text-gray-600 font-medium">Uptime Guarantee</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {ctaCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${card.gradient} text-white overflow-hidden`}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full translate-y-12 -translate-x-12"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                      {card.icon}
                    </div>
                    <TrendingUp className="w-6 h-6 opacity-60" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">{card.subtitle}</p>
                  
                  <Link
                    to={card.buttonLink}
                    className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                  >
                    {card.buttonText}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <Clock className="w-6 h-6 mr-2" />
              <span className="text-lg font-semibold">Limited Time Offer</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">Get 30% Off Your First Project</h3>
            <p className="text-xl mb-6 opacity-90">
              Transform your business today with our premium technology solutions
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-orange-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Claim Your Discount
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </div>
          
          {/* Animated elements */}
          <div className="absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full animate-pulse"></div>
          <div className="absolute top-6 right-8 w-1 h-1 bg-white/60 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-4 right-4 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse delay-2000"></div>
        </motion.div>
      </div>
    </section>
  );
};