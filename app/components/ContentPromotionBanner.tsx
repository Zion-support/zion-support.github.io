import React from "react";
export default function ContentPromotionBannerPage() {
  return (
    div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
  )
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Transform Your Business with AI
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Discover how our AI solutions can revolutionize your operations and drive growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}
;
