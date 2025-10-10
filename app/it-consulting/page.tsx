'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, Target, Users, Shield, Brain, Cloud, Database, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITConsultingPage: React.FC = () => {
  const consultingServices = [
    {
      icon: Brain,
      title: 'Strategic IT Planning',
      description: 'Comprehensive IT strategy development and digital transformation roadmaps',
      features: ['Technology Assessment', 'Digital Roadmap', 'ROI Analysis', 'Risk Management'],
      benefits: ['Clear technology direction', 'Cost optimization', 'Competitive advantage'],
      price: 'Starting at $2,500'
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Design and implement scalable cloud solutions for modern businesses',
      features: ['AWS/Azure/GCP', 'Migration Planning', 'Cost Optimization', 'Security Design'],
      benefits: ['Scalable infrastructure', 'Reduced costs', 'Enhanced security'],
      price: 'Starting at $3,500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Strategy',
      description: 'Comprehensive security assessments and implementation strategies',
      features: ['Security Audits', 'Compliance Planning', 'Incident Response', 'Training Programs'],
      benefits: ['Enhanced security posture', 'Compliance assurance', 'Risk mitigation'],
      price: 'Starting at $4,000'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Optimize data architecture and implement modern data solutions',
      features: ['Data Strategy', 'Database Design', 'Analytics Setup', 'Governance Planning'],
      benefits: ['Better data insights', 'Improved decision making', 'Data security'],
      price: 'Starting at $3,000'
    }
  ];

  const benefits = [
    {
      title: 'Expert Guidance',
      description: 'Access to experienced IT consultants with deep industry knowledge',
      icon: Users
    },
    {
      title: 'Cost Savings',
      description: 'Optimize your IT investments and reduce operational costs',
      icon: TrendingUp
    },
    {
      title: 'Risk Mitigation',
      description: 'Identify and address potential technology risks before they become problems',
      icon: Shield
    },
    {
      title: 'Competitive Advantage',
      description: 'Leverage technology to stay ahead of your competition',
      icon: Target
    }
  ];

  return (
    <>{}</>{}{}
      <Helmet></Helme>
        <<<<title>IT</title></<<title>Consulting</title> Services - Zion Tech Group</title>
        <meta name="description" content="Expert IT consulting services to transform your business. Strategic planning, digital transformation, cloud migration, and cybersecurity solutions." /></met>
        <meta name="keywords" content="IT consulting, digital transformation, cloud migration, cybersecurity, technology strategy" /></met>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <Navigation /></Navigatio>

        <main className="pt-24 pb-16 px-4"></mai>
          <div className="max-w-7 xl mx-auto">{/* Hero Section */}</div>
            <div className="text-center mb-16"></div>
              <h1 className="text-4 xl md:text-6 xl font-bold text-gray-900 mb-6"></h1></<<<h1>IT</h1></<<h1>Consulting</h1> Services<p className="text-xl text-gray-600 max-w-3 xl mx-auto">Transform your business with expert IT consulting. We provide strategic guidance,</p></<<<p>digital</p></<<p>transformation</p>, and technology solutions that drive growth and efficiency.</p>
              </p>
            </div>

            {/* Services Section */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">{consultingServices.map((service, index) => (</div>
                <div key={index} className="bg-white rounded-2 xl p-8 shadow-lg hover:shadow-xl transition-shadow"></div>
                  <div className="flex items-center mb-6"></div>
                    <div className="p-3 bg-blue-100 rounded-xl mr-4"></div>
                      <service.icon className="w-8 h-8 text-blue-600" /></servic>
                    </div>
                    <div></div>
                      <h3 className="text-2 xl font-bold text-gray-900"></h>{service.title}<p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>

                  <div className="mb-6"></div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4><ul className="space-y-2">{service.features.map((feature, idx) => (</u>
                        <li key={idx} className="flex items-center text-gray-600"></l>
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" >{feature}</CheckCircl>
                        </CheckCircle>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6"></div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4><ul className="space-y-2">{service.benefits.map((benefit, idx) => (</u>
                        <li key={idx} className="flex items-center text-gray-600"></l>
                          <ArrowRight className="w-5 h-5 text-blue-500 mr-2" >{benefit}</ArrowRigh>
                        </ArrowRight>
                      ))}
                    </ul>
                  </div>

                  <div className="text-center"></div>
                    <div className="text-3 xl font-bold text-blue-600 mb-2"></div>{service.price}<button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">Get Started</butto>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits Section */}
            <section className="py-16 bg-white rounded-2 xl shadow-lg mb-16"></sectio>
              <div className="text-center mb-12"></div>
                <h2 className="text-3 xl font-bold text-gray-900 mb-4"></h2></<<<h2>Why</h2></<<h2>Choose</h2> Our IT Consulting?<p className="text-xl text-gray-600"></p></<<<p>Proven</p></<<p>benefits</p> that drive business success<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
                  <div key={index} className="text-center"></div>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                      <benefit.icon className="w-8 h-8 text-blue-600" /></benefi>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2"></h>{benefit.title}<p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-2 xl p-12 text-white"></sectio>
              <h2 className="text-3 xl font-bold mb-4"></h2></<<<h2>Ready</h2></<<h2>to</h2> Transform Your IT?<p className="text-xl mb-8">Contact our experts for a free consultation and discover how we can help your business.</p>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <a
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                ></a>
                  <Phone className="w-5 h-5 mr-2" >Call (302) 464-0950</Phon>
                </Phone>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                ></a>
                  <Mail className="w-5 h-5 mr-2" >Email Us</Mai>
                </Mail>
              </div>
            </section>
          </div>
        </main>

        <Footer /></Foote>
      </div>
    
  );
};

export default ITConsultingPage;