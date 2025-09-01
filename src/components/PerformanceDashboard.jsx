import React, { useState } from 'react';
import { motion, AnimatePresence  } from 'framer-motion';
export default function Page() {
;
    const getScoreEmoji = (score) => {

        if(score >= 90)
            return '🚀';
        if(score >= 70)
            return '⚠️';
        return '🐌'};
    const getMetricIcon = (metricName) => {

        const icons = {

  FCP: <Eye className="w-4 h-4"/>,"
            LCP: <Eye className="w-4 h-4"/>,"
            FID: <MousePointer className="w-4 h-4"/>,"
            CLS: <BarChart3 className="w-4 h-4"/>,"
            TTFB: <Clock className="w-4 h-4"/>,"
            DOMLOAD: <Activity className="w-4 h-4"/>,"