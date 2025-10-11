<<<<<<< HEAD
import React from 'react';
import {  Link  } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import { Brain, BarChart, Target, TrendingUp, FileText, Zap, Shield, CheckCircle } from 'lucide-react'
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa

const GuidesPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics'],
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics'],
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization'],
    }
  ]

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ]

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div></div>
      <Navigation />
      
      <main className="container mx-auto px-4 py-16"></main></main>
        <div className="max-w-6xl mx-auto"></div></div>
          <div className="text-center mb-16"></div></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text"></h1></h1>
              Technical Guides
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p></p>
              Comprehensive technical documentation and step-by-step guides to help you 
              implement cutting-edge AI and technology solutions.
=======
    <>
      <Helmet>
        <title>Guides - Zion Tech Group</title>
        <meta name="description" content="AI-powered guides solution for intelligent automation and optimization" />
        <meta name="keywords" content="AI, guides, automation, artificial intelligence, business solutions" />
      </Helmet>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Guides
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              AI-powered guides solution for intelligent automation and optimization
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

<<<<<<< HEAD
          {/* Featured Guide */}
          <div className="mb-16"></div></div>
            {guides.filter(guide => guide.featured).map(guide => (
              <div key={guide.id} className="cyber-card hologram-card overflow-hidden"></div></div>
                <div className="md:flex"></div></div>
                  <div className="md:w-2/3 p-8"></div></div>
                    <div className="flex items-center mb-4"></div></div>
                      <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium"></span></span>
                        {guide.category}
                      </span>
                      <span className="{`${getDifficultyColor(guide.difficulty)}" text-white px-3 py-1 rounded-full text-sm font-medium ml-3`}></span></span>
                        {guide.difficulty}
                      </span>
                      <span className="text-gray-400 text-sm ml-4"></span></span>{guide.duration}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2></h2>
                      {guide.title}
                    </h2>
                    <p className="text-gray-300 mb-6 text-lg"></p></p>
                      {guide.description}
                    </p>
                    <div className="mb-6"></div></div>
                      <h3 className="text-lg font-semibold text-white mb-3"></h3></h3>Topics Covered:</h3>
                      <div className="flex flex-wrap gap-2"></div></div>
                        {guide.topics.map((topic, index) => (
                          <span key={index} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"></span></span>
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="cyber-button"></button>
                      Start Learning
                    </button>
                  </div>
                  <div className="md:w-1/3 bg-gradient-to-br from-cyan-500 to-purple-600 p-8 flex items-center justify-center"></div></div>
                    <div className="text-center text-white"></div></div>
                      <div className="text-6xl mb-4"></div></div>📚</div>
                      <div className="text-xl font-bold"></div></div>Free Guide</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Category Filter */}
          <div className="mb-12"></div></div>
            <div className="flex flex-wrap justify-center gap-4"></div></div>
              {categories.map(category => (
                <button
                  key={category}
                  className="{`px-6" py-2 rounded-full transition-colors ${
                    category === 'All' 
                      ? 'bg-cyan-500 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                ></button>
                  {category}
                </button>
=======
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300">Powerful AI capabilities for your business</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
          {/* Guides Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div></div>
            {guides.filter(guide => !guide.featured).map(guide => (
              <article key={guide.id} className="cyber-card hologram-card group"></article></article>
                <div className="p-6"></div></div>
                  <div className="flex items-center mb-4"></div></div>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium"></span></span>
                      {guide.category}
                    </span>
                    <span className="{`${getDifficultyColor(guide.difficulty)}" text-white px-3 py-1 rounded-full text-sm font-medium ml-3`}></span></span>
                      {guide.difficulty}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors"></h3></h3>
                    {guide.title}
                  </h3>
                  <p className="text-gray-300 mb-4"></p></p>
                    {guide.description}
                  </p>
                  <div className="mb-4"></div></div>
                    <div className="flex flex-wrap gap-2"></div></div>
                      {guide.topics.slice(0, 3).map((topic, index) => (
                        <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"></span></span>
                          {topic}
                        </span>
                      ))}
                      {guide.topics.length > 3 && (
                        <span className="text-gray-400 text-xs"></span></span>+{guide.topics.length - 3} more</span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between"></div></div>
                    <span className="text-gray-400 text-sm"></span></span>{guide.duration}</span>
                    <button className="text-cyan-400 hover:text-cyan-300 font-medium"></button>
                      Read Guide →
                    </button>
=======
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Guides?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Zap className="w-6 h-6 text-cyan-400" />
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
<<<<<<< HEAD
              </article>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 cyber-card hologram-card p-8 text-center"></div></div>
            <h2 className="text-2xl font-bold text-white mb-4"></h2></h2>
              Need Custom Implementation Help?
            </h2>
            <p className="text-gray-300 mb-6"></p></p>
              Our expert team can help you implement any of these solutions in your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div></div>
              <Link 
                to="/contact" 
                className="cyber-button"
              ></Link>
                Get Expert Help
              </Link>
              <Link 
                to="/services" 
                className="cyber-button"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              ></Link>
                View Our Services
              </Link>
=======
              ))}
>>>>>>> cursor/fix-errors-and-merge-to-main-9eaa
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our Guides and experience the future of intelligent automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Start Free Trial
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default GuidesPage