import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";

export default function ProductCard({ product, onBuy, buyDisabled = false }) {
  return (
    <Card className="p-4">
      <div className="space-y-2">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold">${product.price}</span>
          <Button 
            onClick={() => onBuy?.(product)} 
            disabled={buyDisabled}
            size="sm"
          >
            Buy
          </Button>
        </div>
      </div>
    </Card>
  );
}