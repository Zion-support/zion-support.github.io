<<<<<<< HEAD
// Cart utility functions for managing shopping cart state
=======
/**
 * Cart utility functions for managing shopping cart operations
 */
>>>>>>> cursor/create-and-deploy-new-content-ee06

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  description?: string;
  category?: string;
<<<<<<< HEAD
=======
  metadata?: Record<string, any>;
>>>>>>> cursor/create-and-deploy-new-content-ee06
}

export interface Cart {
  items: CartItem[];
<<<<<<< HEAD
  total: number;
  itemCount: number;
}

export const cartUtils = {
  // Create a new empty cart
  createEmptyCart: (): Cart => ({
    items: [],
    total: 0,
    itemCount: 0,
  }),

  // Add item to cart
  addItem: (cart: Cart, newItem: Omit<CartItem, 'quantity'>): Cart => {
    const existingItemIndex = cart.items.findIndex(item => item.id === newItem.id);
    
    if (existingItemIndex > -1) {
      // Item exists, increment quantity
      const updatedItems = [...cart.items];
      updatedItems[existingItemIndex].quantity += 1;
      return cartUtils.calculateTotals({ ...cart, items: updatedItems });
    } else {
      // New item, add with quantity 1
      const updatedItems = [...cart.items, { ...newItem, quantity: 1 }];
      return cartUtils.calculateTotals({ ...cart, items: updatedItems });
    }
  },

  // Remove item from cart
  removeItem: (cart: Cart, itemId: string): Cart => {
    const updatedItems = cart.items.filter(item => item.id !== itemId);
    return cartUtils.calculateTotals({ ...cart, items: updatedItems });
  },

  // Update item quantity
  updateQuantity: (cart: Cart, itemId: string, quantity: number): Cart => {
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }

    const updatedItems = cart.items.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
    return cartUtils.calculateTotals({ ...cart, items: updatedItems });
  },

  // Clear all items from cart
  clearCart: (): Cart => cartUtils.createEmptyCart(),

  // Calculate totals
  calculateTotals: (cart: Cart): Cart => {
    const total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);
    
    return {
      ...cart,
      total: Math.round(total * 100) / 100, // Round to 2 decimal places
      itemCount,
    };
  },

  // Get item by ID
  getItem: (cart: Cart, itemId: string): CartItem | undefined => {
    return cart.items.find(item => item.id === itemId);
  },

  // Check if item exists in cart
  hasItem: (cart: Cart, itemId: string): boolean => {
    return cart.items.some(item => item.id === itemId);
  },

  // Get cart summary
  getSummary: (cart: Cart) => {
    return {
      itemCount: cart.itemCount,
      total: cart.total,
      isEmpty: cart.items.length === 0,
      uniqueItems: cart.items.length,
    };
  },

  // Validate cart
  validateCart: (cart: Cart): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    if (!Array.isArray(cart.items)) {
      errors.push('Items must be an array');
      return { isValid: false, errors };
    }

    cart.items.forEach((item, index) => {
      if (!item.id) {
        errors.push(`Item at index ${index} is missing ID`);
      }
      if (!item.name) {
        errors.push(`Item at index ${index} is missing name`);
      }
      if (typeof item.price !== 'number' || item.price < 0) {
        errors.push(`Item at index ${index} has invalid price`);
      }
      if (typeof item.quantity !== 'number' || item.quantity <= 0) {
        errors.push(`Item at index ${index} has invalid quantity`);
      }
    });

    return {
      isValid: errors.length === 0,
      errors,
    };
  },

  // Persist cart to localStorage
  persistCart: (cart: Cart): boolean => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('cart', JSON.stringify(cart));
        return true;
      }
      return false;
    } catch (error) {
      console.warn('Failed to persist cart:', error);
      return false;
    }
  },

  // Load cart from localStorage
  loadCart: (): Cart => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const stored = localStorage.getItem('cart');
        if (stored) {
          const parsed = JSON.parse(stored);
          const validation = cartUtils.validateCart(parsed);
          if (validation.isValid) {
            return cartUtils.calculateTotals(parsed);
          }
        }
      }
    } catch (error) {
      console.warn('Failed to load cart:', error);
    }
    return cartUtils.createEmptyCart();
  },

  // Clear persisted cart
  clearPersistedCart: (): boolean => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.removeItem('cart');
        return true;
      }
      return false;
    } catch (error) {
      console.warn('Failed to clear persisted cart:', error);
      return false;
    }
  },
};

export default cartUtils;
=======
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  currency: string;
  updatedAt: string;
}

export interface CartSummary {
  itemCount: number;
  totalItems: number;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

class CartManager {
  private cart: Cart = {
    items: [],
    subtotal: 0,
    tax: 0,
    shipping: 0,
    total: 0,
    currency: 'USD',
    updatedAt: new Date().toISOString()
  };

  private taxRate = 0.08; // 8% tax rate
  private freeShippingThreshold = 100; // Free shipping over $100
  private shippingCost = 9.99; // Standard shipping cost

  /**
   * Add an item to the cart
   */
  addItem(item: Omit<CartItem, 'quantity'> | CartItem): void {
    const existingItemIndex = this.cart.items.findIndex(cartItem => cartItem.id === item.id);

    if (existingItemIndex >= 0) {
      // Item exists, increase quantity
      this.cart.items[existingItemIndex].quantity += (item as CartItem).quantity || 1;
    } else {
      // New item, add to cart
      this.cart.items.push({
        ...item,
        quantity: (item as CartItem).quantity || 1
      });
    }

    this.recalculateCart();
  }

