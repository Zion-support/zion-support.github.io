<<<<<<< HEAD
=======
// Cart utilities for managing shopping cart functionality

export const cartUtils = {
  // Add item to cart
  addItem: (cart, item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
>>>>>>> cursor/create-and-deploy-new-content-d9c7
    if (existingItem) {
      return cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
<<<<<<< HEAD
=======
    
    return [...cart, { ...item, quantity: 1 }];
  },
  
  // Remove item from cart
>>>>>>> cursor/create-and-deploy-new-content-d9c7
  removeItem: (cart, itemId) => {
    return cart.filter(item => item.id !== itemId);
  },
  
<<<<<<< HEAD
=======
  // Update item quantity
>>>>>>> cursor/create-and-deploy-new-content-d9c7
  updateQuantity: (cart, itemId, quantity) => {
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }
<<<<<<< HEAD
=======
    
>>>>>>> cursor/create-and-deploy-new-content-d9c7
    return cart.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
  },
  
<<<<<<< HEAD
=======
  // Clear cart
  clearCart: () => {
    return [];
  },
  
  // Get total items count
>>>>>>> cursor/create-and-deploy-new-content-d9c7
  getTotalItems: (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  },
  
<<<<<<< HEAD
=======
  // Get total price
  getTotalPrice: (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },
  
  // Check if item is in cart
  isInCart: (cart, itemId) => {
    return cart.some(item => item.id === itemId);
  },
  
  // Get item from cart
  getItem: (cart, itemId) => {
    return cart.find(item => item.id === itemId);
>>>>>>> cursor/create-and-deploy-new-content-d9c7
  }
};

export default cartUtils;