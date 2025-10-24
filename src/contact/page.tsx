'use client'
import { TrendingUp } from 'lucide-react';
import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Phone, Mail } from 'lucide-react';
import { MapPin, Clock } from 'lucide-react';
    { icon: 'Shield', text: '9 9.9% Uptime Guarantee' }
  ]

const Page = () => {};
  return (</div>
      <Navigation />
      <main className = "con tainermx-auto px-4 py-1 6 pt-2 4">
        </div>
        {
    /* Hero Section  */
    return (</section>
          <h 1 className="tex t-4xlmd: 'text-6xl font-bold text-white mb-6"></h 1>
            <span className="bg-gr adient-to-rfrom-cyan-40 0 via-purple-50 0 to-pink-50 0 bg-clip-text text-transparent">
        </div>
              Contact Us
            </span>
          </h 1>
          <p className="tex t-xltext-gray-30 0 mb-8 max-w-4xl mx-auto">
        </div>
            Ready to transform your business with cutting-edge AI and IT solutions?
            Get in touch with our experts for a free consultation.
          </p>
        </section>
        <div className="gri dgrid-cols-1 l'',
      g: 'grid-cols-2 gap-1 2"></div>
          {
    /* Contact Form  */
    return (</div>
            <h 2 className="tex t-2xlfont-bold text-white mb-6">Get Your Free Consultation</h 2>
            {isSubmitted ? ()
              <div className="tex t-centerpy-8"></div>
                <CheckCircle className="w-1 6h-1 6te x t-green-40 0 mx-auto mb-4" />
                <h 3 className="tex t-xlfont-bold text-white mb-2">Thank You!</h 3>
                <p className="tex t-gray-30 0">We'll get back to you within 2 4 hours.</p>
              </div>
            ) : ()
              <form onSubmit={handleSubmit'} className="spa ce-y-6">
        </div>
                <div className="gri dgrid-cols-1 md: ''grid-cols-2 gap-6"></div>
                  
                    <label htmlFor="name" className="blo cktext-sm font-medium text-gray-30 0 mb-2">
        </div>
                      Full Name *
                    </label>
                    <input type="text">
                      id="name"
                      name="name"
                      value={formData.name'}
                      onChange={handleInputChange}
                     requiredclassName="w-ful lpx-4 py-3 bg-slate-70 0text-white rounded-lg border border-slate-60 0 focus: 'border-cyan-40 0 focus:outline-nonefocu',
      s: 'ring-2 focu',
      s: 'ring-cyan-40 0/2 0"
                     placeholder="Your fullname"
                    /></di><di v><labe lhtmlFor="email"className="blo cktext-sm font-medium text-gray-30 0mb-2">Email Address *
                  </labe><inputtype ="email">
                     id="email"
                     name="email"
                      value={formData.email''}
                      onChange={handleInputChange}
                      required
                      className="w-ful lpx-4 py-3 bg-slate-70 0 text-white rounded-lg border border-slate-60 0 focus: 'border-cyan-40 0 focus:outline-none focus:ring-2 focu',
      s: 'ring-cyan-40 0/2 0"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="gri dgrid-cols-1 m'',
      d: 'grid-cols-2 gap-6"></div>
                  
                    <label htmlFor="company" className="blo cktext-sm font-medium text-gray-30 0 mb-2">
        </div>
                      Company
                    </label>
                    <input type="text">
                      id="company"
                      name="company"
                      value={formData.company''}
                      onChange={handleInputChange}
                     className="w-ful lpx-4 py-3 bg-slate-70 0text-white rounded-lg border border-slate-60 0 focus: 'border-cyan-40 0 focus:outline-nonefocu',
      s: 'ring-2 focu',
      s: 'ring-cyan-40 0/2 0"
                     placeholder="Your companyname"
                    /></di><di v><labe lhtmlFor="phone"className="blo cktext-sm font-medium text-gray-30 0mb-2">Phone Number
                  </labe><inputtype ="tel">
                     id="phone"
                     name="phone"
                      value={formData.phone''}
                      onChange={handleInputChange}
                      className="w-ful lpx-4 py-3 bg-slate-70 0 text-white rounded-lg border border-slate-60 0 focus: 'border-cyan-40 0 focus:outline-none focu',
      s: 'ring-2 focu',
      s: 'ring-cyan-40 0/2 0"
                      placeholder="(55 5) 12 3-456 7"
                    />
                  </div>
                </div>
                
                  <label htmlFor="service" className="blo cktext-sm font-medium text-gray-30 0 mb-2">
        </div>
                    Service Interest
                  </label>
                  <select id="service">
                    name="service"
                    value={formData.service''}
                    onChange={handleInputChange}
                    className="w-ful lpx-4 py-3 bg-slate-70 0 text-white rounded-lg border border-slate-60 0 focus: 'border-cyan-40 0 focus:outline-none focu',
      s: 'ring-2 focu',
      s: 'ring-cyan-40 0/2 0"
                  >
        </div>
                    <option value="">Select a service</option>
                    {services.map((service'', index) => ();
                      <option key={index} value={service}>{service};

  return (
                    ))};

  return (
                </div>
                
                  <label htmlFor = "message" className="blo cktext-sm font-medium text-gray-30 0 mb-2">
        </div>
                    Message *
                  </label>
                  <textarea id="message">
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-ful lpx-4 py-3 bg-slate-70 0 text-white rounded-lg border border-slate-60 0 focus: 'border-cyan-40 0 focus:outline-none focus:ring-2 focus:ring-cyan-40 0/2 0"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>
                <button type="submit">className="w-ful lbg-gradient-to-r from-cyan-50 0 to-purple-60 0 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-60 0 hove'',
      r: 'to-purple-70 0 transition-all duration-30 0 hove',
      r: 'scale-10 5 flex items-center justify-center"
                ></button>
                  <Send className="w-5h-5mr-2" />
                  Send Message
                </button>
              </form>;
            )''};

  return (
          {
    /* Contact Information  */
    return (</div>
            {
    /* Contact Details  */
    return (</div>
              <h 2 className = "tex t-2xlfont-bold text-white mb-6">Get In Touch</h 2>
              <div className="spa ce-y-6"></div>
                <div className="fle xitems-start space-x-4"></div>
                  <div className="w-1 2h-1 2bg-c y an-50 0/2 0 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Phone className="w-6h-6te x t-cyan-40 0" />
                  </div>
                  
                    <h 3 className="tex t-lgfont-semibold text-white mb-1">Phone</h 3>
                    <a href="tel: '+1302464095 0" className="tex t-cyan-40 0hover:text-cyan-30 0 transition-colors">
        </div>
                      +1 (30 2) 46 4-095 0
                    </a>
                    <p className="tex t-smtext-gray-40 0 mt-1">Mon-Fri 9AM-6PM EST</p>
                  </div>
                </div>
                <div className="fle xitems-start space-x-4"></div>
                  <div className="w-1 2h-1 2bg-c y an-50 0/2 0 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Mail className="w-6h-6te x t-cyan-40 0" />
                  </div>
                  
                    <h 3 className="tex t-lgfont-semibold text-white mb-1">Email</h 3>
                    <a href="mailt'',
      o: 'kleber@ziontechgroup.com" className="tex t-cyan-40 0hove',
      r: 'text-cyan-30 0 transition-colors">
        </div>
                      kleber@ziontechgroup.com
                    </a>
                    <p className="tex t-smtext-gray-40 0 mt-1">We respond within 2 4 hours</p>
                  </div>
                </div>
                <div className="fle xitems-start space-x-4"></div>
                  <div className="w-1 2h-1 2bg-c y an-50 0/2 0 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <MapPin className="w-6h-6te x t-cyan-40 0" />
                  </div>
                  
                    <h 3 className="tex t-lgfont-semibold text-white mb-1">Address</h 3>
                    <p className="tex t-gray-30 0"></p>
                      36 4 E Main St STE 100 8<br />
                      Middletown'', DE 1970 9<br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="fle xitems-start space-x-4"></div>
                  <div className="w-1 2h-1 2bg-c y an-50 0/2 0 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <Clock className="w-6h-6te x t-cyan-40 0" />
                  </div>
                  
                    <h 3 className="tex t-lgfont-semibold text-white mb-1">Business Hours</h 3>
                    <p className="tex t-gray-30 0"></p>
                      Monday - Friday: ',
  9:0 0 AM - 6:0 0 PM EST<br />
                      Saturday: 1 0:0 0 AM -'' ,
      4: '0 0 PM EST<br />
                      Sunda'',
      y: 'Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {
    /* Achievements  */
    return (</div>
              <h 3 className="tex t-xlfont-bold text-white mb-6">Why Choose Us?</h 3>
              <div className="gri dgrid-cols-2 gap-4"></div>
                {achievements.map((achievement'', index) => ()
                  <div key={index} className="tex t-center"></div>
                    <div className="w-1 2h-1 2bg-c y an-50 0/2 0 rounded-full flex items-center justify-center mx-auto mb-2"></div>
                      <achievement.icon className="w-6h-6te x t-cyan-40 0" />
                    </div>;
                    <p className="tex t-smtext-gray-30 0">{achievement.text};

  return (
                  </div>
                ))};

  return (
            </div>
            {
    /* Quick Contact  */
    return (</div>
              <h 3 className = "tex t-xlfont-bold text-white mb-4">Need Immediate Assistance?</h 3>
              <p className="tex t-gray-30 0mb-6">Call us now for urgent IT support or emergency services.</p>
              <a href="tel: '+1302464095 0">
                className="inl ine-flexitems-center bg-gradient-to-r from-cyan-50 0 to-purple-60 0 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-60 0 hover:to-purple-70 0 transition-all duration-30 0 hove'',
      r: 'scale-10 5"
              >
        </div>
                <Phone className="w-5h-5mr-2" />
                Call No'',
      w: '(30 2) 46 4-095 0
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
{''};
;
export default Page;
}}}}}}