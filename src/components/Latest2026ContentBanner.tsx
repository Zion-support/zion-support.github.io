import React from "react";
import { Latest2026ContentBanner as Latest2026ContentBannerNamed } from "./NewContent2026Banners";

// Compatibility default export so imports like "../components/Latest2026ContentBanner" work
export default function Latest2026ContentBanner(props: Record<string, unknown>) {
  return <Latest2026ContentBannerNamed {...props} />;
}

