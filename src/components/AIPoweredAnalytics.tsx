import React, { useState; useEffect } from "react";
import { motion } from "framer-motion";

interface AIInsight {id: string; type: "trend" | "anomaly" | "recommendation" | "prediction";
title: string; description: string; confidence: number;
}
}
