import React from 'react':;
import { Helmet } from 'react-helmet-async':
;
export default function Page() {;
return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><Helmet><title>Page - Zion Tech Group</title><meta name="description" content="Learn more about page" /></Helmet><div className="container mx-auto px-4 py-16"><div className="text-center"><h1 className="text-4xl font-bold text-white mb-4">Page</h1><p className="text-gray-300 text-xl mb-8">Learn more about page</p><div className="max-w-4xl mx-auto"><div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700"><h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2><p className="text-gray-300 mb-6">This page is currently under development. We're working hard to bring you the best experience.
              </p><div className="flex justify-center space-x-4"><a ;
href="/":;
className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors duration-300">Go Home
                </a><a ;
href="/contact":;
className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300">Contact Us
                </a></div></div>))}
        </div>{/* Case Studies */}
        <div className="space-y-16">{caseStudies.map((study, index) =>(
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"><div className="grid grid-cols-1 lg:grid-cols-2 gap-8"><div><div className="flex items-center mb-4"><Star className="w-6 h-6 text-yellow-400 mr-2" /><span className="text-sm text-gray-300">{study.industry}</span></div><h3 className="text-2xl font-bold text-white mb-4">{study.title}</h3><p className="text-gray-300 mb-6"><strong>Client:</strong>{study.client}
                  </p><div className="mb-6"><h4 className="text-lg font-semibold text-white mb-2">Challenge</h4><p className="text-gray-300">{study.challenge}</p></div><div className="mb-6"><h4 className="text-lg font-semibold text-white mb-2">Solution</h4><p className="text-gray-300">{study.solution}</p></div><div><h4 className="text-lg font-semibold text-white mb-2">Results</h4><ul className="space-y-2">{study.results.map((result, resultIndex) =>(
                        <li key={resultIndex} className="flex items-center text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 mr-2" />{result}
                        </li>))}
                    </ul></div></div><div className="flex items-center justify-center"><div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center"><span className="text-gray-400">Case Study Image</span></div></div></div></div>))}
        </div>{/* CTA Section */}
        <div className="text-center mt-16"><h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2><p className="text-gray-300 mb-8">Let's discuss how we can help transform your business with our AI and IT solutions.
          </p><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link ;
to="/contact":;
className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">Get Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" /></Link><Link ;
to="/services":;
className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors">View All Services
            </Link></div></div></div></div>);
};
;
export default CaseStudiesPage:
  </div>
  </div>
  </div>
  </div>
  </div>