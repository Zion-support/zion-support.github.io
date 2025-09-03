import { render, screen } from '@testing-library/react;
import { describe, it, expect } from 'vitest';
<<<<<<< HEAD
import AICodeGenerator from './AICodeGenerator';
describe('AICodeGenerator', () => {
'
=======
import AICodeGenerator from ./AICodeGenerator';
describe('AICodeGenerator, () => {

>>>>>>> main
  it('renders without crashing', () => {

    render(<AICodeGenerator />);
    expect(screen.getByRole(main')).toBeInTheDocument();
  });
  it('displays correct content, () => {

    render(<AICodeGenerator />);
    // Add specific content checks based on component functionality
  });
  it('handles user interactions', () => {

    render(<AICodeGenerator />);
    // Add interaction tests based on component functionality
  });
});