import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";

interface PerformanceOptimizerProps {enableServiceWorker?: boolean;
  enableMonitoring?: boolean;
  enableResourceHints?: boolean;
  enablePreloading?: boolean}

