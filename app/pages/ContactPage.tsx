
            </p>
          </div>
        </div>
      </section>

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
                      <option value=">Select a service</option>
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
                      <option value=">Select budget range</option>
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

    </>
  ),
};

export default ContactPage;