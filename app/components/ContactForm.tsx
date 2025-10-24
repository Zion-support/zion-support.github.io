import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
<<<<<<< HEAD

  name: string;,
    email: string;,
  phone: string;,
    company: string;,
  message: string;,
    service: string,
  }
const ContactForm: React.FC = () => {,
  const [formData, setFormData] = useState<FormData>({
    name: ''
    email: ''
    company: ''
    phone: ''
    service: ''
=======
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
>>>>>>> cursor/fix-errors-and-merge-to-main-8836
  })
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev
      [name]: value
    }))
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: '')
      });
    }, 3000);
  };

  const services = [
    'AI Solutions',
    'Web Development',
    'Mobile Development',
    'Cloud Migration',
    'Cybersecurity',
    'Data Analytics',
    'DevOps',;
    'Consulting';
  ];

  if (isSubmitted) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"> </div><CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" /> </CheckCircle><h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-300">Thank you for reaching out. We&apos;ll get back to you soon.</p>
      
    
  );
  }
  return (

    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"> </div><h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6"> </form><div className="grid md: grid-cols-2 gap-6">,
          <div> </div><label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name *
            </label></label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required

              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",

              placeholder="Your full name"
            /> </input></div>
          <div> </div><label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email Address *
            </label></label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required

              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",

              placeholder="your@email.com"
            /> </input></div>
        </div>

        <div className="grid md: grid-cols-2 gap-6">,
          <div> </div><label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number
            </label></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}

              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",

              placeholder="+1 (555) 123-4567"
            /> </input></div>
          <div> </div><label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company
            </label></label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}

              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",

              placeholder="Your company name"
            /> </input></div>
        </div>
        <div> </div><label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Service Interest
          </label></label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}

            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent",
          > </select><option value="">Select a service</option>

            {services.map((service, index) => (
              <option key={index} value={service} className="bg-gray-800">{service}
              </option></option>
            ))}
          </select>
        </div>
        <div> </div><label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *
          </label></label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}

        {status.message && (
          <div className={`p-4 rounded-lg flex items-center space-x-2 ${
            status.type === 'success' ? 'bg-green-50 text-green-800' :
            status.type === 'error' ? 'bg-red-50 text-red-800' :
            'bg-blue-50 text-blue-800'
          }`}>
            {status.type === 'success' && <CheckCircle className="w-5 h-5" />}
            {status.type === 'error' && <AlertCircle className="w-5 h-5" />}
            <span>{status.message}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="...">
          {status.type === 'loading' ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </>
          )}
        </button>
      </form>

      <div className="...">
        <div className="...">
          <div className="...">
            <Mail className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-gray-600">contact@ziontechgroup.com</p>
          </div>
          <div className="...">
            <Phone className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-900">Phone</h3>
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="...">
            <MapPin className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-semibold text-gray-900">Office</h3>
            <p className="text-gray-600">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
