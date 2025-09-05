<<<<<<< HEAD
import React from 'react';''
import '@testing-library/jest-dom';'
// Mock component for testing;
const AICodeGeneratorTest = () => (')
  <div data-testid="aicodegenerator-test">"
</div>
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock component for testing
const AICodeGeneratorTest = () => (
  <div data-testid="aicodegenerator-test">
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
    <h1>AI Code Generator Test</h1>
  </div>
);

describe('AICodeGenerator', () => {
  it('renders without crashing', () => {
    render(<AICodeGeneratorTest />);
    expect(screen.getByTestId('aicodegenerator-test')).toBeInTheDocument();
  });
});