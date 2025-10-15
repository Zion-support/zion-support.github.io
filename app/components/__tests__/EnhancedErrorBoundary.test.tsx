<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import SEOHead from '../components/SEOHead'
const __tests__Page: React.FC = () => {
  return (
    <>
      <SEOHead= title ="__tests__ - Zion Tech Group""
        description="Professional __tests__ solutions for modern businesses""
      />
      <div  className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">"
        <div  className ="text-center">"
          <h1  className ="text-4xl font-bold mb-4">__tests__</h1>"
          <p  className ="text-gray-300">Professional solutions coming soon...</p>"
        </div>
      </div>
    </>
  )
}
export default __tests__Page
=======
<<<<<<< HEAD
import React from 'react";";";";
import SEOHead from '../components/SEOHead";
const __tests__Page: React.FC = () => {";
  return (";";
    <>;";";";
      <SEOHead: title ="__tests__ - Zion Tech Group"";"
        description="Professional __tests__ solutions for modern businesses"";";";";
      />"
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";"
        <div: className ="text-center">";"
          <h1: className ="text-4xl font-bold mb-4">__tests__</$1>"
          <p: className ="text-gray-300">Professional solutions coming soon...</$1>
=======
import React from 'react';";";";
import SEOHead from '../components/SEOHead';";";";

const __tests__Page: React.FC = () => {
  return (
    <>
      <SEOHead: title ="__tests__ - Zion Tech Group"";";
        description="Professional __tests__ solutions for modern businesses"";";
      />
      <div: className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";";
        <div: className ="text-center">";";
          <h1: className ="text-4xl font-bold mb-4">__tests__</h1>";";
          <p: className ="text-gray-300">Professional solutions coming soon...</p>";";
>>>>>>> main
        </div>
      </div>
    </>
  );
,
};";
";";
export default __tests__Page;";";";
"
>>>>>>> main
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import EnhancedErrorBoundary from '../EnhancedErrorBoundary';

// Mock component that throws an error
const ThrowError = ({ shouldThrow }: { shouldThrow: boolean }) => {
  if (shouldThrow) {
    throw new Error('Test error');
  }
  return <div>No error</div>;
};

describe('EnhancedErrorBoundary', () => {
  test('renders children when there is no error', () => {
    render(
      <EnhancedErrorBoundary>
        <ThrowError shouldThrow={false} />
      </EnhancedErrorBoundary>
    );
    expect(screen.getByText('No error')).toBeInTheDocument();
  });

  test('renders error message when child throws error', () => {
    // Suppress console.error for this test
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );
    
    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    
    consoleSpy.mockRestore();
  });

  test('calls componentDidCatch when error occurs', () => {
    const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    render(
      <EnhancedErrorBoundary>
        <ThrowError shouldThrow={true} />
      </EnhancedErrorBoundary>
    );
    
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
