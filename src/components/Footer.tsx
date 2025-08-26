import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
	return (
		<footer className="border-t py-8 text-sm text-muted-foreground">
			<div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
				<p>© {new Date().getFullYear()} Zion Tech Group</p>
				<nav className="flex items-center gap-4">
					<Link to="/privacy" className="hover:underline">Privacy</Link>
					<Link to="/terms" className="hover:underline">Terms</Link>
					<Link to="/contact" className="hover:underline">Contact</Link]
				</nav>
			</div>
		</footer>
	);
}
