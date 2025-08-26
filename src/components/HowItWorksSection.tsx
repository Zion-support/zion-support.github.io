import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Lightbulb, 
  Settings, 
  Rocket, 
  CheckCircle,
  ArrowRight,
  Users,
  Shield,
  Zap,
  Target,
  TrendingUp,
  Star
} from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "Discovery & Analysis",
      description: "We begin by understanding your business needs, challenges, and goals through comprehensive analysis and consultation.",
      color: "from-blue-500 to-cyan-500",
      features: ["Business Requirements Analysis", "Technology Assessment", "Risk Evaluation", "ROI Projection"]
    },
    {
      icon: Lightbulb,
      title: "Strategy & Planning",
      description: "Our experts develop a customized technology strategy aligned with your business objectives and budget constraints.",
      color: "from-purple-500 to-pink-500",
      features: ["Custom Solution Design", "Technology Roadmap", "Implementation Timeline", "Resource Planning"]
    },
    {
      icon: Settings,
      title: "Development & Implementation",
      description: "We build and deploy your solution using cutting-edge technologies and industry best practices.",
      color: "from-green-500 to-emerald-500",
      features: ["Agile Development", "Quality Assurance", "Security Implementation", "Performance Optimization"]
    },
    {
      icon: Rocket,
      title: "Launch & Optimization",
      description: "We ensure smooth deployment and continuously optimize your solution for maximum performance and ROI.",
      color: "from-orange-500 to-red-500",
      features: ["Go-Live Support", "Performance Monitoring", "Continuous Improvement", "Ongoing Maintenance"]
    }
  ];

  const processFeatures = [
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Your own team of experts working exclusively on your project"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control at every stage"
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile methodology ensuring rapid development and deployment"
    },
    {
      icon: Target,
      title: "Measurable Results",
      description: "Clear metrics and KPIs to track project success"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            How We Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Our proven 4-step process ensures successful project delivery and maximum business value
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm z-20">
                  {index + 1}
                </div>
                
                <div className="bg-gradient-to-br from-slate-800 to-slate-700 rounded-2xl p-8 h-full border border-slate-600 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl mb-6`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <ArrowRight className="w-8 h-8 text-cyan-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Features */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-slate-700 to-slate-600 rounded-3xl p-12 border border-slate-500 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">What Makes Our Process Special</h3>
            <p className="text-gray-300 text-lg">We go beyond standard development to deliver exceptional results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss how our proven process can transform your business and deliver exceptional results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Start Your Project
              </button>
              <button className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-white transition-all duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;