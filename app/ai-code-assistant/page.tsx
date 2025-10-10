'use client';
import React, { useState, useCallback, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, CheckCircle, Terminal, GitBranch, Bug, FileText } from 'lucide-react';

const AICodeAssistant: React.FC = memo(() => {
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Intelligent Code Generation',
      description: 'Generate clean, efficient code from natural language descriptions with AI-powered suggestions',
      color: 'text-purple-400'
    },
    {
      icon: Bug,
      title: 'Smart Debugging',
      description: 'Automatically detect and fix bugs, suggest optimizations, and improve code quality',
      color: 'text-blue-400'
    },
    {
      icon: Terminal,
      title: 'Multi-Language Support',
      description: 'Support for 50+ programming languages including Python, JavaScript, Java, C++, and more',
      color: 'text-green-400'
    },
    {
      icon: GitBranch,
      title: 'Version Control Integration',
      description: 'Seamlessly integrate with Git, GitHub, and other version control systems',
      color: 'text-orange-400'
    }
  ];

  const pricingPlans = [
    {
      name: 'Developer',
      price: '$29',
      period: '/month',
      description: 'Perfect for individual developers',
      features: [
        'Up to 1,000 code generations/month',
        'Basic debugging assistance',
        '10 programming languages',
        'Email support',
        'VS Code extension',
        'API access'
      ],
      popular: false},
    {
      name: 'Team',
      price: '$99',
      period: '/month',
      description: 'Ideal for development teams',
      features: [
        'Up to 10,000 code generations/month',
        'Advanced debugging & optimization',
        '50+ programming languages',
        'Priority support',
        'Team collaboration features',
        'Custom integrations',
        'Code review assistance'
      ],
      popular: true},
    {
      name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited code generations',
        'AI-powered code review',
        'All programming languages',
        '24/7 dedicated support',
        'White-label solution',
        'Advanced security features',
        'Custom AI models'
      ],
      popular: false}
  ];

  const useCases = [
    {
      title: 'Code Generation',
      description: 'Generate boilerplate code, functions, and complete modules from descriptions',
      icon: Code,
      result: '90% faster'
    },
    {
      title: 'Bug Fixing',
      description: 'Automatically detect and fix common bugs and security vulnerabilities',
      icon: Bug,
      result: '95% accuracy'
    },
    {
      title: 'Code Review',
      description: 'AI-powered code review with suggestions for improvements and best practices',
      icon: FileText,
      result: '80% quality'
    },
    {
      title: 'Documentation',
      description: 'Generate comprehensive documentation and comments for your code',
      icon: FileText,
      result: '100% coverage'
    }
  ];

  const supportedLanguages = [
    'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'Ruby',
    'Swift', 'Kotlin', 'Scala', 'R', 'MATLAB', 'Perl', 'Haskell', 'Clojure', 'Elixir', 'Dart'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helme>
        <<<<title>AI</title></<<title>Code</title> Assistant - Intelligent Programming Assistant | Zion Tech Group</title>
        <meta name="description" content="Boost your coding productivity with our AI-powered code assistant. Generate code, debug issues, and improve code quality with intelligent suggestions." /></met>
        <meta name="keywords" content="AI code assistant, code generation, programming assistant, debugging, code review, developer tools" /></met>
        <meta property="og:title" content="AI Code Assistant - Intelligent Programming Assistant" /></met>
        <meta property="og:description" content="Boost your coding productivity with our AI-powered code assistant." /></met>
        <meta property="og:type" content="website" /></met>
        <meta property="og:url" content="https://ziontechgroup.com/ai-code-assistant" /></met>
      <div className="container mx-auto px-4 py-16">{/* Hero Section */}</div>
        </div><section className="text-center mb-16"></sectio>
          <div className="inline-flex items-center space-x-2 bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
            <Code className="w-4 h-4" /></Cod>
            <span></span></<<<span>AI</span></span>-Powered Development<h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6"></h1></<<<h1>AI</h1></<<h1>Code</h1> Assistant<p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">Supercharge your development workflow with our intelligent AI code assistant.</p></<<<p>Generate</p></<<p>code</p>, debug issues, and improve code quality with advanced AI technology.</p>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></a><Phone className="w-5 h-5 mr-2" >Call: (302) 464-0950</Phone><a
              href="/contact"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
            >Start Coding Smarter</a>
            </a>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="mb-16"></sectio>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-purple-500/20"></div>
              <div className="text-3 xl font-bold text-purple-400 mb-2"></div>90%<div className="text-white font-semibold mb-2"></div></<<<div>Faster</div></<<div>Development</div><div className="text-gray-400 text-sm">Generate code 90% faster than traditional methods</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20"></div>
              <div className="text-3 xl font-bold text-blue-400 mb-2"></div>50+<div className="text-white font-semibold mb-2"></div></<<<div>Languages</div></div><div className="text-gray-400 text-sm">Support for 50+ programming languages</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20"></div>
              <div className="text-3 xl font-bold text-green-400 mb-2"></div>95%<div className="text-white font-semibold mb-2"></div></<<<div>Bug</div></<<div>Detection</div><div className="text-gray-400 text-sm">Automatically detect and fix 95% of common bugs</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-orange-500/20"></div>
              <div className="text-3 xl font-bold text-orange-400 mb-2"></div>24/7<div className="text-white font-semibold mb-2"></div></<<<div>Available</div></div><div className="text-gray-400 text-sm">AI assistant available around the clock</div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Powerful</h2></<<h2>Features</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</div>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
                    <feature.icon className="w-6 h-6" /></featur>
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-white mb-2"></h>{feature.title}<p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Perfect</h2></<<h2>For</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) => (</div>
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <useCase.icon className="w-8 h-8 text-purple-400" /></useCas>
                  <div className="text-sm font-semibold text-green-400"></div>{useCase.result}<h3 className="text-lg font-semibold text-white mb-2"></h>{useCase.title}<p className="text-gray-400 text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Supported Languages */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Supported</h2></<<h2>Programming</h2> Languages<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">{supportedLanguages.map((language, index) => (</div>
              </div><div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center"></div>
                <div className="text-white font-medium">{language}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl font-bold text-white text-center mb-12"></h2></<<<h2>Simple</h2></h2>, Transparent Pricing<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>{pricingPlans.map((plan, index) => (<div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>{plan.popular && (</div>
                  </div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
                    </div>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2 xl font-bold text-white mb-2">{plan.name}</h>
                  <div className="flex items-baseline justify-center"></div>
                    <span className="text-4 xl font-bold text-white"></spa>{plan.price}<span className="text-gray-400 ml-1"></spa>{plan.period}<p className="text-gray-400 mt-2"></p>{plan.description}<ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</u>
                    </ul><li key={featureIndex} className="flex items-center space-x-3"></l>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /></CheckCircl>
                      <span className="text-gray-300">{feature}</spa>
                    </li>
                  ))}
                <a
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                  }`}
                >Get Started</a>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30"></sectio>
          <h2 className="text-3 xl font-bold text-white mb-4"></h2></<<<h2>Ready</h2></<<h2>to</h2> Code Smarter?<p className="text-xl text-gray-300 mb-8 max-w-2 xl mx-auto">Join 2,000+ developers already using our AI Code Assistant to boost their productivity.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            ></a><Phone className="w-5 h-5 mr-2" >Call: (302) 464-0950</Phon>
            </Phone>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            ></a><MessageSquare className="w-5 h-5 mr-2" >Email Us</MessageSquar>
            </MessageSquare>
          </div>
        </section>
      </div>
    </div>
  );

AICodeAssistant.displayName = 'AICodeAssistant';

export default AICodeAssistant;