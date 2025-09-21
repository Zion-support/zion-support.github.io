"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4210:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/ThemeProvider.jsx


const ThemeContext = /*#__PURE__*/(0,external_react_.createContext)();
const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    // Return default values when not within ThemeProvider (during SSR)
    return {
      theme: 'dark',
      toggleTheme: () => {}
    };
  }

  return context;
};
const ThemeProvider = ({
  children
}) => {
  const {
    0: theme,
    1: setTheme
  } = (0,external_react_.useState)('dark');
  const {
    0: mounted,
    1: setMounted
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    setMounted(true); // Get theme from localStorage or default to dark

    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
  }, []);
  (0,external_react_.useEffect)(() => {
    if (mounted) {
      localStorage.setItem('theme', theme); // Apply theme to document

      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dark",
      children: children
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(ThemeContext.Provider, {
    value: {
      theme,
      toggleTheme
    },
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: theme,
      children: children
    })
  });
};
// EXTERNAL MODULE: ./components/ErrorBoundary.jsx
var ErrorBoundary = __webpack_require__(9779);
;// CONCATENATED MODULE: ./components/Analytics.jsx


const Analytics = () => {
  (0,external_react_.useEffect)(() => {
    // Simple analytics tracking
    const trackEvent = (eventName, properties = {}) => {
      // In a real app, you would send this to your analytics service
      console.log('Analytics Event:', eventName, properties); // Example: Send to Google Analytics or other service

      if (false) {}
    }; // Track page view


    trackEvent('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      timestamp: new Date().toISOString()
    }); // Track user interactions

    const trackClick = event => {
      const element = event.target;

      if (element.tagName === 'A' || element.tagName === 'BUTTON') {
        var _element$textContent;

        trackEvent('click', {
          element_type: element.tagName.toLowerCase(),
          element_text: (_element$textContent = element.textContent) === null || _element$textContent === void 0 ? void 0 : _element$textContent.slice(0, 50),
          element_href: element.href || null
        });
      }
    };

    document.addEventListener('click', trackClick);
    return () => {
      document.removeEventListener('click', trackClick);
    };
  }, []);
  return null;
};

/* harmony default export */ const components_Analytics = (Analytics);
;// CONCATENATED MODULE: ./components/ScrollToTop.jsx



const ScrollToTop = () => {
  const {
    0: isVisible,
    1: setIsVisible
  } = (0,external_react_.useState)(false);
  (0,external_react_.useEffect)(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) {
    return null;
  }

  return /*#__PURE__*/jsx_runtime_.jsx("button", {
    onClick: scrollToTop,
    className: "fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-3 rounded-full shadow-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 z-50",
    "aria-label": "Scroll to top",
    title: "Scroll to top",
    children: /*#__PURE__*/jsx_runtime_.jsx("svg", {
      className: "w-6 h-6",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
        d: "M5 10l7-7m0 0l7 7m-7-7v18"
      })
    })
  });
};

/* harmony default export */ const components_ScrollToTop = (ScrollToTop);
// EXTERNAL MODULE: ./components/PerformanceMonitor.jsx
var PerformanceMonitor = __webpack_require__(5726);
;// CONCATENATED MODULE: ./pages/_app.jsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("meta", {
        charSet: "utf-8",
        className: "jsx-2792502914"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        className: "jsx-2792502914"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "theme-color",
        content: "#000000",
        className: "jsx-2792502914"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
        className: "jsx-2792502914"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
        className: "jsx-2792502914"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        rel: "stylesheet",
        className: "jsx-2792502914"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "dns-prefetch",
        href: "//fonts.googleapis.com",
        className: "jsx-2792502914"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "dns-prefetch",
        href: "//fonts.gstatic.com",
        className: "jsx-2792502914"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "preload",
        href: "/favicon.ico",
        as: "image",
        className: "jsx-2792502914"
      }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
        id: "2792502914",
        children: ["html{-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}", "body{font-family:'Inter',sans-serif;}"]
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "stylesheet",
        href: "/styles/accessibility.css",
        className: "jsx-2792502914"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(ErrorBoundary/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ThemeProvider, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx(components_ScrollToTop, {}), /*#__PURE__*/jsx_runtime_.jsx(components_Analytics, {}), /*#__PURE__*/jsx_runtime_.jsx(PerformanceMonitor/* default */.Z, {})]
      })
    })]
  });
}

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,66,726], () => (__webpack_exec__(4210)));
module.exports = __webpack_exports__;

})();