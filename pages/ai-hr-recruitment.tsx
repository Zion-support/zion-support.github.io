import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

const AIHrRecruitment: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>AI HR Recruitment - Zion Tech Group</title>
        <meta name="description" content="AI-powered HR recruitment platform for efficient talent acquisition" />
      </Head>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">AI HR Recruitment</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Streamline your recruitment process with AI-powered tools for efficient talent acquisition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Candidate Screening</h3>
            <p className="text-gray-600 mb-4">
              Automatically screen and rank candidates based on job requirements and qualifications.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Resume parsing</li>
              <li>• Skills matching</li>
              <li>• Experience analysis</li>
              <li>• Ranking algorithms</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Interview Automation</h3>
            <p className="text-gray-600 mb-4">
              Conduct AI-powered interviews and assessments to evaluate candidate fit.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Video interviews</li>
              <li>• Skills assessments</li>
              <li>• Personality tests</li>
              <li>• Cultural fit analysis</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Talent Pipeline</h3>
            <p className="text-gray-600 mb-4">
              Build and maintain a pipeline of qualified candidates for future opportunities.
            </p>
            <ul className="text-sm text-gray-500 space-y-2">
              <li>• Candidate database</li>
              <li>• Pipeline management</li>
              <li>• Nurturing campaigns</li>
              <li>• Relationship tracking</li>
            </ul>
          </div>
        </div>

        <div className="bg-teal-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Find the Right Talent</h2>
          <p className="text-lg text-gray-700 mb-6">
            Accelerate your recruitment process with AI-powered tools that help you find and hire the best candidates.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
              Get Started
            </a>
            <a href="/about" className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50">
              Learn More
            </a>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default AIHrRecruitment;