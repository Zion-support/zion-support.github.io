import React from 'react';'
import { Link } from 'react-router-dom';'
import { Helmet } from 'react-helmet-async';
;
:pages.disabled/pages/services/ITInfrastructure.jsx
const ITInfrastructure = () => {
  const features = [
    {
'
      title: 'Network Management','
      description:''
        'Comprehensive network infrastructure design, implementation, and maintenance','
      features: [''
        'Network Design',Performance Optimization',Security Implementation',24/7 Monitoring',
      ],'
      icon: '🌐'},
    {
'
      title: 'System Administration','
      description:''
        'Expert management of servers, operating systems, and enterprise applications','
      features: [''
        'Server Management',OS Administration',Application Support',Performance Tuning',
      ],'
      icon: '🖥️'},
    {
'
      title: 'Data Center Operations','
      description:''
        'Professional data center management and optimization services','
      features: [''
        'Facility Management',Power & Cooling',Hardware Maintenance',Capacity Planning',
      ],'
      icon: '🏢'},
    {
'
      title: 'Performance Optimization','
      description: 'System and network performance analysis and improvement','
      features: [''
        'Performance Monitoring',Bottleneck Analysis',Optimization Strategies',Capacity Planning',
      ],'
      icon: '⚡'},
  ];

  const infrastructureAreas = [
    {
'
      area: 'Hardware Infrastructure','
      solutions: [''
        'Servers',Storage systems',Network equipment',Workstations',
      ]},
    {
'
      area: 'Software Infrastructure','
      solutions: [''
        'Operating systems',Virtualization platforms',Database systems',Management tools',
      ]},
    {
'
      area: 'Network Infrastructure','
      solutions: [''
        'LAN/WAN setup',Wireless networks',VPN solutions',Network security',
      ]},
    {
'
      area: 'Storage Infrastructure','
      solutions: [''
        'Storage arrays',Backup systems',Cloud storage',Data protection',
      ]},];

  return()
    <>
      <Helmet>
        <title>
          IT Infrastructure — Zion Tech Group | Network & System Management;
        </title>
:pages.disabled/pages/services/ITInfrastructure.jsx
        <meta
          name="description""
          content="Build robust IT infrastructure with Zion Tech Group. Network design, server management, storage solutions, and security infrastructure services."
        />"
        <meta""
          property="og:title""
          content="IT Infrastructure — Zion Tech Group"
        />"
        <meta""
          property="og:description""
          content="Leading IT infrastructure services including network design, server management, storage solutions, and security infrastructure."
        />"
        <meta""
          property="og:url""
          content="https://ziontechgroup.com/services/it-infrastructure"
        />"
        <link""
          rel="canonical""
          href="https://ziontechgroup.com/services/it-infrastructure"
        />
      </Helmet>"
""
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">"
        {/* Hero Section */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto text-center">""
            <h1 className="text-4xl md:text-6xl font-bold mb-6">"
              IT""
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">'
                {' '}
                Infrastructure
              </span>"</h1>""
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build a solid foundation for your business with enterprise-grade;
              IT infrastructure. Our comprehensive services ensure reliability,
:pages.disabled/pages/services/ITInfrastructure.jsx
              scalability, and security."
            </p>""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link""
                to="/contact""
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Get Infrastructure Consultation
              </Link>"
              <Link""
                to="/services""
                className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300">
                View All Services;
              </Link>
            </div>
          </div>
        </section>
:pages.disabled/pages/services/ITInfrastructure.jsx
"{/* Features Grid */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
:pages.disabled/pages/services/ITInfrastructure.jsx
                Infrastructure Solutions"</h2>""
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Comprehensive IT infrastructure services for modern businesses;
              </p>
:pages.disabled/pages/services/ITInfrastructure.jsx
            </div>"
""
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div"key={index}""
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20""
                >""
                  <div className="text-4xl mb-4">{feature.icon}</div>""
                  <h3 className="text-xl font-semibold text-white mb-3">
:pages.disabled/pages/services/ITInfrastructure.jsx
                    {feature.title}"
                  </h3>""
                  <p className="text-gray-300 mb-4">{feature.description}</p>""
                  <ul className="space-y-2">"{feature.features.map((item, idx) => (""
                      <li key={idx} className="text-gray-300 flex items-center">""
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
:pages.disabled/pages/services/ITInfrastructure.jsx
"{/* Infrastructure Areas */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
:pages.disabled/pages/services/ITInfrastructure.jsx
                Infrastructure Areas"</h2>""
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Multi-layered approach to building robust IT infrastructure;
              </p>
:pages.disabled/pages/services/ITInfrastructure.jsx
            </div>"
""
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructureAreas.map((area, index) => (
                <div"key={index}""
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20""
                >""
                  <h3 className="text-xl font-semibold text-white mb-4">
:pages.disabled/pages/services/ITInfrastructure.jsx
                    {area.area}"
                  </h3>""
                  <ul className="space-y-2">"{area.solutions.map((solution, idx) => (""
                      <li key={idx} className="text-gray-300 flex items-center">""
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
:pages.disabled/pages/services/ITInfrastructure.jsx
"{/* Benefits */}""
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">""
          <div className="max-w-7xl mx-auto">""
            <div className="text-center mb-16">""
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
:pages.disabled/pages/services/ITInfrastructure.jsx
                Why Choose Our Infrastructure Services?"</h2>""
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Proven expertise and cutting-edge technology for reliable;
                infrastructure;
              </p>
:pages.disabled/pages/services/ITInfrastructure.jsx
            </div>"
""
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">""
              <div className="text-center">""
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">"<svg""
                    className="w-8 h-8 text-white""
                    fill="none""
                    stroke="currentColor""
:pages.disabled/pages/services/ITInfrastructure.jsx
                    viewBox="0 0 24 24"
                  >"<path""
                      strokeLinecap="round""
                      strokeLinejoin="round""
                      strokeWidth={2}""
:pages.disabled/pages/services/ITInfrastructure.jsx
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>"
                </div>""
                <h3 className="text-xl font-semibold text-white mb-3">
                  Reliability"</h3>""
                <p className="text-gray-300">
                  99.9% uptime guarantee with redundant systems;
                </p>
:pages.disabled/pages/services/ITInfrastructure.jsx
              </div>"
""
              <div className="text-center">""
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">"<svg""
                    className="w-8 h-8 text-white""
                    fill="none""
                    stroke="currentColor""
:pages.disabled/pages/services/ITInfrastructure.jsx
                    viewBox="0 0 24 24"
                  >"<path""
                      strokeLinecap="round""
                      strokeLinejoin="round""
                      strokeWidth={2}""
:pages.disabled/pages/services/ITInfrastructure.jsx
                      d="M7 11l5-5m0 0l5 5m-5-5v12"
                    />
                  </svg>"
                </div>""
                <h3 className="text-xl font-semibold text-white mb-3">
                  Scalability"</h3>""
                <p className="text-gray-300">
                  Grow your infrastructure as your business expands;
                </p>
:pages.disabled/pages/services/ITInfrastructure.jsx
              </div>"
""
              <div className="text-center">""
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">"<svg""
                    className="w-8 h-8 text-white""
                    fill="none""
                    stroke="currentColor""
:pages.disabled/pages/services/ITInfrastructure.jsx
                    viewBox="0 0 24 24"
                  >"<path""
                      strokeLinecap="round""
                      strokeLinejoin="round""
                      strokeWidth={2}""
:pages.disabled/pages/services/ITInfrastructure.jsx
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>"
                </div>""
                <h3 className="text-xl font-semibold text-white mb-3">
                  Security"</h3>""
                <p className="text-gray-300">
                  Multi-layered security for comprehensive protection;
                </p>
              </div>
            </div>
          </div>
        </section>
:pages.disabled/pages/services/ITInfrastructure.jsx
"{/* CTA Section */}""
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
:pages.disabled/pages/services/ITInfrastructure.jsx
              Ready to Build Your Infrastructure?"
            </h2>""
            <p className="text-xl text-gray-300 mb-8">'
              Let's discuss how our infrastructure services can support your
              business growth
            </p>"
            <Link""
              to="/contact""
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
              Get Infrastructure Consultation;
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

:pages.disabled/pages/services/ITInfrastructure.jsx
export default ITInfrastructure;'"
'"'"