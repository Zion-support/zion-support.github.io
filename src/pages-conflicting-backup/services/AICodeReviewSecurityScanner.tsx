import React from "react"
import { motion     } from "framer-motion";
import { Code, Shield, Eye, AlertTriangle, CheckCircle, ArrowRight, Brain, Zap, Target, Globe, Lock, Clock, DollarSign, Star, Rocket, Cpu, Cloud, Database, Network, FileText, Search, Filter, Activity, Sparkles, Award, GitFork, Atom, Leaf, Gamepad2, Coins, Satellite, MessageCircle, Server, ShoppingCart, Smartphone, Users, Eye as EyeIcon, Heart, Building, Car, Plane, Ship, Truck, CreditCard, PiggyBank, Calculator, PieChart, LineChart, Activity as ActivityIcon, TrendingDown, AlertCircle, CheckCircle2, XCircle, Info, HelpCircle, Settings, RefreshCw, Download, Upload, Share2, ExternalLink, ArrowUpRight, ChevronRight, ChevronDown, ChevronUp, Minus, Plus, Equal, Divide, Percent, Hash, AtSign, Hash as HashIcon, AtSign as AtSignIcon, GitBranch, GitCommit, GitPullRequest, GitMerge, GitCompare, GitBranch as GitBranchIcon, GitCommit as GitCommitIcon, GitPullRequest as GitPullRequestIcon, GitMerge as GitMergeIcon, GitCompare as GitCompareIcon     } from "lucide-react";
const AICodeReviewSecurityScanner = () () => {
  const features = [
  {
  ic,
  o: n: Brain,tit,
  l: e: 'AI-Powered Vulnerability Detection',descripti,
  o: n: 'Advanced machine learning algorithms that analyze code patterns, identify security vulnerabilities, and suggest remediation strategies.'
      benefi,
  t: s: [['Automated vulnerability scanningPattern recognition', 'False positive reductionContinuous learning'],
  ],
  },
  {
  ic,
  o: n: Shield,tit,
  l: e: 'Comprehensive Security Coverage',descripti,
  o: n: 'Cover all major security vulnerabilities including OWASP Top 10, CWE, and industry-specific security requirements.'
      benefi,
  t: s: [['OWASP Top 10 coverageCWE compliance', 'Industry standardsCustom rule sets'],
  ],
  },
  {
  ic,
  o: n: Code,tit,
  l: e: 'Multi-Language Support',descripti,
  o: n: 'Support for all major programming languages including Python, JavaScript, Java, C#, Go, Rust, and more.'
      benefi,
  t: s: [['25+ programming languagesFramework-specific rules', 'Language-specific patternsCross-language analysis'],
  ],
  },
  {
  ic,
  o: n: Eye,tit,
  l: e: 'Real-time Code Analysis',descripti,
  o: n: 'Continuous monitoring of code changes with instant security feedback during development and CI/CD pipelines.',benefi,
  t: s: [['Real-time scanningCI/CD integration', 'Instant feedbackAutomated blocking'],
  ],
  },
  {
  ic,
  o: n: AlertTriangle,tit,
  l: e: 'Intelligent Risk Scoring',descripti,
  o: n: 'AI-driven risk assessment that prioritizes vulnerabilities based on severity, exploitability, and business impact.'
      benefi,
  t: s: [['Risk-based prioritizationBusiness context awareness', 'Exploitability assessmentImpact analysis'],
  ],
  },
  {
  ic,
  o: n: GitBranch,tit,
  l: e: 'Git Integration & Workflow',descripti,
  o: n: 'Seamless integration with Git workflows, pull request reviews, and automated security checks.'
      benefi,
  t: s: [['Pull request scanningBranch protection', 'Automated reviewsWorkflow integration'],
  ],
  },
  ]

  const pricing = [
  {
  na,
  m: e: 'Developer',pri,
  c: e: '$99',peri,
  o: d: '/month',descripti,
  o: n: 'Perfect for individual developers',featur,
  e: s: [
  'Up to 10 repositoriesBasic security scanning'
        'Standard vulnerability databaseEmail support'
        'Basic reporting'
]
      ct,
  a: 'Get Started',popul,
  a: r: false;
},
  {
  na,
  m: e: 'Team',pri,
  c: e: '$299',peri,
  o: d: '/month',descripti,
  o: n: 'Ideal for development teams',featur,
  e: s: [
  'Up to 50 repositoriesAdvanced AI scanning'
        'Full vulnerability databasePriority support'
        'Custom rule setsAPI access'
        'CI/CD integration'
]
      ct,
  a: 'Start Free Trial',popul,
  a: r: true;
},
  {
  na,
  m: e: 'Enterprise',pri,
  c: e: '$999',peri,
  o: d: '/month',descripti,
  o: n: 'For large organizations',featur,
  e: s: [
  'Unlimited repositoriesCustom AI models'
        'White-label solutions24/7 dedicated support'
        'Advanced integrationsCustom workflows'
        'On-premise deployment'
]
      ct,
  a: 'Contact Sales',popul,
  a: r: false;
},
  ]
  const useCases = [
  {
  tit,
  l: e: 'Application Development',descripti,
  o: n: 'Integrate security scanning into your development workflow to catch vulnerabilities before they reach production.',ic,
  o: n: Code,benefi,
  t: s: [['Early vulnerability detectionDeveloper education', 'Secure coding practicesQuality assurance'],
  ],
  },
  {
  tit,
  l: e: 'DevOps & CI/CD',descripti,
  o: n: 'Automate security checks in your CI/CD pipeline to ensure code quality and security at every stage.',ic,
  o: n: GitBranch,benefi,
  t: s: [['Automated security gatesPipeline integration', 'Quality gatesDeployment safety'],
  ],
  },
  {
  tit,
  l: e: 'Code Review Process',descripti,
  o: n: 'Enhance your code review process with AI-powered security analysis and automated vulnerability detection.',ic,
  o: n: Eye,benefi,
  t: s: [['Automated security reviewsPull request scanning', 'Reviewer assistanceQuality improvement'],
  ],
  },
  {
  tit,
  l: e: 'Compliance & Auditing',descripti,
  o: n: 'Meet regulatory requirements and maintain security standards with comprehensive code security auditing.',ic,
  o: n: Shield,benefi,
  t: s: [['Regulatory complianceSecurity audits', 'DocumentationRisk assessment'],
  ],
  },
  ]

  const vulnerabilityTypes = [
  {
  tit,
  l: e: 'SQL Injection',descripti,
  o: n: 'Prevent unauthorized database access through malicious SQL queries.',ic,
  o: n: Database,exampl,
  e: s: [['Parameterized queriesInput validation', 'ORM usageDatabase permissions'],
  ],
  },
  {
  tit,
  l: e: 'Cross-Site Scripting (XSS)',descripti,
  o: n: 'Protect against malicious script injection in web applications.',ic,
  o: n: Globe,exampl,
  e: s: [['Output encodingContent Security Policy', 'Input sanitizationHTTPS enforcement'],
  ],
  },
  {
  tit,
  l: e: 'Authentication Bypass',descripti,
  o: n: 'Secure authentication mechanisms and prevent unauthorized access.',ic,
  o: n: Lock,exampl,
  e: s: [['Multi-factor authenticationSession management', 'Password policiesAccess controls'],
  ],
  },
  {
  tit,
  l: e: 'Insecure Dependencies',descripti,
  o: n: 'Identify and update vulnerable third-party libraries and dependencies.',ic,
  o: n: Package,exampl,
  e: s: [['Dependency scanningVulnerability databases', 'Update automationLicense compliance'],
  ],
  },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */},
  }
      <section className="relative overflow-hidden py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center";"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              AI-Powered Code Security;
            </div>
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              AI Code Review;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Security Scanner;
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Protect your applications with AI-powered code security scanning that detects;
              vulnerabilities, enforces secure coding practices, and integrates seamlessly;
              with your development workflow.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <motion.button;
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg,
  hove: r: from-green-600,
  hove: r:to-emerald-600 transition-all duration-200 flex items-center justify-center";"
              >
                Start Free Trial;
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button;
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg,
  hove: r:bg-gray-800 transition-all duration-200 flex items-center justify-center";"
              >
                Schedule Demo;
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vulnerability Types Section */},
  }
      <section className="py-16 px-4,
  s: m: px-6,
  l: g:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-12";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Comprehensive Security Coverage;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI scanner detects all major types of security vulnerabilities with;
              industry-leading accuracy and minimal false positives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-8">
            {vulnerabilityTypes.map((vulnType, index) => (
  <motion.div;
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700,
  hove: r:border-green-500/50 transition-all duration-300";"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <vulnType.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{vulnType.title}</h3>
                    <p className="text-gray-300 mb-3">{vulnType.description}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">Prevention,
  Method: s:</h4>
                  <ul className="space-y-1">
                    {vulnType.examples.map((example, idx) => (
  <li key={idx} className="flex items-center text-sm text-gray-400">
                        <Minus className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {example},
  }
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Advanced AI-Powered Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with comprehensive security analysis to deliver;
              accurate vulnerability detection and actionable remediation guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1,
  m: d:grid-cols-2 l,
  g:grid-cols-3 gap-8">
            {features.map((feature, index) => (
  <motion.div;
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700,
  hove: r:border-green-500/50 transition-all duration-300";"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
  <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit},
  }
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Transparent Pricing;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your development team's security needs. 
              All plans include our core AI-powered security scanning features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 m,
  d:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
  <motion.div;
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className={`relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border ${
  plan.popular;
                    ? 'border-green-500/50 ring-2 ring-green-500/20' 
                    : 'border-gray-700'
} hov,
  e: r:border-green-500/50 transition-all duration-300`}
              >
                {plan.popular && (
  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular;
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
  <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature},
  }
                    </li>
                  ))}
                </ul>

                <motion.button;
                  whileHover={ sca,
  l: e: 1.02 },
  }
                  whileTap={ sca,
  l: e: 0.98 },
  }
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
  plan.popular;
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white,
  hove: r: from-green-600,
  hove: r:to-emerald-600'
                      : 'bg-gray-700 text-white hove,
  r:bg-gray-600'
}`}
                >
                  {plan.cta},
  }
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Development Workflow Integration;
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI Code Review Security Scanner integrates seamlessly with your existing;
              development tools and workflows to ensure security at every stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 m,
  d:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
  <motion.div;
                key={index},
  }
                initial={ opaci,
  t: y: 0, y: 20 },
  }
                whileInView={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700,
  hove: r:border-green-500/50 transition-all duration-300";"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{useCase.title}</h3>
                    <p className="text-gray-300">{useCase.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, idx) => (
  <li key={idx} className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit},
  }
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-gradient-to-r from-green-900/20 to-emerald-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div;
            initial={ opacit,
  y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.8 },
  }
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-6">
              Ready to Secure Your Code?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join leading development teams that trust our AI-powered platform to;
              detect vulnerabilities and maintain secure coding practices.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <motion.button;
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg,
  hove: r: from-green-600,
  hove: r:to-emerald-600 transition-all duration-200 flex items-center justify-center";"
              >
                Start Free Trial;
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
              <motion.button;
                whileHover={ scal,
  e: 1.05 },
  }
                whileTap={ sca,
  l: e: 0.95 },
  }
                className="className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg,
  hove: r: bg-gray-800 transition-all duration-200 flex items-center justify-center";"
              >
                Contact Sales;
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default AICodeReviewSecurityScanner;