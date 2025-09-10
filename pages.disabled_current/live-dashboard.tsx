import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
const LiveDashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStatus, setSystemStatus] = useState("operational");
  const [activeUsers, setActiveUsers] = useState(1247);
  const [responseTime, setResponseTime] = useState(45);
  const [uptime, setUptime] = useState(99.97);
  // Simulate real-time updates