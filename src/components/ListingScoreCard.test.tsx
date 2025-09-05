<<<<<<< HEAD
import { render, screen  } from '@testing-library/reactimport ListingScoreCard from ./ListingScoreCarddescribe(ListingScoreCard, () => {';';';
  it(renders without crashing', () => {'';
    render(<ListingScoreCard  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<ListingScoreCard  />)';
    // Add specific test assertions based on component content})});';;';
=======
import { render,screen } from '@testing-library/reactimport ListingScoreCard from ./ListingScoreCarddescribe(ListingScoreCard,() => {' it(renders without crashing',() => {' render(<ListingScoreCard />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<ListingScoreCard />)
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
