<<<<<<< HEAD

import React, { useState } from 'react;'
import { Helmet } from 'react-helmet-async;'
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckIcon
} from '@heroicons/react/24/outline;'
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: ',''
    email: ',''
    company: ',''
    phone: ',''
    service: ',''
    message: '''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({}
      ...prev,})
      [name]: value;})
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',''
      details: '+1-302-464-0950',''
      description: 'Available 24/7''
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',''
      details: 'kleber@ziontechgroup.com',''
      description: 'Quick response guaranteed''
    },
    {
      icon: MapPinIcon,
      title: 'Address',''
      details: '364 E Main St STE 1008',''
      description: 'Middletown, DE 19709''
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',''
      details: 'Monday - Friday: 9:00 AM - 6:00 PM',''
      description: 'Weekend support available''
    }
  };
  const services = [
    'AI Solutions',''
    'Cybersecurity',''
    'Cloud Infrastructure',''
    'Micro SaaS Solutions',''
    '5G Technology',''
    'IT Services',''
    'Digital Transformation',''
    'Consulting''
  ];
  return (
    <></>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group. Contact us for AI solutions, cybersecurity, cloud infrastructure, and IT services. We're here to help transform your business." />'"'"'"'"'"
        <meta name="keywords" content="contact, AI solutions contact, cybersecurity contact, cloud infrastructure contact, IT services contact" />""
      </Helmet>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">""
        <div className="absolute inset-0 opacity-20">""
          <div className="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>""
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">""
          <div className="max-w-4xl mx-auto">""
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">""
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">""
              Ready to Transform Your Business?
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">""
              Let's discuss how our technology solutions can help you achieve your business goals. ''
              We're here to answer your questions and provide expert guidance.''
=======
import SEOHead from '../components/SEOHead';

const ContactPage: React.FC = () => {}
  const [formData, setFormData] = useState({};)
    name: '';
    email: '';
    company: '';
    phone: '';
    service: '';
    budget: '';
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {};
    setFormData({};)
      ...formData;
      [e.target.name]: e.target.value
    })
    },
    {}
  const handleSubmit = async (e: React.FormEvent) => {},
      e.preventDefault(),
      setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000)),
      setIsSubmitting(false),
      setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {},
      setIsSubmitted(false),
      setFormData({},)
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
      });
    }, 3000)
    },
    {}
  const contactMethods = [
    {},
      icon: Phone,
      title: 'Phone',
      details: '+1 302 464 0950',
      description: 'Call us for immediate assistance',
      action: 'tel:+13024640950'
    };
    {},
      icon: Mail,
      title: 'Email',
      details: 'kleber@ziontechgroup.com',
      description: 'Send us an email anytime',
      action: 'mailto:kleber@ziontechgroup.com'
    };
    {},
      icon: MapPin,
      title: 'Office',
      details: '364 E Main St STE 1008, Middletown DE 19709',
      description: 'Visit our headquarters',
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
    };
    {},
      icon: title: 'Hours',
      details: 'Mon-Fri: 9AM-6PM EST',
      description: 'We\'re here to help','
      action: null
    };
  ],
      const services = [
    'AI Solutions';
    'Micro SAAS Development';
    'IT Services';
    'Cloud Infrastructure';
    'Cybersecurity';
    'Mobile Development';
    'Web Development';
    'Data Analytics';
    'Custom Software';
    'Consulting'
  ],
      const budgetRanges = [
    'Under $10K';
    '$10K - $50K';
    '$50K - $100K';
    '$100K - $500K';
    '$500K+';
    'Not sure yet'
  ],
      return ()
    <>{}</>
      <Helmet></Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get in touch via phone, email, or our contact form. We're here to help transform your business." />'
        <meta name="keywords" content="contact, get in touch, AI solutions, IT services, consultation, support" />
        <link rel="canonical" href="https://ziontechgroup.com/contact" />
      </Helmet>

      {/* Hero Section */};
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16"></section>
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>

const ContactPage: React.FC = () => {
  return (
    <>
      <SEOHead title =" Contact Page - Zion Tech Group"";
        description="Zion Tech Group  Contact Page service page"";
      />
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4"> Contact Page</h1>";
          <p className ="text-gray-300">Coming soon...</p>";

        </div>
      </div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              Get in
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>
                {' '}Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Ready to transform your business with cutting-edge AI and IT solutions? 
              Let's discuss your project and explore how we can help you achieve your goals.'
>>>>>>> main
            </p>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Contact Form & Info */}
      <section className="py-20 bg-slate-900">""
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
          <div className="grid lg:grid-cols-2 gap-12">""
            {/* Contact Form */}
            <div className="bg-slate-800 rounded-xl p-8">""
              <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>""
              {isSubmitted ? (
                <div className="text-center py-12">""
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">""
                    <CheckIcon className="w-8 h-8 text-white" />""
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>""
                  <p className="text-gray-300 mb-6">Thank you for contacting us. We'll get back to you within 24 hours.</p>'"'"'"'"'"
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: ',''
                        email: ',''
                        company: ',''
                        phone: ',''
                        service: ',''
                        message: '''
                      });
                    }}
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300""
                  >
                    Send Another Message;
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">""
                  <div className="grid md:grid-cols-2 gap-6">""
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">""
                        Full Name *
                      </label>
                      <input
                        type="text""
                        id="name""
                        name="name""
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent""
                        placeholder="Your full name""
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">""
                        Email Address *
                      </label>
                      <input
                        type="email""
                        id="email""
                        name="email""
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent""
                        placeholder="your@email.com""
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">""
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">""
                        Company
                      </label>
                      <input
                        type="text""
                        id="company""
                        name="company""
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent""
                        placeholder="Your company name""
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">""
                        Phone Number
                      </label>
                      <input
                        type="tel""
                        id="phone""
                        name="phone""
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent""
                        placeholder="+1 (555) 123-4567""
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">""
                      Service Interest
                    </label>
                    <select
                      id="service""
                      name="service""
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent""
                    >
                      <option value=">Select a service</option>""
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">""
                      Message *
                    </label>
                    <textarea
                      id="message""
                      name="message""
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent""
                      placeholder="Tell us about your project or how we can help...""
                    />
                  </div>
                  <button
                    type="submit""
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2""
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}''
                    {!isSubmitting && <ArrowRightIcon className="w-5 h-5" />}""
                  </button>
                </form>
              )}
            </div>
            {/* Contact Information */}
            <div className="space-y-8">""
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>""
                <p className="text-gray-300 mb-8">""
                  Get in touch with us through any of the following methods. We're here to help ''
                  you find the right technology solutions for your business.
                </p>
              </div>
              <div className="space-y-6">""
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">""
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">""
                      <info.icon className="w-6 h-6 text-white" />""
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">{info.title}</h3>""
                      <p className="text-gray-300 text-lg">{info.details}</p>""
                      <p className="text-gray-400 text-sm">{info.description}</p>""
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-800 rounded-xl p-6">""
                <h3 className="text-xl font-bold text-white mb-4">Why Choose Us?</h3>""
                <ul className="space-y-3">""
                  <li className="flex items-center text-gray-300">""
                    <CheckIcon className="w-5 h-5 text-green-400 mr-3" />""
                    24/7 Expert Support
                  </li>
                  <li className="flex items-center text-gray-300">""
                    <CheckIcon className="w-5 h-5 text-green-400 mr-3" />""
                    Cutting-edge Technology
                  </li>
                  <li className="flex items-center text-gray-300">""
                    <CheckIcon className="w-5 h-5 text-green-400 mr-3" />""
                    Proven Track Record
                  </li>
                  <li className="flex items-center text-gray-300">""
                    <CheckIcon className="w-5 h-5 text-green-400 mr-3" />""
                    Custom Solutions
                  </li>
                </ul>
