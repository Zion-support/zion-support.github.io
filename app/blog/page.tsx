'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react'
const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in enterprise AI adoption and what to expect in the coming year.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      image: '/images/blog/ai-enterprise-trends.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Cybersecurity Best Practices for Modern Businesses',
      excerpt: 'Essential security measures every business should implement to protect their digital assets.',
      author: 'James Wilson',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/images/blog/cybersecurity-best-practices.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Step-by-step guide to successfully migrating your infrastructure to the cloud.',
      author: 'Michael Chen',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Cloud Computing',
      image: '/images/blog/cloud-migration-guide.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Data Analytics: Turning Information into Insights',
      excerpt: 'How to leverage data analytics to drive business decisions and growth.',
      author: 'Dr. Emily Rodriguez',
      date: '2024-01-01',
      readTime: '7 min read',
      category: 'Data Analytics',
      image: '/images/blog/data-analytics-insights.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'The Rise of Quantum Computing in Business Applications',
      excerpt: 'Understanding quantum computing and its potential impact on business operations.',
      author: 'Dr. Sarah Johnson',
      date: '2023-12-28',
      readTime: '9 min read',
      category: 'Quantum Computing',
      image: '/images/blog/quantum-computing-business.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Automation: Streamlining Business Processes with AI',
      excerpt: 'How AI-powered automation can transform your business operations and increase efficiency.',
      author: 'Michael Chen',
      date: '2023-12-25',
      readTime: '5 min read',
      category: 'Automation',
      image: '/images/blog/ai-automation-business.jpg',
      featured: false
    }
  ]
  const categories = [
    'All',
    'AI & Machine Learning',
    'Cybersecurity',
    'Cloud Computing',
    'Data Analytics',
    'Quantum Computing',
    'Automation'
  ]
  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)
  return (
    <>
      <Helmet> </Helmet><title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta> </meta><meta> </meta></Helmet>

      <Navigation> </Navigation><main>{/* Hero Section */}
        </main><section> </section><div> </div><div> </div><div> </div><h1>Tech </h1><span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Insights</span>
              </h1>
              <p>Stay ahead of the curve with expert insights on AI, cybersecurity, cloud computing, 
                and the latest technology trends shaping the future of business.
              </p></p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section> </section><div> </div><div> </div><div> </div><div> </div><div> </div><span>Featured
                      </span></span>
                    </div>
                    <h2>{featuredPost.title}
                    </h2></h2>
                    <p>{featuredPost.excerpt}
                    </p></p>
                    <div> </div><User> </User><span className="mr-4">{featuredPost.author}</span>
                      <Calendar> </Calendar><span className="mr-4">{new Date(featuredPost.date).toLocaleDateString()}</span>
                      <Clock> </Clock><span>{featuredPost.readTime}</span>
                    </div>
                    <button>Read More
                      </button><ArrowRight> </ArrowRight></button>
                  </div>
                  <div> </div><div> </div><span className="text-white text-2xl font-bold">AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section> </section><div> </div><div>{categories.map((category) => (
                </div><button>{category}
                </button></button>
              ))}
            </div>

            <div>{regularPosts.map((post) => (
                </div><article> </article><div> </div><div> </div><span>{post.category.charAt(0)}
                      </span></span>
                    </div>
                  </div>
                  
                  <div> </div><div> </div><Tag> </Tag><span className="text-cyan-400 text-sm font-medium">{post.category}</span>
                    </div>
                    
                    <h3>{post.title}
                    </h3></h3>
                    
                    <p>{post.excerpt}
                    </p></p>
                    
                    <div> </div><User> </User><span className="mr-4">{post.author}</span>
                      <Calendar> </Calendar><span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                      <Clock> </Clock><span>{post.readTime}</span>
                    </div>
                    
                    <button>Read More
                      </button><ArrowRight> </ArrowRight></button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section> </section><div> </div><div> </div><h2>Stay Updated
              </h2></h2>
              <p>Get the latest insights and updates delivered to your inbox.
              </p></p>
              <div> </div><input> </input><button>Subscribe
                </button></button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer> </Footer></>
  )
}
export default BlogPage