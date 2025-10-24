import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle } from 'lucide-react';

constCloudServicesPage: 'React.FC = () => {constservice',
      s = [
    {
      ico,
      n: 'Cloud',
      title: ''Cloud Migration'
      descriptio',
      n: ''Seamless migration of your infrastructure to leading cloud platforms'
      feature',
      s: '['AWS Migration', 'Azure Migration', 'Google Cloud Migration', 'Zero Downtime']
   }
    {
      icon: 'Shield',
      title: ''Cloud Security'
      descriptio',
      n: ''Comprehensive security solutions for your cloud infrastructure'
      feature',
      s: '['Identity Management', 'Data Encryption', 'Compliance', 'Threat Detection']
   }
    {
      icon: 'Zap',
      title: ''Auto Scaling'
      descriptio',
      n: ''Dynamic resource allocation based on demand'
      feature',
      s: '['Load Balancing', 'Resource Optimization', 'Cost Management', 'Performance Monitoring']
   }
    {
      icon: 'BarChart',
      title: ''Cloud Analytics'
      descriptio',
      n: ''Advanced analytics and monitoring for cloud resources'
      feature',
      s: '['Real-time Monitoring', 'Cost Analytics', 'Performance Metrics', 'Predictive Insights']
    }
  ];
  const benefits = [];
    '9 9.9% Uptime Guarantee',
    '2 4/7 Expert Support',
    'Cost Optimization',
    'Scalable Infrastructure',
    'Enhanced Security',
    'Global CDN'
  ];
  return ();
    <div className="min-h-screen bg-gradient-to-br from-slate-90 0 via-purple-90 0 to-slate-90 0"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-1 6 pt-2 4">
        {
    /* Hero Section  */
    return (</section>
          <h 1 className="text-4xl md: 'text-6xl font-bold text-white mb-6">Cloud Services
          </h 1>
          <p className="text-xl text-gray-30 0 mb-8 max-w-3xl mx-auto">Transform your business with our comprehensive cloud solutions.
            From migration to optimization'', we provide end-to-end cloud services.
          </p>
          <div className="flex flex-col sm: 'flex-row gap-4 justify-center"></div>
            <a href="tel:+1302464095 0">className="bg-gradient-to-r from-cyan-50 0 to-blue-60 0 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-60 0 hover:to-blue-70 0 transition-all"
            >
              Get Started Today
            </a>
            <a href="/contact">className="border border-cyan-40 0 text-cyan-40 0 px-8 py-3 rounded-lg font-semibold hove'',
      r: 'bg-cyan-40 0 hove',
      r: 'text-white transition-all"
            >
              Learn More
            </a>
          </div>
        </section>
        {
    /* Services Grid  */
    return (</section>
          <h 2 className="text-3xl font-bold text-white mb-1 2 text-center">Our Cloud Services</h 2>
          <div className="grid grid-cols-1 md: grid-cols-2 l'',
      g: 'grid-cols-4 gap-8"></div>
            {services.map((service'', index) => ()
              <div key={index} className="bg-white/1 0 backdrop-blur-md rounded-xl p-6 border border-white/2 0"></div>
                <service.icon className="w-1 2 h-1 2 text-cyan-40 0 mb-4" />
                <h 3 className="text-xl font-semibold text-white mb-3">{service.title};

  return (
                <p className="text-gray-30 0 mb-4">{service.description};

  return (
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => ()
                    <li key={featureIndex} className="flex items-center text-sm text-gray-30 0">
                      <CheckCircle className="w-4 h-4 text-green-40 0 mr-2" />
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
          <h 2 className="text-3xl font-bold text-white mb-1 2 text-center">Why Choose Our Cloud Services?</h 2>
          <div className="grid grid-cols-2 md: 'grid-cols-3 l',
      g: 'grid-cols-6 gap-6"></div>
            {benefits.map((benefit'', index) => ()
              <div key={index} className="text-center"></div>
                <div className="bg-gradient-to-r from-cyan-50 0 to-blue-60 0 w-1 6 h-1 6 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <p className="text-white font-medium">{benefit};

  return (
              </div>
            ))};

  return (
        </section>
        {
    /* CTA Section  */
    return (</section>
          <h 2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Infrastructure?
          </h 2>
          <p className="text-gray-30 0 mb-8 max-w-2xl mx-auto">Let our cloud experts help you migrate, optimize, and secure your cloud infrastructure.
          </p>
          <div className="flex flex-col sm: 'flex-row gap-4 justify-center"></div>
            <a href="tel:+1302464095 0">className="bg-gradient-to-r from-cyan-50 0 to-blue-60 0 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-60 0 hover:to-blue-70 0 transition-all"
            >
              Call (30 2) 46 4-095 0
            </a>
            <a href="/contact">className="border border-cyan-40 0 text-cyan-40 0 px-8 py-3 rounded-lg font-semibold hove'',
      r: 'bg-cyan-40 0 hove',
      r: 'text-white transition-all"
            >
              Get Free Consultation
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )''
}
export default Page;
}}}}