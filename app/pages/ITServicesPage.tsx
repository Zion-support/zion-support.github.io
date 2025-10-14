import { Helmet } from 'react-helmet-async';

const PagesPage: React.FC = () => {
  return (
    <div className="min-h-screenbg-slate-9 0 0 text-white">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including infrastructure management, cloud solutions, cybersecurity, and technical support." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, technical support, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativepy-2 0 bg-gradient-to-brfrom-slate-9 00 via-cyan-9 0 0 to-slate-9 0 0"></section>
        <div className="containermx-auto px-4 text-center">
          <h1 className="text -5 xl md:text-6-xlfont-boldmb-6 bg-gradient-to-rfrom-cyan-4 0 0 to-purple-4 0 0bg-clip-texttext-transparent">
            IT Services
          </h1>
          <p className="text-xltext-gray-3 0 0 mb-8 max-w-3 xlmx-auto">
            Comprehensive IT solutions to keep your business running smoothly and securely. 
            From infrastructure to cloud, we&apos;ve got you covered.</p>
      </section>

      {/* Services Grid */}
      <section className="py-2 0"></section>
        <div className="containermx-auto px-4">
          <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate -8 00 rounded-xl p-8 borderborder-slate-7 00 hover:border-cyan-5 00 transition-allduration-3 0 0 hover:transformhover:scale-1 0 5">
                </div><div className="w -1 6 h-1 6 bg-gradient-to-rfrom-cyan-5 0 0 to-purple-5 0 0 rounded-lgflexitems-centerjustify-centermb-6">
                  <service.icon className="w -8 h-8 text-white" />
                  </div>
                
                <h3 className="text-2-xlfont-bold text-whitemb-4">{service.title}</h3>
                <p className="text-gray-3 0 0 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-whitefont-semiboldmb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-3 0 0 text-smflexitems-center">
                        <div className="w-2 h-2 bg-cyan-4 0 0 rounded-fullmr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                <button className="w-ful l bg-gradient-to-r from-cyan-6 00 to-purple-6 00 text-white py-3 px-6 rounded-lgfont-semiboldhover:from-cyan-7 00 hover:to-purple-7 0 0 transition-allduration-3 0 0">
                  Learn More
                </button>
            ))}
            </div>
      </section>

      {/* CTA Section */}
      <section className="py-2 0 bg-gradient-to-rfrom-cyan-9 0 0/3 0 to-purple-9 0 0/3 0"></section>
        <div className="containermx-auto px-4 text-center">
          <h2 className="text-4 xlmd:text-5-xlfont-bold text-whitemb-6">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xltext-gray-3 0 0 mb-8 max-w-3 xlmx-auto">
            Let&apos;s discuss how our IT services can improve your business operations and security.</p>
          <div className="flexflex-colsm:flex-rowgap-4 justify-center">
            <button className="bg-gradient-to- r from-cyan-6 00 to-purple-6 00 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-cyan-7 00 hover:to-purple-7 00 transition-allduration-3 0 0 transformhover:scale-1 0 5">
              Get Started
            </button>
            <button className="border -2 border-white text-white px-8 py-4 rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9 0 0 transition-allduration-3 0 0">
              Schedule Consultation
            </button>
          </div>
  )
}
export default ITServicesPage
</div>
</div>
</div>
</div>
</div>
