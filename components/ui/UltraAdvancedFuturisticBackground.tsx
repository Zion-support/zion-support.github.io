import React, { useEffect, useRef } from 'react';

interface UltraAdvancedFuturisticBackgroundProps {
	children: React.ReactNode;
	variant?: 'quantum' | 'holographic' | 'cyberpunk' | 'neural' | 'quantum-holographic' | 'quantum-advanced' | 'holographic-advanced' | 'neural-quantum' | 'quantum-cyberpunk' | 'holographic-neural' | 'quantum-holographic-advanced' | 'quantum-matrix' | 'neural-cyberpunk' | 'holographic-quantum' | 'quantum-neural-advanced' | 'cyberpunk-holographic' | 'quantum-space' | 'ai-futuristic' | 'quantum-entanglement' | 'holographic-matrix' | 'neural-quantum-cyberpunk';
}

export default function UltraAdvancedFuturisticBackground({ children, variant = 'quantum-holographic-advanced' }: UltraAdvancedFuturisticBackgroundProps) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const resize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resize();
		window.addEventListener('resize', resize);

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		const gradient = ctx.createRadialGradient(
			canvas.width / 2,
			canvas.height / 2,
			0,
			canvas.width / 2,
			canvas.height / 2,
			canvas.width / 2
		);
		if (variant.includes('quantum')) {
			gradient.addColorStop(0, 'rgba(0,255,255,0.06)');
			gradient.addColorStop(1, 'rgba(0,0,0,0.9)');
		} else if (variant.includes('holographic')) {
			gradient.addColorStop(0, 'rgba(139,92,246,0.06)');
			gradient.addColorStop(1, 'rgba(0,0,0,0.9)');
		} else if (variant.includes('neural')) {
			gradient.addColorStop(0, 'rgba(16,185,129,0.06)');
			gradient.addColorStop(1, 'rgba(0,0,0,0.9)');
		} else {
			gradient.addColorStop(0, 'rgba(236,72,153,0.06)');
			gradient.addColorStop(1, 'rgba(0,0,0,0.9)');
		}
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		return () => {
			window.removeEventListener('resize', resize);
		};
	}, [variant]);

	return (
		<div className="relative min-h-screen overflow-hidden">
			<canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-0" />
			<div className="relative z-10">{children}</div>
		</div>
	);
}