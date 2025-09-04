<<<<<<< HEAD
import { render, screen  } from '@testing-library/reactimport AnalyticsDashboard from ./AnalyticsDashboarddescribe(AnalyticsDashboard, () => {it(renders without crashing, () => {';';
    render(<AnalyticsDashboard  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<AnalyticsDashboard  />)';
    // Add specific test assertions based on component content})});';;';
=======
import { render,screen } from '@testing-library/reactimport AnalyticsDashboard from ./AnalyticsDashboarddescribe(AnalyticsDashboard,() => {it(renders without crashing,() => {'; render(<AnalyticsDashboard />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<AnalyticsDashboard />)
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
