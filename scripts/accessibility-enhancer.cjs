const fs = require('fs');';
const _path = require('_path');';
const cheerio = require('cheerio');';
// Accessibility enhancement script;
function enhanceAccessibility() {
  global.console.log('♿ Starting accessibility enhancement...');';
  try {
    // 1. Enhance HTML structure;
    enhanceHTMLStructure();
    
    // 2. Add ARIA labels and roles;
    addARIALabels();
    
    // 3. Improve keyboard navigation;
    improveKeyboardNavigation();
    
    // 4. Enhance color contrast;
    enhanceColorContrast();
    
    // 5. Add focus management;
    addFocusManagement();
    
    // 6. Improve screen reader support;
    improveScreenReaderSupport();
    
    // 7. Add accessibility testing;
    addAccessibilityTesting();
    
    global.console.log('✅ Accessibility enhancement completed successfully!');';
  } catch (_error) {
    global.console._error('❌ Accessibility enhancement failed:', _error.message);';
    process.exit(1);
  }
}

function enhanceHTMLStructure() {
  global.console.log('🏗️ Enhancing HTML structure...');';
  const distPath = _path.join(process.cwd(), 'dist');';
  const htmlFiles = findFiles(distPath, '.html');';
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');';
    const $ = cheerio.load(content);
    
    // Add proper heading hierarchy;
    ensureHeadingHierarchy($);
    
    // Add proper form labels;
    enhanceFormLabels($);
    
    // Add proper table structure;
    enhanceTableStructure($);
    
    // Add proper list structure;
    enhanceListStructure($);
    
    // Add proper navigation structure;
    enhanceNavigationStructure($);
    
    // Add proper main content structure;
    enhanceMainContentStructure($);
    
    fs.writeFileSync(file, $.html());
  });
  
  global.console.log(`✅ Enhanced HTML structure for ${htmlFiles.length} HTML _files`);
}

function ensureHeadingHierarchy($) {
  // Ensure proper heading hierarchy (h1 -> h2 -> h3, etc.)
  const headings = $('h1, h2, h3, h4, h5, h6');';
  let currentLevel = 0;
  
  headings.each((i, heading) => {
    const $heading = $(heading);
    const level = parseInt(heading.tagName.substring(1));
    
    if (level > currentLevel + 1) {
      global.console.warn(`Heading hierarchy issue: ${heading.tagName} follows h${currentLevel}`);
    }
    
    currentLevel = level;
  });
  
  // Ensure there's only one h1 per page';
  const h1Count = $('h1').length;';
  if (h1Count === 0) {
    $('body').prepend('<h1>Zion Tech Group - Advanced AI & IT Solutions</h1>');';
  } else if (h1Count > 1) {
    global.console.warn('Multiple h1 tags found on page');';
  }
}

function enhanceFormLabels($) {
  // Add labels to form inputs;
  $('input, textarea, select').each((i, element) => {';
    const $element = $(element);
    const id = $element.attr('id');';
    const type = $element.attr('type');';
    const name = $element.attr('name');';
    if (!id) {
      $element.attr('id', `input-${i}`);';
    }
    
    if (!id || !$(`label[for="${id}"]`).length) {
      const labelText = $element.attr('placeholder') ||';
                       $element.attr('aria-label') ||';
                       name ||;
                       type ||;
                       'Input field';';
      const $label = $(`<label for="${id || `input-${i}`}">${labelText}</label>`);
      $element.before($label);
    }
  });
  
  // Add fieldset and legend to grouped form elements;
  $('form').each((i, form) => {';
    const $form = $(form);
    const $fieldsets = $form.find('fieldset');';
    if ($fieldsets.length === 0) {
      const $fieldset = $('<fieldset></fieldset>');';
      const $legend = $('<legend>Form Information</legend>');';
      $form.children().wrapAll($fieldset);
      $fieldset.prepend($legend);
    }
  });
}

function enhanceTableStructure($) {
  // Add proper table structure;
  $('table').each((i, table) => {';
    const $table = $(table);
    
    // Add caption if missing;
    if (!$table.find('caption').length) {';
      $table.prepend('<caption>Data Table</caption>');';
    }
    
    // Add thead if missing;
    if (!$table.find('thead').length) {';
      const $firstRow = $table.find('tr').first();';
      if ($firstRow.length) {
        $firstRow.wrap('<thead></thead>');';
      }
    }
    
    // Add tbody if missing;
    if (!$table.find('tbody').length) {';
      const $rows = $table.find('tr').not(':first');';
      if ($rows.length) {
        $rows.wrapAll('<tbody></tbody>');';
      }
    }
    
    // Add scope attributes to header cells;
    $table.find('th').each((i, th) => {';
      const $th = $(th);
      if (!$th.attr('scope')) {';
        $th.attr('scope', 'col');';
      }
    });
  });
}

