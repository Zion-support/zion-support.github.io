'use client'
'use client';import React, {useState, useCallback} from 'react'

  Check Circle}
} from 'lucide-react'
    message: ''
  })
  const [is Submitting, set Is Submitting] = use State(false)
  const [submit Status, set Submit Status] = use State<'idle' | 'success' | 'error'>('idle')

  });const [is Submitting, set Is Submitting] = use State(false)
    set Submit Status('idle');try {// Simulate form submission
      await new Promise(constresolve = > setTimeout(resolve, 1000))
      set Submit Status('success')
        message: ''}
      })} catch (error) {set Submit Status('error')}
    } finally {set Is Submitting(false)}
    }
  }

  ];
  ];return (<React.Fragment /></React.Fragment>
      <Helmet />
        <title>ContactUs - ZionTech Group | Getin Touch</title>
        <metaconstname = "description" content="Getin touchwith Zion Tech Groupfor AIand ITsolutions. Contactus forconsultations, support, orto discussyour projectneeds." / / />
        <meta name ="keywords" content="contactus, Zion Tech Group, AIconsultation, ITsupport, getin touch" / / />
      </Helmet>
<div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900py-20" /></div>
        <div className ="containermx-autopx-4" /></div>
          {/* Header */}
          <div className ="text-centermb-16" /></div>
            <h1className ="text-5 xllg:text-7 xlfont-boldtext-whitemb-6" />
              Getin
              <spanclassName ="bg-gradient-to-rfrom-cyan-400 to-purple-500bg-clip-texttext-transparent"  />{' '}Touch
              </span>
            </h1>
            <pclassName ="text-xltext-gray-300 max-w-3xlmx-auto" />
              Readyto transformyour business? Let'sdiscuss yourproject andexplore
              howour AIand ITsolutions canhelp youachieve yourgoals.
            </p>
          </div>
        </section>
<div className ="gridgrid-cols-1lg:grid-cols-2gap-12" /></div>
            {/* ContactForm */}
            <div className ="bg-white/5 backdrop-blur-lgrounded-2 xlp-8borderborder-white/10" /></div>
              <h2className ="text-3 xlfont-boldtext-whitemb-6"  >Sendus aMessage</h2>
              {submitStatus === 'success' && (<div className ="mb-6 p-4 bg-green-500/20 borderborder-green-500/50 rounded-lgflexitems-centergap-3" /></div>
                  <Check Circleclass Name="w-5h-5text-green-400" / />
                  <spanclassName ="text-green-400"  >Messagesent successfully! We'llget backto yousoon.</span>
                </div>}
              )}

              {submitStatus === 'error' && (<div className ="mb-6 p-4 bg-red-500/20 borderborder-red-500/50 rounded-lgflexitems-centergap-3" /></div>
                  <spanclassName ="text-red-400"  >Failedto sendmessage. Pleasetry again.</span>
                </div>}
              )}

              <form onSubmit ="{handle Submit}" className="space-y-6" />
                <div className ="grid grid-cols-1md:grid-cols-2gap-6" /></div>
                  <div /></div>
                    <labelclassName ="block text-sm font-mediumtext-gray-300mb-2"  />Full Name *
                    </label>
                    <div className ="relative" /></div>
                      <Userclass Name ="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" / />
                      />
                    </div>
                  </div>
                  <div /></div>
                    <labelclassName ="block text-sm font-mediumtext-gray-300mb-2"  />Email Address *
                    </label>
                    <div className ="relative" /></div>
                      <Mailclass Name ="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" / />
                      />
                    </div>
                  </div>
                </div>
                <div className ="grid grid-cols-1md:grid-cols-2gap-6" /></div>
                  <div /></div>
                    <labelclassName ="block text-sm font-mediumtext-gray-300mb-2"  />Company
                    </label>
                    <div className ="relative" /></div>
                      <Buildingclass Name ="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" / />
                      />
                    </div>
                  </div>
                  <div /></div>
                    <labelclassName ="block text-sm font-mediumtext-gray-300mb-2"  />Phone Number
                    </label>
                    <div className ="relative" /></div>
                      <Phoneclass Name ="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" / />
                      />
                    </div>
                  </div>
                </div>
                <div /></div>
                  <labelclassName ="block text-sm font-mediumtext-gray-300mb-2"  />Service Interest
                  </label>
                  <div className ="relative" /></div>
                    <Globeclass Name ="absolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" / />
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-whitefocus:outline-nonefocus:border-cyan-500">
                      <optionvalue =""  >Select a service</option>
                      {services.map((service) => (}
                        <optionkey ="{service}" value="{service}"  />{service}
                        </option>))}
                    </select>
                  </div>
                </div>
                <div />
                  <labelclassName ="block text-sm font-mediumtext-gray-300mb-2"  />Message *
                  </label>
                  <div className ="relative" />
                    <Message Circleclass Name="absolute left-3 top-3 w-5h-5text-gray-400" / />
                    </select>
                  </div>
                </div>
                <div /></div>
                  <labelclassName ="block text-sm font-mediumtext-gray-300mb-2"  />Message *
                  </label>
                  <div className ="relative" /></div>
                    <Message Circleclass Name="absolute left-3 top-3 w-5h-5text-gray-400" / />
                    />
                  </div>
                </div>

                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerjustify-centerspace-x-2">
                    <React.Fragment />
                      <div className ="w-5 h-5 border-2 border-white border-t-transparentrounded-fullanimate-spin" /></div>
                      <span  >Sending...</span>
                    </React.Fragment>
                    <React.Fragment />
                      <Sendclass Name ="w-5h-5" / />
                      <span  >Send Message</span>
                    </React.Fragment>
                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className ="space-y-8" />
              <div />
                <h2className ="text-3 xl font-boldtext-whitemb-6"  >Contact Information</h2>
                <pclassName ="text-lg text-gray-300 mb-8" />
                  We're here to help! Reach out to us through any of these channels
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */}
              <div className ="space-y-8" />
                <div />
                  <h2className ="text-3 xl font-boldtext-whitemb-6"  >Get in Touch</h2>
                  <pclassName ="text-gray-300mb-8" />
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p>
                </div>
                <div className ="space-y-6" />
                  <div className ="flexitems-center" />
                    <div className ="w-12 h-12 bg-cyan-500 rounded-lg flex items-centerjustify-centermr-4" />
                      <Phoneclass Name ="w-6h-6text-white" / />
                    </div>
                    <div />
