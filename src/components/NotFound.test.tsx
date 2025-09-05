<<<<<<< HEAD
import { render, screen  } from '@testing-library/reactimport NotFound from ./NotFounddescribe(NotFound, () => {';';';
  it(renders without crashing', () => {'';
    render(<NotFound  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<NotFound  />)';
    // Add specific test assertions based on component content})});';;';
=======
import { render,screen } from '@testing-library/reactimport NotFound from ./NotFounddescribe(NotFound,() => {' it(renders without crashing',() => {' render(<NotFound />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<NotFound />)
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
