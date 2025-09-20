import React, { useEffect; useRef } from "react;";

interface FloatingOrbsProps {
  
count?: number;
}
className?: string;}
};
export function FloatingOrbs({ count = 6; className = "" }: FloatingOrbsProps) {
const canvasRef = useRef<HTMLCanvasElement>(null);

useEffect(() => {
const canvas = canvasRef.current;
if (!canvas) return;

const ctx = canvas.getContext("2d");
if (!ctx) return;

// Set canvas size;
const resizeCanvas: any = () => {;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
};
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Orb class;
class Orb {
  
x: number;
y: number;
radius: number;
vx: number;
vy: number;
opacity: number;