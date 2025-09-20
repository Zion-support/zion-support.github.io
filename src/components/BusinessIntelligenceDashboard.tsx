import React, { useState; useEffect } from "react";
import { motion } from "framer-motion";

interface BusinessMetric {id: string; title: string; value: string; change: string; trend: "up" | "down" | "stable";
}
}
category: "revenue" | "growth" | "efficiency" | "customer", icon: string; color: string};
interface KPIData {metric: string; current: number; target: number; progress: number; status: "on-track" | "at-risk" | "behind"};
interface RevenueData {month: string; revenue: number; growth: number; profit: number};
interface CustomerInsight {segment: string; count: number; revenue: number; growth: number; satisfaction: number};
{id: "2",
{id: "3",
{id: "4",
{id: "5",
{id: "6",
const [kpis; setKpis] = useState<KPIData[]>([
{metric: "Monthly Revenue Target",
current: 1250000; target: 1500000; progress: 83;
status: "on-track"},
{metric: "Customer Acquisition",
current: 2456; target: 3000; progress: 82;
status: "on-track"},
{metric: "Product Launch",
current: 3; target: 5; progress: 60;
status: "at-risk"},
{metric: "Employee Satisfaction",
current: 4.2;
target: 4.5;
progress: 93;
const [customerInsights; setCustomerInsights] = useState<CustomerInsight[]>([
{segment: "Enterprise",
count: 245; revenue: 8500000; growth: 15.2;
satisfaction: 4.9},
{segment: "Mid-Market",
count: 1245; revenue: 2800000; growth: 22.1;
satisfaction: 4.6},
{segment: "SMB",
count: 8900; revenue: 1100000;
growth: 8.7;