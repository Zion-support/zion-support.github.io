  const stock_status =;
    product.stock === undefined;
      : 'In stock';
  const stock_variant =;
    product.stock === undefined;
  const product_title = product.title;
  const image_url = Array.is_array (product.images) && product.images.length > 0 ? product.images[0] : null;
  const imageAltText = product_title;
  const is_mobile = useMediaQuery ('(max - width: 768px)'),
  const is_tablet = useMediaQuery ('(max - width: 1200px)'),
  const image_sizes = is_mobile ? '100vw' : is_tablet ? '50vw' : '33vw');
}
  );
}