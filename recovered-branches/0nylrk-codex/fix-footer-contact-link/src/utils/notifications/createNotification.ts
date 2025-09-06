
import { supabase } from "@/integrations/supabase/client";
import { CreateNotificationParams, CreateNotificationResult } from './types';
/**
 * Creates a notification for a user and optionally sends an email notification
 */
export async function createNotification({
  userId;
  title;
  message;
  type;
  relatedId;
    return { success: false, error }
  }
}
