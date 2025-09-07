<<<<<<< HEAD
=======

>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
<<<<<<< HEAD
import SEO from '../components/SEO.dynamic';
describe("SEO", () => {test("renders without crashing", () => {render(<SEO />)expect(screen.getByTestId('seo')).toBeInTheDocument()})})import React from 'react';  import '@testing-library/jest-dom'; import SEO from '../components/SEO.dynamic'; describe('SEO',() => { test('renders without crashing',() => { render(<SEO />)expect(screen.getByTestId('seo')).toBeInTheDocument()})test('displays correct content',() => { render(<SEO />)})test('handles user interactions',() => { render(<SEO />)})test('applies correct styling',() => { render(<SEO />)})})import { render, screen, fireEvent  } from '@testing-library/react';
describe('SEO', () => {test('renders without crashing', () => {render(<SEO />)expect(screen.getByTestId('seo')).toBeInTheDocument()})test('displays correct content', () => {render(<SEO />)// Add specific content tests based on component;
  })test('handles user interactions', () => {render(<SEO />)// Add interaction tests based on component functionality;
  })test('applies correct styling', () => {render(<SEO />)// Add styling tests if needed;
  })})
=======
import SEOdynamic from '../components/SEO.dynamic';

describe('SEOdynamic', () => {
  test('renders without crashing', () => {
    render(<SEOdynamic />);
    expect(screen.getByTestId('seo.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<SEOdynamic />);
    // Add specific content tests based on component
  });

  test('handles user interactions', () => {
    render(<SEOdynamic />);
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {
    render(<SEOdynamic />);
    // Add styling tests if needed
  });
});
>>>>>>> aab6cad50d24864653d33f46d023039adfa50215
