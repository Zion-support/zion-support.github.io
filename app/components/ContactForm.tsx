'use client';

import { useState } from 'react';
import { Send, Phone, Mail, CheckCircle, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: ''
    email: ''
    phone: ''
    company: ''
    message: ''
    service: '';
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData
      [e.target.name]: e.target.value;
    });
  }
  const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: ''
        email: ''
        phone: ''
        company: ''
        message: ''
        service: ''
      });
    }, 3000);
  }
  const services = [
    'AI Solutions'
    'Web Development'
    'Mobile Development'
    'Cloud Migration'
    'Cybersecurity'
    'Data Analytics'
    'DevOps'
    'Consulting';
  ];

  if (isSubmitted) {
    return (
      <div className = "bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
        <CheckCircle className="w-16h-16te x t-green-400 mx-auto mb-4" />
        <h3 className="tex t-xlfont-semibold text-white mb-2">Message Sent!</h3>
        <p className="tex t-gray-300">Thank you for reaching out. We'll get back to you soon.</p>
      </div>;
    );
  }

  return (
    <div className = "bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
      <h2 className="tex t-2xlfont-bold text-white mb-6">Send us a Message</h2>
      
      <form onSubmit={handleSubmit} className="spa ce-y-6">
        <div className="gri dmd: grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="blo cktext-sm font-medium text-gray-300 mb-2">
              Full Name *
            </label>
            <input type="text">
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-ful lpx-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="blo cktext-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input type="email">
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-ful lpx-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="gri dmd:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="blo cktext-sm font-medium text-gray-300 mb-2">
              Phone Number
            </label>
            <input type="tel">
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-ful lpx-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="company" className="blo cktext-sm font-medium text-gray-300 mb-2">
              Company
            </label>
            <input type="text">
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-ful lpx-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Your company name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="blo cktext-sm font-medium text-gray-300 mb-2">
            Service Interest
          </label>
          <select id="service">
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-ful lpx-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service} className="bg-gr ay-800">
                {service}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="blo cktext-sm font-medium text-gray-300 mb-2">
            Message *
          </label>
          <textarea id="message">
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-ful lpx-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
            placeholder="Tell us about your project or how we can help..."
          />
        </div>

        <button type="submit",>
          disabled={isSubmitting}
          className="w-ful lflex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <div className="ani mate-spinrounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </>
          ) : (
            <>
              <Send className="w-5h-5mr-2" />
              Send Message
            </>
          )}
        </button>
      </form>

      <div className="mt-8pt-8 b order-t border-white/10">
        <h3 className="tex t-lgfont-semibold text-white mb-4">Contact Information</h3>
        <div className="spa ce-y-3">
          <div className="fle xitems-center justify-center">
            <Mail className="w-5h-5te x t-cyan-400 mr-2" />
            <span className="tex t-gray-300">kleber@ziontechgroup.com</span>
          </div>
          <div className="fle xitems-center justify-center">
            <Phone className="w-5h-5te x t-purple-400 mr-2" />
            <span className="tex t-gray-300">+1 (302) 464-0950</span>
          </div>
          <div className="fle xitems-center justify-center">
            <MessageSquare className="w-5h-5te x t-green-400 mr-2" />
            <span className="tex t-gray-300">24/7 Support</span>
          </div>
        </div>
      </div>
    </div>;
  );
}
export default ContactForm;