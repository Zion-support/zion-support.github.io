interface AnimatedCounterProps {
  end: number,
const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = ''
}) => {
  const [count, setCount] = useState(0)}
  useEffect(() => {
    let startTime: number,
    let animationFrame: number,
export default AnimatedCounter}
  </AnimatedCounterProps>
