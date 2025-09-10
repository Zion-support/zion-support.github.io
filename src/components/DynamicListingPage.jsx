import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Slider } from "@/components/ui/slider";

export function DynamicListingPage({ title, description, categorySlug, listings = [], categoryFilters = [], initialPrice = { min: 0, max: 10000 }, _detailBasePath = "/marketplace/listing" }) {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([initialPrice.min, initialPrice.max]);

  useEffect(() => {
    const listingsWithPrice = listings.filter((l) => l.price !== null && l.price !== undefined);
    if (listingsWithPrice.length > 0) {
      const max = Math.max(...listingsWithPrice.map((l) => l.price || 0));
      setPriceRange([0, max]);
    }
  }, [listings]);

  const onValueChange = (values) => setPriceRange(values);

  const filtered = useMemo(() => listings, [listings]);

  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <label htmlFor="price-range">Price Range</label>
        <Slider aria-label="Price range" id="price-range" min={0} max={priceRange[1]} value={priceRange} onValueChange={onValueChange} />
      </div>
      <div aria-label="results-count">{filtered.length}</div>
    </div>
  );
}

export default DynamicListingPage;