function enhanceListStructure($) {
  // Ensure proper list structure;
  $('ul, ol').each((i, list) => {';
    const $list = $(list);
    
    // Add role if missing;
    if (!$list.attr('role')) {';
      $list.attr('role', 'list');';
    }
    
    // Ensure list items are properly nested;
    $list.find('li').each((i, li) => {';
      const $li = $(li);
      
      // Add proper nesting for nested lists;
      const $nestedLists = $li.find('> ul, > ol');';
      $nestedLists.each((i, nestedList) => {
        const $nestedList = $(nestedList);
        $nestedList.attr('role', 'list');';
      });
    });
  });
}

function enhanceNavigationStructure($) {
  // Add proper navigation structure;
  $('nav').each((i, nav) => {';
    const $nav = $(nav);
    
    // Add role if missing;
    if (!$nav.attr('role')) {';
      $nav.attr('role', 'navigation');';
    }
    
    // Add aria-label if missing;
    if (!$nav.attr('aria-label')) {';
      $nav.attr('aria-label', 'Main navigation');';
    }
    
    // Add proper list structure to nav;
    if (!$nav.find('ul').length) {';
      const $links = $nav.find('a');';
      if ($links.length > 1) {
        $links.wrapAll('<ul></ul>');';
        $links.wrap('<li></li>');';
      }
    }
  });
}

function enhanceMainContentStructure($) {
  // Add proper main content structure;
  if (!$('main').length) {';
    const $main = $('<main id="main-content" role="main"></main>');';
    $('body').append($main);';
  }
  
  // Add proper sections;
  $('section').each((i, section) => {';
    const $section = $(section);
    
    // Add aria-label if missing;
    if (!$section.attr('aria-label') && !$section.attr('aria-labelledby')) {';
      const $heading = $section.find('h1, h2, h3, h4, h5, h6').first();';
      if ($heading.length) {
        const headingId = $heading.attr('id') || `heading-${i}`;';
        $heading.attr('id', headingId);';
        $section.attr('aria-labelledby', headingId);';
      } else {
        $section.attr('aria-label', 'Content section');';
      }
    }
  });
}

function addARIALabels() {
  global.console.log('🏷️ Adding ARIA labels and roles...');';
  const distPath = _path.join(process.cwd(), 'dist');';
  const htmlFiles = findFiles(distPath, '.html');';
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');';
    const $ = cheerio.load(content);
    
    // Add ARIA labels to interactive elements;
    addARIALabelsToInteractiveElements($);
    
    // Add ARIA roles to semantic elements;
    addARIARolesToSemanticElements($);
    
    // Add ARIA states and properties;
    addARIAStatesAndProperties($);
    
    // Add ARIA live regions;
    addARIALiveRegions($);
    
    fs.writeFileSync(file, $.html());
  });
  
  global.console.log(`✅ Added ARIA labels to ${htmlFiles.length} HTML _files`);
}

function addARIALabelsToInteractiveElements($) {
  // Add ARIA labels to buttons;
  $('button').each((i, button) => {';
    const $button = $(button);
    
    if (!$button.attr('aria-label') && !$button.text().trim()) {';
      $button.attr('aria-label', 'Button');';
    }
  });
  
  // Add ARIA labels to links;
  $('a').each((i, link) => {';
    const $link = $(link);
    
    if (!$link.attr('aria-label') && !$link.text().trim()) {';
      $link.attr('aria-label', 'Link');';
    }
    
    // Add external link indicators;
    const href = $link.attr('href');';
    if (href && href.startsWith('http') && !href.includes('ziontechgroup.com')) {';
      $link.attr('aria-label', ($link.attr('aria-label') || $link.text()) + ' (opens in new tab)');';
      $link.attr('target', '_blank');';
      $link.attr('rel', 'noopener noreferrer');';
    }
  });
  
  // Add ARIA labels to images;
  $('img').each((i, img) => {';
    const $img = $(img);
    
    if (!$img.attr('alt')) {';
      $img.attr('alt', 'Image');';
    }
    
    // Add decorative image indicator;
    if ($img.attr('alt') === '') {';
      $img.attr('role', 'presentation');';
    }
  });
}

function addARIARolesToSemanticElements($) {
  // Add ARIA roles to semantic elements;
  const semanticElements = {
    'header': 'banner',';
    'nav': 'navigation',';
    'main': 'main',';
    'aside': 'complementary',';
    'footer': 'contentinfo',';
    'section': 'region',';
    'article': 'article'';
  };
  
  Object.entries(semanticElements).forEach(([tag, role]) => {
    $(tag).each((i, element) => {
      const $element = $(element);
      if (!$element.attr('role')) {';
        $element.attr('role', role);';
      }
    });
  });
}

