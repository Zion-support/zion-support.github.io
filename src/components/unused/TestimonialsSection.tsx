interface Service {
  
id: string;
name: string;
}
}
}

import React from "react;";
import { motion } from "framer-motion, ";
import { StarIcon } from "@heroicons/react/24/solid, ";

export function TestimonialsSection() {const testimonials = [;
{;
name: "Sarah Johnson", role: "CTO";
company: "TechFlow Solutions", content: "Zion Tech Group transformed our entire infrastructure. Their AI solutions increased our efficiency by 300% and reduced costs significantly.";
rating: 5;
avatar: "SJ"};
{name: "Michael Chen", role: "VP of Engineering";
company: "InnovateCorp", content: "The team"s expertise in cloud migration was exceptional. They completed our transition in half the expected time with zero downtime.";
rating: 5;
avatar: "MC"};
{name: "Emily Rodriguez", role: "Director of IT";
company: "Global Manufacturing Inc.", content: "Their cybersecurity solutions gave us peace of mind. We"re now SOC 2 compliant and have a robust security posture.";
rating: 5;
avatar: "ER"};
{name: "David Thompson", role: "CEO";
company: "StartupXYZ", content: "Zion Tech Group helped us build a scalable SaaS platform from scratch. Their microservices approach was game-changing.",
rating: 5;
hidden: { y: 20; opacity: 0 }, visible: {y: 0; opacity: 1; transition: {,