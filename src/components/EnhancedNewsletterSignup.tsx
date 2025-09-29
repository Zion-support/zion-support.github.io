import React from "react";

<<<<<<< HEAD
export default function EnhancedNewsletterSignup(): React.JSX.Element {
	return (
		<form onSubmit={(e) => e.preventDefault()} aria-label="Newsletter signup">
			<input placeholder="Email" aria-label="Email" />
			<button type="submit">Subscribe</button>
		</form>
	);
=======
interface Props {
  title?: string;
  subtitle?: string;
  showContentPreview?: boolean;
}

export default function EnhancedNewsletterSignup(_props: Props): React.JSX.Element {
  return <section />;
>>>>>>> origin/main
}

