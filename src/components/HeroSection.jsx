<<<<<<< HEAD
" " " " export function HeroSection () { export function HeroSection() { const { t } = useTranslation(); const containerRef = useRef(null); const { scrollYProgress } = useScroll({ target: containerRef, " offset: ["start start", "end start"] });" const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); ";"""
=======
" " " " export function HeroSection () { export function HeroSection() { const { t } = useTranslation(); const containerRef = useRef(null); const { scrollYProgress } = useScroll({ target: containerRef," offset: ["start start", "end start"] });" const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); ";"
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
