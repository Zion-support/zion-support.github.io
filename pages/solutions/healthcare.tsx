import React from 'react'
import Layout from '../../components/Layout'
import { Heart, Shield, Database, Users, Activity, CheckCircle, ArrowRight } from 'lucide-react
const features = [
  {
    icon: Heart,'
    title: 'Patient Data Management',''
    description: 'Secure, HIPAA-compliant systems for managing patient records and medical data.''
  },
  {
    icon: Shield,'
    title: 'Healthcare Security',''
    description: 'Advanced cybersecurity solutions designed specifically for healthcare environments.''
  },
  {
    icon: Database,'
    title: 'Electronic Health Records',''
    description: 'Custom EHR solutions that integrate seamlessly with existing healthcare workflows.''
  },
  {
    icon: Users,'
    title: 'Telemedicine Platforms',''
    description: 'Remote consultation and patient monitoring systems for modern healthcare delivery.''
  },
  {
    icon: Activity,'
    title: 'Health Analytics',''
    description: 'AI-powered analytics for population health management and predictive insights.''
  }]
];

const solutions = ['
  'HIPAA-Compliant Cloud Infrastructure',''
  'Electronic Health Record (EHR) Systems',''
  'Telemedicine & Remote Patient Monitoring',''
  'Healthcare Data Analytics & AI',''
  'Medical Device Integration',''
  'Patient Portal Development',''
  'Healthcare Mobile Applications',''
  'Interoperability Solutions (FHIR)',''
  'Healthcare Cybersecurity',''
  'Population Health Management'']
];

export default function HealthcareSolutionsPage() {
  return (
    <Layout;'
      title="Healthcare Solutions - Zion Tech Group"
      description="Transform healthcare delivery with our HIPAA-compliant solutions, EHR systems, telemedicine platforms, and healthcare analytics."
    >
</Layout>"
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"
</div>"
        <section className="relative py-20 overflow-hidden">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="max-w-4xl mx-auto text-center">"
</div>"
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">"
</h1>"
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">"
</span>
                </span>
              </h1>"
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"
</p>
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>"
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium flex items-center justify-center">"
</button>"
                  <ArrowRight className="w-5 h-5 ml-2" />"
</ArrowRight>
                </button>"
                <button className="border border-gray-600 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium">"
</button>
                </button>
              </div>
            </div>
          </div>
        </section>"
        <section className="py-20">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="text-center mb-16">"
</div>"
              <h2 className="text-4xl font-bold text-white mb-4">"
</h2>
              </h2>"
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
</p>
              </p>
            </div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
</div>"
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-colors">"
</div>"
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">"
</div>"
                    <feature.icon className="w-6 h-6 text-white" />"
</feature>
                  </div>"
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>"
                  <p className="text-gray-300">{feature.description}</p>"
                </div>
            </div>
          </div>
        </section>"
        <section className="py-20 bg-gray-800/30">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="max-w-4xl mx-auto">"
</div>"
              <h2 className="text-3xl font-bold text-white text-center mb-12">"
</h2>
              </h2>"
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">"
</div>"
                  <div key={index} className="flex items-center space-x-3">"
</div>"
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />"
</CheckCircle>"
                    <span className="text-gray-300 text-lg">{solution}</span>"
                  </div>
              </div>
            </div>
          </div>
        </section>"
        <section className="py-20">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="bg-gray-800/50 rounded-2xl p-12">"
</div>"
              <div className="text-center mb-12">"
</div>"
                <h2 className="text-4xl font-bold text-white mb-4">"
</h2>
                </h2>"
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
</p>
                </p>
              </div>
              "
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">"
</div>"
                <div className="text-center">"
</div>"
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">"
</div>"
                    <Shield className="w-8 h-8 text-white" />"
</Shield>
                  </div>"
                  <h3 className="text-xl font-semibold text-white mb-2">HIPAA Compliant</h3>"
                  <p className="text-gray-300">Built to meet all HIPAA requirements for healthcare data protection.</p>"
                </div>"
                <div className="text-center">"
</div>"
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">"
</div>"
                    <Database className="w-8 h-8 text-white" />"
</Database>
                  </div>"
                  <h3 className="text-xl font-semibold text-white mb-2">Secure Infrastructure</h3>"
                  <p className="text-gray-300">Enterprise-grade security measures to protect sensitive healthcare data.</p>"
                </div>"
                <div className="text-center">"
</div>"
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">"
</div>"
                    <Activity className="w-8 h-8 text-white" />"
</Activity>
                  </div>"
                  <h3 className="text-xl font-semibold text-white mb-2">Real-time Monitoring</h3>"
                  <p className="text-gray-300">Continuous monitoring and alerting for security and performance.</p>"
                </div>
              </div>
            </div>
          </div>
        </section>"
        <section className="py-20">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center">"
</div>"
              <h2 className="text-4xl font-bold text-white mb-6">"
</h2>
              </h2>"
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">"
</p>
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>"
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium">"
</button>
                </button>"
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-medium">"
</button>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>)"