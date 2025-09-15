import React, { useState, useEffect } from 'react';

const UltimateContentShowcase2026: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
    }
  ];

  useEffect(() => {
            </div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + contentItems.length) % contentItems.length)}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 text-2xl"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % contentItems.length)}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all duration-300 text-2xl"
          >
            →
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {contentItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contentItems.map((item) => (
            <div key={item.id} className={`bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-300 relative`}>
              {item.new && (
                <div className="absolute -top-2 -right-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  NEW
                </div>
              )}
              <div className="text-5xl mb-4 text-center">{item.image}</div>
              <h3 className="text-xl font-bold mb-3 text-center">{item.title}</h3>
              <p className="text-white/90 mb-4 text-sm text-center">{item.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">{item.category}</span>
                <a 
                  href={item.link}
                  className="text-white hover:text-white/80 transition-colors font-semibold text-sm"
                >
                  Explore →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Explore the Future?</h3>
          <p className="text-2xl opacity-90 mb-10 max-w-4xl mx-auto">
            Dive into our revolutionary content and discover the technologies that are shaping tomorrow. 
            Experience the most advanced AI, Quantum Computing, Neural Interfaces, and more.
          </p>
          <div className="flex justify-center space-x-6">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-12 py-6 rounded-xl hover:shadow-lg transition-all duration-300 font-bold text-xl">
              Explore All Content →
            </button>
            <button className="border-2 border-white/30 text-white px-12 py-6 rounded-xl hover:bg-white/10 transition-all duration-300 font-bold text-xl">
              Get Updates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UltimateContentShowcase2026;