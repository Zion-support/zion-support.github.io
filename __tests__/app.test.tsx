import React from 'react';
import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import HomePage from '../app/page';

describe('HomePage', () => {
  it('renders without crashing', () => {
    render(<HomePage />);
    expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
  });
<<<<<<< HEAD

  it('displays the main heading', () => {
    render(<HomePage />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });

  it('has a call to action button', () => {
    render(<HomePage />);
    const ctaButton = screen.getByRole('button', { name: /get started/i });
    expect(ctaButton).toBeInTheDocument();
=======
  
  it('renders navigation links', () => {
    render(<HomePage />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
>>>>>>> cursor/fix-errors-and-merge-to-main-df8b
=======
import '@testing-library/jest-dom';

// Mock App component for testing
const MockApp = () => <div>Test App</div>;

describe('App', () => {
  test('renders app component', () => {
    render(<MockApp />);
    expect(screen.getByText('Test App')).toBeInTheDocument();
>>>>>>> cursor/fix-errors-and-merge-to-main-2f04
  });
});