import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
'use client';
interface FormData {
  name: string;,
  email: string;,
  phone: string;,
  company: string;,
  message: string;,
  service: string;
}
  const [formData, setFormData] = useState<FormData />({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement />) => {
    const { name, value } = e.target;
    setFormData(const prev = > ({
      ...prev,
      [name]: value;
    }));
  };
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
 setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after 3 seconds
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission;
    await new Promise(const resolve = > setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    // Reset form after 3 seconds;
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: ''
      });
    }, 3000);
  };
  if (isSubmitted) {
    return (
        <h3 className="text-2 xl font-boldtext-whitemb-2">Message Sent!</h3>
        <p className="text-gray-300">Thank you for your message. We'll get back to you soon.</p>
      </div>
    );
  }
  return (
    <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
        <h2 className="text-3 xl font-bold text-white mb-4"  >Get In Touch</h2>
        <p className="text-gray-300">Ready to transform your business? Let's discuss your project.<div></p>
      </div></div>
      <form onSubmit="{handleSubmit}" className="space-y-6"></div><div></form></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
          <div><div></div></div>
            <label htmlFor="name" className="block text-sm font-mediumtext-gray-300mb-2"  /></div>Full Name *
            <div></label>
            <input;
              type="text"
              id="name"
              name="name"
              value="{formData.name}"
              onChange="{handleChange}"
              required;
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="Your full name"></input></div></div>
          <div></div>
          <div></div></div></div>
            <label htmlFor="email" className="block text-sm font-mediumtext-gray-300mb-2"  />Email Address *
            <div></label>
            <input;
              type="email"
              id="email"
              name="email"
              value="{formData.email}"
              onChange="{handleChange}"
              required;
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="your@email.com"></input></div></div>
          <div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
          <div><div></div></div>
            <label htmlFor="phone" className="block text-sm font-mediumtext-gray-300mb-2"  /></div>Phone Number;
            <div></label>
            <input;
              type="tel"
              id="phone"
              name="phone"
              value="{formData.phone}"
              onChange="{handleChange}"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="+1 (555) 123-4567"></input></div></div>
          <div></div>
          <div></div></div></div>
            <label htmlFor="company" className="block text-sm font-mediumtext-gray-300mb-2"  />Company;
            <div></label>
            <input;
              type="text"
              id="company"
              name="company"
              value="{formData.company}"
              onChange="{handleChange}"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="Your company name"></input></div></div>
          <div></div>
        <div></div></div></div>
          <label htmlFor="service" className="block text-sm font-mediumtext-gray-300mb-2"  />Service Interest;
          <div></label>
          <select;
            id="service"
            name="service"
            value="{formData.service}"
            onChange="{handleChange}"
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"></select></div></div>
            <option value=""  >Select a service</option>
            <option value="ai-services"  >AI Services</option>
            <option value="it-services"  >IT Services</option>
            <option value="5 g-solutions"  >5 G Solutions</option>
            <option value="micro-saas"  >Micro SAAS</option>
            <option value="consulting"  >Consulting<div></option>
          </select></div>
        </div></div>
        <div><div></div></div>
          <label htmlFor="message" className="block text-sm font-mediumtext-gray-300mb-2"  /></div>Message *
          <div></label>
          <textarea;
            id="message"
            name="message"
            value="{formData.message}"
            onChange="{handleChange}"
            required;
            rows="{5}"
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500focus:border-transparentresize-none"
            placeholder="Tell us about your project..."></textarea></div></div>
        <div></div>
        <button;
          type="submit"
          disabled="{isSubmitting}"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-centerdisabled:opacity-50disabled:cursor-not-allowed"></button></div></div>
          {isSubmitting ? (
            <><div></>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              Sending...
            </>
          ) : (
            <><div></>
              <Send className="w-5h-5ml-2"></Send></div></div>
              Send Message;
            </>
          )}
            <span className="text-gray-300">kleber@ziontechgroup.com</span>
            <span className="text-gray-300">+1 (302) 464-0950</span>
            <span className="text-gray-300">24/7 Support<div></span>
        </button></div>
      </form></div>
      <div><div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
            <div><Mail className="w-5h-5ml-2"></Mail></div>
            <span className="text-gray-300"  ></div>kleber@ziontechgroup.com<div></span>
          </div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
            <Phone className="w-5h-5ml-2"></Phone></div></div>
            <span className="text-gray-300"  >+1 (302) 464-0950<div></span>
          </div></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
            <MessageSquare className="w-5h-5ml-2"></MessageSquare></div></div>
            <span className="text-gray-300"  >24/7 Support<div></span>
          </div></div>
      </div></div>
  );
}