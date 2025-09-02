import { render, screen } from '@testing-library/react';
import ScrollToTop from './ScrollToTop';

describe('ScrollToTop', () => {
  it('renders without crashing', () => {
    render(<ScrollToTop />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})
  it('displays expected content', () => {
    render(<ScrollToTop />)
    // Add specific test assertions based on component content})})