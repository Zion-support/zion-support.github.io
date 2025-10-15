import fs from 'fs';
import path from 'path';

// Function to extract all undefined variables from a file
function extractUndefinedVars(content) {
  const undefinedVars = new Set();
  
  // Common React/Next.js imports that are often missing
  const commonImports = {
    'React': 'react',
    'Helmet': 'react-helmet-async',
    'Link': 'react-router-dom',
    'useState': 'react',
    'useEffect': 'react',
    'useCallback': 'react',
    'useMemo': 'react',
    'useRef': 'react',
    'useContext': 'react',
    'createContext': 'react',
    'Suspense': 'react',
    'lazy': 'react',
    'Fragment': 'react',
    'Component': 'react',
    'PureComponent': 'react',
    'memo': 'react',
    'forwardRef': 'react',
    'createElement': 'react',
    'cloneElement': 'react',
    'isValidElement': 'react',
    'Children': 'react',
    'useReducer': 'react',
    'useLayoutEffect': 'react',
    'useImperativeHandle': 'react',
    'useDebugValue': 'react',
    'StrictMode': 'react',
    'Profiler': 'react',
    'unstable_batchedUpdates': 'react-dom',
    'render': 'react-dom',
    'hydrate': 'react-dom',
    'unmountComponentAtNode': 'react-dom',
    'createPortal': 'react-dom',
    'findDOMNode': 'react-dom',
    'flushSync': 'react-dom',
    'createRoot': 'react-dom/client',
    'hydrateRoot': 'react-dom/client',
    'BrowserRouter': 'react-router-dom',
    'HashRouter': 'react-router-dom',
    'MemoryRouter': 'react-router-dom',
    'Router': 'react-router-dom',
    'Route': 'react-router-dom',
    'Routes': 'react-router-dom',
    'Switch': 'react-router-dom',
    'Redirect': 'react-router-dom',
    'NavLink': 'react-router-dom',
    'useNavigate': 'react-router-dom',
    'useLocation': 'react-router-dom',
    'useParams': 'react-router-dom',
    'useSearchParams': 'react-router-dom',
    'useHistory': 'react-router-dom',
    'useRouteMatch': 'react-router-dom',
    'withRouter': 'react-router-dom',
    'matchPath': 'react-router-dom',
    'generatePath': 'react-router-dom',
    'resolvePath': 'react-router-dom',
    'useResolvedPath': 'react-router-dom',
    'useMatch': 'react-router-dom',
    'useNavigationType': 'react-router-dom',
    'useOutlet': 'react-router-dom',
    'useOutletContext': 'react-router-dom',
    'useBlocker': 'react-router-dom',
    'usePrompt': 'react-router-dom',
    'useBeforeUnload': 'react-router-dom',
    'useFetcher': 'react-router-dom',
    'useFetchers': 'react-router-dom',
    'useLoaderData': 'react-router-dom',
    'useActionData': 'react-router-dom',
    'useRevalidator': 'react-router-dom',
    'useRouteLoaderData': 'react-router-dom',
    'useMatches': 'react-router-dom',
    'useFormAction': 'react-router-dom',
    'useSubmit': 'react-router-dom',
    'useTransition': 'react-router-dom',
    'useId': 'react-router-dom',
    'useDeferredValue': 'react-router-dom',
    'useSyncExternalStore': 'react-router-dom',
    'useInsertionEffect': 'react-router-dom',
    'useOptimistic': 'react-router-dom',
    'use': 'react-router-dom',
    'startTransition': 'react-router-dom',
    'useDeferredValue': 'react-router-dom',
    'useSyncExternalStore': 'react-router-dom',
    'useInsertionEffect': 'react-router-dom',
    'useOptimistic': 'react-router-dom',
    'use': 'react-router-dom',
    'startTransition': 'react-router-dom'
  };
  
  // Extract undefined variables from JSX
  const jsxPattern = /<(\w+)(?:\s[^>]*)?>/g;
  let match;
  while ((match = jsxPattern.exec(content)) !== null) {
    const varName = match[1];
    if (varName[0] === varName[0].toUpperCase() && varName.length > 1) {
      undefinedVars.add(varName);
    }
  }
  
  // Extract undefined variables from regular code
  const codePattern = /\b([A-Z][a-zA-Z0-9]*)\b/g;
  while ((match = codePattern.exec(content)) !== null) {
    const varName = match[1];
    if (commonImports[varName]) {
      undefinedVars.add(varName);
    }
  }
  
  return Array.from(undefinedVars);
}

