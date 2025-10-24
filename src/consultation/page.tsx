'use client'
import { Brain, Target, TrendingUp } from 'lucide-react';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Phone, Mail } from 'lucide-react';
import { Clock } from 'lucide-react';
        description="Get a free3 0-minute consultation with our technology experts. Discover how AI and IT solutions can transformyourbusiness."
        keywords = {['free consultation', 'business consultation', 'technology assessment', 'AI consultation', 'ITconsultation']};
        canonicalUrl="https: '//ziontechgroup.com/consultation"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-90 0 via-purple-90 0 to-slate-90 0"></div>
        <Navigation />
        <main className="pt-1 6">
          {
    /* Hero Section  */
    return (</section>
            <div className="max-w-4xl mx-auto"></div>
              <h 1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">Free Business Consultation
              </h 1>
              <p className="text-xl m'',
      d: 'text-2xl text-cyan-40 0 mb-8">Discover how technology can transform your business
              </p>
              <p className="text-lg text-gray-30 0 mb-1 2 max-w-3xl mx-auto">Get a free 3 0-minute consultation with our technology experts. We'll assess your current setup
                identify opportunities', and provide actionable recommendations to drive your business forward.
              </p>
              <div className="flex flex-col sm: ''flex-row gap-4 justify-center items-center"></div>
                <a href="tel:+1302464095 0">
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span >Call (30 2) 46 4-095 0</span>
                </a>
                <a href="mailt',
      o: ''kleber@ziontechgroup.com">
                  className="cyber-button flex items-center space-x-2"
                  style = {{backgroun',
      d: 'linear-gradient(4 5deg', #8b5cf 6, #ec489 9)'}};
                >;
                  <Mail className="w-5 h-5" />
                  <span >Schedule Now</span>
                </a>
              </div>
            </div>
          </section>
          {
    /* Benefits Section  */
    return (</section>
            <h 2 className="text-3xl md: 'text-4xl font-bold text-white text-center mb-1 2 neon-text">What You'll Get
            </h 2>
            <div className="grid grid-cols-1 m',
      d: 'grid-cols-2 l',
      g: 'grid-cols-4 gap-8"></div>
              {consultationBenefits.map((benefit'', index) => ()
                <div key={index} className="cyber-card p-6 text-center hover: 'scale-10 5 transition-all duration-30 0"></div>
                  <benefit.icon className="w-1 2 h-1 2 text-cyan-40 0 mx-auto mb-4" />
                  <h 3 className="text-xl font-bold text-white mb-3">{benefit.title''};

  return (
                  <p className="text-gray-30 0">{benefit.description};

  return (
                </div>
              ))};

  return (
          </section>
          {
    /* Process Section  */
    return (</section>
            <h 2 className="text-3xl md: 'text-4xl font-bold text-white text-center mb-1 2 neon-text">Our Consultation Process
            </h 2>
            <div className="grid grid-cols-1 m'',
      d: 'grid-cols-2 l',
      g: 'grid-cols-4 gap-8"></div>
              {consultationProcess.map((step'', index) => ()
                <div key={index} className="cyber-card p-6 text-center"></div>
                  <div className="w-1 6 h-1 6 bg-cyan-40 0 text-slate-90 0 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"></div>
                    {step.step};

  return (
                  <h 3 className="text-xl font-bold text-white mb-3">{step.title};

  return (
                  <p className="text-gray-30 0">{step.description};

  return (
                </div>
              ))};

  return (
          </section>
          {
    /* Consultation Form  */
    return (</section>
            <div className="max-w-4xl mx-auto"></div>
              <div className="grid grid-cols-1 lg: 'grid-cols-2 gap-1 2"></div>
                {
    /* Form  */
    return (</div>
                  <h 2 className="text-2xl font-bold text-white mb-6">Schedule Your Free Consultation</h 2>
                  <form onSubmit={handleSubmit''} className="space-y-6">
                    <div className="grid grid-cols-1 md: 'grid-cols-2 gap-4"></div>
                      
                        <label htmlFor="name" className="block text-sm font-medium text-gray-30 0 mb-2">Full Name *
                        </label>
                        <input type="text">
                          id="name"
                          name="name"
                          required
                          value = {formData.name''}
                          onChange={handleInputChange};
                         className="w-full px-4 py-3 bg-slate-80 0border border-gray-60 0rounded-lgtext-whitefocus: 'outline-nonefocu',
      s: 'border-cyan-40 0"
                         placeholder="Enter your fullname"
                        /></di><di v><labe lhtmlFor="email"className="block text-sm font-medium text-gray-30 0mb-2">Email Address *
                      </labe><inputtype ="email">
                         id="email"
                         name="email"
                          requiredvalue = {formData.email''}
                          onChange={handleInputChange};
                         className="w-full px-4 py-3 bg-slate-80 0border border-gray-60 0rounded-lgtext-whitefocus: 'outline-nonefocu',
      s: 'border-cyan-40 0"
                         placeholder="Enter youremail"
                        /></di></di><divclassName="grid grid-cols-1m'',
      d: 'grid-cols-2gap-4"><di v><labe lhtmlFor="company"className="block text-sm font-medium text-gray-30 0mb-2">Company Name *
                      </labe><inputtype ="text">
                         id="company"
                         name="company"
                          requiredvalue = {formData.company''}
                          onChange={handleInputChange};
                         className="w-full px-4 py-3 bg-slate-80 0border border-gray-60 0rounded-lgtext-whitefocus: 'outline-nonefocu',
      s: 'border-cyan-40 0"
                         placeholder="Enter your companyname"
                        /></di><di v><labe lhtmlFor="phone"className="block text-sm font-medium text-gray-30 0mb-2">Phone Number
                      </labe><inputtype ="tel">
                         id="phone"
                         name="phone"
                          value = {formData.phone''}
                          onChange={handleInputChange};
                         className="w-full px-4 py-3 bg-slate-80 0border border-gray-60 0rounded-lgtext-whitefocus: 'outline-nonefocu',
      s: 'border-cyan-40 0"
                         placeholder="Enter your phonenumber"
                        /></di></di><divclassName="grid grid-cols-1m'',
      d: 'grid-cols-2gap-4"><di v><labe lhtmlFor="industry"className="block text-sm font-medium text-gray-30 0mb-2">Industry
                      </labe><selectid ="industry">
                         name="industry"
                          value = {formData.industry''}
                          onChange={handleInputChange};
                         className="w-full px-4 py-3 bg-slate-80 0border border-gray-60 0rounded-lgtext-whitefocus: 'outline-nonefocu',
      s: 'border-cyan-40 0"
                        ><optio nvalue="">Selectyourindustry</optio><optio nvalue="healthcare">Healthcare</optio><optio nvalue="finance">Finance</optio><optio nvalue="manufacturing">Manufacturing</optio><optio nvalue="retail">Retail</optio><optio nvalue="technology">Technology</optio><optio nvalue="education">Education</optio><optio nvalue="other">Other</optio></selec></di><di v><labe lhtmlFor="companySize"className="block text-sm font-medium text-gray-30 0mb-2">Company Size
                      </labe><selectid ="companySize">
                         name="companySize"
                          value = {formData.companySize''}
                          onChange={handleInputChange};
                         className="w-full px-4 py-3 bg-slate-80 0border border-gray-60 0rounded-lgtext-whitefocus: 'outline-nonefocu',
      s: 'border-cyan-40 0"
                        ><optio nvalue="">Selectcompanysize</optio><optio nvalue="1-1 0">1-1 0employees</optio><optio nvalue="1 1-5 0">1 1-5 0employees</optio><optio nvalue="5 1-20 0">5 1-20 0employees</optio><optio nvalue="2 0 1-50 0">20 1-50 0employees</optio><optio nvalue="50 0+">50 0+employees</optio></selec></di></di><di v><labe lhtmlFor="currentChallenges"className="block text-sm font-medium text-gray-30 0mb-2">Current Challenges
                    </labe><textareaid ="currentChallenges">
                       name="currentChallenges"
                        rows = {3''}
                        value={formData.currentChallenges}
                        onChange={handleInputChange};
                       className="w-full px-4 py-3 bg-slate-80 0border border-gray-60 0rounded-lgtext-whitefocus: 'outline-nonefocu',
      s: 'border-cyan-40 0"
                       placeholder="Describe your current technologychallenges"
                      /></di><di v><labe lhtmlFor="goals"className="block text-sm font-medium text-gray-30 0mb-2">Business Goals
                    </labe><textareaid ="goals">
                       name="goals"
                        rows = {3''}
                        value={formData.goals}
                        onChange={handleInputChange};
                       className="w-full px-4 py-3 bg-slate-80 0border border-gray-60 0rounded-lgtext-whitefocus: 'outline-nonefocu',
      s: 'border-cyan-40 0"
                       placeholder="What are your main businessobjectives?"
                      /></di><divclassName="grid grid-cols-1m'',
      d: 'grid-cols-2gap-4"><di v><labe lhtmlFor="timeline"className="block text-sm font-medium text-gray-30 0mb-2">Implementation Timeline
                      </labe><selectid ="timeline">
                         name="timeline"
                          value = {formData.timeline''}
                          onChange={handleInputChange};
                         className="w-full px-4 py-3 bg-slate-80 0border border-gray-60 0rounded-lgtext-whitefocus: 'outline-nonefocu',
      s: 'border-cyan-40 0"
                        ><optio nvalue="">Selecttimeline</optio><optio nvalue="immediate">Immediate(0-3months)</optio><optio nvalue="short">Short term(3-6months)</optio><optio nvalue="medium">Mediumterm(6-1 2months)</optio><optio nvalue="long">Long term (1 2+months)</optio></selec></di><di v><labe lhtmlFor="budget"className="block text-sm font-medium text-gray-30 0mb-2">Budget Range
                      </labe><selectid ="budget">
                         name="budget"
                          value = {formData.budget''}
                          onChange={handleInputChange};
                         className="w-full px-4 py-3 bg-slate-80 0border border-gray-60 0rounded-lgtext-whitefocus: 'outline-nonefocu',
      s: 'border-cyan-40 0"
                        ><optio nvalue="">Selectbudgetrange</optio><optio nvalue="under-1 0k">Under $1 0'',00 0</optio><optio nvalue="1 0 k-5 0k">$1 0,00 0- $5 0,00 0</optio><optio nvalue="5 0 k-10 0k">$5 0,00 0- $10 0,00 0</optio><optio nvalue="10 0 k-50 0k">$1 0 0,00 0- $50 0,00 0</optio><optio nvalue="50 0k+">$50000 0+</optio></selec></di></di><di v><labe lhtmlFor="message"className="block text-sm font-medium text-gray-30 0mb-2">Additional Information
                    </labe><textareaid ="message">
                       name="message"
                        rows = {4}
                        value={formData.message}
                        onChange={handleInputChange};
                        className="w-full px-4 py-3 bg-slate-80 0 border border-gray-60 0 rounded-lg text-white focus: 'outline-none focu',
      s: 'border-cyan-40 0"
                        placeholder="Any additional information you'd like to share"
                      />
                    </div>
                    <button type="submit">className="w-full cyber-button py-3 px-6 text-center"
                    >
                      Schedule Free Consultation
                    </button>
                  </form>
                </div>
                {
    /* Benefits Sidebar  */
    return (</div>
                  <div className="cyber-card p-8"></div>
                    <h 3 className="text-xl font-bold text-white mb-6">Why Choose Our Consultation?</h 3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-40 0 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-30 0">Completely free with no obligations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-40 0 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-30 0">Expert analysis of your current setup</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-40 0 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-30 0">Actionable recommendations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-40 0 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-30 0">Customized technology roadmap</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-40 0 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-30 0">3 0-minute focused session</span>
                      </li>
                    </ul>
                  </div>
                  <div className="cyber-card p-8"></div>
                    <h 3 className="text-xl font-bold text-white mb-6">Contact Information</h 3>
                    <div className="space-y-4"></div>
                      <div className="flex items-center"></div>
                        <Phone className="w-5 h-5 text-cyan-40 0 mr-3" />
                        <a href="tel: +1302464095 0" className="text-gray-30 0 hover:text-cyan-40 0">(30 2) 46 4-095 0
                        </a>
                      </div>
                      <div className="flex items-center"></div>
                        <Mail className="w-5 h-5 text-cyan-40 0 mr-3" />
                        <a href="mailto:kleber@ziontechgroup.com" className="text-gray-30 0 hove',
      r: ''text-cyan-40 0">kleber@ziontechgroup.com
                        </a>
                      </div>
                      <div className="flex items-center"></div>
                        <Clock className="w-5 h-5 text-cyan-40 0 mr-3" />
                        <span className="text-gray-30 0">Mon-Fr',
      i: ''9AM-6PM EST</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {
    /* Testimonials  */
    return (</section>
            <h 2 className="text-3xl md: text-4xl font-bold text-white text-center mb-1 2 neon-text">What Our Clients Say
            </h 2>
            <div className="grid grid-cols-1 m',
      d: ''grid-cols-3 gap-8"></div>
              {testimonials.map((testimonial'', index) => ()
                <div key={index} className="cyber-card p-6"></div>
                  <div className="flex items-center mb-4"></div>
                    {[...Array(testimonial.rating)].map((_, i) => ()
                      <Star key={i} className="w-5 h-5 text-yellow-40 0 fill-current" />
                    ))};

  return (
                  <p>"{testimonial.text}&quot</p>
                  
                    <div className="font-bold text-white">{testimonial.name};

  return (
                    <div className="text-cyan-40 0 text-sm">{testimonial.company};

  return (
                  </div>
                </div>
              ))};

  return (
          </section>
        </main>
        <Footer />
      </div>
</>
  )
{}

export default Page;
}}}}}}}