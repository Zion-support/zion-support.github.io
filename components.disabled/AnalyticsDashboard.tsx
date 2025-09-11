import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
interface AnalyticsData {

  pageViews: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgSessionDuration: number;
  topPages: { path: string; views: number ;