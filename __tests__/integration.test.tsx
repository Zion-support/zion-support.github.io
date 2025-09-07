
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../app/page';

describe('Integration Tests', () => {
  it('home page loads with all components', async () => {
    render(<HomePage />);
    
    // Wait for lazy-loaded components
    await waitFor(() => {
      expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
    });
    
    // Check for main content
    expect(screen.getByRole('main')).toBeInTheDocument();
    
    // Check for service sections
    expect(screen.getByText('AI Solutions')).toBeInTheDocument();
    expect(screen.getByText('Blockchain Technology')).toBeInTheDocument();
    expect(screen.getByText('Micro SaaS')).toBeInTheDocument();
  });

  it('service links work correctly', async () => {
    render(<HomePage />);
    
    // Test service links - there are multiple "Learn More" links
    const learnMoreLinks = screen.getAllByText('Learn More →');
    expect(learnMoreLinks).toHaveLength(3);
    
    const researchLink = screen.getByText('Explore Research');
    expect(researchLink).toBeInTheDocument();
  });

  it('responsive design works', () => {
    // Mock different screen sizes
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
    
    render(<HomePage />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
