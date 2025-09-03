import React from 'react';
import Layout from '../components/Layout';

const AboutPage: React.FC = () => {
  return (
    <Layout title="About Us - Zion Tech Group" description="Learn about Zion Tech Group's mission, values, and team of technology experts.">
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Zion Tech Group</h1>
          
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-6 text-lg">
              Zion Tech Group is a leading technology solutions provider dedicated to helping businesses 
              transform their digital presence through cutting-edge AI, cloud architecture, and innovative 
              development services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To empower businesses with innovative technology solutions that drive growth, efficiency, 
              and competitive advantage in the digital age.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h2>
            <ul className="text-gray-600 mb-6 space-y-2">
              <li><strong>Innovation:</strong> We stay at the forefront of technology trends and emerging solutions</li>
              <li><strong>Quality:</strong> We deliver exceptional results that exceed client expectations</li>
              <li><strong>Partnership:</strong> We work closely with clients as trusted technology partners</li>
              <li><strong>Integrity:</strong> We maintain the highest standards of professionalism and ethics</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
                <p className="text-gray-600">Advanced AI solutions, model development, and automation systems</p>
              </div>
              <div className="border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Cloud Architecture</h3>
                <p className="text-gray-600">Scalable cloud solutions on AWS, Azure, and Google Cloud</p>
              </div>
              <div className="border rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
                <p className="text-gray-600">Comprehensive security solutions and compliance services</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1 302 464 0950</p>
              <p className="text-gray-600 mb-2"><strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p className="text-gray-600"><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;