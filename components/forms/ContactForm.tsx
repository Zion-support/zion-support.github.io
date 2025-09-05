'use client';

import React, {_useState} from 'react';

const ContactForm: React.FC = () => {_const [formData, _setFormData] = useState({
    name: '', _email: '', _company: '', _phone: '', _service: '', _message: ''});

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const _handleChange = (_e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {_setFormData({
      ...formData, _[e.target.name]: e.target.value});
  };

  const _handleSubmit = async (_e: React.FormEvent) => {_e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, _2000));
      setSubmitStatus('success');
      setFormData({
        name: '', _email: '', _company: '', _phone: '', _service: '', _message: ''});
    } catch (error) {_setSubmitStatus('error');} finally {_setIsSubmitting(false);}
  };

  const _services = [
    'AI Development',
    'Cloud Architecture',
    'Digital Transformation',
    'IoT Platforms',
    'Blockchain Solutions',
    'Data Analytics',
    'Other'
  ];

  const _contactInfo = [
    {_icon: Mail, _title: 'Email Us', _content: 'contact@ziontechgroup.com', _href: 'mailto:contact@ziontechgroup.com'},
    {_icon: Phone, _title: 'Call Us', _content: '+1 (555) 123-4567', _href: 'tel:+15551234567'},
    {_icon: MapPin, _title: 'Visit Us', _content: '123 Tech Street, _Innovation City, _IC 12345', _href: '#'}
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {_/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        {_/* Section Header */}
        <motion.div
          initial={_{ opacity: 0, _y: 30}}
          whileInView={_{ opacity: 1, _y: 0}}
          transition={_{ duration: 0.8}}
          viewport={_{ once: true}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Let&apos;s Start a
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Conversation
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Get in touch with our team of experts to discuss 
            how we can help you achieve your technology goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {_/* Contact Information */}
          <motion.div
            initial={_{ opacity: 0, _x: -30}}
            whileInView={_{ opacity: 1, _x: 0}}
            transition={_{ duration: 0.8, _delay: 0.2}}
            viewport={_{ once: true}}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Our team is here to help you navigate the complex world of technology and find 
                the perfect solutions for your business needs. Reach out to us today.
              </p>
            </div>

            {_/* Contact Details */}
            <div className="space-y-6">
              {_contactInfo.map(_(info, _index) => (
                <motion.a
                  key={info.title}
                  href={_info.href}
                  initial={_{ opacity: 0, _x: -20}}
                  whileInView={_{ opacity: 1, _x: 0}}
                  transition={_{ duration: 0.6, _delay: 0.3 + index * 0.1}}
                  viewport={_{ once: true}}
                  className="flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">{_info.title}</h4>
                    <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
                      {_info.content}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {_/* Additional Info */}
            <motion.div
              initial={_{ opacity: 0, _y: 20}}
              whileInView={_{ opacity: 1, _y: 0}}
              transition={_{ duration: 0.6, _delay: 0.6}}
              viewport={_{ once: true}}
              className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-6"
            >
              <h4 className="text-lg font-semibold text-white mb-3">Why Choose Zion Tech?</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Expert team with 10+ years experience</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Proven track record of successful projects</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>24/7 support and maintenance</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Competitive pricing and flexible solutions</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {_/* Contact Form */}
          <motion.div
            initial={_{ opacity: 0, _x: 30}}
            whileInView={_{ opacity: 1, _x: 0}}
            transition={_{ duration: 0.8, _delay: 0.4}}
            viewport={_{ once: true}}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
          >
            {_submitStatus === 'success' ? (_<motion.div
                initial={{ opacity: 0, _scale: 0.8}}
                animate={_{ opacity: 1, _scale: 1}}
                className="text-center py-12"
              >
                <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-300 mb-6">
                  Thank you for reaching out. Our team will get back to you within 24 hours.
                </p>
                <button
                  onClick={_() => setSubmitStatus('idle')}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (_<form onSubmit={_handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={_formData.name}
                      onChange={_handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={_formData.email}
                      onChange={_handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={_formData.company}
                      onChange={_handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={_formData.phone}
                      onChange={_handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={_formData.service}
                    onChange={_handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select a service</option>
                    {_services.map((service) => (
                      <option key={service} value={_service} className="bg-gray-800 text-white">
                        {_service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={_formData.message}
                    onChange={_handleChange}
                    required
                    rows={_5}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {_submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, _y: -10}}
                    animate={_{ opacity: 1, _y: 0}}
                    className="flex items-center space-x-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again.</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={_isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {_isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;