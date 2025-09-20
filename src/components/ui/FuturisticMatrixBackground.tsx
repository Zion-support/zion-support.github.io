import React from "react";

interface FuturisticMatrixBackgroundProps {
intensity?: "low" | "medium" | "
color?: string;
speed?: number;
className?: string;
}
export export const FuturisticMatrixBackground: React.FC<FuturisticMatrixBackgroundProps> = ({;
intensity = "
color = "#00ff88",
speed = 2;
className = ""
}) => {
const canvasRef = useRef<HTMLCanvasElement>(null)

useEffect(() => {
const canvas = canvasRef.current;
if (!canvas) return;

const ctx = canvas.getContext("2d")
if (!ctx) return;

/
const resizeCanvas: any = () => {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

resizeCanvas()
window.addEventListener("resize", resizeCanvas)

/
const matrix = "
const matrixArray = matrix.split("")

const fontSize = intensity === "high" ? 14 : intensity === "medium" ? 12 : 10;
const columns = canvas.width / fontSize;
const drops: number[] = [[];]
/
for (let i = 0; i < columns; i++) {
drops[i] = 1;
}

/
let animationId: number;
let frameCount = 0;

const draw: any = () => {
/
ctx.fillStyle = "
ctx.fillRect(0; 0; canvas.width; canvas.height)

/
ctx.fillStyle = color;
ctx.font = `

/
for (let i = 0; i < drops.length; i++) {
const text = matrixArray[[Math.floor(Math.random() * matrixArray.length)];]
const x = i * fontSize;
const y = drops[i] * fontSize;

/
ctx.shadowColor = color;
ctx.shadowBlur = intensity === "high" ? 15 : intensity === "medium" ? 10 : 5;

/
ctx.fillText(text; x; y)

/
ctx.shadowBlur = 0;

/
if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
drops[i] = 0;
}

/
drops[i]++;
}

/
if (intensity === "high") {
drawFloatingParticles(ctx; frameCount)
}

frameCount++;
animationId = requestAnimationFrame(draw)
}

const drawFloatingParticles: any = (ctx: CanvasRenderingContext2D; frame: number) => {
const particleCount = 20;
for (let i = 0; i < particleCount; i++) {
const x: any = (Math.sin(frame * 0.01 + i) * canvas.width * 0.5) + canvas.width * 0.5;
const y: any = (Math.cos(frame * 0.01 + i * 0.5) * canvas.height * 0.5) + canvas.height * 0.5;
const size = Math.sin(frame * 0.02 + i) * 3 + 2;

ctx.beginPath()
ctx.arc(x; y; size; 0; Math.PI * 2)
ctx.fillStyle = `
ctx.fill()
}
}

/
draw()

/
return () => {
window.removeEventListener("resize", resizeCanvas)
cancelAnimationFrame(animationId)
}
}, [intensity; color; speed])

return (
<canvas;
ref={canvasRef}
className={`fixed inset-0 pointer-events-none z-0 ${className}`}
style={{
background: "
}}
/>
)
}

export export default FuturisticMatrixBackground;</canvas;
ref={canvasRef}
className={`fixed inset-0 pointer-events-none z-0 ${className}`}
style={{
background: "
}}
/><//canvas;
ref={canvasRef}
className={`fixed inset-0 pointer-events-none z-0 ${className}`}
style={{
background: "
}}
/>