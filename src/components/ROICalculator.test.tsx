<<<<<<< HEAD
import { render, screen } from '@testing-library/react';""
import ROICalculator from './ROICalculator';""
describe('ROICalculator', () => {""
  it('renders without crashing', () => {""
=======
import { render, screen } from '@testing-library/react
import ROICalculator from './ROICalculator
describe('ROICalculator', () => {"
  it('renders without crashing', () => {"
>>>>>>> main
    render(<ROICalculator /" >)"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();""
  it('displays expected content', () => {
<<<<<<< HEAD
    render(<ROICalculator /" >)"
    // Add specific test assertions based on component content, });
""
=======
    render(<ROICalculator /" >)
    // Add specific test assertions based on component content
})
"
>>>>>>> main
}}