'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
const PagePage: React.FC = () => {
    const features = [
    {
            </div>
          </div>
        </div>
      </section>
  },
    {/* Features Section */}
      <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="text-center mb-16" / /></div>
            <h2></h2>
              Why Choose Our Page?,
            </h2>
            <p></p>
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" / /></div>
            {features.map((feature, index) => ()
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto" / /></div>
          <div className="text-center mb-16" / /></div>
            <h2></h2>
              Key Benefits
            </h2>
            <p></p>
              Experience the power of our page solutions for your business.,
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6" / /></div>
            {benefits.map((benefit, index) => ()
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-4xl mx-auto text-center" / /></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12" / /></div>
            <h2></h2>
              Ready to Get Started?
            </h2>
            <p></p>
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" / /></div>
              <button></button>
                <Phone></Phone>
                Call Now
              </button>
              <button></button>
                <Mail></Mail>
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
  ),;
};];
export default PagePage;

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SpecializedServicesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Scale your operations worldwide with our robust infrastructure';
    };
  ];
  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce operational costs by 30%',
    'Improve decision-making with real-time insights',
    'Scale operations without proportional staff increases',;
    'Gain competitive advantage with cutting-edge technology',;
    'Ensure 99.9% uptime and reliability';
  ];
  return() {features.map((feature, index) => ()
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" /></h2>
                Key Benefits
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
                Experience the power of our specialized solutions for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" /></div>
              {benefits.map((benefit, index) => ()
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm: px-6 lg:px-8" /></section>
          <div className="max-w-4xl mx-auto text-center" /></div>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12" /></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" /></h2>
                Ready to Get Started?
              </h2>
              <p className="text-xl text-purple-100 mb-8" /></p>
                Contact our experts to discuss your specialized service needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center" /></button>
                  <Phone className="mr-2 h-5 w-5" / /></Phone>
                  Call Now
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center" /></button>
                  <Mail className="mr-2 h-5 w-5" / /></Mail>
                  Email Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer / /></Footer>
    </>
  ),
};

export default SpecializedServicesPage;
