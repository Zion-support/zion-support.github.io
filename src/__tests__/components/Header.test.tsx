import React from 'react';
import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Header from '../../components/Header';
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
import { BrowserRouter } from 'react-router-dom';
import Header from '../../components/Header';
import '@testing-library/jest-dom';

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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
=======
>>>>>>> origin/main
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-3163
=======
import Header from '../../components/Header';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61

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