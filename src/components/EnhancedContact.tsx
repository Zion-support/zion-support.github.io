import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Clock,
  MessageSquare,
  Building,
  Globe
} from "lucide-react"
interface ContactFormData {
  na,
  m: e: string,ema,
  i: l: string,pho,
  n: e: string,compa,
  n: y: string,servi,
  c: e: string,messa,
  g: e: string
}

interface ContactFormErrors {
  [k,
  e: y: string]: string
}

export function EnhancedContact() {
  const [formData, setFormData] = useState<ContactFormData>({
    na,
  m: e: '',ema,
  i: l: '',pho,
  n: e: '',compa,
  n: y: '',servi,
  c: e: 'general',messa,
  g: e: ''
  })
const [errors, setErrors] = useState<ContactFormErrors>({}),
  const [isSubmitting, setIsSubmitting] = useState(false)
const [isSubmitted, setIsSubmitted] = useState(false)
const services = [
    { val,
  u: e: 'general', lab,
  e: l: 'General Inquiry' }, { val,
  u: e: 'ai-solutions', lab,
  e: l: 'AI Solutions' }, { val,
  u: e: 'cloud-infrastructure', lab,
  e: l: 'Cloud Infrastructure' }, { val,
  u: e: 'cybersecurity', lab,
  e: l: 'Cybersecurity' }, { val,
  u: e: 'digital-transformation', lab,
  e: l: 'Digital Transformation' }, { val,
  u: e: 'consulting', lab,
  e: l: 'IT Consulting' }, { val,
  u: e: 'quantum-computing', lab,
  e: l: 'Quantum Computing' }, { val,
  u: e: 'green-it', lab,
  e: l: 'Green IT Solutions' },
  ]
const validateForm = (): boolean () => {
    const,
  newError: s: ContactFormErrors = {}
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required',
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required',
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address',
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required',
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters long',
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
},

  const handleInputChange = (fie,
  l: d: keyof ContactFormData, val,
  u: e: string) () => {
    setFormData(prev => ({ ...prev, [field]: value })),

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' })),
    },
  },

  const handleSubmit = async (e: React.FormEvent) () => {
    e.preventDefault()
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000)),

      setIsSubmitted(true)
      setFormData({
        na,
  m: e: '',ema,
  i: l: '',pho,
  n: e: '',compa,
  n: y: '',servi,
  c: e: 'general',messa,
  g: e: ''
      })
} catch (error) {
      console.error('Error,
  submitting: form:', error)
} finally {
      setIsSubmitting(false)
},
  },

  const contactInfo = [
    {
      ic,
  o: n: Mail,tit,
  l: e: 'Email',val,
  u: e: 'kleber@ziontechgroup.com',descripti,
  o: n: 'Get in touch via email'
    }, {
      ic,
  o: n: Phone,tit,
  l: e: 'Phone',val,
  u: e: '+1 (302) 464-0950',descripti,
  o: n: 'Call us directly'
    }, {
      ic,
  o: n: MapPin,tit,
  l: e: 'Address',val,
  u: e: '364 E Main St STE 1008, Middletown, DE 19709',
      descripti,
  o: n: 'Visit our office'
    }, {
      ic,
  o: n: Clock,tit,
  l: e: 'Business Hours',val,
  u: e: 'Mon-Fr,
  i: 9AM-6PM EST',descripti,
  o: n: 'Available during these hours'
    },
  ]
  if (isSubmitted) {
    return (
      <motion.div
        initial={ opaci,
  t: y: 0, sca,
  l: e: 0.8 },
  }
        animate={ opaci,
  t: y: 1, sca,
  l: e: 1 },
  }
        className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light flex items-center justify-center py-20"
      >
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={ sca,
  l: e: 0 },
  }
            animate={ sca,
  l: e: 1 },
  }
            transition={ del,
  a: y: 0.2, ty,
  p: e: "spring" },
  }
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h2
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ del,
  a: y: 0.3 },
  }
            className="text-3xl font-bold text-white mb-4"
          >
            Message Sent Successfully!
          </motion.h2>

          <motion.p
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ del,
  a: y: 0.4 },
  }
            className="text-zion-slate-light mb-8"
          >
            Thank you for reaching out to us. We'll get back to you within 24 hours.
          </motion.p>

          <motion.button
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ del,
  a: y: 0.5 },
  }
            onClick={() => setIsSubmitted(false)}
            className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-3 rounded-lg,
  hove: r: from-zion-cyan-dark hove,
  r:to-zion-purple-dark transition-all duration-300 font-medium"
          >
            Send Another Message
          </motion.button>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light py-20">
      <div className="max-w-7xl mx-auto px-4,
  s: m: px-6 l,
  g:px-8">
        {/* Header */}
        <motion.div
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          animate={ opaci,
  t: y: 1, y: 0 },
  }
          className="text-center mb-16"
        >
          <h1 className="text-4xl,
  m: d: text-6xl font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how our AI-powered solutions
            can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid l,
  g:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={ opaci,
  t: y: 0, x: -50 },
  }
            animate={ opaci,
  t: y: 1, x: 0 },
  }
            transition={ del,
  a: y: 0.2 },
  }
          >
            <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={ opaci,
  t: y: 0, x: -20 },
  }
                  animate={ opaci,
  t: y: 1, x: 0 },
  }
                  transition={ del,
  a: y: 0.3 + index * 0.1 },
  }
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-zion-cyan/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>
                    <p className="text-zion-cyan font-medium mb-1">{info.value}</p>
                    <p className="text-zion-slate-light text-sm">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Company Stats */}
            <motion.div
              initial={ opaci,
  t: y: 0, y: 20 },
  }
              animate={ opaci,
  t: y: 1, y: 0 },
  }
              transition={ del,
  a: y: 0.6 },
  }
              className="mt-12 p-6 bg-zion-blue-light/10 rounded-xl border border-zion-blue-light/20"
            >
              <h3 className="text-xl font-bold text-white mb-4">Why Choose Zion Tech Group?</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-cyan mb-1">500+</div>
                  <div className="text-sm text-zion-slate-light">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-cyan mb-1">95%</div>
                  <div className="text-sm text-zion-slate-light">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-cyan mb-1">10+</div>
                  <div className="text-sm text-zion-slate-light">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-zion-cyan mb-1">24/7</div>
                  <div className="text-sm text-zion-slate-light">Support</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={ opaci,
  t: y: 0, x: 50 },
  }
            animate={ opaci,
  t: y: 1, x: 0 },
  }
            transition={ del,
  a: y: 0.3 },
  }
            className="bg-zion-blue-light/10 rounded-xl p-8 border border-zion-blue-light/20"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg bg-zion-slate-dark border transition-all duration-300,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan ${
                    errors.name
                      ? 'border-red-500,
  focu: s:ring-red-500'
                      : 'border-zion-slate-light focu,
  s:border-zion-cyan'
                  } text-white placeholder-zion-slate-light`}
                  placeholder="Enter your full name"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p
                      initial={ opaci,
  t: y: 0, y: -10 },
  }
                      animate={ opaci,
  t: y: 1, y: 0 },
  }
                      exit={ opaci,
  t: y: 0, y: -10 },
  }
                      className="text-red-400 text-sm mt-1 flex items-center"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg bg-zion-slate-dark border transition-all duration-300,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan ${
                    errors.email
                      ? 'border-red-500,
  focu: s:ring-red-500'
                      : 'border-zion-slate-light focu,
  s:border-zion-cyan'
                  } text-white placeholder-zion-slate-light`}
                  placeholder="Enter your email address"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={ opaci,
  t: y: 0, y: -10 },
  }
                      animate={ opaci,
  t: y: 1, y: 0 },
  }
                      exit={ opaci,
  t: y: 0, y: -10 },
  }
                      className="text-red-400 text-sm mt-1 flex items-center"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone and Company */}
              <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-zion-slate-dark border border-zion-slate-light transition-all duration-300,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-zion-cyan text-white placeholder-zion-slate-light"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-zion-slate-dark border border-zion-slate-light transition-all duration-300,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-zion-cyan text-white placeholder-zion-slate-light"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => handleInputChange('service', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-zion-slate-dark border border-zion-slate-light transition-all duration-300,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan focu,
  s:border-zion-cyan text-white"
                >
                  {services.map(service => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className={`w-full px-4 py-3 rounded-lg bg-zion-slate-dark border transition-all duration-300,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan resize-none ${
                    errors.message
                      ? 'border-red-500,
  focu: s:ring-red-500'
                      : 'border-zion-slate-light focu,
  s:border-zion-cyan'
                  } text-white placeholder-zion-slate-light`}
                  placeholder="Tell us about your project or inquiry..."
                />
                <AnimatePresence>
                  {errors.message && (
                    <motion.p
                      initial={ opaci,
  t: y: 0, y: -10 },
  }
                      animate={ opaci,
  t: y: 1, y: 0 },
  }
                      exit={ opaci,
  t: y: 0, y: -10 },
  }
                      className="text-red-400 text-sm mt-1 flex items-center"
                    >
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={ sca,
  l: e: 1.02 },
  }
                whileTap={ sca,
  l: e: 0.98 },
  }
                className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple text-white py-4 rounded-lg font-medium transition-all duration-300,
  hove: r: from-zion-cyan-dark,
  hove: r:to-zion-purple-dark,
  disable: d:opacity-50 disable,
  d:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}