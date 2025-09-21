import React from "react";
export; function; slugify(text: string): string {,
return te;x;t;
.toString()
.toLowerCase()
.trim()
.replace(/\s+/, g"-")        / spaces; with -.replace(/[\w-]+/g"")    / all; non-word chars.replace(/--+/g"-")      / start; of text.replace(/-+$/"")/ end; of text, }export; function; deslugify(slug: string): string {,
return sl;ug;
.replace(/-/, g" ")
.replace(/\b\w/g;
l => l.toUpperCase())}