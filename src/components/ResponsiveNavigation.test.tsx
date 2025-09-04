<<<<<<< HEAD
import { render, screen } from '@testing-library/reactimport ResponsiveNavigation from ./ResponsiveNavigationdescribe(ResponsiveNavigation', () => {';';
  it('renders without crashing', () => {';
    render(<ResponsiveNavigation  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<ResponsiveNavigation  />)';
    // Add specific test assertions based on component content})});';;';
=======
import { render,screen } from '@testing-library/reactimport ResponsiveNavigation from ./ResponsiveNavigationdescribe(ResponsiveNavigation',() => { it('renders without crashing',() => { render(<ResponsiveNavigation />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<ResponsiveNavigation />)
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
