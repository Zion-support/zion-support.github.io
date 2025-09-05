<<<<<<< HEAD
import React from 'react'; import { render,screen,fireEvent } from '@testing-library/react'; import '@testing-library/jest-dom'; import Navigationdynamic from '../components/Navigation.dynamic'; describe('Navigationdynamic',() => { test('renders without crashing',() => { render(<Navigationdynamic />); expect(screen.getByTestId('navigation.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigationdynamic />)}); test('handles user interactions',() => { render(<Navigationdynamic />)}); test('applies correct styling',() => { render(<Navigationdynamic />)})});
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navigationdynamic from '../components/Navigation.dynamic';

describe('Navigationdynamic', () => {
  test('renders without crashing', () => {
    render(<Navigationdynamic />);
    expect(screen.getByTestId('navigation.dynamic')).toBeInTheDocument()});

  test('displays correct content', () => {
    render(<Navigationdynamic />);
    // Add specific content tests based on component
  });

  test('handles user interactions', () => {
    render(<Navigationdynamic />);
    // Add interaction tests based on component functionality
  });

  test('applies correct styling', () => {
    render(<Navigationdynamic />);
    // Add styling tests if needed
  })});
=======
import _React from 'react';  import '@testing-library/jest-dom'; import Navigationdynamic from '../components/Navigation.dynamic'; describe('Navigationdynamic',() => { test('renders without crashing',() => { render(<Navigationdynamic />); expect(screen.getByTestId('navigation.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Navigationdynamic />)}); test('handles user interactions',() => { render(<Navigationdynamic />)}); test('applies correct styling',() => { render(<Navigationdynamic />)})});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-b01e
