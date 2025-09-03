import: React from 'react';';
import: { Helmet } from 'react-helmet-async';';
import: { motion } from 'framer-motion';';

const: AIAutonomousCustomerSuccessPlatform: React.FC: = () => {
  return(
    <>
      <Helmet>

              </a>
            </motion.div>
          </div>
        </motion.section>

                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

                  ],
                  popular: true}, {'
                  name: 'Enterprise',
                  price: '$1,499',
                  period: '/month',
                  description: 'For large organizations' ]}
              ].map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border ${`
                    plan.popular ? 'border-blue-500' : 'border-white/20'} relative`}
                >{plan.popular && (`
                    <div className='absolute -top-4 left-1/2 transform -translate-x-1/2>
                      <span className='bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold'>
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className='text-2xl font-bold text-white mb-2'>{plan.name}</h3>'
                  <p className='text-gray-300 mb-6'>{plan.description}</p>'
                  <div className='mb-6>
                    <span className='text-4xl font-bold text-white'>{plan.price}</span>'
                    <span className='text-gray-300'>{plan.period}</span>
                  </div>'
                  <ul className='space-y-3 mb-8'>
                    {plan.features.map((feature, featureIndex) => ('
                      <li key={featureIndex} className='flex items-center text-gray-300>
                        <svg className='w-5 h-5 text-green-500 mr-3' fill='currentColor' viewBox='0 0 20 20>
                          <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />

                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  >
                    Get: Started
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        {/* Benefits Section */}

                    'Reduce customer churn by up to 40% with predictive interventions',
                    'Increase customer lifetime value by 250% through AI optimization',
                    'Improve customer satisfaction scores by 60% with personalized experiences',
                    'Save 30+ hours per week on manual customer success tasks',
                    'Boost revenue retention by 180% with automated expansion strategies',
                    'Scale customer success across unlimited accounts efficiently'
                  ].map((benefit, index) => ('
                    <div key={index} className='flex items-start>
                      <div className='flex-shrink-0 w-6 h-6 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1>
                        <svg className='w-4 h-4 text-white' fill='currentColor' viewBox='0 0 20 20>

                          <path fillRule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clipRule='evenodd' />
                        </svg>
                      </div>'
                      <p className='text-gray-300 text-lg'>{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>'
              <div className='bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20>
                <h4 className='text-2xl font-bold text-white mb-6'>Performance Metrics</h4>'
                <div className='space-y-4>
                  <div className='flex justify-between items-center>
                    <span className='text-gray-300'>Churn Reduction</span>'
                    <span className='text-green-400 font-bold'>-40%</span>
                  </div>'
                  <div className='flex justify-between items-center>
                    <span className='text-gray-300'>Customer LTV</span>'
                    <span className='text-green-400 font-bold'>+250%</span>
                  </div>'
                  <div className='flex justify-between items-center>
                    <span className='text-gray-300'>Satisfaction Score</span>'
                    <span className='text-green-400 font-bold'>+60%</span>
                  </div>'
                  <div className='flex justify-between items-center>
                    <span className='text-gray-300'>Time Savings</span>'
                    <span className='text-green-400 font-bold'>30+ hrs/week</span>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

            </div>
          </div>
        </motion.section>
      </div>
    </>
  )}


