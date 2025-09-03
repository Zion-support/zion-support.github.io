import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';

const TalentPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI/ML Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead AI/ML projects, develop cutting-edge solutions, and work with modern frameworks.'
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and implement scalable cloud architectures on AWS, Azure, and GCP.'
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build CI/CD pipelines, manage infrastructure, and ensure system reliability.'
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'Remote',
      type: 'Full-time',
      description: 'Implement security solutions, conduct audits, and protect client infrastructure.'
    }
  ];

  return (
    <Layout title="Careers - Zion Tech Group" description="Join our team of technology experts and help shape the future of business solutions.">
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Join Our Team</h1>
          <p className="text-gray-600 mb-10 max-w-3xl text-lg">
            We&apos;re looking for passionate technology professionals to join our growing team. 
            Work on cutting-edge projects, learn from industry experts, and make a real impact.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {positions.map((position, index) => (
              <div key={index} className="border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900">{position.title}</h3>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    {position.type}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{position.location}</p>
                <p className="text-gray-700 mb-4">{position.description}</p>
                <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                  Apply Now
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <h3 className="font-semibold mb-2">Remote-First</h3>
                <p className="text-gray-600">Work from anywhere with flexible schedules</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-gray-600">Continuous learning and career development</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cutting-Edge Projects</h3>
                <p className="text-gray-600">Work with the latest technologies and frameworks</p>
              </div>
            </div>
            <Link href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TalentPage;