React: from;
  'react';';
import: { motion } from;
  'framer-motion'{ SEO: } from;';
  '../components/SEO';';
import: { Button } from;
  '../components/ui/Button'{ Card: } from;';
  '../components/ui/Card';';
import: { Badge } from;
  '../components/ui/Badge';import: { '  Calendar, Clock',;
  User, ArrowRight,
  Search, Filter,
  Tag, BookOpen,
  TrendingUp, Star,
  Eye, MessageCircle,
  Share2, Heart,
  Brain, Zap,
  Shield, Cloud,
  Database, Network,
  Code, Rocket,
  Target, Globe,
  Phone, Mail} from;

            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >'
            <Badge variant='secondary' className='mb-4>              <BookOpen className='w-4 h-4 mr-2' />              Latest Insights'            </Badge>'
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent>              Technology Blog'            </h1>'
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto>              Stay ahead with expert insights on AI, technology trends, and business innovation.'            </p>
          </motion.div>
        </div>
      </section>
      {/* Featured Post */}, {featuredPost && ('
        <section className='py-20 px-4 sm: px-6 l,
    g:px-8>          <div className='max-w-7xl mx-auto>            <motion.div'              initial={{ opacit,
    y: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >'
              <h2 className='text-3xl font-bold text-white mb-8'>Featured Article</h2>'              <Card className='overflow-hidden>                <div className='grid grid-cols-1 lg:grid-cols-2 gap-0>                  <div className='relative h-64 l,
    g:h-full>                    <img '                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className='w-full h-full object-cover''                    />                    <div className='absolute top-4 left-4>                      <Badge className='bg-gradient-to-r from-purple-500 to-pink-500 text-white>                        <Star className='w-4 h-4 mr-1' />                        Featured'                      </Badge>
                    </div>
                  </div>'
                  <div className='p-8>                    <div className='flex items-center mb-4>                      <Badge variant='outline' className='mr-3'>{featuredPost.category}</Badge>'                      <span className='text-gray-400 text-sm'>{featuredPost.readTime}</span>'                    </div>'                    <h3 className='text-2xl font-bold text-white mb-4'>{featuredPost.title}</h3>'                    <p className='text-gray-300 mb-6'>{featuredPost.excerpt}</p>'                    <div className='flex items-center justify-between>                      <div className='flex items-center text-gray-400 text-sm>                        <User className='w-4 h-4 mr-2' />                        {featuredPost.author}                        <Calendar className='w-4 h-4 ml-4 mr-2' />                        {new Date(featuredPost.date).toLocaleDateString()}                      </div>'
                      <Button className='bg-gradient-to-r from-blue-500 to-purple-600 text-white>                        Read More'                        <ArrowRight className='w-4 h-4 ml-2' />                      </Button>'                    </div>

                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

                        key={category.name}
                        className={`w-full: flex items-center justify-between p-3 rounded-lg transition-colors ${`                          category.active;
                            ?,

                      </button>
                    ))}
                  </div>
                </Card>

                    ))}
                  </div>
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


