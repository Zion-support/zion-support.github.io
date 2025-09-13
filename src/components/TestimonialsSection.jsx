import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Award, TrendingUp, Users, Globe, Shield } from 'lucide-react';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "COO",
      company: "Global Manufacturing Corp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150",
      rating: 5,
      text: "Zion Tech Group transformed our operations completely. We reduced processing time by 75% and increased productivity by 300%. The ROI was evident within the first month.",
      results: "75% faster processing, 300% productivity boost",
      industry: "Manufacturing"
    },
    {
      id: 2,
      name: "Mike Chen",
      title: "Marketing Director",
      company: "TechRetail Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
      rating: 5,
      text: "The AI content platform has been a game-changer for our business. We increased organic traffic by 300% and reduced content creation costs by 80% while maintaining quality.",
      results: "300% traffic increase, 80% cost reduction",
      industry: "E-commerce"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Chief Medical Officer",
      company: "Metro Health Systems",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150",
      rating: 5,
      text: "Our patient scheduling system is now incredibly efficient. The AI insights help us predict patient needs and optimize resources, resulting in better patient care.",
      results: "90% scheduling improvement, 35% satisfaction boost",
      industry: "Healthcare"
    },
    {
      id: 4,
      name: "David Kim",
      title: "CISO",
      company: "SecureBank International",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
      rating: 5,
      text: "Implementing zero-trust security with Zion Tech Group has significantly strengthened our security posture. We now have complete visibility and control over our systems.",
      results: "90% incident reduction, 100% compliance",
      industry: "Financial Services"
    },
    {
      id: 5,
      name: "Lisa Wang",
      title: "CEO",
      company: "CloudFlow Technologies",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150",
      rating: 5,
      text: "As a startup, we needed to scale quickly. The AI platform allowed us to compete with much larger companies and increased our content production by 500%.",
      results: "500% content increase, 200% lead growth",
      industry: "SaaS"
    },
    {
      id: 6,
      name: "Robert Martinez",
      title: "Operations Director",
      company: "Fashion Forward Retail",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
      rating: 5,
      text: "The AI automation suite has revolutionized our inventory management. We now have real-time insights that help us make better decisions and reduce waste significantly.",
      results: "200% inventory improvement, 30% margin boost",
      industry: "Retail"
    }
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: TrendingUp, value: "300%", label: "Avg. Productivity Boost" },
    { icon: Globe, value: "50+", label: "Countries Served" },
    { icon: Award, value: "99.9%", label: "Customer Satisfaction" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark to-zion-blue-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-zion-cyan/80 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about 
            their transformation journey with Zion Tech Group.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-zion-cyan/10 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-zion-cyan" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-zion-cyan/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105 h-full">
                {/* Quote icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-zion-cyan/50" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-zion-cyan/90 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Results highlight */}
                <div className="bg-zion-cyan/10 rounded-lg p-3 mb-6 border border-zion-cyan/20">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-sm font-semibold text-green-400">Key Results</span>
                  </div>
                  <p className="text-sm text-white font-medium">{testimonial.results}</p>
                </div>

                {/* Author info */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-zion-cyan/20"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-zion-cyan/80">{testimonial.title}</p>
                    <p className="text-sm text-zion-cyan/60">{testimonial.company}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Shield className="w-3 h-3 text-zion-cyan/60" />
                      <span className="text-xs text-zion-cyan/60">{testimonial.industry}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-3xl p-8 border border-zion-cyan/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-zion-cyan/80 mb-6 max-w-2xl mx-auto">
              Let us help you achieve similar results. Our experts are standing by to discuss 
              how we can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-full font-semibold hover:bg-zion-cyan/90 transition-colors"
              >
                <Award className="w-5 h-5" />
                Start Your Success Story
              </a>
              <a 
                href="/case-studies" 
                className="inline-flex items-center gap-2 border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-full font-semibold hover:bg-zion-cyan/10 transition-colors"
              >
                View More Case Studies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const SocialProofBanner = () => {
  const logos = [
    { name: "Global Manufacturing Corp", industry: "Manufacturing" },
    { name: "TechRetail Solutions", industry: "E-commerce" },
    { name: "Metro Health Systems", industry: "Healthcare" },
    { name: "SecureBank International", industry: "Financial Services" },
    { name: "CloudFlow Technologies", industry: "SaaS" },
    { name: "Fashion Forward Retail", industry: "Retail" }
  ];

  const achievements = [
    { number: "500+", label: "Companies Transformed" },
    { number: "50+", label: "Countries Served" },
    { number: "99.9%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-16 bg-zion-slate-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-zion-cyan/80">
            Join the companies that are transforming their business with our solutions
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-zion-cyan mb-2">{achievement.number}</div>
              <div className="text-zion-cyan/80">{achievement.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-white mb-2">Our Valued Clients</h3>
            <p className="text-zion-cyan/80">Companies across industries trust us with their digital transformation</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {logos.map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-zion-cyan font-bold text-lg">
                      {logo.name.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-white group-hover:text-zion-cyan transition-colors">
                    {logo.name}
                  </div>
                  <div className="text-xs text-zion-cyan/60">
                    {logo.industry}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-zion-cyan/80 mb-4">
            Ready to join these industry leaders?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-zion-cyan text-zion-blue-dark px-8 py-4 rounded-full font-semibold hover:bg-zion-cyan/90 transition-colors"
          >
            Start Your Transformation Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};