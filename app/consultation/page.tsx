'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Calendar, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react';

const ConsultationPage: React.FC = () => {
<<<<<<< HEAD
  const [formData, setFormData] = useState()
=======
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
  });

<<<<<<< HEAD
  const handleInputChange = const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;
    setFormData()
    }));
  };

  const handleSubmit = const handleSubmit = async (e: React.FormEvent) => {;
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData()
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const consultationTypes = const consultationTypes = const consultationTypes = [
    {
      icon: Users,
      title: 'AI Strategy Consultation',
      description: 'Strategic planning for AI implementation in your business',
      duration: '2-4 hours',
      price: 'Free',
      features: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation plan']
    },
    {
      icon: Shield,
      title: 'IT Infrastructure Review',
      description: 'Comprehensive analysis of your current IT infrastructure',
      duration: '4-6 hours',
      price: 'Free',
      features: ['Security audit', 'Performance analysis', 'Scalability assessment', 'Cost optimization']
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Complete digital transformation strategy and planning',
      duration: '6-8 hours',
      price: 'Free',
      features: ['Process analysis', 'Technology selection', 'Change management', 'Timeline planning'];
    };
  ];
<<<<<<< HEAD
  const process = const process = const process = [
    {
      step: '1',
    },
    {
      step: '2',
      title: 'Strategy Development',
    },
    {
      step: '3',
      title: 'Implementation Plan',
    },
    {
      step: '4',
      title: 'Ongoing Support',;
    };
  ];
=======

>>>>>>> cursor/website-audit-and-update-with-deployment-26c5
  return() {consultationTypes.map((type, index) => ()
                          {type.features.map((feature, featureIndex) => ()
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Consultation Form */}
              <div className="bg-slate-800/50 rounded-lg p-8" /></div>
                <h2 className="text-2xl font-bold text-white mb-6">Schedule Your Free Consultation</h2>
                
                {submitStatus === 'success' && ()
                )}, {submitStatus === 'error' && ()
                )}

                <form onSubmit={handleSubmit} className="space-y-6" /></form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" /></div>
                    <div></div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                        Name *
=======
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const services = [
    'AI Solutions',
    'Cloud Services',
    'Cybersecurity',
    'Custom Development',
    'Data Analytics',
    'IT Consulting'
  ];

  const benefits = [
    'Free initial consultation',
    'Expert technical advice',
    'Custom solution recommendations',
    'No obligation to proceed',
    'Confidential discussion',
    'Follow-up support'
  ];

  return (
    <>
      <Helmet>
        <title>Free Consultation | Zion Tech Group - Expert Technology Advice</title>
        <meta name="description" content="Get a free consultation with our technology experts. Discuss your project needs and get personalized recommendations for AI, cloud, and IT solutions." />
        <meta name="keywords" content="free consultation, technology advice, AI consulting, cloud consulting, IT consulting, expert guidance" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Free Consultation
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get expert advice on your technology needs. Our specialists are here to help you make informed decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Schedule a Consultation?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our free consultations provide valuable insights and recommendations tailored to your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <CheckCircle className="w-12 h-12 text-cyan-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Schedule Your Free Consultation
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                      </label>
                      <input type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
<<<<<<< HEAD
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your full name"
                      / /></input>
                    </div>
                    
                    <div></div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                        Email *
=======
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                      </label>
                      <input type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
<<<<<<< HEAD
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="your@email.com"
                      / /></input>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" /></div>
                    <div></div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2" /></label>
=======
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                        Company
                      </label>
                      <input type="text"
                        id="company"
                        name="company"
                        value={formData.company}
<<<<<<< HEAD
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your company name"
                      / /></input>
                    </div>
                    
                    <div></div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                        Phone
=======
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                      </label>
                      <input type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
<<<<<<< HEAD
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="+1 (555) 123-4567"
                      / /></input>
                    </div>
                  </div>

                  <div></div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2" /></label>
=======
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                      Service Interest
                    </label>
                    <select id="service"
                      name="service"
                      value={formData.service}
<<<<<<< HEAD
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" /></select>
=======
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
<<<<<<< HEAD

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" /></div>
                    <div></div>
                      <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                        Project Timeline
                      </label>
                      <select id="timeline"
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" /></select>
                        <option value="">Select timeline</option>
                        <option value="immediate">Immediate (1-2 weeks)</option>
                        <option value="short">Short term (1-3 months)</option>
                        <option value="medium">Medium term (3-6 months)</option>
                        <option value="long">Long term (6+ months)</option>
                      </select>
                    </div>
                    
                    <div></div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                        Budget Range
                      </label>
                      <select id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" /></select>
                        <option value="">Select budget range</option>
                        <option value="under-10k">Under $10,000</option>
                        <option value="10k-50k">$10,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k-500k">$100,000 - $500,000</option>
                        <option value="over-500k">Over $500,000</option>
                      </select>
                    </div>
                  </div>

                  <div></div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2" /></label>
                      Project Details *
=======
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your project
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                    </label>
                    <textarea id="message"
                      name="message"
                      value={formData.message}
<<<<<<< HEAD
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Tell us about your project, challenges, and goals..."
                    / /></textarea>
                  </div>

                  <button type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2" /></button>
                    {isSubmitting ? ()
                    ) : ()
                    )}
=======
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                      placeholder="Describe your project, challenges, or questions..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Consultation
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
                  </button>
                </form>
              </div>

<<<<<<< HEAD
            {/* Contact Info */}
            <div className="mt-16 text-center" /></div>
              <div className="bg-slate-800/50 rounded-lg p-8" /></div>
                <h2 className="text-2xl font-bold text-white mb-6">Prefer to Call?</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center" /></div>
                  <a href="tel:+13024640950"
                    className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    <Phone className="w-5 h-5" / /></Phone>
                    <span>Call: (302) 464-0950</span>
                  </a>
                  <a href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-2 border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    <Mail className="w-5 h-5" / /></Mail>
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>

      {/* Selected Consultation Details */},
    {selectedConsultation && ()
                  {selectedConsultation.features.map((feature, index) => ()
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8" /></div>
                <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Consultation</h3>
                <div className="space-y-4" /></div>
                  <div className="flex items-center gap-3 text-gray-300" /></div>
                    <Calendar className="w-5 h-5 text-blue-400" / /></Calendar>
                    <span>Duration: {selectedConsultation.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300" /></div>
                    <Clock className="w-5 h-5 text-blue-400" / /></Clock>
                    <span>Investment: {selectedConsultation.price}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300" /></div>
                    <Users className="w-5 h-5 text-blue-400" / /></Users>
                    <span>Team of 2-3 experts</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300" /></button>
                  Book Now
                </button>
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
=======
              {/* Info */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What to Expect
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Calendar className="w-6 h-6 text-cyan-500 mr-4 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">30-60 Minute Session</h4>
                      <p className="text-gray-600">We'll take the time to understand your needs and provide detailed recommendations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Users className="w-6 h-6 text-cyan-500 mr-4 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h4>
                      <p className="text-gray-600">Meet with our experienced specialists who have worked on similar projects.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-500 mr-4 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Actionable Insights</h4>
                      <p className="text-gray-600">Get specific recommendations and next steps for your project.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white">
                  <h4 className="text-xl font-bold mb-4">Ready to Get Started?</h4>
                  <p className="mb-4">
                    Our team is standing by to help you transform your business with the right technology solutions.
                  </p>
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Response time: Within 24 hours</span>
                  </div>
                </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              </div>
            </div>
          </div>
        </section>
      </main>
<<<<<<< HEAD
      
      <Footer / /></Footer>
>>>>>>> cursor/website-audit-and-update-with-deployment-26c5
=======

      <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
    </>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
      )},
    {/* Process Section */}
      <section className="py-16 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="text-center mb-16" /></div>
            <h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              A structured approach to delivering exceptional consultation services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" /></div>
            {process.map((step, index) => ()
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white/5" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="text-center mb-12" /></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300">Contact our consultation team today</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" /></div>
            <div className="text-center" /></div>
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4" /></div>
                <Phone className="w-6 h-6 text-white" / /></Phone>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
            </div>

            <div className="text-center" /></div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4" /></div>
                <Mail className="w-6 h-6 text-white" / /></Mail>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">consultation@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">24/7 Response</p>
            </div>

            <div className="text-center" /></div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4" /></div>
                <MapPin className="w-6 h-6 text-white" / /></MapPin>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">San Francisco, CA</p>
              <p className="text-sm text-gray-400">By Appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4" /></section>
        <div className="max-w-4xl mx-auto text-center" /></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12" /></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" /></h2>
              Transform Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8" /></p>
              Let our expert consultants help you navigate the complex world of AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105" /></button>
                Schedule Free Consultation
                <ArrowRight className="inline-block ml-2 w-5 h-5" / /></ArrowRight>
              </button>
              <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300" /></button>
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConsultationPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-1f73
=======
export default ConsultationPage;
>>>>>>> cursor/website-audit-and-update-with-deployment-26c5
=======
export default ConsultationPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
