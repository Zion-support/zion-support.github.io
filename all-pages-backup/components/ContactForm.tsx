'use client'
import { useState } from 'react'
<<<<<<< HEAD
import { MessageSquare, Mail, Phone, Send, CheckCircle } from 'lucide-react';
'use client';

import { useState } from 'react';
<<<<<<< HEAD:all-pages-backup/components/ContactForm.tsx
:app/components/ContactForm.tsx

interface FormData {
  name: string,
  email: string,
  phone: string,
  company: string,
  message: string,
  service: string
}
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
<<<<<<< HEAD:all-pages-backup/components/ContactForm.tsx

const ContactForm: React.FC = () => {;
  const [formData, setFormData] = useState<FormData>({;
    name: name,
  email: email,
  phone: phone,
  company: company,
  message: message,
  service: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  setFormData({
      ...formData
      [e.target.name]: e.target.value
})
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    service: ''});
:app/components/ContactForm.tsx

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    setFormData({
      ...formData
<<<<<<< HEAD:all-pages-backup/components/ContactForm.tsx
      [e.target.name]: e.target.value
    })};

:app/components/ContactForm.tsx
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
<<<<<<< HEAD:all-pages-backup/components/ContactForm.tsx
        name: name,
  email: email,
  phone: phone,
  company: company,
  message: message,
  service: ''
      })
    }, 3000)
  }
      })}, 3000)};

:app/components/ContactForm.tsx
  const services = [
=======
import { MessageSquare, Mail, Phone, Send, CheckCircle } from 'lucide-react'
'use client'
import { useState } from 'react'
  "service": ',
    "service": '',
  "service": ',
>>>>>>> origin/main
    'AI Solutions'
    'Web Development'
    'Mobile Development'
    'Cloud Migration'
    'Cybersecurity'
    'Data Analytics'
    'DevOps'
<<<<<<< HEAD
<<<<<<< HEAD:all-pages-backup/components/ContactForm.tsx
    'Consulting'
:app/components/ContactForm.tsx
  ];
    'Consulting';
  ];

  if (isSubmitted) {
    return (
<<<<<<< HEAD:all-pages-backup/components/ContactForm.tsx
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
        <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
        <p className="text-gray-300">Thank you for reaching out. We&apos;ll get back to you soon.</p>
      </div>
    )
  }
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
      <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md: grid-cols-2 gap-6">
        <p className="text-gray-300">Thank you for reaching out. We'll get back to you soon.</p>
      </div>
    )}
:app/components/ContactForm.tsx

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
<<<<<<< HEAD:all-pages-backup/components/ContactForm.tsx
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
:app/components/ContactForm.tsx
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
<<<<<<< HEAD:all-pages-backup/components/ContactForm.tsx
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
:app/components/ContactForm.tsx
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div className="grid md: grid-cols-2 gap-6">

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
<<<<<<< HEAD:all-pages-backup/components/ContactForm.tsx
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
:app/components/ContactForm.tsx
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
<<<<<<< HEAD:all-pages-backup/components/ContactForm.tsx
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
:app/components/ContactForm.tsx
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
<<<<<<< HEAD:all-pages-backup/components/ContactForm.tsx
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
:app/components/ContactForm.tsx
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
<<<<<<< HEAD:all-pages-backup/components/ContactForm.tsx
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
            placeholder="Tell us about your project or how we can help..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
:app/components/ContactForm.tsx
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
            </>
          ) : (
            <>
              <Send className="w-5h-5mr-2" />
              Send Message
</>
          )}
        </button>
      </form>
            </>
{          )}
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
<<<<<<< HEAD:all-pages-backup/components/ContactForm.tsx
    </div>
  )
{}
export default ContactForm
  );
{};

export default ContactForm
:app/components/ContactForm.tsx
=======
    'Consulting';
    'Consulting'
>>>>>>> origin/main
