<<<<<<< HEAD
    if (existingItem) {
      return cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  removeItem: (cart, itemId) => {
    return cart.filter(item => item.id !== itemId);
  },
  updateQuantity: (cart, itemId, quantity) => {
    if (quantity <= 0) {
      return cartUtils.removeItem(cart, itemId);
    }
    return cart.map(item =>
      item.id === itemId ? { ...item, quantity } : item
    );
  },
  getTotalItems: (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  },
  // Get total price
  getTotalPrice: (cart) => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  // Clear cart
  clearCart: () => {
    return [];
  },
  // Check if item is in cart
  isInCart: (cart, itemId) => {
    return cart.some(item => item.id === itemId);
  },
  // Get item from cart
  getItem: (cart, itemId) => {
    return cart.find(item => item.id === itemId);
  };
};

export default cartUtils;
=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-d67d
