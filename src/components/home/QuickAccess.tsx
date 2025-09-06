
import React from "react",
import Link from "next/link",
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";
import { ArrowRight, Search, Users, Briefcase, Settings, MessageSquare, Smartphone } from 'lucide-react'

interface QuickAccessProps {
  className?: string;
  style?: React.CSSProperties
export function QuickAccess({ className, style }: QuickAccessProps) {
  const { t } = useTranslation();
  const quickLinks = null;
