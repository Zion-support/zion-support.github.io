import React, { useState, useEffect } from 'react';

const RevolutionaryAdBanner2025: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentOffer, setCurrentOffer] = useState(0);

  const offers = [
    {
      title: "🚀 LIMITED TIME: Ultimate Tech Package",
      description: "Get access to ALL revolutionary technologies for just $99/month",
      originalPrice: "$999",
      currentPrice: "$99",
      discount: "90% OFF",
      cta: "Claim Offer Now",
      bg: "from-red-600 to-orange-600",
      accent: "from-yellow-400 to-orange-400"
    },
    {
      title: "🧠 AI Consciousness Access",
      description: "Experience conscious AI systems - First 100 users get FREE access",
      originalPrice: "$299",
      currentPrice: "FREE",
      discount: "100% OFF",
      cta: "Get Free Access",
      bg: "from-purple-600 to-pink-600",
      accent: "from-pink-400 to-purple-400"
    },
    {
      title: "⚛️ Quantum Computing Trial",
      description: "Try our quantum reality engine for 30 days - No commitment",
      originalPrice: "$499",
      currentPrice: "$0",
      discount: "FREE TRIAL",
      cta: "Start Trial",
      bg: "from-cyan-600 to-blue-600",
      accent: "from-blue-400 to-cyan-400"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [offers.length]);

  const currentOfferData = offers[currentOffer];

  return (
    <div className={`relative overflow-hidden rounded-2xl mb-12 transition-all duration-1000 ${
      isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
    }`}>
      <div className={`absolute inset-0 bg-gradient-to-br ${currentOfferData.bg} transition-all duration-1000`}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full animate-bounce">
        <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-white/5 rounded-full animate-bounce delay-1000">
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-2000">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 text-6xl animate-pulse">🎯
        <div className="absolute top-20 right-20 text-4xl animate-bounce delay-500">⚡
        <div className="absolute bottom-20 left-20 text-5xl animate-pulse delay-1000">🔥
        <div className="absolute bottom-10 right-10 text-3xl animate-bounce delay-1500">💎
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center text-white">
          {/* Offer Indicators */}
          <div className="flex justify-center space-x-2 mb-6">
            {offers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentOffer(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentOffer ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}</button>
          {/* Main Offer Content */}
          <div className="max-w-4xl mx-auto">
            <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${currentOfferData.accent} rounded-full text-sm font-bold mb-6 animate-pulse`}>
              ⚡ EXCLUSIVE OFFER • LIMITED TIME
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              {currentOfferData.title}
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              {currentOfferData.description}</p>
            </p>
            {/* Price Display */}
            <div className="flex justify-center items-center space-x-4 mb-8">
              <div className="text-6xl md:text-7xl font-bold text-white">
                {currentOfferData.currentPrice}
              <div className="text-right">
                <div className="text-2xl text-white/60 line-through">
                  {currentOfferData.originalPrice}
                <div className={`text-2xl font-bold bg-gradient-to-r ${currentOfferData.accent} bg-clip-text text-transparent`}>
                  {currentOfferData.discount}
            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <button className={`bg-gradient-to-r ${currentOfferData.accent} text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-lg transform hover:scale-105 animate-pulse`}>
                {currentOfferData.cta} →</button>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold text-lg">
                Learn More</button>
              </button>
            {/* Urgency Elements */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">⏰
                <div className="text-sm font-semibold">Limited Time
                <div className="text-xs text-white/70">Offer expires soon
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">👥
                <div className="text-sm font-semibold">Join 1M+ Users
                <div className="text-xs text-white/70">Already using our tech
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl mb-2">✅
                <div className="text-sm font-semibold">No Risk
                <div className="text-xs text-white/70">30-day guarantee
            {/* Countdown Timer */}
            <div className="mt-8 bg-black/20 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto">
              <div className="text-center">
                <div className="text-lg font-semibold mb-4">⏰ Offer Expires In:
                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">23
                    <div className="text-xs">Hours
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">45
                    <div className="text-xs">Minutes
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">12
                    <div className="text-xs">Seconds
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold">99
                    <div className="text-xs">MS
      {/* Close Button */}
      <button className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"></button>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></p>
        </svg>
      </button>
      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ width: `${((currentOffer + 1) / offers.length) * 100}%` }}
        >
  );
};

export default RevolutionaryAdBanner2025;