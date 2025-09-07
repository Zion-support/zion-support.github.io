

import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { motion } from 'framer-motion';
import {}
  Shield, 
  Users, 
  FileText, 
  Globe, 
  Database, 
  CheckCircle, 
  ArrowRight ';
} from 'lucide-react';


const features = [
  {
    icon: Building2,
    title: 'Digital Government Services',
    description: 'Citizen-facing digital services and online portals'
  },
  {
    icon: Shield,
    title: 'Cybersecurity & Compliance,',
    description: 'FISMA, FedRAMP, and other government security standards compliance solutions.',
  },
  {}
    icon: Users,
    title: 'Citizen Services,',
    description: 'Digital platforms for citizen engagement, service delivery, and government transparency.',
  },
  {}
    icon: FileText,
    title: 'Document Management,',
    description: 'Secure document management and workflow systems for government operations.'';
  },
  {


    icon: Database,
    title: 'Data Management',
    description: 'Secure data management and analytics for government data',
    benefits: ['Data governance', 'Analytics', 'Reporting', 'Integration']
  }
];

export default function GovernmentSolutionsPage() {

  return (
    <Layout
      title="Government Solutions - Zion Tech Group"
      description="Comprehensive government technology solutions for public sector organizations. Digital services, citizen engagement, and government process automation."
      keywords="government solutions, digital government, public sector, citizen services, government technology, e-government"
    >
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-700 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Government Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Transform government operations with secure, compliant technology solutions

  return (
    <Layout
      title="Government Solutions - Zion Tech Group"
      description="Comprehensive government technology solutions for public sector organizations. Digital services, citizen engagement, and government process automation."
      keywords="government solutions, digital government, public sector, citizen services, government technology, e-government">;
      <div className="min-h-screen bg-white">;
        {/* Hero Section */}

              initial={ opacity: 0, y: 20 }
              animate={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }"
              className="text-center"
            >"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Government Solutions</h1>"
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Secure and compliant technology solutions for government agencies. 
                From cybersecurity to citizen services and data management.

              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-700 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>

                designed for public sector organizations and citizen services.              </p>
            </motion.div>

          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Government Technology Features
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions designed to modernize government operations
                and improve citizen services.
              </p>


            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-gray-600" />
                  </div>


                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => ("
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-600">"
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </section>
            </div>

          </div>
        </section>

          </div>
        </section>
      </div>


    </>
    </>
    </>
  );