'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Building2, Heart, GraduationCap, ShoppingCart, Factory, Landmark, Car, Plane } from 'lucide-react';

const IndustriesPage: React.FC = () => {
  const industries = [
    {
      name: 'Healthcare',
      icon: <Heart className="w-12 h-12 text-red-500" />,
      description: 'AI-powered medical solutions, patient care optimization, and healthcare analytics.',
      solutions: ['Medical AI', 'Patient Management', 'Drug Discovery', 'Telemedicine', 'Health Analytics'],
      benefits: ['Improve patient outcomes', 'Reduce costs by 30%', 'Enhance diagnostic accuracy', 'Streamline operations'],
      caseStudy: 'Reduced patient wait times by 40% for a major hospital network'
    },
    {
      name: 'Finance & Banking',
      icon: <Building2 className="w-12 h-12 text-blue-500" />,
      description: 'Advanced fintech solutions, risk management, and automated financial services.',
      solutions: ['Fraud Detection', 'Algorithmic Trading', 'Risk Assessment', 'Digital Banking', 'Compliance'],
      benefits: ['Reduce fraud by 95%', 'Increase trading profits by 35%', 'Automate compliance', 'Improve customer experience'],
      caseStudy: 'Saved $2M annually in fraud prevention for a regional bank'
    },
    {
      name: 'Manufacturing',
      icon: <Factory className="w-12 h-12 text-orange-500" />,
      description: 'Smart manufacturing solutions, supply chain optimization, and quality control.',
      solutions: ['Predictive Maintenance', 'Quality Control', 'Supply Chain AI', 'Robotics', 'IoT Integration'],
      benefits: ['Reduce downtime by 50%', 'Improve quality by 25%', 'Optimize inventory', 'Increase efficiency'],
      caseStudy: 'Increased production efficiency by 30% for an automotive manufacturer'
    },
    {
      name: 'Retail & E-commerce',
      icon: <ShoppingCart className="w-12 h-12 text-green-500" />,
      description: 'E-commerce solutions, customer experience enhancement, and retail analytics.',
      solutions: ['Personalization', 'Inventory Management', 'Customer Analytics', 'Chatbots', 'Recommendation Engines'],
      benefits: ['Increase sales by 25%', 'Improve customer satisfaction', 'Reduce inventory costs', 'Optimize pricing'],
      caseStudy: 'Boosted online sales by 40% for a major retail chain'
    },
    {
      name: 'Education',
      icon: <GraduationCap className="w-12 h-12 text-purple-500" />,
      description: 'EdTech solutions, learning management systems, and educational analytics.',
      solutions: ['Learning Analytics', 'Personalized Learning', 'Assessment Tools', 'Virtual Classrooms', 'Student Management'],
      benefits: ['Improve learning outcomes', 'Personalize education', 'Reduce administrative burden', 'Enhance engagement'],
      caseStudy: 'Improved student performance by 35% at a university'
    },
    {
      name: 'Government',
      icon: <Landmark className="w-12 h-12 text-indigo-500" />,
      description: 'Public sector digital transformation and citizen services optimization.',
      solutions: ['Citizen Services', 'Data Analytics', 'Process Automation', 'Security', 'Compliance'],
      benefits: ['Improve citizen satisfaction', 'Reduce processing time', 'Enhance security', 'Increase transparency'],
      caseStudy: 'Reduced permit processing time by 60% for a city government'
    },
    {
      name: 'Transportation',
      icon: <Car className="w-12 h-12 text-cyan-500" />,
      description: 'Smart transportation solutions, fleet management, and logistics optimization.',
      solutions: ['Fleet Management', 'Route Optimization', 'Predictive Maintenance', 'Autonomous Vehicles', 'Traffic Analytics'],
      benefits: ['Reduce fuel costs by 20%', 'Improve safety', 'Optimize routes', 'Reduce emissions'],
      caseStudy: 'Reduced fuel costs by $500K annually for a logistics company'
    },
    {
      name: 'Aerospace',
      icon: <Plane className="w-12 h-12 text-sky-500" />,
      description: 'Aerospace solutions, flight optimization, and maintenance systems.',
      solutions: ['Flight Optimization', 'Predictive Maintenance', 'Safety Systems', 'Fuel Management', 'Crew Scheduling'],
      benefits: ['Improve safety', 'Reduce fuel consumption', 'Optimize maintenance', 'Enhance efficiency'],
      caseStudy: 'Reduced maintenance costs by 25% for an airline'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industries - Zion Tech Group</title>
        <meta name="description" content="Industry-specific AI and IT solutions for healthcare, finance, manufacturing, retail, education, and more." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Specialized AI and IT solutions tailored to meet the unique challenges of your industry
            </p>
          </section>

          {/* Industries Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    {industry.icon}
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">{industry.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{industry.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Our Solutions:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.solutions.map((solution, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {solution}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                    <ul className="text-sm text-gray-600">
                      {industry.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center mb-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-sm text-gray-500 italic">
                      "{industry.caseStudy}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We work with businesses across all sectors. Contact us to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Discuss Your Industry
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default IndustriesPage;
