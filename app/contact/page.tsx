import React, { useState } from &amp;apos;react&amp;apos;;
import { Helmet } from &amp;apos;react-helmet-async&amp;apos;;
import { CheckCircle, Mail, Phone, MapPin, Clock, Send } from &amp;apos;lucide-react&amp;apos;;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: &amp;apos;&amp;apos;,
    email: &amp;apos;&amp;apos;,
    company: &amp;apos;&amp;apos;,
    phone: &amp;apos;&amp;apos;,
    subject: &amp;apos;&amp;apos;,
    message: &amp;apos;&amp;apos;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent&amp;lt;HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement&amp;gt;) =&amp;gt; {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) =&amp;gt; {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve =&amp;gt; setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: &amp;apos;Phone&amp;apos;,
      value: &amp;apos;+1 (555) 123-4567&amp;apos;,
      description: &amp;apos;Mon-Fri 9AM-6PM EST&amp;apos;
    },
    {
      icon: Mail,
      title: &amp;apos;Email&amp;apos;,
      value: &amp;apos;contact@ziontechgroup.com&amp;apos;,
      description: &amp;apos;We respond within 24 hours&amp;apos;
    },
    {
      icon: MapPin,
      title: &amp;apos;Address&amp;apos;,
      value: &amp;apos;123 Tech Street, Suite 100&amp;apos;,
      description: &amp;apos;San Francisco, CA 94105&amp;apos;
    },
    {
      icon: Clock,
      title: &amp;apos;Business Hours&amp;apos;,
      value: &amp;apos;Monday - Friday&amp;apos;,
      description: &amp;apos;9:00 AM - 6:00 PM EST&amp;apos;
    }
  ];

  const subjects = [
    &amp;apos;AI Services&amp;apos;,
    &amp;apos;IT Services&amp;apos;,
    &amp;apos;Cloud Services&amp;apos;,
    &amp;apos;Micro SAAS&amp;apos;,
    &amp;apos;Digital Transformation&amp;apos;,
    &amp;apos;5G Implementation&amp;apos;,
    &amp;apos;Other&amp;apos;
  ];

  return (
    &amp;lt;div className=&amp;quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&amp;quot;&amp;gt;
      &amp;lt;Helmet&amp;gt;
        &amp;lt;title&amp;gt;Contact Us - Zion Tech Group&amp;lt;/title&amp;gt;
        &amp;lt;meta name=&amp;quot;description&amp;quot; content=&amp;quot;Get in touch with Zion Tech Group for AI solutions, IT services, and digital transformation. Contact our experts today.&amp;quot; /&amp;gt;
        &amp;lt;meta name=&amp;quot;keywords&amp;quot; content=&amp;quot;contact, AI services, IT solutions, digital transformation, business consultation&amp;quot; /&amp;gt;
      &amp;lt;/Helmet&amp;gt;
      
      {/* Hero Section */}
      &amp;lt;section className=&amp;quot;relative py-20 px-4&amp;quot;&amp;gt;
        &amp;lt;div className=&amp;quot;max-w-7xl mx-auto text-center&amp;quot;&amp;gt;
          &amp;lt;h1 className=&amp;quot;text-5xl md:text-7xl font-bold text-white mb-6&amp;quot;&amp;gt;
            Contact
            &amp;lt;span className=&amp;quot;block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent&amp;quot;&amp;gt;
              Us
            &amp;lt;/span&amp;gt;
          &amp;lt;/h1&amp;gt;
          &amp;lt;p className=&amp;quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&amp;quot;&amp;gt;
            Ready to transform your business with AI and IT solutions? 
            Get in touch with our experts today.
          &amp;lt;/p&amp;gt;
        &amp;lt;/div&amp;gt;
      &amp;lt;/section&amp;gt;

      {/* Contact Info */}
      &amp;lt;section className=&amp;quot;py-20 px-4&amp;quot;&amp;gt;
        &amp;lt;div className=&amp;quot;max-w-7xl mx-auto&amp;quot;&amp;gt;
          &amp;lt;h2 className=&amp;quot;text-4xl font-bold text-white text-center mb-16&amp;quot;&amp;gt;
            Get in Touch
          &amp;lt;/h2&amp;gt;
          &amp;lt;div className=&amp;quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&amp;quot;&amp;gt;
            {contactInfo.map((info, index) =&amp;gt; {
              const Icon = info.icon;
              return (
                &amp;lt;div key={index} className=&amp;quot;bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center&amp;quot;&amp;gt;
                  &amp;lt;div className=&amp;quot;w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4&amp;quot;&amp;gt;
                    &amp;lt;Icon className=&amp;quot;w-6 h-6 text-white&amp;quot; /&amp;gt;
                  &amp;lt;/div&amp;gt;
                  &amp;lt;h3 className=&amp;quot;text-lg font-semibold text-white mb-2&amp;quot;&amp;gt;{info.title}&amp;lt;/h3&amp;gt;
                  &amp;lt;p className=&amp;quot;text-cyan-400 font-medium mb-1&amp;quot;&amp;gt;{info.value}&amp;lt;/p&amp;gt;
                  &amp;lt;p className=&amp;quot;text-gray-400 text-sm&amp;quot;&amp;gt;{info.description}&amp;lt;/p&amp;gt;
                &amp;lt;/div&amp;gt;
              );
            })}
          &amp;lt;/div&amp;gt;
        &amp;lt;/div&amp;gt;
      &amp;lt;/section&amp;gt;

      {/* Contact Form */}
      &amp;lt;section className=&amp;quot;py-20 px-4 bg-slate-800/30&amp;quot;&amp;gt;
        &amp;lt;div className=&amp;quot;max-w-4xl mx-auto&amp;quot;&amp;gt;
          &amp;lt;h2 className=&amp;quot;text-4xl font-bold text-white text-center mb-16&amp;quot;&amp;gt;
            Send us a Message
          &amp;lt;/h2&amp;gt;
          
          {isSubmitted ? (
            &amp;lt;div className=&amp;quot;bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center&amp;quot;&amp;gt;
              &amp;lt;div className=&amp;quot;w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-4&amp;quot;&amp;gt;
                &amp;lt;CheckCircle className=&amp;quot;w-8 h-8 text-white&amp;quot; /&amp;gt;
              &amp;lt;/div&amp;gt;
              &amp;lt;h3 className=&amp;quot;text-2xl font-bold text-white mb-4&amp;quot;&amp;gt;Message Sent!&amp;lt;/h3&amp;gt;
              &amp;lt;p className=&amp;quot;text-gray-300 mb-6&amp;quot;&amp;gt;
                Thank you for contacting us. We&amp;apos;ll get back to you within 24 hours.
              &amp;lt;/p&amp;gt;
              &amp;lt;button
                onClick={() =&amp;gt; {
                  setIsSubmitted(false);
                  setFormData({
                    name: &amp;apos;&amp;apos;,
                    email: &amp;apos;&amp;apos;,
                    company: &amp;apos;&amp;apos;,
                    phone: &amp;apos;&amp;apos;,
                    subject: &amp;apos;&amp;apos;,
                    message: &amp;apos;&amp;apos;
                  });
                }}
                className=&amp;quot;px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300&amp;quot;
              &amp;gt;
                Send Another Message
              &amp;lt;/button&amp;gt;
            &amp;lt;/div&amp;gt;
          ) : (
            &amp;lt;form onSubmit={handleSubmit} className=&amp;quot;bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50&amp;quot;&amp;gt;
              &amp;lt;div className=&amp;quot;grid md:grid-cols-2 gap-6 mb-6&amp;quot;&amp;gt;
                &amp;lt;div&amp;gt;
                  &amp;lt;label htmlFor=&amp;quot;name&amp;quot; className=&amp;quot;block text-white font-medium mb-2&amp;quot;&amp;gt;
                    Full Name *
                  &amp;lt;/label&amp;gt;
                  &amp;lt;input
                    type=&amp;quot;text&amp;quot;
                    id=&amp;quot;name&amp;quot;
                    name=&amp;quot;name&amp;quot;
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className=&amp;quot;w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&amp;quot;
                    placeholder=&amp;quot;Your full name&amp;quot;
                  /&amp;gt;
                &amp;lt;/div&amp;gt;
                &amp;lt;div&amp;gt;
                  &amp;lt;label htmlFor=&amp;quot;email&amp;quot; className=&amp;quot;block text-white font-medium mb-2&amp;quot;&amp;gt;
                    Email Address *
                  &amp;lt;/label&amp;gt;
                  &amp;lt;input
                    type=&amp;quot;email&amp;quot;
                    id=&amp;quot;email&amp;quot;
                    name=&amp;quot;email&amp;quot;
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className=&amp;quot;w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&amp;quot;
                    placeholder=&amp;quot;your.email@company.com&amp;quot;
                  /&amp;gt;
                &amp;lt;/div&amp;gt;
              &amp;lt;/div&amp;gt;

              &amp;lt;div className=&amp;quot;grid md:grid-cols-2 gap-6 mb-6&amp;quot;&amp;gt;
                &amp;lt;div&amp;gt;
                  &amp;lt;label htmlFor=&amp;quot;company&amp;quot; className=&amp;quot;block text-white font-medium mb-2&amp;quot;&amp;gt;
                    Company
                  &amp;lt;/label&amp;gt;
                  &amp;lt;input
                    type=&amp;quot;text&amp;quot;
                    id=&amp;quot;company&amp;quot;
                    name=&amp;quot;company&amp;quot;
                    value={formData.company}
                    onChange={handleChange}
                    className=&amp;quot;w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&amp;quot;
                    placeholder=&amp;quot;Your company name&amp;quot;
                  /&amp;gt;
                &amp;lt;/div&amp;gt;
                &amp;lt;div&amp;gt;
                  &amp;lt;label htmlFor=&amp;quot;phone&amp;quot; className=&amp;quot;block text-white font-medium mb-2&amp;quot;&amp;gt;
                    Phone Number
                  &amp;lt;/label&amp;gt;
                  &amp;lt;input
                    type=&amp;quot;tel&amp;quot;
                    id=&amp;quot;phone&amp;quot;
                    name=&amp;quot;phone&amp;quot;
                    value={formData.phone}
                    onChange={handleChange}
                    className=&amp;quot;w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&amp;quot;
                    placeholder=&amp;quot;+1 (555) 123-4567&amp;quot;
                  /&amp;gt;
                &amp;lt;/div&amp;gt;
              &amp;lt;/div&amp;gt;

              &amp;lt;div className=&amp;quot;mb-6&amp;quot;&amp;gt;
                &amp;lt;label htmlFor=&amp;quot;subject&amp;quot; className=&amp;quot;block text-white font-medium mb-2&amp;quot;&amp;gt;
                  Subject *
                &amp;lt;/label&amp;gt;
                &amp;lt;select
                  id=&amp;quot;subject&amp;quot;
                  name=&amp;quot;subject&amp;quot;
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className=&amp;quot;w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent&amp;quot;
                &amp;gt;
                  &amp;lt;option value=&amp;quot;&amp;quot;&amp;gt;Select a subject&amp;lt;/option&amp;gt;
                  {subjects.map((subject, index) =&amp;gt; (
                    &amp;lt;option key={index} value={subject}&amp;gt;
                      {subject}
                    &amp;lt;/option&amp;gt;
                  ))}
                &amp;lt;/select&amp;gt;
              &amp;lt;/div&amp;gt;

              &amp;lt;div className=&amp;quot;mb-8&amp;quot;&amp;gt;
                &amp;lt;label htmlFor=&amp;quot;message&amp;quot; className=&amp;quot;block text-white font-medium mb-2&amp;quot;&amp;gt;
                  Message *
                &amp;lt;/label&amp;gt;
                &amp;lt;textarea
                  id=&amp;quot;message&amp;quot;
                  name=&amp;quot;message&amp;quot;
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className=&amp;quot;w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none&amp;quot;
                  placeholder=&amp;quot;Tell us about your project or how we can help you...&amp;quot;
                /&amp;gt;
              &amp;lt;/div&amp;gt;

              &amp;lt;div className=&amp;quot;text-center&amp;quot;&amp;gt;
                &amp;lt;button
                  type=&amp;quot;submit&amp;quot;
                  disabled={isSubmitting}
                  className=&amp;quot;px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none&amp;quot;
                &amp;gt;
                  {isSubmitting ? (
                    &amp;lt;&amp;gt;
                      &amp;lt;div className=&amp;quot;inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2&amp;quot;&amp;gt;&amp;lt;/div&amp;gt;
                      Sending...
                    &amp;lt;/&amp;gt;
                  ) : (
                    &amp;lt;&amp;gt;
                      Send Message
                      &amp;lt;Send className=&amp;quot;w-5 h-5 ml-2 inline&amp;quot; /&amp;gt;
                    &amp;lt;/&amp;gt;
                  )}
                &amp;lt;/button&amp;gt;
              &amp;lt;/div&amp;gt;
            &amp;lt;/form&amp;gt;
          )}
        &amp;lt;/div&amp;gt;
      &amp;lt;/section&amp;gt;
    &amp;lt;/div&amp;gt;
  );
}