// Function to fix missing imports in a file
function fixMissingImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Extract undefined variables
    const undefinedVars = extractUndefinedVars(content);
    
    if (undefinedVars.length === 0) {
      return false;
    }
    
    // Group imports by source
    const importsBySource = {};
    const commonImports = {
      'React': 'react',
      'Helmet': 'react-helmet-async',
      'Link': 'react-router-dom',
      'useState': 'react',
      'useEffect': 'react',
      'useCallback': 'react',
      'useMemo': 'react',
      'useRef': 'react',
      'useContext': 'react',
      'createContext': 'react',
      'Suspense': 'react',
      'lazy': 'react',
      'Fragment': 'react',
      'Component': 'react',
      'PureComponent': 'react',
      'memo': 'react',
      'forwardRef': 'react',
      'createElement': 'react',
      'cloneElement': 'react',
      'isValidElement': 'react',
      'Children': 'react',
      'useReducer': 'react',
      'useLayoutEffect': 'react',
      'useImperativeHandle': 'react',
      'useDebugValue': 'react',
      'StrictMode': 'react',
      'Profiler': 'react',
      'BrowserRouter': 'react-router-dom',
      'HashRouter': 'react-router-dom',
      'MemoryRouter': 'react-router-dom',
      'Router': 'react-router-dom',
      'Route': 'react-router-dom',
      'Routes': 'react-router-dom',
      'Switch': 'react-router-dom',
      'Redirect': 'react-router-dom',
      'NavLink': 'react-router-dom',
      'useNavigate': 'react-router-dom',
      'useLocation': 'react-router-dom',
      'useParams': 'react-router-dom',
      'useSearchParams': 'react-router-dom',
      'useHistory': 'react-router-dom',
      'useRouteMatch': 'react-router-dom',
      'withRouter': 'react-router-dom',
      'matchPath': 'react-router-dom',
      'generatePath': 'react-router-dom',
      'resolvePath': 'react-router-dom',
      'useResolvedPath': 'react-router-dom',
      'useMatch': 'react-router-dom',
      'useNavigationType': 'react-router-dom',
      'useOutlet': 'react-router-dom',
      'useOutletContext': 'react-router-dom',
      'useBlocker': 'react-router-dom',
      'usePrompt': 'react-router-dom',
      'useBeforeUnload': 'react-router-dom',
      'useFetcher': 'react-router-dom',
      'useFetchers': 'react-router-dom',
      'useLoaderData': 'react-router-dom',
      'useActionData': 'react-router-dom',
      'useRevalidator': 'react-router-dom',
      'useRouteLoaderData': 'react-router-dom',
      'useMatches': 'react-router-dom',
      'useFormAction': 'react-router-dom',
      'useSubmit': 'react-router-dom',
      'useTransition': 'react-router-dom',
      'useId': 'react-router-dom',
      'useDeferredValue': 'react-router-dom',
      'useSyncExternalStore': 'react-router-dom',
      'useInsertionEffect': 'react-router-dom',
      'useOptimistic': 'react-router-dom',
      'use': 'react-router-dom',
      'startTransition': 'react-router-dom'
    };
    
    // Group by source
    for (const varName of undefinedVars) {
      if (commonImports[varName]) {
        const source = commonImports[varName];
        if (!importsBySource[source]) {
          importsBySource[source] = [];
        }
        importsBySource[source].push(varName);
      }
    }
    
    // Add lucide-react imports for icons
    const lucideIcons = [];
    for (const varName of undefinedVars) {
      if (!commonImports[varName] && varName[0] === varName[0].toUpperCase()) {
        lucideIcons.push(varName);
      }
    }
    
    if (lucideIcons.length > 0) {
      importsBySource['lucide-react'] = lucideIcons;
    }
    
    // Generate import statements
    const importStatements = [];
    for (const [source, vars] of Object.entries(importsBySource)) {
      if (vars.length > 0) {
        const uniqueVars = [...new Set(vars)];
        importStatements.push(`import { ${uniqueVars.join(', ')} } from '${source}';`);
      }
    }
    
    if (importStatements.length === 0) {
      return false;
    }
    
    // Find the last import statement
    const lines = content.split('\n');
    let lastImportIndex = -1;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('import ')) {
        lastImportIndex = i;
      }
    }
    
    // Insert new imports
    if (lastImportIndex !== -1) {
      lines.splice(lastImportIndex + 1, 0, ...importStatements);
    } else {
      lines.unshift(...importStatements);
    }
    
    content = lines.join('\n');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed imports in: ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively process all files
function fixAllFiles(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += fixAllFiles(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixMissingImports(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

// Main execution
console.log('Starting to fix all missing imports...');
const fixedCount = fixAllFiles('./app');
console.log(`Fixed imports in ${fixedCount} files.`);