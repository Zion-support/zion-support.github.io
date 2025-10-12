  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-cyan-400" />,
      title: 'Phone',
      details: ['+1 (302) 464-0950', 'Mon-Fri 9AM-6PM EST'],
      action: 'Call Now'
    },
    {
      icon: <Mail className="w-6 h-6 text-purple-400" />,
      title: 'Email',
      details: ['kleber@ziontechgroup.com', 'Response within 24 hours'],
      action: 'Send Email'
    },
    {
      icon: <MapPin className="w-6 h-6 text-pink-400" />,
      title: 'Office',
      details: ['364 E Main St STE 1008', 'Middletown, DE 19709'],
      action: 'Get Directions'
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-400" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM-6PM', 'Saturday: 10AM-4PM EST'],
      action: 'Schedule Call'
    }
  ]

  const whyChooseUs = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Fast Response',
      description: 'Get a response within 24 hours, guaranteed.'
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'Secure & Confidential',
      description: 'Your information is protected with enterprise-grade security.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-400" />,
      title: 'Expert Team',
      description: 'Work with certified professionals and industry experts.'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'Custom Solutions',
      description: 'Tailored solutions designed specifically for your business needs.'
    }
  ]

const ContactPage: React.FC = () => {
  return (
    <>
      <Helmet>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business with AI and IT solutions? Let's discuss your project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                />
                <select className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:outline-none">
                  <option>Select Service</option>
                  <option>AI Solutions</option>
                  <option>IT Services</option>
                  <option>Consultation</option>
                  <option>Support</option>
                </select>
                <textarea
                  placeholder="Tell us about your project"
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-cyan-400">📧</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Email</p>
                      <p className="text-gray-300">kleber@ziontechgroup.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-cyan-400">📞</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Phone</p>
                      <p className="text-gray-300">+1 (302) 464-0950</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-cyan-400">📍</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Address</p>
                      <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
                    </div>
                  </div>
                </div>
              </div>

                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              </div>
            </div>
          </div>
        </div>
      </div>
}
