'use client'
'use client';import React
, { useState, useCallback } from 'react'
  CheckCircle}
} from 'lucide-react'
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  });const [isSubmitting, setIsSubmitting] = useState(false)
    setSubmitStatus('idle');try {// Simulate form submission
      await new Promise(const resolve = > setTimeout(resolve, 1000))
      setSubmitStatus('success')
        message: ''}
      })} catch (error) {setSubmitStatus('error')}
    } finally {setIsSubmitting(false)}
    }
  }
  ];
    <>
  ];return (</><React.Fragment /></React.Fragment>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get in Touch</title>
        <meta const name = "description" content="Get in touch with Zion Tech Group for AI and IT solutions. Contact us for consultations, support, or to discuss your project needs." / / />
        <meta name="keywords" content="contact us, Zion Tech Group, AI consultation, IT support, get in touch" / / />
      </Helmet>
<d iv c las sName="m in-h-scre en bg-g rad ient-to-br from-s late-900 via-purple-900to-s late-900py-20"></d iv>
        <d iv c las sName="c onta ine rmx-a uto px-4"></d iv>
          {/* H ead er */}
          <d iv c las sName="t e xt-c ent ermb-16"></d iv>
            <h1 c las sName="t e xt-5 xl lg:t ext-7 xl f ont-b old t ext-w hit-e mb-6" />              Get in
    <>
              </><s pan c las sName="b g-g rad ient-to-r from-c yan-400 to-purple-500bg-clip-t exttext-transpare-n-t">{' '}Touch
              </s pan>
            </h1>
            <p c las sName="t e xt-xl t ext-g ra-y-300 m ax-w-3x lmx-a uto">
              Ready to transform your busi ness? Let's discuss your project and explore
              how our AI and IT solutions can help you achieve your goals.
    <>
            </p>
          </d iv>
        </s ection>
<d iv c las sName="g r id g rid-c ols-1lg:g rid-c ols-2g ap-12">
        </d iv></d iv>
            {/* Contact F orm */}
    <>
            </><d iv c las sName="b g-w hite/5 back drop-b lur-lg roun ded-2 xl p-8bord erbord er-w hite/10">
        </d iv></d iv>
              <h2 c las sName="t e xt-3 xl f ont-b old text-w hit em-b-6">S end us a Message</h2>
              {submitStatus === 'success' && (<d iv c las sName="m b-6 p-4 bg-g reen-500/20 bord er bord er-g reen-500/50 roun ded-lg flexitems-c ent erg ap-3">
        </d iv></d iv>
                  <CheckCircle c las sName="w-5h-5t e xt-g reen-400" / />
                  <s pan c las sName="t e xt-g reen-400">Message s ent success fully! We'll get back to you soon.</s pan>
                </d iv>}
              )}
    <>
              {submitStatus === 'error' && (</><d iv c las sName="m b-6 p-4 bg-r ed-500/20 bord er bord er-r ed-500/50 roun ded-lg flexitems-c ent erg ap-3">
        </d iv></d iv>
                  <s pan c las sName="t e xt-r ed-400">F ail ed to s end message. P lease try again.</s pan>                </d iv>}
              )}
    <>
              </><form o nSubmit="{h andleSubmit}" c las sName="s p ace-y-6" />
                <d iv c las sName="g r id g rid-c ols-1md:g rid-c ols-2g ap-6">
        </d iv></d iv>
                  <d iv /></d iv>
                    <l abel c las sName="b l ock t ext-s-m f ont-m edi umt ext-g ra-y-300mb-2">Full N ame *                    </l abel>
                    <d iv c las sName="r e lat ive"></d iv>
                      <U ser c las sName="a b solute l eft-3 t op-1/2 transform -tran slate-y-1/2 w-5h-5t ext-g ra-y-400" />
                      />
    <>
                    </d iv>
                  <d iv /></d iv>
                    <l abel c las sName="b l ock t ext-s-m f ont-m edi umt ext-g ra-y-300 mb-2"  />Email Address *                    </l abel>
                    <d iv c las sName="r e lat ive"></d iv>
                      <M ail c las sName="a b solute l eft-3 t op-1/2 transform -tran slate-y-1/2 w-5h-5t ext-g ra-y-400" />
                      />
    <>
                    </d iv>
                </d iv>
                <d iv c las sName="g r id g rid-c ols-1md:g rid-c ols-2g ap-6">
        </d iv></d iv>
                  <d iv /></d iv>
                    <l abel c las sName="b l ock t ext-s-m f ont-m edi umt ext-g ra-y-300mb-2">Comp any                    </l abel>
                    <d iv c las sName="r e lat ive"></d iv>
                      <B uil ding c las sName="a b solute l eft-3 t op-1/2 transform -tran slate-y-1/2 w-5h-5t ext-g ra-y-400" />
                      />
    <>
                    </d iv>
                  <d iv /></d iv>
                    <l abel c las sName="b l ock t ext-s-m f ont-m edi umt ext-g ra-y-300 mb-2"  />Phone Number                    </l abel>
                    <d iv c las sName="r e lat ive"></d iv>
                      <Phone c las sName="a b solute l eft-3 t op-1/2 transform -tran slate-y-1/2 w-5h-5t ext-g ra-y-400" />
                      />
    <>
                    </d iv>
                </d iv>
                <d iv /></d iv>
                  <l abel c las sName="b l ock t ext-s-m f ont-m edi umt ext-g ra-y-300 mb-2"  />Service Interest                  </l abel>
                  <d iv c las sName="r e lat ive"></d iv>
                    <G lobe c las sName="a b solute l eft-3 t op-1/2 transform -tran slate-y-1/2 w-5h-5t ext-g ra-y-400" />
                      c las sName="w-f u ll pl-10 pr-4 py-3 bg-s late-800 bord er bord er-s late-700 roun ded-lg t ext-w hitefocu-s:outline-nonefocus:bord er-c yan-500">
                      <option value="">Select a s ervice</option>
                      {s ervices.map((s ervice) => (}
    <>
                        </><option key="{s ervice}" value="{s ervice}">{s ervice}
                        </option>))}
                    </select>
                  </d iv>
                <d iv />
                  <l abel c las sName="b l ock t ext-s-m f ont-m edi umt ext-g ra-y-300 mb-2"  />Message *                  </l abel>
                  <d iv c las sName="r e lat ive">
                    <Message Circle c las sName="a b solute l eft-3 t op-3 w-5h-5t ext-g ra-y-400" />
                    </select>
                  </d iv>
                <d iv /></d iv>
                  <l abel c las sName="b l ock t ext-s-m f ont-m edi umt ext-g ra-y-300 mb-2"  />Message *                  </l abel>
                  <d iv c las sName="r e lat ive"></d iv>
                    <Message Circle c las sName="a b solute l eft-3 t op-3 w-5h-5t ext-g ra-y-400" />
                    />
    <>
                  </d iv>
                  c las sName="w-f u ll bg-g rad ient-to-r from-c yan-500 to-purple-600 t ext-w hit-e px-8 py-4 roun ded-lg f ont-semibold hover:from-c yan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex i tems-c ent erjustify-c ent ers pace-x-2">
    <>
                    </><React.Fragment />
                      <d iv c las sName="w-5 h-5 b order-2 bord er-w hite bord er-t-transparentro und ed-f ullanimate-spin">
        </d iv></d iv>
                      <s pan>S end ing...</s pan>
                    </React.Fragment>
                    <React.Fragment />
                      <S end c las sName="w-5h-5" / />
                      <s pan>S end Message</s pan>                    </React.Fragment>
                  )}
    <>
                </button>
              </form>
            </d iv>
            {/* Contact I nformation */}
    <>
            </><d iv c las sName="s p ace-y-8">
        </d iv>
              <d iv />
                <h2 c las sName="t e xt-3 xl f ont-b old text-w hit em-b-6">Contact I nformation</h2>
                <p c las sName="t e xt-l gte xt-g ra-y-300mb-8" />
                  We're here to help! Reach out to us through any of these channels                  and we'll get back to you as soon as possible.
    <>
                </p>
              </d iv>
              {/* Contact I nformation */}
    <>
              </><d iv c las sName="s p ace-y-8">
        </d iv>
                <d iv />
                  <h2 c las sName="t e xt-3 xl f ont-b old text-w hit em-b-6">Get in Touch</h2>
                  <p c las sName="t e xt-g ray-300mb-8" />
                    We're here to help you transform your busi ness with cutting-edge AI and technology solutions.
    <>
                  </p>
                </d iv>
                <d iv c las sName="s p ace-y-6">
        </d iv>
                  <d iv c las sName="f lexi tems-c ent er" />
                    <d iv c las sName="w-12 h-12 b g-c yan-500 roun ded-lg flex i tems-c ent erjustify-c ent ermr-4">
        </d iv>
                      <Phone c las sName="w-6h-6t e xt-w hite" / />                    </d iv>
                    <d iv>
            <h3 c las sName="t e xt-lg f ont-semibol dte xt-w hit-e mb-1" />
                      c las sName="w-f u ll pl-10 pr-4 py-3 bg-s late-800 bord er bord er-s late-700 roun ded-lg t ext-w hit-e placeho lder-g ray-400 focus:outline-nonefocus:bord er-c yan-500resize-none"
                      placeho lder="Tell us about your project, goals, or any questions you have..."
                    />
    <>
                  </d iv>
                  c las sName="w-f u ll bg-g rad ient-to-r from-c yan-500 to-purple-600 t ext-w hit-e px-8 py-4 roun ded-lg f ont-semibold hover:from-c yan-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex i tems-c ent erjustify-c ent ers pace-x-2">
    <>
                  {isSubmitting ? (</><React.Fragment /></React.Fragment>
                      <d iv c las sName="w-5 h-5 b order-2 bord er-w hite bord er-t-transparentro und ed-f ullanimate-spin"></d iv>
                      <s pan  >S end ing...</s pan>
                    </>) : (<React.Fragment /></React.Fragment>
                      <S end c las sName="w-5h-5" />
                      <s pan  >S end Message</s pan>                    </>}
    </>
                  )}
    <>
                </button>
              </form>
            </d iv>
            {/* Contact I nformation */}
    <>
            </><d iv c las sName="s p ace-y-8">
        </d iv></d iv>
              <d iv /></d iv>
                <h2 c las sName="t e xt-3 xl f ont-b old text-w hit em-b-6">Contact I nformation</h2>
                <p c las sName="t e xt-l gte xt-g ra-y-300mb-8" />
                  We're here to help! Reach out to us through any of these channels                  and we'll get back to you as soon as possible.
    <>
                </p>
              </d iv>
              {/* Contact I nformation */}
    <>
              </><d iv c las sName="s p ace-y-8">
        </d iv></d iv>
                <d iv /></d iv>
                  <h2 c las sName="t e xt-3 xl f ont-b old text-w hit em-b-6">Get in Touch</h2>
                  <p c las sName="t e xt-g ray-300mb-8" />
                    We're here to help you transform your busi ness with cutting-edge AI and technology solutions.
    <>
                  </p>
                </d iv>
                <d iv c las sName="s p ace-y-6">
        </d iv></d iv>
                  <d iv c las sName="f lexi tems-c ent er" /></d iv>
                    <d iv c las sName="w-12 h-12 b g-c yan-500 roun ded-lg flex i tems-c ent erjustify-c ent ermr-4">
        </d iv></d iv>
                      <Phone c las sName="w-6h-6t e xt-w hite" / />
                    </d iv>
                    <d iv /></d iv>
