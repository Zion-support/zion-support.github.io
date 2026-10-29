'use strict';
// Review-only accessibility finalizer; no production hook or behavior changes.
function finalize(html){
 if(typeof html!=='string')throw new TypeError('HTML string required');
 const marker='/* ai-evidence-accessibility-v1 */';
 if(html.includes(marker))return html;
 if((html.match(/<main id="main">/g)||[]).length!==1 || (html.match(/<\/style>/g)||[]).length!==1)throw Error('Accessibility source contract changed');
 const css=marker+'\nmain:focus{outline:3px solid #80d7ff;outline-offset:4px}main{scroll-margin-top:1rem}.language-nav nav{gap:.75rem}.language-nav a,button{min-height:44px;display:inline-flex;align-items:center}.language-nav a{padding:.35rem}.links a{overflow-wrap:anywhere}@media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}*,*::before,*::after{animation:none!important;transition:none!important}}\n';
 return html.replace('<main id="main">','<main id="main" tabindex="-1">').replace('</style>',css+'</style>');
}
module.exports={finalize};
