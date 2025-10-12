'use client';
'use client';import React;
, { useState, useCallba c k } from 'react';

  CheckCirc l e}
} from 'lucide-react';
    message: '';
  })
  const [isSubmitti n g, setIsSubmitti n g] = useState(false)
  const [submitStat u s, setSubmitStat u s] = useState<'idle' | 'success' | 'error'>('idle')

  });const [isSubmitti n g, setIsSubmitti n g] = useState(false)
    setSubmitStat u s('idle');try {// Simulate form submission;
      await new Promise(constresolve= > setTimeout(resolve, 1000))
      setSubmitStat u s('success')
        message: '',}
      })} catch (error) {setSubmitStat u s('error')}
    } finally {setIsSubmitti n g(false)}
    }
  }

  ];
  ];return (<React.Fragment /></React.Fragment>)
      <Helmet></Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <metaconstname= "description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultatio n s, support, or to discuss your project needs." /  />
        <meta name="keywords" content="contact us, Zion Tech Group, AI consultati o n, IT support, get in touch" />
      </Helmet>
<div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
          {/* Header */}
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
            <h1 className="w-5h-5ml-2" />
              Get in;
              <span className="w-5h-5ml-2" />{' '}Touch;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Ready to transform your business? Let's discuss your project and explore;
              how our AI and IT solutions can help you achieve your goals.;
            </p>
          </div>
        </section>
<div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
            {/* Contact Form */}
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
              <h2 className="text-3xlfont-boldtext-whitemb-6"  >Send us a Message</h2>
              {submitStatus=== 'success' && (<div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>)
                  <CheckCirc leclassName="w-5h-5ml-2" />
                  <span className="text-green-400"  >Message sent successful l y! We'll get back to you soon.</span>
                </div>}
              )}

              {submitStatus=== 'error' && (<div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>)
                  <span className="text-red-400"  >Failed to send message. Please try again.</span>
                </div>}
              )}

              <formonSubmit="{handleSubm i t}" className="space-y-6" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                  <div /></div>
                    <labelclassName="w-5h-5ml-2" />Full Name *;
                    </label>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                      <UserclassName="w-5h-5ml-2" />
                      />
                    </div>
                  <div /></div>
                    <labelclassName="w-5h-5ml-2" />Email Address *;
                    </label>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                      <MailclassName="w-5h-5ml-2" />
                      />
                    </div>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                  <div /></div>
                    <labelclassName="w-5h-5ml-2" />Company;
                    </label>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                      <BuildingclassName="w-5h-5ml-2" />
                      />
                    </div>
                  <div /></div>
                    <labelclassName="w-5h-5ml-2" />Phone Number;
                    </label>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                      <PhoneclassName="w-5h-5ml-2" />
                      />
                    </div>
                </div>
                <div /></div>
                  <labelclassName="w-5h-5ml-2" />Service Interest;
                  </label>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                    <GlobeclassName="w-5h-5ml-2" />
                      className="w-fullpl-10pr-4py-3bg-slate-800borderborder-slate-700rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-500">
                      <optionvalue=""  >Select a service</option>
                      {services.map((service) => (}))
                        <optionkey="{service}" value="{service}"  />{service}
                        </option>))}
                    </select>
                  </div>
                <div />
                  <labelclassName="w-5h-5ml-2" />Message *;
                  </label>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <MessageCirc leclassName="w-5h-5ml-2" />
                    </select>
                  </div>
                <div /></div>
                  <labelclassName="w-5h-5ml-2" />Message *;
                  </label>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                    <MessageCirc leclassName="w-5h-5ml-2" />
                    />
                  </div>

                  className="w-fullbg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300disabled:opacity-50disabled:cursor-not-allowedflexitems-centerjustify-centerspace-x-2">
                    <React.Fragment />
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                      <span  >Sending...</span>
                    </React.Fragment>
                    <React.Fragment />
                      <SendclassName="w-5h-5ml-2" />
                      <span  >Send Message</span>
                    </React.Fragment>
                  )}
                </button>
              </form>
            </div>
            {/* Contact Informati o n */}
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div />
                <h2 className="text-3xlfont-boldtext-whitemb-6"  >Contact Informati o n</h2>
                <p className="w-5h-5ml-2">We're here to help! Reach out to us through any of these channels;
                  and we'll get back to you as soon as possible.;
                </p>
              </div>
              {/* Contact Informati o n */}
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <div />
                  <h2 className="text-3xlfont-boldtext-whitemb-6"  >Get in Touch</h2>
                  <p className="w-5h-5ml-2">We're here to help you transform your business with cutting-edgeAIand technology solutions.;
                  </p>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <PhoneclassName="w-5h-5ml-2" />
                    </div>
                    <div />