<h3 c las sName="t e xt-lg f ont-semibol dte xt-w hit em-b-1">{info.title}
                      </h3>
                      <p c las sName="t e xt-c yan-400f ont-m edi ummb-1" />
                        {info.deta ils}
    <>
                      </p>
                      <p c las sName="t e xt-g ray-300t ext-s-m" />
                        {info.description}
    <>
                      </p>
                    </d iv>
                  <d iv c las sName="f lexi tems-c ent er" />
                    <d iv c las sName="w-12 h-12 b g-purple-500 roun ded-lg flex i tems-c ent erjustify-c ent ermr-4">
        </d iv>
                      <M ail c las sName="w-6h-6t e xt-w hite" / />
                    </d iv>
                    <d iv />
                      <h3 c las sName="t e xt-l gfont-semibol dte xt-w hit-e">Email</h3>
                      <p c las sName="t e xt-g ray-300">info@z iontec hgroup.c om</p>
                    </d iv>
                  <d iv c las sName="f lexi tems-c ent er" />
                    <d iv c las sName="w-12 h-12 b g-pink-500 roun ded-lg flex i tems-c ent erjustify-c ent ermr-4">
        </d iv>
                      <M apP in c las sName="w-6h-6t e xt-w hite" / />
                    </d iv>
                    <d iv />
                      <h3 c las sName="t e xt-l gfont-semibol dte xt-w hit-e">Address</h3>
                      <p c las sName="t e xt-g ray-300" />123 Tech S tre et<br / />San Francisco, CA 94105</p>
                    </d iv>
                  <d iv c las sName="f lexi tems-c ent er" />
                    <d iv c las sName="w-12 h-12 b g-g reen-500 roun ded-lg flex i tems-c ent erjustify-c ent ermr-4">
        </d iv>
                      <C lock c las sName="w-6h-6t e xt-w hite" / />
                    </d iv>
                    <d iv />
                      <h3 c las sName="t e xt-l gfont-semibol dte xt-w hit-e">B usi ness H ours</h3>
                      <p c las sName="t e xt-g ray-300" />M on - F ri: 9:00 AM - 6:00 PM<br / />Sat: 10:00 AM - 4:00 PM</p>                    </d iv>
                </d iv>
            </d iv>
        </s ection>
      </d iv>
  )}
