import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Settings, BarChart3, Users, Zap, Target, ArrowRight, CheckCircle, TrendingUp } from 'lucide-react';

const AdvancedAutomationSolutionsShowcase2025: React.FC = () => {
  const solutions = [
    {
      title: 'Intelligent Process Automation',
      description: 'AI-powered automation that learns and adapts to optimize business processes continuously.',
      features: [
        'Self-learning algorithms',
        'Process optimization',
        'Error reduction by 99.9%',
        'Real-time adaptation'
      ],
      metrics: {
        efficiency: '500%',
        accuracy: '99.9%',
        cost: '-80%'
      },
      icon: Bot,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Autonomous Operations Management',
      description: 'Fully autonomous business operations that run without human intervention.',
      features: [
        '24/7 autonomous operation',
        'Predictive maintenance',
        'Resource optimization',
        'Self-healing systems'
      ],
      metrics: {
        uptime: '99.99%',
        efficiency: '1000%',
        savings: '90%'
      },
      icon: Settings,
      color: 'from-pink-600 to-red-600'
    },
    {
      title: 'Smart Analytics & Insights',
      description: 'Advanced analytics that provide actionable insights and predictive intelligence.',
      features: [
        'Predictive analytics',
        'Real-time insights',
        'Automated reporting',
        'Intelligent recommendations'
      ],
      metrics: {
        insights: '10x',
        accuracy: '95%',
        speed: 'Real-time'
      },
      icon: BarChart3,
      color: 'from-red-600 to-orange-600'
    },
    {
      title: 'Human-AI Collaboration',
      description: 'Seamless integration between human workers and AI systems for optimal productivity.',
      features: [
        'Augmented decision making',
        'Intelligent assistance',
        'Workflow optimization',
        'Skill enhancement'
      ],
      metrics: {
        productivity: '300%',
        satisfaction: '95%',
        learning: '5x'
      },
      icon: Users,
      color: 'from-orange-600 to-yellow-600'
    }
  ];

  const industries = [
    {
      name: 'Manufacturing',
      description: 'Complete factory automation with predictive maintenance and quality control',
      benefits: ['Zero-defect production', 'Predictive maintenance', 'Supply chain optimization', 'Energy efficiency'],
      roi: '400%'
    },
    {
      name: 'Healthcare',
      description: 'Automated patient care, diagnosis assistance, and treatment optimization',
      benefits: ['Faster diagnosis', 'Treatment optimization', 'Patient monitoring', 'Resource allocation'],
      roi: '600%'
    },
    {
      name: 'Finance',
      description: 'Automated trading, risk management, and fraud detection systems',
      benefits: ['Real-time trading', 'Risk mitigation', 'Fraud prevention', 'Compliance automation'],
      roi: '800%'
    },
    {
      name: 'Retail',
      description: 'Intelligent inventory management, customer service, and demand forecasting',
      benefits: ['Inventory optimization', 'Customer personalization', 'Demand prediction', 'Supply chain efficiency'],
      roi: '350%'
    }
  ];

  const caseStudies = [
    {
      company: 'Global Manufacturing Corp',
      challenge: 'Manual quality control causing 15% defect rate',
      solution: 'AI-powered visual inspection system',
      results: '99.9% accuracy, 90% cost reduction, 500% efficiency gain',
      roi: '2,500%'
    },
    {
      company: 'Healthcare Network',
      challenge: 'Manual patient scheduling causing delays',
      solution: 'Intelligent scheduling and resource optimization',
      results: '95% efficiency gain, 80% wait time reduction, 99% patient satisfaction',
      roi: '1,800%'
    },
    {
      company: 'Financial Services Inc',
      challenge: 'Manual fraud detection missing 20% of cases',
      solution: 'AI-powered real-time fraud detection',
      results: '99.9% detection rate, 90% false positive reduction, 24/7 monitoring',
      roi: '3,200%'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Advanced Automation Solutions 2025
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionary automation technologies that transform businesses with intelligent, self-optimizing systems
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              🤖 99.9% Accuracy
            </span>
            <span className="bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              ⚡ 1000% Efficiency
            </span>
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              💰 2,500% ROI
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {solution.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(solution.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-white">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <Link
                  to={`/automation-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Industry Applications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-3">{industry.name}</h4>
                <p className="text-gray-300 mb-4 text-sm">{industry.description}</p>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-green-400 mb-2">{industry.roi} ROI</div>
                  <div className="text-sm text-gray-400">Average Return</div>
                </div>
                <ul className="space-y-2">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-400 text-sm">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-white mb-2">{study.company}</h4>
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Challenge:</div>
                  <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Solution:</div>
                  <p className="text-gray-300 text-sm mb-4">{study.solution}</p>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Results:</div>
                  <p className="text-gray-300 text-sm mb-4">{study.results}</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400">{study.roi}</div>
                  <div className="text-sm text-gray-400">ROI Achieved</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Automate Your Future?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already achieving unprecedented results with our advanced automation solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/automation-solutions"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group"
              >
                Explore Solutions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/roi-calculator"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center group"
              >
                Calculate Your ROI
                <TrendingUp className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvancedAutomationSolutionsShowcase2025;