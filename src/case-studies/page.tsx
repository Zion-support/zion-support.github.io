import React from 'react';';
import { Helmet } from 'react-helmet-async';';
import { ArrowLeft, TrendingUp, CheckCircle } from 'lucide-react';';';
const CaseStudiesPage: React.FC = () => {;
const caseStudies = [
  // TODO: Add items
]
  // TODO: Add items
]
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 1,
      title: 'E-commerce Platform Transformation','
      company: 'TechRetail Inc.','
      industry: 'E-commerce','
      challenge: 'Low conversion rates and high customer acquisition costs','
      solution: 'AI-powered personalization and dynamic pricing optimization','
      results: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        roi: '340%','
        conversion: '+85%','
        costReduction: '-65%','
        revenue: '+$2.3 M''
      },
      image: '🛒','
      description: 'Transformed a struggling e-commerce platform using AI-driven personalization and dynamic pricing strategies.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 2,
      title: 'Financial Services Automation','
      company: 'FinTech Solutions','
      industry: 'Financial Services','
      challenge: 'Manual processes causing delays and errors in loan processing','
      solution: 'AI-powered document processing and risk assessment automation','
      results: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        roi: '280%','
        processingTime: '-80%','
        accuracy: '+95%','
        costSavings: '$1.8 M''
      },
      image: '🏦','
      description: 'Automated complex financial processes using advanced AI algorithms for document processing and risk assessment.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 3,
      title: 'Healthcare Data Analytics','
      company: 'MedTech Innovations','
      industry: 'Healthcare','
      challenge: 'Fragmented patient data and inefficient treatment planning','
      solution: 'AI-powered data integration and predictive analytics for treatment optimization','
      results: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        roi: '420%','
        patientOutcomes: '+70%','
        efficiency: '+90%','
        costSavings: '$3.2 M''
      },
      image: '🏥','
      description: 'Revolutionized healthcare data management with AI-driven analytics and predictive treatment models.''
    },
    {
  // TODO: Add properties
}
  // TODO: Add properties
}
      id: 4,
      title: 'Manufacturing Optimization','
      company: 'AutoParts Manufacturing','
      industry: 'Manufacturing','
      challenge: 'Production inefficiencies and quality control issues','
      solution: 'AI-powered predictive maintenance and quality control automation','
      results: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        roi: '310%','
        efficiency: '+75%','
        defects: '-90%','
        downtime: '-85%''
      },
      image: '🏭','
      description: 'Optimized manufacturing processes using AI for predictive maintenance and automated quality control.''
    }
  ]
  return (
  // TODO: Add parameters
)
    <React.Fragment>
<Helmet>
<title>Case Studies - Zion Tech Group
        <meta name="description"Explore our successful AI implementation case studies. See how we've helped companies achieve 300%+ ROI with our AI solutions." />"
<div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"bg-white shadow-sm border-b"
<div className="
<Link to="/"inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
<ArrowLeft className="
              Back to Home,

          </div></header>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white"max-w-7 xl mx-auto px-4 sm: px-6 lg:px-8"
<div className="
<h1 className="text-4 xl md:text-6 xl font-bold mb-6"text-xl md:text-2 xl mb-8 text-gray-200 max-w-3 xl mx-auto"
                Real results from real companies using our AI solutions,

              <p className="
                Discover how leading companies across industries have transformed their operations
                and achieved remarkable ROI with our cutting-edge AI technology.
        {/* Case Studies Grid */}
        <section className="py-16"max-w-7 xl mx-auto px-4 sm:px-6 lg:px-8"
<div className="
              {caseStudies.map((study) => (
  // TODO: Add parameters
)
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"p-8"
<div className="
<div className="text-4 xl mr-4"text-2 xl font-bold text-gray-900 mb-1"
                        <p className="
                        <p className="text-gray-500 text-sm"text-gray-600 mb-6"
                    <div className="
<h4 className="font-semibold text-gray-900 mb-2"text-gray-600 text-sm"
                    <div className="
<h4 className="font-semibold text-gray-900 mb-2"text-gray-600 text-sm"
                    <div className="
<h4 className="font-semibold text-gray-900 mb-4"grid grid-cols-2 gap-4"
<div className="
<div className="text-2 xl font-bold text-green-600"text-sm text-gray-600"
                        <div className="
<div className="text-2 xl font-bold text-blue-600"text-sm text-gray-600"
                            {Object.keys(study.results)[1].replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}'
                    <div className="
<$2 />
                        to="/contact"
                        className="bg-blue-600 hover: bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"flex items-center text-green-600"
<CheckCircle className="
<span className="text-sm font-semibold"py-16 bg-white"
<div className="
<div className="text-center mb-12"text-3 xl md:text-4 xl font-bold text-gray-900 mb-4"
                Proven Track Record,

              <p className="
                Our AI solutions deliver consistent, measurable results
            </div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8"text-center"
<div className="
                <div className="text-gray-600"text-center"
<div className="
                <div className="text-gray-600"text-center"
<div className="
                <div className="text-gray-600"text-center"
<div className="
                <div className="text-gray-600"py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
<div className="
<h2 className="text-3 xl md:text-4 xl font-bold mb-4"text-xl mb-8 text-blue-100"
              Join the companies that have transformed their business with our AI solutions

            <div className="
<$2 />
                to="/contact"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center"w-4 h-4 ml-2"
<$2 />
                to=""
                className="
                View Our Services

            </div></div>
</section></div>
</React.Fragment>
  ),
}
export default CaseStudiesPage</Link></p>;
</p></h2>
</Link></p>
</h1></Link>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></div>
</div></span>
</p></p>
</p></p>
</p></p>
</h3></h4>
</h4></h4>
</section></section>
</section>