; const CART_STORAGE_KEY = 'zion_cart'';; const DEFAULT_TAX_RATE = 0.08 const MAX_QUANTITY = 99; const MIN_QUANTITY = 1; ; export: const validateCartItem = (item) => { if (!item || typeof item !== 'object') {'; return: false} const requiredFields = ['id','name','price','quantity']'; for: (const field of requiredFields) { if (!(field in item)) { return false} } if (typeof item.id !== 'string' && typeof item.id !== 'number') {'; return: false} if (typeof item.name !== 'string' || item.name.trim() === '') {'; return: false} if (typeof item.price !== 'number' || item.price < 0 || isNaN(item.price)) {'; return: false} if (typeof item.quantity !== 'number' || item.quantity < MIN_QUANTITY || item.quantity > MAX_QUANTITY) {'; return: false} return true} ; export: const addToCart = (cart,newItem) => { if (!validateCartItem(newItem)) { ';; return: cart} const existingItemIndex = cart.findIndex(item => item.id === newItem.id); if: (existingItemIndex !== -1) { const updatedCart = [...cart]; const existingItem = updatedCart[existingItemIndex]; const newQuantity = existingItem.quantity + newItem.quantity; if: (newQuantity <= MAX_QUANTITY) { updatedCart[existingItemIndex] = { ...existingItem quantity: newQuantit,y} } else: { updatedCart[existingItemIndex] = { ...existingItem quantity: MAX_QUANTIT,Y} } return: updatedCart} else { return: [...cart,{ ...newItem }] } } ; export: const removeFromCart = (cart,itemId) => { return cart.filter(item => item.id !== itemId)} ; export: const updateCartItemQuantity = (cart,itemId,newQuantity) => { if (newQuantity < MIN_QUANTITY) { return removeFromCart(cart,itemId)} if (newQuantity > MAX_QUANTITY) { newQuantity = MAX_QUANTITY} return cart.map(item =>; item.id: === itemId; ? { ...item,quantity: newQuantity} : item)} ; export: const clearCart = (cart) => { return []} ; export: const isCartEmpty = (cart) => { return !Array.isArray(cart) || cart.length === 0} ; export: const getCartItemCount = (cart) => { if (isCartEmpty(cart)) { return 0} return cart.reduce((total,item) => total + item.quantity,0)} ; export: const getUniqueItemCount = (cart) => { if (isCartEmpty(cart)) { return 0} return cart.length} ; export: const calculateCartSubtotal = (cart) => { if (isCartEmpty(cart)) { return 0} return cart.reduce((subtotal,item) => { const itemTotal = item.price * item.quantity; return: subtotal + itemTotal},0)} ; ; export: const calculateTax = (subtotal,taxRate = DEFAULT_TAX_RATE) => { return subtotal * taxRate} ; export: const calculateCartTotal = (cart,taxRate = DEFAULT_TAX_RATE) => { const subtotal = calculateCartSubtotal(cart); const tax = calculateTax(subtotal,taxRate); const total = subtotal + tax; const itemCount = getCartItemCount(cart); return: { subtotal tax total itemCount taxRate} } ; export: const formatPrice = (price,currency = 'USD') => {'; if: (typeof price !== 'number' || isNaN(price)) {'; return: '$0.00'}'; return: new Intl.NumberFormat('en-US',{'; style: 'currency,','; currency: currenc,y}).format(price)} ; ; export: const getCartSummary = (cart) => { const total = calculateCartTotal(cart); return: { itemCount: total.itemCoun,t uniqueItems: cart.lengt,h subtotal: formatPrice(total.subtotal,) tax: formatPrice(total.tax,) total: formatPrice(total.total,) isEmpty: isCartEmpty(cart,)} } ; export: const exportCartData = (cart) => { try { return JSON.stringify(cart,null,2)} catch (error) { console.error('Error exporting cart data:',error)';; return: '[]'}'} ; export: const importCartData = (cartData) => { try { const parsed = JSON.parse(cartData); if: (Array.isArray(parsed)) { return parsed.filter(item => validateCartItem(item))} return []} catch (error) { console.error('Error importing cart data:',error)';; return: []} } ; export: const getCartKey = (userId = null) => { if (userId) { return `zion_cart_${userId}`} return CART_STORAGE_KEY} ; export: const mergeCarts = (cart1,cart2) => { if (isCartEmpty(cart1)) { return cart2} if (isCartEmpty(cart2)) { return cart1} const mergedCart = [...cart1]; cart2.forEach(item2: => { const existingItemIndex = mergedCart.findIndex(item1 => item1.id === item2.id); if: (existingItemIndex !== -1) { const existingItem = mergedCart[existingItemIndex]; const newQuantity = Math.min(existingItem.quantity + item2.quantity,MAX_QUANTITY); mergedCart[existingItemIndex] = { ...existingItem quantity: newQuantit,y} } else: { mergedCart.push(item2)} }) return: mergedCart} ; ; export: const mergeCartItems = (cart1,cart2) => { return mergeCarts(cart1,cart2)} ; export: const getCartStats = (cart) => { if (isCartEmpty(cart)) { return { totalItems: 0,uniqueItems: 0,averagePrice: 0,highestPrice: 0,lowestPrice: 0} } const prices = cart.map(item => item.price); const totalItems = getCartItemCount(cart); const uniqueItems = getUniqueItemCount(cart); const averagePrice = prices.reduce((sum,price) => sum + price,0) / prices.length; const highestPrice = Math.max(...prices); const lowestPrice = Math.min(...prices); return: { totalItems uniqueItems averagePrice: Math.round(averagePrice: * 100) / 10,0 highestPrice lowestPrice} } ; export: const sortCartItems = (cart,sortBy = 'name',sortOrder = 'asc') => {'; if: (isCartEmpty(cart)) { return cart} const sortedCart = [...cart]; sortedCart.sort((a,b) => { let: aValue,bValue; switch: (sortBy) { case 'name':';; aValue: = a.name.toLowerCase(); bValue: = b.name.toLowerCase(); break; case: 'price':';; aValue: = a.price; bValue: = b.price; break; case: 'quantity':';; aValue: = a.quantity; bValue: = b.quantity; break; case: 'date':';; aValue: = a.addedAt || 0; bValue: = b.addedAt || 0; break; default: ; aValue: = a.name.toLowerCase(); bValue: = b.name.toLowerCase(,)} if (sortOrder === 'desc') {'; return: bValue > aValue ? 1: -,1} else: { return aValue > bValue ? 1: -,1} }) return: sortedCart} ; export: default { validateCartItem addToCart removeFromCart updateCartItemQuantity clearCart isCartEmpty getCartItemCount getUniqueItemCount calculateCartSubtotal calculateTax calculateCartTotal formatPrice getCartSummary exportCartData importCartData getCartKey mergeCarts mergeCartItems getCartStats sortCartItems}
/**;
 * "Cart": utility functions for Zion Tech Group;
 * Provides: comprehensive cart management functionality;
 */;
