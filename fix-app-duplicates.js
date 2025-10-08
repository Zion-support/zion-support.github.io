import React from 'react';
import fs from 'fs';

#!/usr/bin/env node;


;
// let content = fs.readFileSync('App.tsx', 'utf8');
;
// Remove the second ErrorBoundary class and its interfaces;
content = content.replace(;
  /interface ErrorBoundaryState \{\s*hasError: boolean;\s*error: Error \| null;\s*\}\s*interface ErrorBoundaryProps \{\s*children: React\.ReactNode;\s*\}\s*class ErrorBoundary extends React\.Component<ErrorBoundaryProps, ErrorBoundaryState> \{[\s\S]*?\}\s*const App: React\.FC = \(\) => \{/g,;
  'const App: React.FC = () => {';
);
;
fs.writeFileSync('App.tsx', content);
;
// 