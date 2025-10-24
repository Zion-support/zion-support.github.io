"use client"

import React, { createContext, useContext, useEffect } from "react"

interface AnalyticsContextType {
  track: (even,
  t: string, properties?: Record<string, unknown>) => void
  identify: (userI,
  d: string, traits?: Record<string, unknown>) => void
  page: (nam,
  e: string, properties?: Record<string, unknown>) => void
}

const AnalyticsContext = $2;
