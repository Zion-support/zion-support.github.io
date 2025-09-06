<<<<<<< HEAD
<<<<<<< HEAD


import React from 'react';

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import React from 'react';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { render, screen } from '@testing-library/react';
import App from '../src/App';
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
<<<<<<< HEAD
<<<<<<< HEAD
=======
  });
it('has proper heading structure', () => {
    render(<App />);

=======
  });
  it('has proper heading structure', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
    const heading = screen.getByRole('heading', { level: '1' });
    expect(heading).toBeInTheDocument();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  });
<<<<<<< HEAD


=======
=======
});
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';
describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'Zion Tech Group' })).toBeInTheDocument();
  });
});
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
});
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});

    render(<App />);
    expect(
      screen.getByRole("heading", { level: 1, name: "Zion Tech Group" }),
    ).toBeInTheDocument();
  });
});

=======
origin/main
});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { render, screen } from '@testing-library/react'
import App from '../src/App'
describe('App'
  it('renders without crashing'
    expect(screen.getByRole('main'
  it('has proper heading structure'
    const heading = screen.getByRole('heading', { level: '1'
<<<<<<< HEAD
const heading = screen.getByRole('heading'

=======
    const heading = screen.getByRole('heading'
origin/automation-improvements-final
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
