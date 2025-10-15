<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock component for testing
const MockComponent = () => <div>Test Component</div>;

describe('Components', () => {
  test('renders component', () => {
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const MockComponent = () => <div>Test Component</div>;

describe('components.test', () => {
  test('should render without crashing', () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae
    render(<MockComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });
});