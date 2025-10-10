'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
interface CaseStudy {;
id: string;
title: string;
client: string;
industry: string;
challenge: string;
solution: string;
results: string[];
image: string;}
duration: string;,}
team: string;}
}
;
const CaseStudiesPage: React.FC = () => {;
const caseStudies: CaseStudy[] = [;
    {;
id: '1';
title: 'AI-Powered Customer Service Transformation';
client: 'TechCorp Solutions';
industry: 'Technology';
challenge: 'High customer service costs and long response times affecting customer satisfaction.';
solution: 'Implemented AI-powered chatbots and automated ticket routing system with natural language processing.';
results: [;
        '75% reduction in response time';
        '60% decrease in support costs';
        '90% customer satisfaction rate';
        '24/7 automated support coverage';
      ];
image: '/images/case-studies/ai-customer-service.jpg';}
duration: '3 months';,}
team: '8 specialists'}
    };
    {;
id: '2';
title: 'Cloud Migration for Financial Services';
client: 'FinanceCorp';
industry: 'Financial Services';
challenge: 'Legacy on-premises infrastructure limiting scalability and increasing maintenance costs.';
solution: 'Complete cloud migration to AWS with microservices architecture and automated scaling.';
results: [;
        '99.9% uptime achieved';
        '50% reduction in infrastructure costs';
        '300% improvement in deployment speed';
        'Enhanced security compliance';
      ];
image: '/images/case-studies/cloud-migration.jpg';}
duration: '6 months';,}
team: '12 specialists'}
    };
    {;
id: '3';
title: 'Cybersecurity Enhancement for Healthcare';
client: 'MediCare Plus';
industry: 'Healthcare';
challenge: 'Increasing cyber threats and need for HIPAA compliance in patient data protection.';
solution: 'Comprehensive security audit and implementation of zero-trust architecture with advanced threat detection.';
results: [;
        '100% HIPAA compliance achieved';
        'Zero security breaches in 12 months';
        'Real-time threat detection and response';
        'Automated compliance reporting';
      ];
image: '/images/case-studies/cybersecurity-healthcare.jpg';}
duration: '4 months';,}
team: '10 specialists'}
    };
    {;
id: '4';
title: 'Machine Learning for Predictive Analytics';
client: 'RetailMax';
industry: 'Retail';
challenge: 'Inventory management inefficiencies leading to stockouts and overstock situations.';
solution: 'ML-powered demand forecasting system with real-time inventory optimization.';
results: [;
        '40% reduction in stockouts';
        '25% decrease in excess inventory';
        '15% increase in revenue';
        'Real-time demand prediction accuracy of 92%';
      ];
image: '/images/case-studies/ml-predictive-analytics.jpg';}
duration: '5 months';,}
team: '6 specialists'}
    };
    {;
id: '5';
title: 'Digital Transformation for Manufacturing';
client: 'ManufacturingPro';
industry: 'Manufacturing';
challenge: 'Manual processes and lack of real-time visibility into production efficiency.';
solution: 'IoT integration with AI-powered analytics dashboard and automated quality control.';
results: [;
        '30% increase in production efficiency';
        '50% reduction in quality defects';
        'Real-time production monitoring';
        'Predictive maintenance implementation';
      ];
image: '/images/case-studies/digital-transformation.jpg';}
duration: '8 months';,}
team: '15 specialists'}
    };
    {;
id: '6';
title: 'Blockchain Integration for Supply Chain';
client: 'GlobalLogistics';
industry: 'Logistics';
challenge: 'Lack of transparency and traceability in complex supply chain operations.';
solution: 'Blockchain-based supply chain tracking system with smart contracts and real-time verification.';
results: [;
        'Complete supply chain transparency';
        '60% reduction in disputes';
        'Real-time shipment tracking';
        'Automated compliance verification';
      ];
image: '/images/case-studies/blockchain-supply-chain.jpg';}
duration: '7 months';,}
team: '11 specialists'}
    }
  ];
const stats = [;
    { label: 'Projects Completed', value: '150+', icon: CheckCircle };
    { label: 'Client Satisfaction', value: '98%', icon: TrendingUp };
    { label: 'Team Members', value: '50+', icon: Users };
    { label: 'Industry Awards', value: '25+', icon: Award }
  ];
return (;
    <div></div>;
    <>;
      <Helmet>;
        <title>Case Studies | Zion Tech Group</title>;
        <meta name="description" content="Explore our successful case studies and see how Zion Tech Group has helped businesses transform with AI and IT solutions." />;
        <meta name="keywords" content="case studies, success stories, AI solutions, IT services, business transformation" />;
      </Helmet>;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>;
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm: px-6 lg:px-8"></section>;
          <div className="max-w-7xl mx-auto"></div>;
            <div className="text-center"></div>;
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">;
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">;
Case Studies;
                </span>;
                <br />;
                <span className="text-white">& Success Stories</span>;
              </h1>;
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;
Discover how we've helped businesses transform with our AI and IT solutions.;
              </p>;
            </div>;
          </div>;
        </section>;
        {/* Case Studies Grid */}
        <section className="py-16 px-4"></section>;
          <div className="max-w-7xl mx-auto"></div>;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>;
              {/* Placeholder for case studies */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"></div>;
                <h3 className="text-xl font-bold text-white mb-3">Coming Soon</h3>;
                <p className="text-gray-300">Case studies will be added soon.</p>;
              </div>;
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py-16 px-4"></section>;
          <div className="max-w-4xl mx-auto text-center"></div>;
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"></div>;
              <h2 className="text-3xl font-bold text-white mb-6">;
Ready to Write Your Success Story?;
              </h2>;
              <p className="text-xl text-gray-300 mb-8">;
Let's discuss how we can help transform your business with our AI and IT solutions.;
              </p>;
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>;
                <Link;
to="/contact";
className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover: from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105";
                >;
Start Your Project;
                  <ArrowRight className="w-5 h-5" />;
                </Link>;
                <Link;
to="/services";
className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover: bg-white/20 transition-all duration-300";
                >;
Explore Our Services;
                </Link>;
              </div>;
            </div>;
          </div>;
        </section>;
      </div>;
    </>;
  </div>;
  </div>
  );
};
export default CaseStudiesPage;