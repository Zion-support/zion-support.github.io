#!/usr/bin/env python3
"""
V858: AI Incident Response & Threat Hunting Engine
Email responder for security incident triage, threat correlation, and forensic analysis
"""
import json
from datetime import datetime

def analyze_incident_email(email_content):
    """Analyze email for security incidents and threat hunting opportunities"""
    
    analysis = {
        "engine_version": "V858",
        "timestamp": datetime.now().isoformat(),
        "email_subject": email_content.get("subject", ""),
        "detected_signals": [],
        "incident_severity": None,
        "threat_correlation": None,
        "forensic_requirements": None,
        "playbook_execution": None,
        "ioc_indicators": None,
        "recommended_actions": [],
        "reply_strategy": {
            "reply_all": True,
            "reason": "Incident response requires coordination across security, IT, legal, and executive teams",
            "tone": "urgent and precise"
        }
    }
    
    content = email_content.get("body", "").lower()
    subject = email_content.get("subject", "").lower()
    
    # Incident detection signals
    incident_signals = [
        "incident", "breach", "compromise", "intrusion", "attack",
        "malware", "ransomware", "phishing", "unauthorized access",
        "data exfiltration", "lateral movement", "privilege escalation"
    ]
    
    # Threat hunting signals
    hunting_signals = [
        "threat hunting", "ioc", "indicators of compromise", "ttp",
        "mitre attack", "threat actor", "apt", "campaign",
        "anomaly", "suspicious", "behavioral analysis"
    ]
    
    # Forensic signals
    forensic_signals = [
        "forensics", "investigation", "evidence", "chain of custody",
        "memory dump", "disk image", "log analysis", "timeline",
        "root cause", "post-incident"
    ]
    
    # Response signals
    response_signals = [
        "containment", "eradication", "recovery", "remediation",
        "playbook", "runbook", "incident response plan", "irp",
        "communication plan", "stakeholder notification"
    ]
    
    # Compliance and legal signals
    legal_signals = [
        "breach notification", "regulatory", "gdpr breach", "hipaa breach",
        "legal hold", "law enforcement", "insurance", "liability"
    ]
    
    detected_incidents = [s for s in incident_signals if s in content or s in subject]
    detected_hunting = [s for s in hunting_signals if s in content or s in subject]
    detected_forensics = [s for s in forensic_signals if s in content or s in subject]
    detected_response = [s for s in response_signals if s in content or s in subject]
    detected_legal = [s for s in legal_signals if s in content or s in subject]
    
    analysis["detected_signals"] = {
        "incidents": detected_incidents,
        "threat_hunting": detected_hunting,
        "forensics": detected_forensics,
        "response": detected_response,
        "legal": detected_legal
    }
    
    # Determine incident severity
    severity_keywords = {
        "critical": ["ransomware", "data exfiltration", "breach", "critical system"],
        "high": ["malware", "unauthorized access", "privilege escalation", "lateral movement"],
        "medium": ["phishing", "suspicious activity", "policy violation"],
        "low": ["anomaly", "investigation", "monitoring"]
    }
    
    severity_score = 0
    for severity, keywords in severity_keywords.items():
        for keyword in keywords:
            if keyword in content or keyword in subject:
                if severity == "critical":
                    severity_score = max(severity_score, 4)
                elif severity == "high":
                    severity_score = max(severity_score, 3)
                elif severity == "medium":
                    severity_score = max(severity_score, 2)
                else:
                    severity_score = max(severity_score, 1)
    
    severity_map = {4: "critical", 3: "high", 2: "medium", 1: "low"}
    analysis["incident_severity"] = severity_map.get(severity_score, "low")
    
    # Generate insights based on detected signals
    if detected_incidents:
        analysis["recommended_actions"].extend([
            "Activate incident response team and establish command center",
            "Implement immediate containment measures",
            "Preserve evidence and maintain chain of custody",
            "Assess blast radius and affected systems"
        ])
    
    if detected_hunting:
        analysis["threat_correlation"] = {
            "ioc_analysis": "Correlate indicators across multiple data sources",
            "ttp_mapping": "Map to MITRE ATT&CK framework",
            "threat_actor_profiling": "Identify threat actor based on TTPs",
            "campaign_tracking": "Track related incidents and campaigns"
        }
        analysis["recommended_actions"].extend([
            "Conduct proactive threat hunting based on IOCs",
            "Map observed behaviors to MITRE ATT&CK framework",
            "Correlate with threat intelligence feeds",
            "Identify potential threat actor and motivation"
        ])
    
    if detected_forensics:
        analysis["forensic_requirements"] = {
            "evidence_collection": "Collect and preserve digital evidence",
            "timeline_analysis": "Reconstruct attack timeline",
            "root_cause_analysis": "Identify root cause and attack vector",
            "impact_assessment": "Assess data and system impact"
        }
        analysis["recommended_actions"].extend([
            "Collect memory dumps and disk images from affected systems",
            "Analyze logs and establish attack timeline",
            "Identify root cause and initial attack vector",
            "Assess data exposure and system compromise"
        ])
    
    if detected_response:
        analysis["playbook_execution"] = {
            "playbook_selection": "Select appropriate incident response playbook",
            "containment_strategy": "Implement short-term and long-term containment",
            "eradication_plan": "Remove threat actor and malware",
            "recovery_procedures": "Restore systems and validate integrity"
        }
        analysis["recommended_actions"].extend([
            "Execute incident response playbook",
            "Implement containment measures (network isolation, account disablement)",
            "Eradicate threat (malware removal, vulnerability patching)",
            "Recover systems and validate integrity"
        ])
    
    if detected_legal:
        analysis["recommended_actions"].extend([
            "Engage legal counsel and assess notification requirements",
            "Prepare breach notifications for regulators and affected parties",
            "Coordinate with law enforcement if appropriate",
            "Notify cyber insurance provider"
        ])
    
    # IOC indicators
    if "ioc" in content or "indicator" in content:
        analysis["ioc_indicators"] = {
            "network_iocs": "IP addresses, domains, URLs",
            "host_iocs": "File hashes, registry keys, processes",
            "behavioral_iocs": "Unusual patterns, TTPs",
            "threat_intel": "Correlate with threat intelligence"
        }
    
    return analysis

