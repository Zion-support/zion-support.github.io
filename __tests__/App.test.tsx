import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../src/App';

describe('App', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'Zion Tech Group' })).toBeInTheDocument();
  });
<<<<<<< HEAD
  it('has proper heading structure', () => {
    render(<App />);
<<<<<<< HEAD
=======
<<<<<<< HEAD
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
=======
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
    const heading = screen.getByRole('heading', { level: '1' });
    expect(heading).toBeInTheDocument();
  });
});
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> cursor/add-new-services-and-deploy-updates-0462
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-40de
=======
});
>>>>>>> origin/main
