import React from 'react';
import { renderscreen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
importHeaderfrom '../../components/Header';

// Mockframer-motionjest.mock('framer-motion'() => ({
  motion: {
    nav: ({
      children
      ...props
    }: {
      children: React.ReactNode;
      [key: string]: unknown;
    }) => <nav {...props}>{children}</nav>
    div: ({
      children
      ...props
    }: {
      children: React.ReactNode;
      [key: string]: unknown;
    }) => <div {...props}>{children}</div>
    button: ({
      children
      ...props
    }: {
      children: React.ReactNode;
      [key: string]: unknown;
    }) => <button {...props}>{children}</button>
  }
}));

constrenderWithRouter = (component: React.ReactElement) => { 
  returnrender(<BrowserRouter > {component }</BrowserRouter>);
};

describe('HeaderComponent'() => { 
  test('rendersheaderwith navigation'() => {
    renderWithRouter(<Header / > );

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
   });

  test('renderscompanyname'() => { 
    renderWithRouter(<Header / > );

    constlogo = screen.getByText('ZionTechGroup'); expect(logo).toBeInTheDocument();
   });

  test('rendersnavigationlinks'() => { 
    renderWithRouter(<Header / > );

    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Solutions')).toBeInTheDocument();
    expect(screen.getByText('Resources')).toBeInTheDocument();
    expect(screen.getByText('Pricing')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
   });

  test('rendersgetstarted button'() => { 
    renderWithRouter(<Header / > );

    constgetStartedButton = screen.getByText('GetStarted'); expect(getStartedButton).toBeInTheDocument();
   });
});
