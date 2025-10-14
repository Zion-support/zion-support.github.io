import React from 'react';
import { Helmet } from 'react-helmet-async';
import { RefreshCw, Users, Target, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';

const DigitalTransformationPage: React.FC = () => {
  const services = [
    {
      icon: RefreshCw,
      title: 'Process Automation',
      description: 'Streamline and automate business processes to improve efficiency and reduce manual errors.',
      features: [&apos;Workflow Analysis&apos;, &apos;Process Mapping&apos;, &apos;Automation Implementation&apos;, &apos;Performance Monitoring&apos;]
    },
    {
      icon: Users,
      title: 'Change Management',
      description: 'Guide your team through digital transformation with comprehensive change management strategies.',
      features: [&apos;Training Programs&apos;, &apos;Communication Plans&apos;, &apos;Resistance Management&apos;, &apos;Success Metrics&apos;]
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Develop comprehensive digital transformation strategies aligned with your business objectives.',
      features: [&apos;Digital Assessment&apos;, &apos;Technology Roadmap&apos;, &apos;ROI Analysis&apos;, &apos;Implementation Planning&apos;]
    },
    {
      icon: TrendingUp,
      title: 'Performance Optimization',
      description: 'Optimize your digital infrastructure and processes for maximum performance and scalability.',
      features: [&apos;Performance Analysis&apos;, &apos;System Optimization&apos;, &apos;Scalability Planning&apos;, &apos;Monitoring Setup&apos;]
    },
    {
      icon: Lightbulb,
      title: 'Innovation Consulting',
      description: 'Identify and implement innovative technologies to drive business growth and competitiveness.',
      features: [&apos;Technology Research&apos;, &apos;Innovation Workshops&apos;, &apos;Pilot Programs&apos;, &apos;Implementation Support&apos;]
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Ensure the quality and reliability of your digital transformation initiatives.',
      features: [&apos;Testing Strategies&apos;, &apos;Quality Metrics&apos;, &apos;Compliance Checking&apos;, &apos;Continuous Improvement&apos;]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900text-white">
      <Helmet>
        <title>Digital Transformation - Zion Tech Group</title>
        <meta name="description" content="Comprehensive digital transformation services including process automation, change management, and strategic planning." />
        <meta name="keywords" content="digital transformation, process automation, change management, strategic planning, innovation consulting, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-green-900to-slate-900">
        <div className="container mx-auto px-4text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-texttext-transparent">
            Digital Transformation
          </h1>
<p className="Transform your business with comprehensive digital solutions. From strategy to implementation, 
            we guide you through every step of your digital journey.
             ">$2</p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=" py-20">
        <div className="container mx-autopx-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-8 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:transformhover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8text-white" />
                  </div>
        </div>
                
                <h3 className="text-2xl font-bold text-white mb-4  ">{service.title}</h3>
                <p className="text-gray-300 mb-6   ">{service.description}</p>
                
                <div className=" mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-gray-300 text-sm flexitems-center">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  </div>
        </div>

                <button className="w-full bg-gradient-to-r from-green-600 to-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-cyan-700 transition-allduration-300">
                  Learn More
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
      <section className="py-20 bg-gradient-to-r from-green-900/30to-cyan-900/30">
        <div className="container mx-auto px-4text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
<p className="Let&apos;s discuss how our digital transformation services can modernize your operations and drive growth.
             ">$2</p>
          <div className="flex flex-col sm:flex-row gap-4justify-center">
            <button className="bg-gradient-to-r from-green-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-cyan-700 transition-all duration-300 transformhover:scale-105">
              Start Your Transformation
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

export default DigitalTransformationPage;