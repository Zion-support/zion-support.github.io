const fs = require('fs');
const path = require('path');

// Function to fix comprehensive JSX syntax issues
function fixJSXSyntax(content) {
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/section>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </section>`;
    }
    return match;
  });
  
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/div>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </div>`;
    }
    return match;
  });
  
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/React\.Fragment>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </React.Fragment>`;
    }
    return match;
  });
  
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/AccessibilityEnhancer>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </AccessibilityEnhancer>`;
    }
    return match;
  });
  
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/main>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </main>`;
    }
    return match;
  });
  
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </section>\n${indent}      </div>`;
    }
    return match;
  });
  
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/React\.Fragment>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </section>\n${indent}      </div>\n${indent}    </React.Fragment>`;
    }
    return match;
  });
  
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/AccessibilityEnhancer>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </section>\n${indent}      </div>\n${indent}    </AccessibilityEnhancer>`;
    }
    return match;
  });
  
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/main>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </section>\n${indent}      </div>\n${indent}    </main>`;
    }
    return match;
  });
  
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </section>\n${indent}      </div>\n${indent}    </div>`;
    }
    return match;
  });
  
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/section>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </section>\n${indent}      </div>\n${indent}    </section>`;
    }
    return match;
  });
  
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>\s*<\/React\.Fragment>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </section>\n${indent}      </div>\n${indent}    </div>\n${indent}  </React.Fragment>`;
    }
    return match;
  });
  
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>\s*<\/AccessibilityEnhancer>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </section>\n${indent}      </div>\n${indent}    </div>\n${indent}  </AccessibilityEnhancer>`;
    }
    return match;
  });
  
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>\s*<\/main>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </section>\n${indent}      </div>\n${indent}    </div>\n${indent}  </main>`;
    }
    return match;
  });
  
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>\s*<\/section>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </section>\n${indent}      </div>\n${indent}    </div>\n${indent}  </section>`;
    }
    return match;
  });
  
  // Fix the most common pattern: missing closing </a> tags
  content = content.replace(/(\s*)([^<]*?)\s*<\/div>\s*<\/div>\s*<\/section>\s*<\/div>\s*<\/div>\s*<\/div>/g, (match, indent, text) => {
    // Check if this looks like it should be a closing </a> tag
    if (text.trim() && !text.includes('<') && !text.includes('>')) {
      return `${indent}${text.trim()}\n${indent}              </a>\n${indent}            </div>\n${indent}          </div>\n${indent}        </section>\n${indent}      </div>\n${indent}    </div>\n${indent}  </div>`;
    }
    return match;
  });
  
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