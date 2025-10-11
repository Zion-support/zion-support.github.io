'use client';
import React from 'react';
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {Shield;, Eye, Database, Server, Mail, Phone, MapPin, CheckCircle, User, Edit, Trash2} from 'lucide-react'
const PrivacyPage: React.FC = () => 
    {} category: 'Personal Information'},;,
icon: User,;,
description: 'Name, email, phone number, and other identifying information'
    },
    
description: 'Name, email, phone number, and contact details'} ,
    
description: 'How you interact with our services and website'} ,
    
description: 'IP address, browser type, device information, and cookies'} ]
const purposes = [
    
    }
    
    }
    
    }
    
icon: CheckCircle} ]
const rights = [
    
    }
    
    }
    
    }
    
icon: Database} ]
const contactInfo=
address: '364 E Main St STE 1008, Middletown, DE 19709'} const contactInfo=
address: '364 E Main St STE 1008, Middletown, DE 19709'} return (
    <>
=======
import { CheckCircle } from 'lucide-react';

export default function PagePage() {
  const features = [
    {
      title: 'Expert Solutions',
      description: 'Professional page services delivered by experienced professionals.',
      benefits: ['Quality Assurance', 'Fast Delivery', '24/7 Support', 'Custom Solutions']
    },
    {
      title: 'Advanced Technology',
      description: 'Cutting-edge tools and technologies to deliver superior results.',
      benefits: ['Latest Tools', 'Modern Methods', 'Scalable Solutions', 'Future-Ready']
    },
    {
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.',
      benefits: ['High Success Rate', 'Client Satisfaction', 'Ongoing Support', 'Continuous Improvement']
    }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional page services to help your business succeed and grow.
            </p>
          </div>
<<<<<<< HEAD

      <Footer />
    </>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <type.icon className="w-8 h-8 text-white">
                </div>

      <Footer />
    </>
                <h3 className="text-xl font-bold text-white mb-4">{type.category}</h3>
                <p className="text-gray-300">{type.description}</p>
=======
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d
              </div>
            ))}
          </div>
<<<<<<< HEAD

      <Footer />
    </>
        </div>

      <Footer />
    </>
      </section>

      {/* Purposes Section */}
      <section className=">
    g: px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl m, d:text-4xl font-bold text-white mb-4">
How We Use Your Information>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
We use your information for specific, legitimate purposes
            </p>
          </div>

      <Footer />
    </>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <purpose.icon className="w-6 h-6 text-white">
  </purpose>
                  </div>

      <Footer />
    </>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                    <p className="text-gray-300">
                  </div>

      <Footer />
    </>
                </div>

      <Footer />
    </>
              </div>

      <Footer />
    </>
            ))}
          </div>

      <Footer />
    </>
        </div>

      <Footer />
    </>
      </section>

      {/* Rights Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
Your Privacy Rights>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
You have control over your personal data
            </p>
          </div>

      <Footer />
    </>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <right.icon className="w-8 h-8 text-white">
                </div>

    </>
                <h3 className="text-xl font-bold text-white mb-4">{right.title}</h3>
                <p className="text-gray-300">{right.description}</p>
              </div>

      <Footer />
    </>
            ))}
          </div>

      <Footer />
    </>
        </div>

      <Footer />
    </>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 text-center">
            <h2 className=">
    ,>
    d: text-4xl font-bold text-white mb-6">
Questions About Privacy?>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
Contact our privacy team for any questions or concerns about your data
            </p>

      <Footer />
    </>
              <div className="flex items-center justify-center">
                <Phone className="w-6 h-6 text-cyan-400 mr-3" />
                <span className="text-white">{contactInfo.phone}</span>
              </div>

      <Footer />
    </>
              <div className="flex items-center justify-center">
                <MapPin className="w-6 h-6 text-cyan-400 mr-3" />
                <span className="text-white text-sm">{contactInfo.address}</span>
              </div>

      <Footer />
    </>
            </div>

      <Footer />
    </>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">;
Contact Privacy Team
            </button>
          </div>

      <Footer />
    </>
        </div>

      <Footer />
    </>
      </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Features>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover the powerful features that make our solutions stand out.
              </p>

            <div className=">
    ,>
    d: grid-cols-2 l, g:grid-cols-3 gap-8">
              
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600 mr-3">
                    <h3 className="text-xl font-semibold text-gray-900">
                  </div>
                  <p className="text-gray-600 mb-4">
                  <ul className="space-y-2">
                    
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2">
                        {benefit}
                      </li>
                    ))}
                  </ul>
              ))}
            </div>

        <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the benefits of working with industry leaders.
              </p>

            <div className=">
    ,>
    d: grid-cols-2 l, g:grid-cols-3 gap-8">
              
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3">
                    <span className="text-lg font-medium text-gray-900">
                  </div>
              ))}
            </div>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to learn how our solutions can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us>
              </button>
              <button className=">
    ,>
    r: bg-blue-600 hove, r:text-white transition-colors">
                Schedule Demo
              </button>

      <Footer />
    </div>

      <Footer />
    </>
  )
}

export default PrivacyPage

            </Navigation>
</section></section></section>
</div></div></div></div></div></div></div>
</h3></h3>
</p></p></p>
=======
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our page services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-dc8d
