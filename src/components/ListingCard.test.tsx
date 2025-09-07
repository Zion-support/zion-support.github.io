import { render, screen  } from '@testing-library/react';
import ListingCard from './ListingCard';
describe('ListingCard', ()  => {
it('renders without crashing', () => {render(<$1>)expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()it('displays expected content', () => {render(<ListingCard />)
})// Add specific test assertions based on component content;
  })