
import type { NextPage } from 'next'});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.')};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })};


  return (
    <MainLayout 
      title="Contact Us - Zion Tech Group"

    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">

            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md: grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>

                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}

                    placeholder="Tell us about your project or how we can help..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
                >

                </button>
              </form>
            </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here are some common questions we receive from our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does a typical project take?</h3>
              <p className="text-gray-600">Project timelines vary depending on complexity and scope. We provide detailed timelines during our initial consultation.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide ongoing support?</h3>
              <p className="text-gray-600">Yes, we offer comprehensive support and maintenance services to ensure your solutions continue to perform optimally.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What technologies do you work with?</h3>
              <p className="text-gray-600">We work with a wide range of modern technologies including AI/ML, cloud platforms, web and mobile frameworks, and more.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do you ensure project quality?</h3>
              <p className="text-gray-600">We follow rigorous testing protocols, code reviews, and quality assurance processes to deliver reliable solutions.</p>
            </div>

          </div>
        </div>
      </section>
    </MainLayout>
  )};


export default function Contact() {
  const [formData, setFormData] = useState({'
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '' }))};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitted(true);


    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({'
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '' })}, 3000)};

  const contactInfo = [



    {
      icon: Mail,
      title: 'Email Us' }, {
      icon: MapPin,
      title: 'Address',
      details: '364 E Main St STE 1008',
      description: 'Middletown, DE 19709',

      link: 'mailto:kleber@ziontechgroup.com'

    }, {
      icon: Phone,
      title: 'Call Us' }, {
      icon: MapPin,
      title: 'Visit Us',
      details: '364 E Main St STE 1008 Middletown DE 19709',
      link: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'


    }, {
      icon: Clock,
      title: 'Business Hours',

      link: '#'
    }
  ]];



  const services = [

    'AI Services',
    'IT Services',
    'Micro SaaS',
    'Custom Development',
    'Digital Transformation'];

  return (
    <>
      <Head>


        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Navigation />
      
      <main className="min-h-screen bg-white">

        {/* Hero Section */}

            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">



              </p>
            </div>
          </div>
        </section>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl border border-gray-200 hover: shadow-lg transition-shadow"
                >
                  <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-4">
                    <method.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">

                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
                  <p className="text-gray-600">hello@ziontechgroup.com</p>
                  <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-600">24 hours or less</p>
                  <p className="text-sm text-gray-500">For urgent matters, we offer priority support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Consultation</h3>
                  <p className="text-gray-600">Free initial consultation</p>
                  <p className="text-sm text-gray-500">Let's discuss your needs and explore solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>


                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label

                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"

                      />
                    </div>
                  </div>

                  <div>
                    <label

                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"

                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >

                    </label>
                    <textarea
                      id="message"
                      name="message"

                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>


            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

              {/* Contact Information */}
              <div>"
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>"
                <p className="text-lg text-gray-600 mb-8">"
                  We're here to help you succeed. Reach out to us through any of the channels below, or fill out the form and we'll get back to you within 24 hours.
                </p>
                '
                <div className="space-y-6">
                  {contactInfo.map((info, index) => ("
                    <div key={index} className="flex items-start">"
                      <div className="bg-blue-100 rounded-lg p-3 mr-4">"
                        <info.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>"
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <a 
                          href={info.link} "
                          className="text-gray-600 hover:text-blue-600 transition-colors"
                        >
                          {info.details}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
"
                <div className="mt-8 p-6 bg-blue-50 rounded-lg">"
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Choose Us?</h3>"
                  <ul className="space-y-2 text-gray-600">"
                    <li className="flex items-center">"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Free consultation and project assessment
                    </li>"
                    <li className="flex items-center">"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Transparent pricing with no hidden fees
                    </li>"
                    <li className="flex items-center">"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      24/7 support and maintenance
                    </li>"
                    <li className="flex items-center">"
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      Proven track record of successful projects
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div>"
                <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-lg">"
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  
                  {isSubmitted ? ("
                    <div className="text-center py-8">"
                      <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />"
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>"
                      <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                    </div>
                  ) : ('
                    <form onSubmit={handleSubmit} className="space-y-6">"
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>"
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input"
                            type="text""
                            id="name""
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent""
                            placeholder="Your full name"
                          />
                        </div>
                        <div>"
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <input"
                            type="email""
                            id="email""
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focu,
    s:border-transparent""
                            placeholder="your@email.com"
                          />
                        </div>


                      </div>
"
                      <div className="grid grid-cols-1 m,
    d:grid-cols-2 gap-6">
                        <div>"
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                          </label>
                          <input"
                            type="text""
                            id="company""
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent""
                            placeholder="Your company name"
                          />
                        </div>
                        <div>"
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <input"
                            type="tel""
                            id="phone""
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent""
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>


                      <div>

                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Interest
                        </label>
                        <select"
                          id="service""
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focu,
    s:ring-blue-500 focu,
    s:border-transparent"
                        >"
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      <div>"
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message *
                        </label>
                        <textarea"
                          id="message""
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus: ring-2 focus:ring-blue-500 focu,
    s:border-transparent""
                          placeholder="Tell us about your project or how we can help..."
                        />
                      </div>

                      <button"
                        type="submit""
                        className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hove,
    r:bg-blue-700 transition-colors flex items-center justify-center"
                      >"
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </button>
                    </form>
                  )}

                </div>
              </div>


            </div>
          </div>
        </section>
      </main>



