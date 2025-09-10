import React, { createContext, useContext, useEffect, ReactNode } from "react";
import { _supabase } from "@/integrations/supabase/client";
export default function Page() {
,
  fetchNotifications: async () => {},
};
const _NotificationContext = createContext(defaultContext as NotificationContextType