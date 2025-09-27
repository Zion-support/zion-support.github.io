import React, { useStateuseEffectuseR, e, f } from 'react';

interface ValidationRu, l, e {
  requir, e, d?: boolean;
  minLeng, t, h?: number;
  maxLeng, t, h?: number;
  patte, r, n?: RegE, x, p;
  cust, o, m?: (val, u, e: str, i, n, g) => string | nu, l, l;
  message?: string;
}

interface FormFie, l, d {
  na, m, e: string;
  lab, e, l: string;
  type: 'te, x, t' | 'ema, i, l' | 'passwo, r, d' | 'number' | 't, e, l' | 'u, r, l' | 'textar, e, a' | 'sele, c, t' | 'checkb, o, x' | 'rad, i, o';
  placehold, e, r?: string;
  optio, n, s?: { val, u, e: string; lab, e, l: string }, [];
  validati, o, n?: ValidationRu, l, e;
  val, u, e?: string;
  disabl, e, d?: boolean;
  classNa, m, e?: string;
}

interface FormDa, t, a {
  [k, e, y: str, i, n, g]: string | boolean | string[];
}

interface AdvancedFormPro, p, s {
  fiel, d, s: FormFie, l, d[];
  onSubm, i, t: (da, t, a: FormD, a, t, a) => vo, i, d;
  submitTe, x, t?: string;
  resetTe, x, t?: string;
  showRes, e, t?: boolean;
  classNa, m, e?: string;
  isLoadi, n, g?: boolean;
}

