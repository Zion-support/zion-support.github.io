import React, { createContext, useContext, useState, useCallback } from 'react';

const NotificationContext = createContext({ notify: () => {}, position: 'top-right' });

export function NotificationProvider({ children, position = 'top-right' }) {
  const [messages, setMessages] = useState([]);

  const notify = useCallback((content, opts = {}) => {
    const id = Math.random().toString(36).slice(2);
    setMessages((prev) => [...prev, { id, content, opts }]);
    const ttl = opts.ttl ?? 4000;
    if (ttl > 0) setTimeout(() => setMessages((prev) => prev.filter((m) => m.id !== id)), ttl);
  }, []);

  return (
    <NotificationContext.Provider value={{ notify, position }}>
      {children}
      <NotificationContainer position={position} messages={messages} />
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  const ctx = useContext(NotificationContext);
  if (!ctx) throw new Error('useNotification must be used within NotificationProvider');
  return ctx;
}

function NotificationContainer({ position, messages }) {
  const posClass = position.includes('bottom') ? 'bottom-4' : 'top-4';
  const alignClass = position.includes('left') ? 'left-4' : position.includes('center') ? 'left-1/2 -translate-x-1/2' : 'right-4';
  return (
    <div className={`fixed ${posClass} ${alignClass} z-50 space-y-2`}> 
      {messages.map((m) => (
        <div key={m.id} className="px-4 py-2 rounded bg-black/80 text-white border border-white/10 shadow">
          {typeof m.content === 'string' ? m.content : m.content}
        </div>
      ))}
    </div>
  );
}