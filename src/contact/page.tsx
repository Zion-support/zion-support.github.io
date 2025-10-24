import { TrendingUp }  from "lucide-react";
import React, { useState }  from "react";import { Send }  from "lucide-react";
import Navigation  from "../components/Navigation";import Footer  from "../components/Footer";
import { CheckCircle, Phone, Mail }  from "lucide-react";import { MapPin, Clock }  from "lucide-react";'use client'
constContactPage: React.FC= () =>{const [formDatasetFormData] = useState({
    name: ''
    email: ''
    company: ''
    phone: ''
    service: ''
    message: '')
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev
      [name]: value;)
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend;
    // // // console.log('Form submitted:', formData)
    setIsSubmitted(true)
    // Reset form after 3 seconds;
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: ''
        email: ''
        company: ''
        phone: ''
        service: ''
        message: '')
      })
    }, 3000)
  }
  constservices= [
    'AI Services'
    'IT Services'
    'Micro SAAS Solutions'
    'Cloud Migration'
    'Cybersecurity'
    'DevOps & CI/CD'
    'Database Management'
    'Mobile App Development'
    'Custom Development'
    'Other'
  ]
  const achievements = [
    { icon: Users, text: '100+ Happy Clients' }
    { icon: Award, text: '50+ Successful Projects' }
    { icon: TrendingUp, text: '300% Average ROI' }
    {
  icon: Shield, text: '99.9% Uptime Guarantee'
}
  ]
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
<//div>
      <Navigation />
        </Navigation>
        </Navigation>
        </Navigation>
      </Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        </main>
        </main>
        </main>
        </div>
        </main>
      </main className="container mx-auto px-4 py-16 pt-24">
        </div>
        {
  /* Hero Section */
}
        <section className="text-center mb-16"></section>
<//section>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
<//h1>
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        </span>
        </span>
        </span>
        </div>
        </span>
            </span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        </div>
              Contact Us;
            </span>

            <//span>
          </h1>

          <//h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
        </p>
        </p>
        </p>
        </div>
        </p>
          </p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
        </div>
            Ready to transform your business with cutting-edge AI and IT solutions?
            Get in touch with our experts for a free consultation.
          </p>

          <//p>
        </section>

        <//section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
<//div>
          {
  /* Contact Form */
}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8"></div>
<//div>
            <h2 className="text-2xl font-bold text-white mb-6">Get Your Free Consultation</h2>
