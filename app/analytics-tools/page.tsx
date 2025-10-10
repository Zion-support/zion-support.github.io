'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';
const PagePage: React.FC = () => {;
const features = [;
    {;
icon: Brain;}
title: 'AI-Powered Solutions';,}
description: 'Advanced AI technology to transform your business operations and improve efficiency'}
    };
    {;
icon: Zap;}
title: 'High Performance';,}
description: 'Lightning-fast processing and real-time analytics for optimal results'}
    };
    {;
icon: Shield;}
title: 'Enterprise Security';,}
description: 'Bank-level security with encryption and compliance standards'}
    };
    {;
icon: Globe;}
title: 'Global Reach';,}
description: 'Worldwide deployment and support for international businesses'}
    }
  ];
const benefits = [;
    'Advanced AI technology integration';
    'Real-time processing and analytics';
    'Enterprise-grade security and compliance';
    'Scalable and flexible solutions';
    '24/7 technical support';
    'Easy integration with existing systems';
    'Cost-effective pricing plans';
    'Proven track record of success';
  ];
return (;
    <div></div>;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>;
      <Helmet>;
        <title>Analytics Tools | Zion Tech Group</title>;
        <meta name="description" content="Professional Analytics Tools services by Zion Tech Group. Advanced AI and IT solutions for your business." />;
        <meta name="keywords" content="analytics tools, AI solutions, IT services, Zion Tech Group, data analytics" />;
      </Helmet>;
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8"></section>;
        <div className="max-w-7xl mx-auto"></div>;
          <div className="text-center"></div>;
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">;
Analytics Tools;
              </span>;
              <br />;
              <span className="text-white">Solutions</span>;
            </h1>;
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
Transform your business with our advanced analytics tools.;
Powered by cutting-edge AI technology and industry expertise.;
            </p>;
          </div>;
        </div>;
      </section>;
      {/* Features Section */}
      <section className="py-16 px-4"></section>;
        <div className="max-w-7xl mx-auto"></div>;
          <div className="text-center mb-12"></div>;
            <h2 className="text-3xl font-bold text-white mb-4">;
Ready to Get Started?;
            </h2>;
            <p className="text-xl text-purple-100 mb-8">;
Contact our experts to discuss your analytics needs and get a customized solution.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>;
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">;
                <Phone className="mr-2 h-5 w-5" />;
Call Now;
              </button>;
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover: bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">;
                <Mail className="mr-2 h-5 w-5" />;
Email Us;
              </button>;
            </div>;
          </div>;
        </div>;
      </section>;
    </div>;
  </div>;
  </div>
  );
};
export default PagePage;