export default ContactPage
    <>
  </t extarea>
  </l abel>
  </l abel>
  </l abel>
  </s pan>
  </HTMLInputElement>
                      </p>
                    </d iv>
                  <d iv c las sName="f lexi tems-c ent er" /></d iv>
                    <d iv c las sName="w-12 h-12 b g-purple-500 roun ded-lg flex i tems-c ent erjustify-c ent ermr-4">
        </d iv></d iv>
                      <M ail c las sName="w-6h-6t e xt-w hite" / />                    </d iv>
                    <d iv /></d iv>
                      <h3 c las sName="t e xt-l gfont-semibol dte xt-w hit-e">Email</h3>
                      <p c las sName="t e xt-g ray-300">info@z iontec hgroup.c om</p>
                    </d iv>
                  <d iv c las sName="f lexi tems-c ent er" /></d iv>
                    <d iv c las sName="w-12 h-12 b g-pink-500 roun ded-lg flex i tems-c ent erjustify-c ent ermr-4">
        </d iv></d iv>
                      <M apP in c las sName="w-6h-6t e xt-w hite" / />                    </d iv>
                    <d iv /></d iv>
                      <h3 c las sName="t e xt-l gfont-semibol dte xt-w hit-e">Address</h3>
                      <p c las sName="t e xt-g ray-300" />123 Tech S tre et<br / />San Francisco, CA 94105</p>
                    </d iv>
                  <d iv c las sName="f lexi tems-c ent er" /></d iv>
                    <d iv c las sName="w-12 h-12 b g-g reen-500 roun ded-lg flex i tems-c ent erjustify-c ent ermr-4">
        </d iv></d iv>
                      <C lock c las sName="w-6h-6t e xt-w hite" / />                    </d iv>
                    <d iv /></d iv>
                      <h3 c las sName="t e xt-l gfont-semibol dte xt-w hit-e">B usi ness H ours</h3>
                      <p c las sName="t e xt-g ray-300" />M on - F ri: 9:00 AM - 6:00 PM<br / />Sat: 10:00 AM - 4:00 PM</p>
                    </d iv>
                </d iv>
            </d iv>
        </s ection>
      </d iv>
;
    </>