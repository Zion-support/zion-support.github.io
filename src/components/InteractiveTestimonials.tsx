import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause,
  Users,
  TrendingUp,
  Target,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  companyLogo: string;
  content: string;
  rating: number;
  image: string;
  industry: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
    icon: React.ComponentType<any>;
  }[];
  verified: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    position: 'CTO',
    company: 'TechFlow Solutions',
    companyLogo: '/images/company-logos/techflow.svg',
    content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions helped us reduce operational costs by 40% while improving system performance by 300%. The team\'s expertise and dedication are unmatched.',
    rating: 5,
    image: '/images/testimonials/sarah-chen.jpg',
    industry: 'Technology',
    results: [
      { metric: 'Cost Reduction', value: '40%', improvement: '+300% ROI', icon: TrendingUp },
      { metric: 'Performance', value: '300%', improvement: 'Faster Response', icon: Target },
      { metric: 'Uptime', value: '99.99%', improvement: 'Zero Downtime', icon: CheckCircle }
    ],
    verified: true
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    position: 'VP of Operations',
    company: 'Global Manufacturing Co.',
    companyLogo: '/images/company-logos/global-manufacturing.svg',
    content: 'Implementing Zion\'s IoT solutions revolutionized our production monitoring. We now have real-time visibility into every aspect of our operations, leading to a 60% reduction in maintenance costs and 25% increase in productivity.',
    rating: 5,
    image: '/images/testimonials/michael-rodriguez.jpg',
    industry: 'Manufacturing',
    results: [
      { metric: 'Maintenance Cost', value: '-60%', improvement: 'Predictive Maintenance', icon: TrendingUp },
      { metric: 'Productivity', value: '+25%', improvement: 'Real-time Monitoring', icon: Target },
      { metric: 'Efficiency', value: '85%', improvement: 'Automated Processes', icon: CheckCircle }
    ],
    verified: true
  },
  {
    id: '3',
    name: 'Dr. Emily Watson',
    position: 'Chief Medical Officer',
    company: 'HealthTech Innovations',
    companyLogo: '/images/company-logos/healthtech.svg',
    content: 'Zion\'s AI healthcare analytics platform has been a game-changer for our diagnostic accuracy. We\'ve seen a 95% improvement in early detection rates and reduced patient wait times by 70%. This technology is saving lives.',
    rating: 5,
    image: '/images/testimonials/emily-watson.jpg',
    industry: 'Healthcare',
    results: [
      { metric: 'Detection Rate', value: '95%', improvement: 'Early Diagnosis', icon: Target },
      { metric: 'Wait Time', value: '-70%', improvement: 'Faster Care', icon: Clock },
      { metric: 'Accuracy', value: '98%', improvement: 'AI-Powered', icon: CheckCircle }
    ],
    verified: true
  },
  {
    id: '4',
    name: 'David Kim',
    position: 'CEO',
    company: 'FinTech Dynamics',
    companyLogo: '/images/company-logos/fintech-dynamics.svg',
    content: 'The cybersecurity solutions from Zion Tech Group have given us complete peace of mind. Their threat detection system has prevented 99.9% of potential attacks, and their compliance automation saved us months of manual work.',
    rating: 5,
    image: '/images/testimonials/david-kim.jpg',
    industry: 'Financial Services',
    results: [
      { metric: 'Threats Blocked', value: '99.9%', improvement: 'Zero Breaches', icon: Target },
      { metric: 'Compliance Time', value: '-80%', improvement: 'Automated', icon: Clock },
      { metric: 'Security Score', value: 'A+', improvement: 'Industry Leading', icon: Award }
    ],
    verified: true
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    position: 'Director of Digital',
    company: 'Retail Solutions Inc.',
    companyLogo: '/images/company-logos/retail-solutions.svg',
    content: 'Zion\'s digital transformation services helped us modernize our entire customer experience. We\'ve seen a 200% increase in online sales and 150% improvement in customer satisfaction scores. The ROI has been incredible.',
    rating: 5,
    image: '/images/testimonials/lisa-thompson.jpg',
    industry: 'Retail',
    results: [
      { metric: 'Online Sales', value: '+200%', improvement: 'Digital First', icon: TrendingUp },
      { metric: 'Customer Satisfaction', value: '+150%', improvement: 'Better UX', icon: Target },
      { metric: 'Market Share', value: '+35%', improvement: 'Competitive Edge', icon: Award }
    ],
    verified: true
  }
];

