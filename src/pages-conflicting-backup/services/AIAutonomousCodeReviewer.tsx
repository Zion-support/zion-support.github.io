import, React, from "react";
import { motion } from "framer-motion";
import { ;
  Code,;
  CheckCircle,;
  Shield,;
  Zap,;
  ArrowRight,;
  Play,;
  Settings,;
  Target,;
  Cpu,;
  Activity,;
  Sparkles,;
  Search,;
  GitBranch,;
  Terminal,;
  Workflow,;
  Rocket,;
  RefreshCw,;
  Lock,;
  Eye,;
  AlertTriangle,;
  Clock,;
  Users,;
  BarChart3,;
  TrendingUp,;
  Globe,;
  Building,;
  DollarSign,;
  Network,;
  Key,;
  Fingerprint,;
  Monitor,;
  Server,;
  Database,;
  Smartphone,;
  Box,;
  Layers,;
  GitBranch,;
  GithubGitlabBitbucket;
} from "lucide-react";
const AIAutonomousCodeReviewer = () => {
  const features = [;
    {
      icon: Code,title: 'AI-Powered, Code, Analysis',description: 'Advanced, machine, learning algorithms, that, understand code, patternsdetect, bugsand suggest improvements';
    },;
    {
      icon: Shield,title: 'Security, Vulnerability, Detection',description: 'Automated, scanning, for security flaws, SQL, injectionXSSand, other critical vulnerabilities';
    },;
    {
      icon: Zap,title: 'Performance Optimization',description: 'Identify, performance, bottlenecksmemory leaksand, inefficient, algorithms in, your, codebase';
    },;
    {
      icon: GitBranch,title: 'Git Integration',description: 'Seamless, integration, with GitHub, GitLabBitbucketand, other, version control systems';
    },;
    {
      icon: Monitortitl,;
    e: 'Real-time Monitoring'descriptio,;
  n: 'Continuous, code, quality monitoring, with, instant notifications, and, detailed reports';
    },;
    {
      icon: Users,title: 'Team Collaboration'descriptio,;
  n: 'Built-in, code, review workflowscommentsand, approval, systems for, development, teams';
    }
,  ],;
  const benefits = [;
    'Reduce, code, review time, by, 70%Catch 90% of, bugs, before production',;
    'Improve, code, quality by 40%Accelerate, development, cycles''Reduce, technical, debtEnsure consistent, coding, standards';
,  ],;
  const services = [;
    {
      icon: Server,title: 'Static, Code, Analysis',description: 'Comprehensive, static, analysis for, multiple, programming languages, including, Python, JavaScript, Java, C++Goand Rust';
    },;
    {
      icon: Workflow,title: 'Automated, Review, Workflows',description: 'Customizable, review, processesautomated approvalsand, integration, with CI/CD pipelines';
    },;
    {
      icon: Box,title: 'Container, Security, Scanning',description: 'Docker, and, container security, analysisvulnerability, scanningand compliance checking';
    },;
    {
      icon: Database,title: 'Database, Code, Review'descriptio,;
  n: 'SQL, query, optimizationdatabase schema, analysisand, performance tuning recommendations';
    }
,  ],;
  const useCases = [;
    {
      industry: 'Software Development'descriptio,;
  n: 'Automated, code, reviews for, development, teamsensuring quality, and, consistency across projects';
    },;
    {
      industry: 'DevOps & CI/CD'descriptio,;
  n: 'Integration, with, automated pipelines, for, continuous code, quality, monitoring and, deployment, gates';
    };
    {
      industry: 'Security Teams'descriptio,;
  n: 'Proactive, security, scanning and, vulnerability, detection in, application, code';
    }{
      industry: 'Code, Quality, Management'descriptio,;
  n: 'Maintaining, high, coding standards, and, reducing technical, debt, in large codebases';
    };
,  ];
  const pricing = [;
    {
      name: 'Starter',price: '$299',period: '/month',description: 'Perfect, for, small development teams',features: [;
        'Up, to, 5 developersBasic, code, analysis',;
        'Security, vulnerability, scanningGitHub integration''Email, supportBasic, reporting';
    ,  ]cta: 'Start, Free, Trial'popula,;
  r: false;
    };
    {
      name: 'Professional',price: '$799',period: '/month',description: 'Ideal, for, growing development teams',features: [;
        'Up, to, 25 developersAdvanced, AI, analysis',;
        'Multi-language supportCI/CD integration',;
        'Priority, supportAdvanced, analytics''Custom, rules, engineTeam collaboration tools';
    ,  ]cta: 'Start, Free, Trial'popula,;
  r: true;
    };
    {
      name: 'Enterprise',price: '$1,999',;
      period: '/month',description: 'For, large, organizations and enterprises',features: [;
        'Unlimited, developersCustom, AI models',;
        'On-premise, deploymentDedicated, support',;
        'Custom, integrationsAdvanced, security features''Compliance, reportingSLA, guarantees';
    ,  ]cta: 'Contact Sales'popula,;
  r: false;
    }
  ];
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50o0/10 to-cyan-50o0/10"></div>;
        <div className="relative max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <div className="inline-flex items-center px-4 py-2 bg-blue-50o0/10, border, border-blue-50o0/20 rounded-full text-blue-40o0 text-sm font-medium mb-6">;
              <Code className="w-4 h-4 mr-2" />;
              AI-Powered, Code, Review;
            </div>;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              AI Autonomous;
              <span className="bg-gradient-to-r from-blue-40o0 to-cyan-50o0 bg-clip-text text-transparent"> Code Reviewer</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto mb-8">;
              Revolutionize, your, code review, process, with AI-powered, analysis, that catches bugs;
              improves security, and, maintains, code quality automatically.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-cyan-50o0 text-white font-semibold rounded-lg hover:from-blue-60o0 hove,;
    r:to-cyan-60o0 transition-all duration-20o0, flex, items-center justify-center">;
                <Play className="w-5 h-5 mr-2" />;
                Start, Free, Trial;
              </button>;
              <button className="px-8 py-4, border, border-blue-50o0/30 text-blue-40o0 font-semibold rounded-lg hove,;
  r: bg-blue-50o0/10 transition-all duration-20o0, flex, items-center justify-center">;
                <Settings className="w-5 h-5 mr-2" />;
                Schedule Demo;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Intelligent, Code, Review Features;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Our AI-powered, platform, provides comprehensive, code, analysis, security, scanningand, quality improvement recommendations.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
            {features.map((featureindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover:border-blue-50o0/30 transition-all duration-20o0";
              >;
                <div className="w-12 h-12 bg-gradient-to-r from-blue-50o0 to-cyan-50o0 rounded-lg, flex, items-center justify-center mb-4">;
                  <feature.icon className="w-6 h-6 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>;
                <p className="text-gray-30o0">{feature.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Services Section */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Comprehensive, Code, Review Services;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              From, static, analysis to, security, scanning, we, provide, end-to-end, code, review;
              solutions, for, modern development teams.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
            {services.map((serviceindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  x: index % 2 === 0 ? -20 : 20 }};
                whileInView={{ opacity: 1,;
  x: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 hover:border-blue-50o0/30 transition-all duration-20o0";
              >;
                <div className="flex items-start space-x-4">;
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-50o0 to-cyan-50o0 rounded-lg, flex, items-center justify-center flex-shrink-0">;
                    <service.icon className="w-6 h-6 text-white" />;
                  </div>;
                  <div>;
                    <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>;
                    <p className="text-gray-30o0">{service.description}</p>;
                  </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Benefits Section */}
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Transform, Your, Development Process;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Experience, measurable, improvements in, code, quality, security, and, development, efficiency.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">;
            <div className="space-y-6">;
              {benefits.slice(0o3).map((benefitindex) => (;
                <motion.div;
                  key={index}
                  initial={{ opacity: 0,;
  x: -20 }};
                  whileInView={{ opacity: 1,;
  x: 0 }}
                  transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                  className="flex items-start space-x-3";
                >;
                  <CheckCircle className="w-6 h-6 text-blue-40o0 mt-1 flex-shrink-0" />;
                  <span className="text-gray-30o0 text-lg">{benefit}</span>;
                </motion.div>;
              ))}
            </div>;
            <div className="space-y-6">;
              {benefits.slice(3).map((benefitindex) => (;
                <motion.div;
                  key={index + 3}
                  initial={{ opacity: 0,;
  x: 20 }};
                  whileInView={{ opacity: 1,;
  x: 0 }}
                  transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                  className="flex items-start space-x-3";
                >;
                  <CheckCircle className="w-6 h-6 text-blue-40o0 mt-1 flex-shrink-0" />;
                  <span className="text-gray-30o0 text-lg">{benefit}</span>;
                </motion.div>;
              ))}
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Pricing Section */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Transparent Pricing;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Choose, the, plan that, fits, your team, size, and development needs.;
              All, plans, include a 14-day, free, trial.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">;
            {pricing.map((planindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className={`relative bg-slate-80o0/50, border, rounded-xl p-8 ${;
                  plan.popular;
                    ? 'border-blue-50o0/50 bg-blue-50o0/5';
                    : 'border-slate-70o0/50';
                }`}
              >;
                {plan.popular && (;
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">;
                    <span className="bg-blue-50o0 text-white px-4 py-2 rounded-full text-sm font-semibold">;
                      Most Popular;
                    </span>;
                  </div>;
                )}
;
                <div className="text-center mb-8">;
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>;
                  <p className="text-gray-40o0 mb-4">{plan.description}</p>;
                  <div className="mb-4">;
                    <span className="text-4xl font-bold text-white">{plan.price}</span>;
                    <span className="text-gray-40o0">{plan.period}</span>;
                  </div>;
                </div>;
                <ul className="space-y-3 mb-8">;
                  {plan.features.map((featurefeatureIndex) => (;
                    <li key={featureIndex} className="flex items-center space-x-3">;
                      <CheckCircle className="w-5 h-5 text-blue-40o0 flex-shrink-0" />;
                      <span className="text-gray-30o0">{feature}</span>;
                    </li>;
                  ))}
                </ul>;
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-20o0 ${
                  plan.popular;
                    ? 'bg-gradient-to-r from-blue-50o0 to-cyan-50o0 text-white hover: from-blue-60o0 hove,;
    r:to-cyan-60o0';
                    : 'bg-slate-70o0 text-white hove,;
  r:bg-slate-60o0';
                }`}>;
                  {plan.cta}
                </button>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Use, Cases, Section */}
      <section className="py-20">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Industry Applications;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Our, AI, code review, solutions, adapt to, various, industries, providing tailored;
              analysis, and, recommendations for, your, specific development needs.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-4 gap-6">;
            {useCases.map((useCaseindex) => (;
              <motion.div;
                key={index}
                initial={{ opacity: 0,;
  y: 20 }};
                whileInView={{ opacity: 1,;
  y: 0 }}
                transition={{ duration: 0.5dela,;
  y: index * 0.1 }}
                className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 text-center hover:border-blue-50o0/30 transition-all duration-20o0";
              >;
                <div className="w-16 h-16 bg-gradient-to-r from-blue-50o0 to-cyan-50o0 rounded-full, flex, items-center justify-center mx-auto mb-4">;
                  <Target className="w-8 h-8 text-white" />;
                </div>;
                <h3 className="text-xl font-semibold text-white mb-2">{useCase.industry}</h3>;
                <p className="text-gray-30o0 text-sm">{useCase.description}</p>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Market, Information, Section */}
      <section className="py-20 bg-slate-80o0/30">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Market Insights & ROI;
            </h2>;
            <p className="text-xl text-gray-30o0 max-w-2xl mx-auto">;
              Understand, the, market landscape, and, potential return, on, investment for AI-powered, code, review solutions.;
            </p>;
          </motion.div>;
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6">;
            <motion.div;
              initial={{ opacit,;
    y: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.5dela,;
  y: 0.1 }}
              className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 text-center";
            >;
              <BarChart3 className="w-12 h-12 text-blue-40o0 mx-auto mb-4" />;
              <h3 className="text-2xl font-bold text-white mb-2">$2.8B</h3>;
              <p className="text-gray-30o0">Global, Market, Size 20o24</p>;
            </motion.div>;
            ;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.5dela,;
  y: 0.2 }}
              className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 text-center";
            >;
              <TrendingUp className="w-12 h-12 text-green-40o0 mx-auto mb-4" />;
              <h3 className="text-2xl font-bold text-white mb-2">24.3%</h3>;
              <p className="text-gray-30o0">Annual, Growth, Rate</p>;
            </motion.div>;
            ;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.5dela,;
  y: 0.3 }}
              className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 text-center";
            >;
              <DollarSign className="w-12 h-12 text-yellow-40o0 mx-auto mb-4" />;
              <h3 className="text-2xl font-bold text-white mb-2">30o0%</h3>;
              <p className="text-gray-30o0">Average ROI</p>;
            </motion.div>;
            ;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.5dela,;
  y: 0.4 }}
              className="bg-slate-80o0/50, border, border-slate-70o0/50 rounded-xl p-6 text-center";
            >;
              <Clock className="w-12 h-12 text-purple-40o0 mx-auto mb-4" />;
              <h3 className="text-2xl font-bold text-white mb-2">70%</h3>;
              <p className="text-gray-30o0">Time Savings</p>;
            </motion.div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50o0/10 to-cyan-50o0/10">;
        <div className="max-w-4xl mx-auto px-4 sm: px-6 lg:px-8 text-center">;
          <motion.div;
            initial={{ opacit,;
    y: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Start, Your, AI Code, Review, Journey Today;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8">;
              Join, thousands, of development, teams, worldwide that, use, our AI-powered;
              code, review, platform to, improve, code quality, and, accelerate development.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <button className="px-8 py-4 bg-gradient-to-r from-blue-50o0 to-cyan-50o0 text-white font-semibold rounded-lg hover:from-blue-60o0 hove,;
    r:to-cyan-60o0 transition-all duration-20o0, flex, items-center justify-center">;
                Start, Free, Trial;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </button>;
              <button className="px-8 py-4, border, border-blue-50o0/30 text-blue-40o0 font-semibold rounded-lg hover: bg-blue-50o0/10 transition-all duration-20o0">;
                Contact Sales;
              </button>;
            </div>;
            <div className="mt-8 text-center">;
              <p className="text-gray-40o0 mb-4">Ready, to, get started? Contact, our, team: </p>;
              <div className="flex flex-col s,;
    m:flex-row gap-4 justify-center text-sm text-gray-30o0">;
                <div className="flex items-center justify-center space-x-2">;
                  <span>📱</span>;
                  <span>+1, 30o2, 464 0o950</span>;
                </div>;
                <div className="flex items-center justify-center space-x-2">;
                  <span>✉️</span>;
                  <span>kleber@ziontechgroup.com</span>;
                </div>;
                <div className="flex items-center justify-center space-x-2">;
                  <span>🌐</span>;
                  <span>http,;
  s://ziontechgroup.com</span>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );
};
export, default, AIAutonomousCodeReviewer;
;