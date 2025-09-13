import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon, QuoteIcon, CheckCircleIcon, UsersIcon, TrophyIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const SocialProofTestimonials2025 = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO",
      company: "TechCorp Global",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Zion Tech Group transformed our entire infrastructure. The AI solutions they implemented increased our efficiency by 300% and reduced costs by 40%. Absolutely game-changing.",
      featured: true
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "VP of Engineering",
      company: "FinanceFlow Inc",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The quantum computing solutions they provided revolutionized our risk analysis. We now process complex calculations 10x faster with 99.9% accuracy.",
      featured: false
    },
    {
      id: 3,
      name: "Dr. Lisa Wang",
      role: "Chief Medical Officer",
      company: "HealthTech Solutions",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Their neural interface technology has transformed patient care. We've seen a 70% reduction in critical event response time and 90% improvement in early detection.",
      featured: false
    },
    {
      id: 4,
      name: "Alex Thompson",
      role: "Founder & CEO",
      company: "AutoDrive Systems",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The automation solutions they built for us are incredible. We've automated 80% of our processes and seen a 200% increase in productivity.",
      featured: false
    },
    {
      id: 5,
      name: "Emma Johnson",
      role: "Head of Operations",
      company: "CloudScale Technologies",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "Their cloud infrastructure solutions are unmatched. We've achieved 99.9% uptime and reduced our infrastructure costs by 50%.",
      featured: false
    },
    {
      id: 6,
      name: "David Kim",
      role: "VP of Innovation",
      company: "BlockChain Dynamics",
      image: "/api/placeholder/80/80",
      rating: 5,
      text: "The blockchain integration strategies they provided helped us secure our systems and increase transaction speed by 300%.",
      featured: false
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: UsersIcon },
    { number: "99.9%", label: "Success Rate", icon: CheckCircleIcon },
    { number: "50+", label: "Awards Won", icon: TrophyIcon },
    { number: "25+", label: "Countries Served", icon: GlobeAltIcon }
  ];

  const companies = [
    "TechCorp Global",
    "FinanceFlow Inc",
    "HealthTech Solutions",
    "AutoDrive Systems",
    "CloudScale Technologies",
    "BlockChain Dynamics",
    "Quantum Innovations",
    "Neural Networks Inc"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 mb-6">
            <StarIcon className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">TRUSTED BY INDUSTRY LEADERS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join hundreds of companies that have transformed their operations with our cutting-edge AI and technology solutions.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          {(() => {
            const featured = testimonials.find(t => t.featured);
            return (
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                <div className="flex items-center justify-center mb-6">
                  <QuoteIcon className="w-12 h-12 text-blue-500" />
                </div>
                
                <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 text-center mb-8 leading-relaxed">
                  "{featured.text}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={featured.image}
                    alt={featured.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-center">
                    <div className="font-bold text-gray-900 text-lg">{featured.name}</div>
                    <div className="text-gray-600">{featured.role}</div>
                    <div className="text-blue-600 font-semibold">{featured.company}</div>
                    <div className="flex items-center justify-center mt-2">
                      {[...Array(featured.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.filter(t => !t.featured).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm text-blue-600 font-semibold">{testimonial.company}</div>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-gray-600 mb-8">
            Trusted by leading companies worldwide
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center opacity-60">
            {companies.map((company, index) => (
              <div
                key={index}
                className="text-gray-500 font-semibold text-sm hover:text-gray-700 transition-colors"
              >
                {company}
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven AI and technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg">
                Start Your Success Story
              </button>
              <button className="px-8 py-4 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-all duration-300 border border-white/30">
                View All Case Studies
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofTestimonials2025;