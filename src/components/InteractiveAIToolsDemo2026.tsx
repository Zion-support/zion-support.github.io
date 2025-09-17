import React from 'react';
const InteractiveAIToolsDemo2026: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Interactive AI Tools Demo 2026
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Experience the power of our cutting-edge AI tools through interactive demonstrations. 
            See how our solutions can transform your workflow in real-time.
          </p>
        </div>
        {/* Demo Selector */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {demos.map((demoindex) => (
            <button
              key={demo.id}
              onClick={() => setActiveDemo(index)}
              className={`p-6 rounded-xl transition-all duration-300 ${
                activeDemo === index
                  ? 'bg-white bg-opacity-20 scale-105 shadow-2xl'
                  : 'bg-white bg-opacity-10 hover:bg-opacity-15'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${demo.color} flex items-center justify-center mb-4 mx-auto`}>
                <demo.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{demo.title}</h3>
              <p className="text-sm text-blue-200">{demo.description}</p>
            </button>
          ))}
        </div>
        {/* Interactive Demo Area */}
        <div
          className="bg-white bg-opacity-10 rounded-2xl p-8 mb-12"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${demos[activeDemo].color} flex items-center justify-center`}>
                <demos[activeDemo].icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{demos[activeDemo].title}</h3>
                <p className="text-blue-200">{demos[activeDemo].description}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handleStartDemo}
                disabled={isRunning}
                className="p-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 rounded-lg transition-colors duration-300"
              >
                <Play className="w-5 h-5" />
              </button>
              <button
                onClick={handleStopDemo}
                disabled={!isRunning}
                className="p-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 rounded-lg transition-colors duration-300"
              >
                <Pause className="w-5 h-5" />
              </button>
              <button
                onClick={handleResetDemo}
                className="p-3 bg-gray-600 hover:bg-gray-700 rounded-lg transition-colors duration-300"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Demo Progress</span>
              <span className="text-sm text-blue-200">{progress}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className={`h-2 rounded-full bg-gradient-to-r ${demos[activeDemo].color}`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          {/* Demo Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Features */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Key Features</h4>
              <div className="space-y-3">
                {demos[activeDemo].features.map((featureindex) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-blue-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* Metrics */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Performance Metrics</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-white bg-opacity-10 rounded-lg">
                  <span className="text-blue-200">Efficiency</span>
                  <span className="font-bold text-green-400">{demos[activeDemo].metrics.efficiency}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white bg-opacity-10 rounded-lg">
                  <span className="text-blue-200">Accuracy</span>
                  <span className="font-bold text-blue-400">{demos[activeDemo].metrics.accuracy}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white bg-opacity-10 rounded-lg">
                  <span className="text-blue-200">Speed Improvement</span>
                  <span className="font-bold text-purple-400">{demos[activeDemo].metrics.time}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            What Developers Are Saying
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonialindex) => (
              <div key={index} className="bg-white bg-opacity-10 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-blue-200 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-blue-300 text-sm">{testimonial.role}{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* CTA Section */}
        <div
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Experience the Future?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Start your free trial and see how our AI tools can transform your development workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center">
                <Brain className="w-5 h-5 mr-2" />
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300 flex items-center justify-center">
                <Settings className="w-5 h-5 mr-2" />
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InteractiveAIToolsDemo2026;