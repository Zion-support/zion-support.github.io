'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';

interface ConsultationType {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  features: string[];
  popular: boolean;
}

const ConsultationPage: React.FC = () => {
const [selectedType, setSelectedType] = useState<string>('');

  const consultationTypes: ConsultationType[] = [
    {
      id: '1',
      name: 'Discovery Call',
      description: 'Initial consultation to understand your business needs and challenges',
      duration: '30 minutes',
      price: 'Free',
      features: [
'Current IT assessment',
        'Technology roadmap development',
        'Budget planning and optimization',
        'Risk analysis and mitigation',
        'Implementation timeline'

      ],
      popular: true});)
},
    {
      id: '3',
      name: 'Technical Deep Dive',
      description: 'In-depth technical analysis and solution architecture design',
      duration: '4-8 hours',
      price: '$1,200',
      features: [
'Cloud readiness assessment',
        'Migration strategy development',
        'Cost optimization analysis',
        'Security and compliance review',
        'Implementation roadmap'
      ],
      popular: false});)
},
    {
      id: 'security',
      name: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations to protect your digital assets.',
      duration: '3-5 hours',
      price: '$750',
      features: [
        'Security vulnerability assessment',
        'Compliance review',
        'Penetration testing guidance',
        'Security policy development',
        'Incident response planning'

      ],
      popular: false});)
}
  ];

const experts = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI & Machine Learning Consultant',
      experience: '15+ years',
      expertise: ['AI Strategy', 'Machine Learning', 'Data Science'],
      image: '/images/experts/sarah-chen.jpg'});)
},
    {
      name: 'Michael Rodriguez',
      role: 'Cloud Architecture Specialist',
      experience: '12+ years',

import { Calendar, Clock, User, Mail, Phone, MessageCircle, CheckCircle, ArrowRight, Zap, Target, Users, Award } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    preferredTime: '',
    urgency: 'medium'
  });

  const services = [
    {
      icon: Zap,
      title: 'AI Strategy & Implementation',
      description: 'Develop and implement AI solutions tailored to your business needs',
      duration: '60-90 minutes'
    },
    {
      icon: Target,
      title: 'Cloud Migration Planning',
      description: 'Plan and execute seamless cloud migration strategies',
      duration: '45-60 minutes'
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'Guide your organization through comprehensive digital transformation',
      duration: '90-120 minutes'
    },
    {
      icon: Award,
      title: 'Cybersecurity Assessment',
      description: 'Evaluate and strengthen your cybersecurity posture',
      duration: '60-90 minutes'
    }
  ];

  const consultationTypes = [
    {
      title: 'Discovery Call',
      description: 'Free 30-minute consultation to understand your needs',
      duration: '30 minutes',
      price: 'Free',
      features: ['Needs assessment', 'Solution overview', 'Next steps planning']
    },
    {
      title: 'Strategy Session',
      description: 'Comprehensive consultation with detailed recommendations',
      duration: '90 minutes',
      price: '$500',
      features: ['Detailed analysis', 'Custom recommendations', 'Implementation roadmap', 'Follow-up support']
    },
    {
      title: 'Executive Briefing',
      description: 'High-level strategic consultation for leadership teams',
      duration: '2 hours',
      price: '$1,000',
      features: ['Executive summary', 'Strategic recommendations', 'Risk assessment', 'ROI analysis']
    }
  ];

      </Helmet>

<div></div>
        {/* Hero Section */}
        <section></section>
          <div></div>
            <h1></h1>
              Expert <spa></spa>Consultation</span>

            </h1>
            <p></p>
              Get personalized guidance from our experienced team of IT experts. Transform your business with strategic technology solutions.
            </p>

<div></div>
              <div></div>
                <Calendar className="w-8 h-8 text-purple-400" />
                <div></div>
                  <di></di>Flexible Scheduling</div>
                  <di></di>Book at your convenience</div>

                </div>
))}

            </div>
          </div>
        </section>

        {/* Consultation Types */}