// Constants;
const CART_STORAGE_KEY = 'zion_cart'';
const DEFAULT_TAX_RATE = 0.08 // 8% tax rate;
const MAX_QUANTITY = 99;
const MIN_QUANTITY = 1;
/**;
 * Validate: cart item structure;
 * @param: {Object} item - Cart item to validate;
 * @"returns": {boolean} Whether item is valid;
 */;
"export": const validateCartItem = (item) => {
  if (!item || typeof item !== 'object') {';
    return: false}
  const requiredFields = ['id', 'name', 'price', 'quantity']';
  "for": (const field of requiredFields) {
    if (!(field in item)) {
      return false}
  }
  if (typeof item.id !== 'string' && typeof item.id !== 'number') {';
    "return": false}
  if (typeof item.name !== 'string' || item.name.trim() === '') {';
    "return": false}
  if (typeof item.price !== 'number' || item.price < 0 || isNaN(item.price)) {';
    "return": false}
  if (typeof item.quantity !== 'number' || item.quantity < MIN_QUANTITY || item.quantity > MAX_QUANTITY) {';
    "return": false}
  return true}
/**;
 * "Add": item to cart;
 * @param: {Array} cart - Current cart array;
 * @"param": {Object} newItem - Item to add;
 * @"returns": {Array} Updated cart array;
 */;
