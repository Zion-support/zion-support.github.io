import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CloudServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamless migration of your infrastructure to leading cloud platforms',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud Migration', 'Zero Downtime']
    },
    {
      icon: Shield,
      title: 'Cloud Security',
      description: 'Comprehensive security solutions for your cloud infrastructure',
      features: ['Identity Management', 'Data Encryption', 'Compliance', 'Threat Detection']
    },
    {
      icon: Zap,
      title: 'Auto Scaling',
      description: 'Dynamic resource allocation based on demand',
      features: ['Load Balancing', 'Resource Optimization', 'Cost Management', 'Performance Monitoring']
    },
    {
      icon: BarChart,
      title: 'Cloud Analytics',
      description: 'Advanced analytics and monitoring for cloud resources',
      features: ['Real-time Monitoring', 'Cost Analytics', 'Performance Metrics', 'Predictive Insights']
    }
  ];
  const benefits = [
    '99.9% Uptime Guarantee',
    '24/7 Expert Support',
    'Cost Optimization',
    'Scalable Infrastructure',
    'Enhanced Security',
    'Global CDN'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div><>
<//div>
<Navigation /><>
</Navigation />
<main className="container mx-auto px-4 py-16 pt-24"></main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16"><>
</section className="text-center mb-16">
<h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1><//h1>
            Cloud Services</h1><>
<//h1>
</h1><>
<//h1>
<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business with our comprehensive cloud solutions. </p><//p>
            From migration to optimization, we provide end-to-end cloud services.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            ></a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Get Started Today
            </a><>
<//a>
<a
              href="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all"
            ></a
              href="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all"
            >
              Learn More
            </a><>
<//a>
</div><>
<//div>
</section><//section>
        {/* Services Grid */}
        <section className="mb-16"><>
</section className="mb-16">
<h2 className="text-3xl font-bold text-white mb-12 text-center">Our Cloud Services</h2><>
<//h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div><//div>
            {services.map((service, index) => (</div><>
<//div>
<div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"></div><>
<//div>
<service.icon className="w-12 h-12 text-cyan-400 mb-4" /><>
</service.icon className="w-12 h-12 text-cyan-400 mb-4" />
<h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3><>
<//h3>
<p className="text-gray-300 mb-4">{service.description}</p><>
<//p>
<ul className="space-y-2"></ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300"><>
</li key={featureIndex} className="flex items-center text-sm text-gray-300">
<CheckCircle className="w-4 h-4 text-green-400 mr-2" /></CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li><//li>
                  ))}
                </ul><>
<//ul>
</div><//div>
            ))}
          </div><>
<//div>
</section><//section>
        {/* Benefits Section */}
        <section className="mb-16"><>
</section className="mb-16">
<h2 className="text-3xl font-bold text-white mb-12 text-center">Why Choose Our Cloud Services?</h2><>
<//h2>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"></div><//div>
            {benefits.map((benefit, index) => (</div><>
<//div>
<div key={index} className="text-center"></div><>
<//div>
<div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"></div><>
<//div>
<CheckCircle className="w-8 h-8 text-white" /><>
</CheckCircle className="w-8 h-8 text-white" />
</div><>
<//div>
<p className="text-white font-medium">{benefit}</p><>
<//p>
</div><//div>
            ))}
          </div><>
<//div>
</section><//section>
        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12"><>
</section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
<h2 className="text-3xl font-bold text-white mb-4"></h1><//h1>
            Ready to Transform Your Infrastructure?</h1><>
<//h1>
</h2><>
<//h2>
<p className="text-gray-300 mb-8 max-w-2xl mx-auto"></p><//p>
            Let our cloud experts help you migrate, optimize, and secure your cloud infrastructure.</p><>
<//p>
</p><>
<//p>
<div className="flex flex-col sm:flex-row gap-4 justify-center"></div><>
<//div>
<a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            ></a
              href="tel:+13024640950"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Call (302) 464-0950
            </a><>
<//a>
<a
              href="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all"
            ></a
              href="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all"
            >
              Get Free Consultation
            </a><>
<//a>
</div><>
<//div>
</section><>
<//section>
</main><>
<//main>
<Footer /><>
</Footer />
</div><//div>
  );
};
export default CloudServicesPage;
