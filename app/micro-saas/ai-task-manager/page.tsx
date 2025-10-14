import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, Target, BarChart3, CheckCircle2, Star, Users, Clock, Zap, Globe, Shield, Sparkles, PenTool, Calendar, DollarSign, FileText, Mail, MessageSquare, Mic, Code, Eye, EyeOff, Key, Fingerprint, Smartphone, Laptop, Monitor, Database, Cpu, Network, AlertTriangle } from 'lucide-react';

const AITaskManagerPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />'
          title: 'AI Task Prioritization','
          description: 'Intelligent AI algorithms automatically prioritize your tasks based on deadlines, importance, and your work patterns.'
  }
    },
    {
      icon: <Target className="w-6 h-6 text-emerald-400" />'
          title: 'Smart Scheduling','
          description: 'AI-powered scheduling that considers your energy levels, meeting times, and optimal productivity windows.'
  }
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />'
          title: 'Progress Analytics','
          description: 'Detailed analytics and insights to track your productivity patterns and identify areas for improvement.'
  }
    },
    {
      icon: <Users className="w-6 h-6 text-orange-400" />'
          title: 'Team Collaboration','
          description: 'Seamless team collaboration with shared workspaces, task assignments, and real-time updates.'
  }
    },
    {
      icon: <Zap className="w-6 h-6 text-pink-400" />'
          title: 'Automation','
          description: 'Automate repetitive tasks and workflows to focus on what matters most with AI-powered automation.'
  }
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />'
          title: 'Cross-Platform Sync','
          description: 'Sync your tasks across all devices and platforms with real-time updates and offline access.'
  }
    }
  ]
  const taskFeatures = [
    {
      icon: <CheckCircle className="w-8 h-8 text-cyan-400" />'
          title: 'Smart Task Creation','
          description: 'Create tasks using natural language and let AI extract details, set priorities, and suggest deadlines.'
  },'
      price: 'Included','
      features: ['Natural language input', 'Auto-categorization', 'Priority detection', 'Deadline suggestions']
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-400" />'
          title: 'Intelligent Scheduling','
          description: 'AI-powered calendar integration that finds optimal time slots and prevents scheduling conflicts.'
  },'
      price: 'Included','
      features: ['Calendar sync', 'Time blocking', 'Conflict detection', 'Energy optimization']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />'
          title: 'Productivity Analytics','
          description: 'Comprehensive analytics dashboard to track your productivity and identify improvement opportunities.'
  },'
      price: 'Included','
      features: ['Time tracking', 'Productivity metrics', 'Goal tracking', 'Performance insights']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />'
          title: 'Team Management','
          description: 'Advanced team collaboration features with task assignments, progress tracking, and communication tools.'
  },'
      price: '$4.99/month','
      features: ['Team workspaces', 'Task assignments', 'Progress tracking', 'Team analytics']
    },
    {
      icon: <Zap className="w-8 h-8 text-pink-400" />'
          title: 'Workflow Automation','
          description: 'Automate repetitive tasks and create custom workflows to boost your productivity.'
  },'
      price: '$2.99/month','
      features: ['Custom workflows', 'Task automation', 'Integration triggers', 'Smart notifications']
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />'
          title: 'Enterprise Security','
          description: 'Advanced security features for enterprise teams including SSO, audit logs, and compliance.'
  },'
      price: '$9.99/month','
      features: ['SSO integration', 'Audit logs', 'Compliance tools', 'Advanced permissions']
    }
  ]
  const pricingPlans = [
    {'
      name: 'Personal','
      price: '$4.99','
      period: '/month','
          description: 'Perfect for individuals'
  },
      features: ['
        'Unlimited tasks','
        'AI prioritization','
        'Smart scheduling','
        'Basic analytics','
        'Cross-platform sync','
        'Email support'
      ],
      popular: false;
    },
    {'
      name: 'Professional','
      price: '$9.99','
      period: '/month','
          description: 'Ideal for professionals'
  },
      features: ['
        'Everything in Personal','
        'Advanced analytics','
        'Team collaboration','
        'Workflow automation','
        'Priority support','
        'Custom integrations'
      ],
      popular: true;
    },
    {'
      name: 'Enterprise','
      price: '$19.99','
      period: '/month','
          description: 'For teams and organizations'
  },
      features: ['
        'Everything in Professional','
        'Advanced team features','
        'Enterprise security','
        'Custom AI training','
        'Dedicated support','
        'White-label options'
      ],
      popular: false;
=======
    }
