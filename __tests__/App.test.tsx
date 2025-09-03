<<<<<<< HEAD
import: { render, screen } from '@testing-library/react';';
import: App from '../src/App';';

describe('App', () => {';
  it('renders: without crashing', () => {';
    render(<App: />)
    expect(screen.getByRole('main')).toBeInTheDocument()})';

  it('has: proper heading structure', () => {';
    render(<App: />)
    const heading = screen.getByRole('heading', { level: 1, })';
    expect(heading).toBeInTheDocument()})})
=======
<<<<<<< HEAD
import { render, screen } from '@testing-library/react;
import App from '../src/App';

describe(App', () => {
  it('renders without crashing, () => {
=======
<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import App from '../src/App';
  describe('App', () => {
  it('renders without crashing', () => {';
=======
<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import App from '../src/App';
'
describe('App', () => {'
  it('renders without crashing', () => {
>>>>>>> main
>>>>>>> main
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
<<<<<<< HEAD
  })

=======
  });
<<<<<<< HEAD
'
>>>>>>> main
  it('has proper heading structure', () => {
=======

  it(has proper heading structure', () => {
>>>>>>> main
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
<<<<<<< HEAD
})
=======
});
<<<<<<< HEAD
'
=======
=======
import { render, screen }   from '@testing-library/react''
import App   from '../src/App''
  describe('App', () => {'
  it('renders without crashing', () => {'
    render(<App  />)
    expect(screen.getByRole('main')).toBeInTheDocument();'
  })
  it('has proper heading structure', () => {'
    render(<App  />)
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument()
  })
})
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
