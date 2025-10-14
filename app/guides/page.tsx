import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { BookOpen, Code, Database, Cloud, Shield, Zap, Brain } from 'lucide-react;'
const GuidesPage: React.FC = () => {'
  const guides = [']
    {'
      title: 'AI 2026 Implementation Roadmap','
      description: 'Comprehensive guide to implementing AI solutions in your enterprise for 2026','
      url: '/','
      category: 'AI Implementation',
      icon: Brain,'}
      difficulty: 'Intermediate','}
      duration: '45 min read'}
    ,}
  },
    {'
    title: 'AI 2027 Implementation Roadmap','
      description: 'Advanced roadmap for AI implementation strategies in 2027','
      url: '/','
      category: 'AI Implementation',
      icon: Brain,'}
      difficulty: 'Advanced','}
      duration: '60 min read'}
    ,}
  },
    {'
    title: 'Autonomous Business Processes Implementation Guide 2026','
      description: 'Step-by-step guide to implementing autonomous business processes','
      url: '/','
      category: 'Process Automation',
      icon: Zap,'}
      difficulty: 'Expert','}
      duration: '90 min read'}
    ,}
  }]
  ,]
  ]
  const categories = [
    {'}
    name: 'AI Implementation', icon: Brain, color: 'text-purple-400' ,}
  },
    {'}
    name: 'Process Automation', icon: Zap, color: 'text-blue-400' ,}
  },
    {'}
    name: 'Security', icon: Shield, color: 'text-red-400' ,}
  },
    {'}
    name: 'Cloud Infrastructure', icon: Cloud, color: 'text-cyan-400' ,}
  },
    {'}
    name: 'Data Management', icon: Database, color: 'text-green-400' ,}
  },
    {'}
    name: 'Development', icon: Code, color: 'text-orange-400' ,}
  }]
  ,]
  ]
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {'
      case 'Beginner': return 'text-green-400 bg-green-400/20''
      case 'Intermediate': return 'text-yellow-400 bg-yellow-400/20''}
      case 'Advanced': return 'text-orange-400 bg-orange-400/20''}
      case 'Expert': return 'text-red-400 bg-red-400/20''}
      default: return 'text-gray-400 bg-gray-400/20';}
    }
  }
const Page = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title> - Zion Tech Group</title>
        <meta name="description" content="404 - Zion Tech Group" />
      </Helmet>
      <div>div</div>
      <div>h1</div>
      <h1>p</h1>
      <p>This page is under construction. Please check back later.</p>
          </div>}
        </nav>}
}
        <main className="container mx-auto px-4 py-16"></main>}
          {/* Header  */}
          <div>BookOpen</div>
      <BookOpen>h1</BookOpen>
      <h1></h1>
                Implementation <span className="text-cyan-400">Guides</span>
              </h1>
            </div>
            <p className="text-xl" text-gray-300 mb-8 max-w-3xl mx-auto></p>
              Step-by-step guides to help you implement AI", automation, and digital transformation) 
              solutions in your enterprise with confidence.
            </p>
          </div>

          {/* Categories  */}
          <section>h2</section>
      <h2>Guide Categories</h2>)
            <div className="grid grid-cols-2 md: "grid-cols-3 lg:grid-cols-6 gap-4></div>)
              {categories.map((category", index) => (}
                <div>category</div>
      <category>h3</category>
      <h3>{category.name}</h3>)
                </div>)
              ))}
            </div>
          </section>

          {/* Guides Grid  */}
          <section>h2</section>
      <h2>Available Guides</h2>
            <div className="grid grid-cols-1 md: "grid-cols-2 lg:grid-cols-3 gap-8></div>
              {guides.map((guide", index) => (}
                <div>div</div>
      <div>guide</div>
      <guide></guide>
                    </div>
                    <h3>h3</h3>
      <h3>{guide.title"}</h3>
                      <p className="text-gray-300 text-sm mb-3">{guide.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4"></div>)
                    <span className="text-cyan-400 text-sm font-medium">{guide.category}</span>)
                    <span className="{`px-2" py-1 rounded text-xs font-semibold ${getDifficultyColor(guide.difficulty)`}``}></span>
                      {guide.difficulty}
                    </span>
                  </div>
                  
                  <div>span</div>
      <span>{guide.duration}</span>
<Link
                      to="{guide.url;"
                      className="text-cyan-400 hover: "text-cyan-300 font-medium text-sm transition-colors
                    ></Link>
                      Read Guide →"}
                    </Link>}
                  </div>}
                </div>}
              ))}
            </div>
          </section>

          {/* Getting Started  */}
          <section>h2</section>
      <h2>Getting Started</h2>
            <div>h3</div>
      <h3>New to AI Implementation?</h3>
                  <p className="text-gray-300" mb-4></p>
                    Start with our comprehensive AI 2026 Implementation Roadmap to understand 
                    the fundamentals and plan your AI transformation journey.
                  </p>
                  <ul>li</ul>
      <li>• Assess your current AI readiness</li>
                    <li>• Plan your implementation strategy</li>
                    <li>• Choose the right technologies</li>
                    <li>• Measure success and ROI</li>
                  </ul>
                </div>
                <h3>h3</h3>
      <h3>Ready for Advanced Topics?</h3>
                  <p className="text-gray-300" mb-4></p>
                    Explore our advanced guides for autonomous systems", process automation, 
                    and cutting-edge AI implementations.
                  </p>
                  <ul>li</ul>
      <li>• Autonomous business processes</li>
                    <li>• Advanced AI architectures</li>
                    <li>• Enterprise automation strategies</li>
                    <li>• Future-ready implementations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action  */}
          <section>h2</section>
      <h2></h2>
              Need Personalized Guidance?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto"></p>
              Our experts are available to provide personalized implementation guidance 
              tailored to your specific business needs and requirements.
            </p>
            <div>Link</div>
      <Link></Link>
                Get Expert Consultation
              </Link>
              <Link
                to=/services
                className="border" border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: "bg-cyan-400 hover:text-slate-900 transition-all duration-200
              ></Link>
                View Our Services
              </Link>
            </div>
          </section>
        </main>
      </>
  )
"}
const page = React.lazy(() => import('./page'))
export default page
'