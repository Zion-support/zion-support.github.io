import React, { useState } from 'react',
import LoadingSpinner from './LoadingSpinner',

interface FormData {
  name: string,
  email: string,
  company: string,
  phone: string,
  service: string,
  message: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  }),

  const [isSubmitting, setIsSubmitting] = useState(false),
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle'),

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target,
    setFormData(prev => ({
      ...prev,
      [name]: value
    })),
  },

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    setIsSubmitting(true),
    setSubmitStatus('idle'),

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000)),
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      }),
      
      setSubmitStatus('success'),
    } catch (error) {
      setSubmitStatus('error'),
    } finally {
      setIsSubmitting(false),
    }
  },

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Get In Touch
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name
  },
                onChange={handleChange
  },
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Your full name"
              />
            </div>

            <div></div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2"></label>
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email
  },
                onChange={handleChange
  },
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="Your company name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
              Service Interest
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
            >
              <option value="">Select a service</option>
              <option value="web-development">Web Development</option>
              <option value="mobile-development">Mobile Development</option>
              <option value="cloud-solutions">Cloud Solutions</option>
              <option value="ai-ml">AI & Machine Learning</option>
              <option value="blockchain">Blockchain Solutions</option>
              <option value="consulting">IT Consulting</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div></div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2"></label>
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message
  },
              onChange={handleChange
  },
              required
              rows={6
  },
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-vertical"
              placeholder="Tell us about your project or how we can help you..."
            />
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4"></div>
              <p className="text-green-800 text-center"></p>
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4"></div>
              <p className="text-red-800 text-center"></p>
                Sorry, there was an error sending your message. Please try again.
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting
  },
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          ></button>
            {isSubmitting ? (
              <>
                <LoadingSpinner size="sm" className="mr-2" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600"></div>
          <p></p>
            By submitting this form, you agree to our{' '}
            <a href="/privacy" className="text-blue-600 hover:text-blue-800 underline"></a>
              Privacy Policy
            </a>
            {' '}and{' '}
            <a href="/terms" className="text-blue-600 hover: text-blue-800 underline"></a>
              Terms of Service
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
},

export default ContactForm,