import React from 'react';

const BusinessSuccessStories2025PromotionBanner: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">BusinessSuccessStories2025PromotionBanner</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
=======
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-600/20 via-blue-600/20 to-green-600/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className="text-white"
          >
            {/* Badge */}
            <div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-full text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              REAL SUCCESS STORIES
            </div>

            {/* Main Heading */}
            <divh2
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Real Success{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Stories
              </span>
            </divh2>

            {/* Subheading */}
            <divp
              className="text-xl text-gray-300 mb-8"
            >
              Discover how businesses across industries have transformed their operations 
              and achieved remarkable results with our cutting-edge solutions.
            </divp>

            {/* Stats */}
            <div
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {stats.map((statindex) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Industries */}
            <div
              className="mb-8"
            >
              <h4 className="text-lg font-semibold text-white mb-4">Industries We Serve:</h4>
              <div className="flex flex-wrap gap-3">
                {industries.map((industryindex) => (
                  <div key={index} className="flex items-center space-x-2 px-3 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <industry.icon className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-white">{industry.name}</span>
                    <span className="text-xs text-gray-300">({industry.projects}+)</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/success-stories-2025"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-full hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Rocket className="w-5 h-5 mr-2" />
                View Success Stories
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read Case Studies
              </a>
            </div>
          </div>

          {/* Right Content - Testimonial Carousel */}
          <div
            className="relative"
          >
            {/* Testimonial Card */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Client Testimonials</h3>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div
                key={currentTestimonial}
                className="mb-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonials[currentTestimonial].company}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(5)].map((_i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-4">
                      "{testimonials[currentTestimonial].quote}"
                    </p>
                    <div>
                      <div className="font-semibold text-white">
                        {testimonials[currentTestimonial].author}
                      </div>
                      <div className="text-sm text-gray-300">
                        {testimonials[currentTestimonial].role}
                      </div>
                      <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium mt-2">
                        {testimonials[currentTestimonial].results}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2 mb-4">
                {testimonials.map((_index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentTestimonial ? 'bg-green-400 w-8' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              {/* Quote Icon */}
              <div className="absolute top-4 right-4">
                <Quote className="w-8 h-8 text-green-400/30" />
              </div>
            </div>

            {/* Floating Elements */}
            <div
              className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center"
            >
              <Star className="w-4 h-4 text-white" />
            </div>
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center"
            >
              <CheckCircle className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
    </div>
  );
};

export default BusinessSuccessStories2025PromotionBanner;
</div></div></div></div></div>