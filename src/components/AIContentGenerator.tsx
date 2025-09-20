import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const AIContentGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState('');

  const generateContent = async () => {
    setIsGenerating(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setGeneratedContent(`# ${topic}

This is AI-generated content about ${topic}.`);
    setIsGenerating(false);
  };

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-white mb-8">AI Content Generator</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter your topic..."
            className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 mb-4"
          />
          <button
            onClick={generateContent}
            disabled={isGenerating || !topic}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            {isGenerating ? 'Generating...' : 'Generate Content'}
          </button>
        </div>

        {generatedContent && (
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-white mb-4">Generated Content</h2>
            <div className="bg-gray-900 p-4 rounded-lg">
              <pre className="text-gray-300 whitespace-pre-wrap">{generatedContent}</pre>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default AIContentGenerator;
