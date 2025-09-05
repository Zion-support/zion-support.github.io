<<<<<<< HEAD
import { render, screen } from '@testing-library/reactimport ROICalculator from ./ROICalculatordescribe(ROICalculator', () => {';';
  it('renders without crashing', () => {';
    render(<ROICalculator  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<ROICalculator  />)';
    // Add specific test assertions based on component content})});';;';
=======
import { render,screen } from '@testing-library/reactimport ROICalculator from ./ROICalculatordescribe(ROICalculator',() => { it('renders without crashing',() => { render(<ROICalculator />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<ROICalculator />)
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
