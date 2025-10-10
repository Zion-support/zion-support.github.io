'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Globe, Shield, Users, Award, CheckCircle, ArrowRight, Building, Handshake } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function PartnersPage() {
  const partners = [
    {
      name: 'Microsoft',
      logo: '/images/partners/microsoft.png',
      description: 'Strategic cloud and AI partnership',
      category: 'Technology'
    },
    {
      name: 'Amazon Web Services',
      logo: '/images/partners/aws.png',
      description: 'Cloud infrastructure and services',
      category: 'Cloud'
    },
    {
      name: 'Google Cloud',
      logo: '/images/partners/google.png',
      description: 'AI and machine learning solutions',
      category: 'AI'
    },
    {
      name: 'IBM',
      logo: '/images/partners/ibm.png',
      description: 'Enterprise AI and consulting',
      category: 'Enterprise'
    },
    {
      name: 'Salesforce',
      logo: '/images/partners/salesforce.png',
      description: 'CRM and business automation',
      category: 'Business'
    },
    {
      name: 'Oracle',
      logo: '/images/partners/oracle.png',
      description: 'Database and enterprise solutions',
      category: 'Database'
    }
  ];

  const benefits = [
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Partners - Zion Tech Group | Strategic Technology Partnerships</title>
        <meta name="description" content="Discover our strategic partnerships with leading technology companies. Learn how we collaborate to deliver cutting-edge AI and IT solutions." />
        <meta name="keywords" content="partners, technology partnerships, strategic alliances, Microsoft, AWS, Google Cloud, IBM, NVIDIA" />

          </div>
        </section>

                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's explore how we can work together to deliver exceptional 
              value to our mutual customers.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                Join our partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  <Handshake className="mr-2 h-5 w-5" />
                  Become a Partner
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

};

export default PartnersPage;
