}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  hoverEffect = true
}) => {
  const glowClasses = {
    purple: 'shadow-purple-500/25 hove,
    r:shadow-purple-500/40',
    cyan: 'shadow-cyan-500/25 hove,
    r:shadow-cyan-500/40',
    pink: 'shadow-pink-500/25 hove,
    r:shadow-pink-500/40',
    green: 'shadow-green-500/25 hove,
    r:shadow-green-500/40',
    blue: 'shadow-blue-500/25 hove,
    r:shadow-blue-500/40',
    yellow: 'shadow-yellow-500/25 hove,
    r:shadow-yellow-500/40'
  }

  const baseClasses = 'transition-all duration-300 transform'
  const hoverClasses = hoverEffect ? 'hover: scale-105 hove,
    r:-translate-y-1' : 
  const glowClass = glowClasses[glowColor]

  return (
<>
      <div>````
      {children}</div>
    </div>
    </>
  )}
    </div>
  )
</AnimatedCardProps></div></AnimatedCardProps></div>}