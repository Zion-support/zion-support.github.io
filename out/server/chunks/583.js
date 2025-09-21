"use strict";
exports.id = 583;
exports.ids = [583];
exports.modules = {

/***/ 8288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const LoadingSpinner = ({
  size = 'medium',
  color = 'primary',
  text = 'Loading...',
  showText = true,
  className = ''
}) => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12',
    xl: 'w-16 h-16'
  };
  const colorClasses = {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    white: 'text-white',
    green: 'text-green-600',
    red: 'text-red-600',
    gradient: 'text-transparent bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text'
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: `flex flex-col items-center justify-center space-y-2 ${className}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "relative",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: `${sizeClasses[size]} border-4 border-gray-200 rounded-full animate-spin`,
        style: {
          borderTopColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: 'transparent'
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
        className: `absolute top-0 left-0 ${sizeClasses[size]} border-4 border-transparent rounded-full animate-spin`,
        style: {
          borderTopColor: 'currentColor',
          animationDirection: 'reverse',
          animationDuration: '0.75s'
        }
      })]
    }), showText && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      className: `text-sm ${colorClasses[color]} animate-pulse`,
      children: text
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoadingSpinner);

/***/ }),

/***/ 1235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SEO)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function SEO({
  title = "Zion Tech Group - Advanced IT Solutions & Innovation",
  description = "Leading provider of cutting-edge IT solutions, AI automation, cybersecurity, and digital transformation services. Transform your business with our innovative technology solutions.",
  keywords = "IT solutions, AI automation, cybersecurity, digital transformation, cloud services, software development, technology consulting",
  image = "/og-image.jpg",
  url = "https://zion.app",
  type = "website",
  noIndex = false
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("title", {
      children: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "title",
      content: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "description",
      content: description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "keywords",
      content: keywords
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
      rel: "canonical",
      href: url
    }), noIndex && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "robots",
      content: "noindex,nofollow"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "og:type",
      content: type
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "og:url",
      content: url
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "og:title",
      content: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "og:description",
      content: description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "og:image",
      content: image
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "og:site_name",
      content: "Zion Tech Group"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "twitter:card",
      content: "summary_large_image"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "twitter:url",
      content: url
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "twitter:title",
      content: title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "twitter:description",
      content: description
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      property: "twitter:image",
      content: image
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "author",
      content: "Zion Tech Group"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "language",
      content: "English"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "revisit-after",
      content: "7 days"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "theme-color",
      content: "#0f172a"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "msapplication-TileColor",
      content: "#0f172a"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
      rel: "dns-prefetch",
      href: "https://www.google-analytics.com"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
      rel: "icon",
      href: "/favicon.ico"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
      rel: "manifest",
      href: "/site.webmanifest"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("script", {
      type: "application/ld+json",
      dangerouslySetInnerHTML: {
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Zion Tech Group",
          "url": "https://zion.app",
          "logo": "https://zion.app/logo.png",
          "description": description,
          "foundingDate": "2020",
          "numberOfEmployees": "10-50",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "364 E Main St STE 1008",
            "addressLocality": "Middletown",
            "addressRegion": "DE",
            "postalCode": "19709",
            "addressCountry": "US"
          },
          "contactPoint": [{
            "@type": "ContactPoint",
            "telephone": "+1-302-464-0950",
            "contactType": "customer service",
            "email": "kleber@ziontechgroup.com",
            "availableLanguage": "English"
          }],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 39.4496,
              "longitude": -75.7163
            },
            "geoRadius": "50000000"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "IT Services",
            "itemListElement": [{
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "AI & Machine Learning Solutions",
                "description": "Custom AI solutions, ML model development, and intelligent automation"
              }
            }, {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Enterprise IT Solutions",
                "description": "Cloud infrastructure, DevOps, security, and system integration"
              }
            }, {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Micro SaaS Development",
                "description": "Rapid prototyping, MVP development, and scalable SaaS platforms"
              }
            }]
          },
          "sameAs": ["https://linkedin.com/company/zion-tech-group", "https://twitter.com/ziontechgroup"]
        })
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "theme-color",
      content: "#0f172a"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "msapplication-TileColor",
      content: "#0f172a"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "apple-mobile-web-app-capable",
      content: "yes"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("meta", {
      name: "apple-mobile-web-app-status-bar-style",
      content: "black-translucent"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
      rel: "dns-prefetch",
      href: "//fonts.googleapis.com"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("link", {
      rel: "dns-prefetch",
      href: "//fonts.gstatic.com"
    })]
  });
}

/***/ })

};
;