import React from 'react';
import {  Helmet   } from 'react-helmet-async';
import {  Wifi, BarChart, CheckCircle   } from 'lucide-react';

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: '5G Network Design',
      description: 'Complete 5G network design and implementation with optimal coverage and performance.',
    },
    {
      icon: BarChart,
      title: 'Performance Analytics',
      description: 'Advanced analytics and reporting for 5G network performance and optimization.',
    }
  ];

  const pricing = [
    {
      name: 'Basic',
      description: 'Essential 5G implementation',
      price: '$2,999',
      features: ['5G network planning', 'Basic coverage analysis', 'Standard support'],
      popular: false,
    },
    {
      name: 'Professional',
      description: 'Complete 5G solution',
      price: '$4,999',
      features: ['Full 5G implementation', 'Advanced analytics', 'Priority support', 'Performance monitoring'],
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'Custom 5G solution',
      price: 'Custom',
      features: ['Custom 5G architecture', '24/7 support', 'Dedicated team', 'Advanced security'],
      popular: false,
    },
  ];

  return (
    <>
      <Helmet>
        <title>5G Network Implementation - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems." />
        <meta name="keywords" content="5G implementation, network design, ultra-low latency, IoT connectivity, wireless infrastructure" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900"></div></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section></section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center"></div></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1></h1>
              5G Network <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"></span></span>Implementation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p></p>
              Complete 5G network implementation services with ultra-low latency, high-speed connectivity, and advanced features for modern applications and IoT ecosystems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"></button>
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"></button>
                Schedule Demo
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4"></section></section>
          <div className="container mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2></h2>
                Advanced 5G Features
              </h2>
              <p className="text-xl text-gray-300"></p></p>
                Cutting-edge 5G technology for the next generation of connectivity
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div>
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4"></h3></h3>{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed mb-4"></p></p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4"></section></section>
          <div className="container mx-auto text-center"></div></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2></h2>
              Ready to Implement 5G?
            </h2>
            <p className="text-xl text-gray-300 mb-8"></p></p>
              Contact our experts to discuss your 5G implementation needs and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"></button>
                Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"></button>
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4"></section></section>
          <div className="container mx-auto"></div></div>
            <div className="text-center mb-16"></div></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2></h2>
                Choose Your Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p></p>
                Flexible pricing options for 5G implementation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div></div>
              {pricing.map((plan, index) => (
                <div key={index} className="{`bg-white" rounded-2xl shadow-2xl p-8 relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}></div></div>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"&gt;</div&gt;
                      <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium"&gt;</span&gt;
                        Most Popular
                      </span&gt;
                    </div&gt;
                  )}
                  <div className="text-center mb-8"></div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2"></h3></h3>{plan.name}</h3>
                    <p className="text-gray-600 mb-4"></p></p>{plan.description}</p>
                    <div className="text-4xl font-bold text-purple-600 mb-2"></div></div>{plan.price}</div>
                    <p className="text-gray-500"></p></p>per month</p>
                  </div>
                  <ul className="space-y-4 mb-8"></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600"></li>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="{`w-full" py-4 px-6 rounded-xl font-semibold text-center transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white hover:from-purple-600 hover:to-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  ></button>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-700"></section></section>
          <div className="container mx-auto text-center"></div></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2></h2>
              Ready to Implement 5G?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto"></p></p>
              Contact us today to discuss your 5G implementation needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              ></a>
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              ></a>
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FiveGImplementationPage;