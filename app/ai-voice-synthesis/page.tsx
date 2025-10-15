import { Helmet } from 'react-helmet-async';

export default function AivoicesynthesisPage() {
  return (
    <>
      <Helmet>
        <title>Ai Voice Synthesis - Zion Tech Group</title>
        <meta name="description" content="Professional ai voice synthesis solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Ai Voice Synthesis</h1>
          <p className="text-lg text-gray-600">
            Professional ai voice synthesis solutions for modern businesses.
          </p>
        </div>
      </div>
    </>
  );
}
