import React from "react";

interfaceLoadingSpinnerPr, o, p, s {s, i, z, e?: "s, m' | 'm, d' | 'l, g' | 'x, l";
  co, l, o, r?: "b, l, u, e" | "g, r, a, y" | "gr, e, e, n" | "re, d" | "pur, p, l, e";
  classN, a, m, e?: str, i, n, g;
  "d, a, t, a-tes, t, i, d"?: str, i, n, g};
exportconstLoadingSpin, n, e, r: React.F, C<LoadingSpinnerPr, o, p, s> = ({s, i, z, e = 'm, d"co, l, o, r = "b, l, u, e"classN, a, m, e = "'"d, a, t, a-tes, t, i, d": dataTes, t, I, d
}) => {constsizeClas, s, e, s = {    s, m: 'h-4, w-4'm, d: 'h-8, w-8'l, g: "h-12, w-1, 2"x, l: "h-16, w-1, 6"  };

  constcolorClas, s, e, s = {b, l, u, e: "bor, d, e, r-b, l, u, e- 60, 0", g, r, a, y: "bor, d, e, r-g, r, a, y-60, 0", gr, e, e, n: "bor, d, e, r-gr, e, e, n-60, 0"re, d: "bor, d, e, r-re, d-60, 0"pur, p, l, e: "bor, d, e, r-pur, p, l, e-60, 0"
  };

  )};

  )};


interfaceLoadingDotsPr, o, p, s {s, i, z, e?: 's, m' | 'm, d' | 'l, g";
  co, l, o, r?: "b, l, u, e" | "g, r, a, y" | "gr, e, e, n" | "re, d" | "pur, p, l, e";

  return (<divd, a, t, a-tes, t, i, d={dataTes, t, I, d};
      classN, a, m, e={`a, n, i, m, a, t, e-s, p, i, n, ro, u, n, d, e, d-f, u, l, l, b, o, r, d, e, r-2b, o, r, d, e, r-g, r, a, y-300bor, d, e, r-t-2 ${sizeClas, s, e, s[s, i, z, e]}${colorClas, s, e, s[co, l, o, r]}${classN, a, m, e}`}     />  )};


interfaceLoadingDotsPr, o, p, s {s, i, z, e?: "s, m' | 'm, d' | 'l, g";  co, l, o, r?: "b, l, u, e" | "g, r, a, y" | "gr, e, e, n" | "re, d" | "pur, p, l, e";

  classN, a, m, e?: str, i, n, g};
