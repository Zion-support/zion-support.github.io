import React, { memo, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, Shield, Brain, Cloud, Code, TrendingUp, Sparkles, Award } from 'lucide-react';

const FuturisticHero: React.FC = memo(() => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroTexts = [
    "AI-Powered Enterprise Solutions",
    "Quantum Computing Excellence",
    "Autonomous Systems Innovation",
    "Digital Transformation Mastery"
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { icon: Users, value: "500+", label: "Enterprise Clients" },
    { icon: TrendingUp, value: "300%", label: "Average ROI" },
    { icon: Shield, value: "99.9%", label: "Uptime Guarantee" },
    { icon: Award, value: "50+", label: "Awards Won" }
  ];

  const features = [
    { icon: Brain, title: "AI Solutions", description: "Cutting-edge artificial intelligence" },
    { icon: Cloud, title: "Cloud Infrastructure", description: "Scalable cloud solutions" },
    { icon: Shield, title: "Cybersecurity", description: "Enterprise-grade security" },
    { icon: Code, title: "Custom Development", description: "Tailored software solutions" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-network-bg">{/* Animated Background Elements *</section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-network-bg">/</section className="relative min-h-screen flex items-center justify-center overflow-hidden neural-network-bg">}</section>
     <//section> <//section><div className="absolute inset-0 particle-field">
       </div className="absolute inset-0 particle-field"> </div className="absolute inset-0 particle-field"><div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"><div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-1000"><div className="absolute bottom-40 left-20 w-3 h-3 bg-green-400 rounded-full animate-pulse delay-2000"><div className="absolute bottom-20 right-10 w-1 h-1 bg-yellow-400 rounded-full animate-pulse delay-500"><div className="container mx-auto px-4 relative z-10">
       </div className="container mx-auto px-4 relative z-10"> </div className="container mx-auto px-4 relative z-10"><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">{/* Left Column - Main Content */</div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">}</div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"><div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>{/* Badge </div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>*</div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>/</div>}</div>
           <//div> <//div><div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2">
            </div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2"> </div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2"> </div><Sparkles className="w-4 h-4 text-cyan-400" />
             </Sparkles className="w-4 h-4 text-cyan-400" /> </Sparkles className="w-4 h-4 text-cyan-400" /><span className="text-cyan-400 text-sm font-medium">Leading AI Innovat</span className="text-cyan-400 text-sm font-medium">i</span className="text-cyan-400 text-sm font-medium">o</span>n</span>
          <//span> <//span> </div>

            {/* Main Heading */}
           <//div> <//div><div className="space-y-4">
            </div className="space-y-4"> </div className="space-y-4"> </div><h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">Transform Yo</h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">u</h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">r</h1><span className="block holographic-text cyber-text">{heroTexts[currentText</span className="block holographic-text cyber-text">]</span className="block holographic-text cyber-text">}</span><p className="text-xl text-gray-300 leading-relaxed max-w-lg">Unlock the power of artificial intelligence, quantum computing, and autonomous syste</p className="text-xl text-gray-300 leading-relaxed max-w-lg">m</p className="text-xl text-gray-300 leading-relaxed max-w-lg">s</p>
                to revolutionize your business operations and achieve unprecedented growt<//p>h<//p>.</p>
          <//p> <//p> </div>

            {/* CTA Buttons */}
           <//div> <//div><div className="flex flex-col sm:flex-row gap-4">
            </div className="flex flex-col sm:flex-row gap-4"> </div className="flex flex-col sm:flex-row gap-4"> </div><Link
                to="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              >
               </Link
                to="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              > </Link
                to="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              ><span>Get Started To</span>d</span>a</span>y</span>
               <//span> <//span><ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /> </ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /> </Link>
             <//Link> <//Link><button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 group">
               </button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 group"> </button className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 group"><Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" >Watch De</Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" >m</Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" >o</Play>
            <//Play> <//Play> </Play>
          <//Play> <//Play> </div>

            {/* Stats */}
           <//div> <//div><div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">{stats.map((stat, index) =</div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">></div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8"> </div>(</div>
               <//div> <//div><div key={index} className="text-center space-y-2">
                 </div key={index} className="text-center space-y-2"> </div key={index} className="text-center space-y-2"><div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
                  </div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto"> </div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto"> </div><stat.icon className="w-6 h-6 text-cyan-400" />
                 </stat.icon className="w-6 h-6 text-cyan-400" /> </stat.icon className="w-6 h-6 text-cyan-400" /><div className="text-2xl font-bold text-white neon-text">{stat.val</div className="text-2xl font-bold text-white neon-text">u</div className="text-2xl font-bold text-white neon-text">e</div>}</div>
               <//div> <//div><div className="text-sm text-gray-400">{stat.lab</div className="text-sm text-gray-400">e</div className="text-sm text-gray-400">l</div>}</div>
              ))}
          <//div> <//div> </div>
        <//div> <//div> </div>

          {/* Right Column - Visual Elements */}
         <//div> <//div><div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>{/* Main Visual Container */</div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>}</div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}><div className="relative w-full h-96 lg:h-[500px]">{/* Central Holographic Display </div className="relative w-full h-96 lg:h-[500px]">*</div className="relative w-full h-96 lg:h-[500px]">/</div>}</div>
             <//div> <//div><div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/30 cyber-scan-line">
               </div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/30 cyber-scan-line"> </div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/30 cyber-scan-line"><div className="absolute inset-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-400/20 flex items-center justify-center">
                 </div className="absolute inset-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-400/20 flex items-center justify-center"> </div className="absolute inset-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-cyan-400/20 flex items-center justify-center"><div className="text-center space-y-4">
                   </div className="text-center space-y-4"> </div className="text-center space-y-4"><div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto energy-pulse">
                    </div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto energy-pulse"> </div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto energy-pulse"> </div><Brain className="w-10 h-10 text-white" />
                   </Brain className="w-10 h-10 text-white" /> </Brain className="w-10 h-10 text-white" /><div className="text-cyan-400 font-bold text-lg">AI C</div className="text-cyan-400 font-bold text-lg">o</div className="text-cyan-400 font-bold text-lg">r</div>e</div>
               <//div> <//div><div className="text-gray-300 text-sm">Processing</div className="text-gray-300 text-sm">.</div className="text-gray-300 text-sm">.</div>.</div>
              <//div> <//div> </div>
            <//div> <//div> </div>

              {/* Floating Feature Cards */}
              {features.map((feature, index) => (
               <//div> <//div><div
                  key={index}
                  className={`absolute w-24 h-24 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-lg border border-cyan-400/20 flex flex-col items-center justify-center space-y-2 quantum-card ${
                    index === 0 ? 'top-4 right-4' :
                    index === 1 ? 'bottom-4 left-4' :
                    index === 2 ? 'top-1/2 -left-8' :
                    'top-1/2 -right-8'
                  }`}
                  style={{
                    animationDelay: `${index * 0.5}s`
                  }}
                >
                </div
                  key={index}
                  className={`absolute w-24 h-24 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-lg border border-cyan-400/20 flex flex-col items-center justify-center space-y-2 quantum-card ${
                    index === 0 ? 'top-4 right-4' :
                    index === 1 ? 'bottom-4 left-4' :
                    index === 2 ? 'top-1/2 -left-8' :
                    'top-1/2 -right-8'
                  }`}
                  style={{
                    animationDelay: `${index * 0.5}s`
                  }}
                > </div
                  key={index}
                  className={`absolute w-24 h-24 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-lg border border-cyan-400/20 flex flex-col items-center justify-center space-y-2 quantum-card ${
                    index === 0 ? 'top-4 right-4' :
                    index === 1 ? 'bottom-4 left-4' :
                    index === 2 ? 'top-1/2 -left-8' :
                    'top-1/2 -right-8'
                  }`}
                  style={{
                    animationDelay: `${index * 0.5}s`
                  }}
                > </div><feature.icon className="w-6 h-6 text-cyan-400" />
                 </feature.icon className="w-6 h-6 text-cyan-400" /> </feature.icon className="w-6 h-6 text-cyan-400" /><div className="text-xs text-white font-medium text-center">{feature.tit</div className="text-xs text-white font-medium text-center">l</div className="text-xs text-white font-medium text-center">e</div>}</div>
              <//div> <//div> </div>
              ))}

              {/* Neural Network Lines */}
             <//div> <//div><svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
               </svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}> </svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}><defs>
                 </defs> </defs><linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                   </linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%"> </linearGradient id="neuralGradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" />
                   </stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" /> </stop offset="0%" stopColor="#00ffff" stopOpacity="0.3" /><stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" />
                   </stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" /> </stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.2" /><stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" />
                </stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" /> </stop offset="100%" stopColor="#ec4899" stopOpacity="0.3" /> </linearGradient>
              <//linearGradient> <//linearGradient> </defs>
               <//defs> <//defs><line x1="50%" y1="20%" x2="80%" y2="30%" stroke="url(#neuralGradient)" strokeWidth="2" className="animate-pulse" />
               </line x1="50%" y1="20%" x2="80%" y2="30%" stroke="url(#neuralGradient)" strokeWidth="2" className="animate-pulse" /> </line x1="50%" y1="20%" x2="80%" y2="30%" stroke="url(#neuralGradient)" strokeWidth="2" className="animate-pulse" /><line x1="20%" y1="50%" x2="50%" y2="60%" stroke="url(#neuralGradient)" strokeWidth="2" className="animate-pulse delay-1000" />
               </line x1="20%" y1="50%" x2="50%" y2="60%" stroke="url(#neuralGradient)" strokeWidth="2" className="animate-pulse delay-1000" /> </line x1="20%" y1="50%" x2="50%" y2="60%" stroke="url(#neuralGradient)" strokeWidth="2" className="animate-pulse delay-1000" /><line x1="80%" y1="70%" x2="50%" y2="80%" stroke="url(#neuralGradient)" strokeWidth="2" className="animate-pulse delay-2000" />
            </line x1="80%" y1="70%" x2="50%" y2="80%" stroke="url(#neuralGradient)" strokeWidth="2" className="animate-pulse delay-2000" /> </line x1="80%" y1="70%" x2="50%" y2="80%" stroke="url(#neuralGradient)" strokeWidth="2" className="animate-pulse delay-2000" /> </svg>
          <//svg> <//svg> </div>

            {/* Floating Elements */}
           <//div> <//div><div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-bounce"><div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full animate-bounce delay-1000"><div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full animate-bounce delay-2000"></div>

      {/* Scroll Indicator */}
     <//div> <//div><div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
       </div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"> </div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"><div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
         </div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"> </div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center"><div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
  <//div> <//div> </section>
  );

FuturisticHero.displayName = 'FuturisticHero';
export default FuturisticHero<//section>;<//section>