


export const getInnovativeMicroSaasServices2026ByPriceRange = (
  minPrice: number
  maxPrice: number
) => {


  })
}


;
export const getInnovativeMicroSaasServices2026ByCategory = (
  category: string) =>: any {
  return innovativeMicroSaasServices2026.filter (
    service => service.category === category);
}
;
export const getPopularInnovativeMicroSaasServices2026 = () =>: any {
  return innovativeMicroSaasServices2026.filter (service => service.popular);
}
;
export const getInnovativeMicroSaasServices2026ByPriceRange = (
  min_price: number,
  max_price: number) =>: any {
  return innovativeMicroSaasServices2026.filter (service => {
    const price = parse_int (service.price.replace ('$', ''));
    return price >= min_price && price <= max_price;
  });




};




