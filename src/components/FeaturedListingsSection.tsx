    {
      title: "AI-Powered Analytics Platform",
      description: "Advanced business intelligence with machine learning capabilities",
      category: "AI & Analytics",
      rating: 4.9,
      price: "$2,500",
      image: "🤖"
    },
    {
      title: "Cloud Migration Service",
      description: "Seamless transition to cloud infrastructure with zero downtime",
      category: "Cloud & DevOps",
      rating: 4.8,
      price: "$5,000",
      image: "☁️"
    },
    {
      title: "Cybersecurity Assessment",
      description: "Comprehensive security audit and vulnerability assessment",
      category: "Cybersecurity",
      rating: 4.9,
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our most popular and highly-rated technology solutions
          </p>
        </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{listing.image}</span>
                </div>
                
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-medium rounded-full border border-cyan-500/30">
                    {listing.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {listing.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {listing.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white text-sm font-medium">{listing.rating}</span>
                  </div>
                  <span className="text-cyan-400 font-bold text-lg">{listing.price}</span>
                </div>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};