import React from 'react';
import { Helmet } from 'react-helmet-async';
import { } from 'react-router-dom;
import { Circle, Right, } from 'lucide-react;
const PartnersPage: React.FC = () => {
  const partners = [{
      name: 'Microsoft','
      logo: '🏢','
      description: 'Strategic partnership for cloud and AI solutions','
      category: 'Technology''
    },
    {
      name: 'Amazon Web Services','
      logo: '☁️','
      description: 'infrastructure and AI services collaboration','
      category: '''
    },
    {
      name: 'Google ','
      logo: '🔍','
      description: 'AI and machine learning platform integration','
      category: 'AI/ML''
    },
    {
      name: 'IBM','
      logo: '💼','
      description: 'Enterprise AI solutions and consulting','
      category: 'Enterprise''
    },
    {
      name: 'Salesforce','
      logo: '📊','
      description: 'CRM and business intelligence integration','
      category: 'CRM''
    },
    {
      name: 'Oracle','
      logo: '🗄️','
      description: 'and enterprise application solutions','
      category: '''
    }
  ];

  const benefits = ['Access to cutting-edge technology','
    'Joint go-to-market opportunities','
    'Technical support and training','
    'Co-marketing and co-selling programs','
    'Priority access to new features','
    'Dedicated partner success manager''
  ];

const Partners = () => {
  return (
    <>
      <Helmet>
        <title>Partners - Zion Tech Group</title>
        <meta name="description" content="Our trusted partners and technology alliances." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Partners
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Our trusted partners and technology alliances.
              </p>
              <Link to="/contact">
                <FuturisticButton size="lg">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </Link>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default Partners;
