import React from 'react';
import { Helmet } from 'react-helmet-async';

const StatusPage: React.FC = () => {
  const services = [
    { name: 'API Services', status: 'operational', uptime: '99.9%' },
    { name: 'Web Application', status: 'operational', uptime: '99.8%' },
    { name: 'Database', status: 'operational', uptime: '99.9%' },
    { name: 'CDN', status: 'operational', uptime: '99.9%' },
    { name: 'Authentication', status: 'operational', uptime: '99.9%' }
  ];

  return (<>
      <Helmet></></Helmet>
        <title>System Status - Zion Tech Group | Service Status</title>
        <meta name="description" content="Check the current status of Zion Tech Group's services and systems. Real-time monitoring and incident reporting." /></meta>
        <meta name="keywords" content="system status, service status, _uptime, _monitoring, incidents" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/status" /></link>
      </Helmet>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16"></section>
        <div className="absolute inset-0 overflow-hidden"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="text-center max-w-4xl mx-auto"></div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>
              System
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"></span>
                {' '}Status
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>
              Real-time monitoring of our services and systems. All systems are operational.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-800"></section>
        <div className="container mx-auto px-4"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-4">Service Status</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
              Current status of all our services and systems.
            </p>
          </div>

          <div className="max-w-4xl mx-auto"></div>
            <div className="space-y-4"></div>
              {services.map((service, index) => (
                <div key={index} className="bg-slate-700/50 p-6 rounded-xl border border-slate-600/50"></div>
                  <div className="flex items-center justify-between"></div>
                    <div className="flex items-center"></div>
                      <CheckCircle className="w-6 h-6 text-green-400 mr-3" /></CheckCircle>
                      <span className="text-white font-semibold text-lg">{service.name}</span>
                    </div>
                    <div className="text-right"></div>
                      <div className="text-green-400 font-semibold">Operational</div>
                      <div className="text-gray-400 text-sm">{service.uptime} uptime</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatusPage;