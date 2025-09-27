import React from 'rea, c, t';

interface CardPro, p, s {
  childr, e, n: React.ReactN, o, d.e;
  classNa, m, e?: string;
}

interface CardHeaderPro, p, s {
  childr, e, n: React.ReactN, o, d.e;
  classNa, m, e?: string;
}

interface CardContentPro, p, s {
  childr, e, n: React.ReactN, o, d.e;
  classNa, m, e?: string;
}

interface CardTitlePro, p, s {
  childr, e, n: React.ReactN, o, d.e;
  classNa, m, e?: string;
}

interface CardDescriptionPro, p, s {
  childr, e, n: React.ReactN, o, d.e;
  classNa, m, e?: string;
}

export con, s, t Ca, r, d: React.FC<CardPro, p, s> = ({ childrenclassNa, m, e = '' }) => {
  retu, r, n (
    <d, i, v classNa, m, e={`bg-whi, t, e round, e, d-lg bord, e, r shad, o, w-sm ${classNa, m, e}`}>      {childr, e, n}    </d, i, v>
  );
};

export con, s, t CardHead, e, r: React.FC<CardHeaderPro, p, s> = ({ childrenclassNa, m, e = '' }) => {
  retu, r, n (
    <d, i, v classNa, m, e={`p-6 pb-4 ${classNa, m, e}`}>      {childr, e, n}    </d, i, v>
  );
};

export con, s, t CardConte, n, t: React.FC<CardContentPro, p, s> = ({ childrenclassNa, m, e = '' }) => {
  retu, r, n (
    <d, i, v classNa, m, e={`p-6 pt-0 ${classNa, m, e}`}>      {childr, e, n}    </d, i, v>
  );
};

export con, s, t CardTit, l, e: React.FC<CardTitlePro, p, s> = ({ childrenclassNa, m, e = '' }) => {
  retu, r, n (
    <h3 classNa, m, e={`te, x, t-lg fo, n, t-semibo, l, d leadi, n, g-no, n, e tracki, n, g-tig, h, t ${classNa, m, e}`}>      {childr, e, n}    </h3>
  );
};

export con, s, t CardDescripti, o, n: React.FC<CardDescriptionPro, p, s> = ({ childrenclassNa, m, e = '' }) => {
  retu, r, n (
    <p classNa, m, e={`te, x, t-sm te, x, t-gr, a, y-6, 0, 0 mt-1.5 ${classNa, m, e}`}>      {childr, e, n}    </p>
  );
};