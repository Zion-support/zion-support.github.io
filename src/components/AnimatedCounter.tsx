    }
  }, [entry, isVisible])"
useEffect(() =>{"
if (!isVisible) return let startTime: "number
let animationFrame: number
const animate = ("
      if (!startTime) startTime = currentTime
const progress = Math.min((currentTime - startTime) / duration",1)
      // Easing function for smooth animation
const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)
setCount(currentCount)
</AnimatedCounterProps>
if(progress < 1) {
animationFrame = requestAnimationFrame(animate)
      ) => {
$3
,}
    }
animationFrame = requestAnimationFrame(animate)
    return () => {
if(animationFrame) {
cancelAnimationFrame(animationFrame)
      ,}
    }
  }, [isVisible, end, duration])
return(<spanref = {setNode} className={className} />)
      {prefix}{count.toLocaleString()}{suffix}</span>
    </span>