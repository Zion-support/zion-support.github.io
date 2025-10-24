import React from 'react';

constCloudServicesPage: React.FC = () => {constservice,
      s = [
    {
      ico,
      n: Cloud,
      title: 'Cloud Migration'
      descriptio,
      n: 'Seamless migration of your infrastructure to leading cloud platforms'
      feature,
      s: ['AWS Migration', 'Azure Migration', 'Google Cloud Migration', 'Zero Downtime']
   }
    {
      icon: Shield,
      title: 'Cloud Security'
      descriptio,
      n: 'Comprehensive security solutions for your cloud infrastructure'
      feature,
      s: ['Identity Management', 'Data Encryption', 'Compliance', 'Threat Detection']
   }
    {
      icon: Zap,
      title: 'Auto Scaling'
      descriptio,
      n: 'Dynamic resource allocation based on demand'
      feature,
      s: ['Load Balancing', 'Resource Optimization', 'Cost Management', 'Performance Monitoring']
   }
    {
      icon: BarChart,
      title: 'Cloud Analytics'
      descriptio,
      n: 'Advanced analytics and monitoring for cloud resources'
      feature,
      s: ['Real-time Monitoring', 'Cost Analytics', 'Performance Metrics', 'Predictive Insights']
    }
  ]

    'Global CDN'
  ];
  return ();
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <Navigation />
      <main className=&quot;container mx-auto px-4 py-16 pt-24&quot;>
        {
    /* Hero Section  */
    return (</section>
          <h1 className=&quot;text-4xl md: text-6xl font-bold text-white mb-6&quot;>Cloud Services
          </h1>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>Transform your business with our comprehensive cloud solutions.
            From migration to optimization, we provide end-to-end cloud services.
          </p>
          <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
            <a href=&quot;tel:+13024640950&quot;>className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all&quot;
            >
              Get Started Today
            </a>
            <a href=&quot;/contact&quot;>className=&quot;border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hove,
      r:bg-cyan-400 hove,
      r:text-white transition-all&quot;
            >
              Learn More
            </a>
          </div>
        </section>
        {
    /* Services Grid  */
    return (</section>
          <h2 className=&quot;text-3xl font-bold text-white mb-12 text-center&quot;>Our Cloud Services</h2>
          <div className=&quot;grid grid-cols-1 md: grid-cols-2 l,
      g:grid-cols-4 gap-8&quot;></div>
            {services.map((service, index) => ()
              <div key={index} className=&quot;bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20&quot;></div>
                <service.icon className=&quot;w-12 h-12 text-cyan-400 mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{service.title};

  return (
                <p className=&quot;text-gray-300 mb-4&quot;>{service.description};

  return (
                <ul className=&quot;space-y-2&quot;>
                  {service.features.map((feature, featureIndex) => ()
                    <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
                      {feature};

  return (
                  ))};

  return (
              </div>
            ))};

  return (
        </section>
        {
    /* Benefits Section  */
    return (</section>
          <h2 className=&quot;text-3xl font-bold text-white mb-12 text-center&quot;>Why Choose Our Cloud Services?</h2>
          <div className=&quot;grid grid-cols-2 md: grid-cols-3 l,
      g:grid-cols-6 gap-6&quot;></div>
            {benefits.map((benefit, index) => ()
              <div key={index} className=&quot;text-center&quot;></div>
                <div className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4&quot;></div>
                  <CheckCircle className=&quot;w-8 h-8 text-white&quot; />
                </div>
                <p className=&quot;text-white font-medium&quot;>{benefit};

  return (
              </div>
            ))};

  return (
        </section>
        {
    /* CTA Section  */
    return (</section>
          <h2 className=&quot;text-3xl font-bold text-white mb-4&quot;>Ready to Transform Your Infrastructure?
          </h2>
          <p className=&quot;text-gray-300 mb-8 max-w-2xl mx-auto&quot;>Let our cloud experts help you migrate, optimize, and secure your cloud infrastructure.
          </p>
          <div className=&quot;flex flex-col sm: flex-row gap-4 justify-center&quot;></div>
            <a href=&quot;tel:+13024640950&quot;>className=&quot;bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all&quot;
            >
              Call (302) 464-0950
            </a>
            <a href=&quot;/contact&quot;>className=&quot;border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hove,
      r:bg-cyan-400 hove,
      r:text-white transition-all&quot;
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
export default Page;
}}}}
