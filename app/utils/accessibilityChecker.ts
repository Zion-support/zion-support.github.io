export const accessibilityChecker = {
  checkAltText: () => {
    const images = document.querySelectorAll('img')
    const issues: Array<{ element: HTMLElement; issue: string }> = []
    
    images.forEach((img) => {
      if (!img.getAttribute('alt')) {
        issues.push({

>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
        })
      }
    
    return issues
  },
  
  checkHeadingStructure: () => {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
    let previousLevel = 0
    
    headings.forEach((heading) => {
      const currentLevel = parseInt(heading.tagName.charAt(1))
      if (currentLevel > previousLevel + 1) {
        issues.push({

>>>>>>> cursor/fix-errors-and-merge-to-main-c17d
        })
      }
      previousLevel = currentLevel
    
  
  checkColorContrast: () => {
    // This would require a more complex implementation
    // For now, return empty array
    return []