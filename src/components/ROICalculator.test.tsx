import { render, screen } from '@testing-library/react';
import ROICalculator from './ROICalculator';
;
describe('ROICalculator', () => {;
  it('renders without crashing', () => {;
    render(<ROICalculator />);
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()});
  it('displays expected content', () => {;
    render(<ROICalculator />);
    // Add specific test assertions based on component content})})