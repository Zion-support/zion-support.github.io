import AccessibilityEnhancer from '../components/AccessibilityEnhancer';

describe('AccessibilityEnhancer', () => {
  it('renders children correctly', () => {
    render(
      <AccessibilityEnhancer>
        <div data-testid="test-child">Test Content</div>
      </AccessibilityEnhancer>
    );
    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/AccessibilityEnhancer.test.tsx
  it('applies accessibility props correctly', () => {
    render(
      <AccessibilityEnhancer role="button" aria-label="Test Button">
        <button>Click me</button>
      </AccessibilityEnhancer>
    );
    const element = screen.getByRole('button');
    expect(element).toHaveAttribute('aria-label', 'Test Button');
  });

  it('handles keyboard events correctly', () => {
    const handleClick = vi.fn();
    render(
      <AccessibilityEnhancer role="button" onClick={handleClick} tabIndex={0}>
        <span>Clickable Element</span>
      </AccessibilityEnhancer>
    );
    const element = screen.getByRole('button');
    fireEvent.keyDown(element, { "key": 'Enter' });
    expect(handleClick).toHaveBeenCalledTimes(1);
    fireEvent.keyDown(element, { "key": ' ' });
    expect(handleClick).toHaveBeenCalledTimes(2);
  });

>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/AccessibilityEnhancer.test.tsx
  it('applies focus styles when focusable', () => {
    render(
      <AccessibilityEnhancer
        role="button"
        tabIndex={0}
        className="focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <span>Focusable Element</span>
      </AccessibilityEnhancer>
    );
    const element = screen.getByRole('button');
    expect(element).toHaveClass(
      'focus:outline-none',
      'focus:ring-2',
      'focus:ring-blue-500'
    );
  });

  it('disables focus when not focusable', () => {
    render(
      <AccessibilityEnhancer role="button" tabIndex={-1}>
        <span>Non-focusable Element</span>
      </AccessibilityEnhancer>
    );
    const element = screen.getByRole('button');
    expect(element).toHaveAttribute('tabindex', '-1');
  });
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:__tests__/AccessibilityEnhancer.test.tsx
