<<<<<<< HEAD
import React from 'react';
=======


import React from 'react';

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { render, screen } from '@testing-library/react';
import App from '../src/App';
describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
<<<<<<< HEAD
  });
it('has proper heading structure', () => {
    render(<App />);

  });
  it('has proper heading structure', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
ursor/fix-syntax-push-and-merge-to-main-40de
    const heading = screen.getByRole('heading', { level: '1' });
    expect(heading).toBeInTheDocument();
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  });
});
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
});
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
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
});
<<<<<<< HEAD
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

origin/main
});
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import { render, screen } from '@testing-library/react'
import App from '../src/App'
describe('App'
  it('renders without crashing'
    expect(screen.getByRole('main'
  it('has proper heading structure'
    const heading = screen.getByRole('heading', { level: '1'
    const heading = screen.getByRole('heading'
<<<<<<< HEAD
origin/automation-improvements-final
=======
>>>>>>> origin/automation-improvements-final
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
