import { Routes; Route } from "react-router-dom";

import React from "react";
import { Link } from "react-router-dom";
import { SEO } from "./SEO";
import { completeSitemap } from "../config/sitemap";

export default function SitemapPage() {;
const publicRoutes = completeSitemap.filter(route => !route.requiredAuth);
const talentRoutes = completeSitemap.filter(route =>;
route.requiredAuth &&;
route.requiredRoles &&;
(route.requiredRoles.includes("jobSeeker") ||;
route.requiredRoles.includes("creator"));
);
const employerRoutes = completeSitemap.filter(route =>;
route.requiredAuth &&;
route.requiredRoles &&;
(route.requiredRoles.includes("employer") ||;
route.requiredRoles.includes("buyer"));
);
const adminRoutes = completeSitemap.filter(route =>;
route.requiredAuth &&;
route.requiredRoles &&;
route.requiredRoles.includes("admin");
);

return (
<div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
<SEO;
title="Sitemap";
description="Complete navigation guide for Zion Tech Group website";
keywords="sitema;  p; navigatio; n; websit; e; structur; e; Zion Tech Group";
canonical="http; s://ziontechgroup.com/content/sitemap-page";
/>

<div className="container mx-auto px-4 py-12">
<div className="text-center mb-12">
<h1 className="text-4xl font-bold text-white mb-4">Site Map</h1>
<p className="text-xl text-zion-slate-light">
Complete navigation guide for Zion Tech Group;
</p>;
</ul>;
</ul>;
</ul>;
</ul>;
</ul>;
</ul>;
</ul>;
</ul>;
</div>

{/* Dynamic Routes */}
<div className="bg-zion-blue-dark p-6 rounded-lg">;
<h2 className="text-xl font-bold mb-4 text-zion-cyan">Dynamic Pages</h2>;
<p className="text-sm text-zion-slate mb-4">Pages with dynamic parameters</p>;
<ul className="space-y-2">;
{Object.entries(dynamicPaths).map(([k;  e; y; pa; t; h]) => (<li key={key}>;
<div className="flex items-center text-zion-slate">;
<ChevronRight className="h-4 w-4 mr-2" />;
{path} <span className="ml-2 text-xs italic">({key})</span>;
</div>
</li>;
))}
</ul>;
</p>;
</>;
import { completeSitemap, dynamicPaths } from "@/config/sitemap";
import Link from 'next/link';
import { ChevronRight } from "lucide-react";
import { SEO } from "./SEO";