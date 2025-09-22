<<<<<<< HEAD
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageTransition from "../components/PageTransition";
describe("PageTransition", () => {
  test("renders without crashing", () => {
    render(<PageTransition />);
    expect(screen.getByTestId("page-transition")).toBeInTheDocument();
  });
});
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
  });
});  });
});
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});

import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
});
});
});
  });
});
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});

});
});

  });

import React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});

=======
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageTransition from '../components/PageTransition';

describe('PageTransition', () => {
  test('renders without crashing', () => {
    render(<PageTransition />);
    expect(screen.getByTestId('pagetransition')).toBeInTheDocument();
  });
  
  test('displays correct content', () => {
    render(<PageTransition />);
  });
  
  test('handles user interactions', () => {
    render(<PageTransition />);
  });
  
  test('applies correct styling', () => {
    render(<PageTransition />);
  });
});
<<<<<<< HEAD
=======
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
>>>>>>> origin/merge-pr-12271
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
