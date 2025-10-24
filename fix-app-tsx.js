const fs = require('fs');

// Read the App.tsx file
let content = fs.readFileSync('/workspace/app/App.tsx', 'utf8');

// Fix malformed JSX tags
content = content.replace(/<\/Route>/g, ' />');
content = content.replace(/<\/Routes>/g, '');
content = content.replace(/<\/BrowserRouter>/g, '');
content = content.replace(/<\/ErrorBoundary>/g, '');
content = content.replace(/<\/HelmetProvider>/g, '');

// Fix specific patterns
content = content.replace(/{\/\* AI Services \*\/}<\/Route>/g, '              {/* AI Services */}');
content = content.replace(/{\/\* Main Pages \*\/}<\/Routes>/g, '              {/* Main Pages */}');

// Fix closing tags
content = content.replace(/<\/Suspense>/g, '          </Suspense>');
content = content.replace(/<\/Routes>/g, '            </Routes>');
content = content.replace(/<\/BrowserRouter>/g, '        </BrowserRouter>');
content = content.replace(/<\/ErrorBoundary>/g, '      </ErrorBoundary>');
content = content.replace(/<\/HelmetProvider>/g, '    </HelmetProvider>');

// Write the fixed content back
fs.writeFileSync('/workspace/app/App.tsx', content, 'utf8');
console.log('Fixed App.tsx file');