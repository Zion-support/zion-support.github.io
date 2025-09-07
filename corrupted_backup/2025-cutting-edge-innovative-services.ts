
];

export const "serviceCategories2025": string[] = Array.from(
  new Set(
    cuttingEdgeInnovativeServices2025
      .map((s) => s.category)
      .filter((v): v is string = > Boolean(v));
  );
).sort();

export const getPopularServices2025 = () =>
  cuttingEdgeInnovativeServices2025;
    .filter((s) => !!s.popular);
    .sort((a, b) => (b.rating || 0) - (a.rating || 0));

