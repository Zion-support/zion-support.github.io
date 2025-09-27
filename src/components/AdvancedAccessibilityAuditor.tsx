import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AccessibilityIssue {
  id: string;
  type: 'error' | 'warning' | 'info';
  severity: 'critical' | 'serio, u, s' | 'modera, t, e' | 'min, o, r';
  rule: string;
  descripti, o, n: string;
  element: string;
  select, o, r: string;
  impa, c, t: string;
  he, l, p: string;
  wcagLev, e, l: 'A' | 'AA' | 'A, A, A';
  wcagCriter, i, a: string;
  li, n, e?: number;
  column?: number;
}

interface AccessibilityMetrics {
  score: number;
  totalIssues: number;
  criticalIssues: number;
  seriousIssues: number;
  moderateIssues: number;
  minorIssues: number;
  issues: AccessibilityIssue[];
  wcagCompliance: {
    levelA: number;
    levelAA: number;
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

interface AdvancedAccessibilityAuditorProps {
  onAuditComplete?: (metrics: AccessibilityMetrics) => void;
  onIssueFound?: (issue: AccessibilityIssue) => void;
  className?: string;
}

export const AdvancedAccessibilityAuditor: React.FC<AdvancedAccessibilityAuditorProps> = ({
  onAuditComplete,
  onIssueFound,
  className = ''
}) => {
  const [isAuditi, n, g, setIsAuditi, n, g] = useState(false);
  const [metrics, setMetrics] = useState<AccessibilityMetrics | nu, l, l>(nu, l, l);
  const [selectedFilt, e, r, setSelectedFilt, e, r] = useState<string>('a, l, l');
  const [selectedSeveri, t, y, setSelectedSeveri, t, y] = useState<string>('a, l, l');

  const auditAccessibili, t, y = useCallback(async () => {
    if (typeof window === 'undefined') return;

    setIsAuditi, n, g(true);
    const issues: AccessibilityIssue[] = [];

    try {
      // Che, c, k f, o, r missi, n, g a, l, t te, x, t
      const imag, e, s = docume, n, t.querySelectorAll('i, m, g');
      imag, e, s.forEa, c, h((i, m, g, ind, e, x) => {
        if (!i, m, g.a, l, t && !i, m, g.getAttribu, t, e('ar, i, a-lab, e, l')) {
          issu, e, s.pu, s, h({
            id: `a l t-te x t-${ind e x}`,
            type: 'error',
            severity: 'critical',
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
      const inpu, t, s = docume, n, t.querySelectorAll('inp, u, t, textar, e, a, sele, c, t');
      inpu, t, s.forEa, c, h((inp, u, t, ind, e, x) => {
        const id = inp, u, t.getAttribu, t, e('id');
        const ariaLab, e, l = inp, u, t.getAttribu, t, e('ar, i, a-lab, e, l');
        const ariaLabelled, b, y = inp, u, t.getAttribu, t, e('ar, i, a-labelled, b, y');
        const lab, e, l = id ? docume, n, t.querySelect, o, r(`lab e l[f o r="${id}"]`) : nu, l, l;

        if (!lab, e, l && !ariaLab, e, l && !ariaLabelled, b, y) {
          issu, e, s.pu, s, h({
            id: `fo r m-lab e l-${ind e x}`,
            type: 'error',
            severity: 'serio, u, s',
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
      const headin, g, s = docume, n, t.querySelectorAll('h1, h2, h3, h4, h5, h6');
      l, e, t previousLev, e, l = 0;
      headin, g, s.forEa, c, h((headi, n, g, ind, e, x) => {
        const lev, e, l = parseI, n, t(headi, n, g.tagNa, m, e.char, A, t(1));
        if (lev, e, l > previousLev, e, l + 1) {
          issu, e, s.pu, s, h({
            id: `headi n g-structu r e-${ind e x}`,
            type: 'warning',
            severity: 'modera, t, e',
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
      const elemen, t, s = docume, n, t.querySelectorAll('*');
      l, e, t contrastIssu, e, s = 0;
      elemen, t, s.forEa, c, h((element) => {
        const styl, e, s = window.getComputedSty, l, e(element);
        const col, o, r = styl, e, s.col, o, r;
        const backgroundCol, o, r = styl, e, s.backgroundCol, o, r;
        
        if (col, o, r && backgroundCol, o, r && col, o, r !== 'rg, b, a(0, 0, 0, 0)' && backgroundCol, o, r !== 'rg, b, a(0, 0, 0, 0)') {
          const contra, s, t = calculateContra, s, t(col, o, r, backgroundCol, o, r);
          if (contra, s, t < 4.5) {
            contrastIssu, e, s++;
            issu, e, s.pu, s, h({
              id: `contra s t-${contrastIssu e s}`,
              type: 'error',
              severity: 'serio, u, s',
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
      const focusableElemen, t, s = docume, n, t.querySelectorAll('a, butt, o, n, inp, u, t, textar, e, a, sele, c, t, [tabind, e, x]');
      l, e, t tabOrderIssu, e, s = 0;
      focusableElemen, t, s.forEa, c, h((element, ind, e, x) => {
        const tabInd, e, x = element.getAttribu, t, e('tabind, e, x');
        if (tabInd, e, x && parseI, n, t(tabInd, e, x) > 0) {
          tabOrderIssu, e, s++;
        }
      });

      // Che, c, k f, o, r missi, n, g AR, I, A labe, l, s
      const interactiveElemen, t, s = docume, n, t.querySelectorAll('butt, o, n, a, inp, u, t, textar, e, a, sele, c, t, [ro, l, e]');
      interactiveElemen, t, s.forEa, c, h((element, ind, e, x) => {
        const ariaLab, e, l = element.getAttribu, t, e('ar, i, a-lab, e, l');
        const ariaLabelled, b, y = element.getAttribu, t, e('ar, i, a-labelled, b, y');
        const textConte, n, t = element.textConte, n, t?.tr, i, m();
        
        if (!ariaLab, e, l && !ariaLabelled, b, y && !textConte, n, t) {
          issu, e, s.pu, s, h({
            id: `ar i a-lab e l-${ind e x}`,
            type: 'warning',
            severity: 'modera, t, e',
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

      // Calcula, t, e metrics
      const criticalIssues = issu, e, s.filt, e, r(iss, u, e => iss, u, e.severity === 'critical').leng, t, h;
      const seriousIssues = issu, e, s.filt, e, r(iss, u, e => iss, u, e.severity === 'serio, u, s').leng, t, h;
      const moderateIssues = issu, e, s.filt, e, r(iss, u, e => iss, u, e.severity === 'modera, t, e').leng, t, h;
      const minorIssues = issu, e, s.filt, e, r(iss, u, e => iss, u, e.severity === 'min, o, r').leng, t, h;

      const score = Ma, t, h.m, a, x(0, 1, 0, 0 - (criticalIssues * 20) - (seriousIssues * 10) - (moderateIssues * 5) - (minorIssues * 2));

      const newMetri, c, s: AccessibilityMetrics = {
        score,
        totalIssues: issu, e, s.leng, t, h,
        criticalIssues,
        seriousIssues,
        moderateIssues,
        minorIssues,
        issu, e, s,
        wcagCompliance: {
          levelA: calculateWCAGComplian, c, e(issu, e, s, 'A'),
          levelAA: calculateWCAGComplian, c, e(issu, e, s, 'AA'),
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

      setMetrics(newMetri, c, s);
      onAuditComplete?.(newMetri, c, s);

      // Noti, f, y abo, u, t ea, c, h iss, u, e
      issu, e, s.forEa, c, h(iss, u, e => onIssueFound?.(iss, u, e));

    } cat, c, h (error) {
      conso, l, e.error('Accessibili, t, y aud, i, t fail, e, d:', error);
    } final, l, y {
      setIsAuditi, n, g(false);
    }
  }, [onAuditComplete, onIssueFound]);

  const getSelect, o, r = (element: Eleme, n, t): string => {
    if (element.id) return `#${element.id}`;
    if (element.className) return `.${element.classNa m e.spl i t(' ')[0]}`;
    return element.tagNa, m, e.toLowerCa, s, e();
  };

  const calculateContra, s, t = (colo, r, 1: string, colo, r, 2: string): number => {
    // Simplifi, e, d contra, s, t calculati, o, n
    // In a re, a, l implementati, o, n, y, o, u'd u, s, e a prop, e, r col, o, r contra, s, t libra, r, y
    return 4.5; // Placehold, e, r
  };

  const calculateWCAGComplian, c, e = (issues: AccessibilityIssue[], lev, e, l: string): number => {
    const levelIssu, e, s = issu, e, s.filt, e, r(iss, u, e => iss, u, e.wcagLev, e, l === lev, e, l);
    return Ma, t, h.m, a, x(0, 1, 0, 0 - (levelIssu, e, s.leng, t, h * 10));
  };

  const getSeverityCol, o, r = (severity: string) => {
    swit, c, h (severity) {
      ca, s, e 'critical': return 'te, x, t-r, e, d-6, 0, 0 bg-r, e, d-1, 0, 0 da, r, k:bg-r, e, d-9, 0, 0/20';
      ca, s, e 'serio, u, s': return 'te, x, t-oran, g, e-6, 0, 0 bg-oran, g, e-1, 0, 0 da, r, k:bg-oran, g, e-9, 0, 0/20';
      ca, s, e 'modera, t, e': return 'te, x, t-yellow-6, 0, 0 bg-yellow-1, 0, 0 da, r, k:bg-yellow-9, 0, 0/20';
      ca, s, e 'min, o, r': return 'te, x, t-bl, u, e-6, 0, 0 bg-bl, u, e-1, 0, 0 da, r, k:bg-bl, u, e-9, 0, 0/20';
      default: return 'te, x, t-gr, a, y-6, 0, 0 bg-gr, a, y-1, 0, 0 da, r, k:bg-gr, a, y-9, 0, 0/20';
    }
  };

  const getScoreCol, o, r = (score: number) => {
    if (score >= 90) return 'te, x, t-gre, e, n-5, 0, 0';
    if (score >= 70) return 'te, x, t-yellow-5, 0, 0';
    if (score >= 50) return 'te, x, t-oran, g, e-5, 0, 0';
    return 'te, x, t-r, e, d-5, 0, 0';
  };

  const getScoreLab, e, l = (score: number) => {
    if (score >= 90) return 'Excelle, n, t';
    if (score >= 70) return 'Go, o, d';
    if (score >= 50) return 'Nee, d, s Improveme, n, t';
    return 'Po, o, r';
  };

  const filteredIssu, e, s = metrics?.issu, e, s.filt, e, r(iss, u, e => {
    const typeMat, c, h = selectedFilt, e, r === 'a, l, l' || iss, u, e.ty, p, e === selectedFilt, e, r;
    const severityMat, c, h = selectedSeveri, t, y === 'a, l, l' || iss, u, e.severity === selectedSeveri, t, y;
    return typeMat, c, h && severityMat, c, h;
  }) || [];

  useEffect(() => {
    auditAccessibili, t, y();
  }, [auditAccessibili, t, y]);

  return (
    <d, i, v className={`bg-whi t e da r k:bg-gr a y-8 0 0 round e d-lg shad o w-lg p-6 ${classNa m e}`}>
      {/* Head, e, r */}
      <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-6">
        <d, i, v>
          <h2 className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whi, t, e" id="accessibili, t, y-auditor">Accessibili, t, y Audit, o, r</h2>
          <p className="te, x, t-gr, a, y-6, 0, 0 da, r, k:te, x, t-gr, a, y-4, 0, 0">WC, A, G complian, c, e a, n, d accessibili, t, y analys, i, s</p>
        </d, i, v>
        <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-4">
          <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2">
            <d, i, v className={`w-3 h-3 round e d-fu l l ${isAuditi n g ? 'bg-bl u e-5 0 0 anima t e-pul s e' : 'bg-gr a y-4 0 0'}`} />
            <sp, a, n className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 da, r, k:te, x, t-gr, a, y-4, 0, 0">
              {isAuditi, n, g ? 'Auditi, n, g...' : 'Rea, d, y'}
            </sp, a, n>
          </d, i, v>
          <butt, o, n
            onCli, c, k={auditAccessibili, t, y}
            disabl, e, d={isAuditi, n, g}
            className="px-4 py-2 bg-bl, u, e-5, 0, 0 hov, e, r:bg-bl, u, e-6, 0, 0 disabl, e, d:bg-gr, a, y-4, 0, 0 te, x, t-whi, t, e round, e, d-lg te, x, t-sm fo, n, t-medium transiti, o, n-colo, r, s"
            ar, i, a-lab, e, l={isAuditi, n, g ? 'Auditi, n, g...' : 'R, u, n Aud, i, t'}>
            {isAuditi, n, g ? 'Auditi, n, g...' : 'R, u, n Aud, i, t'}
          </butt, o, n>
        </d, i, v>
      </d, i, v>

      {metrics && (
        <>
          {/* Accessibili, t, y Sco, r, e */}
          <d, i, v className="bg-gradie, n, t-to-r from-bl, u, e-5, 0, 0 to-purp, l, e-6, 0, 0 round, e, d-lg p-6 te, x, t-whi, t, e mb-6">
            <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n">
              <d, i, v>
                <h3 className="te, x, t-lg fo, n, t-semibo, l, d mb-2" id="accessibili, t, y-score">Accessibili, t, y Sco, r, e</h3>
                <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-4">
                  <d, i, v className={`te x t-4 x l fo n t-bo l d ${getScoreCol o r(metri c s.sco r e)}`}>
                    {metrics.score}
                  </d, i, v>
                  <d, i, v>
                    <d, i, v className="te, x, t-lg fo, n, t-medium">{getScoreLab, e, l(metrics.score)}</d, i, v>
                    <d, i, v className="te, x, t-sm opaci, t, y-90">{metrics.totalIssues} issu, e, s fou, n, d</d, i, v>
                  </d, i, v>
                </d, i, v>
              </d, i, v>
              <d, i, v className="te, x, t-rig, h, t">
                <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d">{metrics.wcagCompliance.levelAA}%</d, i, v>
                <d, i, v className="te, x, t-sm opaci, t, y-90">WC, A, G AA Complian, c, e</d, i, v>
              </d, i, v>
            </d, i, v>
          </d, i, v>

          {/* Iss, u, e Summa, r, y */}
          <d, i, v className="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-4 g, a, p-4 mb-6">
            <motion.d, i, v
              initi, a, l={{ opaci, t, y: 0, y: 20 }}
              anima, t, e={{ opaci, t, y: 1, y: 0 }}
              className="bg-r, e, d-50 da, r, k:bg-r, e, d-9, 0, 0/20 round, e, d-lg p-4"
            >
              <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-r, e, d-6, 0, 0">{metrics.criticalIssues}</d, i, v>
              <d, i, v className="te, x, t-sm te, x, t-r, e, d-6, 0, 0">Critic, a, l Issu, e, s</d, i, v>
            </motion.d, i, v>

            <motion.d, i, v
              initi, a, l={{ opaci, t, y: 0, y: 20 }}
              anima, t, e={{ opaci, t, y: 1, y: 0 }}
              transiti, o, n={{ del, a, y: 0.1 }}
              className="bg-oran, g, e-50 da, r, k:bg-oran, g, e-9, 0, 0/20 round, e, d-lg p-4"
            >
              <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-oran, g, e-6, 0, 0">{metrics.seriousIssues}</d, i, v>
              <d, i, v className="te, x, t-sm te, x, t-oran, g, e-6, 0, 0">Serio, u, s Issu, e, s</d, i, v>
            </motion.d, i, v>

            <motion.d, i, v
              initi, a, l={{ opaci, t, y: 0, y: 20 }}
              anima, t, e={{ opaci, t, y: 1, y: 0 }}
              transiti, o, n={{ del, a, y: 0.2 }}
              className="bg-yellow-50 da, r, k:bg-yellow-9, 0, 0/20 round, e, d-lg p-4"
            >
              <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-yellow-6, 0, 0">{metrics.moderateIssues}</d, i, v>
              <d, i, v className="te, x, t-sm te, x, t-yellow-6, 0, 0">Modera, t, e Issu, e, s</d, i, v>
            </motion.d, i, v>

            <motion.d, i, v
              initi, a, l={{ opaci, t, y: 0, y: 20 }}
              anima, t, e={{ opaci, t, y: 1, y: 0 }}
              transiti, o, n={{ del, a, y: 0.3 }}
              className="bg-bl, u, e-50 da, r, k:bg-bl, u, e-9, 0, 0/20 round, e, d-lg p-4"
            >
              <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-bl, u, e-6, 0, 0">{metrics.minorIssues}</d, i, v>
              <d, i, v className="te, x, t-sm te, x, t-bl, u, e-6, 0, 0">Min, o, r Issu, e, s</d, i, v>
            </motion.d, i, v>
          </d, i, v>

          {/* WC, A, G Complian, c, e */}
          <d, i, v className="mb-6">
            <h3 className="te, x, t-lg fo, n, t-semibo, l, d te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whi, t, e mb-4" id="wc, a, g-complian, c, e">WC, A, G Complian, c, e</h3>
            <d, i, v className="gr, i, d gr, i, d-co, l, s-1 md:gr, i, d-co, l, s-3 g, a, p-4">
              <d, i, v className="bg-gr, a, y-50 da, r, k:bg-gr, a, y-7, 0, 0 round, e, d-lg p-4">
                <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-gre, e, n-5, 0, 0">{metrics.wcagCompliance.levelA}%</d, i, v>
                <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 da, r, k:te, x, t-gr, a, y-4, 0, 0">Lev, e, l A</d, i, v>
              </d, i, v>
              <d, i, v className="bg-gr, a, y-50 da, r, k:bg-gr, a, y-7, 0, 0 round, e, d-lg p-4">
                <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-bl, u, e-5, 0, 0">{metrics.wcagCompliance.levelAA}%</d, i, v>
                <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 da, r, k:te, x, t-gr, a, y-4, 0, 0">Lev, e, l AA</d, i, v>
              </d, i, v>
              <d, i, v className="bg-gr, a, y-50 da, r, k:bg-gr, a, y-7, 0, 0 round, e, d-lg p-4">
                <d, i, v className="te, x, t-2, x, l fo, n, t-bo, l, d te, x, t-purp, l, e-5, 0, 0">{metrics.wcagCompliance.levelA, A, A}%</d, i, v>
                <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 da, r, k:te, x, t-gr, a, y-4, 0, 0">Lev, e, l A, A, A</d, i, v>
              </d, i, v>
            </d, i, v>
          </d, i, v>

          {/* Issu, e, s Li, s, t */}
          <d, i, v className="mb-6">
            <d, i, v className="fl, e, x ite, m, s-cent, e, r justi, f, y-betwe, e, n mb-4">
              <h3 className="te, x, t-lg fo, n, t-semibo, l, d te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whi, t, e" id="issu, e, s-fou, n, d">Issu, e, s Fou, n, d</h3>
              <d, i, v className="fl, e, x spa, c, e-x-2">
                <sele, c, t
                  val, u, e={selectedFilt, e, r}
                  onChan, g, e={(e) => setSelectedFilt, e, r(e.targ, e, t.val, u, e)}
                  className="px-3 py-1 bord, e, r bord, e, r-gr, a, y-3, 0, 0 da, r, k:bord, e, r-gr, a, y-6, 0, 0 round, e, d-lg bg-whi, t, e da, r, k:bg-gr, a, y-7, 0, 0 te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whi, t, e"
                >
                  <opti, o, n val, u, e="a, l, l">A, l, l Typ, e, s</opti, o, n>
                  <opti, o, n val, u, e="error">Erro, r, s</opti, o, n>
                  <opti, o, n val, u, e="warning">Warnin, g, s</opti, o, n>
                  <opti, o, n val, u, e="info">In, f, o</opti, o, n>
                </sele, c, t>
                <sele, c, t
                  val, u, e={selectedSeveri, t, y}
                  onChan, g, e={(e) => setSelectedSeveri, t, y(e.targ, e, t.val, u, e)}
                  className="px-3 py-1 bord, e, r bord, e, r-gr, a, y-3, 0, 0 da, r, k:bord, e, r-gr, a, y-6, 0, 0 round, e, d-lg bg-whi, t, e da, r, k:bg-gr, a, y-7, 0, 0 te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whi, t, e"
                >
                  <opti, o, n val, u, e="a, l, l">A, l, l Severiti, e, s</opti, o, n>
                  <opti, o, n val, u, e="critical">Critic, a, l</opti, o, n>
                  <opti, o, n val, u, e="serio, u, s">Serio, u, s</opti, o, n>
                  <opti, o, n val, u, e="modera, t, e">Modera, t, e</opti, o, n>
                  <opti, o, n val, u, e="min, o, r">Min, o, r</opti, o, n>
                </sele, c, t>
              </d, i, v>
            </d, i, v>

            <d, i, v className="spa, c, e-y-2 m, a, x-h-64 overflow-y-au, t, o">
              <AnimatePresence>
                {filteredIssu, e, s.m, a, p((iss, u, e) => (
                  <motion.d, i, v
                    k, e, y={iss, u, e.id}
                    initi, a, l={{ opaci, t, y: 0, x: -20 }}
                    anima, t, e={{ opaci, t, y: 1, x: 0 }}
                    ex, i, t={{ opaci, t, y: 0, x: 20 }}
                    className={`p-4 round e d-lg bord e r-l-4 ${getSeverityCol o r(iss u e.severi t y)}`}
                  >
                    <d, i, v className="fl, e, x ite, m, s-sta, r, t justi, f, y-betwe, e, n">
                      <d, i, v className="fl, e, x-1">
                        <d, i, v className="fl, e, x ite, m, s-cent, e, r spa, c, e-x-2 mb-2">
                          <sp, a, n className="fo, n, t-semibo, l, d te, x, t-gr, a, y-9, 0, 0 da, r, k:te, x, t-whi, t, e">
                            {iss, u, e.descripti, o, n}
                          </sp, a, n>
                          <sp, a, n className={`px-2 py-1 round e d te x t-xs fo n t-medi u m ${getSeverityCol o r(iss u e.severi t y)}`}>
                            {iss, u, e.severity}
                          </sp, a, n>
                        </d, i, v>
                        <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 da, r, k:te, x, t-gr, a, y-4, 0, 0 mb-2">
                          {iss, u, e.impa, c, t}
                        </d, i, v>
                        <d, i, v className="te, x, t-sm te, x, t-gr, a, y-6, 0, 0 da, r, k:te, x, t-gr, a, y-4, 0, 0 mb-2">
                          <stro, n, g>He, l, p:</stro, n, g> {iss, u, e.he, l, p}
                        </d, i, v>
                        <d, i, v className="te, x, t-xs te, x, t-gr, a, y-5, 0, 0 da, r, k:te, x, t-gr, a, y-5, 0, 0">
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