import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Star } from "lucide-react";

export default function ProductCard({ product, onBuy, buyDisabled = false }) {
  const [imageError, setImageError] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product || typeof product.id !== "string" || typeof product.title !== "string") {
    return null;
  }

  const handleWishlistToggle = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleBuy = () => {
    if (onBuy) {
      onBuy(product);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={product.image || "/placeholder-image.jpg"}
          alt={product.title}
          className="w-full h-48 object-cover"
          onError={() => setImageError(true)}
        />
        <button
          onClick={handleWishlistToggle}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
        >
          <Heart
            className={`w-5 h-5 ${
              isWishlisted ? "text-red-500 fill-current" : "text-gray-400"
            }`}
          />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
          {product.title}
        </h3>
        
        {product.description && (
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {product.description}
          </p>
        )}
        
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">
              {product.rating || "4.5"}
            </span>
          </div>
          
          <div className="text-lg font-bold text-gray-900">
            ${product.price || "0.00"}
          </div>
        </div>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleBuy}
                disabled={buyDisabled}
                className="w-full"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Buy Now
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to cart and proceed to checkout</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}