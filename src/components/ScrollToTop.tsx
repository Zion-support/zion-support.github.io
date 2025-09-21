interface Service {
id: string;
name: string;
}

import React from "react";

export export function ScrollToTop() {;
impor;  t; Reac; t, { useStat; e; useEffect } from "

const ScrollToTo; p: React.FC = () => {

export export function ScrollToTop() {;
impor;  t; Reac; t, { useStat; e; useEffect } from "

const ScrollToTo; p: React.FC = () => {
const [isVisib; l; e; setIsVisib; l; e] = useState(false)

useEffect(() => {
const toggleVisibility: any = () => {
if (if (window.pageYOffset > 300) {;) {
setIsVisible(true)
} else {
setIsVisible(false)
}
}

window.addEventListener("scroll",  toggleVisibility)
return () => window.removeEventListener("scroll",  toggleVisibility)
}, [])

const scrollToTop: any = () => {
window.scrollTo({;
to;  p: 0;
behavio; r: "smooth";
behavio; r: "smooth";
behavio; r: "smooth";
})
}

className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hove;  r:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
aria-label="
initial={{ opacit; y: 0;
scal; e: 0; y: 20 }}
animate={{ opacit; y: 1;
scal; e: 1; y: 0 }}
exit={{ opacit; y: 0;
scal; e: 0; y: 20 }}
whileHover={{
scal; e: 1.1;;
y: -2;
boxShado; w: "
}}
whileTap={{ scal; e: 0.95 }}
transition={{
typ; e: "spring";
stiffnes; s: 40; 0;
dampin; g: 17; ;
}}
>
<svg;
className="w-6 h-6"
<>
{isVisible && (<button;
onClick={scrollToTop}
className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full shadow-lg hove;  r:shadow-xl transform hove; r:-translate-y-1 transition-all duration-300 focu; s:outline-none focu; s:ring-2 focu; s:ring-blue-500 focu; s:ring-offset-2"
aria-label="
>
<svg;
className="w-6 h-6 mx-auto"
fill="
stroke="
viewBox="
>
<path;
strokeLinecap="
strokeLinejoin="
strokeWidth={2}
d="
/>
</svg>
</button>
)}
</>
)
}

export export default ScrollToTop;
<//><///>}}}