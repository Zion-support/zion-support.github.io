'use client';
import { useRef, useState, type ComponentType } from 'react';
import ServiceMatchQuizIntro from './ServiceMatchQuizIntro';
export default function LazyServiceMatchQuiz() {
  const [Quiz, setQuiz] = useState<ComponentType<{ initialStarted?: boolean }> | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const pending = useRef(false);
  const start = async () => {
    if (pending.current) return;
    pending.current = true;
    setLoading(true); setError(false);
    try { const module = await import('./ServiceMatchQuiz'); setQuiz(() => module.default); }
    catch { setError(true); }
    finally { pending.current = false; setLoading(false); }
  };
  return Quiz ? <Quiz initialStarted /> : <ServiceMatchQuizIntro onStart={() => void start()} loading={loading} error={error} />;
}
