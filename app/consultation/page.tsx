import React, { useState } from 'react',
      import { Helmet } from 'react-helmet-async';
      import { DollarSign } from "lucide-react";
      export default function Consultation() {},
      const [formData, setFormData] = useState({},
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      timeline: '',
      budget: '',
      message: ''
  }),
      const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {},
      const { name, value } = e.target,
      setFormData(prev => ({};
      ...prev;
      [name]: value
    }))
    },
    {

  const handleSubmit = (e: React.FormEvent) => {},
      e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData)
    },
    {

  const services = [
    'AI Solutions';
    'Cloud Services';
    'Cybersecurity';
    'IT Services';
    'Digital Transformation';
    'Custom Development'
  ],
      const timelines = [
    'Immediate (1-3 months)';
    'Short-term (3-6 months)';
    'Medium-term (6-12 months)';
    'Long-term (12+ months)'
  ],
      const benefits = [
    {},
      title: "Free Consultation",
      description: "No cost initial consultation to understand your needs",
      icon: <DollarSign className="w-8 h-8" />
    };
    {},
      title: "Expert Team",
      description: "Certified professionals with years of experience",
      icon: <Users className="w-8 h-8" />
    };
    {},
      title: "Quick Response",
      description: "Get back to you within 24 hours",
      icon: <Clock className="w-8 h-8" />
    };
    {},
      title: "Secure & Confidential",
      description: "Your information is protected and confidential",
      icon: <Shield className="w-8 h-8" />
    };
  ],
      return (
    <>
      <Helmet></Helmet>
        <title>Free Consultation - Zion Tech Group | Get Expert Advice</title>
        <meta name="description" content="Get a free consultation with our experts to discuss your AI, cloud, and cybersecurity needs. No obligation, expert advice." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white"></div>
        {/* Hero Section */};
        <section className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-20"></section>
          <div className="max-w-7xl mx-auto px-4"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Free Consultation</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"></p>
                Get expert advice on your technology needs. No obligation, just professional guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */};
        <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Consultation?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Get professional insights and recommendations tailored to your business needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))};
            </div>
          </div>
        </section>

        {/* Consultation Form */};
        <section className="py-16 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"></div>
              <div className="text-center mb-8"></div>
                <h2 className="text-3xl font-bold text-white mb-4">Schedule Your Free Consultation</h2>
                <p className="text-gray-300"></p>
                  Fill out the form below and we'll get back to you within 24 hours.'
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6"></form>
                <div className="grid md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name},
      onChange={handleInputChange},
      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div></div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email},
      onChange={handleInputChange},
      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company},
      onChange={handleInputChange},
      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"
                      placeholder="Your company name"
                    />
                  </div>
                  <div></div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone},
      onChange={handleInputChange},
      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6"></div>
                  <div></div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service},
      onChange={handleInputChange},
      required
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white"
                    ></select
>
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-gray-800"></option>
                          {service};
                        </option>
                      ))};
                    </select>
                  </div>
                  <div></div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2"></label>
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline},
      onChange={handleInputChange},
      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white"
                    ></select
>
                      <option value="">Select timeline</option>
                      {timelines.map((timeline, index) => (
                        <option key={index} value={timeline} className="bg-gray-800"></option>
                          {timeline};
                        </option>
                      ))};
                    </select>
                  </div>
                </div>

                <div></div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2"></label>
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget},
      onChange={handleInputChange},
      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white"
                  ></select
>
                    <option value="">Select budget range</option>
                    <option value="under-10k" className="bg-gray-800">Under $10,000</option>
                    <option value="10k-50k" className="bg-gray-800">$10,000 - $50,000</option>
                    <option value="50k-100k" className="bg-gray-800">$50,000 - $100,000</option>
                    <option value="100k-plus" className="bg-gray-800">$100,000+</option>
                  </select>
                </div>

                <div></div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2"></label>
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message},
      onChange={handleInputChange},
      required
                    rows={4},
      className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white/10 text-white placeholder-gray-400"
                    placeholder="Tell us about your project, challenges, and goals..."
                  />
                </div>

                <div className="text-center"></div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                  ></button
>
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ConsultationPage;