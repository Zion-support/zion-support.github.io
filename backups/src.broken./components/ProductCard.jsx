export default function ProductCard(_{ product, _onBuy, _buyDisabled = false }) {
  const { isAuthenticated } = useAuth();
  const { isWishlisted, toggle } = useWishlist();
  const [imageError, setImageError] = useState(false);
  const router = useRouter();
  const enqueueSnackbar = useEnqueueSnackbar();

  if (
    !product ||
    typeof product.id !== "string" ||
    typeof product.title !== "string" ||
    product.title.trim() === ""
  ) {
    captureException(
      new Error("Invalid product data received by ProductCard"),
      {
        extra: { product }
      }
    );
    return (
      <div 
        className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-center items-center"
        data-testid="product-card-error"
      >
        <p className="text-destructive text-sm">
          Product information unavailable.
        </p>
      </div>
    );
  }

  const active = isWishlisted(product.id);
  const dispatch = useDispatch();
  const productTitle = product.title;
  const imageUrl = product.image;

  const addToCart = () => {
    if (!isAuthenticated) {
      enqueueSnackbar("Please log in to add items to your cart", { variant: "warning" });
      return;
    }

    dispatch(addItem({
      id: product.id,
      title: productTitle,
      price: product.price ?? 0,
      image: imageUrl || null,
      quantity: 1
    }));

    enqueueSnackbar("Item added to cart", { variant: "success" });
  };

  const handleWishlistToggle = (e) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      enqueueSnackbar("Please log in to add items to your wishlist", { variant: "warning" });
      return;
    }
    toggle(product.id);
  };

  const handleImageError = () => {
    if (!imageError) {
      setImageError(true);
    }
  };

  return (
    <div 
      className="relative border rounded-lg bg-card p-4 text-center h-full flex flex-col justify-between cursor-pointer hover:shadow-lg transition-shadow"
      data-testid="product-card"
    >
      <button
        className="absolute top-2 right-2 p-1 rounded-full bg-background/70 z-10"
        onClick={handleWishlistToggle}
        aria-label={active ? "Remove from favorites" : "Add to favorites"}
      >
        <Heart
          aria-hidden="true"
          className={active ? "text-red-500 fill-red-500" : "text-gray-500"}
        />
      </button>

      <div className="flex-1">
        <div className="relative w-full h-40 mb-4">
          {imageUrl && !imageError ? (
            <Image
              src={imageUrl}
              alt={productTitle}
              fill
              style={{ objectFit: 'cover' }}
              onError={handleImageError}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center rounded-md">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
        </div>

        <Link href={`/marketplace/listing/${product.id}`}>
          <h3 className="font-semibold mb-1 line-clamp-2">{productTitle}</h3>
        </Link>

        {product.price != null && (
          <p className="text-sm text-muted-foreground">
            {product.currency} {product.price}
          </p>
        )}
      </div>

      <div className="mt-2 flex gap-2">
        <Button size="sm" className="flex-1" onClick={addToCart}>
          Add to Cart
        </Button>
        {onBuy && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onBuy();
                  }}
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  data-testid="buy-now-button"
                  disabled={!isAuthenticated || buyDisabled}
                >
                  Buy Now
                </Button>
              </TooltipTrigger>
              {!isAuthenticated && (
                <TooltipContent>
                  <p>Login required</p>
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
}

export { ProductCard };

export default function ProductCard(_{ product, _onBuy, _buyDisabled = false }) {
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