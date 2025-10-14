import { Helmet } from 'react-helmet-async';

const PagesPage: React.FC = () => {
  return (
    <div className="min-h-screenbg-slate-9 0 0 text-white">
      <Helmet>
        <title>Cloud Infrastructure - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure services including migration, architecture design, security, and DevOps solutions." />
        <meta name="keywords" content="cloud infrastructure, cloud migration, cloud architecture, DevOps, cloud security, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativepy-2 0 bg-gradient-to-brfrom-slate-9 00 via-blue-9 0 0 to-slate-9 0 0"></section>
        <div className="containermx-auto px-4 text-center">
          <h1 className="text -5 xl md:text-6-xlfont-boldmb-6 bg-gradient-to-rfrom-blue-4 0 0 to-cyan-4 0 0bg-clip-texttext-transparent">
            Cloud Infrastructure
          </h1>
          <p className="text-xltext-gray-3 0 0 mb-8 max-w-3 xlmx-auto">
            Build, migrate, and optimize your cloud infrastructure with our expert solutions. 
            Scale efficiently and securely in the cloud.</p>
      </section>

      {/* Services Grid */}
      <section className="py-2 0"></section>
        <div className="containermx-auto px-4">
          <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate -8 00 rounded-xl p-8 borderborder-slate-7 00 hover:border-blue-5 00 transition-allduration-3 0 0 hover:transformhover:scale-1 0 5">
                </div><div className="w -1 6 h-1 6 bg-gradient-to-rfrom-blue-5 0 0 to-cyan-5 0 0 rounded-lgflexitems-centerjustify-centermb-6">
                  <service.icon className="w -8 h-8 text-white" />
                  </div>
                
                <h3 className="text-2-xlfont-bold text-whitemb-4">{service.title}</h3>
                <p className="text-gray-3 0 0 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-whitefont-semiboldmb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-3 0 0 text-smflexitems-center">
                        <div className="w-2 h-2 bg-blue-4 0 0 rounded-fullmr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                <button className="w-ful l bg-gradient-to-r from-blue-6 00 to-cyan-6 00 text-white py-3 px-6 rounded-lgfont-semiboldhover:from-blue-7 00 hover:to-cyan-7 0 0 transition-allduration-3 0 0">
                  Learn More
                </button>
            ))}
            </div>
      </section>

      {/* CTA Section */}
      <section className="py-2 0 bg-gradient-to-rfrom-blue-9 0 0/3 0 to-cyan-9 0 0/3 0"></section>
        <div className="containermx-auto px-4 text-center">
          <h2 className="text-4 xlmd:text-5-xlfont-bold text-whitemb-6">
            Ready to Scale in the Cloud?
          </h2>
          <p className="text-xltext-gray-3 0 0 mb-8 max-w-3 xlmx-auto">
            Let&apos;s discuss how our cloud infrastructure services can transform your business operations.</p>
          <div className="flexflex-colsm:flex-rowgap-4 justify-center">
            <button className="bg-gradient-to- r from-blue-6 00 to-cyan-6 00 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-blue-7 00 hover:to-cyan-7 00 transition-allduration-3 0 0 transformhover:scale-1 0 5">
              Start Your Cloud Journey
            </button>
            <button className="border -2 border-white text-white px-8 py-4 rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9 0 0 transition-allduration-3 0 0">
              Schedule Consultation
            </button>
          </div>
  )
}
export default CloudInfrastructurePage
</div>
</div>
</div>
</div>
</div>
