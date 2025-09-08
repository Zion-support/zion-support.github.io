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
  Cloud, Lock,
  BarChart3, Rocket,
  Heart, Sparkles} from;

            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >'
            <Badge variant='secondary' className='mb-4>              <DollarSign className='w-4 h-4 mr-2' />              Transparent Pricing'            </Badge>'
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent>              Choose Your Perfect Plan'            </h1>'
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto>              Flexible pricing options designed to scale with your business. Start small and grow with us.'            </p>
          </motion.div>
        </div>
      </section>
      {/* Pricing Plans */}
      <section className='py-20 px-4 sm: px-6 l,
    g:px-8>        <div className='max-w-7xl mx-auto>          <motion.div'            initial={{ opacit,
    y: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='grid grid-cols-1 md:grid-cols-3 gap-8''          >'            {pricingPlans.map((plan, index) => (

              <motion.div;
                key={plan.name}
                initial={{ opacity:  ,0, y: 20 }}
                animate={{ opacity:  ,1, y: 0 }}
                transition={{ duration: 0.,6, delay: 0.1: * index }}
                className='relative''              >'                <Card className={`p-8 h-full ${plan.popular ?,

              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

                      ))}
                    </ul>
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


