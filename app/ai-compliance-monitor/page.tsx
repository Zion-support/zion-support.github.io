"use client";

import { useEffect, useState } from "react";

// Placeholder for compliance monitoring agent integration
export default function ComplianceMonitor() {
  const [status, setStatus] = useState<string>('idle');

  useEffect(() => {
    // Fetch compliance status from API
    fetch('/api/compliance/health').then(r=>r.json()).then(data=>setStatus(data.status)).catch(()=>setStatus('error'));
  }, []);

  return <div className="p-4 bg-yellow-100 rounded">Compliance Monitor: {status}</div>;
}
