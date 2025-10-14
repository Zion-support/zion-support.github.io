import React from "react
import { Helmet }    from "react-helmet-async
    'AI Services','
    'IT Services','
    'Services','
    'Micro SAAS','
    'Digital Transformation','
    '5G Implementation','
      description: '9:00 AM - 6:00 PM EST'}'
    }
  ];
const subjects = [''
    'AI Services',''
    'IT Services',''
    'Services',''
    'Micro SAAS',''
    'Digital Transformation',''
    '5G Implementation',''
    'Other''
  ]""
  return (
    <div className="min-h-screen bg-white"><Helmet><title>Contact - Zion Tech Group</title><meta name="description" content="Contact Zion Tech Group for AI and IT solutions" /></Helmet>
          </p>
        </div>

      {/* Contact Info */}

            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>)
            {contactInfo.map((info, index) => {;
const Icon = info.icon
              return (<div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center"><div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mx-auto mb-4"><Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{info.title}</h3>
                  <p className="text-cyan-400 font-medium mb-1">{info.value}</p>
                  <p className="text-gray-400 text-sm">{info.description}</p>
                </div>)
              )}
          </div>
        </div>
      </section>

      {/* Contact Form */}

            Send us a Message
          </h2>
          
          {isSubmitted ? (
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 text-center"><div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mx-auto mb-6"></div>
                <Circle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
              <p className="text-gray-300 mb-6">''"
                Thank you for contacting us. We'll get back to you within 24 hours.'
              </p>
              <button)
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({

              >
                Send Another Message
              </button>
            </div>)
          ) : (
            <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <div className="grid md:grid-cols-2 gap-6 mb-6"><div></div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={ formData.name }
                    onChange={ handleChange }

                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
                    placeholder="Your full name"
                  />
                </div>
                <div></div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={ formData.email }
                    onChange={ handleChange }

                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent""
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-6"><div></div>
                  <label htmlFor="company" className="block text-white font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={ formData.company }
                    onChange={ handleChange }
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>
                <div></div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={ formData.phone }
                    onChange={ handleChange }
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent")
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>
              <div className="mb-6"><label htmlFor="subject" className="block text-white font-medium mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={ formData.subject }
                  onChange={ handleChange }

                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  { subjects.map((subject, index) => ( }

                    <option key={index} value={subject}>
                      { subject }
                    </option>)
                  ))
                </select>
              </div>
              <div className="mb-8"><label htmlFor="message" className="block text-white font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={ formData.message }
                  onChange={ handleChange }
                  required
                  rows={ 6 }
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your project or how we can help you..."
                />
              </div>
              <div className="text-center"><button"
                  type="submit"
                  disabled={ isSubmitting }
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  { isSubmitting ? (
                    <>
                      <div className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Sending...
                    </>)
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2 inline" />
                    </> })
                  )}

                </button>
              </div>
            </form>
          )
        </div>
      </section>

    </div>);
};
export default ContactPage;
};