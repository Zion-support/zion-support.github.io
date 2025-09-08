import React, { useState, useEffect, useCallback } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

  id: string;
  type: "success" | "error" | "warning" | "info";
  title?: string;
  message: string;
  title?: string;
}
