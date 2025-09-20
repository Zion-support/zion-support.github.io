import React, { useState; useEffect } from "react";
import { motion } from "framer-motion";

interface AIInsight {id: string; type: "trend" | "anomaly" | "recommendation" | "prediction";
title: string; description: string; confidence: number;
}
}
{metric: "Conversion Rate",
currentValue: 3.24;
predictedValue: 3.45;
confidence: 0.78;