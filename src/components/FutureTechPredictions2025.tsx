import React from 'react';
const FutureTechPredictions2025: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 min-h-screen py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/10 via-transparent to-purple-500/10"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-6">
            <Rocket className="w-5 h-5 text-indigo-400 mr-2" />
            <span className="text-indigo-300 font-medium">Future Technology Predictions 2025-2030</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future is
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"> Closer Than You Think</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our predictions for the next 5 years of technological advancement and prepare for the revolutionary changes ahead.
          </p>
        </div>
        {/* Year Navigation */}
        <div
          className="mb-16"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {predictions.map((predictionindex) => (
              <button
                key={prediction.year}
                onClick={() => setActiveYear(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeYear === index
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                }`}
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                {prediction.year}
              </button>
            ))}
          </div>
          {/* Active Prediction Display */}
            <div
              key={activeYear}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${predictions[activeYear].color} mb-6`}>
                    <predictions[activeYear].icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-4">
                    {predictions[activeYear].title}
                  </h3>
                  <p className="text-xl text-gray-300 mb-6">
                    {predictions[activeYear].subtitle}
                  </p>
                  <p className="text-lg text-gray-400 mb-8">
                    {predictions[activeYear].impact}
                  </p>
                  {/* Probability Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300">Probability</span>
                      <span className="text-white font-bold">{predictions[activeYear].probability}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${predictions[activeYear].color}`}
                      />
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-6">Key Predictions</h4>
                  <div className="space-y-4">
                    {predictions[activeYear].predictions.map((predictionindex) => (
                      <div
                        key={prediction}
                        className="flex items-center"
                      >
                        <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{prediction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Technology Progress */}
        <div
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Technology Development Progress
          </h2>
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {technologies.map((techindex) => (
                <div
                  key={tech.name}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{tech.name}</span>
                    <span className="text-gray-400">{tech.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full bg-gradient-to-r ${tech.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Timeline */}
        <div
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Technology Timeline
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <div className="space-y-12">
              {milestones.map((milestoneindex) => (
                <div
                  key={milestone.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                      <div className="text-2xl font-bold text-white mb-2">{milestone.year}</div>
                      <div className="text-lg text-gray-300 mb-2">{milestone.event}</div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        milestone.status === 'In Progress' ? 'bg-green-500/20 text-green-400' :
                        milestone.status === 'Planned' ? 'bg-blue-500/20 text-blue-400' :
                        milestone.status === 'Research' ? 'bg-yellow-500/20 text-yellow-400' :
                        milestone.status === 'Development' ? 'bg-orange-500/20 text-orange-400' :
                        milestone.status === 'Concept' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {milestone.status}
                      </div>
                    </div>
                  </div>
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-slate-900"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div
          className="text-center bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl p-12 border border-indigo-500/30"
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready for the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stay ahead of the curve and prepare your business for the technological revolution 'that', 's coming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 flex items-center justify-center">
              Get Future-Ready
              <Rocket className="w-5 h-5 ml-2" />
            </button>
            <button className="bg-white/10 text-white px-8 py-4 rounded-full font-medium hover:bg-white/20 border border-white/20 transition-all duration-300 flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FutureTechPredictions2025;