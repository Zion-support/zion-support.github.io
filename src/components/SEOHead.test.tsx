<<<<<<< HEAD
import { render, screen } from '@testing-library/reactimport SEOHead from ./SEOHeaddescribe(SEOHead', () => {';';
  it('renders without crashing', () => {';
    render(<SEOHead  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<SEOHead  />)';
    // Add specific test assertions based on component content})});';;';
=======
import { render,screen } from '@testing-library/reactimport SEOHead from ./SEOHeaddescribe(SEOHead',() => { it('renders without crashing',() => { render(<SEOHead />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<SEOHead />)
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
