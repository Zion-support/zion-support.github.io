#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class CriticalFileRegenerator {
  constructor() {
<<<<<<< HEAD
    this.projectRoot = process.cwd(),
    this.regeneratedFiles = []
=======
    this.projectRoot = process.cwd();
    this.regeneratedFiles = [];
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  regenerateMainFiles() {
    // Regenerate main.tsx
    const mainTsx = `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`;

    this.writeFile('src/main.tsx', mainTsx);

    // Regenerate App.tsx
    const appTsx = `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;`;

    this.writeFile('src/App.tsx', appTsx);

    // Regenerate basic LandingPage
    const landingPage = `import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Welcome to Our Platform
        </h1>
        <p className="text-center text-gray-600">
          This is a placeholder landing page.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;`;

    this.writeFile('src/pages/LandingPage.tsx', landingPage);
  }

  regenerateBasicComponents() {
    // Regenerate basic UI components
    const buttonTsx = `import React from 'react';

interface ButtonProps {
<<<<<<< HEAD
  children: React.ReactNode, onClick?: () => void,
=======
  children: React.ReactNode;
  onClick?: () => void;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  className = '', 
  type = 'button' 
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={\`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 \${className}\`}
    >
      {children}
    </button>
  );
};

export default Button;`;

    this.writeFile('src/components/ui/button.tsx', buttonTsx);

    // Regenerate basic layout components
    const headerTsx = `import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-bold text-gray-900">
          Platform Header
        </h1>
      </div>
    </header>
  );
};

export default Header;`;

    this.writeFile('src/components/layout/Header.tsx', headerTsx);

    const footerTsx = `import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <p className="text-center">
          © 2024 Platform. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;`;

    this.writeFile('src/components/layout/Footer.tsx', footerTsx);
  }

  regenerateBasicPages() {
    // Regenerate basic pages
    const pages = [
      'About.tsx',
      'Contact.tsx',
      'NotFound.tsx',
      'Dashboard.tsx',
      'Profile.tsx'
    ];

    pages.forEach(page => {
      const pageName = page.replace('.tsx', '');
      const content = `import React from 'react';

const ${pageName} = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          ${pageName}
        </h1>
        <p className="text-gray-600">
          This is a placeholder ${pageName.toLowerCase()} page.
        </p>
      </div>
    </div>
  );
};

export default ${pageName};`;

      this.writeFile(`src/pages/${page}`, content);
    });
  }

  regenerateBasicUtils() {
    // Regenerate basic utility files
    const authUtils = `export const isAuthenticated = () => {
  return localStorage.getItem('token') !== null;
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};`;

    this.writeFile('src/utils/authUtils.ts', authUtils);

    const apiErrorHandler = `export const handleApiError = (error: any) => {
  console.error('API Error:', error);
  return {
    message: error.message || 'An error occurred',
    status: error.status || 500
  };
};`;

    this.writeFile('src/utils/apiErrorHandler.ts', apiErrorHandler);
  }

  writeFile(filePath, content) {
    try {
      const fullPath = path.join(this.projectRoot, filePath);
      const dir = path.dirname(fullPath);
      
      // Create directory if it doesn't exist
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(fullPath, content);
      this.regeneratedFiles.push(filePath);
      this.log(`Regenerated: ${filePath}`, 'SUCCESS');
    } catch (error) {
      this.log(`Error regenerating ${filePath}: ${error.message}`, 'ERROR');
    }
  }

  async regenerateAll() {
    this.log('Starting critical file regeneration...', 'PROGRESS');
    
    this.regenerateMainFiles();
    this.regenerateBasicComponents();
    this.regenerateBasicPages();
    this.regenerateBasicUtils();
    
    this.log(`Regenerated ${this.regeneratedFiles.length} files`, 'SUCCESS');
  }
}

const regenerator = new CriticalFileRegenerator();
regenerator.regenerateAll().catch(console.error);