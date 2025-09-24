// Cart utilities for managing shopping cart functionality
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description?: string;
  image?: string;
  category?: string;
  sku?: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
  subtotal: number;
  tax: number;
  shipping: number;
  discount: number;
}

export const cartUtils = {
  // Create a new empty cart
  createEmptyCart(): Cart {
    return {
      items: [],
      total: 0,
      itemCount: 0,
    };
  },

  // Add item to cart
  addItem(cart: Cart, item: Omit<CartItem, 'quantity'>): Cart {
    const existingItem = cart.items.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      // Update quantity if item already exists
      return cartUtils.updateItemQuantity(cart, item.id, existingItem.quantity + 1);
    } else {
      // Add new item
      const newItem: CartItem = { ...item, quantity: 1 };
      const newItems = [...cart.items, newItem];
      return cartUtils.calculateTotals({ ...cart, items: newItems });
    }
    return item;
  });

  // Remove item from cart
  removeItem(cart: Cart, itemId: string): Cart {
    const newItems = cart.items.filter(item => item.id !== itemId);
    return cartUtils.calculateTotals({ ...cart, items: newItems });
  },

  // Update item quantity
  updateItemQuantity(cart: Cart, itemId: string, quantity: number): Cart {
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }

export function calculateCartTotals(cart: Cart): Cart {
  const subtotal = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
  
  // Calculate shipping
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_COST;
  
  // Calculate tax (on subtotal + shipping - discount)
  const taxableAmount = subtotal + shipping - cart.discount;
  const tax = taxableAmount * TAX_RATE;
  
  // Calculate total
  const total = subtotal + shipping + tax - cart.discount;

  // Calculate totals
  calculateTotals(cart: Cart): Cart {
    const total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    
    return {
      ...cart,
      total: Math.round(total * 100) / 100, // Round to 2 decimal places
      itemCount,
    };
  }

  // Clear cart
  clearCart(cart: Cart): Cart {
    return cartUtils.createEmptyCart();
  },

  // Get item by ID
  getItem(cart: Cart, itemId: string): CartItem | undefined {
    return cart.items.find(item => item.id === itemId);
  },

  // Check if item is in cart
  hasItem(cart: Cart, itemId: string): boolean {
    return cart.items.some(item => item.id === itemId);
  },

  // Get cart summary
  getSummary(cart: Cart) {
    return {
      cart,
      isValid: false,
      message: `Minimum order amount of $${discount.minimumAmount} required`,
    };
  }

  // Calculate discount amount
  let discountAmount = 0;
  if (discount.type === 'percentage') {
    discountAmount = cart.subtotal * (discount.value / 100);
  } else {
    discountAmount = discount.value;
  }

  // Don't allow discount to exceed subtotal
  discountAmount = Math.min(discountAmount, cart.subtotal);

  const newCart = calculateCartTotals({
    ...cart,
    discount: Math.round(discountAmount * 100) / 100,
  });

  return {
    cart: newCart,
    isValid: true,
    message: 'Discount applied successfully',
  };
}

export default cartUtils;
