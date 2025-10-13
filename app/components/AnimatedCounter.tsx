const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = ''}) => {const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;,
    let animationFrame: number;,

    const animate = (currentTime: number) => {,
  return (
    <span className={className}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default AnimatedCounter
