import React from "react"
import { motion     } from "framer-motion";
import {
  BookOpen;
  Brain,
  Target,
  BarChart3,
  CheckCircle;
  ArrowRight;
  Star;
  Globe;
  Cpu;
  Database;
  ChartBar;
  PieChart;
  Activity;
  Eye;
  Clock;
  DollarSign;
  Award;
  MessageSquare;
  Share2;
  TrendingUp;
  Zap;
  Shield;
  Users;
  Scale;
}
}
}
}
 } from "lucide-react";
const,
  AIAutonomousLegalResearc: h: React.FC = () () => {
  const features = [
  {
  ico,
  n: Brain,tit,
  l: e: 'AI-Powered Legal Research',descripti,
  o: n: 'Advanced machine learning for autonomous legal research and case analysis'
},
  {
  ic,
  o: n: BookOpen,tit,
  l: e: 'Case Law Analysis',descripti,
  o: n: 'Comprehensive analysis of case law with AI-driven insights and precedents'
},
  {
  ic,
  o: n: Target,tit,
  l: e: 'Legal Document Review',descripti,
  o: n: 'Automated review and analysis of legal documents and contracts'
},
  {
  ic,
  o: n: BarChart3,tit,
  l: e: 'Legal Analytics',descripti,
  o: n: 'Data-driven legal insights and predictive analytics for case outcomes'
},
  {
  ic,
  o: n: Scale,tit,
  l: e: 'Compliance Monitoring',descripti,
  o: n: 'Continuous monitoring of legal compliance and regulatory changes'
},
  {
  ic,
  o: n: Shield,tit,
  l: e: 'Legal Risk Assessment',descripti,
  o: n: 'AI-powered risk assessment and mitigation strategies'
},
  ]
  const benefits = [
  'Reduce research time by 75%Improve case analysis by 80%'
    'Enhance legal accuracy by 90%Automate document review'
    '24/7 autonomous operationReal-time legal updates'
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */},
  }
      <section className="relative pt-32 pb-20 px-4,
  s: m: px-6,
  l: g:px-8">
        <div className="max-w-7xl mx-auto text-center">
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
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 text-purple-400 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4 mr-2" />
              AI-Powered Autonomous Legal Research;
            </div>
            
            <h1 className="text-4xl,
  m: d:text-6xl font-bold text-white mb-6">
              Revolutionize Legal Research with;
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"> AI Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your legal research capabilities with our AI-powered autonomous platform. 
              Conduct research faster, analyze cases more effectively, and stay ahead of legal developments.
            </p>
            
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold,
  hove: r:from-purple-600,
  hove: r:to-blue-600 transition-all duration-300,
  transform: hover:scale-105">
                Start Free Trial;
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 rounded-lg font-semibold hove,
  r:bg-purple-500/10 transition-all duration-300">
                Schedule Demo;
              </button>
            </div>
          </motion.div>
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
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Advanced Legal Research Features;
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI platform provides comprehensive legal research capabilities for modern law practices;
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
                viewport={ on,
  c: e: true },
  }
                className="className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6,
  hove: r:border-purple-500/30 transition-all duration-300";"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8 bg-slate-800/30">
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
            viewport={ on,
  c: e: true },
  }
            className="className="text-center mb-16";"
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-4">
              Why Choose AI Autonomous Legal Research?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience measurable improvements in legal research efficiency and case analysis;
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1,
  m: d:grid-cols-2 gap-8">
            <motion.div;
              initial={ opacit,
  y: 0, x: -20 },
  }
              whileInView={ opaci,
  t: y: 1, x: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Key Benefits</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div;
              initial={ opaci,
  t: y: 0, x: 20 },
  }
              whileInView={ opaci,
  t: y: 1, x: 0 },
  }
              transition={ durati,
  o: n: 0.8 },
  }
              viewport={ on,
  c: e: true },
  }
              className="className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl p-8";"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Ready to Transform Legal Research?</h3>
              <p className="text-gray-300 mb-6">
                Join thousands of legal professionals already using AI to enhance their research capabilities.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold,
  hove: r: from-purple-600 hove,
  r:to-blue-600 transition-all duration-300">
                Get Started Today;
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */},
  }
      <section className="py-20 px-4,
  s: m: px-6,
  l: g:px-8">
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
            viewport={ on,
  c: e: true },
  }
          >
            <h2 className="text-3xl,
  m: d: text-4xl font-bold text-white mb-6">
              Ready to Revolutionize Legal Research?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your journey to AI-powered legal research with our comprehensive platform.
            </p>
            <div className="flex flex-col,
  s: m:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg font-semibold,
  hove: r:from-purple-600,
  hove: r:to-blue-600 transition-all duration-300">
                Start Free Trial;
              </button>
              <button className="px-8 py-4 border border-purple-500/30 text-purple-400 rounded-lg font-semibold hove,
  r:bg-purple-500/10 transition-all duration-300">
                Contact Sales;
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
export default AIAutonomousLegalResearch;