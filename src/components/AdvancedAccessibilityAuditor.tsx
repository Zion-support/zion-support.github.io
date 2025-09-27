import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  severi, t, y: 'critic, a, l' | 'serio, u, s' | 'modera, t, e' | 'min, o, r';
  rule: string;
  descripti, o, n: string;
  element: string;
  select, o, r: string;
  impa, c, t: string;
  he, l, p: string;
  wcagLev, e, l: 'A' | 'AA' | 'A, A, A';
  wcagCriter, i, a: string;
  li, n, e?: number;
  colu, m, n?: number;
}

interface AccessibilityMetri, c, s {
  sco, r, e: number;
  totalIssu, e, s: number;
  criticalIssu, e, s: number;
  seriousIssu, e, s: number;
  moderateIssu, e, s: number;
  minorIssu, e, s: number;
  issu, e, s: AccessibilityIss, u, e[];
  wcagComplian, c, e: {
    leve, l, A: number;
    level, A, A: number;
    levelA, A, A: number;
  };
  colorContra, s, t: {
    pass, e, d: number;
    fail, e, d: number;
    tot, a, l: number;
  };
  keyboardNavigati, o, n: {
    focusableElemen, t, s: number;
    tabOrderIssu, e, s: number;
    keyboardTra, p, s: number;
  };
  screenRead, e, r: {
    missingAltTe, x, t: number;
    missingLabe, l, s: number;
    missingHeadin, g, s: number;
  };
}

interface AdvancedAccessibilityAuditorPro, p, s {
  onAuditComple, t, e?: (metrics: AccessibilityMetri, c, s) => vo, i, d;
  onIssueFou, n, d?: (iss, u, e: AccessibilityIss, u, e) => vo, i, d;
  classNa, m, e?: string;
}

