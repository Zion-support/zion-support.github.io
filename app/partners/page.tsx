import React from 'react'
import { Helmet ,   } from 'lucide-react'
import { Circle, Right,  } from 'lucide-react;'
const PartnersPage: React.FC = () => {'
  const partners = [{''}
      name: 'Microsoft'''}
      logo: '🏢'''}
      description: 'Strategic partnership for cloud and AI solutions'''}
      category: 'Technology''];}
    },'
    {''}
      name: 'Amazon Web Services'''}
      logo: '☁️'''}
      description: 'infrastructure and AI services collaboration'''}
      category: ''';}
    },'
    {''}
      name: 'Google '''}
      logo: '🔍'''}
      description: 'AI and machine learning platform integration'''}
      category: 'AI/ML'';}
    },'
    {''}
      name: 'IBM'''}
      logo: '💼'''}
      description: 'Enterprise AI solutions and consulting'''}
      category: 'Enterprise'';}
    },'
    {''}
      name: 'Salesforce'''}
      logo: '📊'''}
      description: 'CRM and business intelligence integration'''}
      category: 'CRM'';}
    },'
    {''}
      name: 'Oracle'''}
      logo: '🗄️'''}
      description: 'and enterprise application solutions'''}
      category: ''';}]
    }]
  ]'
''
  const benefits = ['Access to cutting-edge technology'''
    'Joint go-to-market opportunities'''
    'Technical support and training'''
    'Co-marketing and co-selling programs'''
    'Priority access to new features''']
    'Dedicated partner success manager'';]
  ]
'
  const benefits = ['Access to cutting-edge technology'''
    'Joint go-to-market opportunities'''
    'Technical support and training'''
    'Co-marketing and co-selling programs''']
    'Priority access to new features''']
    'Dedicated partner success manager'']
  return (
    <>
      <EnhancedSEO>div</EnhancedSEO>
      <div></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4">)
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md: "text-7xl font-bold text-white mb-6>
              Our
              <span className="block" bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent>
                Partners
              </span>
            </h1>
            <p>
              Join our growing ecosystem of strategic partners and unlock new opportunities
              for growth and innovation.
            </p>
            <div>button</div>
      <button>
                Become a Partner
                <Right className="w-5" h-5 ml-2 inline />
              </button>
              <button className="px-8" py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300>
                Learn More
              </button>
            </div>
          </div>
        </section>
        { /* Partners Grid */ "}"
        <section className="py-20 px-4">"
          <div className="max-w-7xl mx-auto"></div>"
            <h2 className="text-4xl font-bold text-white text-center mb-16"></h2>
              Strategic Partners;)
            </h2>")
            <div className="grid md: "grid-cols-2 lg:grid-cols-3 gap-8></div>)"}
              {partners.map((partner, _index) => (}
"}
                <><div>div</div></>
                    <div className="text-4xl" mb-4></div>{partner.logo"}</div>"
                    <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>"
                    <p>{partner.category}</p>"
                    <p>{partner.description}</p>
                  </div>
                </div>)
              Partner Benefits;)
            </h2>")
            <div className="grid md: "grid-cols-2 lg:grid-cols-3 gap-8></div>)
              {benefits.map((benefit", _index) => ("}
                <div>Circle</div>
      <Circle>"
                  </div>"
                  <span className="text-gray-300 font-medium">{benefit}</span>"
                </div>)
            </h2>")
            <div className="grid md: "grid-cols-2 lg:grid-cols-3 gap-8></div>)
              {benefits.map((benefit", _index) => (}"
                <div key="{_index}" className="flex items-center space-x-4 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30"></div>"
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0"></div>"
                    <Circle className="w-4 h-4 text-white" /></Circle>
                  </div>"
                  <span className="text-gray-300 font-medium">{benefit}</span>
                </div>)
              Ready to Partner with Us?
            </h2>"
            <p>"
              Join our partner ecosystem and unlock new opportunities for growth and innovation.
            </p>"
            <div>button</div>
      <button>
                Apply Now
                <Right className="w-5" h-5 ml-2 inline />
              </button>
              <button className="px-8" py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover: "bg-cyan-500/10 transition-all duration-300>
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>)
    </>)
  )"}
'
const page = React.lazy(() => import('./page'))
export default page
'