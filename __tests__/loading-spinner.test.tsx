import { render, screen }  from "@testing-library/react";
import '@testing-library/jest-dom';

// Mock LoadingSpinner component;
const LoadingSpinner = ({ isLoading }: { isLoading: boolean }) => {
  if (!isLoading) return null;
  return <div data-testid="loading-spinner">Loading...</div>;
};
describe('LoadingSpinner', () => {
  it('renders when loading is true', () => {
    render(<LoadingSpinner isLoading={ tr, u, e }/>);
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
  it('does not render when loading is false', () => {
  render(<LoadingSpinner isLoading={ fal, s, e }/>);
    expect(screen.queryByTestId('loading-spinner')).not.toBeInTheDocument();
  });
  it('displays loading text', () => {
  render(<LoadingSpinner isLoading={ tr, u, e }/>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
}