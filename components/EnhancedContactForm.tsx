<<<<<<< HEAD
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const EnhancedContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
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
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 3000);
=======
 setErrors (newErrors);

 setErrors (newErrors);
}
setIsSubmitting (true);
 setErrors (newErrors);
}
setIsSubmitting (true);
const handleInputBlur = (name: keyof FormData) => {;
  //Validate individual field on blur if (formData[name] && errors[name]) {;

};
> <div className="w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center" > <CheckCircle className="w-10 h-10 text-green-400" /> </div> <h3 className="text-2xl font-bold text-white mb-4" >Message Sent Successfully!</h3> <p className="text-white/70 mb-6" > Thank you for reaching out. We'll get back to you within 24 hours. </p> <button
}return (<div> <h3 className="text-2xl font-bold text-white mb-6" >Get in Touch</h3> <p className="text-white/70 leading-relaxed mb-8" > Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how our solutions can drive innovation and growth. </p> </div> <div className="space-y-6" > <div className="flex items-start space-x-4" > <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 flex items-center justify-center" > <Mail className="w-6 h-6 text-white" /> </div> <div> <h4 className="text-lg font-semibold text-white mb-1" >Email</h4> <p className="text-white/70" >contact@ziontechgroup && ziontechgroup.com</p> </div> </div> <div className="flex items-start space-x-4" > <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 flex items-center justify-center" > <Phone className="w-6 h-6 text-white" /> </div> <div> <h4 className="text-lg font-semibold text-white mb-1" >Phone</h4> <p className="text-white/70" >+1 (555) 123-4567</p> </div> </div> <div className="flex items-start space-x-4" > <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 flex items-center justify-center" > <MapPin className="w-6 h-6 text-white" /> </div> <div> <h4 className="text-lg font-semibold text-white mb-1" >Location</h4> <p className="text-white/70" >San Francisco, CA</p> </div> </div> </div> </div> <div> <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2" > Full Name * </label> <input /> {;
  errors && errors.name && (<motion && motion.p </motion && motion.p>) ;
}</div> <div> <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2" > Email Address * </label> <input /> {;
  errors && errors.email && (<motion && motion.p </motion && motion.p>) ;
}</div> </div> <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" > <div> <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2" > Company </label> <input /> </div> <div> <label htmlFor="service" className="block text-sm font-medium text-white/80 mb-2" > Service Interest </label> <select </option>) ) ;
}</select> </div> </div> <div> <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2" > Message * </label> <textareaerrors && errors.message ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10' 
}text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20` 
}placeholder="Tell us about your project and requirements..." /> {;
  errors && errors.message && (<motion&& motion.p initial= {

  opacity: 1, y: 0 
}className="mt-2 text-sm text-red-400 flex items-center gap-2"> </motion && motion.p>) ;
}</div> <buttonisSubmitting ? 'bg-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-105' 
}flex items-center justify-center gap-3` 
}> {;
  isSubmitting ? (<> <Loader2 className="w-5 h-5 animate-spin" /> Sending Message... </>) : (<> <Send className="w-5 h-5" /> Send Message </>) ;
}</button> </form> </div> </div> </section>) ;
};

export default EnhancedContactForm;
  const services = [;
    'AI & Machine LearningQuantum ComputingCybersecurityCloud InfrastructureData AnalyticsDigital TransformationOther';

=======
    return Object && Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (!validateForm()) {;=======
      showError('Validation ErrorPlease fix the errors in the form');
      return;
    }
    setIsSubmitting(true);
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    try {;
      // Simulate API call;
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      showSuccess('Message Sent!Thank you for contacting us. We\'ll get back to you soon.');
      setFormData({;
        name: '',;
        email: '',;
        company: '',;
        service: '',;
        message: '';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      });
      setErrors({});
    } catch (error) {;
      console && console.error('Error submitting form:', error);
      showError('Submission FailedThere was an error sending your message. Please try again.');
    } finally {;
      setIsSubmitting(false);
    }
  };
