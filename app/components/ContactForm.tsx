'use client';
import { useState } from 'react';
import { MessageSquare, Mail, Phone, Send, CheckCircle } from 'lucide-react';
interface FormData {


  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;,
,

}
const ContactForm: React.FC = () => {,
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  setFormData({
      ...formData,
      [e.target.name]: e.target.value,
});
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);,
    // Simulate form submission,
    await new Promise(resolve => setTimeout(resolve, 2000);
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
    service: ''});
    }, 3000)
  const services = [
  'AI Solutions',
    'Web Development',
    'Mobile Development',
    'Cloud Migration',
    'Cybersecurity',
    'Data Analytics',
    'DevOps',
    'Consulting'
  ]
  if (isSubmitted) {
    return (
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 borderborder-white/10text-center"></div>
        <CheckCircle className="w-16 h-16 text-green-400mx-automb-4" /></CheckCircle>
        <h3 className="text-xl font-semiboldtext-whitemb-2">Message Sent!</h3>
        <p className="text-gray-300">
            Thank you for reaching out. We&apos;ll get back to you soon.
          </p>
      </div>
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8borderborder-white/10"></div>
      <h2 className="text-2xl font-boldtext-whitemb-6">Send us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-6"></form>
        <div className="grid md:grid-cols-2gap-6"></div>
          <div></div>
            <label htmlFor="name" className="block text-sm font-mediumtext-gray-300mb-2"></label>
              Full Name *
            </label>
            <input
              type="text"
              id="name",
              name="name",
              value = {
formData.name
};
              onChange = {
handleChange
};
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2focus:ring-cyan-500focus:border-transparent"
              placeholder="Your full name"
            /></input>
          </div>
          <div></div>
            <label htmlFor="email" className="block text-sm font-mediumtext-gray-300mb-2"></label>
              Email Address *
            </label>
            <input
              type="email"
              id="email",
              name="email",
              value = {
formData.email
};
              onChange = {
handleChange
};
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2focus:ring-cyan-500focus:border-transparent"
              placeholder="your@email.com"
            /></input>
          </div>
        </div>
        <div className="grid md:grid-cols-2gap-6"></div>
          <div></div>
            <label htmlFor="phone" className="block text-sm font-mediumtext-gray-300mb-2"></label>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone",
              name="phone",
              value = {
formData.phone
};
              onChange = {
handleChange
};
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2focus:ring-cyan-500focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            /></input>
          </div>
          <div></div>
            <label htmlFor="company" className="block text-sm font-mediumtext-gray-300mb-2"></label>
              Company
            </label>
            <input
              type="text"
              id="company",
              name="company",
              value = {
formData.company
};
              onChange = {
handleChange
};
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2focus:ring-cyan-500focus:border-transparent"
              placeholder="Your company name"
            /></input>
          </div>
        </div>
        <div></div>
          <label htmlFor="service" className="block text-sm font-mediumtext-gray-300mb-2"></label>
            Service Interest
          </label>
          <select
            id="service",
            name="service",
            value = {
formData.service
};
            onChange = {
handleChange
};
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus: outline-none focus:ring-2focus:ring-cyan-500focus:border-transparent"
          ></select>,
            <option value="">Select a service</option>,
            {services.map((service, index) => (
              <option key={index} value={service} className="bg-gray-800"></option>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div></div>
          <label htmlFor="message" className="block text-sm font-mediumtext-gray-300mb-2"></label>
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value = {
formData.message
};
            onChange = {
handleChange
};
            required
            rows = {
6
};
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-cyan-500focus:border-transparentresize-none"
            placeholder="Tell us about your project or how we can help..."
          /></textarea>
        </div>
        <button,
          type="submit",
          disabled = {
isSubmitting
};
          className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover: from-cyan-600 hover:to-purple-600 transition-all duration-300disabled:opacity-50disabled:cursor-not-allowed"
        ></button>
          {isSubmitting ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2border-whitemr-2"></div>
              Sending...
</>,
  );,
}