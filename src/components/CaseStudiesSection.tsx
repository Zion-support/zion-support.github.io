import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  ArrowRight,
  Star,
  CheckCircle
} from "lucide-react"
const caseStudies = [
  {
    id: 1,tit,
  l: e: "AI-Powered Supply Chain Optimization",compa,
  n: y: "Global Manufacturing Corp",indust,
  r: y: "Manufacturing",
      challen,
  g: e: "Inefficient supply chain causing 30% cost overruns and delays",
      soluti,
  o: n: "Implemented AI-driven demand forecasting and route optimization",
      resul,
  t: s: [
      "Reduced costs by 25%"
      "Improved delivery times by 40%",
      "Increased efficiency by 35%"
    ],
    ima,
  g: e: "http,
  s://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400",col,
  o: r: "from-blue-500 to-cyan-500"
  }, {
    id: 2,tit,
  l: e: "Quantum Computing Financial Modeling",compa,
  n: y: "FinTech Innovations Ltd",indust,
  r: y: "Financial Services",
      challen,
  g: e: "Complex financial models taking days to compute",
      soluti,
  o: n: "Deployed quantum computing algorithms for portfolio optimization",
      resul,
  t: s: [
      "1000x faster computation"
      "Improved accuracy by 60%",
      "Reduced risk by 45%"
    ],
    ima,
  g: e: "http,
  s://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",col,
  o: r: "from-purple-500 to-pink-500"
  }, {
    id: 3,tit,
  l: e: "Blockchain Supply Chain Transparency",compa,
  n: y: "Organic Foods Inc",indust,
  r: y: "Food & Beverage",
      challen,
  g: e: "Lack of transparency in food supply chain",
      soluti,
  o: n: "Implemented blockchain-based tracking system",
      resul,
  t: s: [
      "100% supply chain visibility"
      "Reduced fraud by 99%",
      "Improved customer trust by 80%"
    ],
    ima,
  g: e: "http,
  s://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=400",col,
  o: r: "from-green-500 to-emerald-500"
  },
  ]
export function CaseStudiesSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          viewport={ on,
  c: e: true },
  }
          transition={ durati,
  o: n: 0.6 },
  }
        >
          <h2 className="text-4xl,
  m: d: text-5xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve
            remarkable results through innovative technology solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 l,
  g:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden,
  hove: r: border-blue-500/50 transition-all duration-300,
  hove: r:shadow-lg,
  hove: r:shadow-blue-500/25"
              initial={ opacit,
  y: 0, y: 30 },
  }
              whileInView={ opaci,
  t: y: 1, y: 0 },
  }
              viewport={ on,
  c: e: true },
  }
              transition={ durati,
  o: n: 0.6, del,
  a: y: index * 0.1 },
  }
            >
              <div className="relative">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 bg-slate-800/80 text-white text-xs font-semibold rounded-full">
                    {study.industry}
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Challen,
  g: e:</h4>
                <p className="text-gray-600 text-sm mb-4">{study.challenge}</p>

                <h4 className="font-semibold text-gray-900 mb-2">Soluti,
  o: n:</h4>
                <p className="text-gray-600 text-sm">{study.solution}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Resul,
  t: s:</h4>
                <ul className="space-y-2">
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                  <Star className="h-4 w-4 text-yellow-500 mr-1" />
                  <span>5.0</span>
                  <span className="mx-2">•</span>
                  <span>Verified Results</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={ opaci,
  t: y: 0, y: 20 },
  }
          whileInView={ opaci,
  t: y: 1, y: 0 },
  }
          viewport={ on,
  c: e: true },
  }
          transition={ durati,
  o: n: 0.6, del,
  a: y: 0.4 },
  }
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their
              businesses with our innovative technology solutions.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600,
  hove: r:bg-gray-100 rounded-lg font-medium transition-colors duration-200"
              >
                Start Your Project
                <TrendingUp className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center px-6 py-3 border border-white text-white,
  hove: r:bg-white hove,
  r:text-blue-600 rounded-lg font-medium transition-colors duration-200"
              >
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}