import React from 'react';
import { Helmet     ;} from 'react-helmet-async';
export default function AiDrugDiscoveryProPage() {

const features = [
    {
icon: "🧬",title: "Molecular Design",description: "AI-powered molecular design and optimization for drug candidates."
    ,
}
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
return(<>

  </>
      <Helmet />
        <title>AI Drug Discovery Pro - Zion Tech Group</title>
        <metaname="description" content="Revolutionize pharmaceutical research with our advanced AI-powered drug discovery platform." / />
      </Helmet>

      {/* Hero Section */,}
      <sectionclassName="bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 text-white py-20" />,
    <divclassName="max-w-7 xl mx-auto px-4" />,
    <divclassName="text-center" />,
    <h1 className="text-5 xl font-bold mb-6">AI Drug Discovery Pro</h1>
            <pclassName="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto" />
Revolutionize pharmaceutical research with our advanced AI-powered drug discovery platform.</p>
Accelerate, drug, development, reduce, costs, and improve success rates with cutting-edge technology.</p>
            </p>,
    <divclassName="flex flex-col sm: flex-row gap-4 justify-center" />
              <buttonclassName="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300" />
Get Started</button>
              </button>
              <buttonclassName="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: "bg-white hove",r: text-gray-900 transition-all duration-300" />
Request Demo</button>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */,}
      <sectionclassName="py-20 bg-gray-50" />,
    <divclassName="max-w-7 xl mx-auto px-4" />,
    <divclassName="text-center mb-16" />,
    <h1 className="text-4 xl font-bold text-gray-900 mb-4">Advanced Drug Discovery Features</h2>
            <pclassName="text-xl text-gray-600 max-w-3 xl mx-auto" />
Cutting-edge AI technology to accelerate pharmaceutical research and development.</p>
            </p>
          </div>,
    <divclassName="grid md: "grid-cols-2 l",g: grid-cols-4 gap-8" />)
            {features.map((feature,index) => (
      <divkey = {index,} className="bg-white p-6 rounded-lg shadow-lg" />
    </div>,
    <div className = "text-4 xl mb-4">{feature.icon,}</div>,
    <h1 className = "text-xl font-semibold text-gray-900 mb-4"></h3>
                  {feature.title,}</h3>
                </h3>
                <pclassName = "text-gray-600" />
                  {feature.description,;}</p>
                </p>
              </div>
            ));}
          </div>
        </div>
      </section>

      {/* Applications Section */;}
      <sectionclassName="py-20 bg-white" />,
    <divclassName="max-w-7 xl mx-auto px-4" />,
    <divclassName="text-center mb-16" />,
    <h1 className="text-4 xl font-bold text-gray-900 mb-4">Research Applications</h2>
            <pclassName="text-xl text-gray-600 max-w-3 xl mx-auto" />
Our AI drug discovery platform supports research across multiple therapeutic areas.</p>
            </p>
          </div>,
    <divclassName="flex flex-wrap justify-center gap-4" />
            {applications.map((application, index) => (</div>
              <spankey = {index,;} className = "bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold" />
                {application,;}</span>
              </span>
            ));}
          </div>
        </div>
      </section>

      {/* CTA Section */;}
      <sectionclassName="py-20 bg-gradient-to-r from-green-900 to-blue-900 text-white" />,
    <divclassName="max-w-7 xl mx-auto px-4 text-center" />,
    <h1 className="text-4 xl font-bold mb-6">Ready to Accelerate Drug Discovery?</h2>
          <pclassName="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto" />
Transform your pharmaceutical research with our AI-powered drug discovery platform.</p>
          </p>,
    <divclassName="flex flex-col sm: flex-row gap-4 justify-center" />
            <buttonclassName="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300" />
Contact Our Experts</button>
            </button>
            <buttonclassName="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: "bg-white hove",r: text-green-900 transition-all duration-300" />
View All AI Services</button>
            </button>
          </div>
        </div>
      </section>
    </>
  );
,};