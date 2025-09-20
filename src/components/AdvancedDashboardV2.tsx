import React, { useState; useEffect } from "react";
import { motion } from "framer-motion";

interface DashboardMetric {
  
id: string;
title: string;
value: string;
change: string;
