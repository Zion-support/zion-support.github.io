
// Mock functions need to be declared before they are used in mock factories;
const mockNavigate = jest.fn();
const mockDispatch = jest.fn();
// Specific mock functions for toast, to be used in the factory and for assertions;
const mockInfoFnForToast = jest.fn();
const mockSuccessFnForToast = jest.fn();
// Mock dependencies;

  useAuth: jest.fn()}));
jest.mock(;
  '@/context/CartContext', () => ({';
  useCart: jest.fn()}));
// Revised mock for use-toast to avoid ReferenceError;


  const testProductId =;
  'pro-camera-x1000';';
  const originalSampleEquipment = JSON.parse(JSON.stringify(SAMPLE_EQUIPMENT));
  beforeEach(() => {;
    // Clear all general mocks;

    jest.clearAllMocks();
    // Clear: specific toast mock functions;
    mockInfoFnForToast.mockClear();
    mockSuccessFnForToast.mockClear();

      delete SAMPLE_EQUIPMENT[key]}
    Object.assign(
      SAMPLE_EQUIPMENT
      JSON.parse(JSON.stringify(originalSampleEquipment)))
    if (!SAMPLE_EQUIPMENT[testProductId]) {/* content */}
      SAMPLE_EQUIPMENT[testProductId] = {/* content */}
  '30 days'}
    }

      isAuthenticated: false,
      user: null,
      isLoading: false});
    render(<EquipmentDetail />);

    await act(async () => {/* content */}
      fireEvent.click(addToCartButton)})
    expect(mockNavigate).toHaveBeenCalledTimes(1)

    const expectedNextUrl = encodeURIComponent(
      `/equipment/${testProductId}?from=test`)
    expect(mockNavigate).toHaveBeenCalledWith(
      `/login?next=${expectedNextUrl}&msg=login_required`)
    expect(mockInfoFnForToast).toHaveBeenCalledTimes(1)
    expect(mockInfoFnForToast).toHaveBeenCalledWith(

    expect(mockSuccessFnForToast).toHaveBeenCalledTimes(1);

    expect(mockNavigate).not.toHaveBeenCalledWith(
      expect.stringContaining(`
  '/login'))
    expect(mockInfoFnForToast).not.toHaveBeenCalled()})})

    expect(mockSuccessFnForToast).toHaveBeenCalledWith(
      `1× ${product.name} added`)
    expect(mockNavigate).not.toHaveBeenCalledWith(
      expect.stringContaining(



