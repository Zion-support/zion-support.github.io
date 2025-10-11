'use client';
import React from 'react';

const AiBlockchainSolutionsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',

      benefits: ['Smart contract optimization', 'Predictive analytics', 'Automated decision making', 'Risk assessment']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',

    },
    {
      icon: Shield,
      title: 'Enhanced Security',

    }
  ]

  const benefits = [

    <>

            </div>
          </div>
        </section>

        {/* Features Section */}

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

