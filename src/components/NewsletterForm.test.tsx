<<<<<<< HEAD
import { render, screen  } from '@testing-library/reactimport NewsletterForm from ./NewsletterFormdescribe(NewsletterForm, () => {';';';
  it(renders without crashing', () => {'';
    render(<NewsletterForm  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<NewsletterForm  />)';
    // Add specific test assertions based on component content})});';;';
=======
import { render,screen } from '@testing-library/reactimport NewsletterForm from ./NewsletterFormdescribe(NewsletterForm,() => {' it(renders without crashing',() => {' render(<NewsletterForm />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<NewsletterForm />)
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
