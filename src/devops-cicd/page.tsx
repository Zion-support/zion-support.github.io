import React from 'react';';
import { Link } from 'react-router-dom';';
import Navigation from '../components/Navigation';';
import Footer from '../components/Footer';';
import { Settings, Zap, Shield, BarChart, CheckCircle, Star, Code,  Settings,  Zap,  BarChart } from 'lucide-react';';';
const DevOpsCICDPage: React.FC = () => {;
const features = [],
  return (
  // TODO: Add parameters
)
    {// TODO: Add content
  }
  ico,
  n: Settings,
      titl,
  e: 'CI/CD Pipelines','
      descriptio,
  n: 'Automated build, test, and deployment pipelines','
      benefit,
  s: ['Automated testing', 'Continuous deployment', 'Quality gates']'
    },
      ico,
  n: Zap,
      titl,
  e: 'Infrastructure as Code','
      descriptio,
  n: 'Manage infrastructure through code and automation','
      benefit,
  s: ['Version control', 'Reproducible environments', 'Cost optimization']'
      ico,
  n: BarChart,
      titl,
  e: 'Monitoring & Analytics','
      descriptio,
  n: 'Comprehensive monitoring and performance analytics','
      benefit,
  s: ['Real-time monitoring', 'Performance metrics', 'Alerting']'
    }
  ]
  return (
  // TODO: Add parameters
)
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"container mx-auto px-4 py-16 pt-24"
<section className="
<h1 className="text-5 xl md: text-6 xl font-bold text-white mb-6 cyber-text-3 d neon-pulse""
          <p className="
// Streamlined Development and Deployment,
          </p>""text-lg text-gray-300 max-w-4 xl mx-auto mb-8 leading-relaxed"
            Accelerate your development lifecycle with our comprehensive DevOps and CI/CD solutions.
            Automate your workflows, improve quality, and deploy faster with confidence.
          <div className="
<$2 />
              href="/contact"cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
// >
//               Get Started
          </a>
              href=" className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"w-5 h-5"
              +1 302 464 0950,
          </div></section>"
        <section className="mb-16"
          < className="text-3 xl,">"
</h2>
// DevOps Solutions,
          </h2>"
          < className="grid grid-cols-1,$2 />"
  lg:grid-cols-4 gap-8">""
          < key={index} className="
  hover:scale-105 transition-all duration-300">""
                <div className=""
                  <feature.icon className=""
                <h3 className="
                  {feature.title}
                </h3>""text-gray-300 mb-6 text-center text-sm leading-relaxed"
                  {feature.description}"
                <ul className="space-y-2""
          <li key={benefitIndex} className=""
                      <CheckCircle className="
                      {benefit}
                  ))}
                </ul></main>
<Footer/ />
</div>
  )
}
export default DevopsCicdPage;