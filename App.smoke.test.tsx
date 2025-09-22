<<<<<<< HEAD
import { describe, it, expect } from '@jest/globals';

describe('App.smoke', () => {
  it('should work', () => {
    expect(true).toBe(true);
  });
});

import React from 'react';
import { render } from '@testing-library/react';
=======
import { render, screen } from '@testing-library/react';
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
import App from './App';

describe('App Smoke Tests', () => {
  it('should render without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });

  it('should render the main app component', () => {
    const { container } = render(<App />);
<<<<<<< HEAD
    expect(container.firstChild).toBeTruthy();
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
=======
    expect(container).toBeInTheDocument();
  });
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b

  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
  });
<<<<<<< HEAD

  it('has basic structure', () => {
    render(<App />);
    // Check for basic app structure
    expect(document.body).toBeInTheDocument();
  });
it('should render a basic structure', () => {
    const { container } = render(<App />);
    expect(container.firstChild).toBeTruthy();
  });
});
  });
});
    expect(container.firstChild).toBeTruthy();
  });
});
});
});

  });
});
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it('renders without crashing', () => {
  render(<App />);
  expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
});

=======
});
>>>>>>> 7cd58b621fee49f0fe97a63b4efdbd8adf2c8d7b
