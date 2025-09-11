import{a as De,b as Te,j as m}from"./index-f98d0e43.js";import{r as y}from"./react-vendor-c5a9160c.js";import"./animation-vendor-e3c083d8.js";import"./icons-vendor-ffdb653c.js";y.createContext(void 0);let Me={data:""},Fe=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||Me,Ae=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,$e=/\/\*[^]*?\*\/|  +/g,de=/\n+/g,E=(e,t)=>{let r="",n="",i="";for(let o in e){let a=e[o];o[0]=="@"?o[1]=="i"?r=o+" "+a+";":n+=o[1]=="f"?E(a,o):o+"{"+E(a,o[1]=="k"?"":t)+"}":typeof a=="object"?n+=E(a,t?t.replace(/([^,])+/g,s=>o.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,c=>/&/.test(c)?c.replace(/&/g,s):s?s+" "+c:c)):o):a!=null&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=E.p?E.p(o,a):o+":"+a+";")}return r+(t&&i?t+"{"+i+"}":i)+n},C={},be=e=>{if(typeof e=="object"){let t="";for(let r in e)t+=r+be(e[r]);return t}return e},Ie=(e,t,r,n,i)=>{let o=be(e),a=C[o]||(C[o]=(c=>{let f=0,l=11;for(;f<c.length;)l=101*l+c.charCodeAt(f++)>>>0;return"go"+l})(o));if(!C[a]){let c=o!==e?e:(f=>{let l,p,g=[{}];for(;l=Ae.exec(f.replace($e,""));)l[4]?g.shift():l[3]?(p=l[3].replace(de," ").trim(),g.unshift(g[0][p]=g[0][p]||{})):g[0][l[1]]=l[2].replace(de," ").trim();return g[0]})(e);C[a]=E(i?{["@keyframes "+a]:c}:c,r?"":"."+a)}let s=r&&C.g?C.g:null;return r&&(C.g=C[a]),((c,f,l,p)=>{p?f.data=f.data.replace(p,c):f.data.indexOf(c)===-1&&(f.data=l?c+f.data:f.data+c)})(C[a],t,n,s),a},Be=(e,t,r)=>e.reduce((n,i,o)=>{let a=t[o];if(a&&a.call){let s=a(r),c=s&&s.props&&s.props.className||/^go/.test(s)&&s;a=c?"."+c:s&&typeof s=="object"?s.props?"":E(s,""):s===!1?"":s}return n+i+(a??"")},"");function K(e){let t=this||{},r=e.call?e(t.p):e;return Ie(r.unshift?r.raw?Be(r,[].slice.call(arguments,1),t.p):r.reduce((n,i)=>Object.assign(n,i&&i.call?i(t.p):i),{}):r,Fe(t.target),t.g,t.o,t.k)}let we,Q,V;K.bind({g:1});let z=K.bind({k:1});function Le(e,t,r,n){E.p=t,we=e,Q=r,V=n}function k(e,t){let r=this||{};return function(){let n=arguments;function i(o,a){let s=Object.assign({},o),c=s.className||i.className;r.p=Object.assign({theme:Q&&Q()},s),r.o=/ *go\d+/.test(c),s.className=K.apply(r,n)+(c?" "+c:""),t&&(s.ref=a);let f=e;return e[0]&&(f=s.as||e,delete s.as),V&&f[0]&&V(s),we(f,s)}return t?t(i):i}}var We=e=>typeof e=="function",Ke=(e,t)=>We(e)?e(t):e,Ue=(()=>{let e;return()=>{if(e===void 0&&typeof window<"u"){let t=matchMedia("(prefers-reduced-motion: reduce)");e=!t||t.matches}return e}})(),qe=z`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Ze=z`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ge=z`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,He=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${qe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Ze} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Ge} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Ye=z`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Xe=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${Ye} 1s linear infinite;
`,Je=z`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Qe=z`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ve=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Je} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Qe} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,et=k("div")`
  position: absolute;
