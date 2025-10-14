import React from 'react'
import { Helmet } from 'react-helmet-async'
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react'
const DigitalTransformationPage: React.FC = () => {
  const services = []
    {
      icon: RefreshCw,
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: ['Workflow Analysis', 'Process Mapping', 'Automation Implementation', 'Performance Monitoring']
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Guide your team through digital transformation with comprehensive change management strategies.',
      features: ['Training Programs', 'Communication Plans', 'Resistance Management', 'Success Metrics']
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Develop comprehensive digital transformation strategies aligned with your business objectives.',
      features: ['Digital Assessment', 'Technology Roadmap', 'ROI Analysis', 'Implementation Planning']
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize your digital infrastructure and processes for maximum performance and scalability.',
      features: ['Performance Analysis', 'System Optimization', 'Scalability Planning', 'Monitoring Setup']
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Identify and implement innovative technologies to drive business growth and competitiveness.',
      features: ['Technology Research', 'Innovation Workshops', 'Pilot Programs', 'Implementation Support']
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Ensure the quality and reliability of your digital transformation initiatives.',
      features: ['Testing Strategies', 'Quality Metrics', 'Compliance Checking', 'Continuous Improvement']
    }
  ]
  return (
    <div className="min-h-screenbg-slate-9 0 0 text-white">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services including process automation, change management, and strategic planning." />
        <meta name="keywords" content="digital transformation, process automation, change management, strategic planning, innovation consulting, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relativepy-2 0 bg-gradient-to-brfrom-slate-9 00 via-green-9 0 0 to-slate-9 0 0"></section>
        <div className="containermx-auto px-4 text-center">
          <h1 className="text -5 xl md:text-6-xlfont-boldmb-6 bg-gradient-to-rfrom-green-4 0 0 to-cyan-4 0 0bg-clip-texttext-transparent">
            Digital Transformation
          </h1>
          <p className="text-xltext-gray-3 0 0 mb-8 max-w-3 xlmx-auto">
            Transform your business with comprehensive digital solutions. From strategy to implementation, 
            we guide you through every step of your digital journey.</p>
      </section>

      {/* Services Grid */}
      <section className="py-2 0"></section>
        <div className="containermx-auto px-4">
          <div className="gridgrid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate -8 00 rounded-xl p-8 borderborder-slate-7 00 hover:border-green-5 00 transition-allduration-3 0 0 hover:transformhover:scale-1 0 5">
                </div><div className="w -1 6 h-1 6 bg-gradient-to-rfrom-green-5 0 0 to-cyan-5 0 0 rounded-lgflexitems-centerjustify-centermb-6">
                  <service.icon className="w -8 h-8 text-white" />
                  </div>
                
                <h3 className="text-2-xlfont-bold text-whitemb-4">{service.title}</h3>
                <p className="text-gray-3 0 0 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-whitefont-semiboldmb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-3 0 0 text-smflexitems-center">
                        <CheckCircle className="w-4 h-4 text-green-4 0 0 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                <button className="w-ful l bg-gradient-to-r from-green-6 00 to-cyan-6 00 text-white py-3 px-6 rounded-lgfont-semiboldhover:from-green-7 00 hover:to-cyan-7 0 0 transition-allduration-3 0 0">
                  Learn More
                </button>
            ))}
            </div>
      </section>

      {/* CTA Section */}
      <section className="py-2 0 bg-gradient-to-rfrom-green-9 0 0/3 0 to-cyan-9 0 0/3 0"></section>
        <div className="containermx-auto px-4 text-center">
          <h2 className="text-4 xlmd:text-5-xlfont-bold text-whitemb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xltext-gray-3 0 0 mb-8 max-w-3 xlmx-auto">
            Let&apos;s discuss how our digital transformation services can modernize your operations and drive growth.</p>
          <div className="flexflex-colsm:flex-rowgap-4 justify-center">
            <button className="bg-gradient-to- r from-green-6 00 to-cyan-6 00 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-green-7 00 hover:to-cyan-7 00 transition-allduration-3 0 0 transformhover:scale-1 0 5">
              Start Your Transformation
            </button>
            <button className="border -2 border-white text-white px-8 py-4 rounded-lgfont-semiboldhover:bg-whitehover:text-slate-9 0 0 transition-allduration-3 0 0">
              Schedule Consultation
            </button>
          </div>
  )
}
export default DigitalTransformationPage
</div>
</div>
</div>
</div>
</div>
