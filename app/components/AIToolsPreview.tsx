import React, { memo } from 'react';
import { Link } from 'react-router-dom';

const AIToolsPreview: React.FC = memo(() => {
  const aiTools = [
    {
      name: 'Content Moderator',
      description: 'Automated content moderation using AI',
      link: '/zion-ai-content-moderator',
      ariaLabel: 'Try AI Content Moderator tool'
    },
    {
      name: 'Sales Predictor',
      description: 'Predict sales trends with AI',
      link: '/zion-ai-sales-predictor',
      ariaLabel: 'Try AI Sales Predictor tool'
    },
    {
      name: 'Workflow Automator',
      description: 'Automate business workflows',
      link: '/zion-ai-workflow-automator',
      ariaLabel: 'Try AI Workflow Automator tool'
    },
    {
      name: 'Financial Forecaster',
      description: 'AI-powered financial predictions',
      link: '/zion-ai-financial-forecaster',
      ariaLabel: 'Try AI Financial Forecaster tool'
    }
  ];

  return (
    <section className="mt-20" aria-labelledby="ai-tools-heading">
      <h2 id="ai-tools-heading" className="text-3xl font-bold text-gray-900 text-center mb-12">
        AI-Powered Tools
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {aiTools.map((tool) => (
          <article 
            key={tool.name}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 focus-within:ring-2 focus-within:ring-blue-500"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
            <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
            <Link 
              to={tool.link} 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
              aria-label={tool.ariaLabel}
            >
              Try Now →
            </Link>
          </article>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link 
          to="/services" 
          className="text-blue-600 hover:text-blue-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
          aria-label="View all services"
        >
          View All Services →
        </Link>
      </div>
    </section>
  );
});

AIToolsPreview.displayName = 'AIToolsPreview';

export default AIToolsPreview;