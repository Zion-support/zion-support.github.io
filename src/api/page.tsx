import { CheckCircle } from 'lucide-react';


import { Link } from 'react-router-dom';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
const Pagetsx: React.FC = () => {
  const _features = [];
  return (
    {icon: Users,
    title: 'Advanced Features',
      description: 'Cutting-edge solutions powered by artificial intelligence and machine learning',
      benefits: ['Improved efficiency', 'Better results', 'Cost savings']
    },
    {icon: TrendingUp,
    title: 'Performance Optimization',
      description: 'Optimized performance and scalability for enterprise-grade applications',
      benefits: ['Faster processing', 'Better scalability', 'Enhanced reliability']
    },
    {icon: Shield,
    title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance and data protection',
      benefits: ['Data protection', 'Compliance', 'Secure operations']

    }
  ]
  return (<div className="min-h-screen bg-gray-900 text-white"></div>"
      <Helmet></Helmet>
        <title>tsx - Zion Tech Group</title>""
        <meta name="description" content="Advanced tsx solutions powered by AI and cutting-edge technology" /></Helmet>"
      <Navigation /></Navigation>""
      <main className="pt-20"></main>"
        {/* Hero Section */}""
        <section className="py-20 px-4"></section>""
          <div className="max-w-6xl mx-auto text-center"></div>""
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"></h1>"
              tsx;
            </h1>""
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>"
              Advanced tsx solutions powered by AI and cutting-edge technology;
            </p>""
            <div className="flex flex-col,""
  sm:flex-row gap-4 justify-center"></div>""
              <a href="/contact" className="bg-cyan-500 text-white px-8 py-3 rounded-lg,""
  hover:bg-cyan-600 transition-colors"></a>"
                Get Started;
              </a>""
              <a href="/demo" className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg,"
  hover:bg-cyan-500,""
  hover:text-white transition-colors"></a>"
                View Demo;
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4"></section>"
          <div className="max-w-6xl mx-auto"></div>"
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"
              {_features.map((feature, index) => (}
                <div key={index} className="bg-gray-800 rounded-xl p-6 text-center"></div>"
                  <feature.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />"
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>"
                  <p className="text-gray-300 mb-4">{feature.description}</p>"
                  <ul className="text-sm text-gray-400 space-y-1"></ul>"
                    {feature.benefits.map((benefit, idx) => (}
                      <li key={idx} className="flex items-center"></li>"
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />"

                        {benefit}
                      </li>)
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}""
        <section className="py-16 px-4 bg-gray-800"></section>""
          <div className="max-w-4xl mx-auto text-center"></div>""
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>""
            <p className="text-gray-300 mb-8">Contact us today for a free consultation and customized solution</p>""
            <a href="/contact" className="bg-cyan-500 text-white px-8 py-3 rounded-lg,""
  hover:bg-cyan-600 transition-colors"></a>"
              Contact Us;
            </a>
          </div>
        </section>
      </main>
      <Footer /></div>
  )
}
export default Pagetsx;""




export default ApiPage;


