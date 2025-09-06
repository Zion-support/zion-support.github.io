import React from 'react',
import Head from 'next/head',
import Revolutionary2026UltimateNavigation from '../components/layout/Revolutionary2026UltimateNavigation',
import Revolutionary2026UltimateHero from '../components/sections/Revolutionary2026UltimateHero',
import Revolutionary2026UltimateServicesShowcase from '../components/sections/Revolutionary2026UltimateServicesShowcase';
import { Phone, Mail } from 'lucide-react';
export default function Revolutionary2026ServicesPage() {
  return (
    <>
      <Head>
        <title>Revolutionary 2026 Services - Zion Tech Group</title>
        <meta name;
                  color: 'from-indigo-500 to-purple-500'
                }
              ].map((feature, index) => (
                <div key={index} className="group">
                  <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 rounded-3xl p-12 border border-purple-500/20">
                <h3 className="text-3xl md: text-4xl font-bold text-white mb-6">
                  Ready to Experience the Future?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  Join thousands of forward-thinking companies already using our revolutionary services 
                  to gain competitive advantages and accelerate innovation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call +1 302 464 0950
                  </a>
                  <a 
                    href="mailto:kleber@ziontechgroup.com"
                    className="border border-purple-500/50 text-purple-400 hover:bg-purple-500/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}