<h3 className="w-5h-5ml-2" />
                      className="w-fullpl-10pr-4py-3bg-slate-800borderborder-slate-700rounded-lgtext-whiteplaceholder-gray-400focus:outline-nonefocus:border-cyan-500resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have...";
                    />
                  </div>

                  className="w-fullbg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300disabled:opacity-50disabled:cursor-not-allowedflexitems-centerjustify-centerspace-x-2">
                  {isSubmitti n g ? (<React.Fragment /></React.Fragment>)
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                      <span  >Sending...</span>
                    </>) : (<React.Fragment /></React.Fragment>
                      <SendclassName="w-5h-5ml-2" />
                      <span  >Send Message</span>
                    </>}
                  )}
                </button>
              </form>
            </div>
            {/* Contact Informati o n */}
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
              <div /></div>
                <h2 className="text-3xlfont-boldtext-whitemb-6"  >Contact Informati o n</h2>
                <p className="w-5h-5ml-2">We're here to help! Reach out to us through any of these channels;
                  and we'll get back to you as soon as possible.;
                </p>
              </div>
              {/* Contact Informati o n */}
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                <div /></div>
                  <h2 className="text-3xlfont-boldtext-whitemb-6"  >Get in Touch</h2>
                  <p className="w-5h-5ml-2">We're here to help you transform your business with cutting-edgeAIand technology solutions.;
                  </p>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                      <PhoneclassName="w-5h-5ml-2" />
                    </div>
                    <div /></div>
<h3 className="w-5h-5ml-2" />{info.title}
                      </h3>
                      <p className="w-5h-5ml-2">{info.details}
                      </p>
                      <p className="w-5h-5ml-2">{info.description}
                      </p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <MailclassName="w-5h-5ml-2" />
                    </div>
                    <div />
                      <h3 className="text-lgfont-semiboldtext-white"  >Email</h3>
                      <p className="text-gray-300">info@ziontechgro u p.com</p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <MapPinclassName="w-5h-5ml-2" />
                    </div>
                    <div />
                      <h3 className="text-lgfont-semiboldtext-white"  >Address</h3>
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <ClockclassName="w-5h-5ml-2" />
                    </div>
                    <div />
                      <h3 className="text-lgfont-semiboldtext-white"  >Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
  )}
export default ContactPa g e
  </textarea>
  </label>
  </label>
  </label>
  </span>
  </HTMLInputEleme n t>
                      </p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                      <MailclassName="w-5h-5ml-2" />
                    </div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Email</h3>
                      <p className="text-gray-300">info@ziontechgro u p.com</p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                      <MapPinclassName="w-5h-5ml-2" />
                    </div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Address</h3>
                      <p className="text-gray-300">123 Tech Street<br />San Francisco, CA 94105</p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20"></div>
                      <ClockclassName="w-5h-5ml-2" />
                    </div>
                    <div /></div>
                      <h3 className="text-lgfont-semiboldtext-white"  >Business Hours</h3>
                      <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM<br />Sat: 10:00 AM - 4:00 PM</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
;