import fs from 'fs''
import path from 'path'
// List of files to fix (from the linting errors)
const filesToFix = ['
  'app/components/FuturisticBackgroundEnhanced.tsx''
  'app/components/FuturisticButtonEnhanced.tsx''
  'app/components/FuturisticCardEnhanced.tsx''
  'app/components/FuturisticTextEnhanced.tsx''
  'app/components/ImprovedErrorBoundary.tsx''
  'app/components/ImprovedFooter.tsx''
  'app/components/ImprovedImage.tsx''
  'app/components/ImprovedNavigation.tsx''
  'app/components/ImprovedSidebar.tsx''
  'app/components/LazyImage.tsx''
  'app/components/Loading.tsx''
  'app/components/MobileNavigation.tsx''
  'app/components/ResponsiveGrid.tsx''
  'app/components/ResponsiveText.tsx''
  'app/components/StructuredData.tsx''
  'app/config/errorBoundaryConfig.tsx''
  'app/main.tsx''
  'app/micro-saas-services/microSaasServices.tsx''
  'app/micro-saas-services/services.tsx''
  'app/not-found.tsx''
  'app/service-template.tsx'
]
// Common replacements for unescaped entities
const replacements = ['
  { from: "Let's", to: "Let&apos;s" }'"
  { from: "Don't", to: "Don&apos;t" }'"
  { from: "We're", to: "We&apos;re" }'"
  { from: "It's", to: "It&apos;s" }'"
  { from: "You're", to: "You&apos;re" }'"
  { from: "I'm", to: "I&apos;m" }'"
  { from: "I'll", to: "I&apos;ll" }'"
  { from: "I've", to: "I&apos;ve" }'"
  { from: "I'd", to: "I&apos;d" }'"
  { from: "won't", to: "won&apos;t" }'"
  { from: "can't", to: "can&apos;t" }'"
  { from: "shouldn't", to: "shouldn&apos;t" }'"
  { from: "wouldn't", to: "wouldn&apos;t" }'"
  { from: "couldn't", to: "couldn&apos;t" }'"
  { from: "isn't", to: "isn&apos;t" }'"
  { from: "aren't", to: "aren&apos;t" }'"
  { from: "wasn't", to: "wasn&apos;t" }'"
  { from: "weren't", to: "weren&apos;t" }'"
  { from: "hasn't", to: "hasn&apos;t" }'"
  { from: "haven't", to: "haven&apos;t" }'"
  { from: "hadn't", to: "hadn&apos;t" }'"
  { from: "doesn't", to: "doesn&apos;t" }'"
  { from: "didn't", to: "didn&apos;t" }'"
  { from: "will", to: "will" }, // This one doesn't need escaping
]
function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`)
      return
    }'
    let content = fs.readFileSync(filePath, 'utf8')
    let modified = false
    replacements.forEach(({ from, to }) => {
      if (content.includes(from)) {'
        content = content.replace(new RegExp(from, 'g'), to)
        modified = true
      }
    })
    if (modified) {'
      fs.writeFileSync(filePath, content, 'utf8')
      console.log(`Fixed: ${filePath}`)
    } else {
      console.log(`No changes needed: ${filePath}`)
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message)
  }
}
// Fix all files
filesToFix.forEach(fixFile)'
console.log('Done fixing unescaped entities!')'"