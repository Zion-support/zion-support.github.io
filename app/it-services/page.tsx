import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and enhanced security.',
      features: ['AWS/Azure/GCP migration', 'Zero downtime migration', 'Cost optimization', 'Security compliance'],
      pricing: 'Starting at $2,500',
      link: '/cloud-migration',
      popular: true,
      duration: '2-4 weeks'
    },
    {
      link: '/custom-development',
      popular: false,
      duration: '4-12 weeks'
    },
    {
      popular: false,
      duration: '6-16 weeks'
    },
    {
    }
  ];

  const benefits = [
    {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
      </Helmet>

      {/* Hero Section */}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

