import React from 'react'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react'




const Case Studies Page: React.FC = () => {
  const case Studies = 
    {
      title: 'E-commerce Platform A I Optimization'
      client: 'Tech Retail Inc.'
      industry: 'E-commerce'
      challenge: 'Low conversion rates and high cart abandonment'
      solution: 'Implemented A I-powered recommendation engine and personalized shopping experience'
      results: 
        { metric: 'Conversion Rate', value: '+45%', icon: Trending Up }
        { metric: 'Cart Abandonment', value: '-30%', icon: Trending Up }
        { metric: 'Customer Satisfaction', value: '+60%', icon: Users }
        { metric: 'Implementation Time', value: '3 months', icon: Clock }]
      description: 'We helped Tech Retail Inc. transform their e-commerce platform with A I-powered personalization, resulting in significant improvements in conversion rates and customer satisfaction.'
    }
    {
      title: 'Manufacturing Process Automation'
      client: 'Auto Parts Manufacturing'
      industry: 'Manufacturing'
      challenge: 'Manual quality control processes causing delays and errors'
      solution: 'Deployed computer vision and A I-powered quality control systems'
      results: 
        { metric: 'Quality Defects', value: '-80%', icon: Trending Up }
        { metric: 'Production Speed', value: '+35%', icon: Trending Up }
        { metric: 'Cost Savings', value: '$2.5 M', icon: Dollar Sign }
        { metric: 'Implementation Time', value: '6 months', icon: Clock }]
      description: 'Our A I-powered quality control system reduced defects by 80% while increasing production speed by 35%, saving the client $2.5 M annually.'
    }
    {
      title: 'Healthcare Data Analytics Platform'
      client: 'Med Center Health System'
      industry: 'Healthcare'
      challenge: 'Fragmented patient data and inefficient treatment planning'
      solution: 'Built comprehensive A I analytics platform for patient data integration and predictive treatment recommendations'
      results: 
        { metric: 'Treatment Accuracy', value: '+55%', icon: Trending Up }
        { metric: 'Patient Outcomes', value: '+40%', icon: Users }
        { metric: 'Cost Reduction', value: '$1.8 M', icon: Dollar Sign }
        { metric: 'Implementation Time', value: '8 months', icon: Clock }]
      description: 'The A I analytics platform improved treatment accuracy by 55% and patient outcomes by 40%, while reducing operational costs by $1.8 M.'
    }]
  return (
    <div className="min-h-screen bg-slate-90 0text-white">
        
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful A I and I T implementation case studies. See how we've helped businesses across industries achieve remarkable results." />
        <meta name="keywords" content="case studies, A I implementation, I T solutions, success stories, business transformation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
  )
      <section>
        
        <div className="containermx-autopx-4text-center">
        
          <h1>
          
            Success Stories
          </h1>
          <p className="text-xl text-gray-300 mb-8max-w-3xl mx-auto">
            Discover how we&apos;ve helped businesses across industries achieve remarkable results 
            with our A I and I T solutions.
          </p>
          </div>
      </section>

      {/* Case Studies Grid */}
  )
      <section>
        
        <div className="containermx-autopx-4">
        
          <div className="grid grid-cols-1lg:grid-cols-2xl:grid-cols-3 gap-8">
        
            {case Studies.map((study, index) => (
              <div key={index} className="bg-slate-8 00 rounded-xl p-8borderborder-slate-7 00hover:border-purple-5 00transition-all duration-300hover:transformhover:scale-1 0 5">
                </div><div className="mb-6">
        
                  <div className="text-smtext-purple-40 0font-semiboldmb-2">{study.industry}</div>
                  <h3 className="text-2xlfont-boldtext-whitemb-2">{study.title}</h3>
                  <div className="text-gray-40 0text-smmb-4">Client: {study.client}</div>
        </div>

                <div className="mb-6">
        
                  <h4 className="text-white font-semiboldmb-2">Challenge</h4>
                  <p className="text-gray-300text-smmb-4">{study.challenge}</p>
                  
                  <h4 className="text-white font-semiboldmb-2">Solution</h4>
                  <p className="text-gray-300text-smmb-4">{study.solution}</p>
                  </div>

                <div className="mb-6">
        
                  <h4 className="text-white font-semiboldmb-3">Results</h4>
                  <div className="gridgrid-cols-2 gap-3">
        
                    {study.results.map((result, result Index) => (
                      <div key={result Index} className="bg-slate-70 0rounded-lgp-3">
                        </div><div className="flexitems-centerjustify-betweenmb-1">
        
                          <span className="text-gray-300text-xs">{result.metric}</span>
                          <result.icon className="w-4 h-4 text-purple-4 0 0" />
                          </div>
                        <div className="text-whitefont-boldtext-lg">{result.value}</div>
        </div>
                    ))}
  )
                    </div>
                  </div>

                <p className="text-gray-300text-smmb-6">{study.description}</p>

                <button className="w-full bg-gradient-to-r from-purple-6 00 to-cyan-6 00 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-7 00hover:to-cyan-7 0 0transition-all duration-300flexitems-center justify-centergap-2">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
                </div>
            ))}
  )
            </div>
          </div>
      </section>

      {/* CT A Section */}
  )
      <section>
        
        <div className="containermx-autopx-4text-center">
        
          <h2>
          
            Ready to Create Your Success Story?
          </h2>
          <p>
          
            Let&apos;s discuss how our A I and I T solutions can transform your business 
            and deliver measurable results.
          </p>
          <div className="flex flex-colsm:flex-rowgap-4 justify-center">
        
            <button className="bg-gradient-to-r from-purple-6 00 to-cyan-6 00 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-purple-7 00hover:to-cyan-7 00transition-all duration-300transformhover:scale-1 0 5">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9 0 0transition-all duration-300">
              Schedule Consultation
            </button>
            </div>
          </div>
      </section>
    </div>
  )
  }
  )
export default Case;; Studies Page