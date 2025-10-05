import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};
<<<<<<< HEAD
=======
import Header from '../../components/Header';
>>>>>>> cursor/fix-errors-and-merge-to-main-4daf
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0290

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