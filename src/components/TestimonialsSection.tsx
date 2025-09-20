import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
interface Testimonial {
  id: number,na,
  m: e: string,positi,
  o: n: string,compa,
  n: y: string,conte,
  n: t: string,rati,
  n: g: number,avat,
  a: r: string,lo,
  g: o: string,catego,
  r: y: 'enterprise' | 'startup' | 'agency' | 'government',resul,
  t: s: {
    metri,
  c: string,val,
  u: e: string,chan,
  g: e: string
  }[]
}

const,
  testimonial: s: Testimonial[] = [
  {
    i,
  d: 1,na,
  m: e: "Sarah Chen",positi,
  o: n: "CTO",compa,
  n: y: "Fortune 500 Tech Corp",conte,
  n: t: "Zion Tech Group transformed our entire IT infrastructure. Their AI-powered solutions helped us reduce operational costs by 40% while improving system performance by 300%. The team's expertise and dedication exceeded our expectations.",rati,
  n: g: 5,avat,
  a: r: "/images/testimonials/sarah-chen.jpg",lo,
  g: o: "/images/companies/fortune500-tech.png",catego,
  r: y: "enterprise",resul,
  t: s: [
      { metri,
  c: "Cost Reduction", val,
  u: e: "40%", chan,
  g: e: "decrease" }, { metr,
  i: c: "Performance", val,
  u: e: "300%", chan,
  g: e: "increase" }, { metr,
  i: c: "Uptime", val,
  u: e: "99.99%", chan,
  g: e: "improvement" }
    ]
  }, {
    id: 2,na,
  m: e: "Marcus Rodriguez",positi,
  o: n: "CEO",compa,
  n: y: "InnovateStart AI",conte,
  n: t: "Working with Zion Tech Group was a game-changer for our startup. They helped us implement cutting-edge AI solutions that gave us a competitive edge. Their cloud infrastructure setup was flawless and scalable.",rati,
  n: g: 5,avat,
  a: r: "/images/testimonials/marcus-rodriguez.jpg",lo,
  g: o: "/images/companies/innovate-ai.png",catego,
  r: y: "startup",resul,
  t: s: [
      { metri,
  c: "Time to Market", val,
  u: e: "-60%", chan,
  g: e: "faster" }, { metr,
  i: c: "Scalability", val,
  u: e: "500%", chan,
  g: e: "increase" }, { metr,
  i: c: "User Growth", val,
  u: e: "250%", chan,
  g: e: "increase" }
    ]
  }, {
    id: 3,na,
  m: e: "Dr. Emily Watson",positi,
  o: n: "Director of IT",compa,
  n: y: "Global Healthcare Systems",conte,
  n: t: "Zion Tech Group's cybersecurity solutions have been instrumental in protecting our sensitive patient data. Their compliance expertise and 24/7 monitoring give us peace of mind.",rati,
  n: g: 5,avat,
  a: r: "/images/testimonials/emily-watson.jpg",lo,
  g: o: "/images/companies/global-healthcare.png",catego,
  r: y: "enterprise",resul,
  t: s: [
      { metri,
  c: "Security Incidents", val,
  u: e: "0", chan,
  g: e: "reduction" }, { metr,
  i: c: "Compliance Score", val,
  u: e: "100%", chan,
  g: e: "achievement" }, { metr,
  i: c: "Response Time", val,
  u: e: "<5min", chan,
  g: e: "improvement" }
    ]
  }, {
    id: 4,na,
  m: e: "David Kim",positi,
  o: n: "Managing Director",compa,
  n: y: "Digital Agency Pro",conte,
  n: t: "Zion Tech Group's digital transformation services helped us modernize our entire operation. Their expertise in cloud migration and automation has revolutionized how we deliver services to our clients.",rati,
  n: g: 5,avat,
  a: r: "/images/testimonials/david-kim.jpg",lo,
  g: o: "/images/companies/digital-agency.png",catego,
  r: y: "agency",resul,
  t: s: [
      { metri,
  c: "Efficiency", val,
  u: e: "75%", chan,
  g: e: "improvement" }, { metr,
  i: c: "Client Satisfaction", val,
  u: e: "98%", chan,
  g: e: "increase" }, { metr,
  i: c: "Revenue Growth", val,
  u: e: "45%", chan,
  g: e: "increase" }
    ]
  }, {
    id: 5,na,
  m: e: "Jennifer Adams",positi,
  o: n: "IT Director",compa,
  n: y: "Municipal Government",conte,
  n: t: "Zion Tech Group helped us modernize our government systems while maintaining strict security standards. Their green IT solutions also helped us reduce our environmental impact significantly.",rati,
  n: g: 5,avat,
  a: r: "/images/testimonials/jennifer-adams.jpg",lo,
  g: o: "/images/companies/municipal-gov.png",catego,
  r: y: "government",resul,
  t: s: [
      { metri,
  c: "Energy Savings", val,
  u: e: "60%", chan,
  g: e: "reduction" }, { metr,
  i: c: "Carbon Footprint", val,
  u: e: "75%", chan,
  g: e: "reduction" }, { metr,
  i: c: "Cost Savings", val,
  u: e: "35%", chan,
  g: e: "reduction" }
    ]
  }, {
    id: 6,na,
  m: e: "Alex Thompson",positi,
  o: n: "VP of Engineering",compa,
  n: y: "FinTech Solutions Inc",conte,
  n: t: "Zion Tech Group's blockchain and AI solutions have revolutionized our financial services platform. Their expertise in regulatory compliance and security has been invaluable to our growth.",rati,
  n: g: 5,avat,
  a: r: "/images/testimonials/alex-thompson.jpg",lo,
  g: o: "/images/companies/fintech-solutions.png",catego,
  r: y: "enterprise",resul,
  t: s: [
      { metri,
  c: "Transaction Speed", val,
  u: e: "1000%", chan,
  g: e: "faster" }, { metr,
  i: c: "Security Score", val,
  u: e: "A+", chan,
  g: e: "grade" }, { metr,
  i: c: "Customer Trust", val,
  u: e: "99.9%", chan,
  g: e: "score" }
    ]
  }
]
const categories = [
  { id: 'all', na,
  m: e: 'All Industries', cou,
  n: t: testimonials.length }, { id: 'enterprise', na,
  m: e: 'Enterprise', cou,
  n: t: testimonials.filter(t => t.category === 'enterprise').length }, { id: 'startup', na,
  m: e: 'Startup', cou,
  n: t: testimonials.filter(t => t.category === 'startup').length }, { id: 'agency', na,
  m: e: 'Agency', cou,
  n: t: testimonials.filter(t => t.category === 'agency').length }, { id: 'government', na,
  m: e: 'Government', cou,
  n: t: testimonials.filter(t => t.category === 'government').length }
]
export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory)
  // Auto-play functionality
  useEffect(() () => {
    if (!isAutoPlaying) return,

    const interval = setInterval(() () => {
      setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length)
    }, 8000),

    return () => clearInterval(interval)
  }, [isAutoPlaying, filteredTestimonials.length]),

  const nextTestimonial = () () => {
    setCurrentTestimonial((prev) => (prev + 1) % filteredTestimonials.length)
    setIsAutoPlaying(false)
  },

  const prevTestimonial = () () => {
    setCurrentTestimonial((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
    setIsAutoPlaying(false)
  },

  const currentTestimonialData = filteredTestimonials[currentTestimonial]
  const renderStars = (rati,
  n: g: number) () => {
    return Array.from({ lengt,
  h: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ))
  }
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('da,
  t: a:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6 l,
  g:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 30 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.8 }
          viewport={ on,
  c: e: true }
          className="text-center mb-16"
        >
          <h2 className="text-4xl,
  m: d:text-5xl font-bold text-white mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how Zion Tech Group has transformed businesses across industries with our 
            cutting-edge technology solutions and exceptional service delivery.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.6 }
          viewport={ on,
  c: e: true }
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() () => {
                setSelectedCategory(category.id)
                setCurrentTestimonial(0)
              }
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300,
  hove: r:bg-white/20 border border-white/20'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid,
  l: g:grid-cols-2 gap-12 items-center">
          {/* Video Testimonial */}
          <motion.div
            initial={ opaci,
  t: y: 0, x: -50 }
            whileInView={ opaci,
  t: y: 1, x: 0 }
            transition={ durati,
  o: n: 0.8 }
            viewport={ on,
  c: e: true }
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30">
              <div className="aspect-video bg-black/50 flex items-center justify-center">
                {!isVideoPlaying ? (
                  <button
                    onClick={() => setIsVideoPlaying(true)}
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center,
  hove: r:bg-white/30 transition-all duration-300"
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
            initial={ opaci,
  t: y: 0, x: 50 }
            animate={ opaci,
  t: y: 1, x: 0 }
            transition={ durati,
  o: n: 0.5 }
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
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white,
  hove: r:bg-white/20 transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white,
  hove: r:bg-white/20 transition-all duration-300"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white,
  hove: r:bg-white/20 transition-all duration-300"
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
                      : 'bg-white/30,
  hove: r:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 30 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          transition={ durati,
  o: n: 0.8 }
          viewport={ on,
  c: e: true }
          className="mt-20"
        >
          <div className="grid grid-cols-2,
  m: d: grid-cols-4 gap-8">
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
