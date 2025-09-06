
  const stockStatus =
    product.stock === undefined
      : 'In stock';

  const stockVariant =
    product.stock === undefined
  const productTitle = product.title;


  const imageUrl = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : null;
  const imageAltText = productTitle;


  const isMobile = useMediaQuery('(max-width: 768px)'),
  const isTablet = useMediaQuery('(max-width: 1200px)'),

  const imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw';

<<<<<<< HEAD
=======
  return (
    <div className="relative border rounded-lg bg-card p-4" data-testid="product-card">
      <button
        className="absolute top-2 right-2 p-1 rounded-full bg-background/70"
        onClick={() => toggle(product.id)}
        aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      >
        <Heart className={active ? 'text-red-500 fill-red-500' : 'text-gray-500'} />
      </button>

    <div className="w-full h-40 relative mb-2">
      {imageUrl && !imageError ? (
        <Image
          src={imageUrl}
          alt={imageAltText}
          style={{ objectFit: 'cover' }}
          onError={(e) => handleImageError(e)}
          priority={false}
        />
      ) : (
        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      )}
      {stockStatus && (
        <Badge variant={stockVariant as any} className="absolute top-2 left-2">
          {stockStatus}
        </Badge>
      )}
      {active && (
        <div className="absolute top-10 left-2 p-1 rounded-full bg-background/70">
          <Heart className="text-red-500 fill-red-500" />
        </div>
      )}
    </div>
      <Link href={`/marketplace/listing/${product.id}`}>
        <div className="w-full h-40 relative mb-2 cursor-pointer">
          {imageUrl && !imageError ? (
            <Image
              src={imageUrl}
              alt={imageAltText}
              style={{ objectFit: 'cover' }}
              onError={(e) => handleImageError(e)}
              priority={false}
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">No Image</span>
            </div>
          )}
          {active && (
            <div className="absolute top-2 left-2 p-1 rounded-full bg-background/70">
              <Heart className="text-red-500 fill-red-500" />
            </div>
          )}
        </div>
        <h3 className="font-semibold mb-1">{productTitle}</h3>
      </Link>
      {product.price != null && (
        <p className="text-sm text-muted-foreground">
          {product.currency}
          {product.price}
        </p>
      )}
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
                    if (onBuy) {
                      setIsRedirecting(true);
                      onBuy()
                        .catch(() => {
                          // Error is handled by parent, but we still need to reset loading locally
                        })
                        .finally(() => {
                          setIsRedirecting(false), // Always reset loading state
                          if (onBuyAttemptComplete) {
                            onBuyAttemptComplete(), // Notify parent if it provided this callback
                          }
                        })
                    }
                  }}
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  data-testid="buy-now-button"
                  disabled={!isAuthenticated || buyDisabled || isRedirecting}
                >
                  {isRedirecting ? (
                    <>
                      <span className="animate-spin inline-block mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" role="status" aria-hidden="true"></span>
                      Processing...
                    </>
                  ) : (
                    'Buy Now'
                  )}
                </Button>
              </TooltipTrigger>
              {!isAuthenticated && !isRedirecting && (
                <TooltipContent>Login required</TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
<<<<<<< HEAD
  );

}onError= {;
  (e) => handleImageError (e) ;
}priority= {;
  false ;
}/>) : (<div className="w-full h-full bg-gray-200 flex items-center justify-center" > <span className="text-gray-500" >No Image</span> </div>) ;
}src= {;
  imageUrl ;
}alt= {;
  imageAltText ;
}style= {;
  {';
  objectFit: 'cover' ;

}onError= {;
  (e) => handleImageError (e) ;
}priority= {;
  false ";
}/>) : (<div className="w-full h-full bg-gray-200 flex items-center justify-center" > <span className="text-gray-500" >No Image</span> </div>) ;
}{;
  product.currency ;
}{;
  product.price ;
}</p>) ;
}Add to Cart </Button> {;
  onBuy && (<TooltipProvider> <Tooltip> <TooltipTrigger asChild> <Button onClick={;
  (e) => {;
  e.stopPropagation ();
if (onBuy) {;
  setIsRedirecting (true);
onBuy () > {'";
  isRedirecting ? (<> <span className="animate-spin inline-block mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full" role="status" aria-hidden="true" ></span> Processing... </>) : ('Buy Now') ;
}</Button> </TooltipTrigger> {;
  !isAuthenticated && !isRedirecting && (<TooltipContent>Login required</TooltipContent>) ;
}</Tooltip> </TooltipProvider>) ;
}</div> </div>) ;
}'"
=======

<<<<<<< HEAD


  const stockStatus =
    product.stock === undefined
<<<<<<< HEAD
      : 'In stock';

  const stockVariant =
    product.stock === undefined
<<<<<<< HEAD
  const productTitle = product.title;

<<<<<<< HEAD

  const imageUrl = Array.isArray(product.images) && product.images.length > 0 ? product.images[0] : null;
  const imageAltText = productTitle;

<<<<<<< HEAD

  const isMobile = useMediaQuery('(max-width: 768px)'),
  const isTablet = useMediaQuery('(max-width: 1200px)'),

  const imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw',


>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
