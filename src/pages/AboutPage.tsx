import React from 'react';
import { Users, Award, Globe, Target } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Card } from '../components/Card';

export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Mission-Driven",
      description: "We're committed to delivering technology solutions that make a real difference in the world."
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer service."
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Global Impact",
      description: "Our solutions reach businesses worldwide, creating positive change across industries."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Team-First",
      description: "We believe in the power of collaboration and invest heavily in our people and culture."
    }
  ];

  return (
    <>
      <SEO 
        title="About Zion Tech Group - Our Mission & Values"
        description="Learn about Zion Tech Group's mission to transform businesses through innovative AI solutions and enterprise technology. Discover our values and commitment to excellence."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Zion Tech Group
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                We're a team of passionate technologists dedicated to transforming businesses through innovative AI solutions and cutting-edge enterprise technology.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Founded in 2020, Zion Tech Group emerged from a simple belief: technology should empower businesses, not complicate them. 
                  Our journey began when our founders recognized the gap between cutting-edge AI research and practical business applications.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Today, we've grown into a global team of 200+ experts, serving Fortune 500 companies and startups alike. 
                  Our solutions have generated over $5.2 billion in ROI for our clients, but our greatest achievement is the trust they place in us.
                </p>
                <p className="text-lg text-gray-600">
                  We're not just building software; we're building the future of business intelligence, one innovation at a time.
                </p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                    <div className="text-gray-600">Team Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                    <div className="text-gray-600">Countries Served</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">$5.2B</div>
                    <div className="text-gray-600">Client ROI Generated</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-2">99.9%</div>
                    <div className="text-gray-600">Uptime Guarantee</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                These core principles guide everything we do and shape our culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the companies that trust Zion Tech Group for their technology transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                View Open Positions
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};