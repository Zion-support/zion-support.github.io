<<<<<<< HEAD
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
const Pagebroken2Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page Broken2 | Zion Tech Group</title>
        <meta
          name="description"
          content="Professional page broken2 services by Zion Tech Group"
        />
=======
'use client';
<<<<<<< HEAD
import React from 'react'
'use client'
=======
import React from 'react';
'use client';
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
import React, { useState, useCallback } from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import {Phone,}
  Mail,

  MapPin,

  Clock,

  Send,

  CheckCircle;} from 'lucide-react'
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({)
=======
import { Helmet } from 'react-helmet-async'
import {
    Phone,
  Mail,
  MapPin,
  Clock,
  Send,
<<<<<<< HEAD
  CheckCircle
  }
} from 'lucide-react'
const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({
=======
} from 'lucide-react';
;
const ContactPage: React.FC = () => {
const [formData, setFormData] = useState({
};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
    name: '',
    email: '',
    company: '',
phone: '',
    service: '',
    budget: '',
    timeline: '',
<<<<<<< HEAD
    message: '',}})
const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {,}const {name, value}}= e.target;
    setFormData(prev => ({)
    ...prev,
      [name]: value;}}));
  }, []);
const handleSubmit = async (e: React.FormEvent) => {,
    e.preventDefault();
    setIsSubmitting(true)
    setSubmitStatus('idle')
try {// Simulate form submission,}
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({)
=======
<<<<<<< HEAD
    message: ''
  }
  })
const [isSubmitting, setIsSubmitting] = useState(false)
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {}

    const { name, value } = e.target
=======
    message: '';)
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement></HTMLInputElement>) => {;
const { name, value } = e.target;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    setFormData(prev => ({
    ...prev,
      [name]: value
  }
    }))
  }, [])
const handleSubmit = async (e: React.FormEvent) => {
<<<<<<< HEAD
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
try {
      // Simulate form submission,

      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
=======
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value]
    });)]
    }, []);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    try {
      /
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      setFormData({
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',
<<<<<<< HEAD
        message: '',}})
    } catch (error) {setSubmitStatus('error')}} finally {setIsSubmitting(false)}}}
=======
<<<<<<< HEAD
        message: ''
  }
      })
=======
message: '']
    });]
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
    } catch (error) {
    setSubmitStatus('error')
  }
    } finally {
<<<<<<< HEAD
    setIsSubmitting(false)
  }
    }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
  }
=======
      setIsSubmitting(false)]
    };
  };
;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
const services = [
];
    'AI Solutions',
    'Cloud Computing',
    'Mobile App Development',
    'Web Development',
    'Data Analytics',
<<<<<<< HEAD

    'Cybersecurity',

    'DevOps',

    'Consulting',

    'Other'
  ]
