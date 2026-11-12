'use client';
import { useEffect, useState } from 'react';

export default function LiveAgentClock() {
  const [time, setTime] = useState('');

  // Live clock for agent banner
  useEffect(() => {
    const update = () => setTime(new Date().toLocaleTimeString('en-US', { timeZone: 'America/Sao_Paulo', hour12: true, hour: '2-digit', minute: '2-digit' }));
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return <>{time}</>;
}
