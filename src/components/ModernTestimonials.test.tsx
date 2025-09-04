<<<<<<< HEAD
import { render, screen  } from '@testing-library/reactimport ModernTestimonials from ./ModernTestimonialsdescribe(ModernTestimonials, () => {';';';
  it(renders without crashing', () => {'';
    render(<ModernTestimonials  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<ModernTestimonials  />)';
    // Add specific test assertions based on component content})});';;';
=======
import { render,screen } from '@testing-library/reactimport ModernTestimonials from ./ModernTestimonialsdescribe(ModernTestimonials,() => {' it(renders without crashing',() => {' render(<ModernTestimonials />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<ModernTestimonials />)
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
