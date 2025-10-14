import React from 'react';
';import {Helmet} from'react-helmet-async';
;import {} from react-router-dom';
';import {Circle, Right} from'lucide-react';
;const PartnersPage: "React.FC  = () => {"}""  const partners = [{}]
      name: "Microsoft'","''      logo:"'🏢'","''      description: "'Strategic partnership for cloud and AI solutions'","''      category:"'Technology'"},'"'
'    {}
      name: "'Amazon Web Services'","'
'      logo:"'☁️'","'
'      description: "'infrastructure and AI services collaboration'","'
'      category:"'"},'"'
'    {}
      name: "'Google '","'
'      logo:"'🔍'","'
'      description: "'AI and machine learning platform integration'","'
'      category:"'AI/ML'"},'"''    {}
      name: "'IBM'","''      logo:"'💼'","''      description: "'Enterprise AI solutions and consulting'","''      category:"'Enterprise'"},'"'
'    {}
      name: "'Salesforce'","'
'      logo:"'📊'","'
'      description: "'CRM and business intelligence integration'","'
'      category:"'CRM'"},'"''    {}
      name: "'Oracle'","''      logo:"'🗄️'","''      description: "'and enterprise application solutions'","''      category:"'"}'"';'  ];
const benefits  = ['Access to cutting-edge technology',"]''    'Joint go-to-market opportunities',"''    'Technical support and training',"''    'Co-marketing and co-selling programs',"''    'Priority access to new features',"''    'Dedicated partner success manager"'''  ]
  return <React.Fragment>
      <Helmet>
        </Helmet>
        </Helmet>
        <title>Partners - Strategic Partnerships | Zion Tech Group</title>;
        <meta name="description" content="Join our partner ecosystem and grow your business with Zion Tech Group. Strategic partnerships, technical support, and joint go-to-market opportunities." />;""        <meta name="keywords" content="partners, partnerships, strategic alliances, technology partners, business partners, partner program" />;""      </Helmet>;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;""        {/* Hero Section */};
        <section className="relative py-20 px-4">;""          <div className="max-w-7xl mx-auto text-center">;""            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;""              Our;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">""        </span>
        </span>
                Partners;
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""        </p>
              Join our growing ecosystem of strategic partners and unlock new opportunities;
              for growth and innovation.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""        </div>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hove,r:scale-105 shadow-lg shadow-cyan-500"/25">"
"        </button>
        </button>
                Become a Partner;
                <Right className="w-5 h-5 ml-2 inline" />"
"              </button>
              <button className="px-8 py-4 border border-cyan-500"/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500"/10 transition-all duration-300">"
"        </button>
        </button>
                Learn More;
              </button>
            </div>
          </div>
        </section>
        {/* Partners Grid */}
        <section className="py-20 px-4">"
"        </section>
        </section>
        </section>
        </section>
          <div className="max-w-7xl mx-auto">"
"        </div>
            <h2 className="text-4xl font-bold text-white text-center mb-16">"
"        </h2>
        </h2>
              Strategic Partners;
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
"        </div>
              {partners.map((partner, _index) => ()}
                <div key={_index} className="bg-slate-800"/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700"/50 hover:border-cyan-500"/50 transition-all duration-300">""        </div>
                  <div className="text-center">""        </div>
                    <div className="text-4xl mb-4">{partner.logo}</div>""                    <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>""                    <p className="text-cyan-400 text-sm mb-3">{partner.category}</p>""                    <p className="text-gray-300 text-sm">{partner.description}</p>""                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800"/30">"
"        </section>
        </section>
        </section>
        </section>
          <div className="max-w-7xl mx-auto">"
"        </div>
            <h2 className="text-4xl font-bold text-white text-center mb-16">"
"        </h2>
        </h2>
              Partner Benefits;
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
"        </div>
              {benefits.map((benefit, _index) => ()}
                <div key={_index} className="flex items-center space-x-4 bg-slate-800"/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700"/30">"
"        </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">"
"        </div>
                    <Circle className="w-4 h-4 text-white" />"
"                  </div>
                  <span className="text-gray-300 font-medium">{benefit}</span>"
"                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4">"
"        </section>
        </section>
        </section>
        </section>
          <div className="max-w-4xl mx-auto text-center">"
"        </div>
            <h2 className="text-4xl font-bold text-white mb-6">"
"        </h2>
        </h2>
              Ready to Partner with Us?;
            </h2>
            <p className="text-xl text-gray-300 mb-8">"
"        </p>
              Join our partner ecosystem and unlock new opportunities for growth and innovation.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
"        </div>
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover: from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hove,r:scale-105 shadow-lg shadow-cyan-500"/25">""        </button>
        </button>
                Apply Now;
                <Right className="w-5 h-5 ml-2 inline" />""              </button>
              <button className="px-8 py-4 border border-cyan-500"/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500"/10 transition-all duration-300">""        </button>
        </button>
                Contact Us;
              </button>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
}
export default PartnersPage;
};
;
export default PartnersPage;"'