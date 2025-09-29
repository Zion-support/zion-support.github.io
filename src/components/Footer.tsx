import React from "react";

export default function Footer(): React.JSX.Element {
	return (
		<footer style={{ padding: '1rem' }}>
			<small>© {new Date().getFullYear()} Zion Tech Group</small>
		</footer>
	);
}

