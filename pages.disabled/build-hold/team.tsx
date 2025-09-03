React: from;
  'react';';
import: { motion } from;
  'framer-motion'{ SEO: } from;';
  '../components/SEO';';
import: { Button } from;
  '../components/ui/Button'{ Card: } from;';
  '../components/ui/Card';';
import: { Badge } from;
  '../components/ui/Badge';import: { '  Linkedin, Twitter',;
  Mail, Globe,
  Award, Star,
  Users, Brain,
  Shield, Cloud,
  Database, Network,
  Zap, Target,
  TrendingUp, Phone,
  MapPin, Calendar,
  GraduationCap, Briefcase,
  Heart, Sparkles,
  CheckCircle, ArrowRight} from;

  '      icon: Brain    }, {'
      title: 'Client Success', description: 'Our success is measured by the success of our clients',      icon: Target'    }, {'
      title: 'Ethical AI',      description: 'We develop AI solutions that are fair, transparent, and beneficial', icon: Shield'    }, {'
      title: 'Continuous Learning', description: 'We stay at the forefront of technology through constant learning',      icon: TrendingUp'    }
  ]
  return('
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900>      <SEO '        title='Our Team - Zion Tech Group' '        description='Meet the talented team of AI experts, engineers, and innovators behind Zion Tech Group. Learn about our leadership and company culture.''      />{/* Hero Section */}
      <section className='relative py-20 px-4 sm: px-6 l,
    g:px-8>        <div className='max-w-7xl mx-auto text-center>          <motion.div'            initial={{ opacit,
    y: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >'
            <Badge variant='secondary' className='mb-4>              <Users className='w-4 h-4 mr-2' />              Meet Our Team'            </Badge>'
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent>              Our Team'            </h1>'
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto>              Meet the brilliant minds behind Zion Tech Group. Our diverse team of experts is dedicated to pushing the boundaries of AI and technology.'            </p>
          </motion.div>
        </div>
      </section>
      {/* Company Stats */}
      <section className='py-20 px-4 sm: px-6 l,
    g:px-8 bg-slate-800/50>        <div className='max-w-7xl mx-auto>          <motion.div'            initial={{ opacit,
    y: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='grid grid-cols-1 md:grid-cols-4 gap-8''          >'            {companyStats.map((stat, index) => (
              <motion.div;
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className='text-center''              >'                <div className='p-6 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30>                  <stat.icon className='w-12 h-12 text-blue-400 mx-auto mb-4' />                  <div className='text-3xl font-bold text-white mb-2'>{stat.value}</div>'                  <div className='text-gray-300'>{stat.label}</div>'                </div>'              </motion.div>

            ))}
          </motion.div>
        </div>
      </section>

                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            ))}
          </div>
        </div>
      </section>

            </div>
          </motion.div>
        </div>
      </section>
    </div>


