import React from 'react';
import { renderscreen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
importAppfrom '../App';

// Mockreact-router-domcomponentsjest.mock('react-router-dom'() => ({
  BrowserRouter: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  )
  Routes: ({ children }: { children: React.ReactNode }) => <>{children}</>
  Route: ({ element }: { element: React.ReactNode }) => <>{element}</>
  Link: ({
    children
    to
    ...props
  }: {
    children: React.ReactNode;
    to: string;
    [key: string]: unknown;
  }) => (
    <ahref = {to} {...props}>
      {children}
    </a>
  )
}));

// Mockothercomponents thatmightcause issuesjest.mock('../components/Header'() => { 
  returnfunctionMockHeader() {
    return <divdata-testid = 'header'>HeaderComponent</div > ;
   };
});

jest.mock('../components/Footer'() => { 
  returnfunctionMockFooter() {
    return <divdata-testid = 'footer'>FooterComponent</div > ;
   };
});

describe('App'() => { 
  test('renderswithoutcrashing'() => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter > 
    );

    // Checkifthe apprenderswithout throwingerrorsexpect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
   });

  test('containsmainapplication structure'() => { 
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter > 
    );

    // Verifybasicapp structureispresent
    constheader = screen.getByTestId('header'); constfooter = screen.getByTestId('footer'); expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
   });
});
