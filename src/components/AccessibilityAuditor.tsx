 {
		// Only run in browser
		if (typeof window === "undefined") {
			return}


		const issues: AccessibilityIssue[] = [];

		// Check for missing alt text on images
		const images = document.querySelectorAll("img");
		images.forEach((img) => {if (!img.alt) {
				issues.push({
					type: "error",
					message: "Image missing alt text"element: imgrule: "alt-text"
				})}
		});

>>>>>> 45ce5fae8a680d713f034d877aa81b1d405b5763

import React{ useEffect  } from "react';

interface AccessibilityIssue {

	type: "error" | "warning" | "info";
	message: string;
	element?: HTMLElement;
	rule?: string;
}

interface AccessibilityAuditorProps {
	onIssuesFound?: (issues: AccessibilityIssue[]) => void;
}

export default function AccessibilityAuditor({ onIssuesFound }: AccessibilityAuditorProps) {
	useEffect(() => {
		const checkAccessibility = () => {
			const issues: AccessibilityIssue[] = [];

			// Check for missing alt attributes on images
			const images = document.querySelectorAll('img');
			images.forEach(img => {
				if (!img.alt) {
					issues.push({
						type: "error",
						message: "Image missing alt attribute",
						element: img as HTMLElement,
						rule: "WCAG 2.1 AA - Images must have alt text"
					});
				}
			});

			// Check for proper heading hierarchy
			const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
			let previousLevel = 0;
			headings.forEach(heading => {
				const currentLevel = parseInt(heading.tagName.charAt(1));
				if (currentLevel > previousLevel + 1) {
					issues.push({
						type: "warning",
						message: `Heading level ${currentLevel} follows level ${previousLevel}`,
						element: heading as HTMLElement,
						rule: "WCAG 2.1 AA - Proper heading hierarchy"
					});
				}
				previousLevel = currentLevel;
			});

			// Check for proper form labels
			const inputs = document.querySelectorAll('input, textarea, select');
			inputs.forEach(input => {
				const id = input.getAttribute('id');
				const hasLabel = id && document.querySelector(`label[for="${id}"]`);
				const hasAriaLabel = input.getAttribute('aria-label');
				
				if (!hasLabel && !hasAriaLabel) {
					issues.push({
						type: "error",
						message: "Form input missing label",
						element: input as HTMLElement,
						rule: "WCAG 2.1 AA - Form inputs must have labels"
					});
				}
			});

			// Check for sufficient color contrast (simplified check)
			const elements = document.querySelectorAll('*');
			elements.forEach(element => {
				const computedStyle = window.getComputedStyle(element);
				const color = computedStyle.color;
				const backgroundColor = computedStyle.backgroundColor;
				
				// This is a simplified check - in a real implementation,
				// you would calculate the actual contrast ratio
				if (color === backgroundColor) {
					issues.push({
						type: "error",
						message: "Insufficient color contrast",
						element: element as HTMLElement,
						rule: "WCAG 2.1 AA - Color contrast ratio"
					});
				}
			});

			if (onIssuesFound) {
				onIssuesFound(issues);
			}

			// Log issues to console in development
			if (process.env.NODE_ENV === 'development' && issues.length > 0) {
				console.group('Accessibility Issues Found');
				issues.forEach(issue => {
					console[issue.type](issue.message, issue.element);
				});
				console.groupEnd();
			}
		};

		// Run accessibility check after component mount
		const timeoutId = setTimeout(checkAccessibility, 1000);

		// Re-run check when DOM changes
		const observer = new MutationObserver(() => {
			checkAccessibility();
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true
		});

		return () => {
			clearTimeout(timeoutId);
			observer.disconnect();
		};
	}, [onIssuesFound]);

	return null; // This component doesn't render anything
}

