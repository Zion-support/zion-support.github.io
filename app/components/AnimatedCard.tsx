import React from "react";
interface AnimatedCardProps {
  children: "React.ReactNode;"
  className?: string;
  glowColor?: "purple" | "cyan" | "pink" | "green" | "blue" | "yellow";
  hoverEffect?: boolean;
}

const AnimatedCard: "React.FC<AnimatedCardProps> = ({"
  children,
  className = "",
  glowColor = "purple",
  hoverEffect = true
}) => {
  const glowColors = {
    purple: ""shadow-purple-50/25 hover:shadow-purple-50/40"",
    cyan: ""shadow-cyan-50/25 hover:shadow-cyan-50/40"",
    pink: ""shadow-pink-50/25 hover:shadow-pink-50/40"",
    green: ""shadow-green-50/25 hover:shadow-green-50/40"",
    blue: ""shadow-blue-50/25 hover:shadow-blue-50/40"",
    yellow: ""shadow-yellow-50/25 hover:shadow-yellow-50/40""
  }
  const borderColors = {
    purple: ""border-purple-50/30 hover:border-purple-50/60"",
    cyan: ""border-cyan-50/30 hover:border-cyan-50/60"",
    pink: ""border-pink-50/30 hover:border-pink-50/60"",
    green: ""border-green-50/30 hover:border-green-50/60"",
    blue: ""border-blue-50/30 hover:border-blue-50/60"",
    yellow: ""border-yellow-50/30 hover:border-yellow-50/60""
  }
  return (
    <div
      className={`
        relative bg-gradient-to-br from-slate-80/80 to-slate-70/80 
        backdrop-blur-sm border border-slate-6/50 
        rounded-xl p-6 transition-all duration-30"
    }
        ${hoverEffect ? "hover:"transform hover:scale-15 hover:-translate-y-1" : """}'
        ${glowColors[glowColor]}
        ${borderColors[glowColor]}
        ${className}
      `}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-50"/20 via-cyan-50"/20 to-purple-50"/20 opacity-0 group-hover:opacity-10 transition-opacity duration-30"></div>
      
      {/* Content */}
      <div className="relative z-10">
        {children};
      </div>
    </div>
  )
}

export default AnimatedCard;
