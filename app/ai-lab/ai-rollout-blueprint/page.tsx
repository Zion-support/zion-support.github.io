"use client";

import React, { useState } from "react";

interface BlueprintStep {
  phase: string;
  weeks: number;
  description: string;
  milestones: string[];
  zionTools: string[];
}

const generateBlueprint = (
  teamSize: string,
  goal: string,
  budget: string,
  timeline: string
): BlueprintStep[] => {
  const steps: BlueprintStep[] = [
    {
      phase: "Phase 1: Assessment & Foundation",
      weeks: 2,
      description: "Evaluate current workflows, identify AI-impactful processes, set up baseline metrics.",
      milestones: ["Audit existing tech stack", "Identify 3 quick wins", "Define success KPIs", "Set up AI infrastructure"],
      zionTools: ["Autonomous Tech Stack Auditor", "AI ROI & Ops Scorecard"],
    },
    {
      phase: "Phase 2: Pilot Implementation",
      weeks: 4,
      description: "Deploy the highest-ROI AI tool in a limited scope. Measure impact against baseline.",
      milestones: ["Select pilot use case", "Configure AI tool", "Integrate with existing stack", "A/B test results"],
      zionTools: ["Autonomous Lead Scoring", "Content Repurposing Engine", "SEO Intelligence"],
    },
    {
      phase: "Phase 3: Scale & Automate",
      weeks: 6,
      description: "Roll out successful pilot to full team. Add workflow automation between existing tools.",
      milestones: ["Expand pilot scope", "Automate handoffs", "Train team", "Monitor performance"],
      zionTools: ["Knowledge Base Chatbot", "Incident Response System"],
    },
    {
      phase: "Phase 4: Optimize & Evolve",
      weeks: 4,
      description: "Continuous improvement loop: measure, refine, expand to adjacent workflows.",
      milestones: ["Quarterly review", "Add next tool", "Update automation rules", "Document learnings"],
      zionTools: ["AI Site Evolution Advisor", "Competitive Intelligence"],
    },
  ];

  // Adjust based on inputs
  const teamMultiplier = teamSize === "small" ? 0.8 : teamSize === "large" ? 1.3 : 1.0;
  return steps.map((s) => ({
    ...s,
    weeks: Math.round(s.weeks * teamMultiplier),
  }));
};

