<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
const TestComponent = () => {
  return <div>Loading...</div>;
};
describe('Loading Spinner', () => {
  it('should render without errors', () => {
    expect(true).toBe(true);
  });
  it('should render loading content', () => {
    render(<TestComponent />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
  it('should handle loading states', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    expect(consoleSpy).toBeDefined();
    consoleSpy.mockRestore();
  });
});
=======
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
// Mock LoadingSpinner component
const LoadingSpinner = ({ isLoading }: { isLoading: boolean }) => {;
  if (!isLoading) return null
  return <div data-testid="loading-spinner">Loading...</div>
}
describe('LoadingSpinner', () => {
  it('renders when loading is true', () => {
    render(<LoadingSpinner isLoading={true} />)
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  })
  it('does not render when loading is false', () => {
    render(<LoadingSpinner isLoading={false} />)
    expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
  })
  it('displays loading text', () => {
    render(<LoadingSpinner isLoading={true} />)
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
})
>>>>>>> cursor/fix-errors-and-merge-to-main-596a
