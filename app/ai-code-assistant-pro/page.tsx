import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Bot } from 'lucide-react'
export default function AICodeAssistantProPage() {
  const features = [
    {
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      title: 'AI Code Generation',
      description: 'Generate high-quality code from natural language descriptions with 95% accuracy'
    },
    {
      icon: <Code className="w-6 h-6 text-emerald-400" />,
      title: 'Smart Code Completion',
      description: 'Intelligent autocomplete that understands context and suggests optimal solutions'
    },
    {
      icon: <Search className="w-6 h-6 text-purple-400" />,
      title: 'Code Analysis & Debugging',
      description: 'Automatically detect bugs, security vulnerabilities, and performance issues'
    },
    {
      icon: <GitBranch className="w-6 h-6 text-orange-400" />,
      title: 'Version Control Integration',
      description: 'Seamless integration with Git, GitHub, GitLab, and other version control systems'
    },
    {
      icon: <Database className="w-6 h-6 text-pink-400" />,
      title: 'Multi-Language Support',
      description: 'Support for 50+ programming languages including Python, JavaScript, Java, C++, and more'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
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
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      title: '300% Faster Development',
      description: 'AI-powered code generation accelerates development cycles'
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      title: '80% Fewer Bugs',
      description: 'Advanced analysis and debugging reduce code issues significantly'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-400" />,
      title: 'Save 20+ Hours Weekly',
      description: 'Automated code generation and optimization eliminate repetitive tasks'
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-400" />,
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
    <div>
      <Helmet>
        <title>AI Code Assistant Pro - Zion Tech Group | Intelligent Code Generation</title>
        <meta name="description" content="Revolutionary AI-powered code assistant with intelligent generation, debugging, and analysis. Increase development speed by 300%. Starting at $29/month." />
        <meta name="keywords" content="AI code assistant, code generation, intelligent debugging, code analysis, programming AI, development tools" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-code-assistant-pro" />
      </Helmet>

      </Bot>
      </Code>
      </Search>
      </GitBranch>
      </Database>
      </Shield>
      </TrendingUp>
      </Target>
      </Clock>
      </Shield>
      </meta>
      </meta>
      </meta>
      </link>
      </Code>
      </br>
      </ArrowRight>
      </ArrowRight>
      </CheckCircle>
      </Star>
      </div>
      </div>
      </div>
      </ArrowRight>
      </ArrowRight>
      </div>
      {/* Hero Section */}
      <section>
        <div>
        <div>
        
        <div>
          <div>
            <Code className="w-4 h-4" />
            <span>AI-Powered Code Generation</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            AI Code Assistant
            <br></br>
            <span>
              Pro
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your development workflow with AI-powered code generation, intelligent debugging, and analysis. 
            Increase development speed by 300% while reducing bugs by 80%.
          </p>
          
          <div>
            <Link;
to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link;
to="#pricing" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Key Stats */}
          <div>
            <div>
              <div>300%</div>
              <div>Faster Development</div>
            </div>
            <div>
              <div>80%</div>
              <div>Fewer Bugs</div>
            </div>
            <div>
              <div>50+</div>
              <div>Languages Supported</div>
            </div>
            <div>
              <div>25K+</div>
              <div>Active Developers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
        <div>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span>AI Code Assistant?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the future of software development with cutting-edge AI technology that works for your team.
            </p>
          </div>
          
          <div>
            {benefits.map((benefit, index) => (
              <div>
                <div>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Languages Section */}
      <section>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Support for <span>50+ Languages</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From popular languages to cutting-edge frameworks, our AI understands and generates code in any language you need.
            </p>
          </div>
          
          <div>
            {supportedLanguages.map((language, index) => (
              <div>
                <div>
                  <span>
                    {language}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Features for <span>Smart Development</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Everything you need to accelerate development with AI-powered intelligence and automation.
            </p>
          </div>
          
          <div>
            {features.map((feature, index) => (
              <div>
                <div>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Seamless <span>Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Works with your favorite development tools and platforms for a unified coding experience.
            </p>
          </div>
          
          <div>
            {integrations.map((integration, index) => (
              <div>
                <div>
                  <span>{integration.icon}</span>
                </div>
                <div>
                  {integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent <span>Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose the plan that fits your development needs. All plans include our core AI features.
            </p>
          </div>
          
          <div>
            {pricingPlans.map((plan, index) => (
              <div>
                {plan.popular && (
                  <div>
                    <div>
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div>
                    <span>{plan.price}</span>
                    <span>{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link;
to="/contact"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}
                >
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
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by <span>25,000+</span> Developers
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              See what our customers are saying about their success with our AI code assistant.
            </p>
          </div>
          
          <div>
            {testimonials.map((testimonial, index) => (
              <div>
                <div>
                  <div>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div>{testimonial.name}</div>
                    <div>{testimonial.company}</div>
                  </div>
                </div>
                <div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div>
        <div>
          <div>
            <div>
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to Transform Your <span>Development Workflow?</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join thousands of developers already coding 300% faster with our AI-powered code assistant. 
                  Start your free trial today and experience the future of software development.
                </p>
                
                <div>
                  <Link;
to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link;
to="#pricing" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>View All Plans</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div>
                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}