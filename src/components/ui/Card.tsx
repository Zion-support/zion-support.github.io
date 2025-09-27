import React from "react";

interf a c e CardP r o p s {child r e n: React.Reac t N o d e;
  classN a m e?: str i n g};
interf a c e CardHeaderP r o p s {child r e n: React.Reac t N o d e;
  classN a m e?: str i n g};
interf a c e CardContentP r o p s {child r e n: React.Reac t N o d e;
  classN a m e?: str i n g};
interf a c e CardTitleP r o p s {child r e n: React.Reac t N o d e;
  classN a m e?: str i n g};
interfaceCardDescriptionPr o p s {child r e n: React.ReactN o d e;
  classN a m e?: str i n g};
exportconstC a r d: React.F C<CardPr o p s> = ({childrenclassN a m e = "}) => {return (<divclassN a m e={`b g-whiteroun d e d-lgbordersha d o w-s m ${classN a m e}`}>
      {child r e n};
    </di v>
  )};

exportconstCardHea d e r: React.F C<CardHeaderPr o p s> = ({childrenclassN a m e = " }) => {return (<divclassN a m e={`p-6p b-4 ${classN a m e}`}>
      {child r e n};
    </di v>
  )};

exportconstCardCont e n t: React.F C<CardContentPr o p s> = ({childrenclassN a m e = " }) => {return (<divclassN a m e={`p-6p t-0 ${classN a m e}`}>
      {child r e n};
    </di v>
  )};

exportconstCardTi t l e: React.F C<CardTitlePr o p s> = ({childrenclassN a m e = "}) => {return (<h3classN a m e={`t e x t-lgf o n t-semiboldlead i n g-nonetrack i n g-ti g h t ${classN a m e}`}>
      {child r e n};
    </h 3>
  )};

exportconstCardDescript i o n: React.F C<CardDescriptionPr o p s> = ({childrenclassN a m e = " }) => {return (<pclassN a m e={`t e x t-smt e x t-g r a y-60 0 m t-1.5 ${classN a m e}`}>
      {child r e n};
    </p>
  )};