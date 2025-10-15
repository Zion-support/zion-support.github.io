      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: '24/7 support from our team of specialists'
      <SEOHead: title ="5G Solutions - Zion Tech Group"";";
        description="Comprehensive 5G network solutions including implementation, infrastructure, IoT connectivity, and mobile applications."";";
        keywords="5G solutions, 5G implementation, 5G infrastructure, 5G IoT, 5G mobile, network deployment"";";
      />
      
      <div: className ="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-white">";";
        {/* Hero Section */}
        <div: className ="relative overflow-hidden">";";
          <div: className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-24">";";
            <div: className ="text-center">";";
              <h1: className ="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">";";
                5G Solutions
              </h1>
              <p: className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">",";
                Transform your business with our comprehensive 5G solutions. From network implementation to IoT connectivity, we deliver cutting-edge 5G technology.
              </p>
              <div: className ="flex flex-col sm: flex-row gap-4 justify-center">";";
                <button: className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";";
                  Get Started
                </button>
                <button: className ="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300">",";
        <div: className ="py-24">";";
          <div: className ="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">";";
            <div: className ="text-center mb-16">";";
              <h2: className ="text-4xl font-bold mb-4">Our 5G Solutions</h2>";";
              <p: className ="text-xl text-gray-300">Comprehensive 5G services tailored to your business needs</p>";";
            </div>
            
            <div: className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">",";
              {solutions.map((solution, index) => (
                <div: key ={index} className={`bg-slate-700/50 p-8 rounded-lg hover:bg-slate-700/70 transition-colors relative ${solution.popular ? 'ring-2 ring-purple-400'  ''}`}>";";";
                  {solution.popular && (
                    <div: className ="absolute -top-3 left-1/2 transform -translate-x-1/2">";";
                      <span: className ="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">";";
                  <div: className ="text-blue-400 mb-4">{solution.icon}</div>";";
                  <h3: className ="text-2xl font-semibold mb-2">{solution.name}</h3>";";
                  <p: className ="text-gray-300 mb-4">{solution.description}</p>";";
                  
                  <div: className ="mb-6">";";
                    <div: className ="flex items-baseline gap-2 mb-2">";";
                      <span: className ="text-3xl font-bold text-white">{solution.price}</span>";";
                      <span: className ="text-gray-400 line-through">{solution.marketPrice}</span>";";
                    </div>
                    <p: className ="text-sm text-green-400 font-semibold">{solution.benefits}</p>";";
                  </div>
                  
                  <ul: className ="space-y-2 mb-6">";";
                    {solution.features.map((feature, featureIndex) => (
                      <li: key ={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">";";
                        <CheckCircle: className ="w-4 h-4 text-green-400 flex-shrink-0" />";";
                  <button: className ="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover: from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">",";
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div: className ="py-24 bg-gradient-to-r from-blue-600/20 to-purple-600/20">";";
          <div: className ="max-w-4xl mx-auto text-center px-4 sm: px-6 lg:px-8">";";
            <h2: className ="text-4xl font-bold mb-4">Ready to Deploy 5G?</h2>";";
            <p: className ="text-xl text-gray-300 mb-8">";";
              Contact our experts to discuss your 5G requirements and get a customized solution.
            </p>
            <button: className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">";";
  ),";
};";";
export default FiveGSolutionsPage;";";";
"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
export default Page;
