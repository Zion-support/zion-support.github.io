import React, {useState} from 'react'
import {Send, AlertCircle} from 'lucide-react'

interface FormData {
  name: string,
      email: string;
  company: string;,
      phone: string;
  service: string;,
      message: string;
},
    interface FormStatus {
  type: 'idle' | 'loading' | 'success' | '_error',
      message: string;
},
    const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
      email: ''
    company: '',
      phone: ''
    service: '',
      message: ''
  },
    const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
      message: ''
  },
    const handleChange = (_e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = _e.target;
    setFormData(prev => ({
      ...prev
      [name]: value;
    })
  },
    const handleSubmit = async (_e: React.FormEvent) => {
    _e.preventDefault(
    setStatus({ type: 'loading', message: 'Sending message...' },
    try {
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 2000)
      setStatus({
        type: 'success',
      message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      }
      // Reset form;
      setFormData({
        name: '',
      email: ''
        company: '',
      phone: ''
        service: '',
      message: ''
      }
    } catch (_error) {
      console._error('Error sending message:', _error);
      setStatus({
        type: '_error',
      message: 'Sorry, there was an _error sending your message. Please try again later.'
      }
    }
  },
    const services = [
    'AI Services'
    'IT Services'
    'Cloud Solutions'
    'Cybersecurity'
    '5G Implementation'
    'Data Analytics'
    'Custom Development'
    'Mobile Solutions'
    'Digital Transformation'
    'Other'
  ]

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"></div>
      <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
      
      {status.type !== 'idle' && (
        <div className={`mb-6 p-4 rounded-lg flex items-center ${
          status.type === 'success' ? 'bg-green-500/20 text-green-300' :
          status.type === '_error' ? 'bg-red-500/20 text-red-300' :
          'bg-blue-500/20 text-blue-300'
        }`}></div>
          {status.type === 'success' && <CheckCircle className="w-5 h-5 mr-2" />},
    {status.type === '_error' && <AlertCircle className="w-5 h-5 mr-2" />},
    {status.type === 'loading' && <div className="w-5 h-5 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />},
    {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"></div>
          </div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <input;
              type="text"
              id="name"
              name="name"
              value={formData.name},
    onChange={handleChange},
    required;
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>
          </div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input;
              type="email"
              id="email"
              name="email"
              value={formData.email},
    onChange={handleChange},
    required;
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6"></div>
          </div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
              Company;
            </label>
            <input;
              type="text"
              id="company"
              name="company"
              value={formData.company},
    onChange={handleChange},
    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Your company name"
            />
          </div>
          </div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number;
            </label>
            <input;
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone},
    onChange={handleChange},
    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        </div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
            Service Interest;
          </label>
          <select;
            id="service"
            name="service"
            value={formData.service},
    onChange={handleChange},
    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service} className="bg-gray-800">
                {service}
              </option>
            ))}
          </select>
        </div>

        </div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <textarea;
            id="message"
            name="message"
            value={formData.message},
    onChange={handleChange},
    required;
            rows={6},
    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            placeholder="Tell us about your project or requirements..."
          />
        </div>

        <button;
          type="submit"
          disabled={status.type === 'loading'},
    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-5 h-5 mr-2" />
          {status.type === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      <div className="mt-8 pt-6 border-t border-white/20"></div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center"></div>
          <div className="flex items-center justify-center text-gray-300"></div>
            <Mail className="w-4 h-4 mr-2" />
            <span className="text-sm">contact@ziontechgroup.com</span>
          </div>
          <div className="flex items-center justify-center text-gray-300"></div>
            <Phone className="w-4 h-4 mr-2" />
            <span className="text-sm">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center justify-center text-gray-300"></div>
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">Innovation City, IC</span>
          </div>
        </div>
      </div>
    </div>
  
},
    export default ContactForm;