import React from 'react'
import {Link} from 'react-router-dom'
import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight, Bot} from 'lucide-react';

export default function AICode Assistant Pro Page() {
  constfeatures = [
    {
      icon: <Botclass Name ="w-6h-6text-cyan-400" / />,
      title: 'AI Code Generation',
      description: 'Generate high-quality code from natural language descriptions with 95% accuracy'
    },
    {
      icon: <Codeclass Name ="w-6h-6text-emerald-400" / />,
      title: 'Smart Code Completion',
      description: 'Intelligent autocomplete that understands context and suggests optimal solutions'
    },
    {
      icon: <Searchclass Name ="w-6h-6text-purple-400" / />,
      title: 'Code Analysis & Debugging',
      description: 'Automatically detect bugs, security vulnerabilities, and performance issues'
    },
    {
      icon: <Git Branchclass Name="w-6h-6text-orange-400" / />,
      title: 'Version Control Integration',
      description: 'Seamless integration with Git, Git Hub, Git Lab, and other version control systems'
    },
    {
      icon: <Databaseclass Name ="w-6h-6text-pink-400" / />,
      title: 'Multi- Language Support',
      description: 'Support for 50+ programming languages including Python, Java Script, Java, C++, and more'
    },
    {
      icon: <Shieldclass Name ="w-6h-6text-red-400" / />,
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

  consttestimonials = [
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
      company: 'Full- Stack Developer',
      content: 'The debugging features are game-changing. It catches issues I would have missed and suggests perfect fixes.',
      rating: 5,
      avatar: 'MR'
    }
  ]

  constbenefits = [
    {
      icon: <Trending Upclass Name="w-8h-8text-cyan-400" / />,
      title: '300% Faster Development',
      description: 'AI-powered code generation accelerates development cycles'
    },
    {
      icon: <Targetclass Name ="w-8h-8text-emerald-400" / />,
      title: '80% Fewer Bugs',
      description: 'Advanced analysis and debugging reduce code issues significantly'
    },
    {
      icon: <Clockclass Name ="w-8h-8text-purple-400" / />,
      title: 'Save 20+ Hours Weekly',
      description: 'Automated code generation and optimization eliminate repetitive tasks'
    },
    {
      icon: <Shieldclass Name ="w-8h-8text-orange-400" / />,
      title: 'Enterprise Security',
      description: 'Built-in security scanning ensures code quality and compliance'
    }
  ]

  constintegrations = [
    { name: 'VS Code', icon: '💻' },
    { name: 'IntelliJ IDEA', icon: '☕' },
    { name: 'Sublime Text', icon: '📝' },
    { name: 'Atom', icon: '⚛️' },
    { name: 'Vim', icon: '📄' },
    { name: 'Git Hub', icon: '🐙' },
    { name: 'Git Lab', icon: '🦊' },
    { name: 'Bitbucket', icon: '🪣' },
    { name: 'Docker', icon: '🐳' },
    { name: 'Kubernetes', icon: '⚓' }
  ]

  const supportedLanguages = [
    'Python', 'Java Script', 'Type Script', 'Java', 'C++', 'C#', 'Go', 'Rust',
    'PHP', 'Ruby', 'Swift', 'Kotlin', 'Scala', 'R', 'MATLAB', 'SQL',
    'HTML', 'CSS', 'React', 'Vue.js', 'Angular', 'Node.js', 'Django', 'Flask'
  ]

  return (
    <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900pt-20">
      <Helmet>
        <title   />AICode AssistantPro - ZionTech Group | IntelligentCode Generation</title>
        <meta name ="description" content="Revolutionary AI-poweredcode assistantwith intelligentgeneration, debugging, andanalysis. Increasedevelopment speedby 300%. Startingat $29/month." / / />
        <meta name ="keywords" content="AIcode assistant, codegeneration, intelligentdebugging, codeanalysis, programming AI, developmenttools" / / />
        <meta name ="robots" content="index, follow" / / />
        <linkrel ="canonical" href="https://ziontechgroup.com/ai-code-assistant-pro" / />
      </Helmet>

      {/* HeroSection */}
      <sectionclassName ="relativepy-20px-4overflow-hidden" />
        <div className ="absoluteinset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
        <div className ="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]" / />
        <div className ="relative max-w-7 xlmx-autotext-center" />
          <div className ="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30" />
            <Codeclass Name ="w-4h-4" / />
            <span   />AI- Powered Code Generation</span>
          </div>
          
          <h1className ="text-4 xl sm:text-6 xl md:text-7 xl font-bold text-whitemb-8leading-tight" />
            AI Code Assistant
            <br / />
            <spanclassName ="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400bg-clip-texttext-transparent"  />Pro
            </span>
          </h1>
          
          <pclassName ="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed" />
            Transform your development workflow with AI-powered code generation, intelligent debugging, and analysis. 
            Increase development speed by 300% while reducing bugs by 80%.
          </p>
          
          <div className ="flex flex-col sm:flex-row gap-6justify-centermb-16" />
            <Link to ="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <span   />Start Free Trial</span>
              <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
            <Link to ="#pricing" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span   />View Pricing</span>
              <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
            </Link>
          </div>

          {/* Key Stats */}
          <div className ="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xlmx-auto" />
            <div className ="text-center" />
              <div className ="text-3 xl font-boldtext-cyan-400mb-2"   />300%</div>
              <div className ="text-gray-300text-sm"   />Faster Development</div>
            </div>
            <div className ="text-center" />
              <div className ="text-3 xl font-boldtext-purple-400mb-2"   />80%</div>
              <div className ="text-gray-300text-sm"   />Fewer Bugs</div>
            </div>
            <div className ="text-center" />
              <div className ="text-3 xl font-boldtext-pink-400mb-2"   />50+</div>
              <div className ="text-gray-300text-sm"   />Languages Supported</div>
            </div>
            <div className ="text-center" />
              <div className ="text-3 xl font-boldtext-emerald-400mb-2"   />25 K+</div>
              <div className ="text-gray-300text-sm"   />Active Developers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <sectionclassName ="py-20px-4relative" />
        <div className ="absolute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" / />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Why Choose Our <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />AI Code Assistant?</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              Experience the future of software development with cutting-edge AI technology that works for your team.
            </p>
          </div>
          
          <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
            {benefits.map((benefit, index) => (
              <divkey ="{index}" className="text-centergroup" />
                <div className ="flexitems-centerjustify-centerw-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xlmb-6 mx-autogroup-hover:scale-110transition-transformduration-300"  />{benefit.icon}
                </div>
                <h3className ="text-xlfont-boldtext-whitemb-4group-hover:text-cyan-400transition-colors"  />{benefit.title}
                </h3>
                <pclassName ="text-gray-300" />
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Languages Section */}
      <sectionclassName ="py-20px-4relative" />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Support for <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />50+ Languages</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              From popular languages to cutting-edge frameworks, our AI understands and generates code in any language you need.
            </p>
          </div>
          
          <div className ="grid grid-cols-2 md:grid-cols-4lg:grid-cols-6gap-4" />
            {supported Languages.map((language, index) => (
              <divkey ="{index}" className="grouptext-center" />
                <div className ="w-fullh-16 bg-white/10 backdrop-blur-lgrounded-xlflex items-centerjustify-centermx-automb-2 group-hover:bg-white/20 transition-allduration-300group-hover:scale-105" />
                  <spanclassName ="text-gray-300 group-hover:text-whitetransition-colorsfont-medium"  />{language}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <sectionclassName ="py-20 px-4 bg-gradient-to-br from-slate-800/50to-purple-900/50relative" />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Powerful Features for <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Smart Development</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              Everything you need to accelerate development with AI-powered intelligence and automation.
            </p>
          </div>
          
          <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8" />
            {features.map((feature, index) => (
              <divkey ="{index}" className="groupbg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20 transition-allduration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className ="flexitems-centerjustify-centerw-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xlmb-6 group-hover:scale-110transition-transformduration-300"  />{feature.icon}
                </div>
                <h3className ="text-2 xlfont-boldtext-whitemb-4group-hover:text-cyan-400transition-colors"  />{feature.title}
                </h3>
                <pclassName ="text-gray-300leading-relaxed" />
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <sectionclassName ="py-20px-4relative" />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Seamless <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Integrations</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              Works with your favorite development tools and platforms for a unified coding experience.
            </p>
          </div>
          
          <div className ="grid grid-cols-2md:grid-cols-5gap-8" />
            {integrations.map((integration, index) => (
              <divkey ="{index}" className="grouptext-center" />
                <div className ="w-20 h-20 bg-white/10 backdrop-blur-lgrounded-2 xlflex items-centerjustify-centermx-automb-4 group-hover:bg-white/20 transition-allduration-300group-hover:scale-110" />
                  <spanclassName ="text-3xl"   />{integration.icon}</span>
                </div>
                <div className ="text-gray-300group-hover:text-whitetransition-colors"  />{integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <sectionid ="pricing" className="py-20px-4relative" />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Simple, Transparent <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />Pricing</span>
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              Choose the plan that fits your development needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
            {pricing Plans.map((plan, index) => (
              <divkey ="{index}" className="{`relative" bg-white/10 backdrop-blur-lgrounded-2 xlp-8 bordertransition-allduration-300 hover:scale-105 hover:shadow-2 xl${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-brfrom-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} />
                {plan.popular && (
                  <div className ="absolute -top-4 left-1/2transform-translate-x-1/2" />
                    <div className ="bg-gradient-to-r from-cyan-500 to-purple-600 text-whitepx-6 py-2 rounded-fulltext-smfont-semibold"  />MostPopular
                    </div>
                  </div>
                )}
                
                <div className ="text-centermb-8" />
                  <h3className ="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                  <pclassName ="text-gray-300text-smmb-4" />{plan.description}</p>
                  <div className ="flexitems-baselinejustify-center" />
                    <spanclassName ="text-5 xlfont-boldtext-cyan-400"   />{plan.price}</span>
                    <spanclassName ="text-gray-300ml-2"   />{plan.period}</span>
                  </div>
                </div>
                
                <ulclassName ="space-y-4mb-8" />
                  {plan.features.map((feature, featureIndex) => (
                    <likey ="{featureIndex}" className="flexitems-centerspace-x-3" />
                      <Check Circleclass Name="w-5 h-5text-green-400flex-shrink-0" / />
                      <spanclassName ="text-gray-300"   />{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to ="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-whitehover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <sectionclassName ="py-20px-4relative" />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-centermb-16" />
            <h2className ="text-4 xl md:text-5 xl font-boldtext-whitemb-6" />
              Trusted by <spanclassName ="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"   />25,000+</span> Developers
            </h2>
            <pclassName ="text-xl text-gray-300 max-w-4xlmx-auto" />
              See what our customers are saying about their success with our AI code assistant.
            </p>
          </div>
          
          <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
            {testimonials.map((testimonial, index) => (
              <divkey ="{index}" className="bg-white/10 backdrop-blur-lgrounded-2 xlp-8 borderborder-white/20 hover:bg-white/20transition-allduration-300" />
                <div className ="flexitems-centermb-4" />
                  <div className ="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-fullflex items-centerjustify-centertext-whitefont-boldmr-4"  />{testimonial.avatar}
                  </div>
                  <div />
                    <div className ="font-semiboldtext-white"   />{testimonial.name}</div>
                    <div className ="text-gray-400text-sm"   />{testimonial.company}</div>
                  </div>
                </div>
                <div className ="flexmb-4" />
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Starkey ="{i}" className="w-5 h-5text-yellow-400fill-current" / />
                  ))}
                </div>
                <pclassName ="text-gray-300italic" />"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <sectionclassName ="py-20px-4relative" />
        <div className ="absolute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
        <div className ="relative max-w-7xlmx-auto" />
          <div className ="text-center" />
            <div className ="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden" />
              <div className ="relativez-10" />
                <h2className ="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-whitemb-6leading-tight" />
                  Ready to Transform Your <spanclassName ="bg-gradient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent"   />Development Workflow?</span>
                </h2>
                
                <pclassName ="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed" />
                  Join thousands of developers already coding 300% faster with our AI-powered code assistant. 
                  Start your free trial today and experience the future of software development.
                </p>
                
                <div className ="flex flex-col sm:flex-row gap-6justify-centermb-8" />
                  <Link to ="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <span   />Start Free Trial</span>
                    <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
                  </Link>
                  <Link to ="#pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <span   />View All Plans</span>
                    <Arrow Rightclass Name="w-5 h-5group-hover:translate-x-1transition-transform" />
                  </Link>
                </div>
                
                <div className ="text-white/80text-sm" />
                  <p />✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}