

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

  {
  opacity: 0, y: -10
}animate= {
  {
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
    setErrors(newErrors);

    return Object && Object.keys(newErrors).length === 0;
  };
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    if (!validateForm()) {;

      showError('Validation ErrorPlease fix the errors in the form');
      return;
    }
    setIsSubmitting(true);
      });
      setErrors({});
    } catch (error) {;
      console && console.error('Error submitting form:', error);
      showError('Submission FailedThere was an error sending your message. Please try again.');
    } finally {;
      setIsSubmitting(false);
    }
    return (
      <motion&& motion.div
        initial={{ opacity: 0, scale: 0 && 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12">;
        <div className="w-20 h-20 rounded-full bg-green-500/20 mx-auto mb-6 flex items-center justify-center">;
          <CheckCircle className="w-10 h-10 text-green-400" />;
        </div>;
        <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>;
        <p className="text-white/70 mb-6">;
          Thank you for reaching out. We'll get back to you within 24 hours.;
        </p>;
        <button
          onClick={() => setIsSubmitted(false)}
          className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover: from-blue-700 hover:to-cyan-700 rounded-full font-semibold transition-all duration-300 transform hover:scale-105";
        >;
          Send Another Message;
        </button>;
      </div>;
    );
  }
  return (
    <div className="max-w-4xl mx-auto">;
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">;
        {/* Contact Information */}
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