=======

>>>>>>> main
  };

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const services = [;
    'AI Business IntelligenceQuantum CybersecurityEdge Computing OrchestrationSpace Technology InnovationNeural Interface DevelopmentOther';
  ];
<<<<<<< HEAD

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-center">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-green-400" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
        <p className="text-white/70 mb-6">
          Thank you for reaching out. We'll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-white transition-all duration-300"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build the Future
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Ready to transform your business with cutting-edge technology? 
              Get in touch with our experts and discover how Zion Tech Group 
              can accelerate your digital transformation journey.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a 
                    href="mailto:kleber@ziontechgroup.com" 
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <a 
                    href="tel:+13024640950" 
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    +1 (302) 464-0950
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-green-400">Global Operations</p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="mt-8 p-6 bg-white/5 rounded-2xl border border-white/10">
              <h3 className="text-white font-semibold mb-2">Response Time</h3>
              <p className="text-white/70">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-white/80 mb-2 font-medium">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-300"
                    placeholder="Enter company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-white/80 mb-2 font-medium">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 disabled:from-gray-600 disabled:to-gray-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedContactForm;
=======
  const handleInputBlur = (name: keyof FormData) => {;
    // Validate individual field on blur;
    if (formData[name] && errors[name]) {;
      const newErrors = { ...errors };
      delete newErrors[name];
      setErrors(newErrors);
    }

  };
  if (isSubmitted) {;

        <div className="space-y-8">;
          <div>;
            <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>;
            <p className="text-white/70 leading-relaxed mb-8">;
              Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how our solutions can drive innovation and growth.;
            </p>;
          </div>;
          <div className="space-y-6">;
            <div className="flex items-start space-x-4">;
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 flex items-center justify-center">;
                <Mail className="w-6 h-6 text-white" />;
              </div>;
              <div>;
                <h4 className="text-lg font-semibold text-white mb-1">Email</h4>;
                <p className="text-white/70">contact@ziontechgroup && ziontechgroup.com</p>;
              </div>;
            </div>;
            <div className="flex items-start space-x-4">;
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 flex items-center justify-center">;
                <Phone className="w-6 h-6 text-white" />;
              </div>;
              <div>;
                <h4 className="text-lg font-semibold text-white mb-1">Phone</h4>;
                <p className="text-white/70">+1 (555) 123-4567</p>;
              </div>;
            </div>;
            <div className="flex items-start space-x-4">;
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 p-3 flex items-center justify-center">;
                <MapPin className="w-6 h-6 text-white" />;
              </div>;
              <div>;
                <h4 className="text-lg font-semibold text-white mb-1">Location</h4>;
                <p className="text-white/70">San Francisco, CA</p>;
set_errors (new_errors);
;
}
setIsSubmitting (true);
const handleInputBlur = (name: keyof FormData) =>: any {
  //Validate individual field on blur // Check condition
if ( {) {
  $2
}
}
> <div className="w - 20 h - 20 rounded - full bg - green - 500 / 20 mx - auto mb - 6 flex items - center justify - center" > <CheckCircle className="w - 10 h - 10 text - green - 400" /> </div> <h3 className="text - 2xl font - bold text - white mb - 4" >Message Sent Successfully!</h3> <p className="text - white / 70 mb - 6" > Thank you for reaching out. We'll get back to you within 24 hours. </p> <button;
}return (<div> <h3 className="text - 2xl font - bold text - white mb - 6" >Get in Touch</h3> <p className="text - white / 70 leading - relaxed mb - 8" > Ready to transform your business with cutting - edge technology? Let's discuss your project and explore how our solutions can drive innovation and growth. </p> </div> <div className="space - y-6" > <div className="flex items - start space - x-4" > <div className="w - 12 h - 12 rounded - xl bg - gradient - to - br from - blue - 500 to - cyan - 500 p - 3 flex items - center justify - center" > <Mail className="w - 6 h - 6 text - white" /> </div> <div> <h4 className="text - lg font - semibold text - white mb - 1" >Email</h4> <p className="text - white / 70" >contact@ziontechgroup.com</p> </div> </div> <div className="flex items - start space - x-4" > <div className="w - 12 h - 12 rounded - xl bg - gradient - to - br from - purple - 500 to - pink - 500 p - 3 flex items - center justify - center" > <Phone className="w - 6 h - 6 text - white" /> </div> <div> <h4 className="text - lg font - semibold text - white mb - 1" >Phone</h4> <p className="text - white / 70" >+1 (555) 123 - 4567</p> </div> </div> <div className="flex items - start space - x-4" > <div className="w - 12 h - 12 rounded - xl bg - gradient - to - br from - emerald - 500 to - teal - 500 p - 3 flex items - center justify - center" > <MapPin className="w - 6 h - 6 text - white" /> </div> <div> <h4 className="text - lg font - semibold text - white mb - 1" >Location</h4> <p className="text - white / 70" >San Francisco, CA</p> </div> </div> </div> </div> <div> <label html_for="name" className="block text - sm font - medium text - white / 80 mb - 2" > Full Name * </label> <input /> {
  errors.name && (<motion.p </motion.p>);
}</div> <div> <label html_for="email" className="block text - sm font - medium text - white / 80 mb - 2" > Email Address * </label> <input /> {
  errors.email && (<motion.p </motion.p>);
}</div> </div> <div className="grid grid - cols - 1 sm:grid - cols - 2 gap - 6" > <div> <label html_for="company" className="block text - sm font - medium text - white / 80 mb - 2" > Company </label> <input /> </div> <div> <label html_for="service" className="block text - sm font - medium text - white / 80 mb - 2" > Service Interest </label> <select </option>) );
}</select> </div> </div> <div> <label html_for="message" className="block text - sm font - medium text - white / 80 mb - 2" > Message * </label> <textarea errors.message ? 'border - red - 500 / 50 bg - red - 500 / 10 focus:border - red - 400 focus:bg - red - 500 / 20' : 'border - white / 20 bg - white / 5 focus:border - cyan - 400 focus:bg - white / 10';
}text - white placeholder - white / 40 focus:outline - none focus:ring - 2 focus:ring - cyan - 400 / 20`;
}placeholder="Tell us about your project and requirements..." /> {
  errors.message && (<motion.p initial= {
  {
  opacity: 0, coordinate_y: -10;
}animate= {
  {
  opacity: 1, coordinate_y: 0;
}className="mt - 2 text - sm text - red - 400 flex items - center gap - 2" > </motion.p>);
}</div> <button is_submitting ? 'bg - gray - 600 cursor - not - allowed' : 'bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 hover:scale - 105';
}flex items - center justify - center gap - 3`;
}> {
  is_submitting ? (<> <Loader2 className="w - 5 h - 5 animate - spin" /> Sending Message... </>) : (<> <Send className="w - 5 h - 5" /> Send Message </>);
}</button> </form> </div> </div> </section>);
}
export default EnhancedContactForm;
  const services = [;
    'AI & Machine LearningQuantum ComputingCybersecurityCloud InfrastructureData AnalyticsDigital TransformationOther';
  ];
