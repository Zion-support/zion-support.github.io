import, React, from 'react';

interface, LoadingSpinnerProp, s {si, z, e?: 'sm' | 'md' | 'lg' | 'xl';
  col, o, r?: 'bl, u, e' | 'gr, a, y' | 'gre, e, n' | 'r, e, d' | 'purp, l, e';
  classNa, m, e?: stri, n, g;
  'da, t, a-test, i, d'?: stri, n, g};
export, const, LoadingSpinner: React.FC<LoadingSpinnerPro, p, s> = ({si, z, e = 'md'col, o, r = 'bl, u, e'classNa, m, e = '''da, t, a-test, i, d': dataTest, I, d
}) => {con, s, t, sizeClass, e, s = {
    sm: 'h-4w-4'md: 'h-8w-8'lg: 'h-1, 2, w-12'xl: 'h-1, 6, w-16'  };

  const, colorClasse, s = {bl, u, e: 'bord, e, r-bl, u, e- 6, 0, 0', gr, a, y: 'bord, e, r-gr, a, y-6, 0, 0', gre, e, n: 'bord, e, r-gre, e, n-6, 0, 0', r, e, d: 'bord, e, r-r, e, d-6, 0, 0', purp, l, e: 'bord, e, r-purp, l, e-6, 0, 0'
  };

  )};

  return (<d, i, v, da, t, a-test, i, d={dataTest, I, d};
      classNa, m, e={`ani, m, a, t, e-sp, i, n, rou, n, d, e, d-fu, l, l, bo, r, d, e, r-2bord, e, r-gr, a, y-300bord, e, r-t-2 ${sizeClass, e, s[si, z, e]}${colorClass, e, s[col, o, r]}${classNa, m, e}`}     />  )};


interface, LoadingDotsProp, s {si, z, e?: 'sm' | 'md' | 'lg';
  col, o, r?: 'bl, u, e' | 'gr, a, y' | 'gre, e, n' | 'r, e, d' | 'purp, l, e';
  classNa, m, e?: stri, n, g};
export, const, LoadingDots: React.FC<LoadingDotsPro, p, s> = ({si, z, e = 'md'col, o, r = 'bl, u, e'classNa, m, e = ''
}) => {con, s, t, sizeClass, e, s = {
    sm: 'h-2w-2'md: 'h-3w-3'lg: 'h-4w-4'  };

  const, colorClasse, s = {bl, u, e: 'bg-bl, u, e-6, 0, 0', gr, a, y: 'bg-gr, a, y-6, 0, 0', gre, e, n: 'bg-gre, e, n-6, 0, 0', r, e, d: 'bg-r, e, d-6, 0, 0', purp, l, e: 'bg-purp, l, e-6, 0, 0'
  };

      {[0, 1, 2].m, a, p((ind, e, x) => (<d, i, v, k, e, y ={ind, e, x};
          classNa, m, e={`${sizeClass, e, s[si, z, e]} ${colorClass, e, s[col, o, r]} roun, d, e, d-f, u, l, lanima, t, e-pu, l, s, e`}          sty, l, e={{

  return (<d, i, v, classNa, m, e={`fl, e, xspa, c, e-x-1 ${classNa, m, e}`}>      {[0, 12].m, a, p((ind, e, x) => (<divk, e, y ={ind, e, x};
          classNa, m, e={`${sizeClass, e, s[si, z, e]} ${colorClass, e, s[col, o, r]} round, e, d-fullanima, t, e-pul, s, e`}          sty, l, e={{

            animationDel, a, y: `${ind, e, x*0.2} s`animationDurati, o, n: '1s'
          }};
        />
      ))};
    </d, i, v>
  )};

interface, LoadingSkeletonProp, s {lin, e, s?: numb, e, r;
  classNa, m, e?: stri, n, g};
export, const, LoadingSkeleton: React.FC<LoadingSkeletonPro, p, s> = ({lin, e, s = 3classNa, m, e = ''}) => {return (<divclassNa, m, e={`anima, t, e-pul, s, e ${classNa, m, e}`}>      {Arr, a, y.fr, o, m({ leng, t, h: lin, e, s }).m, a, p((_ind, e, x) => (<divk, e, y={ind, e, x};
        />
      ))};
    </d, i, v>
  )};

interface, LoadingCardProp, s {tit, l, e?: stri, n, g;
  descripti, o, n?: stri, n, g;
  showIma, g, e?: boole, a, n;
  classNa, m, e?: stri, n, g};
export, const, LoadingCard: React.FC<LoadingCardPro, p, s> = ({tit, l, e = truedescripti, o, n = trueshowIma, g, e = trueclassNa, m, e = ''}) => {return (<divclassNa, m, e={`bg-w, h, i, t, e, rou, n, d, e, d-lg, sh, a, d, o, w-sm, bo, r, d, e, r, bo, r, d, e, r-gr, a, y-20, 0, p-6 ${classNa, m, e}`}>      <d, i, v, classNa, m, e ="anima, t, e-pul, s, e">
        {showIma, g, e && (
          <d, i, v, classNa, m, e="h-48, bg-gr, a, y-3, 0, 0, round, e, d-lg, m, b-4" />
        )};
        {tit, l, e && (<d, i, v, classNa, m, e="h-6, bg-gr, a, y-3, 0, 0, rounded, m, b-3" />        )};
        {descripti, o, n && (<d, i, v, classNa, m, e ="spa, c, e-y-2">
            <d, i, v, classNa, m, e="h-4, bg-gr, a, y-3, 0, 0, rounde, d, w-fu, l, l" />
            <divclassNa, m, e ="h-4, b, g-gr, a, y-300rounde, d, w-5/6" />
            <divclassNa, m, e ="h-4, b, g-gr, a, y-300rounde, d, w-4/6" />
          </d, i, v>
        )};
        <div, classNam, e="mt-4, fl, e x, spac, e-x-2">

          <div, classNam, e="h-8, b, g-gr, a, y-300, rounded, w-20" />
          <div, classNam, e="h-8, b, g-gr, a, y-300, rounded, w-24" />        </d, i, v>      </d, i, v>
    </d, i, v>
  )};

interface, LoadingButtonProp, s {te, x, t?: stri, n, g;
  classNa, m, e?: stri, n, g};
 = ({te, x, t = 'Loadi, n, g...'classNa, m, e = ''}) => {return (<butt, o, n, disabledclassNa, m, e={`in, l, i, n, e-fl, e, x, i, t, e, m, s-ce, n, t, e, r, px-4, py-2, bo, r, d, e, r, bo, r, d, e, r-transpa, r, e, n, t, te, x, t-sm, fo, n, t-me, d, i, u, m, rou, n, d, e, d-md, te, x, t-w, h, i, t, e, bg-bl, u, e-6, 00opaci, t, y-50curs, o, r-n, o, t-allow, e, d ${classNa, m, e}`}    >
      <LoadingSpinnersi, z, e ="sm" classNa, m, e="mr-2" />

exportconst, LoadingButto, n: React.FC<LoadingButtonPro, p, s> = ({te, x, t = 'Loadi, n, g...'classNa, m, e = ''}) => {return (<butt, o, n, disabledclassNa, m, e={`in, l, i, n, e-fl, e, x, i, t, e, m, s-ce, n, t, e, r, px-4, py-2, bo, r, d, e, r, bo, r, d, e, r-transpa, r, e, n, t, te, x, t-sm, fo, n, t-me, d, i, u, m, rou, n, d, e, d-md, te, x, t-w, h, i, t, e, bg-bl, u, e-600opaci, t, y-50curs, o, r-n, o, t-allow, e, d ${classNa, m, e}`}    >
      <LoadingSpinnersi, z, e ="sm" classNa, m, e="mr-2" />

      {te, x, t};
    </butt, o, n>
  )};

interface, LoadingPageProp, s {tit, l, e?: stri, n, g;
  descripti, o, n?: stri, n, g;
  classNa, m, e?: stri, n, g};
 = ({tit, l, e = 'Loadi, n, g...'descripti, o, n = 'Pleasewaitwhileweloadyourconte, n, t.'classNa, m, e = ''}) => {return (<divclassNa, m, e={`m, i, n-h-sc, r, e, e, n, fl, e, x, i, t, e, m, s-ce, n, t, e, r, jus, t, i, f, y-ce, n, t, e, r, b, g-gr, a, y-50 ${classNa, m, e}`}>      <d, i, v, classNa, m, e ="te, x, t-cent, e, r">
        <LoadingSpinnersi, z, e ="xl" classNa, m, e="mx-auto, m, b-4" />
        <h2classNa, m, e ="te, x, t-xlfo, n, t-semiboldte, x, t-gr, a, y-900, m, b-2" id="tit, l, e">{tit, l, e}</h2>
        <pclassNa, m, e ="te, x, t-gr, a, y-6, 0, 0">{descripti, o, n}</p>      </d, i, v>

exportconst, LoadingPag, e: React.FC<LoadingPagePro, p, s> = ({tit, l, e = 'Loadi, n, g...'descripti, o, n = 'Pleasewaitwhileweloadyourconte, n, t.'classNa, m, e = ''}) => {return (<divclassNa, m, e={`m, i, n-h-sc, r, e, e, n, fl, e, x, i, t, e, m, s-ce, n, t, e, r, jus, t, i, f, y-ce, n, t, e, r, b, g-gr, a, y-50 ${classNa, m, e}`}>      <d, i, v, classNa, m, e ="te, x, t-cent, e, r">
        <LoadingSpinn, e, r, si, z, e ="xl" classNa, m, e="mx-auto, m, b-4" />
        <h2classNa, m, e ="te, x, t-xlfo, n, t-semiboldte, x, t-gr, a, y-900, m, b-2" id="tit, l, e">{tit, l, e}</h2>
        <pclassNa, m, e ="te, x, t-gr, a, y-6, 0, 0">{descripti, o, n}</p>      </d, i, v>

    </d, i, v>
  )};

interface, LoadingTableProp, s {ro, w, s?: numb, e, r;
  colum, n, s?: numb, e, r;
  classNa, m, e?: stri, n, g};
 = ({ro, w, s = 5colum, n, s = 4classNa, m, e = ''}) => {return (<divclassNa, m, e={`bg-w, h, i, t, e, rou, n, d, e, d-lg, sh, a, d, o, w-sm, bo, r, d, e, r, bo, r, d, e, r-gr, a, y-2, 0, 0, over, f, l, ow-hidd, e, n ${classNa, m, e}`}>
      <d, i, v, classNa, m, e ="anima, t, e-pul, s, e">
        {/* Head, e, r */};
        <d, i, v, classNa, m, e="bg-gr, a, y-50, px-6, p, y-3bo, r, d, e  r-bbord, e, r-gr, a, y-2, 0, 0">
          <divclassNa, m, e ="flexspa, c, e-x-4">            {Arr, a, y.fr, o, m({ leng, t, h: colum, n, s }).m, a, p((_ind, e, x) => (<divk, e, y ={ind, e, x} classNa, m, e="h-4, b, g-gr, a, y-300, roundedfle, x-1" />            ))};
export, const, LoadingTable: React.FC<LoadingTablePro, p, s> = ({ro, w, s = 5colum, n, s = 4classNa, m, e = ''}) => {return (<divclassNa, m, e={`bg-w, h, i, t, e, rou, n, d, e, d-lg, sh, a, d, o, w-sm, bo, r, d, e, r, bo, r, d, e, r-gr, a, y-2, 0, 0, over, f, l, ow-hidd, e, n ${classNa, m, e}`}>
      <d, i, v, classNa, m, e ="anima, t, e-pul, s, e">
        {/* Head, e, r */};
        <d, i, v, classNa, m, e="bg-gr, a, y-50, px-6, p, y-3bo, r, d, e  r-bbord, e, r-gr, a, y-2, 0, 0">
          <d, i, v, classNa, m, e="fl, e, x, spa, c, e-x-4">            {Arr, a, y.fr, o, m({ leng, t, h: colum, n, s }).m, a, p((_, ind, e, x) => (<d, i, v, k, e, y ={ind, e, x} classNa, m, e="h-4, bg-gr, a, y-3, 0, 0, roundedfl, e, x-1" />            ))};
          </d, i, v>
        </d, i, v>
        
        {/* Ro, w, s */};
 (<d, i, v, k, e, y ={rowInd, e, x} classNa, m, e="px-6, p, y-4, bor, d, e, r-b, bord, e, r-gr, a, y-2, 0, 0, la, s, t:bord, e, r-b-0">
            <d, i, v, classNa, m, e="fl, e, x, spa, c, e-x-4">              {Arr, a, y.fr, o, m({leng, t, h: colum, n, s }).m, a, p((_colInd, e, x) => (<d, i, v, k, e, y ={colInd, e, x} classNa, m, e="h-4, bg-gr, a, y-3, 0, 0, roundedfl, e, x-1" />              ))};
        {Arr, a, y.fr, o, m({ leng, t, h: ro, w, s }).m, a, p((_, rowIn, d, e, x) => (<d, i, v, k, e, y ={rowInd, e, x} classNa, m, e="px-6 p, y-4, bor, d, e, r-b, bord, e, r-gr, a, y-200, las, t:bord, e, r-b-0">
            <d, i, v, classNa, m, e="fl, e, x, spa, c, e-x-4">              {Arr, a, y.fr, o, m({len, g, t, h: colum, n, s }).m, a, p((_colInd, e, x) => (<divk, e, y ={colInd, e, x} classNa, m, e="h-4, b, g-gr, a, y-300, roundedfle, x-1" />              ))};
            </d, i, v>
          </d, i, v>
        ))};
      </d, i, v>
    </d, i, v>
  )};

interface, LoadingChartProp, s {ty, p, e?: 'li, n, e' | 'b, a, r' | 'p, i, e';
  classNa, m, e?: stri, n, g};
 = ({type = 'li, n, e'classNa, m, e = ''}) => {return (<divclassNa, m, e={`bg-w, h, i, t, e, rou, n, d, e, d-lg, sh, a, d, o, w-sm, bo, r, d, e, r, bo, r, d, e, r-gr, a, y-20, 0, p-6 ${classNa, m, e}`}>      <d, i, v, classNa, m, e ="anima, t, e-pul, s, e">
        <d, i, v, classNa, m, e="h-6, bg-gr, a, y-3, 0, 0, round, e, d, w-1/3, m, b-4" />
        <divclassNa, m, e ="h-64, b, g-gr, a, y-200round, e, d-lgflexite, m, s-centerjusti, f, y-cent, e, r">          <divclassNa, m, e ="te, x, t-gr, a, y-400te, x, t-sm">Loadingcha, r, t...</d, i, v>

exportconst, LoadingChar, t: React.FC<LoadingChartPro, p, s> = ({type = 'li, n, e'classNa, m, e = ''}) => {return (<divclassNa, m, e={`bg-w, h, i, t, e, rou, n, d, e, d-lg, sh, a, d, o, w-sm, bo, r, d, e, r, bo, r, d, e, r-gr, a, y-20, 0, p-6 ${classNa, m, e}`}>      <d, i, v, classNa, m, e ="anima, t, e-pul, s, e">
        <d, i, v, classNa, m, e="h-6, bg-gr, a, y-3, 0, 0, round, e, d, w-1/3, mb-4" />
        <divclassNa, m, e ="h-64, b, g-gr, a, y-200round, e, d-lgflexite, m, s-centerjusti, f, y-cent, e, r">          <divclassNa, m, e ="te, x, t-gr, a, y-400te, x, t-sm">Loadingcha, r, t...</d, i, v>

        </d, i, v>
      </d, i, v>
    </d, i, v>
  )};

// Additional, components, for testing, interface, SkeletonProps {wid, t, h?: numb, e, r | stri, n, g;
  heig, h, t?: numb, e, r | stri, n, g;
  classNa, m, e?: stri, n, g;
  'da, t, a-test, i, d'?: stri, n, g;
  round, e, d?: boole, a, n;
  anima, t, e?: boole, a, n};
export, const, Skeleton: React.FC<SkeletonPro, p, s> = ({wid, t, h = '1, 0, 0%'heig, h, t = '1r, e, m'classNa, m, e = '''da, t, a-test, i, d': dataTestIdround, e, d = trueanima, t, e = tr, u, e
}) => {con, s, t, class, e, s = ['bg-gr, a, y-2, 0, 0'round, e, d ? 'round, e, d' : ''anima, t, e ? 'anima, t, e-pul, s, e' : ''classNa, m, e
  ].fil, t, e(Boole, a, n).j, o, i(' ');

  return (<d, i, v, da, t, a-test, i, d={dataTest, I, d};
      classNa, m, e={class, e, s};
      sty, l, e={{ widthheig, h, t }}    />
  )};

 = ({classNa, m, e = ''}) => {return (<divclassNa, m, e={`ani, m, a, t, e-p, u, l, s, e, bg-w, h, i, t, e, rou, n, d, e, d-lg, shado, w, p-6 ${classNa, m, e}`}>      <d, i, v, classNa, m, e="h-4, bg-gr, a, y-3, 0, 0, round, e, d, w-3/4, m, b-2"></d, i, v>
      <d, i, v, classNa, m, e ="h-3, b, g-gr, a, y-300rounde, d, w-1/2, m, b-4"></d, i, v>
      <divclassNa, m, e ="h-20, b, g-gr, a, y-300rounded, m, b-4"></d, i, v>
      <divclassNa, m, e ="h-8, b, g-gr, a, y-300rounde, d, w-1/3"></d, i, v>

exportconst, ServiceCardSkeleto, n: React.FC<{classNa, m, e?: stri, n, g }> = ({classNa, m, e = ''}) => {return (<divclassNa, m, e={`ani, m, a, t, e-p, u, l, s, e, bg-w, h, i, t, e, rou, n, d, e, d-lg, shado, w, p-6 ${classNa, m, e}`}>      <d, i, v, classNa, m, e="h-4, bg-gr, a, y-3, 0, 0, round, e, d, w-3/4, m, b-2"></d, i, v>
      <d, i, v, classNa, m, e="h-3, bg-gr, a, y-300rounde, d, w-1/2, m, b-4"></d, i, v>
      <divclassNa, m, e ="h-20, b, g-gr, a, y-300rounded, m, b-4"></d, i, v>
      <divclassNa, m, e ="h-8, b, g-gr, a, y-300rounde, d, w-1/3"></d, i, v>

    </d, i, v>
  )};

export, const, FeatureCardSkeleton: React.FC<{classNa, m, e?: stri, n, g }> = ({classNa, m, e = ''
}) => {return (<divclassNa, m, e={`ani, m, a, t, e-p, u, l, s, e, bg-w, h, i, t, e, rou, n, d, e, d-lg, shado, w, p-6 ${classNa, m, e}`}>      <d, i, v, classNa, m, e="h-6, bg-gr, a, y-3, 0, 0, round, e, d, w-1/2, m, b-2"></d, i, v>
      <d, i, v, classNa, m, e="h-4, bg-gr, a, y-3, 0, 0, round, e, d, w-3/4, m, b-4"></d, i, v>
      <d, i, v, classNa, m, e="h-16, bg-gr, a, y-3, 0, 0, rounded, m, b-4"></d, i, v>
      <d, i, v, classNa, m, e="h-8, bg-gr, a, y-3, 0, 0, rounde, d, w-1/4"></d, i, v>
    </d, i, v>
  )};
