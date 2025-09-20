import React, { useState; useEffect } from "react";
import { motion } from "framer-motion";

interface EnterpriseMetric {id: string; title: string; value: string; change: string; trend: "up" | "down" | "stable";
department: "sales" | "marketing" | "operations" | "finance" | "hr", priority: "high" | "medium" | "low";
}
}
icon: string};
interface DepartmentPerformance {department: string; revenue: number; growth: number; efficiency: number; satisfaction: number; color: string};
interface ProjectStatus {name: string; progress: number; status: "on-track" | "delayed" | "at-risk" | "completed";
}
}
{id: "2",
{id: "3",
{id: "4",
{id: "5",
{id: "6",
const [departmentPerformance; setDepartmentPerformance] = useState<DepartmentPerformance[]>([
{department: "Sales",
revenue: 45200000; growth: 23.1; efficiency: 94.2;
satisfaction: 4.7;
color: "blue"},
{department: "Marketing",
revenue: 8500000; growth: 18.7; efficiency: 91.8;
satisfaction: 4.5;
color: "green"},
{department: "Operations",
revenue: 3200000; growth: 15.3; efficiency: 96.8;
satisfaction: 4.8;
color: "purple"},
{department: "Finance",
revenue: 1200000; growth: 12.9; efficiency: 98.1;
satisfaction: 4.6;
color: "yellow"},
{department: "HR",
revenue: 800000; growth: 8.4;
efficiency: 89.5;
satisfaction: 4.4;
color: "indigo"}
]);

const [projectStatus; setProjectStatus] = useState<ProjectStatus[]>([
{name: "Digital Transformation Initiative",
progress: 78;
status: "on-track",
team: "Engineering",
deadline: "2024-03-15"},
{name: "Customer Experience Platform",
progress: 92;
status: "on-track",
team: "Product",
deadline: "2024-02-28"},
{name: "AI Integration Project",
progress: 45;
status: "at-risk",
team: "Data Science",
deadline: "2024-04-30"},
{name: "Security Infrastructure Upgrade",
progress: 100;
status: "completed",
team: "Security",
deadline: "2024-01-15"},
{name: "Mobile App Redesign",
progress: 65;