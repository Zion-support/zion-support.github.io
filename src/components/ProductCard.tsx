
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

=======
  )
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
