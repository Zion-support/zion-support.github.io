  Mail,

  MapPin,

  Clock,

  Send,

    e.preventDefault();
    setIsSubmitting(true)
    setSubmitStatus('idle')
try {// Simulate form submission,}
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({)
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        timeline: '',

      await new Promise(resolve =&gt; setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData()
      })
    } catch (error) {
    setSubmitStatus('error')
  }
    } finally {
    setIsSubmitting(false)
  }
    }
  }
const services = [
    'AI Solutions',
    'Cloud Computing',
    'Mobile App Development',
    'Web Development',
    'Data Analytics',

    'Cybersecurity',

    'DevOps',

    'Consulting',

      title: 'Phone',
      details: '+1 (302) 464-0950',
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        </Helmet><title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta name="description" content="AI-powered solution" />
        <meta name="keywords" content="AI, artificial intelligence, business solutions" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20"></div></div></div>
        <div className="container mx-auto px-4"></div></div></div>
              how our AI and IT solutions can help you achieve your goals.
            </p>
          </div>
        </section>
              {
    submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3"&gt;</div&gt;</div&gt;
                  <CheckCircle&gt;
                  </CheckCircle&gt;<span className="text-green-400"&gt;</span&gt;Message sent successfully! We'll get back to you soon.</span&gt;
                </div&gt;
  }
              )}
{
    submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3"&gt;</div&gt;</div&gt;
                  <span className="text-red-400"&gt;</span&gt;Failed to send message. Please try again.</span&gt;
                </div&gt;})}
<form>
                  <div />
                    <label>
                      Full Name *
                    </label>
                    <div className="relative"></div></div></div>
                      <User>
                      </User><input />
                  </div>
                  <div / /></div>
                    <label></label>
                      Email Address *
                    </label>
                    <div className="relative"></div></div></div>
                      <Mail>
                      </Mail><input />
                  </div>
                </div>
                    </label>
                    <div className="relative"></div></div></div>
                      <Building>
                      </Building><input />
                  </div>
                    </label>
                    <div className="relative"></div></div></div>
                      <Phone>
                      </Phone><input />
                  </div>
                </div>
                <div / /></div>
                  <label></label>
                    Service Interest,
                  </label>
                  <div className="relative"></div></div></div>
                    <Globe>
                      ))}

                    </select>
                  </div>
                </div>
                <div / /></div>
                  <label></label>
                    Message *
                  </label>
                  <div className="relative"></div></div></div>
                    <MessageCircle>
                    </MessageCircle><textarea />
                </div>
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div></div></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send>
                    <div className="relative"></div></div>
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="Your full name"
                      />
                    <div className="relative"></div></div>
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="your@email.com"
                      />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div></div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Company
                    <div className="relative"></div></div>
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="Your company"
                      />
                    <div className="relative"></div></div>
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                        placeholder="+1 (555) 123-4567"
                      />
                  <div className="relative"></div></div>
                    <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                  <div className="relative"></div></select>
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                    />
                <div></div>
                  type="submit"
                  disabled={isSubmitting}
                  and we'll get back to you as soon as possible.
              {/* Contact Information */}
                        {info.description}

                      </p>
                    </div>
                  </div>
                      <h3 className="text-lg font-semibold text-white"></h3></h3>Email</h3>
                      <p className="text-gray-300"></p></p>info@ziontechgroup.com</p>
                    </div>
                  </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          </div>
        </section>
      </div>
</div>
