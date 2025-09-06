
<<<<<<< HEAD
  const isAuthenticated = !!user;
  const { items: wishlistItems } = useWishlist(), // Renamed to avoid conflict
  const favoritesCount = wishlistItems.length;


  const cartContextValue = useCart(), // Call hook at top level
  let cartCount = 0;


