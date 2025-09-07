import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
describe('App Smoke Tests', () => {
  it('should render without crashing', () => {
    expect(() => render(<App />)).not.toThrow();
  });
  it('should render the main app component', () => {'
    }
    const { container } = render(<App />);
<<<<<<< HEAD
    expect(container).toBeInTheDocument();
  });
});
=======
expect(container).toBeInTheDocument();
  });
});
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
