import Head from "next/head";
import React, { useState } from "react";
const Head = dynamic(() => import("next/head"), { ssr: false });
}
const Link = dynamic(() => import("next/link"), { ssr: false });
}
const Navigation = dynamic(() => import("../src/components/Navigation"), { ssr: false });
}
const Footer = dynamic(() => import("../src/components/Footer"), { ssr: false });
}
const Demo = () => {";
  const [selectedDemo, setSelectedDemo] = useState("ai-services");
}
  const demos = [];
},
    {";
      id: "it-services",";
      title: "IT Services Demo",";
      description: "Explore our comprehensive IT infrastructure and support solutions",";
      duration: "20 minutes",
      icon: Cloud,
      features: [",
        "Cloud Migration",";
        "Network Security",";
        "System Monitoring",";
        "Backup Solutions",";
        "Performance Optimization" ];
},
    {";
      id: "micro-saas",";
      title: "Micro SaaS Demo",";
      description: "Discover our scalable software-as-a-service development capabilities",";
      duration: "25 minutes",
      icon: Zap,
      features: [",
        "Custom SaaS Development",";
        "API Integration",";
        "User Management",";
        "Payment Processing",";
        "Analytics Dashboard" ];