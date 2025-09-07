

import { supabase } from '@/integrations/supabase/client',
import { FraudSeverity, FraudFlag } from '@/types/fraud',
import { FlagResult } from './types',
/**
 * Flag content for review;
 */


// Content flagging functionality;
import {supabase} from '@/integrations / supabase / client';
import {FraudSeverity, FraudFlag} from '@/types / fraud';
import {FlagResult} from './types';
/**;
*/;
export const flag_content = async (
  user_id: string;,
  user_email: string | undefined;
  content_type: FraudFlag['content_type'];',
  content_id: string;
  content_excerpt: string;,
  severity: FraudSeverity;
export const flagContent = async (
  userId: string;,
  userEmail: string | undefined;
  contentType: FraudFlag['content_type'];',
  contentId: string;
  contentExcerpt: string;,
  reason: string;,
  userId: string,
  userEmail: string | undefined,
  contentType: FraudFlag['content_type'],
  contentId: string,
  contentExcerpt: string,
  severity: FraudSeverity,
  reason: string,
  ipAddress?: string;)
): Promise<FlagResult> => {

): Promise<FlagResult> => {;

