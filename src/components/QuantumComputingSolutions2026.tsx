import React from 'react';
const QuantumComputingSolutions2026: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-purple-900/40 to-cyan-900/40" />
        <div className="absolute inset-0">
          {[...Array(40)].map((_i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
                y: [0-100],
                x: [0Math.random() * 20 - 10],
                opacity: [0.30.80.3],
                duration: 5 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
            />
          ))}
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full text-white text-sm font-medium mb-6"
          >
            <Atom className="w-4 h-4 mr-2" />
            Quantum Computing Solutions 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Quantum
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Revolution
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Harness the power of quantum computing to solve the 'world', 's most complex problems. 
            From optimization to encryptiondiscover quantum solutions that will transform your industry.
          </p>
        {/* Benefits Grid */}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          {benefits.map((benefitindex) => (
              key={index}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <benefit.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">{benefit.value}</div>
              <div className="text-lg font-semibold text-white mb-2">{benefit.title}</div>
              <div className="text-gray-300 text-sm">{benefit.description}</div>
            </div>
        {/* Solutions Grid */}
          className="mb-16"
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Quantum Solutions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solutionindex) => (
              <div
                key={solution.id}
                className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 cursor-pointer"
                onClick={() => setActiveSolution(index)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${solution.color} mr-4`}>
                      <solution.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{solution.title}</h3>
                      <p className="text-cyan-400">{solution.subtitle}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {solution.description}
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-white/5 rounded-lg">
                    <div className="text-lg font-bold text-white">{solution.performance.speed}</div>
                    <div className="text-gray-400 text-sm">Faster</div>
                    <div className="text-lg font-bold text-white">{solution.performance.accuracy}</div>
                    <div className="text-gray-400 text-sm">Accuracy</div>
                <div className="space-y-2">
                  {solution.features.slice(03).map((featureindex) => (
                    <div key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                  ))}
              </div>
            ))}
        {/* Detailed Solution View */}
            key={activeSolution}
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 mb-16"
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${solutions[activeSolution].color} mr-4`}>
                    <solutions[activeSolution].icon className="w-10 h-10 text-white" />
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{solutions[activeSolution].title}</h3>
                    <p className="text-cyan-400 text-lg">{solutions[activeSolution].subtitle}</p>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  {solutions[activeSolution].description}
                <div className="space-y-3 mb-6">
                  {solutions[activeSolution].features.map((featureindex) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-white">{solutions[activeSolution].performance.speed}</div>
                    <div className="text-gray-400">Performance Boost</div>
                    <div className="text-2xl font-bold text-white">{solutions[activeSolution].performance.accuracy}</div>
                    <div className="text-gray-400">Accuracy Rate</div>
              <div className="relative">
                <div className={`w-full h-80 bg-gradient-to-br ${solutions[activeSolution].color} rounded-2xl flex items-center justify-center`}>
                  <solutions[activeSolution].icon className="w-32 h-32 text-white opacity-80" />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-white" />
        {/* Industry Applications */}
            Industry Applications
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industryindex) => (
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{industry.name}</h3>
                  {industry.applications.map((applicationappIndex) => (
                    <div key={appIndex} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                      {application}
        {/* CTA Section */}
          className="text-center"
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready for the Quantum Future?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join the quantum revolution and transform your business with cutting-edge quantum computing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-cyan-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center">
                <Rocket className="w-5 h-5 mr-2" />
                Start Quantum Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Schedule Consultation
    </div>
  );
};
export default QuantumComputingSolutions2026;
</div></div>