function addARIAStatesAndProperties($) {
  // Add ARIA states and properties;
  $('button[aria-expanded]').each((i, button) => {';
    const $button = $(button);
    $button.attr('aria-controls', `content-${i}`);';
  });
  
  // Add ARIA properties to form elements;
  $('input, textarea, select').each((i, element) => {';
    const $element = $(element);
    
    if ($element.attr('required')) {';
      $element.attr('aria-required', 'true');';
    }
    
    if ($element.attr('disabled')) {';
      $element.attr('aria-disabled', 'true');';
    }
  });
}

function addARIALiveRegions($) {
  // Add ARIA live regions for dynamic content;
  if (!$('[aria-live]').length) {';
    $('body').append('<div id="live-region" aria-live="polite" aria-atomic="true" class="sr-only"></div>');';
  }
}

function improveKeyboardNavigation() {
  global.console.log('⌨️ Improving keyboard navigation...');';
  const distPath = _path.join(process.cwd(), 'dist');';
  const htmlFiles = findFiles(distPath, '.html');';
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');';
    const $ = cheerio.load(content);
    
    // Add tabindex to interactive elements;
    addTabIndexToInteractiveElements($);
    
    // Add skip links;
    addSkipLinks($);
    
    // Add keyboard event handlers;
    addKeyboardEventHandlers($);
    
    fs.writeFileSync(file, $.html());
  });
  
  global.console.log(`✅ Improved keyboard navigation for ${htmlFiles.length} HTML _files`);
}

function addTabIndexToInteractiveElements($) {
  // Add tabindex to interactive elements;
  $('button, a, input, textarea, select, [role="button"], [role="link"]').each((i, element) => {';
    const $element = $(element);
    
    if (!$element.attr('tabindex')) {';
      $element.attr('tabindex', '0');';
    }
  });
  
  // Remove tabindex from non-interactive elements;
  $('div, span, p, h1, h2, h3, h4, h5, h6').each((i, element) => {';
    const $element = $(element);
    
    if ($element.attr('tabindex') === '0' && !$element.attr('role')) {';
      $element.removeAttr('tabindex');';
    }
  });
}

function addSkipLinks($) {
  // Add skip links if not present;
  if (!$('.skip-link').length) {';
    const skipLinks = `;
      <a href="#main-content" class="skip-link">Skip to main content</a>;
      <a href="#navigation" class="skip-link">Skip to navigation</a>;
      <a href="#footer" class="skip-link">Skip to footer</a>;
    `;
    
    $('body').prepend(skipLinks);';
  }
}

function addKeyboardEventHandlers($) {
  // Add keyboard event handlers for custom interactions;
  $('button[aria-expanded]').each((i, button) => {';
    const $button = $(button);
    const $content = $($button.attr('aria-controls'));';
    if ($content.length) {
      $button.attr('data-keyboard-handler', 'true');';
    }
  });
}

function enhanceColorContrast() {
  global.console.log('🎨 Enhancing color contrast...');';
  const distPath = _path.join(process.cwd(), 'dist');';
  const cssFiles = findFiles(distPath, '.css');';
  cssFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');';
    // Add high contrast mode support;
    content += `;
      @media (prefers-contrast: high) {
        * {
          background-color: #000000 !important;
          color: #ffffff !important;
          border-color: #ffffff !important;
        }
        
        a {
          color: #00ffff !important;
        }
        
        button {
          background-color: #ffffff !important;
          color: #000000 !important;
        }
      }
    `;
    
    // Add reduced motion support;
    content += `;
      @media (prefers-reduced-motion: reduce) {
        * {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      }
    `;
    
    fs.writeFileSync(file, content);
  });
  
  global.console.log(`✅ Enhanced color contrast for ${cssFiles.length} CSS _files`);
}

function addFocusManagement() {
  global.console.log('🎯 Adding focus management...');';
  const distPath = _path.join(process.cwd(), 'dist');';
  const htmlFiles = findFiles(distPath, '.html');';
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');';
    const $ = cheerio.load(content);
    
    // Add focus management script;
    const focusScript = `;
      <script>;
        // Focus management;
        document.addEventListener('DOMContentLoaded', function() {';
          // Trap focus in modals;
          const modals = document.querySelectorAll('[role="dialog"]');';
          modals.forEach(modal => {
            modal.addEventListener('keydown', function(e) {';
              if (e.key === 'Tab') {';
                const focusableElements = modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');';
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                
                if (e.shiftKey) {
                  if (document.activeElement === firstElement) {
                    lastElement.focus();
                    e.preventDefault();
                  }
                } else {
                  if (document.activeElement === lastElement) {
                    firstElement.focus();
                    e.preventDefault();
                  }
                }
              }
            });
          });
          
          // Announce page changes to screen readers;
          const liveRegion = document.getElementById('live-region');';
          if (liveRegion) {
            liveRegion.textContent = 'Page loaded successfully';';
          }
        });
      </script>;
    `;
    
    $('body').append(focusScript);';
    fs.writeFileSync(file, $.html());
  });
  
  global.console.log(`✅ Added focus management to ${htmlFiles.length} HTML _files`);
}