def generate_incident_response(analysis):
    """Generate response email for incident response communications"""
    
    response = {
        "to": "all_recipients",
        "reply_all": True,
        "subject": f"Re: {analysis['email_subject']} - Incident Response Intelligence Analysis",
        "body": []
    }
    
    response["body"].append("Team,\n")
    response["body"].append("Based on the incident response intelligence analysis, here are the key insights and actions:\n")
    
    # Add severity assessment
    if analysis.get("incident_severity"):
        severity_emoji = {
            "critical": "🚨",
            "high": "🔴",
            "medium": "🟠",
            "low": "🟡"
        }
        emoji = severity_emoji.get(analysis["incident_severity"], "⚪")
        response["body"].append(f"\n{emoji} **Incident Severity: {analysis['incident_severity'].upper()}**")
    
    # Add insights based on detected signals
    if analysis.get("threat_correlation"):
        response["body"].append("\n🎯 **Threat Correlation:**")
        response["body"].append(f"- IOC Analysis: {analysis['threat_correlation']['ioc_analysis']}")
        response["body"].append(f"- TTP Mapping: {analysis['threat_correlation']['ttp_mapping']}")
        response["body"].append(f"- Threat Actor Profiling: {analysis['threat_correlation']['threat_actor_profiling']}")
        response["body"].append(f"- Campaign Tracking: {analysis['threat_correlation']['campaign_tracking']}")
    
    if analysis.get("forensic_requirements"):
        response["body"].append("\n🔍 **Forensic Requirements:**")
        response["body"].append(f"- Evidence Collection: {analysis['forensic_requirements']['evidence_collection']}")
        response["body"].append(f"- Timeline Analysis: {analysis['forensic_requirements']['timeline_analysis']}")
        response["body"].append(f"- Root Cause Analysis: {analysis['forensic_requirements']['root_cause_analysis']}")
        response["body"].append(f"- Impact Assessment: {analysis['forensic_requirements']['impact_assessment']}")
    
    if analysis.get("playbook_execution"):
        response["body"].append("\n📋 **Playbook Execution:**")
        response["body"].append(f"- Playbook Selection: {analysis['playbook_execution']['playbook_selection']}")
        response["body"].append(f"- Containment Strategy: {analysis['playbook_execution']['containment_strategy']}")
        response["body"].append(f"- Eradication Plan: {analysis['playbook_execution']['eradication_plan']}")
        response["body"].append(f"- Recovery Procedures: {analysis['playbook_execution']['recovery_procedures']}")
    
    if analysis.get("ioc_indicators"):
        response["body"].append("\n🎯 **IOC Indicators:**")
        response["body"].append(f"- Network IOCs: {analysis['ioc_indicators']['network_iocs']}")
        response["body"].append(f"- Host IOCs: {analysis['ioc_indicators']['host_iocs']}")
        response["body"].append(f"- Behavioral IOCs: {analysis['ioc_indicators']['behavioral_iocs']}")
        response["body"].append(f"- Threat Intelligence: {analysis['ioc_indicators']['threat_intel']}")
    
    if analysis["recommended_actions"]:
        response["body"].append("\n✅ **Recommended Actions:**")
        for i, action in enumerate(analysis["recommended_actions"], 1):
            response["body"].append(f"{i}. {action}")
    
    response["body"].append("\n📞 **24/7 Incident Response Contact:**")
    response["body"].append("Mobile: +1 302 464 0950")
    response["body"].append("Email: kleber@ziontechgroup.com")
    response["body"].append("Address: 364 E Main St STE 1008, Middletown, DE 19709")
    
    response["body"] = "\n".join(response["body"])
    
    return response

if __name__ == "__main__":
    # Test the engine
    test_email = {
        "subject": "CRITICAL: Ransomware Attack Detected - Immediate Response Required",
        "body": "We have detected ransomware on multiple endpoints. Lateral movement observed. "
                "Need immediate containment and forensic investigation. IOCs identified. "
                "Breach notification requirements under GDPR may apply.",
        "recipients": ["soc@company.com", "ciso@company.com", "legal@company.com", "ceo@company.com"]
    }
    
    analysis = analyze_incident_email(test_email)
    response = generate_incident_response(analysis)
    
    print("V858 Incident Response Intelligence Analysis:")
    print(json.dumps(analysis, indent=2))
    print("\n" + "="*50 + "\n")
    print("Generated Response:")
    print(response["body"])
