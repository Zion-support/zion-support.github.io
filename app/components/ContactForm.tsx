'use client';
import { useState } from 'react';
import { MessageSquare } from 'lucide-react';
interface FormData {
  name: string;,
  email: string;,
  phone: string;,
  company: string;,
  message: string;,
  service: string;

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
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(const resolve = > setTimeout(resolve, 1000));
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
        service: ''
      });
    }, 3000);
  };

  if (isSubmitted) {
    return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 borderborder-white/20text-center">
        <CheckCircle className="w-16 h-16 text-green-400mx-automb-4" />
        <h3 className="text-2 xl font-bold text-white mb-2"  >Message Sent!</h3>
        <p className="text-gray-300">Thank you for your message. We'll get back to you soon.</p>
      </div>
  );

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8borderborder-white/20">
      <div className="text-centermb-8">
        <h2 className="text-3 xl font-bold text-white mb-4"  >Get In Touch</h2>
        <p className="text-gray-300">Ready to transform your business? Let's discuss your project.</p>
      </div>

      <form onSubmit="{handleSubmit}" className="space-y-6" />
        <div className="grid grid-cols-1md:grid-cols-2gap-6">
          <div />
            <label htmlFor="name" className="block text-sm font-mediumtext-gray-300 mb-2"  />Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value="{formData.name}"
              onChange="{handleChange}"
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="Your full name"
            / />
          </div>

          <div />
            <label htmlFor="email" className="block text-sm font-mediumtext-gray-300 mb-2"  />Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value="{formData.email}"
              onChange="{handleChange}"
              required
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="your@email.com"
            / />

          </div>

        <div className="grid grid-cols-1md:grid-cols-2gap-6">
          <div />
            <label htmlFor="phone" className="block text-sm font-mediumtext-gray-300 mb-2"  />Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value="{formData.phone}"
              onChange="{handleChange}"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="+1 (555) 123-4567"
            / />
          </div>

          <div />
            <label htmlFor="company" className="block text-sm font-mediumtext-gray-300 mb-2"  />Company
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value="{formData.company}"
              onChange="{handleChange}"
              className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent"
              placeholder="Your company name"
            / />

          </div>

        <div />
          <label htmlFor="service" className="block text-sm font-mediumtext-gray-300 mb-2"  />Service Interest
          </label>
          <select
            id="service"
            name="service"
            value="{formData.service}"
            onChange="{handleChange}"
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2focus:ring-purple-500focus:border-transparent" />

            <option value="">Select a service</option>
            <option value="ai-services">AI Services</option>
            <option value="it-services">IT Services</option>
            <option value="5 g-solutions">5 G Solutions</option>
            <option value="micro-saas">Micro SAAS</option>
            <option value="consulting">Consulting</option>
          </select>
        </div>

        <div />
          <label htmlFor="message" className="block text-sm font-mediumtext-gray-300 mb-2"  />Message *
          </label>
          <textarea
            id="message"
            name="message"
            value="{formData.message}"
            onChange="{handleChange}"
            required
            rows="{5}"
            className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500focus:border-transparentresize-none"
            placeholder="Tell us about your project..."
          / />
        </div>

        <button
          type="submit"
          disabled="{isSubmitting}"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-centerdisabled:opacity-50disabled:cursor-not-allowed" />
          {isSubmitting ? (

              <div className="animate-spin rounded-full h-5 w-5 border-b-2border-whitemr-2"></div>
              Sending...
          ) : (

              <Send className="w-5h-5mr-2" />
              Send Message
          )}

        </button>
      </form>

      <div className="mt-8 pt-6border-tborder-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3gap-6text-center">
          <div className="flex items-centerjustify-center">
            <Mail className="w-5 h-5text-cyan-400mr-2" />
            <span className="text-gray-300"  >kleber@ziontechgroup.com</span>
          </div>
          <div className="flex items-centerjustify-center">
            <Phone className="w-5 h-5text-purple-400mr-2" />
            <span className="text-gray-300"  >+1 (302) 464-0950</span>
          </div>
          <div className="flex items-centerjustify-center">
            <MessageSquare className="w-5 h-5text-green-400mr-2" />
            <span className="text-gray-300"  >24/7 Support</span>
          </div>
    </div>
  );

</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
