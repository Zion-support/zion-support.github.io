

import React, { useEffect, useState } from 'react',
import React, { useEffect, useState } from 'react',;
;
import React, { useEffect, useState } from 'react',


export default function PrivacySettingsPage() {
  const [userId, setUserId] = useState(''),
  const [optOut, setOptOut] = useState(false),
  const [loading, setLoading] = useState(false),
  const [message, setMessage] = useState(''),
  const load = async () => {

    if (!userId) return;
    setLoading(true);
    setMessage('');
    const res = await fetch(`/api/fraud/settings/opt-out?userId=${encodeURIComponent(userId)}`);
    const json = await res.json();
    if (res.ok) setOptOut(!!json.monitoringContentAnalysisOptOut);
    else setMessage(json.error || 'Failed to load');
    setLoading(false)
  };