const contactInfo = [
    {icon: Phone,
=======
    'Cybersecurity',
    'DevOps',
    'Consulting',
    'Other'
  ]
const contactInfo = [
<<<<<<< HEAD
    {
    icon: Phone,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri 9AM-6PM EST',},
    {icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours',},
    {icon: MapPin,
      title: 'Address',
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801',
<<<<<<< HEAD
      description: 'Visit our office',},
    {icon: Clock,
=======
      description: 'Visit our office'
  },
    {
    icon: Clock,
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM',
      description: 'Eastern Time',}}
  ]
return (
    <>
  <Helmet />
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
<<<<<<< HEAD
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
      </Helmet>

      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Page Broken2
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Professional page broken2 services by Zion Tech Group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagebroken2Page;
=======
        <meta name="description" content="Advanced AI solutions" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20"></div>
        <div className="container mx-auto px-4"></div>
          {/* Header */}
          <div className="text-center mb-16"></div>
            <h1>
              Get in;
              <span>
                {' '}Touch;
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Ready to transform your business? Let's discuss your project and explore;
              how our AI and IT solutions can help you achieve your goals.</p>
          </div>
        </section>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
            {/* Contact Form */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              {
    submitStatus === 'success' && (;
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"></div>
                  <CheckCircle>
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.</span>
                </div>
  }
              )}
{
    submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"></div>
                  <span className="text-red-400">Failed to send message. Please try again.</span>
                </div>
  }
              )}
<form>
                <div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>
                  <div />
                    <label>
                      Full Name *
                    </label>
                    <div className="relative"></div>
                      <User>
                      <input>
                    </div>
                  </div>
                  <div />
                    <label>
                      Email Address *
                    </label>
                    <div className="relative"></div>
                      <Mail>
                      <input>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div />
                    <label>
                      Company
                    </label>
                    <div className="relative"></div>
                      <Building>
                      <input>
                    </div>
                  </div>
                  <div />
                    <label>
                      Phone Number
                    </label>
                    <div className="relative"></div>
                      <Phone>
                      <input>
                    </div>
                  </div>
                </div>
                <div />
                  <label>
                    Service Interest,
                  </label>
                  <div className="relative"></div>
                    <Globe>
                    <select>
                      <option value="">Select a service</option>
                      {
    services.map((service) => (
  }
                        <option>

                          {service}
                        </option>
                      ))}

                    </select>
                  </div>
                </div>
                <div />
                  <label>
                    Message *;
                  </label>
                  <div className="relative"></div>
                    <MessageCircle>
                    <textarea>
                  </div>
                </div>
                <button>
                  {
    isSubmitting ? (;
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send>
                      <span>Send Message</span>
                    </>
  }
                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className="space-y-8"></div>
              <div />
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We're here to help! Reach out to us through any of these channels
                  and we'll get back to you as soon as possible.</p>
              </div>
              {/* Contact Information */}
              <div className="space-y-8"></div>
                <div />
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                  <p>
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p>
                </div>
                <div className="space-y-6"></div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4"></div>
                      <Phone>
                    </div>
                    <div />
<h3>

                        {info.title}
                      </h3>
                      <p>
                        {info.details}
                      </p>
                      <p>
                        {info.description}

                      </p>
                    </div>
                  </div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4"></div>
                      <Mail>
                    </div>
                    <div />
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4"></div>
                      <MapPin>
                    </div>
                    <div />
                      <h3 className="text-lg font-semibold text-white">Address</h3>
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-center"></div>
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4"></div>
                      <Clock>
                    </div>
                    <div />
                      <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
</div>
<<<<<<< HEAD
  )
}
export default ContactPage
=======
[
        {
      icon: Phone,
      title: 'Phone',
      details: '+1 (302) 464-0950',
      description: 'Mon-Fri 9AM-6PM EST']
    },
        {
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'We respond within 24 hours']
    },
        {
      icon: MapPin,
      title: 'Address',
      details: '123 Tech Street, Suite 100\nWilmington, DE 19801',
      description: 'Visit our office']
    },
        {
      icon: Clock,
      title: 'Business Hours',
      details: 'Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - ,
    4:00 PM',
      description: 'Eastern Time'
    };
  ];
  return (
    <div>
        <title>Contact Us - Zion Tech Group | Get in Touch<
        <meta name="description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs." 
        <meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch" 
      <
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="container mx-auto px-4">
          {/* Header *
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Get in
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"></span>
                {' '}Touch
              <
            <
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your project and explore 
              how our AI and IT solutions can help you achieve your goals.
            <
          <
        <
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form *
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message<
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500
                  <CheckCircle className="w-5 h-5 text-green-400" 
                  <span className="text-green-400">Message sent successfully! We'll get back to you soon.<
                <
              )};
              {submitStatus === 'error' && (<div className="mb-6 p-4 bg-red-500/20 border border-red-500
                  <span className="text-red-400">Failed to send message. Please try again.<
                <)
              )};
              <form onSubmit={handleSubmit} className="space-y-6"></form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Full Name *
                    <
                    <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    <
                    <div className="relative">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                    <
                    <div className="relative">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    <
                    <div className="relative">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest
                  <
                  <div className="relative">
                      <option value="">Select a service<
                      {services.map((service) => (<option key={service} value={service}>
                          {service};
                        <)
                      ))};
                    <
                  <
                <
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                    Message *
                  <
                  <div className="relative">
                  {isSubmitting ? (<>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"><
                      <span>Sending...<
                    <)
                  ) : (<>
                      <Send className="w-5 h-5" 
                      <span>Send Message<
                    <)
                  )};
                <
              <
            <
            {/* Contact Information *
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information<
                <p className="text-lg text-gray-300 mb-8">
                  We're here to help! Reach out to us through any of these channels 
                  and we'll get back to you as soon as possible.
                <
              <
              {/* Contact Information *
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Get in Touch<
                  <p className="text-gray-300 mb-8">
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                  <
                <
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
<h3 className="text-lg font-semibold text-white mb-1">
                        {info.title};
                      <
                      <p className="text-cyan-400 font-medium mb-1">
                        {info.details};
                      <
                      <p className="text-gray-300 text-sm">
                        {info.description};
                      <
                    <
                  <
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <h3 className="text-lg font-semibold text-white">Email<
                      <p className="text-gray-300">info@ziontechgroup.com<
                    <
                  <
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mr-4">
                      <h3 className="text-lg font-semibold text-white">Address<
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105<
                    <
                  <
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                      <h3 className="text-lg font-semibold text-white">Business Hours<
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - ,
    4:00 PM<
                    <
                  <
                <
              <
            <
          <
        <
      <
<
)]
    };
export default ContactPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
=======
    </>
  );
};

export default ContactPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
