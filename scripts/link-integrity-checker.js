

























  fs';
import path from "pathpath';


  async checkIntegrity() {'
    try {''







        }
        // Check for broken script references;"

        const scriptRegex = /<script[^>]+src=['']([^'']+)['']/g;

        while ((match = scriptRegex.exec(content)) !== null) {
          const src = match[1];
          if (!this.isValidAsset(src, file)) {'
            this.issues.push("Broken script reference in ${file}: ${src}")}
        }
        // Check for broken stylesheet references;"
        const linkRegex = /<link[^>]+href=['']([^']+)['']/g;
        while ((match = linkRegex.exec(content)) !== null) {;
          const href = match[1];
          if (!this.isValidAsset(href, file)) {'






        // Check for broken image references in CSS;

        const content = fs.readFileSync(file,utf8');
        // Check for broken image references in CSS;
        const urlRegex = /url\([']?([^')\s]+)[']?\)/g;









      console.warn("
  '⚠️  Could not check JavaScript "integrity": ', error.message)}
  }
  "async": checkBuildArtifacts() {
    try {



