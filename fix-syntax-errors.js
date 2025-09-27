#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Common syntax error patterns and their fixes
const fixes = [
  // Fix corrupted commas and spaces
  { pattern: /, , ,/g, replacement: ',' },
  { pattern: /, , /g, replacement: ', ' },
  { pattern: /\., , /g, replacement: '. ' },
  { pattern: /\. , /g, replacement: '. ' },
  
  // Fix corrupted method calls
  { pattern: /\.l\('([^']+)'\)/g, replacement: "('$1')" },
  { pattern: /\.h\(/g, replacement: '(' },
  { pattern: /\.e\(/g, replacement: '(' },
  { pattern: /\.r\(/g, replacement: '(' },
  { pattern: /\.d\(/g, replacement: '(' },
  { pattern: /\.g\(/g, replacement: '(' },
  { pattern: /\.s\(/g, replacement: '(' },
  { pattern: /\.t\(/g, replacement: '(' },
  { pattern: /\.n\(/g, replacement: '(' },
  { pattern: /\.c\(/g, replacement: '(' },
  { pattern: /\.y\(/g, replacement: '(' },
  
  // Fix specific corrupted method names
  { pattern: /querySelectorAl\.l/g, replacement: 'querySelectorAll' },
  { pattern: /forEac\.h/g, replacement: 'forEach' },
  { pattern: /getAttribut\.e/g, replacement: 'getAttribute' },
  { pattern: /pus\.h/g, replacement: 'push' },
  { pattern: /getElementByI\.d/g, replacement: 'getElementById' },
  { pattern: /querySelecto\.r/g, replacement: 'querySelector' },
  { pattern: /matchMedi\.a/g, replacement: 'matchMedia' },
  { pattern: /addEventListene\.r/g, replacement: 'addEventListener' },
  { pattern: /removeEventListene\.r/g, replacement: 'removeEventListener' },
  { pattern: /insertBefor\.e/g, replacement: 'insertBefore' },
  { pattern: /firstChi\.l/g, replacement: 'firstChild' },
  
  // Fix corrupted variable declarations
  { pattern: /setIsOptimizin, g/g, replacement: 'setIsOptimizing' },
  { pattern: /setIsAnalyzin, g/g, replacement: 'setIsAnalyzing' },
  { pattern: /setOptimization, s/g, replacement: 'setOptimizations' },
  { pattern: /setSuggestion, s/g, replacement: 'setSuggestions' },
  { pattern: /setIsMonitorin, g/g, replacement: 'setIsMonitoring' },
  { pattern: /setSelectedSeverit, y/g, replacement: 'setSelectedSeverity' },
  { pattern: /setAlert, s/g, replacement: 'setAlerts' },
  { pattern: /setIsHighContras, t/g, replacement: 'setIsHighContrast' },
  { pattern: /setPrefersReduce, d/g, replacement: 'setPrefersReduced' },
  { pattern: /setDat, a/g, replacement: 'setData' },
  { pattern: /setIsLoadin, g/g, replacement: 'setIsLoading' },
  { pattern: /setSelectedMetri, c/g, replacement: 'setSelectedMetric' },
  { pattern: /setInsight, s/g, replacement: 'setInsights' },
  
  // Fix corrupted variable names
  { pattern: /isOptimizingsetIsOptimizin, g/g, replacement: 'isOptimizing, setIsOptimizing' },
  { pattern: /isAnalyzingsetIsAnalyzin, g/g, replacement: 'isAnalyzing, setIsAnalyzing' },
  { pattern: /optimizationssetOptimization, s/g, replacement: 'optimizations, setOptimizations' },
  { pattern: /suggestionssetSuggestion, s/g, replacement: 'suggestions, setSuggestions' },
  { pattern: /isMonitoringsetIsMonitorin, g/g, replacement: 'isMonitoring, setIsMonitoring' },
  { pattern: /selectedSeveritysetSelectedSeverit, y/g, replacement: 'selectedSeverity, setSelectedSeverity' },
  { pattern: /alertssetAlert, s/g, replacement: 'alerts, setAlerts' },
  { pattern: /isHighContrastsetIsHighContras, t/g, replacement: 'isHighContrast, setIsHighContrast' },
  { pattern: /prefersReducedsetPrefersReduce, d/g, replacement: 'prefersReduced, setPrefersReduced' },
  { pattern: /datasetDat, a/g, replacement: 'data, setData' },
  { pattern: /isLoadingsetIsLoadin, g/g, replacement: 'isLoading, setIsLoading' },
  { pattern: /selectedMetricsetSelectedMetri, c/g, replacement: 'selectedMetric, setSelectedMetric' },
  { pattern: /insightssetInsight, s/g, replacement: 'insights, setInsights' },
  
  // Fix corrupted boolean values
  { pattern: /fals, , e/g, replacement: 'false' },
  { pattern: /tru, , e/g, replacement: 'true' },
  { pattern: /nul, l/g, replacement: 'null' },
  
  // Fix corrupted prop names
  { pattern: /enableSkipLinks = trueenableFocusManagement = trueenableScreenReaderSupport = trueenableHighContrastSupport = trueenableReducedMotionSupport = true/g, 
    replacement: 'enableSkipLinks = true,\n  enableFocusManagement = true,\n  enableScreenReaderSupport = true,\n  enableHighContrastSupport = true,\n  enableReducedMotionSupport = true' },
  { pattern: /timeRange = '30d'refreshInterval = 30000onDataUpdate/g, 
    replacement: 'timeRange = \'30d\',\n  refreshInterval = 30000,\n  onDataUpdate' },
  { pattern: /metricsonThreatDetectedonVulnerabilityFoundclassName = ''/g, 
    replacement: 'metrics,\n  onThreatDetected,\n  onVulnerabilityFound,\n  className = \'\'' },
  
  // Fix corrupted type annotations
  { pattern: /AccessibilityEnhancerProp, s/g, replacement: 'AccessibilityEnhancerProps' },
  { pattern: /AdvancedAnalyticsInsightsProp, s/g, replacement: 'AdvancedAnalyticsInsightsProps' },
  { pattern: /AnalyticsDat, a/g, replacement: 'AnalyticsData' },
  { pattern: /React\.F\.C/g, replacement: 'React.FC' },
  
  // Fix corrupted function parameters
  { pattern: /\(im, , , , , , g\)/g, replacement: '(img)' },
  { pattern: /\(inpu, , , , , , t\)/g, replacement: '(input)' },
  { pattern: /\(severity: strin, g\)/g, replacement: '(severity: string)' },
  
  // Fix corrupted dependency arrays
  { pattern: /\[enableFocusManagementenableHighContrastSuppor, t\]/g, replacement: '[enableFocusManagement, enableHighContrastSupport]' },
  { pattern: /\[enableReducedMotionSuppor, t\]/g, replacement: '[enableReducedMotionSupport]' },
  { pattern: /\[enableSkipLink, s\]/g, replacement: '[enableSkipLinks]' },
  
  // Fix corrupted arrow functions
  { pattern: /\(\) = >/g, replacement: '() =>' },
  
  // Fix corrupted object properties
  { pattern: /element: img as HTMLElementrule: 'img-alt'/g, replacement: 'element: img as HTMLElement, rule: \'img-alt\'' },
  { pattern: /element: input as HTMLElementrule: 'label'/g, replacement: 'element: input as HTMLElement, rule: \'label\'' },
  
  // Fix corrupted string concatenation
  { pattern: /`label\[for="\$\{i d\}"\]`/g, replacement: '`label[for="${id}"]`' },
  
  // Fix corrupted DOM manipulation
  { pattern: /document\.bod\.y\.insertBefor\.e\(skipLinkdocument\.bod\.y\.firstChi\.l, , , , , , d\)/g, 
    replacement: 'document.body.insertBefore(skipLink, document.body.firstChild)' },
  
  // Fix corrupted media queries
  { pattern: /'\(forced-colors: activ, , , , , , e\)'/g, replacement: '\'(forced-colors: active)\'' },
  { pattern: /'\(prefers-reduced-motion: reduc, , , , , , e\)'/g, replacement: '\'(prefers-reduced-motion: reduce)\'' },
  
  // Fix corrupted event handlers
  { pattern: /handleChang, , , , , , e/g, replacement: 'handleChange' },
  
  // Fix corrupted function calls
  { pattern: /enableFocusManagemen, t/g, replacement: 'enableFocusManagement' },
  { pattern: /enableHighContrastSuppor, t/g, replacement: 'enableHighContrastSupport' },
  { pattern: /enableReducedMotionSuppor, t/g, replacement: 'enableReducedMotionSupport' },
  { pattern: /enableSkipLink, s/g, replacement: 'enableSkipLinks' },
  { pattern: /mainConten, t/g, replacement: 'mainContent' },
  { pattern: /labe, l/g, replacement: 'label' },
  
  // Fix additional corrupted method calls
  { pattern: /querySelectorAl\(/g, replacement: 'querySelectorAll(' },
  { pattern: /forEac\(/g, replacement: 'forEach(' },
  { pattern: /tagNam\.e/g, replacement: 'tagName' },
  { pattern: /charA\(/g, replacement: 'charAt(' },
  { pattern: /pus\(/g, replacement: 'push(' },
  { pattern: /insertBefor\(/g, replacement: 'insertBefore(' },
  { pattern: /firstChild, d/g, replacement: 'firstChild' },
  { pattern: /Math\.floo\(/g, replacement: 'Math.floor(' },
  { pattern: /Math\.rando\.m\(\)/g, replacement: 'Math.random()' },
  { pattern: /reduc\(/g, replacement: 'reduce(' },
  
  // Fix corrupted selectors and strings
  { pattern: /'h1, h2h3h4h5h6'/g, replacement: "'h1, h2, h3, h4, h5, h6'" },
  { pattern: /'main-content''Skip to main content'/g, replacement: "'main-content', 'Skip to main content'" },
  
  // Fix corrupted variable names in expressions
  { pattern: /headin, g/g, replacement: 'heading' },
  { pattern: /previousLeve l/g, replacement: 'previousLevel' },
  { pattern: /leve l/g, replacement: 'level' },
  { pattern: /baseMultiplie, r/g, replacement: 'baseMultiplier' },
  { pattern: /newMetric, s/g, replacement: 'newMetrics' },
  { pattern: /vulnerabilitie\.s/g, replacement: 'vulnerabilities' },
  { pattern: /accvul, n/g, replacement: 'acc, vuln' },
  { pattern: /vuln\.severit\., y/g, replacement: 'vuln.severity' },
  
  // Fix corrupted object properties and values
  { pattern: /\+ , 1/g, replacement: ' + 1' },
  { pattern: /\|\| , 0/g, replacement: ' || 0' },
  { pattern: /0\.3\.5/g, replacement: '0.35' },
  { pattern: /avgSessionDuratio\.n/g, replacement: 'avgSessionDuration' },
  { pattern: /0\.1\.2/g, replacement: '0.12' },
  { pattern: /0\.0\.5/g, replacement: '0.05' },
  
  // Fix corrupted object syntax
  { pattern: /\}traffic: \{/g, replacement: '},\n      traffic: {' },
  { pattern: /percentage: 36 \}\{/g, replacement: 'percentage: 36 },\n          {' },
  { pattern: /percentage: 30 \}\{/g, replacement: 'percentage: 30 },\n          {' },
  { pattern: /percentage: 16 \}\{/g, replacement: 'percentage: 16 },\n          {' },
  { pattern: /percentage: 10 \}\{/g, replacement: 'percentage: 10 },\n          {' },
  { pattern: /percentage: 8 \}\{/g, replacement: 'percentage: 8 }' },
  { pattern: /\}\{/g, replacement: '},\n        {' },
  
  // Fix corrupted function parameters and return types
  { pattern: /\}\{} as Record<stringnumber>/g, replacement: '}, {} as Record<string, number>' },
  
  // Fix corrupted DOM references
  { pattern: /document\.bod\.y/g, replacement: 'document.body' },
  { pattern: /skipLinkdocument\.bod\.y\.firstChild/g, replacement: 'skipLink, document.body.firstChild' },
  { pattern: /skipLinkdocument\.body\.firstChild/g, replacement: 'skipLink, document.body.firstChild' },
  
  // Fix more corrupted function calls and parameters
  { pattern: /\.charAt\(, 1\)/g, replacement: '.charAt(1)' },
  { pattern: /\}\[enableSkipLinks\]/g, replacement: '}, [enableSkipLinks]' },
  
  // Fix corrupted object properties with missing commas
  { pattern: /Math\.floor\(1250 \* baseMultiplier\)uniqueUsers:/g, replacement: 'Math.floor(1250 * baseMultiplier),\n        uniqueUsers:' },
  { pattern: /Math\.floor\(890 \* baseMultiplier\)pageViews:/g, replacement: 'Math.floor(890 * baseMultiplier),\n        pageViews:' },
  { pattern: /Math\.floor\(3200 \* baseMultiplier\)bounceRate:/g, replacement: 'Math.floor(3200 * baseMultiplier),\n        bounceRate:' },
  { pattern: /\* 0\.1avgSessionDuration:/g, replacement: '* 0.1,\n        avgSessionDuration:' },
  { pattern: /\* 60conversionRate:/g, replacement: '* 60,\n        conversionRate:' },
  
  // Fix corrupted message template literals
  { pattern: /`Heading level skipped from h\$\{previousLevel\} to h\$\{level\}`element:/g, replacement: '`Heading level skipped from h${previousLevel} to h${level}`, element:' },
  { pattern: /element: heading as HTMLElementrule:/g, replacement: 'element: heading as HTMLElement, rule:' },
  
  // Fix corrupted closing braces and semicolons
  { pattern: /\/\/ 0-5%      \};/g, replacement: '// 0-5%\n      };' },
  
  // Fix corrupted Record type
  { pattern: /Record<stringnumber>/g, replacement: 'Record<string, number>' },
  
  // Fix corrupted date and formatting
  { pattern: /date: Dat, e/g, replacement: 'date: Date' },
  { pattern: /DateTimeForma\(/g, replacement: 'DateTimeFormat(' },
  { pattern: /DateTimeFormat\('en-US'\{/g, replacement: "DateTimeFormat('en-US', {" },
  { pattern: /\}\.forma\(dat, e\)/g, replacement: '}).format(date)' },
  
  // Fix more corrupted variables and function calls
  { pattern: /backgroundColo, r/g, replacement: 'backgroundColor' },
  { pattern: /element as HTMLElementrule: 'color- contrast'/g, replacement: "element: element as HTMLElement, rule: 'color-contrast'" },
  { pattern: /enableScreenReaderSuppor, t/g, replacement: 'enableScreenReaderSupport' },
  { pattern: /\}\[enableScreenReaderSuppor, t\]/g, replacement: '}, [enableScreenReaderSupport]' },
  
  // Fix corrupted object properties in arrays
  { pattern: /Math\.floor\(450 \* baseMultiplier\)percentage:/g, replacement: 'Math.floor(450 * baseMultiplier), percentage:' },
  { pattern: /Math\.floor\(380 \* baseMultiplier\)percentage:/g, replacement: 'Math.floor(380 * baseMultiplier), percentage:' },
  { pattern: /Math\.floor\(200 \* baseMultiplier\)percentage:/g, replacement: 'Math.floor(200 * baseMultiplier), percentage:' },
  { pattern: /Math\.floor\(120 \* baseMultiplier\)percentage:/g, replacement: 'Math.floor(120 * baseMultiplier), percentage:' },
  { pattern: /Math\.floor\(100 \* baseMultiplier\)percentage:/g, replacement: 'Math.floor(100 * baseMultiplier), percentage:' },
  
  // Fix corrupted function parameters and error handling
  { pattern: /optimizationSuggestion, s/g, replacement: 'optimizationSuggestions' },
  { pattern: /erro, r/g, replacement: 'error' },
  { pattern: /console\.erro\(/g, replacement: 'console.error(' },
  { pattern: /setIsAnalyzing\(fals, e\)/g, replacement: 'setIsAnalyzing(false)' },
  
  // Fix corrupted JSX comments and elements
  { pattern: /\{\/\* Header \*\/\}      <div/g, replacement: '{/* Header */}\n      <div' },
  
  // Fix more corrupted comments
  { pattern: /\/\/ This is a simplified check - in productionuse a proper/g, replacement: '// This is a simplified check - in production, use a proper' },
  
  // Fix duplicated element property
  { pattern: /element: element: element as HTMLElement/g, replacement: 'element: element as HTMLElement' },
  
  // Fix corrupted dependency arrays
  { pattern: /\}\[enableScreenReaderSupport\]/g, replacement: '}, [enableScreenReaderSupport]' },
  { pattern: /\}\[\]/g, replacement: '}, []' },
  
  // Fix corrupted array syntax
  { pattern: /\]devices: \[/g, replacement: '],\n        devices: [' },
  { pattern: /Math\.floor\(600 \* baseMultiplier\)percentage:/g, replacement: 'Math.floor(600 * baseMultiplier), percentage:' },
  { pattern: /Math\.floor\(500 \* baseMultiplier\)percentage:/g, replacement: 'Math.floor(500 * baseMultiplier), percentage:' },
  { pattern: /Math\.floor\(150 \* baseMultiplier\)percentage:/g, replacement: 'Math.floor(150 * baseMultiplier), percentage:' },
  
  // Fix more corrupted boolean values
  { pattern: /setIsOptimizing\(tru, e\)/g, replacement: 'setIsOptimizing(true)' },
  
  // Fix more corrupted method calls and variables
  { pattern: /elemen, t/g, replacement: 'element' },
  { pattern: /getAttribut\(/g, replacement: 'getAttribute(' },
  { pattern: /element as HTMLElementrule:/g, replacement: 'element: element as HTMLElement, rule:' },
  { pattern: /documentElemen\.t/g, replacement: 'documentElement' },
  { pattern: /classLis\.t/g, replacement: 'classList' },
  { pattern: /\.remov\(/g, replacement: '.remove(' },
  { pattern: /isHighContras, t/g, replacement: 'isHighContrast' },
  { pattern: /\}\[isHighContras, t\]/g, replacement: '}, [isHighContrast]' },
  
  // Fix more corrupted array syntax
  { pattern: /\]countries: \[/g, replacement: '],\n        countries: [' },
  { pattern: /Math\.floor\(400 \* baseMultiplier\)percentage:/g, replacement: 'Math.floor(400 * baseMultiplier), percentage:' },
  
  // Fix corrupted JSX props
  { pattern: /postisVisibleonReadMore/g, replacement: 'post,\n  isVisible,\n  onReadMore' },
  { pattern: /\}`\}    >      \{\/\* Image \*\/\}/g, replacement: '}`}\n    >\n      {/* Image */}' },
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Apply all fixes
    for (const fix of fixes) {
      const originalContent = content;
      content = content.replace(fix.pattern, fix.replacement);
      if (content !== originalContent) {
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

async function main() {
  // Find all TypeScript files in src/components
  const files = await glob('/workspace/src/components/*.tsx');
  let fixedCount = 0;

  console.log('Starting syntax error fixes...');
  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++;
    }
  }

  console.log(`\nFixed ${fixedCount} files out of ${files.length} total files.`);
}

main().catch(console.error);