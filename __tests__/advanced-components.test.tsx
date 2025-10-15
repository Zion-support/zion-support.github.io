import React from 'react';
import { render, screen } from '@testing-library/react';

// Mock advanced components
const AdvancedButton = ({ children, variant = 'primary', ...props }: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary'; 
  [key: string]: any;
}) => (
  <button 
    className={`px-4 py-2 rounded ${
      variant === 'primary' 
        ? 'bg-blue-600 text-white' 
        : 'bg-gray-200 text-gray-800'
    }`}
    {...props}
  >
    {children}
  </button>
);

const AdvancedCard = ({ title, children, ...props }: { 
  title: string; 
  children: React.ReactNode; 
  [key: string]: any;
}) => (
  <div className="bg-white shadow-lg rounded-lg p-6" {...props}>
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

describe('Advanced Components', () => {
  describe('AdvancedButton', () => {
    it('renders with primary variant by default', () => {
      render(<AdvancedButton>Click me</AdvancedButton>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-blue-600', 'text-white');
      expect(button).toHaveTextContent('Click me');
    });

    it('renders with secondary variant', () => {
      render(<AdvancedButton variant="secondary">Click me</AdvancedButton>);
      
      const button = screen.getByRole('button');
      expect(button).toHaveClass('bg-gray-200', 'text-gray-800');
    });
  });

  describe('AdvancedCard', () => {
    it('renders with title and content', () => {
      render(
        <AdvancedCard title="Test Card">
          <p>Card content</p>
        </AdvancedCard>
      );
      
      expect(screen.getByText('Test Card')).toBeInTheDocument();
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });
  });
});