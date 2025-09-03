<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('has proper heading structure', () => {
    render(<App />);
=======
});
'
import { render, screen }   from '@testing-library/react''
import App   from '../src/App''
  describe('App', () => {'
  it('renders without crashing', () => {';
    render(<App  />);
    expect(screen.getByRole('main')).toBeInTheDocument();';
})
  it('has proper heading structure', () => {'
    render(<App  />)
>>>>>>> cursor/automate-test-fix-improve-and-merge-code-1c7d
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});