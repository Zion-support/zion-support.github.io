ursor/automate-test-improve-and-merge-code-646c;
import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import PageTransition from '../components/PageTransition';
describe("PageTransition", () => {test("renders without crashing", () => {render(<PageTransition />)expect(screen.getByTestId('page-transition')).toBeInTheDocument()})})import React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />)expect(screen.getByRole('main')).toBeInTheDocument()})test('displays correct content',() => { render(<PageTransition />)expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})})})})})})ursor/automate-test-improve-and-merge-code-646c;
  });
});
<<<<<<< HEAD
<<<<<<< HEAD
  });
});
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
import _React from 'react'; import { render,screen } from '@testing-library/react'; import '@testing-library/jest-dom'; import PageTransition from '../components/PageTransition'; describe('PageTransition',() => { test('renders without crashing',() => { render(<PageTransition />); expect(screen.getByRole('main')).toBeInTheDocument()}); test('displays correct content',() => { render(<PageTransition />); expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument()})});
