import { render, screen  } from '@testing-library/reactimport AnalyticsDashboard from ./AnalyticsDashboarddescribe(AnalyticsDashboard, () => {it(renders without crashing, () => {';
    render(<AnalyticsDashboard  />)
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})
  it('displays expected content', () => {
    render(<AnalyticsDashboard  />)
    // Add specific test assertions based on component content})})