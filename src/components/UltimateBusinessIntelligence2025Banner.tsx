export default UltimateBusinessIntelligence2025Banner;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible] = useState(true);
  ];
  const currentContent = content[currentSlide];
 (prev + 1) % content.length);
    }, 5000);
 clearInterval(timer);
  }, [content.length]);
  // Removed unused handleClose function;
  if (!isVisible) return null;
      {/* Animated Background Effects */}
        <div className = "absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
//         ></div>
//         ></div>
        {/* Header */}
            <span className="text-2xl">🚀</span>;
              BREAKING: ULTIMATE BUSINESS INTELLIGENCE REVOLUTION 2025;
            <span className = 'text-2xl'>⚡</span>
            {currentContent.title}
            {currentContent.description};
              Get Started Today;
              Schedule Consultation;
          {/* Key Benefits Grid */}
            {/* Metrics Grid */}
                  <div className = "text-3xl font-bold text-cyan-400 mb-2">{value}</div>
                    {key.replace(/([A-Z])/g, ' $1').trim()}
              ))}
            {/* Tags */}
                  {tag}
              ))}
            {/* CTA Buttons */}
                <span className="text-xl">📖</span>
                <span>Read {currentContent.type}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
                <span className="text-xl">📞</span>
<span>Call +1 302 464 0950</span>
          {/* Slide Indicators */}
 setCurrentSlide(index)}
                  index === currentSlide ? 'bg-cyan-400' : 'bg-white/30'
                }`}
                aria-label={`Go to slide ${index + 1}`}
            ))}
        {/* Stats Section */}
          {[
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
          ))};
  );
}
