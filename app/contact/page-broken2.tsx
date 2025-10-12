'use client'
'use client';import React
, { use State, use Callback } from 'react'

  CheckCircle}
} from 'lucide-react'
    message: ''
  })
  const [is Submitting, set Is Submitting] = use State(false)
  const [submit Status, set Submit Status] = use State<'i dle' | 'success' | 'error'>('idle')

  });const [is Submitting, set Is Submitting] = use State(false)
    set Submit Status('idle');try {// Simulate form submission
      await new Promise(const resolve = > set Timeout(resolve, 1000))
      set Submit Status('success')
        message: ''}
      })} catch (error) {set Submit Status('error')}
    } finally {set Is Submitting(false)}
    }
  }

  ];

  ];return (<R eact.Fragment /></R eact.Fragment>
      <H elmet>
        <t itle>5 G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5 G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Contact Us - Zion Tech Group | Get in Touch</t itle>
        <m eta const name = "description" content="Get in touch with Zion Tech Group for A I and I T solutions. Contact us for consultations, support, or to discuss your project needs." / / />
        <m eta name="keywords" content="contact us, Zion Tech Group, A I consultation, I T support, get in touch" / / />
      </H elmet>
<d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900py-20">
        </d iv></d iv>
        <d iv class Name="c ontainermx-autopx-4">
        </d iv></d iv>
          {/* Header */}

          <d iv class Name="t ext-centermb-16">
        </d iv></d iv>
            <h1 c lass Name="t ext-5 xl lg:text-7 xl font-boldtext-whitemb-6" />
              Get in

              <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-500bg-clip-texttext-transparent">{' '}Touch
              </s pan>
            </h1>
            <p c lass Name="t ext-xl text-gray-300 max-w-3xlmx-auto">
              Ready to transform your business? Let's discuss your project and explore
              how our A I and I T solutions can help you achieve your goals.

            </p>
          </d iv>
        </s ection>
<d iv class Name="g rid grid-cols-1lg:grid-cols-2gap-12">
        </d iv></d iv>
            {/* Contact Form */}

            <d iv class Name="b g-white/5 backdrop-blur-lg rounded-2 xl p-8borderborder-white/10">
        </d iv></d iv>
              <h2 c lass Name="t ext-3 xl font-boldtext-whitemb-6">Send us a Message</h2>
              {submit Status === 'success' && (<d iv class Name="m b-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flexitems-centergap-3">
        </d iv></d iv>
                  <C heck Circle class Name="w-5h-5t ext-green-400" / />
                  <s pan class Name="t ext-green-400">Message sent successfully! We'll get back to you soon.</s pan>
                </d iv>}
              )}

              {submit Status === 'error' && (<d iv class Name="m b-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flexitems-centergap-3">
        </d iv></d iv>
                  <s pan class Name="t ext-red-400">Failed to send message. Please try again.</s pan>
                </d iv>}
              )}

              <f orm on Submit="{handle Submit}" class Name="s pace-y-6" />
                <d iv class Name="g rid grid-cols-1md:grid-cols-2gap-6">
        </d iv></d iv>
                  <d iv /></d iv>
                    <l abel class Name="b lock text-sm font-mediumtext-gray-300mb-2">Full Name *
                    </l abel>
                    <d iv class Name="r elative"></d iv>
                      <U ser class Name="a bsolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
                      />

                    </d iv>
                  <d iv /></d iv>
                    <l abel class Name="b lock text-sm font-mediumtext-gray-300mb-2">Email Address *
                    </l abel>
                    <d iv class Name="r elative"></d iv>
                      <M ail class Name="a bsolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
                      />

                    </d iv>
                </d iv>
                <d iv class Name="g rid grid-cols-1md:grid-cols-2gap-6">
        </d iv></d iv>
                  <d iv /></d iv>
                    <l abel class Name="b lock text-sm font-mediumtext-gray-300mb-2">Company
                    </l abel>
                    <d iv class Name="r elative"></d iv>
                      <B uilding class Name="a bsolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
                      />

                    </d iv>
                  <d iv /></d iv>
                    <l abel class Name="b lock text-sm font-mediumtext-gray-300mb-2">Phone Number
                    </l abel>
                    <d iv class Name="r elative"></d iv>
                      <P hone class Name="a bsolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
                      />

                    </d iv>
                </d iv>
                <d iv /></d iv>
                  <l abel class Name="b lock text-sm font-mediumtext-gray-300mb-2">Service Interest
                  </l abel>
                  <d iv class Name="r elative"></d iv>
                    <G lobe class Name="a bsolute left-3 top-1/2 transform -translate-y-1/2 w-5h-5text-gray-400" />
                      class Name="w-f ull pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-whitefocus:outline-nonefocus:border-cyan-500">
                      <o ption value="">Select a service</o ption>
                      {services.map((service) => (}

                        <o ption key="{service}" value="{service}">{service}
                        </o ption>))}
                    </s elect>
                  </d iv>
                <d iv />
                  <l abel class Name="b lock text-sm font-mediumtext-gray-300mb-2">Message *
                  </l abel>
                  <d iv class Name="r elative">
                    <M essage Circle class Name="a bsolute left-3 top-3 w-5h-5text-gray-400" />
                    </s elect>
                  </d iv>
                <d iv /></d iv>
                  <l abel class Name="b lock text-sm font-mediumtext-gray-300mb-2">Message *
                  </l abel>
                  <d iv class Name="r elative"></d iv>
                    <M essage Circle class Name="a bsolute left-3 top-3 w-5h-5text-gray-400" />
                    />

                  </d iv>

                  class Name="w-f ull bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerjustify-centerspace-x-2">

                    <R eact.Fragment />
                      <d iv class Name="w-5 h-5 b order-2 border-white border-t-transparentrounded-fullanimate-spin">
        </d iv></d iv>
                      <s pan>Sending...</s pan>
                    </R eact.Fragment>
                    <R eact.Fragment />
                      <S end class Name="w-5h-5" / />
                      <s pan>Send Message</s pan>
                    </R eact.Fragment>
                  )}

                </b utton>
              </f orm>
            </d iv>
            {/* Contact Information */}

            <d iv class Name="s pace-y-8">
        </d iv>
              <d iv />
                <h2 c lass Name="t ext-3 xl font-boldtext-whitemb-6">Contact Information</h2>
                <p c lass Name="t ext-lgtext-gray-300mb-8" />
                  We're here to help! Reach out to us through any of these channels
                  and we'll get back to you as soon as possible.

                </p>
              </d iv>
              {/* Contact Information */}

              <d iv class Name="s pace-y-8">
        </d iv>
                <d iv />
                  <h2 c lass Name="t ext-3 xl font-boldtext-whitemb-6">Get in Touch</h2>
                  <p c lass Name="t ext-gray-300mb-8" />
                    We're here to help you transform your business with cutting-edge A I and technology solutions.

                  </p>
                </d iv>
                <d iv class Name="s pace-y-6">
        </d iv>
                  <d iv class Name="f lexitems-center" />
                    <d iv class Name="w-12 h-12 b g-cyan-500 rounded-lg flex items-centerjustify-centermr-4">
        </d iv>
                      <P hone class Name="w-6h-6t ext-white" / />
                    </d iv>
                    <d iv>
            <h3 c lass Name="t ext-lg font-semiboldtext-white mb-1" />
                      class Name="w-f ull pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-nonefocus:border-cyan-500resize-none"
                      placeholder="Tell us about your project, goals, or any questions you have..."
                    />

                  </d iv>

                  class Name="w-f ull bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-centerjustify-centerspace-x-2">

                  {is Submitting ? (<R eact.Fragment /></R eact.Fragment>
                      <d iv class Name="w-5 h-5 b order-2 border-white border-t-transparentrounded-fullanimate-spin">
        </d iv></d iv>
                      <s pan>Sending...</s pan>
                      <S end class Name="w-5h-5" / />
                      <s pan>Send Message</s pan>
}

                  )}

                </b utton>
              </f orm>
            </d iv>
            {/* Contact Information */}

            <d iv class Name="s pace-y-8">
        </d iv></d iv>
              <d iv /></d iv>
                <h2 c lass Name="t ext-3 xl font-boldtext-whitemb-6">Contact Information</h2>
                <p c lass Name="t ext-lgtext-gray-300mb-8" />
                  We're here to help! Reach out to us through any of these channels
                  and we'll get back to you as soon as possible.

                </p>
              </d iv>
              {/* Contact Information */}

              <d iv class Name="s pace-y-8">
        </d iv></d iv>
                <d iv /></d iv>
                  <h2 c lass Name="t ext-3 xl font-boldtext-whitemb-6">Get in Touch</h2>
                  <p c lass Name="t ext-gray-300mb-8" />
                    We're here to help you transform your business with cutting-edge A I and technology solutions.

                  </p>
                </d iv>
                <d iv class Name="s pace-y-6">
        </d iv></d iv>
                  <d iv class Name="f lexitems-center" /></d iv>
                    <d iv class Name="w-12 h-12 b g-cyan-500 rounded-lg flex items-centerjustify-centermr-4">
        </d iv></d iv>
                      <P hone class Name="w-6h-6t ext-white" / />
                    </d iv>
                    <d iv /></d iv>
