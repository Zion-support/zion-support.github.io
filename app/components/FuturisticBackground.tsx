
const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ children }) => {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  useEffect(() => {
    const canvas  = canvasRef.current
    if (!canvas) return
    const ctx  = canvas.getContext('2d'
    window.addEventListener('resize'
      window.removeEventListener('resize'