<//h2>
            {isSubmitted ? (
              <div className="text-center py-8"></div>
<//div>
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
        </CheckCircle>
        </CheckCircle>
        </CheckCircle>
                </CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Thank You!</h3>
<//h3>
                <p className="text-gray-300">We'll get back to you within 24 hours.</p>
<//p>
              </div>

              <//div>)
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
        </form>
        </form>
        </form>
        </div>
              </form onSubmit={handleSubmit} className="space-y-6">
        </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
<//div>
                  <div></div>
<//div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
        </label>
        </label>
        </label>
        </div>
                    </label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
        </div>
                      Full Name *
                    </label>

                    <//label>
                    <input;
                      type="text"
                      id="name"
                      name="name"
                      value={
  formData.name
}
                      onChange={
  handleInputChange
}
                     requiredclassName="w-full px-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus: border-cyan-400 focus:outline-nonefocus:ring-2 focus:ring-cyan-400/20"
                     placeholder="Your fullname"
                    /></di><di v><labelhtmlFor="email"className="block text-sm font-medium text-gray-300mb-2">Email Address *
                  </labe><inputtype ="email"
                     id="email"
                     name="email"
                      value={
  formData.email
}
                      onChange={
  handleInputChange
}
                      required;
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus: border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="your@email.com"
                    />
        </inputtype>
        </inputtype>
        </inputtype>
</inputtype="email"
                     id="email"
                     name="email"
                      value={
  formData.email
}
                      onChange={
  handleInputChange
}
                      required;
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus: border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="your@email.com"
                    />
                  </div>

                  <//div>
                </div>

                <//div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
<//div>
                  <div></div>
<//div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
        </label>
        </label>
        </label>
        </div>
                    </label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
        </div>
                      Company;
                    </label>

                    <//label>
                    <input;
                      type="text"
                      id="company"
                      name="company"
                      value={
  formData.company
}
                      onChange={
  handleInputChange
}
                     className="w-full px-4 py-3 bg-slate-700text-white rounded-lg border border-slate-600 focus: border-cyan-400 focus:outline-nonefocus:ring-2 focus:ring-cyan-400/20"
                     placeholder="Your companyname"
                    /></di><di v><labelhtmlFor="phone"className="block text-sm font-medium text-gray-300mb-2">Phone Number;
                  </labe><inputtype ="tel"
                     id="phone"
                     name="phone"
                      value={
  formData.phone
}
                      onChange={
  handleInputChange
}
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus: border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="(555) 123-4567"
                    />
        </inputtype>
        </inputtype>
        </inputtype>
</inputtype="tel"
                     id="phone"
                     name="phone"
                      value={
  formData.phone
}
                      onChange={
  handleInputChange
}
                      className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus: border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <//div>
                </div>

                <//div>
                <div></div>
<//div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
        </label>
        </label>
        </label>
        </div>
                  </label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
        </div>
                    Service Interest;
                  </label>

                  <//label>
                  <select ;
                    id="service"
                    name="service"
                    value={
  formData.service
}
                    onChange={
  handleInputChange
}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20">
        </select>
        </select>
        </select>
        </div>
                  </select;
                    id="service"
                    name="service"
                    value={
  formData.service
}
                    onChange={
  handleInputChange
}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20">
        </div>
                    <option value="">Select a service</option>
<//option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
<//option>
                    ))}
                  </select>

                  <//select>
                </div>

                <//div>
                <div></div>
<//div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
        </label>
        </label>
        </label>
        </div>
                  </label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
        </div>
                    Message *
                  </label>

                  <//label>
                  <textarea ;
                    id="message"
                    name="message"
                    value={
  formData.message
}
                    onChange={
  handleInputChange
}
                    required;
                    rows={
  5
}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus: border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Tell us about your project and how we can help..."
                  />
        </textarea>
        </textarea>
        </textarea>
                  </textarea;
                    id="message"
                    name="message"
                    value={
  formData.message
}
                    onChange={
  handleInputChange
}
                    required;
                    rows={
  5
}
                    className="w-full px-4 py-3 bg-slate-700 text-white rounded-lg border border-slate-600 focus: border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <//div>
                <button;
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                ></button>
<//button>
                  <Send className="w-5 h-5 mr-2" />
        </Send>
        </Send>
        </Send>
                  </Send className="w-5 h-5 mr-2" />
                  Send Message;
                </button>

                <//button>
              </form>

              <//form>
            )}
          </div>

          <//div>
          {
  /* Contact Information */
}
          <div className="space-y-8"></div>
<//div>
            {
  /* Contact Details */
}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8"></div>
<//div>
              <h2 className="text-2xl font-bold text-white mb-6">Get In Touch</h2>
<//h2>
              <div className="space-y-6"></div>
<//div>
                <div className="flex items-start space-x-4"></div>
<//div>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0"></div>
<//div>
                    <Phone className="w-6 h-6 text-cyan-400" />
        </Phone>
        </Phone>
        </Phone>
                    </Phone className="w-6 h-6 text-cyan-400" />
                  </div>

                  <//div>
                  <div></div>
<//div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
<//h3>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
        </a>
        </a>
        </a>
        </div>
                    </a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
        </div>
                      +1 (302) 464-0950;
                    </a>

                    <//a>
                    <p className="text-sm text-gray-400 mt-1">Mon-Fri 9AM-6PM EST</p>
<//p>
                  </div>

                  <//div>
                </div>

                <//div>
                <div className="flex items-start space-x-4"></div>
