import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
;
interface FormData {
    name: string,
  email: string,
  company: string,
  phone: string,
  service: string,
  message: string
  }

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error',
  message: string
  }

const ContactForm: React.FC = () => {}
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}
    const { name, value } = e.target
    setFormData(prev => ({}
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {}
    e.preventDefault()
    setStatus({ type: 'loading', message: 'Sending message...' })

    try {}
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      setStatus({ type: 'success', message: 'Message sent successfully! We\'ll get back to you soon.' })
      setFormData({
    name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
  })
    } catch (error) {}
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    }
  }

  return ()
    <form onSubmit={handleSubmit} className="space-y-6"></form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
        <div></div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2"></label>
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your full name"
          /></input>
        </div>

        <div></div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2"></label>
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="your.email@example.com"
          /></input>
        </div>
      </div>
    </React.Fragment>
  );
};

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
        <div></div>
          <label htmlFor="company" className="block text-sm font-medium text-white mb-2"></label>
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your company name"
          /></input>
        </div>

        <div></div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2"></label>
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="+1 (555) 123-4567"
          /></input>
        </div>
      </div>

      <div></div>
        <label htmlFor="service" className="block text-sm font-medium text-white mb-2"></label>
          Service Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></select>
          <option value="">Select a service</option>
          <option value="ai-services">AI Services</option>
          <option value="it-services">IT Services</option>
          <option value="micro-saas">Micro SaaS</option>
          <option value="cloud-services">Cloud Services</option>
          <option value="cybersecurity">Cybersecurity</option>
          <option value="consultation">Consultation</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div></div>
        <label htmlFor="message" className="block text-sm font-medium text-white mb-2"></label>
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          placeholder="Tell us about your project or how we can help you..."
        /></textarea>
      </div>

      {status.type !== 'idle' && ()
        <div className={`p-4 rounded-lg flex items-center ${}
          status.type === 'success' ? 'bg-green-500/20 text-green-400' :
          status.type === 'error' ? 'bg-red-500/20 text-red-400' :
          'bg-blue-500/20 text-blue-400'
        }`}></div>
          {status.type === 'success' ? ()
            <CheckCircle className="w-5 h-5 mr-3 flex-shrink-0" /></CheckCircle>
          ) : status.type === 'error' ? ()
            <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0" /></AlertCircle>
          ) : ()
            <div className="w-5 h-5 mr-3 flex-shrink-0 border-2 border-current border-t-transparent rounded-full animate-spin" /></div>
          )}
          <span>{status.message}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status.type === 'loading'}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
      ></button>
        {status.type === 'loading' ? ()
          <>
            <div className="w-5 h-5 mr-3 border-2 border-white border-t-transparent rounded-full animate-spin" /></div>
            Sending...
          </>
        ) : ()
          <>
            Send Message
            <Send className="w-5 h-5 ml-3" /></Send>
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm