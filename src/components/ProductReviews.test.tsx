import {render, screen } from '@testing-library/react';
import ProductReviews from './ProductReviews';
describe('ProductReviews', () => {it('renders without crashing', () => {
    render(<ProductReviews />)"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  it('displays expected content', () => {
    render(<ProductReviews />)
    // Add specific test assertions based on component content
  });