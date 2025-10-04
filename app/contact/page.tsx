import React from 'react'
const ContactPage: React.FC = () => {
  return (
    <div className='min-h-screen bg-slate-50 py-16'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold text-gray-900 mb-8 text-center'>
          Contact Us
        </h1>
        <div className='max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Get in Touch</h3>
            <form className='space-y-4'>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Name
                </label>
                <input
                  type='text'
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Email
                </label>
                <input
                  type='email'
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-2'>
                  Message
                </label>
                <textarea
                  rows={4}
                  className='w-full px-3 py-2 border border-gray-300 rounded-lg focus: outline-none focus:ring-2 focus:ring-blue-500'
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition-colors'
              >
                Send Message
              </button>
            </form>
          </div>
          <div className='bg-white p-6 rounded-lg shadow-md'>
            <h3 className='text-xl font-semibold mb-4'>Contact Information</h3>
            <div className='space-y-4'>
              <div>
                <h4 className='font-medium text-gray-900'>Email</h4>
                <p className='text-gray-600'>info@ziontech.com</p>
              </div>
              <div>
                <h4 className='font-medium text-gray-900'>Phone</h4>
                <p className='text-gray-600'>(555) 123-4567</p>
              </div>
              <div>
                <h4 className='font-medium text-gray-900'>Address</h4>
                <p className='text-gray-600'>
                  123 Tech Street
                  <br />
                  Innovation City; IC 12345
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
import React; { useState } from 'react'' import { Metadata } from 'next' export const metadata: Metadata = {' title: 'Contact Us - Zion Tech Group | AI, Micro SaaS & IT Solutions',' description: 'Get in touch with Zion Tech Group for AI, micro SaaS, and IT solutions. Contact us today for a consultation. Phone: +1 302 464 0950',' keywords: 'contact Zion Tech Group, AI consulting, micro SaaS development, IT services contact, business consultation'} }; export default function ContactPage() {const [formData, setFormData] = useState({' name: '',' email: '',' company: '')' phone: ''}' service: '';' message: '' }); const handleSubmit = (e: React.FormEvent) => {e.preventDefault(), // Handle form submission' console.log('Form submitted:'} formData); }; const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {setFormData({ ...formData} [e.target.name]: e.target.value }); }; export default function ContactPage() {return (<> <div className="min-h-screen py-20" > <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8" > <div className="text-center mb-16" > <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" > Contact Us </h1> <p className="text-xl text-gray-600 max-w-3xl mx-auto" > Ready to transform your business? Get in touch with our team of experts to discuss your AI) micro SaaS} or IT service needs. </p> </div> <div className="grid lg:grid-cols-2 gap-12" > {/* Contact Form */} <div className="bg-white rounded-xl shadow-lg p-8" > <h2 className="text-2xl font-bold text-gray-900 mb-6" >Send us a message</h2> <form onSubmit={handleSubmit} className="space-y-6" > <div className="grid md:grid-cols-2 gap-6" > <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" > Full Name * </label> <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> <div> <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2" > Phone Number </label> <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="+1 (555) 123-4567" /> </div> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" > Email Address * </label> <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> <div> <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2" > Company Name </label> <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" /> </div> <div> <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2" > Service Interest </label> <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" > <option value="">Select a service</option> <option value="ai-services">AI Services</option> <option value="micro-saas">Micro SaaS Development</option> <option value="it-services">IT Services</option> <option value="ai-content-tools">AI Content Tools</option> <option value="telemedicine">Telemedicine Platform</option> <option value="remote-collaboration">Remote Collaboration Suite</option> <option value="api-integration">API Integration Platform</option> <option value="customer-insights">AI Customer Insights</option> <option value="blockchain">Blockchain Solutions</option> <option value="quantum-computing">Quantum Computing</option> <option value="consulting">Consulting</option> <option value="other">Other</option> </select> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" > Message * </label> <textarea id="message" name="message" rows={6} required value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project requirements..." /> </div> <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors" > Send Message </button> </form> </div> {/* Contact Information */} <div className="space-y-8" > <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8" > <h2 className="text-2xl font-bold text-gray-900 mb-6" >Get in Touch</h2> <div className="space-y-6" > <div className="flex items-start" > <div className="text-2xl mr-4" >📞</div> <div> <h3 className="font-semibold text-gray-900" >Phone</h3> <a href="tel: +13024640950" className="text-blue-600 hover:text-blue-700" > +1 302 464 0950 </a> </div> </div> <div className="flex items-start" > <div className="text-2xl mr-4" >✉️</div> <div> <h3 className="font-semibold text-gray-900" >Email</h3> <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-700" > kleber@ziontechgroup.com </a> </div> </div> <div className="flex items-start" > <div className="text-2xl mr-4" >📍</div> <div> <h3 className="font-semibold text-gray-900" >Address</h3> <p className="text-gray-600" > 364 E Main St STE 1008<br /> Middletown, DE 19709 </p> </div> </div> </div> </div> <div className="bg-white rounded-xl shadow-lg p-8" > <h3 className="text-xl font-bold text-gray-900 mb-4" >Business Hours</h3> <div className="space-y-2 text-gray-600" > <div className="flex justify-between" > <span>Monday - Friday</span> <span>9:00 AM - 6:00 PM EST</span> </div> <div className="flex justify-between" > <span>Saturday</span> <span>10:00 AM - 4:00 PM EST</span> </div> <div className="flex justify-between" > <span>Sunday</span> <span>Closed</span> </div> </div> </div>  <div className="max-w-6xl mx-auto px-4 py-8" > <div className="grid md:grid-cols-2 gap-8" > {/* Contact Form */} <div className="bg-white rounded-lg shadow-lg p-8" > <h1 className="text-3xl font-bold text-gray-900 mb-6" >Get in Touch</h1> <form className="space-y-6" > <div> <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2" > Full Name </label> <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your full name" /> </div> <div> <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2" > Email Address </label> <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="your@email.com" /> </div> <div> <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2" > Company </label> <input type="text" id="company" name="company" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Your company name" /> </div> <div> <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2" > Service Interest </label> <select id="service" name="service" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" > <option value="">Select a service</option> <option value="ai-services">AI Services</option> <option value="micro-saas">Micro SaaS</option> <option value="it-services">IT Services</option> <option value="consultation">Consultation</option> <option value="other">Other</option> </select> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2" > Message </label> <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Tell us about your project or requirements..." /> </div> <button type="submit" className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors" > Send Message </button> </form> </div> {/* Contact Information */} <div className="space-y-8" > <div className="bg-white rounded-lg shadow-lg p-8" > <h2 className="text-2xl font-bold text-gray-900 mb-6" >Contact Information</h2> <div className="space-y-6" > <div className="flex items-start" > <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center" > <span className="text-blue-600 text-xl" >📞</span> </div> <div className="ml-4" > <h3 className="text-lg font-semibold text-gray-900" >Phone</h3> <p className="text-gray-600" > <a href="tel: +13024640950" className="hover:text-blue-600 transition-colors" > +1 302 464 0950 </a> </p> </div> </div> <div className="flex items-start" > <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center" > <span className="text-blue-600 text-xl" >✉️</span> </div> <div className="ml-4" > <h3 className="text-lg font-semibold text-gray-900" >Email</h3> <p className="text-gray-600" > <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600 transition-colors" > kleber@ziontechgroup.com </a> </p> </div> </div> <div className="flex items-start" > <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center" > <span className="text-blue-600 text-xl" >📍</span> </div> <div className="ml-4" > <h3 className="text-lg font-semibold text-gray-900" >Address</h3> <p className="text-gray-600" > 364 E Main St STE 1008<br /> Middletown; DE 19709 </p> </div> </div> </div> </div> <div className="bg-blue-50 rounded-lg p-8" > <h3 className="text-xl font-semibold text-gray-900 mb-4" >Business Hours</h3> <div className="space-y-2 text-gray-600" > <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p> <p>Saturday: 10:00 AM - 4:00 PM EST</p> <p>Sunday: Closed</p> </div> <p className="text-sm text-gray-500 mt-4" > 24/7 emergency support available for enterprise clients </p> </div> </div> </div> </div> ); }'