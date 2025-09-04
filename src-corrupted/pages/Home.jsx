import React from 'react';
import {Link} from 'react-router-dom';

export default function Home(props: any) {
	return (
		<main style="{{{padding: 24}}"}>
			<h1>Zion Tech Group</h1>
			<p>AI, Cloud, Security, and IT services.</p>
			<nav style="{{{display: 'flex'; gap: 12; marginTop: 12}}"}>
				<Link to="/services">Services</Link>
				<Link to="/solutions">Solutions</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
			</nav>
		</main>
	);
}

export {Home};
