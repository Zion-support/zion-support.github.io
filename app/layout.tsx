'use client'
import React from 'react';
import { Helmet}  } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe }  } from 'lucide-react';
const LayoutPage: React.FC = () => {,
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
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
    }
  ];

  const benefits = [
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
      <Helmet>
        <title>Layout | Zion Tech Group</title>
        <meta name="description" content="Advanced layout solutions powered by cutting-edge AI technology" />
        <meta name="keywords" content="layout, AI, technology, solutions, Zion Tech Group" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section></section>
        </section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center"></div></div>
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6"></h1></h1>
              <span>Layout</span>
              <br />
              <span className="text-white"></span></span>Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>Transform your business with our advanced layout solutions.</p>
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section></section>
        </section>
        <div className="max-w-7xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Why Choose Our Layout?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
              Our layout solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
              </div>
            ))}
          </div>
        ))
      </section>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>Experience the power of our layout solutions for your business.</p>
            </p>
          </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 sm:px-6 lg:px-8"></section></section>
        </section>
        <div className="max-w-4xl mx-auto text-center"></div></div>
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12"></div></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Contact our experts to discuss your layout needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2" size={20} />
                Call Now
              </button>
              <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2" size={20} />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LayoutPage;

