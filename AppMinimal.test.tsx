import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AppMinimal from './AppMinimal';
import React from 'react';
describe('AppMinimal', () => {
  it('renders without crashing', () => {
    render(<AppMinimal />);
    expect(screen.getByRole('main')).toBeInTheDocument();
<<<<<<< HEAD

  });
  it('displays correct content', () => {
    render(<AppMinimal />);
    expect(screen.getByText('Zion Tech Group - Minimal App')).toBeInTheDocument();
  });

  it('handles user interactions', () => {
    render(<AppMinimal />);
  });
<<<<<<< HEAD
import { render, screen, describe, it, expect } from 'lucide-react'; import AppMinimal from './AppMinimal'; describe('AppMinimal',() => { it('renders without crashing',() => { render(<AppMinimal />); expect(screen.getByRole('main')).toBeInTheDocument()}
}); it('displays correct content',() => { render(<AppMinimal />)}
}); it('handles user interactions',() => { render(<AppMinimal />)})}
});'
</AppMinimal>'
});
});
=======
});
>>>>>>> ede6a6c5e68aff29c3e98caf43b1ead111d5b92e
