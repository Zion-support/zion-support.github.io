import React, { useState } from 'react.ts';
import { motion, AnimatePresence  } from 'framer-motion.ts';
import { Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Play,
  Pause,
  Users,
  Award,
  TrendingUp
 } from 'lucide-react';

<<<<<<< HEAD
export const InteractiveTestimonials: React.FC = (): JSX.Element => {;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

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
      projectDuration: '8 months'
    };
  ];

  const nextTestimonial = () => {;
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)};

  const previousTestimonial = () => {;
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)};

  const goToTestimonial = (index: number)  => {;
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
    name: "Lisa Wang",
    position: "Security Director, SecureNet",
    company: "SecureNet",
    avatar: "👩‍💻",;
    rating: 5,;
    content: "Their zero-trust security architecture and SOC 2 compliance automation have made our security posture bulletproof. We've achieved 100% compliance with all industry standards and zero security incidents.",;
    category: "Cybersecurity",;
    results: ["100% compliance", "Zero incidents", "Automated security"];
  };
];

const categories = ["All", "AI & Infrastructure", "Quantum Computing", "AI Research", "Manufacturing IoT", "Cybersecurity"];

export function InteractiveTestimonials() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const filteredTestimonials = selectedCategory === "All" ;
    ? testimonials ;
    : testimonials.filter(t => t.category === selectedCategory);

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

  return (
    <section className = "py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
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
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client Success Stories
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Real results from real clients across diverse industries
          </p>
        </motion.div>

<<<<<<< HEAD
        {/* Main Testimonial Display */}
        <div className="relative mb-12">
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
              className="bg-white rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto"
            >
              <div className="text-center mb-8">
                <div className="text-6xl mb-4">{currentTestimonial.avatar}</div>
                <div className="flex justify-center mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
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

              <div className="grid md: grid-cols-3 gap-6">
                {Object.entries(currentTestimonial.metrics).map(([key, value])  => (
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
          transition = {
  { duration: 0.6,
  delay: 0.2 





}};
        >;
          {categories.map((category) => (;
            <button;
              key={category};
              onClick={() => {;
                setSelectedCategory(category);
                setSelectedTestimonial(0);
              }}
              className = {`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial = {
  { opacity: 0,
  y: 30 





}}
          whileInView = {
  { opacity: 1,
  y: 0 





}}
          viewport={{ once: true }}
          transition = {
  { duration: 0.6,
  delay: 0.4 





}}
        >
          <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
            >
              →
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial = {
  { opacity: 0,
  x: 50 





}}
                animate = {
  { opacity: 1,
  x: 0 





}}
                exit = {
  { opacity: 0,
  x: -50 





}}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Avatar and Rating */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{currentTestimonial.avatar}</span>
                  </div>
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Results */}
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {currentTestimonial.results.map((result, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300 text-sm"
                    >
                      {result}
                    </span>
                  ))}
                </div>

                {/* Author Info */}
                <div>
                  <div className="text-white font-semibold text-lg">{currentTestimonial.name}</div>
                  <div className="text-gray-400 text-sm">{currentTestimonial.position}</div>
                  <div className="text-blue-400 text-sm">{currentTestimonial.company}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Testimonial Indicators */}
        <motion.div 
          className="flex justify-center gap-2 mb-8"
          initial = {
  { opacity: 0,
  y: 20 





}}
          whileInView = {
  { opacity: 1,
  y: 0 





}}
          viewport={{ once: true }}
          transition = {
  { duration: 0.6,
  delay: 0.6 





}}
        >
          {filteredTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setSelectedTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedTestimonial
                  ? 'bg-blue-500 scale-125'
                  : 'bg-slate-600 hover:bg-slate-500'
              }`}
            />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center"
          initial = {
  { opacity: 0,
  y: 20 





}}
          whileInView = {
  { opacity: 1,
  y: 0 





}}
          viewport={{ once: true }}
          transition = {
  { duration: 0.6,
  delay: 0.8 





}}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold">
            <span>Join our success stories</span>
<<<<<<< HEAD
            <span className="text-2xl">→</span>
          </div>
        </motion.div>
      </div>
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