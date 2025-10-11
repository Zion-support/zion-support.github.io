  const features = [
    }
  ];];];
  const benefits = [
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
            Powered by cutting-edge AI technology and industry expertise.
          </p>
      {/* Features Section */} <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
              Why Choose Our Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our cloud infrastructure solutions deliver unmatched performance, security, and scalability.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8">,</div>
            {features.map((feature, index) => (
              <div key={index}className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description</p>}</p>
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Cloud, CheckCircle, ArrowRight } from 'lucide-react'

const CloudInfrastructurePage: React.FC = () => {
  const features = [
    'Scalable cloud solutions',
    'Multi-cloud support',
    'Cost optimization',
    'Security compliance',
    '24/7 monitoring',
    'Disaster recovery'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Cloud <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Infrastructure</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build and manage scalable cloud infrastructure for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
  ),
};

