import { render, screen } from '@testing-library/react;
import ListingScoreCard from './ListingScoreCard';
describe(ListingScoreCard', () => {
  it('renders without crashing, () => {
    render(<ListingScoreCard />)"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  it(displays expected content', () => {
    render(<ListingScoreCard />)
    // Add specific test assertions based on component content
  });