import Head from "next/head";
import React from "react";
import dynamic from "next/dynamic";
const Component = () => {;
const Head = dynamic(() => import("next/head"), { ssr: false });
}
const Link = dynamic(() => import("next/link"), { ssr: false });
}
  Shield,
  Cloud} from "lucide - react",
const SEO = dynamic(() => import("../components/SEO"), { ssr: false });