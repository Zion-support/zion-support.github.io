
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, DollarSign, Target;
  ArrowRight, Check, Star, BarChart3;
  Globe, Zap, Shield, Crown, Brain, Atom
 } from 'lucide-react';
import Link from 'next/link';

  ];

  const marketData = {
    'ai-consciousness': {
      marketSize: '$45.2B'
      growthRate: '+28.4%'
      growthTrend: 'up'
      description: 'AI consciousness market is experiencing explosive growth with increasing demand for emotionally intelligent AI systems.'
      competitors: [
        {
          name: 'OpenAI'
          marketShare: '32%'
          pricing: '$0.002-$0.02 per 1K tokens'
          strengths: ['Advanced language modelsStrong brand recognitionLarge user base']
          weaknesses: ['Limited consciousness featuresHigh API costsPrivacy concerns']
          rating: 4.2
        }
        {
          name: 'Anthropic'
          marketShare: '18%'
          pricing: '$0.015-$0.03 per 1K tokens'
          strengths: ['Safety-focused approachConstitutional AIResearch-driven']
          weaknesses: ['Smaller model varietyLimited enterprise featuresHigher pricing']
          rating: 4.0
        }
        {
          name: 'Zion Tech Group'
          marketShare: '12%'
          pricing: '$0.008-$0.015 per 1K tokens'
          strengths: ['True AI consciousnessEnterprise-grade securityCompetitive pricing']
          weaknesses: ['Smaller market presenceLimited brand recognitionNewer player']
          rating: 4.8
        }
      ];
      pricingAnalysis: {
        lowEnd: '$0.005 per 1K tokens'
        midRange: '$0.015 per 1K tokens'
        highEnd: '$0.025 per 1K tokens'
        ourPosition: 'Mid-range with premium features'
      }
    }
    'quantum-computing': {
      marketSize: '$8.7B'
      growthRate: '+45.2%'
      growthTrend: 'up'
      description: 'Quantum computing market is rapidly expanding with breakthroughs in qubit stability and error correction.'
      competitors: [
        {
          name: 'IBM'
          marketShare: '28%'
          pricing: '$1.60 per quantum hour'
          strengths: ['Established infrastructureQiskit ecosystemResearch partnerships']
          weaknesses: ['Limited qubit countHigh costsComplex access']
          rating: 4.1
        }
        {
          name: 'Google'
          marketShare: '22%'
          pricing: '$2.00 per quantum hour'
          strengths: ['Quantum supremacyAdvanced algorithmsResearch focus']
          weaknesses: ['Limited commercial accessHigh pricingComplex setup']
          rating: 4.3
        }
        {
          name: 'Zion Tech Group'
          marketShare: '8%'
          pricing: '$1.20 per quantum hour'
          strengths: ['Competitive pricingEnterprise focusSimplified access']
          weaknesses: ['Smaller infrastructureLimited qubit varietyNewer platform']
          rating: 4.5
        }
      ];
      pricingAnalysis: {
        lowEnd: '$0.80 per quantum hour'
        midRange: '$1.50 per quantum hour'
        highEnd: '$2.50 per quantum hour'
        ourPosition: 'Competitive mid-range pricing'
      }
    }
    'autonomous-systems': {
      marketSize: '$23.1B'
      growthRate: '+34.7%'
      growthTrend: 'up'
      description: 'Autonomous systems market is growing rapidly with increasing automation in business processes.'
      competitors: [
        {
          name: 'UiPath'
          marketShare: '25%'
          pricing: '$420-$1,200 per user/month';
          strengths: ['Market leaderComprehensive platformStrong partnerships']
          weaknesses: ['High costsComplex implementationLimited AI features']
          rating: 4.0
        }
        {
          name: 'Automation Anywhere'
          marketShare: '20%'
          pricing: '$750-$1,500 per user/month';
          strengths: ['Enterprise focusCloud-nativeSecurity features']
          weaknesses: ['ExpensiveSteep learning curveLimited customization']
          rating: 3.8
        }
        {
          name: 'Zion Tech Group'
          marketShare: '6%'
          pricing: '$350-$800 per user/month'
          strengths: ['AI-powered automationCompetitive pricingEasy implementation']
          weaknesses: ['Smaller ecosystemLimited integrationsNewer platform']
          rating: 4.4
        }
      ];
      pricingAnalysis: {
        lowEnd: '$300 per user/month'
        midRange: '$750 per user/month'
        highEnd: '$1,200 per user/month';
        ourPosition: 'Competitive pricing with AI advantages'
      }
    }
    'enterprise-it': {
      marketSize: '$1.2T'
      growthRate: '+12.3%'
      growthTrend: 'up'
      description: 'Enterprise IT market continues steady growth with digital transformation initiatives.'
      competitors: [
        {
          name: 'Microsoft'
          marketShare: '35%'
          pricing: '$22-$57 per user/month'
          strengths: ['Market dominanceIntegrated ecosystemGlobal presence']
          weaknesses: ['Complex licensingHigh costsVendor lock-in']
          rating: 4.2
        }
        {
          name: 'Salesforce'
          marketShare: '18%'
          pricing: '$25-$300 per user/month'
          strengths: ['CRM leadershipCloud-nativeExtensive integrations']
          weaknesses: ['ExpensiveComplex pricingImplementation costs']
          rating: 4.1
        }
        {
          name: 'Zion Tech Group'
          marketShare: '3%'
          pricing: '$18-$45 per user/month'
          strengths: ['AI-powered featuresCompetitive pricingModern architecture']
          weaknesses: ['Smaller ecosystemLimited integrationsNewer player']
          rating: 4.3
        }
      ];
      pricingAnalysis: {
        lowEnd: '$20 per user/month'
        midRange: '$40 per user/month'
        highEnd: '$100 per user/month'
        ourPosition: 'Competitive pricing with AI advantages'
      }
    }

  const currentMarket = marketData[selectedMarket as keyof typeof marketData];
  const getGrowthIcon = (trend: string) => {
    return trend === 'up' ?
      <TrendingUp className="w-5 h-5 text-green-400" /> :
      <TrendingDown className="w-5 h-5 text-red-400" />
  }
  const getRatingStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
      />
    ))
  }

  return (
    <UltraAdvancedFuturisticBackground>
      <Head>
        <title>Market Pricing & Competitor References | Zion Tech Group</title>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}

              {currentMarket.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Competitive Analysis Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            {currentMarket.competitors.map((competitor, index) => (
              <motion.div
                key={competitor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}

                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>

                              {weakness}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

            </div>
          </div>
        </div>
      </section>

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

              { label: 'Our Position', price: currentMarket.pricingAnalysis.ourPosition, color: 'from-cyan-500 to-blue-600' }
            ].map((tier, index) => (
              <motion.div
                key={tier.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}

                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Trends Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2

            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}

                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md: text-5xl font-bold mb-6">
              Ready to Compete in the Market?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our competitive pricing and unique AI consciousness features give you the edge
              you need to succeed in today's rapidly evolving technology landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/pricing"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                View Our Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                Get Custom Quote
              </Link>

            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )

'quantum-computing': {
  marketSize: '$8.7B', growthRate: '+45.2%', growthTrend: 'up', description: 'Quantum computing market is rapidly expanding with breakthroughs in qubit stability and error correction.', competitors: [ {
  ];
pricingAnalysis: {
  lowEnd: '$0.80 per quantum hour', midRange: '$1.50 per quantum hour', highEnd: '$2.50 per quantum hour', ourPosition: 'Competitive mid-range pricing'
}
'autonomous-systems': {
  marketSize: '$23.1B', growthRate: '+34.7%', growthTrend: 'up', description: 'Autonomous systems market is growing rapidly with increasing automation in business processes.', competitors: [ {
  ];
pricingAnalysis: {
  lowEnd: '$300 per user/month', midRange: '$750 per user/month', highEnd: '$1, 200 per user/month', ourPosition: 'Competitive pricing with AI advantages'
}
'enterprise-it': {
  marketSize: '$1.2T', growthRate: '+12.3%', growthTrend: 'up', description: 'Enterprise IT market continues steady growth with digital transformation initiatives.', competitors: [ {
  ];
pricingAnalysis: {
