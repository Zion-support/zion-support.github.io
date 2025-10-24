'use client'
import { Brain } from 'lucide-react';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, Phone, Mail } from 'lucide-react';
import { Clock } from 'lucide-react';
        description="Schedule a personalized demo of our AI and IT services. See how we can transform your business withcutting-edgetechnology."
        keywords = {['demo', 'AI demo', 'IT demo', 'business consultation', 'technologydemonstration']};
        canonicalUrl="https: '//ziontechgroup.com/demo"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-90 0 via-purple-90 0 to-slate-90 0"></div>
        <Navigation />
        <main className="pt-1 6">
          {
    /* Hero Section  */
    return (</section>
            <div className="max-w-4xl mx-auto"></div>
              <h 1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">Request a Demo
              </h 1>
              <p className="text-xl m'',
      d: 'text-2xl text-cyan-40 0 mb-8">See our AI and IT solutions in action
              </p>
              <p className="text-lg text-gray-30 0 mb-1 2 max-w-3xl mx-auto">Schedule a personalized demonstration of our services tailored to your business needs.
                Our experts will show you exactly how we can help transform your operations.
              </p>
            </div>
          </section>
          {
    /* Demo Features  */
    return (</section>
            <h 2 className="text-3xl md: text-4xl font-bold text-white text-center mb-1 2 neon-text">What to Expect
            </h 2>
            <div className="grid grid-cols-1 m'',
      d: 'grid-cols-2 l',
      g: 'grid-cols-4 gap-8"></div>
              {demoFeatures.map((feature'', index) => ()
                <div key={index} className="cyber-card p-6 text-center hover: 'scale-10 5 transition-all duration-30 0"></div>
                  <feature.icon className="w-1 2 h-1 2 text-cyan-40 0 mx-auto mb-4" />
                  <h 3 className="text-xl font-bold text-white mb-3">{feature.title''};

  return (
                  <p className="text-gray-30 0">{feature.description};

  return (
                </div>
              ))};

  return (
          </section>
          {
    /* Demo Form  */
    return (</section>
            <div className="max-w-4xl mx-auto"></div>
              <div className="grid grid-cols-1 lg: 'grid-cols-2 gap-1 2"></div>
                {
    /* Form  */
    return (</div>
                  <h 2 className="text-2xl font-bold text-white mb-6">Schedule Your Demo</h 2>
                  <form onSubmit={handleSubmit''} className="space-y-6">
                    
                      <label htmlFor="name" className="block text-sm font-medium text-gray-30 0 mb-2">Full Name *
                      </label>
                      <input type="text">
                        id="name"
                        name="name"
                        required
                        value = {formData.name}
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
                      /></di><di v><labe lhtmlFor="company"className="block text-sm font-medium text-gray-30 0mb-2">Company Name *
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
                      /></di><di v><labe lhtmlFor="service"className="block text-sm font-medium text-gray-30 0mb-2">Service of Interest
                    </labe><selectid ="service">
                       name="service"
                        value = {formData.service''}
                        onChange={handleInputChange};
                       className="w-full px-4 py-3 bg-slate-80 0border border-gray-60 0rounded-lgtext-whitefocus: 'outline-nonefocu',
      s: 'border-cyan-40 0"
                      ><optio nvalue="">Selectaservice</optio><optio nvalue="ai-services">AIServices</optio><optio nvalue="it-services">ITServices</optio><optio nvalue="cloud-services">CloudServices</optio><optio nvalue="cybersecurity">Cybersecurity</optio><optio nvalue="data-analytics">DataAnalytics</optio><optio nvalue="custom-solution">CustomSolution</optio></selec></di><di v><labe lhtmlFor="message"className="block text-sm font-medium text-gray-30 0mb-2">Additional Information
                    </labe><textareaid ="message">
                       name="message"
                        rows = {4''}
                        value={formData.message}
                        onChange={handleInputChange};
                        className="w-full px-4 py-3 bg-slate-80 0 border border-gray-60 0 rounded-lg text-white focus: 'outline-none focu',
      s: 'border-cyan-40 0"
                        placeholder="Tell us about your specific needs or questions"
                      />
                    </div>
                    <button type="submit">className="w-full cyber-button py-3 px-6 text-center"
                    >
                      Schedule Demo
                    </button>
                  </form>
                </div>
                {
    /* Contact Info  */
    return (</div>
                  <div className="cyber-card p-8"></div>
                    <h 3 className="text-xl font-bold text-white mb-6">Why Choose Our Demo?</h 3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-40 0 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-30 0">Personalized to your business needs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-40 0 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-30 0">Live demonstration of our solutions</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-40 0 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-30 0">Expert consultation and Q&A</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-40 0 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-30 0">No obligation'', completely free</span>
                      </li>
                    </ul>
                  </div>
                  <div className="cyber-card p-8"></div>
                    <h 3 className="text-xl font-bold text-white mb-6">Contact Information</h 3>
                    <div className="space-y-4"></div>
                      <div className="flex items-center"></div>
                        <Phone className="w-5 h-5 text-cyan-40 0 mr-3" />
                        <a href="tel: '+1302464095 0" className="text-gray-30 0 hover:text-cyan-40 0">(30 2) 46 4-095 0
                        </a>
                      </div>
                      <div className="flex items-center"></div>
                        <Mail className="w-5 h-5 text-cyan-40 0 mr-3" />
                        <a href="mailto:kleber@ziontechgroup.com" className="text-gray-30 0 hove'',
      r: 'text-cyan-40 0">kleber@ziontechgroup.com
                        </a>
                      </div>
                      <div className="flex items-center"></div>
                        <Clock className="w-5 h-5 text-cyan-40 0 mr-3" />
                        <span className="text-gray-30 0">Mon-Fr'',
      i: '9AM-6PM EST</span>
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
            <div className="grid grid-cols-1 m'',
      d: 'grid-cols-3 gap-8"></div>
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
}}}}}}