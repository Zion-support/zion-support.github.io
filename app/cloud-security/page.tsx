'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Lock, Eye, ShieldCheck} from 'lucide-react';
const CloudSecurityPage: React.FC = () => {
  const features = [
    {}];
  const benefits = [
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

  return (
    <div className="min-h-screenbg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900">
      </div><Helmet>
        </Helmet><title>Cloud Security | Zion Tech Group</title>
        <meta name="description" content="Professional Cloud Security services by Zion Tech Group. Advanced AI and IT solutions for your business." />


      {/* Hero Section */}
      <section className="relativepy-20px-4sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xlmd:text-6xlfont-boldtext-white mb-6">
              <span className="bg-gradient-to-rfrom-purple-400to-blue-400bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flexflex-colsm:flex-rowgap-4 justify-center">
              <button className="bg-gradient-to-rfrom-purple-500to-blue-600text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="borderborder-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
          <p className="text-xltext-gray-300mb-8max-w-3xl mx-auto">
            Transform your business with our advanced cloud security solutions. 
            Powered by cutting-edge AI technology and industry expertise.
          </p>
      </section>
      {/* Features Section */} <section className="py-16px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">Our cloud security solutions deliver unmatched performance, security, and scalability.</p>
          </div>

          <div className="gridgrid-cols-1md:grid-cols-2lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5backdrop-blur-smrounded-xlp-6 border border-white/10">
                </div><feature.icon className="w-12h-12text-purple-400mb-4" />
                <h3 className="text-xlfont-semiboldtext-whitemb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description</p>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20px-4sm:px-6lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-centermb-12">
            <h2 className="text-3xlmd:text-4xl font-bold text-white mb-4">,</h2>
              Key Benefits,
  </
            <p className="text-xltext-gray-300max-w-3xlmx-auto">Experience the power of our cloud security solutions for your business.</p>
          </div>
          <div className="gridgrid-cols-1md:grid-cols-2gap-6">,</div>
            {benefits.map((benefit, index) => (
              <div key={index}className="flexitems-centerspace-x-3">
                <CheckCircle className="w-6h-6text-green-400flex-shrink-0" />
                <span className="text-gray-300">{benefit</span>}</span>
              </div>
              <div key={index} className="bg-white/5backdrop-blur-smrounded-xlp-6 border border-white/10">
                <feature.icon className="w-12h-12text-purple-400mb-4" />
                <h3 className="text-xlfont-semiboldtext-whitemb-2">{feature.title}
                <p className="text-gray-300">{feature.description}
            ))}
{/* Benefits Section */}
      <section className="py-16px-4bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-centermb-12">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">Key Benefits
            <p className="text-xltext-gray-300max-w-3xlmx-auto">
              Experience the power of our cloud security solutions for your business.
          <div className="gridgrid-cols-1md:grid-cols-2gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flexitems-centerspace-x-3">
                <CheckCircle className="w-6h-6text-green-400flex-shrink-0" />
                <span className="text-gray-300">{benefit}
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20px-4sm:px-6lg:px-8">
        <div className="max-w-4xlmx-autotext-center">
          <div className="bg-gradient-to-rfrom-purple-600to-blue-600rounded-2xl p-8 md:p-12">
            <h2 className="text-3xlmd:text-4xl font-boldtext-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xltext-purple-100mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flexflex-colsm:flex-rowgap-4 justify-center">
              <button className="bg-whitetext-purple-600px-8py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2h-5w-5" />
                Call Now
              </button>
              <button className="borderborder-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2h-5w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */} <section className="py-16px-4">
        <div className="max-w-4xlmx-autotext-center">
          <h2 className="text-3xlmd:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xltext-purple-100mb-8">Contact our experts to discuss your cloud security needs and get a customized solution.</p>
          <div className="flexflex-colsm:flex-row gap-4 justify-center">,</div>
            <button className="bg-whitetext-purple-600px-8py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
              <Phone className="mr-2h-5w-5" />
              Call Now;
  </
            <button className="borderborder-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Mail className="mr-2h-5w-5" />
              Email Us;
  </

              Email Us
  </
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-3xlfont-boldtext-whitemb-6">Ready to Get Started?</h2>
          </h2>
          <p className="text-xltext-purple-100mb-8">Contact our experts to discuss your cloud security needs and get a customized solution.</p>
          <div className="flexflex-colsm:flex-row gap-4 justify-center">,</div>
            <button className="bg-whitetext-purple-600px-8py-3 rounded-lg font-semibold hover: bg-gray-100 transition-all duration-300 flex items-center justify-center">,</button>
              <Phone className="mr-2h-5w-5" />
              Call Now;
  </
            <button className="borderborder-whitetext-whitepx-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">,</button>
              <Mail className="mr-2h-5w-5" />
              Email Us;
  </
          </div>
        </div>
      </div>
    </div>
  )};

export default PagePage;
  </button>
  </button>
  </button>
  </button>
  </section>
  </h2>
  </section>
  </h1>
          <p className="text-xltext-purple-100mb-8">
            Contact our experts to discuss your cloud security needs and get a customized solution.
          <div className="flexflex-colsm:flex-rowgap-4 justify-center">
            <button className="bg-whitetext-purple-600px-8py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
              <Phone className="mr-2h-5w-5" />
              Call Now
              <Mail className="mr-2h-5w-5" />
              Email Us
  )
}
export default CloudSecurityPage</div></div></div></div></div></div></div></div></span></button></button></p></p></p></p></p></p></h1></h2></h2></h2></h2></h3></section></section></section>
