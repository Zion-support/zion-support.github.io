import { useEffect } from "react";

interface AccessibilityIssue {
	type: "error" | "warning" | "info";
	message: string;
	element?: HTMLElement;
	rule?: string;
}

export default function AccessibilityAuditor() {
	useEffect(() => {
		// Only run in browser
		if (typeof window === "undefined") {
			return;
		}

		const issues: AccessibilityIssue[] = [];

		// Check for missing alt text on images
		const images = document.querySelectorAll("img");
		images.forEach((img) => {
			if (!img.alt) {
				issues.push({
					type: "error",
					message: "Image missing alt text",
					element: img,
					rule: "alt-text"
				});
			}
		});

		// Check for missing form labels
		const inputs = document.querySelectorAll("input, textarea, select");
		inputs.forEach((input) => {
			const id = input.getAttribute("id");
			const ariaLabel = input.getAttribute("aria-label");
			const ariaLabelledBy = input.getAttribute("aria-labelledby");
			
			if (!id && !ariaLabel && !ariaLabelledBy) {
				issues.push({
					type: "error",
					message: "Form control missing label",
					element: input as HTMLElement,
					rule: "form-labels"
				});
			}
		});

		// Check for proper heading hierarchy
		const headings = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
		let previousLevel = 0;
		headings.forEach((heading) => {
			const level = parseInt(heading.tagName.charAt(1));
			if (level > previousLevel + 1) {
				issues.push({
					type: "warning",
					message: `Heading level skipped from h${previousLevel} to h${level}`,
					element: heading as HTMLElement,
					rule: "heading-hierarchy"
				});
			}
			previousLevel = level;
		});

		// Check for sufficient color contrast (simplified)
		const elements = document.querySelectorAll("*");
		elements.forEach((element) => {
			const styles = window.getComputedStyle(element);
			const color = styles.color;
			const backgroundColor = styles.backgroundColor;
			
			// This is a simplified check - in a real implementation,
			// you'd use a proper color contrast calculation library
			if (color === backgroundColor) {
				issues.push({
					type: "warning",
					message: "Potential color contrast issue",
					element: element as HTMLElement,
					rule: "color-contrast"
				});
			}
		});

		// Log issues to console
		if (issues.length > 0) {
			console.group("Accessibility Issues Found");
			issues.forEach((issue) => {
				console[issue.type](
					`[${issue.rule}] ${issue.message}`,
					issue.element
				);
			});
			console.groupEnd();
		} else {
			console.log("No accessibility issues found");
		}

		// Return cleanup function
		return () => {
			// Cleanup if needed
		};
	}, []);

	return null; // This component doesn't render anything
}