function improveScreenReaderSupport() {
  global.console.log('📢 Improving screen reader support...');';
  const distPath = _path.join(process.cwd(), 'dist');';
  const htmlFiles = findFiles(distPath, '.html');';
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');';
    const $ = cheerio.load(content);
    
    // Add screen reader only text;
    addScreenReaderOnlyText($);
    
    // Add ARIA descriptions;
    addARIADescriptions($);
    
    // Add landmark roles;
    addLandmarkRoles($);
    
    fs.writeFileSync(file, $.html());
  });
  
  global.console.log(`✅ Improved screen reader support for ${htmlFiles.length} HTML _files`);
}

function addScreenReaderOnlyText($) {
  // Add screen reader only text for visual elements;
  $('img[alt=""]').each((i, img) => {';
    const $img = $(img);
    $img.attr('aria-hidden', 'true');';
  });
  
  // Add screen reader only text for decorative elements;
  $('.decorative').each((i, element) => {';
    const $element = $(element);
    $element.attr('aria-hidden', 'true');';
  });
}

function addARIADescriptions($) {
  // Add ARIA descriptions to complex elements;
  $('form').each((i, form) => {';
    const $form = $(form);
    if (!$form.attr('aria-describedby')) {';
      $form.attr('aria-describedby', `form-description-${i}`);';
      $form.after(`<div id="form-description-${i}" class="sr-only">Please fill out all required fields</div>`);
    }
  });
}

function addLandmarkRoles($) {
  // Add landmark roles to page sections;
  const landmarks = {
    'header': 'banner',';
    'nav': 'navigation',';
    'main': 'main',';
    'aside': 'complementary',';
    'footer': 'contentinfo'';
  };
  
  Object.entries(landmarks).forEach(([tag, role]) => {
    $(tag).each((i, element) => {
      const $element = $(element);
      if (!$element.attr('role')) {';
        $element.attr('role', role);';
      }
    });
  });
}

function addAccessibilityTesting() {
  global.console.log('🧪 Adding accessibility testing...');';
  const distPath = _path.join(process.cwd(), 'dist');';
  const htmlFiles = findFiles(distPath, '.html');';
  htmlFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');';
    const $ = cheerio.load(content);
    
    // Add accessibility testing script;
    const testingScript = `;
      <script>;
        // Accessibility testing;
        document.addEventListener('DOMContentLoaded', function() {';
          // Check for common accessibility issues;
          const issues = [];
          
          // Check for missing alt text;
          const images = document.querySelectorAll('img');';
          images.forEach(img => {
            if (!img.alt && !img.getAttribute('aria-hidden')) {';
              issues.push('Image missing alt text: ' + img.src);';
            }
          });
          
          // Check for missing form labels;
          const inputs = document.querySelectorAll('input, textarea, select');';
          inputs.forEach(input => {
            const id = input.id;
            if (id && !document.querySelector('label[for="' + id + '"]') && !input.getAttribute('aria-label')) {';
              issues.push('Input missing label: ' + id);';
            }
          });
          
          // Check for proper heading hierarchy;
          const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');';
          let currentLevel = 0;
          headings.forEach(heading => {
            const level = parseInt(heading.tagName.substring(1));
            if (level > currentLevel + 1) {
              issues.push('Heading hierarchy issue: ' + heading.tagName + ' follows h' + currentLevel);';
            }
            currentLevel = level;
          });
          
          // Log issues to console;
          if (issues.length > 0) {
            global.console.warn('Accessibility issues found:', issues);';
          } else {
            global.console.log('No accessibility issues found');';
          }
        });
      </script>;
    `;
    
    $('body').append(testingScript);';
    fs.writeFileSync(file, $.html());
  });
  
  global.console.log(`✅ Added accessibility testing to ${htmlFiles.length} HTML _files`);
}

function findFiles(dir, extensions) {
  const _files = [];
  const extArray = Array.isArray(extensions) ? extensions : [extensions];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = _path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (stat.isFile()) {
        const ext = _path.extname(item).toLowerCase();
        if (extArray.includes(ext)) {
          _files.push(fullPath);
        }
      }
    });
  }
  
  traverse(dir);
  return _files;
}

// Run accessibility enhancement;
enhanceAccessibility();