`,tt=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,rt=z`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,nt=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${rt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,it=({toast:e})=>{let{icon:t,type:r,iconTheme:n}=e;return t!==void 0?typeof t=="string"?y.createElement(nt,null,t):t:r==="blank"?null:y.createElement(tt,null,y.createElement(Xe,{...n}),r!=="loading"&&y.createElement(et,null,r==="error"?y.createElement(He,{...n}):y.createElement(Ve,{...n})))},ot=e=>`
0% {transform: translate3d(0,${e*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,at=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e*-150}%,-1px) scale(.6); opacity:0;}
`,st="0%{opacity:0;} 100%{opacity:1;}",ct="0%{opacity:1;} 100%{opacity:0;}",lt=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ft=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ut=(e,t)=>{let r=e.includes("top")?1:-1,[n,i]=Ue()?[st,ct]:[ot(r),at(r)];return{animation:t?`${z(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${z(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}};y.memo(({toast:e,position:t,style:r,children:n})=>{let i=e.height?ut(e.position||t||"top-center",e.visible):{opacity:0},o=y.createElement(it,{toast:e}),a=y.createElement(ft,{...e.ariaProps},Ke(e.message,e));return y.createElement(lt,{className:e.className,style:{...i,...r,...e.style}},typeof n=="function"?n({icon:o,message:a}):y.createElement(y.Fragment,null,o,a))});Le(y.createElement);K`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`;var Y=()=>Math.random().toString(36).substring(7).split("").join(".");`${Y()}`,`${Y()}`;function dt(e){if(typeof e!="object"||e===null)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function pt(e){return dt(e)&&"type"in e&&typeof e.type=="string"}var Pe=Symbol.for("immer-nothing"),pe=Symbol.for("immer-draftable"),x=Symbol.for("immer-state");function w(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var T=Object.getPrototypeOf;function N(e){return!!e&&!!e[x]}function v(e){return e?Ce(e)||Array.isArray(e)||!!e[pe]||!!e.constructor?.[pe]||q(e)||Z(e):!1}var mt=Object.prototype.constructor.toString();function Ce(e){if(!e||typeof e!="object")return!1;const t=T(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===mt}function B(e,t){U(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function U(e){const t=e[x];return t?t.type_:Array.isArray(e)?1:q(e)?2:Z(e)?3:0}function ee(e,t){return U(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function ze(e,t,r){const n=U(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function ht(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function q(e){return e instanceof Map}function Z(e){return e instanceof Set}function O(e){return e.copy_||e.base_}function te(e,t){if(q(e))return new Map(e);if(Z(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=Ce(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[x];let i=Reflect.ownKeys(n);for(let o=0;o<i.length;o++){const a=i[o],s=n[a];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(n[a]={configurable:!0,writable:!0,enumerable:s.enumerable,value:e[a]})}return Object.create(T(e),n)}else{const n=T(e);if(n!==null&&r)return{...e};const i=Object.create(n);return Object.assign(i,e)}}function ae(e,t=!1){return G(e)||N(e)||!v(e)||(U(e)>1&&(e.set=e.add=e.clear=e.delete=yt),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>ae(n,!0))),e}function yt(){w(2)}function G(e){return Object.isFrozen(e)}var gt={};function R(e){const t=gt[e];return t||w(0,e),t}var F;function ve(){return F}function _t(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function me(e,t){t&&(R("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function re(e){ne(e),e.drafts_.forEach(xt),e.drafts_=null}function ne(e){e===F&&(F=e.parent_)}function he(e){return F=_t(F,e)}function xt(e){const t=e[x];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function ye(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[x].modified_&&(re(t),w(4)),v(e)&&(e=L(t,e),t.parent_||W(t,e)),t.patches_&&R("Patches").generateReplacementPatches_(r[x].base_,e,t.patches_,t.inversePatches_)):e=L(t,r,[]),re(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==Pe?e:void 0}function L(e,t,r){if(G(t))return t;const n=t[x];if(!n)return B(t,(i,o)=>ge(e,n,t,i,o,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return W(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const i=n.copy_;let o=i,a=!1;n.type_===3&&(o=new Set(i),i.clear(),a=!0),B(o,(s,c)=>ge(e,n,i,s,c,r,a)),W(e,i,!1),r&&e.patches_&&R("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function ge(e,t,r,n,i,o,a){if(N(i)){const s=o&&t&&t.type_!==3&&!ee(t.assigned_,n)?o.concat(n):void 0,c=L(e,i,s);if(ze(r,n,c),N(c))e.canAutoFreeze_=!1;else return}else a&&r.add(i);if(v(i)&&!G(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;L(e,i),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&W(e,i)}}function W(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&ae(t,r)}function bt(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:ve(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,o=se;r&&(i=[n],o=A);const{revoke:a,proxy:s}=Proxy.revocable(i,o);return n.draft_=s,n.revoke_=a,s}var se={get(e,t){if(t===x)return e;const r=O(e);if(!ee(r,t))return wt(e,r,t);const n=r[t];return e.finalized_||!v(n)?n:n===X(e.base_,t)?(J(e),e.copy_[t]=oe(n,e)):n},has(e,t){return t in O(e)},ownKeys(e){return Reflect.ownKeys(O(e))},set(e,t,r){const n=Se(O(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const i=X(O(e),t),o=i?.[x];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(ht(r,i)&&(r!==void 0||ee(e.base_,t)))return!0;J(e),ie(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return X(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,J(e),ie(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=O(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){w(11)},getPrototypeOf(e){return T(e.base_)},setPrototypeOf(){w(12)}},A={};B(se,(e,t)=>{A[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});A.deleteProperty=function(e,t){return A.set.call(this,e,t,void 0)};A.set=function(e,t,r){return se.set.call(this,e[0],t,r,e[0])};function X(e,t){const r=e[x];return(r?O(r):e)[t]}function wt(e,t,r){const n=Se(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}function Se(e,t){if(!(t in e))return;let r=T(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=T(r)}}function ie(e){e.modified_||(e.modified_=!0,e.parent_&&ie(e.parent_))}function J(e){e.copy_||(e.copy_=te(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Pt=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const o=r;r=t;const a=this;return function(c=o,...f){return a.produce(c,l=>r.call(this,l,...f))}}typeof r!="function"&&w(6),n!==void 0&&typeof n!="function"&&w(7);let i;if(v(t)){const o=he(this),a=oe(t,void 0);let s=!0;try{i=r(a),s=!1}finally{s?re(o):ne(o)}return me(o,n),ye(i,o)}else if(!t||typeof t!="object"){if(i=r(t),i===void 0&&(i=t),i===Pe&&(i=void 0),this.autoFreeze_&&ae(i,!0),n){const o=[],a=[];R("Patches").generateReplacementPatches_(t,i,o,a),n(o,a)}return i}else w(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(a,...s)=>this.produceWithPatches(a,c=>t(c,...s));let n,i;return[this.produce(t,r,(a,s)=>{n=a,i=s}),n,i]},typeof e?.autoFreeze=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof e?.useStrictShallowCopy=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){v(e)||w(8),N(e)&&(e=Ct(e));const t=he(this),r=oe(e,void 0);return r[x].isManual_=!0,ne(t),r}finishDraft(e,t){const r=e&&e[x];(!r||!r.isManual_)&&w(9);const{scope_:n}=r;return me(n,t),ye(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const i=t[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(t=t.slice(r+1));const n=R("Patches").applyPatches_;return N(e)?n(e,t):this.produce(e,i=>n(i,t))}};function oe(e,t){const r=q(e)?R("MapSet").proxyMap_(e,t):Z(e)?R("MapSet").proxySet_(e,t):bt(e,t);return(t?t.scope_:ve()).drafts_.push(r),r}function Ct(e){return N(e)||w(10,e),Ee(e)}function Ee(e){if(!v(e)||G(e))return e;const t=e[x];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=te(e,t.scope_.immer_.useStrictShallowCopy_)}else r=te(e,!0);return B(r,(n,i)=>{ze(r,n,Ee(i))}),t&&(t.finalized_=!1),r}var b=new Pt,je=b.produce;b.produceWithPatches.bind(b);b.setAutoFreeze.bind(b);b.setUseStrictShallowCopy.bind(b);b.applyPatches.bind(b);b.createDraft.bind(b);b.finishDraft.bind(b);function _e(e,t){function r(...n){if(t){let i=t(...n);if(!i)throw new Error(j(0));return{type:e,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=n=>pt(n)&&n.type===e,r}function xe(e){return v(e)?je(e,()=>{}):e}function $(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}function ke(e){const t={},r=[];let n;const i={addCase(o,a){const s=typeof o=="string"?o:o.type;if(!s)throw new Error(j(28));if(s in t)throw new Error(j(29));return t[s]=a,i},addMatcher(o,a){return r.push({matcher:o,reducer:a}),i},addDefaultCase(o){return n=o,i}};return e(i),[t,r,n]}function zt(e){return typeof e=="function"}function vt(e,t){let[r,n,i]=ke(t),o;if(zt(e))o=()=>xe(e());else{const s=xe(e);o=()=>s}function a(s=o(),c){let f=[r[c.type],...n.filter(({matcher:l})=>l(c)).map(({reducer:l})=>l)];return f.filter(l=>!!l).length===0&&(f=[i]),f.reduce((l,p)=>{if(p)if(N(l)){const M=p(l,c);return M===void 0?l:M}else{if(v(l))return je(l,g=>p(g,c));{const g=p(l,c);if(g===void 0){if(l===null)return l;throw Error("A case reducer on a non-draftable value must not return undefined")}return g}}return l},s)}return a.getInitialState=o,a}var St=Symbol.for("rtk-slice-createasyncthunk");function Et(e,t){return`${e}/${t}`}function jt({creators:e}={}){const t=e?.asyncThunk?.[St];return function(n){const{name:i,reducerPath:o=i}=n;if(!i)throw new Error(j(11));typeof process<"u";const a=(typeof n.reducers=="function"?n.reducers(Nt()):n.reducers)||{},s=Object.keys(a),c={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},f={addCase(u,d){const h=typeof u=="string"?u:u.type;if(!h)throw new Error(j(12));if(h in c.sliceCaseReducersByType)throw new Error(j(13));return c.sliceCaseReducersByType[h]=d,f},addMatcher(u,d){return c.sliceMatchers.push({matcher:u,reducer:d}),f},exposeAction(u,d){return c.actionCreators[u]=d,f},exposeCaseReducer(u,d){return c.sliceCaseReducersByName[u]=d,f}};s.forEach(u=>{const d=a[u],h={reducerName:u,type:Et(i,u),createNotation:typeof n.reducers=="function"};Dt(d)?Mt(h,d,f,t):Rt(h,d,f)});function l(){const[u={},d=[],h=void 0]=typeof n.extraReducers=="function"?ke(n.extraReducers):[n.extraReducers],S={...u,...c.sliceCaseReducersByType};return vt(n.initialState,P=>{for(let _ in S)P.addCase(_,S[_]);for(let _ of c.sliceMatchers)P.addMatcher(_.matcher,_.reducer);for(let _ of d)P.addMatcher(_.matcher,_.reducer);h&&P.addDefaultCase(h)})}const p=u=>u,g=new Map,M=new WeakMap;let D;function ce(u,d){return D||(D=l()),D(u,d)}function H(){return D||(D=l()),D.getInitialState()}function le(u,d=!1){function h(P){let _=P[u];return typeof _>"u"&&d&&(_=$(M,h,H)),_}function S(P=p){const _=$(g,d,()=>new WeakMap);return $(_,P,()=>{const ue={};for(const[Ne,Re]of Object.entries(n.selectors??{}))ue[Ne]=kt(Re,P,()=>$(M,P,H),d);return ue})}return{reducerPath:u,getSelectors:S,get selectors(){return S(h)},selectSlice:h}}const fe={name:i,reducer:ce,actions:c.actionCreators,caseReducers:c.sliceCaseReducersByName,getInitialState:H,...le(o),injectInto(u,{reducerPath:d,...h}={}){const S=d??o;return u.inject({reducerPath:S,reducer:ce},h),{...fe,...le(S,!0)}}};return fe}}function kt(e,t,r,n){function i(o,...a){let s=t(o);return typeof s>"u"&&n&&(s=r()),e(s,...a)}return i.unwrapped=e,i}var Ot=jt();function Nt(){function e(t,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:t,...r}}return e.withTypes=()=>e,{reducer(t){return Object.assign({[t.name](...r){return t(...r)}}[t.name],{_reducerDefinitionType:"reducer"})},preparedReducer(t,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:t,reducer:r}},asyncThunk:e}}function Rt({type:e,reducerName:t,createNotation:r},n,i){let o,a;if("reducer"in n){if(r&&!Tt(n))throw new Error(j(17));o=n.reducer,a=n.prepare}else o=n;i.addCase(e,o).exposeCaseReducer(t,o).exposeAction(t,a?_e(e,a):_e(e))}function Dt(e){return e._reducerDefinitionType==="asyncThunk"}function Tt(e){return e._reducerDefinitionType==="reducerWithPrepare"}function Mt({type:e,reducerName:t},r,n,i){if(!i)throw new Error(j(18));const{payloadCreator:o,fulfilled:a,pending:s,rejected:c,settled:f,options:l}=r,p=i(e,o,l);n.exposeAction(t,p),a&&n.addCase(p.fulfilled,a),s&&n.addCase(p.pending,s),c&&n.addCase(p.rejected,c),f&&n.addMatcher(p.settled,f),n.exposeCaseReducer(t,{fulfilled:a||I,pending:s||I,rejected:c||I,settled:f||I})}function I(){}function j(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const Ft={isLoggedIn:!1},Oe=Ot({name:"auth",initialState:Ft,reducers:{setLoggedIn(e,t){e.isLoggedIn=t.payload}}});Oe.actions;Oe.reducer;function Lt(){const e=De(),t=Te();return y.useEffect(()=>{const n=new URLSearchParams(t.search).get("token");n&&(localStorage.setItem("zion_token",n),e(t.pathname,{replace:!0}))},[t.search,t.pathname,e]),m.jsx("div",{className:"min-h-screen bg-zion-slate-dark flex items-center justify-center",children:m.jsxs("div",{className:"max-w-md w-full space-y-8 p-8",children:[m.jsxs("div",{className:"text-center",children:[m.jsx("h2",{className:"text-3xl font-bold text-white",children:"Sign In"}),m.jsx("p",{className:"mt-2 text-zion-slate-light",children:"Welcome back to Zion Tech Group"})]}),m.jsxs("div",{className:"bg-zion-slate-light/10 p-6 rounded-lg",children:[m.jsxs("form",{className:"space-y-6",children:[m.jsxs("div",{children:[m.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-white",children:"Email address"}),m.jsx("input",{id:"email",name:"email",type:"email",required:!0,className:"mt-1 block w-full px-3 py-2 bg-zion-slate-light/20 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent",placeholder:"Enter your email"})]}),m.jsxs("div",{children:[m.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-white",children:"Password"}),m.jsx("input",{id:"password",name:"password",type:"password",required:!0,className:"mt-1 block w-full px-3 py-2 bg-zion-slate-light/20 border border-zion-cyan/20 rounded-md text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent",placeholder:"Enter your password"})]}),m.jsx("div",{children:m.jsx("button",{type:"submit",className:"w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-zion-cyan to-zion-blue hover:from-zion-cyan-light hover:to-zion-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zion-cyan",children:"Sign in"})})]}),m.jsx("div",{className:"mt-6 text-center",children:m.jsx("a",{href:"/contact",className:"text-zion-cyan hover:text-zion-cyan-light text-sm",children:"Need help? Contact support"})})]})]})})}export{Lt as default};
