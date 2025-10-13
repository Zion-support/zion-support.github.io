<<<<<<< HEAD
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
<<<<<<< HEAD
import Footer from '../components/Footer';
import { CheckCircle, Zap, Wifi, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react';
},
    {icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of IoT devices and systems with intelligent alerting.',
      benefits: ['Continuous monitoring', 'Smart alerts', 'Predictive maintenance']},
    {}}
  ]
return(<p>)</p>
              Our IoT platform provides everything you need to build, deploy, and scale;
=======
import Footer from '../components/Footer'
import { CheckCircle, Zap, Wifi, Clock, Users, Shield, BarChart, ArrowRight } from 'lucide-react'
},
    {
    icon: Clock,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of IoT devices and systems with intelligent alerting.',
      benefits: ['Continuous monitoring', 'Smart alerts', 'Predictive maintenance']
<<<<<<< HEAD
  },
    {}
    }
  ]
return (
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Our IoT platform provides everything you need to build, deploy, and scale
              Internet of Things solutions for any industry or use case.</p>
=======
    },
    {
    };
  ];
  return (
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our IoT platform provides everything you need to build, deploy, and scale 
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
              Internet of Things solutions for any industry or use case.
            </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          </div>

                  ))}
                </ul>
</div>
            ))}

          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Use Cases Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>IoT Use Cases;</h2>
            </h2>
            <p>Our IoT platform supports a wide range of industries and applications,</p>
              from smart manufacturing to connected cities.
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
            {useCases.map((useCase, index) => (} <div key={index}className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover: bg-white/10 transition-all duration-300"></div>,
                <div className="text-4xl mb-4">{useCase.icon</div>}</div>
=======
<<<<<<< HEAD
      {/* Use Cases Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>
=======
      {/* Use Cases Section */};
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              IoT Use Cases
            </h2>
            <p>
              Our IoT platform supports a wide range of industries and applications,
              from smart manufacturing to connected cities.
            </p>
          </div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {
    useCases.map((useCase, index) => (
  }
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"></div>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
                <div className="text-4xl mb-4">{useCase.icon}</div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-300">{useCase.description</p>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* Benefits Section */} <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Section Title</h2>
              <p className="text-xl text-gray-300">Section description</p>
            </div>
          </div>
        </section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>Why Choose Our IoT Platform?</h2>
            </h2>
            <p>Experience the benefits of a comprehensive IoT platform designed for scale,</p>
              security, and performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6"></div>,
            {benefits.map((benefit, index) => (
                <div key={index}className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"></div>
=======
<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4"></section>
        <div className="max-w-7xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2>
=======
      {/* Benefits Section */};
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              Why Choose Our IoT Platform?
            </h2>
            <p>
              Experience the benefits of a comprehensive IoT platform designed for scale,
              security, and performance.
            </p>
          </div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
=======
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"></div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></div>
                  <CheckCircle />
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* CTA Section */} <p>Start building your IoT platform today. Get started with a free consultation;</p>
=======
<<<<<<< HEAD
      {/* CTA Section */}
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Start building your IoT platform today. Get started with a free consultation;
            and discover how we can help you succeed.</p>
=======
      {/* CTA Section */};
          <p className="text-xl text-gray-300 mb-8">
            Start building your IoT platform today. Get started with a free consultation 
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            and discover how we can help you succeed.
          </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            </button>
<<<<<<< HEAD
            <button>Schedule Demo;</button>
=======
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-700 transition-all duration-300">Schedule Demo
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
            </button>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      <Footer />
<<<<<<< HEAD
=======
</div>
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1507
  );
};

export default PagePage;

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
<<<<<<< HEAD
      <Footer>
</div>
  )
}
export default PagePage
=======
      <Footer />
</div>)
export default PagePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
