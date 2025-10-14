import React from 'react'
const FuturisticBackground = () => {
  return (}
    <div className="fixed inset-0 -z-10 overflow-hidden">}"
      {/* Animated Grid Background */}""
      <div className="absolute inset-0 bg-slate-900">""
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        "
        {/* Animated Grid Lines */}""
        <div className="absolute inset-0 opacity-20">""
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div>"
                key={i}""
                className="border border-purple-500/30 animate-pulse"
                style={{}
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '3s'
                }}
              ></div>
            ))}
          </div>
        </div>
"
        {/* Floating Neon Orbs */}""
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full blur-xl animate-pulse"></div>""
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-full blur-xl animate-pulse delay-1000"></div>""
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse delay-2000"></div>""
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-r from-green-500/30 to-cyan-500/30 rounded-full blur-xl animate-pulse delay-500"></div>
"
        {/* Animated Particles */}""
        <div className="absolute inset-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div>"
              key={i}""
              className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"`
              style={{`}`
                left: `${Math.random() * 100}%`,``
                top: `${Math.random() * 100}%`,``
                animationDelay: `${Math.random() * 3}s`,``
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
"
        {/* Neon Glow Effects */}""
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-60"></div>""
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-60"></div>""
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-purple-500 to-transparent opacity-60"></div>""
        <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent opacity-60"></div>
      </div>
    </div>
);
}"`
export default FuturisticBackground"`"`