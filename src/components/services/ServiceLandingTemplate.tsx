import React from "react",
import { GradientHeading,  } from "@/components/GradientHeading",
import { Button,  } from "@/components/ui/button",
import { Card,, CardContent,, CardFooter,  } from "@/components/ui/card";
import Image from "next/image";
export interface Benefit {
  title: string;,
description: string;
  icon?: React.ReactNode,
}
export interface Testimonial {
  name: string;
  role?: string;
  text: string;
  avatar?: string,
}
interface ServiceLandingTemplateProps {
  title: string;,
subtitle: string;
  heroImage?: string;
  description: string;,
benefits: Benefit[];
  testimonials: Testimonial[];,
ctaText: string;
  ctaLink: string;
}
export const ServiceLandingTemplate: React.FC<ServiceLandingTemplateProps> = ({
