import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Globe,
  Building,
  Users,
  Award
} from "lucide-react"
interface Testimonial {
  id: string,na,
  m: e: string,positi,
  o: n: string,compa,
  n: y: string,companyLo,
  g: o: string,conte,
  n: t: string,rati,
  n: g: number,indust,
  r: y: string,resul,
  t: s: string[],avat,
  a: r: string
}

const,
  testimonial: s: Testimonial[] = [
  {
    i,
  d: '1',na,
  m: e: 'Sarah Chen',positi,
  o: n: 'CTO',compa,
  n: y: 'TechFlow Solutions',companyLo,
  g: o: '/images/company-logos/techflow.svg',conte,
  n: t: 'Zion Tech Group transformed our data infrastructure completely. Their AI-powered analytics platform increased our operational efficiency by 300% and provided insights we never had before. The ROI was incredible - we saw a 450% return within the first 6 months.',rati,
  n: g: 5,indust,
  r: y: 'Technology',resul,
  t: s: ['300% efficiency increase450% ROI in 6 months', 'Real-time insights'],
    avat,
  a: r: '/images/avatars/sarah-chen.jpg'
  }, {
    id: '2',na,
  m: e: 'Marcus Rodriguez',positi,
  o: n: 'VP of Operations',compa,
  n: y: 'Global Manufacturing Corp',companyLo,
  g: o: '/images/company-logos/gmc.svg',conte,
  n: t: 'Implementing Zion\'s quantum optimization suite revolutionized our supply chain. We solved complex logistics problems in minutes that used to take weeks. The cost savings were immediate and substantial - over $2M annually.',rati,
  n: g: 5,indust,
  r: y: 'Manufacturing',resul,
  t: s: ['$2M annual savingsWeeks to minutes', 'Supply chain optimization'],
    avat,
  a: r: '/images/avatars/marcus-rodriguez.jpg'
  }, {
    id: '3',na,
  m: e: 'Dr. Emily Watson',positi,
  o: n: 'Chief Medical Officer',compa,
  n: y: 'HealthTech Innovations',companyLo,
  g: o: '/images/company-logos/healthtech.svg',conte,
  n: t: 'Zion\'s AI-powered healthcare platform has been a game-changer for our diagnostic accuracy. We\'ve seen a 95% improvement in early detection rates and significantly reduced false positives. This technology is saving lives.',rati,
  n: g: 5,indust,
  r: y: 'Healthcare',resul,
  t: s: ['95% detection improvementReduced false positives', 'Lives saved'],
    avat,
  a: r: '/images/avatars/emily-watson.jpg'
  }, {
    id: '4',na,
  m: e: 'James Thompson',positi,
  o: n: 'Head of Security',compa,
  n: y: 'FinSecure Bank',companyLo,
  g: o: '/images/company-logos/finsecure.svg',conte,
  n: t: 'The zero-trust security platform from Zion Tech Group has provided us with enterprise-grade protection that adapts to new threats in real-time. Our security incidents dropped by 80% in the first quarter.',rati,
  n: g: 5,indust,
  r: y: 'Financial Services',resul,
  t: s: ['80% fewer incidentsReal-time threat detection', 'Zero-trust security'],
    avat,
  a: r: '/images/avatars/james-thompson.jpg'
  }, {
    id: '5',na,
  m: e: 'Lisa Park',positi,
  o: n: 'Director of IT',compa,
  n: y: 'CloudScale Enterprises',companyLo,
  g: o: '/images/company-logos/cloudscale.svg',conte,
  n: t: 'Zion\'s multi-cloud orchestration platform streamlined our entire infrastructure. We reduced cloud costs by 40% while improving performance by 60%. The unified management interface is intuitive and powerful.',rati,
  n: g: 5,indust,
  r: y: 'Cloud Services',resul,
  t: s: ['40% cost reduction60% performance boost', 'Unified management'],
    avat,
  a: r: '/images/avatars/lisa-park.jpg'
  }
]
export default function EnhancedTestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  useEffect(() () => {
    if (!isAutoPlaying) return,

    const interval = setInterval(() () => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000),

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length]),

  const nextTestimonial = () () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  },

  const prevTestimonial = () () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }
  const goToTestimonial = (ind,
  e: x: number) () => {
    setCurrentTestimonial(index)
    setIsAutoPlaying(false)
  },

  const currentTestimonialData = testimonials[currentTestimonial]
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-zion-purple/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-zion-blue/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4,
  s: m: px-6 l,
  g:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 30 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6 }
          className="text-center mb-16"
        >
          <h2 className="text-4xl,
  s: m:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-zion-cyan max-w-3xl mx-auto">
            Real results from real businesses. Discover how Zion Tech Group is transforming industries worldwide.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={ opaci,
  t: y: 0, x: 100 }
              animate={ opaci,
  t: y: 1, x: 0 }
              exit={ opaci,
  t: y: 0, x: -100 }
              transition={ durati,
  o: n: 0.5 }
              className="relative"
            >
              {/* Main Testimonial Card */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/20 rounded-3xl p-8,
  l: g:p-12 relative overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 opacity-50"></div>

                {/* Quote icon */}
                <motion.div
                  className="absolute top-8 right-8 w-16 h-16 bg-zion-cyan/20 rounded-full flex items-center justify-center"
                  animate={ rota,
  t: e: [0, 360] }
                  transition={ durati,
  o: n: 20, repe,
  a: t: Infinity }
                >
                  <Quote className="w-8 h-8 text-zion-cyan" />
                </motion.div>

                <div className="relative z-10">
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(currentTestimonialData.rating)].map((_, index) => (
                      <motion.div
                        key={index}
                        initial={ sca,
  l: e: 0 }
                        animate={ sca,
  l: e: 1 }
                        transition={ del,
  a: y: index * 0.1 }
                      >
                        <Star className="w-6 h-6 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-2xl,
  l: g:text-3xl text-white leading-relaxed mb-8 font-medium">
                    "{currentTestimonialData.content}"
                  </blockquote>

                  {/* Results */}
                  <div className="grid grid-cols-1,
  m: d:grid-cols-3 gap-4 mb-8">
                    {currentTestimonialData.results.map((result, index) => (
                      <motion.div
                        key={result}
                        initial={ opaci,
  t: y: 0, y: 20 }
                        animate={ opaci,
  t: y: 1, y: 0 }
                        transition={ del,
  a: y: 0.3 + index * 0.1 }
                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center"
                      >
                        <p className="text-zion-cyan font-semibold">{result}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">
                          {currentTestimonialData.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{currentTestimonialData.name}</h4>
                        <p className="text-zion-cyan">{currentTestimonialData.position}</p>
                        <p className="text-gray-300">{currentTestimonialData.company}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Building className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm text-gray-400">{currentTestimonialData.industry}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center mt-12 space-x-4">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/10,
  hove: r: bg-white/20 transition-colors duration-200 border border-white/20"
              whileHover={ scal,
  e: 1.1 }
              whileTap={ sca,
  l: e: 0.9 }
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-zion-cyan w-8'
                      : 'bg-white/30,
  hove: r:bg-white/50'
                  }`}
                  whileHover={ sca,
  l: e: 1.2 }
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/10,
  hove: r: bg-white/20 transition-colors duration-200 border border-white/20"
              whileHover={ scal,
  e: 1.1 }
              whileTap={ sca,
  l: e: 0.9 }
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 30 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.3 }
          className="mt-20"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-1,
  m: d: grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { ico,
  n: Users, lab,
  e: l: '500+ Clients', val,
  u: e: 'Global Reach' }, { ic,
  o: n: Award, lab,
  e: l: '15+ Awards', val,
  u: e: 'Industry Recognition' }, { ic,
  o: n: Globe, lab,
  e: l: '50+ Countries', val,
  u: e: 'Worldwide Service' }, { ic,
  o: n: Building, lab,
  e: l: '99.9% Uptime', val,
  u: e: 'Reliability' }
              ].map((indicator, index) => (
                <motion.div
                  key={indicator.label}
                  initial={ opaci,
  t: y: 0, y: 20 }
                  whileInView={ opaci,
  t: y: 1, y: 0 }
                  viewport={ on,
  c: e: true }
                  transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 }
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-zion-cyan/20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-zion-cyan/30">
                    <indicator.icon className="w-8 h-8 text-zion-cyan" />
                  </div>
                  <div className="text-xl font-bold text-white mb-2">{indicator.label}</div>
                  <div className="text-sm text-gray-400">{indicator.value}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 30 }
          whileInView={ opaci,
  t: y: 1, y: 0 }
          viewport={ on,
  c: e: true }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.5 }
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border border-zion-cyan/30 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how Zion Tech Group can transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-2xl,
  hove: r:shadow-2xl,
  hove: r:shadow-zion-cyan/25 transition-all duration-300,
  transform: hover:-translate-y-1"
              >
                Start Your Transformation
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan/30 text-zion-cyan font-semibold rounded-2xl hove,
  r:bg-zion-cyan/10 transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}