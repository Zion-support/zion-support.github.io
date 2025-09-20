import React, { useState, useEffect } from 'react';
export const AdvancedReportingDashboard: React.FC < AdvancedReportingDashboardProps> = ({
import { motion, AnimatePresence  } from 'framer-motion';

export default function Page() {
> {

  showMetrics?: boolean;
  showFilters?: boolean;
  showCharts?: boolean;
  maxReports?: number}

export const AdvancedReportingDashboard: React.FC<AdvancedReportingDashboardProps> = ({

showMetrics:  true,;
  showFilters = true,;
  showCharts = true,;
  maxReports = 15}) => {;
  const [reports, setReports] = useState<ReportData[]>([]);
  const [filteredReports, setFilteredReports] = useState<ReportData[]>([]);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<any>('grid');
  const [showReportForm, setShowReportForm] = useState(false);
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [showReportDetails, setShowReportDetails] = useState(false);
  const [sortBy, setSortBy] = useState<any>('date');
  const [sortOrder, setSortOrder] = useState<any>('desc');

  // Sample report data
  useEffect(() => {
    const sampleReports: ReportData[] = [{

        id: '1',
        title: 'Q4 Financial Performance Analysis',
        type: 'financial',
        category: 'Financial Reports',
        data: {

          revenue: 2500000,
          expenses: 1800000,
          profit: 700000,
          growth: 15.5,
          keyMetrics['Revenue Growth',Profit Margin',Cost Efficiency']},;
        lastUpdated: '2024-01-15',
        status: 'active',
        priority: 'high',
        tags['Finance',Q4',Performance',Analysis'],;
        description: 'Comprehensive analysis of Q4 financial performance including revenue, expenses, and profit margins',
        author: 'Sarah Johnson',
          userSatisfaction: 4.6,
          keyMetrics['Accuracy',Response Time',Uptime',User Satisfaction']},;
        lastUpdated: '2024-01-14',
        status: 'active',
        priority: 'critical',
        tags['AI',Performance',Metrics',Machine Learning'],;
        description: 'Detailed performance metrics for AI services including accuracy, response time, and uptime',
        author: 'Michael Chen',
          responseTime: 2.3,
          riskLevel: 'Medium',
          keyMetrics['Threats Detected',Incidents Resolved',Response Time',Risk Level']},;
        lastUpdated: '2024-01-13',
        status: 'active',
        priority: 'high',
        tags['Security',Threats',Assessment',Risk Management'],;
        description: 'Comprehensive assessment of cybersecurity threats and incident response metrics',
        author: 'David Kim',
          networkTraffic: 45.2,
          keyMetrics['CPU Utilization',Memory Usage',Storage Usage',Network Traffic']},;
        lastUpdated: '2024-01-12',
        status: 'active',
        priority: 'medium',
        tags['Cloud',Infrastructure',Utilization',Monitoring'],;
        description: 'Real-time monitoring of cloud infrastructure utilization and performance metrics',
        author: 'Lisa Thompson',
          responseRate: 89.5,
          topConcerns['Response Time',Documentation',Support Quality'],;
          keyMetrics['Overall Satisfaction',NPS',Response Rate',Top Concerns']},;
        lastUpdated: '2024-01-11',
        status: 'active',
        priority: 'medium',
        tags['Customer',Satisfaction',Survey',NPS'],;
        description: 'Analysis of customer satisfaction survey results and net promoter score metrics',
        author: 'Alex Wong',
