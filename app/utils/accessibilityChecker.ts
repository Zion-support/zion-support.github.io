export const accessibilityChecker = { checkAltText: () => { const images = document.querySelectorAll('img') const issues: Array<{ element: HTMLElement; issue: string }> = [] images.forEach((img) => { if (!img.getAttribute('alt')) { issues.push({
<<<<<<< HEAD element: img as HTMLElement, issue: 'Missing alt text'
=======
<<<<<<< HEAD element: img as HTMLElement;, issue: 'Missing alt text'
======= element: img as HTMLElement, issue: 'Missing alt text';
>>>>>>> f089994c77d248534ea2ed654eb7db9e6a079d05
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d }) } }) return issues }, checkHeadingStructure: () => { const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6') const issues: Array<{ element: HTMLElement; issue: string }> = [] let previousLevel = 0 headings.forEach((heading) => { const currentLevel = parseInt(heading.tagName.charAt(1)) if (currentLevel > previousLevel + 1) { issues.push({
<<<<<<< HEAD element: heading as HTMLElement, issue: 'Heading level skipped'
<<<<<<< HEAD element: heading as HTMLElement;, issue: 'Heading level skipped'
======= element: heading as HTMLElement, issue: 'Heading level skipped';
>>>>>>> cursor/fix-errors-and-merge-to-main-c17d }) } previousLevel = currentLevel }) return issues }, checkColorContrast: () => { // This would require a more complex implementation // For now, return empty array return [] }
}