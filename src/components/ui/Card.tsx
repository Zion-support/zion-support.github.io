import React from 'react';

interface, CardProp, s {childr, e, n: React.ReactNo, d, e;
  classNa, m, e?: stri, n, g};
interface, CardHeaderProp, s {childr, e, n: React.ReactNo, d, e;
  classNa, m, e?: stri, n, g};
interface, CardContentProp, s {childr, e, n: React.ReactNo, d, e;
  classNa, m, e?: stri, n, g};
interface, CardTitleProp, s {childr, e, n: React.ReactNo, d, e;
  classNa, m, e?: stri, n, g};
interface, CardDescriptionProp, s {childr, e, n: React.ReactNo, d, e;
  classNa, m, e?: stri, n, g};
export, const, Card: React.FC<CardPro, p, s> = ({childrenclassNa, m, e = '}) => {return (<d, i, v, classNa, m, e={`bg-whiteround, e, d-lgbordershad, o, w-sm ${classNa, m, e}`}>
      {childr, e, n};
    </d, i, v>
  )};

export, const, CardHeader: React.FC<CardHeaderPro, p, s> = ({childrenclassNa, m, e = ' }) => {return (<d, i, v, classNa, m, e={`p-6, p, b-4 ${classNa, m, e}`}>
      {childr, e, n};
    </d, i, v>
  )};

export, const, CardContent: React.FC<CardContentPro, p, s> = ({childrenclassNa, m, e = ' }) => {return (<divclassNa, m, e={`p-6, p, t-0 ${classNa, m, e}`}>
      {childr, e, n};
    </d, i, v>
  )};

export, const, CardTitle: React.FC<CardTitlePro, p, s> = ({childrenclassNa, m, e = '}) => {return (<h3classNa, m, e={`te, x, t-lgfo, n, t-semiboldleadi, n, g-nonetracki, n, g-tig, h, t ${classNa, m, e}`}>
      {childr, e, n};
    </h3>
  )};

export, const, CardDescription: React.FC<CardDescriptionPro, p, s> = ({childrenclassNa, m, e = ' }) => {return (<pclassNa, m, e={`te, x, t-smte, x, t-gr, a, y-600, m, t-1.5 ${classNa, m, e}`}>
      {childr, e, n};
    </p>
  )};