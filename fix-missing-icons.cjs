const fs = require('fs');
const path = require('path');
const glob = require('glob');

console.log('Fixing missing icon imports...');

// Find all .tsx files in pages directory
const pages = glob.sync('pages/**/*.tsx', { ignore: ['node_modules/**', 'dist/**', 'out/**', '.next/**'] });

let fixedCount = 0;

pages.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;
    
    // Check if file uses icons but doesn't import them
    const usedIcons = [];
    
    // Check for Server icon
    if (content.includes('Server') && !content.includes("Server,") && !content.includes("Server }")) {
      usedIcons.push('Server');
    }
    
    // Check for Search icon
    if (content.includes('Search') && !content.includes("Search,") && !content.includes("Search }")) {
      usedIcons.push('Search');
    }
    
    // Check for CheckCircle icon
    if (content.includes('CheckCircle') && !content.includes("CheckCircle,") && !content.includes("CheckCircle }")) {
      usedIcons.push('CheckCircle');
    }
    
    // Check for ArrowRight icon
    if (content.includes('ArrowRight') && !content.includes("ArrowRight,") && !content.includes("ArrowRight }")) {
      usedIcons.push('ArrowRight');
    }
    
    // Check for Phone icon
    if (content.includes('Phone') && !content.includes("Phone,") && !content.includes("Phone }")) {
      usedIcons.push('Phone');
    }
    
    // Check for Mail icon
    if (content.includes('Mail') && !content.includes("Mail,") && !content.includes("Mail }")) {
      usedIcons.push('Mail');
    }
    
    // Check for MapPin icon
    if (content.includes('MapPin') && !content.includes("MapPin,") && !content.includes("MapPin }")) {
      usedIcons.push('MapPin');
    }
    
    // Check for Globe icon
    if (content.includes('Globe') && !content.includes("Globe,") && !content.includes("Globe }")) {
      usedIcons.push('Globe');
    }
    
    // Check for Building icon
    if (content.includes('Building') && !content.includes("Building,") && !content.includes("Building }")) {
      usedIcons.push('Building');
    }
    
    // Check for Users icon
    if (content.includes('Users') && !content.includes("Users,") && !content.includes("Users }")) {
      usedIcons.push('Users');
    }
    
    // Check for Settings icon
    if (content.includes('Settings') && !content.includes("Settings,") && !content.includes("Settings }")) {
      usedIcons.push('Settings');
    }
    
    // Check for HelpCircle icon
    if (content.includes('HelpCircle') && !content.includes("HelpCircle,") && !content.includes("HelpCircle }")) {
      usedIcons.push('HelpCircle');
    }
    
    // Check for Shield icon
    if (content.includes('Shield') && !content.includes("Shield,") && !content.includes("Shield }")) {
      usedIcons.push('Shield');
    }
    
    // Check for Zap icon
    if (content.includes('Zap') && !content.includes("Zap,") && !content.includes("Zap }")) {
      usedIcons.push('Zap');
    }
    
    // Check for Cloud icon
    if (content.includes('Cloud') && !content.includes("Cloud,") && !content.includes("Cloud }")) {
      usedIcons.push('Cloud');
    }
    
    // Check for Code icon
    if (content.includes('Code') && !content.includes("Code,") && !content.includes("Code }")) {
      usedIcons.push('Code');
    }
    
    // Check for Network icon
    if (content.includes('Network') && !content.includes("Network,") && !content.includes("Network }")) {
      usedIcons.push('Network');
    }
    
    // Check for Rocket icon
    if (content.includes('Rocket') && !content.includes("Rocket,") && !content.includes("Rocket }")) {
      usedIcons.push('Rocket');
    }
    
    // Check for Target icon
    if (content.includes('Target') && !content.includes("Target,") && !content.includes("Target }")) {
      usedIcons.push('Target');
    }
    
    // Check for Brain icon
    if (content.includes('Brain') && !content.includes("Brain,") && !content.includes("Brain }")) {
      usedIcons.push('Brain');
    }
    
    // Check for BarChart3 icon
    if (content.includes('BarChart3') && !content.includes("BarChart3,") && !content.includes("BarChart3 }")) {
      usedIcons.push('BarChart3');
    }
    
    // Check for TrendingUp icon
    if (content.includes('TrendingUp') && !content.includes("TrendingUp,") && !content.includes("TrendingUp }")) {
      usedIcons.push('TrendingUp');
    }
    
    // Check for Star icon
    if (content.includes('Star') && !content.includes("Star,") && !content.includes("Star }")) {
      usedIcons.push('Star');
    }
    
    // Check for DollarSign icon
    if (content.includes('DollarSign') && !content.includes("DollarSign,") && !content.includes("DollarSign }")) {
      usedIcons.push('DollarSign');
    }
    
    // Check for Clock icon
    if (content.includes('Clock') && !content.includes("Clock,") && !content.includes("Clock }")) {
      usedIcons.push('Clock');
    }
    
    // Check for Building2 icon
    if (content.includes('Building2') && !content.includes("Building2,") && !content.includes("Building2 }")) {
      usedIcons.push('Building2');
    }
    
    // Check for Video icon
    if (content.includes('Video') && !content.includes("Video,") && !content.includes("Video }")) {
      usedIcons.push('Video');
    }
    
    // Check for MessageSquare icon
    if (content.includes('MessageSquare') && !content.includes("MessageSquare,") && !content.includes("MessageSquare }")) {
      usedIcons.push('MessageSquare');
    }
    
    // Check for Eye icon
    if (content.includes('Eye') && !content.includes("Eye,") && !content.includes("Eye }")) {
      usedIcons.push('Eye');
    }
    
    // Check for FileText icon
    if (content.includes('FileText') && !content.includes("FileText,") && !content.includes("FileText }")) {
      usedIcons.push('FileText');
    }
    
    // Check for ExternalLink icon
    if (content.includes('ExternalLink') && !content.includes("ExternalLink,") && !content.includes("ExternalLink }")) {
      usedIcons.push('ExternalLink');
    }
    
    // Check for Calendar icon
    if (content.includes('Calendar') && !content.includes("Calendar,") && !content.includes("Calendar }")) {
      usedIcons.push('Calendar');
    }
    
    // Check for Award icon
    if (content.includes('Award') && !content.includes("Award,") && !content.includes("Award }")) {
      usedIcons.push('Award');
    }
    
    // Check for CheckCircle icon
    if (content.includes('CheckCircle') && !content.includes("CheckCircle,") && !content.includes("CheckCircle }")) {
      usedIcons.push('CheckCircle');
    }
    
    // Check for ArrowRight icon
    if (content.includes('ArrowRight') && !content.includes("ArrowRight,") && !content.includes("ArrowRight }")) {
      usedIcons.push('ArrowRight');
    }
    
    // Check for Phone icon
    if (content.includes('Phone') && !content.includes("Phone,") && !content.includes("Phone }")) {
      usedIcons.push('Phone');
    }
    
    // Check for Mail icon
    if (content.includes('Mail') && !content.includes("Mail,") && !content.includes("Mail }")) {
      usedIcons.push('Mail');
    }
    
    // Check for MapPin icon
    if (content.includes('MapPin') && !content.includes("MapPin,") && !content.includes("MapPin }")) {
      usedIcons.push('MapPin');
    }
    
    // Check for Globe icon
    if (content.includes('Globe') && !content.includes("Globe,") && !content.includes("Globe }")) {
      usedIcons.push('Globe');
    }
    
    // Check for Building icon
    if (content.includes('Building') && !content.includes("Building,") && !content.includes("Building }")) {
      usedIcons.push('Building');
    }
    
    // Check for Users icon
    if (content.includes('Users') && !content.includes("Users,") && !content.includes("Users }")) {
      usedIcons.push('Users');
    }
    
    // Check for Settings icon
    if (content.includes('Settings') && !content.includes("Settings,") && !content.includes("Settings }")) {
      usedIcons.push('Settings');
    }
    
    // Check for HelpCircle icon
    if (content.includes('HelpCircle') && !content.includes("HelpCircle,") && !content.includes("HelpCircle }")) {
      usedIcons.push('HelpCircle');
    }
    
    // Check for Shield icon
    if (content.includes('Shield') && !content.includes("Shield,") && !content.includes("Shield }")) {
      usedIcons.push('Shield');
    }
    
    // Check for Zap icon
    if (content.includes('Zap') && !content.includes("Zap,") && !content.includes("Zap }")) {
      usedIcons.push('Zap');
    }
    
    // Check for Cloud icon
    if (content.includes('Cloud') && !content.includes("Cloud,") && !content.includes("Cloud }")) {
      usedIcons.push('Cloud');
    }
    
    // Check for Code icon
    if (content.includes('Code') && !content.includes("Code,") && !content.includes("Code }")) {
      usedIcons.push('Code');
    }
    
    // Check for Network icon
    if (content.includes('Network') && !content.includes("Network,") && !content.includes("Network }")) {
      usedIcons.push('Network');
    }
    
    // Check for Rocket icon
    if (content.includes('Rocket') && !content.includes("Rocket,") && !content.includes("Rocket }")) {
      usedIcons.push('Rocket');
    }
    
    // Check for Target icon
    if (content.includes('Target') && !content.includes("Target,") && !content.includes("Target }")) {
      usedIcons.push('Target');
    }
    
    // Check for Brain icon
    if (content.includes('Brain') && !content.includes("Brain,") && !content.includes("Brain }")) {
      usedIcons.push('Brain');
    }
    
    // Check for BarChart3 icon
    if (content.includes('BarChart3') && !content.includes("BarChart3,") && !content.includes("BarChart3 }")) {
      usedIcons.push('BarChart3');
    }
    
    // Check for TrendingUp icon
    if (content.includes('TrendingUp') && !content.includes("TrendingUp,") && !content.includes("TrendingUp }")) {
      usedIcons.push('TrendingUp');
    }
    
    // Check for Star icon
    if (content.includes('Star') && !content.includes("Star,") && !content.includes("Star }")) {
      usedIcons.push('Star');
    }
    
    // Check for DollarSign icon
    if (content.includes('DollarSign') && !content.includes("DollarSign,") && !content.includes("DollarSign }")) {
      usedIcons.push('DollarSign');
    }
    
    // Check for Clock icon
    if (content.includes('Clock') && !content.includes("Clock,") && !content.includes("Clock }")) {
      usedIcons.push('Clock');
    }
    
    // Check for Building2 icon
    if (content.includes('Building2') && !content.includes("Building2,") && !content.includes("Building2 }")) {
      usedIcons.push('Building2');
    }
    
    // Check for Video icon
    if (content.includes('Video') && !content.includes("Video,") && !content.includes("Video }")) {
      usedIcons.push('Video');
    }
    
    // Check for MessageSquare icon
    if (content.includes('MessageSquare') && !content.includes("MessageSquare,") && !content.includes("MessageSquare }")) {
      usedIcons.push('MessageSquare');
    }
    
    // Check for Eye icon
    if (content.includes('Eye') && !content.includes("Eye,") && !content.includes("Eye }")) {
      usedIcons.push('Eye');
    }
    
    // Check for FileText icon
    if (content.includes('FileText') && !content.includes("FileText,") && !content.includes("FileText }")) {
      usedIcons.push('FileText');
    }
    
    // Check for ExternalLink icon
    if (content.includes('ExternalLink') && !content.includes("ExternalLink,") && !content.includes("ExternalLink }")) {
      usedIcons.push('ExternalLink');
    }
    
    // Check for Calendar icon
    if (content.includes('Calendar') && !content.includes("Calendar,") && !content.includes("Calendar }")) {
      usedIcons.push('Calendar');
    }
    
    // Check for Award icon
    if (content.includes('Award') && !content.includes("Award,") && !content.includes("Award }")) {
      usedIcons.push('Award');
    }
    
    if (usedIcons.length > 0) {
      console.log(`Adding missing icons to ${file}: ${usedIcons.join(', ')}`);
      
      // Find the lucide-react import line
      const lines = content.split('\n');
      let lucideImportIndex = -1;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes("from 'lucide-react'")) {
          lucideImportIndex = i;
          break;
        }
      }
      
      if (lucideImportIndex !== -1) {
        // Add missing icons to the existing import
        const importLine = lines[lucideImportIndex];
        const existingIcons = importLine.match(/\{([^}]+)\}/);
        
        if (existingIcons) {
          const currentIcons = existingIcons[1].split(',').map(icon => icon.trim());
          const allIcons = [...new Set([...currentIcons, ...usedIcons])];
          const newImportLine = importLine.replace(/\{[^}]+\}/, `{ ${allIcons.join(', ')} }`);
          lines[lucideImportIndex] = newImportLine;
        }
        
        const newContent = lines.join('\n');
        fs.writeFileSync(file, newContent, 'utf8');
        fixedCount++;
      }
    }
  } catch (error) {
    console.error(`Error processing file ${file}:`, error.message);
  }
});

console.log(`Fixed missing icons in ${fixedCount} files`);
console.log('Icon fixes complete!');