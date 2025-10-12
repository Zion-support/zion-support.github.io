import React from 'react'
import { Link } from 'react-router-dom'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot} from 'lucide-react';

export default function AICodeAssistantProPage() {
  const features = [
    {
      icon: <Bot className="w-5 h-5ml-2" />,
      title: 'AI Code Generation',
      description: 'Generate high-quality code from natural language descriptions with 95% accuracy'
    },
    {
      icon: <Code className="w-5 h-5ml-2" />,
      title: 'Smart Code Completion',
      description: 'Intelligent autocomplete that understands context and suggests optimal solutions'
    },
    {
      icon: <Search className="w-5 h-5ml-2" />,
      title: 'Code Analysis & Debugging',
      description: 'Automatically detect bugs, security vulnerabilities, and performance issues'
    },
    {
      icon: <GitBranch className="w-5 h-5ml-2" />,
      title: 'Version Control Integration',
      description: 'Seamless integration with Git, GitHub, GitLab, and other version control systems'
    },
    {
      icon: <Database className="w-5 h-5ml-2" />,
      title: 'Multi-Language Support',
      description: 'Support for 50+ programming languages including Python, JavaScript, Java, C++, and more'
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
      title: 'Security & Compliance',
      description: 'Built-in security scanning and compliance checking for enterprise-grade code quality'
    }
  ]

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 1,000 code generations/month',
        'Basic AI features',
        '5 programming languages',
        'Email support',
        'Basic analytics',
        'VS Code extension'
      ],
      popular: false
    },
    {
      name: 'Team',
      price: '$99',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Up to 10,000 code generations/month',
        'Advanced AI features',
        'All programming languages',
        'Priority support',
        'Advanced analytics',
        'Team collaboration',
        'Custom integrations',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited code generations',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Alex Chen',
      company: 'Senior Software Engineer',
      content: 'Increased my coding speed by 300% and reduced bugs by 80%. The AI suggestions are incredibly accurate.',
      rating: 5,
      avatar: 'AC'
    },
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup CTO',
      content: 'Our team productivity skyrocketed. The code generation quality is enterprise-grade and saves us hours daily.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Full-Stack Developer',
      content: 'The debugging features are game-changing. It catches issues I would have missed and suggests perfect fixes.',
      rating: 5,
      avatar: 'MR'
    }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5ml-2" />,
      title: '300% Faster Development',
      description: 'AI-powered code generation accelerates development cycles'
    },
    {
      icon: <Target className="w-5 h-5ml-2" />,
      title: '80% Fewer Bugs',
      description: 'Advanced analysis and debugging reduce code issues significantly'
    },
    {
      icon: <Clock className="w-5 h-5ml-2" />,
      title: 'Save 20+ Hours Weekly',
      description: 'Automated code generation and optimization eliminate repetitive tasks'
    },
    {
      icon: <Shield className="w-5 h-5ml-2" />,
      title: 'Enterprise Security',
      description: 'Built-in security scanning ensures code quality and compliance'
    }
  ]

  const integrations = [
    { name: 'VS Code', icon: '💻' },
    { name: 'IntelliJ IDEA', icon: '☕' },
    { name: 'Sublime Text', icon: '📝' },
    { name: 'Atom', icon: '⚛️' },
    { name: 'Vim', icon: '📄' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'GitLab', icon: '🦊' },
    { name: 'Bitbucket', icon: '🪣' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚓' }
  ]

  const supportedLanguages = [
    'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#', 'Go', 'Rust',
    'PHP', 'Ruby', 'Swift', 'Kotlin', 'Scala', 'R', 'MATLAB', 'SQL',
    'HTML', 'CSS', 'React', 'Vue.js', 'Angular', 'Node.js', 'Django', 'Flask'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title />AI Code Assistant Pro - Zion Tech Group | Intelligent Code Generation</title>
        <meta name="description" content="Revolutionary AI-powered code assistant with intelligent generation, debugging, and analysis. Increase development speed by 300%. Starting at $29/month." />
        <meta name="keywords" content="AI code assistant, code generation, intelligent debugging, code analysis, programming AI, development tools" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-code-assistant-pro"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <Code className="w-5 h-5ml-2" />
            <span />AI-Powered Code Generation</span>
          </div>
          
          <h1 className="w-5 h-5ml-2" />
            AI Code Assistant
            <br />
            <span className="w-5 h-5ml-2" />Pro
            </span>
          </h1>
          
          <p className="w-5 h-5ml-2">Transform your development workflow with AI-powered code generation, intelligent debugging, and analysis. 
            Increase development speed by 300% while reducing bugs by 80%.
          </p>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5 h-5ml-2" />
            </Link>
            <Link to="#pricing" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span />View Pricing</span>
              <ArrowRight className="w-5 h-5ml-2" />
            </Link>
          </div>

          {/* Key Stats */}
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">300%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Faster Development</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">80%</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Fewer Bugs</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">50+</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Languages Supported</div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">25 K+</div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Active Developers</div>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Why Choose Our <span className="w-5 h-5ml-2" />AI Code Assistant?</span>
            </h2>
            <p className="w-5 h-5ml-2">Experience the future of software development with cutting-edge AI technology that works for your team.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {benefits.map((benefit, index) => (
              <div key="{index}" className="text-centergroup" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{benefit.icon}
                </div>
                <h3 className="w-5 h-5ml-2" />{benefit.title}
                </h3>
                <p className="w-5 h-5ml-2">{benefit.description}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Supported Languages Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Support for <span className="w-5 h-5ml-2" />50+ Languages</span>
            </h2>
            <p className="w-5 h-5ml-2">From popular languages to cutting-edge frameworks, our AI understands and generates code in any language you need.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {supportedLanguages.map((language, index) => (
              <div key="{index}" className="group text-center" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <span className="w-5 h-5ml-2" />{language}
                  </span>
                </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Powerful Features for <span className="w-5 h-5ml-2" />Smart Development</span>
            </h2>
            <p className="w-5 h-5ml-2">Everything you need to accelerate development with AI-powered intelligence and automation.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                </div>
                <h3 className="w-5 h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5 h-5ml-2">{feature.description}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Integrations Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Seamless <span className="w-5 h-5ml-2" />Integrations</span>
            </h2>
            <p className="w-5 h-5ml-2">Works with your favorite development tools and platforms for a unified coding experience.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {integrations.map((integration, index) => (
              <div key="{index}" className="group text-center" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <span className="w-5 h-5ml-2" />{integration.icon}</span>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{integration.name}
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20px-4relative" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Simple, Transparent <span className="w-5 h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5 h-5ml-2">Choose the plan that fits your development needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {pricingPlans.map((plan, index) => (
              <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} />
                {plan.popular && (
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular
                    </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <h3 className="w-5 h-5ml-2" />{plan.name}</h3>
                  <p className="w-5 h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5 h-5ml-2" />{plan.price}</span>
                    <span className="w-5 h-5ml-2" />{plan.period}</span>
                  </div>
                
                <ul className="w-5 h-5ml-2" />
                  {plan.features.map((feature, featureIndex) => (
                    <li key="{featureIndex}" className="flex items-centerspace-x-3" />
                      <CheckCircle className="w-5 h-5ml-2" />
                      <span className="w-5 h-5ml-2" />{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Trusted by <span className="w-5 h-5ml-2" />25,000+</span> Developers
            </h2>
            <p className="w-5 h-5ml-2">See what our customers are saying about their success with our AI code assistant.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {testimonials.map((testimonial, index) => (
              <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                  </div>
                  <div />
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.name}</div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.company}</div>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5te xt-yellow-400fill-current"  />
                  ))}
                </div>
                <p className="w-5 h-5ml-2">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <h2 className="w-5 h-5ml-2" />
                  Ready to Transform Your <span className="w-5 h-5ml-2" />Development Workflow?</span>
                </h2>
                
                <p className="w-5 h-5ml-2">Join thousands of developers already coding 300% faster with our AI-powered code assistant. 
                  Start your free trial today and experience the future of software development.
                </p>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <span />Start Free Trial</span>
                    <ArrowRight className="w-5 h-5ml-2" />
                  </Link>
                  <Link to="#pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <span />View All Plans</span>
                    <ArrowRight className="w-5 h-5ml-2" />
                  </Link>
                </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <p />✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}