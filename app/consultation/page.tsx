import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Clock, Users, Shield, Star, Phone, Mail, MapPin } from 'lucide-react';

export default function Consultation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    setIsSubmitted(true);
  };

  const features = [
    {
      icon: <Clock className="w-6 h-6" loading="lazy" />,
      title: 'Quick Response',
      description: 'Get back to you within 24 hours'
    },
    {
      icon: <Users className="w-6 h-6" loading="lazy" />,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years experience'
    },
    {
      icon: <Shield className="w-6 h-6" loading="lazy" />,
      title: 'Confidential',
      description: 'Your information is completely secure and private'
    },
    {
      icon: <Star className="w-6 h-6" loading="lazy" />,
      title: 'No Obligation',
      description: 'Free consultation with no strings attached'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" loading="lazy">
      <Helmet>
        <title>Free Consultation - Zion Tech Group | Technology Advisory Services</title>
        <meta
          name="description"
          content="Get a free consultation with our technology experts. We'll help you develop AI strategies, cybersecurity plans, and digital transformation roadmaps for your business."
        />
        <meta
          name="keywords"
          content="free consultation, technology advisory, AI strategy, digital transformation, cybersecurity audit, cloud migration, technology planning"
        />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white" loading="lazy">>{/* Hero Section */}
        <section className="py-20 px-4" loading="lazy">
          <div className="max-w-7xl mx-auto text-center" loading="lazy">
            <h1 className="text-5xl md:text-6xl font-bold mb-6" loading="lazy">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400" loading="lazy">Free Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" loading="lazy">Get expert advice on AI strategy, cybersecurity, cloud migration, and digital transformation. </p>
              Our certified professionals are here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" loading="lazy">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group" loading="lazy" aria-label="Action button">Schedule Now</button>
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" loading="lazy" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300" loading="lazy" aria-label="Action button">Learn More</button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4" loading="lazy">
          <div className="max-w-7xl mx-auto" loading="lazy">
            <h2 className="text-3xl font-bold text-center mb-12" loading="lazy">Why Choose Our Consultation?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" loading="lazy">{features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10" loading="lazy">
                  <div className="text-cyan-400 mb-4 flex justify-center" loading="lazy">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2" loading="lazy">{feature.title}</h3>
                  <p className="text-gray-300" loading="lazy">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-16 px-4" loading="lazy">
          <div className="max-w-4xl mx-auto" loading="lazy">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10" loading="lazy">
              <h2 className="text-3xl font-bold text-center mb-8" loading="lazy">Schedule Your Free Consultation</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12" loading="lazy">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" loading="lazy" />
                  <h3 className="text-2xl font-semibold mb-4" loading="lazy">Thank You!</h3>
                  <p className="text-gray-300 mb-6" loading="lazy">We've received your consultation request. Our team will contact you within 24 hours.</p>
                  <button 
                    onClick={() = aria-label="Action button">setIsSubmitted(false)}</button>
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300" loading="lazy"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" loading="lazy">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" loading="lazy">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2" loading="lazy">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" loading="lazy"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2" loading="lazy">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" loading="lazy"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6" loading="lazy">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2" loading="lazy">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" loading="lazy"
                        placeholder="Enter your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2" loading="lazy">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" loading="lazy"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2" loading="lazy">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" loading="lazy"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-strategy">AI Strategy & Implementation</option>
                      <option value="cybersecurity">Cybersecurity Audit</option>
                      <option value="cloud-migration">Cloud Migration</option>
                      <option value="digital-transformation">Digital Transformation</option>
                      <option value="it-consulting">General IT Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2" loading="lazy">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent" loading="lazy"
                      placeholder="Tell us about your project or challenges..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group" loading="lazy"
                   aria-label="Action button">Submit Consultation Request</button>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" loading="lazy" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4" loading="lazy">
          <div className="max-w-7xl mx-auto text-center" loading="lazy">
            <h2 className="text-3xl font-bold mb-8" loading="lazy">Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8" loading="lazy">
              <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10" loading="lazy">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold mb-2" loading="lazy">Phone</h3>
                <p className="text-gray-300" loading="lazy">+1 (555) 123-4567</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10" loading="lazy">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold mb-2" loading="lazy">Email</h3>
                <p className="text-gray-300" loading="lazy">consultation@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10" loading="lazy">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" loading="lazy" />
                <h3 className="text-xl font-semibold mb-2" loading="lazy">Location</h3>
                <p className="text-gray-300" loading="lazy">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};