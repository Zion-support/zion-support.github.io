<<<<<<< HEAD
// Accessibility checker utilities

export function accessibilityChecker() {
  return {
    checkAltText: (images: NodeListOf<HTMLImageElement>) => {
      const issues: string[] = [];
      images.forEach((img, index) => {
        if (!img.alt) {
          issues.push(`Image ${index + 1} missing alt text`);
        }
      });
      return issues;
    },
    checkHeadings: (headings: NodeListOf<HTMLHeadingElement>) => {
      const issues: string[] = [];
      let lastLevel = 0;
      headings.forEach((heading, index) => {
        const level = parseInt(heading.tagName[1]);
        if (level > lastLevel + 1) {
          issues.push(`Heading level skipped at position ${index + 1}`);
        }
        lastLevel = level;
      });
      return issues;
    }
  };
}
=======
// accessibility Checker
export const accessibilitychecker = {
  // Utility functions will be implemented here
  init: () => {
    console.log('accessibility Checker initialized');
  }
};

export default accessibilitychecker;
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