<//div>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0"></div>
<//div>
                    <Mail className="w-6 h-6 text-cyan-400" />
        </Mail>
        </Mail>
        </Mail>
                    </Mail className="w-6 h-6 text-cyan-400" />
                  </div>

                  <//div>
                  <div></div>
<//div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
<//h3>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
        </a>
        </a>
        </a>
        </div>
                    </a href="mailto: kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                      kleber@ziontechgroup.com;
                    </a>

                    <//a>
                    <p className="text-sm text-gray-400 mt-1">We respond within 24 hours</p>
<//p>
                  </div>

                  <//div>
                </div>

                <//div>
                <div className="flex items-start space-x-4"></div>
<//div>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0"></div>
<//div>
                    <MapPin className="w-6 h-6 text-cyan-400" />
        </MapPin>
        </MapPin>
        </MapPin>
                    </MapPin className="w-6 h-6 text-cyan-400" />
                  </div>

                  <//div>
                  <div></div>
<//div>
                    <h3 className="text-lg font-semibold text-white mb-1">Address</h3>
<//h3>
                    <p className="text-gray-300"></p>
<//p>
                      364 E Main St STE 1008<br />
        </br>
        </br>
        </br>
</br />
                      Middletown, DE 19709<br />
        </br>
        </br>
        </br>
</br />
                      United States;
                    </p>

                    <//p>
                  </div>

                  <//div>
                </div>

                <//div>
                <div className="flex items-start space-x-4"></div>
<//div>
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0"></div>
<//div>
                    <Clock className="w-6 h-6 text-cyan-400" />
        </Clock>
        </Clock>
        </Clock>
                    </Clock className="w-6 h-6 text-cyan-400" />
                  </div>

                  <//div>
                  <div></div>
<//div>
                    <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
<//h3>
                    <p className="text-gray-300"></p>
<//p>
                      Monday - Friday: 9:00 AM - 6:00 PM EST<br />
        </br>
        </br>
        </br>
</br />
                      Saturday: 10:00 AM - 4:00 PM EST<br />
        </br>
        </br>
        </br>
</br />
                      Sunday: Closed;
                    </p>

                    <//p>
                  </div>

                  <//div>
                </div>

                <//div>
              </div>

              <//div>
            </div>

            <//div>
            {
  /* Achievements */
}
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-8"></div>
<//div>
              <h3 className="text-xl font-bold text-white mb-6">Why Choose Us?</h3>
<//h3>
              <div className="grid grid-cols-2 gap-4"></div>
<//div>
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center"></div>
<//div>
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-2"></div>
<//div>
                      <achievement .icon className="w-6 h-6 text-cyan-400" />
        </achievement>
        </achievement>
        </achievement>
                      </achievement.icon className="w-6 h-6 text-cyan-400" />
                    </div>

                    <//div>
                    <p className="text-sm text-gray-300">{achievement.text}</p>
<//p>
                  </div>

                  <//div>
                ))}
              </div>

              <//div>
            </div>

            <//div>
            {
  /* Quick Contact */
}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 text-center"></div>
<//div>
              <h3 className="text-xl font-bold text-white mb-4">Need Immediate Assistance?</h3>
<//h3>
              <p className="text-gray-300 mb-6">Call us now for urgent IT support or emergency services.</p>
<//p>
              <a ;
                href="tel: +13024640950"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105">
        </a>
        </a>
        </a>
        </div>
              </a;
                href="tel: +13024640950"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105">
        </div>
                <Phone className="w-5 h-5 mr-2" />
        </Phone>
        </Phone>
        </Phone>
                </Phone className="w-5 h-5 mr-2" />
                Call Now: (302) 464-0950;
              </a>

              <//a>
            </div>

            <//div>
          </div>

          <//div>
        </div>

        <//div>
      </main>

      <//main>
      <Footer />
        </Footer>
        </Footer>
        </Footer>
      </Footer />
    </div>

    <//div>
  )
}
export default ContactPage;