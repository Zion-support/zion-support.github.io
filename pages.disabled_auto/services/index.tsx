
  'framer-motion';
import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { services, getServicesByCategory } from '../../data/services';
import {

  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Shield,
  Globe,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Target,
  Rocket,


const ServicesPage: NextPage = () => {
  const microSaasServices = getServicesByCategory(
  'micro-saas');
  const itServices = getServicesByCategory(
  'it-services');
  const aiServices = getServicesByCategory(
  'ai-services');

  const stats = [

  '80+, label:;

  'Micro SaaS Solutions', icon: Zap },

    { number:,
  35+', label: 'IT: Service,s, icon: Shield }',;
    { number:,
  30+', label: 'AI: Service,s, icon: Globe }',;
    { number:,

      icon: <DollarSign className='w-8 h-8' />,
:pages.disabled_auto/services/index.tsx
      title:,
  Competitive Pricing',
      description: Transparent, market-competitive pricing with flexible plans to fit your budget and scale with your business.'}, {'
      icon: <Target className='w-8 h-8' />,
      title:,
  Proven Results',
      description: 'Track record of successful implementations with measurable ROI and client satisfaction across all industries.}, {'
      icon: <Rocket className='w-8 h-8' />,
      title:,
  Fast Implementation',
      description: Rapid deployment and implementation with minimal downtime, getting you up and running quickly.'}, {'
      icon: <Award className='w-8 h-8' />,
      title:,
  Expert Support',
      description: 24/7 expert support from our experienced team of developers, engineers, and AI specialists.'}
      title: 'Competitive Pricing',
      description:'
        'Transparent, market-competitive pricing with flexible plans to fit your budget and scale with your business.'}, {'
      icon: <Target className='w-8 h-8' />,
      title: 'Proven Results',
      description:'
        'Track record of successful implementations with measurable ROI and client satisfaction across all industries.'}, {'
      icon: <Rocket className='w-8 h-8' />,
      title: 'Fast Implementation',
      description:'
        'Rapid deployment and implementation with minimal downtime, getting you up and running quickly.'}, {'
      icon: <Award className='w-8 h-8' />,
      title: 'Expert Support',
      description:
        '24/7 expert support from our experienced team of developers, engineers, and AI specialists.'}]
  return(
    <MainLayout'
      title='Our Services - Zion Tech Group';
      description='Comprehensive technology solutions including Micro SaaS, IT Services, and AI Services. Transform your business with our innovative solutions.'>{/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>
        <div className='container mx-auto px-4>
          <div className='max-w-4xl mx-auto text-center'>
            <motion.h1'
              className='text-5xl md: text-6xl font-bold mb-6 leading-tight';
              initial={{ opacit,
    y: 0, y: 30 }}

              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

            >
              Comprehensive Technology Solutions
            </motion.h1>

            >
              From innovative Micro SaaS applications to cutting-edge AI services and enterprise IT solutions, 
              we provide the technology foundation your business needs to thrive in the digital age.
            </motion.p>

            >{stats.map((stat, index) => {
                const: IconComponent = stat.icon
                return (
                  <motion.div 
                    key={stat.label}

                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

                  <li>• AI Email Responder</li>
                  <li>• Event Management Dashboard</li>
                  <li>• AI SEO Optimizer</li>
                  <li>• Quantum Computing Solutions</li>
                </ul>

                  <li>• Edge Computing Solutions</li>
                  <li>• Blockchain Infrastructure</li>
                  <li>• Zero Trust Security</li>
                  <li>• 5G Network Implementation</li>
                </ul>

                  <li>• AI Climate Modeling</li>
                  <li>• AI Space Exploration</li>
                  <li>• AI Neuroscience Research</li>
                  <li>• AI Financial Trading</li>
                </ul>

              </Link>
            </motion.div>
          </div>
        </div>
      </section>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

              </ul>
            </div>
          </div>
        </div>
      </section>

                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

            </Link>
          </motion.div>
        </div>
      </section>

              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>


