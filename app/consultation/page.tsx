'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, Calendar, CheckCircle, ArrowRight, Clock, Users, Shield, Zap } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  const [formData, setFormData] = useState()
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {;
    const { name, value } = e.target;
    setFormData()
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {;
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

  const consultationTypes = [
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
      features: ['Process analysis', 'Technology selection', 'Change management', 'Timeline planning'],
    };
  ];
  const process = [
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
      title: 'Ongoing Support',
    }
  ]

  return (
    <>
      <Helmet>
        </Helmet><title>Consultation Services | Zion Tech Group</title>
        <meta name="description" content="Expert consultation services for AI strategy, cloud migration, and cybersecurity. Get personalized guidance for your technology needs." />
        <meta name="keywords" content="AI consultation, cloud migration, cybersecurity audit, technology consulting, IT strategy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        </div><section className="py-20 px-4">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Expert Consultation Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get personalized guidance and strategic insights to transform your business with cutting-edge technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  </div><h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      </ul><li key={featureIndex} className="flex items-center text-gray-300">
                        </li><CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                    ))}
                  </ul>

                  <div className="border-t border-white/10 pt-6">
                    </div><div className="flex justify-between items-center mb-4">
                      </div><span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                      <span className="text-gray-400 flex items-center">
                        </span><Clock className="w-4 h-4 mr-2" />
                        {service.duration}
                      </span>
                    </div>
                    <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                </div>
              ))}
            </div>

              </div>
            </div>

      description: 'Provide continuous guidance and support throughout implementation.',
      icon: Clock
    }
  ];

  const selectedConsultation = consultationTypes.find(type => type.id === selectedType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      </div><Helmet>
        </Helmet><title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI strategy, technical architecture, and digital transformation. Our consultants help you make informed technology decisions." />
        <meta name="keywords" content="AI consultation, IT consulting, digital transformation, technology strategy, technical architecture, business consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4">
        </section><div className="
          </div><h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Expert </h1><span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Consultation</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get expert guidance on AI strategy, technical architecture, and digital transformation. 
            Our experienced consultants help you make informed technology decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Schedule Consultation
              </button><ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-16 px-4">
        </section><div className="
          </div><div className="text-center mb-16">
            </div><h2 className="text-4xl font-bold text-white mb-6">Consultation Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the consultation type that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {consultationTypes.map((type) => (
              </div><div
                key={type.id}
                className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 cursor-pointer hover:scale-105 ${
                  selectedType === type.id
                    ? 'border-blue-400/50 ring-2 ring-blue-400/20'
                    : 'border-white/20 hover:border-white/40'
                }`}
                onClick={() => setSelectedType(type.id)}
              >
                {type.popular && (
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    </div><div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
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

                <div className="text-center mb-6">
                  </div><h3 className="text-2xl font-bold text-white mb-2">{type.name}</h3>
                  <p className="text-gray-300 mb-4">{type.description}</p>
                  <div className="flex items-center justify-center gap-4 mb-4">
                    </div><span className="text-3xl font-bold text-white">{type.price}</span>
                    <span className="text-gray-400">{type.duration}</span>
                  </div>

                <ul className="space-y-3">
                  {type.features.map((feature, index) => (
                    </ul><li key={index} className="flex items-center text-gray-300">
                      </li><CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Consultation Details */}
      {selectedConsultation && (
        <section className="py-16 px-4 bg-white/5">
          </section><div className="
            </div><div className="text-center mb-12">
              </div><h2 className="text-4xl font-bold text-white mb-6">{selectedConsultation.name}</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">{selectedConsultation.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              </div><div>
                </div><h3 className="text-2xl font-bold text-white mb-6">What's Included</h3>
                <ul className="space-y-4">
                  {selectedConsultation.features.map((feature, index) => (
                    </ul><li key={index} className="flex items-start text-gray-300">
                      </li><CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                </div><h3 className="text-2xl font-bold text-white mb-6">Schedule Your Consultation</h3>
                <div className="space-y-4">
                  </div><div className="flex items-center gap-3 text-gray-300">
                    </div><Calendar className="w-5 h-5 text-blue-400" />
                    <span>Duration: {selectedConsultation.duration}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    </div><Clock className="w-5 h-5 text-blue-400" />
                    <span>Investment: {selectedConsultation.price}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    </div><Users className="w-5 h-5 text-blue-400" />
                    <span>Team of 2-3 experts</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300" /></button>
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer /></Footer>
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
    </>
  );
};

      )}

      {/* Process Section */}
      <section className="py-16 px-4">
        </section><div className="
          </div><div className="text-center mb-16">
            </div><h2 className="text-4xl font-bold text-white mb-6">Our Process</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A structured approach to delivering exceptional consultation services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              </div><div key={index} className="text-center">
                </div><div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  </div><step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">Step {step.step}</div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-white/5">
        </section><div className="
          </div><div className="text-center mb-12">
            </div><h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300">Contact our consultation team today</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            </div><div className="text-center">
              </div><div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                </div><Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-300">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-400">Mon-Fri 9AM-6PM EST</p>
            </div>

            <div className="text-center">
              </div><div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                </div><Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-300">consultation@ziontechgroup.com</p>
              <p className="text-sm text-gray-400">24/7 Response</p>
            </div>

            <div className="text-center">
              </div><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                </div><MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-300">San Francisco, CA</p>
              <p className="text-sm text-gray-400">By Appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        </section><div className="
          </div><div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            </div><h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8" /></p>
              Let our expert consultants help you navigate the complex world of AI and technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div><button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Schedule Free Consultation
                </button><ArrowRight className="inline-block ml-2 w-5 h-5" />
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
export default ConsultationPage;
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
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">Schedule Consultation
              ))}
            {/* Contact Information */}
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?
                <p className="text-gray-300 mb-8">
                  Contact our experts to discuss your specific needs and schedule a consultation.
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white mb-2">Call Us
                  <p className="text-gray-300 mb-2">(302) 464-0950
                  <p className="text-sm text-gray-400">Mon-Fri: 9AM-6PM EST
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white mb-2">Email Us
                  <p className="text-gray-300 mb-2">kleber@ziontechgroup.com
                  <p className="text-sm text-gray-400">We'll respond within 24 hours
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-white mb-2">Schedule Online
                  <p className="text-gray-300 mb-2">Book a consultation
                  <p className="text-sm text-gray-400">Available 24/7
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Consultation
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Get personalized guidance from our experienced team of IT experts. Transform your business with strategic technology solutions.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex items-center justify-center gap-4 text-white">
                <Calendar className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Flexible Scheduling
                  <div className="text-gray-400">Book at your convenience
              <div className="flex items-center justify-center gap-4 text-white">
                <Users className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Expert Team
                  <div className="text-gray-400">15+ years experience
              <div className="flex items-center justify-center gap-4 text-white">
                <CheckCircle className="w-8 h-8 text-purple-400" />
                <div className="text-left">
                  <div className="text-2xl font-bold">Proven Results
                  <div className="text-gray-400">98% client satisfaction
              <div className="text-center mt-8">
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center">
                  Schedule Your Consultation
                  <ArrowRight className="w-5 h-5 ml-2" />
{/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Choose Your Consultation Type
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select the consultation that best fits your needs. All sessions include detailed reports and actionable recommendations.
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {consultationTypes.map((type) => (
                <$2 />
                  key={type.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    type.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'
                  }`}
                >
                  {type.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular
                  )}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-white mb-3">{type.name}
                    <p className="text-gray-300 text-sm mb-4">{type.description}
                    <div className="flex items-center justify-center gap-2 text-purple-400 text-sm mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{type.duration}
                    <div className="text-3xl font-bold text-white">{type.price}
                  <ul className="space-y-3 mb-8">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                    ))}
                  <$2 />
                    onClick={() =>handleBooking(type.id)}
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      type.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600'
                        : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    Book Consultation
              ))}
{/* Expert Team */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Meet Our Experts
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our team of experienced professionals brings deep expertise across all areas of technology.
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experts.map((expert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  <h3 className="text-xl font-bold text-white mb-2">{expert.name}
                  <p className="text-purple-400 mb-2">{expert.role}
                  <p className="text-gray-400 text-sm mb-4">{expert.experience} experience
                  <div className="flex flex-wrap justify-center gap-2">
                    {expert.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">
                        {skill}
                    ))}
              ))}
        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?
                <p className="text-xl text-gray-300">
                  Contact us today to schedule your consultation or learn more about our services.
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  <h3 className="text-lg font-semibold text-white mb-2">Call Us
                  <p className="text-gray-300">+1 (555) 123-4567
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  <h3 className="text-lg font-semibold text-white mb-2">Email Us
                  <p className="text-gray-300">consultation@ziontech.com
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  <h3 className="text-lg font-semibold text-white mb-2">Visit Us
                  <p className="text-gray-300">123 Tech Street, Silicon Valley
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <$2 />
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                <$2 />
                  to="/services"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                  View All Services
      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Consultation Services
            <p className="text-xl text-gray-300">Comprehensive technology consulting tailored to your business needs
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultationServices.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-white" />
                <h3 className="text-xl font-semibold text-white mb-3">{service}
                <p className="text-gray-300">Expert guidance and strategic planning for your technology initiatives.
            ))}
      {/* Process Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Process
            <p className="text-xl text-gray-300">How we deliver exceptional consultation services
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1
              <h3 className="text-xl font-semibold text-white mb-3">Discovery
              <p className="text-gray-300">We analyze your current technology landscape and business objectives.
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2
              <h3 className="text-xl font-semibold text-white mb-3">Strategy
              <p className="text-gray-300">We develop a customized roadmap aligned with your goals.
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3
              <h3 className="text-xl font-semibold text-white mb-3">Implementation
              <p className="text-gray-300">We guide you through execution and provide ongoing support.
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          <p className="text-xl text-gray-300 mb-8">
            Schedule a consultation with our experts and discover how technology can drive your success.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Consultation
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
  )
}
export default ConsultationPage</div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></div></span></span></span></span></span></span></span></span></span></span></button></button></button></button></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></p></h1></h1></h2></h2></h2></h2></h2></h2></h2></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></h3></ul></ul></li></li></section></section></section></section></section></section></section></section>
