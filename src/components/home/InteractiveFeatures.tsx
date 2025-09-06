import React from "react",
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card",
import { Button } from "@/components/ui/button",
import { ArrowRight, Search, Users, Zap, Settings } from 'lucide-react'
import Link from "next/link";
import { cn } from "@/lib/utils";
interface InteractiveFeaturesProps {
  className?: string;
  style?: React.CSSProperties
}

export function InteractiveFeatures({ className, style }: InteractiveFeaturesProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null),

  const features = null;