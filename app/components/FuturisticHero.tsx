'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
const FuturisticHeroPage: React.FC = () => {
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
<<<<<<< HEAD
  }
    }
  ];
  const benefits = [
=======
  };
    };
  ];
const benefits = [
>>>>>>> main
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',

    '24/7 technical support',

    'Easy integration with existing systems',

<<<<<<< HEAD
    'Cost-effective pricing plans',

    'Proven track record of success'
  ]
return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
            {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3"></div>
                <CheckCircle>
                </CheckCircle><p className="text-gray-300 text-lg">{benefit}</p>
              </div>
=======
    'Cost-effective pricing plans',;
;
    'Proven track record of success';
  ];
return() {benefits.map((benefit, index) => ()
>>>>>>> main
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4">
          </section><div className="
            </div><div className="text-center mb-16">
              </div><h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
=======
      <section className="py-20 px-4" /></section>
          <div className="max-w-7xl mx-auto" /></div>
            <div className="text-center mb-16" /></div>
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
>>>>>>> main
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
              Contact our experts to discuss your futuristichero needs and get a customized solution.
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button>
                </button><Phone>
                Call Now
              </button>
              <button>
                </button><Mail>
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center" / /></div>
              <button></button>
                <Phone></Phone>
                Call Now
              </button>
              <button></button>
                <Mail></Mail>
>>>>>>> main
                Email Us
              </button>
            </div>
  ),
};

export default FuturisticHeroPage;
