// __tests__/pages/EquipmentDetail.test.tsx
import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import EquipmentDetail, { SAMPLE_EQUIPMENT } from '@/pages/EquipmentDetail';

// Mock functions need to be declared before they are used in mock factories
const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

// Specific mock functions for toast, to be used in the factory and for assertions
const mockInfoFnForToast = jest.fn();
const mockSuccessFnForToast = jest.fn();

// Mock dependencies
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
  useNavigate: () => mockNavigate, // This pattern works because mockNavigate is returned by a function
  useLocation: jest.fn()
}));

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
  useSelector: jest.fn()
}));

jest.mock('@/hooks/use-toast', () => ({
  useToast: () => ({
    toast: {
      info: mockInfoFnForToast,
      success: mockSuccessFnForToast
    }
  })
}));

describe('EquipmentDetail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders equipment details correctly', () => {
    render(<EquipmentDetail />);
    
    expect(screen.getByText(SAMPLE_EQUIPMENT.name)).toBeInTheDocument();
    expect(screen.getByText(SAMPLE_EQUIPMENT.description)).toBeInTheDocument();
    expect(screen.getByText(`$${SAMPLE_EQUIPMENT.price}`)).toBeInTheDocument();
  });

  it('displays equipment specifications', () => {
    render(<EquipmentDetail />);
    
    expect(screen.getByText('Specifications')).toBeInTheDocument();
    expect(screen.getByText(`Brand: ${SAMPLE_EQUIPMENT.brand}`)).toBeInTheDocument();
    expect(screen.getByText(`Model: ${SAMPLE_EQUIPMENT.model}`)).toBeInTheDocument();
  });

  it('shows equipment images', () => {
    render(<EquipmentDetail />);
    
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(SAMPLE_EQUIPMENT.images.length);
  });

  it('handles add to cart functionality', async () => {
    render(<EquipmentDetail />);
    
    const addToCartButton = screen.getByText('Add to Cart');
    
    await act(async () => {
      fireEvent.click(addToCartButton);
    });
    
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockSuccessFnForToast).toHaveBeenCalledWith({
      title: 'Added to Cart',
      description: `${SAMPLE_EQUIPMENT.name} has been added to your cart.`
    });
  });

  it('handles wishlist functionality', async () => {
    render(<EquipmentDetail />);
    
    const wishlistButton = screen.getByText('Add to Wishlist');
    
    await act(async () => {
      fireEvent.click(wishlistButton);
    });
    
    expect(mockDispatch).toHaveBeenCalled();
    expect(mockSuccessFnForToast).toHaveBeenCalledWith({
      title: 'Added to Wishlist',
      description: `${SAMPLE_EQUIPMENT.name} has been added to your wishlist.`
    });
  });

  it('displays related equipment', () => {
    render(<EquipmentDetail />);
    
    expect(screen.getByText('Related Equipment')).toBeInTheDocument();
  });

  it('shows equipment reviews', () => {
    render(<EquipmentDetail />);
    
    expect(screen.getByText('Reviews')).toBeInTheDocument();
  });

  it('handles quantity selection', async () => {
    render(<EquipmentDetail />);
    
    const quantityInput = screen.getByDisplayValue('1');
    
    await act(async () => {
      fireEvent.change(quantityInput, { target: { value: '3' } });
    });
    
    expect(quantityInput).toHaveValue(3);
  });
});