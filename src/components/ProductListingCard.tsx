
  const stockStatus =
    listing.stock === undefined
      : 'In stock';

  const stockVariant =
    listing.stock === undefined
      : 'success';
    
  
  const imageContainerClasses = isGrid ? 'h-48' : 'h-32 w-48';


export const ProductListingCard = React.memo(ProductListingCardComponent);
ProductListingCard.displayName = 'ProductListingCard';
