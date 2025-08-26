import React from 'react';

interface UltraFuturisticBackgroundProps {
	children: React.ReactNode;
}

export default function UltraFuturisticBackground({ children }: UltraFuturisticBackgroundProps) {
	return <div className="relative min-h-screen">{children}</div>;
}