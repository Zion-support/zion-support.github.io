import { Helmet } from 'react-helmet-async';

export default function AIContentGeneratorPage() {
  return (
    <>
      <Helmet>
        <title>AI Content Generator - Zion Tech Group</title>
        <meta name="description" content="Generate high-quality content with our AI-powered content generator." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">AI Content Generator</h1>
          <p className="text-lg text-gray-600">
            Generate high-quality content with our advanced AI-powered content generator.
          </p>
        </div>
      </div>
    </>
  );
}