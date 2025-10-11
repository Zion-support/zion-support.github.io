'use client';
import React from 'react';

const AiAutonomousSystemsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Smart Manufacturing',
      description: 'Autonomous robots and systems for industrial automation and production.',
      benefits: ['Automated production lines', 'Quality control systems', 'Predictive maintenance', 'Real-time monitoring']
    },
    {
      icon: Factory,
      title: 'Healthcare Systems',
      description: 'Autonomous medical devices and systems for patient care and treatment.',
      benefits: ['Surgical robots', 'Diagnostic systems', 'Patient monitoring', 'Treatment automation']
    },
    {
      icon: Stethoscope,
      title: 'Smart Cities',
      description: 'Autonomous infrastructure systems for urban management and optimization.',
      benefits: ['Traffic management', 'Energy optimization', 'Waste management', 'Public safety']
    },
    {
      icon: Building,
      title: 'Transportation',

    }
  ]

  const benefits = [
    'Increased efficiency by up to 60%',
    'Reduced operational costs',
    '24/7 autonomous operation',
    'Enhanced safety and reliability',
    'Scalable and adaptable systems',
    'Real-time monitoring and control'
  ]

  const benefits = [
    'Increase operational efficiency by up to 90%',
    'Reduce human error and improve safety',
    '24/7 autonomous operation capabilities',
    'Real-time decision making and adaptation',
    'Seamless integration with existing systems',
    'Scalable solutions for any industry'
  ];

        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>

            </div>
          </div>
        </section>

        {/* Features Section */}

                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>

                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (

                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}

                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}

                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>

            </div>
          </div>
        </section>
      </main>

