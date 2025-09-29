import React from 'react';

const LatestInsights: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Latest Insights</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <article className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">AI Revolution 2025</h3>
            <p className="text-gray-600 mb-4">Discover how AI is reshaping industries and creating opportunities.</p>
            <a href="/blog/ai-revolution-2025" className="text-blue-600 font-semibold">Read More →</a>
          </article>
          <article className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Cloud Migration Guide</h3>
            <p className="text-gray-600 mb-4">Complete guide to migrating your infrastructure to the cloud.</p>
            <a href="/blog/cloud-migration-guide" className="text-blue-600 font-semibold">Read More →</a>
          </article>
          <article className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Cybersecurity Trends</h3>
            <p className="text-gray-600 mb-4">Stay ahead with the latest cybersecurity trends and best practices.</p>
            <a href="/blog/cybersecurity-trends" className="text-blue-600 font-semibold">Read More →</a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
