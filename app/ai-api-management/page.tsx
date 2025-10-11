'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import { CheckCircle, ArrowRight, Zap, Shield, Users, BarChart3 } from 'lucide-react';

const AIApiManagementPage: React.FC = () => {

  const features = [
    {
      title: 'Intelligent API Monitoring',;
      description: 'Real-time monitoring and analytics for all your APIs with AI-powered insights and anomaly detection.',;
      benefits: ['Real-time monitoring', 'Anomaly detection', 'Performance analytics', 'Automated alerts'];
    },
    {
      title: 'Smart Rate Limiting',
      description: 'AI-driven rate limiting that adapts to usage patterns and prevents abuse while maintaining optimal performance.',
      benefits: ['Adaptive rate limiting', 'Abuse prevention', 'Performance optimization', 'Dynamic scaling']
    },
    {];
  return null
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" / /></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} / /></div>
        <div className="relative max-w-7xl mx-auto text-center" /></div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" /></h1>
            AI-Powered API Management

          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto" /></p>
            Intelligent API management with AI-driven monitoring, security, and optimization for enterprise-grade performance
          </p>
          <div className="flex flex-col sm: flex-row gap-4 justify-center" /></div>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105" /></button>
              Start Free Trial
            </button>
            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300" /></button>
              View Demo,
  </
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4" /></section>
        <div className="max-w-6xl mx-auto" /></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8" /></div>
            {stats.map((stat, index) => ()
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="text-center mb-16" /></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" /></h2>
              Powerful Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              Comprehensive API management with AI-powered intelligence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8" /></div>
            {features.map((feature, index) => ()
                  {feature.benefits.map((benefit, benefitIndex) => ()
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-20 px-4" /></section>
        <div className="max-w-7xl mx-auto" /></div>
          <div className="text-center mb-16" /></div>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our API Management?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" /></p>
              Experience the benefits of our proven solutions
  </
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" /></div>
            {benefits.map((benefit, index) => ()
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 px-4" /></section>
        <div className="max-w-4xl mx-auto text-center" /></div>
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12" /></div>
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6" /></h2>
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8" /></p>
              Contact our experts to discuss your API management requirements and get started today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105" /></button>
                Contact Us
              </button>
              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300" /></button>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer / /></Footer>
    </div>
  ),
};

export default AIApiManagementPage;
