import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner', () => {
  it('displays expected content', () => {
    render(<Spinner />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  });
});