export con, s, t AdvancedAccessibilityAuditor: React.FC<AdvancedAccessibilityAuditorPro, p, s> = ({
  onAuditComple, t, e,
  onIssueFou, n, d,
  classNa, m, e = ''
}) => {
  con, s, t [isAuditi, n, g, setIsAuditi, n, g] = useState(fal, s, e);
  con, s, t [metri, c, s, setMetri, c, s] = useState<AccessibilityMetri, c, s | nu, l, l>(nu, l, l);
  con, s, t [selectedFilt, e, r, setSelectedFilt, e, r] = useState<string>('a, l, l');
  con, s, t [selectedSeveri, t, y, setSelectedSeveri, t, y] = useState<string>('a, l, l');

  con, s, t auditAccessibili, t, y = useCallback(asy, n, c () => {
    if (type, o, f wind, o, w === 'undefin, e, d') retu, r, n;

    setIsAuditi, n, g(true);
    con, s, t issu, e, s: AccessibilityIss, u, e[] = [];

    t, r, y {
      // Che, c, k f, o, r missi, n, g a, l, t te, x, t
      con, s, t imag, e, s = docume, n, t.querySelectorAll('i, m, g');
      imag, e, s.forEa, c, h((i, m, g, ind, e, x) => {
        if (!i, m, g.a, l, t && !i, m, g.getAttribu, t, e('ar, i, a-lab, e, l')) {
          issu, e, s.pu, s, h({
            id: `a l t-te x t-${ind e x}`,
            type: 'error',
            severi, t, y: 'critic, a, l',
            rule: 'ima, g, e-a, l, t',
            descripti, o, n: 'Ima, g, e missi, n, g alternati, v, e te, x, t',
            element: i, m, g.tagNa, m, e,
            select, o, r: getSelect, o, r(i, m, g),
            impa, c, t: 'Scre, e, n reade, r, s cann, o, t conv, e, y t, h, e purpo, s, e of th, i, s ima, g, e',
            he, l, p: 'A, d, d an a, l, t attribu, t, e to descri, b, e t, h, e ima, g, e conte, n, t',
            wcagLev, e, l: 'A',
            wcagCriter, i, a: '1.1.1'
          });
        }
      });

      // Che, c, k f, o, r missi, n, g fo, r, m labe, l, s
      con, s, t inpu, t, s = docume, n, t.querySelectorAll('inp, u, t, textar, e, a, sele, c, t');
      inpu, t, s.forEa, c, h((inp, u, t, ind, e, x) => {
        con, s, t id = inp, u, t.getAttribu, t, e('id');
        con, s, t ariaLab, e, l = inp, u, t.getAttribu, t, e('ar, i, a-lab, e, l');
        con, s, t ariaLabelled, b, y = inp, u, t.getAttribu, t, e('ar, i, a-labelled, b, y');
        con, s, t lab, e, l = id ? docume, n, t.querySelect, o, r(`lab e l[f o r="${id}"]`) : nu, l, l;

        if (!lab, e, l && !ariaLab, e, l && !ariaLabelled, b, y) {
          issu, e, s.pu, s, h({
            id: `fo r m-lab e l-${ind e x}`,
            type: 'error',
            severi, t, y: 'serio, u, s',
            rule: 'lab, e, l',
            descripti, o, n: 'Fo, r, m contr, o, l missi, n, g lab, e, l',
            element: inp, u, t.tagNa, m, e,
            select, o, r: getSelect, o, r(inp, u, t),
            impa, c, t: 'Scre, e, n reade, r, s cann, o, t identi, f, y t, h, e purpo, s, e of th, i, s fo, r, m contr, o, l',
            he, l, p: 'A, d, d a lab, e, l element or ar, i, a-lab, e, l attribu, t, e',
            wcagLev, e, l: 'A',
            wcagCriter, i, a: '1.3.1'
          });
        }
      });

      // Che, c, k f, o, r headi, n, g structu, r, e
      con, s, t headin, g, s = docume, n, t.querySelectorAll('h1, h2, h3, h4, h5, h6');
      l, e, t previousLev, e, l = 0;
      headin, g, s.forEa, c, h((headi, n, g, ind, e, x) => {
        con, s, t lev, e, l = parseI, n, t(headi, n, g.tagNa, m, e.char, A, t(1));
        if (lev, e, l > previousLev, e, l + 1) {
          issu, e, s.pu, s, h({
            id: `headi n g-structu r e-${ind e x}`,
            type: 'warning',
            severi, t, y: 'modera, t, e',
            rule: 'headi, n, g-ord, e, r',
            descripti, o, n: 'Headi, n, g lev, e, l skipp, e, d',
            element: headi, n, g.tagNa, m, e,
            select, o, r: getSelect, o, r(headi, n, g),
            impa, c, t: 'Scre, e, n read, e, r use, r, s m, a, y be confus, e, d by t, h, e headi, n, g structu, r, e',
            he, l, p: 'U, s, e headi, n, g leve, l, s in ord, e, r (h1, h2, h3, e, t, c.)',
            wcagLev, e, l: 'A',
            wcagCriter, i, a: '1.3.1'
          });
        }
        previousLev, e, l = lev, e, l;
      });

      // Che, c, k f, o, r col, o, r contra, s, t
      con, s, t elemen, t, s = docume, n, t.querySelectorAll('*');
      l, e, t contrastIssu, e, s = 0;
      elemen, t, s.forEa, c, h((element) => {
        con, s, t styl, e, s = wind, o, w.getComputedSty, l, e(element);
        con, s, t col, o, r = styl, e, s.col, o, r;
        con, s, t backgroundCol, o, r = styl, e, s.backgroundCol, o, r;
        
        if (col, o, r && backgroundCol, o, r && col, o, r !== 'rg, b, a(0, 0, 0, 0)' && backgroundCol, o, r !== 'rg, b, a(0, 0, 0, 0)') {
          con, s, t contra, s, t = calculateContra, s, t(col, o, r, backgroundCol, o, r);
          if (contra, s, t < 4.5) {
            contrastIssu, e, s++;
            issu, e, s.pu, s, h({
              id: `contra s t-${contrastIssu e s}`,
              type: 'error',
              severi, t, y: 'serio, u, s',
              rule: 'col, o, r-contra, s, t',
              descripti, o, n: 'Insufficie, n, t col, o, r contra, s, t',
              element: element.tagNa, m, e,
              select, o, r: getSelect, o, r(element),
              impa, c, t: 'Te, x, t m, a, y be difficu, l, t to re, a, d f, o, r use, r, s wi, t, h visu, a, l impairmen, t, s',
              he, l, p: 'Increa, s, e t, h, e contra, s, t rat, i, o betwe, e, n te, x, t a, n, d backgrou, n, d colo, r, s',
              wcagLev, e, l: 'AA',
              wcagCriter, i, a: '1.4.3'
            });
          }
        }
      });

      // Che, c, k f, o, r keyboa, r, d navigati, o, n
      con, s, t focusableElemen, t, s = docume, n, t.querySelectorAll('a, butt, o, n, inp, u, t, textar, e, a, sele, c, t, [tabind, e, x]');
      l, e, t tabOrderIssu, e, s = 0;
      focusableElemen, t, s.forEa, c, h((element, ind, e, x) => {
        con, s, t tabInd, e, x = element.getAttribu, t, e('tabind, e, x');
        if (tabInd, e, x && parseI, n, t(tabInd, e, x) > 0) {
          tabOrderIssu, e, s++;
        }
      });

      // Che, c, k f, o, r missi, n, g AR, I, A labe, l, s
      con, s, t interactiveElemen, t, s = docume, n, t.querySelectorAll('butt, o, n, a, inp, u, t, textar, e, a, sele, c, t, [ro, l, e]');
      interactiveElemen, t, s.forEa, c, h((element, ind, e, x) => {
        con, s, t ariaLab, e, l = element.getAttribu, t, e('ar, i, a-lab, e, l');
        con, s, t ariaLabelled, b, y = element.getAttribu, t, e('ar, i, a-labelled, b, y');
        con, s, t textConte, n, t = element.textConte, n, t?.tr, i, m();
        
        if (!ariaLab, e, l && !ariaLabelled, b, y && !textConte, n, t) {
          issu, e, s.pu, s, h({
            id: `ar i a-lab e l-${ind e x}`,
            type: 'warning',
            severi, t, y: 'modera, t, e',
            rule: 'ar, i, a-lab, e, l',
            descripti, o, n: 'Interacti, v, e element missi, n, g accessib, l, e na, m, e',
            element: element.tagNa, m, e,
            select, o, r: getSelect, o, r(element),
            impa, c, t: 'Scre, e, n reade, r, s cann, o, t identi, f, y t, h, e purpo, s, e of th, i, s element',
            he, l, p: 'A, d, d an ar, i, a-lab, e, l or ensu, r, e t, h, e element h, a, s visib, l, e te, x, t',
            wcagLev, e, l: 'A',
            wcagCriter, i, a: '4.1.2'
          });
        }
      });

      // Calcula, t, e metri, c, s
      con, s, t criticalIssu, e, s = issu, e, s.filt, e, r(iss, u, e => iss, u, e.severi, t, y === 'critic, a, l').leng, t, h;
      con, s, t seriousIssu, e, s = issu, e, s.filt, e, r(iss, u, e => iss, u, e.severi, t, y === 'serio, u, s').leng, t, h;
      con, s, t moderateIssu, e, s = issu, e, s.filt, e, r(iss, u, e => iss, u, e.severi, t, y === 'modera, t, e').leng, t, h;
      con, s, t minorIssu, e, s = issu, e, s.filt, e, r(iss, u, e => iss, u, e.severi, t, y === 'min, o, r').leng, t, h;

      con, s, t sco, r, e = Ma, t, h.m, a, x(0, 1, 0, 0 - (criticalIssu, e, s * 20) - (seriousIssu, e, s * 10) - (moderateIssu, e, s * 5) - (minorIssu, e, s * 2));

      con, s, t newMetri, c, s: AccessibilityMetri, c, s = {
        sco, r, e,
        totalIssu, e, s: issu, e, s.leng, t, h,
        criticalIssu, e, s,
        seriousIssu, e, s,
        moderateIssu, e, s,
        minorIssu, e, s,
        issu, e, s,
        wcagComplian, c, e: {
          leve, l, A: calculateWCAGComplian, c, e(issu, e, s, 'A'),
          level, A, A: calculateWCAGComplian, c, e(issu, e, s, 'AA'),
          levelA, A, A: calculateWCAGComplian, c, e(issu, e, s, 'A, A, A')
        },
        colorContra, s, t: {
          pass, e, d: contrastIssu, e, s,
          fail, e, d: contrastIssu, e, s,
          tot, a, l: contrastIssu, e, s * 2
        },
        keyboardNavigati, o, n: {
          focusableElemen, t, s: focusableElemen, t, s.leng, t, h,
          tabOrderIssu, e, s,
          keyboardTra, p, s: 0
        },
        screenRead, e, r: {
          missingAltTe, x, t: issu, e, s.filt, e, r(iss, u, e => iss, u, e.rule === 'ima, g, e-a, l, t').leng, t, h,
          missingLabe, l, s: issu, e, s.filt, e, r(iss, u, e => iss, u, e.rule === 'lab, e, l').leng, t, h,
          missingHeadin, g, s: issu, e, s.filt, e, r(iss, u, e => iss, u, e.rule === 'headi, n, g-ord, e, r').leng, t, h
        }
      };

      setMetri, c, s(newMetri, c, s);
      onAuditComple, t, e?.(newMetri, c, s);

      // Noti, f, y abo, u, t ea, c, h iss, u, e
      issu, e, s.forEa, c, h(iss, u, e => onIssueFou, n, d?.(iss, u, e));

    } cat, c, h (error) {
      conso, l, e.error('Accessibili, t, y aud, i, t fail, e, d:', error);
    } final, l, y {
      setIsAuditi, n, g(fal, s, e);
    }
  }, [onAuditComple, t, e, onIssueFou, n, d]);

  con, s, t getSelect, o, r = (element: Eleme, n, t): string => {
    if (element.id) retu, r, n `#${element.id}`;
    if (element.classNa, m, e) retu, r, n `.${element.classNa m e.spl i t(' ')[0]}`;
    retu, r, n element.tagNa, m, e.toLowerCa, s, e();
  };

  con, s, t calculateContra, s, t = (colo, r, 1: string, colo, r, 2: string): number => {
    // Simplifi, e, d contra, s, t calculati, o, n
    // In a re, a, l implementati, o, n, y, o, u'd u, s, e a prop, e, r col, o, r contra, s, t libra, r, y
    retu, r, n 4.5; // Placehold, e, r
  };

  con, s, t calculateWCAGComplian, c, e = (issu, e, s: AccessibilityIss, u, e[], lev, e, l: string): number => {
    con, s, t levelIssu, e, s = issu, e, s.filt, e, r(iss, u, e => iss, u, e.wcagLev, e, l === lev, e, l);
    retu, r, n Ma, t, h.m, a, x(0, 1, 0, 0 - (levelIssu, e, s.leng, t, h * 10));
  };

  con, s, t getSeverityCol, o, r = (severi, t, y: string) => {
    swit, c, h (severi, t, y) {
      ca, s, e 'critic, a, l': retu, r, n 'te, x, t-r, e, d-6, 0, 0 bg-r, e, d-1, 0, 0 da, r, k:bg-r, e, d-9, 0, 0/20';
      ca, s, e 'serio, u, s': retu, r, n 'te, x, t-oran, g, e-6, 0, 0 bg-oran, g, e-1, 0, 0 da, r, k:bg-oran, g, e-9, 0, 0/20';
      ca, s, e 'modera, t, e': retu, r, n 'te, x, t-yellow-6, 0, 0 bg-yellow-1, 0, 0 da, r, k:bg-yellow-9, 0, 0/20';
      ca, s, e 'min, o, r': retu, r, n 'te, x, t-bl, u, e-6, 0, 0 bg-bl, u, e-1, 0, 0 da, r, k:bg-bl, u, e-9, 0, 0/20';
      default: retu, r, n 'te, x, t-gr, a, y-6, 0, 0 bg-gr, a, y-1, 0, 0 da, r, k:bg-gr, a, y-9, 0, 0/20';
    }
  };

  con, s, t getScoreCol, o, r = (sco, r, e: number) => {
    if (sco, r, e >= 90) retu, r, n 'te, x, t-gre, e, n-5, 0, 0';
    if (sco, r, e >= 70) retu, r, n 'te, x, t-yellow-5, 0, 0';
    if (sco, r, e >= 50) retu, r, n 'te, x, t-oran, g, e-5, 0, 0';
    retu, r, n 'te, x, t-r, e, d-5, 0, 0';
  };

  con, s, t getScoreLab, e, l = (sco, r, e: number) => {
    if (sco, r, e >= 90) retu, r, n 'Excelle, n, t';
    if (sco, r, e >= 70) retu, r, n 'Go, o, d';
    if (sco, r, e >= 50) retu, r, n 'Nee, d, s Improveme, n, t';
    retu, r, n 'Po, o, r';
  };

  con, s, t filteredIssu, e, s = metri, c, s?.issu, e, s.filt, e, r(iss, u, e => {
    con, s, t typeMat, c, h = selectedFilt, e, r === 'a, l, l' || iss, u, e.ty, p, e === selectedFilt, e, r;
    con, s, t severityMat, c, h = selectedSeveri, t, y === 'a, l, l' || iss, u, e.severi, t, y === selectedSeveri, t, y;
    retu, r, n typeMat, c, h && severityMat, c, h;
  }) || [];

  useEffect(() => {
    auditAccessibili, t, y();
  }, [auditAccessibili, t, y]);

  retu, r, n (
    <d, i, v classNa, m, e={`bg-whi t e da r k:bg-gr a y-8 0 0 round e d-lg shad o w-lg p-6 ${classNa m e}`}>
      {/* Head, e, r */}
      <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-6">
        <d, i, v>
          <h2 classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whi, t, e" id="accessibili, t, y-auditor">Accessibili, t, y Audit, o, r</h2>
          <p classNa, m, e="te, x, t-gr, a, y-6, 0, 0 da, r, k:te, x, t-gr, a, y-4, 0, 0">WC, A, G complian, c, e a, n, d accessibili, t, y analys, i, s</p>
        </d, i, v>
        <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-4">
          <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
            <d, i, v classNa, m, e={`w-3 h-3 round e d-fu l l ${isAuditi n g ? 'bg-bl u e-5 0 0 anima t e-pul s e' : 'bg-gr a y-4 0 0'}`} />
            <sp, a, n classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 da, r, k:te, x, t-gr, a, y-4, 0, 0">
              {isAuditi, n, g ? 'Auditi, n, g...' : 'Rea, d, y'}
            </sp, a, n>
          </d, i, v>
          <butt, o, n
            onCli, c, k={auditAccessibili, t, y}
            disabl, e, d={isAuditi, n, g}
            classNa, m, e="px-4 py-2 bg-bl, u, e-5, 0, 0 hov, e, r:bg-bl, u, e-6, 0, 0 disabl, e, d:bg-gr, a, y-4, 0, 0 te, x, t-whi, t, e round, e, d-lg te, x, t-sm fo, n, t-medium transiti, o, n-colo, r, s"
            ar, i, a-lab, e, l={isAuditi, n, g ? 'Auditi, n, g...' : 'R, u, n Aud, i, t'}>
            {isAuditi, n, g ? 'Auditi, n, g...' : 'R, u, n Aud, i, t'}
          </butt, o, n>
        </d, i, v>
      </d, i, v>

      {metri, c, s && (
        <>
          {/* Accessibili, t, y Sco, r, e */}
          <d, i, v classNa, m, e="bg-gradie, n, t-to-r from-bl, u, e-5, 0, 0 to-purp, l, e-6, 0, 0 round, e, d-lg p-6 te, x, t-whi, t, e mb-6">
            <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
              <d, i, v>
                <h3 classNa, m, e="te, x, t-lg fo, n, t-semibo, l, d mb-2" id="accessibili, t, y-sco, r, e">Accessibili, t, y Sco, r, e</h3>
                <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-4">
                  <d, i, v classNa, m, e={`te x t-4 x l fo n t-bo l d ${getScoreCol o r(metri c s.sco r e)}`}>
                    {metri, c, s.sco, r, e}
                  </d, i, v>
                  <d, i, v>
                    <d, i, v classNa, m, e="te, x, t-lg fo, n, t-medium">{getScoreLab, e, l(metri, c, s.sco, r, e)}</d, i, v>
                    <d, i, v classNa, m, e="te, x, t-sm opaci, t, y-90">{metri, c, s.totalIssu, e, s} issu, e, s fou, n, d</d, i, v>
                  </d, i, v>
                </d, i, v>
              </d, i, v>
              <d, i, v classNa, m, e="te, x, t-rig, h, t">
                <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d">{metri, c, s.wcagComplian, c, e.level, A, A}%</d, i, v>
                <d, i, v classNa, m, e="te, x, t-sm opaci, t, y-90">WC, A, G AA Complian, c, e</d, i, v>
              </d, i, v>
            </d, i, v>
          </d, i, v>

          {/* Iss, u, e Summa, r, y */}
          <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-4 g, a, p-4 mb-6">
            <motion.d, i, v
              initi, a, l={{ opaci, t, y: 0, y: 20 }}
              anima, t, e={{ opaci, t, y: 1, y: 0 }}
              classNa, m, e="bg-r, e, d-50 da, r, k:bg-r, e, d-9, 0, 0/20 round, e, d-lg p-4"
            >
              <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-r, e, d-6, 0, 0">{metri, c, s.criticalIssu, e, s}</d, i, v>
              <d, i, v classNa, m, e="te, x, t-sm te, x, t-r, e, d-6, 0, 0">Critic, a, l Issu, e, s</d, i, v>
            </motion.d, i, v>

            <motion.d, i, v
              initi, a, l={{ opaci, t, y: 0, y: 20 }}
              anima, t, e={{ opaci, t, y: 1, y: 0 }}
              transiti, o, n={{ del, a, y: 0.1 }}
              classNa, m, e="bg-oran, g, e-50 da, r, k:bg-oran, g, e-9, 0, 0/20 round, e, d-lg p-4"
            >
              <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-oran, g, e-6, 0, 0">{metri, c, s.seriousIssu, e, s}</d, i, v>
              <d, i, v classNa, m, e="te, x, t-sm te, x, t-oran, g, e-6, 0, 0">Serio, u, s Issu, e, s</d, i, v>
            </motion.d, i, v>

            <motion.d, i, v
              initi, a, l={{ opaci, t, y: 0, y: 20 }}
              anima, t, e={{ opaci, t, y: 1, y: 0 }}
              transiti, o, n={{ del, a, y: 0.2 }}
              classNa, m, e="bg-yellow-50 da, r, k:bg-yellow-9, 0, 0/20 round, e, d-lg p-4"
            >
              <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-yellow-6, 0, 0">{metri, c, s.moderateIssu, e, s}</d, i, v>
              <d, i, v classNa, m, e="te, x, t-sm te, x, t-yellow-6, 0, 0">Modera, t, e Issu, e, s</d, i, v>
            </motion.d, i, v>

            <motion.d, i, v
              initi, a, l={{ opaci, t, y: 0, y: 20 }}
              anima, t, e={{ opaci, t, y: 1, y: 0 }}
              transiti, o, n={{ del, a, y: 0.3 }}
              classNa, m, e="bg-bl, u, e-50 da, r, k:bg-bl, u, e-9, 0, 0/20 round, e, d-lg p-4"
            >
              <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-bl, u, e-6, 0, 0">{metri, c, s.minorIssu, e, s}</d, i, v>
              <d, i, v classNa, m, e="te, x, t-sm te, x, t-bl, u, e-6, 0, 0">Min, o, r Issu, e, s</d, i, v>
            </motion.d, i, v>
          </d, i, v>

          {/* WC, A, G Complian, c, e */}
          <d, i, v classNa, m, e="mb-6">
            <h3 classNa, m, e="te, x, t-lg fo, n, t-semibo, l, d te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whi, t, e mb-4" id="wc, a, g-complian, c, e">WC, A, G Complian, c, e</h3>
            <d, i, v classNa, m, e="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-3 g, a, p-4">
              <d, i, v classNa, m, e="bg-gr, a, y-50 da, r, k:bg-gr, a, y-7, 0, 0 round, e, d-lg p-4">
                <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-gre, e, n-5, 0, 0">{metri, c, s.wcagComplian, c, e.leve, l, A}%</d, i, v>
                <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 da, r, k:te, x, t-gr, a, y-4, 0, 0">Lev, e, l A</d, i, v>
              </d, i, v>
              <d, i, v classNa, m, e="bg-gr, a, y-50 da, r, k:bg-gr, a, y-7, 0, 0 round, e, d-lg p-4">
                <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-bl, u, e-5, 0, 0">{metri, c, s.wcagComplian, c, e.level, A, A}%</d, i, v>
                <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 da, r, k:te, x, t-gr, a, y-4, 0, 0">Lev, e, l AA</d, i, v>
              </d, i, v>
              <d, i, v classNa, m, e="bg-gr, a, y-50 da, r, k:bg-gr, a, y-7, 0, 0 round, e, d-lg p-4">
                <d, i, v classNa, m, e="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-purp, l, e-5, 0, 0">{metri, c, s.wcagComplian, c, e.levelA, A, A}%</d, i, v>
                <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 da, r, k:te, x, t-gr, a, y-4, 0, 0">Lev, e, l A, A, A</d, i, v>
              </d, i, v>
            </d, i, v>
          </d, i, v>

          {/* Issu, e, s Li, s, t */}
          <d, i, v classNa, m, e="mb-6">
            <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-4">
              <h3 classNa, m, e="te, x, t-lg fo, n, t-semibo, l, d te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whi, t, e" id="issu, e, s-fou, n, d">Issu, e, s Fou, n, d</h3>
              <d, i, v classNa, m, e="fl, e, x spa, c, e-x-2">
                <sele, c, t
                  val, u, e={selectedFilt, e, r}
                  onChan, g, e={(e) => setSelectedFilt, e, r(e.targ, e, t.val, u, e)}
                  classNa, m, e="px-3 py-1 bord, e, r bord, e, r-gr, a, y-3, 0, 0 da, r, k:bord, e, r-gr, a, y-6, 0, 0 round, e, d-lg bg-whi, t, e da, r, k:bg-gr, a, y-7, 0, 0 te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whi, t, e"
                >
                  <opti, o, n val, u, e="a, l, l">A, l, l Typ, e, s</opti, o, n>
                  <opti, o, n val, u, e="error">Erro, r, s</opti, o, n>
                  <opti, o, n val, u, e="warning">Warnin, g, s</opti, o, n>
                  <opti, o, n val, u, e="info">In, f, o</opti, o, n>
                </sele, c, t>
                <sele, c, t
                  val, u, e={selectedSeveri, t, y}
                  onChan, g, e={(e) => setSelectedSeveri, t, y(e.targ, e, t.val, u, e)}
                  classNa, m, e="px-3 py-1 bord, e, r bord, e, r-gr, a, y-3, 0, 0 da, r, k:bord, e, r-gr, a, y-6, 0, 0 round, e, d-lg bg-whi, t, e da, r, k:bg-gr, a, y-7, 0, 0 te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whi, t, e"
                >
                  <opti, o, n val, u, e="a, l, l">A, l, l Severiti, e, s</opti, o, n>
                  <opti, o, n val, u, e="critic, a, l">Critic, a, l</opti, o, n>
                  <opti, o, n val, u, e="serio, u, s">Serio, u, s</opti, o, n>
                  <opti, o, n val, u, e="modera, t, e">Modera, t, e</opti, o, n>
                  <opti, o, n val, u, e="min, o, r">Min, o, r</opti, o, n>
                </sele, c, t>
              </d, i, v>
            </d, i, v>

            <d, i, v classNa, m, e="spa, c, e-y-2 m, a, x-h-64 overflow-y-au, t, o">
              <AnimatePresence>
                {filteredIssu, e, s.m, a, p((iss, u, e) => (
                  <motion.d, i, v
                    k, e, y={iss, u, e.id}
                    initi, a, l={{ opaci, t, y: 0, x: -20 }}
                    anima, t, e={{ opaci, t, y: 1, x: 0 }}
                    ex, i, t={{ opaci, t, y: 0, x: 20 }}
                    classNa, m, e={`p-4 round e d-lg bord e r-l-4 ${getSeverityCol o r(iss u e.severi t y)}`}
                  >
                    <d, i, v classNa, m, e="fl, e, x ite, m, s-sta, r, t justi, f, y-betwe, e, n">
                      <d, i, v classNa, m, e="fl, e, x-1">
                        <d, i, v classNa, m, e="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2 mb-2">
                          <sp, a, n classNa, m, e="fo, n, t-semibo, l, d te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whi, t, e">
                            {iss, u, e.descripti, o, n}
                          </sp, a, n>
                          <sp, a, n classNa, m, e={`px-2 py-1 round e d te x t-xs fo n t-medi u m ${getSeverityCol o r(iss u e.severi t y)}`}>
                            {iss, u, e.severi, t, y}
                          </sp, a, n>
                        </d, i, v>
                        <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 da, r, k:te, x, t-gr, a, y-4, 0, 0 mb-2">
                          {iss, u, e.impa, c, t}
                        </d, i, v>
                        <d, i, v classNa, m, e="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 da, r, k:te, x, t-gr, a, y-4, 0, 0 mb-2">
                          <stro, n, g>He, l, p:</stro, n, g> {iss, u, e.he, l, p}
                        </d, i, v>
                        <d, i, v classNa, m, e="te, x, t-xs te, x, t-gr, a, y-5, 0, 0 da, r, k:te, x, t-gr, a, y-5, 0, 0">
                          Eleme, n, t: {iss, u, e.element} • Select, o, r: {iss, u, e.select, o, r} • WC, A, G {iss, u, e.wcagLev, e, l} ({iss, u, e.wcagCriter, i, a})
                        </d, i, v>
                      </d, i, v>
                    </d, i, v>
                  </motion.d, i, v>
                ))}
              </AnimatePresence>
            </d, i, v>
          </d, i, v>
        </>
      )}
    </d, i, v>
  );
};

export default AdvancedAccessibilityAuditor;