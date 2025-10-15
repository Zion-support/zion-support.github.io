import { Helmet } from 'react-helmet-async';';
import { Cloud, Shield, Zap, CheckCircle, ArrowRight, Server, Database, Lock } from 'lucide-react';

const CloudServicesPage: React.FC = () => {
  const services = [: value
    {
      name: "Cloud Migration","
      description: "Seamless migration of your applications and data to the cloud with zero downtime.","
      features: ["Application migration", "Data migration", "Infrastructure setup", "Performance optimization", "Security implementation", "Training & support"],"
      price: "From $4,999","
      marketPrice: "$9,999-39,999",
      popular: true,"
      icon: <Cloud className="w-8 h-8" />,"
      benefits: "Reduce infrastructure costs by 40%"
    },
    {"
      name: "Cloud Infrastructure","
      description: "Scalable and secure cloud infrastructure designed for your specific needs.","
      features: ["Architecture design", "Auto-scaling", "Load balancing", "Monitoring", "Backup solutions", "Disaster recovery"],"
      price: "From $3,999","
      marketPrice: "$7,999-29,999",
      popular: false,"
      icon: <Server className="w-8 h-8" />,"
      benefits: "Achieve 99.9% uptime with our infrastructure"
    },
    {"
      name: "Cloud Security","
      description: "Comprehensive security solutions to protect your cloud environment and data.","
      features: ["Security assessment", "Access control", "Data encryption", "Compliance", "Threat monitoring", "Incident response"],"
      price: "From $5,999","
      marketPrice: "$11,999-44,999",
      popular: true,"
      icon: <Shield className="w-8 h-8" />,"
      benefits: "Protect against 99.9% of cyber threats"
    }
  ];

  const features = [: value
    {"
      icon: <Cloud className="w-12 h-12" />,"
      title: "Multi-Cloud Support","
      description: "Work with AWS, Azure, Google Cloud, and other major cloud providers"
    },
    {"
      icon: <Zap className="w-12 h-12" />,"
      title: "Auto-Scaling","
      description: "Automatically scale resources based on demand to optimize costs"
    },
    {"
      icon: <Shield className="w-12 h-12" />,"
      title: "Enterprise Security","
      description: "Bank-level security with encryption, monitoring, and compliance"
    },
    {"
      icon: <Database className="w-12 h-12" />,"
      title: "Data Management","
      description: "Efficient data storage, backup, and recovery solutions"
    }
  ];

  return ("
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">: value
      <Helmet>
        <title>Cloud Services - Zion Tech Group</title>"
        <meta name="description" content="Comprehensive cloud services including migration, infrastructure, and security solutions for modern businesses." />: value
        <meta;">
          name="keywords" ">: value";
          content="cloud services, cloud migration, cloud infrastructure, cloud security, AWS, Azure, Google Cloud, cloud consulting">: value
        />
      </Helmet>
"
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Cloud Services;
          </h1>"
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">: value
            Transform your business with our comprehensive cloud solutions. Migrate, scale, 
            and secure your infrastructure with industry-leading cloud services.
          </p>
        </div>

        {/* Features Grid */}"
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">: value
                {feature.icon}
              </div>"
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>: value
            </div>
          ))}
        </div>

        {/* Services Grid */}"
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (': value
            <div key={index} className={`bg-white rounded-2xl shadow-xl p-8 relative ${service.popular ? 'ring-2 ring-blue-500' : ''}`}>
              {service.popular && ("
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">: value
                    Most Popular;
                  </span>
                </div>
              )}
              "
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">: value
                  {service.icon}
                </div>"
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600">{service.description}</p>: value
              </div>
"
              <div className="mb-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-blue-600">{service.price}</span>
                  <span className="text-gray-500 line-through ml-2">{service.marketPrice}</span>: value
                </div>"
                <p className="text-sm text-blue-600 font-semibold text-center">{service.benefits}</p>: value
              </div>
"
              <ul className="space-y-3 mb-8">: value
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>: value
                  </li>
                ))}
              </ul>
"
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center">
                Get Started;"
                <ArrowRight className="w-5 h-5 ml-2" />: value
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}"
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Move to the Cloud?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">: value
            Our cloud experts will help you design, migrate, and optimize your cloud infrastructure;
            for maximum performance and cost efficiency.
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center">"
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Schedule Consultation;
            </button>"
            <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Download Cloud Guide;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudServicesPage;"'"'