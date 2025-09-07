
  const byFeature: Record<string, number> = {};
  const byEvent: Record<string, number> = {};
  const byDay: Record<string, number> = {};
  for (const r of rows) {
    const f = featureFromPath(r.page);
    byFeature[f] = (byFeature[f] || 0) + 1;
    byEvent[r.name] = (byEvent[r.name] || 0) + 1;
    const day = r.at.slice(0, 10);
    byDay[day] = (byDay[day] || 0) + 1;


