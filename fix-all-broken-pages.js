
const fs = $2;
    const ctaPattern = /<div className="flex flex-col sm: flex-row gap-4 justify-center">\s*\n\s*Start Your Project\s*\n\s*<\/a>\s*\n\s*Learn More\s*\n\s*<\/a>/gs;
    const ctaReplacement = $2;
const fixedCount = findAndFixPages(appDir)
// eslint-disable-next-line no-console
    console.log(`Fixed ${fixedCount} page files`)