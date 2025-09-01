import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {

  Quote, 
  Star, 
  ChevronLeft, 
  ChevronRight,
  Building,
  User,
  Globe,
  TrendingUp
} from 'lucide-react';
import { ModernCard } from './ui/ModernCard';

interface Testimonial {

  id: number;
  name: string;
  position: string;
  company: string;
  companyLogo?: string;
  content: string;
  rating: number;
  industry: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {

    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechFlow Solutions",
    content: "Zion Tech Group transformed our data infrastructure completely. Their AI solutions helped us increase operational efficiency by 40% and reduce costs significantly. The team's expertise and dedication are unmatched.",
    rating: 5,
    industry: "Technology"
  },
  {

    id: 2,
    name: "Michael Chen",
    position: "Director of IT",
    company: "Global Manufacturing Corp",
    content: "The cloud migration project was executed flawlessly. Zion Tech Group's DevOps expertise ensured zero downtime and improved our system performance dramatically. Highly recommended for enterprise solutions.",
    rating: 5,
    industry: "Manufacturing"
  },
  {

    id: 3,
    name: "Emily Rodriguez",
    position: "VP of Operations",
    company: "HealthTech Innovations",
    content: "Working with Zion Tech Group on our AI healthcare platform has been exceptional. Their innovative approach and deep understanding of healthcare regulations made all the difference in our success.",
    rating: 5,
    industry: "Healthcare"
  },
  {

    id: 4,
    name: "David Thompson",
    position: "CEO",
    company: "FinTech Dynamics",
    content: "Zion Tech Group's cybersecurity solutions provided the robust protection we needed for our financial services platform. Their proactive approach and 24/7 support give us complete peace of mind.",
    rating: 5,
    industry: "Financial Services"
  },
  {

    id: 5,
    name: "Lisa Wang",
    position: "Head of Digital Transformation",
    company: "Retail Solutions Inc",
    content: "The digital transformation journey with Zion Tech Group exceeded our expectations. Their innovative solutions and strategic guidance helped us stay ahead of the competition in the retail space.",
    rating: 5,
    industry: "Retail"
  }
];

const industries = [
  { id: 'all', name: 'All Industries', icon: Globe },
  { id: 'Technology', name: 'Technology', icon: TrendingUp },
  { id: 'Manufacturing', name: 'Manufacturing', icon: Building },
  { id: 'Healthcare', name: 'Healthcare', icon: User },
  { id: 'Financial Services', name: 'Financial Services', icon: TrendingUp },
  { id: 'Retail', name: 'Retail', icon: Building }
];

export const ModernTestimonials: React.FC = () => {

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const filteredTestimonials = selectedIndustry === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => testimonial.industry === selectedIndustry);

  useEffect(() => {

    if (!isAutoPlaying) return;

    const interval = setInterval(() => {

      setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredTestimonials.length]);

  const nextTestimonial = () => {

    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {

    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
    setIsAutoPlaying(false);
  };

  const goToTestimonial = (index: number) => {

    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
  };

  const currentTestimonialData = filteredTestimonials[currentTestimonial];

  return (
    <section className="py-20 bg-futuristic relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-zion-cyan/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-bl from-zion-purple/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container-responsive relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve their digital transformation goals and drive measurable results.
          </p>
        </motion.div>

        {/* Industry filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => {

                setSelectedIndustry(industry.id);
                setCurrentTestimonial(0);
                setIsAutoPlaying(true);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all duration-300 ${

                selectedIndustry === industry.id
                  ? 'border-zion-cyan bg-zion-cyan/20 text-zion-cyan'
                  : 'border-zion-slate-light/30 text-gray-300 hover:border-zion-cyan/50 hover:text-zion-cyan/70'
              }`}
            >
              <industry.icon className="w-4 h-4" />
              {industry.name}
            </button>
          ))}
        </motion.div>

        {/* Testimonials carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-4xl mx-auto"
        >
          {/* Navigation arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-zion-slate/80 backdrop-blur-sm border border-zion-cyan/30 rounded-full flex items-center justify-center text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-zion-slate/80 backdrop-blur-sm border border-zion-cyan/30 rounded-full flex items-center justify-center text-zion-cyan hover:bg-zion-cyan/20 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Testimonial content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <ModernCard variant="elevated" className="text-center p-8 md:p-12">
                {/* Quote icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                  <Quote className="w-8 h-8 text-zion-cyan" />
                </div>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(currentTestimonialData.rating)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-lg md:text-xl text-white mb-8 leading-relaxed italic">
                  "{currentTestimonialData.content}"
                </blockquote>

                {/* Author info */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-zion-cyan to-zion-purple flex items-center justify-center text-white font-bold text-xl mb-4">
                    {currentTestimonialData.name.charAt(0)}
                  </div>
                  
                  <div className="text-center">
                    <div className="font-semibold text-white text-lg">
                      {currentTestimonialData.name}
                    </div>
                    <div className="text-zion-cyan text-sm">
                      {currentTestimonialData.position}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {currentTestimonialData.company}
                    </div>
                  </div>
                </div>
              </ModernCard>
            </motion.div>
          </AnimatePresence>

          {/* Carousel indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${

                  index === currentTestimonial 
                    ? 'bg-zion-cyan w-8' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: 'Client Satisfaction', value: '98%', icon: Star },
            { label: 'Projects Delivered', value: '500+', icon: TrendingUp },
            { label: 'Industries Served', value: '15+', icon: Building },
            { label: 'Global Presence', value: '25+', icon: Globe }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-zion-cyan" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};