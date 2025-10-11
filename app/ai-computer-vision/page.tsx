'use client';
import React from 'react';

const AiComputerVisionPage: React.FC = () => {
  const features = [
    {
      icon: Eye,
      title: 'Object Detection',
      description: 'Advanced AI algorithms for real-time object detection and recognition.',
      benefits: ['Real-time detection', 'High accuracy', 'Multiple object types', 'Custom models']
    },
    {
      icon: Camera,
      title: 'Image Analysis',
      description: 'Comprehensive image analysis and processing capabilities.',
      benefits: ['Image classification', 'Feature extraction', 'Pattern recognition', 'Quality assessment']
    },
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',

    },
    {
      icon: BarChart,
      title: 'Analytics Dashboard',

            </div>
          </div>
        </section>

              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>

              </button>
            </div>
          </div>
        </section>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-amber-400/50 transition-all duration-300">
                  <div className="text-amber-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>

                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (

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
                Proven results that enhance your visual capabilities
              </p>
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
                Contact our experts to discuss your computer vision requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div>

            </div>
          </div>
        </section>
      </main>