export default function AIRolloutBlueprint() {
  const [teamSize, setTeamSize] = useState("medium");
  const [goal, setGoal] = useState("efficiency");
  const [budget, setBudget] = useState("medium");
  const [timeline, setTimeline] = useState("3-6 months");
  const [blueprint, setBlueprint] = useState<BlueprintStep[] | null>(null);

  const handleGenerate = () => {
    if (blueprint.length > 0) {
      setBlueprint(generateBlueprint(teamSize, goal, budget, timeline));
    }
  };

  if (!blueprint) {
    return (
      <div style={{ maxWidth: 860, margin: "2rem auto", padding: "1rem 1.5rem", fontFamily: "system-ui, sans-serif", color: "#e0e0e0", background: "#0d1117", borderRadius: 12, minHeight: "80vh" }}>
        <a href="/ai-lab" style={{ color: "#58a6ff", textDecoration: "none", fontSize: "0.9rem" }}>← Back to AI Lab</a>
        <h1 style={{ fontSize: "2rem", fontWeight: 700, margin: "1rem 0 0.5rem" }}>🗺️ AI Rollout Blueprint Generator</h1>
        <p style={{ color: "#8b949e", marginBottom: "2rem" }}>Answer a few questions about your team and goals to generate a phased AI rollout plan powered by Zion modules.</p>

        <div style={{ background: "#161b22", borderRadius: 10, padding: "1.5rem" }}>
          {[
            { label: "Team Size", key: "teamSize", options: [["small", "1-10"], ["medium", "11-50"], ["large", "50+"]] },
            { label: "Primary Goal", key: "goal", options: [["efficiency", "Operational Efficiency"], ["revenue", "Revenue Growth"], ["experience", "Customer Experience"]] },
            { label: "Budget Level", key: "budget", options: [["low", "Bootstrap"], ["medium", "Moderate"], ["high", "Enterprise"]] },
            { label: "Target Timeline", key: "timeline", options: [["1-3 months", "Fast Track"], ["3-6 months", "Standard"], ["6-12 months", "Phased"]] },
          ].map(({ label, key, options }) => (
            <div key={key} style={{ marginBottom: "1.25rem" }}>
              <label style={{ display: "block", marginBottom: "0.5rem", color: "#c9d1d9", fontWeight: 600 }}>{label}</label>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {options.map(([value, text]) => (
                  <button key={value} onClick={() => set(key === "teamSize" ? setTeamSize(value) : key === "goal" ? setGoal(value) : key === "budget" ? setBudget(value) : setTimeline(value))}
                    style={{ padding: "0.5rem 1rem", borderRadius: 6, border: `1px solid ${eval(key) === value ? "#1f6feb" : "#30363d"}`, background: eval(key) === value ? "#1f6feb" : "transparent", color: "#fff", cursor: "pointer" }}>
                    {text}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button onClick={handleGenerate} style={{ width: "100%", padding: "0.75rem", fontSize: "1.1rem", fontWeight: 600, color: "#fff", background: "linear-gradient(90deg, #238636, #2ea043)", border: "none", borderRadius: 8, cursor: "pointer" }}>
            🗺️ Generate Rollout Blueprint
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 860, margin: "2rem auto", padding: "1rem 1.5rem", fontFamily: "system-ui, sans-serif", color: "#e0e0e0", background: "#0d1117", borderRadius: 12, minHeight: "80vh" }}>
      <a href="/ai-lab" style={{ color: "#58a6ff", textDecoration: "none", fontSize: "0.9rem" }}>← Back to AI Lab</a>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, margin: "1rem 0 0.5rem" }}>🗺️ Your AI Rollout Blueprint</h1>
      <p style={{ color: "#8b949e", marginBottom: "2rem" }}>Phased implementation plan generated for your team.</p>
      {blueprint.map((step, i) => (
        <div key={i} style={{ background: "#161b22", borderRadius: 10, padding: "1.5rem", marginBottom: "1rem", borderLeft: "4px solid #1f6feb" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <h3 style={{ margin: 0, color: "#58a6ff" }}>{step.phase}</h3>
            <span style={{ background: "#238636", color: "#fff", padding: "0.25rem 0.75rem", borderRadius: 4, fontSize: "0.85rem" }}>{step.weeks} weeks</span>
          </div>
          <p style={{ color: "#c9d1d9", marginBottom: "0.75rem" }}>{step.description}</p>
          <div style={{ marginBottom: "0.5rem" }}>
            <strong style={{ color: "#8b949e", fontSize: "0.9rem" }}>Milestones:</strong>
            <ul style={{ margin: "0.25rem 0 0", paddingLeft: "1.25rem", color: "#c9d1d9" }}>
              {step.milestones.map((m, j) => <li key={j}>{m}</li>)}
            </ul>
          </div>
          <div>
            <strong style={{ color: "#8b949e", fontSize: "0.9rem" }}>Zion Tools:</strong>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.25rem" }}>
              {step.zionTools.map((t, j) => <span key={j} style={{ padding: "0.25rem 0.5rem", background: "#0d1117", borderRadius: 4, border: "1px solid #30363d", fontSize: "0.8rem" }}>{t}</span>)}
            </div>
          </div>
        </div>
      ))}
      <button onClick={() => setBlueprint(null)} style={{ width: "100%", padding: "0.75rem", fontSize: "1rem", fontWeight: 600, color: "#fff", background: "#1f6feb", border: "none", borderRadius: 8, cursor: "pointer", marginTop: "1rem" }}>
        🔄 Generate New Blueprint
      </button>
    </div>
  );
}
