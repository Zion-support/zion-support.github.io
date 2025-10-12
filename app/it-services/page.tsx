import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      link: '/cloud-migration',
      popular: true
    },
    {
      link: '/data-analytics',
      popular: false
    },
    {
      popular: false
    }
  ];

  const benefits = [
    {
    },
    {
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business and adapt to changing needs',
      icon: <Settings className="w-6 h-6 text-orange-500" />
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
              >
                Why Choose Us
              </button>
            </div>
          </div>

          {/* Stats Section */}
              </div>
            ))}
          </div>
        </section>
      )}

            ))}
          </div>
        </div>
      </section>

              </div>
            ))}
          </div>
        </div>
      </section>

              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-400/20 group-hover:from-cyan-400/30 group-hover:to-purple-400/30 transition-all duration-300">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts help you modernize your technology stack and drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/ai-services" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Explore AI Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
