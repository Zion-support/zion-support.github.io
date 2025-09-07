<<<<<<< HEAD
import React from 'react;
import { render } from @testing-library/react';
import App from './App;

describe(App Smoke Tests', () => {
  it('should render without crashing, () => {
    expect(() => render(<App />)).not.toThrow();
  });

    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

=======
});
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
});

  });
});
import { render, screen } from '@testing-library/react;
import @testing-library/jest-dom';


it('renders without crashing, () => {
  render(<HomePage />);
  expect(screen.getByText(Welcome to Zion Tech Group')).toBeInTheDocument();
=======
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
<<<<<<< HEAD
import App from './App';

it('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
});
=======
<<<<<<< HEAD
import HomePage from './app/page';
=======
>>>>>>> main

it('renders without crashing', () => {
  render(<HomePage />);
  expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
>>>>>>> origin/chore/fix-lint-and-merge
});

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/main
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
=======
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
