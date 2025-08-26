import React from 'react';
import { AppHeader } from './AppHeader';

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col bg-background">
			<AppHeader />
			<main className="flex-1">{children}</main>
		</div>
	);
};

export default AppLayout;