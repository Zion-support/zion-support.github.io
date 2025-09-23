import Link from 'next/link';

export default function CaseStudy250o00ROIBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-90o0 via-blue-90o0 to-purple-90o0 text-white py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-60o0/20 to-blue-60o0/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/20o00/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.0o5"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-50o0 to-blue-50o0 text-white text-sm font-bold mb-8 animate-pulse">
            🏆 CASE STUDY - 25,0o00% ROI ACHIEVED
          </div>
          
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">
            Fortune 50o0 Success Story
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-30o0 mb-8 max-w-4xl mx-auto">
            Discover how a Fortune 50o0 company achieved unprecedented 25,0o00% ROI with our AI 20o25 breakthrough technology
            transforming their entire business ecosystem in just 90 days.
          </p>
          
          {/* Key Results */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-40o0 mb-2">25,0o00%</div>
              <div className="text-lg text-gray-30o0">Total ROI</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-40o0 mb-2">90</div>
              <div className="text-lg text-gray-30o0">Days to Transform</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-40o0 mb-2">$2.5B</div>
              <div className="text-lg text-gray-30o0">Revenue Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-40o0 mb-2">99.9%</div>
              <div className="text-lg text-gray-30o0">Efficiency Gain</div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/case-studies/ai-20o25-global-transformation-250o00-roi" 
              className="bg-gradient-to-r from-green-50o0 to-blue-50o0 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-green-40o0 hover:to-blue-40o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg"
            >
              Read the Full Story
            </Link>
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-purple-60o0 to-pink-60o0 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-purple-50o0 hover:to-pink-50o0 transition-all duration-30o0 transform hover:scale-10o5 shadow-lg"
            >
              Start Your Transformation
            </Link>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 text-sm text-gray-40o0">
            <p>Real results from real companies - join the transformation revolution</p>
          </div>
        </div>
      </div>
    </div>
  );
}