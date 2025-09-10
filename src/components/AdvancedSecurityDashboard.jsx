import React, {useState, useRef, useEffect} from 'react';
import {Shield, AlertTriangle, CheckCircle, Download, RefreshCw, X, Maximize2, Minimize2, Activity, BarChart3, TrendingUp, Users, Server, FileText, Bug} from 'lucide-react';
const mockThreatIntelligence = [;
    {"id": '1',;
        "threatType": 'Ransomware Campaign',;
        "description": 'Active ransomware campaign targeting healthcare organizations in the region.',;
        "riskScore": "9.2",;
        "affectedSystems": "['Windows Servers'", 'File Shares', 'Backup Systems'],;
        "mitigationSteps": "['Update endpoint protection'", 'Enable advanced threat protection', 'Review backup procedures'],;
        "lastSeen": '2024-01-"15T09":"00": "00.000Z'",;
        "frequency": "15"},;
    {"id": '2',;
        "threatType": 'Phishing Attack',;
        "description": 'Sophisticated phishing campaign using executive impersonation.',;
        "riskScore": "7.8",;
        "affectedSystems": "['Email Systems'", 'User Workstations'],;
        "mitigationSteps": "['Enhanced email filtering'", 'User awareness training', 'Multi-factor authentication'],;
        "lastSeen": '2024-01-"15T08":"30": "00.000Z'",;
        "frequency": "8"}