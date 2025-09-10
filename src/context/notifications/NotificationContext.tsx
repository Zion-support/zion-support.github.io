import React, { createContext, useContext, useEffect, ReactNode } from "react";
import { supabase } from "@/integrations/supabase/client";
export default function Page() {
,
  fetchNotifications: async () => {},
};
const NotificationContext = createContext(defaultContext as NotificationContextType