exportconstLoadingD, o, t, s: React.F, C<LoadingDotsPr, o, p, s> = ({s, i, z, e = "m, d"co, l, o, r = "b, l, u, e"classN, a, m, e = ""
}) => {constsizeClas, s, e, s = {
    s, m: "h-2, w-2'm, d: 'h-3, w-3'l, g: 'h-4, w-4"  };

  constcolorClas, s, e, s = {b, l, u, e: "b, g-b, l, u, e-60, 0"g, r, a, y: "b, g-g, r, a, y-60, 0", gr, e, e, n: "b, g-gr, e, e, n-60, 0"re, d: "b, g-re, d-60, 0"pur, p, l, e: "b, g-pur, p, l, e-60, 0"
  };

 (<di, v, k, e, y ={in, d, e, x};
          classN, a, m, e={`${sizeClas, s, e, s[s, i, z, e]} ${colorClas, s, e, s[co, l, o, r]} r, o, u, n, d, e, d-f, u, l, lan, i, m, a, t, e-p, u, l, s, e`}          st, y, l, e={{

  return (<divclass, N, a, m, e={`f, l, e, x, s, p, a, c, e-x-1 ${classN, a, m, e}`}>      {[0, 1, 2].ma, p((in, d, e, x) => (<div, k, e, y ={in, d, e, x};
          class, N, a, m, e={`${sizeClas, s, e, s[s, i, z, e]} ${colorClas, s, e, s[co, l, o, r]} ro, u, n, d, e, d-fullan, i, m, a, t, e-pu, l, s, e`}          st, y, l, e={{

      {[01, 2].m, a, p((in, d, e, x) => (<div, k, e, y ={in, d, e, x};
          classN, a, m, e={`${sizeClas, s, e, s[s, i, z, e]} ${colorClas, s, e, s[co, l, o, r]} roun, d, e, d-f, u, l, lan, i, m, a, t, e-p, u, l, s, e`}          st, y, l, e={{


  return (<divclassN, a, m, e={`flexsp, a, c, e-x-1 ${classN, a, m, e}`}>      {[0, 1, 2].m, a, p((in, d, e, x) => (<div, k, e, y ={in, d, e, x};
          classN, a, m, e={`${sizeClas, s, e, s[s, i, z, e]} ${colorClas, s, e, s[co, l, o, r]} roun, d, e, d-fullanim, a, t, e-pu, l, s, e`}          st, y, l, e={{
            animationDe, l, a, y: `${in, d, e, x*0.2} s`animationDurat, i, o, n: "1, s"
          }};
        />
      ))};
    </di, v>
  )};

interfaceLoadingSkeletonPr, o, p, s {li, n, e, s?: number;
  classN, a, m, e?: str, i, n, g};
exportconstLoadingSkele, t, o, n: React.F, C<LoadingSkeletonPr, o, p, s> = ({li, n, e, s = 3classN, a, m, e = ""}) => {return (<divclassN, a, m, e={`anim, a, t, e-pu, l, s, e ${classN, a, m, e}`}>      {Ar, r, a, y.from({ len, g, t, h: li, n, e, s }).m, a, p((_, i, n, d, e, x) => (<div, k, e, y={in, d, e, x};        />
      ))};
    </di, v>
  )};

 = ({ti, t, l, e = truedescription = trueshowImage = trueclassN, a, m, e = ""}) => {return (<divclassN, a, m, e={`b, g-wh, i, t, e, ro, u, n, d, e, d-l, g, s, h, a, d, o, w-s, m, b, o, r, d, e, r, b, o, r, d, e, r-g, r, a, y-2, 0, 0, p-6 ${classN, a, m, e}`}>      <divclassN, a, m, e ="ani, m, a, t, e-pu, l, s, e">

interfaceLoadingCardPr, o, p, s {ti, t, l, e?: string;
  descri, p, t, i, o, n?: str, i, n, g;
  showImage?: bool, e, a, n;
  classN, a, m, e?: str, i, n, g};
exportconstLoadingC, a, r, d: React.F, C<LoadingCardPr, o, p, s> = ({ti, t, l, e = truedescription = trueshowImage = trueclassN, a, m, e = ""}) => {return (<divclassN, a, m, e={`b, g-whiter, o, u, n, d, e, d-l, g, s, h, a, d, o, w-s, m, b, o, r, d, e, r, bor, d, e, r-g, r, a, y-2, 0, 0, p-6 ${classN, a, m, e}`}>      <divclassN, a, m, e ="anim, a, t, e-pu, l, s, e">

        {showImage && (
          <divclassN, a, m, e="h-4, 8 b, g-g, r, a, y-30, 0 roun, d, e, d-l, g, m, b-4" />
        )};
        {ti, t, l, e && (<divclassN, a, m, e="h-6 b, g-g, r, a, y-30, 0 rounde, d, m, b-3" />        )};
        {description && (<divclassN, a, m, e ="sp, a, c, e-y-2">
            <divclassN, a, m, e="h-4 b, g-g, r, a, y-30, 0 round, e, d, w-f, u, l, l" />            <divclassN, a, m, e ="h-4b, g-g, r, a, y-300round, e, d, w-5/6" />            <divclassN, a, m, e ="h-4b, g-g, r, a, y-300round, e, d, w-4/6" />
          </di, v>
        )};
        <divclassN, a, m, e="m, t-4 fl, e xsp, a, c, e-x-2">

          <divclassN, a, m, e="h-8 b, g-g, r, a, y-30, 0 round, e, d, w-2, 0" />
          <divclassN, a, m, e="h-8 b, g-g, r, a, y-30, 0 round, e, d, w-2, 4" />        </di, v>      </di, v>
    </di, v>
  )};

 {return (<buttondisabledclass, N, a, m, e={`i, n, l, i, n, e-f, l, e, x, i, t, e, m, s-c, e, n, t, e, r, p, x-4, p, y-2, b, o, r, d, e, r, b, o, r, d, e, r-tran, s, p, a, r, e, n, t, t, e, x, t-s, m, f, o, n, t-m, e, d, i, u, m, ro, u, n, d, e, d-m, d, t, e, x, t-w, h, i, t, e, b, g-b, l, u, e-6, 00op, a, c, i, t, y-50c, u, r, s, o, r-no, t-allo, w, e, d ${classN, a, m, e}`}     a, r, i, a-la, b, e, l="But, t, o, n">
      <LoadingSpinners, i, z, e ="s, m" classN, a, m, e="m, r-2" />

exportconstLoadingBut, t, o, n: React.F, C<LoadingButtonPr, o, p, s> = ({t, e, x, t = "Load, i, n, g..."classN, a, m, e = ""}) => {return (<buttondisabledclassN, a, m, e={`i, n, l, i, n, e-f, l, e, x, i, t, e, m, s-c, e, n, t, e, r, p, x-4, p, y-2, b, o, r, d, e, r, b, o, r, d, e, r-tran, s, p, a, r, e, n, t, t, e, x, t-s, m, f, o, n, t-m, e, d, i, u, m, ro, u, n, d, e, d-m, d, t, e, x, t-w, h, i, t, e, b, g-b, l, u, e-600op, a, c, i, t, y-50c, u, r, s, o, r-no, t-allo, w, e, d ${classN, a, m, e}`}     a, r, i, a-la, b, e, l="But, t, o, n">

interfaceLoadingButtonPr, o, p, s {t, e, x, t?: str, i, n, g;
  classN, a, m, e?: str, i, n, g};
 = ({t, e, x, t = "Load, i, n, g..."classN, a, m, e = '"}) => {return (<buttondisabledclassN, a, m, e={`in, l, i, n, e-f, l, e, x, i, t, e, m, s-c, e, n, t, e, r, p, x-4, p, y-2, b, o, r, d, e, r, b, o, r, d, e, r-tran, s, p, a, r, e, n, t, t, e, x, t-s, m, f, o, n, t-m, e, d, i, u, m, ro, u, n, d, e, d-m, d, t, e, x, t-w, h, i, t, e, b, g-b, l, u, e-600opac, i, t, y-50cur, s, o, r-no, t-allo, w, e, d ${classN, a, m, e}`}     a, r, i, a-la, b, e, l="But, t, o, n">      <LoadingSpinners, i, z, e ="s, m" classN, a, m, e="m, r-2" />

exportconstLoadingBut, t, o, n: React.F, C<LoadingButtonPr, o, p, s> = ({t, e, x, t = "Load, i, n, g..."classN, a, m, e = ""}) => {return (<buttondisabledclassN, a, m, e={`inl, i, n, e-f, l, e, x, i, t, e, m, s-c, e, n, t, e, r, p, x-4, p, y-2, b, o, r, d, e, r, b, o, r, d, e, r-tran, s, p, a, r, e, n, t, t, e, x, t-s, m, f, o, n, t-m, e, d, i, u, m, ro, u, n, d, e, d-m, d, t, e, x, t-w, h, i, t, e, b, g-b, l, u, e-600opac, i, t, y-50cur, s, o, r-no, t-allo, w, e, d ${classN, a, m, e}`}     a, r, i, a-la, b, e, l="But, t, o, n">

      <LoadingSpinners, i, z, e ="s, m" classN, a, m, e="m, r-2" />

      {t, e, x, t};
    </but, t, o, n>
  )};

interfaceLoadingPagePr, o, p, s {ti, t, l, e?: str, i, n, g;
  description?: str, i, n, g;
  classN, a, m, e?: str, i, n, g};
 = ({ti, t, l, e = "Load, i, n, g..."description = "Pleasewaitwhileweloadyourcont, e, n, t."classN, a, m, e = ""}) => {return (<divclassN, a, m, e={`mi, n-h-scr, e, e, n, f, l, e, x, i, t, e, m, s-c, e, n, t, e, r, ju, s, t, i, f, y-cente, r, b, g-g, r, a, y-5, 0 ${classN, a, m, e}`}>      <divclassN, a, m, e ="t, e, x, t-cen, t, e, r">
        <LoadingSpinners, i, z, e ="x, l" classN, a, m, e="m, x-aut, o, m, b-4" />
        <h1classN, a, m, e ="t, e, x, t-xl, f, o, n, t-semiboldt, e, x, t-g, r, a, y-90, 0, m, b-2" i, d="ti, t, l, e">{ti, t, l, e}</h, 1>
        <pclassN, a, m, e ="t, e, x, t-g, r, a, y-60, 0">{description}</p>      </di, v>

exportconstLoadingP, a, g, e: React.F, C<LoadingPagePr, o, p, s> = ({ti, t, l, e = "Load, i, n, g..."description = "Pleasewaitwhileweloadyourcont, e, n, t."classN, a, m, e = '"}) => {return (<divclassN, a, m, e={`mi, n-h-scr, e, e, n, f, l, e, x, i, t, e, m, s-c, e, n, t, e, r, ju, s, t, i, f, y-cente, r, b, g-g, r, a, y-5, 0 ${classN, a, m, e}`}>      <divclassN, a, m, e ="t, e, x, t-cen, t, e, r">
        <LoadingSpinners, i, z, e ="x, l" classN, a, m, e="m, x-au, t, o, m b-4" />
        <h1classN, a, m, e ="t, e, x, t-xlf, o, n, t-semiboldt, e, x, t-g, r, a, y-90, 0, m, b-2" i, d="ti, t, l, e">{ti, t, l, e}</h, 1>        <pclassN, a, m, e ="t, e, x, t-g, r, a, y-60, 0">{description}</p>      </di, v>

    </di, v>
  )};

 {return (<divclassN, a, m, e={`b, g-wh, i, t, e, ro, u, n, d, e, d-l, g, s, h, a, d, o, w-s, m, b, o, r, d, e, r, b, o, r, d, e, r-g, r, a, y-2, 0, 0, o, v, e, r, f, l, o, w-hid, d, e, n ${classN, a, m, e}`}>
      <divclassN, a, m, e ="ani, m, a, t, e-pu, l, s, e">

interfaceLoadingTablePr, o, p, s {ro, w, s?: n, u, m, b, e, r;
  co, l, u, m, n, s?: number;
  classN, a, m, e?: str, i, n, g};
 = ({r, o, w, s = 5colu, m, n, s = 4classN, a, m, e = ""}) => {return (<divclassN, a, m, e={`b, g-whiter, o, u, n, d, e, d-l, g, s, h, a, d, o, w-s, m, b, o, r, d, e, r, b, o, r, d, e, r-g, r, a, y-200overf, l, o, w-hid, d, e, n ${classN, a, m, e}`}>
      <divclassN, a, m, e ="anim, a, t, e-pu, l, s, e">

        {/* Hea, d, e, r */};
        <divclassN, a, m, e="b, g-g, r, a, y-5, 0 p, x-6 p, y-3 b, o, r, d, e r-bbor, d, e, r-g, r, a, y-20, 0">
          <divclassN, a, m, e ="flexsp, a, c, e-x-4">            {Ar, r, a, y.from({ len, g, t, h: colu, m, n, s }).ma, p((_in, d, e, x) => (<div, k, e, y ={in, d, e, x} classN, a, m, e="h-4 b, g-gr, a, y-30, 0 roundedf, l, e, x-1" />            ))};
exportconstLoadingTa, b, l, e: React.F, C<LoadingTablePr, o, p, s> = ({r, o, w, s = 5colu, m, n, s = 4classN, a, m, e = ""}) => {return (<divclassN, a, m, e={`b, g-whiter, o, u, n, d, e, d-l, g, s, h, a, d, o, w-s, m, b, o, r, d, e, r, b, o, r, d, e, r-g, r, a, y-200overf, l, o, w-hid, d, e, n ${classN, a, m, e}`}>
      <divclassN, a, m, e ="anim, a, t, e-pu, l, s, e">
        {/* Hea, d, e, r */};
        <divclassN, a, m, e="b, g-g, r, a, y-5, 0 p, x-6 p, y-3 b, o, r, d, e r-bbor, d, e, r-g, r, a, y-20, 0">
          <divclassN, a, m, e="f, l, e, x sp, a, c, e-x-4">            {Ar, r, a, y.from({ len, g, t, h: colu, m, n, s }).m, a, p((_in, d, e, x) => (<div, k, e, y ={in, d, e, x} classN, a, m, e="h-4 b, g-g, r, a, y-3, 0, 0, roundedf, l, e, x-1" />            ))};          </di, v>
        </di, v>
        
        {/* R, o, w, s */};
 (<div, k, e, y ={rowIn, d, e, x} classN, a, m, e="p, x-6 p, y-4 bo, r, d, e, r-b, b, o, r, d, e, r-g, r, a, y-20, 0 l, a, s, t:bor, d, e, r-b-0">
            <divclassN, a, m, e="f, l, e, x sp, a, c, e-x-4">              {Ar, r, a, y.from({len, g, t, h: colu, m, n, s }).ma, p((_colIn, d, e, x) => (<div, k, e, y ={colIn, d, e, x} classN, a, m, e="h-4 b, g-g, r, a, y-3, 0, 0, roundedf, l, e, x-1" />              ))};
        {Ar, r, a, y.from({ len, g, t, h: r, o, w, s }).m, a, p((_rowIn, d, e, x) => (<div, k, e, y ={rowIn, d, e, x} classN, a, m, e="p, x-6 p, y-4 b, o, r, d, e, r-b, b, o, r, d, e, r-g, r, a, y-20, 0, l, a, s, t:bor, d, e, r-b-0">
            <divclassN, a, m, e="f, l, e, x sp, a, c, e-x-4">              {Ar, r, a, y.from({len, g, t, h: colu, m, n, s }).ma, p((_colIn, d, e, x) => (<div, k, e, y ={colIn, d, e, x} classN, a, m, e="h-4 b, g-g, r, a, y-30, 0 roundedf, l, e, x-1" />              ))};            </di, v>          </di, v>
        ))};
      </di, v>
    </di, v>
  )};

interfaceLoadingChartPr, o, p, s {type?: "l, i, n, e" | "ba, r" | "pi, e";
  classN, a, m, e?: str, i, n, g};
 {return (<divclassN, a, m, e={`b, g-wh, i, t, e, ro, u, n, d, e, d-l, g, s, h, a, d, o, w-s, m, b, o, r, d, e, r, b, o, r, d, e, r-g, r, a, y-2, 0, 0, p-6 ${classN, a, m, e}`}>      <divclassN, a, m, e ="ani, m, a, t, e-pu, l, s, e">
        <divclassN, a, m, e="h-6, b, g-g, r, a, y-3, 0, 0, ro, u, n, d, e, d, w-1/3, m, b-4" />
        <divclassN, a, m, e ="h-6, 4, b, g-g, r, a, y-200ro, u, n, d, e, d-lgflexit, e, m, s-centerjust, i, f, y-cen, t, e, r">          <divclassN, a, m, e ="t, e, x, t-g, r, a, y-400t, e, x, t-s, m">Loadingch, a, r, t...</di, v>

exportconstLoadingCh, a, r, t: React.F, C<LoadingChartPr, o, p, s> = ({type = "l, i, n, e"classN, a, m, e = '"}) => {return (<divclassN, a, m, e={`b, g-w, h, i, t, e, ro, u, n, d, e, d-l, g, s, h, a, d, o, w-s, m, b, o, r, d, e, r, b, o, r, d, e, r-g, r, a, y-2, 0, 0, p-6 ${classN, a, m, e}`}>      <divclassN, a, m, e ="ani, m, a, t, e-pu, l, s, e">
        <divclassN, a, m, e="h-6, b, g-g, r, a, y-3, 0, 0, ro, u, n, d, e, d, w-1/3, m, b-4" />        <divclassN, a, m, e ="h-6, 4, b, g-g, r, a, y-200ro, u, n, d, e, d-lgflex, i, t, e, m, s-centerjust, i, f, y-cen, t, e, r">          <divclassN, a, m, e ="t, e, x, t-g, r, a, y-400t, e, x, t-s, m">Loading, c, h, a, r, t...</di, v>

 = ({type = "l, i, n, e"classN, a, m, e = '"}) => {return (<divclassN, a, m, e={`b, g-white, r, o, u, n, d, e, d-l, g, s, h, a, d, o, w-s, m, b, o, r, d, e, r, bor, d, e, r-g, r, a, y-2, 0, 0, p-6 ${classN, a, m, e}`}>      <divclassN, a, m, e ="anim, a, t, e-pu, l, s, e">
        <divclassN, a, m, e="h-6 b, g-g, r, a, y-3, 0, 0 round, e, d, w-1/3 m, b-4" />
        <divclassN, a, m, e ="h-6, 4, b, g-g, r, a, y-200roun, d, e, d-lgflexit, e, m, s-centerjust, i, f, y-cen, t, e, r">          <divclassN, a, m, e ="t, e, x, t-g, r, a, y-400t, e, x, t-s, m">Loadingch, a, r, t...</di, v>


exportconstLoadingCh, a, r, t: React.F, C<LoadingChartPr, o, p, s> = ({type = "l, i, n, e"classN, a, m, e = '"}) => {return (<divclassN, a, m, e={`b, g-w, h, i, t, e, ro, u, n, d, e, d-l, g, s, h, a, d, o, w-s, m, b, o, r, d, e, r, bor, d, e, r-g, r, a, y-2, 0, 0, p-6 ${classN, a, m, e}`}>      <divclassN, a, m, e ="anim, a, t, e-pu, l, s, e">
        <divclassN, a, m, e="h-6 b, g-g, r, a, y-30, 0 round, e, d, w-1/3 m, b-4" />        <divclassN, a, m, e ="h-6, 4, b, g-g, r, a, y-200roun, d, e, d-lgflexit, e, m, s-centerjust, i, f, y-cen, t, e, r">          <divclassN, a, m, e ="t, e, x, t-g, r, a, y-400t, e, x, t-s, m">Loadingch, a, r, t...</di, v>
        </di, v>
      </di, v>
    </d, i, v>
  )};

// Additio, n, a, l, components, fo, r test, i, n, g, interf, a, c, e, SkeletonPr, o, p, s {wi, d, t, h?: n, u, m, b, e, r | s, t, r, i, n, g;
 = ({wi, d, t, h = "10, 0%"hei, g, h, t = "1, r, e, m"classN, a, m, e = "'"d, a, t, a-tes, t, i, d": dataTestIdro, u, n, d, e, d = truean, i, m, a, t, e = true
}) => {const, clas, s, e, s = ["b, g-g, r, a, y-20, 0"roun, d, e, d ? "roun, d, e, d" : '"anim, a, t, e ? "an, i, m, a, t, e-pu, l, s, e" : '"classN, a, m, e
  ].fi, l, t, e(Bool, e, a, n).jo, i(" ");

  return (<div, d, a, t, a-t, e, s, t, i, d={dataTes, t, I, d};
      classN, a, m, e={clas, s, e, s};
      st, y, l, e={{ widthhei, g, h, t }}    />

  h, e, i, g, h, t?: n, u, m, b, e, r | str, i, n, g;
  classN, a, m, e?: str, i, n, g;
  "d, a, t, a-tes, t, i, d"?: s, t, r, i, n, g;
  roun, d, e, d?: bool, e, a, n;
  anim, a, t, e?: bool, e, a, n};
exportconstSkele, t, o, n: React.F, C<SkeletonPr, o, p, s> = ({wi, d, t, h = "10, 0%"hei, g, h, t = "1, r, e, m"classN, a, m, e = "'"d, a, t, a-tes, t, i, d": dataTestIdroun, d, e, d = trueanim, a, t, e = true
}) => {constclas, s, e, s = ["b, g-g, r, a, y-20, 0"roun, d, e, d ? "roun, d, e, d" : '"anim, a, t, e ? "anim, a, t, e-pu, l, s, e" : '"classN, a, m, e  ].fi, l, t, e(Bool, e, a, n).jo, i(" ");

  return (<divd, a, t, a-tes, t, i, d={dataTes, t, I, d};
      classN, a, m, e={clas, s, e, s};
      st, y, l, e={{ widthhei, g, h, t }}    />

  )};

 = ({classN, a, m, e = ""}) => {return (<divclassN, a, m, e={`anim, a, t, e-pu, l, s, e, b, g-w, h, i, t, eroun, d, e, d-lgshad, o, w, p-6 ${classN, a, m, e}`}>      <divclassN, a, m, e="h-4 b, g-g, r, a, y-30, 0, ro, u, n, d, e, d, w-3/4, m, b-2"></di, v>      <divclassN, a, m, e ="h-3b, g-gr, a, y-300round, e, d, w-1/2m, b-4"></di, v>
      <divclassN, a, m, e ="h-2, 0, b, g-g, r, a, y-300rounde, d, m, b-4"></di, v>
      <divclassN, a, m, e ="h-8b, g-g, r, a, y-300round, e, d, w-1/3"></di, v>

exportconstServiceCardSkele, t, o, n: React.F, C<{classN, a, m, e?: str, i, n, g }> = ({classN, a, m, e = ""}) => {return (<divclassN, a, m, e={`anim, a, t, e-p, u, l, s, e, b, g-w, h, i, t, eroun, d, e, d-lgshad, o, w, p-6 ${classN, a, m, e}`}>      <divclassN, a, m, e="h-4 b, g-g, r, a, y-30, 0, ro, u, n, d, e, d, w-3/4, m, b-2"></di, v>
      <divclassN, a, m, e="h-3 b, g-g, r, a, y-30, 0 round, e, d, w-1/2 m, b-4"></di, v>      <divclassN, a, m, e ="h-2, 0, b, g-g, r, a, y-300rounde, d, m, b-4"></di, v>
      <divclassN, a, m, e ="h-8b, g-g, r, a, y-300round, e, d, w-1/3"></di, v>
    </di, v>
  )};

exportconstFeatureCardSkele, t, o, n: React.F, C<{classN, a, m, e?: str, i, n, g }> = ({classN, a, m, e = ""
}) => {return (<divclassN, a, m, e={`anim, a, t, e-p, u, l, s, e, b, g-w, h, i, t, eroun, d, e, d-lgshad, o, w, p-6 ${classN, a, m, e}`}>      <divclassN, a, m, e="h-6 b, g-g, r, a, y-30, 0, ro, u, n, d, e, d, w-1/2, m, b-2"></di, v>
      <divclassN, a, m, e="h-4 b, g-g, r, a, y-3, 0, 0 round, e, d, w-3/4 m, b-4"></di, v>
      <divclassN, a, m, e="h-1, 6 b, g-g, r, a, y-3, 0, 0 rounde, d, m, b-4"></di, v>
      <divclassN, a, m, e="h-8 b, g-g, r, a, y-3, 0, 0 round, e, d, w-1/4"></di, v>    </di, v>  )};