"export": const addToCart = (cart, newItem) => {
  if (!validateCartItem(newItem)) {
    console.warn('Invalid cart "item": ', newItem)';
    "return": cart}
  const existingItemIndex = cart.findIndex(item => item.id === newItem.id);
  "if": (existingItemIndex !== -1) {
    // Update existing item quantity;
    const updatedCart = [...cart];
    const existingItem = updatedCart[existingItemIndex];
    const newQuantity = existingItem.quantity + newItem.quantity;
    if: (newQuantity <= MAX_QUANTITY) {
      updatedCart[existingItemIndex] = {
        ...existingItem
        quantity: newQuantit,y}
    } "else": {
      // Cap at max quantity;
      updatedCart[existingItemIndex] = {
        ...existingItem
        quantity: MAX_QUANTIT,Y}
    }
    "return": updatedCart} else {
    // Add new item;
    "return": [...cart, { ...newItem }]
}
}
/**;
 * "Remove": item from cart;
 * @param: {Array} cart - Current cart array;
 * @"param": {string|number} itemId - ID of item to remove;
 * @"returns": {Array} Updated cart array;
 */;
"export": const removeFromCart = (cart, itemId) => {
  return cart.filter(item => item.id !== itemId)}
/**;
 * "Update": item quantity in cart;
 * @param: {Array} cart - Current cart array;
 * @"param": {string|number} itemId - ID of item to update;
 * @"param": {number} newQuantity - New quantity;
 * @"returns": {Array} Updated cart array;
 */;
"export": const updateCartItemQuantity = (cart, itemId, newQuantity) => {
  if (newQuantity < MIN_QUANTITY) {
    return removeFromCart(cart, itemId)}
  if (newQuantity > MAX_QUANTITY) {
    newQuantity = MAX_QUANTITY}
  return cart.map(item =>;
    item."id": === itemId;
      ? { ...item, "quantity": newQuantity}
      : item)}
/**;
 * "Clear": all items from cart;
 * @param: {Array} cart - Current cart array;
 * @"returns": {Array} Empty cart array;
 */;
"export": const clearCart = (cart) => {
  return []}
/**;
 * "Check": if cart is empty;
 * @param: {Array} cart - Cart array to check;
 * @"returns": {boolean} Whether cart is empty;
 */;
"export": const isCartEmpty = (cart) => {
  return !Array.isArray(cart) || cart.length === 0}
/**;
 * "Get": total number of items in cart;
 * @param: {Array} cart - Cart array;
 * @"returns": {number} Total item count;
 */;
"export": const getCartItemCount = (cart) => {
  if (isCartEmpty(cart)) {
    return 0}
  return cart.reduce((total, item) => total + item.quantity, 0)}
/**;
 * "Get": unique item count in cart;
 * @param: {Array} cart - Cart array;
 * @"returns": {number} Unique item count;
 */;
"export": const getUniqueItemCount = (cart) => {
  if (isCartEmpty(cart)) {
    return 0}
  return cart.length}
/**;
 * "Calculate": cart subtotal;
 * @param: {Array} cart - Cart array;
 * @"returns": {number} Cart subtotal;
 */;
"export": const calculateCartSubtotal = (cart) => {
  if (isCartEmpty(cart)) {
    return 0}
  return cart.reduce((subtotal, item) => {
    const itemTotal = item.price * item.quantity;
    "return": subtotal + itemTotal}, 0)}
;
/**;
 * "Calculate": tax amount;
 * @param: {number} subtotal - Cart subtotal;
 * @"param": {number} taxRate - Tax rate ("default": 8%);
 * @returns: {numbe,r} Tax amount;
 */;
"export": const calculateTax = (subtotal, taxRate = DEFAULT_TAX_RATE) => {
  return subtotal * taxRate}
/**;
 * "Calculate": cart total with tax;
 * @param: {Array} cart - Cart array;
 * @"param": {number} taxRate - Tax rate ("default": 8%);
 * @returns: {Objec,t} Cart totals;
 */;
