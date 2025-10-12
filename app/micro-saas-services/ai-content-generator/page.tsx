
export default function AiContentGeneratorPage() {
  return (

        <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Ai Content Generator - Zion Tech Group</title>
        <h1 className="text-4xl font-boldtext-whitemb-6">Ai Content Generator</h1>
        <p className="text-lgtext-gray-300mb-8">Professional ai content generator services coming soon.</p>
          Contact Us
    
  );

      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiContentGenerator</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai content generator solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>  );
}
