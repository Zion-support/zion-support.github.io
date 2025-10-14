import { ArrowRight, Calendar, CheckCircle, Zap, Globe   } from "lucide-react"
import { Helmet } from react-helmet-async
import { useState } from "react"
const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,"
      [name]: value"
    })}
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }
  const services = [
    {
      icon: <Brain className="w-8" h-8 text-blue-500 />,
      title: 'AI Solutions',
      description: 'Transform your business with artificial intelligence and machine learning.'
    },
    {
      icon: <Shield className="w-8" h-8 text-green-500 />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with advanced security solutions.'
    },
    {
      icon: <Cloud className="w-8" h-8 text-purple-500 />,
      title: 'Cloud Services',
      description: 'Migrate and optimize your infrastructure in the cloud.'
    },
    {
      icon: <Zap className="w-8" h-8 text-yellow-500 />,
      title: 'Digital Transformation',
      description: 'Modernize your business processes and technology stack.'
    }
  ]
  const benefits = [
    'Free initial consultation',
    'Customized solution recommendations',
    'No obligation to proceed',
    'Expert technical advice',
    'Detailed project roadmap',
    'Competitive pricing'
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Get" a free consultation with our technology experts. Discuss your AI, cybersecurity, and digital transformation needs. />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center" mb-16>
          <h1 className="text-4xl" md:text-6xl font-bold text-white mb-6>
            Free Consultation
          </h1>
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
            Ready to transform your business with cutting-edge technology? 
            Schedule a free consultation with our experts to discuss your needs and explore solutions.
          </p>
        </div>

        <div className="grid" grid-cols-1 lg:grid-cols-2 gap-12>
          {/* Services Overview */}
          <div>
            <h2 className="text-3xl" font-bold text-white mb-8>Our Services</h2>
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10" backdrop-blur-sm rounded-xl p-6 border border-white/20>
                  <div className="flex" items-start>
                    <div className="flex-shrink-0" mr-4>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl" font-semibold text-white mb-2>{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8" bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20>
              <h3 className="text-xl" font-semibold text-white mb-4>What You'll Get</h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex" items-center text-gray-300>
                    <CheckCircle className="w-5" h-5 text-green-400 mr-3 />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Consultation Form */}
          <div>
            <div className="bg-white/10" backdrop-blur-sm rounded-xl p-8 border border-white/20>
              <h2 className="text-2xl" font-bold text-white mb-6>Schedule Your Consultation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid" grid-cols-1 md:grid-cols-2 gap-4>
                  <div>
                    <label htmlFor=name className="block" text-sm font-medium text-gray-300 mb-2>
                      Full Name *
                    </label>
                    <input
                      type=text
                      id=name
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full" px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                      placeholder=Your full name
                    />
                  </div>
                  
                  <div>
                    <label htmlFor=email className="block" text-sm font-medium text-gray-300 mb-2>
                      Email Address *
                    </label>
                    <input
                      type=email
                      id=email
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full" px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                      placeholder=your@email.com
                    />
                  </div>
                </div>

                <div className="grid" grid-cols-1 md:grid-cols-2 gap-4>
                  <div>
                    <label htmlFor=company className="block" text-sm font-medium text-gray-300 mb-2>
                      Company
                    </label>
                    <input
                      type=text
                      id=company
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full" px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                      placeholder=Your company name
                    />
                  </div>
                  
                  <div>
                    <label htmlFor=phone className="block" text-sm font-medium text-gray-300 mb-2>
                      Phone Number
                    </label>
                    <input
                      type=tel
                      id=phone
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full" px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                      placeholder=(555) 123-4567
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor=service className="block" text-sm font-medium text-gray-300 mb-2>
                    Service Interest
                  </label>
                  <select
                    id=service
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full" px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-blue-500
                  >
                    <option value=>Select a service</option>
                    <option value=ai-solutions>AI Solutions</option>
                    <option value=cybersecurity>Cybersecurity</option>
                    <option value=cloud-services>Cloud Services</option>
                    <option value=digital-transformation>Digital Transformation</option>
                    <option value=other>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor=message className="block" text-sm font-medium text-gray-300 mb-2>
                    Tell us about your project
                  </label>
                  <textarea
                    id=message
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full" px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500
                    placeholder=Describe your project requirements, challenges, or goals...
                  />
                </div>

                <button
                  type=submit
                  className="w-full" bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center
                >
                  Schedule Free Consultation
                  <ArrowRight className="w-4" h-4 ml-2 />
                </button>
              </form>

              <div className="mt-6" text-center>
                <p className="text-sm" text-gray-400>
                  We'll get back to you within 24 hours to schedule your consultation.
                </p>
              </p>
              <div className="flex" justify-center space-x-4>
                <a 
                  href="/" 

                  className="bg-cyan-600" hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-300
                >
                  Go Home
                </a>
                <a 
                  href="/contact" 
                  className="bg-gray-700" hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300
                >
                  Contact Us
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

