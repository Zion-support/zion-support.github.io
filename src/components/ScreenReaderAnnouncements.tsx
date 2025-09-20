
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ScreenReaderAnnouncementsContextType {
  announce: (message: string) => void;
}

const ScreenReaderAnnouncementsContext = createContext<ScreenReaderAnnouncementsContextType | undefined>(undefined);

export function ScreenReaderAnnouncementsProvider({ children }: { children: React.ReactNode }) {
  const [announcement, setAnnouncement] = useState<string>("");

  const announce = (message: string) => {
    setAnnouncement(message);
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
        {announcement}
      </div>
    </ScreenReaderAnnouncementsContext.Provider>
  );
}

export function useScreenReaderAnnouncements() {
  const context = useContext(ScreenReaderAnnouncementsContext);
  if (context === undefined) {
    throw new Error("useScreenReaderAnnouncements must be used within a ScreenReaderAnnouncementsProvider");
  }
  return context;
}

