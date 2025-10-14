import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react';

const CaseStudiesPage: React.FC = () => {
  const caseStudies = [
    {
      title: 'E-commerce Platform AI Optimization',
      client: &apos;TechRetail Inc.&apos;,
      industry: &apos;E-commerce&apos;,
      challenge: &apos;Low conversion rates and high cart abandonment&apos;,
      solution: &apos;Implemented AI-powered recommendation engine and personalized shopping experience&apos;,
      results: [
        { metric: &apos;Conversion Rate&apos;, value: &apos;+45%&apos;, icon: TrendingUp },
        { metric: &apos;Cart Abandonment&apos;, value: &apos;-30%&apos;, icon: TrendingUp },
        { metric: &apos;Customer Satisfaction&apos;, value: &apos;+60%&apos;, icon: Users },
        { metric: &apos;Implementation Time&apos;, value: &apos;3 months&apos;, icon: Clock }
      ],
      description: 'We helped TechRetail Inc. transform their e-commerce platform with AI-powered personalization, resulting in significant improvements in conversion rates and customer satisfaction.'
    },
    {
      title: 'Manufacturing Process Automation',
      client: &apos;AutoParts Manufacturing&apos;,
      industry: &apos;Manufacturing&apos;,
      challenge: &apos;Manual quality control processes causing delays and errors&apos;,
      solution: &apos;Deployed computer vision and AI-powered quality control systems&apos;,
      results: [
        { metric: &apos;Quality Defects&apos;, value: &apos;-80%&apos;, icon: TrendingUp },
        { metric: &apos;Production Speed&apos;, value: &apos;+35%&apos;, icon: TrendingUp },
        { metric: &apos;Cost Savings&apos;, value: &apos;$2.5M&apos;, icon: DollarSign },
        { metric: &apos;Implementation Time&apos;, value: &apos;6 months&apos;, icon: Clock }
      ],
      description: 'Our AI-powered quality control system reduced defects by 80% while increasing production speed by 35%, saving the client $2.5M annually.'
    },
    {
      title: 'Healthcare Data Analytics Platform',
      client: &apos;MedCenter Health System&apos;,
      industry: &apos;Healthcare&apos;,
      challenge: &apos;Fragmented patient data and inefficient treatment planning&apos;,
      solution: &apos;Built comprehensive AI analytics platform for patient data integration and predictive treatment recommendations&apos;,
      results: [
        { metric: &apos;Treatment Accuracy&apos;, value: &apos;+55%&apos;, icon: TrendingUp },
        { metric: &apos;Patient Outcomes&apos;, value: &apos;+40%&apos;, icon: Users },
        { metric: &apos;Cost Reduction&apos;, value: &apos;$1.8M&apos;, icon: DollarSign },
        { metric: &apos;Implementation Time&apos;, value: &apos;8 months&apos;, icon: Clock }
      ],
      description: 'The AI analytics platform improved treatment accuracy by 55% and patient outcomes by 40%, while reducing operational costs by $1.8M.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900text-white">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies. See how we've helped businesses across industries achieve remarkable results." />
        <meta name="keywords" content="case studies, AI implementation, IT solutions, success stories, business transformation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-texttext-transparent">
            Success Stories
          </h1>
<p className="Discover how we&apos;ve helped businesses across industries achieve remarkable results 
            with our AI and IT solutions.
             ">$2</p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className=" py-20">
        <div className="container mx-autopx-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:transformhover:scale-105">
                <div className=" mb-6">
                  <div className="text-sm text-purple-400 font-semibold mb-2  ">{study.industry}</div>
                  <h3 className="text-2xl font-bold text-white mb-2  ">{study.title}</h3>
                  <div className="text-gray-400 text-sm mb-4  ">Client: {study.client}</div>
                  </div>
        </div>

                <div className=" mb-6">
                  <h4 className="text-white font-semibold mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm mb-4   ">{study.challenge}</p>
                  
                  <h4 className="text-white font-semibold mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm mb-4   ">{study.solution}</p>
                  </div>
        </div>

                <div className=" mb-6">
                  <h4 className="text-white font-semibold mb-3">Results</h4>
                  <div className="grid grid-cols-2gap-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-slate-700 rounded-lgp-3">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-gray-300text-xs">{result.metric}</span>
                          <result.icon className="w-4 h-4text-purple-400" />
                          </div>
        </div>
                        <div className="text-white font-boldtext- lg  ">{result.value}</div>
                        </div>
        </div>
                    ))}
                    </div>
        </div>
                  </div>
        </div>

                <p className="text-gray-300 text-sm mb-6   ">{study.description}</p>

                <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-centergap-2">
                  Read Full Case Study
                  <ArrowRight className="w-4h-4" />
                </button>
                </div>
        </div>
            ))}
            </div>
        </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900/30to-cyan-900/30">
        <div className="container mx-auto px-4text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Create Your Success Story?
          </h2>
<p className="Let&apos;s discuss how our AI and IT solutions can transform your business 
            and deliver measurable results.
             ">$2</p>
          <div className="flex flex-col sm:flex-row gap-4justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transformhover:scale-105">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-allduration-300">
              Schedule Consultation
            </button>
            </div>
        </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;