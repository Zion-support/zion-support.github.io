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
      icon: <Clock className="w-6 h-6" />,
      title: 'Quick Response',
      description: 'Get back to you within 24 hours'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years experience'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Confidential',
      description: 'Your information is completely secure and private'
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: 'No Obligation',
      description: 'Free consultation with no strings attached'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Free Consultation - Zion Tech Group | Technology Advisory Services</title>
        <meta
          name="description"
          content="Get a free consultation with our technology experts. We'll help you develop AI strategies, cybersecurity plans, and digital transformation roadmaps for your business."
        />
        </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span>Free Consultation
              </span>
            </h1>
            <p>Get expert advice on AI strategy, cybersecurity, cloud migration, and digital transformation. 
              Our certified professionals are here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group">
                Schedule Now
                <ArrowRight> </ArrowRight>button>
              <button>Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2>Why Choose Our Consultation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                  <div>{feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2>Schedule Your Free Consultation
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3>Thank You!</h3>
                  <p>We've received your consultation request. Our team will contact you within 24 hours.
                  </p>
                  <button>setIsSubmitted(false)}
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label>Full Name *
                      </label>
                      <input> </input>div>
                    <div>
                      <label>Email Address *
                      </label>
                      <input> </input>div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label>Company Name
                      </label>
                      <input> </input>div>
                    <div>
                      <label>Phone Number
                      </label>
                      <input> </input>div>
                  </div>

                  <div>
                    <label>Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option>Select a service</option>
                      <option>AI Strategy & Implementation</option>
                      <option>Cybersecurity Audit</option>
                      <option>Cloud Migration</option>
                      <option>Digital Transformation</option>
                      <option>General IT Consulting</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label>Message *
                    </label>
                    <textarea> </textarea>div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                  >
                    Submit Consultation Request
                    <ArrowRight> </ArrowRight>button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2>Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <Phone className="w-8 h-8 text-cyan-400 mb-4" />
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <h3>Email</h3>
                <p>consultation@ziontechgroup.com</p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <h3>Location</h3>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}