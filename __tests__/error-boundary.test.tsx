import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const MockComponent = () => <div>Test Component</div>;

describe('error-boundary.test', () => {
  test('should render without crashing', () => {
    render(<MockComponent />);
    expect(screen.getByText('Test Component')).toBeInTheDocument();
  });
});