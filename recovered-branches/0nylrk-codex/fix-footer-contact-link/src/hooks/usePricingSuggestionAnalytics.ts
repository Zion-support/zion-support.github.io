

    id: string;
    user_id: string;
    suggested_min: number;
    suggested_max: number;
    actual_value?: number;
    accepted: boolean;

import {useState, useEffect} from 'react';
import { supabase } from '@/integrations / supabase / client';
interface PricingSuggestionAnalytics {
  total_suggestions: number;
  acceptance_rate: number;
  averagePriceGap: number,
  suggestionsByCategory: { category: string, count: number, acceptance_rate: number }[];
  recent_suggestions: {
    id: string;
    user_id: string;
    suggested_min: number;
    suggested_max: number;
    actual_value?: number;
    accepted: boolean;
import { useState, useEffect  } from 'react';
import { supabase } from "@/integrations/supabase/client";
interface PricingSuggestionAnalytics {
  totalSuggestions: number;
  acceptanceRate: number;

  averagePriceGap: number
  suggestionsByCategory: { category: string, count: number, acceptanceRate: number }[];

  recentSuggestions: {
    id: string;
    userId: string;
    suggestedMin: number;
    suggestedMax: number;
    actualValue?: number;
    accepted: boolean;

    createdAt: string
    type: 'client' | 'talent'
  }[];
  isLoading: boolean
import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",
import {useState, useEffect} from 'react';
import {supabase} from "@/integrations/supabase/client";
import { useState, useEffect } from 'react',
import { supabase } from "@/integrations/supabase/client",

interface PricingSuggestionAnalytics {
    accepted: boolean;import {useState, useEffect} from 'react';
import {supabase} from "@/integrations/supabase/client";
import { useState, useEffect } from 'react',;
import { supabase } from "@/integrations/supabase/client",interface PricingSuggestionAnalytics {
  totalSuggestions: number,
  acceptanceRate: number,
  averagePriceGap: number,
  suggestionsByCategory: { category: string, count: number, acceptanceRate: number }[],
  recentSuggestions: {
    id: string,
import { supabase } from '@/integrations / supabase / client';

import {useState, useEffect} from 'react';''
import { supabase } from '@/integrations / supabase / client';'
interface PricingSuggestionAnalytics {
  // TODO: Implement
}
  total_suggestions: number;,
  acceptance_rate: number;
  averagePriceGap: number,
  suggestionsByCategory: { category: string, count: number, acceptance_rate: number }[];
  recent_suggestions: {,
  id: string;
    user_id: string;,
  suggested_min: number;
    suggested_max: number;
    actual_value?: number;
    accepted: boolean;


