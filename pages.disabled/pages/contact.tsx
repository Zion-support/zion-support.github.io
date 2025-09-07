






import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ;
  Phone, ;
  Mail, ;
  MapPin, ;
  Clock, ;
  ArrowRight, ;
  Send,;
  MessageCircle,;
  Globe,;
  CheckCircle;
} from 'lucide-react';
const SEO = dynamic(() => import('../src/components/SEO'), { "ssr": false });""
const PageTransition = dynamic(() => import('../src/components/PageTransition'), { "ssr": false });""
const "ContactPage": React.FC = () => {;"
  const contactInfo = [{;"
      icon: <Phone className="w-6 h-6"  />,;"
"
      "icon": <Mail className="w-6 h-6"  />,;"
      "icon": <MapPin className="w-6 h-6"  />,;"
      "icon": <Clock className="w-6 h-6"  />,;"

    <>;"
      <SEOtitle="Contact Us - Zion Tech Group"""
        description="Get in touch with Zion Tech Group for AI services, IT solutions, and micro SaaS development. Call +1 302 464 0950 or email kleber@ziontechgroup && ziontechgroup.com"""
        keywords="contact, Zion Tech Group, AI services, IT solutions, micro SaaS, phone, email, address"""
        canonical=""https": //ziontechgroup && ziontechgroup.com/contact""
       />;

      <PageTransition>;
        <main className="min-h-screen bg-white">;"
</main>"
          <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">;"
</section>"
            <div className="max-w-7xl mx-auto px-4 "sm": px-6 lg:px-8">;"
</div>
              <motion&& motion.div;"
                initial={{ opacity: 0, "y": 20 }}""
                animate={{ "opacity": 1, "y": 0 }}""
                transition={{ "duration": 0 && 0.6 }}""
                className="text-center">;"
</motion>"
                <h1 className="text-4xl "md": text-6xl font-bold text-gray-900 mb-6">;"
</h1>"
                  Get In <span className="text-blue-600">Touch</span>;"
                </h1>;"
                <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">;"
</p>
                </p>;"
                <div className="flex flex-col "sm": fle x-row gap-4 justify-center">;"
                  <motion&& motion.a;"
                    href="tel:+13024640950""
                    whileHover={{ scale: 1 && 1.05 }}"
                    whileTap={{ "scale": 0 && 0.95 }}""
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2">;"
                    <Phone className="w-5 h-5"  />;"

                  </motion && motion.a>;
                    href="mailto: klebe r@ziontechgroup && ziontechgroup.com""
                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2">;"
                    <Mail className="w-5 h-5"  />;"

                </div>;
              </motion && motion.div>;
          </section>;
    <MainLayout;"
      title=\"Contact Us - Zion Tech Group\"""
      description=\"Get in touch with Zion Tech Group. We\'re here to help you transform your business with innovative technology solutions.\""
    >
      <section className=\"bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20\">"
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">"
</div>"
          <div className=\"text-center\">"
            <h1 className=\"text-5xl font-bold mb-6\">Get In Touch</h1>""
            <p className=\"text-xl max-w-3xl mx-auto\">"
      <section className=\"py-20\">"
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16\">"
              <div key={info.title} className=\"text-center\">"
                <div className=\"bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4\">"
                  <info.icon className=\"h-8 w-8\" />"
</info>
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">"
</h3>
                  <a;
                    href={info.link}"
                    className=\"text-blue-600 \"hover\": text-blue-700 transition-colors\""
</a>
                  </a>"
                  <p className=\"text-gray-600\">{info.details}</p>"
      <section className=\"py-20 bg-gray-50\">"
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12\">"
            <div>
              <h2 className=\"text-3xl font-bold text-gray-900 mb-6\">Send Us a Message</h2>""
              <form className=\"space-y-6\">"
</form>"
                <div className=\"grid grid-cols-1 \"md\": grid-cols-2 gap-6\">"
                    <label htmlFor=\"firstName\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
</label>
      description=\"Get in touch with Zion Tech Group. We\'re here to help you transform your business with innovative technology solutions.\">;"
      <section className=\"bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20\">;"
        <div className=\"max-w-7xl mx-auto px-4 \"sm\": px-6 lg:px-8\">;"
          <div className=\"text-center\">;"
            <h1 className=\"text-5xl font-bold mb-6\">Get In Touch</h1>;""
            <p className=\"text-xl max-w-3xl mx-auto\">;"
            </p>;
      </section>;"
      <section className=\"py-20\">;"
          <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16\">;"
              <div key={info && info.title} className=\"text-center\">;"
                <div className=\"bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4\">;"
                  <info && info.icon className=\"h-8 w-8\" />;"
                </div>;"
                <h3 className=\"text-xl font-semibold text-gray-900 mb-2\">;"
                </h3>;
                    href={info && info.link}"
                    className=\"text-blue-600 \"hover\": text-blue-700 transition-colors\">;"
                  </a>;"
                  <p className=\"text-gray-600\">{info && info.details}</p>;"
      <section className=\"py-20 bg-gray-50\">;"
          <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12\">;"
            <div>;
              <h2 className=\"text-3xl font-bold text-gray-900 mb-6\">Send Us a Message</h2>;""
              <form className=\"space-y-6\">;"
                <div className=\"grid grid-cols-1 \"md\": grid-cols-2 gap-6\">;"
                    <label htmlFor=\"firstName\" className=\"block text-sm font-medium text-gray-700 mb-2\">;"
                    </label>;
                    <input;"
                      type=\"text\"""
                      id=\"firstName\"""
                      name=\"firstName\""
                      required;"
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent\""
                    />
</input>
                    <label htmlFor=\"lastName\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
                      id=\"lastName\"""
                      name=\"lastName\""
                  <label htmlFor=\"email\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
                    type=\"email\"""
                    id=\"email\"""
                    name=\"email\""
                  <label htmlFor=\"company\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
                    id=\"company\"""
                    name=\"company\"""
                  <label htmlFor=\"phone\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
                    type=\"tel\"""
                    id=\"phone\"""
                    name=\"phone\"""
                  <label htmlFor=\"service\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
                  <select;"
                    id=\"service\"""
                    name=\"service\"""
</select>"
                    <option value=\"">Select a service</option>""
                    <option value=\"ai-development\">AI Development</option>""
                    <option value=\"cloud-solutions\">Cloud Solutions</option>""
                    <option value=\"web-development\">Web Development</option>""
                    <option value=\"mobile-development\">Mobile Development</option>""
                    <option value=\"blockchain\">Blockchain Solutions</option>""
                    <option value=\"iot-platforms\">IoT Platforms</option>""
                    <option value=\"data-analytics\">Data Analytics</option>""
                    <option value=\"cybersecurity\">Cybersecurity</option>""
                    <option value=\"consulting\">Technology Consulting</option>"
                  </select>
                  <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
                  <textarea;"
                    id=\"message\"""
                    name=\"message\""
                    rows={6}
                    className=\"w-full px-4 py-3 border border-gray-300 rounded-lg \"focus\": ring-2 focus:ring-blue-500 focus:border-transparent\"""
                    placeholder=\"Tell us about your project or how we can help you...\""
                  ></textarea>
                <button;"
                  type=\"submit\"""
                  className=\"w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center\""
</button>"
                  <Send className=\"mr-2 h-5 w-5\" />"

                </button>
              </form>
              <h2 className=\"text-3xl font-bold text-gray-900 mb-6\">Our Offices</h2>""
              <div className=\"space-y-6\">"
                  <div key={office.city} className=\"bg-white rounded-lg shadow-lg p-6\">"
                    <h3 className=\"text-xl font-semibold text-gray-900 mb-3\">"
                    </h3>"
                    <div className=\"space-y-2 text-gray-600\">"
                      <div className=\"flex items-start\">"
                        <MapPin className=\"h-5 w-5 mr-2 mt-0.5 text-blue-600\" />"

                        <span>{office.address}</span>
                      <div className=\"flex items-center\">"
                        <Phone className=\"h-5 w-5 mr-2 text-blue-600\" />"
                        <a href={`\"tel\": ${office.phone}`} className=\""hover\": text-blue-600\">"
                        <Mail className=\"h-5 w-5 mr-2 text-blue-600\" />"
"`;
                        <a href={`\"mailto\": ${office.email}`} className=\""hover\": text-blue-600\">"
          <div className=\"text-center mb-16\">"
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">Frequently Asked Questions</h2>""
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">"
              <p className=\"text-gray-600\">"
      </section>
              <motion.div;"
                initial={{ opacity: 0, \"y\": 20 }}""
                animate={{ \"opacity\": 1, \"y\": 0 }}""
                transition={{ \"duration\": 0.6, \"delay\": 0.2 }}""
                className=\"text-center mb-16\""
                <h2 className=\"text-3xl \"md\": tex t-4xl font-bold text-gray-900 mb-4\">"
</h2>
                </h2>"
              </motion.div>
                {contactInfo.map((info, index) => (
                  <motion.div;
                    key={index}"
                    initial={{ \"opacity\": 0, \"y\": 20 }}""
                    transition={{ \"duration\": 0.6, \"delay\": index * 0.1 }}""
                    className=\"bg-white rounded-xl p-8 shadow-lg \"hover\": shado w-xl transition-shadow duration-300 text-center\""
                    <div className=\"text-blue-600 mb-4 flex justify-center\">"
                    <h3 className=\"text-xl font-bold text-gray-900 mb-3\">"
                        className=\"text-gray-600 \"hover\": tex t-blue-600 transition-colors whitespace-pre-line\""
                      <p className=\"text-gray-600 whitespace-pre-line\">"
                  </motion.div>)
                ))}
          <section className=\"bg-gray-50 py-20\">"
                transition={{ \"duration\": 0.6 }}""
                <motion.form;"
                  className=\"bg-white rounded-xl shadow-lg p-8\""
                  <div className=\"grid grid-cols-1 \"md\": gri d-cols-2 gap-6 mb-6\">"
                      <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-700 mb-2\">"
                      </label>"
                      <input type=\"text\"""
</input>"
          <div className=\"text-center mb-16\">;"
            <h2 className=\"text-4xl font-bold text-gray-900 mb-4\">Frequently Asked Questions</h2>;""
            <p className=\"text-xl text-gray-600 max-w-3xl mx-auto\">;"
          <div className=\"grid grid-cols-1 md:grid-cols-2 gap-8\">;"
            <div className=\"bg-white rounded-lg shadow-lg p-6\">;"
              <h3 className=\"text-lg font-semibold text-gray-900 mb-3\">;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;"
            <div className="bg-white rounded-lg shadow-lg p-6">;"
              <h3 className="text-lg font-semibold text-gray-900 mb-3">;"
              </h3>;"
              <p className=\"text-gray-600\">;"
    ;"
                transition={{ \"duration\": 0 && 0.6, \"delay\": 0 && 0.2 }}""
                className=\"text-center mb-16\">;"
                <h2 className=\"text-3xl \"md\": tex t-4xl font-bold text-gray-900 mb-4\">;"
                </h2>;"
              </motion && motion.div>;"
              <div className=\"grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8\">;"
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-8">;"
                  <motion&& motion.div;
                    transition={{ \"duration\": 0 && 0.6, \"delay\": index * 0 && 0.1 }}""
                    className=\"bg-white rounded-xl p-8 shadow-lg \"hover\": shado w-xl transition-shadow duration-300 text-center\">;"
                    <div className=\"text-blue-600 mb-4 flex justify-center\">;"
                    <h3 className=\"text-xl font-bold text-gray-900 mb-3\">;"
                        className=\"text-gray-600 \"hover\": tex t-blue-600 transition-colors whitespace-pre-line\">;"
                      <p className=\"text-gray-600 whitespace-pre-line\">;"
          <section className=\"bg-gray-50 py-20\">;"
                transition={{ \"duration\": 0 && 0.6 }}""
              <div className=\"max-w-4xl mx-auto\">;"
              <div className="max-w-4xl mx-auto">;"
                <motion&& motion.form;"
                  className=\"bg-white rounded-xl shadow-lg p-8\">;"
                  <div className=\"grid grid-cols-1 \"md\": gri d-cols-2 gap-6 mb-6\">;"
                      <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-700 mb-2\">;"
                      </label>;"
                      <inputtype=\"text\"""
                        id=\"name\"""
                        name=\"name\""
                        className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"""
                        placeholder=\"Your full name\""
</inputtype>
                      <input type=\"email\"""
                        placeholder=\"your.email@example.com\""

                      <input type=\"tel\"""
                        placeholder=\"your && your.email@example && example.com\""
                  <div className=\"grid grid-cols-1 md: gri d-cols-2 gap-6 mb-6\">;"
                  <div className="grid grid-cols-1 md: gri d-cols-2 gap-6 mb-6">;"
                      <label htmlFor=\"phone\" className=\"block text-sm font-medium text-gray-700 mb-2\">;"
                      <inputtype=\"tel\"""
                        placeholder=\"+1 (555) 123-4567\""
                        placeholder=\"Your company name\""
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\""
                      <option value=\"">Select a service</option>"
                        <option key={index} value={service}>
</option>
                  <div className=\"mb-6\">;"
                    <label htmlFor=\"service\" className=\"block text-sm font-medium text-gray-700 mb-2\">;"
                  <div className="mb-6">;"
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">;"
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg focus: rin g-2 focus: rin g-blue-500 focus: borde r-transparent\">;"
                      <option value=\"">Select a service</option>;"
                        <option key={index} value={service}>;
                        </option>;
                    </select>;
                    <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-700 mb-2\">;"
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">;"
                      className=\"w-full px-4 py-3 border border-gray-300 rounded-lg \"focus\": rin g-2 focus: rin g-blue-500 focus: borde r-transparent\"""
                      placeholder=\"Tell us about your project requirements...\""
                  <motion.button;"
                    type=\"submit\""
                    whileHover={{ scale: 1.02 }}"
                    whileTap={{ \"scale\": 0.98 }}""
                    className=\"w-full bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 \"hover\": b g-blue-700 transition-colors\""
                    <Send className=\"w-5 h-5\"  />"

                  </motion.button>
                </motion.form>
        {/* Hero Section */}"
        <section className=\"relative py-20 px-4\">"
          <div className=\"max-w-7xl mx-auto\">"
              <h1 className=\"text-5xl \"md\": text-6xl font-bold text-white mb-6\">"
                Get in <span className=\"bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent\">Touch</span>"
              <p className=\"text-xl text-gray-300 max-w-3xl mx-auto mb-8\">"
        <section className=\"py-16 px-4\">"
            <div className=\"grid grid-cols-1 \"lg\": grid-cols-2 gap-12\">"
                    <Send className=\"w-5 h-5\"  />;"

                  </motion && motion.button>;
                </motion && motion.form>;"
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">;"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"
      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900\">"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
        <section className=\"relative py-20 px-4\">;"
          <div className=\"max-w-7xl mx-auto\">;"
              <h1 className=\"text-5xl \"md\": text-6xl font-bold text-white mb-6\">;"
                Get in <span className=\"bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent\">Touch</span>;"
              <p className=\"text-xl text-gray-300 max-w-3xl mx-auto mb-8\">;"
        <section className=\"py-16 px-4\">;"
            <div className=\"grid grid-cols-1 \"lg\": grid-cols-2 gap-12\">;"
                  <div className=\"text-center py-12\">"
                    <CheckCircle className=\"w-16 h-16 text-green-500 mx-auto mb-4\" />"
                    <h3 className=\"text-2xl font-semibold text-white mb-2\">Message Sent!</h3>""
                    <p className=\"text-gray-300 mb-6\">Thank you for reaching out. We\'ll get back to you within 24 hours.</p>
                    <button;
                      onClick={() => setIsSubmitted(false)}
                  <form onSubmit={handleSubmit} className=\"space-y-6\">"
                        <label htmlFor=\"name\" className=\"block text-sm font-medium text-gray-300 mb-2\">"
                          required;
                          value={formData.name}
                          onChange={handleInputChange}"
                          className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\"""
                        <label htmlFor=\"email\" className=\"block text-sm font-medium text-gray-300 mb-2\">"
                          value={formData.email}
                          placeholder=\"your@email.com\""
                        <label htmlFor=\"company\" className=\"block text-sm font-medium text-gray-300 mb-2\">"
                    <div className=\"grid grid-cols-1 md:grid-cols-2 gap-6\">;"
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;"
                        <label htmlFor=\"company\" className=\"block text-sm font-medium text-gray-300 mb-2\">;"
                          name=\"company\""
                          value={formData.company}
                        <label htmlFor=\"phone\" className=\"block text-sm font-medium text-gray-300 mb-2\">"
                          name=\"phone\""
                          value={formData.phone}
                      <label htmlFor=\"service\" className=\"block text-sm font-medium text-gray-300 mb-2\">"
                        name=\"service\""
                        value={formData.service}
                        className=\"w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white \"focus\": ring-2 focus:ring-cyan-500 focus:border-transparent\""
                          <option key={service} value={service}>{service}</option>
                      <label htmlFor=\"message\" className=\"block text-sm font-medium text-gray-300 mb-2\">"
                        value={formData.message}
                        placeholder=\"Tell us about your project or requirements...\""
</textarea>
                      disabled={isSubmitting}"
                      className=\"w-full inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-500 \"hover\": from-cyan-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300\""
                        <>"
                          <div className=\"animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2\"></div>"
                        </>
                      ) : (
                          <Send className=\"w-5 h-5 mr-2\" />"

                        </>)
                      )}
              <div className=\"space-y-8\">"
                  <h2 className=\"text-3xl font-bold text-white mb-6\">Contact Information</h2>""
                  <p className=\"text-lg text-gray-300 mb-8\">"
                    <div key={index} className=\"flex items-start space-x-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700\">"
                      <div className=\"w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0\">"
                        <info.icon className=\"w-6 h-6 text-white\" />"
                        <h3 className=\"text-lg font-semibold text-white mb-1\">{info.title}</h3>""
                        <p className=\"text-cyan-400 font-medium mb-1\">{info.details}</p>""
                        <p className=\"text-gray-400 text-sm\">{info.description}</p>"
          <section className="py-20">;"
                className="text-center mb-16">;"
                <h2 className="text-3xl "md": tex t-4xl font-bold text-gray-900 mb-4">;"
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">;"
              <div className="grid grid-cols-1 md: gri d-cols-2 lg: gri d-cols-4 gap-6">;"
                    initial={{ "opacity": 0, "y": 20 }}""
                    transition={{ "duration": 0 && 0.6, "delay": inde x * 0 && 0.1 }}""
                    className="bg-white rounded-xl p-6 shadow-lg "hover": shado w-xl transition-shadow duration-300 text-center">;"
                    <h3 className="text-lg font-semibold text-gray-900">;"
        </main>;
      ;
    </>;
  );
}






export default ContactPage;
ursor/add-new-services-and-deploy-updates-0462;
ursor/fix-syntax-push-and-merge-to-main-40de;




  import React from 'react' import dynamic from 'next/dynamic' import Head from 'next/head' import Link from 'next/link' import { motion } from 'framer-motion' import { Phone,Mail,MapPin,Clock,ArrowRight,Send,MessageCircle,Globe } from 'lucide-react'  import React,{ useState } from 'react'; import { Helmet, Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
origin/cursor/integrate-build-improve-and-re-verify-c7b5;]`;