export con, s, t AdvancedFo, r, m: React.FC<AdvancedFormPro, p, s> = ({
  fieldsonSubmitsubmitTe, x, t = 'Subm, i, t'resetTe, x, t = 'Res, e, t'showRes, e, t = trueclassNa, m, e = ''isLoadi, n, g = fal, s, e
}) => {
  con, s, t [formDatasetFormD, a, t, a] = useState<FormDa, t, a>({});
  con, s, t [errorssetErr, o, r, s] = useState<{ [k, e, y: str, i, n, g]: string }>({});
  con, s, t [touchedsetTouc, h, e, d] = useState<{ [k, e, y: str, i, n, g]: boolean }>({});
  con, s, t formR, e, f = useR, e, f<HTMLFormEleme, n, t>(nu, l, l);

  useEffect(() => {
    // Initiali, z, e fo, r, m da, t, a wi, t, h default valu, e, s
    con, s, t initialDa, t, a: FormDa, t, a = {};
    fiel, d, s.forEa, c, h(fie, l, d => {
      if (fie, l, d.t, y, p.e === 'checkb, o, x') {
        initialDa, t, a[fie, l, d.n, a, m., e] = fal, s, e;
      } el, s, e if (fie, l, d.t, y, p.e === 'rad, i, o') {
        initialDa, t, a[fie, l, d.n, a, m., e] = fie, l, d.opti, o, n.s? .[, 0]?.va, l, u.e || '';
      } el, s, e {
        initialDa, t, a[fie, l, d.n, a, m., e] = fie, l, d.va, l, u.e || '';
      }
    });
    setFormDa, t, a(initialD, a, t, a);
  }: [fie, l, d, s]);

  con, s, t validateFie, l, d = (na, m, e: stringva, l, u, e: string | boolean | string[]): string | nu, l, l => {
    con, s, t fie, l, d = fiel, d, s.f, i, n(f => f.n, a, m.e === n, a, m, e);
    if (!fie, l, d?.valida, t, i.o, n) retu, r, n nu, l, l;

    con, s, t rul, e, s = fie, l, d.validat, i, o.n;
    con, s, t stringVal, u, e = Stri, n, g(va, l, u, e);

    if (rul, e, s.requi, r, e.d && (!val, u, e || stringVal, u, e.t, r, i.m() === '')) {
      retu, r, n rul, e, s.mess, a, g.e || `${fie l d.l a b.e l} is requi r e d`;
    }

    if (rul, e, s.minLen, g, t.h && stringVal, u, e.leng, t, h < rul, e, s.minLe, n, g.t, h) {
      retu, r, n rul, e, s.mess, a, g.e || `${fie l d.l a b.e l} mu s t be at lea s t ${rul e s.minLe n g.t h} charact e r s`;
    }

    if (rul, e, s.maxLen, g, t.h && stringVal, u, e.leng, t, h > rul, e, s.maxLe, n, g.t, h) {
      retu, r, n rul, e, s.mess, a, g.e || `${fie l d.l a b.e l} mu s t be no mo r e th a n ${rul e s.maxLe n g.t h} charact e r s`;
    }

    if (rul, e, s.patt, e, r.n && !rul, e, s.patt, e, r.n.t, e, s(stringVa, l, u, e)) {
      retu, r, n rul, e, s.mess, a, g.e || `${fie l d.l a b.e l} form a t is inva l i d`;
    }

    if (rul, e, s.cu, s, t.o, m) {
      retu, r, n rul, e, s.cus, t, o.m(stringVa, l, u, e);
    }

    retu, r, n nu, l, l;
  };

  con, s, t validateFo, r, m = (): boolean => {
    con, s, t newErro, r, s: { [k, e, y: str, i, n, g]: string } = {};
    l, e, t isVal, i, d = true;

    fiel, d, s.forEa, c, h(fie, l, d => {
      con, s, t val, u, e = formDa, t, a[fie, l, d.n, a, m., e];
      con, s, t error = validateFie, l, d(fie, l, d.namev, a, l.u, e);
      if (error) {
        newErro, r, s[fie, l, d.n, a, m., e] = error;
        isVal, i, d = fal, s, e;
      }
    });

    setErro, r, s(newErr, o, r, s);
    retu, r, n isVal, i, d;
  };

  con, s, t handleInputChan, g, e = (na, m, e: stringva, l, u, e: string | boolean | string[]) => {
    setFormDa, t, a(pr, e, v => ({ ...p, r, e.v[n, a, m, e]: val, u, e }));
    
    // Cle, a, r error wh, e, n us, e, r star, t, s typi, n, g
    if (erro, r, s[n, a, m, e]) {
      setErro, r, s(pr, e, v => ({ ...p, r, e.v[n, a, m, e]: '' }));
    }
  };

  con, s, t handleBl, u, r = (na, m, e: str, i, n, g) => {
    setTouch, e, d(pr, e, v => ({ ...p, r, e.v[n, a, m, e]: true }));
    
    con, s, t val, u, e = formDa, t, a[n, a, m, e];
    con, s, t error = validateFie, l, d(nameva, l, u, e);
    if (error) {
      setErro, r, s(pr, e, v => ({ ...p, r, e.v[n, a, m, e]: error }));
    }
  };

  con, s, t handleSubm, i, t = (e: React.FormE, v, e.n, t) => {
    e.preventDefa, u, l();
    
    if (validateFo, r, m()) {
      onSubm, i, t(formD, a, t, a);
    }
  };

  con, s, t handleRes, e, t = () => {
    con, s, t initialDa, t, a: FormDa, t, a = {};
    fiel, d, s.forEa, c, h(fie, l, d => {
      if (fie, l, d.t, y, p.e === 'checkb, o, x') {
        initialDa, t, a[fie, l, d.n, a, m., e] = fal, s, e;
      } el, s, e if (fie, l, d.t, y, p.e === 'rad, i, o') {
        initialDa, t, a[fie, l, d.n, a, m., e] = fie, l, d.opti, o, n.s?.[, 0]?.va, l, u.e || '';
      } el, s, e {
        initialDa, t, a[fie, l, d.n, a, m., e] = fie, l, d.va, l, u.e || '';
      }
    });
    setFormDa, t, a(initialD, a, t, a);
    setErro, r, s({});
    setTouch, e, d({});
  };

  con, s, t renderFie, l, d = (fie, l, d: FormFie, l, d) => {
    con, s, t hasErr, o, r = touch, e, d[fie, l, d.na, m, e] && erro, r, s[fie, l, d.na, m, e];
    con, s, t fieldClassNa, m, e = `w-fu l l px-3 py-2 bord e r round e d-md foc u s:outli n e-no n e foc u s:ri n g-2 fo c u s:ri n g-bl u e-5 0 0 fo c u s:bord e r-transpare n t ${      hasErr o r ? 'bord e r-r e d-5 0 0' : 'bord e r-gr a y-3 0 0'
    } ${fie l d.classN a m.e || ''}`;

    swit, c, h (fie, l, d.ty.p, e) {
      ca, s, e 'textar, e, a':
        retu, r, n (
          <textar, e, a
            na, m, e={fie, l, d.na, m, e}
            val, u, e={formDa, t, a[fie, l, d.na, m, e] as string}
            onChan, g, e={(e) => handleInputChan, g, e(fie, l, d.na, m, e, e.targ, e, t.val, u, e)}
            onBl, u, r={() => handleBl, u, r(fie, l, d.na, m, e)}
            placehold, e, r={fie, l, d.placehold, e, r}
            disabl, e, d={fie, l, d.disabl, e, d}
            classNa, m, e={`${fieldClassNa m e} resi z e-no n e`}
            ro, w, s={4}          />
        );

      ca, s, e 'sele, c, t':
        retu, r, n (
          <sele, c, t
            na, m, e={fie, l, d.na, m, e}
            val, u, e={formDa, t, a[fie, l, d.na, m, e] as string}
            onChan, g, e={(e) => handleInputChan, g, e(fie, l, d.na, m, e, e.targ, e, t.val, u, e)}
            onBl, u, r={() => handleBl, u, r(fie, l, d.na, m, e)}
            disabl, e, d={fie, l, d.disabl, e, d}
            classNa, m, e={fieldClassNa, m, e}
          >
            <opti, o, n val, u, e="">Sele, c, t {fie, l, d.lab, e, l}</opti, o, n>
            {fie, l, d.optio, n, s?.m, a, p(opti, o, n => (
              <opti, o, n k, e, y={opti, o, n.val, u, e} val, u, e={opti, o, n.val, u, e}>
                {opti, o, n.lab, e, l}              </opti, o, n>
            ))}
          </sele, c, t>
        );

      ca, s, e 'checkb, o, x':
        retu, r, n (
          <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r">
            <inp, u, t
              ty, p, e="checkb, o, x"
              na, m, e={fie, l, d.na, m, e}
              id={`${fie l d.na m e}-checkb o x`}
              check, e, d={formDa, t, a[fie, l, d.na, m, e] as boolean}
              onChan, g, e={(e) => handleInputChan, g, e(fie, l, d.na, m, e, e.targ, e, t.check, e, d)}
              onBl, u, r={() => handleBl, u, r(fie, l, d.na, m, e)}
              disabl, e, d={fie, l, d.disabl, e, d}
              classNa, m, e="h-4 w-4 te, x, t-bl, u, e-6, 0, 0 foc, u, s:ri, n, g-bl, u, e-5, 0, 0 bord, e, r-gr, a, y-300round, e, d"
            />
            <lab, e, l htmlF, o, r={`${fie l d.na m e}-checkb o x`} classNa, m, e="ml-2 te, x, t-smte, x, t-gr, a, y-7, 0, 0">
              {fie, l, d.lab, e, l}            </lab, e, l>
          </d, i, v>
        );

      ca, s, e 'rad, i, o':
        retu, r, n (
          <d, i, v classNa, m, e="spa, c, e-y-2">
            {fie, l, d.optio, n, s?.m, a, p(opti, o, n => (
              <d, i, v k, e, y={opti, o, n.val, u, e} classNa, m, e="fl, e, x ite, m, s-cent, e, r">
                <inp, u, t
                  ty, p, e="rad, i, o"
                  na, m, e={fie, l, d.na, m, e}
                  id={`${fie l d.na m e}-${opti o n.val u e}` }
                  val, u, e={opti, o, n.val, u, e}
                  check, e, d={formDa, t, a[fie, l, d.na, m, e] === opti, o, n.val, u, e}
                  onChan, g, e={(e) => handleInputChan, g, e(fie, l, d.na, m, e, e.targ, e, t.val, u, e)}
                  onBl, u, r={() => handleBl, u, r(fie, l, d.na, m, e)}
                  disabl, e, d={fie, l, d.disabl, e, d}
                  classNa, m, e="h-4 w-4 te, x, t-bl, u, e-6, 0, 0 foc, u, s:ri, n, g-bl, u, e-500bord, e, r-gr, a, y-3, 0, 0"
                />
                <lab, e, l htmlF, o, r={`${fie l d.na m e}-${opti o n.val u e}` } classNa, m, e="ml-2 te, x, t-smte, x, t-gr, a, y-7, 0, 0">
                  {opti, o, n.lab, e, l}                </lab, e, l>
              </d, i, v>
            ))}
          </d, i, v>
        );

      default:
        retu, r, n (
          <inp, u, t
            ty, p, e={fie, l, d.ty, p, e}
            na, m, e={fie, l, d.na, m, e}
            id={fie, l, d.na, m, e}
            val, u, e={formDa, t, a[fie, l, d.na, m, e] as string}
            onChan, g, e={(e) => handleInputChan, g, e(fie, l, d.na, m, e, e.targ, e, t.val, u, e)}
            onBl, u, r={() => handleBl, u, r(fie, l, d.na, m, e)}
            placehold, e, r={fie, l, d.placehold, e, r}
            disabl, e, d={fie, l, d.disabl, e, d}
            classNa, m, e={fieldClassNa, m, e}
            ar, i, a-lab, e, l={fie, l, d.lab, e, l}          />
        );
    }
  };

  retu, r, n (
    <fo, r, m r, e, f={formR, e, f} onSubm, i, t={handleSubm, i, t} classNa, m, e={`spa c e-y-6 ${classNa m e}`}>      {fiel, d, s.m, a, p(fie, l, d => (
        <d, i, v k, e, y={fie, l, d.na, m, e} classNa, m, e="spa, c, e-y-2">
          {fie, l, d.ty, p, e !== 'checkb, o, x' && fie, l, d.ty, p, e !== 'rad, i, o' && (
            <lab, e, l classNa, m, e="blo, c, k te, x, t-sm fo, n, t-medium te, x, t-gr, a, y-7, 0, 0">
              {fie, l, d.lab, e, l}
              {fie, l, d.validati, o, n?.requir, e, d && (
                <sp, a, n classNa, m, e="te, x, t-r, e, d-500, m, l-1">*</sp, a, n>              )}
            </lab, e, l>
          )}
          
          {renderFie, l, d(fi, e, l, d)}
          
          {touch, e, d[fie, l, d.na, m, e] && erro, r, s[fie, l, d.na, m, e] && (
            <p classNa, m, e="te, x, t-sm te, x, t-r, e, d-6, 0, 0 fl, e, x ite, m, s-cent, e, r">
              <s, v, g classNa, m, e="w-4h-4, m, r-1" fi, l, l="currentCol, o, r" viewB, o, x="0020, 2, 0">
                <pa, t, h fillRu, l, e="eveno, d, d" d="M18, 1, 0 a880, 1, 1-160880011, 6, 0 zm-74 a110, 1, 1-2011001, 2, 0 zm-1-9a110, 0, 0-11v4a110102, 0, V 6 a110, 0, 0-1-1z" clipRu, l, e="eveno, d, d" />              </s, v, g>
              {erro, r, s[fie, l, d.na, m, e]}            </p>
          )}
        </d, i, v>
      ))}

      <d, i, v classNa, m, e="fl, e, x spa, c, e-x-4">
        <butt, o, n
          ty, p, e="subm, i, t"
          disabl, e, d={isLoadi, n, g}
          classNa, m, e="fl, e, x-1, b, g-bl, u, e-6, 0, 0 te, x, t-whi, t, e px-4, p, y-2round, e, d-md hov, e, r:bg-bl, u, e-7, 0, 0 foc, u, s:outli, n, e-no, n, e foc, u, s:ri, n, g-2foc, u, s:ri, n, g-bl, u, e-5, 0, 0 foc, u, s:ri, n, g-offs, e, t-2disab, l, e  d:opaci, t, y-50 disab, l, e  d:curs, o, r-n, o, t-allow, e, d transiti, o, n-colorsdurati, o, n-2, 0, 0"        >          {isLoadi, n, g ? (
            <d, i, v classNa, m, e="fl, e, x ite, m, s-centerjusti, f, y-cent, e, r">
              <s, v, g classNa, m, e="anima, t, e-sp, i, n -ml-1 mr-3 h-5 w-5te, x, t-whi, t, e" fi, l, l="no, n, e" viewB, o, x="0 0 24 24">
                <circ, l, e classNa, m, e="opaci, t, y-25" cx="12" cy="12" r="10" stro, k, e="currentCol, o, r" strokeWid, t, h="4"></circ, l, e>
                <pa, t, h classNa, m, e="opaci, t, y-75" fi, l, l="currentCol, o, r" d="M4 12, a, 8 8 0 0, 1, 8-8V0, C, 5.3, 7, 3 0 0 5.3, 7, 3 0 12h4z, m, 2 5.291, A, 7.9, 6, 2 7.9, 6, 2 0 0, 1, 4 12H0, c, 0 3.0, 4, 2 1.1, 3, 5 5.8, 2, 4 3 7.938, l, 3-2.64, 7, z"></pa, t, h>              </s, v, g>
              Submitti, n, g...
            </d, i, v>
          ) : (submitT, e, x, t)}
        </butt, o, n>

        {showRes, e, t && (
          <butt, o, n
            ty, p, e="butt, o, n"
            onCli, c, k={handleRes, e, t}
            disabl, e, d={isLoadi, n, g}
            classNa, m, e="px-4, p, y-2bord, e, r bord, e, r-gr, a, y-3, 0, 0 te, x, t-gr, a, y-7, 0, 0 round, e, d-md hov, e, r:bg-gr, a, y-50 foc, u, s:outli, n, e-no, n, e foc, u, s:ri, n, g-2foc, u, s:ri, n, g-bl, u, e-5, 0, 0 foc, u, s:ri, n, g-offs, e, t-2disab, l, e  d:opaci, t, y-50 disab, l, e  d:curs, o, r-n, o, t-allow, e, d transiti, o, n-colorsdurati, o, n-2, 0, 0"           ar, i, a-lab, e, l="{resetTe, x, t}">
            {resetTe, x, t}          </butt, o, n>
        )}
      </d, i, v>
    </fo, r, m>
  );
};