import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ScreenReaderAnnouncementsContextType {
  announce: (message: string) => void;
}

const ScreenReaderAnnouncementsContext = createContext<ScreenReaderAnnouncementsContextType | undefined>(undefined);

export function ScreenReaderAnnouncementsProvider({ children }: { children: ReactNode }) {
  const [announcements, setAnnouncements] = useState<string[]>([]);

  const announce = (message: string) => {
    setAnnouncements(prev => [...prev, message]);
    // Clear the announcement after a short delay
    setTimeout(() => {
      setAnnouncements(prev => prev.slice(1));
    }, 1000);
  };

  return (
    <ScreenReaderAnnouncementsContext.Provider value={{ announce }}>
      {children}
      <div
        aria-live="polite"
        aria-atomic="true"
        style={{
          position: "absolute",
          left: "-10000px",
          width: "1px",
          height: "1px",
          overflow: "hidden"
        }}
      >
        {announcements.map((announcement, index) => (
          <div key={index}>{announcement}</div>
        ))}
      </div>
    </ScreenReaderAnnouncementsContext.Provider>
  );
}

export function useScreenReaderAnnouncements() {
  const context = useContext(ScreenReaderAnnouncementsContext);
  if (context === undefined) {
    throw new Error('useScreenReaderAnnouncements must be used within a ScreenReaderAnnouncementsProvider');
  }
  return context;
}
