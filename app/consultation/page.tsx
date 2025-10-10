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
  popular: boolean});;)
}

const ConsultationPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string></string>('');

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
      popular: false});;)
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
      popular: true});;)
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
      popular: false});;)
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
      popular: false});;)
}
  ];

  const experts = [
    {
      name: 'Dr. Sarah Chen',
      role: 'AI & Machine Learning Specialist',
      experience: '15+ years',
      expertise: ['AI Strategy', 'Machine Learning', 'Data Science'],
      image: '/images/experts/sarah-chen.jpg'});;)
},
    {
      name: 'Michael Rodriguez',
      role: 'Cloud Architecture Expert',
      experience: '12+ years',
      expertise: ['Cloud Migration', 'DevOps', 'Infrastructure'],
      image: '/images/experts/michael-rodriguez.jpg'});;)
},
    {
      name: 'Alex Thompson',
      role: 'Cybersecurity Consultant',
      experience: '10+ years',
      expertise: ['Security Audits', 'Compliance', 'Risk Management'],
      image: '/images/experts/alex-thompson.jpg'});;)
}
  ];

  const handleBooking = (typeId: string) => {
    setSelectedType(typeId);
    // In a real app, this would open a booking modal or redirect to a booking page
    console.log(`Booking consultation: ${typeId}`););)
};

  return (
    <div></div>
      <Helmet></Helmet>
        <titl></titl>Consultation - Zion Tech Group | Expert IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team." />
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy" />
        <meta property="og:title" content="Consultation - Zion Tech Group" />
        <meta property="og:description" content="Expert IT consulting and strategy sessions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/consultation" />
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
              </div>
              <div></div>
                <Users className="w-8 h-8 text-purple-400" />
                <div></div>
                  <di></di>Expert Team</div>
                  <di></di>15+ years experience</div>
                </div>
              </div>
              <div></div>
                <CheckCircle className="w-8 h-8 text-purple-400" />
                <div></div>
                  <di></di>Proven Results</div>
                  <di></di>98% client satisfaction</div>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section></section>
          <div></div>
            <h></h>Choose Your Consultation</h2>
            <div></div>
              {consultationTypes.map((type, index) => (
                <div></div>
                  <div></div>
                    <h></h>{type.title}</h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <di></di>{type.price}</div>
                    <di></di>{type.duration}</div>
                  </div>
                  
                  <ul></ul>
                    {type.features.map((feature, featureIndex) => (
                      <li></li>
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <spa></spa>{feature}</span>
                      </li>
                    ));
                  </ul>
                  
                  <button></button>
                    Book Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section></section>
          <div></div>
            <div></div>
              <div></div>
                <h></h>Schedule Your Consultation</h2>
                <p></p>
                  Fill out the form below and we'll get back to you within 24 hours to schedule your consultation.
                </p>
              </div>
              
              <form></form>
                <div></div>
                  <div></div>
                    <labe></labe>Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div></div>
                    <labe></labe>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div></div>
                  <div></div>
                    <labe></labe>Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div></div>
                    <labe></labe>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div></div>
                  <labe></labe>Service Interest *</label>
                  <select></select>
                    <optio></optio>Select a service</option>
                    <optio></optio>AI Strategy & Implementation</option>
                    <optio></optio>Cloud Migration Planning</option>
                    <optio></optio>Digital Transformation</option>
                    <optio></optio>Cybersecurity Assessment</option>
                    <optio></optio>Other</option>
                  </select>
                </div>
                
                <div></div>
                  <div></div>
                    <labe></labe>Preferred Time</label>
                    <select></select>
                      <optio></optio>Select preferred time</option>
                      <optio></optio>Morning (9 AM - 12 PM)</option>
                      <optio></optio>Afternoon (12 PM - 5 PM)</option>
                      <optio></optio>Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                  
                  <div></div>
                    <labe></labe>Urgency</label>
                    <select></select>
                      <optio></optio>Low - Within 2 weeks</option>
                      <optio></optio>Medium - Within 1 week</option>
                      <optio></optio>High - Within 2-3 days</option>
                      <optio></optio>Urgent - Within 24 hours</option>
                    </select>
                  </div>
                </div>
                
                <div></div>
                  <labe></labe>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    placeholder="Tell us about your project and what you'd like to discuss..."
                  />
                </div>
                
                <div></div>
                  <button></button>
                    Schedule Consultation
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section></section>
          <div></div>
            <div></div>
              <h></h>Other Ways to Reach Us</h2>
              <p className="text-gray-300">Prefer to contact us directly? Here are other ways to get in touch.</p>
            </div>
            
            <div></div>
              <div></div>
                <div></div>
                  <Phone className="w-8 h-8 text-slate-900" />
                </div>
                <h></h>Phone</h3>
                <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
                <p className="text-gray-400 text-sm">Mon-Fri 9AM-6PM EST</p>
              </div>
              
              <div></div>
                <div></div>
                  <Mail className="w-8 h-8 text-slate-900" />
                </div>
                <h></h>Email</h3>
                <p className="text-cyan-400 font-medium">consultation@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">24/7 response</p>
              </div>
              
              <div></div>
                <div></div>
                  <MessageCircle className="w-8 h-8 text-slate-900" />
                </div>
                <h></h>Live Chat</h3>
                <p className="text-cyan-400 font-medium">Available on website</p>
                <p className="text-gray-400 text-sm">24/7 support</p>
              </div>
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
                      </div>
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
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'});;)
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
              </div>

              <div></div>
                <Link></Link>
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link></Link>
                  View All Services
                </Link>
              </div>
            </div>
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
                <h></h>{service}</h3>
                <p className="text-gray-300">Expert guidance and strategic planning for your technology initiatives.</p>
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
              Schedule Consultation
            </button>
            <button></button>
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  ););)
};

export default ConsultationPage;