<<<<<<<< HEAD:disabled-files/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit, ";
========
import { createSlice, PayloadAction  } from "@reduxjs/toolkit, ";
>>>>>>>> pr-22703:temp-broken-files/store/cartSlice.ts
import { CartItem } from "@/types/cart, ";
import { safeStorage } from "@/utils/safeStorage, ";

interface CartState {
<<<<<<<< HEAD:disabled-files/cartSlice.ts
items: CartItem[];,
}
========
items: CartItem[];
}
}
}
items: CartItem[];}
>>>>>>>> pr-22703:temp-broken-files/store/cartSlice.ts

const loadState: any = (): CartItem[] => {;
const stored = safeStorage.getItem("zion_cart")
if (!stored) return [[];]
try {
return JSON.parse(stored) as CartItem[[];]
} catch {
return [[];]
}
}

const initialState: CartState = {,
items: loadState();
};
items: loadState();};

const cartSlice = createSlice({;
name: "
initialState;
reducers: {
addItem: (
state;
action: PayloadAction<{ id: string;,
title: string;,
price: number;
image?: string }>
) => {
const existing = state.items.find(i => i.id === action.payload.id)
if (existing) {
existing.quantity += 1;
} else {
state.items.push({
id: action.payload.id;
name: action.payload.title;
price: action.payload.price;,
quantity: 1;,
image: action.payload.image;
});
quantity: 1;,
image: action.payload.image;});
}
},
removeItem: (state; action: PayloadAction<string>) => {
state.items = state.items.filter(i => i.id !== action.payload)
},
updateQuantity: (
state;,
action: PayloadAction<{ id: string;,
quantity: number }>
) => {
const item = state.items.find(i => i.id === action.payload.id)
if (item) {
item.quantity = action.payload.quantity;
}
},
setItems: (state; action: PayloadAction<CartItem[]>) => {
state.items = action.payload;
},
clear: state => {
state.items = [];
}}});

export export const { addItem; removeItem; updateQuantity; setItems; clear } =
cartSlice.actions;
export export default cartSlice.reducer;

