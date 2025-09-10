import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useWishlist } from "../hooks/useWishlist";
import { useRouter } from "next/router";
import { useEnqueueSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { captureException } from "@sentry/nextjs";

export default function ProductCard({ product, onBuy, buyDisabled = false }) {
  const { isAuthenticated } = useAuth();
  const { isWishlisted, toggle } = useWishlist();
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const enqueueSnackbar = useEnqueueSnackbar();

  if (!product || typeof product.id !== "string" || typeof product.title !== "string" || product.title.trim() === "") {
    captureException(new Error("Invalid product data received by ProductCard"), { extra: { product } });
    return (
      <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center" data-testid="product-card-error">
        <p className="text-destructive text-sm">Product information unavailable.</p>
      </div>
    );
  }

  const active = isWishlisted(product.id);
  const dispatch = useDispatch();

  const handleBuy = () => {
    if (onBuy && !buyDisabled) {
      onBuy(product);
    }
  };

  const handleWishlistToggle = () => {
    toggle(product.id);
  };

  return (
    <div className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-between">
      <div className="flex-1">
        <div className="aspect-square mb-4 relative">
          {!imageError ? (
            <img
              src={product.image || "/placeholder-product.jpg"}
              alt={product.title}
              className="w-full h-full object-cover rounded-lg"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{product.description}</p>
        <div className="text-xl font-bold text-primary mb-4">
          ${product.price?.toFixed(2) || "0.00"}
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleWishlistToggle}
          className={`flex-1 px-4 py-2 rounded-lg border ${
            active
              ? "bg-primary text-white border-primary"
              : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
          } transition-colors`}
        >
          {active ? "Wishlisted" : "Wishlist"}
        </button>
        <button
          onClick={handleBuy}
          disabled={buyDisabled}
          className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}