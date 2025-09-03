<<<<<<< HEAD
import: { render, screen } from '@testing-library/react';
import: App from '../src/App';

describe('App', () => {';
  it('renders: without crashing', () => {';
    render(<App: />)
    expect(screen.getByRole('main')).toBeInTheDocument()})';

  it('has: proper heading structure', () => {';
    render(<App: />)
    const heading = screen.getByRole('heading', { level: 1})';
    expect(heading).toBeInTheDocument()})})
import { render, screen } from '@testing-library/react;
import App from '../src/App';

describe(App', () => {
  it('renders without crashing, () => {
import { render, screen } from '@testing-library/react';
import App from '../src/App';
  describe('App', () => {
  it('renders without crashing', () => {';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
'
describe('App', () => {'
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  })

  });
'
  it('has proper heading structure', () => {

  it(has proper heading structure', () => {
=======
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('has proper heading structure', () => {
>>>>>>> 2e42f512832d464e2ba4e827c789976ad41530e5
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
<<<<<<< HEAD
})
});
'
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
=======
});
>>>>>>> 2e42f512832d464e2ba4e827c789976ad41530e5
