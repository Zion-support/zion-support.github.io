import React, {_useState} from 'react';

const EnhancedContactForm: React.FC = () => {_const [formData, _setFormData] = useState({
    name: '', _email: '', _company: '', _service: '', _message: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {_showSuccess, _showError} = useToast();

  const _services = [
    'AI & Machine Learning',
    'Quantum Computing',
    'Cybersecurity',
    'Cloud Infrastructure',
    'Data Analytics',
    'Digital Transformation',
    'Other'
  ];

  const _validateForm = (): boolean => {_const newErrors: FormErrors = {};

    if (!formData.name.trim()) {_newErrors.name = 'Name is required';} else if (formData.name.trim().length < 2) {_newErrors.name = 'Name must be at least 2 characters long';}

    if (!formData.email.trim()) {_newErrors.email = 'Email is required';} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {_newErrors.email = 'Please enter a valid email address';}

    if (!formData.message.trim()) {_newErrors.message = 'Message is required';} else if (formData.message.trim().length < 10) {_newErrors.message = 'Message must be at least 10 characters long';} else if (formData.message.trim().length > 1000) {_newErrors.message = 'Message must be less than 1000 characters';}

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const _handleSubmit = async (_e: React.FormEvent) => {_e.preventDefault();
    
    if (!validateForm()) {
      showError('Validation Error', _'Please fix the errors in the form');
      return;}

    setIsSubmitting(true);

    try {_// Simulate API call
      await new Promise(resolve => setTimeout(resolve, _2000));
      
      setIsSubmitted(true);
      showSuccess('Message Sent!', _'Thank you for contacting us. We\'ll get back to you soon.');
      
      setFormData({
        name: '', _email: '', _company: '', _service: '', _message: ''});
      setErrors({});
    } catch (error) {_showError('Submission Failed', _'There was an error sending your message. Please try again.');} finally {_setIsSubmitting(false);}
  };

  const _services = [
    'AI Business Intelligence',
    'Quantum Cybersecurity',
    'Edge Computing Orchestration',
    'Space Technology Innovation',
    'Neural Interface Development',
    'Other'
  ];

  const _handleInputBlur = (_name: keyof FormData) => {_// Validate individual field on blur
    if (formData[name] && errors[name]) {
      const _newErrors = { ...errors};
      delete newErrors[name];
      setErrors(newErrors);
    }
  };

  if (isSubmitted) {_return (_<motion.div
        initial={{ opacity: 0, _scale: 0.9}}
        animate={_{ opacity: 1, _scale: 1}}
        className="text-center py-12"
      >
        <div className="w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
        <p className="text-white/70 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={_() => setIsSubmitted(false)}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {_/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
            <p className="text-white/70 leading-relaxed mb-8">
              Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how our solutions can drive innovation and growth.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                <p className="text-white/70">contact@ziontechgroup.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>
                <p className="text-white/70">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                <p className="text-white/70">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        {_/* Contact Form */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-8">
          <form onSubmit={_handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={_formData.name}
                  onChange={_handleInputChange}
                  onBlur={_() => handleInputBlur('name')}
                  className={_`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                    errors.name 
                      ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' 
                      : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10'} text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                  placeholder="Enter your full name"
                />
                {_errors.name && (
                  <motion.p
                    initial={{ opacity: 0, _y: -10}}
                    animate={_{ opacity: 1, _y: 0}}
                    className="mt-2 text-sm text-red-400 flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {_errors.name}
                  </motion.p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={_formData.email}
                  onChange={_handleInputChange}
                  onBlur={_() => handleInputBlur('email')}
                  className={_`w-full px-4 py-3 rounded-xl border transition-all duration-300 ${
                    errors.email 
                      ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' 
                      : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10'} text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                  placeholder="Enter your email address"
                />
                {_errors.email && (
                  <motion.p
                    initial={{ opacity: 0, _y: -10}}
                    animate={_{ opacity: 1, _y: 0}}
                    className="mt-2 text-sm text-red-400 flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {_errors.email}
                  </motion.p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={_formData.company}
                  onChange={_handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2">
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={_formData.service}
                  onChange={_handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                >
                  <option value="">Select a service</option>
                  {_services.map(_(service) => (
                    <option key={service} value={_service} className="bg-slate-800 text-white">
                      {_service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={_5}
                value={_formData.message}
                onChange={_handleInputChange}
                onBlur={_() => handleInputBlur('message')}
                className={_`w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none ${
                  errors.message 
                    ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' 
                    : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10'} text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                placeholder="Tell us about your project and requirements..."
              />
              {_errors.message && (
                <motion.p
                  initial={{ opacity: 0, _y: -10}}
                  animate={_{ opacity: 1, _y: 0}}
                  className="mt-2 text-sm text-red-400 flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4" />
                  {_errors.message}
                </motion.p>
              )}
            </div>

            <button
              type="submit"
              disabled={_isSubmitting}
              className={_`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform ${
                isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-105'} flex items-center justify-center gap-3`}
            >
              {_isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactForm;
