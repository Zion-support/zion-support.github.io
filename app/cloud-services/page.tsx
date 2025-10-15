<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
const CloudServicesPage: React.FC = () => {}
  const services = [
    {}
      name: "Cloud Migration",
      description: "Seamless migration of your applications and data to the cloud with zero downtime.",
      features: ["Application migration", "Data migration", "Infrastructure setup", "Performance optimization", "Security implementation", "Training & support"],
      price: "From $4,999",
      marketPrice: "$9,999-39,999",
      popular: true,
      icon: <Cloud className="w-8 h-8" />,
      benefits: "Reduce infrastructure costs by 40%"
    },
    {}
      name: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure designed for your specific needs.",
      features: ["Architecture design", "Auto-scaling", "Load balancing", "ing", "Backup solutions", "Disaster recovery"],
      price: "From $3,999",
      marketPrice: "$7,999-29,999",
      popular: false,
      icon: <Server className="w-8 h-8" />,
      benefits: "Achieve 99.9% uptime with our infrastructure"
    },
    {}
      name: "Cloud Security",
      description: "Comprehensive security solutions to protect your cloud environment and data.",
      features: ["Security assessment", "Access control", "Data encryption", "Compliance", "Threat monitoring", "Incident response"],
      price: "From $5,999",
      marketPrice: "$11,999-44,999",
      popular: true,
      icon: <className="w-8 h-8" />,
      benefits: "Protect against 99.9% of cyber threats"
    }
  ];

  const features = [
    {}
      icon: <Cloud className="w-12 h-12" />,
      title: "Multi-Cloud Support",
      description: "Work with AWS, Azure, Google Cloud, and other major cloud providers"
    },
    {}
      icon: <className="w-12 h-12" />,
      title: "Auto-Scaling",
      description: "Automatically scale resources based on demand to optimize costs"
    },
    {}
      icon: <className="w-12 h-12" />,
      title: "Enterprise Security",
      description: "Bank-level security with encryption, monitoring, and compliance"
    },
    {}
      icon: <className="w-12 h-12" />,
      title: "Data Management",
      description: "Efficient data storage, backup, and recovery solutions"
    }
  ];

  return ()
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud services including migration, infrastructure, and security solutions for modern businesses." />
        <metaname="keywords">
          content="cloud services, cloud migration, cloud infrastructure, cloud security, AWS, Azure, Google Cloud, cloud consulting"
        />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cloud Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with our comprehensive cloud solutions. Migrate, scale, 
            and secure your infrastructure with industry-leading cloud services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => ()}
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => ()}
            <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {service.popular && ()}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                  <span className="text-gray-500 line-through ml-2">{service.marketPrice}</span>
                </div>
                <p className="text-sm text-blue-600 font-semibold text-center">{service.benefits}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => ()}
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">

=======
import React from 'react';;
import SEOHead from '../components/SEOHead';

const CloudServicesPage: React.FC = () => {
  return (
    <>
      <SEOHead title ="Cloud Services - Zion Tech Group"",
        description="Comprehensive cloud services including migration, infrastructure management, security, and consulting for AWS, Azure, and Google Cloud."";
        keywords="cloud services, cloud migration, cloud infrastructure, cloud security, AWS, Azure, Google Cloud, cloud consulting"";
      />
      <div className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";
        <div className ="min-h-screen flex items-center justify-center">";
          <div className ="text-center max-w-4xl mx-auto px-4">";
            <h1 className ="text-5xl md: text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";
              Cloud Services
            </h1>
            <p className ="text-xl text-gray-300 mb-8">",
              Comprehensive cloud services including migration, infrastructure management, security, and consulting for AWS, Azure, and Google Cloud.
            </p>
            <div className ="flex flex-col sm: flex-row gap-4 justify-center">";
              <button className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";
>>>>>>> main
                Get Started
              </button>
              <button className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">";
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  ),
};

export default CloudServicesPage;
