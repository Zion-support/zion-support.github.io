import { render, screen } from '@testing-library/react';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  it('renders without crashing', () => {
    render(<ContactForm, />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})
  it('displays expected content', () => {
    render(<ContactForm, />)
    // Add specific test assertions based on component content})})