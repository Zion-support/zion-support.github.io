import React from 'react';';'
import SEOHead from '../components/SEOHead';';'
import { 
  UserPlusIcon, 
  HandshakeIcon, 
  CpuChipIcon, 
  GlobeAltIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon;
} from '@heroicons/react/24/outline';''

const PartnershipsPage: React.FC = () => {
  const partnershipTypes = [
    {
      icon: HandshakeIcon,
      title: 'Technology Partners',''
      description: 'Integrate our solutions with leading technology platforms and services.',''
      benefits: ['API Access', 'Technical Support', 'Co-marketing Opportunities', 'Revenue Sharing']''
    },
    {
      icon: UserPlusIcon,
      title: 'Channel Partners',''
      description: 'Resell our solutions and earn recurring revenue through our partner program.',''
      benefits: ['Competitive Margins', 'Sales Training', 'Marketing Support', 'Lead Generation']''
    },
    {
      icon: CpuChipIcon,
      title: 'Solution Partners',''
      description: 'Develop complementary solutions that enhance our platform capabilities.',''
      benefits: ['Development Resources', 'Technical Integration', 'Go-to-Market Support', 'Joint Innovation']''
    },
    {
      icon: GlobeAltIcon,
      title: 'Global Partners',''
      description: 'Expand your reach globally through our international partnership network.',''
      benefits: ['Local Market Access', 'Cultural Expertise', 'Regulatory Support', 'Local Support']''
    }
  ];

  const benefits = [
    {
      title: 'Revenue Growth',''
      description: 'Increase your revenue with our competitive partner program and recurring commissions.',''
      icon: ChartBarIcon
    },
    {
      title: 'Technical Support',''
      description: 'Get comprehensive technical support, training, and resources to succeed.',''
      icon: CogIcon
    },
    {
      title: 'Marketing Support',''
      description: 'Access co-marketing opportunities and marketing materials to grow your business.',''
      icon: BoltIcon
    },
    {
      title: 'Exclusive Access',''
      description: 'Get early access to new features and products before general availability.',''
      icon: ShieldCheckIcon
    }
  ];

  const requirements = [
    'Proven track record in technology sales',''
    'Strong customer relationships',''
    'Technical expertise in relevant domains',''
    'Commitment to customer success',''
    'Alignment with our values and mission'''
  ];

  return ()
    <>
      <SEOHead 
        title="Partnership Program - Zion Tech Group"""
        description="Join our partnership program and grow your business with our AI and IT solutions. Technology, channel, and solution partnerships available."""
        keywords="partnership program, technology partners, channel partners, solution partners, reseller program, business partnerships"""
      />
      
      <div className="min-h-screen bg-slate-900 text-white">""
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">""
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 via-slate-900 to-teal-900/30"></div>""
          <div className="absolute inset-0 opacity-20" style={{""
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`'"'"
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
            <div className="text-center">""
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">""
                <HandshakeIcon className="w-5 h-5 text-emerald-400 mr-2" />""
                <span className="text-emerald-300 text-sm font-medium">Partnership Program</span>""
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">""
                Grow Your Business
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent block">""
                  With Our Partners
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">""
                Join our partnership program and unlock new revenue opportunities while helping customers transform their businesses with our AI and IT solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">""
                <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">""
                  Become a Partner
                  <ArrowRightIcon className="w-4 h-4 ml-2 inline" />""
                </button>
                <button className="border-2 border-emerald-400 text-emerald-300 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300">""
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Types Section */}
        <section className="py-20">""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">""
                Partnership <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Opportunities</span>""
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">""
                Choose the partnership model that best fits your business and growth objectives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">""
              {partnershipTypes.map((type, index) => ()
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-emerald-500 transition-all duration-300 hover:transform hover:scale-105">""
                  <div className="flex items-start mb-4">""
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">""
                      <type.icon className="w-6 h-6 text-white" />""
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-300 transition-colors">""
                        {type.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors mb-4">""
                        {type.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">""
                    {type.benefits.map((benefit, benefitIndex) => ()
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">""
                        <CheckCircleIcon className="w-4 h-4 text-emerald-400 mr-2" />""
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-slate-800/30">""
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">""
                Partner <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">Benefits</span>""
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">""
                Comprehensive benefits designed to help you succeed and grow your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">""
              {benefits.map((benefit, index) => ()
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-teal-500 transition-all duration-300">""
                  <div className="flex items-start">""
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">""
                      <benefit.icon className="w-6 h-6 text-white" />""
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-teal-300 transition-colors">""
                        {benefit.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors">""
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-20">""
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">""
            <div className="text-center mb-12">""
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">""
                Partner <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">Requirements</span>""
              </h2>
              <p className="text-lg sm:text-xl text-gray-300">""
                What we look for in our partners to ensure mutual success.
              </p>
            </div>
            
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">""
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">""
                {requirements.map((requirement, index) => ()
                  <div key={index} className="flex items-center text-gray-300">""
                    <CheckCircleIcon className="w-5 h-5 text-emerald-400 mr-3" />""
                    <span>{requirement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">""
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">""
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">""
              Ready to Partner With Us?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">""
              Join our growing network of partners and start growing your business today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">""
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">""
                Apply to Become a Partner
                <ArrowRightIcon className="w-4 h-4 ml-2 inline" />""
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">""
                Download Partner Kit
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
;
export default PartnershipsPage;