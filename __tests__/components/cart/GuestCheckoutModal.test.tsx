}));

// Mock alert, since the component uses it for diagnostics
global.alert = jest.fn();

  const mockOnSubmit = jest.fn();

  const defaultProps = {
    open: true,
    onOpenChange: mockOnOpenChange,
  };

  beforeEach(() => {
    // Reset mocks before each test
    mockOnOpenChange.mockClear();
    mockOnSubmit.mockClear();
    (global.alert as jest.Mock).mockClear();
    // Reset the mock for isProdDomain if needed for specific tests
    let addressInput: HTMLInputElement;
    let submitButton: HTMLElement;

    beforeEach(() => {
      render(<GuestCheckoutModal {...defaultProps} />);
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  // Test for dialog close, though onOpenChange is opaque here
});
