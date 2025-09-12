const AIDevelopment: NextPage = () => {
  return (;
    <Layout;
      title="AI Development Services - Zion Tech Group";
      description="Custom AI solutions and machine learning models tailored to your business needs. From chatbots to predictive analytics, we build intelligent systems.">;
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">;
        <div className="container mx-auto px-4 text-center">;
          <h1 className="text-5xl md:text-6xl font-bold mb-6">;
            AI;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Development</span>;
          </h1>;
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">;
            Transform your business with custom AI solutions and machine learning models. ;
            We build intelligent systems that drive results and enhance your competitive advantage.;
          </p>;

          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
              Start Your AI Project;
            </Link>;
            <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">;
              View All Services;
            </Link>;
          </div>;
        </div>;
      </section>;

      {/* AI Services Overview */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our AI Development Services</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We specialize in creating custom AI solutions that solve real business problems ;
              and drive measurable results across various industries.;
            </p>;
          </div>;

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">;
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">;
                <Brain className="w-8 h-8 text-blue-600" />;
              </div>;
              <h3 className="text-xl font-semibold mb-4">Machine Learning Models</h3>;
              <p className="text-gray-600 mb-4">;
                Custom ML models for predictive analytics, classification, regression, and pattern recognition.;
              </p>;
              <ul className="space-y-2">;
                <li className="flex items-center text-sm text-gray-600">;
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                  Predictive Analytics;
                </li>;
                <li className="flex items-center text-sm text-gray-600">;
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                  Classification Systems;
                </li>;
                <li className="flex items-center text-sm text-gray-600">;
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />;
                  Recommendation Engines;
                </li>;
              </ul>;
            </div>;

            'OpenAI',
            'Gemini',
            'Cohere',
            'HuggingFace',
            'PyTorch',
            'TensorFlow',
            'LangChain',
            'LlamaIndex',
            'Supabase',
            'Postgres',
            'Pinecone',
            'Weaviate' ].map(t => (
            <div
              key={t}
              className="px-3 py-2 bg-gray-100 text-gray-800 rounded-md text-center"
            >
              {t}