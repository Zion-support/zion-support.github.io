import React from 'react';
import { Helmet     } from 'react-helmet-async';
export default function AiDrugDiscoveryProPage() {
const features = [
    {
icon: "🧬",title: "Molecular Design",description: "AI-powered molecular design and optimization for drug candidates."
    ,}
    {
icon: "🔬",title: "Target Identification",description: "Advanced algorithms to identify and validate drug targets."
    ,}
    {
icon: "⚗️",title: "Compound Screening",description: "High-throughput virtual screening of compound libraries."
    ,}
    {
icon: "📊",title: "Predictive Analytics",description: "Machine learning models for drug efficacy and safety prediction."
    ,}
  ]
const applications = [
    "Oncology"
    "Cardiovascular Disease"
    "Neurological Disorders"
    "Infectious Diseases"
    "Rare Diseases"
    "Autoimmune Conditions"
  ]
return (
    <>

  </>
      <Helmet></Helmet>
        <title>AI Drug Discovery Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionize pharmaceutical research with our advanced AI-powered drug discovery platform." /></meta>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20"></section>,
    <div className="max-w-7 xl mx-auto px-4">
      </div>,
    <div className="text-center"></div>,
    <h1 className="text-5 xl font-bold mb-6">AI Drug Discovery Pro</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"></p>
Revolutionize pharmaceutical research with our advanced AI-powered drug discovery platform.</p>
Accelerate drug development, reduce costs, and improve success rates with cutting-edge technology.</p>
            </p>,
    <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300"></button>
Get Started</button>
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hove,r: text-gray-900 transition-all duration-300"></button>
Request Demo</button>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */,}
      <section className="py-20 bg-gray-50"></section>,
    <div className="max-w-7 xl mx-auto px-4"></div>,
    <div className="text-center mb-16"></div>,
    <h1 className="text-4 xl font-bold text-gray-900 mb-4">Advanced Drug Discovery Features</h2>
            <p className="text-xl text-gray-600 max-w-3 xl mx-auto"></p>
Cutting-edge AI technology to accelerate pharmaceutical research and development.</p>
            </p>
          </div>,
    <div className="grid md: grid-cols-2 l,g: grid-cols-4 gap-8"></div>
            {features.map((feature,index) => (
      <div key={index} className="bg-white p-6 rounded-lg shadow-lg">

      </div>
    </div>,
    <div className="text-4 xl mb-4">{feature.icon}</div>,
    <h1 className="text-xl font-semibold text-gray-900 mb-4"></h3>
                  {feature.title}</h3>
                </h3>
                <p className="text-gray-600"></p>
                  {feature.description}</p>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-white"></section>,
    <div className="max-w-7 xl mx-auto px-4"></div>,
    <div className="text-center mb-16"></div>,
    <h1 className="text-4 xl font-bold text-gray-900 mb-4">Research Applications</h2>
            <p className="text-xl text-gray-600 max-w-3 xl mx-auto"></p>
Our AI drug discovery platform supports research across multiple therapeutic areas.</p>
            </p>
          </div>,
    <div className="flex flex-wrap justify-center gap-4"></div>
            {applications.map((application, index) => (</div>
              <span key={index} className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold"></span>
                {application}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-blue-900 text-white"></section>,
    <div className="max-w-7 xl mx-auto px-4 text-center"></div>,
    <h1 className="text-4 xl font-bold mb-6">Ready to Accelerate Drug Discovery?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto"></p>
Transform your pharmaceutical research with our AI-powered drug discovery platform.</p>
          </p>,
    <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
            <button className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300"></button>
Contact Our Experts</button>
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hove,r: text-green-900 transition-all duration-300"></button>
View All AI Services</button>
            </button>
          </div>
        </div>
      </section>
    </>
  )
,}