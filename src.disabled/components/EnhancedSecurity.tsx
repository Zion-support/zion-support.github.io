import: React { useEffect, useState } from;
  'react' import: { motion } from;';
  'framer-motion' import: {  Shield, Lock, AlertTriangle, CheckCircle, Eye, EyeOff, Settings, X, RefreshCw, Info } from;';
  'lucide-react'  interface: SecurityStatus {';
   https: boolean;
   csp: boolean;
   hsts: boolean;
   xss: boolean;
   frameOptions: boolean;
   contentType: boolean;

   id: string;
   type: 'low' | 'medium' | 'high' | 'critical';';
   description: string;

