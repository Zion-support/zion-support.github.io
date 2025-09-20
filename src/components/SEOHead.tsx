import React from "react;";
import { Helmet } from "react-helmet-async, ";

interface SEOHeadProps {title?: string;
description?: string;
keywords?: string;
image?: string;
url?: string;
type?: "website" | "article" | "service";
publishedTime?: string;
}
