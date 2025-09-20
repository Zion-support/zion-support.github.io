  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-violet-900 text-white mb-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 backdrop-blur-sm">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.2%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40">
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full text-lg font-bold mb-8 animate-pulse">
            🌟 ULTIMATE BREAKTHROUGH • JANUARY 2037
          <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-transparent">
            {slides[currentSlide].title}
          </h2>
          <p className="text-2xl md:text-3xl text-purple-200 mb-8 max-w-5xl mx-auto"></p>
            {slides[currentSlide].subtitle}</p>
          </p>
          <p className="text-xl text-purple-300 mb-12 max-w-4xl mx-auto"></p>
            {slides[currentSlide].description}</p>
          </p>
          {/* Slide Indicators */}
          <div className="flex justify-center space-x-4 mb-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}</button>
              /></button>
            ))}</button>
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={slides[currentSlide].link}
              className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-10 py-5 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-xl hover:scale-105 transform"
            >
              {slides[currentSlide].icon} Explore Now →
            </a>
            <a 
              href="/pages/RevolutionaryTechShowcase2037" 
              className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-xl hover:bg-white/20 transition-all duration-300 font-bold text-xl border border-white/30"
            >
              Watch Demos →
            </a>
        {/* Feature Grid */}
        <div className="grid md:grid-cols-4 gap-8 mt-20">
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
              🌟
            <h3 className="text-xl font-bold mb-3">Ultimate Innovation</h3>
            <p className="text-purple-200">Technology that transcends the boundaries of what's possible</p>
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
              ⚡
            <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
            <p className="text-purple-200">Instantaneous processing and response times beyond imagination</p>
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
              🌐
            <h3 className="text-xl font-bold mb-3">Universal Impact</h3>
            <p className="text-purple-200">Technology that transforms entire universes and realities</p>
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
              👑
            <h3 className="text-xl font-bold mb-3">God-like Power</h3>
            <p className="text-purple-200">Capabilities that rival the powers of creation itself</p>
        {/* Animated Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-purple-500/20 rounded-full animate-pulse">
        <div className="absolute top-40 right-20 w-20 h-20 bg-violet-500/20 rounded-full animate-bounce">
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-cyan-500/20 rounded-full animate-ping">
        <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-emerald-500/20 rounded-full animate-pulse">
        <div className="absolute top-1/2 left-5 w-8 h-8 bg-orange-500/20 rounded-full animate-bounce">
