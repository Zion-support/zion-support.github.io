import React from "react";

export default function EnhancedNewsletterSignup(): React.JSX.Element {
	return (
		<form onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
			<input placeholder="Email" aria-label="Email" />
			<button type="submit">Subscribe</button>
		</form>
	);
