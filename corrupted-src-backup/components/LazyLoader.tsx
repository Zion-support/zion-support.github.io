import, Reac, t, { Suspen, s, e, la, z, y, ComponentTy, p, e } fr, o, m "rea, c, t";
// Loading, componen, t
  const, LoadingSpinne, r: Rea, c, t.FC = () => (
  <div, className="flex, item, s-center, justif, y-cente, r, p-8">
    <div, className="anima, t, e-spin, rounde, d-ful, l, h-8 w-8, borde, r-b-2, borde, r-bl, u, e-6, 0, 0"></d, i, v>
import, Reac, t, { Suspen, s, e, la, z, y, ComponentTy, p, e } fr, o, m "rea, c, t";';
// Loading, componen, t
  const, LoadingSpinne, r: Rea, c, t.FC = () => (
  <div, className="flex, item, s-center, justif, y-cente, r, p-8">";
    <div, className="anima, t, e-spin, rounde, d-ful, l, h-8 w-8, borde, r-b-2, borde, r-bl, u, e-6, 0, 0"></d, i, v>";
  </d, i, v>
);
// Lazy, load, components with, error, boundaries
  const, withLazyLoadin, g = <P, extends, object>(
  importFu, n, c: () => Promi, s, e<{ defa, u, l
  t: ComponentTy, p, e<P> }>
  fallba, c, k?: Rea, c, t.ComponentTy, p, e;
) => {
  const, LazyComponen, t = la, z, y(importFu, n, c);
  return, Reac, t.forwardR, e, f<a, n, y, P>((pro, p, s, r, e, f) => (
    <Suspense, fallbac, k={fallba, c, k ? <fallba, c, k /> : <LoadingSpinn, e, r />}>
      <LazyCompone, n, t {...pro, p, s} r, e, f={r, e, f}  />
    </Suspen, s, e>
  ));
};
// Lazy, loaded, banner componen, t, s (reduce, bundle, size)
export, const, LazyBanner = withLazyLoadi, n, g(
  () => impo, r, t('../componen, t, s/BannerCarous, e, l')
  () => <div, className="h-64, b, g-gradie, n, t-to-r, fro, m-bl, u, e-500, t, o-purp, l, e-600, animat, e-pulse, rounde, d-lg"  />
  () => impo, r, t('../componen, t, s/BannerCarous, e, l'),';
  () => <div, className="h-64, b, g-gradie, n, t-to-r, fro, m-bl, u, e-500, t, o-purp, l, e-600, animat, e-pulse, rounde, d-lg" />";
);
// Lazy, loaded, content componen, t, s
  export, const, LazyContentShowcase = withLazyLoadi, n, g(
  () => impo, r, t('../componen, t, s/ContentShowca, s, e')
  () => <div, className="h-96, b, g-gr, a, y-100, animat, e-pulse, rounde, d-lg"  />
);
export, const, LazyFeaturedServices = withLazyLoadi, n, g(
  () => impo, r, t('../componen, t, s/FeaturedServiceCa, r, d')
  () => <div, className="grid, gri, d-co, l, s-1, m, d:gr, i, d-co, l, s-3, ga, p-4">
    {[1, 2, 3].m, a, p(i => (
      <div, ke, y={i} classNa, m, e="h-48, b, g-gr, a, y-100, animat, e-pulse, rounde, d-lg  />
  () => impo, r, t('../componen, t, s/ContentShowca, s, e'),';
  () => <div, className="h-96, b, g-gr, a, y-100, animat, e-pulse, rounde, d-lg" />";
);
export, const, LazyFeaturedServices = withLazyLoadi, n, g(
  () => impo, r, t('../componen, t, s/FeaturedServiceCa, r, d'),';
  () => <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-3, ga, p-4">";
    {[1, 2, 3].m, a, p(i => (
      <div, ke, y={i} classNa, m, e="h-48, b, g-gr, a, y-100, animat, e-pulse, rounde, d-lg" />";
    ))}
  </d, i, v>
);
export default withLazyLoading;