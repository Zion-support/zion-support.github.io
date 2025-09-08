



const steps = [
  {
    title: "Create & Post",
    description: "Publish your service, job, or equipment in minutes with our AI-powered smart forms that guide you through the process.",
    icon: Send,
    color: "from-zion-purple to-zion-purple-dark",
    features: ["AI-Powered Forms", "Smart Suggestions", "Instant Validation"]
  },
  {
    title: "AI Matchmaking",
    description: "Our advanced algorithms analyze thousands of profiles and automatically match you with the perfect providers, talents, or equipment.",
    icon: Search,
    color: "from-zion-cyan to-zion-blue",
    features: ["95% Match Rate", "Real-time Analysis", "Quality Scoring"]
  },
  {
    title: "Connect & Collaborate",
    description: "Directly connect with matched providers through our secure platform. Review profiles, discuss requirements, and negotiate terms.",
    icon: Handshake,
    color: "from-zion-blue to-zion-blue-dark",
    features: ["Secure Messaging", "Video Calls", "File Sharing"]
  },
  {
    title: "Deliver & Support",
    description: "Complete your project with confidence. Our platform ensures quality delivery and provides ongoing support for all solutions.",
    icon: Check,
    color: "from-zion-cyan-light to-zion-cyan",
    features: ["Quality Assurance", "24/7 Support", "Escrow Protection"]
  },
];

const stats = [
  { number: "10K+", label: "Active Users", icon: Users },
  { number: "150+", label: "Countries", icon: Globe },
  { number: "95%", label: "Success Rate", icon: Check },
  { number: "<2hr", label: "Response Time", icon: Zap }
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }

  return (
    <section className="py-16 bg-zion-slate-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Our proven process ensures successful project delivery every time
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple transform -translate-y-1/2 z-0"></div>
              )}
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-gold rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-zion-slate-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};
    <section className="py-24 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)`,
          backgroundSize: '120px 120px'
        }}></div>
          initial={{ opacity: 0, y: 20 }}
          <GradientHeading className="text-4xl md:text-5xl lg:text-6xl mb-6">
            How Zion Works
          </GradientHeading>
          <p className="text-zion-slate-light text-xl md:text-2xl mt-6 max-w-4xl mx-auto leading-relaxed">
            Experience the future of tech procurement with our intelligent, AI-powered platform that 
            connects you with the perfect solutions in just four simple steps
          </p>
        </motion.div>

        {/* Stats Section */}
          {/* Enhanced Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-zion-purple via-zion-cyan to-zion-purple-light transform -translate-x-1/2 md:block hidden rounded-full"></div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 backdrop-blur-sm border border-zion-purple/30 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-zion-slate-light mb-6">
              Join the thousands of companies already using Zion to transform their tech procurement
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-2xl shadow-zion-purple/25 flex items-center gap-2">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                Watch Demo
              </button>
            </div>
          </div>
