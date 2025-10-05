import React from 'react';
import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};
=======
import '@testing-library/jest-dom';

// Mock Header component for testing
const Header = () => <div data-testid="header">Header Component</div>;
>>>>>>> 0c4a2002f1455a31be6ebb4d4edd54c74c65ff9d
=======
import Header from '../../components/Header';
>>>>>>> cursor/fix-errors-and-merge-to-main-ca9d

describe('Header', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    renderWithRouter(<Header />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});