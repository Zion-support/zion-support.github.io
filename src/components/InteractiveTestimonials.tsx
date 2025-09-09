import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CTO, TechCorp Solutions',
    company: 'TechCorp Solutions',
    image: '👩‍💼',
    rating: 5,
    text: 'Zion Tech Group transformed our entire digital infrastructure. The AI-powered solutions they implemented increased our operational efficiency by 45% and improved customer satisfaction to 92%. Their team\'s expertise and dedication exceeded our expectations.',
    industry: 'Financial Technology',
    project: 'AI Infrastructure Overhaul',
    results: ['45% efficiency increase', '92% customer satisfaction', '60% faster processing']
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'VP of Engineering',
    company: 'ManufactureTech Inc.',
    image: '👨‍💻',
    rating: 5,
    text: 'The cloud migration project was executed flawlessly. Our development team productivity increased dramatically with the automated CI/CD pipelines. Zion\'s expertise in DevOps and cloud infrastructure made the transition seamless.',
    industry: 'Manufacturing',
    project: 'Cloud Migration & DevOps',
    results: ['40% cost reduction', '10x faster deployment', '99.9% uptime']
  },
  {
    id: 3,
    name: 'Dr. Emily Rodriguez',
    role: 'Chief Security Officer',
    company: 'HealthTech Innovations',
    image: '👩‍🔬',
    rating: 5,
    text: 'Zion\'s cybersecurity expertise helped us achieve HIPAA compliance while improving our overall security posture. The zero-trust architecture they implemented reduced security incidents by 85% and improved our compliance score to 98%.',
    industry: 'Healthcare Technology',
    project: 'Cybersecurity Infrastructure',
    results: ['85% incident reduction', '98% compliance score', '90% faster response']
  },
  {
    id: 4,
    name: 'James Kim',
    role: 'Director of Data Science',
    company: 'RetailTech Solutions',
    image: '👨‍💼',
    rating: 5,
    text: 'The machine learning models Zion developed for our recommendation engine have revolutionized our customer experience. We\'ve seen a 35% increase in conversion rates and a 28% improvement in customer retention.',
    industry: 'E-commerce',
    project: 'AI Recommendation Engine',
    results: ['35% conversion increase', '28% retention improvement', 'Real-time personalization']
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Head of Digital Transformation',
    company: 'Global Manufacturing Co.',
    image: '👩‍💻',
    rating: 5,
    text: 'Zion\'s digital transformation expertise helped us modernize our legacy systems and implement Industry 4.0 solutions. The IoT integration and predictive analytics have improved our production efficiency by 30%.',
    industry: 'Manufacturing',
    project: 'Digital Transformation',
    results: ['30% efficiency improvement', 'Real-time monitoring', 'Predictive maintenance']
  }
];

export function InteractiveTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const previousTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const currentTestimonial = testimonials[currentIndex];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            What Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            Real feedback from real clients. Discover how we've transformed businesses 
            across industries with innovative technology solutions.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="max-w-5xl mx-auto mb-12">
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-8 text-zion-cyan/20">
              <Quote className="w-16 h-16" />
            </div>

            {/* Testimonial Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Profile */}
              <div className="text-center lg:text-left">
                <div className="w-24 h-24 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-4xl mx-auto lg:mx-0 mb-4">
                  {currentTestimonial.image}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">
                  {currentTestimonial.name}
                </h3>
                
                <p className="text-zion-cyan font-medium mb-1">
                  {currentTestimonial.role}
                </p>
                
                <p className="text-zion-slate-light text-sm mb-3">
                  {currentTestimonial.company}
                </p>
                
                <div className="flex justify-center lg:justify-start mb-4">
                  {renderStars(currentTestimonial.rating)}
                </div>
                
                <div className="space-y-2 text-left">
                  <div className="text-xs text-zion-cyan bg-zion-cyan/10 px-2 py-1 rounded-full inline-block">
                    {currentTestimonial.industry}
                  </div>
                  <div className="text-xs text-zion-purple bg-zion-purple/10 px-2 py-1 rounded-full inline-block">
                    {currentTestimonial.project}
                  </div>
                </div>
              </div>

              {/* Right Column - Testimonial Text */}
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <p className={`text-zion-slate-light leading-relaxed ${
                    isExpanded ? '' : 'line-clamp-6'
                  }`}>
                    {currentTestimonial.text}
                  </p>
                  
                  {!isExpanded && (
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="text-zion-cyan hover:text-zion-purple transition-colors text-sm font-medium mt-2"
                    >
                      Read More
                    </button>
                  )}
                </div>

                {/* Results */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {currentTestimonial.results.map((result, index) => (
                    <div key={index} className="bg-zion-slate-dark/30 rounded-lg p-3 text-center">
                      <div className="text-zion-cyan text-sm font-medium">{result}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={previousTestimonial}
            className="w-12 h-12 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-full flex items-center justify-center text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={togglePlayPause}
            className="w-12 h-12 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-full flex items-center justify-center text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-300"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>

          <button
            onClick={nextTestimonial}
            className="w-12 h-12 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-full flex items-center justify-center text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-2 mb-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-zion-cyan scale-125' 
                  : 'bg-zion-slate-light/30 hover:bg-zion-slate-light/50'
              }`}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-zion-slate-dark/30 backdrop-blur-sm border border-zion-cyan/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-zion-slate-light mb-6">
              Let's discuss how we can transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-zion-cyan/20 text-zion-cyan px-8 py-3 rounded-xl font-medium hover:bg-zion-cyan/20 transition-all duration-300">
                View All Testimonials
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}