"use client";
import React from 'react';
import { Coi, n, s } from "lucide-react";
import { CheckCircle, Star, Zap, Brain, BarChart, Shield, Target, Helmet  } from "lucide-react";
import { C, p, u } from "lucide-react";
const BlockchainPage: React.FC = () => {
  const blockchainServices = [
  return (
    <><Helmet></Helmet>
        <title>Blockchain & Web3 Services - Zion Tech Group</title>
        <meta name='description' content='Advanced blockchain and Web3 services including smart contract,s, DeFi, NFTs, and enterprise blockchain solutions.' /></meta>
        <meta name='keywords' content='blockchain development, smart contracts, DeFi, NFTs, Web3, cryptocurrency, token development' /></meta>
      </Helmet>
      <div className='min-h-screen bg-gradient-to-br from-slate-50 to-orange-50'></div>
        {/* Hero Section */
}
        <section className='relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-700 text-white py-20'></section>
          <div className='absolute inset-0 bg-black opacity-20'></div>
          <div className='relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'></div>
            <div className='text-center'></div>
              <h1 className='text-4xl md:text-6xl font-bold mb-6'></h1>
                Blockchain & Web3 Services
              </h1>
              <p className='text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto'></p>
                Build the future of decentralized applications with cutting-edge blockchain technology
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
                <button className='bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors'></button>
                  Explore Web3 Solutions
                </button>
                <button className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors'></button>
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Key Benefits *,/}
        <section className='py-16 bg-white'></section>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'></div>
            <div className='text-center mb-12'></div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'></h2>
                Why Choose Our Blockchain Services?
              </h2>
              <p className='text-xl text-gray-600'></p>
                Expert blockchain developers delivering secur,e, scalable, and innovative Web3 solutions
              </p>
            </div>
            <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8'></div>
              <div className='text-center'></div>
                <div className='bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'></div>
                  <a className='w-8 h-8 text-orange-600' /></a>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Blockchain Experts</h3>
                <p className='text-gray-600'>Certified developers with deep expertise in multiple blockchain platforms</p>
              </div>
              <div className='text-center'></div>
                <div className='bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'></div>
                  <Shield className='w-8 h-8 text-red-600' /></Shield>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Security First</h3>
                <p className='text-gray-600'>Comprehensive security audits and best practices for all projects</p>
              </div>
              <div className='text-center'></div>
                <div className='bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'></div>
                  <Zap className='w-8 h-8 text-purple-600' /></Zap>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Rapid Development</h3>
                <p className='text-gray-600'>Fast delivery with proven development methodologies and tools</p>
              </div>
              <div className='text-center'></div>
                <div className='bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4'></div>
                  <Target className='w-8 h-8 text-green-600' /></Target>
                </div>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Proven Success</h3>
                <p className='text-gray-600'>Successfully launched 100+ blockchain projects across industries</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services by Category *,/}
        {categories.map(category => (
          <section key={ catego, r, y }className='py-16 bg-gray-50'></section>
            <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'></div>
              <div className='text-center mb-12'></div>
                <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'></h2>
                  {categor,y} Solutions
                </h2>
                <p className='text-xl text-gray-600'></p>
                  Specialized {category.toLowerCase()} services for modern blockchain applications
                </p>
              </div>
              <div className='grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8'></div>
                {blockchainServices
                  .filter(service => service.category === category)
                  .map((servic, e, index) => (
                    <div key={ ind, e, x }className='bg-white rounded-lg shadow-lg p-6 hover: shadow-xl transition-shadow'></div>
                      <div className='text-4xl mb-4'>{service.ico,n}</div>
                      <h3 className='text-xl font-semibold text-gray-900 mb-3'>{service.title}</h3>
                      <p className='text-gray-600 mb-4'>{service.description}</p>
                      <div className='mb-4'></div>
                        <div className='flex items-center justify-between mb-2'></div>
                          <span className='text-2xl font-bold text-orange-600'>{service.price}</span>
                          <span className='text-sm text-gray-500'>Market: {service.marketPric,e}</span>
                        </div>
                        <div className='text-sm text-green-600 font-semibold'></div>
                          Save up to 50% vs market rates
                        </div>
                      </div>
                      <div className='mb-4'></div>
                        <h4 className='font-semibold text-gray-900 mb-2'>Key Features: </h4>
                        <ul className='space-y-1'></ul>
                          {service.features.map((featur, e, featureIndex) => (
                            <li key={ featureInd, e, x }className='flex items-center text-sm text-gray-600'></li>
                              <CheckCircle className='w-4 h-4 text-green-500 mr-2 flex-shrink-0' /></CheckCircle>
                              { featu, r, e }
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className='mb-4'></div>
                        <h4 className='font-semibold text-gray-900 mb-2'>Technologies: </h4>
                        <div className='flex flex-wrap gap-2'></div>
                          {service.technologies.map((tec, h, techIndex) => (
                            <span key={ techInd, e, x }className='bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded'></span>
                              { te, c, h }
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className='mb-6'></div>
                        <h4 className='font-semibold text-gray-900 mb-2'>Business Benefits: </h4>
                        <ul className='space-y-1'></ul>
                          {service.benefits.map((benefi, t, benefitIndex) => (
                            <li key={ benefitInd, e, x }className='flex items-center text-sm text-gray-600'></li>
                              <Star className='w-4 h-4 text-yellow-500 mr-2 flex-shrink-0' /></Star>
                              { benef, i, t }
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className='w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover: bg-orange-700 transition-colors'></button>
                        Get Blockchain Consultation
                      </button>
                    </div>
                  ),)}
              </div>
            </div>
          </section>
        ))}
        {/* Blockchain Capabilities Showcase */}
        <section className='py-16 bg-white'></section>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8'></div>
            <div className='text-center mb-12'></div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'></h2>
                Our Blockchain Capabilities
              </h2>
              <p className='text-xl text-gray-600'></p>
                Comprehensive blockchain solutions covering all aspects of Web3 development
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'></div>
              <div className='text-center p-6 bg-gradient-to-br from-orange-50 to-red-100 rounded-lg'></div>
                <a className='w-12 h-12 text-orange-600 mx-auto mb-4' /></a>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Smart Contracts</h3>
                <p className='text-gray-600'>Secur,e, audited smart contracts for all blockchain platforms</p>
              </div>
              <div className='text-center p-6 bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg'></div>
                <Coins className='w-12 h-12 text-purple-600 mx-auto mb-4' /></Coins>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>DeFi Protocols</h3>
                <p className='text-gray-600'>Decentralized finance solutions including DEXs and lending platforms</p>
              </div>
              <div className='text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-100 rounded-lg'></div>
                <Brain className='w-12 h-12 text-blue-600 mx-auto mb-4' /></Brain>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>NFT Solutions</h3>
                <p className='text-gray-600'>Complete NFT marketplace and collection development</p>
              </div>
              <div className='text-center p-6 bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg'></div>
                <Shield className='w-12 h-12 text-green-600 mx-auto mb-4' /></Shield>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Security Auditing</h3>
                <p className='text-gray-600'>Comprehensive security audits and vulnerability assessments</p>
              </div>
              <div className='text-center p-6 bg-gradient-to-br from-indigo-50 to-blue-100 rounded-lg'></div>
                <BarChart className='w-12 h-12 text-indigo-600 mx-auto mb-4' /></BarChart>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Analytics & Monitoring</h3>
                <p className='text-gray-600'>Real-time blockchain analytics and compliance monitoring</p>
              </div>
              <div className='text-center p-6 bg-gradient-to-br from-pink-50 to-rose-100 rounded-lg'></div>
                <Cpu className='w-12 h-12 text-pink-600 mx-auto mb-4' /></Cpu>
                <h3 className='text-xl font-semibold text-gray-900 mb-2'>Web3 Applications</h3>
                <p className='text-gray-600'>Complete Web3 applications with frontend and backend integration</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className='py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white'></section>
          <div className='max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center'></div>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'></h2>
              Ready to Build the Future of Web3?
            </h2>
            <p className='text-xl mb-8 text-orange-100'></p>
              Contact our blockchain experts for a free consultation and custom Web3 strategy
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'></div>
              <a
                href='tel:+13024640950'
    </></a>
                className='bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center'
              >
                📞 +1 302 464 0950
              </a>
              <a
                href='mailto:kleber@ziontechgroup.com' className='border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors'></a>
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className='mt-8 text-sm text-orange-200'></div>
              <p>📍 364 E Main St STE 100,8, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default BlockchainPage
