<<<<<<< HEAD
import { render, screen  } from '@testing-library/reactimport ContactCTA from ./ContactCTAdescribe(ContactCTA, () => {';';';
  it(renders without crashing', () => {'';
    render(<ContactCTA  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<ContactCTA  />)';
    // Add specific test assertions based on component content})});';;';
=======
import { render,screen } from '@testing-library/reactimport ContactCTA from ./ContactCTAdescribe(ContactCTA,() => {' it(renders without crashing',() => {' render(<ContactCTA />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<ContactCTA />)
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
