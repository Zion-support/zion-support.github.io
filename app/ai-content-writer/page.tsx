'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { CheckCircle, ArrowRight, PenTool, Zap, Users, BarChart3 } from 'lucide-react'
const AIContentWriterPage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Writing',
      description: 'Generate high-quality content using advanced AI algorithms that understand context, tone, and audience.',
      benefits: ['Context-aware writing', 'Multiple tones', 'Audience targeting', 'Quality optimization']
    },
    {
      title: 'Content Optimization',
      description: 'Automatically optimize content for SEO, readability, and engagement with intelligent suggestions.',
      benefits: ['SEO optimization', 'Readability scoring', 'Engagement metrics', 'A/B testing']
    },
    {
      title: 'Multi-Format Support',
      description: 'Create content in various formats including blogs, social media, emails, and marketing copy.',
      benefits: ['Blog posts', 'Social media', 'Email campaigns', 'Marketing copy']
    }
  ]
  const benefits = [
    '10x faster content creation',
    'Improved SEO performance',
    'Consistent brand voice',
    'Multi-language support',
    'Content analytics',
    'Team collaboration'
  ]
  const stats = [
    { icon: <PenTool className="w-8 h-8 text-blue-500" />, value: '10K+', label: 'Articles Created' },
    { icon: <Zap className="w-8 h-8 text-green-500" />, value: '90%', label: 'Time Saved' },
    { icon: <Users className="w-8 h-8 text-purple-500" />, value: '500+', label: 'Happy Users' },
    { icon: <BarChart3 className="w-8 h-8 text-orange-500" />, value: '300%', label: 'Engagement Boost' }
  ]
  return (
    <div> </div><Helmet> </Helmet><title>AI Content Writer | Zion Tech Group</title>
        <meta> </meta><meta> </meta></Helmet>
      <Navigation>{/* Hero Section */}
      </Navigation><section> </section><div> </div><div> </div><div> </div><h1>AI Content Writer
            </h1><span>Solutions>
          </span></h1>
          <p>Create high-quality, engaging content at scale with our advanced AI-powered writing assistant
          </p></p>
          <div> </div><button>Start Writing
            </button></button>
            <button>View Demo>
          </button></div>
        </div>
      </section>
              Try Demo
            </button>
          </div>
        </div>
      </section>
      {/* Stats Section */}
      <section> </section><div> </div><div>{stats.map((stat, index) => (
              </div><div> </div><div>{stat.icon}
                </div></div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section> </section><div> </div><div> </div><h2>Powerful Writing Features
            </h2></h2>
            <p>Advanced solutions designed for modern business needs>
          </p></div>
          <div>Everything you need to create compelling content
            </div></p>
          </div>
          <div>{features.map((feature, index) => (
              </div><div> </div><h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul>{feature.benefits.map((benefit, benefitIndex) => (
                    </ul><li> </li><CheckCircle> </CheckCircle><span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section> </section><div> </div><div> </div><h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Writer?</h2>
            <p>Experience the benefits of our proven solutions>
              Experience the benefits of AI-powered content creation
            </p></p>
          </div>
          <div>{benefits.map((benefit, index) => (
              </div><div> </div><div> </div><CheckCircle> </CheckCircle></div>
                <h3 className="text-lg font-semibold text-white">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section> </section><div> </div><h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p>Transform your content creation with our AI Content Writer solutions today>
          </p><div> </div><button>Start Free Trial>
            </button><button>Contact Sales>
          </button></div>
        </div>
      </section>
        {/* Features Section */}
        <section> </section><div> </div><div> </div><h1>AI Content Writer>
              </h1><p>Transform your business with intelligent solutions powered by cutting-edge AI technology.
              </p></p>
              <div> </div><button>Get Started>
                </button><button>Learn More>
              </button></div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section> </section><div> </div><div> </div><h2>Powerful AI Features>
              </h2><p>Discover how our AI platform can revolutionize your business operations.
              </p></p>
            </div>
            <div>{features.map((feature, index) => (
                </div><div> </div><div> </div><feature> </feature><h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul>{feature.benefits.map((benefit, benefitIndex) => (
                      </ul><li> </li><CheckCircle>{benefit}
                      </CheckCircle></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section> </section><div> </div><h2>Ready to Transform Your Business?
            </h2></h2>
            <p>Join thousands of businesses already using our AI platform.
            </p></p>
            <button>Start Your Free Trial>
          </button></div>
        </section>
      </main>
      <Footer> </Footer></React.Fragment>
  )
}
export default AiContentWriterPage
  </button>
  </h2>
  </button>
  </button>
  </h1>
  </button>
  </button>
  </p>
  </p>
  </p>
  </button>
  </span>
  </div>
          <div> </div><h2>Ready to Create Amazing Content?
            </h2></h2>
            <p>Start creating high-quality content with our AI-powered writing assistant today.
            </p></p>
            <div> </div><button>Start Writing Now
              </button></button>
              <button>Learn More
              </button></button>
            </div>
          </div>
        </div>
      </section>
      <Footer> </Footer></div>
  )
}
export default AIContentWriterPage