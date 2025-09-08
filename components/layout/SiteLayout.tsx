import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import EnhancedFooter from './EnhancedFooter';
import Sidebar from './Sidebar';

interface SiteLayoutProps {
	children: React.ReactNode;
}

const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen flex flex-col bg-gray-50">
			<EnhancedNavigation />
			<div className="flex flex-1 container mx-auto px-4 gap-6">
				<Sidebar />
				<main className="flex-1 py-8">{children}</main>
			</div>
			<EnhancedFooter />
		</div>
	);
};

export default SiteLayout;