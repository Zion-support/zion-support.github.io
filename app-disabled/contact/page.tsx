import React from 'react';
import { Helmet } from 'react-helmet-async';
'use client;
const ContactPage: React.FC = () => {const [formData, setFormData] = useState({
    name: '',    email: &apos;,
    company: &apos;,
    phone: &apos;,
    service: &apos;,
    message: &apos;;)
})const [isSubmitting, setIsSubmitting] = useState(false);

const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(idle);

const handleChange = useCallback((e: .ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement></HTMLInputElement>) => {;;

    setFormData(prev => ({
    message: '';)
})
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(&apos;idle&apos;);
const handleChange = useCallback((e: .ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement></HTMLInputElement>) => {}
    setFormData(prev => ({}
      ...prev,
      [e.target.name]: e.target.value;)
})))
}, []);

const handleSubmit = useCallback(async (e: .FormEvent) => {    setFormData(prev => ({;
  const handleSubmit = useCallback(async (e: .FormEvent) => {;
  const handleSubmit = useCallback (async (e: .FormEvent) => {;
    e.preventDefault();    setIsSubmitting(true);
      setFormData({
        name: ',
        email: ',
        company: &apos;,
        phone: &apos;,
        service: &apos;,
message: &apos;]
    });]
    } catch (error) {
      setSubmitStatus(&apos;error)]
      setSubmitStatus(&apos;error);

    } finally {
      setIsSubmitting(false);

  }, []);

  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
      
        <title>Contact Us - Zion Tech Group | Get in Touch<
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get a free consultation, quote, or support. Call +1-302-464-0950 or email kleber@ziontechgroup.com 
        <meta name="keywords" content="contact us, AI consulting, IT support, free consultation, get quote, technical support 
      <

      <{/* Hero Section *
      <section className="relative py-20 px-4 overflow-hidden>)
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse 
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: &apos;1s }}

        <div className="relative max-w-7xl mx-auto text-center>
          <h1 className="text-5xl md: text-7xl font-bold text-white mb-6 leading-tight>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Contact - Zion Tech Group</title>
        <meta name="description" content="Contact Zion Tech Group for advanced AI and IT solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Contact Us
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact our experts for consultation and support." />
        <meta name="keywords" content="contact, AI consulting, IT support, technology consultation" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Helmet>
      
      {/* Hero Section */}

      <section className="relative py-20 px-4 overflow-hidden></section>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s }} />
        <div className="relative max-w-7xl mx-auto text-center></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight></h1>
            Get in
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent></span>
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with our team for advanced AI and IT solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
            <p className="text-gray-300">
              Our contact page is under development. Please check back later for updates.
            </p>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        </label>
                      <div className="relative">
                        <className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-solutions">AI Solutions</option>
                      <option value="it-services">IT Services</option>
                      <option value="cloud-migration">Migration</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your project and how we can help..."
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
        </div>
      </div>
  );
}
      {/* Contact Form and Info *
      <section className="py-20 px-4>
        <div className="max-w-7xl mx-auto>
          <div className=grid grid-cols-1 l,
    g:grid-cols-2 gap-12>
            {/* Contact Form *
            <div className=bg-white/5 backdrop-blur-sm border border-white
              <h2 className="text-3xl font-bold text-white mb-6>Send us a message<
              
              {submitStatus === &apos;success&apos; && (<div className=mb-6 p-4 bg-green-500/20 border border-green-500
                  <Circle className="w-5 h-5 text-green-400 mr-2 
                  <span className="text-green-400>Message sent successfully!<
                <)
              )}

              {submitStatus === &apos;error&apos; && (<div className=mb-6 p-4 bg-red-500/20 border border-red-500
                  <span className="text-red-400>Failed to send message. Please try again.<
                  and well get back to you within 24 hours.
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2"></label>
                    Message *
                  <
                  <textarea
                    id="message"
                    name="message"
                    value = { formData.message };
                    onChange = { handleChange };
                    rows = { 5 };

                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus: ring-2 focus:ring-cyan-500 focu,
    s:border-transparent"
                    placeholder="Tell us about your project..."
                  
                <

                <button
                  type="submit"
                  disabled = { isSubmitting };
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover: from-purple-600 hover:to-blue-700 disabled:opacity-50 disable,
    d:cursor-not-allowed text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  {isSubmitting ? (<>}
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"><
                      Sending...
                    <)
                  ) : (<>
                      
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Get in touch<
                <p className="text-gray-300 mb-8">
                  We&apos;re here to help you succeed. Reach out to us through any of the channels below, 
                  and we&apos;ll get back to you within 24 hours.
                <
              <

              <div className="space-y-6>
                <div className="flex items-start space-x-4>
                  <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0>
                    
                    <h3 className="text-lg font-semibold text-white mb-1><
                    <p className="text-gray-300>+1-302-464-0950<
                    <p className="text-sm text-gray-400>Mon-Fri 9AM-6PM EST<
                  <
                <

                <div className="flex items-start space-x-4>
                  <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0>
                    
                    <h3 className="text-lg font-semibold text-white mb-1>Email<
                    <p className="text-gray-300>kleber@ziontechgroup.com<
                    <p className="text-sm text-gray-400">Well respond within 24 hours<
                  <
                <

                <div className="flex items-start space-x-4>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0>
                    
                    <h3 className="text-lg font-semibold text-white mb-1>Office<
                    <p className="text-gray-300>364 E Main St STE 1008<
                    <p className="text-gray-300>Middletown, DE 19709<
                  <
                <

                <div className="flex items-start space-x-4>
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0>
                    
                    <h3 className="text-lg font-semibold text-white mb-1>Business Hours<
                    <p className="text-gray-300>Monday - Friday: 9:00 AM - 6:00 PM<
                    <p className="text-gray-300>Saturday: 10:00 AM - 4:00 PM<
                    <p className="text-gray-300>Sunda,
    y: Closed<
                  <
                <
              <
            <
          <
        <
      <

      <Footer 
    <
  );

)]
    };

};

export default ContactPage;}
