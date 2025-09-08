import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  industry: string;
  projectType: string;
  results: string[];
  verified: boolean;
}

export function EnhancedTestimonials() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      position: 'CTO',
      company: 'TechFlow Solutions',
      content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions increased our operational efficiency by 40% and reduced costs significantly. The team is incredibly professional and responsive.',
      rating: 5,
      avatar: '/avatars/sarah.jpg',
      industry: 'Technology',
      projectType: 'Digital Transformation',
      results: ['40% efficiency increase', '30% cost reduction', '24/7 support'],
      verified: true
    },
    {
      id: '2',
      name: 'Michael Chen',
      position: 'VP of Engineering',
      company: 'InnovateCorp',
      content: 'Working with Zion Tech Group was a game-changer for our company. Their cybersecurity solutions are top-notch, and their AI implementation helped us stay ahead of the competition. Highly recommended!',
      rating: 5,
      avatar: '/avatars/michael.jpg',
      industry: 'Manufacturing',
      projectType: 'Cybersecurity & AI',
      results: ['Zero security breaches', 'AI automation success', 'Competitive advantage'],
      verified: true
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      position: 'Operations Director',
      company: 'Global Retail Inc.',
      content: 'The cloud migration project with Zion Tech Group exceeded our expectations. Their expertise in multi-cloud strategies and their attention to detail made the transition seamless. Our team productivity improved dramatically.',
      rating: 5,
      avatar: '/avatars/emily.jpg',
      industry: 'Retail',
      projectType: 'Cloud Migration',
      results: ['Seamless migration', 'Improved productivity', 'Cost optimization'],
      verified: true
    },
    {
      id: '4',
      name: 'David Thompson',
      position: 'CEO',
      company: 'StartupHub',
      content: 'As a startup, we needed reliable IT infrastructure that could scale with us. Zion Tech Group delivered exactly what we needed. Their managed services are exceptional and their pricing is transparent.',
      rating: 5,
      avatar: '/avatars/david.jpg',
      industry: 'Startup',
      projectType: 'Managed Services',
      results: ['Scalable infrastructure', 'Transparent pricing', '24/7 support'],
      verified: true
    },
    {
      id: '5',
      name: 'Lisa Wang',
      position: 'IT Manager',
      company: 'Healthcare Plus',
      content: 'Compliance and security are critical in healthcare. Zion Tech Group implemented robust security measures that exceeded industry standards. Their team understands healthcare regulations perfectly.',
      rating: 5,
      avatar: '/avatars/lisa.jpg',
      industry: 'Healthcare',
      projectType: 'Security & Compliance',
      results: ['HIPAA compliance', 'Enhanced security', 'Audit success'],
      verified: true
    }
  ];

  const stats = [
    { label: 'Happy Clients', value: '500+', icon: Users, color: 'text-zion-cyan' },
    { label: 'Success Rate', value: '99.8%', icon: CheckCircle, color: 'text-zion-green' },
    { label: 'Projects Completed', value: '1000+', icon: TrendingUp, color: 'text-zion-purple' },
    { label: 'Industry Awards', value: '25+', icon: Award, color: 'text-zion-orange' }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    if (newDirection > 0) {
      nextTestimonial();
    } else {
      prevTestimonial();
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            {t('testimonials.title', 'What Our Clients Say')}
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed">
            {t('testimonials.subtitle', 'Discover why leading companies choose Zion Tech Group for their technology transformation needs.')}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`flex justify-center mb-4 ${stat.color}`}>
                <stat.icon className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="text-3xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                {stat.value}
              </div>
              <div className="text-zion-slate-light text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-zion-cyan/20 hover:bg-zion-cyan/40 text-zion-cyan rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-zion-cyan/20 hover:bg-zion-cyan/40 text-zion-cyan rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Testimonial Display */}
          <div className="relative overflow-hidden">
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
                  opacity: { duration: 0.2 }
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-zion-slate-light/20 rounded-3xl p-8 md:p-12">
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                      <Quote className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="text-center mb-8">
                    <p className="text-xl md:text-2xl text-white leading-relaxed italic mb-6">
                      "{testimonials[currentIndex].content}"
                    </p>
                    
                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-6">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 text-zion-cyan fill-current" />
                      ))}
                    </div>

                    {/* Results */}
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                      {testimonials[currentIndex].results.map((result, index) => (
                        <div
                          key={index}
                          className="bg-zion-cyan/20 text-zion-cyan px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {result}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-purple-dark rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-zion-slate-light">
                          {testimonials[currentIndex].position} at {testimonials[currentIndex].company}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm text-zion-slate-light">
                            {testimonials[currentIndex].industry} • {testimonials[currentIndex].projectType}
                          </span>
                          {testimonials[currentIndex].verified && (
                            <CheckCircle className="h-4 w-4 text-zion-cyan" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-zion-cyan scale-125'
                    : 'bg-zion-slate-light hover:bg-zion-slate'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 py-2 rounded-full border-2 transition-all duration-300 ${
              isAutoPlaying
                ? 'border-zion-cyan bg-zion-cyan text-white'
                : 'border-zion-slate-light text-zion-slate-light hover:border-zion-cyan hover:text-zion-cyan'
            }`}
          >
            {isAutoPlaying ? 'Pause' : 'Play'} Auto-play
          </button>
        </div>
      </div>
    </section>
  );
}