<<<<<<< HEAD
import { render, screen  } from '@testing-library/reactimport CaseStudies from ./CaseStudiesdescribe(CaseStudies, () => {it(renders without crashing, () => {';';
    render(<CaseStudies  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<CaseStudies  />)';
    // Add specific test assertions based on component content})});';;';
=======
import { render,screen } from '@testing-library/reactimport CaseStudies from ./CaseStudiesdescribe(CaseStudies,() => {it(renders without crashing,() => {'; render(<CaseStudies />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<CaseStudies />)
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
