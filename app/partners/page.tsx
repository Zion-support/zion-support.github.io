<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Globe, Shield, Zap, Award, Building2, Mail } from 'lucide-react';

const PartnersPage: React.FC = () => {
  const partners = [
    {
      name: "Microsoft",
      logo: "/images/partners/microsoft.png",
      description: "Leading cloud and productivity solutions",
      category: "Technology Partner",
      tier: "Platinum"
=======
<<<<<<< HEAD
import React from 'react;'
import { Helmet ,   } from 'lucide-react;'
import { Circle, Right,  } from 'lucide-react;'
const PartnersPage: React.FC = () => {
  const partners = [{''
      name: 'Microsoft',''
      logo: '🏢',''
      description: 'Strategic partnership for cloud and AI solutions',''
      category: 'Technology';}''
>>>>>>> main
    },
    {''
      name: 'Amazon Web Services',''
      logo: '☁️',''
      description: 'infrastructure and AI services collaboration',''
      category: ';}''
    },
    {''
      name: 'Google ',''
      logo: '🔍',''
      description: 'AI and machine learning platform integration',''
      category: 'AI/ML';}''
    },
    {''
      name: 'IBM',''
      logo: '💼',''
      description: 'Enterprise AI solutions and consulting',''
      category: 'Enterprise';}''
    },
    {''
      name: 'Salesforce',''
      logo: '📊',''
      description: 'CRM and business intelligence integration',''
      category: 'CRM';}''
    },
    {''
      name: 'Oracle',''
      logo: '🗄️',''
      description: 'and enterprise application solutions',''
      category: ';}''
    }
  ];
<<<<<<< HEAD

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Joint Marketing",
      description: "Collaborative marketing campaigns and co-branded content"
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      title: "Global Reach",
      description: "Access to our worldwide network of clients and opportunities"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: "Technical Support",
      description: "Dedicated technical resources and training programs"
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: "Innovation Labs",
      description: "Joint innovation initiatives and R&D projects"
    }
