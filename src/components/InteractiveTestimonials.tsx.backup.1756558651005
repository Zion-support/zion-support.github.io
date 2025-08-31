import React, { useState } from 'react.ts';
import { motion, AnimatePresence          } from 'framer-motion.ts';
<<<<<<< HEAD
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause interface Testimonial {









  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
  category: string;
=======
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Users,
  Award,
  TrendingUp
 
 
 
 
 
 
 
 
 
} from 'lucide-react.ts';

<<<<<<< HEAD
export const InteractiveTestimonials: React.FC = (): JSX.Element => {;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  const testimonials = [
    {
      id: 1,
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      comp: 'MedTech Innovations',
      avatar: '👩‍⚕️',
      rating: 5,
      quote: 'Zion Tech Group revolutionized our healthcare platform with AI-powered diagnostics. We\'ve seen a 45% improvement in diagnostic accuracy and 60% reduction in processing time.',
      metrics: {
        accuracy: '45% improvement',
        time: '60% reduction',
        satisfaction: '98% client satisfaction'
      },
      industry: 'Healthcare',
      projectDuration: '6 months'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'VP of Engineering',
      comp: 'FinFlow Solutions',
      avatar: '👨‍💼',
      rating: 5,
      quote: 'The cybersecurity implementation exceeded our expectations. We achieved SOC 2 compliance in record time and our security posture has never been stronger.',
      metrics: {
        compliance: 'SOC 2 achieved',
        security: 'Zero breaches',
        uptime: '99.99% uptime'
      },
      industry: 'Financial Services',
      projectDuration: '4 months'
    },
    {
      id: 3,
      name: 'Jennifer Kim',
      role: 'Founder & CEO',
      comp: 'EcoSmart Retail',
      avatar: '👩‍💻',
      rating: 5,
      quote: 'From concept to launch in just 10 weeks! The team\'s expertise in e-commerce and AI personalization helped us achieve 300% better conversion rates.',
      metrics: {
        conversion: '300% improvement',
        launch: '10 weeks',
        roi: '400% ROI'
      },
      industry: 'E-commerce',
      projectDuration: '10 weeks'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Operations Director',
      comp: 'Global Manufacturing Co.',
      avatar: '👨‍🏭',
      rating: 5,
      quote: 'The IoT and predictive maintenance solutions have transformed our operations. We\'ve reduced downtime by 70% and increased productivity by 40%.',
      metrics: {
        downtime: '70% reduction',
        productivity: '40% increase',
        savings: '$2M annual savings'
      },
      industry: 'Manufacturing',
      projectDuration: '8 months';
    };
  ];

  const nextTestimonial = () => {;
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)};

  const previousTestimonial = () => {;
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)};

  const goToTestimonial = (index: anyanyanyanyanyanyanyanyanynumber)           => {;
    setCurrentIndex(index)};

  const togglePlayPause = () => {;
    setIsPlaying(!isPlaying)};

  // Auto-advance testimonials
  React.useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {;
      nextTestimonial()}, 5000);

    return () => clearInterval(interval)}, [isPlaying, currentIndex]);

  const currentTestimonial = testimonials[currentIndex];
=======
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO, TechCorp Solutions",
    company: "TechCorp Solutions",
    avatar: "👩‍💼",
    rating: 5,
    content: "Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions reduced our operational costs by 40% and improved system reliability to 99.9%. The team's expertise in quantum computing and blockchain integration is unmatched.",
    category: "AI & Infrastructure",
    results: ["40% cost reduction", "99.9% uptime", "3x faster deployment"]
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "VP Engineering, FinTech Pro",
    company: "FinTech Pro",
    avatar: "👨‍💻",
    rating: 5,
    content: "The quantum neural network platform they built for us revolutionized our trading algorithms. We're seeing 25% better prediction accuracy and processing speeds that are 10x faster than traditional systems. Game-changing technology.",
    category: "Quantum Computing",
    results: ["25% better accuracy", "10x faster processing", "Real-time analytics"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    position: "Research Director, BioTech Innovations",
    company: "BioTech Innovations",
    avatar: "👩‍🔬",
    rating: 5,
    content: "Their AI-powered research assistant has accelerated our drug discovery process by 60%. The platform's ability to analyze complex biological data and generate insights has been invaluable to our breakthrough research.",
    category: "AI Research",
    results: ["60% faster discovery", "Advanced analytics", "Breakthrough insights"]
  },
  {
    id: 4,
    name: "David Thompson",
    position: "Operations Manager, Manufacturing Plus",
    company: "Manufacturing Plus",
    avatar: "👨‍🏭",
    rating: 5,
    content: "The autonomous business operations platform streamlined our entire manufacturing process. We've seen a 35% increase in efficiency and 50% reduction in downtime. The IoT integration and real-time monitoring are exceptional.",
    category: "Manufacturing IoT",
    results: ["35% efficiency gain", "50% less downtime", "Real-time monitoring"]
  },
  {
    id: 5,
<<<<<<< HEAD
    name: "Lisa Park",
    role: "Operations Manager",
    company: "Global Logistics Co",
    content: "The AI supply chain optimization platform has revolutionized our operations. We've reduced delivery times by 40% and improved customer satisfaction dramatically.",
    rating: 5,
    avatar: "/images/avatars/lisa-park.jpg",
    category: "Supply Chain"

=======
    name: "Lisa Wang",
    position: "Security Director, SecureNet",
    company: "SecureNet",;
    avatar: "👩‍💻",;
    rating: 5,;
    content: "Their zero-trust security architecture and SOC 2 compliance automation have made our security posture bulletproof. We've achieved 100% compliance with all industry standards and zero security incidents.",;
    category: "Cybersecurity",;
    results: ["100% compliance", "Zero incidents", "Automated security"];
  };
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
];

