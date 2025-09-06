const stockStatus =;
    product && product.stock === undefined;
      : 'In stock';

  const stockVariant =;
    product && product.stock === undefined;
  const productTitle = product && product.title;

  const imageUrl = Array && Array.isArray(product && product.images) && product && product.images.length > 0 ? product && product.images[0] : null;
  const imageAltText = productTitle;

  const isMobile = useMediaQuery('(max-width: 768px)'),;
  const isTablet = useMediaQuery('(max-width: 1200px)'),;

  const imageSizes = isMobile ? '100vw' : isTablet ? '50vw' : '33vw';

  );
}
;
