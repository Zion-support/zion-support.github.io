import React from 'react';
import { ArrowRight, Cloud, Shield, Zap, Globe, CheckCircle, Server, Database } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudServicesPage: React.FC = () => {
  const features = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure solutions.',
      benefits: ['Auto-scaling', 'High Availability', 'Cost Optimization', 'Global CDN'],
      icon: <Cloud className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and compliance solutions.',
      benefits: ['Data Encryption', 'Access Control', 'Audit Logging', 'Compliance'],
      icon: <Shield className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Performance Optimization',
      description: 'Optimize your cloud performance and reduce costs.',
      benefits: ['Load Balancing', 'Caching', 'Monitoring', 'Analytics'],
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Global Distribution',
      description: 'Worldwide content delivery and edge computing.',
      benefits: ['Edge Locations', 'Low Latency', 'Global Reach', 'CDN'],
      icon: <Globe className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Database Services',
      description: 'Managed database solutions for all your needs.',
      benefits: ['Auto-backup', 'Scaling', 'Monitoring', 'Security'],
      icon: <Database className="w-8 h-8 text-orange-400" />
    },
    {
      title: 'Server Management',
      description: 'Comprehensive server management and monitoring.',
      benefits: ['Auto-scaling', 'Health Checks', 'Updates', 'Monitoring'],
      icon: <Server className="w-8 h-8 text-red-400" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Professional cloud services and infrastructure solutions." />
        <meta name="keywords" content="cloud services, cloud infrastructure, AWS, Azure, GCP" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Navigation />

        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Cloud <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Professional cloud infrastructure and services for modern businesses. 
              Scale your operations with our expert cloud solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cloud Service Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive cloud solutions designed for modern businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our cloud services today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Migration
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default CloudServicesPage;
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
</section>
=======
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-529a

        <Footer />
      </div>
    </>
<<<<<<< HEAD
</section>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
        
        <Footer />
      </div>
    </>
<<<<<<< HEAD
=======

=======
        </div>
      </main>
      <Footer />
    </>
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-529a
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-fd18
  );
};

export default CloudServicesPage;
