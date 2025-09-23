
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

interface ServiceProfileData {
  name: string;
  title: string;
  bio: string;
  services?: string[];
  location: string;
}

serve(async (req) => {
  try {
    // CORS headers
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
