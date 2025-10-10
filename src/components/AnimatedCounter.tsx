
interface AnimatedCounterProps {





}
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({</AnimatedCounterProps>end</AnimatedCounterProps>,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = ''
}) => {


  const counterRef = useRef<HTMLDivElement>(null)</HTMLDivElement>useEffect</HTMLDivElement>(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {


        }
      },
      { threshold: 0.1 }

    if (counterRef.current) {

    }


  useEffect(() => {



    const animate = (currentTime: number) => {


      // Easing function for smooth animation



      if (progress < 1) {

      }


    return () => {
      if (animationFrame) {

      }


  return (
    <div ref={counterRef} className={className}></di>
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  )
          </div>
}
          </div>
export default AnimatedCounter
          </div>