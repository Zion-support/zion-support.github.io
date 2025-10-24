import React from 'react';
import { CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CompliancePage: React.FC = () => {
  const features = [
    {
      title: 'Compliance',
      description: 'Professional compliance services delivered by experienced professionals.',
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Compliance
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional compliance services to help your business succeed and grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
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
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact us today to learn more about our compliance services.
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
        </section>

        {/* Compliance Standards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Compliance Certifications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">We maintain compliance with the most stringent security and regulatory standards.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{)
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
                  <div className="flex items-center mb-4"></div>
                    <standard.icon className="h-8 w-8 text-purple-400 mr-3" /></standard>
                    <div></div>
                      <h3 className="text-xl font-semibold text-white">{standard.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${}
                        standard.status === 'Certified' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-blue-500 text-white'
                      }`}></span>
                        {standard.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Compliance Program</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Comprehensive approach to maintaining the highest standards of security and compliance.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">{)
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"></div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Benefits of Our Compliance Program</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the advantages of working with a fully compliant technology partner.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">{)
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center"></div>
                  <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-4" /></CheckCircle>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Questions About Our Compliance?</h2>
            <p className="text-xl text-purple-100 mb-8">Contact our compliance team to learn more about our security standards and certifications.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"></button>
                <Shield className="mr-2 h-5 w-5" /></Shield>
                View Certifications
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"></button>
                <FileText className="mr-2 h-5 w-5" /></FileText>
                Download Report
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default CompliancePage;