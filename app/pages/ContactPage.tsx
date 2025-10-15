} from '@heroicons/react/24/outline'";
import React, { useState } from 'react'
    <></>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta: name ="description" content="Get in touch with Zion Tech Group. Contact us for AI solutions, cybersecurity, cloud infrastructure, and IT services. We're here to help transform your business." />'"'"'"'"'";
        <meta: name ="keywords" content="contact, AI solutions contact, cybersecurity contact, cloud infrastructure contact, IT services contact" />";
      </Helmet>
      {/* Hero Section */}
      <section: className ="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">";
        <div: className ="absolute inset-0 opacity-20">";
          <div: className ="w-full h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20"></div>";
        </div>
        <div: className ="relative z-10 container mx-auto px-4 text-center">";
          <div: className ="max-w-4xl mx-auto">";
            <h1: className ="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">";
              Get In Touch
            </h1>
            <p: className ="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">";
              Ready to Transform Your Business?
            </p>
import SEOHead from '../components/SEOHead';";

const ContactPage: React.FC = () => {}
  const [formData, setFormData] = useState({};)
    name: '';";
    email: '';";
    company: '';";
    phone: '';";
    service: '';";
    budget: '';";
    message: ''";
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const: handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {};
    {}
  const: handleSubmit = async (e: React.FormEvent) => {},
    setTimeout(() => {},
      setIsSubmitted(false),
      setFormData({},)
      name: '',"
      email: '',"
      company: '',"
      phone: '',"
      service: '',"
      budget: '',"
      message: ''"
      })
    }, 3000)
    },
    {}
  const  contactMethods = [
    {},
      icon: Phone,
      title: 'Phone',"
      details: '+1 302 464 0950',"
      description: 'Call us for immediate assistance',"
      action: 'tel:+13024640950'"
    }
    {},
      icon: Mail,
      title: 'Email',"
      details: 'kleber@ziontechgroup.com',"
      description: 'Send us an email anytime',"
      action: 'mailto:kleber@ziontechgroup.com'"
    }
    {},
      icon: MapPin,
      title: 'Office',"
      details: '364 E Main St STE 1008, Middletown DE 19709',"
      description: 'Visit our headquarters',"
      action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'"
    }
    {},
      icon: title: 'Hours',"
      details: 'Mon-Fri: 9AM-6PM EST',"
      description: 'We\'re here to help','"
      action: null
    }
  ],
      const  services = [
    'AI Solutions'
    'Micro SAAS Development'
    'IT Services'
    'Cloud Infrastructure'
    'Cybersecurity'
    'Mobile Development'
    'Web Development'
    'Data Analytics'
    'Custom Software'
    'Consulting'"
  ],
      const: budgetRanges = [;
    'Under $10K';";
    '$10K - $50K';";
    '$50K - $100K';";
    '$100K - $500K';";
    '$500K+';";
    'Not sure yet'";
  ]
  return (
    <>
      <SEOHead= title ="Contact Us - Zion Tech Group""
        description="Get in touch with Zion Tech Group for AI solutions, IT services, and digital transformation consulting.""
      />
      <div  className ="min-h-screen bg-slate-900 text-white">"
        <div  className ="max-w-7xl mx-auto py-20 px-4">"
          <div  className ="text-center mb-16">"
            <h1  className ="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">"
              Contact Us
            </h1>
            <p  className ="text-xl text-gray-300 max-w-3xl mx-auto">"
              Ready to transform your business? Let's discuss your project and how we can help."
            </p>
          </div>

          <div  className ="grid grid-cols-1 lg:grid-cols-2 gap-12">"
            {/* Contact Form */}
            <div  className ="bg-slate-800 p-8 rounded-lg">"
              <h2  className ="text-3xl font-bold mb-6">Send us a message</h2>"
              {isSubmitted ? (
                <div  className ="text-center py-8">"
                  <div  className ="text-green-400 text-6xl mb-4">✓</div>"
                  <h3  className ="text-2xl font-bold mb-2">Message Sent!</h3>"
                  <p  className ="text-gray-300">We'll get back to you within 24 hours.</p>"
                </div>
              ) : (
                <form: onSubmit ={handleSubmit} className="space-y-6">"
                  <div  className ="grid grid-cols-1 md=grid-cols-2 gap-4">"
                    <div>
                      <label: className ="block text-sm font-medium mb-2">Name *</label>"
                      <input: type ="text""
                        name="name""
                        value={formData.name}
                        onChange={handleChange}
                        required= className ="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                      />
                    </div>
                    <div>
                      <label: className ="block text-sm font-medium mb-2">Email *</label>"
                      <input: type ="email""
                        name="email""
                        value={formData.email}
                        onChange={handleChange}
                        required= className ="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                      />
                    </div>
                  </div>

                  <div  className ="grid grid-cols-1 md=grid-cols-2 gap-4">"
                    <div>
                      <label: className ="block text-sm font-medium mb-2">Company</label>"
                      <input: type ="text""
                        name="company""
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                      />
                    </div>
                    <div>
                      <label: className ="block text-sm font-medium mb-2">Phone</label>"
                      <input: type ="tel""
                        name="phone""
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                      />
                    </div>
                  </div>

                  <div  className ="grid grid-cols-1 md=grid-cols-2 gap-4">"
                    <div>
                      <label: className ="block text-sm font-medium mb-2">Service Interest</label>"
                      <select: name ="service""
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                      >
                        <option: value ="">Select a service</option>"
                        {services.map(service => (
                          <option: key ={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label: className ="block text-sm font-medium mb-2">Budget Range</label>"
                      <select: name ="budget""
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                      >
                        <option: value ="">Select budget range</option>"
                        {budgetRanges.map(range => (
                          <option: key ={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label: className ="block text-sm font-medium mb-2">Message *</label>"
                    <textarea: name ="message""
                      value={formData.message}
                      onChange={handleChange}
                      required= rows ={5}
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent""
                      placeholder="Tell us about your project...""
                    />
                  </div>

                  <button  type ="submit""
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 disabled=opacity-50""
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}"
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div  className ="space-y-8">"
              <div>
                <h2  className ="text-3xl font-bold mb-6">Get in touch</h2>"
                <p  className ="text-gray-300 text-lg mb-8">"
                  We're here to help you succeed. Reach out to us through any of these channels."
                </p>
              </div>

              <div  className ="space-y-6">"
                {contactMethods.map((method, index) => (
                  <div  key ={index} className="flex items-start space-x-4">"
                    <div  className ="bg-blue-600 p-3 rounded-lg">"
                      <method.icon: className ="w-6 h-6 text-white" />"
                    </div>
                    <div>
                      <h3  className ="text-xl font-semibold mb-2">{method.title}</h3>"
                      <p  className ="text-gray-300 mb-1">{method.details}</p>"
                      <p  className ="text-sm text-gray-400">{method.description}</p>"
                      {method.action && (
                        <a  href ={method.action} 
                          className="text-blue-400 hover:text-blue-300 text-sm""
                        >
                          {method.title === 'Phone' ? 'Call now' : method.title === 'Email' ? 'Send email' : 'View on map'}"
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
              Let's discuss your project and explore how we can help you achieve your goals.'";

      {/* Contact Methods */}
      <section: className ="py-20 bg-slate-800"></section>"
        <div  className ="container mx-auto px-4">"
        <div  className ="container mx-auto px-4">"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p  className ="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            <h2  className ="text-4xl font-bold text-white mb-4">How to Reach Us</h2>"
            <p  className ="text-xl text-gray-300 max-w-3xl mx-auto"></p>"
              Choose the most convenient way to get in touch with our team.
            </p>
          </div>

          <div  className ="grid grid-cols-1 md=grid-cols-2 lg:grid-cols-4 gap-8"></div>"
            {contactMethods.map((method) => ()}
              <div  key ={index} className="group bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">"
        <div  key ={index} className="group bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">"
          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p  className ="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                  <method.icon: className ="w-8 h-8 text-white" />"
                </div>
                <h3  className ="text-xl font-semibold text-white mb-2">{method.title}</h3>"
                <p  className ="text-cyan-400 font-medium mb-2">{method.details}</p>"
                <p  className ="text-gray-300 text-sm mb-4">{method.description}</p>"
                {method.action && ()}
                  <ahref={method.action},>
      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium""
                  ></a
>
                    <className="w-4 h-4 mr-1" />";
            ))};
              <div: className ="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center"></div>";
                <CheckCircle: className ="w-16 h-16 text-green-400 mx-auto mb-4" />";
                <h3: className ="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>";
                <p: className ="text-gray-300">Thank you for contacting us. We'll get back to you soon.</p>'";";
                    <inputtype="text">";
                      id="name";
                      name="name";
                      value={formData.name},
      onChange={handleChange},
      required: className ="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                      placeholder="Enter your full name";
                    <inputtype="email">";
                      id="email";
                      name="email";
                      value={formData.email},
      onChange={handleChange},
      required: className ="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                      placeholder="Enter your email address";
                    <inputtype="text">";
                      id="company";
                      name="company";
                      value={formData.company},
      onChange={handleChange},
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                      placeholder="Enter your company name";
                    <inputtype="tel">";
                      id="phone";
                      name="phone";
                      value={formData.phone},
      onChange={handleChange},
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                      placeholder="Enter your phone number";
                    <selectid="service">";
                      name="service";
                      value={formData.service},
      onChange={handleChange},
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                    ></select
>
                      <option: value =">Select a service</option>";
                    <selectid="budget">";
                      name="budget";
                      value={formData.budget},
      onChange={handleChange},
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent";
                    ></select
>
                      <option: value =">Select budget range</option>";
                  <textareaid="message">";
                    name="message";
                    value={formData.message},
      onChange={handleChange},
      required: rows ={6},
      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none";
                    placeholder="Tell us about your project, goals, and any specific requirements...";
      className="group bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center mx-auto disabled:transform-none disabled:shadow-none";
                        <Send: className ="w-5 h-5 mr-2" />";
            )};
              <MessageSquare className="w-12 h-12 text-cyan-400 mx-auto mb-4" />";
              <h3: className ="text-xl font-semibold text-white mb-2">Live Chat</h3>";
              <p: className ="text-gray-300 mb-4">Chat with our team in real-time for immediate assistance.</p>";
              <button: className ="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"></button>";
            <div: className ="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 text-center"></div>";
              <Calendar className="w-12 h-12 text-purple-400 mx-auto mb-4" />";
              <h3: className ="text-xl font-semibold text-white mb-2">Schedule Meeting</h3>";
              <p: className ="text-gray-300 mb-4">Book a consultation call at your convenience.</p>";
              <button: className ="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"></button>";
            <div: className ="bg-slate-700/50 p-8 rounded-xl border border-slate-600/50 text-center"></div>";
              <Headphones className="w-12 h-12 text-green-400 mx-auto mb-4" />";
              <h3: className ="text-xl font-semibold text-white mb-2">Support Center</h3>";
              <p: className ="text-gray-300 mb-4">Get help with existing projects and technical issues.</p>";
              <button: className ="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"></button>";

};

export default ContactPage;]