export const InteractiveTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <section className="py-20 bg-futuristic relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-dark opacity-90" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-zion-cyan/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-zion-purple/10 rounded-full blur-xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <div className="container-responsive relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-full px-4 py-2 text-zion-cyan text-sm font-medium mb-6"
          >
            <Users className="w-4 h-4" />
            Client Success Stories
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          
          <p className="text-xl text-zion-cyan/70 max-w-3xl mx-auto leading-relaxed">
            See how we've helped organizations across industries achieve remarkable results 
            through innovative technology solutions.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.3 }
              }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-zion-slate/50 to-zion-slate-dark/50 backdrop-blur-sm border border-zion-cyan/20 rounded-3xl p-8 lg:p-12">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Testimonial Content */}
                  <div className="space-y-6">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="w-16 h-16 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-2xl flex items-center justify-center border border-zion-cyan/30"
                    >
                      <Quote className="w-8 h-8 text-zion-cyan" />
                    </motion.div>

                    {/* Content */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      className="text-xl lg:text-2xl text-white leading-relaxed italic"
                    >
                      "{currentTestimonial.content}"
                    </motion.blockquote>

                    {/* Author Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center text-white font-bold text-lg">
                          {currentTestimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-lg font-semibold text-white">{currentTestimonial.name}</h4>
                            {currentTestimonial.verified && (
                              <div className="w-5 h-5 bg-zion-cyan rounded-full flex items-center justify-center">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                            )}
                          </div>
                          <p className="text-zion-cyan/70">{currentTestimonial.position}</p>
                          <p className="text-zion-cyan/60 text-sm">{currentTestimonial.company}</p>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-zion-cyan text-zion-cyan" />
                        ))}
                      </div>
                    </motion.div>

                    {/* Industry Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="inline-flex items-center px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-purple text-sm font-medium"
                    >
                      {currentTestimonial.industry}
                    </motion.div>
                  </div>

                  {/* Results & Stats */}
                  <div className="space-y-6">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="text-2xl font-bold text-white mb-6"
                    >
                      Key Results
                    </motion.h3>

                    <div className="space-y-4">
                      {currentTestimonial.results.map((result, index) => (
                        <motion.div
                          key={result.metric}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                          className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/20 rounded-xl p-4"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center border border-zion-cyan/30">
                                <result.icon className="w-5 h-5 text-zion-cyan" />
                              </div>
                              <span className="text-zion-cyan/70 font-medium">{result.metric}</span>
                            </div>
                            <span className="text-2xl font-bold text-zion-cyan">{result.value}</span>
                          </div>
                          <p className="text-zion-cyan/60 text-sm">{result.improvement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-zion-cyan/20 hover:bg-zion-cyan/30 border border-zion-cyan/30 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 text-zion-cyan" />
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 bg-zion-purple/20 hover:bg-zion-purple/30 border border-zion-purple/30 rounded-full transition-all duration-300 hover:scale-110"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 text-zion-purple" />
              ) : (
                <Play className="w-5 h-5 text-zion-purple" />
              )}
            </button>
            
            <button
              onClick={nextTestimonial}
              className="p-3 bg-zion-cyan/20 hover:bg-zion-cyan/30 border border-zion-cyan/30 rounded-full transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 text-zion-cyan" />
            </button>
          </div>

          {/* Progress Indicators */}
          <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-zion-cyan scale-125'
                    : 'bg-zion-cyan/30 hover:bg-zion-cyan/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 border border-zion-cyan/30 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">
              Join Hundreds of Satisfied Clients
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">500+</div>
                <div className="text-zion-cyan/70">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">98%</div>
                <div className="text-zion-cyan/70">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-zion-cyan mb-2">24/7</div>
                <div className="text-zion-cyan/70">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};