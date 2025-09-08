
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import OptimizedImage from '../components/OptimizedImage';

describe('OptimizedImage', () => {
  test('renders without crashing', () => {
    render(<OptimizedImage />);
    expect(screen.getByTestId('optimizedimage')).toBeInTheDocument();

import _React from 'react';  import '@testing-library/jest-dom'; import OptimizedImagedynamic from '../components/OptimizedImage.dynamic'; describe('OptimizedImagedynamic',() => { test('renders without crashing',() => { render(<OptimizedImagedynamic />); expect(screen.getByTestId('optimizedimage.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<OptimizedImagedynamic />)}); test('handles user interactions',() => { render(<OptimizedImagedynamic />)}); test('applies correct styling',() => { render(<OptimizedImagedynamic />)})});












});




