"use client"
import React from "react";
import React from "react";
interface AnimatedCounterProps {
end: "number
  duration?: number
  suffix?: string
  prefix?: string
"}
  className?: string}
}

interface AnimatedCounterProps {

  return (

end",duration = 2000
suffix = "
prefix = 
className=
  )

}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  return (

  return (

  return (

  return (

  return (

end",duration = 2000
suffix = "
prefix = 
className=
  )

  )

  )

  )

  )
}) => {
const [count, setCount ] = useState(0)
  const [isVisible, setIsVisible ] = useState(false)
const [setNode, entry ] = useIntersectionObserver({)
threshold: "0.5)
  "})
useEffect(() => {
if(entry?.isIntersecting && !isVisible) {  
setIsVisible(true)
  }, [entry, isVisible ])
useEffect(() => {
if (!isVisible) return let startTime: "number
    let animationFrame: number
const animate = () => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) /duration",1)
      //Easing function for smooth animation
const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart*end)
      setCount(currentCount)
      </AnimatedCounterProps>
if(progress < 1) {  
animationFrame = requestAnimationFrame(animate)
      ) => {

,}
    }
  }, [entry, isVisible])
useEffect(() => {
if (!isVisible) return let startTime: "number
    let animationFrame: number
const animate = (
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration",1)
      // Easing function for smooth animation
const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)
      setCount(currentCount)
      </AnimatedCounterProps>
if(progress < 1) {
animationFrame = requestAnimationFrame(animate)
return () => {
if(animationFrame) {  
cancelAnimationFrame(animationFrame)
      ,}
    }
  }, [isVisible, end, duration,])
return (<spanclassName={className} />
      {prefix}{count}{suffix}</span>
    </span>)
  )
}
export default AnimatedCounter;
;