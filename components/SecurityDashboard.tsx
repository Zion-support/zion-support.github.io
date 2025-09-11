import React, { useEffect, useState } from "react;
import { motion } from "framer-motion;
import { Shield, AlertTriangle, CheckCircle, Lock, Database, Activity } from "lucide-react;
interface SecurityMetrics {
  overallScore: number;
  vulnerabilities: {;critical: number;
    high: number;
    medium: number;
    low: number;
  }
  lastScan: Date;
interface SecurityMetrics {"interface SecurityMetrics {"interface SecurityMetrics {"
  overallScore: number;
overallScore: number,
  vulnerabilities: {
critical: number;
    high: number;
    mediu;
    m: number;
    lo,    w: number}

  lastScan: Date}
const SecurityDashboard: React.FC = () => {,
  const [security, setSecurity] = useState<SecurityMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
const SecurityDashboard: React.FC = () => {,,