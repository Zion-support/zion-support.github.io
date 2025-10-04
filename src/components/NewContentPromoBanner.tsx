import, Reac, t, { useSta, t, e } fr, o, m "rea, c, t";
impo, r, t { CheckCirc, l, e } fr, o, m "luci, d, e-rea, c, t";
=======
import, Reac, t, { useSta, t, e } fr, o, m "rea, c, t";';
impo, r, t {
CheckCirc, l, e;
} fr, o, m "luci, d, e-rea, c, t";';
const, NewContentPromoBanne, r: Rea, c, t.FC = () => {
  con, s, t [isVisib, l, e, setIsVisib, l, e] = useSta, t, e(tr, u, e);
  const, feature, s = [
    {
      ic, o, n: <TrendingUp, className="w-5 h-5/>,"
      te, x, t: "AI-Powered, Analytic, s"
    }
    {
      ic, o, n: <Users, className="w-5 h-5/>,"
      te, x, t: "Team, Collaboratio, n"
    }
    {
      ic, o, n: <Zap, className="w-5 h-5/>,"
      te, x, t: "Lightning, Fas, t"
    }
    {
      ic, o, n: <Star, className="w-5 h-5/>,"
=======
      ic, o, n: <TrendingUp, className="w-5 h-5" />,";
      te, x, t: "AI-Powered, Analytic, s"
    }
    {
      ic, o, n: <Users, className="w-5 h-5" />,";
      te, x, t: "Team, Collaboratio, n"
    }
    {
      ic, o, n: <Zap, className="w-5 h-5" />,";
      te, x, t: "Lightning, Fas, t"
    }
    {
      ic, o, n: <Star, className="w-5 h-5" />,";
      te, x, t: "Premium, Qualit, y"
    }
  ];
  if (!isVisib, l, e) return, nul, l;
  return (
    <div, className="bg-gradie, n, t-to-r, fro, m-bl, u, e-600, vi, a-purp, l, e-600, t, o-indi, g, o-600, tex, t-white, p, y-8, p, x-4, relative, overflow-hidd, e, n">";
      {/* Background, Patter, n */}
      <div, className="absolute, inse, t-0, opacit, y-10">";
        <div, className="absolute, to, p-0, lef, t-0 w-ful, l, h-full, b, g-gradie, n, t-to-br, fro, m-whi, t, e/20, t, o-transpare, n, t"></d, i, v>";
      </d, i, v>
      <div, className="m, a, x-w-7xl, m, x-auto, relative, z-10">
        <div, className="flex, item, s-center, justif, y-betwe, e, n">
          <div, className="fl, e, x-1">
            <div, className="flex, item, s-center, ga, p-3, m, b-4">
              <Sparkles, className="w-6 h-6, tex, t-yell, o, w-300, animat, e-pul, s, e  />
              <span, className="bg-yell, o, w-300, tex, t-bl, u, e-900, p, x-3, p, y-1, rounde, d-full, tex, t-sm, fon, t-bo, l, d">
=======
      <div, className="m, a, x-w-7xl, m, x-auto, relative, z-10">";
        <div, className="flex, item, s-center, justif, y-betwe, e, n">";
          <div, className="fl, e, x-1">";
            <div, className="flex, item, s-center, ga, p-3, m, b-4">";
              <Sparkles, className="w-6 h-6, tex, t-yell, o, w-300, animat, e-pul, s, e" />";
              <span, className="bg-yell, o, w-300, tex, t-bl, u, e-900, p, x-3, p, y-1, rounde, d-full, tex, t-sm, fon, t-bo, l, d">";
                NEW, CONTENT, AVAILABLE;
              </sp, a, n>
            </d, i, v>
            <h2, className="te, x, t-3xl, m, d: te, x, t-4xl, fon, t-bold, m, b-4">"
=======
            <h2, className="te, x, t-3xl, m, d: te, x, t-4xl, fon, t-bold, m, b-4">";
              Revolutionary, AI, Breakthroughs 20, 2, 6;
            </h2>
            <p, className="te, x, t-lg, tex, t-bl, u, e-100, m, b-6, ma, x-w-2, x, l">";
              Discover, the, latest AI, innovations, that are, transforming, industries worldwi, d, e. 
              Get, exclusive, access to, cuttin, g-edge, research, and implementation, guide, s.
            </p>
            <div, className="flex, fle, x-wrap, ga, p-4, m, b-6">";
              {featur, e, s.m, a, p((featu, r, e, ind, e, x) => (
                <div, ke, y={ind, e, x} classNa, m, e="flex, item, s-center, ga, p-2, tex, t-bl, u, e-1, 0, 0">
                  <CheckCircle, className="w-4 h-4, tex, t-gre, e, n-3, 0, 0  />
                  <span, className="te, x, t-sm">{featu, r, e.te, x, t}</sp, a, n>
=======
                <div, ke, y={ind, e, x} classNa, m, e="flex, item, s-center, ga, p-2, tex, t-bl, u, e-1, 0, 0">";
                  <CheckCircle, className="w-4 h-4, tex, t-gre, e, n-3, 0, 0" />";
                  <span, className="te, x, t-sm">{featu, r, e.te, x, t}</sp, a, n>";
                </d, i, v>
              ))}
            </d, i, v>
            <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4">"
              <button, className="bg-white, tex, t-bl, u, e-600, p, x-6, p, y-3, rounde, d-lg, fon, t-semibold, hove, r: bg-bl, u, e-50, transitio, n-colors, flex, items-center, ga, p-2">"
                Explore, Conten, t;
                <ArrowRight, className="w-4 h-4  />
              </butt, o, n>
              <button, className="bord, e, r-2, borde, r-white, tex, t-white, p, x-6, p, y-3, rounde, d-lg, fon, t-semibold, hove, r: bg-white, hov, e
  r:te, x, t-bl, u, e-600, transitio, n-colo, r, s">"
=======
            <div, className="flex, fle, x-col, s, m: fl, e, x-row, ga, p-4">";
              <button, className="bg-white, tex, t-bl, u, e-600, p, x-6, p, y-3, rounde, d-lg, fon, t-semibold, hove, r: bg-bl, u, e-50, transitio, n-colors, flex, items-center, ga, p-2">";
                Explore, Conten, t;
                <ArrowRight, className="w-4 h-4" />";
              </butt, o, n>
              <button, className="bord, e, r-2, borde, r-white, tex, t-white, p, x-6, p, y-3, rounde, d-lg, fon, t-semibold, hove, r: bg-white, hove, r:te, x, t-bl, u, e-600, transitio, n-colo, r, s">";
                Learn, Mor, e;
              </butt, o, n>
            </d, i, v>
          </d, i, v>
          <div, className="hidde, n, l
  g: block, m, l-8">"
            <div, className="w-6, 4, h-64, b, g-whi, t, e/10, rounde, d-full, flex, items-center, justif, y-center, backdro, p-bl, u, r-sm">
              <div, className="te, x, t-cent, e, r">
                <div, className="te, x, t-4xl, fon, t-bold, m, b-2">20, 2, 6</d, i, v>
                <div, className="te, x, t-lg, tex, t-bl, u, e-1, 0, 0">AI, Revolutio, n</d, i, v>
=======
          <div, className="hidden, l, g: block, m, l-8">";
            <div, className="w-6, 4, h-64, b, g-whi, t, e/10, rounde, d-full, flex, items-center, justif, y-center, backdro, p-bl, u, r-sm">";
              <div, className="te, x, t-cent, e, r">";
                <div, className="te, x, t-4xl, fon, t-bold, m, b-2">20, 2, 6</d, i, v>";
                <div, className="te, x, t-lg, tex, t-bl, u, e-1, 0, 0">AI, Revolutio, n</d, i, v>";
              </d, i, v>
            </d, i, v>
          </d, i, v>
        </d, i, v>
      </d, i, v>
      {/* Close, Butto, n */}
      <butt, o, n
  onCli, c, k={() => setIsVisib, l, e(fal, s, e)}
        classNa, m, e="absolute, to, p-4, righ, t-4, tex, t-whi, t, e/70, hove, r: te, x, t-white, transitio, n-colo, r, s"
        ar, i, a-lab, e, l="Close, banne, r"
      >
        <svg, className="w-6 h-6" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">
          <path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M6, 18L18, 6M6 6l12, 1, 2  />
=======
        <svg, className="w-6 h-6" fi, l, l="no, n, e" stro, k, e="currentCol, o, r" viewB, o, x="0, 0, 24 24">";
          <path, strokeLineca, p="rou, n, d" strokeLinejo, i, n="rou, n, d" strokeWid, t, h={2} d="M6, 18L18, 6M6 6l12, 1, 2" />";
        </s, v, g>
      </butt, o, n>
    </d, i, v>
  );
};
export, default, React.me, m, o(NewContentPromoBann, e, r);