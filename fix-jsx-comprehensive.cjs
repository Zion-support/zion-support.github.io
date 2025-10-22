const fs = require('fs');
const path = require('path');

// Function to fix comprehensive JSX syntax issues
function fixJSXSyntax(content) {
  // Fix malformed JSX with extra closing tags - more comprehensive patterns
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>/g, '\n              </a>\n            </div>\n          </div>\n        </section>');
  
  // Fix malformed JSX with extra closing tags in different patterns
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>/g, '\n              </a>\n            </div>\n          </div>\n        </div>');
  
  // Fix malformed JSX with extra closing tags in different patterns
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/React\.Fragment>/g, '\n              </a>\n            </div>\n          </div>\n        </React.Fragment>');
  
  // Fix malformed JSX with extra closing tags in different patterns
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/AccessibilityEnhancer>/g, '\n              </a>\n            </div>\n          </div>\n        </AccessibilityEnhancer>');
  
  // Fix malformed JSX with extra closing tags in different patterns
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/main>/g, '\n              </a>\n            </div>\n          </div>\n        </main>');
  
  // Fix malformed JSX with extra closing tags in different patterns
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/React\.Fragment>/g, '\n              </a>\n            </div>\n          </div>\n        </div>\n      </React.Fragment>');
  
  // Fix malformed JSX with extra closing tags in different patterns
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/AccessibilityEnhancer>/g, '\n              </a>\n            </div>\n          </div>\n        </div>\n      </AccessibilityEnhancer>');
  
  // Fix malformed JSX with extra closing tags in different patterns
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/main>/g, '\n              </a>\n            </div>\n          </div>\n        </div>\n      </main>');
  
  // Fix malformed JSX with extra closing tags in different patterns
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/g, '\n              </a>\n            </div>\n          </div>\n        </div>\n      </section>');
  
  // Fix malformed JSX with extra closing tags in different patterns
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/g, '\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>');
  
  // Fix specific patterns that are common
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g, '\n              </a>\n            </div>\n          </div>\n        </section>\n      </div>\n    </React.Fragment>');
  
  // Fix specific patterns that are common
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/AccessibilityEnhancer>/g, '\n              </a>\n            </div>\n          </div>\n        </section>\n      </div>\n    </AccessibilityEnhancer>');
  
  // Fix specific patterns that are common
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/main>/g, '\n              </a>\n            </div>\n          </div>\n        </section>\n      </div>\n    </main>');
  
  // Fix specific patterns that are common
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>/g, '\n              </a>\n            </div>\n          </div>\n        </section>\n      </div>\n    </div>');
  
  // Fix specific patterns that are common
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/section>/g, '\n              </a>\n            </div>\n          </div>\n        </section>\n      </div>\n    </section>');
  
  // Fix specific patterns that are common
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>\s*<\/React\.Fragment>/g, '\n              </a>\n            </div>\n          </div>\n        </section>\n      </div>\n    </div>\n  </React.Fragment>');
  
  // Fix specific patterns that are common
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>\s*<\/AccessibilityEnhancer>/g, '\n              </a>\n            </div>\n          </div>\n        </section>\n      </div>\n    </div>\n  </AccessibilityEnhancer>');
  
  // Fix specific patterns that are common
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>\s*<\/main>/g, '\n              </a>\n            </div>\n          </div>\n        </section>\n      </div>\n    </div>\n  </main>');
  
  // Fix specific patterns that are common
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>\s*<\/section>/g, '\n              </a>\n            </div>\n          </div>\n        </section>\n      </div>\n    </div>\n  </section>');
  
  // Fix specific patterns that are common
  content = content.replace(/\s*<\/a>\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>\s*<\/div>/g, '\n              </a>\n            </div>\n          </div>\n        </section>\n      </div>\n    </div>\n  </div>');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixJSXSyntax(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);