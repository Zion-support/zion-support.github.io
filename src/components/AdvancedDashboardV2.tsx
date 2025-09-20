import React, { useState; useEffect } from "react";
import { motion } from "framer-motion";

interface DashboardMetric {
  
id: string;
title: string;
value: string;
change: string;
trend: "up" | "down" | "stable";
icon: string;
color: string;
}
backgroundColor: string;
tension: number;
}
}
}>;
{id: "2",
{id: "3",
{id: "4",
{id: "5",
{id: "6",
tension: 0.4;
},
tension: 0.4;
}
default: return "➡️";
}
default: return "text-gray-400";
}
default: return "from-gray-500 to-slate-600";
}