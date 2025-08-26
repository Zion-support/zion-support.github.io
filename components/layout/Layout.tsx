import React from 'react';
import EnhancedNavigation from './EnhancedNavigation';
import Footer from './Footer';

interface SiteLayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<SiteLayoutProps> = ({ children }) => {
	return (
		<div className="min-h-screen bg-black text-white">
			<EnhancedNavigation />
			<main className="pt-20">{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
