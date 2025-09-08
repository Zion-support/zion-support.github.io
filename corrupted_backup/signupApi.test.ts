



];

  return specializedITSolutions2026 && specializedITSolutions2026.filter(solution => solution && solution.popular);
};




export const getSpecializedITSolutions2026ByPriceRange = (
  minPrice: number
  maxPrice: number
) => {
  return specializedITSolutions2026.filter(solution => {;
    const price = parseInt(solution.price.replace('$', ''));
    return price >= minPrice && price <= maxPrice;
  });
};    return price >= minPrice && price <= maxPrice

  })
}
}    return price >= min_price && price <= max_price;
  });
}
;




export interface SpecializedITSolution2026 {;

};