;
  const validate_form = (): boolean => {
    const new_errors: FormErrors = {},
    if () {) {
  $2
}
      new_errors.name = 'Name is required';
    } else // Check condition
if (.length < 2) {) {
  $2
}
      new_errors.name = 'Name must be at least 2 characters long';
    }
    if () {) {
  $2
}
      new_errors.email = 'Email is required';
    } else if () {) {
  $2
}
      new_errors.email = 'Please enter a valid email address';
    }
    if () {) {
  $2
}
      new_errors.message = 'Message is required';
    } else // Check condition
if (.length < 10) {) {
  $2
}
      new_errors.message = 'Message must be at least 10 characters long';
    } else // Check condition
if (.length > 1000) {) {
  $2
}
      new_errors.message = 'Message must be less than 1000 characters';
    }
    set_errors (new_errors);
    return Object.keys (new_errors).length === 0;
  }
;
  const handle_submit = async (e: React.FormEvent) => {
    e.prevent_default ();
;
    if () {) {
  $2
}
      show_error ('Validation ErrorPlease fix the errors in the form');
      return;
    }
    setIsSubmitting (true);
;
    try {
      // Simulate API call;
      await new Promise (resolve => set_timeout (resolve, 2000));
;
      setIsSubmitted (true);
      show_success ('Message Sent ! Thank you for contacting us. We'll get back to you soon.');
;
      setFormData ({

    setErrors(newErrors),
    return Object.keys(newErrors).length === 0
  },

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    
    if (!validateForm()) {
      showError('Validation ErrorPlease fix the errors in the form'),
      return
    }

    setIsSubmitting(true),

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000)),
      
      setIsSubmitted(true),
      showSuccess('Message Sent!Thank you for contacting us. We\'ll get back to you soon.'),
      
      setFormData({

        name: '',
        email: '',
        company: '',
        service: '',
message: '';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long'
    } else if (formData.message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters'
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      showError('Validation ErrorPlease fix the errors in the form');
      return
    }
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      showSuccess('Message Sent!Thank you for contacting us. We\'ll get back to you soon.');
      setFormData({
        name: ''
        email: ''
        company: ''
        service: ''
        message: ''
      });
      set_errors ({});
    } catch (error) {
      console.error ('Error submitting form:', error);
      show_error ('Submission FailedThere was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting (false);
    }
  }
;
  const services = [;
    'AI Business IntelligenceQuantum CybersecurityEdge Computing OrchestrationSpace Technology InnovationNeural Interface DevelopmentOther';
  ];
;
  const handleInputBlur = (name: keyof FormData) =>: any {
    // Validate individual field on blur;
    // Check condition
if ( {) {
  $2
}
      const new_errors = { ...errors }
      delete new_errors[name];
      set_errors (new_errors);
    }
  }
=======
                  Company
                ">;
                  Company;
                </label>;
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData && formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300"
                  placeholder="Enter your company name"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                />;
              </div>;
              <div>;
                <labelhtmlFor="service" className="block text-sm font-medium text-white/80 mb-2" htmlFor="input-
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                  Service Interest
                ">;
                  Service Interest;
                </label>;
                <select
                  id="service"
                  name="service"
                  value={formData && formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/5 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400/20 focus:border-cyan-400 focus:bg-white/10 transition-all duration-300">;
                  <option value="">Select a service</option>;
                  {services && services.map((service) => (;
                    <option key={service} value={service} className="bg-slate-800 text-white">;
                      {service}
                    </option>;
                  ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                </select>;
              </div>;
            </div>;
            <div>;
              <labelhtmlFor="message" className="block text-sm font-medium text-white/80 mb-2" htmlFor="input-
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                Message *
              ">;
                Message *;
              </label>;
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData && formData.message}
                onChange={handleInputChange}
                onBlur={() => handleInputBlur('message')}
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none ${
                  errors.message 
                    ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' 


                    : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10'
                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none ${
                  errors.message
                    ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20'
                  errors.message 
                    ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' 
                    : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10'
=======                className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 resize-none ${;
                  errors && errors.message ;
                    ? 'border-red-500/50 bg-red-500/10 focus:border-red-400 focus:bg-red-500/20' ;
                    : 'border-white/20 bg-white/5 focus:border-cyan-400 focus:bg-white/10';
                } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                placeholder="Tell us about your project and requirements...";
              />;
              {errors && errors.message && (;
                <motion&& motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-2 text-sm text-red-400 flex items-center gap-2">;
                  <AlertCircle className="w-4 h-4" />;
                  {errors && errors.message}
                </motion && motion.p>;
              )}
            </div>;


                isSubmitting 
                  ? 'bg-gray-600 cursor-not-allowed' 


>>>>>>> main
