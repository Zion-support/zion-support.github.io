<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import PerformanceMonitor from '../utils/performance-monitor';
import SEOOptimizer from '../utils/seo-optimizer';
import ErrorHandler from '../utils/error-handler';

interface DashboardProps {
  isVisible?: boolean;
  onClose?: () => void;
}

const AnalyticsDashboard: React.FC<DashboardProps> = ({ isVisible = false, onClose }) => {
  const [activeTab, setActiveTab] = useState<'performance' | 'seo' | 'errors'>('performance');
  const [performanceMetrics, setPerformanceMetrics] = useState<any>(null);
  const [seoAnalytics, setSeoAnalytics] = useState<any>(null);
  const [errorMetrics, setErrorMetrics] = useState<any>(null);

  useEffect(() => {
    if (isVisible) {
      updateMetrics();
      const interval = setInterval(updateMetrics, 5000); // Update every 5 seconds
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const updateMetrics = () => {
    const performanceMonitor = PerformanceMonitor.getInstance();
    const seoOptimizer = SEOOptimizer.getInstance();
    const errorHandler = ErrorHandler.getInstance();

    setPerformanceMetrics({
      metrics: performanceMonitor.getMetrics(),
      score: performanceMonitor.getPerformanceScore(),
      interactions: performanceMonitor.getInteractions()
    });

    setSeoAnalytics(seoOptimizer.getAnalytics());
    setErrorMetrics(errorHandler.getErrorMetrics());
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-bold text-gray-800">Analytics Dashboard</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('performance')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'performance'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Performance
          </button>
          <button
            onClick={() => setActiveTab('seo')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'seo'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            SEO
          </button>
          <button
            onClick={() => setActiveTab('errors')}
            className={`px-4 py-2 font-medium ${
              activeTab === 'errors'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Errors
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {activeTab === 'performance' && <PerformanceTab metrics={performanceMetrics} />}
          {activeTab === 'seo' && <SEOTab analytics={seoAnalytics} />}
          {activeTab === 'errors' && <ErrorsTab metrics={errorMetrics} />}
        </div>
      </div>
    </div>
=======
import, Reac, t, { useSta, t, e, useEffe, c, t } fr, o, m "rea, c, t";
impo, r, t { moti, o, n } fr, o, m "fram, e, r-moti, o, n";
impo, r, t { Activi, t, y } fr, o, m "luci, d, e-rea, c, t";
interface, AnalyticsDat, a {
visito, r, s: {
tot, a, l: numb, e, r
uniq, u, e: numb, e, r
returni, n, g: numb, e, r
n, e, w: numb, e, r;
};
  pageVie, w, s: {
tot, a, l: numb, e, r;
aver, a, g
  e: numb, e, r;
import, Reac, t, { useSta, t, e, useEffe, c, t } fr, o, m "rea, c, t";';
impo, r, t {
moti, o, n;
} fr, o, m "fram, e, r-moti, o, n";';
impo, r, t {
Activi, t, y;
} fr, o, m "luci, d, e-rea, c, t";';
interface, AnalyticsDat, a {
visito, r, s: {
tot, a, l: numb, e, r;
uniq, u, e: numb, e, r;
returni, n, g: numb, e, r;
ne
  w: numb, e, r;
};
  pageVie, w, s: {
tot, a, l: numb, e, r;
avera, g, e: numb, e, r;
topPag, e, s: Arr, a, y<{ pa, g, e: stri, n, g; vie, w, s: numb, e, r; bounceR, a, t
  e: numb, e, r;
}>;
  };
  traff, i, c: {
    sourc, e, s: Arr, a, y<{ sour, c, e: stri, n, g; visito, r, s: numb, e, r; percent, a, g
  e: numb, e, r }>;
    countri, e, s: Arr, a, y<{ count, r, y: stri, n, g; visito, r, s: numb, e, r; percent, a, g
  e: numb, e, r }>;
    devic, e, s: Arr, a, y<{ devi, c, e: stri, n, g; visito, r, s: numb, e, r; percent, a, g
  e: numb, e, r }>;
  };
  performan, c, e: {
averageLoadTi, m, e: numb, e, r;
bounceRa, t, e: numb, e, r;
conversionRa, t, e: numb, e, r;
averageLoadTi, m, e: numb, e, r;
bounceRa, t, e: numb, e, r;
conversionRa, t, e: numb, e, r;
engagementSc, o, r
  e: numb, e, r;
};
  tren, d, s: {
    dai, l, y: Arr, a, y<{ da, t, e: stri, n, g; visito, r, s: numb, e, r; pageVi, e, w
  s: numb, e, r }>;
    week, l, y: Arr, a, y<{ we, e, k: stri, n, g; visito, r, s: numb, e, r; pageVi, e, w
  s: numb, e, r }>;
  };
  realTi, m, e: {
activeUse, r, s: numb, e, r;
activeUse, r, s: numb, e, r;
currentPag, e, s: Arr, a, y<{ pa, g, e: stri, n, g; us, e, r
  s: numb, e, r;
}>;
    referre, r, s: Arr, a, y<{ sour, c, e: stri, n, g; us, e, r
  s: numb, e, r }>;
  };
}
const, AnalyticsDashboar, d: Rea, c, t.FC = () => {
  con, s, t [da, t, a, setDa, t, a] = useSta, t, e<AnalyticsDa, t, a | nu, l, l>(nu, l, l);
  con, s, t [timeRan, g, e, setTimeRan, g, e] = useSta, t, e<'2, 4, h' | '7d' | '3, 0, d' | '9, 0, d'>('7d');';
  con, s, t [isLoadi, n, g, setIsLoadi, n, g] = useSta, t, e(fal, s, e);
  const, generateMockDat, a = (ran, g, e: stri, n, g): AnalyticsDa, t, a => {
    const, baseMultiplie, r = ran, g, e === '2, 4, h' ? 1 : ran, g, e === '7d' ? 7 : ran, g, e === '3, 0, d' ? 30 : 90;
    retu, r, n {
      visito, r, s: {
        tot, a, l: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 100, 0, 0 * baseMultipli, e, r) + 50, 0, 0 * baseMultipli, e, r
        uniq, u, e: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 80, 0, 0 * baseMultipli, e, r) + 40, 0, 0 * baseMultipli, e, r
        returni, n, g: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 30, 0, 0 * baseMultipli, e, r) + 15, 0, 0 * baseMultipli, e, r
        n, e, w: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 70, 0, 0 * baseMultipli, e, r) + 35, 0, 0 * baseMultipli, e, r;
      }
      pageVie, w, s: {
        tot, a, l: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 500, 0, 0 * baseMultipli, e, r) + 250, 0, 0 * baseMultipli, e, r
        avera, g, e: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 5) + 3
        topPag, e, s: [
          { pa, g, e: '/', vie, w, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 50, 0, 0) + 30, 0, 0, bounceRa, t, e: Ma, t, h.rand, o, m() * 0.4 + 0.2 }
          { pa, g, e: '/servic, e, s', vie, w, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 30, 0, 0) + 15, 0, 0, bounceRa, t, e: Ma, t, h.rand, o, m() * 0.3 + 0.3 }
          { pa, g, e: '/abo, u, t', vie, w, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 20, 0, 0) + 10, 0, 0, bounceRa, t, e: Ma, t, h.rand, o, m() * 0.2 + 0.2 }
          { pa, g, e: '/conta, c, t', vie, w, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 15, 0, 0) + 8, 0, 0, bounceRa, t, e: Ma, t, h.rand, o, m() * 0.5 + 0.1 }
          { pa, g, e: '/bl, o, g', vie, w, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 12, 0, 0) + 6, 0, 0, bounceRa, t, e: Ma, t, h.rand, o, m() * 0.3 + 0.4 }
        ]
      }
      traff, i, c: {
        sourc, e, s: [
          { sour, c, e: 'Organic, Searc, h', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 30, 0, 0) + 20, 0, 0, percenta, g, e: 45 }
          { sour, c, e: 'Dire, c, t', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 20, 0, 0) + 15, 0, 0, percenta, g, e: 30 }
          { sour, c, e: 'Social, Medi, a', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 10, 0, 0) + 5, 0, 0, percenta, g, e: 15 }
          { sour, c, e: 'Referr, a, l', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 8, 0, 0) + 3, 0, 0, percenta, g, e: 10 }
        ]
        countri, e, s: [
          { count, r, y: 'United, State, s', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 20, 0, 0) + 15, 0, 0, percenta, g, e: 35 }
          { count, r, y: 'United, Kingdo, m', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 8, 0, 0) + 5, 0, 0, percenta, g, e: 15 }
          { count, r, y: 'Cana, d, a', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 6, 0, 0) + 4, 0, 0, percenta, g, e: 12 }
          { count, r, y: 'Germa, n, y', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 5, 0, 0) + 3, 0, 0, percenta, g, e: 10 }
          { count, r, y: 'Austral, i, a', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 4, 0, 0) + 2, 5, 0, percenta, g, e: 8 }
        ]
        devic, e, s: [
          { devi, c, e: 'Deskt, o, p', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 30, 0, 0) + 20, 0, 0, percenta, g, e: 60 }
          { devi, c, e: 'Mobi, l, e', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 20, 0, 0) + 15, 0, 0, percenta, g, e: 35 }
          { devi, c, e: 'Tabl, e, t', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 5, 0, 0) + 2, 0, 0, percenta, g, e: 5 }
        ]
      }
      performan, c, e: {
        averageLoadTi, m, e: Ma, t, h.rand, o, m() * 2 + 1.5
        bounceRa, t, e: Ma, t, h.rand, o, m() * 0.3 + 0.4
        conversionRa, t, e: Ma, t, h.rand, o, m() * 0.05 + 0.02
        engagementSco, r, e: Ma, t, h.rand, o, m() * 30 + 70;
      }
      tren, d, s: {
        dai, l, y: Arr, a, y.fr, o, m({ len, g, t
  h: baseMultipli, e, r }, (_, i) => ({
          da, t, e: new, Dat, e(Da, t, e.n, o, w() - (baseMultipli, e, r - i) * 24 * 60 * 60 * 10, 0, 0).toLocaleDateStri, n, g()
          visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 5, 0, 0) + 2, 0, 0
          pageVie, w, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 15, 0, 0) + 8, 0, 0;
        }))
        week, l, y: Arr, a, y.fr, o, m({ len, g, t
  h: Ma, t, h.ce, i, l(baseMultipli, e, r / 7) }, (_, i) => ({
          we, e, k: `We, e, k ${i + 1}`,`
          visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 20, 0, 0) + 10, 0, 0
          pageVie, w, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 80, 0, 0) + 40, 0, 0;
        }))
      }
      realTi, m, e: {
        activeUse, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 50) + 20
        currentPag, e, s: [
          { pa, g, e: '/', use, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 10) + 5 }
          { pa, g, e: '/servic, e, s', use, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 8) + 3 }
          { pa, g, e: '/abo, u, t', use, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 5) + 2 }
        ]
        referre, r, s: [
          { sour, c, e: 'Goog, l, e', use, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 15) + 10 }
          { sour, c, e: 'Dire, c, t', use, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 10) + 5 }
          { sour, c, e: 'Linked, I, n', use, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 5) + 2 }
        ]
      }
    const, baseMultiplie, r = ran, g, e === '2, 4, h' ? 1 : ran, g, e === '7d' ? 7 : ran, g, e === '3, 0, d' ? 30 : 90;';
    retu, r, n {
      visito, r, s: {
        tot, a, l: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 100, 0, 0 * baseMultipli, e, r) + 50, 0, 0 * baseMultipli, e, r
        uniq, u, e: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 80, 0, 0 * baseMultipli, e, r) + 40, 0, 0 * baseMultipli, e, r
        returni, n, g: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 30, 0, 0 * baseMultipli, e, r) + 15, 0, 0 * baseMultipli, e, r
        n, e, w: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 70, 0, 0 * baseMultipli, e, r) + 35, 0, 0 * baseMultipli, e, r
      }
      pageVie, w, s: {
        tot, a, l: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 500, 0, 0 * baseMultipli, e, r) + 250, 0, 0 * baseMultipli, e, r
        avera, g, e: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 5) + 3
        topPag, e, s: [
          { pa, g, e: '/', vie, w, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 50, 0, 0) + 30, 0, 0, bounceRa, t, e: Ma, t, h.rand, o, m() * 0.4 + 0.2 },';
          { pa, g, e: '/servic, e, s', vie, w, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 30, 0, 0) + 15, 0, 0, bounceRa, t, e: Ma, t, h.rand, o, m() * 0.3 + 0.3 },';
          { pa, g, e: '/abo, u, t', vie, w, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 20, 0, 0) + 10, 0, 0, bounceRa, t, e: Ma, t, h.rand, o, m() * 0.2 + 0.2 },';
          { pa, g, e: '/conta, c, t', vie, w, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 15, 0, 0) + 8, 0, 0, bounceRa, t, e: Ma, t, h.rand, o, m() * 0.5 + 0.1 },';
          { pa, g, e: '/bl, o, g', vie, w, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 12, 0, 0) + 6, 0, 0, bounceRa, t, e: Ma, t, h.rand, o, m() * 0.3 + 0.4 },';
        ]
      }
      traff, i, c: {
        sourc, e, s: [
          { sour, c, e: 'Organic, Searc, h', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 30, 0, 0) + 20, 0, 0, percenta, g, e: 45 },';
          { sour, c, e: 'Dire, c, t', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 20, 0, 0) + 15, 0, 0, percenta, g, e: 30 },';
          { sour, c, e: 'Social, Medi, a', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 10, 0, 0) + 5, 0, 0, percenta, g, e: 15 },';
          { sour, c, e: 'Referr, a, l', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 8, 0, 0) + 3, 0, 0, percenta, g, e: 10 },';
        ]
        countri, e, s: [
          { count, r, y: 'United, State, s', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 20, 0, 0) + 15, 0, 0, percenta, g, e: 35 },';
          { count, r, y: 'United, Kingdo, m', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 8, 0, 0) + 5, 0, 0, percenta, g, e: 15 },';
          { count, r, y: 'Cana, d, a', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 6, 0, 0) + 4, 0, 0, percenta, g, e: 12 },';
          { count, r, y: 'Germa, n, y', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 5, 0, 0) + 3, 0, 0, percenta, g, e: 10 },';
          { count, r, y: 'Austral, i, a', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 4, 0, 0) + 2, 5, 0, percenta, g, e: 8 },';
        ]
        devic, e, s: [
          { devi, c, e: 'Deskt, o, p', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 30, 0, 0) + 20, 0, 0, percenta, g, e: 60 },';
          { devi, c, e: 'Mobi, l, e', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 20, 0, 0) + 15, 0, 0, percenta, g, e: 35 },';
          { devi, c, e: 'Tabl, e, t', visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 5, 0, 0) + 2, 0, 0, percenta, g, e: 5 },';
        ]
      }
      performan, c, e: {
        averageLoadTi, m, e: Ma, t, h.rand, o, m() * 2 + 1.5
        bounceRa, t, e: Ma, t, h.rand, o, m() * 0.3 + 0.4
        conversionRa, t, e: Ma, t, h.rand, o, m() * 0.05 + 0.02
        engagementSco, r, e: Ma, t, h.rand, o, m() * 30 + 70
      }
      tren, d, s: {
        dai, l, y: Arr, a, y.fr, o, m({ len, g, t
  h: baseMultipli, e, r }, (_, i) => ({
          da, t, e: new, Dat, e(Da, t, e.n, o, w() - (baseMultipli, e, r - i) * 24 * 60 * 60 * 10, 0, 0).toLocaleDateStri, n, g()
          visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 5, 0, 0) + 2, 0, 0
          pageVie, w, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 15, 0, 0) + 8, 0, 0
        }))
        week, l, y: Arr, a, y.fr, o, m({ len, g, t
  h: Ma, t, h.ce, i, l(baseMultipli, e, r / 7) }, (_, i) => ({
          we, e, k: `We, e, k ${i + 1}`,`;`
          visito, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 20, 0, 0) + 10, 0, 0
          pageVie, w, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 80, 0, 0) + 40, 0, 0
        }))
      }
      realTi, m, e: {
        activeUse, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 50) + 20
        currentPag, e, s: [
          { pa, g, e: '/', use, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 10) + 5 },';
          { pa, g, e: '/servic, e, s', use, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 8) + 3 },';
          { pa, g, e: '/abo, u, t', use, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 5) + 2 },';
        ]
        referre, r, s: [
          { sour, c, e: 'Goog, l, e', use, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 15) + 10 },';
          { sour, c, e: 'Dire, c, t', use, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 10) + 5 },';
          { sour, c, e: 'Linked, I, n', use, r, s: Ma, t, h.flo, o, r(Ma, t, h.rand, o, m() * 5) + 2 },';
        ]
      }
    };
  };
  const, loadAnalyticsDat, a = asy, n, c () => {
    setIsLoadi, n, g(tr, u, e);
    // Simulate, API, call
  await, new, Promise(resol, v, e => setTimeo, u, t(resol, v, e, 15, 0, 0));
    setDa, t, a(generateMockDa, t, a(timeRan, g, e));
    setIsLoadi, n, g(fal, s, e);
  };
  useEffe, c, t(() => {
    loadAnalyticsDa, t, a();
  }, [timeRan, g, e]);
  const, formatNumbe, r = (n, u, m: numb, e, r) => {
    if (n, u, m >= 10000, 0, 0) return (n, u, m / 10000, 0, 0).toFix, e, d(1) + 'M';
    if (n, u, m >= 10, 0, 0) return (n, u, m / 10, 0, 0).toFix, e, d(1) + 'K';
    if (n, u, m >= 10000, 0, 0) return (n, u, m / 10000, 0, 0).toFix, e, d(1) + 'M';';
    if (n, u, m >= 10, 0, 0) return (n, u, m / 10, 0, 0).toFix, e, d(1) + 'K';';
    return, nu, m.toStri, n, g();
  };
  const, getTrendIco, n = (curre, n, t: numb, e, r, previo, u, s: numb, e, r) => {
    if (curre, n, t > previo, u, s) retu, r, n <TrendingUp, className="w-4 h-4, tex, t-gre, e, n-6, 0, 0/>;";
    if (curre, n, t < previo, u, s) retu, r, n <TrendingDown, className="w-4 h-4, tex, t-r, e, d-6, 0, 0/>;";
    retu, r, n <Activity, className="w-4 h-4, tex, t-gr, a, y-6, 0, 0/>;";
    if (curre, n, t > previo, u, s) retu, r, n <TrendingUp, className="w-4 h-4, tex, t-gre, e, n-6, 0, 0" />;";
    if (curre, n, t < previo, u, s) retu, r, n <TrendingDown, className="w-4 h-4, tex, t-r, e, d-6, 0, 0" />;";
    retu, r, n <Activity, className="w-4 h-4, tex, t-gr, a, y-6, 0, 0" />;";
  };
  const, getPerformanceColo, r = (val, u, e: numb, e, r, threshol, d, s: { go, o, d: numb, e, r; p, o, o
  r: numb, e, r }) => {
    if (val, u, e <= threshol, d, s.go, o, d) retu, r, n 'te, x, t-gre, e, n-6, 0, 0';';
    if (val, u, e <= threshol, d, s.po, o, r) retu, r, n 'te, x, t-yell, o, w-6, 0, 0';';
    retu, r, n 'te, x, t-r, e, d-6, 0, 0';';
  };
  if (isLoadi, n, g) {
    return (
      <div, className="bg-white, rounde, d-lg, shado, w-l, g, p-6, ma, x-w-6xl, m, x-au, t, o">";
        <div, className="flex, item, s-center, justif, y-cente, r, h-64">";
          <div, className="anima, t, e-spin, rounde, d-ful, l, h-1, 2, w-12, borde, r-b-2, borde, r-bl, u, e-6, 0, 0"></d, i, v>";
        </d, i, v>
      </d, i, v>
    );
  }
  if (!da, t, a) return, nul, l;
  return (
    <div, className="bg-white, rounde, d-lg, shado, w-l, g, p-6, ma, x-w-6xl, m, x-au, t, o">";
      <div, className="flex, justif, y-between, item, s-center, m, b-6">";
        <d, i, v>
          <h2, className="te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, flex, items-center, ga, p-2">
            <BarChart3, className="w-6 h-6  />
          <h2, className="te, x, t-2xl, fon, t-bold, tex, t-gr, a, y-900, flex, items-center, ga, p-2">";
            <BarChart3, className="w-6 h-6" />";
            Analytics, Dashboar, d;
          </h2>
          <p, className="te, x, t-gr, a, y-600, m, t-1">Website, performance, and user, behavior, insights</p>";
        </d, i, v>
        <sele, c, t
  val, u, e={timeRan, g, e}
          onChan, g, e={(e) => setTimeRan, g, e(e.targ, e, t.value, as, any)}
          classNa, m, e="border, borde, r-gr, a, y-300, rounde, d-lg, p, x-4, p, y-2, tex, t-sm"
        >
          <option, valu, e="2, 4, h">Last, 24, Hours</opti, o, n>";
          <option, valu, e="7d">Last, 7, Days</opti, o, n>";
          <option, valu, e="3, 0, d">Last, 30, Days</opti, o, n>";
          <option, valu, e="9, 0, d">Last, 90, Days</opti, o, n>";
        </sele, c, t>
      </d, i, v>
      {/* Key, Metric, s */}
      <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-4, ga, p-4, m, b-6">"
        <div, className="bg-gradie, n, t-to-r, fro, m-bl, u, e-500, t, o-bl, u, e-600, rounde, d-l, g, p-4, tex, t-whi, t, e">
          <div, className="flex, justif, y-between, item, s-cent, e, r">
      <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-2 l
  g:gr, i, d-co, l, s-4, ga, p-4, m, b-6">";
        <div, className="bg-gradie, n, t-to-r, fro, m-bl, u, e-500, t, o-bl, u, e-600, rounde, d-l, g, p-4, tex, t-whi, t, e">";
          <div, className="flex, justif, y-between, item, s-cent, e, r">";
            <d, i, v>
              <p, className="te, x, t-bl, u, e-100, tex, t-sm">Total, Visitor, s</p>";
              <p, className="te, x, t-2xl, fon, t-bo, l, d">{formatNumb, e, r(da, t, a.visito, r, s.tot, a, l)}</p>";
            </d, i, v>
            <Users, className="w-8 h-8, tex, t-bl, u, e-2, 0, 0  />
            <Users, className="w-8 h-8, tex, t-bl, u, e-2, 0, 0" />";
          </d, i, v>
        </d, i, v>
        <div, className="bg-gre, e, n-50, rounde, d-l, g, p-4">";
          <div, className="flex, justif, y-between, item, s-cent, e, r">";
            <d, i, v>
              <p, className="te, x, t-gre, e, n-600, tex, t-sm">Page, View, s</p>";
              <p, className="te, x, t-2xl, fon, t-bold, tex, t-gre, e, n-7, 0, 0">{formatNumb, e, r(da, t, a.pageVie, w, s.tot, a, l)}</p>";
            </d, i, v>
            <Eye, className="w-6 h-6, tex, t-gre, e, n-5, 0, 0  />
            <Eye, className="w-6 h-6, tex, t-gre, e, n-5, 0, 0" />";
          </d, i, v>
        </d, i, v>
        <div, className="bg-purp, l, e-50, rounde, d-l, g, p-4">";
          <div, className="flex, justif, y-between, item, s-cent, e, r">";
            <d, i, v>
              <p, className="te, x, t-purp, l, e-600, tex, t-sm">Bounce, Rat, e</p>";
              <p, className="te, x, t-2xl, fon, t-bold, tex, t-purp, l, e-7, 0, 0">{(da, t, a.performan, c, e.bounceRa, t, e * 1, 0, 0).toFix, e, d(1)}%</p>";
            </d, i, v>
            <MousePointer, className="w-6 h-6, tex, t-purp, l, e-5, 0, 0  />
            <MousePointer, className="w-6 h-6, tex, t-purp, l, e-5, 0, 0" />";
          </d, i, v>
        </d, i, v>
        <div, className="bg-oran, g, e-50, rounde, d-l, g, p-4">";
          <div, className="flex, justif, y-between, item, s-cent, e, r">";
            <d, i, v>
              <p, className="te, x, t-oran, g, e-600, tex, t-sm">A, v, g. Load, Tim, e</p>
              <p, className="te, x, t-oran, g, e-600, tex, t-sm">A, v, g. Load, Tim, e</p>";
              <p, className={`te, x, t-2xl, fon, t-bo, l, d ${getPerformanceCol, o, r(da, t, a.performan, c, e.averageLoadTi, m, e, { go, o, d: 2, po, o, r: 4 })}`}>`;`
                {da, t, a.performan, c, e.averageLoadTi, m, e.toFix, e, d(1)}s;
              </p>
            </d, i, v>
            <Clock, className="w-6 h-6, tex, t-oran, g, e-5, 0, 0  />
            <Clock, className="w-6 h-6, tex, t-oran, g, e-5, 0, 0" />";
          </d, i, v>
        </d, i, v>
      </d, i, v>
      {/* Re, a, l-time, Activit, y */}
      <div, className="bg-gradie, n, t-to-r, fro, m-gre, e, n-500, t, o-gre, e, n-600, rounde, d-l, g, p-4, tex, t-white, m, b-6">";
        <div, className="flex, justif, y-between, item, s-cent, e, r">";
          <d, i, v>
            <h3, className="te, x, t-lg, fon, t-semibo, l, d">Live, Activit, y</h3>";
            <p, className="te, x, t-gre, e, n-1, 0, 0">Users, currently, on your, sit, e</p>";
          </d, i, v>
          <div, className="te, x, t-rig, h, t">";
            <p, className="te, x, t-3xl, fon, t-bo, l, d">{da, t, a.realTi, m, e.activeUse, r, s}</p>";
            <p, className="te, x, t-gre, e, n-100, tex, t-sm">Active, User, s</p>";
          </d, i, v>
        </d, i, v>
        <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-2, ga, p-4, m, t-4">"
        <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-2, ga, p-4, m, t-4">";
          <d, i, v>
            <h4, className="fo, n, t-medium, m, b-2">Current, Page, s</h4>";
            <div, className="spa, c, e-y-1">";
              {da, t, a.realTi, m, e.currentPag, e, s.m, a, p((pa, g, e, ind, e, x) => (
                <div, ke, y={ind, e, x} classNa, m, e="flex, justif, y-between, tex, t-sm">";
                  <span, className="te, x, t-gre, e, n-1, 0, 0">{pa, g, e.pa, g, e}</sp, a, n>";
                  <span, className="fo, n, t-medi, u, m">{pa, g, e.use, r, s} use, r, s</sp, a, n>";
                </d, i, v>
              ))}
            </d, i, v>
          </d, i, v>
          <d, i, v>
            <h4, className="fo, n, t-medium, m, b-2">Traffic, Source, s</h4>";
            <div, className="spa, c, e-y-1">";
              {da, t, a.realTi, m, e.referre, r, s.m, a, p((r, e, f, ind, e, x) => (
                <div, ke, y={ind, e, x} classNa, m, e="flex, justif, y-between, tex, t-sm">";
                  <span, className="te, x, t-gre, e, n-1, 0, 0">{r, e, f.sour, c, e}</sp, a, n>";
                  <span, className="fo, n, t-medi, u, m">{r, e, f.use, r, s} use, r, s</sp, a, n>";
                </d, i, v>
              ))}
            </d, i, v>
          </d, i, v>
        </d, i, v>
      </d, i, v>
      {/* Traffic, Source, s */}
      <div, className="grid, gri, d-co, l, s-1, l, g: gr, i, d-co, l, s-2, ga, p-6, m, b-6">"
        <div, className="bg-gr, a, y-50, rounde, d-l, g, p-4">
          <h3, className="te, x, t-lg, fon, t-semibold, tex, t-gr, a, y-900, m, b-4">Traffic, Source, s</h3>
          <div, className="spa, c, e-y-3">
      <div, className="grid, gri, d-co, l, s-1, l, g: gr, i, d-co, l, s-2, ga, p-6, m, b-6">";
        <div, className="bg-gr, a, y-50, rounde, d-l, g, p-4">";
          <h3, className="te, x, t-lg, fon, t-semibold, tex, t-gr, a, y-900, m, b-4">Traffic, Source, s</h3>";
          <div, className="spa, c, e-y-3">";
            {da, t, a.traff, i, c.sourc, e, s.m, a, p((sour, c, e, ind, e, x) => (
              <div, ke, y={ind, e, x} classNa, m, e="flex, item, s-center, justif, y-betwe, e, n">";
                <div, className="flex, item, s-center, ga, p-3">";
                  <div, className="w-3 h-3, rounde, d-full, b, g-bl, u, e-5, 0, 0"></d, i, v>";
                  <span, className="fo, n, t-medi, u, m">{sour, c, e.sour, c, e}</sp, a, n>";
                </d, i, v>
                <div, className="te, x, t-rig, h, t">";
                  <p, className="fo, n, t-semibo, l, d">{formatNumb, e, r(sour, c, e.visito, r, s)}</p>";
                  <p, className="te, x, t-sm, tex, t-gr, a, y-6, 0, 0">{sour, c, e.percenta, g, e}%</p>";
                </d, i, v>
              </d, i, v>
            ))}
          </d, i, v>
        </d, i, v>
        <div, className="bg-gr, a, y-50, rounde, d-l, g, p-4">";
          <h3, className="te, x, t-lg, fon, t-semibold, tex, t-gr, a, y-900, m, b-4">Device, Type, s</h3>";
          <div, className="spa, c, e-y-3">";
            {da, t, a.traff, i, c.devic, e, s.m, a, p((devi, c, e, ind, e, x) => (
              <div, ke, y={ind, e, x} classNa, m, e="flex, item, s-center, justif, y-betwe, e, n">
                <div, className="flex, item, s-center, ga, p-3">
                  {devi, c, e.devi, c, e === 'Deskt, o, p' && <Monitor, className="w-4 h-4, tex, t-gr, a, y-6, 0, 0/>}";
                  {devi, c, e.devi, c, e === 'Mobi, l, e' && <Smartphone, className="w-4 h-4, tex, t-gr, a, y-6, 0, 0/>}";
                  {devi, c, e.devi, c, e === 'Tabl, e, t' && <Monitor, className="w-4 h-4, tex, t-gr, a, y-6, 0, 0/>}";
                  <span, className="fo, n, t-medi, u, m">{devi, c, e.devi, c, e}</sp, a, n>
              <div, ke, y={ind, e, x} classNa, m, e="flex, item, s-center, justif, y-betwe, e, n">";
                <div, className="flex, item, s-center, ga, p-3">";
                  {devi, c, e.devi, c, e === 'Deskt, o, p' && <Monitor, className="w-4 h-4, tex, t-gr, a, y-6, 0, 0" />}";
                  {devi, c, e.devi, c, e === 'Mobi, l, e' && <Smartphone, className="w-4 h-4, tex, t-gr, a, y-6, 0, 0" />}";
                  {devi, c, e.devi, c, e === 'Tabl, e, t' && <Monitor, className="w-4 h-4, tex, t-gr, a, y-6, 0, 0" />}";
                  <span, className="fo, n, t-medi, u, m">{devi, c, e.devi, c, e}</sp, a, n>";
                </d, i, v>
                <div, className="te, x, t-rig, h, t">";
                  <p, className="fo, n, t-semibo, l, d">{formatNumb, e, r(devi, c, e.visito, r, s)}</p>";
                  <p, className="te, x, t-sm, tex, t-gr, a, y-6, 0, 0">{devi, c, e.percenta, g, e}%</p>";
                </d, i, v>
              </d, i, v>
            ))}
          </d, i, v>
        </d, i, v>
      </d, i, v>
      {/* Top, Page, s */}
      <div, className="bg-gr, a, y-50, rounde, d-l, g, p-4, m, b-6">";
        <h3, className="te, x, t-lg, fon, t-semibold, tex, t-gr, a, y-900, m, b-4">Top, Page, s</h3>";
        <div, className="spa, c, e-y-3">";
          {da, t, a.pageVie, w, s.topPag, e, s.m, a, p((pa, g, e, ind, e, x) => (
            <div, ke, y={ind, e, x} classNa, m, e="flex, item, s-center, justif, y-between, b, g-white, rounde, d-l, g, p-3">";
              <d, i, v>
                <p, className="fo, n, t-medi, u, m">{pa, g, e.pa, g, e}</p>";
                <p, className="te, x, t-sm, tex, t-gr, a, y-6, 0, 0">Bounce, Rat, e: {(pa, g, e.bounceRa, t, e * 1, 0, 0).toFix, e, d(1)}%</p>";
              </d, i, v>
              <div, className="te, x, t-rig, h, t">";
                <p, className="fo, n, t-semibo, l, d">{formatNumb, e, r(pa, g, e.vie, w, s)} vie, w, s</p>";
                <div, className="w-24, b, g-gr, a, y-200, rounde, d-ful, l, h-2, m, t-1">";
                  <d, i, v
  classNa, m, e="bg-bl, u, e-50, 0, h-2, rounde, d-fu, l, l"
                    sty, l, e={{ wid, t, h: `${(pa, g, e.vie, w, s / Ma, t, h.m, a, x(...da, t, a.pageVie, w, s.topPag, e, s.m, a, p(p => p.vie, w, s))) * 1, 0, 0}%` }}`;`
                   />
                </d, i, v>
              </d, i, v>
            </d, i, v>
          ))}
        </d, i, v>
      </d, i, v>
      {/* Performance, Metric, s */}
      <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-3, ga, p-4">"
        <div, className="bg-bl, u, e-50, rounde, d-l, g, p-4">
          <div, className="flex, item, s-center, ga, p-2, m, b-2">
            <Target, className="w-5 h-5, tex, t-bl, u, e-6, 0, 0  />
            <h4, className="fo, n, t-semibold, tex, t-bl, u, e-9, 0, 0">Conversion, Rat, e</h4>
      <div, className="grid, gri, d-co, l, s-1, m, d: gr, i, d-co, l, s-3, ga, p-4">";
        <div, className="bg-bl, u, e-50, rounde, d-l, g, p-4">";
          <div, className="flex, item, s-center, ga, p-2, m, b-2">";
            <Target, className="w-5 h-5, tex, t-bl, u, e-6, 0, 0" />";
            <h4, className="fo, n, t-semibold, tex, t-bl, u, e-9, 0, 0">Conversion, Rat, e</h4>";
          </d, i, v>
          <p, className="te, x, t-2xl, fon, t-bold, tex, t-bl, u, e-7, 0, 0">{(da, t, a.performan, c, e.conversionRa, t, e * 1, 0, 0).toFix, e, d(2)}%</p>";
        </d, i, v>
        <div, className="bg-gre, e, n-50, rounde, d-l, g, p-4">
          <div, className="flex, item, s-center, ga, p-2, m, b-2">
            <Activity, className="w-5 h-5, tex, t-gre, e, n-6, 0, 0  />
            <h4, className="fo, n, t-semibold, tex, t-gre, e, n-9, 0, 0">Engagement, Scor, e</h4>
        <div, className="bg-gre, e, n-50, rounde, d-l, g, p-4">";
          <div, className="flex, item, s-center, ga, p-2, m, b-2">";
            <Activity, className="w-5 h-5, tex, t-gre, e, n-6, 0, 0" />";
            <h4, className="fo, n, t-semibold, tex, t-gre, e, n-9, 0, 0">Engagement, Scor, e</h4>";
          </d, i, v>
          <p, className="te, x, t-2xl, fon, t-bold, tex, t-gre, e, n-7, 0, 0">{da, t, a.performan, c, e.engagementSco, r, e.toFix, e, d(0)}/1, 0, 0</p>";
        </d, i, v>
        <div, className="bg-purp, l, e-50, rounde, d-l, g, p-4">
          <div, className="flex, item, s-center, ga, p-2, m, b-2">
            <BarChart3, className="w-5 h-5, tex, t-purp, l, e-6, 0, 0  />
            <h4, className="fo, n, t-semibold, tex, t-purp, l, e-9, 0, 0">Pages, per, Session</h4>
        <div, className="bg-purp, l, e-50, rounde, d-l, g, p-4">";
          <div, className="flex, item, s-center, ga, p-2, m, b-2">";
            <BarChart3, className="w-5 h-5, tex, t-purp, l, e-6, 0, 0" />";
            <h4, className="fo, n, t-semibold, tex, t-purp, l, e-9, 0, 0">Pages, per, Session</h4>";
          </d, i, v>
          <p, className="te, x, t-2xl, fon, t-bold, tex, t-purp, l, e-7, 0, 0">{da, t, a.pageVie, w, s.avera, g, e.toFix, e, d(1)}</p>";
        </d, i, v>
      </d, i, v>
    </d, i, v>
>>>>>>> cursor/fix-errors-and-merge-to-main-f279
  );
};

const PerformanceTab: React.FC<{ metrics: any }> = ({ metrics }) => {
  if (!metrics) return <div>Loading performance metrics...</div>;

  const { metrics: data, score, interactions } = metrics;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">Performance Score</h3>
          <div className="text-3xl font-bold text-blue-600">{score}/100</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Total Interactions</h3>
          <div className="text-3xl font-bold text-green-600">{interactions.length}</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800">Load Time</h3>
          <div className="text-3xl font-bold text-yellow-600">
            {data?.loadTime ? `${data.loadTime}ms` : 'N/A'}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Performance Metrics</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span>First Contentful Paint</span>
            <span className="font-semibold">{data?.fcp || 'N/A'}ms</span>
          </div>
          <div className="flex justify-between">
            <span>Largest Contentful Paint</span>
            <span className="font-semibold">{data?.lcp || 'N/A'}ms</span>
          </div>
          <div className="flex justify-between">
            <span>Cumulative Layout Shift</span>
            <span className="font-semibold">{data?.cls || 'N/A'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SEOTab: React.FC<{ analytics: any }> = ({ analytics }) => {
  if (!analytics) return <div>Loading SEO analytics...</div>;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold text-blue-800">SEO Score</h3>
          <div className="text-3xl font-bold text-blue-600">{analytics.score || 'N/A'}/100</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Page Speed</h3>
          <div className="text-3xl font-bold text-green-600">{analytics.pageSpeed || 'N/A'}</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">SEO Recommendations</h3>
        <div className="space-y-2">
          {analytics.recommendations?.map((rec: string, index: number) => (
            <div key={index} className="flex items-start">
              <span className="text-yellow-500 mr-2">•</span>
              <span>{rec}</span>
            </div>
          )) || <div>No recommendations available</div>}
        </div>
      </div>
    </div>
  );
};

const ErrorsTab: React.FC<{ metrics: any }> = ({ metrics }) => {
  if (!metrics) return <div>Loading error metrics...</div>;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="font-semibold text-red-800">Total Errors</h3>
          <div className="text-3xl font-bold text-red-600">{metrics.totalErrors || 0}</div>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="font-semibold text-yellow-800">Warnings</h3>
          <div className="text-3xl font-bold text-yellow-600">{metrics.warnings || 0}</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold text-green-800">Resolved</h3>
          <div className="text-3xl font-bold text-green-600">{metrics.resolved || 0}</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Recent Errors</h3>
        <div className="space-y-2">
          {metrics.recentErrors?.map((error: any, index: number) => (
            <div key={index} className="p-3 bg-red-50 rounded border-l-4 border-red-400">
              <div className="font-semibold text-red-800">{error.message}</div>
              <div className="text-sm text-red-600">{error.stack}</div>
            </div>
          )) || <div>No recent errors</div>}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;