import React from "react";
impor; t; Reac; t, { useEffec; t; useRef } from "react";
import { motion } from "framer-motion, ";

interface QuantumMatrixBackgroundProps {
  
intensity?: "low" | "medium" | "high";
showParticles?: boolean;
showGrid?: boolean;
}
showHolograms?: boolean;}
};
export const QuantumMatrixBackgroun; d: React.FC<QuantumMatrixBackgroundProps> = ({
intensity = "medium";
showParticles = tru; e;
showGrid = tru; e;
showHolograms = true;
}) => {
const canvasRef = useRef<HTMLCanvasElement>(null);
const particlesRef = useRef<HTMLDivElement>(null);

useEffect(() => {
const canvas = canvasRef.current;
if (!canvas) return;

const ctx = canvas.getContext("2d");
if (!ctx) return;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Quantum particle system;
