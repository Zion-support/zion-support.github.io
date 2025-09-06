
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
 setErrors (newErrors);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

 setErrors (newErrors);
}
setIsSubmitting (true);
  {
  opacity: 0, y: -10
}animate= {
  {
export default EnhancedContactForm;
  const services = [;
    'AI & Machine LearningQuantum ComputingCybersecurityCloud InfrastructureData AnalyticsDigital TransformationOther';
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  ];
    }
    setErrors(newErrors);
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
      delete newErrors[name];
      setErrors(newErrors);
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
              </div>;
            </div>;
          </div>;
        </div>;
        {/* Contact Form */}
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 p-8">;
          <form onSubmit={handleSubmit} className="space-y-6">;
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">;
              <div>;
                <labelhtmlFor="name" className="block text-sm font-medium text-white/80 mb-2" htmlFor="input-
                  Full Name *
                ">;
                  Full Name *;
                </label>;
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData && formData.name}
                  onChange={handleInputChange}
                  onBlur={() => handleInputBlur('name')}
                  } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                  placeholder="Enter your full name";
                />;
                {errors && errors.name && (;
                  <motion&& motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-400 flex items-center gap-2">;
                    <AlertCircle className="w-4 h-4" />;
                    {errors && errors.name}
                  </motion && motion.p>;
                )}
                  Email Address *
                ">;
                  Email Address *;
                </label>;
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData && formData.email}
                  onChange={handleInputChange}
                  onBlur={() => handleInputBlur('email')}
                  } text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/20`}
                  placeholder="Enter your email address";
                />;
                {errors && errors.email && (;
                  <motion&& motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-2 text-sm text-red-400 flex items-center gap-2">;
                    <AlertCircle className="w-4 h-4" />;
                    {errors && errors.email}
                  </motion && motion.p>;
                )}
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
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform ${
                isSubmitting
                  ? 'bg-gray-600 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 hover:scale-105'
              } flex items-center justify-center gap-3`}>;
              {isSubmitting ? (;
                <>;
                  <Loader2 className="w-5 h-5 animate-spin" />;
                  Sending Message...;
                </>;
              ) : (;
                <>;
                  <Send className="w-5 h-5" />;
                  Send Message;
                </>;
              )}
            </button>;
          </form>;
        </div>;
      </div>;
export default EnhancedContactForm;
=======
    </section>);
}
;
export default EnhancedContactForm;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
