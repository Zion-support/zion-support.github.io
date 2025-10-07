//Content Security Policy configuration
const cspHeader = {'Content-Security-Policy': [
    {
      key: 'default-src',
      value: "'self'"}
    },
    {key: 'script-src',
      value: "'self' 'unsafe-eval' 'unsafe-inline'"}
    },
    {key: 'style-src',
      value: "'self' 'unsafe-inline'"}
    },
    {key: 'img-src',
      value: "'self' blob: data: https:"}
    },
    {key: 'font-src',
      value: "'self' https:"}
    },
    {key: 'object-src',
      value: "'none'"}
    },
    {key: 'base-uri',
      value: "'self'"}
    },
    {key: 'form-action',
      value: "'self'"}
    },
    {key: 'frame-ancestors',
      value: "'none'"}
    },
  ],
};
module.exports = { cspHeader };
// Content Security Policy configuration const cspHeader = {'Content-Security-Policy': [ {' key: 'default-src'}' value: "'self'" }, {' key: 'script-src'}' value: "'self' 'unsafe-eval' 'unsafe-inline'" }, {' key: 'style-src'}' value: "'self' 'unsafe-inline'" }, {' key: 'img-src'}' value: "'self' blob: data: https:" }, {' key: 'font-src'}' value: "'self' https:" }, {' key: 'object-src'}' value: "'none'" }, {' key: 'base-uri'}' value: "'self'" }, {' key: 'form-action'}' value: "'self'" }, {' key: 'frame-ancestors'}' value: "'none'" } ] }; module.exports = { cspHeader }; '
