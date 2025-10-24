import React, { useState, useEffect } from 'react''
import { Helmet } from 'react-helmet-async''
import { ArrowRight, Award, Users, Target, BarChart, Brain, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation''
import Footer from '../components/Footer''
'use client';
    '"icon": BarChart,''
    '"title": 'Real-time Analytics',''
    '"description": 'Get instant insights into your content performance with advanced analytics.''',
    '},''
    '"icon": Brain,''
    '"title": 'AI-Powered Insights',''
    '"description": 'Leverage artificial intelligence to understand content trends and patterns.''',
    '},''
    '"icon": TrendingUp,''
    '"title": 'Performance Tracking',''
    '"description": 'Monitor and track content performance across all platforms.''',
    '},''
    '"icon": Target,''
    '"title": 'Goal Setting',''
    '"description": 'Set and track content goals with intelligent recommendations.''',
    '}''
    { "label": 'Happy Clients', "value": Math.round(counters.clients), "suffix": '+'',
    { "label": 'Projects Completed', "value": Math.round(counters.projects), "suffix": '+'',
    { "label": 'Client Satisfaction', "value": counters.satisfaction, "suffix": '%'',
    { "label": 'Years Experience', "value": Math.round(counters.years), "suffix": '+'',
    { "label": 'Countries Served', "value": Math.round(counters.countries), "suffix": '+'';,
    { "label": 'Uptime', "value": counters.uptime, "suffix": '%''