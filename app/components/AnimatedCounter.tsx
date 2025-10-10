





  className?: string;}
}
    const animate = (currentTime: number) => {


      // Easing function for smooth animation



      if (progress < 1) {

      }


    return () => {
      if (animationFrame) {

      }


  return (
    <span className={className}>

          </span>
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
          </span>
  end,
          </span>
  duration = 2000,
          </span>
  prefix = '',
          </span>
  suffix = '',
          </span>
  className = '';}
}) => {
          </span>
  const [count, setCount] = useState(0)
          </span>

          </span>
  useEffect(() => {
          </span>
    let startTime: number,
          </span>
    let animationFrame: number,
          </span>
    const animate = (
          </span>
      if (!startTime) startTime = currentTime
          </span>
      const progress = Math.min((currentTime - startTime) / duration, 1)
          </span>

          </span>
      // Easing function for smooth animation
          </span>
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
          </span>
      const currentCount = Math.floor(easeOutQuart * end)
          </span>

          </span>
      setCount(currentCount)
          </span>

          </span>
      if (progress < 1) {;) => {
  return (
    $3
  )
          </span>
}
          </span>
        animationFrame = requestAnimationFrame(animate);}
      }
    }
          </span>

          </span>
    animationFrame = requestAnimationFrame(animate)
          </span>

          </span>
    return () => {
          </span>
      if (animationFrame) {
          </span>
        cancelAnimationFrame(animationFrame);}
      }
    }
          </span>
  }, [end, duration])
          </span>

          </span>
  return (
          </span>
    <span className={className}>
          </span>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
          </span>
  )
          </span>
}
          </span>
