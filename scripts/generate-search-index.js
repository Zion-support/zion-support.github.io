#!/usr/bin/env node

/**
 * Generate Search Index
 * Creates a search index for the website content
 */

const _fs = require('fs');
const _path = require('path');

const _PAGES_DIR = path.join(__dirname, '..', 'pages');
const _OUTPUT_DIR = path.join(__dirname, '..', 'public', 'search');

// Content types to index
const _CONTENT_TYPES = {_'pages': {
    path: PAGES_DIR, _extensions: ['.tsx', _'.ts', _'.jsx', _'.js'], _exclude: ['_app', _'_document', _'api']},
  'blog': {_path: path.join(PAGES_DIR, _'blog'), _extensions: ['.tsx', _'.ts', _'.jsx', _'.js'], _exclude: []}
};

function extractTextFromJSX(_content) {_// Simple text extraction from JSX/TSX content
  return content
    .replace(/<[^>]*>/g, _' ') // Remove HTML/JSX tags
    .replace(/import.*?from.*?['"`][^'"`]*['"`];?/g, _'') // Remove imports
    .replace(/export.*?function.*?{/g, _'') // Remove function declarations
    .replace(_/[{}()]/g, ' ') // Remove brackets
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}

function generateSearchIndex() {_const _searchIndex = {
    pages: [], _blog: [], _generated: new Date().toISOString()};

  // Process each content type
  Object.entries(CONTENT_TYPES).forEach(_([type, _config]) => {_if (!fs.existsSync(config.path)) return;

    const _files = fs.readdirSync(config.path, _{ recursive: true});
    
    files.forEach(file => {_if (typeof file === 'string') {
        const _filePath = path.join(config.path, _file);
        const _stats = fs.statSync(filePath);
        
        if (stats.isFile()) {
          const _ext = path.extname(file);
          if (config.extensions.includes(ext)) {
            const _fileName = path.basename(file, _ext);
            
            // Skip excluded files
            if (config.exclude.some(excluded => fileName.startsWith(excluded))) {
              return;}

            try {_const _content = fs.readFileSync(filePath, _'utf8');
              const _text = extractTextFromJSX(content);
              
              const _entry = {
                id: `${type}-${_fileName}`,
                title: fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
                content: text.substring(0, 500), // Limit content length
                url: `/${_type === 'pages' ? '' : type + '/'}${_fileName}`,
                type: type,
                lastModified: stats.mtime.toISOString()
              };

              searchIndex[type].push(entry);
            } catch (error) {}
          }
        }
      }
    });
  });

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {_fs.mkdirSync(OUTPUT_DIR, _{ recursive: true});
  }

  // Write search index
  const _indexPath = path.join(OUTPUT_DIR, 'index.json');
  fs.writeFileSync(indexPath, JSON.stringify(searchIndex, null, 2));
  
  
  
}

if (require.main === module) {_generateSearchIndex();}

module.exports = {_generateSearchIndex};