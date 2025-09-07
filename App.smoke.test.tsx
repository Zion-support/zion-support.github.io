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
    expect(container).toBeInTheDocument();
  });
<<<<<<< HEAD
});
=======
  });
});
>>>>>>> 64929ba0aca90db53d3fc12fa49c90c7c2110f3c
=======
    expect(container.firstChild).toBeTruthy();
  });
<<<<<<< HEAD
});
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
});
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
});
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
});

  });
});
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
<<<<<<< HEAD
import HomePage from './app/page';
=======
>>>>>>> main

it('renders without crashing', () => {
  render(<HomePage />);
  expect(screen.getByText('Welcome to Zion Tech Group')).toBeInTheDocument();
});

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
>>>>>>> origin/main
=======
});
>>>>>>> origin/main