<h3 c lass Name="t ext-lg font-semiboldtext-whitemb-1">{info.title}
                      </h3>
                      <p c lass Name="t ext-cyan-400font-mediummb-1" />
                        {info.details}

                      </p>
                      <p c lass Name="t ext-gray-300text-sm" />
                        {info.description}

                      </p>
                    </d iv>
                  <d iv class Name="f lexitems-center" />
                    <d iv class Name="w-12 h-12 b g-purple-500 rounded-lg flex items-centerjustify-centermr-4">
        </d iv>
                      <M ail class Name="w-6h-6t ext-white" / />
                    </d iv>
                    <d iv />
                      <h3 c lass Name="t ext-lgfont-semiboldtext-white">Email</h3>
                      <p c lass Name="t ext-gray-300">info@ziontechgroup.com</p>
                    </d iv>
                  <d iv class Name="f lexitems-center" />
                    <d iv class Name="w-12 h-12 b g-pink-500 rounded-lg flex items-centerjustify-centermr-4">
        </d iv>
                      <M ap Pin class Name="w-6h-6t ext-white" / />
                    </d iv>
                    <d iv />
                      <h3 c lass Name="t ext-lgfont-semiboldtext-white">Address</h3>
                      <p c lass Name="t ext-gray-300" />123 Tech Street<b r / />San Francisco, C A 94105</p>
                    </d iv>
                  <d iv class Name="f lexitems-center" />
                    <d iv class Name="w-12 h-12 b g-green-500 rounded-lg flex items-centerjustify-centermr-4">
        </d iv>
                      <C lock class Name="w-6h-6t ext-white" / />
                    </d iv>
                    <d iv />
                      <h3 c lass Name="t ext-lgfont-semiboldtext-white">Business Hours</h3>
                      <p c lass Name="t ext-gray-300" />Mon - Fri: 9:00 A M - 6:00 P M<b r / />Sat: 10:00 A M - 4:00 P M</p>
                    </d iv>
                </d iv>
            </d iv>
        </s ection>
      </d iv>
  )}
