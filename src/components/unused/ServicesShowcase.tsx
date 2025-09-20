interface Service {
  
id: string;
name: string;
}
}
}

import React from "react;";
import { motion } from "framer-motion, ";
import { Link } from "react-router-dom, ";
import { CpuChipIcon;
CloudIcon;
ShieldCheckIcon;
LightBulbIcon;
RocketLaunchIcon;
ChartBarIcon } from "@heroicons/react/24/outline, ";
{icon: CloudIcon; title: "Cloud & DevOps";
description: "Scalable cloud infrastructure and automated deployment pipelines", color: "from-zion-purple to-zion-cyan",
href: "/cloud-devops"};
{icon: ShieldCheckIcon; title: "Cybersecurity";
description: "Comprehensive security solutions for threat detection and prevention", color: "from-zion-purple to-zion-blue",
href: "/cybersecurity"};
{icon: LightBulbIcon; title: "Digital Transformation";
description: "End-to-end digital strategy and implementation services", color: "from-zion-cyan to-zion-purple",
href: "/digital-transformation"};
{icon: RocketLaunchIcon; title: "Micro SaaS Solutions";
description: "Custom SaaS platforms for specific business needs", color: "from-zion-blue to-zion-cyan",
href: "/micro-saas"};
{icon: ChartBarIcon; title: "Business Intelligence";
hidden: { y: 20; opacity: 0 }, visible: {y: 0; opacity: 1; transition: {,