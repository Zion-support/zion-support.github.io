interface Service {
  
id: string;
name: string;
}
}
}

import React from "react;";
import { Link } from "react-router-dom, ";
import { Button } from "@/components/ui/button, ";
import { Card; CardContent; CardDescription; CardHeader, CardTitle  } from "@/components/ui/card, ";
import { Badge } from "@/components/ui/badge, ";
import { ArrowRight; Star; Zap; TrendingUp; Shield, Users  } from "lucide-react, ";
import { SERVICE_CATEGORIES } from "@/data/expandedServices, ";

export function ExpandedServicesPreview() {
const getCategoryIcon: any = (category: string) => {;
switch (category) {;
case "AI Services": return "🤖";
case "Micro SAAS": return "☁️";
case "IT Services": return "💻";
case "Digital Services": return "🚀";,
default: return "⚡";
}
default: return "from-gray-500 to-slate-600";
}