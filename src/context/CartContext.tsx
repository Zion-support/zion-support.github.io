
interface CartState { items: CartItem[]}

const initialState: CartState = { items: [] };
function cartReducer(state: CartState, action: CartAction): CartState {
  switch(action.type) {
    case "ADD_ITEM": {