import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, 
  Sparkles, 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp,
  Rocket,
  Globe,
  Lock,
  Cpu,
  Database,
  Cloud,
  Users
} from 'lucide-react';

export default function RevolutionaryServicesPromotion2025() {
  const revolutionaryServices = [
    {
      id: 1,
      title: "AI Autonomous Research Assistant",
      description: "Revolutionary AI that conducts independent research and generates insights 10x faster than traditional methods.",
      price: "$2,999/month",
      marketPrice: "$5,000-15,000/month",
      savings: "Up to 70% savings",
      features: ["Autonomous research", "Real-time insights", "Multi-language support"],
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      link: "/services/ai-autonomous-research-assistant",
      featured: true
    },
    {
      id: 2,
      title: "Quantum AI Hybrid Platform",
      description: "Breakthrough quantum computing integration with AI for unprecedented computational power and problem-solving capabilities.",
      price: "$4,999/month",
      marketPrice: "$8,000-25,000/month",
      savings: "Up to 65% savings",
      features: ["Quantum algorithms", "AI optimization", "Real-time processing"],
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
      link: "/services/ai-quantum-hybrid-platform",
      featured: true
    },
    {
      id: 3,
      title: "AI Supply Chain Optimization",
      description: "Autonomous supply chain management with predictive analytics and real-time optimization for maximum efficiency.",
      price: "$3,499/month",
      marketPrice: "$6,000-18,000/month",
      savings: "Up to 60% savings",
      features: ["Predictive analytics", "Real-time optimization", "Cost reduction"],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      link: "/services/ai-supply-chain-optimization",
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "10x Faster Deployment",
      description: "Get your solutions running in days, not months"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security with zero-trust architecture"
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "24/7 support across all time zones"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated specialists for seamless implementation"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-full px-6 py-3 mb-6">
            <Rocket className="h-5 w-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Revolutionary Services 2025</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Revolutionary AI Services
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Experience the future of business automation with our cutting-edge AI and quantum computing solutions. 
            Get enterprise-grade technology at revolutionary prices.
          </p>

          {/* Benefits Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {revolutionaryServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className={`relative group ${
                  service.featured ? 'lg:col-span-1' : ''
                }`}
              >
                <div className="relative h-full bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                      Featured
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-3xl flex items-center justify-center mb-6`}>
                    <IconComponent className="h-10 w-10 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold text-white">{service.price}</span>
                      <span className="text-gray-400 text-sm">/month</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-400 text-sm line-through">{service.marketPrice}</span>
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {service.savings}
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <Link to={service.link}>
                      Get Started Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/30 rounded-3xl p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Your Business?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the AI revolution with our cutting-edge services. Get started with a free consultation 
              and see how our solutions can transform your operations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white px-10 py-6 text-xl font-semibold rounded-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/services">
                  Explore All Services
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-10 py-6 text-xl font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link to="/contact">
                  Free Consultation
                  <Sparkles className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 pt-8 border-t border-purple-500/20">
              <div className="flex items-center gap-2 text-gray-300">
                <Shield className="h-5 w-5 text-green-400" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Globe className="h-5 w-5 text-blue-400" />
                <span>Global Support</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="h-5 w-5 text-purple-400" />
                <span>Expert Team</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}