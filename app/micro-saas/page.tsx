'use client'
;
  const [selectedCategory, setSelectedCategory] = React.useState('All');
;
  const filteredProducts = selectedCategory === 'All'
    ? products;
    : products.filter(product => product.category === selectedCategory);
;
              </div>
            </div>
import React, {useState} from 'react'
import {Helmet} from 'react-helmet-async'
import {CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Brain, Target, Rocket} from 'lucide-react'
;
  const [selectedCategory, setSelectedCategory] = useState('all');
;
  const microSaasProducts: MicroSaasProduct[] = [,
    {;
      id: '1',
      name: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights and real-time analytics.',
      price: '$99/month',
      features: [,
        'Real-time data visualization',
        'AI-powered insights',
        'Custom dashboards',
        'Automated reporting',
        'Multi-platform integration',
        'Advanced filtering'
      ],
      category: 'Analytics',
      popular: true,
      icon: BarChart3,},
    {id: '2',
      name: 'Security Monitoring Suite',
      description: 'Advanced cybersecurity monitoring with threat detection and automated response.',
      price: '$149/month',
      features: [,
        '24/7 threat monitoring',
        'Automated incident response',
        'Compliance tracking',
        'Security analytics',
        'Real-time alerts',
        'Vulnerability scanning'
      ],
      category: 'Security',
      popular: false,
      icon: Shield,},
    {id: '3',
      name: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      price: '$79/month',
      features: [,
        'Smart task management',
        'Team collaboration',
        'Progress analytics',
        'Resource optimization',
        'Time tracking',
        'Gantt charts'
      ],
      category: 'Productivity',
      popular: false,
      icon: Target,},
    {id: '4',
      name: 'AI Content Generator',
      description: 'Create high-quality content with AI-powered writing assistance and optimization.',
      price: '$59/month',
      features: [,
        'AI writing assistance',
        'Content optimization',
        'SEO suggestions',
        'Multi-language support',
        'Brand voice training',
        'Content scheduling'
      ],
      category: 'Content',
      popular: true,
      icon: MessageSquare,},
    {id: '5',
      name: 'Cloud Infrastructure Manager',
      description: 'Streamline cloud operations with automated scaling and cost optimization.',
      price: '$199/month',
      features: [,
        'Automated scaling',
        'Cost optimization',
        'Performance monitoring',
        'Resource allocation',
        'Multi-cloud support',
        'Disaster recovery'
      ],
      category: 'Infrastructure',
      popular: false,
      icon: Cloud,},
    {id: '6',
      name: 'AI Customer Support Bot',
      description: 'Intelligent customer service automation with natural language processing.',
      price: '$129/month',
      features: [,
        'Natural language processing',
        'Multi-channel support',
        'Sentiment analysis',
        'Knowledge base integration',
        'Escalation management',
        'Performance analytics'
      ],
      category: 'Customer Service',
      popular: false,
      icon: Users,}]
;
  const categories = ['all', ...Array.from(new Set(microSaasProducts.map(product => product.category)))]
;
  const filteredProducts = microSaasProducts.filter(product =>);
    selectedCategory === 'all' || product.category === selectedCategory;
  );
;
  const popularProducts = microSaasProducts.filter(product => product.popular);
;
            </button>
          </div>
        </div>
      </section>
                  </div>
              {microSaasTools.map((tool, index) => (;
                <div key={index}className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover: scale-105 group ${,
                  tool.popular ? 'border-cyan-400/50 shadow-lg shadow-cyan-500/20' : 'border-white/10 hover: border-cyan-400/30',} `}>{tool.popular && (</div>
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR;</span>
                      </span>
                    </div>
                  )} <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 group-hover: scale-110 transition-transform"></div>
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{tool.title}</h3>
                      <div className="flex items-center space-x-2">
                        <span className="text-cyan-400 font-bold text-lg">{tool.price</span>}</span>
                        {tool.marketPrice && (;
                          <span className="text-gray-400 text-sm line-through">{tool.marketPrice</span>}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{tool.description</p>}</p>
                      ))}
                    </ul>
                  </div>
                  {tool.benefits && (;
                        ))}
                      </ul>
                    </div>
                  )}
;
                </div>
              ))}
            </div>
          </div>
        </section>
              ))}
            </select>
          </div>
                    </span>
                  )} </div>
                <ul className="space-y-2 mb-6"></ul>
                  {product.features.slice(0, 3).map((feature, index) => (;
                    </li>
                  ))}
                </ul>
                </button>
              </div>
            ))}
          </div>
          {filteredProducts.length === 0 && (;
            <div className="text-center py-12"></div>
              <p className="text-gray-400 text-lg">No products found in this category.</p>
            </div>
          )} </div>
      </section>
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                <TrendingUp className="w-8 h-8 text-white" /></TrendingUp>
              </div>
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6"></div>
                <Rocket className="w-8 h-8 text-white" /></Rocket>
              </div>
              </p>
            </div>
          </div>
        </div>
      </section>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
;
export default MicroSaasPage;
;