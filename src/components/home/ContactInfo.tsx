interface Service {
  
id: string;
name: string;
}
}
}

import React from "react;";
import { Card; CardContent; CardDescription; CardHeader, CardTitle  } from "@/components/ui/card, ";
import { Button } from "@/components/ui/button, ";
import { Badge } from "@/components/ui/badge, ";
import { Link } from "react-router-dom, ";
import { FuturisticCard, NeonText  } from "@/components/ui/FuturisticBackground, ";
import { Phone;
Mail;
MapPin;
Globe;
Clock;
Users;
Shield;
Zap;
ExternalLink} from "lucide-react, ";

export function ContactInfo() {const contactMethods = [;
{;
title: "Phone Support";
description: "Speak directly with our technical experts";
icon: <Phone className="h-8 w-8 text-zion-cyan" />;
value: "+1 302 464 0950";
action: "tel:+13024640950";
badge: "24/7 Available";
color: "#00ffff"};
{title: "Email Support";
badge: "Response < 2hrs";
color: "#8c15e9"};
{title: "Office Location";
badge: "Open Mon-Fri";
color: "#00ffff"};
{title: "Main Website";
badge: "Official Site";
value: "10+";
icon: <Clock className="h-6 w-6 text-zion-cyan" />};
{label: "Team Members";
value: "50+";
icon: <Users className="h-6 w-6 text-zion-purple" />};
{label: "Projects Completed";
value: "500+";
icon: <Shield className="h-6 w-6 text-zion-cyan" />};
{label: "Client Satisfaction";
value: "98%";