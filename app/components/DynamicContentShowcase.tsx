'use client'
;
  const [currentFeature, setCurrentFeature] = useState(0);
;
  const features = [
    {;
      id: 1,
      icon: Brain,
      color: 'from-purple-500 to-pink-600'
    },
    {;
      id: 2,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions that grow with your business needs.',
      icon: Cloud,
      color: 'from-green-500 to-blue-600'
    },
    {;
      id: 3,
  const testimonials = [
    {name: 'Sarah Johnson',
      company: 'TechCorp Inc.',
      role: 'CTO',
      content: 'This solution transformed our operations completely. The AI insights are incredible.',
      rating: 5,},
    {name: 'Michael Chen',
      company: 'DataFlow Systems',
      role: 'CEO',
      content: 'The performance improvements we\'ve seen are remarkable. Highly recommended!',
      rating: 5,},
    {name: 'Emily Rodriguez',
      company: 'CloudFirst Solutions',
      role: 'VP Engineering',
      content: 'Outstanding security features and seamless integration. Perfect for our needs.',
  useEffect(() => {;
    const timer = setInterval(() => {;
      setCurrentFeature((prev) => (prev + 1) % features.length);
;
    return () => clearInterval(timer);
  }, [features.length]);
;
  return (;
    <div className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
>>>>>>> cursor/fix-errors-and-merge-to-main-cd7c
            Dynamic <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">Experience the power of our AI and IT solutions through interactive demonstrations and real-world applications.</p>
          </p>
        </div>
        {/* Feature Showcase */}
        <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              {features[currentFeature].title}
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              {features[currentFeature].description}
            </p>
            </div>
          </div>
          {/* Feature Visual */}
          <div className="flex justify-center">
            <div className={`w-80 h-80 bg-gradient-to-br ${features[currentFeature].color} rounded-2xl flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20"></div>
              {React.createElement(features[currentFeature].icon, { className: "w-32 h-32 text-white/90 relative z-10" })}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
        {/* Benefits Section */} <div className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 mb-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why Choose Us?</h3>
              </div>
            ))}
          </div>
        </div>
        {/* Testimonials Section */} <div className="mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8"></div>
            {testimonials.map((testimonial, index) => (;
              <div key={index}className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div>
                    <Star key={i}className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content</p>}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name</p>}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role</p>}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Interactive Demo Section */} <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 md: p-12"></div>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Try Our Solutions</h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">Experience the power of our AI and IT solutions with interactive demos and live examples.</p>
            </p>
          </div>
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6"></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">AI Demo</h4>
              <p className="text-gray-300 text-sm mb-4">See AI in action with our interactive demos</p>
              <button className="bg-cyan-500 hover: bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"></button>
                Try Demo;
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Cloud className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Cloud Trial</h4>
              <p className="text-gray-300 text-sm mb-4">Test our cloud solutions with a free trial</p>
              <button className="bg-blue-500 hover: bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"></button>
                Start Trial
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-lg font-bold text-white mb-2">Security Scan</h4>
              <p className="text-gray-300 text-sm mb-4">Get a free security assessment</p>
              <button className="bg-green-500 hover: bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"></button>
                Scan Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
;
export default DynamicContentShowcase;