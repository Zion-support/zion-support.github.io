import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import { ArrowRight, CheckCircle, Star, Zap, Users, Shield, Cloud, Database } from 'lucide-react';
import Link from 'next/link';
const CloudMigrationPage: NextPage = () => {;
  const benefits = [;
    {;
      icon: <Cloud className="w-8 h-8" />,
      title: 'Seamless Migration',
      description: 'Zero-downtime cloud migration with minimal business disruption and maximum efficiency.';
},
    {;
      icon: <Database className="w-8 h-8" />,
      title: 'Data Security',
      description: 'Enterprise-grade security and compliance throughout the migration process.';
},
    {;
      icon: <Zap className="w-8 h-8" />,
      title: 'Cost Optimization',
      description: 'Reduce infrastructure costs by up to 40% with optimized cloud architecture.';
},
    {;
      icon: <Shield className="w-8 h-8" />,
      title: 'Scalability',
      description: 'Future-proof your infrastructure with auto-scaling and flexible resources.';
}
  ];
  const services = [;
    {;
      title: 'Cloud Assessment & Planning',
      description: 'Comprehensive analysis and strategic planning for your cloud migration',
      price: 'From $5,000',
      features: ['Infrastructure assessment', 'Migration strategy', 'Cost analysis', 'Risk evaluation'];
},
    {;
      title: 'Application Migration',
      description: 'Seamless migration of applications to cloud platforms',
      price: 'From $15,000',
      features: ['Application analysis', 'Migration execution', 'Testing & validation', 'Performance optimization'];
},
    {;
      title: 'Data Migration',
      description: 'Secure and efficient data migration to cloud storage',
      price: 'From $10,000',
      features: ['Data mapping', 'Migration planning', 'Data transfer', 'Integrity verification'];
},
    {;
      title: 'Cloud Optimization',
      description: 'Post-migration optimization for performance and cost',
      price: 'From $8,000',
      features: ['Performance tuning', 'Cost optimization', 'Security hardening', 'Monitoring setup'];
}
  ];
  return (;
    <MainLayout;
      title="Cloud Migration Solutions - Zion Tech Group";
      description="Expert cloud migration services including assessment, planning, and seamless migration to AWS, Azure, and Google Cloud platforms.">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4">;
          <div className="max-w-4xl mx-auto text-center">;
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">;
              Cloud Migration Solutions;
            </h1>;
            <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">;
              Accelerate your digital transformation with expert cloud migration services. ;
              Seamlessly migrate to AWS, Azure, or Google Cloud with zero downtime and maximum efficiency.;
            </p>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">;
                Start Migration;
                <ArrowRight className="w-5 h-5 ml-2" />;
              </Link>;
              <Link href="/services/it-services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">;
                View IT Services;
              </Link>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Benefits Section */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Cloud Migration Services?</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We provide comprehensive cloud migration services with proven methodologies and expert support.;
            </p>;
          </div>;
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">;
            {benefits.map((benefit, index) => (;
              <div key={index} className="text-center group">;
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">;
                  <div className="text-blue-600">{benefit.icon}</div>;
                </div>;
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>;
                <p className="text-gray-600">{benefit.description}</p>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* Services Section */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Cloud Migration Services</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              End-to-end cloud migration services designed to minimize risk and maximize value.;
            </p>;
          </div>;
          <div className="grid md:grid-cols-2 gap-8">;
            {services.map((service, index) => (;
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">;
                <div className="flex justify-between items-start mb-4">;
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>;
                  <span className="text-blue-600 font-semibold">{service.price}</span>;
                </div>;
                <p className="text-gray-600 mb-6">{service.description}</p>;
                <ul className="space-y-2">;
                  {service.features.map((feature, featureIndex) => (;
                    <li key={featureIndex} className="flex items-center text-gray-600">;
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />;
                      {feature}
                    </li>;
                  ))}
                </ul>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold text-white mb-6">;
            Ready to Migrate to the Cloud?;
          </h2>;
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">;
            Let's discuss your cloud migration needs and create a customized strategy for your business.;
          </p>;
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center">;
            Start Your Migration;
            <ArrowRight className="w-5 h-5 ml-2" />;
          </Link>;
        </div>;
      </section>;
    </MainLayout>;
  );
};
export default CloudMigrationPage;