import React from 'react';
type Props = { children?: React.ReactNode };
export default function UltraFuturisticBackground({ children }: Props) {
	return <div className="bg-black min-h-screen">{children}</div>;
}