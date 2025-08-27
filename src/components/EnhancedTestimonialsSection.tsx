import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  industry: string;
  projectType: string;
  results: string[];
}

export default function EnhancedTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechCorp Solutions",
      content: "Zion Tech Group transformed our business operations with their AI solutions. We've seen a 40% increase in efficiency and significant cost savings. The team's expertise and dedication to our success exceeded all expectations.",
      rating: 5,
      avatar: "/images/avatars/sarah-johnson.jpg",
      industry: "Technology",
      projectType: "AI Implementation",
      results: ["40% efficiency increase", "30% cost reduction", "Improved customer satisfaction"]
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO",
      company: "InnovateLab",
      content: "The team at Zion delivered exceptional results. Their expertise in cloud infrastructure and cybersecurity gave us the confidence to scale rapidly. The implementation was seamless and the results were immediate.",
      rating: 5,
      avatar: "/images/avatars/michael-chen.jpg",
      industry: "Healthcare",
      projectType: "Cloud Migration",
      results: ["99.9% uptime achieved", "50% faster deployment", "Enhanced security posture"]
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "VP Engineering",
      company: "DataFlow Inc",
      content: "Working with Zion has been a game-changer. Their AI-powered insights have helped us make better decisions and improve customer satisfaction. The ROI was evident within the first quarter.",
      rating: 5,
      avatar: "/images/avatars/emily-rodriguez.jpg",
      industry: "Finance",
      projectType: "Data Analytics",
      results: ["25% better decision making", "15% customer satisfaction increase", "Faster time to market"]
    },
    {
      id: 4,
      name: "David Thompson",
      role: "IT Director",
      company: "Global Manufacturing Co",
      content: "Zion's cybersecurity solutions have been outstanding. They've helped us achieve SOC2 compliance and implement zero-trust architecture. Our security posture has never been stronger.",
      rating: 5,
      avatar: "/images/avatars/david-thompson.jpg",
      industry: "Manufacturing",
      projectType: "Cybersecurity",
      results: ["SOC2 compliance achieved", "Zero-trust implemented", "Enhanced threat detection"]
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Operations Manager",
      company: "GreenTech Solutions",
      content: "The Green IT solutions from Zion have helped us reduce our carbon footprint while maintaining performance. It's been a win-win for both our business and the environment.",
      rating: 5,
      avatar: "/images/avatars/lisa-wang.jpg",
      industry: "Environmental Tech",
      projectType: "Green IT",
      results: ["35% energy reduction", "Carbon neutral operations", "Cost savings achieved"]
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about working with Zion Tech Group.
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl"
            >
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Left: Avatar and basic info */}
                <div className="text-center lg:text-left">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-zion-cyan to-zion-purple p-1">
                      <div className="w-full h-full rounded-full bg-zion-slate-dark flex items-center justify-center">
                        <span className="text-2xl lg:text-3xl font-bold text-white">
                          {currentTestimonial.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-zion-cyan rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                    {currentTestimonial.name}
                  </h3>
                  <p className="text-zion-cyan font-medium mb-1">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    {currentTestimonial.company}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  {/* Industry and project type */}
                  <div className="space-y-2">
                    <div className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full">
                      {currentTestimonial.industry}
                    </div>
                    <div className="inline-block px-3 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded-full ml-2">
                      {currentTestimonial.projectType}
                    </div>
                  </div>
                </div>

                {/* Center: Testimonial content */}
                <div className="lg:col-span-2">
                  <blockquote className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-8 italic">
                    "{currentTestimonial.content}"
                  </blockquote>
                  
                  {/* Results */}
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold mb-3">Key Results:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {currentTestimonial.results.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center space-x-2 text-sm text-gray-300"
                        >
                          <div className="w-2 h-2 bg-zion-cyan rounded-full"></div>
                          <span>{result}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation controls */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <button
                onClick={toggleAutoPlay}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                {isAutoPlaying ? (
                  <Pause className="w-6 h-6 text-white" />
                ) : (
                  <Play className="w-6 h-6 text-white" />
                )}
              </button>
              
              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-zion-cyan w-8' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <div className="text-white font-semibold">Fortune 500</div>
            <div className="text-white font-semibold">Startup Unicorns</div>
            <div className="text-white font-semibold">Government Agencies</div>
            <div className="text-white font-semibold">Healthcare Systems</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}