  /**
   * Remove an item from the cart
   */
  removeItem(itemId: string): void {
    this.cart.items = this.cart.items.filter(item => item.id !== itemId);
    this.recalculateCart();
  }

  /**
   * Update item quantity
   */
  updateQuantity(itemId: string, quantity: number): void {
    if (quantity <= 0) {
      this.removeItem(itemId);
      return;
    }

    const itemIndex = this.cart.items.findIndex(item => item.id === itemId);
    if (itemIndex >= 0) {
      this.cart.items[itemIndex].quantity = quantity;
      this.recalculateCart();
    }
  }

  /**
   * Clear all items from cart
   */
  clearCart(): void {
    this.cart.items = [];
    this.recalculateCart();
  }

  /**
   * Get cart items
   */
  getCart(): Cart {
    return { ...this.cart };
  }

  /**
   * Get cart summary
   */
  getCartSummary(): CartSummary {
    const totalItems = this.cart.items.reduce((sum, item) => sum + item.quantity, 0);
    
    return {
      itemCount: this.cart.items.length,
      totalItems,
      subtotal: this.cart.subtotal,
      tax: this.cart.tax,
      shipping: this.cart.shipping,
      total: this.cart.total
    };
  }

  /**
   * Check if cart is empty
   */
  isEmpty(): boolean {
    return this.cart.items.length === 0;
  }

  /**
   * Get item count
   */
  getItemCount(): number {
    return this.cart.items.reduce((sum, item) => sum + item.quantity, 0);
  }

  /**
   * Find item by ID
   */
  findItem(itemId: string): CartItem | undefined {
    return this.cart.items.find(item => item.id === itemId);
  }

  /**
   * Calculate cart totals
   */
  private recalculateCart(): void {
    // Calculate subtotal
    this.cart.subtotal = this.cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Calculate tax
    this.cart.tax = this.cart.subtotal * this.taxRate;

    // Calculate shipping
    this.cart.shipping = this.cart.subtotal >= this.freeShippingThreshold ? 0 : this.shippingCost;

    // Calculate total
    this.cart.total = this.cart.subtotal + this.cart.tax + this.cart.shipping;

    // Update timestamp
    this.cart.updatedAt = new Date().toISOString();
  }

  /**
   * Apply discount
   */
  applyDiscount(percentage: number): void {
    if (percentage < 0 || percentage > 100) {
      throw new Error('Discount percentage must be between 0 and 100');
    }

    const discountAmount = this.cart.subtotal * (percentage / 100);
    this.cart.subtotal -= discountAmount;
    this.recalculateCart();
  }

  /**
   * Set shipping cost
   */
  setShippingCost(cost: number): void {
    this.shippingCost = cost;
    this.recalculateCart();
  }

  /**
   * Set tax rate
   */
  setTaxRate(rate: number): void {
    this.taxRate = rate;
    this.recalculateCart();
  }

  /**
   * Set free shipping threshold
   */
  setFreeShippingThreshold(threshold: number): void {
    this.freeShippingThreshold = threshold;
    this.recalculateCart();
  }

  /**
   * Validate cart
   */
  validateCart(): { isValid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (this.cart.items.length === 0) {
      errors.push('Cart is empty');
    }

    for (const item of this.cart.items) {
      if (item.quantity <= 0) {
        errors.push(`Invalid quantity for item: ${item.name}`);
      }
      if (item.price < 0) {
        errors.push(`Invalid price for item: ${item.name}`);
      }
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }

  /**
   * Export cart data
   */
  exportCart(): string {
    return JSON.stringify(this.cart, null, 2);
  }

  /**
   * Import cart data
   */
  importCart(cartData: string): boolean {
    try {
      const importedCart = JSON.parse(cartData);
      
      // Validate imported cart structure
      if (!importedCart.items || !Array.isArray(importedCart.items)) {
        throw new Error('Invalid cart structure');
      }

      this.cart = importedCart;
      this.recalculateCart();
      return true;
    } catch (error) {
      console.error('Failed to import cart:', error);
      return false;
    }
  }
}

// Create default instance
const cartManager = new CartManager();

// Export convenience functions
export const cartUtils = {
  addItem: (item: Omit<CartItem, 'quantity'> | CartItem) => cartManager.addItem(item),
  removeItem: (itemId: string) => cartManager.removeItem(itemId),
  updateQuantity: (itemId: string, quantity: number) => cartManager.updateQuantity(itemId, quantity),
  clearCart: () => cartManager.clearCart(),
  getCart: () => cartManager.getCart(),
  getCartSummary: () => cartManager.getCartSummary(),
  isEmpty: () => cartManager.isEmpty(),
  getItemCount: () => cartManager.getItemCount(),
  findItem: (itemId: string) => cartManager.findItem(itemId),
  applyDiscount: (percentage: number) => cartManager.applyDiscount(percentage),
  setShippingCost: (cost: number) => cartManager.setShippingCost(cost),
  setTaxRate: (rate: number) => cartManager.setTaxRate(rate),
  setFreeShippingThreshold: (threshold: number) => cartManager.setFreeShippingThreshold(threshold),
  validateCart: () => cartManager.validateCart(),
  exportCart: () => cartManager.exportCart(),
  importCart: (cartData: string) => cartManager.importCart(cartData)
};

export default cartManager;
>>>>>>> cursor/create-and-deploy-new-content-ee06
