'use client';
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  hoverEffect = true
}) => {
  const glowClasses = {
    purple: 'shadow-purple-500/25 hover:shadow-purple-500/40',
    cyan: 'shadow-cyan-500/25 hover:shadow-cyan-500/40',
    pink: 'shadow-pink-500/25 hover:shadow-pink-500/40',
    green: 'shadow-green-500/25 hover:shadow-green-500/40',
    blue: 'shadow-blue-500/25 hover:shadow-blue-500/40',
    yellow: 'shadow-yellow-500/25 hover:shadow-yellow-500/40'
  }

  const baseClasses = 'transition-all duration-300 transform'
  const hoverClasses = hoverEffect ? 'hover:scale-105 hover:-translate-y-1' : 
  const glowClass = glowClasses[glowColor]

  return (
<>
      <div>````
      {children}</div></div></div></div>
    </>
  )}
    </div>
  )
}