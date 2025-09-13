import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Building,
  Award,
  TrendingUp,
  Users,
  Globe,
  Shield,
  Zap,
  Heart
} from 'lucide-react';

const SocialProofSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentLogo, setCurrentLogo] = useState(0);

  const testimonials = [
    {
      id: 1,
      content: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions reduced our operational costs by 40% and improved our customer satisfaction by 85%. The team's expertise in quantum computing is unmatched.",
      author: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Industries",
      avatar: "/images/testimonials/sarah-johnson.jpg",
      rating: 5,
      results: [
        { metric: "Cost Reduction", value: "40%" },
        { metric: "Customer Satisfaction", value: "85%" },
        { metric: "System Uptime", value: "99.9%" }
      ]
    },
    {
      id: 2,
      content: "The cybersecurity solutions provided by Zion Tech Group are exceptional. They implemented a comprehensive AI-powered security system that detected and prevented 99.7% of potential threats. Our data has never been safer.",
      author: "Michael Chen",
      role: "Security Director",
      company: "Global Finance Corp",
      avatar: "/images/testimonials/michael-chen.jpg",
      rating: 5,
      results: [
        { metric: "Threat Detection", value: "99.7%" },
        { metric: "Response Time", value: "< 30s" },
        { metric: "False Positives", value: "0.1%" }
      ]
    },
    {
      id: 3,
      content: "Working with Zion Tech Group on our quantum computing research has been groundbreaking. Their expertise helped us achieve a 60% improvement in our computational efficiency and opened new possibilities for our research.",
      author: "Dr. Emily Rodriguez",
      role: "Research Director",
      company: "Quantum Research Labs",
      avatar: "/images/testimonials/emily-rodriguez.jpg",
      rating: 5,
      results: [
        { metric: "Computational Efficiency", value: "60%" },
        { metric: "Research Acceleration", value: "3x" },
        { metric: "Cost Savings", value: "50%" }
      ]
    },
    {
      id: 4,
      content: "The edge computing solutions implemented by Zion Tech Group have revolutionized our manufacturing operations. Real-time analytics and predictive maintenance have reduced downtime by 70% and increased productivity by 45%.",
      author: "James Wilson",
      role: "Operations Manager",
      company: "Advanced Manufacturing Co",
      avatar: "/images/testimonials/james-wilson.jpg",
      rating: 5,
      results: [
        { metric: "Downtime Reduction", value: "70%" },
        { metric: "Productivity Increase", value: "45%" },
        { metric: "Maintenance Costs", value: "35%" }
      ]
    },
    {
      id: 5,
      content: "Zion Tech Group's Green IT solutions helped us achieve carbon neutrality while improving our operational efficiency. Their sustainable technology approach reduced our energy consumption by 55% and enhanced our brand reputation.",
      author: "Lisa Thompson",
      role: "Sustainability Director",
      company: "EcoTech Solutions",
      avatar: "/images/testimonials/lisa-thompson.jpg",
      rating: 5,
      results: [
        { metric: "Energy Reduction", value: "55%" },
        { metric: "Carbon Footprint", value: "100%" },
        { metric: "Cost Savings", value: "40%" }
      ]
    }
  ];

  const clientLogos = [
    { name: "Microsoft", logo: "/images/logos/microsoft.svg" },
    { name: "Google", logo: "/images/logos/google.svg" },
    { name: "Amazon", logo: "/images/logos/amazon.svg" },
    { name: "IBM", logo: "/images/logos/ibm.svg" },
    { name: "Oracle", logo: "/images/logos/oracle.svg" },
    { name: "Salesforce", logo: "/images/logos/salesforce.svg" },
    { name: "Adobe", logo: "/images/logos/adobe.svg" },
    { name: "Cisco", logo: "/images/logos/cisco.svg" }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, number: "500+", label: "Happy Clients", color: "text-blue-400" },
    { icon: <Award className="w-6 h-6" />, number: "50+", label: "Industry Awards", color: "text-yellow-400" },
    { icon: <Globe className="w-6 h-6" />, number: "25+", label: "Countries Served", color: "text-green-400" },
    { icon: <TrendingUp className="w-6 h-6" />, number: "98%", label: "Success Rate", color: "text-purple-400" }
  ];

  const achievements = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "SOC 2 Compliant",
      description: "Enterprise-grade security standards",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "99.9% Uptime SLA",
      description: "Reliable service guarantee",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Customer First",
      description: "Dedicated support 24/7",
      color: "from-red-500 to-pink-500"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const logoInterval = setInterval(() => {
      setCurrentLogo((prev) => (prev + 1) % clientLogos.length);
    }, 3000);

    return () => clearInterval(logoInterval);
  }, [clientLogos.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate to-zion-blue-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,221,210,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(140,21,233,0.05),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Join hundreds of successful organizations that have transformed their business with Zion Tech Group's cutting-edge solutions
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/30 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className={stat.color}>{stat.icon}</div>
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-zion-slate-light">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Trusted by Leading Companies</h3>
            <p className="text-zion-slate-light">Fortune 500 companies and innovative startups choose Zion Tech Group</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center p-4 bg-zion-blue-dark/30 backdrop-blur-sm rounded-lg border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 hover:scale-105"
              >
                <div className="text-zion-slate-light font-semibold text-sm opacity-70 hover:opacity-100 transition-opacity">
                  {client.name}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">What Our Clients Say</h3>
            <p className="text-zion-slate-light">Real results from real clients</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-zion-blue-dark/80 to-zion-slate/80 backdrop-blur-sm rounded-2xl p-8 border border-zion-cyan/30 shadow-2xl"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                      <Quote className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-lg text-white mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].content}"
                    </blockquote>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center space-x-1 mb-2">
                          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <div className="text-white font-semibold">{testimonials[currentTestimonial].author}</div>
                        <div className="text-zion-slate-light text-sm">
                          {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-sm text-zion-slate-light mb-2">Key Results:</div>
                        <div className="space-y-1">
                          {testimonials[currentTestimonial].results.map((result, index) => (
                            <div key={index} className="text-zion-cyan text-sm font-medium">
                              {result.metric}: {result.value}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-zion-cyan' : 'bg-zion-slate/30 hover:bg-zion-slate/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-cyan/30 rounded-lg text-zion-cyan hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-zion-blue-dark/50 to-zion-slate/50 backdrop-blur-sm rounded-xl p-6 border border-zion-cyan/20 text-center group hover:border-zion-cyan/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">{achievement.icon}</div>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{achievement.title}</h4>
              <p className="text-zion-slate-light text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;