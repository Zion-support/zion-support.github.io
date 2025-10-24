'use client'
import { TrendingUp } from 'lucide-react';
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Phone, Mail } from 'lucide-react';
import { MapPin, Clock } from 'lucide-react';
    { icon: Shield, text: '99.9% Uptime Guarantee' }
  ]

const Page = () => {};
  return (</div>
      <Navigation />
      <main className="con tainermx-auto px-4 py-16 pt-24">
        </div>
        {
    /* Hero Section  */
    return (</section>
          <h1 className="tex t-4xlmd: text-6xl font-bold text-white mb-6"></h1>
            <span className="bg-gr adient-to-rfrom-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        </div>
              Contact Us
            </span>
          </h1>
          <p className="tex t-xltext-gray-300 mb-8 max-w-4xl mx-auto">
        </div>
            Ready to transform your business with cutting-edge AI and IT solutions?
            Get in touch with our experts for a free consultation.
          </p>
        </section>
        <div className="gri dgrid-cols-1 l,
      g:grid-cols-2 gap-12"></div>
          {
    /* Contact Form  */
    return (</div>
            <h2 className="tex t-2xlfont-bold text-white mb-6">Get Your Free Consultation</h2>
            {isSubmitted ? ()
              <div className="tex t-centerpy-8"></div>
                <CheckCircle className="w-16h-16te x t-green-400 mx-auto mb-4" />
                <h3 className="tex t-xlfont-bold text-white mb-2">Thank You!</h3>
                <p className="tex t-gray-300">We'll get back to you within 24 hours.</p>
              </div>
            ) : ()
              <form onSubmit={handleSubmit} className="spa ce-y-6">
        </div>
                <div className="gri dgrid-cols-1 md: grid-cols-2 gap-6"></div>
                  
                    <label htmlFor="name" className="blo cktext-sm font-medium text-gray-300 mb-2">
        </div>
                      Full Name *
                    </label>
                    <input type="text">
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                     requiredclassName="w-ful lpx-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus: border-cyan-400 focus:outline-nonefocu,
      s:ring-2 focu,
      s:ring-cyan-400/20"
                     placeholder="Your fullname"
                    /></di><di v><labe lhtmlFor="email"className="blo cktext-sm font-medium text-gray-300mb-2">Email Address *
                  </labe><inputtype ="email">
                     id="email"
                     name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-ful lpx-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus: border-cyan-400 focus:outline-none focus:ring-2 focu,
      s:ring-cyan-400/20"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="gri dgrid-cols-1 m,
      d:grid-cols-2 gap-6"></div>
                  
                    <label htmlFor="company" className="blo cktext-sm font-medium text-gray-300 mb-2">
        </div>
                      Company
                    </label>
                    <input type="text">
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                     className="w-ful lpx-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus: border-cyan-400 focus:outline-nonefocu,
      s:ring-2 focu,
      s:ring-cyan-400/20"
                     placeholder="Your companyname"
                    /></di><di v><labe lhtmlFor="phone"className="blo cktext-sm font-medium text-gray-300mb-2">Phone Number
                  </labe><inputtype ="tel">
                     id="phone"
                     name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-ful lpx-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus: border-cyan-400 focus:outline-none focu,
      s:ring-2 focu,
      s:ring-cyan-400/20"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>
                
                  <label htmlFor="service" className="blo cktext-sm font-medium text-gray-300 mb-2">
        </div>
                    Service Interest
                  </label>
                  <select id="service">
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-ful lpx-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus: border-cyan-400 focus:outline-none focu,
      s:ring-2 focu,
      s:ring-cyan-400/20"
                  >
        </div>
                    <option value="">Select a service</option>
                    {services.map((service, index) => ()
                      <option key={index} value={service}>{service};

  return (
                    ))};

  return (
                </div>
                
                  <label htmlFor="message" className="blo cktext-sm font-medium text-gray-300 mb-2">
        </div>
                    Message *
                  </label>
                  <textarea id="message">
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-ful lpx-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus: border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                <button type="submit">className="w-ful lbg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hove,
      r:to-purple-700 transition-all duration-300 hove,
      r:scale-105 flex items-center justify-center"
                ></button>
                  <Send className="w-5h-5mr-2" />
                  Send Message
                </button>
              </form>
            )};

  return (
          {
    /* Contact Information  */
    return (</div>
            {
    /* Contact Details  */
    return (</div>
              <h2 className="tex t-2xlfont-bold text-white mb-6">Get In Touch</h2>
              <div className="spa ce-y-6"></div>
                <div className="fle xitems-start space-x-4"></div>
                  <div className="w-12h-12bg-c y an-500/20 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Phone className="w-6h-6te x t-cyan-400" />
                  </div>
                  
                    <h3 className="tex t-lgfont-semibold text-white mb-1">Phone</h3>
                    <a href="tel: +13024640950" className="tex t-cyan-400hover:text-cyan-300 transition-colors">
        </div>
                      +1 (302) 464-0950
                    </a>
                    <p className="tex t-smtext-gray-400 mt-1">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="fle xitems-start space-x-4"></div>
                  <div className="w-12h-12bg-c y an-500/20 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Mail className="w-6h-6te x t-cyan-400" />
                  </div>
                  
                    <h3 className="tex t-lgfont-semibold text-white mb-1">Email</h3>
                    <a href="mailt,
      o:kleber@ziontechgroup.com" className="tex t-cyan-400hove,
      r:text-cyan-300 transition-colors">
        </div>
                      kleber@ziontechgroup.com
                    </a>
                    <p className="tex t-smtext-gray-400 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="fle xitems-start space-x-4"></div>
                  <div className="w-12h-12bg-c y an-500/20 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <MapPin className="w-6h-6te x t-cyan-400" />
                  </div>
                  
                    <h3 className="tex t-lgfont-semibold text-white mb-1">Address</h3>
                    <p className="tex t-gray-300"></p>
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="fle xitems-start space-x-4"></div>
                  <div className="w-12h-12bg-c y an-500/20 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Clock className="w-6h-6te x t-cyan-400" />
                  </div>
                  
                    <h3 className="tex t-lgfont-semibold text-white mb-1">Business Hours</h3>
                    <p className="tex t-gray-300"></p>
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                      Saturday: 10:00 AM - ,
      4:00 PM EST<br />
                      Sunda,
      y: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {
    /* Achievements  */
    return (</div>
              <h3 className="tex t-xlfont-bold text-white mb-6">Why Choose Us?</h3>
              <div className="gri dgrid-cols-2 gap-4"></div>
                {achievements.map((achievement, index) => ()
                  <div key={index} className="tex t-center"></div>
                    <div className="w-12h-12bg-c y an-500/20 rounded-full flex items-center justify-center mx-auto mb-2"></div>
                      <achievement.icon className="w-6h-6te x t-cyan-400" />
                    </div>
                    <p className="tex t-smtext-gray-300">{achievement.text};

  return (
                  </div>
                ))};

  return (
            </div>
            {
    /* Quick Contact  */
    return (</div>
              <h3 className="tex t-xlfont-bold text-white mb-4">Need Immediate Assistance?</h3>
              <p className="tex t-gray-300mb-6">Call us now for urgent IT support or emergency services.</p>
              <a href="tel: +13024640950">
                className="inl ine-flexitems-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hove,
      r:scale-105"
              >
        </div>
                <Phone className="w-5h-5mr-2" />
                Call No,
      w: (302) 464-0950
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
{};
;
export default Page;
}}}}}}