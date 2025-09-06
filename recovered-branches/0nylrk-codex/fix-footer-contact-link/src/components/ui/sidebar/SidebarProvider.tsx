
import React, { createContext, useContext, useState } from "react";
interface SidebarContextType {
  isOpen: boolean;
  toggle: () => void;
  open: () => void;
  close: () => void
}

const SidebarContext = null;
  return (
    <SidebarContext.Provider value={{ isOpen, toggle, open, close }}>
      <div
        className={`grid ${isOpen ? "grid-cols-[auto_1fr]" : "grid-cols-[auto_1fr]"} min-h-screen w-full`}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}
