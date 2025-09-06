

] as const;
type StepKey = (typeof STEPS)[number]['key'];

const STEPS = [
  { key: 'profile', label: 'Profile completed' },
  { key: 'skills', label: 'Skills added' },
  { key: 'availability', label: 'Availability set' },
  { key: 'match', label: 'First match received' }] as const,

type StepKey = typeof STEPS[number]['key'];

export default function TalentDashboard() {
  const [completed, setCompleted] = useState<Record<StepKey, boolean>>({ profile: false, skills: false, availability: false, match: false }),
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem('onboarding.talent');
      if (raw) setCompleted(JSON.parse(raw))
    } catch {}

  }, []);
  useEffect(() => {


import { useEffect, useState } from 'react';
const STEPS = [;
  { key: 'profile', label: 'Profile completed' },;
  { key: 'skills', label: 'Skills added' },;
  { key: 'availability', label: 'Availability set' },;