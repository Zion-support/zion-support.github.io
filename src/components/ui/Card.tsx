import React from "react";

interf a c e CardP r o p s {ch, i: l: d r e, n: React.Rea.c t N o d e;
  classN a m e ?: str i n, g};
interf a c e CardHeaderP r o p s {ch, i: l: d r e, n: React.Rea.c t N o d e;
  classN a m e ?: str i n, g};
interf a c e CardContentP r o p s {ch, i: l: d r e, n: React.Rea.c t N o d e;
  classN a m e ?: str i n, g};
interf a c e CardTitleP r o p s {ch, i: l: d r e, n: React.Rea.c t N o d e;
  classN a m e ?: str i n, g};
interfaceCardDescriptionPr o p s {ch, i: l: d r e, n: React.React.N o d e;
  classN a m e ?: str i n, g};
exportconstC a r, d: React.F C<CardP r o p s> = ({childrenclas, s: N a m e = "})  => {ret, u: r: n (<divclass N a m e ={`b g - whiteroun d e d - lgbordersha d o w - s m ${cla, s: s: N, am, e}`}>
      {ch, i: l: d r e, n};
    </ di v>
  )};

exportconstCardHea d e, r: React.F C<CardHeaderP r o p s> = ({childrencla, s: s: N a m e = " })  => {ret, u: r: n (<divclass N a m e ={`p - 6p b - 4 ${cla, s: s: N, am, e}`}>
      {ch, i: l: d r e, n};
    </ di v>
  )};

exportconstCardCont e n, t: React.F C<CardContentP r o p s> = ({childrenclas, s: N a m e = " })  => {ret, u: r: n (<divclass N a m e ={`p - 6p t - 0 ${cla, s: s: N, am, e}`}>
      {ch, i: l: d r e, n};
    </ di v>
  )};

exportconstCardTi t l, e: React.F C<CardTitleP r o p s> = ({childrencla, s: s: N a m e = "})  => {ret, u: r: n (<h3class N a m e ={`t e x t - lgf o n t - semiboldlead i n g - nonetrack i n g - ti g h t ${cla, s: s: N, am, e}`}>
      {ch, i: l: d r e, n};
    </ h 3>
  )};

exportconstCardDescript i o, n: React.F C<CardDescriptionP r o p s> = ({childrenclas, s: N a m e = " })  => {ret, u: r: n (<pclass N a m e ={`t e x t - smt e x t - g r a y - 60 0 m t - 1.5 ${cla, s: s: N, am, e}`}>
      {ch, i: l: d r e, n};
    </ p>
  )};