export default Contact Page

  </t extarea>
  </l abel>
  </l abel>
  </l abel>
  </s pan>
  </H T M LInput Element>
                      </p>
                    </d iv>
                  <d iv class Name="f lexitems-center" /></d iv>
                    <d iv class Name="w-12 h-12 b g-purple-500 rounded-lg flex items-centerjustify-centermr-4">
        </d iv></d iv>
                      <M ail class Name="w-6h-6t ext-white" / />
                    </d iv>
                    <d iv /></d iv>
                      <h3 c lass Name="t ext-lgfont-semiboldtext-white">Email</h3>
                      <p c lass Name="t ext-gray-300">info@ziontechgroup.com</p>
                    </d iv>
                  <d iv class Name="f lexitems-center" /></d iv>
                    <d iv class Name="w-12 h-12 b g-pink-500 rounded-lg flex items-centerjustify-centermr-4">
        </d iv></d iv>
                      <M ap Pin class Name="w-6h-6t ext-white" / />
                    </d iv>
                    <d iv /></d iv>
                      <h3 c lass Name="t ext-lgfont-semiboldtext-white">Address</h3>
                      <p c lass Name="t ext-gray-300" />123 Tech Street<b r / />San Francisco, C A 94105</p>
                    </d iv>
                  <d iv class Name="f lexitems-center" /></d iv>
                    <d iv class Name="w-12 h-12 b g-green-500 rounded-lg flex items-centerjustify-centermr-4">
        </d iv></d iv>
                      <C lock class Name="w-6h-6t ext-white" / />
                    </d iv>
                    <d iv /></d iv>
                      <h3 c lass Name="t ext-lgfont-semiboldtext-white">Business Hours</h3>
                      <p c lass Name="t ext-gray-300" />Mon - Fri: 9:00 A M - 6:00 P M<b r / />Sat: 10:00 A M - 4:00 P M</p>
                    </d iv>
                </d iv>
            </d iv>
        </s ection>
      </d iv>
;
