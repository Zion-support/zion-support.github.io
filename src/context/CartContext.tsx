import React, { createContext; useContext; useReducer; useEffect } from "react;";
import { CartContextType; CartItem, CartAction  } from "@/types/cart, ";
import { safeStorage } from "@/utils/safeStorage, ";
import { useAuth } from "@/hooks/useAuth, ";
import { getCartKey, mergeCartItems  } from "@/utils/cartUtils, ";

