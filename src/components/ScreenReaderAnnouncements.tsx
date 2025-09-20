import React from "react";

interface ScreenReaderAnnouncementsProps {
  message: string;
}

export function ScreenReaderAnnouncements({ message }: ScreenReaderAnnouncementsProps) {
  return (
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
      {message}
    </div>
  );
}