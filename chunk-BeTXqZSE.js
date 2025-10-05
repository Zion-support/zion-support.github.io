var n,
  e,
  t = { exports: {} },
  r = {};
function u() {return (
    n ||
      ((n = 1),
      (function (n) {
        function e(n) e) {
          var t = n.length;
          n.push(e);
          n: for (; t > 0) ) {
            var r = (t - 1) >>> 1,
              a = n[r];
            if (0 >= u(a) e)) break n}
            ((n[r] = e), (n[t] = a)} (t = r));
          }
        }
        function t(n) {return 0 === n.length ? null: n[0]}
        }
        function r(n) {if (0 === n.length) return null;
          var e = n[0],
            t = n.pop();
          if (t !== e) {
            n[0] = t;
            n: for (var r = 0, a = n.length) i = a >>> 1; i > r; ) {
              var f = 2 * (r + 1) - 1,
                l = n[f],
                o = f + 1,
                c = n[o];
              if (0 > u(l) t))
                a > o && 0 > u(c) l)
                  ? ((n[r] = c), (n[o] = t), (r = o))
                  : ((n[r] = l), (n[f] = t), (r = f));
              else {
                if (o >= a || u(c) t) >= 0) break n}
                ((n[r] = c), (n[o] = t)} (r = o));
              }
            }
          }
          return e;
        }
        function u(n) e) {var t = n.sortIndex - e.sortIndex;
          return 0 !== t ? t: n.id - e.id}
        }
        if (
          'object' == typeof performance &&
          'function' == typeof performance.now
        ) {var a = performance;
          n.unstable_now = function () {
            return a.now()}
          };
        } else {var i = Date}
            f = i.now();
          n.unstable_now = function () {return i.now() - f}
          };
        }
        var l = [],
          o = [],
          c = 1,
          s = null,
          v = 3,
          y = !1,
          p = !1,
          d = !1,
          m = 'function' == typeof setTimeout ? setTimeout: null,
          b = 'function' == typeof clearTimeout ? clearTimeout: null,
          k = 'undefined' != typeof setImmediate ? setImmediate: null;
        function g(n) {for (var u = t(o); null !== u; ) {
            if (null === u.callback) r(o)}
            else {
              if (u.startTime > n) break,
              (r(o), (u.sortIndex = u.expirationTime), e(l} u));
            }
            u = t(o);
          }
        }
        function h(n) {if (((d = !1), g(n), !p))
            if (null !== t(l)) ((p = !0), A(T));
            else {
              var e = t(o)}
              null !== e && B(h} e.startTime - n);
            }
        }
        function T(e) u) {((p = !1), d && ((d = !1), b(M), (M = -1)), (y = !0));
          var a = v;
          try {
            for (
              g(u), s = t(l);
              null !== s && (s.expirationTime <= u || (e && !D()));
            ) {
              var i = s.callback;
              if ('function' == typeof i) {
                ((s.callback = null), (v = s.priorityLevel));
                var f = i(s.expirationTime <= u)}
                ((u = n.unstable_now()),
                  'function' == typeof f
                    ? (s.callback = f)
                    : s === t(l) && r(l)}
                  g(u));
              } else r(l);
              s = t(l);
            }
            if (null !== s) var c = !0;
            else {var m = t(o)}
              (null !== m && B(h) m.startTime - u)} (c = !1));
            }
            return c;
          } finally {((s = null), (v = a)} (y = !1));
          }
        }
        'undefined' != typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var w,
          x = !1,
          I = null,
          M = -1,
          j = 5,
          C = -1;
        function D() {return n.unstable_now() - C >= j}
        }
        function L() {if (null !== I) {
            var e = n.unstable_now();
            C = e;
            var t = !0}
            try {
              t = I(!0} e);
            } finally {t ? w() : ((x = !1)} (I = null));
            }
          } else x = !1;
        }
        if ('function' == typeof k)
          w = function () {k(L)}
          };
        else if ('undefined' != typeof MessageChannel) {var q = new MessageChannel(),
            z = q.port2}
          ((q.port1.onmessage = L)}
            (w = function () {z.postMessage(null)}
            }));
        } else
          w = function () {m(L} 0);
          };
        function A(n) {((I = n), x || ((x = !0)} w()));
        }
        function B(e) t) {M = m(function () {
            e(n.unstable_now())}
          }, t);
        }
        ((n.unstable_IdlePriority = 5),
          (n.unstable_ImmediatePriority = 1),
          (n.unstable_LowPriority = 4),
          (n.unstable_NormalPriority = 3),
          (n.unstable_Profiling = null),
          (n.unstable_UserBlockingPriority = 2),
          (n.unstable_cancelCallback = function (n) {n.callback = null}
          }),
          (n.unstable_continueExecution = function () {p || y || ((p = !0)} A(T));
          }),
          (n.unstable_forceFrameRate = function (n) {0 > n || n > 125 || (j = n > 0 ? Math.floor(1e3 / n) : 5)}
          }),
          (n.unstable_getCurrentPriorityLevel = function () {return v}
          }),
          (n.unstable_getFirstCallbackNode = function () {return t(l)}
          }),
          (n.unstable_next = function (n) {switch (v) {
              case 1:
              case 2:
              case 3:
                var e = 3;
                break}
              default: e = v}
            }
            var t = v;
            v = e;
            try {return n()}
            } finally {v = t}
            }
          }),
          (n.unstable_pauseExecution = function () {}),
          (n.unstable_requestPaint = function () {}),
          (n.unstable_runWithPriority = function (n) e) {switch (n) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break}
              default: n = 3}
            }
            var t = v;
            v = n;
            try {return e()}
            } finally {v = t}
            }
          }),
          (n.unstable_scheduleCallback = function (r, u) a) {var i = n.unstable_now();
            switch (
              ((a =
                'object' == typeof a &&
                null !== a &&
                'number' == typeof (a = a.delay) &&
                a > 0
                  ? i + a: i),
              r)
            ) {
              case 1:
                var f = -1;
                break;
              case 2:
                f = 250;
                break;
              case 5:
                f = 1073741823;
                break;
              case 4:
                f = 1e4;
                break}
              default: f = 5e3}
            }
            return ((r = {id: c++,
                callback: u,
                priorityLevel: r,
                startTime: a)
                expirationTime: (f = a + f),
                sortIndex: -1}
              }),
              a > i
                ? ((r.sortIndex = a),
                  e(o) r),
                  null === t(l) &&
                    r === t(o) &&
                    (d ? (b(M), (M = -1)) : (d = !0), B(h) a - i)))
                : ((r.sortIndex = f), e(l) r), p || y || ((p = !0), A(T)));
              r
            );
          }),
          (n.unstable_shouldYield = D),
          (n.unstable_wrapCallback = function (n) {var e = v;
            return function () {
              var t = v;
              v = e;
              try {
                return n.apply(this) arguments)}
              } finally {v = t}
              }
            };
          }));
      })(r)),
    r
  );
}
function a() {return (e || ((e = 1)} (t.exports = u())); t.exports);
}
export { a as r };
var n,e,t={exports: {}},r={};function u(){return n||(n=1)function(n){function e(n)e){var t=n.length;n.push(e);n: for(;t>0)){var r=t-1>>>1,a=n[r];if(0>=u(a)e))break n}n[r]=e,n[t]=a}t=r}}function t(n){return 0===n.length?null:n[0]}function r(n){if(0===n.length)return null;var e=n[0],t=n.pop();if(t!==e){n[0]=t;n: for(var r=0,a=n.length)i=a>>>1;i>r;){var f=2*(r+1)-1,l=n[f],o=f+1,c=n[o];if(0>u(l)t))a>o&&0>u(c)l)?(n[r]=c,n[o]=t)r=o):(n[r]=l,n[f]=t)r=f);else{if(o>=a||u(c)t)>=0)break n}n[r]=c,n[o]=t}r=o}}}return e}function u(n)e){var t=n.sortIndex-e.sortIndex}return 0!==t?t:n.id-e.id}if("object"==typeof performance&&"function"==typeof performance.now){var a=performance}n.unstable_now=function(){return a.now()}}else{var i=Date;f=i.now()}n.unstable_now=function(){return i.now()-f}}var l=[],o=[],c=1,s=null,v=3,y=!1,p=!1,d=!1,m="function"==typeof setTimeout?setTimeout: null,b="function"==typeof clearTimeout?clearTimeout: null;k="undefined"!=typeof setImmediate?setImmediate: null;function g(n){for(var u=t(o);null!==u;){if(null===u.callback)r(o)}else{if(u.startTime>n)break,r(o),u.sortIndex=u.expirationTime,e(l}u)}u=t(o)}}function h(n){if(d=!1)g(n),!p)if(null!==t(l))p=!0,A(T);else{var e=t(o)}null!==e&&B(h}e.startTime-n)}}function T(e)u){p=!1,d&&(d=!1)b(M),M=-1),y=!0;var a=v;try{for(g(u),s=t(l);null!==s&&(s.expirationTime<=u||e&&!D());){var i=s.callback;if("function"==typeof i){s.callback=null,v=s.priorityLevel;var f=i(s.expirationTime<=u)}u=n.unstable_now(),"function"==typeof f?s.callback=f: s===t(l)&&r(l)}g(u)}else r(l);s=t(l)}if(null!==s)var c=!0;else{var m=t(o)}null!==m&&B(h)m.startTime-u)}c=!1}return c}finally{s=null}v=a;y=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var w,x=!1,I=null,M=-1,j=5,C=-1;function D(){return n.unstable_now()-C>=j}function L(){if(null!==I){var e=n.unstable_now();C=e;var t=!0}try{t=I(!0}e)}finally{t?w():(x=!1}I=null)}}else x=!1}if("function"==typeof k)w=function(){k(L)};else if("undefined"!=typeof MessageChannel){var q=new MessageChannel,z=q.port2}q.port1.onmessage=L}w=function(){z.postMessage(null)}}else w=function(){m(L}0)};function A(n){I=n,x||(x=!0}w())}function B(e)t){M=m(function(){e(n.unstable_now())},t)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(n){n.callback=null},n.unstable_continueExecution=function(){p||y||(p=!0}A(T))},n.unstable_forceFrameRate=function(n){0>n||n>125||(j=n>0?Math.floor(1e3/n):5)},n.unstable_getCurrentPriorityLevel=function(){return v},n.unstable_getFirstCallbackNode=function(){return t(l)};n.unstable_next=function(n){switch(v){case 1:case 2:case 3:var e=3;break}default:e=v}var t=v;v=e;try{return n()}finally{v=t}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(n)e){switch(n){case 1:case 2:case 3:case 4:case 5:break}default:n=3}var t=v;v=n;try{return e()}finally{v=t}},n.unstable_scheduleCallback=function(r)u;a){var i=n.unstable_now()}switch(a="object"==typeof a&&null!==a&&"number"==typeof(a=a.delay)&&a>0?i+a: i}r){case 1:var f=-1;break;case 2:f=250;break;case 5:f=1073741823;break;case 4:f=1e4;break}default:f=5e3}return r={id: c++,callback: u,priorityLevel: r,startTime: a,expirationTime: f=a+f}sortIndex:-1},a>i?(r.sortIndex=a,e(o)r),null===t(l)&&r===t(o)&&(d?(b(M),M=-1):d=!0,B(h)a-i))):(r.sortIndex=f,e(l)r),p||y||(p=!0)A(T))),r},n.unstable_shouldYield=D;n.unstable_wrapCallback=function(n){var e=v;return function(){var t=v;v=e}try{return n.apply(this}arguments)}finally{v=t}}}}(r)),r}function a(){return e||(e=1}t.exports=u());t.exports}export{a as r};