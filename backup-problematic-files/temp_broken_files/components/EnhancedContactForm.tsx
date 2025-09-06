import React, { useState } from 'react',
import { motion } from 'framer-motion',
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react',
import { FormData, FormErrors } from '../types',
import { useToast } from './ui/Toast',
const EnhancedContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  }),
  const [isSubmitting, setIsSubmitting] = useState(false),
  const [isSubmitted, setIsSubmitted] = useState(false),
  const { showSuccess, showError } = useToast(),

  const services = [
    'AI & Machine LearningQuantum ComputingCybersecurityCloud InfrastructureData AnalyticsDigital TransformationOther'
  ],

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {},

    if (!formData.name.trim() {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters long'
    }

    if (!formData.email.trim() {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim() {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters'
    }
    setErrors(newErrors),
    return Object.keys(newErrors).length = = 0
  },

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),

    if (!validateForm() {
      showError('Validation ErrorPlease fix the errors in the form'),
      return
    }
    setIsSubmitting(true),

    try {
      // Simulate API call,
await new Promise(resolve => setTimeout(resolve, 2000),

      setIsSubmitted(true),
      showSuccess('Message Sent!Thank you for contacting us. We\'ll get back to you soon.'),

      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      }),
      setErrors({})
    } catch (error) {
      console.error('Error submitting form:', error),
      showError('Submission FailedThere was an error sending your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    },

  const services = [
    'AI Business IntelligenceQuantum CybersecurityEdge Computing OrchestrationSpace Technology InnovationNeural Interface DevelopmentOther'
  ],
  const handleInputBlur = (name: keyof FormData) => {_// Validate individual field on blur,
if (formData[name] && errors[name]) {
      const newErrors = { ...errors },
      delete newErrors[name],
      setErrors(newErrors)    },

  if (isSubmitted) {
    return (
      <motion.div,
initial={ opacity: 0, scale: 0.9 }
        animate={ opacity: 1, scale: 1 }
        className=&quot;text-center py-12&quot;      >
        <div className=&quot;w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center&quot;>
          <CheckCircle className=&quot;w-10 h-10 text-green-400&quot; />
        </div>
        <h3 className=&quot;text-2xl font-bold text-white mb-4&quot;>Message Sent Successfully!</h3>
        <p className=&quot;text-white/70 mb-6&quot;>
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button,
onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover: from-blue-700 hover:to-cyan-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"          onClick={_() => setIsSubmitted(false)}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <div className=&quot;max-w-4xl mx-auto&quot;>
      <div className=&quot;grid grid-cols-1 lg:grid-cols-2 gap-12&quot;>
        {/* Contact Information */}
        <div className=&quot;space-y-8&quot;>          <div>
            <h3 className=&quot;text-2xl font-bold text-white mb-6&quot;>Get in Touch</h3>
            <p className=&quot;text-white/70 leading-relaxed mb-8&quot;>
              Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how our solutions can drive innovation and growth.
            </p>
          </div>

          <div className=&quot;space-y-6&quot;>
            <div className=&quot;flex items-start space-x-4&quot;>
              <div className=&quot;w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 flex items-center justify-center&quot;>
                <Mail className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <div>
                <h4 className=&quot;text-lg font-semibold text-white mb-1&quot;>Email</h4>
                <p className=&quot;text-white/70&quot;>contact@ziontechgroup.com</p>
              </div>
            </div>

            <div className=&quot;flex items-start space-x-4&quot;>
              <div className=&quot;w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 flex items-center justify-center&quot;>
                <Phone className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <div>
                <h4 className=&quot;text-lg font-semibold text-white mb-1&quot;>Phone</h4>
                <p className=&quot;text-white/70&quot;>+1 (555) 123-4567</p>
              </div>
            </div>

            <div className=&quot;flex items-start space-x-4&quot;>
              <div className=&quot;w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 flex items-center justify-center&quot;>
                <MapPin className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <div>
                <h4 className=&quot;text-lg font-semibold text-white mb-1&quot;>Location</h4>
                <p className=&quot;text-white/70&quot;>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className=&quot;bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-8&quot;>
          <form onSubmit={handleSubmit} className=&quot;space-y-6&quot;>
            <div className=&quot;grid grid-cols-1 sm:grid-cols-2 gap-6&quot;>              <div>
                <label htmlFor=&quot;name&quot; className=&quot;block text-sm font-medium text-white/80 mb-2&quot;>
                  Full Name *
                </label>
                <input,
type=&quot;text&quot;
                  id=&quot;name&quot;
                  name=&quot;name&quot;
                  value={formData.name}
                  onChange={handleInputChange}
                  onBlur={() => handleInputBlur('name')}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${;
                    errors.name ;
                      ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' ;
                      :'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10';
                  } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                  placeholder=&quot;Enter your full name&quot;                />
                {errors.name && (
                  <motion.p,
initial={ opacity: 0, y: -10 }
                    animate={ opacity: 1, y: 0 }
                    className=&quot;mt-2 text-sm text-red-400 flex items-center gap-2&quot;
                  >
                    <AlertCircle className=&quot;w-4 h-4&quot; />
                    {errors.name}                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor=&quot;email&quot; className=&quot;block text-sm font-medium text-white/80 mb-2&quot;>
                  Email Address *
                </label>
                <input,
type=&quot;email&quot;
                  id=&quot;email&quot;
                  name=&quot;email&quot;
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={() => handleInputBlur('email')}
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${;
                    errors.email ;
                      ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' ;
                      :'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10';
                  } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                  placeholder=&quot;Enter your email address&quot;                />
                {errors.email && (
                  <motion.p,
initial={ opacity: 0, y: -10 }
                    animate={ opacity: 1, y: 0 }
                    className=&quot;mt-2 text-sm text-red-400 flex items-center gap-2&quot;
                  >
                    <AlertCircle className=&quot;w-4 h-4&quot; />
                    {errors.email}                  </motion.p>
                )}
              </div>
            </div>

            <div className=&quot;grid grid-cols-1 sm:grid-cols-2 gap-6&quot;>
              <div>
                <label htmlFor=&quot;company&quot; className=&quot;block text-sm font-medium text-white/80 mb-2&quot;>
                  Company
                </label>
                <input,
type=&quot;text&quot;
                  id=&quot;company&quot;
                  name=&quot;company&quot;
                  value={formData.company}
                  onChange={handleInputChange}
                  className=&quot;w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300&quot;
                  placeholder=&quot;Enter your company name&quot;                />
              </div>

              <div>
                <label htmlFor=&quot;service&quot; className=&quot;block text-sm font-medium text-white/80 mb-2&quot;>
                  Service Interest
                </label>
                <select,
id=&quot;service&quot;
                  name=&quot;service&quot;
                  value={formData.service}
                  onChange={handleInputChange}
                  className=&quot;w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300&quot;
                >
                  <option value="">Select a service</option>
                  {services.map(service) => (
                    <option key={service} value={service} className="bg-slate-800 text-white&quot;>
                      {service}                    </option>
                  )}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor=&quot;message" className="block text-sm font-medium text-white/80 mb-2&quot;>
                Message *
              </label>
              <textarea,
id=&quot;message&quot;
                name=&quot;message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur('message')}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none ${                  errors.message 
                    ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' 
                    : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10'} text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                placeholder="Tell us about your project and requirements..."
              />
              {errors.message && (
                <motion.p,
initial={ opacity: 0, y: -10}
                  animate={_{ opacity: 1, y: 0}
                  className="mt-2 text-sm text-red-400 flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4&quot; />
                  {errors.message}                </motion.p>
              )}
            </div>

            <button,
type=&quot;submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform ${                isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-105'} flex items-center justify-center gap-3`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
,

export default EnhancedContactForm,