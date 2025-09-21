"use strict";
exports.id = 726;
exports.ids = [726];
exports.modules = {

/***/ 5726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const PerformanceMonitor = () => {
  const {
    0: metrics,
    1: setMetrics
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: 0
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (true) return; // Web Vitals measurement

    const measureWebVitals = () => {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => _objectSpread(_objectSpread({}, prev), {}, {
              fcp: Math.round(entry.startTime)
            }));
          }
        }
      });
      fcpObserver.observe({
        entryTypes: ['paint']
      }); // Largest Contentful Paint

      const lcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setMetrics(prev => _objectSpread(_objectSpread({}, prev), {}, {
          lcp: Math.round(lastEntry.startTime)
        }));
      });
      lcpObserver.observe({
        entryTypes: ['largest-contentful-paint']
      }); // First Input Delay

      const fidObserver = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          setMetrics(prev => _objectSpread(_objectSpread({}, prev), {}, {
            fid: Math.round(entry.processingStart - entry.startTime)
          }));
        }
      });
      fidObserver.observe({
        entryTypes: ['first-input']
      }); // Cumulative Layout Shift

      let clsValue = 0;
      const clsObserver = new PerformanceObserver(list => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            setMetrics(prev => _objectSpread(_objectSpread({}, prev), {}, {
              cls: Math.round(clsValue * 1000) / 1000
            }));
          }
        }
      });
      clsObserver.observe({
        entryTypes: ['layout-shift']
      }); // Time to First Byte

      const navigationEntry = performance.getEntriesByType('navigation')[0];

      if (navigationEntry) {
        setMetrics(prev => _objectSpread(_objectSpread({}, prev), {}, {
          ttfb: Math.round(navigationEntry.responseStart - navigationEntry.requestStart)
        }));
      }
    }; // Measure after page load


    if (document.readyState === 'complete') {
      measureWebVitals();
    } else {
      window.addEventListener('load', measureWebVitals);
    }

    return () => {
      window.removeEventListener('load', measureWebVitals);
    };
  }, []); // Only show in development

  if (true) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "fixed bottom-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs font-mono z-50",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      className: "font-bold mb-2",
      children: "Performance Metrics"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: ["FCP: ", metrics.fcp, "ms"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: ["LCP: ", metrics.lcp, "ms"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: ["FID: ", metrics.fid, "ms"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: ["CLS: ", metrics.cls]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      children: ["TTFB: ", metrics.ttfb, "ms"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PerformanceMonitor);

/***/ })

};
;