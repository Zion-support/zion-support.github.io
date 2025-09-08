import React from 'react';
<<<<<<< HEAD
import { Search, Users, CheckCircle, ArrowRight } from 'lucide-react';
=======
import { FileText, Search, Handshake, Check } from 'lucide-react';
>>>>>>> origin/main

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
<<<<<<< HEAD
      number: "01",
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Discovery & Analysis",
      description: "We analyze your current systems, identify pain points, and understand your business objectives to create a tailored solution."
    },
    {
      number: "02",
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Strategy & Planning",
      description: "Our expert team develops a comprehensive strategy and detailed implementation plan that aligns with your goals and timeline."
    },
    {
      number: "03",
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "Implementation & Testing",
      description: "We implement the solution with rigorous testing to ensure everything works perfectly and meets your requirements."
    },
    {
      number: "04",
      icon: <ArrowRight className="w-8 h-8 text-orange-600" />,
      title: "Launch & Support",
      description: "We launch your solution and provide ongoing support to ensure continued success and optimal performance."
=======
      icon: <FileText className="w-8 h-8" />,
      title: "Plan",
      description: "Collaborate on project requirements, timeline, and deliverables",
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-600/20 to-blue-700/20",
      details: [
        "Interactive project planning",
        "Timeline optimization",
        "Resource allocation",
        "Risk assessment"
      ],
      duration: "4-8 hours",
      success: "90% on-time delivery"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Match",
      description: "Our AI finds the perfect talent and solutions for your needs",
      color: "from-purple-600 to-purple-700",
      bgColor: "from-purple-600/20 to-purple-700/20",
      details: [
        "AI-powered matching",
        "Skill assessment",
        "Compatibility analysis",
        "Quality verification"
      ],
      duration: "2-4 hours",
      success: "95% match accuracy"
    },
    {
      icon: <Handshake className="w-8 h-8" />,
      title: "Hire & Buy",
      description: "Connect directly with verified professionals and services",
      color: "from-green-600 to-green-700",
      bgColor: "from-green-600/20 to-green-700/20",
      details: [
        "Direct communication",
        "Secure transactions",
        "Contract management",
        "Payment processing"
      ],
      duration: "1-2 days",
      success: "100% secure payments"
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: "Done",
      description: "Deliver exceptional results with ongoing support",
      color: "from-orange-600 to-orange-700",
      bgColor: "from-orange-600/20 to-orange-700/20",
      details: [
        "Project delivery",
        "Quality assurance",
        "Ongoing support",
        "Performance monitoring"
      ],
      duration: "Ongoing",
      success: "98% client satisfaction"
>>>>>>> origin/main
    }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
<<<<<<< HEAD
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven process ensures successful project delivery from start to finish. 
            Here's how we transform your business with technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <div className="text-gray-300">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-gray-300" />
                </div>
=======
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Our streamlined process ensures your project success from concept to completion. 
            Experience the Zion difference with our proven methodology.
          </p>
        </motion.div>

        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index)    => (
            <motion.div 
              key={index} 
              variants={statsVariants}
              className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20"
            >
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform translate-x-4 z-0" />
>>>>>>> origin/main
              )}
              
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 border border-gray-100">
                {/* Step Number */}
                <div className="absolute -top-4 left-8 bg-white border-2 border-gray-200 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-600">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.bgColor} flex items-center justify-center text-white mb-6`}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Details */}
                <ul className="space-y-2 mb-4">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
                
                {/* Stats */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Duration:</span>
                    <span className="font-semibold text-gray-700">{step.duration}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm mt-1">
                    <span className="text-gray-500">Success Rate:</span>
                    <span className="font-semibold text-green-600">{step.success}</span>
                  </div>
                </div>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-zion-slate-light text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Enhanced connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue transform -translate-y-1/2 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
<<<<<<< HEAD
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help you achieve your goals 
              with our proven methodology and expert team.
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started Today
            </button>
=======
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-xl mb-6 opacity-90">
              Join thousands of businesses that trust our platform for their technology needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
            </div>
>>>>>>> origin/main
          </div>
        </motion.div>
      </div>
    </section>
  );
  {/* Removed stray closing brace */}
