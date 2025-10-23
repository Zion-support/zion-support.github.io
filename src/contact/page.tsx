'use client'
import React, { useState } from 'react'
import { Send } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, Phone, Mail } from 'lucide-react'
import { MapPin, Clock } from 'lucide-react';
'use client';
import React, { useState } from 'react';
import { Send, CheckCircle, Phone, Mail, MapPin, Check, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import React, {useState} from 'react';
import {Send, CheckCircle, Phone, Mail} from 'lucide-react';
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';

const ContactPage: React.FC = () => {const [formDatasetFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value;
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // // console.log('Form submitted:', formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
 });

  const [isSubmittedsetIsSubmitted] = useState(false);

  consthandleInputChange=(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {const{namevalue} = e.targetsetFormData(prev=> ({...prev,
      [name]: value;
   }));
  };

  consthandleSubmit= (e: React.FormEvent) => {e.preventDefault();
    // Here you would typically send the form data to your backend
    // setIsSubmitted(true)
    // Reset form after3seconds
    setTimeout(() => {
  
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    }, 3000)
  }
     });
    },3000);
  };

  constservices= [
    'AI Services',
    'IT Services',
    'Micro SAAS Solutions',
    'Cloud Migration',
    'Cybersecurity',
    'DevOps & CI/CD',
    'Database Management',
    'Mobile App Development',
    'Custom Development',
    'Other'
  ]

  const achievements = [
    { icon: Users, text: '100+ Happy Clients' },
    { icon: Award, text: '50+ Successful Projects' },
    { icon: TrendingUp, text: '300% Average ROI' },
    { icon: Shield, text: '99.9% Uptime Guarantee' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Contact Us</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready to transform your business with cutting-edge AI and IT solutions?
            Get in touch with our experts for a free consultation.
          </p>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Get Your Free Consultation</h2>
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input;
                      type="text"
                      id="name"
                      name="name"
  constachievements= [
    {icon: Users, text: '10 0+ Happy Clients'},
    {icon: Award, text: '5 0+ Successful Projects'},
    {icon: TrendingUp, text: '30 0% Average ROI'},
    {icon: Shield, text: '9 9.9% Uptime Guarantee'}
  ];

  return (
  <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"><Navigation /><mainclassName="container mx-autopx-4py-16pt-24">{/* HeroSection */}
      <sectionclassName="text-centermb-16"><spanclassName="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"></className="text-4 xlmd:text-6 xl font-boldtext-whitemb-6"><spanclassName="bg-gradient-to-r from-cyan-400via-purple-50 0to-pink-500bg-clip-texttext-transparent"></className="bg-gradient-to-r from-cyan-400via-purple-50 0to-pink-500bg-clip-texttext-transparent">Contact Us</spa></h><spanclassName="text-xl text-gray-300mb-8 max-w-4xlmx-auto"></spa></className="text-xl text-gray-300mb-8 max-w-4xlmx-auto">Ready to transform your business with cutting-edge AI and IT solutions? 
            Get in touch with our experts for a free consultation.
        </p></sectio><divclassName="grid grid-cols-1 lg:grid-cols-2gap-12">{/* ContactForm */}
        <divclassName="bg-slate-80 0/50backdrop-blur-smrounded-xlp-8"><h2className="text-2 xl font-boldtext-whitemb-6">Get YourFreeConsultation</h>{isSubmitted ? (
            <divclassName="text-centerpy-8"><CheckCircleclassName="w-16h-1 6text-green-400mx-automb-4" /><h3className="text-xl font-boldtext-whitemb-2">ThankYou!</h><pclassName="text-gray-300">We'll get back to youwithin24hours.</p></di>)  : (
            <formonSubmit={handleSubmit}className="space-y-6"><divclassName="grid grid-cols-1md:grid-cols-2gap-6"><di v><labelhtmlFor="name"className="block text-sm font-medium text-gray-300mb-2">Full Name *
                  </labe><inputtype="text"
                     id="name"
                     name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                     requiredclassName="w-full px-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-nonefocus:ring-2 focus:ring-cyan-400/20" placeholder="Your fullname"
                    /></di><di v><labelhtmlFor="email"className="block text-sm font-medium text-gray-300mb-2">Email Address *
                  </labe><inputtype="email"
                     id="email"
                     name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required;
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20" placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company</label>
                    <input;
                      type="text"
                      id="company"
                      name="company"
                     requiredclassName="w-full px-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-nonefocus:ring-2 focus:ring-cyan-400/20" placeholder="your@email.com"
                    /></di></di><divclassName="grid grid-cols-1md:grid-cols-2gap-6"><di v><labelhtmlFor="company"className="block text-sm font-medium text-gray-300mb-2">Company</labe><inputtype="text"
                     id="company"
                     name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                     className="w-full px-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-nonefocus:ring-2 focus:ring-cyan-400/20" placeholder="Your companyname"
                    /></di><di v><labelhtmlFor="phone"className="block text-sm font-medium text-gray-300mb-2">Phone Number</labe><inputtype="tel"
                     id="phone"
                     name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20" placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest</label>
                  <select;
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea;
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required;
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20" placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                <button;
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                ></button>
                  <Send className="w-5 h-5 mr-2" />
                  Send Message</button>
              </form>
            )}
          </div>
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      +1 (302) 464-0950</a>
                    <p className="text-sm text-gray-400 mt-1">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      kleber@ziontechgroup.com</a>
                    <p className="text-sm text-gray-400 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
                    <p className="text-gray-300"></p>
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709<br />
                      United States</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                    <p className="text-gray-300"></p>
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - 4:00 PM EST<br />
                      Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Achievements */}
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <achievement.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <p className="text-sm text-gray-300">{achievement.text}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Quick Contact */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
              <p className="text-gray-300 mb-6">Call us now for urgent IT support or emergency services.</p>
              <a;
                href="tel:+13024640950"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (302) 464-0950</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
                     className="w-full px-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-nonefocus:ring-2 focus:ring-cyan-400/20" placeholder="(55 5)123-4567"
                    /></di></di><di v><labelhtmlFor="service"className="block text-sm font-medium text-gray-300mb-2">Service Interest</labe><selectid="service"
                   name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                   className="w-full px-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-nonefocus:ring-2 focus:ring-cyan-400/20"
                  ><optionvalue="">Selectaservice</optio>{services.map((serviceindex) => (
                   <optionkey={index} value={service}>{service}</optio>))}
                </selec></di><di v><labelhtmlFor="message"className="block text-sm font-medium text-gray-300mb-2">Message *
                </labe><textareaid="message"
                   name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    requiredrows={5}
                   className="w-full px-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-nonefocus:ring-2 focus:ring-cyan-400/20" placeholder="Tell us about your project and how we canhelp..."
                  /></di><
                 type="submit"
                 className="w-full bg-gradient-to-r from-cyan-50 0 to-purple-600text-white py-3 px-6 rounded-lg font-semiboldhover:from-cyan-600 hover:to-purple-700transition-all duration-300 hover:scale-105flexitems-centerjustify-center"
                ></
                 type="submit"
                 className="w-full bg-gradient-to-r from-cyan-50 0 to-purple-600text-white py-3 px-6 rounded-lg font-semiboldhover:from-cyan-600 hover:to-purple-700transition-all duration-300 hover:scale-105flexitems-centerjustify-center"
                ><SendclassName="w-5h-5mr-2" />Send Message</butto></for>)}
        </di>{/* ContactInformation */}
        <divclassName="space-y-8">{/* ContactDetails */}
          <divclassName="bg-slate-80 0/50backdrop-blur-smrounded-xlp-8"><h2className="text-2 xl font-boldtext-whitemb-6">GetInTouch</h><divclassName="space-y-6"><divclassName="flexitems-startspace-x-4"><divclassName="w-12h-12bg-cyan-50 0/20rounded-lg flex items-centerjustify-centerflex-shrink-0"><PhoneclassName="w-6 h-6text-cyan-400" /></di><di v><h3className="text-lg font-semiboldtext-whitemb-1">Phone</h><ahref="tel:+13024640950"className="text-cyan-400 hover:text-cyan-300transition-colors">+1 (30 2)464-0950</a><pclassName="text-sm text-gray-400mt-1">Mon-Fri9AM-6PMEST</p></di></di><divclassName="flexitems-startspace-x-4"><divclassName="w-12h-12bg-cyan-50 0/20rounded-lg flex items-centerjustify-centerflex-shrink-0"><MailclassName="w-6 h-6text-cyan-400" /></di><di v><h3className="text-lg font-semiboldtext-whitemb-1">Email</h><ahref="mailto:kleber@ziontechgroup.com"className="text-cyan-400 hover:text-cyan-300transition-colors">kleber@ziontechgroup.com</a><pclassName="text-sm text-gray-400mt-1">We respondwithin24hours</p></di></di><divclassName="flexitems-startspace-x-4"><divclassName="w-12h-12bg-cyan-50 0/20rounded-lg flex items-centerjustify-centerflex-shrink-0"><MapPinclassName="w-6 h-6text-cyan-400" /></di><di v><h3className="text-lg font-semiboldtext-whitemb-1">Address</h><spanclassName="text-gray-300"></spa></className="text-gray-300">364E Main St STE1008<br />Middletown,DE19709<br />United States</p></di></di><divclassName="flexitems-startspace-x-4"><divclassName="w-12h-12bg-cyan-50 0/20rounded-lg flex items-centerjustify-centerflex-shrink-0"><ClockclassName="w-6 h-6text-cyan-400" /></di><di v><h3className="text-lg font-semiboldtext-whitemb-1">BusinessHours</h><spanclassName="text-gray-300"></spa></className="text-gray-300">Monday - Friday: 9:00AM -6:00PMEST<br />Saturday:10:00AM -4:00PMEST<br />Sunday: Closed</p></di></di></di></di>{/* Achievements */}
          <divclassName="bg-gradient-to-r from-indigo-90 0/50to-purple-900/50rounded-xlp-8"><h3className="text-xl font-boldtext-whitemb-6">WhyChooseUs?</h><divclassName="gridgrid-cols-2gap-4">{achievements.map((achievementindex) => (
               <divkey={index}className="text-center"><divclassName="w-12h-12bg-cyan-50 0/20rounded-full flex items-center justify-centermx-automb-2"><achievement.iconclassName="w-6 h-6text-cyan-400" /></di><pclassName="text-smtext-gray-300">{achievement.text}</p></di>))}
            </di></di>{/* QuickContact */}
          <divclassName="bg-slate-80 0/50backdrop-blur-sm rounded-xlp-8text-center"><h3className="text-xl font-boldtext-whitemb-4">NeedImmediateAssistance?</h><pclassName="text-gray-300mb-6">Call us now for urgent IT support oremergencyservices.</p><ahref="tel:+13024640950"
               className="inline-flex items-center bg-gradient-to-r from-cyan-500to-purple-600text-white px-8 py-3 rounded-lg font-semiboldhover:from-cyan-600 hover:to-purple-700transition-all duration-300hover:scale-105"
              ><PhoneclassName="w-5h-5mr-2" />CallNow: (30 2) 464-0950</a></di></di></di></mai><Footer /></di>
  );
};

export default ContactPage;