=======
''
  const benefits = ['Access to cutting-edge technology',''
    'Joint go-to-market opportunities',''
    'Technical support and training',''
    'Co-marketing and co-selling programs',''
    'Priority access to new features',''
    'Dedicated partner success manager;''
>>>>>>> main
  ];
  const benefits = ['Access to cutting-edge technology',''
    'Joint go-to-market opportunities',''
    'Technical support and training',''
    'Co-marketing and co-selling programs',''
    'Priority access to new features',''
    'Dedicated partner success manager'];''
  return (
    <></>
      <EnhancedSEO
        title="Page - Zion Tech Group""
        description="Professional page services by Zion Tech Group. Expert solutions for your business needs.""
        keywords="page, business solutions, technology services, professional services""
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
        {/* Hero Section */}
        <section className="relative py-20 px-4">;""
          <div className="max-w-7xl mx-auto text-center">;""
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;""
              Our;
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;""
                Partners;
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;""
              Join our growing ecosystem of strategic partners and unlock new opportunities;
              for growth and innovation.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;""
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">;""
                Become a Partner;
                <Right className="w-5 h-5 ml-2 inline" />;""
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">;""
                Learn More;
              </button>
            </div>
          </div>
        </section>
        {/* Partners Grid */}
        <section className="py-20 px-4">;""
          <div className="max-w-7xl mx-auto">;""
            <h2 className="text-4xl font-bold text-white text-center mb-16">;""
              Strategic Partners;
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;""
              {partners.map((partner, _index) => (
                <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">;""
                  <div className="text-center">;""
                    <div className="text-4xl mb-4">{partner.logo}</div>""
                    <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>;""
                    <p className="text-cyan-400 text-sm mb-3">{partner.category}</p>;""
                    <p className="text-gray-300 text-sm">{partner.description}</p>;""
=======
import SEOHead from '../components/SEOHead';

const PartnersPage: React.FC = () => {}
  return ()
    <>{}</>
      <Helmet></Helmet>
        <title>Partners - Zion Tech Group | Strategic Partnerships</title>
        <meta name="description" content="Join our partner ecosystem and unlock new opportunities for growth. Strategic partnerships with leading technology companies." />
        <meta name="keywords" content="partners, partnerships, technology partners, cloud partners, strategic alliances" />
        <link rel="canonical" href="https://ziontechgroup.com/partners" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Partnerships</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join our partner ecosystem and unlock new opportunities for growth. Strategic partnerships with leading technology companies.
=======
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
          <div className="text-center"></div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6"></h1>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"></span>
                Our Partners
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Strategic partnerships that drive innovation and deliver exceptional value to our clients.
>>>>>>> main
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#become-partner"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
<<<<<<< HEAD
        </section>

        {/* Partners Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Our Technology Partners
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {partner.description}
                  </p>
                  <div className="flex items-center justify-center mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${partner.tier === 'Platinum' ? 'from-gray-400 to-gray-600' : partner.tier === 'Gold' ? 'from-yellow-400 to-yellow-600' : 'from-gray-300 to-gray-500'} text-white`}>
                      {partner.tier}
                    </span>
                  </div>
                  <p className="text-sm text-cyan-400">
                    {partner.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Partner Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-white">
              Partnership Tiers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {tiers.map((tier, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {tier.requirements}
                    </p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
=======

          {/* Partners Grid */};
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"></div>
            {partners.map((partner, index) => ()}
              <divkey={index},>
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              ></div
>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                  <span className="text-2xl font-bold text-cyan-400">{partner.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                <p className="text-gray-300 text-sm mb-3">{partner.description}</p>
                <div className="flex items-center justify-between"></div>
                  <span className="text-cyan-400 text-sm font-medium">{partner.category}</span>
                  <spanclassName={`px-3 py-1 rounded-full text-xs font-medium ${},>
      partner.tier === 'Platinum' ? 'bg-gray-400 text-gray-900' :
                    partner.tier === 'Gold' ? 'bg-yellow-400 text-yellow-900' :
                    'bg-gray-300 text-gray-900'
                  }`}></span>
                    {partner.tier};
                  </span>
                </div>
              </div>
            ))};
          </div>

          {/* Benefits Section */};
          <div className="mt-20">
        <div className="mt-20">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
              <h2 className="text-3xl font-bold text-white mb-4"></h2>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"></span>
                  Partnership Benefits
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
                Join our partner ecosystem and unlock new opportunities for growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {benefits.map((benefit, index) => ()}
                <divkey={index},>
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                ></div
>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4"></div>
                    <div className="text-cyan-400">{benefit.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))};
            </div>
          </div>

          {/* Partnership Tiers */};
          <div className="mt-20">
        <div className="mt-20">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
              <h2 className="text-3xl font-bold text-white mb-4"></h2>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400"></span>
                  Partnership Tiers
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto"></p>
                Choose the partnership level that best fits your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {tiers.map((tier, index) => ()}
                <divkey={index},>
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                ></div
>
                  <div className="text-center mb-6"></div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${tier.color} bg-clip-text text-transparent mb-2`}></h3>
                      {tier.name};
                    </h3>
                    <p className="text-gray-300 text-sm">{tier.requirements}</p>
                  </div>
                  
                  <div className="space-y-3"></div>
                    {tier.benefits.map((benefit, benefitIndex) => ()}
                      <div key={benefitIndex} className="flex items-center text-gray-300 text-sm"></div>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))};
>>>>>>> main
                  </div>
                </div>
              ))};
            </div>
          </div>
<<<<<<< HEAD
        </section>
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-slate-800/30">;""
          <div className="max-w-7xl mx-auto">;""
            <h2 className="text-4xl font-bold text-white text-center mb-16">;""
              Partner Benefits;
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;""
              {benefits.map((benefit, _index) => (
                <div key={_index} className="flex items-center space-x-4 bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/30">;""
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">;""
                    <Circle className="w-4 h-4 text-white" />;""
                  </div>
                  <span className="text-gray-300 font-medium">{benefit}</span>;""
>>>>>>> main
                </div>
              ))}
            </div>
          </div>
        </section>
<<<<<<< HEAD

        {/* CTA Section */}
        <section id="become-partner" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Partner With Us?
              </h2>
              <p className="text-gray-300 mb-8">
                Join our growing ecosystem of technology partners and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Become a Partner
                </Link>
                <Link
                  to="/partners/benefits"
                  className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <Star className="w-5 h-5 mr-2" />
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PartnersPage;
=======
        {/* CTA Section */}
        <section className="py-20 px-4">;""
          <div className="max-w-4xl mx-auto text-center">;""
            <h2 className="text-4xl font-bold text-white mb-6">;""
              Ready to Partner with Us?;
            </h2>
            <p className="text-xl text-gray-300 mb-8">;""
              Join our partner ecosystem and unlock new opportunities for growth and innovation.;
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;""
              <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">;""
                Apply Now;
                <Right className="w-5 h-5 ml-2 inline" />;""
              </button>
              <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">;""
                Contact Us;
              </button>
=======

          {/* CTA Section */};
          <div className="mt-20 text-center">
        <div className="mt-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development...</p>
        </div>
      </div>
              <h2 className="text-3xl font-bold text-white mb-4"></h2>
                Ready to Partner with Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
                Join our growing partner ecosystem and unlock new opportunities for growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <>
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
                ></>
                  Become a Partner
                </>
                <>
                  to="/contact"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                ></>
                  Learn More
                </>
              </div>
>>>>>>> main
            </div>
          </div>

const PartnersPage: React.FC = () => {
  return (
    <>
      <SEOHead title =" Partners Page - Zion Tech Group"";
        description="Zion Tech Group  Partners Page service page"";
      />
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4"> Partners Page</h1>";
          <p className ="text-gray-300">Coming soon...</p>";

        </div>
      </div>
    </>
<<<<<<< HEAD
  )};
const page = React.lazy(() => import('./page'));''
export default page;
=======
  ),
};

export default PartnersPage;
>>>>>>> main
>>>>>>> main
