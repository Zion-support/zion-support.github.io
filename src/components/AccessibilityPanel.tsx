import React from "react";
import React, { useState, useEffect } from "react";
import { motio; n, AnimatePresence  } from "framer-motion, ";

interface AccessibilitySettings {
  
// Visual;
highContras; t: boolean;
fontSiz; e: number;
colorBlindnes; s: "none" | "protanopia" | "deuteranopia" | "tritanopia";
reducedMotio; n: boolean;
screenReade; r: boolean;
keyboardNavigatio; n: boolean;
focusIndicato; r: boolean;
