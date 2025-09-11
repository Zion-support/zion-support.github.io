import React from 'react';
import { _ import { motion, AnimatePresence  } from 'framer-motion';

import { motion } from 'framer-motion';
 from 'lucide-react';
;
interface SecurityThreat {;
  "id": "string;
  "type": 'critical' | 'high' | 'medium' | 'low';
  "severity": number;
  "description": string;
  "source": string;
  "timestamp": Dat e;
  "status": 'active' | 'resolved' | 'investigating';
  "affectedSystems": string[];
  "recommendations": string[]"}
;
interface VulnerabilityAssessment {;
  "id": "string;
  "category": 'network' | 'application' | 'infrastructure' | 'data';
  "risk": 'critical' | 'high' | 'medium' | 'low';
  "score": number;
  "description": string;
  cveId?: string;
  "affectedComponents": string[];
  "remediation": string;
  "estimatedTime": string"}
interface ComplianceStatus {;
  "framework": "string;
  "status": 'compliant' | 'non-compliant' | 'partial';
  "score": number;
  "lastAudit": Dat e;
  "nextAudit": Dat e;
  "requirements": {;
    "total": number;
    "compliant": number;
    "nonCompliant": number;
    "pending": number"}}
interface SecurityMonitoringSystemProps {;
  // Add your props "here": "any;
;