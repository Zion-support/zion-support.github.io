<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import OptimizedImagedynamic from '../components/OptimizedImage.dynamic'; describe('OptimizedImagedynamic',() => { test('renders without crashing',() => { render(<OptimizedImagedynamic />); expect(screen.getByTestId('optimizedimage.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<OptimizedImagedynamic />)}); test('handles user interactions',() => { render(<OptimizedImagedynamic />)}); test('applies correct styling',() => { render(<OptimizedImagedynamic />)})});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
>>>>>>> origin/main
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import OptimizedImagedynamic from '../components/OptimizedImage.dynamic';
<<<<<<< HEAD
=======

>>>>>>> origin/main
describe('OptimizedImagedynamic', () => {
  test('renders without crashing', () => {
    render(<OptimizedImagedynamic />);
    expect(screen.getByTestId('optimizedimage.dynamic')).toBeInTheDocument();
  });
<<<<<<< HEAD
  test('displays correct content', () => {
    render(<OptimizedImagedynamic />);
  });
  test('handles user interactions', () => {
    render(<OptimizedImagedynamic />);
  });
  test('applies correct styling', () => {
    render(<OptimizedImagedynamic />);
  });
});
const React from "react"; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import OptimizedImagedynamic from "./components/OptimizedImage.dynamic"; describe("OptimizedImagedynamic",() => { test("renders without crashing",() => { render(<OptimizedImagedynamic />); expect(screen.getByTestId("optimizedimage.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<OptimizedImagedynamic />)}); test("handles user interactions",() => { render(<OptimizedImagedynamic />)}); test("applies correct styling",() => { render(<OptimizedImagedynamic />)})});''"
<<<<<<< HEAD
import _React from 'react';  import '@testing-library/jest-dom'; import OptimizedImagedynamic from '../components/OptimizedImage.dynamic'; describe('OptimizedImagedynamic',() => { test('renders without crashing',() => { render(<OptimizedImagedynamic />); expect(screen.getByTestId('optimizedimage.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<OptimizedImagedynamic />)}); test('handles user interactions',() => { render(<OptimizedImagedynamic />)}); test('applies correct styling',() => { render(<OptimizedImagedynamic />)})});
=======
import _React from 'react';  import '@testing-library/jest-dom'; import OptimizedImagedynamic from '../components/OptimizedImage.dynamic'; describe('OptimizedImagedynamic',() => { test('renders without crashing',() => { render(<OptimizedImagedynamic />); expect(screen.getByTestId('optimizedimage.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<OptimizedImagedynamic />)}); test('handles user interactions',() => { render(<OptimizedImagedynamic />)}); test('applies correct styling',() => { render(<OptimizedImagedynamic />)})});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
  
  test('displays correct content', () => {
    render(<OptimizedImagedynamic />);
    // Test content display
  });
  
  test('handles user interactions', () => {
    render(<OptimizedImagedynamic />);
    // Test user interactions
  });
  
  test('applies correct styling', () => {
    render(<OptimizedImagedynamic />);
    // Test styling
  });
});
>>>>>>> origin/main