=======

      {/* Contact Methods */};
      <section className="py-20 bg-slate-800"></section>
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <h2 className="text-4xl font-bold text-white mb-4">How to Reach Us</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Choose the most convenient way to get in touch with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {contactMethods.map((method) => ()}
              <div key={index} className="group bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
        <div key={index} className="group bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-cyan-400 font-medium mb-2">{method.details}</p>
                <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                {method.action && ()}
                  <ahref={method.action},>
      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                  ></a
>
                    <className="w-4 h-4 mr-1" />
                    Contact Now
                  </a>
                )};
              </div>
            ))};
          </div>
        </div>
      </section>

      {/* Contact Form */};
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900"></section>
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <div className="text-center mb-12"></div>
              <h2 className="text-4xl font-bold text-white mb-4">Send Us a Message</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
                Fill out the form below and we'll get back to you within 24 hours.'
              </p>
            </div>

            {isSubmitted ? ()}
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center"></div>
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>'
>>>>>>> main
              </div>
            ) : ()
              <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8"></form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                    <label htmlFor="name" className="block text-white font-medium mb-2"></label>
                      Full Name *
                    </label>
                    <inputtype="text">
                      id="name"
                      name="name"
                      value={formData.name},
      onChange={handleChange},
      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div></div>
                    <label htmlFor="email" className="block text-white font-medium mb-2"></label>
                      Email Address *
                    </label>
                    <inputtype="email">
                      id="email"
                      name="email"
                      value={formData.email},
      onChange={handleChange},
      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                    <label htmlFor="company" className="block text-white font-medium mb-2"></label>
                      Company Name
                    </label>
                    <inputtype="text">
                      id="company"
                      name="company"
                      value={formData.company},
      onChange={handleChange},
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div></div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2"></label>
                      Phone Number
                    </label>
                    <inputtype="tel">
                      id="phone"
                      name="phone"
                      value={formData.phone},
      onChange={handleChange},
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
                    <label htmlFor="service" className="block text-white font-medium mb-2"></label>
                      Service Interested In
                    </label>
                    <selectid="service">
                      name="service"
                      value={formData.service},
      onChange={handleChange},
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    ></select
>
                      <option value="">Select a service</option>
                      {services.map((service) => ()}
                        <option key={index} value={service}>{service}</option>
                      ))};
                    </select>
                  </div>
                  <div></div>
                    <label htmlFor="budget" className="block text-white font-medium mb-2"></label>
                      Project Budget
                    </label>
                    <selectid="budget">
                      name="budget"
                      value={formData.budget},
      onChange={handleChange},
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    ></select
>
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => ()}
                        <option key={index} value={range}>{range}</option>
                      ))};
                    </select>
                  </div>
                </div>

                <div className="mb-8"></div>
                  <label htmlFor="message" className="block text-white font-medium mb-2"></label>
                    Project Details *
                  </label>
                  <textareaid="message">
                    name="message"
                    value={formData.message},
      onChange={handleChange},
      required
                    rows={6},
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <div className="text-center"></div>
                  <buttontype="submit">
                    disabled={isSubmitting},
      className="group bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center mx-auto disabled:transform-none disabled:shadow-none"
                  ></button
>
                    {isSubmitting ? ()}
                      <>{}</>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : ()
                      <>{}</>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )};
                  </button>
                </div>
              </form>
            )};
          </div>
        </div>
      </section>

      {/* Additional Contact Options */};
      <section className="py-20 bg-slate-800"></section>
        <div className="container mx-auto px-4">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
            <h2 className="text-4xl font-bold text-white mb-4">Other Ways to Connect</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              We're available through multiple channels to ensure you can reach us when you need us.'
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
              <MessageSquare className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
              <p className="text-gray-300 mb-4">Chat with our team in real-time for immediate assistance.</p>
              <button className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"></button>
                Start Chat
              </button>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 text-center"></div>
              <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Schedule Meeting</h3>
              <p className="text-gray-300 mb-4">Book a consultation call at your convenience.</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"></button>
                Book Now
              </button>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 text-center"></div>
              <Headphones className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Support Center</h3>
              <p className="text-gray-300 mb-4">Get help with existing projects and technical issues.</p>
              <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"></button>
                Get Support
              </button>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
=======

>>>>>>> main
    </>
  ),
};

export default ContactPage;