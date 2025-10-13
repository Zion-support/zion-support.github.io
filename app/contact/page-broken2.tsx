<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PageBroken2Page() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Page-broken2 - Zion Tech Group</title>
        <meta name="description" content="Advanced Page-broken2 solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page-broken2
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
=======
'use client';';
import React from 'react';';'
'use client';';
import React, {useState, useCallback}from 'react';';';
import {Helmet}}from 'react-helmet-async';';';
import {Phone,}
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';'

  MapPin,

  Clock,

  Send,;
const handleSubmit = async (e: React.FormEvent) => {,
>>>>>>> origin/main
    e.preventDefault();
    setIsSubmitting(true)
    setSubmitStatus('idle')'
try {// Simulate form submission,}
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');'
      setFormData({)
        name: '','
        email: '','
        company: '','
        phone: '','
        service: '','
        budget: '','
        timeline: '','
        message: '''
      });
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      setSubmitStatus('error');'
    } finally {
  // TODO: Add properties
}
  // TODO: Add properties
}
      setIsSubmitting(false);
    }
  };

      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')'
      setFormData()
      })
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    setSubmitStatus('error')'
  }
    } finally {
  // TODO: Add properties
}
  // TODO: Add properties
}
    setIsSubmitting(false)
  }
    }
>>>>>>> origin/main
  }
const services = [
  // TODO: Add items
]
  // TODO: Add items
]
    'AI Solutions','
    'Cloud Computing','
    'Mobile App Development','
    'Web Development','
    'Data Analytics','

    'Cybersecurity','

    'DevOps','

    'Consulting','

    'Other';'
  ];];];
const contactInfo = [
  // TODO: Add items
]
  // TODO: Add items
]
    {icon: Phone,
      title: 'Phone','
      details: '+1 (302) 464-0950','
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
<meta name="description" content="AI-powered solution" />"
<meta name="keywords" content="AI, artificial intelligence, business solutions" /></Helmet>"
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20"></div>"
<div className="container mx-auto px-4"></div>"
          {/* Header */} <div className="text-center mb-16"></div>"
<h1>Get in;</h1>
<span>{' '</span>}Touch;'
              </span></h1>
<p>Ready to transform your business? Let's discuss your project and explore;</p>'
>>>>>>> origin/main
              how our AI and IT solutions can help you achieve your goals.
            </p></div>
</section></div>})}
{submitStatus === 'error' && (;'
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"></div>"
<span className="text-red-400">Failed to send message. Please try again.</span></div>})}"
<form>
<div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,"
                  <div />
<label>
                      Full Name *
                    </label>
<div className="relative"></div>"
<User />
<input /></div>
<div / /></div>
<label></label>
                      Email Address *
                    </label>
<div className="relative"></div>"
<Mail />
<input /></div>
</div>
<div className="grid grid-cols-1 md: grid-cols-2 gap-6"></div>,"
                  <div />
<label>
                      Company;
                    </label>
<div className="relative"></div>"
<Building />
<input /></div>
<div />
<label>
                      Phone Number;
                    </label>
<div className="relative"></div>"
<Phone />
<input /></div>
</div>
<div / /></div>
<label></label>
                    Service Interest,
                  </label>
<div className="relative"></div>"
<Globe>
<select>
<option value="">Select a service</option>"
                      {services.map((service) => (} <option>

                          {service} </option>
                      ))}

                    </select></div>
</div>
<div / /></div>
<label></label>
                    Message *
                  </label>
<div className="relative"></div>"
<MessageCircle />
<textarea /></div>
<button>{isSubmitting ? (;</button>
<>
<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>"
<span>Sending...</span></>
                  ) : (
  // TODO: Add parameters
)
                    <>
<Send>
<span>Send Message</span></>})}
                </button></form>
</div>
            {/* Contact Information */} <div className="space-y-8"></div>"
<div />
<h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>"
<p>We're here to help! Reach out to us through any of these channels;</p>'
                  and we'll get back to you as soon as possible.'
                </p></div>
              {/* Contact Information */} <div className="space-y-8"></div>"
<div />
<h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>"
<p>We're here to help you transform your business with cutting-edge AI and technology solutions.</p></p>'
</div>
<div className="space-y-6"></div>"
<div className="flex items-center"></div>"
<div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4"></div>"
<Phone />
<div />
<h3>

                        {info.title} </h3>
<p>{info.details</p>} </p>
<p>{info.description</p>} </p>
<div className="relative">"
<User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />"
<input
                        type="text""
                        name="name""
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500""
                        placeholder="Your full name""
                      /></div>
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-2">"
                      Email Address *
                    </label>
<div className="relative">"
<Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />"
<input
                        type="email""
                        name="email""
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500""
                        placeholder="your@email.com""
                      /></div>
</div></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
<div>
<label className="block text-sm font-medium text-gray-300 mb-2">"
                      Company
                    </label>
<div className="relative">"
<Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />"
<input
                        type="text""
                        name="company""
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500""
                        placeholder="Your company""
                      /></div>
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-2">"
                      Phone Number
                    </label>
<div className="relative">"
<Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />"
<input
                        type="tel""
                        name="phone""
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500""
                        placeholder="+1 (555) 123-4567""
                      /></div>
</div></div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-2">"
                    Service Interest
                  </label>
<div className="relative">"
<Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />"
<select
                      name="service""
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500""
                    >
<option value=">Select a service</option>""
                      {services.map((service) => (
  // TODO: Add parameters
)
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select></div>
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-2">"
                    Message *
                  </label>
<div className="relative">"
<MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />"
<textarea
                      name="message""
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 resize-none""
                      placeholder="Tell us about your project, goals, or any questions you have...""
                    />
<$2 />
                  type="submit""
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2""
                >
                  {isSubmitting ? (
  // TODO: Add parameters
)
                    <>
<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>"
<span>Sending...</span>

                  ) : (
  // TODO: Add parameters
)
                    <>
</>
<Send className="w-5 h-5" />"
<span>Send Message</span></div>
</button></form>
            ))

            {/* Contact Information */}
            <div className="space-y-8">"
<div>
<h2 className="text-3xl font-bold text-white mb-6">Contact Information</h2>"
<p className="text-lg text-gray-300 mb-8">"
                  We're here to help! Reach out to us through any of these channels '
                  and we'll get back to you as soon as possible.'
              {/* Contact Information */}
              <div className="space-y-8">"
<div>
<h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>"
<p className="text-gray-300 mb-8">"
                    We're here to help you transform your business with cutting-edge AI and technology solutions.'
                  </p></div>
<div className="space-y-6">"
<div className="flex items-center">"
<div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">"
<Phone className="w-6 h-6 text-white" /></div>"
<div>
<h3 className="text-lg font-semibold text-white mb-1">"
                        {info.title}
                      </h3>
<p className="text-cyan-400 font-medium mb-1">"
                        {info.details}
                      </p>
<p className="text-gray-300 text-sm">"
                        {info.description}

                      </p>
>>>>>>> origin/main
                    </div></div>
<div className="flex items-center">"
<div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">"
<Mail className="w-6 h-6 text-white" /></div>"
<div>
<h3 className="text-lg font-semibold text-white">Email</h3>"
<p className="text-gray-300">info@ziontechgroup.com</p></div>"
</div>
<p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>,"
>>>>>>> origin/main
                    </div></div>
</div></div>
            ))
          </div></section>
</div></div>

  );
};
;
export default ContactPage;
>>>>>>> cursor/delete-records-a75e
=======

>>>>>>> cursor/fix-errors-and-merge-to-main-9be1
=======
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Page Broken2 - Zion Tech Group</title>
        <meta name="description" content="Advanced page broken2 solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Broken2
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
            <p className="text-gray-600">
              Advanced technology integration and optimization.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
            <p className="text-gray-600">
              Scalable and secure implementation.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6053
