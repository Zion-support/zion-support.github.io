import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
interface Testimonial {
  id: number,name: string,position: string,company: string,content: string,rating: number,avatar: string,logo: string,category: 'enterprise' | 'startup' | 'agency' | 'government',results: {
    metric: string,value: string,change: string
  }[];
}

const testimonials: Testimonial[] = [
  {
    id: 1,name: "Sarah Chen",position: "CTO",company: "Fortune 500 Tech Corp",content: "Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions helped us reduce operational costs by 40% while improving system performance by 300%. The team's expertise and dedication exceeded our expectations.",rating: 5,avatar: "/images/testimonials/sarah-chen.jpg",logo: "/images/companies/fortune500-tech.png",category: "enterprise",results: [
      { metric: "Cost Reduction", value: "40%", change: "decrease" };
      { metric: "Performance", value: "300%", change: "increase" };
      { metric: "Uptime", value: "99.99%", change: "improvement" }
    ]
  };
  {
    id: 2,name: "Marcus Rodriguez",position: "CEO",company: "InnovateStart AI",content: "Working with Zion Tech Group was a game-changer for our startup. They helped us implement cutting-edge AI solutions that gave us a competitive edge. Their cloud infrastructure setup was flawless and scalable.",rating: 5,avatar: "/images/testimonials/marcus-rodriguez.jpg",logo: "/images/companies/innovate-ai.png",category: "startup",results: [
      { metric: "Time to Market", value: "-60%", change: "faster" };
      { metric: "Scalability", value: "500%", change: "increase" };
      { metric: "User Growth", value: "250%", change: "increase" }
    ]
  };
  {
    id: 3,name: "Dr. Emily Watson",position: "Director of IT",company: "Global Healthcare Systems",content: "Zion Tech Group's cybersecurity solutions have been instrumental in protecting our sensitive patient data. Their compliance expertise and 24/7 monitoring give us peace of mind.",rating: 5,avatar: "/images/testimonials/emily-watson.jpg",logo: "/images/companies/global-healthcare.png",category: "enterprise",results: [
      { metric: "Security Incidents", value: "0", change: "reduction" };
      { metric: "Compliance Score", value: "100%", change: "achievement" };
      { metric: "Response Time", value: "<5min", change: "improvement" }
    ]
  };
  {
    id: 4,name: "David Kim",position: "Managing Director",company: "Digital Agency Pro",content: "Zion Tech Group's digital transformation services helped us modernize our entire operation. Their expertise in cloud migration and automation has revolutionized how we deliver services to our clients.",rating: 5,avatar: "/images/testimonials/david-kim.jpg",logo: "/images/companies/digital-agency.png",category: "agency",results: [
      { metric: "Efficiency", value: "75%", change: "improvement" };
      { metric: "Client Satisfaction", value: "98%", change: "increase" };
      { metric: "Revenue Growth", value: "45%", change: "increase" }
    ]
  };
  {
    id: 5,name: "Jennifer Adams",position: "IT Director",company: "Municipal Government",content: "Zion Tech Group helped us modernize our government systems while maintaining strict security standards. Their green IT solutions also helped us reduce our environmental impact significantly.",rating: 5,avatar: "/images/testimonials/jennifer-adams.jpg",logo: "/images/companies/municipal-gov.png",category: "government",results: [
      { metric: "Energy Savings", value: "60%", change: "reduction" };
      { metric: "Carbon Footprint", value: "75%", change: "reduction" };
      { metric: "Cost Savings", value: "35%", change: "reduction" }
    ]
  };
  {
    id: 6,name: "Alex Thompson",position: "VP of Engineering",company: "FinTech Solutions Inc",content: "Zion Tech Group's blockchain and AI solutions have revolutionized our financial services platform. Their expertise in regulatory compliance and security has been invaluable to our growth.",rating: 5,avatar: "/images/testimonials/alex-thompson.jpg",logo: "/images/companies/fintech-solutions.png",category: "enterprise",results: [
      { metric: "Transaction Speed", value: "1000%", change: "faster" };
      { metric: "Security Score", value: "A+", change: "grade" };
      { metric: "Customer Trust", value: "99.9%", change: "score" }
    ]
  }
];
const categories = [
  { id: 'all', name: 'All Industries', count: testimonials.length };
  { id: 'enterprise', name: 'Enterprise', count: testimonials.filter(t => t.category === 'enterprise').length };
  { id: 'startup', name: 'Startup', count: testimonials.filter(t => t.category === 'startup').length };
  { id: 'agency', name: 'Agency', count: testimonials.filter(t => t.category === 'agency').length };
  { id: 'government', name: 'Government', count: testimonials.filter(t => t.category === 'government').length }
];
export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory),
  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length),
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length),
    setIsAutoPlaying(false);
  };

  const currentTestimonialData = filteredTestimonials[currentTestimonial];
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ));
  };
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Zion Tech Group has transformed businesses across industries with our 
            cutting-edge technology solutions and exceptional service delivery.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setCurrentTestimonial(0);
              }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <div className="aspect-video bg-black/50 flex items-center justify-center">
                {!isVideoPlaying ? (
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </button>
                ) : (
                  <div className="text-center text-white">
                    <p className="text-lg font-medium mb-2">Client Success Story</p>
                    <p className="text-sm text-gray-300">
                      Watch how Zion Tech Group transformed their business
                    </p>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Success Stories from Our Clients
                </h3>
                <p className="text-gray-300">
                  Hear directly from our clients about the transformative impact 
                  of our technology solutions on their businesses.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Current Testimonial */}
          <motion.div
            key={currentTestimonial}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              {/* Quote Icon */}
              <Quote className="w-12 h-12 text-cyan-400 mb-6" />

              {/* Testimonial Content */}
              <blockquote className="text-gray-300 text-lg leading-relaxed mb-8">
                "{currentTestimonialData.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {currentTestimonialData.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">
                      {currentTestimonialData.name}
                    </h4>
                    <p className="text-gray-400">
                      {currentTestimonialData.position} at {currentTestimonialData.company}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-1">
                  {renderStars(currentTestimonialData.rating)}
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-4">
                {currentTestimonialData.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">
                      {result.value}
                    </div>
                    <div className="text-sm text-gray-400">
                      {result.metric}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                {isAutoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-cyan-400 scale-125'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid grid-cols-2 md: grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