>>>>>>> origin/main
  ]

  const stats = ['
    { number: '40%', label: 'Productivity Increase', icon: <Zap className="w-6 h-6 text-cyan-400"> },'
    { number: '95%', label: 'Task Completion Rate', icon: <CheckCircle className="w-6 h-6 text-emerald-400"> },'
    { number: '2hrs', label: 'Time Saved Daily', icon: <Clock className="w-6 h-6 text-purple-400"> },'
    { number: '50K+', label: 'Active Users', icon: <Users className="w-6 h-6 text-orange-400"> }
  ]
  const testimonials = [
    {'
      name: 'Jessica Martinez','
      company: 'Product Manager','
      content: 'Zion Tech Group\'s AI Task Manager has completely transformed how I organize my work. The AI prioritization is incredibly accurate and I\'ve increased my productivity by 40%.',
      rating: 5
    },
    {'
      name: 'David Kim','
      company: 'Freelance Designer','
      content: 'The smart scheduling feature is a game-changer. It automatically finds the best times for my creative work and blocks out distractions. I\'ve never been more organized.',
      rating: 5
    },
    {'
      name: 'Sarah Johnson','
      company: 'Team Lead','
      content: 'The team collaboration features are outstanding. We can now track everyone\'s progress in real-time and the AI helps us identify bottlenecks before they become problems.',
      rating: 5;
  ]
  return (
    
    <div>
      <Helmet />
        <title>AI Task Manager - Intelligent Task Management | Zion Tech Group</title>
        <meta />
        <meta />
        <link />
      </Helmet>

      <div />
        {/* Hero Section */}
        <section>
        <div>
    <div />
            <div>
    <CheckCircle />
              <span>AI-Powered Task Management</span>
            </div>
            
            <h1>Intelligent  <span>AI Task Manager</span></h1>
            
            <p />
              Boost your productivity with our AI-powered task manager. Smart prioritization, 
              intelligent scheduling, and team collaboration to help you achieve more.
            </p>
            
            <div>
    <Link />
                <span>Start Free Trial</span>
                <ArrowRight />
              </Link>
              <Link />
                <span>View Demo</span>
                <ArrowRight />
              </Link>
            </div>
          </div>
      </section>
        {/* Stats Section */}
        <section>
        <div>
    <div />
            <div>
    <h2 />
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Task Management?</span>
              </h2>
              <p />
                Experience the power of AI-driven productivity with our proven results.
              </p>
            </div>
            
            <div />
              {stats.map((stat, index) => (
                <div>
    <div />
                    {stat.icon}
                  </div>
                  <div />
                    {stat.number}
                  </div>
                  <div />
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
        {/* Features Section */}
        <section>
        <div>
    <div />
            <div>
    <h2 />
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Task Features</span>
              </h2>
              <p />
                Everything you need to manage tasks efficiently with artificial intelligence.
              </p>
            </div>
            
            <div />
              {features.map((feature, index) => (
                <div>
    <div />
                    {feature.icon}
                  </div>
                  <h3 />
                    {feature.title}
                  </h3>
                  <p />
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
      </section>
        {/* Task Features Section */}
        <section>
        <div>
    <div />
              <h2 />
                Task <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p />
                Comprehensive task management features powered by artificial intelligence.
              </p>
            </div>
            
            <div />
              {taskFeatures.map((feature, index) => (
                <div>
    <div />
                    <div>
    <div />
                        {feature.icon}
                      </div>
                      <h3 />
                        {feature.title}
                      </h3>
                    </div>
  </div>
  <p />
                    {feature.description}
                  </p>
                  <div>
    <div />
                      {feature.price}
                    </div>
                    <div />
                      {feature.features.map((feat, featureIndex) => (
                        <div>
    <CheckCircle />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Link />
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
        {/* Pricing Section */}
        <section>
        <div>
    <div />
            <div>
    <h2 />
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p />
                Choose the plan that fits your productivity needs. All plans include a 14-day free trial.
              </p>
            </div>
            
            <div />
              {pricingPlans.map((plan, index) => (
                <div />
                  {plan.popular && (
                    <div>
    <div />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div>
    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div>
    <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
  </div>
  <ul />
                    {plan.features.map((feature, featureIndex) => (
                      <li />
                        <CheckCircle />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link />
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
      </section>
        {/* Testimonials Section */}
        <section>
        <div>
    <div />
              <h2 />
                What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Users Say</span>
              </h2>
              <p />
                Join thousands of users who have transformed their productivity with our AI task manager.
              </p>
            </div>
            
            <div />
              {testimonials.map((testimonial, index) => (
                <div>
    <div />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star />
                    ))}
                  </div>
                  <p />
                    "{testimonial.content}"
                  </p>
                  <div>
    <div />
                      <span />'
                        {testimonial.name.split(' ').map(n => n[0]).join(';)}
                      </span>
                    </div>
                    <div />
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
          </div>
        </div>
      </div>
              ))}
            </div>
          </div>
      </section>
        {/* CTA Section */}
        <section>
        <div>
    <div />
            <div>
    <h2 />
                Ready to Boost Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Productivity?</span>
              </h2>
              
              <p />
                Join thousands of users who have transformed their productivity with our AI task manager. 
                Start your free trial today and experience the power of intelligent task management.
              </p>
              
              <div>
    <Link />
                  <span>Start Free Trial</span>
                  <ArrowRight />
                </Link>
                <Link />
                  <span>View All Plans</span>
                  <ArrowRight />
                </Link>
              </div>
        </div>
      </div>
      </section>
      </div>
    </>
  )
}

export default AITaskManagerPage;