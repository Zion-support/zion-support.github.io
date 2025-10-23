import { render, screen, fireEvent } from '@testing-library/react';

export default function Page() {
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// Mock advanced components
const AdvancedButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => {
  return <button onClick={onClick} data-testid="advanced-button">{children}</button><input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      data-testid="advanced-input"
    />
  );
};

describe('Advanced Components', () => {
  it('renders advanced button', () => {
    const mockOnClick = jest.fn();
    render(<AdvancedButton onClick={mockOnClick}>Click me</AdvancedButton><AdvancedButton onClick={mockOnClick}>Click me</AdvancedButton><AdvancedInput value="test" onChange={mockOnChange} />);
    
    const input = screen.getByTestId('advanced-input');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('test');
  });

  it('handles input change', () => {
    const mockOnChange = jest.fn();
    render(<AdvancedInput value="" onChange={mockOnChange} />);
    
    const input = screen.getByTestId('advanced-input');
    fireEvent.change(input, { target: { value: 'new value' } });
    
    expect(mockOnChange).toHaveBeenCalledWith('new value');
  });
});
}