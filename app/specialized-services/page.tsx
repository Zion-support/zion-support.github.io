'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
const PagePage: React.FC = () => {
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </section>}{/* Features Section */}
=======
      </section>
  },
    {/* Features Section */}
              Our page solutions deliver unmatched performance, security, and scalability.
            </p></p></p>
          </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
              Experience the power of our page solutions for your business.,
            </p></p></p>
          </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
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
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',},
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',},
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced encryption and compliance standards',},
    {icon: Globe,
      title: 'Global Scalability',
      description: 'Scale your operations worldwide with our robust infrastructure';
    };
  ];
  const benefits = const benefits = const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce operational costs by 30%',
    'Improve decision-making with real-time insights',
    'Scale operations without proportional staff increases',;
    'Gain competitive advantage with cutting-edge technology',;
    'Ensure 99.9% uptime and reliability';
  ];
<<<<<<< HEAD
  return() {features.map((feature, index) => ()
=======
  return (
    <>
      <Helmet>
>>>>>>> origin/main
        <title>Specialized Services - Zion Tech Group</title>
        <meta name="description" content="Advanced specialized services for modern businesses including AI solutions, automation, and digital transformation." />
        <meta name="keywords" content="specialized services, AI solutions, automation, digital transformation, business optimization" />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        </div></div>
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section></section><div className="max-w-7xl mx-auto text-center">
            </div></div><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Specialized Services;
            </h1></h1></h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Advanced specialized services designed to transform your business with cutting-edge technology and expert solutions.
            </p></p></p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              </div></div><button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started;
              </button></button></button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo;
              </button></button></button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          </section></section><div className="max-w-7xl mx-auto">
            </div></div><div className="text-center mb-16">
              </div></div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Services?
              </h2></h2></h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our specialized solutions deliver unmatched performance, security, and scalability.
              </p></p></p>
            </div>)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">)
              {features.map((feature, index) => (
                </div></div><div key=index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  </div></div><div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                    </div></div><feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3></h3></h3>
                  <p className="text-gray-300">{feature.description}</p></p></p>)
                </div>)
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
                Experience the power of our specialized solutions for your business.
              </p></p></p>
            </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
