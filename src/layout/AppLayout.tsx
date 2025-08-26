import React from "react";
import { PrimaryNav } from "./PrimaryNav";
import { Footer } from "@/components/Footer";

interface AppLayoutProps {
	children?: React.ReactNode;
	hideFooter?: boolean;
}

export function AppLayout({ children, hideFooter = false }: AppLayoutProps) {
	return (
		<div className="flex flex-col min-h-screen bg-background">
			<span id="top" aria-hidden="true" className="sr-only" />
			<PrimaryNav />
			<main id="main-content" className="flex-grow">
				{children}
			</main>
			{!hideFooter && <Footer />}
		</div>
	);
}
