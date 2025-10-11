<<<<<<< HEAD
'use client';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
<<<<<<< HEAD
<<<<<<< HEAD
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Settings, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const PagePage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Page
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive solutions designed to transform your business.
              </p>
=======
import { BarChart, TrendingUp, PieChart, ArrowRight, CheckCircle, Zap, Shield, Target } from 'lucide-react';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd

const GuidesPage: React.FC = () => {
  const features = [
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'AI-powered insights to optimize your business performance.',
      benefits: ['Predictive analytics', 'Trend analysis', 'Performance metrics', 'Growth forecasting']
    },
    {
      icon: PieChart,
      title: 'Data Visualization',
      description: 'Transform complex data into clear, actionable insights.',
      benefits: ['Interactive charts', 'Custom reports', 'Data export', 'Visual storytelling']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    }
  ];

  const benefits = [
    'Increase efficiency by up to 80%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Real-time processing and analysis',
    'Seamless integration with existing systems'
  ];

  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Guides
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced AI-powered solutions.
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Learn More
              </button>
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Coming Soon
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This page is under development. Please check back soon for updates.
              </p>
              <button className="cyber-button">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
=======
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
              <p className="text-xl text-gray-300">Everything you need to succeed with AI</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
              <p className="text-xl text-gray-300">Transform your business with intelligent automation</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <Zap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
=======
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
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
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
>>>>>>> cursor/fix-errors-and-merge-to-main-6fdd
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                Contact Sales
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
              </button>
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
      
      <Footer />
    </>
=======
      </main>

      <Footer />
    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-54d7
  );
};

export default GuidesPage;