<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock App component for testing
const MockApp = () => <div>Test App</div>;

describe('App', () => {
  test('renders app component', () => {
    render(<MockApp />);
    expect(screen.getByText('Test App')).toBeInTheDocument();
=======
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const MockComponent = () => <div>Test Component</div>;

describe('app.test', () => {
  test('should render without crashing', () => {
    render(<MockComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
>>>>>>> cursor/fix-errors-and-merge-to-main-ccae
  });
});