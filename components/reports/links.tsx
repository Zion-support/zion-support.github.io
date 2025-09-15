<<<<<<< HEAD
"use client";
=======
>>>>>>> origin/auto/autonomy-17186719616
import { useEffect } from 'react';

export default function LinksReportRedirect() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.location.replace('/reports/links/index.html');
    }
<<<<<<< HEAD
  }[]);
=======
  }, []);
>>>>>>> origin/auto/autonomy-17186719616
  return null;
}