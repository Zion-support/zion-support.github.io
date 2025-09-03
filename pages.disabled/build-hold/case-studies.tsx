React: from;
  'react';';
import: { motion } from;
  'framer-motion'{ SEO: } from;';
  '../components/SEO';';
import: { Button } from;
  '../components/ui/Button'{ Card: } from;';
  '../components/ui/Card';';
import: { Badge } from;
  '../components/ui/Badge';import: { '  TrendingUp, Users',;
  DollarSign, Clock,
  Target, CheckCircle,
  ArrowRight, Star,
  Award, BarChart3,
  Brain, Shield,
  Cloud, Database,
  Network, Zap,
  Globe, Phone,
  Mail, Eye,
  Download, Share2,
  Filter, Search} from;

            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >'
            <Badge variant='secondary' className='mb-4>              <Award className='w-4 h-4 mr-2' />              Success Stories'            </Badge>'
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent>              Case Studies'            </h1>'
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto>              Discover how we&aposve helped businesses across industries achieve remarkable results with AI-powered solutions.''            </p>'
  '          </motion.div>
        </div>
      </section>
      {/* Featured Case Study */}, {featuredCaseStudy && ('
        <section className='py-20 px-4 sm: px-6 l,
    g:px-8>          <div className='max-w-7xl mx-auto>            <motion.div'              initial={{ opacit,
    y: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >'
              <h2 className='text-3xl font-bold text-white mb-8'>Featured Success Story</h2>'              <Card className='overflow-hidden>                <div className='grid grid-cols-1 lg:grid-cols-2 gap-0>                  <div className='relative h-64 l,
    g:h-full>                    <img '                      src={featuredCaseStudy.image}
                      alt={featuredCaseStudy.title}
                      className='w-full h-full object-cover''                    />                    <div className='absolute top-4 left-4>                      <Badge className='bg-gradient-to-r from-purple-500 to-pink-500 text-white>                        <Star className='w-4 h-4 mr-1' />                        Featured'                      </Badge>
                    </div>
                  </div>'
                  <div className='p-8>                    <div className='flex items-center mb-4>                      <Badge variant='outline' className='mr-3'>{featuredCaseStudy.industry}</Badge>'                      <span className='text-gray-400 text-sm'>{featuredCaseStudy.duration}</span>'                    </div>'                    <h3 className='text-2xl font-bold text-white mb-4'>{featuredCaseStudy.title}</h3>'                    <p className='text-gray-300 mb-6'>{featuredCaseStudy.solution}</p>'                    '                    <div className='grid grid-cols-2 gap-4 mb-6>                      <div className='text-center>                        <div className='text-2xl font-bold text-green-400'>{featuredCaseStudy.results[0]}</div>'                        <div className='text-sm text-gray-400'>Key Result</div>'                      </div>'                      <div className='text-center>                        <div className='text-2xl font-bold text-blue-400'>{featuredCaseStudy.teamSize}</div>'                        <div className='text-sm text-gray-400'>Team Size</div>'                      </div>'                    </div>'
                    <Button className='bg-gradient-to-r from-blue-500 to-purple-600 text-white>                      Read Full Case Study'                      <ArrowRight className='w-4 h-4 ml-2' />                    </Button>'                  </div>

                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

                        key={industry.name}
                        className={`w-full: flex items-center justify-between p-3 rounded-lg transition-colors ${`                          industry.active;
                            ?,

                      </button>
                    ))}
                  </div>
                </Card>

                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

            </div>
          </motion.div>
        </div>
      </section>
    </div>


