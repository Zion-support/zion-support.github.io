<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');



// Create a simple error boundary
const errorBoundary = `import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-4">Please refresh the page to try again.</p>
            <button 
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;`;

fs.writeFileSync('src/components/ErrorBoundary.tsx', errorBoundary);


// Create a loading component
const loadingComponent = `import React from 'react';

const LoadingSpinner = ({ text = 'Loading...' }) => (
  <div className="flex items-center justify-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    <span className="ml-2 text-gray-600">{text}</span>
  </div>
);

export default LoadingSpinner;`;

fs.writeFileSync('src/components/LoadingSpinner.tsx', loadingComponent);


=======
<<<<<<< HEAD
#!/usr/bin/env node/usr/bin/env nodeconst fs = require("fs");"const path = require("path");"console.log(" Creating quick improvements.");/ Create a simple error boundary"const errorBoundary = `import React from "react";class ErrorBoundary extends React.Component { constructor(props) { super(props); this.state = { hasError: false }; } static getDerivedStateFromError(error) { return { hasError: true }; } componentDidCatch(error, errorInfo) {" console.error("Error caught by boundary:", error, errorInfo); } render() { if (this.state.hasError) { return ( <div className="min-h-screen flex items-center justify-center">" <div className="text-center">" <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>" <p className="text-gray-600 mb-4">Please refresh the page to try again.</p> <button onClick={() => window.location.reload()}" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" > Refresh Page </button> </div> </div> ); } return this.props.children; }}`module.exports = default ErrorBoundary;`;"fs.writeFileSync("src/components/ErrorBoundary.tsx", errorBoundary);"console.log(" Error Boundary created");/ Create a loading component"`const loadingComponent = `import React from "react";"const LoadingSpinner = ({ text = "Loading." }) => (" <div className="flex items-center justify-center p-4">" <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>" <span className="ml-2 text-gray-600">{text}</span> </div>);`module.exports = default LoadingSpinner;`;"fs.writeFileSync("src/components/LoadingSpinner.tsx", loadingComponent);"console.log(" Loading Spinner created");"console.log(" Quick improvements completed!");""`"`
=======
#!/usr/bin/env node;
const fs = require('fs')
const path = require('path')
console.log(' Creating quick improvements...')
const errorBoundary = `import React from 'react'
    console.error('Error caught by boundary:')
fs.writeFileSync('src/components/LoadingSpinner.tsx')
// console.log(' Loading Spinner created')
console.log('� Quick improvements completed!')
>>>>>>> main
>>>>>>> main
