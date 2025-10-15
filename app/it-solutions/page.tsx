<<<<<<< HEAD
'use client';
    {;
      title: "Cloud Infrastructure,;
      description: "Scalable and secure cloud infrastructure solutions for modern businesses.",;
      icon: "CloudIcon",;
      features: "[;
        Scalable architecture",;
        High availability",;
        "Security compliance,;
        Cost optimization,;
        24/7 monitoring,;
        Disaster recovery";
      ],;
      color: "from-blue-500 to-cyan-500,;
      price: 'Starting at $1',500/month,;
      benefits: '[Scalability', Reliability", "Cost efficiency],;
      useCases: '[Web hosting', Data storage, Application hosting"],;
      href: ''"/cloud-infrastructure;
    },;
    {;
      title: "Cybersecurity Solutions",;
      description: "Comprehensive cybersecurity solutions to protect your digital assets and data.",;
      icon: "ShieldCheckIcon",;
      features: "[;
        Threat detection"",;
        "Vulnerability assessment,;
        Security monitoring,;
        Incident response,;
        Compliance management",;
        "Security training;
      ],;
      color: "from-red-500 to-pink-500",;
      price: 'Starting at $2',200/month,;
      benefits: '[Enhanced security"', "Risk mitigation, Compliance],;
      useCases: '[Data protection', Network security", "Compliance],;
      href: ''"/cybersecurity",;
    },;
    {;
      title: "IT Consulting",;
      description: "Strategic IT consulting to help you make informed technology decisions."",;
      icon: "LightBulbIcon",;
      features: "[;
        "Technology assessment",;
        Strategic planning,;
        Vendor selection,;
        Implementation guidance",;
        "Change management,;
        Training and support;
      ],;
      color: "from-green-500 to-emerald-500",;
      price: 'Starting at $1',200/month",;
      benefits: '["Expert guidance', Cost savings, Risk reduction],;
      useCases: '[Technology planning"', "Digital transformation, System integration],;
      href: ''"/it-consulting",;
    },;
    {;
      title: "Network Solutions"",;
      description: "Advanced networking solutions for reliable and secure connectivity.,;
      icon: "GlobeAltIcon",;
      features: "[;
        Network design",;
        Security implementation,;
        Performance optimization",;
        "Monitoring and maintenance,;
        Disaster recovery,;
        Remote access;
      ],;
      color: "from-purple-500 to-indigo-500"",;
      price: "Starting at $1,800/month,;
      benefits: '[Reliable connectivity', Enhanced security, Performance"],;
      useCases: '["Office networking', Remote work, Data centers],;
      href: ''"/network-solutions"",;
    },;
    {;
      title: "Data Management,;
      description: 'Comprehensive data management solutions for storage', processing, and analytics.,;
      icon: "ChartBarIcon",;
      features: "[;
        Data storage",;
        Data processing",;
        "Analytics and reporting,;
        Data security,;
        Backup and recovery,;
        Data governance";
      ],;
      color: "from-orange-500 to-red-500,;
      price: 'Starting at $2',000/month,;
      benefits: '[Better insights', Data security", "Compliance],;
      useCases: '[Business intelligence', Data analytics, Compliance"],;
      href: ''"/data-management;
    },;
    {;
      title: "IT Support",;
      description: "Comprehensive IT support services to keep your systems running smoothly.",;
      icon: "UserGroupIcon",;
      features: "[;
        24/7 support"",;
        "Remote assistance,;
        System maintenance,;
        Software updates,;
        Hardware support",;
        "User training;
      ],;
      color: "from-cyan-500 to-blue-500",;
      price: 'Starting at $1',000/month,;
      benefits: '[Reduced downtime"', "Expert support, Cost efficiency],;
      useCases: '[Help desk', System maintenance", "User support],;
      href: ''"/it-support",;
    }
  ];
const features = [;
    {;
      title: "Expert Solutions",;
      description: "Our team of certified professionals delivers cutting-edge IT solutions."",;
      icon: "CpuChipIcon",;
    },;
    {;
      title: "Scalable Architecture,;
      description: "Solutions that grow with your business and adapt to changing needs.",;
      icon: "CloudIcon",;
    },;
    {;
      title: "24/7 Support",;
      description: "Round-the-clock support to ensure your systems are always running."",;
      icon: "UserGroupIcon",;
    },;
    {;
      title: "Security First,;
      description: "Security is built into every solution we deliver."",;
      icon: "ShieldCheckIcon",;
    }
  ];
import React from 'react';
import { Helmet   } from 'react-helmet-async';
    </>
  ),;
}
export default ITSolutionsPage;
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Server, Shield, Cloud, Database } from 'lucide-react';

const Page: React.FC = () => {

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions for modern businesses" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Comprehensive IT services to power your digital transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Server className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Infrastructure</h3>
              <p className="text-gray-300">
                Robust IT infrastructure solutions for scalable growth.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Cloud className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Cloud Services</h3>
              <p className="text-gray-300">
                Secure and scalable cloud computing solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const page = React.lazy(() => Promise.resolve({ default: Page }));
export default page;
>>>>>>> 12ad1f6b6cfd812b560a1dd10f09dfa9de4eb0ce
