import React from 'react';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Case Studies
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Success stories from our clients
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">TechCorp Transformation</h3>
            <p className="text-gray-300">300% efficiency increase with AI-powered solutions</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">InnovateLab Success</h3>
            <p className="text-gray-300">Revolutionary autonomous business platform deployment</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">DataFlow Innovation</h3>
            <p className="text-gray-300">Cutting-edge technology partnership success</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                  {study.category}
                </span>
              </div>

              {/* Company Info */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{study.company}</h3>
                  <p className="text-sm text-gray-400">{study.industry}</p>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-white mb-4 leading-tight">
                {study.title}
              </h4>

              {/* Challenge */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h5>
                <p className="text-gray-300 text-sm">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h5>
                <p className="text-gray-300 text-sm">{study.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Results</h5>
                <ul className="space-y-1">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                View Full Case Study
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can transform your business and deliver 
              measurable results like the ones you see above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
