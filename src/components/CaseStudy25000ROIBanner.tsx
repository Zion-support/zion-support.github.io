import React from 'react';
// import Link from 'next/link'; // Replaced with regular anchor tags for React compatibility

export default function CaseStudy25000ROIBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-green-900 via-blue-900 to-purple-900 text-white py-16">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%253Csvg%20width%253D%252260%2522%20height%253D%252260%2522%20viewBox%253D%25220%25200%252060%252060%2522%20xmlns%253D%2522http%253A%2F%2Fwww.w3.org%2F2000%2Fsvg%2522%253E%253Cg%20fill%253D%2522none%2522%20fill-rule%253D%2522evenodd%2522%253E%253Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%253E%253Ccircle%20cx%253D%252230%2522%20cy%253D%252230%2522%20r%253D%25222%2522%2F%253E%253C%2Fg%253E%253C%2Fg%253E%253C%2Fsvg%253E')] opacity-30"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-bold mb-8 animate-pulse">
            🏆 CASE STUDY - 25,000% ROI ACHIEVED
          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Fortune 500 Success Story
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover how a Fortune 500 company achieved unprecedented 25,000% ROI with our AI 2025 breakthrough technology
            transforming their entire business ecosystem in just 90 days.
          {/* Key Results */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">25,000%</div>
              <div className="text-lg text-gray-300">Total ROI</div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">90</div>
              <div className="text-lg text-gray-300">Days to Transform</div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">$2.5B</div>
              <div className="text-lg text-gray-300">Revenue Increase</div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-lg text-gray-300">Efficiency Gain</div>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/case-studies/ai-2025-global-transformation-25000-roi" 
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-green-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Read the Full Story
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg text-lg font-bold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your Transformation
          {/* Additional Info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>Real results from real companies - join the transformation revolution</p>
  );
}