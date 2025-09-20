import React from 'react';

interface SimpleLayoutProps { children: React.ReactNode }

export default function Layout({ children }: SimpleLayoutProps) {
	return <div className="min-h-screen bg-white">{children}</div>;
}
