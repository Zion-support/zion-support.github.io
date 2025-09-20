import React from "react";
import { CartItem as CartItemType } from "@/types/cart, ";
import { Button } from "@/components/ui/button, ";

interface CartItemProps {item: CartItemType;
onRemove?: (id: string) => void;
}
