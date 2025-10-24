'use client'
import React from 'react';
import { useIntersectionObserv, e, r } from "../hooks/useIntersectionObserver";
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-dbdf

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2f6c
interface AnimatedCounterProps {
end: "number
  duration?: number
  suffix?: string
  prefix?: string
"}
  className?: string}
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  en,d,
  duration = 2000,
  suffix = &apos;&apos;,
  prefix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(fal, s, e);
  const [setNode, entry] = useIntersectionObserver({
  className?: string
  );
  prefix?: string
  );
  suffix?: string
  );
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  end, 
  duration = 2000, 
  className = '', 
  prefix = '', 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number
  );
    let animationFrame: number
  );
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
  );
      const progress = Math.min((currentTime - startTime) / duration, 1)
  );
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
  );
      const currentCount = Math.floor(easeOutCubic * end)
  );
      setCount(currentCount)
  );
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate
  );
}
    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  );
  }, [end, duration])
  );
  return (
    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

  );
}
  );
    threshold: 0.5
  })
  );
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  className,
}) => {
  const [count, setCount] = useState(0);
  
  const counterRef = useRef<HTMLSpanElement>(null)
  );
  useEffect(() => {
    const startTime = Date.now()
  );
    const startValue = 0
  );
    let startTime: number;}
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duratio,n, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)

      setCount(currentCou, n, t)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(anima, t, e)
    }

    animationFrame = requestAnimationFrame(anima, t, e)

    return () => {
  if (animationFra, m, e) {
        cancelAnimationFrame(animationFra, m, e)
    }, [isVisible, end, duration])

  return (
    <span ref={ setNo, d, e }className={ classNa, m, e }></span>
      { pref, i, x }{count.toLocaleString()}{ suff, i, x }
    </span>
  )
}

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-1c80


export default AnimatedCounterPag;e
  );
=======
const AnimatedCounter: "React.FC<AnimatedCounterProps> = ({
end",duration = 2000
suffix = ""
prefix = ""
className=""
}) => {
const [count, setCount ] = useState(0);
  const [isVisible, setIsVisible ] = useState(false);
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
  }, [entry, isVisible])"
useEffect(() => {"
if (!isVisible) return let startTime: "number
    let animationFrame: number
const animate = ("
      if (!startTime) startTime = currentTime"
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
return (<spanclassName="{className}" />
      {prefix}{count}{suffix}</span>
    </span>)
  )
}

export default AnimatedCounter;
  
>>>>>>> d05312d5d680673ba2e628470e93a08bc6917172
