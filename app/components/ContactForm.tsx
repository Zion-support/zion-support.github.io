'use client';

import { useState } from 'react';
import { MessageSquare, Mail, Phone, Send, CheckCircle } from 'lucide-react';

interface FormData {
  
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
}

const services = [
  'AI Solutions',
  'IT Services',
  'Quantum Computing',
  'Autonomous Systems',
  'Consulting',
  'Other'
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center"></div>
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4"   /></CheckCircle>
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-300">Thank you for reaching out. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"></div>
      <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6"></form>
        <div className="grid md:grid-cols-2 gap-6"></div>
          <div ></div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2"></label>
              Full Name *
            </label>
            <input type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Your full name"
              /></input>
          </div>
          <div ></div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2"></label>
              Email Address *
            </label>
            <input type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="your@email.com"
              /></input>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6"></div>
          <div ></div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
            <input type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="+1 (555) 123-4567"
              /></input>
          </div>
          <div ></div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">Company</label>
            <input type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Your company name"
              /></input>
          </div>
        </div>
        <div ></div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Service Interest</label>
          <select id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          ></select>
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service} className="bg-gray-800"></option>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div ></div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
          <textarea id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            placeholder="Tell us about your project or requirements..."
            /></textarea>
        </div>
        <button type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        ></button>
          {isSubmitting ? (
            <>
    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
  </>
);
              Sending...
            < />
          ) : (
            <>
    <Send className="w-5 h-5 mr-2"   /></Send>
  </>
);
              Send Message
            < />
          )}
        </button>
      </form>
    </div>
  </>
);
  </>
);
};

export default ContactForm;