'use client'
import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react'
interface ConsultationType {
  id: string
  name: string
  description: string
  duration: string
  price: string
  features: string[]
  popular: boolean
const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('')
  const consultationTypes: ConsultationType[] = [
    {
      id: 'strategy',
      name: 'IT Strategy Consultation',
      description: 'Comprehensive analysis of your current IT infrastructure and strategic planning for digital transformation.',
      duration: '2-4 hours',
      price: '$500',
      features: [
        'Current IT assessment',
        'Technology roadmap development',
        'ROI analysis and recommendations',
        'Implementation timeline',
        'Follow-up support included'
      ],
      popular: false
    },
    {
      id: 'ai',
      name: 'AI Implementation Consultation',
      description: 'Expert guidance on integrating AI solutions into your business processes and workflows.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'AI readiness assessment',
        'Use case identification',
        'Technology stack recommendations',
        'Implementation strategy',
        'Training and support planning'
      ],
      popular: true
    },
    {
      id: 'cloud',
      name: 'Cloud Migration Consultation',
      description: 'Strategic planning and execution guidance for migrating your infrastructure to the cloud.',
      duration: '4-6 hours',
      price: '$1,000',
      features: [
        'Cloud readiness assessment',
        'Migration strategy development',
        'Cost optimization analysis',
        'Security and compliance review',
        'Implementation roadmap'
      ],
      popular: false
    },
    {
      id: 'security',
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '6-8 hours',
      price: '$1,500',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Penetration testing',
        'Security policy development',
        'Incident response planning'
      ],
      popular: false
  ]
  const experts = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI & Machine Learning Specialist',
      experience: '15+ years',
      expertise: ['AI Strategy', 'Machine Learning', 'Data Science'],
      image: '/images/experts/sarah-chen.jpg'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Cloud Architecture Expert',
      experience: '12+ years',
      expertise: ['Cloud Migration', 'DevOps', 'Infrastructure'],
      image: '/images/experts/michael-rodriguez.jpg'
    },
    {
      name: 'Alex Thompson',
      role: 'Cybersecurity Consultant',
      experience: '10+ years',
      expertise: ['Security Audits', 'Compliance', 'Risk Management'],
      image: '/images/experts/alex-thompson.jpg'
  ]
  const handleBooking = (typeId: string) => {
    setSelectedType(typeId)
    // In a real app, this would open a booking modal or redirect to a booking page
    console.log(`Booking consultation: ${typeId}`);
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>
        <title>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." /></meta>
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" /></meta>
        <meta property="og:title" content="Consultation - Zion Tech Group" /></meta>
        <meta property="og:description" content="Expert IT consulting and strategy sessions" /></meta>
        <meta property="og:type" content="website" /></meta>
        <meta property="og:url" content="https://ziontechgroup.com/consultation" /></meta>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto text-center"></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"></p>
              Get personalized guidance from our experienced team of IT experts. Transform your business with strategic technology solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"></div>
              <div className="flex items-center justify-center gap-4 text-white"></div>
                <Calendar className="w-8 h-8 text-purple-400" /></Calendar>
                <div className="text-left"></div>
                  <div className="text-2xl font-bold">Flexible Scheduling</div>
                  <div className="text-gray-400">Book at your convenience</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-white"></div>
                <Users className="w-8 h-8 text-purple-400" /></Users>
                <div className="text-left"></div>
                  <div className="text-2xl font-bold">Expert Team</div>
                  <div className="text-gray-400">15+ years experience</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-white"></div>
                <CheckCircle className="w-8 h-8 text-purple-400" /></CheckCircle>
                <div className="text-left"></div>
                  <div className="text-2xl font-bold">Proven Results</div>
                  <div className="text-gray-400">98% client satisfaction</div>                </div>
              ))
            </div>
          </div>
        </section>

        {/* Consultation Types */
        <section className="py-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Choose Your Consultation</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {consultationTypes.map((type, index) => (
                <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:border-cyan-400/50 transition-all duration-300 ${
                  type.title === 'Strategy Session' ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-slate-700'
                }`}></div>
                  <div className="text-center mb-6"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{type.title}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{type.price}</div>
                    <div className="text-gray-400">{type.duration}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-6"></ul>
                    {type.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3"></li>
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" /></CheckCircle>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-4 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2"></button>
                    Book Now
                    <ArrowRight className="w-4 h-4" /></ArrowRight>
                  </button>
                </div>
              ))
            </div>
          </div>
        </section>

        {/* Contact Form */
        <section className="py-16 px-4"></section>
          <div className="max-w-4xl mx-auto"></div>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12"></div>
              <div className="text-center mb-8"></div>
                <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Consultation</h2>
                <p className="text-gray-300"></p>
                  Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6"></form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label className="block text-white font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name
                      onChange={handleInputChange
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your full name"
                    /></input>
                  </div>
                  
                  <div></div>
                    <label className="block text-white font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email
                      onChange={handleInputChange
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your email"
                    /></input>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company
                      onChange={handleInputChange
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your company name"
                    /></input>
                  </div>
                  
                  <div></div>
                    <label className="block text-white font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone
                      onChange={handleInputChange
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your phone number"
                    /></input>
                  </div>
                </div>
                
                <div></div>
                  <label className="block text-white font-medium mb-2">Service Interest *</label>
                  <select
                    name="service"
                    value={formData.service
                    onChange={handleInputChange
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                  ></select>
                    <option value="">Select a service</option>
                    <option value="ai-strategy">AI Strategy & Implementation</option>
                    <option value="cloud-migration">Cloud Migration Planning</option>
                    <option value="digital-transformation">Digital Transformation</option>
                    <option value="cybersecurity">Cybersecurity Assessment</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label className="block text-white font-medium mb-2">Preferred Time</label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime
                      onChange={handleInputChange
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    ></select>
                      <option value="">Select preferred time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                  
                  <div></div>
                    <label className="block text-white font-medium mb-2">Urgency</label>
                    <select
                      name="urgency"
                      value={formData.urgency
                      onChange={handleInputChange
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    ></select>
                      <option value="low">Low - Within 2 weeks</option>
                      <option value="medium">Medium - Within 1 week</option>
                      <option value="high">High - Within 2-3 days</option>
                      <option value="urgent">Urgent - Within 24 hours</option>
                    </select>
                  </div>
                </div>
                
                <div></div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message
                    onChange={handleInputChange
                    rows={4
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    placeholder="Tell us about your project and what you'd like to discuss..."
                  /></textarea>
                </div>
                
                <div className="text-center"></div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center justify-center gap-2 mx-auto"
                  ></button>
                    Schedule Consultation
                    <Calendar className="w-4 h-4" /></Calendar>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */
        <section className="py-16 px-4"></section>
          <div className="max-w-4xl mx-auto"></div>
            <div className="text-center mb-8"></div>
              <h2 className="text-3xl font-bold text-white mb-4">Other Ways to Reach Us</h2>
              <p className="text-gray-300">Prefer to contact us directly? Here are other ways to get in touch.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Phone className="w-8 h-8 text-slate-900" /></Phone>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
                <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
              </div>
              
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <Mail className="w-8 h-8 text-slate-900" /></Mail>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400 font-medium">consultation@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">24/7 response</p>
              </div>
              
              <div className="text-center"></div>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <MessageCircle className="w-8 h-8 text-slate-900" /></MessageCircle>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-cyan-400 font-medium">Available on website</p>
                <p className="text-gray-400 text-sm">24/7 support</p>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation Types */
        <section className="py-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Choose Your Consultation Type</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Select the consultation that best fits your needs. All sessions include detailed reports and actionable recommendations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {consultationTypes.map((type) => (
                <div
                  key={type.id
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    type.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  }`
                ></div>
                  {type.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold"></div>
                        Most Popular
                      </div>
                    </div>
                  )
                  <div className="text-center mb-6"></div>
                    <h3 className="text-xl font-bold text-white mb-3">{type.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                    <div className="flex items-center justify-center gap-2 text-purple-400 text-sm mb-4"></div>
                      <Clock className="w-4 h-4" /></Clock>
                      <span>{type.duration}</span>
                    </div>
                    <div className="text-3xl font-bold text-white">{type.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8"></ul>
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" /></CheckCircle>
                        {feature
                      </li>
                    ))
                  </ul>

                  <button
                    onClick={() => handleBooking(type.id)
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      type.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`
                  >
                    Book Consultation
                  </button>
                </div>
              ))
            </div>
          </div>
        </section>

        {/* Expert Team */
        <section className="py-16 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl font-bold text-white mb-6">Meet Our Experts</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Our team of experienced professionals brings deep expertise across all areas of technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {experts.map((expert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center"></div>
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center"></div>
                    <Users className="w-12 h-12 text-white" /></Users>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{expert.name}</h3>
                  <p className="text-purple-400 mb-2">{expert.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{expert.experience} experience</p>
                  <div className="flex flex-wrap justify-center gap-2"></div>
                    {expert.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs"></span>
                        {skill
                      </span>
                    ))
                  </div>
                </div>
              ))
            </div>
          </div>
        </section>

        {/* Contact Information */
        <section className="py-16 px-4"></section>
          <div className="max-w-4xl mx-auto"></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"></div>
              <div className="text-center mb-12"></div>
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
                <p className="text-xl text-gray-300"></p>
                  Contact us today to schedule your consultation or learn more about our services.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"></div>
                <div className="text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                    <Phone className="w-8 h-8 text-white" /></Phone>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
                <div className="text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                    <Mail className="w-8 h-8 text-white" /></Mail>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                  <p className="text-gray-300">consultation@ziontech.com</p>
                </div>
                <div className="text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                    <MapPin className="w-8 h-8 text-white" /></MapPin>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-300">123 Tech Street, Silicon Valley</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                ></Link>
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" /></ArrowRight>
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                ></Link>
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */
      <section className="py-16 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl font-bold text-white mb-4">Consultation Services</h2>
            <p className="text-xl text-gray-300">Comprehensive technology consulting tailored to your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {consultationServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <CheckCircle className="h-6 w-6 text-white" /></CheckCircle>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service}</h3>
                <p className="text-gray-300">Expert guidance and strategic planning for your technology initiatives.</p>
              </div>
            ))
          </div>
        </div>
      </section>

      {/* Process Section */
      <section className="py-16 px-4 bg-white/5"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-12"></div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-xl text-gray-300">How we deliver exceptional consultation services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Discovery</h3>
              <p className="text-gray-300">We analyze your current technology landscape and business objectives.</p>
            </div>
            
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Strategy</h3>
              <p className="text-gray-300">We develop a customized roadmap aligned with your goals.</p>
            </div>
            
            <div className="text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Implementation</h3>
              <p className="text-gray-300">We guide you through execution and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */
      <section className="py-16 px-4"></section>
        <div className="max-w-4xl mx-auto text-center"></div>
          <h2 className="text-3xl font-bold text-white mb-4"></h2>
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8"></p>
            Schedule a consultation with our experts and discover how technology can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"></button>
              <Calendar className="mr-2 h-5 w-5" /></Calendar>
              Schedule Consultation
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"></button>
              <Mail className="mr-2 h-5 w-5" /></Mail>
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
export default ConsultationPage