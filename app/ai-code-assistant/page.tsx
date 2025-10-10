'use client',
import React, { useState, useCallback, memo } from 'react',
import { Helmet } from 'react-helmet-async';
import { Code, CheckCircle, Terminal, GitBranch, Bug, FileText } from 'lucide-react',

const [isLoaded, setIsLoaded] = useState(false),

  React.useEffect(() => {}
    setIsLoaded(true),
  }, []),

const features = [
      title: 'Intelligent Code Generation',
      description: 'Generate clean, efficient code from natural language descriptions with AI-powered suggestions',
      color: 'text-purple-400',
    },
      title: 'Smart Debugging',
      description: 'Automatically detect and fix bugs, suggest optimizations, and improve code quality',
      color: 'text-blue-400',
    },
      title: 'Multi-Language Support',
      description: 'Support for 50+ programming languages including Python, JavaScript, Java, C++, and more',
      color: 'text-green-400',
    },
      title: 'Version Control Integration',
      description: 'Seamlessly integrate with Git, GitHub, and other version control systems',
      color: 'text-orange-400',
    }
  ],

const pricingPlans = [
    {}
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
    {
    {}
>>>>>>> origin/merge-error-fixes
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
    {
      name: 'Enterprise'
    {}
      name: 'Enterprise',
>>>>>>> origin/merge-error-fixes
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
  ],

const useCases = [
    {}
      title: 'Code Generation',
      description: 'Generate boilerplate code, functions, and complete modules from descriptions',
      icon: Code,
      result: '90% faster',
    },
    {}
      title: 'Bug Fixing',
      description: 'Automatically detect and fix common bugs and security vulnerabilities',
      icon: Bug,
      result: '95% accuracy',
    },
    {}
      title: 'Code Review',
      description: 'AI-powered code review with suggestions for improvements and best practices',
      icon: FileText,
      result: '80% quality',
    },
    {}
      title: 'Documentation',
      description: 'Generate comprehensive documentation and comments for your code',
      icon: FileText,
      result: '100% coverage',
    }
  ],

const supportedLanguages = [
    'Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'C#', 'Go', 'Rust', 'PHP', 'Ruby',
    'Swift', 'Kotlin', 'Scala', 'R', 'MATLAB', 'Perl', 'Haskell', 'Clojure', 'Elixir', 'Dart'
  ],

      <Helmet>
        <title>AI Code Assistant - Intelligent Programming Assistant | Zion Tech Group</title>
        <meta name="description" content="Boost your coding productivity with our AI-powered code assistant. Generate code, debug issues, and improve code quality with intelligent suggestions." />
        <meta name="keywords" content="AI code assistant, code generation, programming assistant, debugging, code review, developer tools" />
        <meta property="og: title" content="AI Code Assistant - Intelligent Programming Assistant" />
        <meta property="og:description" content="Boost your coding productivity with our AI-powered code assistant." />
          </p>

              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            </a>
          </div>,
        </section>,
,
        {/* Key Benefits */}
        <section className="mb-16">
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-blue-500/20"></div>
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div><div className="text-white font-semibold mb-2">Languages</div><div className="text-gray-400 text-sm">Support for 50+ programming languages</div>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg border border-green-500/20"></div>
              <div className="text-3xl font-bold text-green-400 mb-2">95%</div><div className="text-white font-semibold mb-2">Bug Detection</div><div className="text-gray-400 text-sm">Automatically detect and fix 95% of common bugs</div>
            </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mb-16">
                <div className="flex items-start space-x-4">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-white font-semibold mb-2">Available</div>
              <div className="text-gray-400 text-sm">AI assistant available around the clock</div>,
            </div>,
          </div>,
        </section>,
,
        {/* Features */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover: border-purple-500/50 transition-all duration-300">,
                <div className="flex items-start space-x-4">,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Powerful Features</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{features.map((feature, index) => (</section>
              </div><div key={index} className="bg-slate-800/30 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-start space-x-4"></div>
                  <div className={`p-3 rounded-lg bg-slate-700 ${feature.color}`}></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div></div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3><p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-16">
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}<h3 className="text-lg font-semibold text-white mb-2">{useCase.title}<p className="text-gray-400 text-sm">{useCase.description}</p>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">,
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover: border-purple-500/50 transition-all duration-300">,
                <div className="flex items-center justify-between mb-4">,
                  <useCase.icon className="w-8 h-8 text-purple-400" />,
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3>
                <p className="text-gray-400 text-sm">{useCase.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
          <h2 className="text-3xl font-bold text-white text-center mb-12">Perfect For</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{useCases.map((useCase, index) => (</section>
              <div key={index} className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"></div>
                <div className="flex items-center justify-between mb-4"></div>
                  <useCase.icon className="w-8 h-8 text-purple-400" />
                  <div className="text-sm font-semibold text-green-400">{useCase.result}</div><h3 className="text-lg font-semibold text-white mb-2">{useCase.title}</h3><p className="text-gray-400 text-sm">{useCase.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </div>
            ))}
          </div>
        </section>

        {/* Supported Languages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Supported Programming Languages</h2><div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">{supportedLanguages.map((language, index) => (</section>
              </div><div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {supportedLanguages.map((language, index) => (}
              <div key={index} className="bg-slate-800/50 p-4 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center">
>>>>>>> origin/merge-error-fixes
                <div className="text-white font-medium">{language}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16">
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
          <h2 className="text-3xl font-bold text-white text-center mb-12">Simple, Transparent Pricing</h2>
              <div key={index} className={`relative bg-slate-800/50 p-8 rounded-lg border ${plan.popular ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700'} hover:border-purple-500/50 transition-all duration-300`}>
                {plan.popular && (}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                    </div>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                  href="/contact"
                  }`}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-12 rounded-lg border border-purple-500/30">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Code Smarter?</h2><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Join 2,000+ developers already using our AI Code Assistant to boost their productivity.</p>
          </p>
              href="tel:+13024640950"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
          </div>
        </section>
      </div>
    </div>
  ),
}),

AICodeAssistant.displayName = 'AICodeAssistant',
,
export default AICodeAssistant,