const fs = require('fs');

// Fix unescaped entities in JSX
function fixEntities(content) {
  return content
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;');
}

// Files with entity issues
const files = [
  'app/about/page.tsx',
  'app/page.tsx',
  'app/services/ai-meeting-assistant/page.tsx',
  'app/services/ai-social-media-scheduler/page.tsx',
  'app/services/blockchain-solutions/page.tsx',
  'app/services/data-analytics/page.tsx',
  'app/services/it-services/page.tsx',
  'src/components/EnhancedContactForm.tsx',
  'src/components/EnhancedServicesShowcase.tsx',
  'src/components/ErrorBoundary.tsx',
  'src/components/ModernTestimonials.tsx',
  'src/components/ProductSubmissionForm.tsx',
  'src/components/TestimonialCarousel.tsx',
  'src/components/TrustedBySection.tsx',
  'src/components/hiring-tracker/KanbanBoard.tsx',
  'src/components/projects/milestones/MilestoneActivities.tsx',
  'src/pages/AboutPage.tsx',
  'src/pages/HomePage.tsx',
  'src/pages/NotFound.tsx',
  'src/pages/NotFoundPage.tsx',
  'src/pages/ServicesPage.tsx',
  'src/components/auth/login/LoginCard.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    const original = content;
    content = fixEntities(content);
    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log(`Fixed entities in ${file}`);
    }
  }
});

console.log('Entity fixes complete');