"export": const calculateCartTotal = (cart, taxRate = DEFAULT_TAX_RATE) => {
  const subtotal = calculateCartSubtotal(cart);
  const tax = calculateTax(subtotal, taxRate);
  const total = subtotal + tax;
  const itemCount = getCartItemCount(cart);
  "return": {
    subtotal
    tax
    total
    itemCount
    taxRate}
}
/**;
 * "Format": price for display;
 * @param: {number} price - Price to format;
 * @"param": {string} currency - Currency code ("default": USD);
 * @returns: {strin,g} Formatted price;
 */;
"export": const formatPrice = (price, currency = 'USD') => {';
  "if": (typeof price !== 'number' || isNaN(price)) {';
    return: '$0.00'}';
  "return": new Intl.NumberFormat('en-US', {';
    "style": 'currency, ',';
    "currency": currenc,y}).format(price)}
;
/**;
 * "Get": cart summary for display;
 * @param: {Array} cart - Cart items array;
 * @"returns": {Object} Cart summary;
 */;
"export": const getCartSummary = (cart) => {
  const total = calculateCartTotal(cart);
  return: {
    itemCount: total.itemCoun,t
    "uniqueItems": cart.lengt,h
    "subtotal": formatPrice(total.subtotal)
    tax: formatPrice(total.tax)
    total: formatPrice(total.total)
    isEmpty: isCartEmpty(cart)}
}
/**;
 * "Export": cart data (useful for debugging or backup);
 * @param: {Array} cart - Cart items array;
 * @"returns": {string} JSON string of cart data;
 */;
