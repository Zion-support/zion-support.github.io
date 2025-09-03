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
  });
});
'
  it('has proper heading structure', () => {

  it(has proper heading structure', () => {
import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('has proper heading structure', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
});
=======
import { render, screen } from '@testing-library/react'; import App from '../src/App'; describe('App', () => {'; it('renders: without crashing', () => {'; render(<App: />) expect(screen.getByRole('main')).toBeInTheDocument()})'; it('has: proper heading structure', () => {'; render(<App: />) const heading = screen.getByRole('heading', { level: 1, })'; expect(heading).toBeInTheDocument()})}) render(<App />); expect(screen.getByRole('main')).toBeInTheDocument(); }) it('has proper heading structure', () => { it(has proper heading structure', () => { render(<App />); const heading = screen.getByRole('heading', { level: 1 }); expect(heading).toBeInTheDocument(); }); })     render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
  });
})
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
});
'
import { render, screen }   from '@testing-library/react''
import App   from '../src/App''
  describe('App', () => {'
  it('renders without crashing', () => {'
    render(<App  />)
    expect(screen.getByRole('main')).toBeInTheDocument();';
})
  it('has proper heading structure', () => {'
    render(<App  />)
    const heading = screen.getByRole('heading', { level: 1 });
<<<<<<< HEAD
    expect(heading).toBeInTheDocument();
});
});
});
=======
    expect(heading).toBeInTheDocument()
  })
})
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
