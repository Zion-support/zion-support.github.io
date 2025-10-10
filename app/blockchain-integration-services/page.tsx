'use client';
import React from 'react';
import {  Helmet  } from 'react-helmet-async';
import {  CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe  } from 'lucide-react';
const BlockchainIntegrationServicesPage: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Secure Blockchain Integration',
      description: 'Advanced blockchain technology integration with enterprise-grade security'},
    {icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast blockchain transactions and smart contract execution'},
    {icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Intelligent blockchain solutions powered by advanced AI technology'},
    {icon: Globe,
      title: 'Multi-Chain Support',
      description: 'Support for multiple blockchain networks and protocols'}];
  const benefits = [
    'Advanced blockchain technology integration',
    'Real-time transaction processing',
    'Enterprise-grade security and compliance',
    'Scalable and flexible blockchain solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ]

            Powered by cutting-edge AI technology and industry expertise.
          </p>
      {/* Features Section */} <section>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4"></h2>
              Why Choose Our Blockchain Integration Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our blockchain integration solutions deliver unmatched performance, security, and scalability.</p>
            </p>
          </div>
          <div>
            {features.map((feature, index) => (
              <div>
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description</p>}</p>

              </div>
            ))}
          </div>
        </div>
      </section>

              </div>
            ))}
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default BlockchainIntegrationServicesPage;
  </button>
  </button>
  </h2>
  </section>
  </h1>
  </div>
  </div>