import { Brain }  from "lucide-react";
import React, { useState }  from "react";import Navigation  from "../components/Navigation";
import Footer  from "../components/Footer";import SEOOptimizer  from "../components/SEOOptimizer";
import { CheckCircle, Star, Phone, Mail }  from "lucide-react";import { Clock }  from "lucide-react";'use client'
constDemoPage: React.FC= () =>{const [formDatasetFormData] = useState({
    name: ''
    email: ''
    company: ''
    phone: ''
    service: ''
    message: '')
  })
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev
      [name]: value;)
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission;
    const subject = `Demo Request from ${formData.name} - ${formData.company}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`
    window.location.href = `mailto:kleber@ziontechgroup.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }
  constdemoFeatures= [
    {icon: Brain
      title: 'AI Solutions Demo'
      description: 'See our AI services in action with live demonstrations'
   }
    {icon: Shield
      title: 'Security Assessment'
      description: 'Get a free security evaluation of your current setup'
   }
    {icon: Zap
      title: 'Performance Analysis'
      description: 'Learn how to optimize your business processes'
   }
    {
  icon: Users
      title: 'Team Training'
      description: 'Hands-on training for your team members'
}
  ]
  consttestimonials= [
    {name: 'Sarah Johnson'
      company: 'TechCorp Inc.'
      text: 'The demo was incredibly insightful. We saw immediate value in their AI solutions.'
      rating:5}
    {name: 'Michael Chen'
      company: 'InnovateLabs'
      text: 'Professional team with deep expertise. The demo exceeded our expectations.'
      rating:5}
    {
  name: 'Emily Rodriguez'
      company: 'DataFlow Systems'
      text: 'Clear, concise, and very informative. Highly recommend scheduling a demo.'
      rating: 5;
}
  ]
  return(<><SEOOptimizertitle ="Request a Demo - ZionTechGroup"
        description="Schedule a personalized demo of our AI and IT services. See how we can transform your business withcutting-edgetechnology."
        keywords={
  ['demo', 'AI demo', 'IT demo', 'business consultation', 'technologydemonstration']
}
        canonicalUrl="https://ziontechgroup.com/demo"
      />
        </SEOOptimizertitle>
        </SEOOptimizertitle>
        </SEOOptimizertitle>
</SEOOptimizertitle="Request a Demo - ZionTechGroup"
        description="Schedule a personalized demo of our AI and IT services. See how we can transform your business withcutting-edgetechnology."
        keywords={
  ['demo', 'AI demo', 'IT demo', 'business consultation', 'technologydemonstration']
}
        canonicalUrl="https://ziontechgroup.com/demo"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
<//div>
        <Navigation />
        </Navigation>
        </Navigation>
        </Navigation>
        </Navigation />
        <main className="pt-16">
        </main>
        </main>
        </main>
        </div>
        </main>
        </main className="pt-16">
        </div>
          {
  /* Hero Section */
}
          <section className="container mx-auto px-4 py-16 text-center"></section>
<//section>
            <div className="max-w-4xl mx-auto"></div>
<//div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
        </h1>
        </h1>
        </h1>
        </div>
        </h1>
              </h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">
                Request a Demo;
              </h1>

              <//h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8">
        </p>
        </p>
        </p>
        </div>
        </p>
              </p className="text-xl md: text-2xl text-cyan-400 mb-8">
                See our AI and IT solutions in action;
              </p>

              <//p>
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
        </p>
        </p>
        </p>
        </div>
        </p>
              </p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
        </div>
                Schedule a personalized demonstration of our services tailored to your business needs.
                Our experts will show you exactly how we can help transform your operations.
              </p>

              <//p>
            </div>

            <//div>
          </section>

          <//section>
          {
  /* Demo Features */
}
          <section className="container mx-auto px-4 py-16"></section>
<//section>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
        </h2>
        </h2>
        </h2>
        </div>
        </h2>
            </h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text">
              What to Expect;
            </h2>

            <//h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
<//div>)
              {demoFeatures.map((feature, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
<//div>
                  <feature .icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
        </feature>
        </feature>
        </feature>
                  </feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
<//h3>
                  <p className="text-gray-300">{feature.description}</p>
<//p>
                </div>

                <//div>
              ))}
            </div>

            <//div>
          </section>

          <//section>
          {
  /* Demo Form */
}
          <section className="container mx-auto px-4 py-16"></section>
<//section>
            <div className="max-w-4xl mx-auto"></div>
<//div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12"></div>
<//div>
                {
  /* Form */
}
                <div className="cyber-card p-8"></div>
<//div>
                  <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Demo</h2>
<//h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
        </form>
        </form>
        </form>
        </div>
                  </form onSubmit={handleSubmit} className="space-y-6">
        </div>
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
                        required;
                        value={
  formData.name
}
                        onChange={
  handleInputChange
}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocus:border-cyan-400"
                       placeholder="Enter your fullname"
                      /></di><di v><labelhtmlFor="email"className="block text-sm font-medium text-gray-300mb-2">Email Address *
                    </labe><inputtype="email"
                       id="email"
                       name="email"
                        requiredvalue={
  formData.email
}
                        onChange={
  handleInputChange
}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocus:border-cyan-400"
                       placeholder="Enter youremail"
                      /></di><di v><labelhtmlFor="company"className="block text-sm font-medium text-gray-300mb-2">Company Name *
                    </labe><inputtype="text"
                       id="company"
                       name="company"
                        requiredvalue={
  formData.company
}
                        onChange={
  handleInputChange
}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocus:border-cyan-400"
                       placeholder="Enter your companyname"
                      /></di><di v><labelhtmlFor="phone"className="block text-sm font-medium text-gray-300mb-2">Phone Number;
                    </labe><inputtype="tel"
                       id="phone"
                       name="phone"
                        value={
  formData.phone
}
                        onChange={
  handleInputChange
}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus: outline-nonefocus:border-cyan-400"
                       placeholder="Enter your phonenumber"
                      /></di><di v><labelhtmlFor="service"className="block text-sm font-medium text-gray-300mb-2">Service of Interest;
                    </labe><selectid="service"
                       name="service"
                        value={
  formData.service
}
                        onChange={
  handleInputChange
}
                       className="w-full px-4 py-3 bg-slate-800border border-gray-600rounded-lgtext-whitefocus:outline-nonefocus:border-cyan-400"
                      ><optionvalue="">Selectaservice</optio><optionvalue="ai-services">AIServices</optio><optionvalue="it-services">ITServices</optio><optionvalue="cloud-services">CloudServices</optio><optionvalue="cybersecurity">Cybersecurity</optio><optionvalue="data-analytics">DataAnalytics</optio><optionvalue="custom-solution">CustomSolution</optio></selec></di><di v><labelhtmlFor="message"className="block text-sm font-medium text-gray-300mb-2">Additional Information;
                    </labe><textareaid ="message"
                       name="message"
                        rows={
  4
}
                        value={
  formData.message
}
                        onChange={
  handleInputChange
}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400"
                        placeholder="Tell us about your specific needs or questions"
                      />
        </textareaid>
        </textareaid>
        </textareaid>
</textareaid="message"
                       name="message"
                        rows={
  4
}
                        value={
  formData.message
}
                        onChange={
  handleInputChange
}
                        className="w-full px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus: outline-none focus:border-cyan-400"
                        placeholder="Tell us about your specific needs or questions"
                      />
                    </div>

                    <//div>
                    <button ;
                      type="submit"
                      className="w-full cyber-button py-3 px-6 text-center">
        </button>
        </button>
        </button>
        </div>
                    </button;
                      type="submit"
                      className="w-full cyber-button py-3 px-6 text-center">
        </div>
                      Schedule Demo;
                    </button>

                    <//button>
                  </form>

                  <//form>
                </div>

                <//div>
                {
  /* Contact Info */
}
                <div className="space-y-8"></div>
<//div>
                  <div className="cyber-card p-8"></div>
<//div>
                    <h3 className="text-xl font-bold text-white mb-6">Why Choose Our Demo?</h3>
<//h3>
                    <ul className="space-y-4">
        </ul>
        </ul>
        </ul>
        </div>
        </ul>
                    </ul className="space-y-4">
        </div>
                      <li className="flex items-start">
        </li>
        </li>
        </li>
        </div>
        </li>
                      </li className="flex items-start">
        </div>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
        </CheckCircle>
        </CheckCircle>
        </CheckCircle>
                        </CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Personalized to your business needs</span>
<//span>
                      </li>

                      <//li>
                      <li className="flex items-start">
        </li>
        </li>
        </li>
        </div>
        </li>
                      </li className="flex items-start">
        </div>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
        </CheckCircle>
        </CheckCircle>
        </CheckCircle>
                        </CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Live demonstration of our solutions</span>
<//span>
                      </li>

                      <//li>
                      <li className="flex items-start">
        </li>
        </li>
        </li>
        </div>
        </li>
                      </li className="flex items-start">
        </div>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
        </CheckCircle>
        </CheckCircle>
        </CheckCircle>
                        </CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">Expert consultation and Q&A</span>
<//span>
                      </li>

                      <//li>
                      <li className="flex items-start">
        </li>
        </li>
        </li>
        </div>
        </li>
                      </li className="flex items-start">
        </div>
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
        </CheckCircle>
        </CheckCircle>
        </CheckCircle>
                        </CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">No obligation, completely free</span>
<//span>
                      </li>

                      <//li>
                    </ul>

                    <//ul>
                  </div>

                  <//div>
                  <div className="cyber-card p-8"></div>
<//div>
                    <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
<//h3>
                    <div className="space-y-4"></div>
<//div>
                      <div className="flex items-center"></div>
<//div>
                        <Phone className="w-5 h-5 text-cyan-400 mr-3" />
        </Phone>
        </Phone>
        </Phone>
                        </Phone className="w-5 h-5 text-cyan-400 mr-3" />
                        <a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400">
        </a>
        </a>
        </a>
        </div>
                        </a href="tel:+13024640950" className="text-gray-300 hover:text-cyan-400">
        </div>
                          (302) 464-0950;
                        </a>

                        <//a>
                      </div>

                      <//div>
                      <div className="flex items-center"></div>
<//div>
                        <Mail className="w-5 h-5 text-cyan-400 mr-3" />
        </Mail>
        </Mail>
        </Mail>
                        </Mail className="w-5 h-5 text-cyan-400 mr-3" />
                        <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400">
        </a>
        </a>
        </a>
        </div>
                        </a href="mailto: kleber@ziontechgroup.com" className="text-gray-300 hover:text-cyan-400">
                          kleber@ziontechgroup.com;
                        </a>

                        <//a>
                      </div>

                      <//div>
                      <div className="flex items-center"></div>
<//div>
                        <Clock className="w-5 h-5 text-cyan-400 mr-3" />
        </Clock>
        </Clock>
        </Clock>
                        </Clock className="w-5 h-5 text-cyan-400 mr-3" />
                        <span className="text-gray-300">Mon-Fri: 9AM-6PM EST</span>
<//span>
                      </div>

                      <//div>
                    </div>

                    <//div>
                  </div>

                  <//div>
                </div>

                <//div>
              </div>

              <//div>
            </div>

            <//div>
          </section>

          <//section>
          {
  /* Testimonials */
}
          <section className="container mx-auto px-4 py-16"></section>
<//section>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
        </h2>
        </h2>
        </h2>
        </div>
        </h2>
            </h2 className="text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text">
              What Our Clients Say;
            </h2>

            <//h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
<//div>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6"></div>
<//div>
                  <div className="flex items-center mb-4"></div>
<//div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        </Star>
        </Star>
        </Star>
                      </Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <//div>
                  <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
<//p>
                  <div></div>
<//div>
                    <div className="font-bold text-white">{testimonial.name}</div>
<//div>
                    <div className="text-cyan-400 text-sm">{testimonial.company}</div>
<//div>
                  </div>

                  <//div>
                </div>

                <//div>
              ))}
            </div>

            <//div>
          </section>

          <//section>
        </main>

        <//main>
        <Footer />
        </Footer>
        </Footer>
        </Footer>
        </Footer />
      </div>

      <//div>
    </>

    <//>
  )
}
export default DemoPage;