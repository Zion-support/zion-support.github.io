import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
interface FormData {
    name: string,
  email: string,
  company: string,
  phone: string,
  service: string,
  message: string,
  }
}
interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error',
  message: string,
  }
}

  type: 'idle' | 'loading' | 'success' | 'error'
  message: string,
}

const ContactForm: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',</FormData>
    message: ''</FormData>
  })</FormData>
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',</FormStatus>
    message: ''</FormStatus>
  })</FormStatus>
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {</HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''</FormData>
  }</FormData>
  })</FormData>
const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''</FormStatus>
  }</FormStatus>
  })</FormStatus>
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}

    const { name, value } = e.target;
    setFormData(prev => ({
    ...prev,;
      [name]: value
  }
    }));
  }
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  }
    setStatus({ type: 'loading', message: 'Sending message...' });
try {
    // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 2000));
setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
  }
      });
// Reset form;
      setFormData({
    name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
  }</HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
</HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      })</HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>} catch (error) {
    setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your message. Please try again.'<//HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  }<//HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
      })</HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>}
  }
<//HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  return (<//HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600">Ready to transform your business? Let's discuss your project.</p>
      </div>
<//div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Your full name"
            />
          </div>
<//div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="your.email@company.com"
              />
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company,</label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
  </
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="Your company name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number,</label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
  </
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                placeholder="+1 (555) 123-4567"
              />
            </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interest,</label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
  </
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}

              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            >
              <option value="">Select a service</option>{services.map((service) => ( {service}<//option>
                </option>))}<//option>
            </select>
          </div>
<//div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message *</label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Tell us about your project..."
            />
          </div>{status.type !== 'idle' && ( {status.type === 'success' ? (<//div>
                <CheckCircle className="h-5 w-5" />) : status.type === 'error' ? ( ) : (</CheckCircle className="h-5 w-5" />
                <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />const services = [
    'AI Solutions',
    'Web Development',
    'Mobile App Development',
    'Cloud Services',
    'Data Analytics',
    'Cybersecurity',</div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
    'IT Consulting',</div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
    'Other'</div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
  ]</div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
</label>
              <input>
            </div>
            <div></div>
              <label>Email Address *</label>
              </label>
              <input>
            </div>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>
            <div></div>
              <label>Company</label>
              </label>
              <input>
            </div>
            <div></div>
              <label>Phone Number</label>
              </label>
              <input>
            </div>
          <div></div>
            <label>Service Interest</label>
            </label>
            <select>) : (,</select>
                <div className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" /></div>)}<//div>
              <span className="text-sm font-medium">{status.message}</span>
            </div>)} {<//div>
    status.type === 'loading' ? (</button>
              <></>
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" /></div>
                <span>Sending... ) : (</span>
              <></>
                <Send>
                <span>Send Message }</span>
            )}</span>
          </button>
        </form>
        <div className="mt-8 pt-8 border-t border-gray-200"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"></div>
            <div className="flex flex-col items-center space-y-2"></div>
              <div className="p-3 bg-blue-100 rounded-full"></div>
                <Phone>
              </div>
              <div></div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
              </div>
            <div className="flex flex-col items-center space-y-2"></div>
              <div className="p-3 bg-green-100 rounded-full"></div>
                <Mail>
              </div>
              <div></div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-sm text-gray-600">hello@ziontechgroup.com</p>
              </div>
            <div className="flex flex-col items-center space-y-2"></div>
              <div className="p-3 bg-purple-100 rounded-full"></div>
                <MapPin>
              </div>
              <div></div>
                <p className="font-semibold text-gray-900">Office</p>
                <p className="text-sm text-gray-600">New York, NY</p>
              </div>
    </div>)<//div>}<///div>
export default ContactForm<//div>