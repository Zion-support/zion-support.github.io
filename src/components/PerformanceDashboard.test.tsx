<<<<<<< HEAD
import { render, screen  } from '@testing-library/reactimport PerformanceDashboard from ./PerformanceDashboarddescribe(PerformanceDashboard, () => {';';';
  it(renders without crashing', () => {'';
    render(<PerformanceDashboard  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<PerformanceDashboard  />)';
    // Add specific test assertions based on component content})});';;';
=======
import { render,screen } from '@testing-library/reactimport PerformanceDashboard from ./PerformanceDashboarddescribe(PerformanceDashboard,() => {' it(renders without crashing',() => {' render(<PerformanceDashboard />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<PerformanceDashboard />)
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
