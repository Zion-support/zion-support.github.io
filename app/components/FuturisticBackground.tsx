
const FuturisticBackground = () => {
  return (
  <>
    
    <div className="fixed inset-0 -z-10 overflow-hidden">"
      {/* Animated Grid Background */}"
      <div className="absolute inset-0 bg-slate-900">"
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>"
        
        {/* Animated Grid Lines */}"
        <div className="absolute inset-0 opacity-20">"
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">"
            {Array.from({ length: 144 }
  </>
);.map((_, i) => (
              <div
                key={i}"
                className="border border-purple-500/30 animate-pulse
                style={{}}></div>
            ))
          </div>
        </div>
        "
        <div className="absolute inset-0"></div>"
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              }}></div>
          ))
        </div>

        {/* Gradient Overlay */}"
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-slate-900/50"></div>
      </div>

      {/* Content */}
      {children && ("
        <div className="relative z-10">
          {children}
        </div>
      )}
    </div>
  )
}
export default FuturisticBackground
"