<section></section>
          <div></div>
            <div></div>
              <h></h>Choose Your Consultation Type</h2>
              <p></p>
                Select the consultation that best fits your needs. All sessions include detailed reports and actionable recommendations.
              </p>
            </div>

            <div></div>
              {consultationTypes.map((type) => (
                <div></div>
                  {type.popular && (
                    <div></div>
                      <div></div>

                        Most Popular
                      </span>
                    </div>
);

                  <div></div>
                    <h></h>{type.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{type.description}</p>
                    <div></div>
                      <Clock className="w-4 h-4" />
                      <spa></spa>{type.duration}</span>
                    </div>
                    <di></di>{type.price}</div>
                  </div>

                  <ul></ul>
                    {type.features.map((feature, index) => (
                      <li></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ));
                  </ul>

                  <button></button> handleBooking(type.id);
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      type.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'});)
}`}
                  >
                    Book Consultation
                  </button>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* Expert Team */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Meet Our Experts</h2>
              <p></p>
                Our team of experienced professionals brings deep expertise across all areas of technology.
              </p>
            </div>

            <div></div>
              {experts.map((expert, index) => (
                <div></div>
                  <div></div>
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h></h>{expert.name}</h3>
                  <p className="text-purple-400 mb-2">{expert.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{expert.experience} experience</p>
                  <div></div>
                    {expert.expertise.map((skill, skillIndex) => (
                      <span></span>
                        {skill}
                      </span>
                    ));

                  </div>
                </div>
              ));
            </div>
          </div>
        </section>

{/* Contact Information */}
        <section></section>
          <div></div>
            <div></div>
              <div></div>
                <h></h>Ready to Get Started?</h2>
                <p></p>
                  Contact us today to schedule your consultation or learn more about our services.
                </p>

              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-white font-medium mb-2">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-white font-medium mb-2">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {consultationServices.map((service, index) => (
                      <option key={index} value={service} className="bg-gray-800">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your project and specific needs"
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                  >
                    <ArrowRight className="w-5 h-5 inline mr-2" />
                    Schedule Consultation
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

<div></div>
                <div></div>
                  <div></div>
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h></h>Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
                <div></div>
                  <div></div>
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h></h>Email Us</h3>
                  <p className="text-gray-300">consultation@ziontech.com</p>
                </div>
                <div></div>
                  <div></div>
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h></h>Visit Us</h3>
                  <p className="text-gray-300">123 Tech Street, Silicon Valley</p>

                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>
{/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Get personalized guidance from our expert team to transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleBooking('strategy')}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
            <Link
              to="/contact"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Contact Us
            </Link>

          </div>
        </div>
      </section>

{/* Services Section */}
      <section></section>
        <div></div>
          <div></div>
            <h></h>Consultation Services</h2>

            <p className="text-xl text-gray-300">Comprehensive technology consulting tailored to your business needs</p>
          </div>
          
          <div></div>
            {consultationServices.map((service, index) => (
              <div></div>
                <div></div>
                  <CheckCircle className="h-6 w-6 text-white" />

                </div>
<h2 className="text-3xl font-bold text-white mb-12 text-center">Consultation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type) => (
              <div
                key={type.id}
                className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                  type.popular ? 'border-purple-400' : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 relative`}
              >
                {type.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-4">{type.name}</h3>
                <p className="text-gray-300 mb-6">{type.description}</p>
                <div className="mb-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      Duration
                    </span>
                    <span>{type.duration}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      Price
                    </span>
                    <span className="text-2xl font-bold text-white">{type.price}</span>
                  </div>
                </div>
                <ul className="space-y-2 mb-8">
                  {type.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleBooking(type.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    type.popular
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  Book Consultation
                </button>

              </div>
            ));
          </div>
        </div>
      </section>

{/* Process Section */}
      <section></section>
        <div></div>
          <div></div>
            <h></h>Our Process</h2>
            <p className="text-xl text-gray-300">How we deliver exceptional consultation services</p>
          </div>
          
          <div></div>
            <div></div>
              <div></div>
                <spa></spa>1</span>
              </div>
              <h></h>Discovery</h3>
              <p className="text-gray-300">We analyze your current technology landscape and business objectives.</p>
            </div>
            
            <div></div>
              <div></div>
                <spa></spa>2</span>
              </div>
              <h></h>Strategy</h3>
              <p className="text-gray-300">We develop a customized roadmap aligned with your goals.</p>
            </div>
            
            <div></div>
              <div></div>
                <spa></spa>3</span>
              </div>
              <h></h>Implementation</h3>
              <p className="text-gray-300">We guide you through execution and provide ongoing support.</p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
<section></section>
        <div></div>
          <h2></h2>
            Ready to Transform Your Business?
          </h2>
          <p></p>
            Schedule a consultation with our experts and discover how technology can drive your success.
          </p>
          <div></div>
            <button></button>

              <Calendar className="mr-2 h-5 w-5" />
              Schedule Now
            </button>
            <button></button>
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
);)

};

export default ConsultationPage;