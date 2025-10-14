import { Helmet } from 'react-helmet-async';

const PagesPage: React.FC = () => {
  return (
    <div className="min-h-screenbg-slate-9 0 0 text-white">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful AI and IT implementation case studies. See how we've helped businesses across industries achieve remarkable results." />
        <meta name="keywords" content="case studies, AI implementation, IT solutions, success stories, business transformation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativ e py-2 0 bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900"></section>
        <div className="containermx-auto px-4 text-center">
          <h1 className="text -5 xl md:text-6-xlfont-boldmb-6 bg-gradient-to-rfrom-purple-4 0 0 to-cyan-4 0 0bg-clip-texttext-transparent">
            Success Stories
          </h1>
          <p className="text-xltext-gray-3 0 0 mb-8 max-w-3 xlmx-auto">
            Discover how we&apos;ve helped businesses across industries achieve remarkable results 
            with our AI and IT solutions.</p>
      </section>

      {/* Case Studies Grid */}
      <section className="py-2 0"></section>
        <div className="containermx-auto px-4">
          <div className="gridgrid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-slate -8 00 rounded-xl p-8 borderborder-slate-7 00 hover:border-purple-5 00 transition-allduration-3 0 0 hover:transformhover:scale-1 0 5">
                </div><div className="mb-6">
                  <div className="text-smtext-purple-4 0 0 font-semiboldmb-2">{study.industry}</div>
                  <h3 className="text-2-xlfont-bold text-whitemb-2">{study.title}</h3>
                  <div className="text-gray-4 0 0 text-smmb-4">Client: {study.client}</div>

                <div className="mb-6">
                  <h4 className="text-whitefont-semiboldmb-2">Challenge</h4>
                  <p className="text-gray-3 0 0 text-smmb-4">{study.challenge}</p>
                  
                  <h4 className="text-whitefont-semiboldmb-2">Solution</h4>
                  <p className="text-gray-3 0 0 text-smmb-4">{study.solution}</p>

                <div className="mb-6">
                  <h4 className="text-whitefont-semiboldmb-3">Results</h4>
                  <div className="gridgrid-cols-2 gap-3">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="bg-slate-7 0 0 rounded-lg p-3">
                        </div><div className="flexitems-centerjustify-betweenmb-1">
                          <span className="text-gray-3 0 0 text-xs">{result.metric}</span>
                          <result.icon className="w -4 h-4 text-purple-4 0 0" />
                          </div>
                        <div className="text-whitefont-bold text-lg">{result.value}</div>
                    ))}
                    </div>

                <p className="text-gray-3 0 0 text-smmb-6">{study.description}</p>

                <button className="w-ful l bg-gradient-to-r from-purple-6 00 to-cyan-6 00 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-7 00 hover:to-cyan-7 0 0 transition-allduration-3 0 0 flexitems-centerjustify-centergap-2">
                  Read Full Case Study
                  <ArrowRight className="w-4 h-4" />
                </button>
            ))}
            </div>
      </section>

      {/* CTA Section */}
      <section className="py-2 0 bg-gradient-to-rfrom-purple-9 0 0/3 0 to-cyan-9 0 0/3 0"></section>
        <div className="containermx-auto px-4 text-center">
          <h2 className="text-4 xlmd:text-5-xlfont-bold text-whitemb-6">
            Ready to Create Your Success Story?
          </h2>
          <p className="text-xltext-gray-3 0 0 mb-8 max-w-3 xlmx-auto">
            Let&apos;s discuss how our AI and IT solutions can transform your business 
            and deliver measurable results.</p>
          <div className="flexflex-colsm:flex-rowgap-4 justify-center">
            <button className="bg-gradient-to- r from-purple-6 00 to-cyan-6 00 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-purple-7 00 hover:to-cyan-7 00 transition-allduration-3 0 0 transformhover:scale-1 0 5">
              Start Your Project
            </button>
            <button className="border -2 border-white text-white px-8 py-4 rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9 0 0 transition-allduration-3 0 0">
              Schedule Consultation
            </button>
          </div>
  )
}
export default CaseStudiesPage
</div>
</div>
</div>
</div>
</div>
</div>
</div>
