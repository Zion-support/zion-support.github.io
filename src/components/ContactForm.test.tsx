<<<<<<< HEAD
import { render, screen  } from '@testing-library/reactimport ContactForm from ./ContactFormdescribe(ContactForm, () => {';';';
  it(renders without crashing', () => {'';
    render(<ContactForm  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<ContactForm  />)';
    // Add specific test assertions based on component content})});';;';
=======
import { render,screen } from '@testing-library/reactimport ContactForm from ./ContactFormdescribe(ContactForm,() => {' it(renders without crashing',() => {' render(<ContactForm />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<ContactForm />)
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