const categories = ["All", "AI & Infrastructure", "Quantum Computing", "AI Research", "Manufacturing IoT", "Cybersecurity"];

export function InteractiveTestimonials(...args: any[]): any {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

<<<<<<< HEAD
  const filteredTestimonials = selectedCategory
    ? testimonials.filter(t => t.category === selectedCategory)
    : testimonials;
=======
  const filteredTestimonials = selectedCategory === "All" ;
    ? testimonials ;
    : testimonials.filter(t => t.category === selectedCategory);
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  const currentTestimonial = filteredTestimonials[selectedTestimonial];

  const nextTestimonial = () => {;
    setSelectedTestimonial((prev) => ;
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1;
    );
  };

  const prevTestimonial = () => {;
    setSelectedTestimonial((prev) => ;
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1;
    );
  };
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

  const goToTestimonial = (index: anyanyanyanyanyanyanyanyanynumber)          => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-advance testimonials
  React.useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  const currentTestimonial = testimonials[currentIndex];

  return (
<<<<<<< HEAD
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 via-slate-800/50 to-slate-900/50" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
=======
    <section className = "py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          className="text-center mb-16"
          initial = {
  { opacity: 0,
  y: 20 






}}
          whileInView = {
  { opacity: 1,
  y: 0 






}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
<<<<<<< HEAD

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
=======
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Success Stories
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real clients. Discover how we've transformed businesses
            across industries with our innovative technology solutions.
          </p>
        </motion.div>

<<<<<<< HEAD
        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}

          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              selectedCategory === null
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                : 'bg-white/10 text-gray-300 hover: anyanyanyanyanyanyanyanyanybg-white/20 border border-white/20'
            }`}

            All Categories
          </button>
          {categories.map((category)          => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}

              {category}
            </button>
          ))}
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
=======
<<<<<<< HEAD
        {/* Main Testimonial Display */}
        <div className="relative mb-12">
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial = {
  { opacity: 0,
  x: 100 

}}
              animate = {
  { opacity: 1,
  x: 0 

}}
              exit = {
  { opacity: 0,
  x: -100 

}}
              transition={{ duration: 0.5 }}
<<<<<<< HEAD

              <div className="glass rounded-3xl p-8 md:p-12 border border-white/20 backdrop-blur-sm">
                {/* Quote Icon */}
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
=======
              className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{currentTestimonial.avatar}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {currentTestimonial.name}
                </h3>
                <p className="text-gray-600 mb-1">{currentTestimonial.role}</p>
                <p className="text-blue-600 font-semibold">{currentTestimonial.comp}</p>
                <div className="flex items-center justify-center gap-4 mt-3 text-sm text-gray-500">
                  <span className="flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    {currentTestimonial.industry}
                  </span>
                  <span className="flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {currentTestimonial.projectDuration}
                  </span>
                </div>
              </div>

              <blockquote className="text-center mb-8">
                <Quote className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                <p className="text-xl text-gray-700 italic leading-relaxed">
                  "{currentTestimonial.quote}"
                </p>
              </blockquote>

              <div className="grid md: anyanyanyanyanyanyanyanyanygrid-cols-3 gap-6">
                {Object.entries(currentTestimonial.metrics).map(([key, value])           => (
                  <div key={key} className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {value}
                    </div>
                    <div className="text-sm text-gray-600 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

<<<<<<< HEAD
          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
              aria-label="Previous testimonial"

              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>

            <button
              onClick={toggleAutoPlay}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
              aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}

              {isAutoPlaying ? (
                <Pause className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              ) : (
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              )}
            </button>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
              aria-label="Next testimonial"

              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {filteredTestimonials.map((_, index) => (
=======
          {/* Navigation Arrows */}
          <button
            onClick={previousTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Play/Pause Controls */}
        <div className="flex justify-center mb-8">
          <button
            onClick={togglePlayPause}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {isPlaying ? (
              <>
                <Pause className="h-4 w-4 mr-2" />
                Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Play
              </>
            )}
          </button>
        </div>

        {/* CTA Section */}
        <motion.div
          initial = {
  { opacity: 0,
  y: 20 

}}
          whileInView = {
  { opacity: 1,
  y: 0 

}}
=======
        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial = {
  { opacity: 0,
  y: 20 






}}
          whileInView = {
  { opacity: 1,
  y: 0 






}}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
          viewport={{ once: true }}
<<<<<<< HEAD
          transition={{ duration: 0.6, delay: 0.4 }}

          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">98%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-300">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">10+</div>
            <div className="text-gray-300">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
</div>};

export default InteractiveTestimonials;
}}}
=======
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can transform your business with innovative
              technology solutions tailored to your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-white text-blue-600 hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200">
                Start Your Project
                <Award className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-medium transition-colors duration-200">
                Schedule Consultation
                <Users className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>;
    </section>;
  )};

export default InteractiveTestimonials;
=======
            <span className="text-2xl">→</span>;
          </div>;
        </motion.div>;
      </div>;
    </section>;
  );
}
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd

export default InteractiveTestimonials;
export default InteractiveTestimonials;
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
