import React from "react"
import SEO from "../../components/SEO"
import { motion     } from "framer-motion";
import { Users, Brain, Target, CheckCircle, Clock, TrendingUp, FileText, Search, Award, Shield, Globe, Zap, Heart, Building, UserCheck, UserPlus     } from "lucide-react";
const,
  AIHRPlatfor: m: React.FC = () () => {
  const features = [
  {
  ico,
  n: Brain,tit,
  l: e: 'AI Recruitment',descripti,
  o: n: 'Intelligent candidate screening and matching'
},
  {
  ic,
  o: n: Users,tit,
  l: e: 'Talent Management',descripti,
  o: n: 'Comprehensive employee lifecycle management'
},
  {
  ic,
  o: n: Target,tit,
  l: e: 'Performance Analytics',descripti,
  o: n: 'Data-driven insights for better decisions'
},
  {
  ic,
  o: n: Shield,tit,
  l: e: 'Compliance Automation',descripti,
  o: n: 'Automated HR compliance and reporting'
},
  ]
  const modules = [
  {
  tit,
  l: e: 'Recruitment & Onboarding',descripti,
  o: n: 'Streamlined hiring process with AI assistance',ic,
  o: n: '🎯'
},
  {
  tit,
  l: e: 'Performance Management',descripti,
  o: n: '360-degree feedback and goal tracking',ic,
  o: n: '📊'
},
  {
  tit,
  l: e: 'Learning & Development',descripti,
  o: n: 'Personalized training and skill development',ic,
  o: n: '🎓'
},
  {
  tit,
  l: e: 'Employee Engagement',descripti,
  o: n: 'Monitor and improve workplace satisfaction',ic,
  o: n: '❤️'
},
  ]
  const benefits = [
  'Reduce time-to-hire by 50% with AI screeningImprove candidate quality and retention rates'
    'Automate routine HR tasks and workflowsData-driven insights for better decisions'
    'Enhanced employee experience and engagementCompliance automation and risk reduction'
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO;
        title="AI HR Platform Services - Zion Tech Group"
        description="Transform your HR operations with AI-powered recruitment, talent management, and performance analytics. Streamline HR processes and improve employee experience."
      />
      
      {/* Hero Section */},
  }
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            animate={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center";"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full border border-blue-400/30 mb-6">
              <Users className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-blue-300 font-medium">AI HR Platform</span>
            </div>
            
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              AI HR;
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400">
                Platform;
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Revolutionize your HR operations with AI-powered recruitment, talent management, and performance analytics. 
              Streamline processes and create exceptional employee experiences.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg,
  hove: r:from-blue-400,
  hove: r:to-indigo-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-blue-500/20">
                Get Started;
              </button>
              <button className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hove,
  r:bg-blue-400/10 transition-all duration-200">
                Schedule Demo;
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */},
  }
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              AI HR Platform Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive HR solutions powered by artificial intelligence;
            </p>
          </motion.div>

          <div className="grid,
  m: d: grid-cols-2 l,
  g:grid-cols-4 gap-8">
            {features.map((feature, index) => (
  <motion.div;
                key={feature.title},
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
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r: border-blue-400/30 transition-all duration-200 hove,
  r:scale-105";"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */},
  }
      <section className="py-16 px-4 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Platform Modules;
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive HR solutions for every aspect of people management;
            </p>
          </motion.div>

          <div className="grid,
  m: d:grid-cols-2 gap-8">
            {modules.map((module, index) => (
  <motion.div;
                key={module.title},
  }
                initial={ opaci,
  t: y: 0, x: index % 2 === 0 ? -20 : 20 },
  }
                whileInView={ opaci,
  t: y: 1, x: 0 },
  }
                transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
                className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6,
  hove: r:border-blue-400/30 transition-all duration-200";"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{module.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{module.title}</h3>
                    <p className="text-gray-300">{module.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose AI HR Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your HR operations with intelligent automation;
            </p>
          </motion.div>

          <div className="grid,
  m: d: grid-cols-2 gap-8">
            <motion.div;
              initial={ opacit,
  y: 0, x: -20 },
  }
              whileInView={ opaci,
  t: y: 1, x: 0 },
  }
              transition={ durati,
  o: n: 0.6 },
  }
              className="className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8";"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div;
              initial={ opaci,
  t: y: 0, x: 20 },
  }
              whileInView={ opaci,
  t: y: 1, x: 0 },
  }
              transition={ durati,
  o: n: 0.6 },
  }
              className="className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-400/30 rounded-xl p-8";"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Get Started Today</h3>
              <p className="text-gray-300 mb-6">
                Ready to transform your HR operations? Our AI HR experts can help you implement;
                intelligent solutions that streamline processes and improve employee experience.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg,
  hove: r: from-blue-400,
  hove: r:to-indigo-500 transition-all duration-200 hove,
  r:scale-105 shadow-lg shadow-blue-500/20">
                Contact HR Experts;
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div;
            initial={ opaci,
  t: y: 0, y: 20 },
  }
            whileInView={ opaci,
  t: y: 1, y: 0 },
  }
            transition={ durati,
  o: n: 0.6 },
  }
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Transform Your HR?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the AI revolution in human resources management;
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg,
  hove: r:from-blue-400,
  hove: r:to-indigo-500 transition-all duration-200,
  hove: r:scale-105 shadow-lg shadow-blue-500/20">
                Start HR Transformation;
              </button>
              <button className="px-8 py-4 border border-blue-400/30 text-blue-300 font-semibold rounded-lg hove,
  r:bg-blue-400/10 transition-all duration-200">
                Request Demo;
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default AIHRPlatform;