<h3className ="text-lg font-semiboldtext-whitemb-1" />
                      className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-500resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                    />
                  </div>
                </div>

                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerjustify-centerspace-x-2">
                  {is Submitting ? (<React.Fragment /></React.Fragment>
                      <div className ="w-5 h-5 border-2 border-whiteborder-t-transparentrounded-fullanimate-spin" /></div>
                      <span  >Sending...</span>
                    </>) : (<React.Fragment /></React.Fragment>
                      <Sendclass Name ="w-5h-5" / />
                      <span  >SendMessage</span>
                    </>}
                  )}
                </button>
              </form>
            </div>
            {/* Contact Information */}
            <div className ="space-y-8" /></div>
              <div /></div>
                <h2className ="text-3 xl font-boldtext-whitemb-6"  >Contact Information</h2>
                <pclassName ="text-lg text-gray-300 mb-8" />
                  We're here to help! Reach out to us through any of these channels
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              {/* Contact Information */}
              <div className ="space-y-8" /></div>
                <div /></div>
                  <h2className ="text-3 xl font-boldtext-whitemb-6"  >Get in Touch</h2>
                  <pclassName ="text-gray-300mb-8" />
                    We're here to help you transform your business with cutting-edge AI and technology solutions.
                  </p>
                </div>
                <div className ="space-y-6" /></div>
                  <div className ="flexitems-center" /></div>
                    <div className ="w-12 h-12 bg-cyan-500 rounded-lg flex items-centerjustify-centermr-4" /></div>
                      <Phoneclass Name ="w-6h-6text-white" / />
                    </div>
                    <div /></div>
<h3className ="text-lg font-semiboldtext-whitemb-1"  />{info.title}
                      </h3>
                      <pclassName ="text-cyan-400font-mediummb-1" />
                        {info.details}
                      </p>
                      <pclassName ="text-gray-300text-sm" />
                        {info.description}
                      </p>
                    </div>
                  </div>
                  <div className ="flexitems-center" />
                    <div className ="w-12 h-12 bg-purple-500 rounded-lg flex items-centerjustify-centermr-4" />
                      <Mailclass Name ="w-6h-6text-white" / />
                    </div>
                    <div />
                      <h3className ="text-lgfont-semiboldtext-white"  >Email</h3>
                      <pclassName ="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className ="flexitems-center" />
                    <div className ="w-12 h-12 bg-pink-500 rounded-lg flex items-centerjustify-centermr-4" />
                      <Map Pinclass Name="w-6h-6text-white" / />
                    </div>
                    <div />
                      <h3className ="text-lgfont-semiboldtext-white"  >Address</h3>
                      <pclassName ="text-gray-300">123 Tech Street<br / />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className ="flexitems-center" />
                    <div className ="w-12 h-12 bg-green-500 rounded-lg flex items-centerjustify-centermr-4" />
                      <Clockclass Name ="w-6h-6text-white" / />
                    </div>
                    <div />
                      <h3className ="text-lgfont-semiboldtext-white"  >Business Hours</h3>
                      <pclassName ="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br / />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
</div>
  )}
export default Contact Page
  </textarea>
  </label>
  </label>
  </label>
  </span>
  </HTMLInput Element>
                      </p>
                    </div>
                  </div>
                  <div className ="flexitems-center" /></div>
                    <div className ="w-12 h-12 bg-purple-500 rounded-lg flex items-centerjustify-centermr-4" /></div>
                      <Mailclass Name ="w-6h-6text-white" / />
                    </div>
                    <div /></div>
                      <h3className ="text-lgfont-semiboldtext-white"  >Email</h3>
                      <pclassName ="text-gray-300">info@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className ="flexitems-center" /></div>
                    <div className ="w-12 h-12 bg-pink-500 rounded-lg flex items-centerjustify-centermr-4" /></div>
                      <Map Pinclass Name="w-6h-6text-white" / />
                    </div>
                    <div /></div>
                      <h3className ="text-lgfont-semiboldtext-white"  >Address</h3>
                      <pclassName ="text-gray-300">123 Tech Street<br / />San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className ="flexitems-center" /></div>
                    <div className ="w-12 h-12 bg-green-500 rounded-lg flex items-centerjustify-centermr-4" /></div>
                      <Clockclass Name ="w-6h-6text-white" / />
                    </div>
                    <div /></div>
                      <h3className ="text-lgfont-semiboldtext-white"  >Business Hours</h3>
                      <pclassName ="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br / />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
;