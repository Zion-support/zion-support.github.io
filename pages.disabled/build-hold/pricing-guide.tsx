:pages/pricing-guide.tsx;
React: from;
  'react';';
import: { motion } from;
  'framer-motion'{ SEO: } from;';
  '../components/SEO';';
import: { Button } from;
  '../components/ui/Button'{ Card: } from;';
  '../components/ui/Card';';
import: { Badge } from;
  '../components/ui/Badge';import: { '  CheckCircle, Star',;
  Zap, Shield,
  Users, Globe,
  Phone, Mail,
  ArrowRight, DollarSign,
  TrendingUp, Award,
  Clock, Target,
  Brain, Server,
  Cloud, Database,
  Lock, BarChart3,
  Rocket, Heart,
  Sparkles, Calculator,
  BookOpen, Lightbulb,
  HelpCircle} from;

            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >'
            <Badge variant='secondary' className='mb-4>              <Calculator className='w-4 h-4 mr-2' />              Pricing Guide'            </Badge>'
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent>              AI Solution Pricing Guide'            </h1>'
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto>              Understand the factors that influence AI solution costs and get accurate estimates for your project.'            </p>
          </motion.div>
        </div>
      </section>
      {/* Pricing Factors */}
      <section className='py-20 px-4 sm: px-6 l,
    g:px-8>        <div className='max-w-7xl mx-auto>          <motion.div'            initial={{ opacit,
    y: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-center mb-16''          >'            <h2 className='text-4xl font-bold text-white mb-4>              What Affects AI Solution Pricing?'            </h2>'
            <p className='text-xl text-gray-300>              Several key factors determine the cost of your AI implementation'            </p>
          </motion.div>'
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8>            {pricingFactors.map((factor, index) => ('              <motion.div
                key={factor.factor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >'
                <Card className='p-8 h-full>                  <div className='flex items-start mb-6>                    <div className={`p-3 rounded-lg bg-gradient-to-r ${factor.color} mr-4`}>'                      <factor.icon className='w-6 h-6 text-white' />                    </div>'                    <div>`                      <h3 className='text-2xl font-bold text-white mb-2'>{factor.factor}</h3>'                      <p className='text-gray-300'>{factor.description}</p>'                    </div>'                  </div>'
                  <ul className='space-y-3>                    {factor.details.map((detail, detailIndex) => ('                      <li key={detailIndex} className='flex items-center text-gray-300>                        <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />                        {detail}                      </li>

                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            </div>
          </motion.div>
        </div>
      </section>
    </div>