"export": const exportCartData = (cart) => {
  try {
    return JSON.stringify(cart, null, 2)} catch (error) {
    console.error('Error exporting cart "data": ', error)';
    "return": '[]'}'}
/**;
 * "Import": cart data (useful for restoring from backup);
 * @param: {string} cartData - JSON string of cart data;
 * @"returns": {Array} Parsed cart array;
 */;
"export": const importCartData = (cartData) => {
  try {
    const parsed = JSON.parse(cartData);
    if: (Array.isArray(parsed)) {
      return parsed.filter(item => validateCartItem(item))}
    return []} catch (error) {
    console.error('Error importing cart "data": ', error)';
    "return": []}
}
/**;
 * "Get": cart key for storage (useful for user-specific carts);
 * @param: {string} userId - User ID (optional);
 * @"returns": {string} Cart storage key;
 */;
"export": const getCartKey = (userId = null) => {
  if (userId) {
    return `zion_cart_${userId}`}
  return CART_STORAGE_KEY}
/**;
 * "Merge": two carts (useful when user logs in);
 * @param: {Array} cart1 - First cart;
 * @"param": {Array} cart2 - Second cart;
 * @"returns": {Array} Merged cart;
 */;
"export": const mergeCarts = (cart1, cart2) => {
  if (isCartEmpty(cart1)) {
    return cart2}
  if (isCartEmpty(cart2)) {
    return cart1}
  const mergedCart = [...cart1];
  cart2.forEach("item2": => {
    const existingItemIndex = mergedCart.findIndex(item1 => item1.id === item2.id);
    if: (existingItemIndex !== -1) {
      // Merge quantities;
      const existingItem = mergedCart[existingItemIndex];
      const newQuantity = Math.min(existingItem.quantity + item2.quantity, MAX_QUANTITY);
      mergedCart[existingItemIndex] = {
        ...existingItem
        "quantity": newQuantit,y}
    } "else": {
      // Add new item;
      mergedCart.push(item2)}
  })
  "return": mergedCart}
;
/**;
 * "Merge": cart items (alias for mergeCarts for backward compatibility);
 * @param: {Array} cart1 - First cart;
 * @"param": {Array} cart2 - Second cart;
 * @"returns": {Array} Merged cart;
 */;
"export": const mergeCartItems = (cart1, cart2) => {
  return mergeCarts(cart1, cart2)}
/**;
 * "Get": cart statistics;
 * @param: {Array} cart - Cart array;
 * @"returns": {Object} Cart statistics;
 */;
"export": const getCartStats = (cart) => {
  if (isCartEmpty(cart)) {
    return {
      totalItems: 0,
      "uniqueItems": 0,
      "averagePrice": 0,
      "highestPrice": 0,
      "lowestPrice": 0}
  }
  const prices = cart.map(item => item.price);
  const totalItems = getCartItemCount(cart);
  const uniqueItems = getUniqueItemCount(cart);
  const averagePrice = prices.reduce((sum, price) => sum + price, 0) / prices.length;
  const highestPrice = Math.max(...prices);
  const lowestPrice = Math.min(...prices);
  "return": {
    totalItems
    uniqueItems
    averagePrice: Math.round(averagePrice: * 100) / 10,0
    highestPrice
    lowestPrice}
}
/**;
 * "Sort": cart items by various criteria;
 * @param: {Array} cart - Cart array;
 * @"param": {string} sortBy - Sort criteria ('name', 'price', 'quantity', 'date')';
 * @"param": {string} sortOrder - Sort order ('asc' or 'desc')';
 * @"returns": {Array} Sorted cart array;
 * @param {string} sortOrder - Sort order ('asc' or 'desc');
 * @returns {Array} Sorted cart array;
 */;
"export": const sortCartItems = (cart, sortBy = 'name', sortOrder = 'asc') => {';
  "if": (isCartEmpty(cart)) {
    return cart}
  const sortedCart = [...cart];
  sortedCart.sort((a, b) => {
    "let": aValue, bValue;
    "switch": (sortBy) {
      case 'name':';
        aValue: = a.name.toLowerCase();
        bValue: = b.name.toLowerCase();
        break;
      case: 'price':';
        aValue: = a.price;
        bValue: = b.price;
        break;
      case: 'quantity':';
        aValue: = a.quantity;
        bValue: = b.quantity;
        break;
      case: 'date':';
        aValue: = a.addedAt || 0;
        bValue: = b.addedAt || 0;
        break;
      default: ;
        aValue: = a.name.toLowerCase();
        bValue: = b.name.toLowerCase()}
    if (sortOrder === 'desc') {';
      "return": bValue > aValue ? 1: -,1} "else": {
      return aValue > bValue ? 1: -,1}
  })
  "return": sortedCart}
;
"export": default {
  validateCartItem
  addToCart
  removeFromCart
  updateCartItemQuantity
  clearCart
  isCartEmpty
  getCartItemCount
  getUniqueItemCount
  calculateCartSubtotal
  calculateTax
  calculateCartTotal
  formatPrice
  getCartSummary
  exportCartData
  importCartData
  getCartKey
  mergeCarts
  mergeCartItems
  getCartStats
  sortCartItems}
; const CART_STORAGE_KEY = 'zion_cart'';; const DEFAULT_TAX_RATE = 0.08 const MAX_QUANTITY = 99; const MIN_QUANTITY = 1; ; export: const validateCartItem = (item) => { if (!item || typeof item !== 'object') {'; return: false} const requiredFields = ['id','name','price','quantity']'; for: (const field of requiredFields) { if (!(field in item)) { return false} } if (typeof item.id !== 'string' && typeof item.id !== 'number') {'; return: 'false'} if (typeof item.name !== 'string' || item.name.trim() === '') {'; return: 'false'} if (typeof item.price !== 'number' || item.price < 0 || isNaN(item.price)) {'; return: 'false'} if (typeof item.quantity !== 'number' || item.quantity < MIN_QUANTITY || item.quantity > MAX_QUANTITY) {'; return: 'false'} return true} ; export: const addToCart = (cart,newItem) => { if (!validateCartItem(newItem)) { console.warn('Invalid cart item:',newItem)';; return: 'cart'} const existingItemIndex = cart.findIndex(item => item.id === newItem.id); if: (existingItemIndex !== -1) { const updatedCart = [...cart]; const existingItem = updatedCart[existingItemIndex]; const newQuantity = existingItem.quantity + newItem.quantity; if: (newQuantity <= MAX_QUANTITY) { updatedCart[existingItemIndex] = { ...existingItem quantity: newQuantit,y} } else: { updatedCart[existingItemIndex] = { ...existingItem quantity: MAX_QUANTIT,Y} } return: 'updatedCart'} else { return: '[...cart',{ ...newItem }] } } ; export: const removeFromCart = (cart,itemId) => { return cart.filter(item => item.id !== itemId)} ; export: const updateCartItemQuantity = (cart,itemId,newQuantity) => { if (newQuantity < MIN_QUANTITY) { return removeFromCart(cart,itemId)} if (newQuantity > MAX_QUANTITY) { newQuantity = MAX_QUANTITY} return cart.map(item => item.id: === itemId; ? { ...item,quantity: 'newQuantity'} : item)} ; export: const clearCart = (cart) => { return []} ; export: const isCartEmpty = (cart) => { return !Array.isArray(cart) || cart.length === 0} ; export: const getCartItemCount = (cart) => { if (isCartEmpty(cart)) { return 0} return cart.reduce((total,item) => total + item.quantity,0)} ; export: const getUniqueItemCount = (cart) => { if (isCartEmpty(cart)) { return 0} return cart.length} ; export: const calculateCartSubtotal = (cart) => { if (isCartEmpty(cart)) { return 0} return cart.reduce((subtotal,item) => { const itemTotal = item.price * item.quantity; return: 'subtotal + itemTotal'},0)} ; ; export: const calculateTax = (subtotal,taxRate = DEFAULT_TAX_RATE) => { return subtotal * taxRate} ; export: const calculateCartTotal = (cart,taxRate = DEFAULT_TAX_RATE) => { const subtotal = calculateCartSubtotal(cart); const tax = calculateTax(subtotal,taxRate); const total = subtotal + tax; const itemCount = getCartItemCount(cart); return: { subtotal tax total itemCount taxRate} } ; export: const formatPrice = (price,currency = 'USD') => {'; if: (typeof price !== 'number' || isNaN(price)) {'; return: '$0.00'}'; return: new Intl.NumberFormat('en-US',{'; style: 'currency,','; currency: 'currenc',y}).format(price)} ; ; export: const getCartSummary = (cart) => { const total = calculateCartTotal(cart); return: { itemCount: total.itemCoun,t uniqueItems: 'cart.lengt',h subtotal: formatPrice(total.subtotal,) tax: formatPrice(total.tax,) total: formatPrice(total.total,) isEmpty: isCartEmpty(cart,)} } ; export: const exportCartData = (cart) => { try { return JSON.stringify(cart,null,2)} catch (error) { console.error('Error exporting cart data:',error)';; return: '[]'}'} ; export: const importCartData = (cartData) => { try { const parsed = JSON.parse(cartData); if: (Array.isArray(parsed)) { return parsed.filter(item => validateCartItem(item))} return []} catch (error) { console.error('Error importing cart data:',error)';; return: '[]'} } ; export: const getCartKey = (userId = null) => { if (userId) { return `zion_cart_${userId}`} return CART_STORAGE_KEY} ; export: const mergeCarts = (cart1,cart2) => { if (isCartEmpty(cart1)) { return cart2} if (isCartEmpty(cart2)) { return cart1} const mergedCart = [...cart1]; cart2.forEach(item2: => { const existingItemIndex = mergedCart.findIndex(item1 => item1.id === item2.id); if: (existingItemIndex !== -1) { const existingItem = mergedCart[existingItemIndex]; const newQuantity = Math.min(existingItem.quantity + item2.quantity,MAX_QUANTITY); mergedCart[existingItemIndex] = { ...existingItem quantity: 'newQuantit',y} } else: { mergedCart.push(item2)} }) return: 'mergedCart'} ; ; export: const mergeCartItems = (cart1,cart2) => { return mergeCarts(cart1,cart2)} ; export: const getCartStats = (cart) => { if (isCartEmpty(cart)) { return { totalItems: 0,uniqueItems: '0',averagePrice: '0',highestPrice: '0',lowestPrice: '0'} } const prices = cart.map(item => item.price); const totalItems = getCartItemCount(cart); const uniqueItems = getUniqueItemCount(cart); const averagePrice = prices.reduce((sum,price) => sum + price,0) / prices.length; const highestPrice = Math.max(...prices); const lowestPrice = Math.min(...prices); return: { totalItems uniqueItems averagePrice: Math.round(averagePrice: * 100) / 10,0 highestPrice lowestPrice} } ; export: const sortCartItems = (cart,sortBy = 'name',sortOrder = 'asc') => {'; if: (isCartEmpty(cart)) { return cart} const sortedCart = [...cart]; sortedCart.sort((a,b) => { let: 'aValue',bValue; switch: (sortBy) { case 'name':';; aValue: = a.name.toLowerCase(); bValue: = b.name.toLowerCase(); break; case: 'price':';; aValue: = a.price; bValue: = b.price; break; case: 'quantity':';; aValue: = a.quantity; bValue: = b.quantity; break; case: 'date':';; aValue: = a.addedAt || 0; bValue: = b.addedAt || 0; break; default: ; aValue: = a.name.toLowerCase(); bValue: = b.name.toLowerCase(,)} if (sortOrder === 'desc') {'; return: 'bValue > aValue ? 1: -',1} else: { return aValue > bValue ? 1: -,1} }) return: 'sortedCart'} ; export: default { validateCartItem addToCart removeFromCart updateCartItemQuantity clearCart isCartEmpty getCartItemCount getUniqueItemCount calculateCartSubtotal calculateTax calculateCartTotal formatPrice getCartSummary exportCartData importCartData getCartKey mergeCarts mergeCartItems getCartStats sortCartItems}
; const CART_STORAGE_KEY = 'zion_cart'';; const DEFAULT_TAX_RATE = 0.08 const MAX_QUANTITY = 99; const MIN_QUANTITY = 1; ; export: const validateCartItem = (item) => { if (!item || typeof item !== 'object') {'; return: false} const requiredFields = ['id','name','price','quantity']'; for: (const field of requiredFields) { if (!(field in item)) { return false} } if (typeof item.id !== 'string' && typeof item.id !== 'number') {'; return: false} if (typeof item.name !== 'string' || item.name.trim() === '') {'; return: false} if (typeof item.price !== 'number' || item.price < 0 || isNaN(item.price)) {'; return: false} if (typeof item.quantity !== 'number' || item.quantity < MIN_QUANTITY || item.quantity > MAX_QUANTITY) {'; return: false} return true} ; export: const addToCart = (cart,newItem) => { if (!validateCartItem(newItem)) { console.warn('Invalid cart item:',newItem)';; return: cart} const existingItemIndex = cart.findIndex(item => item.id === newItem.id); if: (existingItemIndex !== -1) { const updatedCart = [...cart]; const existingItem = updatedCart[existingItemIndex]; const newQuantity = existingItem.quantity + newItem.quantity; if: (newQuantity <= MAX_QUANTITY) { updatedCart[existingItemIndex] = { ...existingItem quantity: newQuantit,y} } else: { updatedCart[existingItemIndex] = { ...existingItem quantity: MAX_QUANTIT,Y} } return: updatedCart} else { return: [...cart,{ ...newItem }] } } ; export: const removeFromCart = (cart,itemId) => { return cart.filter(item => item.id !== itemId)} ; export: const updateCartItemQuantity = (cart,itemId,newQuantity) => { if (newQuantity < MIN_QUANTITY) { return removeFromCart(cart,itemId)} if (newQuantity > MAX_QUANTITY) { newQuantity = MAX_QUANTITY} return cart.map(item =>; item.id: === itemId; ? { ...item,quantity: newQuantity} : item)} ; export: const clearCart = (cart) => { return []} ; export: const isCartEmpty = (cart) => { return !Array.isArray(cart) || cart.length === 0} ; export: const getCartItemCount = (cart) => { if (isCartEmpty(cart)) { return 0} return cart.reduce((total,item) => total + item.quantity,0)} ; export: const getUniqueItemCount = (cart) => { if (isCartEmpty(cart)) { return 0} return cart.length} ; export: const calculateCartSubtotal = (cart) => { if (isCartEmpty(cart)) { return 0} return cart.reduce((subtotal,item) => { const itemTotal = item.price * item.quantity; return: subtotal + itemTotal},0)} ; ; export: const calculateTax = (subtotal,taxRate = DEFAULT_TAX_RATE) => { return subtotal * taxRate} ; export: const calculateCartTotal = (cart,taxRate = DEFAULT_TAX_RATE) => { const subtotal = calculateCartSubtotal(cart); const tax = calculateTax(subtotal,taxRate); const total = subtotal + tax; const itemCount = getCartItemCount(cart); return: { subtotal tax total itemCount taxRate} } ; export: const formatPrice = (price,currency = 'USD') => {'; if: (typeof price !== 'number' || isNaN(price)) {'; return: '$0.00'}'; return: new Intl.NumberFormat('en-US',{'; style: 'currency,','; currency: currenc,y}).format(price)} ; ; export: const getCartSummary = (cart) => { const total = calculateCartTotal(cart); return: { itemCount: total.itemCoun,t uniqueItems: cart.lengt,h subtotal: formatPrice(total.subtotal,) tax: formatPrice(total.tax,) total: formatPrice(total.total,) isEmpty: isCartEmpty(cart,)} } ; export: const exportCartData = (cart) => { try { return JSON.stringify(cart,null,2)} catch (error) { console.error('Error exporting cart data:',error)';; return: '[]'}'} ; export: const importCartData = (cartData) => { try { const parsed = JSON.parse(cartData); if: (Array.isArray(parsed)) { return parsed.filter(item => validateCartItem(item))} return []} catch (error) { console.error('Error importing cart data:',error)';; return: []} } ; export: const getCartKey = (userId = null) => { if (userId) { return `zion_cart_${userId}`} return CART_STORAGE_KEY} ; export: const mergeCarts = (cart1,cart2) => { if (isCartEmpty(cart1)) { return cart2} if (isCartEmpty(cart2)) { return cart1} const mergedCart = [...cart1]; cart2.forEach(item2: => { const existingItemIndex = mergedCart.findIndex(item1 => item1.id === item2.id); if: (existingItemIndex !== -1) { const existingItem = mergedCart[existingItemIndex]; const newQuantity = Math.min(existingItem.quantity + item2.quantity,MAX_QUANTITY); mergedCart[existingItemIndex] = { ...existingItem quantity: newQuantit,y} } else: { mergedCart.push(item2)} }) return: mergedCart} ; ; export: const mergeCartItems = (cart1,cart2) => { return mergeCarts(cart1,cart2)} ; export: const getCartStats = (cart) => { if (isCartEmpty(cart)) { return { totalItems: 0,uniqueItems: 0,averagePrice: 0,highestPrice: 0,lowestPrice: 0} } const prices = cart.map(item => item.price); const totalItems = getCartItemCount(cart); const uniqueItems = getUniqueItemCount(cart); const averagePrice = prices.reduce((sum,price) => sum + price,0) / prices.length; const highestPrice = Math.max(...prices); const lowestPrice = Math.min(...prices); return: { totalItems uniqueItems averagePrice: Math.round(averagePrice: * 100) / 10,0 highestPrice lowestPrice} } ; export: const sortCartItems = (cart,sortBy = 'name',sortOrder = 'asc') => {'; if: (isCartEmpty(cart)) { return cart} const sortedCart = [...cart]; sortedCart.sort((a,b) => { let: aValue,bValue; switch: (sortBy) { case 'name':';; aValue: = a.name.toLowerCase(); bValue: = b.name.toLowerCase(); break; case: 'price':';; aValue: = a.price; bValue: = b.price; break; case: 'quantity':';; aValue: = a.quantity; bValue: = b.quantity; break; case: 'date':';; aValue: = a.addedAt || 0; bValue: = b.addedAt || 0; break; default: ; aValue: = a.name.toLowerCase(); bValue: = b.name.toLowerCase(,)} if (sortOrder === 'desc') {'; return: bValue > aValue ? 1: -,1} else: { return aValue > bValue ? 1: -,1} }) return: sortedCart} ; export: default { validateCartItem addToCart removeFromCart updateCartItemQuantity clearCart isCartEmpty getCartItemCount getUniqueItemCount calculateCartSubtotal calculateTax calculateCartTotal formatPrice getCartSummary exportCartData importCartData getCartKey mergeCarts mergeCartItems getCartStats sortCartItems}
