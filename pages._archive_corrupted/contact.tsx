const SEO = dynamic(() => import(\'../src/components/SEO\'), { \"ssr\": false })
const PageTransition = dynamic(() => import(\'../src/components/PageTransition\'), { \"ssr\": false })
const \"ContactPage\": React.FC = () => {
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
const SEO = dynamic(() => import(\'../src/components/SEO\'), { \"ssr\": false });
const PageTransition = dynamic(() => import(\'../src/components/PageTransition\'), { \"ssr\": false });
const \"ContactPage\": React.FC = () => {;

import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Link from 'next/link';




origin/cursor/integrate-build-improve-and-re-verify-c7b5
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Send,
  MessageCircle,
  Globe
} from 'lucide-react';

  const services = [\"AI & Machine Learning Solutions\",
    \"IT Infrastructure & Support\",
    \"Micro SaaS Development\",
    \"Cybersecurity Services\",
    \"Cloud & DevOps Solutions\",
    \"Blockchain Technology\",
    \"Digital Transformation\",
    \"Consulting & Strategy\"
  const services = ["AI & Machine Learning Solutions",
    "IT Infrastructure & Support",
    "Micro SaaS Development",
    "Cybersecurity Services",
    "Cloud & DevOps Solutions",
    "Blockchain Technology",
    "Digital Transformation",
    "Consulting & Strategy"

            <div className=\"bg-white rounded-lg shadow-lg p-6\">
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">

                {isSubmitted ? (
                  <div className=\"text-center py-12\">
                    <CheckCircle className=\"w-16 h-16 text-green-500 mx-auto mb-4\" />
                    <h3 className=\"text-2xl font-semibold text-white mb-2\">Message Sent!</h3>
                    <p className=\"text-gray-300 mb-6\">Thank you for reaching out. We\'ll get back to you within 24 hours.</p>
              <div className=\"bg-slate-800/50 rounded-2xl p-8 border border-slate-700\">;
                <h2 className=\"text-3xl font-bold text-white mb-6\">Send us a Message</h2>;
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">;
                <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>;
                {isSubmitted ? (;
                  <div className=\"text-center py-12\">;
                    <CheckCircle className=\"w-16 h-16 text-green-500 mx-auto mb-4\" />;
                    <h3 className=\"text-2xl font-semibold text-white mb-2\">Message Sent!</h3>;
                    <p className=\"text-gray-300 mb-6\">Thank you for reaching out. We\'ll get back to you within 24 hours.</p>;
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className=\"inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 \"hover\": from-cyan-600 hover:to-blue-600 transition-all duration-300\"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className=\"space-y-6\">
                    <div className=\"grid grid-cols-1 \"md\": grid-cols-2 gap-6\">
                      <div>
                        <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-300 mb-2\">
                          Full Name *
                        </label>
                        <input
                          type=\"text\"
                          id=\"name\"
                          name=\"name\"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                          placeholder=\"Your full name\"
                        />
                      </div>
                      <div>
                        <label htmlFor=\"email\" className=\"block text-sm font-medium text-gray-300 mb-2\">
                          Email Address *
                        </label>
                        <input
                          type=\"email\"
                          id=\"email\"
                          name=\"email\"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"

                    <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor=\"company\" className=\"block text-sm font-medium text-gray-300 mb-2\">
                          Company
                        </label>
                          placeholder=\"your@email && email.com\"
                        />;
                      </div>;
                    </div>;
                    <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">;
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                    <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">;
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                    <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">;
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;
                      <div>;
                        <label htmlFor=\"company\" className=\"block text-sm font-medium text-gray-300 mb-2\">;
                          Company;
                        </label>;
                        <input
                          type=\"text\"
                          id=\"company\"
                          name=\"company\"
                          value={formData.company}
                          onChange={handleInputChange}
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                          placeholder=\"Your company name\"
                        />
                      </div>
                      <div>
                        <label htmlFor=\"phone\" className=\"block text-sm font-medium text-gray-300 mb-2\">
                          Phone Number
                        </label>
                        <input
                          type=\"tel\"
                          id=\"phone\"
                          name=\"phone\"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                          placeholder=\"+1 (555) 123-4567\"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor=\"service\" className=\"block text-sm font-medium text-gray-300 mb-2\">
                        Service Interest
                      </label>
                      <select
                        id=\"service\"
                        name=\"service\"
                        value={formData.service}
                        onChange={handleInputChange}
                        className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                      >
                        <option value=\"">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-300 mb-2\">
                        Message *
                      </label>
                      <textarea
                        id=\"message\"
                        name=\"message\"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"
                        placeholder=\"Tell us about your project or requirements...\"
                      />
                    </div>
                    <button
                      type=\"submit\"
                      disabled={isSubmitting}
                      className=\"w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 \"hover\": from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300\"
                    >
                      {isSubmitting ? (
                        <>
                          <div className=\"animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2\"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className=\"w-5 h-5 mr-2\" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
              {/* Contact Information */}

                <div className=\"space-y-6\">
                <div className="space-y-6">
                <div className=\"space-y-6\">
                <div className="space-y-6">
                <div className=\"space-y-6\">
                <div className="space-y-6">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
                <div className=\"space-y-6\">
                <div className="space-y-6">
                <div className=\"space-y-6\">
                <div className="space-y-6">
origin/cursor/integrate-build-improve-and-re-verify-c7b5
          </section>
              <div className=\"space-y-8\">;
                <div>;
                  <h2 className=\"text-3xl font-bold text-white mb-6\">Contact Information</h2>;
                  <p className=\"text-lg text-gray-300 mb-8\">;
                    We\'re here to help you succeed. Reach out to us through any of the channels below, and we\'ll respond promptly.;
                  </p>;
                </div>;
                <div className=\"space-y-6\">;
                <div className="space-y-6">;
                <div className=\"space-y-6\">;
                <div className="space-y-6">;
                <div className=\"space-y-6\">;
                <div className="space-y-6">;
                  {contactInfo && contactInfo.map((info, index) => (;
                    <div key={index} className=\"flex items-start space-x-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700\">;
                      <div className=\"w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0\">;
                        <info && info.icon className=\"w-6 h-6 text-white\" />;
                      </div>;
                      <div>;
                        <h3 className=\"text-lg font-semibold text-white mb-1\">{info && info.title}</h3>;
                        <p className=\"text-cyan-400 font-medium mb-1\">{info && info.details}</p>;
                        <p className=\"text-gray-400 text-sm\">{info && info.description}</p>;
                      </div>;
                    </div>;
                  ))}
                </div>;
              </div>;
            </div>;
          </section>;
          {/* Services Overview */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, "y": 20 }}
                animate={{ "opacity": 1, "y": 0 }}
                transition={{ "duration": 0.6 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl "md": tex t-4xl font-bold text-gray-900 mb-4">
                  Our Services
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Comprehensive technology solutions to meet all your business needs
                </p>
              </motion.div>
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ "opacity": 0, "y": 20 }}
                    animate={{ "opacity": 1, "y": 0 }}
                    transition={{ "duration": 0.6, "delay": inde x * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-lg "hover": shado w-xl transition-shadow duration-300 text-center"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">
                      {service}
                    </h3>
                  </motion.div>
                ))}
}
export default ContactPage
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de


export default ContactPage
export default ContactPage
origin/cursor/integrate-build-improve-and-re-verify-c7b5